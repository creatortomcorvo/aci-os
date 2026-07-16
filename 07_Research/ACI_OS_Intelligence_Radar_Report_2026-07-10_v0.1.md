# ACI-OS Intelligence Radar Report v0.1 - 2026-07-10

Status: internal prototype report. Stage 0b blocks publication, external distribution, pilot use, testers, or commercial use.

Coverage note: this first run tests the report design as of 2026-07-10. It uses prior-seven-day official signals where available and includes a small baseline layer so the Monday cadence has something to compare against. Decision support only; not legal advice and no clearance.

## 1. Top Signals

1. US / sanctions: OFAC issued Russia-related and Iran-related general license updates on 2026-07-08 and 2026-07-07. Why it matters: sanctions risk changes through licenses and FAQs, not only new designations. ACI-OS tag: E2, E3, E6; sanctions; third-party lens.
2. EU / data privacy and AI: EDPB listed a 2026-07-08 item on anonymisation and web scraping for generative AI. Why it matters: AI/data use is becoming a compliance-program design question, not a purely technical one. ACI-OS tag: E2, E3, E6; AI/emerging-tech; data/privacy boundary.
3. EU / AI Act: the Commission GPAI Code of Practice page frames transparency, copyright, and safety/security as practical compliance routes for general-purpose AI model providers. Why it matters: ACI-OS should treat AI controls as architecture plus evidence, not policy language only. ACI-OS tag: E2, E3, E6; AI/emerging-tech.
4. UK / fraud: ECCTA failure-to-prevent-fraud guidance remains a standing anchor: large organisations can be liable where associated-person fraud benefits the organisation and reasonable prevention procedures are absent. Why it matters: failure-to-prevent logic now reaches beyond bribery. ACI-OS tag: E1, E2, E3, E7.
5. Human/product: short-form video and AI-process-compliance research both point in the same product direction: short-first answers help, but process discipline must be logged and testable. Why it matters: "short first, expand on request" should remain a design rule, but not at the cost of auditability. ACI-OS tag: E4, E6; product candidate; AI/emerging-tech.

## 2. Law And Enforcement Radar

- US / OFAC / Russia: OFAC issued Russia-related General License 13R and amended Russia-related FAQs 999 and 1118 on 2026-07-08. Source type: official regulator. Confidence: high. ACI-OS use: sanctions route should distinguish list screening, license availability, and counsel/legal interpretation.
- US / OFAC / Iran: OFAC revoked Iran-related General License X and issued General License X1 on 2026-07-07 for revocation and wind-down of a June 2026 authorization. Source type: official regulator. Confidence: high. ACI-OS use: any sanctions response involving apparent authorization must check current license status.
- US / OFAC / reporting: OFAC reminded U.S. persons holding blocked property as of 2026-06-30 to file the 2026 Annual Report of Blocked Property by 2026-09-30. Source type: official regulator. Confidence: high. ACI-OS use: add "ongoing reporting obligation" as a sanctions-control prompt, not only "blocked or not blocked."
- UK / ECCTA fraud: GOV.UK guidance states the failure-to-prevent-fraud offence came into effect on 2025-09-01 and applies to large incorporated bodies, subsidiaries, partnerships, large incorporated charities, and incorporated public bodies. Source type: official government guidance. Confidence: high. ACI-OS use: fraud prevention needs risk assessment, procedures, training, monitoring, and evidence.
- >_< US / FCPA current-week signal: no fresh official FCPA enforcement or guidance item was surfaced in this short scan. Do not infer enforcement direction from silence. Keep FCPA, FEPA, DOJ ECCP, and USSG as standing watchlist anchors.

## 3. Compliance-Program Radar

- DOJ ECCP baseline: the September 2024 ECCP remains directly relevant because it asks whether the program is well designed, applied in good faith, adequately resourced, and working in practice. It also asks about AI/new technology risk assessment, intended use controls, human decision-making baselines, accountability, and training. ACI-OS tag: E1, E2, E3, E4, E6.
- UK failure-to-prevent-fraud baseline: the design question is not "do we have a fraud policy?" but "can we evidence reasonable fraud prevention procedures against associated-person conduct?" ACI-OS tag: E2, E3, E6, E7.
- EDPB / AMLA: EDPB listed a 2026-07-01 item on joint guidelines for partnerships for information sharing. ACI-OS signal: AML/compliance data-sharing designs will need a privacy boundary and purpose-limitation check. ACI-OS tag: E3, E6; data/privacy boundary.
- >_< Research-only signal: "compliance moral hazard" research argues that poorly designed information-sharing mandates can backfire when incentives are misaligned. Treat as a product-design prompt, not authority. ACI-OS tag: E2, E6; product candidate.

## 4. Human-Interaction And Product Radar

- Short-form video and memory: a 2023 experimental paper found that the TikTok condition degraded prospective-memory task performance compared with Twitter, YouTube, or no activity. ACI-OS implication: do not bury action steps in long paragraphs; preserve a short first answer and explicit next action. Confidence: medium; small study, not a universal rule.
- Short-form communication can still be useful: a 2026 PaperTok study found AI-generated short-form research videos can help make research engaging and informative, while users needed finer control. ACI-OS implication: short outputs should be controllable, expandable, and traceable.
- AI whistleblowing: a 2026 paper on AI whistleblower-office design points to rewards, protections, anonymity, staffing, funding, and advice to potential whistleblowers. ACI-OS implication: speak-up support should separate channel choice, protection logic, and legal-counsel boundary.
- AI process compliance: a 2026 paper on the "Compliance Gap" argues that AI systems may verbally agree to process instructions while failing behaviorally, and that text-only observers may not detect it. ACI-OS implication: serious workflows need logs, evidence of steps taken, and testable process compliance, not just polished answers.
- >_< Discard simplistic claim: "TikTok means nobody reads anymore" is too crude for ACI-OS. Better principle: design for short-first cognition while preserving depth, evidence, and auditability on request.

## 5. ACI-OS Implications: ACT / PARK / DISCARD

| Verdict | Item | ACI-OS Artifact Or Workflow |
| --- | --- | --- |
| ACT | Keep this radar design: short-first, source-labelled, 7-element mapped, ACT/PARK/DISCARD before absorption. | `07_Research/ACI_OS_Intelligence_Radar_Report_Spec_v0.1.md` |
| ACT | For Monday runs, include OFAC Recent Actions, EDPB News, European Commission AI Office/GPAI, GOV.UK ECCTA fraud guidance, DOJ ECCP/FCPA pages as standing source feeds. | Recurring automation `aci-os-intelligence-radar` |
| PARK | Consider adding a sanctions test case for "license changed after prior advice / old screen says OK." | `06_Testing/Gate_2_Sanctions_Test_Library_v0.1.md`; `05_Experts/Sanctions_Expert_Route_v0.1.1.md` |
| PARK | Consider a future fraud/failure-to-prevent expert route, but only after decision-journal frequency data supports Agent #2. | `05_Experts/Expert_Map.md`; Stage 4 decision journal |
| PARK | Convert human-interaction signals into a short-first UX design note after two or three radar cycles confirm the pattern. | `04_Methodology/Decision_Front_Door_Spec_v0.1.md`; `04_Methodology/Triage_Layer_Spec_v0.1.md` |
| DISCARD | Treat press commentary, vendor pieces, or broad "attention span collapse" claims as authority. | Source discipline rule |

## 6. Source Register

Official:

- OFAC Recent Actions: https://ofac.treasury.gov/recent-actions
- OFAC Russia-related update, 2026-07-08: https://ofac.treasury.gov/recent-actions/20260708
- OFAC Iran-related update, 2026-07-07: https://ofac.treasury.gov/recent-actions/20260707
- OFAC Annual Report of Blocked Property reminder, 2026-07-01: https://ofac.treasury.gov/recent-actions/20260701_33
- EDPB News page, 2026-07-08 and 2026-07-01 items: https://www.edpb.europa.eu/news_en
- European Commission GPAI Code of Practice: https://digital-strategy.ec.europa.eu/en/policies/contents-code-gpai
- GOV.UK ECCTA failure-to-prevent-fraud guidance: https://www.gov.uk/government/publications/offence-of-failure-to-prevent-fraud-introduced-by-eccta
- DOJ Evaluation of Corporate Compliance Programs, updated September 2024: https://www.justice.gov/criminal/criminal-fraud/page/file/937501/dl
- DOJ FCPA Resource Guide page: https://www.justice.gov/criminal/criminal-fraud/fcpa-resource-guide

Research / serious signal:

- Short-form videos and prospective memory: https://arxiv.org/abs/2302.03714
- PaperTok short-form research communication: https://arxiv.org/abs/2601.18218
- AI whistleblower office design: https://arxiv.org/abs/2603.01245
- Compliance Gap / AI process compliance: https://arxiv.org/abs/2605.01771
- Compliance moral hazard and backfiring mandates: https://arxiv.org/abs/2604.21789

Commentary / not authority:

- Press and vendor commentary may be used only as weak signal unless independently confirmed by official or research sources.

## 7. Calibration Questions For Tom

1. Should Canada, Japan, China, Russia, UAE, and KSA appear every week as a "no material signal found / signal found" grid, or only when a real item appears?
2. In the product-behavior lane, should the first focus be training UX, decision-support UX, or AI-governance controls?
3. Do you want the Monday report to stay at roughly this length, or should it be one-screen summary plus optional appendix?

## Change Log

v0.1 - first live prototype report created to test the recurring ACI-OS intelligence-radar design.
