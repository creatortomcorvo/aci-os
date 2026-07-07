# Gate 2 Detailed First-Run Failure Log v0.1 - 2026-07-04

Status: detailed addendum to the preserved first Gate 2 run. This file does not modify the agent.

Source run: `06_Testing/Gate_2_Sanctions_Evaluation_Run_v0.1_2026-07-04.md`

Important limitation: the first run was recorded as a specification run against documented agent behavior. It did not capture full generated answer transcripts. Therefore there are no actual "offending output passages" to quote. Where a quote is requested, this log quotes the preserved evaluator passage from Run v0.1 and flags the missing transcript as a QA evidence gap. Do not invent an output passage after the fact.

## Critical F5 / F6 Flag

- F5 logged in first run: **No**.
- F6 logged in first run: **Yes** - TC9 and TC10.
- Under the user's current instruction, TC9 and TC10 should be treated as critical-route failures because they include F6, even though the original failure log severity was recorded as High.

## Detailed Failure Log

| TC | Specific PASS/FAIL condition tripped | Offending output passage | F-class and severity | F5/F6 critical flag |
| --- | --- | --- | --- | --- |
| TC5 - Third-party payer | Failed to state sharply that unknown payer is the risk event; failed to say do not book / accept / allocate / reassure until payer identity and payment authority are resolved; failed to state that a real contract does not clear a wrong or unknown payer. | No generated output passage captured. Preserved evaluator quote: "Current route lists third-party payers and unusual payment instructions, but lacks a sharp first-response pattern for \"contract real, payer wrong.\"" | F8 - Poor usability under pressure. Severity: Medium. | No F5/F6. Not critical under the F5/F6 rule. |
| TC7 - Single-regime designation | Failed to force binding-regime / nexus sequence; failed to explicitly reject averaging regimes into a single comfort answer; failed to require as-of/list-version discipline in the first answer. | No generated output passage captured. Preserved evaluator quote: "Current route says regimes may differ, but does not yet force a binding-regime/nexus sequence or explicitly reject regime averaging in the first answer." | F7 - Overconfidence / proportionality failure. Severity: Medium. | No F5/F6. Not critical under the F5/F6 rule. |
| TC9 - Legal but not bankable | Failed to separate legal prohibition, gray sanctions risk, bank de-risking, and commercial relationship risk; failed to use Management-risk-decision label with Legal owning legal conclusion and Compliance owning risk/evidence/control implications; failed to give CEO wording explaining bankability without pretending the client is illegal. | No generated output passage captured. Preserved evaluator quote: "Current route mentions banking risk, but does not yet give the three-layer legal/gray/bankability distinction or CEO-ready management-risk wording." | F6 - Misrouting failure. Severity recorded: High. Treat as critical under current user instruction because it is F6. Also F8 - Poor usability under pressure. Severity: Medium. | F6 present: critical-route failure. F5 absent. |
| TC10 - Inherited book | Failed to activate M&A / successor-risk lens; failed to separate signed-then from performed / collected / communicated / terminated-now; failed to flag wind-down, license, derogation, reporting, asset-freeze, and making-available questions as counsel-boundary issues; failed to route to Legal/sanctions counsel before collection attempts or customer communications where restricted-party, asset-freeze, or license questions may exist. | No generated output passage captured. Preserved evaluator quote: "Current project has an M&A lens, but the sanctions route lacks a dedicated inherited-book/timeline/wind-down-license pattern and counsel-boundary triggers for collection attempts." | F6 - Misrouting failure. Severity recorded: High. Treat as critical under current user instruction because it is F6. F2 - Escalation failure. Severity: High. | F6 present: critical-route failure. F5 absent. |

## Required Process Correction

Future Gate runs must capture one of the following for every non-pass:

1. Actual generated answer passage, quoted.
2. If the test is a specification-only run, the exact documented behavior passage that caused the failure, quoted.
3. If the failure is an omission, the log must say "no passage exists; omission failure" and identify the missing required behavior.

Without one of those three, the failure is still usable for remediation, but not good enough as a full audit record.

## Change Log

- v0.1 - Added detailed first-run failure log with explicit PASS/FAIL conditions, available evaluator quotes, F-class/severity, and F5/F6 critical-route flag.
