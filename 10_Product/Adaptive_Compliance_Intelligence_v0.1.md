# Adaptive Compliance Intelligence v0.1

Source: Tom's 2026-07-04 note on calibration, Professional Navigation, and the distinction between information databases and judgment systems.

## Status

This file captures a product concept. It is not final branding, not UI design, and not a promise of current functionality.

## Core Idea

ACI-OS is not just artificial intelligence applied to compliance content.

The stronger idea is Adaptive Compliance Intelligence: a system that adapts its reasoning, tone, questions, escalation logic, and output structure to the user's company profile, role, maturity, and situation.

The visible difference is that the answer begins:

"Based on your company profile..."

That is a huge difference from a generic chatbot answer.

## Company Profile Before Answering

Before giving advice, the mature product should know or ask about the approved company profile:

- Company size.
- Industry.
- Reporting line.
- Jurisdiction.
- Hotline or speak-up provider.
- Sanctions tool.
- Investigation procedure.
- Compliance maturity.
- Risk appetite.
- CEO profile or management style.
- Whether Internal Audit exists.
- Whether outside counsel exists.
- Whether ISO 37301 is adopted or used as reference.
- Whether DOJ ECCP is used as reference.
- Whether monitoring exists.
- Previous conversations, where allowed and approved.
- Tom's methodology / founder method.

## Calibration Boundaries

Calibration must not become an excuse to lower standards.

Risk appetite, CEO style, resource constraints, or business urgency may affect wording, sequencing, and escalation route. They must not override law, mandatory controls, evidence preservation, anti-retaliation, sanctions controls, or Legal/board escalation requirements.

In no-secret mode, the profile should be generic and non-confidential.

In secure company-material mode, the profile can include approved internal materials, subject to security, access, retention, and governance controls.

## Difference From Information Databases

| Information database | Adaptive Compliance Intelligence |
| --- | --- |
| Information | Judgment |
| Search | Prioritization |
| Cases | Decision support |
| Law | Practice |
| Research | Conversation |
| Documents | Confidence and structure |

This is why the product should not compete with LexisNexis, sanctions databases, law-firm research tools, or document repositories. It should sit above them and help the user decide what matters now.

## Professional Navigation

The product should behave like a professional navigation system for compliance decisions.

For a messy issue, the first output should not be a long answer. It should orient the user:

- Situation understood.
- Stress level.
- Main pressure types.
- Likely risk domains.
- Required participants.
- Estimated decision effort.
- External counsel likelihood.
- Confidence / uncertainty.
- First safe step.

Example:

User: "CEO wants to approve a distributor tomorrow."

Possible navigation envelope:

- Stress level: high.
- You are probably dealing with: business pressure, time pressure, third-party risk, ABAC risk, and personal accountability.
- This likely requires: due diligence review, Legal or Compliance review, clear business rationale, beneficial ownership facts, public-official touchpoint check, and documented decision owner.
- External counsel need: medium if public officials, sanctioned jurisdictions, opaque ownership, or unusual commission are present.
- Confidence: medium until party, country, ownership, services, payment, and government-touchpoint facts are known.
- First safe step: pause approval until the missing risk facts are collected.
- Do not: approve because of deadline alone.

## First Screen Psychological Design

The product should not begin with "Here is the answer."

It should begin with orientation:

"Situation understood. You are probably dealing with regulatory risk, personal accountability, time pressure, and business pressure. Let's solve them in that order."

This is psychological design. It reduces panic and structures action.

## Product Modes - Parked For Later Design

Potential modes:

- Crisis Mode: police, regulators, sanctions, whistleblower, immediate risk.
- CEO Mode: business decision, negotiation, presentation, escalation.
- Builder Mode: policies, training, monitoring, risk assessment.
- Mentor Mode: learning, career, professional growth.
- Reflection Mode: "I handled this today" and the system learns from an anonymized pattern.

These are strong product ideas, but they should not drive the current build until the 100 moments and expert-route methodology are stronger.

## Positioning Line - Parked For Brand Work

Candidate homepage line:

"You don't need another database. You need someone to think with."

This captures the gap, but final brand and homepage copy should wait until methodology and product behavior are clearer.

## Change Log

- v0.1 - Captured Adaptive Compliance Intelligence, company-profile calibration, database-vs-judgment positioning, Professional Navigation, first-screen psychological design, and parked product modes/homepage language for later.
