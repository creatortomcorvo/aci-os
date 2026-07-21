# ACI-OS Intelligence Radar Report v0.1 - 2026-07-21

Response timestamp: 2026-07-21 07:56:22 +02:00 Europe/Zurich

**Status:** internal only. Decision support, not legal advice; this report does not clear any issue. Coverage window: 2026-07-14 through 2026-07-21 (Europe/Zurich).

>_< **Control-file conflict:** `AGENTS.md` says Stage 0b closed on 2026-07-10, while the radar spec and source-feed file still say Stage 0b blocks external use. `AGENTS.md` wins. This report nevertheless remains internal-only under the automation brief; Stages 3 and 5 remain not entered and external testing/pilot use requires separate decisions.

## 1. Top 5 Signals

1. **US — FCPA / third parties:** DOJ’s 17 July Scoular DPA ties a bribery scheme to customs brokers and records concrete remediation across governance, risk assessment, third-party controls, transaction controls, monitoring, software, and training. **Why it matters:** it is a current, unusually complete “what changed in practice” enforcement record. **Tags:** E1–E4, E6, E7; Third-party/M&A; Incentives/discipline. **Confidence:** high.
2. **EU — AI transparency:** on 20 July the Commission published Article 50 transparency guidance ahead of obligations applying from 2 August 2026. **Why it matters:** disclosure that the user is interacting with AI is now an implementation control, not merely a UX preference. **Tags:** E2, E3, E4, E6; AI/emerging-tech; Human escalation. **Confidence:** high.
3. **US / global supply chain — fraud:** DOJ reported more than USD 1bn in Trade Fraud Task Force recoveries, penalties, forfeitures and publicly charged losses, with focus on transshipment, mislabelling, false declarations, tariff evasion and forced-labour-linked imports. **Why it matters:** customs data and broker controls are becoming fraud evidence. **Tags:** E2, E3, E6, E7; Third-party/M&A. **Confidence:** high.
4. **US / Iran / UAE / Russia — sanctions:** OFAC’s 14–15 July actions combined designations, secondary-sanctions exposure and a time-limited wind-down/safety licence. **Why it matters:** list screening, location, ownership/control, programme nexus and live licence status must be checked together. **Tags:** E2, E3, E6, E7; sanctions; Third-party/M&A. **Confidence:** high.
5. **Canada — antitrust:** the Competition Bureau opened consultation on proposed Cartel Enforcement Guidelines covering price fixing, bid rigging, market allocation, supply restrictions, wage fixing and no-poach agreements. **Why it matters:** collaboration and labour-market controls need an explicit competition-risk route. **Tags:** E2, E3, E4, E6; Advice channel. **Confidence:** high.

## 2. Law and Enforcement Radar

| Date | Jurisdiction / source type | Development | ACI-OS relevance | Mapping | Confidence |
| --- | --- | --- | --- | --- | --- |
| 2026-07-17 | US / official prosecutor | [DOJ Scoular FCPA resolution](https://www.justice.gov/opa/pr/agricultural-company-pay-over-10m-resolve-foreign-bribery-case): three-year DPA; USD 9.77m penalty plus USD 0.41m forfeiture; no voluntary-disclosure credit; 25% reduction from the bottom of the Guidelines range after cooperation and remediation. | Current enforcement evidence that broker risk, unusual border fees, business engagement, senior oversight, financial controls and third-party monitoring operate as one control system. | E1–E4, E6, E7; Third-party/M&A | High |
| 2026-07-14 | US / official prosecutor | [DOJ Trade Fraud Task Force milestone](https://www.justice.gov/opa/pr/trade-fraud-task-force-surpasses-1-billion-recoveries-and-charged-losses-less-one-year): task force says its mandate reaches importers, brokers, distributors, end-users and other knowing supply-chain actors. | Treat customs classification, origin, transshipment and forced-labour representations as compliance data, not logistics-only data. | E2, E3, E6, E7; Third-party/M&A | High |
| 2026-07-14 | US / official sanctions regulator | [OFAC Iran action](https://ofac.treasury.gov/recent-actions/20260714): new designations across shipping networks, including UAE- and Russia-linked identifiers, plus Iran General License Z for specified wind-down, safety/environmental and cargo-offloading activity. | A designation event can create both prohibitions and narrow permissions; current primary text and transaction facts remain essential. | E2, E3, E6, E7; sanctions; Third-party/M&A | High |
| 2026-07-15 | US / official sanctions regulator | [OFAC non-proliferation and counter-terrorism designations](https://ofac.treasury.gov/recent-actions/20260715): additions include Russia-linked individuals/entities and secondary-sanctions indicators. | Screening must capture aliases, linked entities and secondary-sanctions flags, not only exact-name matches. | E2, E3, E6, E7; sanctions | High |
| 2026-07-15 | Canada / official regulator | [Proposed Cartel Enforcement Guidelines](https://www.canada.ca/en/competition-bureau/news/2026/07/competition-bureau-seeks-feedback-on-new-enforcement-guidelines-about-illegal-business-agreements.html), consultation to 2026-09-13. | The proposal is current enforcement guidance, not yet final. Joint ventures, competitor contacts and employment restrictions are practical control points. | E2, E3, E4, E6; Advice channel | High |
| 2026-07-15 | Canada / official FIU | [FINTRAC FATF-jurisdiction advisory](https://fintrac-canafe.canada.ca/notices-avis/avs/2026-07-15-eng) reiterates risk treatment for DPRK, Iran and Myanmar and specifies sanctions-evasion policies, due diligence, beneficial-ownership/control and monitoring expectations for covered entities. | Useful sanctions-program signal, but institution-specific legal applicability must be checked before use. | E2, E3, E6, E7; sanctions; Data/privacy boundary | High |
| 2026-07-20 | EU / official regulator | [Commission AI transparency guidance](https://digital-strategy.ec.europa.eu/en/news/commission-publishes-guidelines-transparency-obligations-providers-and-deployers-certain-ai-systems) addresses direct AI interaction and labelling/marking of generated or manipulated content before Article 50 obligations apply on 2026-08-02. | ACI-OS should distinguish legal applicability from a prudent internal disclosure design rule. | E2, E3, E4, E6; AI/emerging-tech | High |
| 2026-07-17 | EU / official regulator signal | [EDPB called for a legal basis for cross-regulatory information sharing](https://www.edpb.europa.eu/news_en). | Information-sharing between regulators is not a free-standing permission to share confidential or personal data; authority, purpose and safeguards remain separate checks. | E1, E3, E6; Data/privacy boundary | Medium-high; item verified on official news index, item-page fetch was incomplete |

>_< **No material current-week official signal located** in the checked UK Bribery Act/SFO, US Sentencing Guidelines, OECD anti-bribery, Swiss SECO/FDPIC/COMCO, Japan JFTC/PPC/METI, China SAMR/CAC, Russia, KSA or UAE domestic feeds. The OFAC items nevertheless contain UAE-, Russia- and China/Hong Kong-linked facts. Silence is not evidence of no change; local-law application still requires a fresh official-source check.

## 3. Compliance-Program Radar

| Signal | Practical lesson | Mapping / tags | Verdict |
| --- | --- | --- | --- |
| Scoular remediation package | The useful unit is the linked system: risk assessment → senior oversight → broker exit → third-party screening/approvals/contracts → transaction controls → monitoring tools → targeted training → periodic reporting. A policy-only response would miss the enforcement lesson. | E1–E4, E6, E7; Third-party/M&A | ACT as calibration evidence; no backbone change |
| Trade fraud enforcement | Supply-chain representations need ownership, evidence, exception handling and monitoring. Compliance should know who can challenge origin/classification data and how unresolved exceptions stop or escalate a transaction. | E1–E3, E6, E7; Third-party/M&A; Human escalation | PARK for future non-sanctions domain frequency evidence |
| Canada cartel proposal | “Competitor interaction” controls should include no-poach/wage-fixing and collaboration/joint-venture scenarios, with advice-channel routing before action. | E2–E4, E6; Advice channel | PARK; Agent #2 not selected |
| FINTRAC advisory | Sanctions-evasion controls link customer/transaction risk, source of funds, purpose, beneficial ownership/control, records and ongoing monitoring. | E2, E3, E6, E7; sanctions; Data/privacy boundary | ACT as sanctions calibration evidence |
| EDPB cross-regulator statement | The control question is not only “would sharing help?” but “what is the legal basis, purpose, confidentiality status, minimisation rule and audit trail?” | E1, E3, E6; Data/privacy boundary | ACT as a Decision Front Door question candidate; token-gated below |

## 4. Human-Interaction / Product Radar

1. **AI disclosure at the interaction point — official, high confidence.** The Commission’s 20 July guidance supports an explicit front-door disclosure pattern for direct AI interaction. It does not by itself determine whether every ACI-OS prototype use is legally in scope. **Implication:** preserve “decision support, not legal advice; human remains responsible” near the interaction surface. **Tags:** E3, E4; AI/emerging-tech; Human escalation.
2. **Meaningful override requires usable information — inference from official guidance, medium-high confidence.** Disclosure alone is not an override mechanism. The user needs the material facts, uncertainty, source date and next human step before they can challenge the system. **Implication:** short-first output must preserve expandable evidence and a visible escalation path. **Tags:** E4, E6; Human escalation; Product candidate.
3. **Hesitation is observable but not yet a product rule — peer-reviewed research signal, medium confidence.** A [19 July eye-tracking study](https://www.mdpi.com/2076-3417/16/14/7218) associated hesitation in multi-option product selection with longer decision time and more gaze movement. **Implication:** a long undifferentiated option list may increase cognitive effort; ACI-OS already uses fast direction plus layered depth. One study in product selection is insufficient to alter methodology. **Tags:** E4, E6; Product candidate.
4. >_< **No strong new current-week evidence located** that justifies changing ACI-OS mobile, attention-span, short-first, escalation or human-override rules. Keep the existing Core Spec behavior; do not manufacture novelty from general AI commentary.

## 5. ACI-OS Implications — ACT / PARK / DISCARD

| Verdict | Item | Exact artifact / workflow | Mapping / cross-cutting tags |
| --- | --- | --- | --- |
| ACT | Use the Scoular resolution as external calibration evidence for connected third-party and transaction controls; do not change the seven-element model. | Radar source register proposal; future evaluations where third-party facts arise | E1–E4, E6, E7; Third-party/M&A |
| ACT | Preserve “current licence + current list + current transaction facts” in the sanctions workflow. | Sanctions Agent #1 evaluation workflow | E2, E3, E6, E7; sanctions; Human escalation |
| ACT | Correct stale Stage 0b wording in the two radar-control files so they conform to controlling `AGENTS.md`. | `07_Research/ACI_OS_Intelligence_Radar_Report_Spec_v0.2.md`; `07_Research/Intelligence_Radar_Source_Feeds_v0.1.md` | E1; governance/document control |
| PARK | Add an AI-interaction disclosure line to product behavior only after exact applicability and placement are decided. | `10_Product/Consigliere_Core_Spec_v0.5.1.md` | E3, E4; AI/emerging-tech; Product candidate |
| PARK | Add cross-regulatory information-sharing triage to the Decision Front Door after one synthetic test confirms it adds value. | Decision Front Door question bank / test workflow | E1, E3, E6; Data/privacy boundary; Test-case candidate |
| PARK | Antitrust and trade-fraud expert-route ideas until Stage 4 decision-journal frequency supports Agent #2. | Stage 4 decision journal; `99_Parked/INBOX.md` if approved | E2, E3, E6, E7; Advice channel |
| DISCARD | Treat a single eye-tracking study as proof that users need fewer choices in every high-stakes setting. | No methodology change | E4; Product candidate |

## 6. Documentation, Knowledge, Docs and Links Recommendations

| Verdict | Exact target | Recommendation and reason | Risk if implemented | Risk if not implemented | Size | Recommended decision |
| --- | --- | --- | --- | --- | --- | --- |
| ACT | `07_Research/Source_Register_v0.1.md` | Add verified official entries for DOJ Scoular, DOJ Trade Fraud Task Force, EU AI Article 50 transparency guidance, Canada cartel-guideline consultation and FINTRAC advisory. These are reusable official sources with distinct program value. | Register growth and link maintenance. | Repeat discovery; weak provenance in later responses. | Small | YES-DOCS-1 |
| ACT | `07_Research/ACI_OS_Intelligence_Radar_Report_Spec_v0.2.md`; `07_Research/Intelligence_Radar_Source_Feeds_v0.1.md` | Replace the obsolete “Stage 0b blocks” statement with current internal-only / separate-gate wording consistent with `AGENTS.md`. | A wording edit could accidentally loosen external-use controls if drafted broadly. | Controlling-file conflict persists and future agents may report the wrong phase. | Small | YES-DOCS-2 |
| NO CHANGE | Knowledge bundle and Foundation Map | Do not absorb weekly enforcement language or alter the backbone. No failed crosswalk exists. | None. | None material; evidence remains available in this report. | Small | No token needed |

## 7. Methodology and Response-Behavior Recommendations

| Verdict | Exact target / workflow | Recommendation and reason | Risk if implemented | Risk if not implemented | Size | Recommended decision |
| --- | --- | --- | --- | --- | --- | --- |
| PARK | Decision Front Door synthetic evaluation workflow; then the current question-bank artifact only if the test passes | Test one synthetic “regulator requests cross-domain information” scenario requiring authority, purpose, confidentiality, minimisation and escalation checks. EDPB’s signal is useful, but a test should precede prompt growth. | Adds a scenario that may be too specialist or duplicate existing privacy routing. | A recurring data-sharing risk may remain implicit. | Small | YES-METHOD-1 to create the synthetic evaluation candidate only |
| PARK | `10_Product/Consigliere_Core_Spec_v0.5.1.md` | Consider an explicit AI-interaction disclosure pattern after legal applicability and product placement are separately resolved. | Premature legalisation of a product note; text could imply a conclusion on scope. | Disclosure design may lag the 2 August EU implementation environment. | Medium | NO CHANGE this week; no implementation token |
| NO CHANGE | Core Spec short-first / layered-depth behavior | The current-week evidence supports, but does not require changing, the existing short-first and human-escalation architecture. | Unnecessary churn if changed. | No material risk identified. | Small | No change |

## 8. Decision Cards for Tom

### Decision card DOCS-1

**Recommendation:** add the five verified official sources identified in section 6 to the source register.

**Target file:** `07_Research/Source_Register_v0.1.md`

**Recommended decision:** YES

**Why:** makes high-value enforcement and implementation sources reusable without absorbing their language into methodology.

**Risk:** small maintenance burden and possible register noise.

**Reply token:** `YES-DOCS-1` to implement exactly this source-register addition / `NO-DOCS-1` to leave the register unchanged.

### Decision card DOCS-2

**Recommendation:** align the two radar-control files with the controlling Stage 0b status while retaining internal-only and separate-stage gates.

**Target files:** `07_Research/ACI_OS_Intelligence_Radar_Report_Spec_v0.2.md`; `07_Research/Intelligence_Radar_Source_Feeds_v0.1.md`

**Recommended decision:** YES

**Why:** removes a direct conflict with `AGENTS.md` without changing the automation’s internal-only scope.

**Risk:** careless wording could blur the separate decisions required for testers, pilot or external distribution; implementation must be narrow.

**Reply token:** `YES-DOCS-2` to implement only the narrow status correction / `NO-DOCS-2` to leave the conflict flagged.

### Decision card METHOD-1

**Recommendation:** create one synthetic evaluation candidate for cross-regulatory information sharing; do not change the question bank yet.

**Target workflow:** Decision Front Door synthetic evaluation backlog.

**Recommended decision:** YES

**Why:** test-first handling respects the current pipeline and checks whether authority/purpose/confidentiality/minimisation/escalation prompts add value.

**Risk:** small evaluation-scope expansion; could duplicate an existing privacy scenario.

**Reply token:** `YES-METHOD-1` to add only the synthetic candidate / `NO-METHOD-1` to leave it parked.

## 9. Concise Source Register

### Official / primary

- US DOJ, Scoular FCPA resolution, 2026-07-17: https://www.justice.gov/opa/pr/agricultural-company-pay-over-10m-resolve-foreign-bribery-case
- US DOJ, Trade Fraud Task Force milestone, 2026-07-14: https://www.justice.gov/opa/pr/trade-fraud-task-force-surpasses-1-billion-recoveries-and-charged-losses-less-one-year
- OFAC, Iran designations and General License Z, 2026-07-14: https://ofac.treasury.gov/recent-actions/20260714
- OFAC, non-proliferation and counter-terrorism designations, 2026-07-15: https://ofac.treasury.gov/recent-actions/20260715
- European Commission, AI Act Article 50 transparency guidance, 2026-07-20: https://digital-strategy.ec.europa.eu/en/news/commission-publishes-guidelines-transparency-obligations-providers-and-deployers-certain-ai-systems
- EDPB official news index, cross-regulatory information-sharing item, 2026-07-17: https://www.edpb.europa.eu/news_en
- Competition Bureau Canada, proposed Cartel Enforcement Guidelines, 2026-07-15: https://www.canada.ca/en/competition-bureau/news/2026/07/competition-bureau-seeks-feedback-on-new-enforcement-guidelines-about-illegal-business-agreements.html
- FINTRAC, FATF-jurisdiction advisory, 2026-07-15: https://fintrac-canafe.canada.ca/notices-avis/avs/2026-07-15-eng

### Research / secondary

- *Visual Markers of Hesitation in Multi-Alternative Product Selection*, 2026-07-19: https://www.mdpi.com/2076-3417/16/14/7218

### Commentary / weak signal

- No commentary source was needed for a substantive conclusion in this report.

## 10. Calibration Questions

1. Should the weekly jurisdiction table always show “no material official signal located” by region, or only when a usually active feed is silent?
2. Should `YES-METHOD-1` candidates live in a dedicated evaluation-backlog file, or in the nearest existing test artifact?
3. Should the radar treat AI Act transparency as a standing product watch through 2 August, even when there is no new weekly release?

## Change Log

v0.1 - first scheduled seven-day report for 2026-07-14 through 2026-07-21; preserved protected-file gates and flagged the Stage 0b control-file conflict.
