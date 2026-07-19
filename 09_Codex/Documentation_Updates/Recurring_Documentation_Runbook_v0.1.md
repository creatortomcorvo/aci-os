# Recurring Documentation Runbook v0.1

Response timestamp: 2026-07-19 18:31:00 +02:00 Europe/Zurich

Status: active Codex operating runbook.

Purpose: define how Codex should maintain project documentation after ongoing ACI-OS work.

## 1. Documentation Cadence

| Cadence | Output | Folder |
|---|---|---|
| Every 2 days | Documentation supplement | `09_Codex/Documentation_Updates/Supplements` |
| Every 2 weeks | Full documentation refresh | `09_Codex/Documentation_Updates` |

## 2. Supplement Rule

Every supplement must cover:

1. project structure changes;
2. architecture changes;
3. steps toward commercialization;
4. changes to product knowledge and Folder 10;
5. app / frontend / backend changes;
6. GPT instruction or knowledge-bundle changes;
7. database, learning inbox, journal, and feedback-loop updates;
8. GitHub/Vercel status;
9. open items using `>_<` where something needs fixing.

## 3. Full Refresh Rule

Every full refresh must update the baseline documentation, not merely append notes.

It must answer:

| Question | Required answer |
|---|---|
| Where are docs stored? | Current folder map and canonical sources. |
| Where is the front end? | Current app folder, deployment URL if known, local URL, mobile URL. |
| Where is the backend? | Local backend, cloud backend status, API key handling. |
| Where is knowledge? | GPT bundle, knowledge manifest, methodology, expert routes. |
| Who does what? | Tom, Codex, GPT, app, GitHub, Vercel, future backend. |
| What changed commercially? | Pilot status, target user, blockers, next gate. |
| What is unsafe/open? | Clear `>_<` list. |

## 4. Vocabulary To Use

Use ACI-OS vocabulary:

- Compliance Consigliere
- Decision Front Door
- pattern facts only
- no-clearance rule
- methodology -> product -> brand
- learning signal
- App Learning Inbox
- processed learning log
- Chief Consigliere GPT
- static Vercel pilot
- secure backend
- profile layer
- local knowledge whitelist
- Stage 4 internal use
- controlled pilot

## 5. Evidence Rule

Do not write from memory alone if repo verification is cheap.

Every run should check:

| Evidence | Command / source |
|---|---|
| Git status | `git status --short --branch` |
| Latest commit | `git log -1 --oneline` |
| Product folder | `10_Product` |
| App folder | `10_Product/mobile_web_app_mvp` |
| Learning inbox | `10_Product/App_Learning_Inbox.md` |
| Processed log | `10_Product/App_Learning_Processed_Log.md` |
| Project status | `00_Project/WHERE_ARE_WE.md` |

## 6. Change Log

- v0.1 - Created recurring documentation operating runbook and cadence.
