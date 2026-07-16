# ACI-OS Intelligence Radar Report Spec v0.1

Status: active internal recurring-report spec.

Purpose: create a recurring intelligence radar for ACI-OS that tracks external legal, regulatory, research, and human-interaction signals without turning them into product behavior automatically.

Stage status: internal only. Stage 0b blocks publication, testers, pilot links, commercial use, or external distribution of this output.

## Scope

The report covers three lanes:

1. Law and regulatory radar: ABAC, sanctions, fraud, FCPA, UK Bribery Act, US Sentencing Guidelines, OECD anti-corruption instruments, data privacy, antitrust, whistleblowing, and adjacent compliance laws or enforcement signals.
2. Compliance-program development radar: regulator guidance, enforcement lessons, compliance-program research, testing and monitoring trends, training design, speak-up and investigations practice, remediation, incentives and discipline, and governance expectations.
3. Human-interaction and product-behavior radar: AI use in compliance, mobile-app behavior, attention and reading patterns, decision support, human override, short-first answers, escalation design, and lessons from consumer UX where relevant to ACI-OS.

Initial jurisdiction watchlist: EU, UK, US, Canada, Japan, China, Russia, UAE, KSA, Switzerland, and OECD-level developments. This list is deliberately calibratable.

## Source Discipline

- Official law, regulator, court, prosecutor, enforcement, standards, and intergovernmental sources come first.
- Research papers, academic work, reputable practitioner research, and serious industry analysis come second.
- General press and commentary are signal sources only; do not treat them as authority.
- Every cited item must include source type, jurisdiction, date, link, and confidence.
- Links from the existing source register may be reused. New links must be verified during the report run before being cited.
- Do not import external language, frameworks, or product ideas into ACI-OS automatically. Apply ACT / PARK / DISCARD against the Blueprint and current phase.

## ACI-OS Mapping

Each substantive item should be tagged to the 7-element backbone:

- E1 Governance & Tone
- E2 Risk Assessment
- E3 Standards & Controls
- E4 Training & Communication
- E5 Speak-Up & Investigations
- E6 Monitoring, Testing & Data
- E7 Response, Remediation & Improvement

Use cross-cutting tags where relevant:

- Third-party/M&A lens
- Incentives/discipline
- AI/emerging-tech
- Advice channel
- Data/privacy boundary
- Human escalation
- Article candidate
- Product candidate
- Test-case candidate

## Report Format

Start short. Default output must fit a first screen before detail.

1. Top signals: 5 bullets maximum, each with jurisdiction, topic, why it matters, and ACI-OS tag.
2. Law and enforcement radar: only items with verified source links; separate binding law/regulator action from commentary.
3. Compliance-program radar: practical developments in what good programs are expected to do, with source labels.
4. Human-interaction/product radar: evidence or serious signals about AI, mobile, reading behavior, decision support, short-first UX, and escalation design.
5. ACI-OS implications: ACT / PARK / DISCARD table. ACT items must name the exact repo artifact or workflow they may affect.
6. Source register: concise list of sources used, grouped by official, research, and commentary.
7. Calibration questions for Tom: 3 questions maximum, focused on scope tuning.

## Warning Rules

Use `>_<` before any item that is not OK, unresolved, risky, unverified, blocked, or needs fixing.

Do not say ACI-OS "clears" an issue. Do not give legal advice. Do not use confidential, employer, client, personal, privileged, whistleblower, or live investigation material.

## Default Cadence

Recommended default: weekly, Monday morning Europe/Zurich, covering the prior seven days. The first weekly report of each month should include a short trend synthesis, not a separate long memo unless Tom asks for it.

## Change Log

v0.1 - created recurring intelligence-radar spec for law, compliance-program, and human-interaction developments requested by Tom.
