# App Learning Processed Log v0.1

Response timestamp: 2026-07-16 19:05:14 +02:00 Europe/Zurich

Status: active processing register.

Purpose: record which raw app-learning signals from `10_Product/App_Learning_Inbox.md` have been converted into product rules, tests, documentation, or app changes. The inbox remains raw evidence; this file is the controlled action log.

## Processing Batch 2026-07-16

| No. | Raw signal time | Verdict | Pattern | Dedupe | Decision | Implemented changes |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | 2026-07-15 23:22:56 | Wrong structure | Invoice mismatch and user says to stop asking | Unique | ACT | Added advice-now / stop-questioning rule; added Stage 4 test TC-S7. |
| 2 | 2026-07-16 08:12:44 / 08:12:46 / 18:48:36 | Good | ABAC policy drafting with numbered partial replies | Duplicate group | ACT once | Added numbered intake memory rule; added Stage 4 test TC-S6. |
| 3 | 2026-07-16 18:54:14 / 18:54:16 | Good | Invoice checklist with follow-up by category | Duplicate group | ACT once | Added numbered table/checklist rule; added Stage 4 test TC-S8. |

## Rules Created

| Rule | Short description | Source signal |
| --- | --- | --- |
| Numbered intake memory | If the assistant asks numbered questions, it must map numbered or fragmentary user replies back to those questions, restate captured facts, and ask only missing items. | ABAC policy case |
| Advice-now switch | If the user says to stop asking, asks for the assistant's view, or says "draft it", the assistant must stop intake and give a provisional answer from available facts with gaps labelled. | Invoice mismatch case |
| Numbered tables/checklists | Practical tables and checklists should include item numbers by default so Tom can give fast follow-up instructions. | Invoice checklist case |

## App Handling Rule

`Send learning` means: send the full available discussion plus Tom's feedback to `10_Product/App_Learning_Inbox.md`; then Codex deduplicates, converts accepted lessons into rules/tests/docs, and reports the changes.

## Change Log

v0.1 - created from first app-learning batch; converted three distinct lessons into product rules and tests.
