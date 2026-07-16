const storageKeys = {
  journal: "acios_mobile_journal_v1",
  settings: "acios_mobile_settings_v1"
};

const $ = (id) => document.getElementById(id);
let lastAnswerForJournal = null;
let conversationTurns = [];

function zurichTimestamp() {
  const date = new Date();
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/Zurich",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false
  }).formatToParts(date).reduce((acc, part) => {
    acc[part.type] = part.value;
    return acc;
  }, {});
  return `${parts.year}-${parts.month}-${parts.day} ${parts.hour}:${parts.minute}:${parts.second} Europe/Zurich`;
}

function requestCode() {
  return `${$("speed").value}${$("shape").value}${$("output").value}`;
}

function getQuestion() {
  return $("question").value.trim();
}

function detectPattern(text) {
  const q = text.toLowerCase();
  const firstPerson = /\b(i|me|my|mine)\b/.test(q);

  if (firstPerson && /(harass|threat|retaliat|afraid|unsafe|scared|assault|boss touched|i was hurt)/.test(q)) {
    return {
      level: "red",
      title: "First-person distress",
      first: "I am sorry this happened. Are you safe right now? Tell me only that first, then we go one step at a time.",
      rows: [
        ["Do now", "Check immediate safety"],
        ["Do not", "Do not write details here yet"],
        ["Next", "Answer: safe now? yes/no"]
      ]
    };
  }

  if (/(frozen|blocked|hold|reroute|dubai|unknown payer|third-party payer|sanction|listed|dual-use|reseller|end-user|russian)/.test(q)) {
    return {
      level: "red",
      title: "Sanctions / payment / diversion risk",
      first: "HOLD. Do not approve, book, ship, pay, route around, or comfort the business until the control path is clear.",
      rows: [
        ["First action", "Pause the step that changes the position"],
        ["Key facts", "Party, payer, route, owner/control, bank, goods/service"],
        ["Escalation", "Legal / sanctions owner if live or unclear"]
      ]
    };
  }

  if (/(agent|commission|consulting services|gift|hospitality|sponsor|donation|minister|government|public official|tender)/.test(q)) {
    return {
      level: "amber",
      title: "ABAC / third-party judgment call",
      first: "PAUSE BEFORE YES. The right output is a risk view and conditions, not approval wording.",
      rows: [
        ["Check", "Company policy and approval owner"],
        ["Facts", "Purpose, decision pending, value, public touchpoint"],
        ["Output", "Conditions memo or business-facing wording"]
      ]
    };
  }

  if (/(policy|procedure|template|investigation plan|risk assessment|training|board report|annual report|program|department|organization)/.test(q)) {
    return {
      level: "green",
      title: "Program / builder question",
      first: "Advisory mode. First check whether your company already has a governing document; then use ACI-OS to compare, improve, or fill gaps.",
      rows: [
        ["Calibrate", "Audience and purpose"],
        ["Standard", "Which framework or mandate governs?"],
        ["Output", "Outline, checklist, memo, or full draft"]
      ]
    };
  }

  return {
    level: "amber",
    title: "Unclear pattern",
    first: "I need the direction before depth. Give me the decision owner, timing, and whether you want a quick view, checklist, script, or memo.",
    rows: [
      ["Timing", $("deadline").value],
      ["Audience", $("audience").value],
      ["Output", requestCode()]
    ]
  };
}

function buildPrompt() {
  const q = getQuestion();
  if (!q) {
    showMessage("Add a situation first.");
    return;
  }
  conversationTurns = [];

  const prompt = [
    `${requestCode()} ${q}`,
    "",
    "Context for answer calibration:",
    `- Deadline: ${$("deadline").value}`,
    `- Audience: ${$("audience").value}`,
    "- No real names or confidential details included.",
    "- Start short. Ask only answer-changing questions if needed.",
    "- If this is live, safest next action first."
  ].join("\n");

  askBackend(prompt, { displayQuestion: q }).catch(() => {
    renderPreparedPrompt(prompt);
  });
}

function buildFollowUpPrompt(followUp) {
  const recentTurns = conversationTurns.slice(-3).map((turn, index) => [
    `Prior turn ${index + 1} question:`,
    turn.prompt,
    "",
    `Prior turn ${index + 1} answer:`,
    turn.answer
  ].join("\n")).join("\n\n---\n\n");

  return [
    `${requestCode()} ${followUp}`,
    "",
    "This is a follow-up in the same ACI-OS mobile conversation.",
    "Use the prior turn as context, but do not assume facts not stated.",
    "If the follow-up changes the risk direction, say so clearly.",
    "",
    recentTurns,
    "",
    "Context for answer calibration:",
    `- Deadline: ${$("deadline").value}`,
    `- Audience: ${$("audience").value}`,
    "- No real names or confidential details included.",
    "- Start short. Ask only answer-changing questions if needed.",
    "- If this is live, safest next action first."
  ].join("\n");
}

function continueConversation() {
  const followUp = $("follow-up")?.value.trim();
  if (!followUp) return;
  if (!conversationTurns.length) {
    showMessage("Ask the first question first.");
    return;
  }
  const prompt = buildFollowUpPrompt(followUp);
  askBackend(prompt, { displayQuestion: followUp, followUp }).catch(() => {
    renderConversation(`Could not send the follow-up. Copy the prepared prompt below if needed.`, prompt);
  });
}

function splitMarkdownRow(line) {
  return line.trim().replace(/^\|/, "").replace(/\|$/, "").split("|").map((cell) => cell.trim());
}

function isMarkdownSeparator(line) {
  const cells = splitMarkdownRow(line);
  return cells.length > 1 && cells.every((cell) => /^:?-{3,}:?$/.test(cell));
}

function renderMarkdownTable(lines) {
  const headers = splitMarkdownRow(lines[0]);
  const rows = lines.slice(2).map(splitMarkdownRow).filter((row) => row.some(Boolean));
  if (!headers.length || !rows.length) {
    return `<div class="answer-text">${escapeHtml(lines.join("\n"))}</div>`;
  }

  return `
    <div class="answer-table-wrap">
      <table class="answer-table">
        <thead>
          <tr>${headers.map((header) => `<th>${escapeHtml(header)}</th>`).join("")}</tr>
        </thead>
        <tbody>
          ${rows.map((row) => `
            <tr>
              ${headers.map((header, index) => `
                <td data-label="${escapeAttr(header)}">${escapeHtml(row[index] || "")}</td>
              `).join("")}
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `;
}

function renderAnswerContent(value) {
  const lines = String(value || "").replace(/\r\n/g, "\n").split("\n");
  const blocks = [];
  let paragraph = [];

  function flushParagraph() {
    const text = paragraph.join("\n").trim();
    if (text) blocks.push(`<div class="answer-text">${escapeHtml(text)}</div>`);
    paragraph = [];
  }

  for (let i = 0; i < lines.length; i += 1) {
    if (lines[i].includes("|") && lines[i + 1] && isMarkdownSeparator(lines[i + 1])) {
      flushParagraph();
      const tableLines = [lines[i], lines[i + 1]];
      i += 2;
      while (i < lines.length && lines[i].includes("|") && lines[i].trim()) {
        tableLines.push(lines[i]);
        i += 1;
      }
      i -= 1;
      blocks.push(renderMarkdownTable(tableLines));
      continue;
    }
    paragraph.push(lines[i]);
  }

  flushParagraph();
  return blocks.join("") || `<div class="answer-text"></div>`;
}

function renderPreparedPrompt(prompt) {
  lastAnswerForJournal = null;
  updateLearningControls();
  const gptLink = loadSettings().gptLink || "";
  const openAction = gptLink
    ? `<a class="primary nav-link" href="${escapeAttr(gptLink)}" target="_blank" rel="noreferrer">Open GPT</a>`
    : `<button class="primary" data-panel-jump="settings-panel">Set GPT link</button>`;
  $("result").innerHTML = `
    <strong>Prepared for GPT</strong>
    <p class="helper">Direct Ask is unavailable or returned an error. Copy this prompt into Chief Consigliere GPT.</p>
    <div class="prompt-box">${escapeHtml(prompt)}</div>
    <div class="actions">
      <button class="secondary" data-copy="${escapeAttr(prompt)}">Copy for GPT</button>
      ${openAction}
    </div>
  `;
}

async function askBackend(prompt, options = {}) {
  if (conversationTurns.length) {
    renderConversation(`Thinking about: ${options.displayQuestion || "follow-up"}...`);
  } else {
    $("result").innerHTML = `
      <strong>Asking ACI-OS...</strong>
      <p class="helper">If the local backend is not running, I will switch to GPT-copy mode.</p>
    `;
  }

  const response = await fetch("/api/ask", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ prompt })
  });

  if (!response.ok) {
    throw new Error("Backend unavailable");
  }

  const data = await response.json();
  lastAnswerForJournal = {
    prompt,
    answer: data.answer || "No answer returned.",
    question: options.displayQuestion || prompt.split(/\r?\n/).find(Boolean) || "Question"
  };
  conversationTurns.push(lastAnswerForJournal);
  if (conversationTurns.length > 20) conversationTurns = conversationTurns.slice(-20);
  renderConversation();
}

function fullDiscussionText() {
  return conversationTurns.map((turn, index) => [
    `TURN ${index + 1} QUESTION`,
    turn.question || "Question",
    "",
    `TURN ${index + 1} ANSWER`,
    turn.answer || ""
  ].join("\n")).join("\n\n---\n\n");
}

function renderConversation(statusText = "", fallbackPrompt = "") {
  const discussion = conversationTurns.length ? `
    <div class="chat-stream" aria-label="full discussion">
      ${conversationTurns.map((turn, index) => `
        <article class="chat-pair">
          <div class="message user-message">
            <div class="message-label">You · Turn ${index + 1}</div>
            <div class="message-body">${escapeHtml(turn.question || "Question")}</div>
          </div>
          <div class="message assistant-message">
            <div class="message-label">ACI-OS</div>
            <div class="answer-box message-body">${renderAnswerContent(turn.answer || "")}</div>
          </div>
        </article>
      `).join("")}
    </div>
  ` : "";

  const fallback = fallbackPrompt
    ? `<div class="prompt-box">${escapeHtml(fallbackPrompt)}</div>
       <div class="actions"><button class="secondary" data-copy="${escapeAttr(fallbackPrompt)}">Copy prompt</button></div>`
    : "";

  $("result").innerHTML = `
    <strong>ACI-OS discussion</strong>
    ${statusText ? `<p class="helper thinking">${escapeHtml(statusText)}</p>` : ""}
    ${discussion}
    <div class="continue-box">
      <label class="field-label" for="follow-up">Continue this discussion</label>
      <textarea id="follow-up" rows="3" placeholder="Example: draft the short message to my CEO."></textarea>
      <p class="helper">Enter sends. Shift+Enter adds a new line.</p>
      <button class="primary full" id="continue-btn">Continue</button>
    </div>
    ${fallback}
  `;
  $("result").scrollIntoView({ behavior: "smooth", block: "nearest" });
  $("result").scrollTop = $("result").scrollHeight;
  updateLearningControls();
}

function routerPreview() {
  const q = getQuestion();
  if (!q) {
    showMessage("Add a situation first.");
    return;
  }
  const pattern = detectPattern(q);
  const rows = pattern.rows.map(([a, b]) => `<tr><th>${escapeHtml(a)}</th><td>${escapeHtml(b)}</td></tr>`).join("");
  $("result").innerHTML = `
    <div class="risk ${pattern.level}">${escapeHtml(pattern.title)}</div>
    <p><strong>${escapeHtml(pattern.first)}</strong></p>
    <table class="check-table">
      <tbody>${rows}</tbody>
    </table>
    <p class="helper">Local router preview only. Use Chief Consigliere GPT for the real answer.</p>
  `;
}

function showMessage(message) {
  $("result").innerHTML = `<p class="empty">${escapeHtml(message)}</p>`;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function escapeAttr(value) {
  return escapeHtml(value).replaceAll("\n", "&#10;");
}

function loadJournal() {
  try {
    return JSON.parse(localStorage.getItem(storageKeys.journal)) || [];
  } catch {
    return [];
  }
}

function saveJournal(entries) {
  localStorage.setItem(storageKeys.journal, JSON.stringify(entries));
}

function renderJournal() {
  const entries = loadJournal();
  if (!entries.length) {
    $("journal-list").innerHTML = `<p class="empty">No local entries yet.</p>`;
    return;
  }
  $("journal-list").innerHTML = entries.map((entry) => `
    <article class="journal-entry">
      <time>${escapeHtml(entry.timestamp)}</time>
      <div>${escapeHtml(entry.note)}</div>
    </article>
  `).join("");
}

async function addJournalEntry() {
  const note = $("journal-note").value.trim();
  if (!note) return;
  const timestamp = zurichTimestamp();
  const entries = loadJournal();
  entries.unshift({ timestamp, note });
  saveJournal(entries);
  $("journal-note").value = "";
  renderJournal();
  const status = $("journal-save-status");
  if (status) status.textContent = "Sending learning note...";
  try {
    const result = await postLearning({
      timestamp,
      source: "ACI-OS mobile/web app manual journal",
      verdict: "manual learning note",
      question: note,
      answerFirstLine: "",
      worked: "",
      failed: note,
      fix: "",
      discussion: note,
      calibration: currentCalibration()
    });
    if (status) status.textContent = `Learning note sent to ${result.file}.`;
  } catch {
    if (status) status.textContent = "Saved locally, but not sent to ACI-OS. Check local server and retry.";
  }
}

function valueOf(id) {
  return $(id)?.value?.trim() || "";
}

function setDisabled(id, disabled) {
  const element = $(id);
  if (element) element.disabled = disabled;
}

function updateLearningControls() {
  const latest = $("copy-latest-answer");
  const full = $("copy-full-discussion");
  const save = $("save-answer-journal");
  const hasAnswer = Boolean(lastAnswerForJournal);

  if (latest) latest.dataset.copy = hasAnswer ? lastAnswerForJournal.answer || "" : "";
  if (full) full.dataset.copy = hasAnswer ? fullDiscussionText() : "";

  setDisabled("copy-latest-answer", !hasAnswer);
  setDisabled("copy-full-discussion", !hasAnswer);
  setDisabled("save-answer-journal", !hasAnswer);
  if (save && hasAnswer) save.textContent = "Send learning";

  const status = $("answer-save-status");
  if (status && !hasAnswer) {
    status.textContent = "Ask first, then send learning into the local ACI-OS inbox. Pattern facts only.";
  }
}

function currentCalibration() {
  return {
    speed: $("speed").value,
    shape: $("shape").value,
    output: $("output").value,
    deadline: $("deadline").value,
    audience: $("audience").value
  };
}

function makeAnswerJournalNote(prompt, answer) {
  const firstPromptLine = prompt.split(/\r?\n/).find(Boolean) || "Pattern ask";
  const firstAnswerLine = answer.split(/\r?\n/).find((line) => line.trim()) || "Answer saved";
  const verdict = valueOf("feedback-verdict") || "Good";
  const worked = valueOf("feedback-worked") || "[not stated]";
  const failed = valueOf("feedback-failed") || "[not stated]";
  const fix = valueOf("feedback-fix") || "[not stated]";
  return [
    `LEARNING | verdict: ${verdict} | sent to ACI-OS improvement inbox`,
    `Question pattern: ${firstPromptLine.slice(0, 260)}`,
    `Answer first line: ${firstAnswerLine.slice(0, 260)}`,
    `What worked: ${worked}`,
    `What failed: ${failed}`,
    `Suggested fix: ${fix}`,
    "Full discussion: sent to ACI-OS inbox; this local journal card shows a short summary only",
    "Confidential? no - saved as pattern feedback only"
  ].join("\n");
}

function makeLearningPayload() {
  if (!lastAnswerForJournal) return;
  const firstPromptLine = lastAnswerForJournal.prompt.split(/\r?\n/).find(Boolean) || "Pattern ask";
  const firstAnswerLine = lastAnswerForJournal.answer.split(/\r?\n/).find((line) => line.trim()) || "Answer saved";
  return {
    timestamp: zurichTimestamp(),
    source: "ACI-OS mobile/web app answer feedback",
    verdict: valueOf("feedback-verdict") || "Good",
    question: firstPromptLine,
    answerFirstLine: firstAnswerLine,
    worked: valueOf("feedback-worked") || "[not stated]",
    failed: valueOf("feedback-failed") || "[not stated]",
    fix: valueOf("feedback-fix") || "[not stated]",
    discussion: fullDiscussionText(),
    calibration: currentCalibration()
  };
}

async function postLearning(payload) {
  const response = await fetch("/api/learning", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(payload)
  });
  if (!response.ok) {
    const data = await response.json().catch(() => ({}));
    throw new Error(data.error || "Could not send learning signal.");
  }
  return response.json();
}

async function saveLastAnswerToJournal() {
  if (!lastAnswerForJournal) return;
  const payload = makeLearningPayload();
  const result = await postLearning(payload);
  const entries = loadJournal();
  entries.unshift({
    timestamp: payload.timestamp,
    note: makeAnswerJournalNote(lastAnswerForJournal.prompt, lastAnswerForJournal.answer)
  });
  saveJournal(entries);
  renderJournal();
  const status = $("answer-save-status");
  if (status) {
    status.textContent = `Learning sent to ${result.file}. Full discussion was sent; this screen shows a short summary.`;
    setTimeout(() => {
      if (status.textContent.startsWith("Learning sent")) {
        status.textContent = "Saved as a system-improvement signal. Codex will process accepted lessons into rules, tests, docs, or app changes.";
      }
    }, 3000);
  }
}

function exportJournal() {
  const entries = loadJournal();
  const markdown = entries.map((entry) => `JOURNAL | ${entry.timestamp} | ${entry.note}`).join("\n\n");
  navigator.clipboard.writeText(markdown || "No entries.").then(() => {
    alert("Journal copied to clipboard.");
  });
}

async function loadBasis() {
  const target = $("basis-list");
  if (!target) return;

  try {
    const response = await fetch("/api/basis", { cache: "no-store" });
    if (!response.ok) throw new Error("basis unavailable");
    const data = await response.json();
    const rows = (data.files || []).map((file) => `
      <tr>
        <td data-label="Status">${escapeHtml(file.status || "unknown")}</td>
        <td data-label="File">${escapeHtml(file.label || file.path)}</td>
        <td data-label="Path">${escapeHtml(file.path || "")}</td>
      </tr>
    `).join("");

    target.innerHTML = `
      <p class="helper">${escapeHtml(data.purpose || "Selected local knowledge whitelist.")}</p>
      <table class="answer-table basis-table">
        <thead>
          <tr>
            <th>Status</th>
            <th>File</th>
            <th>Path</th>
          </tr>
        </thead>
        <tbody>${rows}</tbody>
      </table>
      <p class="helper">Loaded context: ${Number(data.used || 0).toLocaleString()} / ${Number(data.maxTotal || 0).toLocaleString()} characters.</p>
    `;
  } catch {
    target.innerHTML = `<p class="empty">Basis list unavailable. Start the Direct Ask server, then refresh.</p>`;
  }
}

function loadSettings() {
  try {
    return JSON.parse(localStorage.getItem(storageKeys.settings)) || {};
  } catch {
    return {};
  }
}

function saveSettings() {
  const settings = { gptLink: $("gpt-link").value.trim() };
  localStorage.setItem(storageKeys.settings, JSON.stringify(settings));
  alert("Settings saved locally.");
}

function setupCopyDelegation() {
  document.body.addEventListener("click", async (event) => {
    const button = event.target.closest("[data-copy]");
    if (button) {
      const originalText = button.textContent;
      navigator.clipboard.writeText(button.dataset.copy).then(() => {
        button.textContent = "Copied";
        setTimeout(() => { button.textContent = originalText; }, 1200);
      });
      return;
    }

    const saveAnswer = event.target.closest("#save-answer-journal");
    if (saveAnswer) {
      const originalText = saveAnswer.textContent;
      saveAnswer.textContent = "Sending...";
      try {
        await saveLastAnswerToJournal();
        saveAnswer.textContent = "Send learning";
      } catch (error) {
        const status = $("answer-save-status");
        if (status) status.textContent = "Could not send to ACI-OS. Check that the local server is running, then retry.";
        saveAnswer.textContent = originalText;
      }
      return;
    }

    const continueButton = event.target.closest("#continue-btn");
    if (continueButton) {
      continueConversation();
      return;
    }

    const jump = event.target.closest("[data-panel-jump]");
    if (!jump) return;
    switchPanel(jump.dataset.panelJump);
  });
}

function setupKeyboardSubmit() {
  document.body.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" || event.shiftKey) return;
    if (event.target?.id === "question") {
      event.preventDefault();
      buildPrompt();
      return;
    }
    if (event.target?.id === "follow-up") {
      event.preventDefault();
      continueConversation();
    }
  });
}

function setupVerdictChips() {
  document.querySelectorAll(".verdict-chip").forEach((chip) => {
    chip.addEventListener("click", () => {
      document.querySelectorAll(".verdict-chip").forEach((item) => item.classList.remove("selected"));
      chip.classList.add("selected");
      const verdict = $("feedback-verdict");
      if (verdict) verdict.value = chip.dataset.verdict || "Good";
    });
  });
}

function switchPanel(panelId) {
  document.querySelectorAll(".tab").forEach((item) => item.classList.remove("active"));
  document.querySelectorAll(".panel").forEach((panel) => panel.classList.remove("active"));
  const tab = document.querySelector(`.tab[data-panel="${panelId}"]`);
  if (tab) tab.classList.add("active");
  $(panelId).classList.add("active");
}

function setupTabs() {
  document.querySelectorAll(".tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      switchPanel(tab.dataset.panel);
    });
  });
}

function boot() {
  $("local-time").textContent = zurichTimestamp();
  setInterval(() => { $("local-time").textContent = zurichTimestamp(); }, 1000);
  $("prepare-btn").addEventListener("click", buildPrompt);
  $("preview-btn").addEventListener("click", routerPreview);
  $("save-journal-btn").addEventListener("click", addJournalEntry);
  $("export-btn").addEventListener("click", exportJournal);
  $("save-settings-btn").addEventListener("click", saveSettings);
  $("gpt-link").value = loadSettings().gptLink || "";
  setupTabs();
  setupCopyDelegation();
  setupKeyboardSubmit();
  setupVerdictChips();
  renderJournal();
  loadBasis();
  updateLearningControls();

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./service-worker.js").catch(() => {});
  }
}

boot();
