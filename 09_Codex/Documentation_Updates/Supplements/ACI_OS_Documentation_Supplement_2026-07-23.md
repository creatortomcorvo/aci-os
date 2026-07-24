# ACI-OS Documentation Supplement — 2026-07-23

Response timestamp: 2026-07-23 20:02:31 +02:00 Europe/Zurich

Status: first recurring supplement; evidence-based catch-up from the 2026-07-19 baseline because no earlier supplement exists.

## 1. Period Covered

| Field | Value |
|---|---|
| From | 2026-07-19 18:31:00 +02:00 (baseline documentation timestamp) |
| To | 2026-07-23 20:02:31 +02:00 |
| Repo | `C:\Users\Tomasz Kruk\Documents\ACI-OS` |
| Baseline | `origin/main:09_Codex/Documentation_Updates/ACI_OS_Project_IT_Documentation_v1.0_2026-07-19.md` |
| Local HEAD | `27441e0 Record app learning feedback` |
| GitHub HEAD known locally | `e753e3a Update Vercel pilot app and intelligence radar` |
| GitHub sync | >_< local `main` is behind `origin/main` by 5 commits and has substantial uncommitted work |
| Operating phase | Post-Gate-2 internal consolidation; Stage 4 internal use continues with pattern facts only |

## 2. Fast Direction

Do not deploy or merge blindly. First reconcile the five GitHub commits with the dirty local app, learning-loop, and GPT v2.21 changes; then test one combined pilot state. The no-clearance rule and methodology -> product -> brand sequence remain unchanged.

## 3. What Changed

| Area | Change since baseline | Evidence |
|---|---|---|
| Project structure | GitHub added the recurring documentation system: baseline, runbook, and supplement template. The local checkout has only the `Supplements` directory because it is behind GitHub. Local work also added learning-workflow, decision-queue, processed-state, journal-memory, test, GPT, and proposed D28 amendment files. A root-level `ACI-OS_Decision_Panel_Specification_v2.md` appeared concurrently during this run; it is unreviewed input in a non-canonical location, not approved architecture. | `origin/main` commit `0760c6b`; local `git status`; `09_Codex/Documentation_Updates`; new files in `10_Product`, `06_Testing`, and repo root |
| Architecture | GitHub added a Vercel serverless API scaffold (`ask`, `basis`, `health`, `learning`, `unlock`, shared runtime) with server-side model calls and pilot access-cookie logic. Locally, `server.js` separately gained learning status and durable journal archive routes. These two lines are not yet reconciled. | `origin/main` commit `295d931`; `10_Product/mobile_web_app_mvp/server.js` |
| App / frontend | Local app moved through documented versions v0.25-v0.32: approval-gated Learning IDs, processed-state cleanup, Export to Memory, fixed three-zone desktop layout, center-only conversation scrolling, stationary composer, and conversation-repair behavior. Mobile remains stacked. | `10_Product/mobile_web_app_mvp/README.md`; changes in `app.js`, `index.html`, `styles.css`, `service-worker.js` |
| Backend / API | No production secure backend or external database is verified. GitHub contains serverless pilot functions; the local backend still supports repo writes, local knowledge loading, learning-state reads, and journal-memory appends. Browser code still does not hold the API key. | `origin/main:10_Product/mobile_web_app_mvp/api/*`; local `server.js`; `.env.example`; `.gitignore` |
| GPT instructions | Local runtime advanced from v2.17 to v2.18 and then v2.21. New behavior resolves short follow-ups against the preceding claim, distinguishes source requirement from practitioner mapping, keeps control metadata silent, and repairs terse corrections without reopening intake. | `Chief_Consigliere_GPT_Instructions_Gate2_v2.18_under8000.md`; `...v2.21_under8000.md` |
| Knowledge bundle / whitelist | The Knowledge Pack now points to instruction v2.21. The local knowledge whitelist remains selective (16 listed files), including the Decision Front Door, profile layer, local-law gap rule, D28 v1.0, document standards, and core practitioner methods. The generated Knowledge Bundle itself is not shown as rebuilt in Git status. | `Chief_Consigliere_GPT_Knowledge_Pack_v0.1.md`; `mobile_web_app_mvp/knowledge_manifest.json`; `git status` |
| Learning database / inbox | The learning loop now uses unique Learning IDs, explicit `OK` / `MODIFY` / `DISCARD`, a decision queue, JSON processed state, durable processed learning log, and raw-item cleanup after verified completion. Seven Learning IDs are marked complete. Two 2026-07-22 raw signals remain in the active App Learning Inbox. | `App_Learning_Workflow_v0.1.md`; `App_Learning_Decision_Queue.md`; `App_Learning_Processed_State.json`; `App_Learning_Processed_Log.md`; `App_Learning_Inbox.md` |
| Journal / profile layer | Journal cards can be appended to local project memory before local removal. The profile layer still captures industries and operating/exposure jurisdictions and injects them into prompts and learning signals. No cross-device profile or journal database exists. | `App_Journal_Memory.md`; app `README.md`; `app.js`; `index.html` |
| Testing / QA | Added the app-learning approval workflow test plus Stage 4 cases TC-S9 (preceding-claim/source challenge and silent metadata) and TC-S10 (terse-correction conversation repair). The processed log records live regression tightening for TC-S10. | `06_Testing/App_Learning_Approval_Workflow_Test_v0.1.md`; `06_Testing/Stage4_Adversarial_Test_Cases_v0.1.md`; processed learning log |
| Commercialization | GitHub moved beyond a purely static Vercel pilot by adding serverless pilot scaffolding, but no production-readiness or controlled-pilot gate pass is evidenced. Stage 3 and Stage 5 remain not entered. No pricing or packaging decision changed. | `AGENTS.md`; baseline documentation; `origin/main` commit `295d931`; no verified deployment URL found |
| Research | GitHub added an ACI-OS intelligence radar report dated 2026-07-21. It is research input, not doctrine. | `origin/main` commit `e753e3a` |

## 4. Accepted Learning Signals

| Learning signal | ACT / PARK / DISCARD | Result |
|---|---|---|
| Short ISO follow-up was routed to internal metadata instead of the immediately preceding source claim | ACT after `MODIFY`, then `OK` | GPT v2.18; direct source-containment answer rule; requirement/mapping/recommendation labels; TC-S9 |
| Terse or frustrated correction did not repair the conversation | ACT after `OK` | Product principle; GPT v2.21; deterministic two-sentence unresolved repair; TC-S10; app runtime moved to v2.21 |
| One historical metadata-exposure signal | ACT as duplicate closure | No new behavior; existing v2.18/v2.21 and TC-S9 were confirmed sufficient |
| Four further metadata/repair exports | ACT as duplicate closure | No duplicate product changes; IDs logged, marked complete, and removed from the active inbox |
| 2026-07-22 08:22 positive signal | >_< pending | Legacy active-inbox item without a Learning ID; requires triage under the approval workflow |
| `AL-20260722232601-e2943d06` positive signal | >_< pending | Requires `OK`, `MODIFY`, or `DISCARD`; its nine-item answer conflicts with the validated seven-element backbone by presenting third-party management as a separate element |

## 5. Folder 10 Product Updates

| File / group | Type | Why it changed |
|---|---|---|
| `App_Learning_Workflow_v0.1.md` | Operating contract | Makes exported learning input rather than authority and requires approval before implementation |
| `App_Learning_Decision_Queue.md` | Decision register | Preserves proposal, approval, implementation, and duplicate-closure history |
| `App_Learning_Processed_State.json` | Local machine-readable state | Lets the app remove only completed journal cards |
| `App_Learning_Processed_Log.md` | Durable audit log | Records approved actions and duplicate closures after raw cleanup |
| `App_Journal_Memory.md` | Local durable journal | Preserves pattern-only journal cards before UI cleanup |
| `Chief_Consigliere_GPT_Instructions_Gate2_v2.18_under8000.md` | GPT instruction | Source-follow-up correction and silent control metadata |
| `Chief_Consigliere_GPT_Instructions_Gate2_v2.21_under8000.md` | Current local GPT instruction | Conversation repair tightened through v2.19-v2.21 |
| `Chief_Consigliere_GPT_Knowledge_Pack_v0.1.md` | Packaging pointer | Current instruction reference moved to v2.21 |
| `mobile_web_app_mvp/*` | Frontend/local backend | Learning approval, journal export, desktop mechanics, composer, runtime v2.21 |
| `Compliance_Control_Design_Rules_D28_Amendment_Spec_v0.1.md` | External-input proposal | >_< awaiting `OK`, `MODIFY`, or `DISCARD`; no doctrine change is authorized |

Concurrent root input: `ACI-OS_Decision_Panel_Specification_v2.md` describes itself as build-ready and as replacing an existing panel. Under AGENTS.md, that status is not authoritative. It requires act/park/discard review against the Blueprint and current repo layout before any implementation or routing.

## 6. Architecture Impact

| Decision / fact | Impact |
|---|---|
| Compliance Consigliere remains the reasoning system; the app remains the Decision Front Door | Product behavior continues to be methodology-led, not an independent clearance engine |
| Pattern facts only and the no-clearance rule remain absolute | Neither local nor remote pilot may solicit real employer/client facts or imply approval |
| Learning is now approval-gated | A learning signal cannot silently rewrite methodology, GPT instructions, tests, or app behavior |
| Local file stores expanded | Markdown plus JSON provide traceability, but they are not a multi-user database, secure retention layer, or cross-device profile layer |
| GitHub serverless functions and local `server.js` evolved separately | >_< one tested backend contract is needed before deployment; otherwise route and behavior drift are likely |
| Local knowledge whitelist remains explicit | The app does not load the full repo; pending D28 changes must not enter the whitelist/bundle before approval and implementation |
| Static Vercel pilot now has optional serverless scaffolding in GitHub | This is a step toward a secure backend, not proof that authentication, privacy, retention, deletion, logging, or operational security are complete |

## 7. Commercialization Impact

| Topic | Current view |
|---|---|
| External testers | >_< controlled pilot is not entered; no external-use authorization follows from the serverless code |
| Vercel / remote app | GitHub has static-pilot configuration plus serverless pilot functions; no public deployment URL or live health result was verified in this run |
| Security / privacy | API keys remain server-side by design. Authentication scaffold exists in GitHub, but production security, storage, retention/deletion, and privacy controls are not evidenced as complete |
| Profile layer | Useful for calibration, but remains local and no-secret; it is not yet a secure customer profile service |
| Pricing / packaging | No verified change |
| Commercialization sequence | methodology -> product -> brand remains controlling |
| Next gate | Reconcile and test one combined local/GitHub build; a separate decision is still required before a controlled pilot |

## 8. GitHub and Deployment Status

| Check | Result |
|---|---|
| Local branch | `main` |
| Local HEAD | `27441e0` |
| Known `origin/main` | `e753e3a` |
| Divergence | >_< local is behind by 5 commits |
| Remote-only changes | Documentation system; Vercel config; serverless API scaffold; app update; intelligence radar |
| Local uncommitted changes before this supplement | 13 modified tracked files and 9 untracked files, including the concurrently added unreviewed Decision Panel specification |
| This supplement | New untracked file until committed |
| Deployment URL | >_< not found or verified in repo evidence |
| Safe sync posture | Do not pull/merge automatically over the dirty overlapping app work; preserve and reconcile first |

## 9. Open Items

| No. | Item | Status | Next action | Owner |
|---|---|---|---|---|
| 1 | Reconcile dirty local work with 5 remote commits, including overlapping app/backend files | >_< open, highest priority | Preserve local changes, compare remote serverless contract, merge deliberately, then run smoke/regression checks | Tom + Codex |
| 2 | Canonical runbook/template absent from local checkout | >_< open | Recover through the controlled Git reconciliation; do not create divergent replacements | Codex |
| 3 | Verify actual Vercel deployment and runtime | >_< open | Confirm URL, root directory, `/api/health`, access behavior, no repo exposure, and browser-only/repo-learning boundary | Tom + Codex |
| 4 | Decide two active App Learning Inbox items | >_< open | Review evidence and choose `OK`, `MODIFY`, or `DISCARD`; do not absorb the nine-element formulation | Tom |
| 5 | D28 amendment proposal | >_< awaiting decision | Apply external-input discipline; no implementation without explicit decision | Tom |
| 6 | Knowledge Bundle drift | >_< open | After approved doctrine/instruction changes settle, rebuild with the script and verify source set; do not hand-edit generated doctrine | Codex |
| 7 | Chief Consigliere GPT editor state | >_< unknown | Confirm whether v2.21 and the current bundle were manually loaded into the GPT surface | Tom |
| 8 | Secure backend completeness | >_< open | Define and test auth, storage, retention/deletion, logs, error handling, and privacy before real remote use | Tom + Codex |
| 9 | Controlled pilot entry | >_< not entered | Keep Stage 4 internal use; make separate Stage 3/5 entry decision before external testing | Tom |
| 10 | Stage 0b written memo | >_< recommended evidence gap | Create written confirmation memo for evidence-trail consistency when Tom prioritizes it | Tom |
| 11 | App README version chronology | >_< documentation defect | Reorder v0.23-v0.32 change-log lines without changing substance during the reconciliation pass | Codex |
| 12 | Concurrent Decision Panel specification | >_< unreviewed external input and non-canonical root location | Apply act/park/discard review against the Blueprint; do not build, relocate, or treat its replacement claim as authority without Tom's decision | Tom + Codex |

## 10. Next 2 Days

| Priority | Action | Owner | Evidence of completion |
|---|---|---|---|
| 1 | Reconcile local and `origin/main` without losing either the serverless scaffold or local v0.25-v0.32 work | Tom + Codex | Clean reviewed diff; no unresolved conflicts |
| 2 | Run one combined app check: syntax/startup, Direct Ask boundary, local knowledge whitelist, Learning ID flow, processed cleanup, Journal export, TC-S9, and TC-S10 | Codex | Timestamped test record with pass/fail evidence |
| 3 | Verify Vercel status without exposing secrets | Tom + Codex | Confirmed URL/health/access result or explicit not-deployed status |
| 4 | Resolve the two active inbox signals, the D28 proposal, and the Decision Panel specification through the approval gates | Tom | Recorded `OK`, `MODIFY`, or `DISCARD` decisions |
| 5 | After reconciliation and approvals, rebuild the Knowledge Bundle if required and update Chief Consigliere GPT manually | Tom + Codex | Bundle verification plus confirmed GPT editor version |

## 11. Source Register For This Supplement

| Source | Use |
|---|---|
| `AGENTS.md` v0.4.18 | Controlling project phase, vocabulary, doctrine boundaries, approval gates |
| `origin/main:09_Codex/Documentation_Updates/Recurring_Documentation_Runbook_v0.1.md` | Required coverage and evidence checks |
| `origin/main:09_Codex/Documentation_Updates/ACI_OS_Documentation_Supplement_Template_v0.1.md` | Supplement structure |
| `origin/main:09_Codex/Documentation_Updates/ACI_OS_Project_IT_Documentation_v1.0_2026-07-19.md` | Baseline |
| `git status`, `git log`, `git diff`, `main...origin/main` | Local/remote change and sync evidence |
| `00_Project/WHERE_ARE_WE.md` | Current phase and standing project position |
| `10_Product/mobile_web_app_mvp` | Frontend, local backend, local knowledge whitelist, pilot documentation |
| `10_Product/App_Learning_*` and `App_Journal_Memory.md` | Learning inbox, processed log, approval state, journal archive |
| Chief Consigliere GPT v2.18/v2.21 and Knowledge Pack | GPT behavior/package change |
| Stage 4 and app-learning tests | QA evidence |

## 12. Change Log

- v0.1 - First recurring documentation supplement; records remote documentation/serverless additions, local approval-gated learning and app/GPT evolution, and the unresolved local/GitHub divergence.
