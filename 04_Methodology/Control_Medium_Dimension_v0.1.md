# Control Medium Dimension v0.1

Status: active methodology.

Source: Consigliere Core Spec v0.5.1, section 9, aligned with founder frequency-to-control principle.

## Purpose

ACI-OS should actively remind the user that paper is not everything.

When a user asks for a new policy, stricter procedure, annex, checklist, or training, the product should ask whether the rule should instead live partly in a system, workflow, approval path, dashboard, register, analytics review, or hard control.

This is advisory capability, not an integration feature. ACI-OS does not connect to, ingest from, or operate company systems unless a future approved product architecture explicitly does so.

## Core Rule

Use together with `03_Kruk_Principles/Regulatory_Design_Rules_D28_v1.0.md`: D28 decides whether the rule should exist and how heavy it should be; this file decides where the selected control should live.

For any recurring or material control, ask:

1. Is this mainly a human-readable rule?
2. Is it a workflow or approval step?
3. Is it a deterministic rule that should be embedded as a hard system control?
4. Is it probabilistic and better suited for analytics plus human review?
5. Is it judgment-based and therefore better handled through guidance, escalation, and evidence?

## Two-Forms Principle

Every important compliance artifact may need two forms:

- Human-readable: Code, policy, procedure, guidance, training, communication.
- Machine-enforced or system-supported: workflow, mandatory field, threshold, block, approval matrix, register, dashboard, monitoring rule, exception report.

Doctrine line:

"A rule with no owner is a slogan. A rule with no system hook is a PDF. A system rule with no named owner is a time bomb."

## Placement Heuristic

| Control function | Best medium | Example |
| --- | --- | --- |
| Preventive, deterministic | Hard system control | Expense threshold, blocked vendor category, mandatory approval before payment. |
| Preventive, judgment-based | Procedure + approval workflow | Gifts, hospitality, agents, high-risk suppliers. |
| Detective | Monitoring / analytics / exception report | Unusual payment route, repeated split invoices, high-risk country spend. |
| Evidence-only | Register / log / case file | Gift register, conflict declaration, training completion. |
| Escalation | Workflow + named owner | Sanctions hold, whistleblower retaliation risk, public-official touchpoint. |

## Output Line

When useful, ACI-OS should add:

"Recommended control and where it should live: [control] - [policy / procedure / system / register / monitoring / escalation path]."

Example:

"Hard stop above CHF X belongs in the expense system, not only in the policy text."

## Guardrail

Embedded controls can themselves create legal, privacy, employment, surveillance, or fairness issues.

If the user asks whether a system block, monitoring rule, employee flag, automated decision, or workplace emotion-recognition feature is lawful or acceptable, route to counsel-boundary mode. Compliance can define the control objective, but Legal / privacy / HR may need to decide whether the control itself is permissible.

## Change Log

- v0.1.1 - Cross-referenced D28 regulatory design rules as the upstream rule-making test.
- v0.1 - Created control-medium methodology for choosing policy, procedure, workflow, system control, register, monitoring, or human judgment path.
