# Expert Map

Routing rule: sanctions is one expert route, not the default lens for ACI-OS.

Start from the user's facts and pressure pattern. Route to sanctions only when there is a real sanctions, trade, bank-hold, payment-route, restricted-party, restricted-country, ownership/control, restricted-goods, end-use, or evasion indicator. Otherwise use the relevant compliance route: ABAC, gifts/hospitality, fraud/books and records, conflicts, third-party due diligence, speak-up, investigations, competition, governance, training, monitoring, compliance program, document architecture, or regulator contact.

Cross-cutting lenses: Legal / Compliance role boundary, response mode, Decision Front Door, relationship lifecycle, document architecture, role-boundary, no-clearance, and pattern-first input. These are not separate expert routes, but they should shape the answer whenever the facts trigger them.

## Investigations

Scope: Internal allegations, fact finding, misconduct reviews, evidence preservation, witness handling, confidentiality, investigation planning, root cause, and remediation.

When to route: Any user question involving allegations, employee misconduct, fraud, harassment-linked compliance concerns, policy breaches, retaliation, evidence, interviews, or case closure.

First questions:

- What is alleged, and how specific is it?
- Who is accused, who is affected, and who may be a witness?
- What evidence exists and what may be lost?
- Is there an immediate retaliation or safety risk?
- Who can investigate independently?

Escalation triggers:

- Senior leader implicated.
- Criminal, bribery, fraud, sanctions, competition, or financial reporting concern.
- Retaliation risk.
- Evidence deletion risk.
- Legal privilege, cross-border data, or employment law issue.

## ABAC

Scope: Anti-bribery and anti-corruption issues, including public officials, state-owned entities, gifts, hospitality, travel, donations, sponsorships, facilitation payments, political contributions, charitable giving, kickbacks, and improper advantages.

When to route: Any request involving a thing of value, government touchpoint, business advantage, unusual payment, intermediary, tender, license, customs, inspection, tax, or state-linked customer.

First questions:

- Is a public official, state-owned entity, or government process involved?
- What thing of value is requested, offered, promised, or provided?
- What business advantage may be affected?
- Who requested it and who benefits?
- Is it accurately documented and policy-approved?

Escalation triggers:

- Cash or cash equivalent.
- Facilitation payment.
- Request tied to permit, tender, inspection, customs, tax, or enforcement action.
- Senior management pressure.
- Third-party intermediary or offshore payment.
- Inaccurate books and records.

## Sanctions

Scope: Sanctions, embargoes, restricted parties, ownership/control, country restrictions, sectoral restrictions, export-control overlap, restricted goods/services, payment blocking, banks, vessels, end users, and transaction holds.

Detailed route file: 05_Experts/Sanctions_Expert_Route_v0.1.1.md

When to route: Any question involving sanctioned countries, restricted parties, bank holds, possible list matches, ownership/control issues, exports, re-exports, end use, logistics routes, or sanctions-related customer pressure.

First questions:

- Which parties, owners, banks, vessels, intermediaries, and end users are involved?
- What countries, currencies, goods, services, software, or technology are involved?
- What screening was performed and when?
- Is there an ownership/control concern beyond direct list matching?
- Is a payment, shipment, service, or contract deadline imminent?

Escalation triggers:

- Positive or unresolved sanctions match.
- Sanctioned country or embargo nexus.
- Ownership/control red flag.
- Bank freeze or payment rejection.
- Evasion indicators.
- Restricted goods, military end use, dual-use item, or unusual routing.

## Third Party Due Diligence

Scope: Agents, distributors, consultants, resellers, brokers, suppliers, joint venture partners, acquisition targets, lobbyists, customs brokers, freight forwarders, and other intermediaries.

When to route: Any question about onboarding, renewing, paying, terminating, or risk-assessing a third party.

First questions:

- What role will the third party perform?
- Where are they located and where will they operate?
- Who owns and controls them?
- How will they be compensated?
- Do they interact with government, customers, tenders, customs, regulators, or state-owned entities?

Escalation triggers:

- Refusal to disclose ownership.
- Unusual commission, success fee, cash request, offshore account, or side agreement.
- Public official relationship.
- High-risk country or sanctioned-country nexus.
- Pressure to bypass due diligence.
- Negative media or prior misconduct.

## Competition Law

Scope: Antitrust and competition issues, including competitor contacts, pricing, customer allocation, market sharing, bid rigging, commercially sensitive information, trade associations, benchmarking, no-poach risks, and abuse of dominance indicators.

When to route: Any question involving actual or proposed contact with competitors, trade associations, tender discussions, market coordination, pricing signals, customer allocation, capacity, wages, or sensitive information exchange.

First questions:

- Who is the competitor or market participant?
- What is the purpose and agenda of the contact?
- Could prices, customers, territories, capacity, bids, strategy, costs, or wages be discussed?
- Is Legal aware?
- Will there be a written agenda, minutes, and exit protocol?

Escalation triggers:

- Price, customer, territory, output, bid, wage, or market allocation discussion.
- Competitor asks for future strategy or non-public data.
- Tender or procurement context.
- Informal off-channel contact.
- Request to hide or avoid written records.

## Governance / Tone at the Top

Scope: Board and senior management conduct, compliance mandate, independence, escalation, management override, accountability, resource pressure, and the practical meaning of tone at the top.

Founder-method support: 04_Founder_Method/Organizational_Culture_of_Integrity_Lecture_2026_01.md

When to route: Questions involving CEO, board, country manager, business leader pressure, policy exceptions, resource constraints, unresolved escalations, or inconsistent discipline.

First questions:

- Who is making the request or decision?
- What policy, control, or principle is under pressure?
- What is the business reason and what is the compliance concern?
- Who owns the decision under the governance model?
- Has the concern been documented and escalated before?

Escalation triggers:

- Management override.
- Retaliation or pressure against Compliance.
- Senior person implicated in misconduct.
- Board-level exposure.
- Repeat ignored warning.
- Revenue pressure linked to a high-risk decision.

## CEO / Boss Communication

Scope: Practical wording and communication strategy for difficult conversations with CEOs, business leaders, managers, board members, Legal, HR, and peers.

When to route: User asks how to say no, slow down, escalate, challenge a senior person, explain risk, request resources, or frame compliance without sounding obstructive.

First questions:

- Who is the audience?
- What decision or behavior needs to change?
- What is the user's authority and relationship with the person?
- What tone is needed: firm, diplomatic, urgent, or documented?
- What outcome is realistic in the next conversation?

Escalation triggers:

- CEO or senior leader asks to bypass controls.
- User is being pressured or isolated.
- Risk of retaliation.
- Need for board or Legal escalation.
- Written record may later matter.

## Business Expectations

Scope: Managing business pressure, timelines, sales expectations, proportionality, risk appetite, decision framing, and compliance as an enabler of defensible execution.

When to route: User faces unrealistic deadlines, "commercial says no time," "everyone does it," "client will walk," or "Compliance is blocking business."

First questions:

- What business outcome is being protected?
- What compliance step is under pressure?
- What is the real deadline?
- Can the decision be staged or conditionally approved?
- What is the minimum defensible control?

Escalation triggers:

- Pressure to skip mandatory control.
- "Deal first, paperwork later."
- Senior management override.
- High-risk country, public official, sanctions, competition, or investigation context.
- Lack of documented risk acceptance.

## Speak Up

Scope: Whistleblowing, hotline reports, open-door reports, confidentiality, non-retaliation, reporter care, case intake, triage, and follow-up.

Founder-method support: 04_Founder_Method/Organizational_Culture_of_Integrity_Lecture_2026_01.md

When to route: Any report, concern, complaint, anonymous allegation, retaliation fear, or question about how to handle a reporter.

First questions:

- What was reported and how was it received?
- Is the reporter known, anonymous, or vulnerable?
- Is there any immediate harm or retaliation risk?
- What confidentiality expectations were given?
- Who should own intake and follow-up?

Escalation triggers:

- Retaliation risk.
- Senior leader implicated.
- Reporter threatened or pressured.
- Serious misconduct alleged.
- Identity disclosure risk.
- Legal requirement for follow-up or regulator reporting.

## Dawn Raid / Regulator Contact

Scope: Regulator contact, dawn raids, inspections, subpoenas, authority requests, document demands, interviews, preservation, privilege, and internal response coordination.

When to route: User mentions regulator, law enforcement, prosecutor, competition authority, tax authority, customs, search, inspection, subpoena, request for documents, or unplanned authority visit.

First questions:

- Who is the authority and what document or power are they relying on?
- Where are they and who have they contacted?
- What are they asking for?
- Is Legal or external counsel available?
- What documents, devices, or interviews are at issue?

Escalation triggers:

- Authority onsite.
- Search warrant, subpoena, formal order, or compulsory process.
- Request to interview employees.
- Request for privileged or personal data.
- Risk of obstruction or document destruction.

## Training

Scope: Compliance training strategy, targeted learning, communication campaigns, leadership messaging, role-based training, microlearning, and behavior reinforcement.

Founder-method support: 04_Founder_Method/Organizational_Culture_of_Integrity_Lecture_2026_01.md

When to route: User asks about training design, rollout, low completion, ineffective training, policy awareness, leadership messages, or post-incident communication.

First questions:

- Who is the audience?
- What behavior should change?
- What risk or incident triggered the need?
- Is training mandatory, targeted, or advisory?
- How will understanding and behavior be tested?

Escalation triggers:

- Training used as substitute for controls.
- Repeat incident after prior training.
- High-risk roles excluded.
- Leadership undermines the message.
- No evidence of completion or understanding.

## Monitoring

Scope: Controls testing, compliance monitoring, audit coordination, dashboards, issue tracking, root cause, remediation, metrics, and continuous improvement.

When to route: User asks about testing, audit findings, control failure, metrics, monitoring plan, annual review, or proof the program works.

First questions:

- What control, process, or risk is being monitored?
- What data is available and reliable?
- What failure or pattern has been observed?
- Who owns remediation?
- How will closure be verified?

Escalation triggers:

- Repeat failure.
- Management ignores finding.
- Control bypass by senior person.
- High-risk area with no testing.
- Metrics hide rather than reveal risk.

## Compliance Program

Scope: Program design, maturity, governance, risk assessment, policies, training, reporting, investigations, monitoring, incentives, discipline, remediation, resources, and board reporting.

Founder-method support: 04_Founder_Method/CMS_Group_Implementation_Lecture_2026_01.md

Founder-method support: 04_Founder_Method/Organizational_Culture_of_Integrity_Lecture_2026_01.md

When to route: User asks about building, assessing, explaining, improving, benchmarking, or defending a compliance program.

First questions:

- What is the company's industry, size, footprint, and risk profile?
- What program elements already exist?
- Where are the known gaps?
- Who owns compliance decisions and escalation?
- What evidence shows the program works in practice?

Group CMS questions:

- Is the question being asked from HQ, region, sub-region, or country level?
- Is this a new build, rollout, remediation, acquisition integration, maturity upgrade, or audit response?
- What is centrally defined and what is actually locally implemented?
- Which system is weak: internal controls, risk management, audit, policies, training, speak-up, due diligence, sanctions screening, investigations, reporting, or escalation?

Escalation triggers:

- Compliance lacks authority, access, or resources.
- No risk assessment.
- Policies exist but are not implemented.
- Speak-up or investigation process is weak.
- Board reporting is absent or cosmetic.
- Repeat failures without remediation.
