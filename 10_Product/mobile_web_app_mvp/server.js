const http = require("http");
const fs = require("fs");
const path = require("path");

const ROOT = __dirname;
const REPO_ROOT = path.resolve(ROOT, "../..");
const PORT = Number(process.env.PORT || 8080);
const HOST = process.env.HOST || "0.0.0.0";
const KNOWLEDGE_MAX_TOTAL = Number(process.env.ACI_OS_KNOWLEDGE_MAX_TOTAL || 65000);
const KNOWLEDGE_MAX_FILE = Number(process.env.ACI_OS_KNOWLEDGE_MAX_FILE || 12000);
const LEARNING_INBOX = path.resolve(REPO_ROOT, "10_Product/App_Learning_Inbox.md");
const LEARNING_STATE = path.resolve(REPO_ROOT, "10_Product/App_Learning_Processed_State.json");
const JOURNAL_MEMORY = path.resolve(REPO_ROOT, "10_Product/App_Journal_Memory.md");

loadEnv(path.join(ROOT, ".env"));

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".webmanifest": "application/manifest+json; charset=utf-8",
  ".svg": "image/svg+xml; charset=utf-8",
  ".md": "text/markdown; charset=utf-8"
};

function loadEnv(file) {
  if (!fs.existsSync(file)) return;
  const lines = fs.readFileSync(file, "utf8").split(/\r?\n/);
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#") || !trimmed.includes("=")) continue;
    const [key, ...rest] = trimmed.split("=");
    if (!process.env[key]) process.env[key] = rest.join("=").trim();
  }
}

function readJson(req) {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
      if (body.length > 200_000) {
        req.destroy();
        reject(new Error("Request too large"));
      }
    });
    req.on("end", () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch {
        reject(new Error("Invalid JSON"));
      }
    });
    req.on("error", reject);
  });
}

function sendJson(res, status, data) {
  res.writeHead(status, {
    "content-type": "application/json; charset=utf-8",
    "cache-control": "no-store"
  });
  res.end(JSON.stringify(data));
}

function ensureLearningInbox() {
  if (fs.existsSync(LEARNING_INBOX)) return;
  fs.writeFileSync(LEARNING_INBOX, [
    "# App Learning Inbox",
    "",
    "Status: active intake file for ACI-OS mobile/web app feedback.",
    "",
    "Purpose: every entry here is a learning signal from Tom's use of the app. Entries are not automatically authoritative methodology; they are inputs for the next Codex improvement pass.",
    "",
    "Safety: pattern facts only. No client names, employer/client matter facts, whistleblower identity, privileged content, or live matter details.",
    ""
  ].join("\n"), "utf8");
}

function cleanField(value, max = 12000) {
  return String(value || "").replace(/\r\n/g, "\n").trim().slice(0, max);
}

function markdownBlock(label, value) {
  const text = cleanField(value);
  if (!text) return "";
  return `### ${label}\n\n${text}\n`;
}

function appendLearningEntry(body) {
  ensureLearningInbox();
  const timestamp = cleanField(body.timestamp) || new Date().toISOString();
  const learningId = cleanField(body.learningId || body.learning_id, 100) || `AL-${Date.now()}`;
  const calibration = body.calibration || {};
  const profile = calibration.profile || {};
  const list = (items) => Array.isArray(items) && items.length ? items.map((item) => cleanField(item)).join(", ") : "not set";
  const lines = [
    "",
    `## ${timestamp} - app learning signal`,
    "",
    `Learning ID: ${learningId}`,
    "Review status: PENDING TOM APPROVAL",
    `Source: ${cleanField(body.source || "ACI-OS mobile/web app")}`,
    `Event type: ${cleanField(body.event_type || body.eventType || "builder_note")}`,
    `Verdict: ${cleanField(body.verdict || "not rated")}`,
    `Question pattern: ${cleanField(body.question || "not stated", 500)}`,
    `Answer first line: ${cleanField(body.answerFirstLine || "not stated", 500)}`,
    `Calibration: speed=${cleanField(calibration.speed)}; shape=${cleanField(calibration.shape)}; output=${cleanField(calibration.output)}; deadline=${cleanField(calibration.deadline)}; audience=${cleanField(calibration.audience)}; requestCode=${cleanField(calibration.requestCode)}`,
    `Profile: industries=${list(profile.industries)}; operating=${list(profile.operatingJurisdictions)}; exposure=${list(profile.exposureJurisdictions)}`,
    "",
    markdownBlock("What worked", body.worked || "[not stated]"),
    markdownBlock("What failed", body.failed || "[not stated]"),
    markdownBlock("Suggested fix", body.fix || "[not stated]"),
    markdownBlock("Full discussion", body.discussion || ""),
    "Next handling: Codex must explain the lesson, propose the exact rule/test/document/app change, and ask Tom for OK / MODIFY / DISCARD. Do not implement the learning before Tom approves it.",
    ""
  ].filter(Boolean).join("\n");

  fs.appendFileSync(LEARNING_INBOX, `\n\n${lines}\n`, "utf8");
  return learningId;
}

function archiveJournalEntries(body) {
  const entries = Array.isArray(body.entries) ? body.entries.slice(0, 500) : [];
  if (!entries.length) {
    const error = new Error("No Journal entries supplied.");
    error.status = 400;
    throw error;
  }

  const archiveId = cleanField(body.archiveId, 100) || `JA-${Date.now()}`;
  const exportedAt = cleanField(body.exportedAt, 100) || new Date().toISOString();
  if (!fs.existsSync(JOURNAL_MEMORY)) {
    fs.writeFileSync(JOURNAL_MEMORY, [
      "# App Journal Memory",
      "",
      "Status: durable C-drive archive for Journal cards exported from the ACI-OS mobile/web app.",
      "",
      "Safety: pattern facts only. Pending learning remains independently preserved in App_Learning_Inbox.md.",
      ""
    ].join("\n"), "utf8");
  }

  const existing = fs.readFileSync(JOURNAL_MEMORY, "utf8");
  if (existing.includes(`Archive ID: ${archiveId}`)) {
    return { archiveId, count: entries.length, duplicate: true };
  }

  const lines = [
    "",
    `## Export ${exportedAt}`,
    "",
    `Archive ID: ${archiveId}`,
    `Cards: ${entries.length}`,
    ""
  ];
  entries.forEach((entry, index) => {
    lines.push(
      `### ${index + 1}. ${cleanField(entry.timestamp, 100) || "timestamp unavailable"}`,
      "",
      `Learning ID: ${cleanField(entry.learningId, 100) || "manual"}`,
      `State at export: ${cleanField(entry.state, 100) || "local note"}`,
      "",
      cleanField(entry.note, 12000) || "[empty note]",
      ""
    );
  });

  fs.appendFileSync(JOURNAL_MEMORY, `${lines.join("\n")}\n`, "utf8");
  return { archiveId, count: entries.length, duplicate: false };
}

function readLearningState() {
  if (!fs.existsSync(LEARNING_STATE)) {
    return { completedLearningIds: [], completedTimestamps: [] };
  }
  const state = JSON.parse(fs.readFileSync(LEARNING_STATE, "utf8"));
  return {
    completedLearningIds: Array.isArray(state.completedLearningIds) ? state.completedLearningIds : [],
    completedTimestamps: Array.isArray(state.completedTimestamps) ? state.completedTimestamps : []
  };
}

function getInstructions() {
  const configured = process.env.ACI_OS_INSTRUCTIONS_FILE || "../Chief_Consigliere_GPT_Instructions_Gate2_v2.28_under8000.md";
  const file = path.resolve(ROOT, configured);
  if (!fs.existsSync(file)) {
    throw new Error(`Instruction file not found: ${file}`);
  }
  return fs.readFileSync(file, "utf8");
}

function readKnowledgeManifest() {
  const configured = process.env.ACI_OS_KNOWLEDGE_MANIFEST || "knowledge_manifest.json";
  const file = path.resolve(ROOT, configured);
  if (!fs.existsSync(file)) return { status: "missing", purpose: "", files: [] };
  return JSON.parse(fs.readFileSync(file, "utf8"));
}

function safeRepoFile(relativePath) {
  const file = path.resolve(REPO_ROOT, relativePath);
  if (!file.startsWith(REPO_ROOT) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) {
    return null;
  }
  return file;
}

function loadKnowledgePack() {
  const manifest = readKnowledgeManifest();
  const loaded = [];
  let used = 0;

  for (const item of manifest.files || []) {
    const file = safeRepoFile(item.path);
    if (!file) {
      loaded.push({ ...item, status: "missing", chars: 0 });
      continue;
    }

    let content = fs.readFileSync(file, "utf8");
    const originalLength = content.length;
    if (content.length > KNOWLEDGE_MAX_FILE) {
      content = `${content.slice(0, KNOWLEDGE_MAX_FILE)}\n\n[TRUNCATED for prototype context limit]`;
    }
    if (used + content.length > KNOWLEDGE_MAX_TOTAL) {
      loaded.push({ ...item, status: "skipped-context-limit", chars: 0 });
      continue;
    }

    used += content.length;
    loaded.push({
      ...item,
      status: originalLength > KNOWLEDGE_MAX_FILE ? "loaded-truncated" : "loaded",
      chars: content.length,
      content
    });
  }

  return {
    status: manifest.status || "active",
    purpose: manifest.purpose || "Selected local knowledge whitelist.",
    maxTotal: KNOWLEDGE_MAX_TOTAL,
    used,
    files: loaded
  };
}

function buildKnowledgeInstructions(pack) {
  const sections = pack.files
    .filter((file) => file.content)
    .map((file) => [
      `### ${file.label || file.path}`,
      `Source path: ${file.path}`,
      "",
      file.content
    ].join("\n"))
    .join("\n\n---\n\n");

  if (!sections) return "";

  return `
Selected local ACI-OS knowledge pack:
- Use ONLY these whitelisted local files as project knowledge.
- Do NOT assume unlisted repo files.
- If the answer depends on local knowledge, cite it as [practitioner method - Kruk] or the relevant public source label, not as an internal filename.
- Company documents still govern; this app compares, improves, or fills gaps.

${sections}`;
}

function extractText(response) {
  if (typeof response.output_text === "string") return response.output_text;
  const chunks = [];
  for (const item of response.output || []) {
    for (const content of item.content || []) {
      if (typeof content.text === "string") chunks.push(content.text);
      if (typeof content.output_text === "string") chunks.push(content.output_text);
    }
  }
  return chunks.join("\n").trim();
}

function extractDecisionSnapshot(rawAnswer) {
  const answer = String(rawAnswer || "").trim();
  const blockPattern = /(?:```(?:text)?\s*)?\[\[ACI_DECISION_SNAPSHOT\]\]\s*([\s\S]*?)\s*\[\[\/ACI_DECISION_SNAPSHOT\]\](?:\s*```)?/i;
  const match = answer.match(blockPattern);
  if (!match) return { answer, decisionSnapshot: null };

  const fields = {};
  for (const line of match[1].split(/\r?\n/)) {
    const separator = line.indexOf(":");
    if (separator < 0) continue;
    const key = line.slice(0, separator).trim().toUpperCase();
    const value = line.slice(separator + 1).trim();
    if (value) fields[key] = value;
  }

  const decisionSnapshot = {
    doNow: fields.DO_NOW || "",
    pathway: fields.WHAT_CHANGES_THIS || "",
    owner: fields.OWNER || "",
    openGap: fields.OPEN_GAP || ""
  };
  const isUsable = decisionSnapshot.doNow
    && decisionSnapshot.pathway
    && decisionSnapshot.owner
    && decisionSnapshot.openGap;

  return {
    answer: answer.replace(blockPattern, "").replace(/\n{3,}/g, "\n\n").trim(),
    decisionSnapshot: isUsable ? decisionSnapshot : null
  };
}

const PERSONAL_PROTECTION_NOTICE = [
  "**Personal protection consideration**",
  "If you may face personal legal exposure, or your interests could diverge from those of your employer, consider obtaining independent legal advice promptly. Do not assume that company counsel represents you personally: this depends on the agreed engagement. Company counsel protects the company's interests; your own lawyer protects yours. You may also wish to check whether legal-expenses or legal-protection insurance covers independent advice; coverage depends on the policy and jurisdiction."
].join("\n");

function needsPersonalProtectionConsideration(prompt) {
  const text = String(prompt || "").toLowerCase();
  const directPersonalQuestion = /\b(could|can|might|may|am)\s+i\s+be\s+(personally\s+)?liable\b|\b(personal|personally)\s+(liability|liable|exposure)\b|\b(do|should)\s+i\s+need\s+(my\s+own|an?\s+independent)\s+lawyer\b|\bmy\s+own\s+(lawyer|counsel)\b/.test(text);
  const personalAction = /\bi\s+(approved|signed|certified|paid|concealed|ignored|misrepresented|bypassed|overrode|falsified)\b/.test(text);
  const seriousMatter = /\b(falsif|fraud|brib|corrupt|illegal|criminal|misconduct|false\s+(invoice|record|statement)|control|investigat|regulator|authority|conceal|evidence|liab)/.test(text);
  const personalProceeding = /\b(company|regulator|authority|police|prosecutor|investigator)\b.{0,80}\b(investigat|interview|accus|charge|disciplin|question)\b.{0,80}\b(me|my)\b|\b(i\s+am|i'm|they\s+are)\s+(being\s+)?(investigated|interviewed|accused|charged|disciplined)\b/.test(text);
  const pressuredParticipation = /\b(management|boss|manager|superior)\b.{0,100}\b(told|asked|instructed|pressured|forced)\s+me\b.{0,100}\b(ignore|bypass|conceal|delete|destroy|sign|approve|pay|falsif|misrepresent)\b/.test(text);
  return directPersonalQuestion || (personalAction && seriousMatter) || personalProceeding || pressuredParticipation;
}

function addPersonalProtectionConsideration(prompt, answer) {
  const text = String(answer || "").trim();
  if (!needsPersonalProtectionConsideration(prompt) || /personal protection consideration/i.test(text)) {
    return text;
  }

  const paragraphs = text.split(/\n{2,}/);
  const firstSubstantive = paragraphs.findIndex((paragraph) =>
    paragraph.trim() && !/^response timestamp\s*:/i.test(paragraph.trim())
  );
  const insertAt = firstSubstantive >= 0 ? firstSubstantive + 1 : paragraphs.length;
  paragraphs.splice(insertAt, 0, PERSONAL_PROTECTION_NOTICE);
  return paragraphs.join("\n\n");
}

async function askOpenAI(prompt) {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey || apiKey.includes("put_your_new_key_here")) {
    const error = new Error("OPENAI_API_KEY missing. Create .env from .env.example with a fresh key.");
    error.status = 503;
    throw error;
  }

  const instructions = `${getInstructions()}

${buildKnowledgeInstructions(loadKnowledgePack())}

 Mobile app runtime:
 - Pattern-facts-only prototype.
 - If the user may be entering confidential or personal facts, stop and redirect to pattern facts.
 - Keep first answer fast and short.
 - Direct app answer is still prototype decision support, not legal advice or clearance.
 - Do not add a Decision Snapshot or machine-readable snapshot block unless the input explicitly asks for one.`;

  const response = await fetch("https://api.openai.com/v1/responses", {
    method: "POST",
    headers: {
      "authorization": `Bearer ${apiKey}`,
      "content-type": "application/json"
    },
    body: JSON.stringify({
      model: process.env.OPENAI_MODEL || "gpt-4.1-mini",
      instructions,
      input: prompt,
      temperature: 0.2,
      max_output_tokens: 1200
    })
  });

  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    const message = data.error?.message || `OpenAI request failed: ${response.status}`;
    const error = new Error(message);
    error.status = response.status;
    throw error;
  }

  return extractDecisionSnapshot(extractText(data) || "No answer text returned.");
}

async function handleAsk(req, res) {
  try {
    const body = await readJson(req);
    const prompt = String(body.prompt || "").trim();
    if (!prompt) {
      sendJson(res, 400, { error: "Prompt is required." });
      return;
    }
    const result = await askOpenAI(prompt);
    sendJson(res, 200, {
      answer: addPersonalProtectionConsideration(prompt, result.answer),
      decisionSnapshot: result.decisionSnapshot,
      model: process.env.OPENAI_MODEL || "gpt-4.1-mini"
    });
  } catch (error) {
    sendJson(res, error.status || 500, { error: error.message || "Server error." });
  }
}

async function handleLearning(req, res) {
  try {
    const body = await readJson(req);
    const learningId = appendLearningEntry(body);
    sendJson(res, 200, {
      ok: true,
      file: path.relative(REPO_ROOT, LEARNING_INBOX).replace(/\\/g, "/"),
      learningId,
      reviewStatus: "pending-approval"
    });
  } catch (error) {
    sendJson(res, error.status || 500, { error: error.message || "Could not save learning signal." });
  }
}

async function handleJournalArchive(req, res) {
  try {
    const body = await readJson(req);
    const result = archiveJournalEntries(body);
    sendJson(res, 200, {
      ok: true,
      file: path.relative(REPO_ROOT, JOURNAL_MEMORY).replace(/\\/g, "/"),
      ...result
    });
  } catch (error) {
    sendJson(res, error.status || 500, { error: error.message || "Could not archive Journal." });
  }
}

function serveStatic(req, res) {
  const url = new URL(req.url, `http://${req.headers.host}`);
  let pathname = decodeURIComponent(url.pathname);
  if (pathname === "/") pathname = "/index.html";

  const file = path.resolve(ROOT, `.${pathname}`);
  if (!file.startsWith(ROOT) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) {
    res.writeHead(404, { "content-type": "text/plain; charset=utf-8" });
    res.end("Not found");
    return;
  }

  const ext = path.extname(file);
  res.writeHead(200, {
    "content-type": MIME[ext] || "application/octet-stream",
    "cache-control": "no-store"
  });
  fs.createReadStream(file).pipe(res);
}

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/api/health") {
    const pack = loadKnowledgePack();
    sendJson(res, 200, {
      ok: true,
      directAsk: Boolean(process.env.OPENAI_API_KEY),
      knowledgeFiles: pack.files.filter((file) => file.status === "loaded" || file.status === "loaded-truncated").length
    });
    return;
  }

  if (req.method === "GET" && req.url === "/api/basis") {
    const pack = loadKnowledgePack();
    sendJson(res, 200, {
      status: pack.status,
      purpose: pack.purpose,
      used: pack.used,
      maxTotal: pack.maxTotal,
      files: pack.files.map(({ content, ...file }) => file)
    });
    return;
  }

  if (req.method === "GET" && req.url === "/api/learning/status") {
    sendJson(res, 200, readLearningState());
    return;
  }

  if (req.method === "POST" && req.url === "/api/ask") {
    handleAsk(req, res);
    return;
  }

  if (req.method === "POST" && req.url === "/api/learning") {
    handleLearning(req, res);
    return;
  }

  if (req.method === "POST" && req.url === "/api/journal/archive") {
    handleJournalArchive(req, res);
    return;
  }

  if (req.method === "GET") {
    serveStatic(req, res);
    return;
  }

  sendJson(res, 405, { error: "Method not allowed." });
});

server.listen(PORT, HOST, () => {
  console.log(`ACI-OS mobile v0.51 running at http://${HOST}:${PORT}`);
});
