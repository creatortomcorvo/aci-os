# Foundation Map v1.0

Status: active foundation artifact. Gate 1 CLOSED on integration of Gate 1 Resolution Record v1.0.

Source: `00_foundation/gate_1_resolution_record_v1.0.md`, decided by Tomasz Kruk on 04 July 2026.

Purpose: this map is the backbone for ACI-OS compliance methodology. It is an internal architecture map, not legal advice, not a source memo, and not a claim that every anchor uses identical language.

## Gate 1 Result

The 7-element model survived the full 12-element practitioner crosswalk with no orphans. The backbone stands.

Future challenges to the model require a failed crosswalk, not a preference. Any model change proceeds only through a formal Blueprint amendment.

## Final Anchor Set

Gate 1 adopted eight anchor sources:

1. DOJ Evaluation of Corporate Compliance Programs (2024).
2. FCPA Resource Guide + 2025 enforcement guidelines.
3. UK Bribery Act six principles.
4. ECCTA failure-to-prevent-fraud.
5. ISO 37301 / ISO 37001.
6. USSG Section 8B2.1 / OIG.
7. OECD Good Practice Guidance.
8. OFAC Framework for Compliance Commitments.

Second-ring sources are cited and used for awareness, but not crosswalked as anchors in Gate 1: EU AI Act, ISO/IEC 42001, GDPR.

## The 7-Element Backbone

| # | Element | ACI-OS meaning |
| ---: | --- | --- |
| 1 | Governance & Tone | Mandate, independence, resources, accountability, board/senior-management role, culture, incentives, and tone. |
| 2 | Risk Assessment | Identifying, prioritizing, and refreshing compliance risk, including transaction, third-party, geographic, product, technology, and change risks. |
| 3 | Standards & Controls | Code, policies, procedures, due diligence, approvals, controls, system guardrails, contractual controls, and control-medium choices. |
| 4 | Training & Communication | Training, communications, guidance accessibility, awareness, manager cascade, and practical user enablement. |
| 5 | Speak-Up & Investigations | Reporting channels, non-retaliation, intake, triage, investigation governance, independence, evidence handling, and case discipline. |
| 6 | Monitoring & Data | Monitoring, audit, testing, analytics, inquiry data, control evidence, dashboards, and feedback loops. |
| 7 | Response & Remediation | Consequence management, remediation, root cause, discipline after findings, control improvement, lessons learned, and repeat prevention. |

## Anchor Crosswalk

This is a directional architecture crosswalk. It shows how each anchor supports the 7-element backbone. It does not replace source review for legal, regulatory, audit, or certification use.

| Element | DOJ ECCP | FCPA / 2025 enforcement | UKBA six principles | ECCTA FTP fraud | ISO 37301/37001 | USSG/OIG | OECD GPG | OFAC Framework |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 Governance & Tone | Senior and middle management commitment; autonomy and resources. | Management commitment and compliance culture. | Top-level commitment; proportionate procedures. | Senior management prevention procedures. | Leadership, governance, roles, resources, culture. | Governing authority knowledge; high-level personnel responsibility; incentives/discipline.[1] | Senior management commitment; oversight. | Management commitment. |
| 2 Risk Assessment | Risk-based program design; periodic review; lessons from misconduct. | Risk-based compliance and third-party risk evaluation. | Risk assessment. | Fraud-risk assessment. | Compliance-risk identification and assessment. | Periodic risk assessment. | Risk assessment. | Sanctions risk assessment. |
| 3 Standards & Controls | Policies/procedures; third-party management; M&A; controls. | Code, policies, internal controls, due diligence, payments/books-records. | Proportionate procedures; due diligence. | Prevention procedures and controls. | Operational controls, documented information, outsourced processes. | Standards and procedures to prevent/detect misconduct. | Policies, procedures, internal controls, due diligence. | Internal controls. |
| 4 Training & Communication | Training and communications; confidential guidance access. | Training, communications, advice availability. | Communication and training. | Communication, training, and top-level reinforcement. | Competence, awareness, communication. | Effective communication and training. | Training and communication. | Training. |
| 5 Speak-Up & Investigations | Confidential reporting; investigation process; investigation resources. | Reporting mechanisms; investigation and response expectations. | Reporting concerns through proportionate procedures. | Speak-up/reporting and investigation as part of prevention response. | Reporting concerns, investigation, non-retaliation controls. | Monitoring/reporting systems; response after misconduct. | Reporting, protection, investigation. | Escalation and internal reporting of sanctions issues. |
| 6 Monitoring & Data | Continuous improvement, periodic testing, data access and analysis. | Testing, audit, transaction monitoring, third-party monitoring. | Monitoring and review. | Monitoring and review of fraud controls. | Performance evaluation, monitoring, audit, review. | Monitoring, auditing, evaluation. | Monitoring and review. | Testing and auditing. |
| 7 Response & Remediation | Root cause, remediation, discipline, incentives. | Remediation, discipline, incentives, control improvement. | Review and improvement after issues. | Remediation of fraud-control gaps. | Nonconformity, corrective action, continual improvement. | Appropriate response and prevention of recurrence; incentives/discipline.[1] | Discipline, remediation, periodic improvement. | Remediation and program improvement after sanctions issues. |

## Gate 1 Decisions Integrated

### D1 - Incentives And Discipline

Incentives and discipline remain deliberately split across Element 1 and Element 7.[1]

### D2 - AI / Emerging-Technology Risk

AI and emerging technology do not create an eighth element. They create risk and control questions inside the existing backbone:

| Element | Added row | Meaning for ACI-OS |
| --- | --- | --- |
| 2 Risk Assessment | AI/emerging-technology risk assessment | Assess AI use, model/vendor exposure, data flows, automation risk, decision-impact risk, monitoring gaps, and changed-risk profile. |
| 3 Standards & Controls | AI/emerging-technology control medium | Govern AI as a control medium: intended purpose, human decision baseline, access, logs, monitoring, escalation, data boundaries, and review. |

### D3 - Third-Party / M&A Lens

*A lens is a mandatory question set applied across elements rather than an element itself; the third-party/M&A lens attaches to Elements 2 (risk), 3 (controls/DD), and 6 (ongoing monitoring), and activates whenever an external party or transaction is in scope.*

The lens is not a new element because third-party and M&A questions cut across risk assessment, controls, due diligence, contract architecture, monitoring, data, and remediation. Treating it as a lens prevents under-mapping and avoids hiding third-party risk in one box.

Minimum lens questions:

- Element 2: What external-party or transaction risk exists by geography, sector, product/service, value chain, ownership, government touchpoint, payment route, M&A target, or change event?
- Element 3: What due diligence, approval, contract, payment, onboarding, training, and system-control steps are required?
- Element 6: What monitoring, renewal, audit, invoice/deliverable evidence, payment-route review, alerting, and change detection must continue after onboarding or closing?

### D4 - Annex A Advice-Channel Mapping

The 12-element practitioner model maps into the 7-element backbone with no orphans. The contested advice & guidance channel maps three ways.[2]

### D5 - OFAC As Eighth Anchor

OFAC Framework for Compliance Commitments is adopted as the eighth anchor source because Sanctions Agent v1 is the first formal expert route and a foundation map excluding the sanctions regulator's own compliance framework would be incomplete for the intended practitioners.

## Annex A - 12-To-7 Practitioner Crosswalk

| 12-element practitioner map | 7-element backbone mapping | Treatment |
| --- | --- | --- |
| 1 Governance and mandate | E1 Governance & Tone | Direct mapping. |
| 2 Risk assessment | E2 Risk Assessment | Direct mapping. |
| 3 Standards and policies | E3 Standards & Controls | Policies and standards live with controls. |
| 4 Procedures and controls | E3 Standards & Controls | Direct mapping; procedures are control architecture. |
| 5 Training and communication | E4 Training & Communication | Direct mapping. |
| 6 Advice and guidance | E3 Standards & Controls; E4 Training & Communication; E6 Monitoring & Data | Split mapping with footnote.[2] |
| 7 Speak-up and reporting | E5 Speak-Up & Investigations | Direct mapping. |
| 8 Investigations and response | E5 Speak-Up & Investigations; E7 Response & Remediation | Investigation governance lives in E5; post-finding response/remediation lives in E7. |
| 9 Third-party risk management | D3 lens across E2, E3, and E6 | Cross-cutting lens, not a standalone element. |
| 10 Incentives and discipline | E1 Governance & Tone; E7 Response & Remediation | Deliberate dual-home with footnote.[1] |
| 11 Monitoring, auditing, and testing | E6 Monitoring & Data | Direct mapping. |
| 12 Remediation and continuous improvement | E7 Response & Remediation | Direct mapping. |

## Footnotes

[1] Incentives and discipline have a deliberate dual home. Board-level accountability, tone, resource consequences, incentives, and cultural accountability live in Element 1. Post-finding discipline and consequence mechanics live in Element 7. Forcing one home would fail the USSG/OIG anchor and weaken the operating model.

[2] Advice and guidance is not orphaned. The existence, mandate, staffing, and availability of the advice channel are Element 3 standards/controls. Its use, accessibility, and quality are Element 4 training/communication. Its inquiry patterns and data are Element 6 monitoring/data.

## Change Log

- v1.0 - Integrated Gate 1 Resolution Record v1.0: OFAC added as eighth anchor; D1 and D4 footnotes inserted; D3 lens definition inserted; D2 AI rows added to Elements 2 and 3; Annex A 12-to-7 table attached; Gate 1 closed.

