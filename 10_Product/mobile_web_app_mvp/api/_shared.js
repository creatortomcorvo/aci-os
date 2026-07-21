const crypto = require("crypto");
const fs = require("fs");
const path = require("path");

const APP_ROOT = path.resolve(__dirname, "..");
const REPO_ROOT = path.resolve(APP_ROOT, "../..");
const COOKIE_NAME = "acios_access";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 7;

loadEnv(path.join(APP_ROOT, ".env"));

const PUBLIC_RUNTIME = process.env.VERCEL === "1" || process.env.ACI_OS_PUBLIC_RUNTIME === "true";
const REQUIRE_ACCESS = PUBLIC_RUNTIME || process.env.ACI_OS_REQUIRE_ACCESS === "true";
const DISABLE_REPO_LEARNING = PUBLIC_RUNTIME || process.env.ACI_OS_DISABLE_REPO_LEARNING === "true";

function loadEnv(file) {
  if (!fs.existsSync(file)) return;
  const lines = fs.readFileSync(file, "utf8").split(/\r?\n/);
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const index = trimmed.indexOf("=");
    if (index < 0) continue;
    const key = trimmed.slice(0, index).trim();
    let value = trimmed.slice(index + 1).trim();
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }
    if (key && process.env[key] === undefined) process.env[key] = value;
  }
}

function sendJson(res, status, data, extraHeaders = {}) {
  res.writeHead(status, {
    "content-type": "application/json; charset=utf-8",
    "cache-control": "no-store",
    "vary": "cookie",
    ...extraHeaders
  });
  res.end(JSON.stringify(data));
}

function readRequestBody(req) {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
      if (body.length > 1024 * 1024) {
        reject(new Error("Request body too large"));
        req.destroy();
      }
    });
    req.on("end", () => resolve(body));
    req.on("error", reject);
  });
}

async function readJsonBody(req) {
  const body = await readRequestBody(req);
  if (!body.trim()) return {};
  return JSON.parse(body);
}

function parseCookies(req) {
  const cookie = req.headers.cookie || "";
  return cookie.split(";").reduce((acc, item) => {
    const index = item.indexOf("=");
    if (index < 0) return acc;
    const key = item.slice(0, index).trim();
    const value = decodeURIComponent(item.slice(index + 1).trim());
    if (key) acc[key] = value;
    return acc;
  }, {});
}

function accessConfigured() {
  return Boolean(process.env.ACI_OS_PILOT_PASSCODE && process.env.ACI_OS_PILOT_COOKIE_SECRET);
}

function sign(value) {
  const secret = process.env.ACI_OS_PILOT_COOKIE_SECRET || "";
  return crypto.createHmac("sha256", secret).update(value).digest("hex");
}

function safeEqual(a, b) {
  const left = Buffer.from(String(a));
  const right = Buffer.from(String(b));
  if (left.length !== right.length) return false;
  return crypto.timingSafeEqual(left, right);
}

function createAccessToken() {
  const value = "pilot";
  return `${value}.${sign(value)}`;
}

function validAccessToken(token) {
  if (!token || !accessConfigured()) return false;
  const parts = String(token).split(".");
  if (parts.length !== 2) return false;
  return parts[0] === "pilot" && safeEqual(parts[1], sign(parts[0]));
}

function hasAccess(req) {
  if (!REQUIRE_ACCESS) return true;
  return validAccessToken(parseCookies(req)[COOKIE_NAME]);
}

function requireAccess(req, res) {
  if (hasAccess(req)) return true;
  const configured = accessConfigured();
  sendJson(res, configured ? 401 : 423, {
    ok: false,
    error: configured ? "Pilot access required." : "Pilot access is not configured.",
    accessRequired: true,
    configMissing: !configured
  });
  return false;
}

function accessCookie() {
  const secure = PUBLIC_RUNTIME ? "; Secure" : "";
  return `${COOKIE_NAME}=${encodeURIComponent(createAccessToken())}; HttpOnly; SameSite=Lax; Path=/; Max-Age=${COOKIE_MAX_AGE}${secure}`;
}

const FALLBACK_INSTRUCTIONS = `You are Chief Consigliere, a compliance decision-support assistant.
Decision support only, never legal advice or clearance.
Use pattern facts only. Do not request or repeat real names, client facts, whistleblower identity, privileged content, or live matter details.
Start short. If the question is broad or unclear, give a short first direction and ask only answer-changing questions.
If the matter is live, give the safest next action first.
If the user asks about local law and local law has not been verified, say that plainly, then answer from compliance-program logic.
Company documents govern. Your material compares, improves, or fills gaps; it never silently replaces internal rules.
Never say "screening passed = cleared." Separate facts, assumptions, inferences, gaps, and required actions where needed.
Use clear visual structure, bullets, and compact tables when checks, owners, evidence, or actions are needed.
End substantive answers with sources or basis. Use public source labels and links where known. Never cite internal file names as authority.`;

function getInstructions() {
  const configured = process.env.ACI_OS_INSTRUCTIONS_FILE || "runtime_instructions.md";
  const candidates = [
    path.resolve(APP_ROOT, configured),
    path.resolve(REPO_ROOT, configured)
  ];
  for (const file of candidates) {
    if (fs.existsSync(file) && safeReadPath(file)) {
      return fs.readFileSync(file, "utf8");
    }
  }
  return FALLBACK_INSTRUCTIONS;
}

function safeReadPath(file) {
  const resolved = path.resolve(file);
  const allowedRoots = [APP_ROOT, REPO_ROOT].map((root) => path.resolve(root) + path.sep);
  return allowedRoots.some((root) => resolved.startsWith(root));
}

function readKnowledgeManifest() {
  const manifestFile = path.join(APP_ROOT, "knowledge_manifest.json");
  if (!fs.existsSync(manifestFile)) return [];
  return JSON.parse(fs.readFileSync(manifestFile, "utf8"));
}

function safeRepoPath(relativePath) {
  if (!relativePath || typeof relativePath !== "string") return null;
  const resolved = path.resolve(REPO_ROOT, relativePath);
  const root = path.resolve(REPO_ROOT) + path.sep;
  if (!resolved.startsWith(root)) return null;
  return resolved;
}

function loadKnowledgeText() {
  const files = readKnowledgeManifest();
  const chunks = [];
  for (const entry of files) {
    const file = safeRepoPath(entry.path);
    if (!file || !fs.existsSync(file)) continue;
    const text = fs.readFileSync(file, "utf8").slice(0, 20000);
    chunks.push(`\n\n--- SOURCE: ${entry.title || entry.path} ---\n${text}`);
  }
  return chunks.join("");
}

function getBasisSummary() {
  const manifest = readKnowledgeManifest().map((entry) => ({
    title: entry.title || entry.path,
    path: entry.path,
    type: entry.type || "knowledge"
  }));
  return {
    ok: true,
    mode: PUBLIC_RUNTIME ? "external-pilot" : "local",
    repoRoot: PUBLIC_RUNTIME ? "not exposed in public runtime" : REPO_ROOT,
    knowledgeFiles: manifest,
    learning: DISABLE_REPO_LEARNING ? "browser-only external pilot feedback" : "local repo learning inbox"
  };
}

function extractText(data) {
  if (typeof data.output_text === "string") return data.output_text;
  const out = data.output || [];
  const pieces = [];
  for (const item of out) {
    for (const content of item.content || []) {
      if (content.type === "output_text" && content.text) pieces.push(content.text);
      if (content.type === "text" && content.text) pieces.push(content.text);
    }
  }
  return pieces.join("\n").trim();
}

async function askOpenAI(prompt) {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    throw Object.assign(new Error("OPENAI_API_KEY is not configured."), { status: 503 });
  }

  const instructions = `${getInstructions()}\n\nSelected local knowledge basis:${loadKnowledgeText()}`;
  const response = await fetch("https://api.openai.com/v1/responses", {
    method: "POST",
    headers: {
      authorization: `Bearer ${apiKey}`,
      "content-type": "application/json"
    },
    body: JSON.stringify({
      model: process.env.OPENAI_MODEL || "gpt-4.1-mini",
      instructions,
      input: prompt,
      temperature: 0.2,
      max_output_tokens: 1400
    })
  });

  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    const message = data.error && data.error.message ? data.error.message : `OpenAI request failed (${response.status}).`;
    throw Object.assign(new Error(message), { status: response.status });
  }

  return extractText(data) || "No answer returned.";
}

async function handleAsk(req, res) {
  if (req.method !== "POST") {
    sendJson(res, 405, { ok: false, error: "Method not allowed." });
    return;
  }
  if (!requireAccess(req, res)) return;

  try {
    const body = await readJsonBody(req);
    const prompt = String(body.prompt || "").trim();
    if (!prompt) {
      sendJson(res, 400, { ok: false, error: "Prompt is required." });
      return;
    }
    const answer = await askOpenAI(prompt);
    sendJson(res, 200, { ok: true, answer });
  } catch (error) {
    sendJson(res, error.status || 500, { ok: false, error: error.message || "Direct Ask failed." });
  }
}

async function handleLearning(req, res) {
  if (req.method !== "POST") {
    sendJson(res, 405, { ok: false, error: "Method not allowed." });
    return;
  }
  if (!requireAccess(req, res)) return;

  try {
    const payload = await readJsonBody(req);
    if (DISABLE_REPO_LEARNING) {
      sendJson(res, 200, {
        ok: true,
        persisted: false,
        file: "browser-only external pilot feedback"
      });
      return;
    }

    const inbox = path.join(REPO_ROOT, "10_Product", "App_Learning_Inbox.md");
    const now = new Date().toISOString();
    const block = [
      "",
      `## ${now} - App learning signal`,
      `- Verdict: ${payload.verdict || "not stated"}`,
      `- Question pattern: ${payload.questionPattern || "not stated"}`,
      `- Answer first line: ${payload.answerFirstLine || "not stated"}`,
      `- What worked: ${payload.whatWorked || "not stated"}`,
      `- What failed: ${payload.whatFailed || "not stated"}`,
      `- Suggested fix: ${payload.suggestedFix || "not stated"}`,
      `- Confidential: ${payload.confidential ? "yes" : "no"}`,
      "",
      "```text",
      String(payload.fullDiscussion || "").slice(0, 12000),
      "```",
      ""
    ].join("\n");
    fs.appendFileSync(inbox, block, "utf8");
    sendJson(res, 200, { ok: true, persisted: true, file: "10_Product/App_Learning_Inbox.md" });
  } catch (error) {
    sendJson(res, 500, { ok: false, error: error.message || "Learning save failed." });
  }
}

async function handleBasis(req, res) {
  if (req.method !== "GET") {
    sendJson(res, 405, { ok: false, error: "Method not allowed." });
    return;
  }
  if (!requireAccess(req, res)) return;
  try {
    sendJson(res, 200, getBasisSummary());
  } catch (error) {
    sendJson(res, 500, { ok: false, error: error.message || "Basis unavailable." });
  }
}

async function handleHealth(req, res) {
  if (req.method !== "GET") {
    sendJson(res, 405, { ok: false, error: "Method not allowed." });
    return;
  }
  sendJson(res, 200, {
    ok: true,
    directAsk: Boolean(process.env.OPENAI_API_KEY),
    mode: PUBLIC_RUNTIME ? "external-pilot" : "local",
    access: {
      required: REQUIRE_ACCESS,
      configured: accessConfigured(),
      unlocked: hasAccess(req)
    }
  });
}

async function handleUnlock(req, res) {
  if (req.method !== "POST") {
    sendJson(res, 405, { ok: false, error: "Method not allowed." });
    return;
  }
  if (!REQUIRE_ACCESS) {
    sendJson(res, 200, { ok: true, unlocked: true });
    return;
  }
  if (!accessConfigured()) {
    sendJson(res, 423, {
      ok: false,
      error: "Pilot access is not configured.",
      accessRequired: true,
      configMissing: true
    });
    return;
  }

  try {
    const body = await readJsonBody(req);
    const passcode = String(body.passcode || "");
    if (!safeEqual(passcode, process.env.ACI_OS_PILOT_PASSCODE)) {
      sendJson(res, 401, { ok: false, error: "Wrong pilot passcode.", accessRequired: true });
      return;
    }
    sendJson(res, 200, { ok: true, unlocked: true }, { "set-cookie": accessCookie() });
  } catch (error) {
    sendJson(res, 500, { ok: false, error: error.message || "Unlock failed." });
  }
}

module.exports = {
  APP_ROOT,
  handleAsk,
  handleLearning,
  handleBasis,
  handleHealth,
  handleUnlock
};
