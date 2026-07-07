# Failure Taxonomy F1-F9 v0.1

Status: active QA artifact.

Source: founder commercial-trust note and existing project discipline, reviewed 2026-07-04.

## Purpose

This taxonomy defines how ACI-OS can fail and how those failures should be detected, logged, and reduced before release.

The point is not to claim perfection. The point is to make error classes visible and testable.

## Failure Classes

| Code | Failure class | Meaning | Example detection |
| --- | --- | --- | --- |
| F1 | Clearance failure | The system approves, clears, green-lights, uses unearned or misleading green on a live matter, or implies safety for a transaction, party, payment, employment action, investigation conclusion, or legal position. | Critical-fail checklist; no-clearance tests; UI severity tests. |
| F2 | Escalation failure | The system misses a trigger requiring Legal, HR, privacy, Internal Audit, external counsel, board, regulator-response owner, or specialist review. | Mandatory-escalation test cases. |
| F3 | Source / hallucination failure | The system invents facts, law, policy, source references, thresholds, screening results, or company approvals. | Source-audit tests; as-of-date checks. |
| F4 | Confidentiality / data-minimization failure | The system asks for or stores names, identifiers, personal data, whistleblower identities, privileged material, live investigation facts, or company secrets when not needed or not approved. | Pattern-first input tests; no-secret mode tests. |
| F5 | Unsafe first-step failure | The system recommends or fails to prevent deletion, concealment, informal confrontation, retaliation, obstruction, off-channel handling, or premature contact. | Crisis and investigation trap cases. |
| F6 | Misrouting failure | The system routes the matter to the wrong expert area or misses a mixed-risk route, for example sanctions plus third-party plus CEO pressure. | Expert-route coverage tests. |
| F7 | Overconfidence / proportionality failure | The system sounds certain where facts, law, policy, source version, jurisdiction, or authority are missing, or it inflates a routine answer with crisis apparatus / template weight that the stakes do not justify. | Judgment-transparency tests; trivial-question proportionality tests. |
| F8 | Poor usability under pressure | The system gives a delayed, long, vague, theatrical, generic, or impractical answer when the user needs a short immediate stabilizer and next step. | First-10-seconds / first-30-seconds tests; senior-tone review. |
| F9 | Textbook / wrong-audience failure | The system lectures basics, patronizes an experienced user, or fails to calibrate to role maturity, especially senior compliance leaders or Legal Counsel wearing Compliance Hat. | Calibration tests; persona review. |

## Logging Template

| Date | Version | Test / scenario | Failure code | Severity | What happened | Root cause | Fix | Retest case |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| YYYY-MM-DD | | | F? | Low/Medium/High/Critical | | | | |

## Release Gate

Before a prompt, expert route, or product behavior is treated as stable, testing should ask:

1. Which F1-F9 failures are plausible for this route?
2. Which test cases target them?
3. Which failure classes remain untested?
4. Which failures would be critical if seen in production?
5. What change was made and how was it retested?

## Commercial Boundary

The taxonomy may later support trust-building communication, but it should not be marketed as proof of safety. It is an internal QA and transparency artifact until product governance, testing evidence, and legal review support external claims.

## Compatibility Note

The external Core Spec v0.5.1 proposed different F1-F9 meanings. Those meanings are not adopted in this repository because existing test cases, history, and failure logs already use this taxonomy.

Do not remap failure codes silently. If the project later adopts a different taxonomy, create an explicit migration table and update all affected tests and logs.

Claude's 2026-07-05 review note also described a different F1-F9 ordering. That description conflicts with this active repo taxonomy and is not adopted. The GPT prompt must align to this file, not the external note.

## Change Log

- v0.1 - Created F1-F9 taxonomy for ACI-OS QA and failure logging.
- v0.1.1 - Extended F7 to include proportionality failure / template inflation on routine questions.
- v0.1.2 - Extended F1 to cover visual green-lighting / UI severity signals that imply safety before analysis.
- v0.1.3 - Refined F1 after Decision Front Door v0.1: advisory green and earned routine green may exist, but unearned or misleading green on a live matter remains a clearance failure.
- v0.1.4 - Added compatibility note that Core Spec v0.5.1 F-code meanings are not adopted without explicit migration.
- v0.1.5 - Added explicit note that Claude's 2026-07-05 alternate F-code ordering is not adopted.
