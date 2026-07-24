# ACI-OS Mobile Web App MVP

Response timestamp: 2026-07-12 00:57:40 +02:00 Europe/Zurich

Status: private no-secret prototype. Not a production app.

## Purpose

This is the first private web app shell for ACI-OS. It gives Tom an iPhone-friendly and desktop-browser front door before a secure backend exists.

## What It Does Now

- prepares a clean Chief Consigliere GPT prompt with silent control metadata, deadline, audience, and no-secret reminder;
- can return a direct answer when run through the local backend with `OPENAI_API_KEY`;
- gives a local router preview for common patterns;
- stores a local pattern journal in the browser and can send learning notes into the ACI-OS repo;
- sends direct-answer feedback to `10_Product/App_Learning_Inbox.md` for future system improvement;
- assigns every new export a Learning ID and keeps it pending until Tom decides `OK`, `MODIFY`, or `DISCARD`;
- removes completed local journal cards after the approved change is implemented and recorded in `10_Product/App_Learning_Processed_Log.md`;
- supports simple follow-up turns by sending recent local conversation context with the next question;
- injects only an approved local knowledge whitelist into Direct Ask;
- supports a local profile layer: industries, operating jurisdictions, and exposure jurisdictions;
- uses a two-column desktop layout while preserving the same mobile flow on iPhone;
- exports journal entries as markdown via clipboard;
- can be added to iPhone Home Screen when served over `localhost` or HTTPS.

## What It Does Not Do Yet

- it does not hold API keys in the browser;
- it does not store company secrets securely;
- it does not authenticate users;
- it does not sync memory across devices;
- it does not replace Chief Consigliere GPT.
- it does not automatically rewrite methodology or prompts without Codex review.

## Learning Loop

`Send learning` is a system-improvement signal, not just a save button.

| Step | What happens |
| --- | --- |
| 1 | The app exports the latest answer feedback plus the full available discussion with a unique Learning ID. |
| 2 | Codex explains what it learned, proposes exact changes, and asks Tom for `OK`, `MODIFY`, or `DISCARD`. |
| 3 | Only an approved proposal becomes a rule, test, documentation update, or app change. |
| 4 | Codex records the durable result and marks the Learning ID complete. |
| 5 | The app removes the completed local journal card; unresolved items remain pending. |

## Safety Boundary

Use only pattern facts. Do not enter names, client facts, employer/client data, whistleblower identity, privileged content, investigation facts, or live matter details.

## Local Run - Prompt Preparation Only

From this folder, run:

```powershell
.\run_local_preview.ps1
```

Then open:

```text
http://127.0.0.1:8080
```

For iPhone testing on the same Wi-Fi, run:

```powershell
.\run_local_preview.ps1 -Lan
```

Use the printed iPhone URL. Windows may ask for firewall permission.

## Local Run - Direct Ask Backend

1. Revoke the API key that was pasted into chat.
2. Create a fresh OpenAI API key.
3. Copy `.env.example` to `.env`.
4. Paste the fresh key into `.env`.
5. Run:

```powershell
.\run_direct_ask_preview.ps1
```

Open:

```text
http://127.0.0.1:8080
```

The mobile app will call the local backend at `/api/ask`. The API key stays in `.env`, which is ignored by Git. Direct Ask uses `knowledge_manifest.json` to load only approved local knowledge files.

## Next Architecture Step

The next version should add a secure backend:

| Layer | Purpose |
| --- | --- |
| Mobile web front end | Question intake, calibration, journal UI |
| Backend | API keys, prompt assembly, model calls, source checking |
| Storage | User profile, memory, logs, retention and deletion |
| Admin | Versioned methodology, test mode, feedback quarantine |

## Change Log

v0.51 - moved Direct Ask to GPT instruction v2.28 and added deterministic Personal protection consideration enforcement for credible individual exposure, with ordinary company-side questions excluded.

v0.50 - Copy includes sources for any answer whose Sources panel is open; hidden or unrequested sources remain excluded.

v0.49 - reorganized answer actions into Explore further (Deeper) and Convert current discussion into (Decision snapshot, Checklist, Memo, Email); Email creates a draft only and never sends.

v0.48 - moved New task from the small section header into the prominent composer action area: beside Ask initially and beside Continue during a discussion.

v0.47 - numbered menus now invite one or more selections; deterministic execution explicitly excludes every unselected option and uses instruction v2.27.

v0.46 - added deterministic app-level execution for compact numbered selections after instruction-only live tests still confirmed choices instead of producing all selected outputs.

v0.45 - moved Direct Ask to instruction v2.26 after live testing: numeric multi-selections now execute immediately using available context, with provisional gaps instead of another context request.

v0.44 - moved Direct Ask to instruction v2.25: every selectable menu is numbered, and compact numeric replies can select and execute multiple options.

v0.43 - removed the development-only Router preview button and its unused local preview behavior; Ask is now the single initial action.

v0.42 - stopped follow-up history from nesting constructed backend prompts: conversation context now uses only the visible user question and assistant answer, with bounded context length.

v0.41 - made accepted offers deterministic in follow-up prompts after live v2.23 testing still repeated a checklist offer; moved Direct Ask to instruction v2.24.

v0.40 - moved Direct Ask to instruction v2.23; Deeper now develops one decision-critical point, and affirmative replies immediately execute the most recent offered artifact.

v0.39 - moved Direct Ask to instruction v2.22 after approved Good-signal consolidation: backbone-correct program overviews and concrete plans after numbered replies.

v0.38 - kept the existing source-selection logic but hid Sources / Basis by default; each answer now has its own Sources / Hide sources toggle beside Good and Copy.

v0.37 - removed the incomplete one-tap Issue signal; each answer-card Copy button now copies the full discussion through that answer.

v0.36 - made Decision Snapshot truly on demand: the option is always visible beside the other answer actions, ordinary answers no longer request snapshot metadata, and clicking the button generates, displays, and then toggles the snapshot.
v0.35 - hardened Decision Snapshot extraction in both backend and browser: marker blocks may appear anywhere or inside a text fence, are always removed from the visible answer, and still feed the optional snapshot button.
v0.34 - changed Decision Snapshot from default display to an optional post-answer button beside Deeper, Make checklist, and Turn into memo; clicking reveals or hides the latest snapshot.
v0.33 - added an optional, non-sticky Decision Snapshot above the latest live-decision answer with Do now, What would change this, Owner, and Open gap; the full answer and safe fallback remain unchanged.
v0.25 - added approval-gated Learning IDs, pending journal status, processed-state synchronization, and automatic cleanup of completed local learning cards.
v0.24 - added CAL-4 profile layer: industry chips, operating jurisdictions, exposure jurisdictions, prompt injection, and profile-aware learning notes.
v0.27 - replaced clipboard Export with Export to Memory: Journal cards are durably appended to `10_Product/App_Journal_Memory.md` and cleared locally only after a successful server write.
v0.28 - added Codex-style desktop mechanics: independently fixed left calibration and right learning rails, center-only conversation scrolling, and a stronger pinned composer; mobile remains stacked.
v0.29 - hard-locked the desktop shell to the viewport and removed result `scrollIntoView`, so header, warning, calibration, learning rail, composer, and bottom navigation cannot be pulled away when a new answer renders.

v0.30 - restored a centered readable desktop width and larger desktop controls while preserving the locked three-zone shell and stationary composer.

v0.31 - moved the continuation composer into its own compact bottom row, ChatGPT-style, so the conversation scrolls above it and no answer content is hidden behind the composer.

v0.32 - moved Direct Ask to GPT instruction v2.21 and added approved conversation repair for terse or frustrated correction signals, tightened by live regression to a deterministic two-sentence repair.
v0.26 - made request/control codes silent internal metadata and moved Direct Ask to GPT instruction v2.18.
v0.23 - clarified the learning loop: full discussion is sent to the inbox; local journal shows a summary; processed lessons are tracked in `App_Learning_Processed_Log.md`; Direct Ask now defaults to GPT instruction v2.15.
v0.22 - applied safe E15 visual patch: quiet learning card, verdict chips, refined buttons, subdued tab bar, sticky continue bar, thin scrollbars, and tighter desktop rhythm.
v0.21 - moved "Send learning to ACI-OS" into the left calibration column and kept the right side for the conversation only.
v0.20 - changed feedback save into a repo learning bridge: "Send learning" writes to `10_Product/App_Learning_Inbox.md`; removed ACT/PARK/DISCARD from the app flow.
v0.19 - added structured answer feedback capture: verdict, worked, failed, suggested fix, and ACT/PARK/DISCARD journal action.
v0.18 - added approved local knowledge whitelist for Direct Ask and Basis tab visibility for loaded files.
v0.17 - aligned mobile/PWA manifest and mobile chat width with the desktop discussion changes.
v0.16 - stacked calibration controls vertically and narrowed the left column to give the discussion more width.
v0.15 - added chat keyboard behavior: Enter sends, Shift+Enter adds a new line.
v0.14 - moved the starting question composer into the right-side discussion panel; left side is calibration only on desktop.
v0.13 - simplified the intake side: removed redundant visible Ask/question labels and changed the main button to "Ask".
v0.12 - changed discussion view to ChatGPT/Claude-style chronological message pairs.
v0.11 - full discussion view now shows every prior question and full answer; added "Copy full discussion".
v0.10 - added desktop browser layout using the same Calibrate App -> Ask -> answer/discussion flow as mobile.
v0.9 - renamed the top screen heading to "Calibrate App" and added a separate "Ask" heading above the situation box.
v0.8 - moved calibration controls above the situation box, added a visible context trace, and rendered markdown tables as mobile-readable table cards.
v0.7 - latest answer now appears first; earlier turns collapse under "Earlier context" so follow-ups do not look like a loop back to the first answer.
v0.6 - changed answer area into a visible discussion thread so follow-up turns remain in context instead of replacing the screen.
v0.5 - changed service worker to network-first for prototype iteration so iPhone/browser updates appear without stale cached UI.
v0.4 - added simple local follow-up flow so the user can continue the same discussion after an answer.
v0.3 - applied Swiss-editorial dark visual direction: monochrome chrome, pattern-facts badge, color reserved for warning/verdict semantics, and serif answer rendering.
v0.2 - added local direct Ask backend using `.env`, OpenAI Responses API, and LAN preview for iPhone testing.
v0.1 - created private mobile-first PWA shell with prompt preparation, router preview, local journal, settings, manifest, and service worker.
