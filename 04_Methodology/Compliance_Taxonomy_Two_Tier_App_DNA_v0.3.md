# Compliance Taxonomy - Two-Tier App DNA v0.3

Status: active methodology / product DNA.

Date: 2026-07-11.

Supersedes: `04_Methodology/Compliance_Taxonomy_Two_Tier_App_DNA_v0.2.md`.

Source status: ACT / PARK / DISCARD under Hard Constraint 6. This file converts Tom's code-of-conduct benchmark, the GPT long-form taxonomy answer, the later enterprise-taxonomy recommendation, public-source review, and founder profile calibration into ACI-OS structure. It is practitioner synthesis, not a regulatory source.

## Purpose

This taxonomy defines the compliance topic universe for ACI-OS.

It prevents sanctions from becoming the default lens, makes corporate governance and ESG explicit, gives the decision journal a stable tagging system, and gives users a practical enterprise compliance map that can support documents, checklists, program reviews, and GPT answers.

## External Input Verdict

ACT:

- Build one enterprise compliance taxonomy, then add sector-specific modules.
- Do not use any single company code as the complete benchmark.
- Keep public codes and sector materials as coverage benchmarks, not authority.
- Add the enterprise compliance family view as the user-facing taxonomy.
- Keep the internal product-routing view clean and stable.
- Add document architecture: short Code, policy library, operational procedures, sector modules, evidence, and assurance.

PARK:

- Exact claims about a named company's current code, AI section, ethics framework, or policy architecture unless verified in the source register.
- Numerical claims such as "34 universal topics" unless the maintained list is frozen and versioned.
- Any sector-specific expansion that would imply a new route or agent before Stage 4 journal data justifies it.

DISCARD:

- Treating public codes as complete evidence of a company's internal program.
- Copying public-code wording into ACI-OS.
- Letting a benchmark list replace the Gate 1 7-element backbone.
- Creating a new specialist agent because a topic is important in theory.

## Source And Intake Rule

Company-first remains the operating rule. If the user asks about a company document, internal policy, procedure, approval matrix, code, clause, investigation protocol, or control, ACI-OS first asks whether the user's own company has the governing document.

Public codes and supplier / product-use policies are useful for benchmarking coverage, spotting omissions, sharpening examples, and comparing presentation. They are not authority for the user's company unless adopted internally, and they are not proof that a topic is absent from the company's internal compliance program.

For AI-sector companies, public usage policies, supplier codes, trust pages, privacy notices, and safety materials are useful for the AI / digital calibration layer. They must not be described as complete employee codes unless the actual employee code has been verified.

## Architecture Rule

ACI-OS uses two complementary taxonomy views:

| View | Purpose | User-visible? |
| --- | --- | --- |
| Product routing view | Internal routing, journal tagging, agent selection, and source discipline. | Usually hidden or lightly referenced. |
| Enterprise compliance view | Practical compliance family map for answers, documents, checklists, program reviews, and user education. | Usually visible when the user asks for coverage, program design, policies, or a compliance universe. |

The taxonomy does not replace the Gate 1 7-element backbone. It sits inside the backbone as the topic universe, standards-and-controls vocabulary, risk inventory, example library, source-routing aid, and coverage dashboard.

The 7-element backbone remains the program operating architecture:

1. Governance & Tone.
2. Risk Assessment.
3. Standards & Controls.
4. Training & Communication.
5. Speak-Up & Investigations.
6. Monitoring, Testing & Data.
7. Response, Remediation & Improvement.

## Product Routing View

Tier 1 is the universal compliance core used for routing and journal tagging.

| Tag | Family | Coverage |
| --- | --- | --- |
| T1-GOV | Governance, Ethics & Operating Model | Corporate governance, tone from the top, board / management oversight, compliance mandate, role clarity, policy hierarchy, ethical decision-making, delegations, accountability, program resources, independence, escalation, discipline, incentives, regulatory change, culture, simplification, automation. |
| T1-INF | Corruption & Influence | ABAC, FCPA / UKBA, public officials, state-owned entities, commercial bribery, gifts, hospitality, travel, meals, entertainment, sponsorships, donations, grants, political contributions, lobbying, conflicts of interest, facilitation payments, kickbacks, intermediaries, improper advantage, influence risks. |
| T1-FIN | Financial Integrity & Market Conduct | Fraud, theft, asset misuse, expense fraud, procurement fraud, books and records, accounting controls, internal controls, tax, AML, terrorist financing, proliferation financing, insider trading, market abuse, antitrust, competition, tender integrity, fair dealing, customer and marketplace conduct. |
| T1-TRD | Trade, Sanctions & Third Parties | Sanctions, export controls, import / customs, embargoes, anti-boycott, restricted parties, ownership / control, end-use and end-user, public procurement, agents, distributors, suppliers, intermediaries, M&A and JV diligence, supplier conduct, third-party lifecycle, monitoring, change and exit. |
| T1-PPL | People, Workplace & Speak-Up | Harassment, discrimination, bullying, retaliation, respectful workplace, health and safety, employee rights, speak-up, whistleblowing, hotlines, reporter care, confidentiality, investigations, evidence preservation, case management, discipline, remediation, crisis response. |
| T1-DAT | Information, Assets, Data & AI | Personal data, privacy, cybersecurity, confidential information, intellectual property, records retention, data governance, incident response, social media, communications, responsible AI use, AI governance, model risk, bias, human oversight, prompt confidentiality, output validation, deepfakes, AI vendor diligence. |
| T1-ESG | ESG, Human Rights & Transparency | ESG, CSR, sustainability, environment, climate claims, human rights, labor rights, modern slavery, forced labor, child labor, supply-chain human-rights diligence, community impact, transparency reporting, transfer-of-value disclosure, anti-greenwashing. |

Tier 2 is the sector calibration layer. It changes examples, sources, thresholds, controls, escalation, and document modules; it does not replace Tier 1.

| Tag | Sector Pack | Calibration Topics |
| --- | --- | --- |
| T2-PHARMA | Pharma / Healthcare | HCP / HCO interactions, patient safety, pharmacovigilance, product quality, GMP, clinical trials, human-subject protection, scientific integrity, promotion, off-label boundaries, medical affairs, samples, patient support, market access, transparency reporting, animal welfare, bioethics. |
| T2-SPORT | Sports / Media | Match manipulation, betting, inside sporting information, anti-doping, safeguarding, harassment and abuse in sport, event security, ticketing, media rights, sponsorship integrity, host selection, federation / club governance, referee integrity, transfer integrity, political neutrality, human-rights impact. |
| T2-FINSVC | Financial Services | AML depth, market abuse, insider trading, customer protection, suitability, regulated products, fiduciary duties, fund governance, operational risk, financial crime monitoring, sanctions / KYC integration. |
| T2-AI | AI / Digital | Usage policies, AI safety, model governance, privacy, security, misuse prevention, cyber abuse, impersonation, high-stakes automated decisions, content provenance, transparency, red-teaming, data controls, platform abuse. |
| T2-IND | Industrial / Supply Chain | Export controls, procurement, supplier codes, product safety, EHS, responsible sourcing, site controls, environmental controls, customs, dual-use, technical services, project delivery, human-rights supply-chain diligence. |

## Enterprise Compliance View

Use this view when the user asks what compliance covers, how to build a policy library, how to benchmark a program, or how to design a code / procedure / module structure.

| Compliance family | Core topics to include | Sector-specific additions | Main product tag |
| --- | --- | --- | --- |
| Governance and ethics | Code of conduct, tone, board oversight, Compliance mandate, roles, accountability, ethical decisions. | Sports-governance independence; healthcare governance; AI oversight. | T1-GOV |
| Risk assessment | Legal, geographic, product, transaction, third-party and technology risks; periodic refresh. | Healthcare product / patient risks; sports integrity; AI model and misuse risks. | T1-GOV / T1-TRD / T1-DAT |
| ABAC | Bribery, kickbacks, public officials, facilitation payments, intermediaries, commissions. | HCP interactions; federation and sports-official dealings. | T1-INF |
| Gifts and hospitality | Gifts, meals, tickets, events, travel, accommodation, companions, thresholds and registers. | Sporting-event tickets; medical congresses; public-official hospitality. | T1-INF |
| Donations, grants and sponsorships | Recipient diligence, purpose, conflicts, approvals, use-of-funds monitoring. | Medical grants; sports sponsorship rights; community programs. | T1-INF / T1-ESG |
| Conflicts of interest | Personal, family, financial and outside interests; disclosure, recusal and registers. | Selection, hosting, refereeing, procurement, tendering or sporting decisions. | T1-INF / T1-GOV |
| Third parties | Need, risk classification, ownership, diligence, contracts, monitoring, renewal and exit. | Agents, distributors, event partners, suppliers and AI vendors. | T1-TRD |
| Sanctions and trade | Screening, ownership / control, export controls, dual use, end users, diversion, licensing and blocked payments. | Industrial technology; cross-border sporting and digital services. | T1-TRD |
| AML and financial crime | KYC, beneficial ownership, source of funds, PEPs, suspicious transactions and payment routes. | High-value sponsorship, media-rights and agent payments. | T1-FIN / T1-TRD |
| Fraud and assets | Procurement, expenses, payroll, cyber fraud, theft, diversion and false documents. | Ticketing fraud; product diversion; grant misuse. | T1-FIN |
| Accounting and controls | Accurate books and records, accounting standards, revenue, expenses, approvals, segregation of duties and audit. | Sponsorship valuation; healthcare transfers of value. | T1-FIN |
| Competition | Price fixing, bid rigging, market sharing, information exchange and trade associations. | Media-rights tenders; sports commercial rights. | T1-FIN |
| Privacy and cybersecurity | Data minimization, retention, transfers, employee data, vendor security, incidents and breach response. | Patient data; athlete data; AI training and user data. | T1-DAT |
| AI and digital responsibility | Approved use, human oversight, bias, accuracy, training data, model safety, misuse, monitoring and incidents. | Essential for AI providers; relevant to all companies using AI. | T1-DAT / T2-AI |
| Speak-up and whistleblowing | Multiple channels, anonymity, confidentiality, non-retaliation, statutory clocks and reporter feedback. | Independent reporting routes for senior or governing-body allegations. | T1-PPL |
| Investigations | Intake, triage, independence, preservation, interviews, privacy, findings, discipline and remediation. | Competition manipulation, doping or safeguarding investigations. | T1-PPL |
| Workplace and human rights | Discrimination, harassment, safety, forced labor, child labor, modern slavery and accessibility. | Athlete and child safeguarding; supply-chain labor risks. | T1-PPL / T1-ESG |
| Information and IP | Confidential information, trade secrets, insider information, social media, communications and records. | Scientific information; software / model IP; sporting inside information. | T1-DAT / T1-FIN |
| Product and customer conduct | Quality, safety, marketing claims, fair dealing, complaints and responsible sales. | Pharmacovigilance, clinical trials and promotion; AI acceptable use. | T1-GOV plus Tier 2 |
| Environment and sustainability | Environmental law, waste, emissions, climate claims, supplier standards and reporting. | Manufacturing footprint; major-event sustainability. | T1-ESG |
| Training and communication | Role-based training, manager communication, guidance and attestations. | Targeted training for HCPs, officials, agents, developers or event staff. | Element 4 overlay |
| Monitoring and assurance | Control testing, audits, analytics, dashboards, third-party monitoring and program reviews. | Match-integrity monitoring; pharmacovigilance; model monitoring. | Element 6 overlay |
| Response and remediation | Discipline, root cause, corrective actions, lessons learned and board reporting. | Product recalls, sporting sanctions or AI-service restrictions. | Element 7 overlay |

## Document Architecture

ACI-OS should prefer Option C for multinational or regulated companies: a short global Code, detailed risk policies, and sector modules.

| Layer | Purpose | Typical document |
| --- | --- | --- |
| 1 | Values and universal behavior. | Code of Conduct. |
| 2 | Main risk rules. | ABAC, conflicts, sanctions, privacy, competition and speak-up policies. |
| 3 | Operational instructions. | Procedures, approval matrices and workflows. |
| 4 | Sector requirements. | Healthcare, sports, industrial, financial-services or AI modules. |
| 5 | Evidence. | Registers, approvals, diligence files, investigation records and monitoring reports. |
| 6 | Assurance. | Testing, audits, dashboards and effectiveness reviews. |

| Option | Use case | ACI-OS position |
| --- | --- | --- |
| A - one very broad code | Easy to communicate, but usually too general for operational decisions. | Not enough for serious program operation. |
| B - short code plus policy library | Best standard model for many organizations. | Good baseline. |
| C - code, policy library and sector modules | Best for multinational or highly regulated organizations. | Recommended default for ACI-OS design. |

## Two Layers Inside Every Topic

Every taxonomy topic has two layers:

| Layer | Meaning | Product implication |
| --- | --- | --- |
| Substantive risk topic | What can go wrong: bribery, fraud, retaliation, sanctions breach, data misuse, collusion, unsafe product, greenwashing. | Identify the risk family and facts needed. |
| Program mechanics | How the company prevents, detects, responds, evidences, monitors, and improves. | Identify owner, approval, control, evidence, escalation, monitoring, remediation, and review cycle. |

This prevents a common design error: confusing a list of misconduct topics with an effective compliance program.

## Program Infrastructure Overlay

These program mechanics apply across all enterprise compliance families:

- Compliance risk assessment and regulatory inventory.
- Policy framework, procedures, guidance, registers, and controls.
- Advice, approval workflows, delegated authority, and documented decisions.
- Training, communications, manager cascade, and attestations.
- Speak-up channels, non-retaliation, investigations, and case management.
- Monitoring, testing, internal audit, analytics, metrics, and dashboards.
- Issue management, root cause, corrective action, remediation, and closure testing.
- Incentives, discipline, accountability, and consequence management.
- Documentation, evidence, review cycles, and version control.
- Compliance technology, system fields, approval paths, hard stops, alerts, and exception reporting.

## Product Behavior Rules

1. Start from the user's facts and pressure pattern, not from a favorite topic.
2. Select response mode before expert route.
3. Use the product routing view to identify the Tier 1 compliance family.
4. Use the enterprise compliance view when the user asks for coverage, policy design, document architecture, program maps, or "what should compliance include?"
5. Use Tier 2 only when the industry context changes examples, sources, thresholds, controls, or escalation.
6. Keep sector packs as calibration layers unless journal data and gate discipline justify a new specialist route.
7. Do not copy external codes into ACI-OS. Use them to benchmark coverage, sharpen examples, and verify source-backed claims.
8. Treat AI as an emerging universal compliance topic in Tier 1 and as a sector pack in Tier 2 when the user is building or governing AI systems.
9. For documents, clauses, policies, procedures, and checklists, separate the substantive risk topic from program mechanics: owner, approver, evidence, monitoring, escalation, and review.
10. For user-facing program answers, use the enterprise compliance family names first; keep T1/T2 tags mostly for internal routing, journal tags, or concise source discipline.

## Decision Journal Rule

Every non-trivial Stage 4 journal entry should include:

- Tier 1 tag: one primary family, with secondary tags if useful.
- Tier 2 tag: only if a sector pack materially shaped the answer.
- Enterprise family: optional, where useful for coverage analysis or document design.
- Program element tag: the 7-element backbone mapping.
- Follow-up signal: article, test case, methodology fix, route candidate, or none.

This creates the compliance coverage dashboard and keeps future route / agent selection evidence-based.

## Agent Selection Rule

Agent #2 is not selected because a topic is important in theory.

Agent #2 is selected only when Stage 4 journal frequency, failure patterns, user need, source readiness, and gate discipline show that a new specialist route is justified.

## Change Log

- v0.3 - Added enterprise compliance view as the user-facing taxonomy, added document architecture and Option A/B/C guidance, preserved product routing view and Tier 2 sector calibration, and clarified that enterprise family names should be used for user-facing program answers.
- v0.2 - Added HC6 ACT / PARK / DISCARD verdict, public-code benchmark caution, source-intake rule, risk-topic versus program-mechanics split, 18-family granular coverage index, program infrastructure overlay, and stronger AI / sector calibration boundaries. Preserved the 7-family Tier 1 architecture and Tier 2 sector layer.
- v0.1 - Created two-tier compliance taxonomy as active ACI-OS app DNA; added Tier 1 universal core, Tier 2 sector calibration packs, journal tagging rule, and Agent #2 selection guardrail.
