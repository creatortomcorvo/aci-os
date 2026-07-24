# App Learning Decision Queue

Response timestamp: 2026-07-22 21:52:24 +02:00 Europe/Zurich

## AL-20260722-215024-ISO-CONTEXT

Status: APPROVED AND IMPLEMENTED

Duplicate raw exports: `2026-07-22 21:50:24 Europe/Zurich` and `2026-07-22 21:50:26 Europe/Zurich`.

### What I learned

The assistant lost the referent of a short follow-up. After listing ten policies, the user asked whether "it" was really written in ISO 37301. The assistant answered about the `2BY` request code instead of testing the immediately preceding policy-list claim against the cited source.

### Proposed improvement

1. Add a follow-up reference rule: resolve `it / this / that / really? / is it written?` against the immediately preceding substantive claim before parsing request-code or format language.
2. If the prior answer presented a practical synthesis as source-mandated, correct the overstatement directly: distinguish `verbatim requirement`, `reasonable mapping`, and `practitioner recommendation`.
3. Add one regression case using this five-turn ISO-policy sequence; fail if the answer discusses `2BY` or implies that ISO 37301 contains the exact ten-policy list.

Proposed targets after approval:

- `10_Product/Chief_Consigliere_GPT_Instructions_Gate2_v2.18_under8000.md`
- `06_Testing/Stage4_Adversarial_Test_Cases_v0.1.md` (new version or append according to its versioning rule)
- `10_Product/App_Learning_Processed_Log.md`

Decision: Tom modified the proposal so all request/control codes remain silent and are never cited in ordinary answers, then approved the amendment on 2026-07-22.

## AL-1784752402558

Status: COMPLETED AS DUPLICATE

The 2026-07-22 22:33:22 export reported that a historical response exposed and explained silent control metadata. Tom approved closing it as already addressed by GPT instruction v2.18 and regression test TC-S9. No additional behavior change was made.

## AL-20260722232119-5abc3e1d

Status: APPROVED AND IMPLEMENTED

The 2026-07-22 23:21:19 export showed that a terse correction after a generic answer did not trigger conversational repair. The silent-metadata aspect duplicated the existing v2.18 rule, but the repair behavior was new.

Implemented after Tom's `OK`:

1. Added a product rule requiring a brief acknowledgement, immediate-context interpretation, direct corrected answer, and at most one plain-language clarification.
2. Added the rule to GPT instruction v2.21 and moved the app runtime to that version; live regression tightened unresolved repair to a two-sentence acknowledgement plus one terminal question.
3. Added Stage 4 regression case TC-S10; failure includes repeating the generic answer, losing conversational intent, exposing internal metadata, or reopening a broad questionnaire.

## Duplicate closure batch - 2026-07-22 23:46

Status: COMPLETED AS DUPLICATES

Learning IDs: `AL-1784752396646`, `AL-20260722231438-07b658be`, `AL-20260722232038-d68308af`, and `AL-20260722232117-bb49de20`.

Tom approved closing all four as duplicates with no additional product change:

- The first signal is covered by the silent-metadata rule in instruction v2.21 and regression test TC-S9.
- The remaining three signals are covered by the conversation-repair rule in instruction v2.21 and regression test TC-S10.

All four were marked complete, logged, and removed from the active learning inbox.

## Consolidated Good-signal batch - 2026-07-23

Status: APPROVED AND IMPLEMENTED

Tom approved processing all Good feedback. Twenty-four Good raw blocks were consolidated: five were already covered by the first processed batch, and nineteen were deduplicated into nine positive-pattern groups.

Implemented:

1. Added Positive Pattern Preservation to GPT instruction v2.22.
2. Required compliance-program overviews to use the validated 7-element backbone even when a positively rated historical answer used an attractive conflicting list.
3. Required numbered user replies to become a concrete plan without restarting intake.
4. Added regression case TC-S11.
5. Retained existing positive rules for numbered checklists, timestamped trouble records, distress handling, memo structure, and risk routing.
6. Did not preserve historical control-metadata exposure or treat Good as authority to override methodology.

All Good raw blocks were logged and removed from the active inbox.

## Already-implemented app-feedback closure - 2026-07-23

Status: COMPLETED

- `AL-20260723204953-8c594106` and `AL-20260723204955-20a8b48b` were duplicate requests for an optional Decision Snapshot. The approved behavior is implemented in app v0.36.
- `AL-20260723210431-93d75a77` was an unexplained one-tap Issue. Tom approved removing that button; app v0.37 now requires meaningful negative feedback through the learning panel.

All three raw blocks were logged and removed from the active inbox.

## Legacy inbox cleanup - 2026-07-23

Status: COMPLETED

Four legacy signals were closed:

- The stop-questioning failure was already implemented through the Advice-now rule and TC-S7.
- Two one-tap Issue signals contained no actionable explanation.
- The local-law disclosure and visual-marker issue is covered by the active LOCAL LAW rule and current app rendering.

One legacy calibration concern remains pending together with the current deepening and affirmative-follow-through proposals.

## True-deepening, affirmative-follow-through, and calibration batch - 2026-07-23

Status: APPROVED, IMPLEMENTED, LIVE-VERIFIED, AND COMPLETED

Tom approved all three proposals:

1. Deeper develops one decision-critical point at a time, including why it matters, evidence, owner, consequence, and open gap.
2. An affirmative reply immediately executes the most recently offered checklist, memo, plan, draft, script, table, or deeper analysis without asking twice.
3. A controlled calibration matrix checks audience, shape, true deepening, and affirmative follow-through before the learning batch is closed.

Implemented locally:

- Added both durable behavior rules to Product Principles.
- Created GPT instruction v2.23 and moved the local app runtime to it.
- Updated the Deeper action prompt in app v0.40.
- Added TC-S12 and TC-S13.
- Created `06_Testing/Stage4_Calibration_Matrix_v0.1_2026-07-23.md`.
- Passed local interface, syntax, pointer, and repository consistency checks.

Tom explicitly approved the live OpenAI calibration test. Five audience/shape cases and the true-deepening case passed immediately. The accepted-checklist case failed under v2.23 because the model repeated its offer. That failure produced deterministic accepted-artifact handling in app v0.41, the stronger instruction v2.24, and a strengthened TC-S13. The exact sequence then passed.

All seven matrix cases now pass. The six approved raw signals were logged in `App_Learning_Processed_Log.md` and removed from the active inbox.

## Follow-up history containment and positive training signal - 2026-07-23

Status: APPROVED, IMPLEMENTED, LIVE-VERIFIED, AND COMPLETED

Tom approved the new three-signal set:

- `AL-20260723220058-4baf2030` and `AL-20260723220102-1bd2764d` are duplicates showing that a long conversation could nest constructed backend prompts inside later follow-ups, causing excessive output and exposure of internal prompt-like text.
- `AL-20260723220715-29a4cdbf` positively validates the concise commercial-team training structure for intermediary risk.

Implemented locally in app v0.42:

1. Conversation history now uses only the visible user question and assistant answer, never the constructed backend prompt.
2. Only the three most recent turns are retained in the request context, and each question and answer is length-bounded.
3. Learning exports now retain the visible question instead of the backend prompt.
4. Added TC-S14 covering prompt nesting, internal-instruction exposure, exponential context growth, and length without decision value.
5. The positive training signal is retained as evidence only; it adds no new prompt rule or complexity.

Tom explicitly authorized connected ACI-OS operation and the external live regression. Direct Ask returned a normal answer. A four-turn fictional sequence then tested an initial answer, a factual follow-up, a numbered checklist, and Deeper. The final answer developed one checklist item with why, evidence, owner, consequence, and open gap. It exposed no internal prompt text and did not grow excessively.

The duplicate failure pair and positive training signal were logged in `App_Learning_Processed_Log.md`; all three completed raw blocks were removed from the active inbox.
