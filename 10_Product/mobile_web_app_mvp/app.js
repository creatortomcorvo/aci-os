const storageKeys = {
  journal: "acios_mobile_journal_v1",
  settings: "acios_mobile_settings_v1"
};

const $ = (id) => document.getElementById(id);
let lastAnswerForJournal = null;
let conversationTurns = [];
let decisionSnapshotVisible = false;
let decisionSnapshotLoading = false;
let decisionSnapshotError = "";

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

function createLearningId(timestamp = zurichTimestamp()) {
  const stamp = String(timestamp).replace(/\D/g, "").slice(0, 14);
  const random = globalThis.crypto?.randomUUID
    ? globalThis.crypto.randomUUID().slice(0, 8)
    : Math.random().toString(36).slice(2, 10);
  return `AL-${stamp}-${random}`;
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
  decisionSnapshotVisible = false;
  decisionSnapshotLoading = false;
  decisionSnapshotError = "";
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

  askBackend(prompt, { displayQuestion: q }).catch(() => {
    renderPreparedPrompt(prompt);
  });
}

function buildFollowUpPrompt(followUp) {
  const detectedDeadline = updateDetectedDeadline(followUp);
  const acceptedOfferInstruction = acceptedOfferExecutionLines(followUp);
  const numberedChoiceInstruction = numberedChoiceExecutionLines(followUp);
  const recentTurns = conversationTurns.slice(-3).map((turn, index) => [
    `Prior turn ${index + 1} question:`,
    conversationContextText(turn.question || turn.prompt, 600),
    "",
    `Prior turn ${index + 1} answer:`,
    conversationContextText(turn.answer, 2600)
  ].join("\n")).join("\n\n---\n\n");

  return [
    `${requestCode()} ${followUp}`,
    "",
    "This is a follow-up in the same ACI-OS mobile conversation.",
    "Use the prior turn as context, but do not assume facts not stated.",
    "If the follow-up changes the risk direction, say so clearly.",
    ...acceptedOfferInstruction,
    ...numberedChoiceInstruction,
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

function numberedChoiceExecutionLines(followUp) {
  const normalized = String(followUp || "").trim();
  if (!/^\(?\d+\)?(?:[\s,;&+]+\(?\d+\)?)*$/.test(normalized)) return [];

  const selected = [...new Set(normalized.match(/\d+/g) || [])];
  const priorAnswer = String(conversationTurns.at(-1)?.answer || "");
  const available = new Set([...priorAnswer.matchAll(/\((\d+)\)/g)].map((match) => match[1]));
  if (!selected.length || !selected.every((choice) => available.has(choice))) return [];
  const unselected = [...available].filter((choice) => !selected.includes(choice));

  return [
    "",
    "MANDATORY NUMBERED-CHOICE EXECUTION:",
    `- The user selected choices ${selected.map((choice) => `(${choice})`).join(" and ")} from the immediately preceding numbered menu.`,
    "- Produce every selected output now, in the selected order, using the conversation context.",
    `- Do not produce unselected choices${unselected.length ? ` ${unselected.map((choice) => `(${choice})`).join(", ")}` : ""}.`,
    "- Do not merely confirm the selection, repeat the menu, ask which selected output to do first, or request context already available.",
    "- If tailoring details are missing, provide useful provisional outputs and label the open gaps."
  ];
}

function conversationContextText(value, maxChars) {
  const text = String(value || "").trim();
  if (text.length <= maxChars) return text;
  return `${text.slice(0, maxChars).trimEnd()}\n[Earlier turn shortened for conversation context]`;
}

function acceptedOfferExecutionLines(followUp) {
  const normalized = String(followUp || "").trim().toLowerCase().replace(/[.!?]+$/g, "");
  if (!["yes", "yes please", "go", "go ahead", "do it", "okay", "ok", "please do"].includes(normalized)) {
    return [];
  }

  const priorAnswer = String(conversationTurns.at(-1)?.answer || "");
  const artifactPatterns = [
    ["checklist", /\bchecklist\b/i],
    ["memo", /\bmemo\b/i],
    ["plan", /\bplan\b/i],
    ["draft", /\bdraft\b/i],
    ["script", /\bscript\b/i],
    ["table", /\btable\b/i],
    ["deeper analysis", /\b(?:go|dig)\s+deeper\b|\bdeeper analysis\b/i]
  ];
  const offeredArtifact = artifactPatterns.find(([, pattern]) => pattern.test(priorAnswer))?.[0];
  if (!offeredArtifact) return [];

  return [
    "",
    "MANDATORY ACCEPTED-OFFER EXECUTION:",
    `- The immediately preceding answer offered a ${offeredArtifact}, and this reply accepts it.`,
    `- Produce the ${offeredArtifact} now and begin with the promised output itself.`,
    "- Do not repeat the offer, ask for confirmation again, substitute another general answer, or end by offering the same output."
  ];
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
        <button type="button" class="secondary" data-new-task>New task</button>
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
}

function startNewTask() {
  conversationTurns = [];
  decisionSnapshotVisible = false;
  decisionSnapshotLoading = false;
  decisionSnapshotError = "";
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
  const parsedSnapshot = parseDecisionSnapshotText(data.answer || "No answer returned.");
  const parsedSources = parseAnswerSources(parsedSnapshot.answer);
  const userQuestion = options.displayQuestion || prompt.split(/\r?\n/).find(Boolean) || "Question";
  lastAnswerForJournal = {
    prompt: userQuestion,
    answer: parsedSources.answer,
    sources: parsedSources.sources,
    sourcesVisible: false,
    decisionSnapshot: normalizeDecisionSnapshot(data.decisionSnapshot) || parsedSnapshot.decisionSnapshot,
    question: userQuestion,
    calibration: currentCalibration()
  };
  conversationTurns.push(lastAnswerForJournal);
  if (conversationTurns.length > 20) conversationTurns = conversationTurns.slice(-20);
  decisionSnapshotVisible = false;
  decisionSnapshotLoading = false;
  decisionSnapshotError = "";
  renderConversation();
}

function normalizeDecisionSnapshot(snapshot) {
  if (!snapshot || typeof snapshot !== "object") return null;
  const normalized = {
    doNow: String(snapshot.doNow || "").trim(),
    pathway: String(snapshot.pathway || "").trim(),
    owner: String(snapshot.owner || "").trim(),
    openGap: String(snapshot.openGap || "").trim()
  };
  return Object.values(normalized).every(Boolean) ? normalized : null;
}

function parseDecisionSnapshotText(rawAnswer) {
  const answer = String(rawAnswer || "").trim();
  const blockPattern = /(?:```(?:text)?\s*)?\[\[ACI_DECISION_SNAPSHOT\]\]\s*([\s\S]*?)\s*\[\[\/ACI_DECISION_SNAPSHOT\]\](?:\s*```)?/i;
  const match = answer.match(blockPattern);
  if (!match) return { answer, decisionSnapshot: null };

  const fields = {};
  match[1].split(/\r?\n/).forEach((line) => {
    const separator = line.indexOf(":");
    if (separator < 0) return;
    const key = line.slice(0, separator).trim().toUpperCase();
    const value = line.slice(separator + 1).trim();
    if (value) fields[key] = value;
  });

  return {
    answer: answer.replace(blockPattern, "").replace(/\n{3,}/g, "\n\n").trim(),
    decisionSnapshot: normalizeDecisionSnapshot({
      doNow: fields.DO_NOW,
      pathway: fields.WHAT_CHANGES_THIS,
      owner: fields.OWNER,
      openGap: fields.OPEN_GAP
    })
  };
}

function parseAnswerSources(rawAnswer) {
  const answer = String(rawAnswer || "").trim();
  const combinedMarker = /\bSOURCES?\s*\/\s*BASIS\s*:\s*/i;
  const sourceHeading = /(?:^|\n)\s*(?:#{1,6}\s*)?SOURCES?\s*:\s*/i;
  const match = answer.match(combinedMarker) || answer.match(sourceHeading);
  if (!match || match.index === undefined) return { answer, sources: "" };

  return {
    answer: answer.slice(0, match.index).trim(),
    sources: answer.slice(match.index + match[0].length).trim()
  };
}

function renderDecisionSnapshot(snapshot) {
  const normalized = normalizeDecisionSnapshot(snapshot);
  if (!normalized) return "";
  const fields = [
    ["Do now", normalized.doNow],
    ["What would change this", normalized.pathway],
    ["Owner", normalized.owner],
    ["Open gap", normalized.openGap]
  ];
  return `
    <section class="decision-snapshot" aria-label="Decision snapshot">
      <div class="decision-snapshot-head">
        <strong>Decision snapshot</strong>
        <span>Compact · not sticky</span>
      </div>
      <div class="decision-snapshot-grid">
        ${fields.map(([label, value]) => `
          <div class="decision-snapshot-item">
            <span class="decision-snapshot-label">${escapeHtml(label)}</span>
            <p>${escapeHtml(value)}</p>
          </div>
        `).join("")}
      </div>
    </section>
  `;
}

function decisionSnapshotPrompt(turn) {
  return [
    "Create a compact Decision Snapshot from the latest ACI-OS question and answer below.",
    "Do not add analysis, commentary, markdown, or request/control metadata.",
    "Return only this block, with every value on one line:",
    "[[ACI_DECISION_SNAPSHOT]]",
    "DO_NOW: one immediate practical instruction, maximum 180 characters",
    "WHAT_CHANGES_THIS: the fact, control, or approval that could change the direction, maximum 180 characters",
    "OWNER: the decision owner or Owner not yet verified, maximum 120 characters",
    "OPEN_GAP: the single most important unresolved issue, or No decision-critical gap identified, maximum 160 characters",
    "[[/ACI_DECISION_SNAPSHOT]]",
    "",
    "Latest question:",
    turn.question || "Question not available.",
    "",
    "Latest answer:",
    turn.answer || "Answer not available."
  ].join("\n");
}

async function toggleDecisionSnapshot() {
  const turn = conversationTurns.at(-1);
  if (!turn || decisionSnapshotLoading) return;

  const existing = normalizeDecisionSnapshot(turn.decisionSnapshot);
  if (existing) {
    decisionSnapshotVisible = !decisionSnapshotVisible;
    decisionSnapshotError = "";
    renderConversation();
    return;
  }

  decisionSnapshotLoading = true;
  decisionSnapshotError = "";
  renderConversation();

  try {
    const response = await fetch("/api/ask", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ prompt: decisionSnapshotPrompt(turn) })
    });
    if (!response.ok) throw new Error("Snapshot unavailable");

    const data = await response.json();
    const parsed = parseDecisionSnapshotText(data.answer || "");
    const snapshot = normalizeDecisionSnapshot(data.decisionSnapshot) || parsed.decisionSnapshot;
    if (!snapshot) throw new Error("Snapshot unavailable");

    turn.decisionSnapshot = snapshot;
    if (turn === conversationTurns.at(-1)) lastAnswerForJournal = turn;
    decisionSnapshotVisible = true;
  } catch {
    decisionSnapshotVisible = false;
    decisionSnapshotError = "Could not create the snapshot. Try again.";
  } finally {
    decisionSnapshotLoading = false;
    renderConversation();
  }
}

function answerCopyText(turn, includeVisibleSources = false) {
  const parts = [turn?.answer || ""];
  if (includeVisibleSources && turn?.sourcesVisible && turn?.sources) {
    parts.push(`SOURCES / BASIS\n${turn.sources}`);
  }
  return parts.filter(Boolean).join("\n\n");
}

function fullDiscussionText(throughIndex = conversationTurns.length - 1, options = {}) {
  const includeVisibleSources = Boolean(options.includeVisibleSources);
  return conversationTurns.slice(0, throughIndex + 1).map((turn, index) => [
    `TURN ${index + 1} QUESTION`,
    turn.question || "Question",
    "",
    `TURN ${index + 1} ANSWER`,
    answerCopyText(turn, includeVisibleSources)
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
              <button type="button" class="tiny-action" data-copy="${escapeAttr(fullDiscussionText(index, { includeVisibleSources: true }))}">Copy</button>
              ${turn.sources ? `<button type="button" class="tiny-action" data-source-toggle="${index}" aria-expanded="${Boolean(turn.sourcesVisible)}">${turn.sourcesVisible ? "Hide sources" : "Sources"}</button>` : ""}
            </div>
            ${turn.sourcesVisible && turn.sources ? `
              <section class="answer-sources" aria-label="Sources for answer ${index + 1}">
                <strong>Sources / basis</strong>
                <div>${renderAnswerContent(turn.sources)}</div>
              </section>
            ` : ""}
          </div>
        </article>
      `).join("")}
    </div>
  ` : "";

  const latestSnapshot = normalizeDecisionSnapshot(conversationTurns.at(-1)?.decisionSnapshot);
  const snapshotButtonLabel = decisionSnapshotLoading
    ? "Creating snapshot..."
    : decisionSnapshotVisible && latestSnapshot
      ? "Hide snapshot"
      : decisionSnapshotError
        ? "Retry snapshot"
        : "Decision snapshot";
  const postActions = conversationTurns.length ? `
    <div class="post-action-groups" aria-label="answer options">
      <section class="post-action-group" aria-label="explore further">
        <div class="post-action-label">Explore further</div>
        <div class="post-answer-actions">
          <button type="button" class="secondary" data-post-action="deeper">Deeper</button>
        </div>
      </section>
      <section class="post-action-group" aria-label="convert current discussion">
        <div class="post-action-label">Convert current discussion into</div>
        <div class="post-answer-actions">
          <button type="button" class="secondary" data-post-action="snapshot" aria-pressed="${decisionSnapshotVisible}" ${decisionSnapshotLoading ? "disabled" : ""}>${snapshotButtonLabel}</button>
          <button type="button" class="secondary" data-post-action="checklist">Checklist</button>
          <button type="button" class="secondary" data-post-action="memo">Memo</button>
          <button type="button" class="secondary" data-post-action="email">Email</button>
        </div>
      </section>
    </div>
    ${decisionSnapshotError ? `<p class="helper">${escapeHtml(decisionSnapshotError)}</p>` : ""}
    ${decisionSnapshotVisible && latestSnapshot ? renderDecisionSnapshot(latestSnapshot) : ""}
  ` : "";

  const fallback = fallbackPrompt
    ? `<div class="prompt-box">${escapeHtml(fallbackPrompt)}</div>
       <div class="actions"><button class="secondary" data-copy="${escapeAttr(fallbackPrompt)}">Copy prompt</button></div>`
    : "";

  $("result").innerHTML = `
    <div class="conversation-scroll">
      <strong>ACI-OS discussion</strong>
      ${statusText ? `<p class="helper thinking">${escapeHtml(statusText)}</p>` : ""}
      ${discussion}
      ${postActions}
      ${fallback}
    </div>
    <div class="continue-box">
      <label class="field-label" for="follow-up">Continue this discussion</label>
      <textarea id="follow-up" rows="2" placeholder="Example: draft the short message to my CEO."></textarea>
      <div class="continue-footer">
        <p class="helper">Enter sends. Shift+Enter adds a new line.</p>
        <div class="continue-actions">
          <button type="button" class="secondary" data-new-task>New task</button>
          <button class="primary" id="continue-btn">Continue</button>
        </div>
      </div>
    </div>
  `;
  const conversationScroll = $("result").querySelector(".conversation-scroll");
  if (conversationScroll) conversationScroll.scrollTop = conversationScroll.scrollHeight;
  updateLearningControls();
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
      ${entry.learningId ? `<span class="learning-state">${escapeHtml(entry.state || "pending approval")}</span>` : ""}
      <div>${escapeHtml(entry.note)}</div>
    </article>
  `).join("");
}

async function syncProcessedLearning() {
  try {
    const response = await fetch("/api/learning/status", { cache: "no-store" });
    if (!response.ok) throw new Error("learning status unavailable");
    const state = await response.json();
    const completedIds = new Set(state.completedLearningIds || []);
    const completedTimestamps = new Set(state.completedTimestamps || []);
    const entries = loadJournal();
    const active = entries.filter((entry) => {
      if (entry.learningId && completedIds.has(entry.learningId)) return false;
      if (entry.timestamp && completedTimestamps.has(entry.timestamp)) return false;
      return true;
    });
    if (active.length !== entries.length) saveJournal(active);
  } catch {
    // Keep pending local entries when the backend is unavailable.
  }
  renderJournal();
}

async function addJournalEntry() {
  const note = $("journal-note").value.trim();
  if (!note) return;
  const timestamp = zurichTimestamp();
  const learningId = createLearningId(timestamp);
  const entries = loadJournal();
  entries.unshift({ timestamp, note, learningId, state: "pending approval" });
  saveJournal(entries);
  $("journal-note").value = "";
  renderJournal();
  const status = $("journal-save-status");
  if (status) status.textContent = "Sending learning note...";
  try {
    const result = await postLearning({
      timestamp,
      learningId,
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
    if (status) status.textContent = `Learning ${result.learningId} exported. Codex will explain the lesson and proposal, then ask OK / MODIFY / DISCARD.`;
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

  if (latest) latest.dataset.copy = hasAnswer ? answerCopyText(lastAnswerForJournal, true) : "";
  if (full) full.dataset.copy = hasAnswer ? fullDiscussionText(conversationTurns.length - 1, { includeVisibleSources: true }) : "";

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
    learningId: createLearningId(),
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
  const learning = {
    ...payload,
    learningId: payload.learningId || createLearningId(payload.timestamp)
  };
  const response = await fetch("/api/learning", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(learning)
  });
  if (!response.ok) {
    const data = await response.json().catch(() => ({}));
    throw new Error(data.error || "Could not send learning signal.");
  }
  return response.json();
}

function postActionPrompt(action) {
  if (action === "deeper") return "Go deeper into one decision-critical point from the last answer. Do not widen, repeat, or merely lengthen it. Explain why it matters, the evidence to verify, the owner, the decision consequence, and the open gap. If more points remain, end by asking whether to continue with the next point.";
  if (action === "checklist") return "Turn the last answer into a practical numbered checklist with owners, evidence, and next actions.";
  if (action === "memo") return "Turn the last answer into a short memo skeleton with purpose, facts, risk view, decision needed, and sources.";
  if (action === "email") return "Turn the current discussion into a concise email draft. Infer the most likely recipient and purpose from context; if uncertain, use bracketed placeholders. Include a clear subject line, recommended action, owner or request, timing, and any necessary caveat. Draft only - do not send.";
  return "";
}

async function sendQuickFeedback(eventType, turnIndex) {
  const turn = conversationTurns[Number(turnIndex)] || lastAnswerForJournal;
  if (!turn) return;
  await postLearning({
    timestamp: zurichTimestamp(),
    learningId: createLearningId(),
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
  const result = await postLearning(payload);
  const entries = loadJournal();
  entries.unshift({
    timestamp: payload.timestamp,
    learningId: result.learningId || payload.learningId,
    state: "pending approval",
    note: makeAnswerJournalNote(lastAnswerForJournal.prompt, lastAnswerForJournal.answer)
  });
  saveJournal(entries);
  renderJournal();
  const status = $("answer-save-status");
  if (status) {
    status.textContent = `Learning ${result.learningId} exported. Codex will explain the lesson and proposed change, then ask OK / MODIFY / DISCARD.`;
    setTimeout(() => {
      if (status.textContent.startsWith("Learning ")) {
        status.textContent = "Pending your approval. The journal card will disappear automatically after the approved change is implemented and logged.";
      }
    }, 3000);
  }
}

async function exportJournalToMemory() {
  const entries = loadJournal();
  const status = $("journal-save-status");
  const button = $("export-btn");
  if (!entries.length) {
    if (status) status.textContent = "Nothing to export. The Journal is already empty.";
    return;
  }

  button.disabled = true;
  if (status) status.textContent = `Saving ${entries.length} Journal ${entries.length === 1 ? "card" : "cards"} to C-drive memory...`;
  try {
    const response = await fetch("/api/journal/archive", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        archiveId: `JA-${Date.now()}`,
        exportedAt: zurichTimestamp(),
        entries
      })
    });
    const result = await response.json().catch(() => ({}));
    if (!response.ok) throw new Error(result.error || "Could not save Journal memory.");

    saveJournal([]);
    renderJournal();
    if (status) status.textContent = `${result.count} Journal ${result.count === 1 ? "card" : "cards"} saved to C-drive memory and removed from this screen.`;
  } catch (error) {
    if (status) status.textContent = `Not exported: ${error.message} Journal cards were kept.`;
  } finally {
    button.disabled = false;
  }
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
    const newTask = event.target.closest("[data-new-task]");
    if (newTask) {
      startNewTask();
      return;
    }

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
      if (postAction.dataset.postAction === "snapshot") {
        await toggleDecisionSnapshot();
        return;
      }
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

    const sourceToggle = event.target.closest("[data-source-toggle]");
    if (sourceToggle) {
      const turn = conversationTurns[Number(sourceToggle.dataset.sourceToggle)];
      if (turn?.sources) {
        turn.sourcesVisible = !turn.sourcesVisible;
        renderConversation();
      }
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
  if (panelId === "journal-panel") syncProcessedLearning();
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
  $("save-journal-btn").addEventListener("click", addJournalEntry);
  $("export-btn").addEventListener("click", exportJournalToMemory);
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
  syncProcessedLearning();
  loadBasis();
  updateLearningControls();

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./service-worker.js").catch(() => {});
  }
}

boot();
