# App Learning Approval Workflow v0.1

Response timestamp: 2026-07-22 21:52:24 +02:00 Europe/Zurich

Status: active operating contract for exported app learning.

## Trigger

An app learning is `EXPORTED` when the app writes it to `App_Learning_Inbox.md` with a unique Learning ID. Export does not authorize a product, prompt, methodology, document, or test change.

## Required Codex response

For each new learning set, Codex must report:

1. **What I learned** - the concrete failure, success pattern, or product insight.
2. **Evidence** - the relevant conversation turn(s) and whether signals are duplicates.
3. **Proposed improvement** - exact rule, test, document, or app change, including target files.
4. **Decision request** - ask Tom for exactly one of `OK`, `MODIFY`, or `DISCARD`.

Codex must not implement the proposed learning before Tom approves it.

## Decision handling

| Tom's decision | Required action |
| --- | --- |
| `OK` | Implement only the stated proposal, verify it, and report completion. |
| `MODIFY` | Restate the modified proposal and ask for `OK` before implementation. |
| `DISCARD` | Do not implement; record the discard reason in the processed log. |

## Completion and cleanup

After an approved change is implemented and verified, Codex must:

1. add one concise audit row to `App_Learning_Processed_Log.md`;
2. add the Learning ID to `App_Learning_Processed_State.json`;
3. remove the completed raw learning block from the active inbox after its durable audit summary exists;
4. verify that the app removes the matching local journal card when Journal is opened or refreshed;
5. report exactly what changed and what was removed.

Legacy learning cards without IDs may be completed by adding their exact exported timestamps to `completedTimestamps`.

## Safety and evidence

- Pattern facts only; no identifiable company, client, employee, whistleblower, investigation, or privileged details.
- Duplicate exports are one learning set, not multiple product changes.
- The processed log is the durable audit record after raw cleanup.
- A rejected or unresolved learning remains visible as pending until Tom decides.

## Change log

v0.1 - created the export -> explain -> propose -> approve -> implement -> log -> clean workflow.
