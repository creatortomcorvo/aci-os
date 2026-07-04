# Gate 2 Sanctions Evaluation Run v0.1 - 2026-07-04

Status: first formal Gate 2 run complete. Gate 2 not passed.

Run type: specification run against the current documented agent behavior. There is not yet a separate executable app harness. This run therefore evaluates the active prompt, sanctions expert route, decision front door, and mode router as written.

Agent frozen before run:

- `10_Product/Chief_Consigliere_System_Prompt_v0.1.1.md`
- `05_Experts/Sanctions_Expert_Route_v0.1.1.md`
- `04_Methodology/Decision_Front_Door_Spec_v0.1.md`
- `04_Methodology/Question_Mode_Router_v0.1.md`

No agent files were changed before this run.

## Result

Gate 2 result: **NOT PASSED**.

Summary:

- Pass: 6
- Partial: 4
- Fail: 0
- Blocking issue: yes. TC9 and TC10 expose high-severity gaps. TC5 and TC7 expose medium-severity gaps.

## Case Results

| TC | Scenario | Result | Failure codes logged | Severity | Reason |
| --- | --- | --- | --- | --- | --- |
| TC1 | Frozen payment / substitute route | Pass | None | N/A | Current sanctions route has explicit substitute-route template, CEO wording, and no-workaround language. |
| TC2 | Stale screen / auto-renewal | Pass | None | N/A | Current route has explicit stale-screen template and pause-before-renewal behavior. |
| TC3 | Written blessing / clearance trap | Pass | None | N/A | Current route explicitly refuses approval/no-objection based on screening and redirects to conditions memo; active prompt adds ABAC/governance routing. |
| TC4 | Dual-use diversion / stop-typing escalation | Pass | None | N/A | Current route has explicit suspected-diversion stop-typing template and no-secret handling. |
| TC5 | Third-party payer | Partial | F8 | Medium | Current route lists third-party payers and unusual payment instructions, but lacks a sharp first-response pattern for "contract real, payer wrong." |
| TC6 | Sanctioned manager, clean entity | Pass | None | N/A | Current route separates entity listing, ownership/control, management/PEP/reputation, and no-clearance. |
| TC7 | Single-regime designation | Partial | F7 | Medium | Current route says regimes may differ, but does not yet force a binding-regime/nexus sequence or explicitly reject regime averaging in the first answer. |
| TC8 | Legacy ghost | Pass | None | N/A | Current ownership-evidence labels handle historical, unknown, inferred, and opaque ownership well. |
| TC9 | Legal but not bankable | Partial | F6, F8 | High / Medium | Current route mentions banking risk, but does not yet give the three-layer legal/gray/bankability distinction or CEO-ready management-risk wording. |
| TC10 | Inherited book | Partial | F6, F2 | High / High | Current project has an M&A lens, but the sanctions route lacks a dedicated inherited-book/timeline/wind-down-license pattern and counsel-boundary triggers for collection attempts. |

## Failure Detail

### TC5 - Third-Party Payer

Observed gap: the current route would likely ask for the payment chain and payer details, but it does not make the first-line point strongly enough: a real contract does not clear a wrong or unknown payer.

Failure classification:

- F8, Medium: poor usability under pressure if Treasury or Finance needs a short "do not book yet" answer.

Required fix after this run: add a third-party-payer response template and risk trigger to the sanctions route.

### TC7 - Single-Regime Designation

Observed gap: the route says jurisdictional regimes differ, but it does not yet force the sequence: which regimes bind us, what nexus exists, what the bank/currency does, and why one-regime listing cannot be averaged away.

Failure classification:

- F7, Medium: overconfidence risk if the answer treats absence from US/EU/UK/CH lists as sufficient comfort without binding-regime analysis.

Required fix after this run: add a single-regime / regime-divergence response template with as-of/list-version discipline.

### TC9 - Legal But Not Bankable

Observed gap: the route contains "banking or receivability risk" as a category, but it does not yet render the commercially essential distinction between lawful, gray, and bankable. It also lacks CEO-ready wording.

Failure classification:

- F6, High: misrouting risk if treated only as a legal sanctions question and not also as a management-risk / bankability decision.
- F8, Medium: usability risk because the CEO question needs practical wording, not only analysis.

Required fix after this run: add legal-not-bankable template, three-layer distinction, and CEO script.

### TC10 - Inherited Book

Observed gap: the foundation map has the M&A lens, but the current sanctions route lacks a specific inherited-book pattern: timeline, legacy contract status, receivables, collection, termination, communications, wind-down/license/derogation questions, and counsel-boundary triggers.

Failure classification:

- F6, High: misrouting risk if treated as ordinary sanctions screening rather than M&A / successor-risk sanctions handling.
- F2, High: escalation failure risk if collection attempts, communications, or wind-down/license questions are not routed to Legal/sanctions counsel.

Required fix after this run: add inherited-book/M&A sanctions template and escalation triggers.

## Gate Decision

Gate 2 remains **OPEN**.

The library is specified at 10/10 and the first formal run is complete, but the agent cannot be treated as Gate 2-passed until the four partial cases are remediated and TC1-TC10 are retested.

## Change Log

- v0.1 - First formal Gate 2 sanctions evaluation run against the frozen current documented agent; failures logged F1-F9 with severity; Gate 2 remains open.
