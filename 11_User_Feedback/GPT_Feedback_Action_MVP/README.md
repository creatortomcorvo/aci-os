# GPT Feedback Action MVP v0.1

Status: implementation package, not deployed.

Purpose: create a future ChatGPT Action named `submitFeedbackToACIOS` that lets the Chief Consigliere GPT submit structured feedback into a quarantine inbox.

This does **not** let the GPT edit ACI-OS. The endpoint creates a GitHub issue labelled `gpt-feedback-inbox` and `needs-triage`. Codex or Tom then reviews the issue and decides ACT / PARK / DISCARD.

## Why GitHub Issues First

This is the safest practical Level 3 MVP:

- no direct write to project files;
- review happens before repo changes;
- GitHub already exists as ACI-OS backup/version location;
- issue labels can separate feedback from accepted memory;
- Codex can later import reviewed items manually or through a controlled workflow.

## Files

| File | Purpose |
| --- | --- |
| `openapi.yaml` | Schema to paste into GPT Builder Actions. |
| `openapi_import_only_mock.yaml` | Import-only schema using `https://example.com` so GPT Builder shows the Action UI. It is not connected and must not be used for real feedback. |
| `worker.js` | Cloudflare Worker HTTPS endpoint. |
| `sample_payload.json` | Example request body. |
| `gpt_instruction_snippet.md` | Text to add to GPT instructions when the action is active. |
| `deployment_checklist.md` | Step-by-step deployment gate and setup list. |

## Architecture

Chief Consigliere GPT

-> GPT Action `submitFeedbackToACIOS`

-> Cloudflare Worker endpoint

-> GitHub issue in private ACI-OS repository

-> Codex weekly review

-> ACT / PARK / DISCARD

-> repo change only after review

## Required Secrets

Set these as Cloudflare Worker secrets:

- `INTAKE_API_KEY` - shared API key configured in GPT Builder Action authentication.
- `GITHUB_TOKEN` - GitHub token with permission to create issues in the private ACI-OS repo.
- `GITHUB_OWNER` - GitHub owner or organization.
- `GITHUB_REPO` - GitHub repo name.

Do not store secrets in this repository.

## Endpoint

`POST /v1/feedback`

Creates a GitHub issue if:

- API key is valid;
- required fields exist;
- `confidential` is `false`;
- payload is below length limits.

If `confidential` is `true`, the endpoint rejects the submission. The user must remove sensitive content before trying again.

## Activation Lock

Do not deploy or connect this to the live GPT until:

1. Stage 0b permits external/system integration work.
2. A private GitHub repo target is confirmed.
3. GitHub token scope is reviewed.
4. Retention and deletion rules are accepted.
5. No-secret warning is added to the GPT.
6. Test feedback is submitted with synthetic content only.

## GPT Builder URL Error

If GPT Builder says `Could not find a valid URL in servers`, it means the `servers:` URL is not acceptable to GPT Builder. A placeholder Worker URL is not enough.

Use `openapi_import_only_mock.yaml` only to confirm that the Action UI imports. For a real Action, deploy the Worker first and replace the server URL in `openapi.yaml` with the real HTTPS Worker URL.

## Change Log

- v0.2 - Added import-only mock schema and URL-error note.
- v0.1 - Created Cloudflare Worker + GitHub Issues quarantine inbox MVP package.
