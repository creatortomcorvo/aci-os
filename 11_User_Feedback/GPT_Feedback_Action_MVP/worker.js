const MAX_TOTAL_CHARS = 12000;

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (request.method === "GET" && url.pathname === "/health") {
      return json({ status: "ok", service: "aci-os-gpt-feedback-intake" });
    }

    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: corsHeaders() });
    }

    if (request.method !== "POST" || url.pathname !== "/v1/feedback") {
      return json({ error: "not_found" }, 404);
    }

    const auth = request.headers.get("Authorization") || "";
    const expected = `Bearer ${env.INTAKE_API_KEY}`;
    if (!env.INTAKE_API_KEY || auth !== expected) {
      return json({ error: "unauthorized" }, 401);
    }

    let body;
    try {
      body = await request.json();
    } catch {
      return json({ error: "invalid_json" }, 400);
    }

    const validation = validateFeedback(body);
    if (!validation.ok) {
      return json({ error: validation.error }, validation.status || 400);
    }

    const issue = buildIssue(body);
    const created = await createGitHubIssue(env, issue);

    return json(
      {
        status: "accepted",
        intake_id: String(created.number || ""),
        issue_url: created.html_url || "",
        message:
          "Feedback accepted into quarantine inbox. It is not ACI-OS memory until Codex/Tom review.",
      },
      201
    );
  },
};

function validateFeedback(body) {
  const required = [
    "source_gpt",
    "date",
    "question_pattern",
    "answer_problem",
    "confidential",
    "action_proposed",
  ];

  for (const field of required) {
    if (body[field] === undefined || body[field] === null || body[field] === "") {
      return { ok: false, error: `missing_required_field:${field}` };
    }
  }

  if (body.confidential === true) {
    return {
      ok: false,
      status: 422,
      error:
        "confidential_feedback_rejected_remove_names_secrets_privileged_or_live_facts",
    };
  }

  if (!["ACT", "PARK", "DISCARD"].includes(body.action_proposed)) {
    return { ok: false, error: "invalid_action_proposed" };
  }

  const total = JSON.stringify(body).length;
  if (total > MAX_TOTAL_CHARS) {
    return { ok: false, error: "payload_too_large" };
  }

  const textFields = [
    "source_gpt",
    "date",
    "question_pattern",
    "answer_problem",
    "what_i_liked",
    "what_failed",
    "suggested_fix",
    "full_answer_excerpt",
  ];

  for (const field of textFields) {
    if (body[field] !== undefined && typeof body[field] !== "string") {
      return { ok: false, error: `field_must_be_string:${field}` };
    }
  }

  return { ok: true };
}

function buildIssue(body) {
  const date = safe(body.date);
  const pattern = truncate(safe(body.question_pattern), 80);
  const title = `[GPT feedback] ${date} - ${pattern}`;

  const issueBody = [
    "# GPT Feedback Intake",
    "",
    "Status: quarantine inbox item. Not ACI-OS memory until reviewed.",
    "",
    `Source GPT: ${safe(body.source_gpt)}`,
    `Date: ${date}`,
    `Confidential: ${body.confidential ? "yes" : "no"}`,
    `Action proposed: ${safe(body.action_proposed)}`,
    `Full answer included: ${body.full_answer_included ? "yes" : "no"}`,
    "",
    "## Question Pattern",
    "",
    safe(body.question_pattern),
    "",
    "## Answer Problem",
    "",
    safe(body.answer_problem),
    "",
    "## What I Liked",
    "",
    safe(body.what_i_liked || ""),
    "",
    "## What Failed",
    "",
    safe(body.what_failed || ""),
    "",
    "## Suggested Fix",
    "",
    safe(body.suggested_fix || ""),
    "",
    "## Full Answer Excerpt",
    "",
    safe(body.full_answer_excerpt || ""),
    "",
    "## Codex Review",
    "",
    "Verdict: ACT / PARK / DISCARD",
    "",
    "Reason:",
    "",
    "Mapped to:",
    "",
    "Files changed:",
    "",
    "Follow-up:",
    "",
  ].join("\n");

  return {
    title,
    body: issueBody,
    labels: ["gpt-feedback-inbox", "needs-triage"],
  };
}

async function createGitHubIssue(env, issue) {
  const owner = env.GITHUB_OWNER;
  const repo = env.GITHUB_REPO;
  const token = env.GITHUB_TOKEN;

  if (!owner || !repo || !token) {
    throw new Error("missing_github_environment");
  }

  const response = await fetch(
    `https://api.github.com/repos/${owner}/${repo}/issues`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/vnd.github+json",
        "Content-Type": "application/json",
        "User-Agent": "aci-os-feedback-intake",
        "X-GitHub-Api-Version": "2022-11-28",
      },
      body: JSON.stringify(issue),
    }
  );

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`github_issue_create_failed:${response.status}:${text}`);
  }

  return response.json();
}

function json(payload, status = 200) {
  return new Response(JSON.stringify(payload), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      ...corsHeaders(),
    },
  });
}

function corsHeaders() {
  return {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
    "Access-Control-Allow-Headers": "Authorization,Content-Type",
  };
}

function safe(value) {
  return String(value || "").replace(/\r\n/g, "\n").trim();
}

function truncate(value, max) {
  return value.length > max ? `${value.slice(0, max - 3)}...` : value;
}

