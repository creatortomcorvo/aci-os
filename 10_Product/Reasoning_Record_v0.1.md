# Reasoning Record v0.1

Status: active product-design artifact.

Source: founder commercial-trust note, reviewed 2026-07-04.

## Purpose

The Reasoning Record is the structured output that shows how a serious compliance matter was approached.

It is not proof that a decision was correct. It is evidence that the user followed a structured, supervised process: facts were separated from assumptions, gaps were named, escalation was considered, sources were dated, uncertainty was visible, and the decision owner was identified.

## Product Role

The Reasoning Record is the defensibility layer of ACI-OS.

It should help a compliance professional answer later questions such as:

- What facts were known at the time?
- What was still missing?
- What assumptions or inferences were made?
- Which expert route or program element was used?
- What escalation triggers were considered?
- What was the safest recommended next step?
- Who owned the decision?
- What uncertainty remained?

## When To Offer

Offer a Reasoning Record for serious matters, especially where there is:

- High or critical risk.
- Senior-management pressure.
- Sanctions, bribery, fraud, retaliation, harassment, competition, regulator, evidence, whistleblowing, or employment risk.
- A documented risk decision or exception.
- A board, CEO, Legal, HR, Internal Audit, external counsel, regulator, or auditor audience.
- Material uncertainty or unresolved facts.

## Minimum Fields

1. Timestamp.
2. Product version, prompt version, expert-route version, and source version where relevant.
3. Mode: no-secret / secure company-material mode.
4. Pattern abstraction status: whether identifiers were excluded or approved secure context was used.
5. Facts provided.
6. Facts missing.
7. Assumptions.
8. Inferences.
9. Program element or control under stress.
10. Risk read.
11. Expert route or routes used.
12. Established guidance relied on, with as-of date where relevant.
13. Professional judgment applied.
14. Uncertainty and limitations.
15. Escalation triggers considered.
16. Recommended immediate next step.
17. What not to do.
18. Decision owner or escalation owner.
19. User/business decision or risk acceptance, if the user records it.
20. Follow-up actions and review date, where useful.

## No-Secret Mode Rule

In no-secret mode, the Reasoning Record must remain pattern-based and should not include names, case IDs, contract numbers, whistleblower identities, customer names, client names, privileged material, personal data, or other identifiers.

If the user needs an identifiable record, route them to an approved company system, secure company-material mode, Legal, external counsel, or another authorized process.

## L4 Export Template

### Reasoning Record

- Matter pattern:
- Date/time:
- Product / prompt / expert route version:
- Mode:
- Facts provided:
- Missing facts:
- Assumptions:
- Inferences:
- Risk read:
- Program element or control under stress:
- Expert route(s):
- Established guidance / sources / as-of date:
- Professional judgment:
- Uncertainty and limitations:
- Escalation triggers:
- Recommended next step:
- Do not:
- Decision owner / escalation owner:
- User decision / risk acceptance:
- Follow-up:

## Guardrails

- Do not call the Reasoning Record clearance, approval, legal advice, or proof of compliance.
- Do not imply that it creates legal privilege.
- Do not imply that it protects against subpoena, disclosure, regulatory criticism, or litigation.
- Do not include sensitive identifiers in no-secret mode.
- Do not present the record as a substitute for Legal, external counsel, HR, Internal Audit, privacy, or required company systems.

## Change Log

- v0.1 - Created Reasoning Record artifact as the defensibility layer for serious compliance matters.
