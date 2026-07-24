# App Learning Processed Log v0.1

Response timestamp: 2026-07-16 19:05:14 +02:00 Europe/Zurich

Status: active processing register.

Purpose: record which exported app-learning signals from `10_Product/App_Learning_Inbox.md` were approved, modified, or discarded and which product rules, tests, documentation, or app changes resulted. Pending items remain in the inbox; after completion this file becomes the durable audit record and the completed raw block may be removed.

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

`Send learning` means: export the full available discussion plus Tom's feedback with a unique Learning ID. Codex deduplicates, explains the lesson, proposes exact changes, and asks Tom for `OK / MODIFY / DISCARD`. Only an approved proposal is implemented. After verification, Codex records the result here, marks the Learning ID complete, and removes the completed learning from the active inbox and local app journal.

## Processing Batch 2026-07-22

| Learning ID | Raw signal time | Verdict | Pattern | Dedupe | Decision | Implemented changes |
| --- | --- | --- | --- | --- | --- | --- |
| AL-20260722-215024-ISO-CONTEXT | 2026-07-22 21:50:24 / 21:50:26 | Bad | Short ISO follow-up resolved against control metadata instead of the preceding policy-list claim | Duplicate pair | MODIFY, then OK | Added preceding-claim reference resolution; required direct source-containment answers; separated verbatim requirement, reasonable mapping, and practitioner recommendation; made all request/control codes silent; added TC-S9; moved app runtime to instruction v2.18. |
| AL-1784752402558 | 2026-07-22 22:33:22 | Bad | Historical response exposed and explained silent control metadata | Duplicate of approved silent-control rule | OK | No additional behavior change. Confirmed existing v2.18 rule and TC-S9 cover the failure; marked complete and removed raw learning. |
| AL-20260722232119-5abc3e1d | 2026-07-22 23:21:19 | Bad | Terse correction after a generic response did not trigger conversational repair | Partial duplicate of silent-control rule; unique repair behavior | OK | Added conversation-repair rule to product principles and GPT instruction v2.21; added TC-S10; live regression tightened unresolved repair to two sentences maximum; moved app runtime and current instruction reference to v2.21. |
| AL-1784752396646 | 2026-07-22 22:33:16 | Bad | Historical answer exposed internal control metadata after an otherwise useful start | Duplicate of approved silent-control rule | OK | No product change. Confirmed v2.21 and TC-S9 cover the failure; marked complete and removed raw learning. |
| AL-20260722231438-07b658be | 2026-07-22 23:14:38 | Bad | Terse correction did not trigger conversational repair | Duplicate of approved repair rule | OK | No product change. Confirmed v2.21 and TC-S10 cover the failure; marked complete and removed raw learning. |
| AL-20260722232038-d68308af | 2026-07-22 23:20:38 | Bad | Terse correction did not trigger conversational repair | Duplicate of approved repair rule | OK | No product change. Confirmed v2.21 and TC-S10 cover the failure; marked complete and removed raw learning. |
| AL-20260722232117-bb49de20 | 2026-07-22 23:21:17 | Bad | Terse correction did not trigger conversational repair | Duplicate of approved repair rule | OK | No product change. Confirmed v2.21 and TC-S10 cover the failure; marked complete and removed raw learning. |

## Processing Batch 2026-07-23 - Consolidated Good Signals

Tom approved processing all Good signals as positive-pattern evidence. A Good signal validates useful behavior, not factual correctness; conflicts with the approved backbone were corrected rather than absorbed.

| Raw signal time / Learning ID | Positive pattern | Dedupe / safeguard | Decision | Implemented result |
| --- | --- | --- | --- | --- |
| 2026-07-16 21:42:18; AL-20260723210230-2c937a1d; AL-20260723210627-2907eea6 | Practical numbered checklist with owners, evidence, and next actions | Duplicate of numbered checklist rule and TC-S8 | OK | Existing rule retained; no extra prompt weight added. |
| 2026-07-16 21:58:29 | Concise risk triage for a sensitive sponsorship pattern | Covered by third-party, local-law, and risk-routing rules | OK | Existing route retained. |
| 2026-07-16 22:29:45 / 22:29:48 | Critical evaluation recognized shallow artifacts | Later explicit feedback gives the stronger definition of deepening | OK, superseded | Preserved as evidence; no deepening rule applied before Tom reviews the pending proposal. |
| 2026-07-16 23:00:08 / 23:01:15 / 23:01:17 / 23:01:44 / 23:01:52 | Timestamped factual record for personal trouble | Duplicate group; covered by TROUBLE RECORD | OK | Existing rule retained. |
| 2026-07-16 23:08:20 / 23:08:23 | Short memo skeleton with a real decision section | Covered by Document Standards and memo action | OK | Existing memo route retained. |
| 2026-07-16 23:13:00 / 23:13:02; AL-20260723211702-2c562b1e | Numbered replies become a tailored practical plan | Unique positive reinforcement | OK | Added Positive Pattern Preservation to instruction v2.22 and TC-S11. |
| 2026-07-17 16:52:01 | Historical answer explained internal control metadata | Conflicts with later approved silent-metadata rule | OK with safeguard | Did not preserve the exposed metadata; v2.22 retains silent handling. |
| 2026-07-22 08:22:10 | First-person harassment response prioritized safety, evidence, escalation, and two focused questions | Covered by Distress Override and TROUBLE RECORD | OK | Existing safety route retained. |
| AL-20260722232601-e2943d06 | Concise numbered compliance-program overview | Presentation positive; underlying 9-item list conflicted with the approved 7-element backbone | MODIFY within approval | Instruction v2.22 preserves the concise overview but requires the validated 7 elements; added TC-S11. |

All 24 Good raw blocks were deduplicated, logged, and removed from the active inbox: 5 were already covered by the 2026-07-16 batch and 19 were handled above.

## Processing Batch 2026-07-23 - Already Implemented App Feedback

| Learning ID | Verdict | Pattern | Decision | Implemented result |
| --- | --- | --- | --- | --- |
| AL-20260723204953-8c594106 / AL-20260723204955-20a8b48b | Bad | Decision Snapshot should be optional beside the answer actions | Previously approved; duplicate pair | Implemented in app v0.36 as an on-demand Decision Snapshot button; raw machine markers remain hidden. |
| AL-20260723210431-93d75a77 | Issue | One-tap issue contained no explanation | Discard as unusable; underlying UI problem already approved | Removed the one-tap Issue button in app v0.37; detailed negative feedback remains available through Send learning. |

These three raw blocks were removed from the active inbox after logging.

## Processing Batch 2026-07-23 - Legacy Inbox Cleanup

| Raw signal time | Verdict | Pattern | Decision | Result |
| --- | --- | --- | --- | --- |
| 2026-07-15 23:22:56 | Wrong structure | Assistant kept asking after the user requested advice | Already processed | Covered by Advice-now switch and TC-S7; completed raw block removed. |
| 2026-07-16 21:37:29 | Issue | One-tap red-flag feedback without details | Discard | No actionable information; one-tap Issue button has been removed. |
| 2026-07-16 23:01:46 | Issue | One-tap signal attached to the harassment timestamp discussion | Duplicate / no details | Timestamped record behavior is covered by TROUBLE RECORD; raw issue removed. |
| 2026-07-16 23:06:44 | Issue | Local-law gap and visual risk marker were not explicit | Already implemented | v2.22 requires explicit unverified-local-law disclosure; the app renders risk markers. |

The remaining legacy calibration concern and the two current negative-learning groups remain pending Tom's decision.

## Processing Batch 2026-07-23 - True Deepening, Follow-Through, And Calibration

Tom approved all three proposals. Six active raw signals were handled as three learning groups.

| Raw signal time / Learning ID | Pattern | Dedupe | Decision | Implemented and verified result |
| --- | --- | --- | --- | --- |
| 2026-07-23 21:14:33; AL-20260723211433-11ebaf54; AL-20260723211938-8b492d8c; AL-20260723211941-7fd6d742; AL-20260723211942-51b08ef7 | Deeper widened or repeated instead of developing one point | Four-signal duplicate group | OK | Added point-by-point depth to Product Principles and instruction v2.23; updated the Deeper app action; added TC-S12. Live test developed one payment-route point with why, evidence, owners, consequence, and open gap. |
| AL-20260723212247-c5ab6a92 | An accepted checklist offer was repeated instead of fulfilled | Unique | OK | Added affirmative follow-through and TC-S13. The first v2.23 live run failed; app v0.41 and instruction v2.24 added deterministic accepted-artifact execution. Exact retest immediately produced the promised checklist. |
| 2026-07-19 18:05:34 | Concern that audience and answer-shape calibrations may not work consistently | Unique legacy concern | OK | Ran the seven-case Stage 4 calibration matrix. Auto, Employee/Advice, Management/Verdict, Legal/Plan, Business/Wording, Deeper, and accepted-offer cases all passed after the documented follow-through fix. |

Verification record: `06_Testing/Stage4_Calibration_Matrix_v0.1_2026-07-23.md`.

All six raw blocks were marked complete, logged here, and removed from the active inbox.

## Processing Batch 2026-07-23 - Follow-Up History Containment

| Learning ID | Verdict | Pattern | Dedupe | Decision | Implemented and verified result |
| --- | --- | --- | --- | --- | --- |
| AL-20260723220058-4baf2030 / AL-20260723220102-1bd2764d | Bad | A longer conversation nested constructed backend prompts inside later follow-ups, causing excessive output and internal prompt-like text | Duplicate pair | OK | App v0.42 now stores and reuses only visible questions and answers, limits context to the three most recent turns, bounds question/answer length, and keeps backend prompts out of learning exports. Added TC-S14. A connected four-turn regression ending in Deeper produced one concise point with no internal instruction exposure. |
| AL-20260723220715-29a4cdbf | Good | Concise commercial-team training structure for intermediary risk | Positive evidence; no new rule needed | OK | Logged as validation of the existing concise training pattern. No additional prompt weight or behavior rule added. |

All three raw blocks were marked complete, logged, and removed from the active inbox.

## Change Log

v0.11 - processed the approved follow-up-history duplicate pair and positive training signal; implemented app v0.42, added TC-S14, passed connected four-turn regression, and cleared the completed raw blocks.
v0.10 - processed the approved true-deepening, affirmative-follow-through, and calibration batch; documented the live v2.23 failure, v2.24/app v0.41 correction, exact retest, and seven-case pass.
v0.9 - cleaned four completed, duplicate, or unusable legacy inbox signals while preserving three pending proposal groups.
v0.8 - closed two already-implemented Decision Snapshot duplicates and one unusable one-tap Issue signal.
v0.7 - processed and removed all Good signals; added backbone-correct positive-pattern preservation through instruction v2.22 and TC-S11.
v0.6 - closed four approved duplicate signals with no additional product change.
v0.5 - processed approved terse-correction learning: added conversational repair, TC-S10, and runtime instruction v2.21 after live regression tightening.
v0.4 - closed AL-1784752402558 as an approved, already-addressed duplicate with no additional behavior change.
v0.3 - processed the approved ISO follow-up lesson and silent-control-code amendment.
v0.2 - changed app learning to an approval-gated workflow with Learning IDs, explicit Tom decision, durable processed audit, and post-completion cleanup.
v0.1 - created from first app-learning batch; converted three distinct lessons into product rules and tests.
