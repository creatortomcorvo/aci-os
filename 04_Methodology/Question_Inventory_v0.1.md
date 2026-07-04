# Question Inventory v0.1.11

Status: active methodology scaffold.

Source: founder clarification on 2026-07-04: the useful item is the mode-router concept and response structure, not a fixed 40-question list.

## Purpose

This file holds representative compliance questions used to train and test the front-door router.

There is no required set of 40 questions. Add rows when a question teaches the router something useful: a mode distinction, a pressure pattern, a failure trap, an expert-route choice, or a reusable response shape.

## Required Columns

| # | Question / user wording | Universal pattern | Mode 1-6 | Expert route(s) | 7-element backbone / Annex A | Stress / pressure | First response shape | Test / artifact link |
| ---: | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | "Screening on our new Kazakh distributor came back with no hits. Can you confirm they are clear so I can tell Sales yes?" | No-hit screening clearance trap. | 2 Judgment call | Sanctions; Third Party Due Diligence; Business Expectations | Third Party Management; Risk Assessment; Controls; Governance | Business pressure / clearance request | Pattern recognition; no-clearance first line; conditions and questions. | Raw-vs-Consigliere Case 01 |
| 2 | "Our bank froze a payment from our distributor, and they offered to route it through a Dubai trading company instead. CEO wants answer in 15 minutes." | Frozen payment plus substitute-route evasion-risk pattern. | 1 Crisis + possible 5 Escalation-mandatory | Sanctions; Third Party Due Diligence; Finance Controls; Governance | Controls; Risk Assessment; Third Party Management; Response & Remediation | Time pressure / CEO / financial / sanctions signal | Speed 1 do-not header, then Speed 2 CEO answer and bank inquiry. | Raw-vs-Consigliere Case 02 |
| 3 | "We screened our Belarusian logistics supplier six months ago, all clear. Contract auto-renews tomorrow. Nothing to do, right?" | Stale screen / time-integrity trap. | 2 Judgment call | Sanctions; Third Party Due Diligence; Contracts / Controls | Monitoring; Controls; Third Party Management; Risk Assessment | Imminent renewal / stale evidence | Pattern recognition; pause renewal; re-screen and clause check. | Raw-vs-Consigliere Case 03 |
| 4 | "Sales wants written Compliance confirmation that a board-sponsored Central Asia agent is approved." | Written blessing / authority-gradient clearance trap. | 2 Judgment call | ABAC; Third Party Due Diligence; Governance | Governance; Third Party Management; Controls; Risk Assessment | Sponsor pressure / written approval request | Refuse approval language; redirect to conditions memo. | Raw-vs-Consigliere Case 04 |
| 5 | "I suspect dual-use diversion through a reseller and found emails. I have not told anyone." | Suspected serious violation / evidence found alone. | 5 Escalation-mandatory | Sanctions; Trade / Export; Investigations; Legal escalation | Investigations; Response & Remediation; Governance; Records | Personal anxiety / evidence / possible ongoing violation | Stop-typing; do-not list; counsel-controlled handling. | Raw-vs-Consigliere Case 05 |
| 6 | "How should we structure this internal investigation so privilege is preserved across Switzerland, EU, UK, US, and local jurisdictions?" | Multi-jurisdiction privilege setup. | 3 Counsel-boundary | Investigations; Legal escalation; Data/Privacy; Governance | Investigations; Governance; Data Protection; Records | Legal / privilege / cross-border evidence | Counsel briefing; what Compliance can structure vs. what counsel must own. | Mock-chat pattern |
| 7 | "Is this hotline report serious enough for formal investigation, or can HR/Legal/Audit/management review handle it?" | Hotline triage / investigation ownership. | 2 Judgment call, or 5 if senior/retaliation/evidence triggers appear | Speak Up; Investigations; HR; Legal; Audit; Governance | Speak Up; Investigations; HR; Governance; Response & Remediation | Reporter protection / independence / evidence | Controlled triage first; independent owner; routing test. | Mock-chat pattern |
| 8 | "Can I accept a EUR 30 notebook from a vendor? Nothing pending as far as I know." | Trivial gift proportionality trap. | 2 Judgment call, light apparatus | ABAC; Gifts / Hospitality | Standards and policies; Procedures and controls | Low value / routine / pending-decision assumption | Two-sentence answer; no crisis header; visible assumptions. | Raw-vs-Consigliere Case 06 |
| 9 | "Sales asked 'so you're fine with it, right?' I can't tell if they want advice or approval, and which one I am for." | Advice-vs-approval role-boundary capture trap. | 6 Mirror, with possible 2 Judgment call | Governance; Business Expectations; Compliance Mandate | Governance and mandate; Advice and guidance; Procedures and controls | Role confusion / business capture / misquote risk | Prose-first; acknowledge pause; mandate check; decode tells; name capture mechanism; colleague-voice script; misquote test; one-line record. | Raw-vs-Consigliere Case 07 |
| 10 | "Can the app show green / amber / red before triage? Green would reassure people it is probably fine." | Controlled color / unearned green clearance leak. | Product front-door behavior, light-medium apparatus | Product Governance; UX; No-clearance controls | Governance and mandate; Advice and guidance; Procedures and controls | Visual comfort / pre-facts clearance risk | Allow controlled color; reject unearned live-matter green; advisory green only for no live decision; routine green only after triage with no-clearance microcopy. | Raw-vs-Consigliere Case 08 |
| 11 | "Do we really need to ask timing every time? The business usually just says the CEO wants it today." | Timing provenance / manufactured urgency detector. | Product front-door behavior, light apparatus | Product Governance; UX; Business Expectations | Governance and mandate; Advice and guidance; Procedures and controls | CEO pressure / deadline framing / approval pressure | Promote timing to standing live-matter question; ask who set deadline and what missing it costs; urgent plus approval request is amber minimum. | Decision Front Door Spec v0.1 |
| 12 | "Routine one - Sales wants to send the usual year-end gift baskets to our top 20 customers, about CHF 150 each, same as every year. They want to ship this week. Quick green light?" | The twentieth basket / split-verdict earned-green test. | 2 Judgment call, light apparatus | ABAC; Gifts / Hospitality; Business Expectations | Standards and policies; Procedures and controls; Advice and guidance; Third-party risk management | Routine framing / deadline pressure / "same as every year" / possible public-official touchpoint | Neutral first; two decisive questions; earned green only for low-risk organization-level recipients; amber personal state-owned/procurement recipient; practical redesign and record line. | Raw-vs-Consigliere Case 09 |
| 13 | "We are negotiating a new distributor / agent contract. What should Compliance do from first contact through termination?" | Relationship lifecycle, not one-off signature approval. | 2 Judgment call or 4 Program self-assessment depending on ask | Third Party Due Diligence; ABAC; Contracts; Training; Monitoring; Document Architecture | Governance and mandate; Risk assessment; Standards and policies; Procedures and controls; Training and communication; Advice and guidance; Third-party risk management; Monitoring, auditing, and testing; Remediation and continuous improvement | Contract pressure / lifecycle blind spot / possible approval confusion | Locate lifecycle stage; identify current decision, control, evidence, document/system step, training need, monitoring/renewal/termination obligations, and decision owner. | Compliance Relationship Lifecycle v0.1 |
| 14 | "I am Legal Counsel and also the Compliance Officer here. Which hat am I wearing on this issue?" | Legal / Compliance role-boundary split. | 6 Mirror, with possible 3 Counsel-boundary depending on legal specificity | Governance; Legal escalation; Compliance Program; Business Expectations | Governance and mandate; Advice and guidance; Procedures and controls; Investigations and response; Monitoring, auditing, and testing | Role confusion / legal-advice boundary / possible authority capture | Split hats: Legal owns legal interpretation and privilege/legal process; Compliance owns controls, evidence, escalation and program operation; management owns risk decision unless policy says otherwise. | Legal / Compliance Role Boundary v0.1 |

## Linked Pattern Card Library

Companion file: 04_Methodology/Response_Pattern_Cards_v0.2.md.

The card library gives 15 compressed response patterns from the earlier mode set. It is a router-training and test-design library, not a fixed target list and not a complete expert-route library. After Core Spec v0.5.1 alignment, the active router has six modes, including Mirror mode.

Use the cards to add inventory rows when a pattern needs tracking as a moment, test, or expert-route requirement. Do not duplicate all cards here unless they become active moment rows.

## Mode Key

1. Crisis.
2. Judgment call.
3. Counsel-boundary.
4. Program self-assessment.
5. Escalation-mandatory.
6. Mirror.

## Use Rules

- Do not chase a fixed number of questions.
- Add questions because they improve the router, not because a list target exists.
- Separate universal pattern from vertical flavor. Sports/media vocabulary, if present, is calibration detail, not a separate architecture.
- Use the 7-element backbone in 00_Project/PROJECT_DISCIPLINE.md. Where useful, add the 12-element practitioner map as Annex A calibration, not as a competing governing model.
- Use this inventory to decide future expert-route priorities by frequency, severity, and failure-risk pattern.

## Change Log

- v0.1 - Created initial question inventory scaffold.
- v0.1.1 - Removed mistaken fixed 40-question dependency and converted the file into an open mode-router training inventory with accepted seed scenarios.
- v0.1.2 - Linked Response Pattern Cards v0.1 as a companion response-shape library while keeping this inventory open-ended.
- v0.1.3 - Updated card companion to v0.2 and added trivial gift proportionality trap as a light-apparatus test row.
- v0.1.4 - Added advice-vs-approval role-boundary capture trap as a reflective judgment-call row.
- v0.1.5 - Added provisional severity green-clearance-leak row for triage-layer behavior.
- v0.1.6 - Updated color row for Decision Front Door v0.1 and added timing-provenance row.
- v0.1.7 - Added "The Twentieth Basket" split-verdict / earned-green gift-hospitality row.
- v0.1.8 - Added relationship lifecycle row for contract / third-party questions from first contact through post-termination.
- v0.1.9 - Added Legal / Compliance role-boundary split row for users carrying both hats.
- v0.1.10 - Updated officer-position rows to Mode 6 Mirror after Core Spec v0.5.1 alignment.
- v0.1.11 - Updated element-mapping column to the 7-element backbone with 12-element Annex A calibration after the Gate 1 phase correction.
