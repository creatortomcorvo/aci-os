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
  return `${$("speed").value}${shapeCode()}${$("output").value}`;
}

function shapeCode() {
  const shape = $("shape").value;
  if (shape === "Verdict") return "A";
  if (shape === "Plan") return "C";
  return "B";
}

function displayShape() {
  return $("shape").value || "Auto";
}

function displayAudience() {
  return $("audience").value || "Auto";
}

function routeSummary(calibration = currentCalibration()) {
  return `${calibration.audience || "Auto"} - ${calibration.shape || "Auto"}`;
}

function getQuestion() {
  return $("question").value.trim();
}

function detectDeadlineValue(text) {
  const q = String(text || "").toLowerCase();
  if (/(now|immediate|urgent|today|tonight|in \d+ minutes|in \d+ hours|before lunch|this afternoon|this morning)/.test(q)) return "Hours";
  if (/(tomorrow|friday|monday|this week|next week|in \d+ days)/.test(q)) return "Days";
  return "Auto";
}

function updateDetectedDeadline(text = getQuestion()) {
  const detected = detectDeadlineValue(text);
  const chip = $("detected-deadline-chip");
  if (!chip) return detected;
  if (detected === "Auto") {
    chip.hidden = true;
    $("deadline").value = "Auto";
    return detected;
  }
  $("deadline").value = detected;
  chip.hidden = false;
  chip.textContent = `Deadline detected: ${detected}`;
  return detected;
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

function splitProfileList(value) {
  return String(value || "")
    .split(/[,;\n]/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function profileChipValues(group) {
  return Array.from(document.querySelectorAll(`.profile-chip[data-profile-group="${group}"].selected`))
    .map((chip) => chip.dataset.value)
    .filter(Boolean);
}

function currentProfile() {
  return {
    industries: profileChipValues("industries"),
    operatingJurisdictions: splitProfileList($("profile-operating")?.value),
    exposureJurisdictions: splitProfileList($("profile-exposure")?.value)
  };
}

function profileContextLines() {
  const profile = currentProfile();
  const format = (items) => items.length ? items.join(", ") : "not set";
  return [
    "User context:",
    `- Industries: ${format(profile.industries)}`,
    `- Operating jurisdictions: ${format(profile.operatingJurisdictions)}`,
    `- Exposure jurisdictions: ${format(profile.exposureJurisdictions)}`,
    "- Use profile to calibrate examples, vertical patterns, and jurisdiction depth.",
    "- Profile never narrows distress, escalation, sanctions, or safety behavior."
  ];
}

function buildPrompt() {
  const q = getQuestion();
  if (!q) {
    showMessage("Add a situation first.");
    return;
  }
  conversationTurns = [];
  const detectedDeadline = updateDetectedDeadline(q);

  const prompt = [
    `${requestCode()} ${q}`,
    "",
    "Context for answer calibration:",
    `- Audience: ${displayAudience()}`,
    `- Shape: ${displayShape()}`,
    `- Detected deadline: ${detectedDeadline}`,
    ...profileContextLines(),
    "- No real names or confidential details included.",
    "- Start short. Ask only answer-changing questions if needed.",
    "- If this is live, safest next action first.",
    "- If shape is Auto, classify the question before answering."
  ].join("\n");

  askBackend(prompt, { displayQuestion: q }).catch((error) => {
    renderPreparedPrompt(prompt, error);
  });
}

function buildFollowUpPrompt(followUp) {
  const detectedDeadline = updateDetectedDeadline(followUp);
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
    `- Audience: ${displayAudience()}`,
    `- Shape: ${displayShape()}`,
    `- Detected deadline: ${detectedDeadline}`,
    ...profileContextLines(),
    "- No real names or confidential details included.",
    "- Start short. Ask only answer-changing questions if needed.",
    "- If this is live, safest next action first.",
    "- If shape is Auto, classify the question before answering."
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
  askBackend(prompt, { displayQuestion: followUp, followUp }).catch((error) => {
    renderPreparedPrompt(prompt, error);
  });
}

function resetFeedbackForm() {
  ["feedback-worked", "feedback-failed", "feedback-fix"].forEach((id) => {
    const field = $(id);
    if (field) field.value = "";
  });
  const verdict = $("feedback-verdict");
  if (verdict) verdict.value = "Good";
  document.querySelectorAll(".verdict-chip").forEach((chip) => {
    chip.classList.toggle("selected", chip.dataset.verdict === "Good");
  });
}

function initialComposerHtml() {
  return `
    <div class="initial-composer">
      <p class="helper">Type here. Enter sends. Shift+Enter adds a new line.</p>
      <label class="sr-only" for="question">Question</label>
      <textarea id="question" rows="7" placeholder="Example: CEO wants a yes/no answer today on a distributor payment with a new payer."></textarea>
      <div class="button-row">
        <button id="prepare-btn" class="primary">Ask</button>
        <button id="preview-btn" class="secondary">Router preview</button>
      </div>
    </div>
  `;
}

function bindQuestionInput() {
  const question = $("question");
  if (!question) return;
  question.addEventListener("input", () => updateDetectedDeadline(getQuestion()));
}

function bindAskControls() {
  bindQuestionInput();
  $("prepare-btn")?.addEventListener("click", buildPrompt);
  $("preview-btn")?.addEventListener("click", routerPreview);
}

function startNewTask() {
  conversationTurns = [];
  lastAnswerForJournal = null;
  resetFeedbackForm();
  const result = $("result");
  if (result) result.innerHTML = initialComposerHtml();
  updateDetectedDeadline("");
  updateLearningControls();
  bindAskControls();
  switchPanel("ask-panel");
  $("question")?.focus();
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

function getVerdictKind(line) {
  const text = String(line || "").trim();
  const lower = text.toLowerCase();
  if (!text) return "";
  if (text.startsWith("\u{1F534}") || /^(red|stop|escalation mandatory)\b/i.test(text)) return "red";
  if (text.startsWith("\u{1F7E0}") || /^(amber|hold|pause)\b/i.test(text)) return "amber";
  if (text.startsWith("\u{1F7E2}") || /^(green|advisory)\b/i.test(text)) return "green";
  return "";
}

function renderAnswerContent(value) {
  const lines = String(value || "").replace(/\r\n/g, "\n").split("\n");
  const blocks = [];
  let paragraph = [];

  function flushParagraph() {
    const paragraphLines = paragraph.join("\n").split("\n");
    let textBuffer = [];

    function flushTextBuffer() {
      const text = textBuffer.join("\n").trim();
      if (text) blocks.push(`<div class="answer-text">${escapeHtml(text)}</div>`);
      textBuffer = [];
    }

    paragraphLines.forEach((line) => {
      const kind = getVerdictKind(line);
      if (kind) {
        flushTextBuffer();
        blocks.push(`<div class="verdict-banner verdict-${kind}">${escapeHtml(line.trim())}</div>`);
        return;
      }
      textBuffer.push(line);
    });

    flushTextBuffer();
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

async function readBackendError(response) {
  const text = await response.text().catch(() => "");
  if (!text) return {};
  try {
    return JSON.parse(text);
  } catch {
    return { error: text.slice(0, 500) };
  }
}

function makeBackendError(response, payload = {}) {
  const message = payload.error || payload.message || `Direct Ask failed (${response.status}).`;
  const error = new Error(message);
  error.status = response.status;
  error.statusText = response.statusText || "";
  error.serverMessage = message;
  error.payload = payload;
  return error;
}

function directAskDiagnostic(error) {
  const status = error && error.status ? `${error.status} ${error.statusText || ""}`.trim() : "network / browser error";
  const serverMessage = (error && (error.serverMessage || error.message)) || "No backend error message returned.";
  const rows = [
    ["Status", status],
    ["Backend message", serverMessage]
  ];

  if (error && error.status === 401) {
    return {
      title: ">_< Direct Ask is locked.",
      body: "Unlock the pilot in Settings, then ask again.",
      rows: [["Next action", "Use the pilot passcode in the app Settings."], ...rows]
    };
  }

  if (error && error.status === 423) {
    return {
      title: ">_< Vercel access lock is not configured.",
      body: "The public backend requires a pilot passcode and cookie secret before it can call OpenAI.",
      rows: [["Next action", "Add ACI_OS_PILOT_PASSCODE and ACI_OS_PILOT_COOKIE_SECRET in Vercel, then redeploy."], ...rows]
    };
  }

  if (error && error.status === 404) {
    return {
      title: ">_< Vercel API route was not found.",
      body: "The app could not reach /api/ask on this deployment.",
      rows: [["Next action", "Check Vercel root directory and open /api/health on the deployed domain."], ...rows]
    };
  }

  if (error && error.status === 503) {
    return {
      title: ">_< OpenAI is not configured for this deployment.",
      body: "The backend is reachable, but it cannot call OpenAI.",
      rows: [["Next action", "Check OPENAI_API_KEY and OPENAI_MODEL in Vercel, then redeploy."], ...rows]
    };
  }

  if (error && error.status === 429) {
    return {
      title: ">_< Direct Ask hit a quota or rate limit.",
      body: "The app reached the backend, but the model provider rejected the request.",
      rows: [["Next action", "Check OpenAI billing, limits, and Vercel logs."], ...rows]
    };
  }

  return {
    title: ">_< Direct Ask returned an error.",
    body: "The app could not complete the backend call. The diagnostic below is the part we need now.",
    rows: [["Next action", "Open /api/health on this deployment and check Vercel logs if needed."], ...rows]
  };
}

function diagnosticRowsHtml(rows) {
  return rows.map(([label, value]) => `
    <tr>
      <th>${escapeHtml(label)}</th>
      <td>${escapeHtml(String(value || ""))}</td>
    </tr>
  `).join("");
}

function renderPreparedPrompt(prompt, error = null) {
  lastAnswerForJournal = null;
  updateLearningControls();
  const gptLink = loadSettings().gptLink || "";
  const diagnostic = directAskDiagnostic(error);
  const openAction = gptLink
    ? `<a class="primary nav-link" href="${escapeAttr(gptLink)}" target="_blank" rel="noreferrer">Open GPT</a>`
    : `<button class="primary" data-panel-jump="settings-panel">Set GPT link</button>`;
  $("result").innerHTML = `
    <strong>Prepared for GPT</strong>
    <div class="diagnostic-card">
      <div class="diagnostic-title">${escapeHtml(diagnostic.title)}</div>
      <p>${escapeHtml(diagnostic.body)}</p>
      <table class="diagnostic-table">
        <tbody>${diagnosticRowsHtml(diagnostic.rows)}</tbody>
      </table>
    </div>
    <p class="helper">Copy this prompt into Chief Consigliere GPT while Direct Ask is being fixed.</p>
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
    const payload = await readBackendError(response);
    throw makeBackendError(response, payload);
  }

  const data = await response.json().catch(() => ({}));
  if (data && data.ok === false) {
    const error = new Error(data.error || "Direct Ask returned no answer.");
    error.serverMessage = data.error || "Direct Ask returned no answer.";
    error.payload = data;
    throw error;
  }
  lastAnswerForJournal = {
    prompt,
    answer: data.answer || "No answer returned.",
    question: options.displayQuestion || prompt.split(/\r?\n/).find(Boolean) || "Question",
    calibration: currentCalibration()
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
            <div class="routed-chip">Routed: ${escapeHtml(routeSummary(turn.calibration))}</div>
            <div class="answer-box message-body">${renderAnswerContent(turn.answer || "")}</div>
            <div class="answer-card-actions">
              <button type="button" class="tiny-action" data-feedback-event="thumb_up" data-turn="${index}">Good</button>
              <button type="button" class="tiny-action" data-feedback-event="thumb_down" data-turn="${index}">Issue</button>
              <button type="button" class="tiny-action" data-copy="${escapeAttr(turn.answer || "")}">Copy</button>
            </div>
          </div>
        </article>
      `).join("")}
    </div>
  ` : "";

  const postActions = conversationTurns.length ? `
    <div class="post-answer-actions">
      <button type="button" class="secondary" data-post-action="deeper">Deeper</button>
      <button type="button" class="secondary" data-post-action="checklist">Make checklist</button>
      <button type="button" class="secondary" data-post-action="memo">Turn into memo</button>
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
    ${postActions}
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
    if (status) status.textContent = "Saved locally in this browser. Local repo learning works only when the backend is running; external pilot needs a secure backend.";
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
    shape: displayShape(),
    output: $("output").value,
    deadline: $("deadline").value,
    audience: displayAudience(),
    requestCode: requestCode(),
    profile: currentProfile()
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

function postActionPrompt(action) {
  if (action === "deeper") return "Go one layer deeper. Keep the first line short, then add the missing reasoning.";
  if (action === "checklist") return "Turn the last answer into a practical numbered checklist with owners, evidence, and next actions.";
  if (action === "memo") return "Turn the last answer into a short memo skeleton with purpose, facts, risk view, decision needed, and sources.";
  return "";
}

async function sendQuickFeedback(eventType, turnIndex) {
  const turn = conversationTurns[Number(turnIndex)] || lastAnswerForJournal;
  if (!turn) return;
  await postLearning({
    timestamp: zurichTimestamp(),
    source: "ACI-OS mobile/web app quick feedback",
    event_type: eventType,
    verdict: eventType === "thumb_up" ? "Good" : "Issue",
    question: turn.question || "Question",
    answerFirstLine: (turn.answer || "").split(/\r?\n/).find((line) => line.trim()) || "Answer saved",
    worked: eventType === "thumb_up" ? "One-tap positive signal." : "[not stated]",
    failed: eventType === "thumb_down" ? "One-tap issue signal. Builder details not provided." : "[not stated]",
    fix: "[not stated]",
    discussion: fullDiscussionText(),
    calibration: turn.calibration || currentCalibration()
  });
}

async function saveLastAnswerToJournal() {
  if (!lastAnswerForJournal) return;
  const payload = makeLearningPayload();
  let result = null;
  let sentToRepo = false;
  try {
    result = await postLearning(payload);
    sentToRepo = true;
  } catch {
    sentToRepo = false;
  }
  const entries = loadJournal();
  entries.unshift({
    timestamp: payload.timestamp,
    note: makeAnswerJournalNote(lastAnswerForJournal.prompt, lastAnswerForJournal.answer)
  });
  saveJournal(entries);
  renderJournal();
  const status = $("answer-save-status");
  if (status) {
    status.textContent = sentToRepo
      ? `Learning sent to ${result.file}. Full discussion was sent; this screen shows a short summary.`
      : "Saved locally in this browser. To improve ACI-OS from external pilot feedback, copy full discussion and send it to Codex until remote learning is built.";
    setTimeout(() => {
      if (sentToRepo && status.textContent.startsWith("Learning sent")) {
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
    target.innerHTML = `<p class="empty">Basis list unavailable. In external pilot mode, local knowledge files are not connected. In local mode, start the Direct Ask server, then refresh.</p>`;
  }
}

function loadSettings() {
  try {
    return JSON.parse(localStorage.getItem(storageKeys.settings)) || {};
  } catch {
    return {};
  }
}

function setProfileChips(values = []) {
  const selected = new Set(values);
  document.querySelectorAll(".profile-chip").forEach((chip) => {
    chip.classList.toggle("selected", selected.has(chip.dataset.value));
  });
}

function loadProfileSettings(settings = {}) {
  const profile = settings.profile || {};
  setProfileChips(profile.industries || []);
  const operating = $("profile-operating");
  const exposure = $("profile-exposure");
  if (operating) operating.value = (profile.operatingJurisdictions || []).join(", ");
  if (exposure) exposure.value = (profile.exposureJurisdictions || []).join(", ");
}

function saveSettings() {
  const settings = {
    gptLink: $("gpt-link").value.trim(),
    profile: currentProfile()
  };
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

    const postAction = event.target.closest("[data-post-action]");
    if (postAction) {
      const prompt = postActionPrompt(postAction.dataset.postAction);
      const followUp = $("follow-up");
      if (followUp && prompt) {
        followUp.value = prompt;
        continueConversation();
      }
      return;
    }

    const feedbackEvent = event.target.closest("[data-feedback-event]");
    if (feedbackEvent) {
      const originalText = feedbackEvent.textContent;
      feedbackEvent.textContent = "Saved";
      try {
        await sendQuickFeedback(feedbackEvent.dataset.feedbackEvent, feedbackEvent.dataset.turn);
      } catch {
        feedbackEvent.textContent = "Retry";
        return;
      }
      setTimeout(() => { feedbackEvent.textContent = originalText; }, 1200);
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

function updateAutoState() {
  const auto = $("auto-pill");
  if (!auto) return;
  const isAuto = $("audience").value === "Auto" && $("shape").value === "Auto";
  auto.classList.toggle("active", isAuto);
  auto.textContent = isAuto ? "Auto - router decides" : "Auto off - tap to release";
}

function setChipValue(group, value) {
  const input = $(group);
  if (input) input.value = value;
  document.querySelectorAll(`[data-chip-group="${group}"] .choice-chip`).forEach((chip) => {
    chip.classList.toggle("selected", chip.dataset.value === value);
  });
  updateAutoState();
}

function setupChoiceChips() {
  document.querySelectorAll(".choice-chip").forEach((chip) => {
    chip.addEventListener("click", () => {
      const group = chip.closest("[data-chip-group]")?.dataset.chipGroup;
      if (!group) return;
      setChipValue(group, chip.dataset.value || "Auto");
    });
  });

  $("auto-pill")?.addEventListener("click", () => {
    setChipValue("audience", "Auto");
    setChipValue("shape", "Auto");
  });
}

function setupProfileChips() {
  document.querySelectorAll(".profile-chip").forEach((chip) => {
    chip.addEventListener("click", () => {
      chip.classList.toggle("selected");
    });
  });
}

function applyBuilderMode() {
  const panel = $("builder-learning-box");
  if (panel) panel.hidden = false;
}

function switchPanel(panelId) {
  document.querySelectorAll(".tab").forEach((item) => item.classList.remove("active"));
  document.querySelectorAll(".panel").forEach((panel) => panel.classList.remove("active"));
  const tab = document.querySelector(`.tab[data-panel="${panelId}"]`);
  if (tab) tab.classList.add("active");
  $(panelId).classList.add("active");
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
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
  updateDetectedDeadline("");
  bindAskControls();
  $("new-task-btn")?.addEventListener("click", startNewTask);
  $("save-journal-btn").addEventListener("click", addJournalEntry);
  $("export-btn").addEventListener("click", exportJournal);
  $("save-settings-btn").addEventListener("click", saveSettings);
  const settings = loadSettings();
  $("gpt-link").value = settings.gptLink || "";
  loadProfileSettings(settings);
  setupTabs();
  setupCopyDelegation();
  setupKeyboardSubmit();
  setupVerdictChips();
  setupChoiceChips();
  setupProfileChips();
  applyBuilderMode();
  renderJournal();
  loadBasis();
  updateLearningControls();

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./service-worker.js").catch(() => {});
  }
}

boot();
