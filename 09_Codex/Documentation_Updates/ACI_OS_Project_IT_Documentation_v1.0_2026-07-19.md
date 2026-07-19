# ACI-OS Project IT Documentation v1.0

Response timestamp: 2026-07-19 18:31:00 +02:00 Europe/Zurich

Status: active baseline documentation.

Purpose: provide one structured technical and operating map of ACI-OS: project structure, architecture, product surfaces, knowledge stores, learning loop, deployment path, commercialization gates, and operating responsibilities.

## 1. Current Position

ACI-OS is now a repo-backed compliance decision-support project with three working layers:

| Layer | Current state | Meaning |
|---|---|---|
| Methodology | Active and repo-backed | The Kruk method, 7-element backbone, Decision Front Door, role labels, prompt rules, and pattern libraries live in markdown files. |
| Product | Local web app + GPT package | The private ACI-OS web app is the pilot front end; Chief Consigliere GPT remains the main reasoning agent. |
| Deployment | Local + GitHub + Vercel static pilot path | GitHub is synchronized; Vercel should deploy only `10_Product/mobile_web_app_mvp` as a static pilot. |

The current external deployment target is a static UI pilot, not yet a full cloud product.

## 2. Source Of Truth

| Source | Role | Current rule |
|---|---|---|
| `C:\Users\Tomasz Kruk\Documents\ACI-OS` | Authoritative local project memory | This is the working repo and project memory. |
| `AGENTS.md` | Current project instruction layer | This file wins over conflicting older project files. |
| GitHub `creatortomcorvo/aci-os` | Remote version history and Vercel source | Must be kept synchronized after meaningful changes. |
| Chief Consigliere GPT | User-facing reasoning surface | Updated manually by Tom using the current instruction file and knowledge bundle. |
| Local web app | Private front end and app pilot | Runs at `http://127.0.0.1:8080` locally and LAN URL for iPhone testing. |

## 3. Current Git / Deployment State

| Item | Current status |
|---|---|
| Branch | `main` |
| Latest confirmed commit | `6e3c6f7 Prepare mobile web app for Vercel pilot` |
| GitHub sync | Local `main` was confirmed aligned with `origin/main` after push. |
| Vercel root directory | Must be `10_Product/mobile_web_app_mvp`, not repo root. |
| Vercel preset | `Other` |
| Vercel build command | Empty |
| Vercel output directory | Empty or `.` |
| Vercel environment variables | None for static pilot |

>_< Important: deploying the whole repo root is wrong. Only the app folder should be exposed.

## 4. Repo Structure

| Folder | Purpose | Operating rule |
|---|---|---|
| `00_Project` | Status, discipline, project history, founder vision | Keep high-level project state here. Avoid multiplying status files further unless needed. |
| `00_foundation` | Foundation Map and Gate 1 evidence | Backbone methodology; do not casually rewrite. |
| `03_Kruk_Principles` | Kruk Way and core practitioner principles | Founder-method layer; should grow from Tom's real experience. |
| `04_Methodology` | Router, response patterns, risk assessment, third-party lifecycle, training design | Main method layer. New behavioral doctrine goes here first. |
| `05_Experts` | Expert routes and vertical packs | Sanctions, sports/media, cultural calibration, specialist bridges. |
| `06_Testing` | Gate tests, failure logs, transcripts, decision journal | Evidence trail for whether the system actually works. |
| `07_Research` | Market, competitor, and source research | Supports commercial and product choices; must be distinguished from doctrine. |
| `08_Articles` | Article candidates and drafts | Content engine; publication separately gated. |
| `09_Codex` | Codex operating protocols, handoff, recurring documentation | Codex-side control room. This document lives here. |
| `10_Product` | App, GPT instructions, knowledge pack, learning inbox | Product layer and packaging. |
| `11_User_Feedback` | GPT-to-Codex feedback records | Feedback intake and action experiments. |
| `12_Document_Architecture` | Document hierarchy and templates | Policy/procedure/report architecture. |
| `99_Parked` | Parked ideas and deferred items | Good ideas not active this month. |

## 5. Product Architecture

### 5.1 Local Web App

Location:

```text
10_Product/mobile_web_app_mvp
```

Current role: private front end for ACI-OS interaction, calibration, discussion, journal, and learning feedback.

| File | Role |
|---|---|
| `index.html` | Main UI shell. |
| `styles.css` | Swiss-editorial dark interface styling. |
| `app.js` | Front-end behavior, routing UI, conversation flow, profile layer, learning capture. |
| `server.js` | Local backend for Direct Ask, basis loading, and learning-to-repo writes. |
| `.env.example` | Template for local API key config. |
| `.env` | Local private API key file; ignored by Git. |
| `knowledge_manifest.json` | Whitelist of approved local knowledge files. |
| `manifest.webmanifest` | PWA metadata for browser/iPhone install. |
| `service-worker.js` | Prototype cache behavior. |
| `vercel.json` | Static pilot deployment headers and no-index guard. |

### 5.2 Local Backend

The local backend is `server.js`.

It currently supports:

| Route | Purpose |
|---|---|
| `/api/ask` | Uses server-side `.env` API key to call the model. |
| `/api/learning` | Writes learning notes into local ACI-OS files. |
| `/api/basis` | Shows approved local basis files from `knowledge_manifest.json`. |

The backend is local-only unless a secure cloud backend is built later.

### 5.3 Static Vercel Pilot

The Vercel pilot should be treated as a visual/user-flow pilot:

| Feature | Vercel static pilot |
|---|---|
| UI | Works. |
| Mobile layout | Works. |
| Prompt preparation | Works. |
| Direct Ask | Not available unless secure backend is added. |
| Repo learning write | Not available. |
| Local knowledge files | Not exposed. |
| API key | Must not be placed in browser code. |

## 6. GPT Architecture

Chief Consigliere GPT is the current reasoning surface.

| Component | Location | Role |
|---|---|---|
| GPT instructions | `10_Product/Chief_Consigliere_GPT_Instructions_Gate2_v2.17_under8000.md` | Paste into GPT instruction field manually. |
| Knowledge bundle | `10_Product/Chief_Consigliere_GPT_Knowledge_Bundle_v0.1.md` | Upload as compressed knowledge source when useful. |
| Build script | `10_Product/Build_GPT_Knowledge_Bundle.ps1` | Rebuilds the bundle from selected doctrine files. |
| Knowledge pack | `10_Product/Chief_Consigliere_GPT_Knowledge_Pack_v0.1.md` | Earlier pack / source reference. |

Operational rule: ACI-OS files are the master. GPT is an execution surface. If GPT output fails, the correction enters ACI-OS first, then instruction/knowledge bundle is updated.

## 7. Knowledge And Data Stores

| Store | Location | What it stores | Current status |
|---|---|---|---|
| Methodology files | `04_Methodology` | Router, response patterns, risk assessment, third-party method, training design | Active doctrine. |
| Expert files | `05_Experts` | Sanctions route, vertical packs, reporting bridges | Active / expanding. |
| GPT instruction files | `10_Product` | Versioned prompt instructions | Active; many historical versions preserved. |
| Knowledge bundle | `10_Product` | Condensed selected knowledge for GPT | Active but manually uploaded. |
| App learning inbox | `10_Product/App_Learning_Inbox.md` | Raw learning signals from app | Active local loop. |
| Processed learning log | `10_Product/App_Learning_Processed_Log.md` | Accepted lessons and actions | Active review trail. |
| User feedback area | `11_User_Feedback` | Feedback automation templates/records | Active experiment. |
| Browser storage | User's browser / device | Local conversation, profile, journal UI state | Not cross-device memory. |
| Future secure storage | Not built | Profile, memory, journal, retention/deletion | Required before real remote users. |

>_< Current Vercel static pilot does not write into `App_Learning_Inbox.md`. It can only store locally in that browser unless a secure backend is added.

## 8. Learning Loop

The intended loop is:

| Step | Actor | Output |
|---|---|---|
| 1 | Tom uses app or GPT | Pattern-only question and answer. |
| 2 | Tom sends learning | What worked, what failed, suggested fix. |
| 3 | Codex processes learning | ACT into rules/tests/docs/app changes; PARK if later; discard if not useful. |
| 4 | Repo changes | Methodology file, app file, GPT instruction, test case, or knowledge bundle changes. |
| 5 | GitHub sync | Commit and push. |
| 6 | GPT/Vercel update | Tom uploads new GPT instruction/bundle or Vercel redeploys from GitHub. |

Current doctrine: "Save learning" means system-improvement signal, not passive archive.

## 9. Commercialization Path

| Stage | Product state | User group | Main gate |
|---|---|---|---|
| Local prototype | C-drive + local browser | Tom only | Continue Stage 4 usage. |
| LAN prototype | iPhone on same Wi-Fi | Tom only | Stable local use. |
| Static Vercel pilot | Public URL but limited function | Visual/user-flow testing only | No secrets; no backend. |
| Private cloud app | Login-protected backend | Tom only first | Authentication, retention, API key security. |
| Controlled pilot | Selected trusted testers | External users | Stage-entry decision, no-secret pack, feedback process. |
| Customer pilot | Early target customers | Compliance leaders | Security, privacy, support, source discipline. |
| Commercial product | Paid product | Wider market | Legal, security, operations, commercial packaging. |

Immediate commercialization stance:

- Do not sell or widely publish the tool yet.
- Use Vercel only as a controlled visual/static pilot unless backend security is ready.
- Continue improving doctrine from real pattern feedback.
- Keep "Legal Counsel wearing Compliance Hat" and under-resourced compliance leaders as core user personas.

## 10. Who Does What

| Role | Responsibilities |
|---|---|
| Tom | Product owner, founder method owner, final judge of practitioner truth, GPT manual updater, Vercel/GitHub account owner. |
| Codex | Repo maintainer, documentation, app edits, test scoring, learning processing, architecture discipline, automation runner. |
| Chief Consigliere GPT | User-facing reasoning agent; must follow current pasted instructions and uploaded knowledge. |
| Local web app | Front door for asking, calibrating, journaling, and sending learning signals. |
| GitHub | Remote version control and Vercel source. |
| Vercel | Static external pilot host for app UI. |
| Future backend | Secure model calls, auth, retention, user memory, feedback ingestion. Not yet built. |

## 11. Current Risks And Fix Items

| Item | Status | Required action |
|---|---|---|
| Static Vercel limitations | Known | Tell testers this is UI/prompt pilot unless backend added. |
| No authentication | >_< open | Do not expose real-use app to external users until auth exists. |
| API key security | Controlled locally only | Never put key in browser code or public repo. |
| Learning sync from Vercel | >_< open | Build secure backend or keep feedback manual/local. |
| GPT manual update burden | Open | Continue manual paste/upload until API-managed assistant or backend exists. |
| Knowledge bundle drift | Open | Rebuild bundle after material doctrine changes. |
| Too many GPT instruction versions | Known | Keep latest file clear; historical files are archive. |

## 12. Documentation Workflow

This documentation system has three levels:

| Level | Frequency | Output |
|---|---|---|
| Baseline | Now and every major phase | Full IT/project documentation file. |
| Supplement | Every 2 days | Short update: what changed, architecture impact, commercialization impact, docs/GPT/app updates, Git state. |
| Full refresh | Every 2 weeks | Updated baseline replacing stale architecture/status assumptions. |

Supplement folder:

```text
09_Codex/Documentation_Updates/Supplements
```

Future supplement naming:

```text
ACI_OS_Documentation_Supplement_YYYY-MM-DD.md
```

Future full refresh naming:

```text
ACI_OS_Project_IT_Documentation_vX.Y_YYYY-MM-DD.md
```

## 13. Two-Week Documentation Checklist

Every full refresh should verify:

| Area | Check |
|---|---|
| Git | Latest commit, clean/dirty status, GitHub sync. |
| App | Current `mobile_web_app_mvp` version, features, open defects. |
| GPT | Latest instruction file, bundle file, uploaded/manual status. |
| Knowledge | New methodology/expert/product files since last refresh. |
| Learning | App inbox entries, processed log, unresolved feedback. |
| Testing | New test cases, smoke tests, Gate evidence, failures. |
| Commercialization | Current stage, Vercel/private pilot status, blockers. |
| Security | API key handling, secrets policy, auth/retention status. |
| Documentation | Updated file map and stale docs to park/archive. |

## 14. Next Practical Steps

| Priority | Step | Owner |
|---|---|---|
| 1 | Finish Vercel deployment using root `10_Product/mobile_web_app_mvp`. | Tom |
| 2 | Confirm external static URL opens and does not expose repo files. | Tom + Codex |
| 3 | Decide whether Vercel pilot is only for Tom or selected testers. | Tom |
| 4 | If testers are planned, prepare no-secret tester instructions. | Codex |
| 5 | Build secure backend plan before any real Direct Ask remote use. | Codex |
| 6 | Continue app-learning loop and process accepted signals into docs/app/GPT. | Tom + Codex |

## 15. Change Log

- v1.0 - First baseline IT/project documentation created after GitHub/Vercel deployment-prep commit `6e3c6f7`.
