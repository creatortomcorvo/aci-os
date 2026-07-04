# Compliance Product Category And Governance v0.1

Source: pasted founder governance note, captured 2026-07-04, with official source anchors checked on 2026-07-04.

## Status

This file defines the product category, intended-use boundary, and minimum governance model for ACI-OS / Chief Consigliere.

It is product design guidance, not legal advice. Final legal, regulatory, employment, data-protection, whistleblowing, investigation, sanctions, or disciplinary decisions remain with qualified humans and the relevant company decision owners.

## Master Definition

ACI-OS / Chief Consigliere is an AI-assisted, human-supervised compliance decision-support and escalation application for experienced compliance leaders.

It converts user-provided facts, recognized compliance frameworks, curated professional guidance, and the founder method into structured triage, practical next steps, escalation recommendations, and decision records.

It is designed to improve day-to-day compliance judgment. It is not designed to replace lawyers, investigators, whistleblowing systems, screening tools, policy repositories, enterprise GRC systems, external providers, or human accountability.

## Product Category

Business category: compliance operating companion.

GRC category: compliance decision-support and escalation tool.

AI governance category: AI-assisted professional advisory system with human oversight.

Compliance-program function: triage, prioritization, escalation, documentation, management communication, and practical guidance.

Legal boundary: not legal advice, but a legal-advice trigger and escalation tool.

Risk-management boundary: not an autonomous decision-maker, not an investigation conclusion engine, not a sanctions or AML screening engine, and not a whistleblowing channel unless separately configured and controlled.

Best short internal label: AI-assisted Compliance Judgment Support System.

Commercial label: the operating companion for compliance leaders.

Internal governance label: controlled AI-supported compliance advisory and escalation tool.

## Intended Use Statement

ACI-OS / Chief Consigliere is intended for use by qualified compliance, legal, risk, audit, HR, finance, and management professionals as a structured decision-support tool for compliance-program matters.

It provides practical compliance guidance, triage questions, escalation indicators, source-based reasoning, and suggested next steps.

It does not provide legal advice, determine legal rights or obligations, make employment or disciplinary decisions, conduct investigations, determine guilt or misconduct, operate as a whistleblowing channel, perform sanctions or AML screening, or replace qualified counsel, investigators, auditors, screening tools, or regulated professional advisers.

## User-Facing Interaction Notice

The product UI, session start, and tester package should make clear that ACI-OS is not a general-purpose chat interface. It is a specialized compliance decision-support environment for supervised professional use.

Minimum notice content:

- Specialized compliance decision-support prototype, not general chat.
- Human-supervised professional tool, not legal advice or clearance.
- No company secrets, personal data, whistleblower identities, privileged material, or live urgent matters in no-secret mode.
- Use approved company systems, advisers, and escalation channels for real matters.

The notice should appear at session start, in no-secret tester packs, and when the user requests clearance, live decision approval, or confidential-data handling. It should be short and practical, not repetitive boilerplate in every answer.

The notice should also direct the user to describe the pattern before the identity: roles, relationships, jurisdiction, risk indicators, decision pressure, and pending decision, without names or identifiers in no-secret mode.

## Non-Negotiable Reasoning Principle

Every meaningful response must distinguish:

- Established guidance: official guidance, recognized frameworks, standards, law, or approved company policy.
- Professional judgment: practical compliance reasoning based on facts, context, and founder method.
- Uncertainty: missing facts, jurisdictional differences, weak evidence, privilege/privacy constraints, or the need for Legal, external counsel, or specialist review.

This distinction is a trust feature. The app should never sound more certain than the source base and facts allow.

## Core Control Functions

1. First-response cards.

   A short answer that names the issue, reduces panic, gives first priorities, says what not to do, identifies who to involve, and offers the deeper layer.

   The first-response card should have an L0 layer for pressure situations: 2-4 short lines within the first 10 seconds that tell the user to stop, relax, avoid irreversible action, and choose short direction or deeper structure.

2. Focused fact intake.

   A small set of facts that matter first, not a long questionnaire. Intake must be sensitive to confidentiality, privilege, data protection, whistleblower identity, and retaliation risk.

   Input should be pattern-first and no-names-by-default. The app should ask for role descriptions and risk attributes before identifiers, and should pause if the user starts entering sensitive or identifiable facts in no-secret mode.

3. Risk triage.

   A risk read based on the facts provided, with escalation triggers and a clear warning where the facts are incomplete.

4. Recommendation engine.

   A suggested next step, not final approval. The recommendation should usually be hold, proceed with conditions, escalate, document, preserve, obtain specialist review, or complete a defined missing step.

5. Escalation gatekeeper.

   The app must know when to stop answering and route the user to Legal, external counsel, HR, privacy, audit, board-level escalation, an external expert, or a specialist provider.

6. Decision record.

   The app should help create a defensible record of what was known, assumed, recommended, escalated, and decided.

7. Calibration profile.

   The app should adapt to approved company context, risk appetite, systems, policies, reporting lines, and providers without requiring secrets in no-secret mode.

8. Knowledge governance.

   The app should use source hierarchy, owners, review cycles, versioning, expiry warnings, update monitoring, and user feedback review.

## Reasoning Record Standard

The user-facing name for the serious-matter decision record should be Reasoning Record.

The Reasoning Record is the exportable L4 artifact that shows the reasoning process behind a compliance decision or escalation. It should preserve facts, gaps, assumptions, inferences, source route, professional judgment, uncertainty, escalation triggers, recommended next step, decision owner, product/prompt/source versions, and timestamp.

It must not be described as legal advice, clearance, approval, proof of compliance, privilege, or protection from later challenge.

## Decision Record Standard

For serious matters, the app should help capture:

- Facts provided by the user.
- Facts still missing.
- Assumptions made.
- Sources or expert routes used.
- Established guidance relied on.
- Professional judgment applied.
- Uncertainty or legal/escalation triggers.
- Recommended next step.
- User or business decision owner.
- User decision or risk-acceptance record, where applicable.
- Timestamp, product version, prompt version, and source version.

The decision record is not proof that the decision was correct. It is evidence that the decision was structured, supervised, and escalated where needed.

## Escalation Gatekeeper Triggers

Escalation should be considered when the matter involves:

- Possible legal advice need, privilege, or external counsel trigger.
- Public official, state-owned entity, government tender, license, permit, inspection, customs, tax, or enforcement touchpoint.
- Sanctions match, ownership/control issue, sanctioned country, restricted goods, frozen payment, or evasion indicator.
- Whistleblower identity, retaliation risk, harassment allegation, protected disclosure, or sensitive HR action after a report.
- Fraud, bribery, money laundering, sanctions evasion, obstruction, document falsification, or accounting manipulation.
- Senior management, board member, country manager, high performer, or major revenue owner implicated or applying pressure.
- Regulator, law-enforcement body, auditor, investor, lender, media, or public reporting exposure.
- Cross-border evidence transfer, personal data, special-category data, employee data, or secrecy law issue.
- Potential employment, disciplinary, termination, demotion, transfer, or compensation decision.
- Conflicted internal process or insufficient independence of Compliance, HR, Legal, Internal Audit, or management.

## Product Boundaries

The app should never:

- Decide guilt, misconduct, intent, credibility, or witness reliability as a conclusion.
- Recommend firing, discipline, no discipline, demotion, transfer, or retaliation-risk action as a final decision.
- Decide whether to self-disclose to regulators.
- Approve or reject a sanctions match, payment, shipment, customer, third party, donation, sponsorship, gift, or public-official interaction.
- Determine that a payment, transaction, employment action, or regulatory response is lawful.
- Provide final legal opinions or replace local counsel.
- Tell users to destroy, alter, delay improperly, conceal, recreate, backdate, or move records off system.
- Encourage informal investigation before evidence preservation, confidentiality, privilege, retaliation, and investigation independence are considered.
- Bypass HR, Legal, privacy, Internal Audit, board escalation, regulators, auditors, or required company controls.
- Guarantee that an action is compliant.
- Fake citations, invent source thresholds, or imply a live database check that did not happen.

## Product Risk Register

Inherent product risk is medium-high because the tool may influence sensitive compliance, legal, employment, investigation, sanctions, whistleblowing, and data-protection decisions.

Key risks:

- Overreliance by users under pressure.
- Perception that the product provides legal advice.
- Hallucinated or outdated guidance.
- Leakage of confidential information, privilege, personal data, whistleblower identity, or investigation facts.
- Mishandling of whistleblower-channel obligations.
- Accidental high-risk employment or worker-evaluation use.
- Community scenario contamination or re-identification.
- False certainty in unclear matters.
- Regulatory drift when laws, guidance, or standards change.
- Brand or procurement concern if naming or messaging suggests informality for serious compliance decisions.

Residual risk can become medium only if governance, boundaries, human oversight, source discipline, and data-protection controls are built from the start.

## Data Protection And Confidentiality Baseline

Data protection is a design requirement, not a later feature.

Minimum requirements:

- Privacy-by-design and data minimization.
- Clear no-secret mode.
- Pattern-first input coaching that helps users abstract facts before disclosure.
- Secure company-material mode only with stronger security, access controls, retention rules, and approved company documents.
- Controller/processor analysis before enterprise deployment.
- Retention and deletion rules.
- Role-based access and need-to-know controls.
- Treatment of whistleblower identities, HR data, special-category data, investigation files, and privileged material as restricted.
- No community learning from user scenarios without review, anonymization, and governance approval.

## Whistleblowing Boundary

The app must not accidentally become a whistleblowing channel.

If the product is ever configured as part of a whistleblowing workflow, its risk profile changes materially. It would need confidentiality safeguards, acknowledgement and follow-up procedures, anti-retaliation controls, case-management design, access restrictions, retention rules, and independence controls.

Until that exists, the app may help a compliance professional think through a speak-up issue, but it should not receive or process reports as the reporting channel.

## Minimum Viable Governance Controls

For a credible first launch, the product needs:

- Intended-use policy.
- Clear source hierarchy.
- Matter-sensitivity warnings.
- External counsel and specialist escalation triggers.
- Data-protection baseline.
- Human oversight statement.
- Audit or decision-record capability for serious matters.
- QA and red-team testing for dangerous outputs.
- Failure taxonomy and failure log using F1-F9 classes.
- Community-content review before any scenario becomes reusable pattern logic.
- Marketing controls that do not imply legal advice, autonomous decision-making, screening clearance, whistleblowing-channel operation, or investigation conclusions.

## External Testing Disclaimers

Before any external tester, friend cohort, expert reviewer, or potential customer uses ACI-OS, the testing package must include clear disclaimers and guardrails.

Minimum external-testing disclaimers:

- Prototype only, not a finished product.
- Decision support only, not legal advice.
- No legal clearance, sanctions clearance, AML clearance, transaction approval, disciplinary approval, investigation conclusion, or whistleblowing-channel operation.
- Human supervision required.
- Use synthetic or anonymized scenarios only.
- Do not enter company secrets, personal data, whistleblower identities, live investigation facts, privileged material, confidential pricing, sensitive strategy, or client/customer-identifiable information.
- Do not use for live urgent matters, regulator contacts, police/law-enforcement interactions, sanctions decisions, harassment reports, retaliation risk, employment decisions, self-disclosure decisions, or active investigations.
- Outputs may be incomplete, outdated, wrong, or unsuitable for the tester's jurisdiction, company policy, or facts.
- Tester remains responsible for professional judgment and escalation to Legal, Compliance, HR, privacy, Internal Audit, external counsel, or other qualified advisers.
- Feedback may be used to improve the product only in anonymized, reviewed, and governed form.

External testing should start with a no-secret tester pack: one-page concept note, boundaries, synthetic scenarios, testing instructions, feedback form, version number, and contact/escalation route.

This disclaimer set is a living guardrail list: new disclaimers should be added when new testing risks, product modes, data categories, or regulatory-sensitive use cases are identified.

## Knowledge Governance Requirements

Governed knowledge should include:

- Source hierarchy.
- Content owners.
- Review cycles.
- Version history.
- Update alerts.
- Legal-review workflow for sensitive topics.
- Jurisdictional disclaimers.
- Expired-content warnings.
- Regulator-change monitoring.
- User feedback review.
- Harmful-output or wrong-output incident reporting.

## Founder Method Productization

The app should productize the founder method, especially:

- Calm the room.
- Find the real issue behind the noise.
- Separate legal risk from business discomfort.
- Say yes, but.
- Say no professionally.
- Protect the company and the person.
- Avoid overengineering.
- Escalate at the right time.
- Communicate upward without drama.
- Document judgment.

## Stakeholder Positioning

For compliance leaders: a structured sparring partner for messy first decisions.

For General Counsel: a controlled triage and escalation layer that should improve discipline and reduce informal risk decisions.

For CEOs and CFOs: a business-aware tool that helps management understand what facts, controls, and decisions are needed before moving.

For regulators and auditors: a supervised decision-support environment with source discipline, escalation logic, and decision records.

For procurement and security: an AI-assisted professional tool with defined intended use, boundaries, data controls, and human oversight.

## Source Anchors

The governance model should remain aligned with official and recognized AI, compliance, privacy, and whistleblowing anchors, including:

- EU AI Act, Regulation (EU) 2024/1689: https://eur-lex.europa.eu/eli/reg/2024/1689/oj
- ISO/IEC 42001:2023 AI management systems: https://www.iso.org/standard/42001
- NIST AI Risk Management Framework: https://www.nist.gov/itl/ai-risk-management-framework
- DOJ Evaluation of Corporate Compliance Programs, updated September 2024: https://www.justice.gov/criminal/criminal-fraud/page/file/937501/dl
- GDPR, Regulation (EU) 2016/679: https://eur-lex.europa.eu/eli/reg/2016/679/oj
- EU Whistleblower Directive, Directive (EU) 2019/1937: https://eur-lex.europa.eu/eli/dir/2019/1937/oj

These are anchors for product governance and source discipline. They do not replace jurisdiction-specific legal review.

## MVP Risk Rating

Inherent risk: medium-high.

Target residual risk for a tightly governed MVP: medium.

Risk-reduction logic: limit intended use, preserve human supervision, keep clear boundaries, avoid autonomous decisions, apply source discipline, protect sensitive data, and escalate early.

## Strategic Conclusion

ACI-OS / Chief Consigliere should not be an answer machine.

It should be a controlled professional reasoning environment that earns trust by calming the user, asking only the facts that matter first, recommending the next sensible step, and knowing when to stop and escalate.
