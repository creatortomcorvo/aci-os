# Gate 2 Behavior Remediation Record v0.2 - 2026-07-04

Status: behavior-layer remediation complete; cold regression run recorded separately.

Purpose: replace the earlier template-style remediation with behavior-layer fixes. The earlier `Gate_2_Remediation_Record_v0.1_2026-07-04.md` is preserved as history, but its resulting v0.2 pass is treated as process-contaminated because the remediation was too close to the test-case labels.

This file does not delete the earlier record. It supersedes it for Gate 2 decision purposes.

## Inputs

- First-run failure log: `06_Testing/Gate_2_Sanctions_Evaluation_Run_v0.1_2026-07-04.md`
- Detailed first-run addendum: `06_Testing/Gate_2_Detailed_First_Run_Failure_Log_v0.1_2026-07-04.md`
- Remediation rule from Tom: fix behavior in the spec/prompt layer, not by adding case-specific recognition patches.

## Behavior-Layer Fixes

| Fix | Failure addressed | Behavior-layer rule | Files changed | Change-log line |
| --- | --- | --- | --- | --- |
| Transaction-chain integrity | TC5 F8 | A real contract/invoice/counterparty does not clear a mismatch in payer, payee, bank, route, invoice, logistics actor, end user, or economic beneficiary. Resolve the transaction-chain mismatch before booking, allocating, releasing, reassuring, or responding externally. | `05_Experts/Sanctions_Expert_Route_v0.1.1.md`; `10_Product/Chief_Consigliere_System_Prompt_v0.1.1.md`; `05_Experts/Expert_Map.md` | v0.1.3a - Reframed the payer fix as transaction-chain integrity behavior rather than test-case recognition. |
| Regime separation and binding nexus | TC7 F7 | Do not average sanctions regimes into one comfort answer. Identify which regimes bind the company, group, staff, banks, currency, goods/services, route, local operations, contractual bank rules, and customer/end-user location. | `05_Experts/Sanctions_Expert_Route_v0.1.1.md`; `10_Product/Chief_Consigliere_System_Prompt_v0.1.1.md`; `04_Methodology/Question_Mode_Router_v0.1.md`; `05_Experts/Expert_Map.md` | v0.1.3b - Reframed the regime fix as binding-nexus and regime-separation behavior rather than list-count recognition. |
| Role-label separation | TC9 F6/F8 | Legal owns legal conclusion; Compliance owns risk/evidence/control view; banks own processing/account appetite; management owns commercial risk decision within law and policy. Do not call a relationship illegal merely because a bank refuses it or acceptable merely because Legal sees no prohibition. | `04_Methodology/Decision_Front_Door_Spec_v0.1.md`; `04_Methodology/Question_Mode_Router_v0.1.md`; `05_Experts/Sanctions_Expert_Route_v0.1.1.md`; `10_Product/Chief_Consigliere_System_Prompt_v0.1.1.md` | v0.1.3c - Reframed the bankability fix as role-label separation among Legal conclusion, Compliance risk view, and management risk decision. |
| Lifecycle and acquisition continuity | TC10 F6/F2 | For inherited, renewed, changed, acquired, or legacy relationships, separate what was signed then from what is performed, collected, communicated, terminated, renewed, or paid now. Route collection, communication, wind-down, license, derogation, reporting, asset-freeze, and making-available questions to Legal/sanctions counsel where plausible. | `04_Methodology/Compliance_Relationship_Lifecycle_v0.1.md` already active; reinforced in `05_Experts/Sanctions_Expert_Route_v0.1.1.md`; `10_Product/Chief_Consigliere_System_Prompt_v0.1.1.md`; `04_Methodology/Question_Mode_Router_v0.1.md`; `05_Experts/Expert_Map.md` | v0.1.3d - Reframed the inherited-book fix as lifecycle/acquisition-continuity behavior with counsel-boundary triggers. |

## Teaching-To-The-Test Check

Accepted:

- The remediation changes general routing and reasoning behavior.
- The behavior now applies to equivalent future patterns, not only the named Gate 2 cases.
- The router/front-door/prompt route by transaction mechanics, role labels, regime binding, and lifecycle stage.

Rejected / superseded:

- Treating the previous v0.2 retest as final Gate 2 evidence. It passed after remediation that was useful but too close to the test labels.

## Retest Requirement

Run all TC1-TC10 cold against the behavior-layer-remediated documented agent. Include the six previously passed cases as regression.

## Change Log

- v0.2 - Created behavior-layer remediation record; superseded template-style v0.1 remediation for Gate 2 decision purposes.
