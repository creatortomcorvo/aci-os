# Remote App Future Path v0.1

Status: parked product roadmap note.

Date: 2026-07-16.

Purpose: preserve the agreed future path for moving ACI-OS from a local C-drive prototype toward private remote use.

## Core Position

The current ACI-OS web app is a local/private prototype. It should not be made public or placed on `kruk.ch` as-is.

The correct next ambition is a private remote version for Tomasz only, then later a controlled pilot. Public availability comes last.

## Future Path

| Stage | What it means | Risk |
|---|---|---|
| Local app | Runs only on Tomasz's computer, using `127.0.0.1`. | Low |
| Wi-Fi app | Runs on Tomasz's iPhone or another device on the same local network. | Low/medium |
| Private cloud app | Login-protected remote app for Tomasz only. | Medium |
| Private `kruk.ch` page | App reachable through a strongly protected private page or subdomain. | Medium/high |
| Public app | External testers or customers use the product. | High; later stage only |

## Design Principle

Remote access must not mean raw access to the C-drive repo.

The remote app should use:

| Component | Rule |
|---|---|
| Frontend | ACI-OS web interface |
| Backend | Small secure server |
| API key | Stored only on the server, never in browser code |
| Access | Login required |
| Knowledge | Selected knowledge bundle only, not all local files |
| Journal | Stored safely with pattern facts only |
| Learning loop | Feedback enters an ACI-OS improvement inbox, then is reviewed before becoming doctrine |

## Guardrails

- Do not expose API keys in browser code.
- Do not expose the full local repo.
- Do not allow real client facts, whistleblower identities, privileged content, or live matter details.
- Do not turn `kruk.ch` into a public product surface before security, privacy, retention, authentication, and testing are designed.

## Next Decision

When remote work resumes, decide between:

1. Private cloud prototype for Tomasz only.
2. Password-protected private page or subdomain under `kruk.ch`.
3. Continue local/Wi-Fi prototype until the product logic is more stable.

## Change Log

- v0.1 - Captured agreed staged path from local app to private remote app and later public/pilot use.
