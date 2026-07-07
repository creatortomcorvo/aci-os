# GPT to Codex Feedback Automation v0.1

Status: future architecture with activation lock.

Purpose: define how feedback from the live Chief Consigliere GPT can later flow into ACI-OS without allowing the GPT to silently rewrite project memory.

## Core Rule

The GPT may submit feedback. It may not edit ACI-OS.

All incoming feedback must go through an inbox and an ACT / PARK / DISCARD review before becoming project memory, prompt rules, tests, article material, or product claims.

## Why This Exists

The live GPT is a runtime of ACI-OS, not the source of truth.

Useful answers, bad answers, user reactions, and repeated issues should return to ACI-OS so the methodology improves. But direct write access would create unacceptable risks:

- accidental storage of confidential facts;
- prompt drift;
- unreviewed external-AI influence;
- test contamination;
- false memory;
- loss of version control;
- silent product changes.

## Target End State

Future flow:

1. User asks Chief Consigliere GPT a question.
2. User clicks a feedback action such as **Send feedback to ACI-OS**.
3. GPT sends a structured feedback record to a secure intake endpoint.
4. Intake stores the record in a quarantine inbox, not directly in project memory.
5. Codex reviews the inbox on a schedule.
6. Each item receives a verdict:
   - **ACT** - update prompt, spec, test case, journal, or article candidate;
   - **PARK** - useful but not now;
   - **DISCARD** - not aligned, unsafe, duplicated, or contaminated.
7. Only reviewed items become repo changes.

## Minimum Feedback Record

Use this schema for both manual and automated feedback:

| Field | Required | Rule |
| --- | --- | --- |
| Source GPT | Yes | Name and version, for example `Chief Consigliere - ACI-OS Gate 2 / v0.2`. |
| Date | Yes | User-visible date. |
| Question pattern | Yes | Anonymized pattern only; no names or secrets. |
| Answer problem | Yes | What seemed wrong, missing, too long, unsafe, unclear, or useful. |
| What I liked | No | Useful behavior to preserve. |
| What failed | No | Specific failure or user reaction. |
| Suggested fix | No | Proposed rule, wording, test, or article idea. |
| Confidential? | Yes | `no` required for normal intake; `yes` goes to reject/quarantine. |
| Action proposed | Yes | ACT / PARK / DISCARD proposed by user or GPT. |
| Full answer included? | Optional | If yes, must be anonymized. |

## Automated Intake Rules

Any future automated endpoint must enforce these gates before Codex sees the item:

1. No direct write to ACI-OS source files.
2. No direct Git commit or push.
3. Store only in an inbox/quarantine area.
4. Reject or quarantine records marked confidential.
5. Warn users not to submit real names, client names, personal data, privileged material, live investigation facts, trade secrets, or company secrets.
6. Record source GPT and version.
7. Preserve timestamp and submitter identity only if approved and privacy-reviewed.
8. Log the full intake event for audit.
9. Rate-limit submissions to prevent spam.
10. Make deletion/retention rules explicit before external use.

## Candidate Technical Options

### Option A - Manual Inbox Now

User copies GPT feedback into `11_User_Feedback/GPT_Feedback_Inbox/`.

Pros: safe, simple, no security architecture needed.

Cons: manual.

Status: active now.

### Option B - Google Sheet / Form Intake

GPT action or user form submits structured feedback into a locked spreadsheet.

Pros: easy review, low technical burden.

Cons: still external data storage; needs privacy and access controls.

Status: future candidate.

### Option C - GitHub Issue Intake

GPT action creates a GitHub issue in a private repo label such as `gpt-feedback-inbox`.

Pros: versioned workflow, reviewable, good for engineering.

Cons: risk of sensitive material entering GitHub; needs strong warning and private repo controls.

Status: future candidate.

### Option D - Secure API Endpoint

GPT action sends feedback to a small authenticated API that stores records in a database or queue.

Pros: clean product architecture.

Cons: requires hosting, authentication, retention, logging, privacy, abuse controls, and security review.

Status: product-stage candidate.

## Activation Lock

Do not implement Level 3 automation until all are true:

1. Stage 0b is cleared for external / commercial / pilot exposure.
2. Security and privacy design exists.
3. Retention and deletion rules are defined.
4. The no-secret feedback warning is approved.
5. Intake storage location is chosen.
6. Codex review workflow is tested manually.
7. ACI-OS has a stable export pack and version labels.
8. The user confirms the action should go live.

Until then, Level 3 remains a design target, not an active integration.

## Review Workflow

Codex review of feedback inbox:

1. Read new feedback items.
2. Check confidentiality flag.
3. Reject or quarantine unsafe content.
4. Classify ACT / PARK / DISCARD.
5. If ACT, map to one of:
   - prompt / GPT instructions;
   - expert route;
   - methodology spec;
   - test case;
   - failure log;
   - article candidate;
   - product roadmap;
   - parked inbox.
6. Create a small patch.
7. Report what changed.

## First Manual Implementation

Use:

- `11_User_Feedback/GPT_Feedback_Record_Template_v0.1.md`
- `11_User_Feedback/GPT_Feedback_Inbox/`

The Friday weekly learning review should include a check of this inbox.

## Change Log

- v0.1 - Created Level 3 future automation architecture with activation lock; defined safe feedback schema and no-direct-write rule.

