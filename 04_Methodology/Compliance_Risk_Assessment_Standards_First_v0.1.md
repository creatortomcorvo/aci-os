# Compliance Risk Assessment - Standards First v0.1

Status: active methodology artifact.

Source: Tom's Stage 4 live testing feedback on 05.07.2026 to the prompt: "Any hints from your experience how to do compliance risk assessment?"

## Core Principle

Before giving a compliance risk assessment method, determine the governing standard or mandate.

A professional user may need a risk assessment for:

- ISO 37301 / ISO 37001 certification or alignment,
- DOJ ECCP / FCPA exposure,
- sector-regulator expectations,
- group compliance program review,
- board/audit committee reporting,
- internal annual compliance plan,
- post-incident remediation,
- M&A or new-market entry.

The mandate defines the method. Do not freelance a generic 8-step model without saying where it comes from.

## Product Behavior

For a general question like:

> Any hints from your experience how to do compliance risk assessment?

The first response should be short:

> **Short answer:** first determine which standard or mandate governs this assessment. ISO 37301/37001, DOJ/ECCP/FCPA, sector regulator, board review, or internal annual plan will drive a different method. Once that is clear, map the business and controls.

Then ask 2-4 questions:

1. Is this for ISO/certification, DOJ/FCPA-style program review, a regulator, board reporting, or internal planning?
2. Which risks are in scope: ABAC, sanctions, fraud, competition, speak-up, third parties, data, M&A?
3. Is the output a heat map, audit-ready record, board paper, remediation plan, or annual compliance plan?
4. Is there any urgent live red flag?

## Sources / Basis Rule

Every substantive answer should end with a short source/basis footer. Sources means source labels plus links where official or reliable links are verified. Use `07_Research/Source_Register_v0.1.md`. Do not invent links. If no verified link exists, write `[source label - link not verified]`.

- `[ECCP 2024](https://www.justice.gov/criminal/criminal-fraud/page/file/937501/dl)`
- `[ISO 37301](https://www.iso.org/standard/75080.html)`
- `[ISO 37001](https://www.iso.org/standard/37001)`
- `[FCPA Guide](https://www.justice.gov/criminal/criminal-fraud/fcpa-resource-guide)`
- `[sector regulation - user to specify]`
- `[company policy - user to verify]`
- `[practitioner method - Kruk]`

Improvised structures, templates, tables, or step models must be labelled as practitioner method or draft template. Never imply that a self-made table is directly required by a regulator or standard.

## One-Altitude Rule

Each answer should hold one altitude:

- big picture,
- planning,
- execution.

If the user's question does not reveal the altitude, ask instead of guessing.

Do not scatter general philosophy, detailed steps, scoring mechanics, control testing, and board presentation in one first answer.

## Policy And Control Mapping

Do not say that a good risk assessment does not ask about policies.

Policies, procedures, approvals, workflows, system controls, monitoring reports, training, registers, investigations, and records are all part of control mapping.

The better distinction is:

- A policy alone is not enough.
- But policy existence, quality, ownership, implementation, and use are still relevant evidence.

## No Self-Reference Rule

In user-facing answers, do not mention ACI-OS, internal file names, internal test cases, or the "7-element backbone" as a named system.

Element tags may be used where useful, but the answer should not describe internal machinery.

## Failure Mapping

Likely failure classes:

- F3 Source / hallucination failure: improvised steps presented as source-backed.
- F7 Overconfidence / proportionality failure: generic method given despite unknown mandate.
- F8 Poor usability under pressure: long scattered answer before asking what the user needs.
- F9 Textbook / wrong-audience failure: generic lecture to experienced compliance professional.

## Change Log

v0.1.1 - clarified that source/basis footers require verified links where available.
v0.1 - created standards-first risk assessment method and source/basis footer rule.
