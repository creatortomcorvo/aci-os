# ACI-OS Intelligence Radar Report Spec v0.2

Status: active internal recurring-report spec. Supersedes v0.1.

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

0. Response timestamp: exact generation timestamp near the top in `YYYY-MM-DD HH:mm:ss +02:00 Europe/Zurich` format, adjusted to the current Zurich offset.
1. Top signals: 5 bullets maximum, each with jurisdiction, topic, why it matters, and ACI-OS tag.
2. Law and enforcement radar: only items with verified source links; separate binding law/regulator action from commentary.
3. Compliance-program radar: practical developments in what good programs are expected to do, with source labels.
4. Human-interaction/product radar: evidence or serious signals about AI, mobile, reading behavior, decision support, short-first UX, and escalation design.
5. ACI-OS implications: ACT / PARK / DISCARD table. ACT items must name the exact repo artifact or workflow they may affect.
6. Documentation, knowledge, docs, and links recommendations: exact proposed changes to source registers, knowledge feeds, documentation indexes, source notes, or parked-item files.
7. Methodology and response-behavior recommendations: exact proposed changes to methodology files, response patterns, question banks, test cases, expert routes, or product behavior rules.
8. Decision cards for Tom: each recommended change must have a YES token and a NO token.
9. Source register: concise list of sources used, grouped by official, research, and commentary.
10. Calibration questions for Tom: 3 questions maximum, focused on scope tuning.

## Recommendation Rules

Documentation / knowledge / docs / links recommendations may include:

- add or update official source links in `07_Research/Source_Register_v0.1.md`;
- create or update standing feed lists for future radar runs;
- add source-intake notes under `07_Research`;
- add links to document indexes where useful;
- park unabsorbed external material in `99_Parked/INBOX.md`;
- recommend no change where a source is too weak, duplicative, or not yet relevant.

Methodology / response-behavior recommendations may include:

- add a test-case candidate;
- update a response pattern card;
- propose a question-bank row;
- refine an expert route;
- propose a short-first or auditability rule;
- park a product idea until decision-journal frequency supports it;
- recommend no change where the signal is not yet stable.

Each recommendation must state:

- verdict: ACT, PARK, DISCARD, or NO CHANGE;
- exact target file or workflow;
- reason;
- risk if implemented;
- risk if not implemented;
- implementation size: small, medium, or large;
- recommended decision.

## Decision Card Format

Use this format for every implementable recommendation:

```text
Decision card DOCS-1
Recommendation: ...
Target file(s): ...
Recommended decision: YES
Why: ...
Risk: ...
Reply token: YES-DOCS-1 to implement now / NO-DOCS-1 to park
```

Use `METHOD-1`, `METHOD-2`, etc. for methodology and response-behavior changes.

Scheduled reports must not silently edit methodology, knowledge, source-register, expert-route, prompt, or test-case files. If Tom replies with a YES token, Codex may immediately implement only the exact named change, then report the files changed. If Tom replies with NO, Codex should park or leave the item as stated in the card.

## Warning Rules

Use `>_<` before any item that is not OK, unresolved, risky, unverified, blocked, or needs fixing.

Do not say ACI-OS "clears" an issue. Do not give legal advice. Do not use confidential, employer, client, personal, privileged, whistleblower, or live investigation material.

## Default Cadence

Recommended default: weekly, Monday morning Europe/Zurich, covering the prior seven days. The first weekly report of each month should include a short trend synthesis, not a separate long memo unless Tom asks for it.

## Change Log

v0.2.1 - added mandatory response timestamp at the top of each generated intelligence-radar report.

v0.2 - added documentation/knowledge/link recommendations, methodology/response-behavior recommendations, and YES/NO decision cards for controlled implementation.

v0.1 - created recurring intelligence-radar spec for law, compliance-program, and human-interaction developments requested by Tom.
