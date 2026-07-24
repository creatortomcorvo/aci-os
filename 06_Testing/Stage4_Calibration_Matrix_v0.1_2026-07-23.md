# Stage 4 Calibration Matrix v0.1

Response timestamp: 2026-07-23 22:07:24 +02:00 Europe/Zurich

Status: COMPLETE - all seven live cases passed after one observed failure was remediated and retested.

Purpose: verify that audience, requested shape, deepening, and affirmative follow-through change the answer in the intended way without weakening the shared safety and methodology rules.

## Local Checks Completed

| Check | Expected result | Observed result | Status |
| --- | --- | --- | --- |
| Active runtime instruction | App points to instruction v2.23 | Server and environment pointers resolve to v2.23 | PASS |
| Deeper action | Sends a point-by-point deepening request | Action requests one decision-critical point with why, evidence, owner, consequence, and open gap | PASS |
| Affirmative follow-through rule | Accepted artifact is produced without a second confirmation | Rule is present in v2.23 and covered by TC-S13 | PASS - structural |
| True-deepening rule | Depth adds decision value rather than width or repetition | Rule is present in v2.23 and covered by TC-S12 | PASS - structural |
| Local interface | Updated app loads and remains usable | App v0.40 loaded at the local address with Ask, Journal, Basis, Settings, calibration controls, and learning panel available | PASS |
| Script integrity | Updated JavaScript parses successfully | App and server syntax checks passed; repository whitespace check found no errors | PASS |

## Live Matrix Results

Only fictional pattern facts will be used.

| Case | Audience | Shape | Observed result | Status |
| --- | --- | --- | --- | --- |
| 1 | Auto | Auto | Immediate hold direction, independent verification, owners, and proportionate questions | PASS |
| 2 | Employee | Advice | Plain stop action, document preservation, and escalation to manager or Compliance | PASS |
| 3 | Top management / board | Verdict | Compressed no-go decision with red flags, condition, and accountable functions | PASS |
| 4 | Legal / GC | Plan | Numbered review plan separating Legal, Compliance, Finance, Commercial, and management ownership | PASS |
| 5 | Business | Wording | Short supplier-facing message with no internal prompt machinery | PASS |
| 6 | Top management / board | Deeper action | Selected unusual payment route only; explained why, evidence, owners, consequence, open gap, and offered the next point once | PASS |
| 7 | Employee | Accepted checklist offer | Initial v2.23 run repeated the offer; v2.24/app v0.41 retest immediately produced the promised six-step checklist | PASS AFTER FIX |

## Failure Found And Corrected

The general v2.23 affirmative-follow-through instruction was insufficient: after an offered checklist and an affirmative reply, the model repeated the offer.

Corrective action:

1. Added deterministic accepted-offer detection to the app follow-up builder.
2. The follow-up now names the accepted artifact and requires the response to begin with it.
3. Strengthened the governing instruction in v2.24 so accepted-offer execution overrides ordinary answer shape.
4. Strengthened TC-S13 and moved the local runtime to app v0.41.
5. Repeated the exact fictional checklist sequence; the model produced the checklist immediately with no repeated offer.

## Completion Rule

The matrix is complete. All seven cases pass. The concrete failure produced a narrowly scoped instruction/app amendment and a strengthened regression test before the approved raw learning batch was logged and removed under the established learning process.
