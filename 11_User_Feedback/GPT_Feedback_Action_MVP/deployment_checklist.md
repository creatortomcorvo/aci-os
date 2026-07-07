# GPT Feedback Action Deployment Checklist v0.1

Status: not deployed.

## Pre-Deployment Gate

Do not deploy until Tom confirms:

- Stage 0b/external-use position is acceptable for this internal-only integration;
- target GitHub repository is private;
- GitHub issue intake is acceptable as quarantine storage;
- no-secret warning is acceptable;
- retention/deletion approach is acceptable for feedback issues;
- no real company or client material will be submitted.

## Cloudflare Worker Setup

1. Create a Cloudflare Worker.
2. Paste `worker.js`.
3. Set Worker secrets:
   - `INTAKE_API_KEY`
   - `GITHUB_TOKEN`
   - `GITHUB_OWNER`
   - `GITHUB_REPO`
4. Deploy the Worker.
5. Test `GET /health`.
6. Test `POST /v1/feedback` with `sample_payload.json`.

## GitHub Token

Use the minimum token scope needed to create issues in the private ACI-OS repository.

Do not give the token repository contents write permission unless strictly necessary.

## GPT Builder Setup

Do not use `openapi.yaml` in GPT Builder until you have a real deployed Worker URL.

If you only want to confirm where the Action button appears, use `openapi_import_only_mock.yaml`. It imports against `https://example.com`, but it is not connected to ACI-OS and must not be used for real feedback.

1. Open `Chief Consigliere - ACI-OS Gate 2`.
2. Go to Configure.
3. Add Action.
4. Paste `openapi.yaml`.
5. Replace server URL with the deployed Worker URL. The URL must be a real lowercase HTTPS URL, for example `https://aci-os-feedback-intake.example.workers.dev`. Do not leave placeholder text in `servers:`.
6. Set Authentication to API key / bearer token using `INTAKE_API_KEY`.
7. Add the text from `gpt_instruction_snippet.md` into GPT instructions if there is room.
8. Test with synthetic feedback only.

## Acceptance Test

Expected:

- GPT asks for confirmation before submission because the action is consequential.
- Worker rejects `confidential: true`.
- GitHub issue is created with labels:
  - `gpt-feedback-inbox`
  - `needs-triage`
- ACI-OS repo files are not changed.

## Rollback

If anything behaves unexpectedly:

1. Disable the GPT Action in GPT Builder.
2. Revoke `INTAKE_API_KEY`.
3. Revoke GitHub token.
4. Disable or delete the Worker.
5. Preserve test issue for review unless it contains sensitive material.

## Change Log

- v0.1 - Created deployment checklist for Cloudflare Worker + GitHub Issues feedback intake.
