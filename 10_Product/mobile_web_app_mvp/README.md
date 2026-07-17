# ACI-OS Mobile Web App MVP

Response timestamp: 2026-07-12 00:57:40 +02:00 Europe/Zurich

Status: private no-secret prototype. Not a production app.

## Purpose

This is the first private web app shell for ACI-OS. It gives Tom an iPhone-friendly and desktop-browser front door before a secure backend exists.

## What It Does Now

- prepares a clean Chief Consigliere GPT prompt with request code, deadline, audience, and no-secret reminder;
- can return a direct answer when run through the local backend with `OPENAI_API_KEY`;
- gives a local router preview for common patterns;
- stores a local pattern journal in the browser and can send learning notes into the ACI-OS repo;
- sends direct-answer feedback to `10_Product/App_Learning_Inbox.md` for future system improvement;
- keeps raw learning in the inbox and tracks accepted actions in `10_Product/App_Learning_Processed_Log.md`;
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
| 1 | The app sends the latest answer feedback plus the full available discussion to `10_Product/App_Learning_Inbox.md`. |
| 2 | Codex deduplicates the signals and records accepted actions in `10_Product/App_Learning_Processed_Log.md`. |
| 3 | Accepted lessons become rules, tests, documentation updates, or app changes. |
| 4 | GPT Chief Consigliere gets the behavior change through the instruction file and regenerated Knowledge bundle. |

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

v0.24 - added CAL-4 profile layer: industry chips, operating jurisdictions, exposure jurisdictions, prompt injection, and profile-aware learning notes.
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
