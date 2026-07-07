# Gate 2 Remediation Record v0.1 - 2026-07-04

Status: superseded for Gate 2 decision purposes by `06_Testing/Gate_2_Behavior_Remediation_Record_v0.2_2026-07-04.md`. Preserved as history.

Purpose: preserve the first Gate 2 run as evidence, then document the exact changes made before retesting. This file does not rewrite or soften the first-run failure log.

## Source Failure Run

- First run: `06_Testing/Gate_2_Sanctions_Evaluation_Run_v0.1_2026-07-04.md`
- Failure log: `06_Testing/Failure_Log_v0.1.md`
- Result before remediation: 6 pass, 4 partial, 0 fail. Gate 2 not passed.

## Remediated Agent Material

- Updated: `05_Experts/Sanctions_Expert_Route_v0.1.1.md`
- Not changed before first run: confirmed in the first-run record.
- Changed after first run only: sanctions route patterns, risk triggers, and evidence fields.

## Failure-To-Fix Mapping

| Test case | First-run gap | Failure code | Severity | Remediation added |
| --- | --- | --- | --- | --- |
| TC5 | Third-party payer pattern was present only as checklist coverage, not a sharp first response. | F8 | Medium | Added `Third-Party Or Unknown Payer` template, payer-identity anchor, risk trigger, and evidence fields. |
| TC7 | Regime divergence did not force binding-regime / nexus sequence. | F7 | Medium | Added `Regime Divergence Is Not Regime Averaging` anchor and `Single-Regime Or Regime-Divergence Finding` template. |
| TC9 | Lawful relationship could be treated as enough despite bank refusal. | F6 | High | Added `Legal, Gray, And Bankable Are Separate Layers` anchor and `Legal But Not Bankable` template. |
| TC9 | CEO-facing wording missing. | F8 | Medium | Added CEO wording distinguishing legal conclusion, bankability, and management risk decision. |
| TC10 | Inherited book lacked M&A / successor-risk sanctions pattern. | F6 | High | Added `Inherited Books And M&A Sanctions Need Timeline Logic` anchor and inherited-book template. |
| TC10 | Counsel-boundary triggers for collection, communication, wind-down, licenses, derogations, reporting, asset freeze, and making-available were not explicit. | F2 | High | Added counsel-boundary triggers in anchor, template, risk level, and evidence fields. |

## Retest Scope

Retest must cover TC1-TC10, not only the four remediated cases, because route changes can create regressions in earlier passing scenarios.

## Communication Marker

If red coloring cannot be rendered reliably in a future status answer, use `>_<` before any item that is not OK, open, or needs fixing.

## Change Log

- v0.1 - Created remediation record for Gate 2 first-run gaps TC5, TC7, TC9, and TC10.
- v0.1.1 - Marked superseded after behavior-layer remediation replaced template-style remediation.
