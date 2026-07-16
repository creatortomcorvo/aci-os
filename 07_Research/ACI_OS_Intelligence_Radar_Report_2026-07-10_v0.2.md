# ACI-OS Intelligence Radar Report v0.2 - 2026-07-10

Response timestamp: 2026-07-10 13:32:17 +02:00 Europe/Zurich.

Status: internal prototype report. Stage 0b blocks publication, external distribution, pilot use, testers, or commercial use.

Coverage note: this v0.2 keeps the v0.1 external scan and adds the new recommendation layer requested by Tom: documentation / knowledge / links actions and methodology / response-behavior actions, each with YES/NO decision cards. Decision support only; not legal advice and no clearance.

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
| ACT | Keep this radar design: short-first, source-labelled, 7-element mapped, ACT/PARK/DISCARD before absorption. | `07_Research/ACI_OS_Intelligence_Radar_Report_Spec_v0.2.md` |
| ACT | For Monday runs, include OFAC Recent Actions, EDPB News, European Commission AI Office/GPAI, GOV.UK ECCTA fraud guidance, DOJ ECCP/FCPA pages as standing source feeds. | Recurring automation `aci-os-intelligence-radar` |
| PARK | Consider adding a sanctions test case for "license changed after prior advice / old screen says OK." | `06_Testing/Gate_2_Sanctions_Test_Library_v0.1.md`; `05_Experts/Sanctions_Expert_Route_v0.1.1.md` |
| PARK | Consider a future fraud/failure-to-prevent expert route, but only after decision-journal frequency data supports Agent #2. | `05_Experts/Expert_Map.md`; Stage 4 decision journal |
| PARK | Convert human-interaction signals into a short-first UX design note after two or three radar cycles confirm the pattern. | `04_Methodology/Decision_Front_Door_Spec_v0.1.md`; `04_Methodology/Triage_Layer_Spec_v0.1.md` |
| DISCARD | Treat press commentary, vendor pieces, or broad "attention span collapse" claims as authority. | Source discipline rule |

## 6. Documentation, Knowledge, Docs, And Links Recommendations

| Verdict | Recommendation | Target | Reason |
| --- | --- | --- | --- |
| ACT | Add a standing radar source-feed file so each Monday scan starts from a stable official-source list. | New `07_Research/Intelligence_Radar_Source_Feeds_v0.1.md` | The report should not depend on ad hoc search terms only. |
| PARK | Add OFAC Recent Actions, EDPB News, Commission GPAI Code page, and GOV.UK ECCTA fraud guidance to `Source_Register`. | `07_Research/Source_Register_v0.1.md` | Useful, but this should be implemented as a targeted source-register update after Tom approves. |
| PARK | Do not add the short-form video or AI-process-compliance papers to the GPT knowledge bundle yet. | Knowledge bundle workflow | One report is not enough to make them methodology anchors. |
| NO CHANGE | Do not alter `Foundation_Map_v1.0.md`. | `00_foundation/Foundation_Map_v1.0.md` | No failed crosswalk or formal Blueprint amendment exists. |

## 7. Methodology And Response-Behavior Recommendations

| Verdict | Recommendation | Target | Reason |
| --- | --- | --- | --- |
| PARK | Add a sanctions test-case candidate: "prior screening looked OK, but OFAC license/FAQ changed before execution." | `06_Testing/Gate_2_Sanctions_Test_Library_v0.1.md` | It tests stale source reliance and license-status discipline. |
| PARK | Add a response-behavior note: "short first, but audit trail preserved." | `04_Methodology/Decision_Front_Door_Spec_v0.1.md` or `04_Methodology/Triage_Layer_Spec_v0.1.md` | Product UX should reduce cognitive load without hiding reasoning or evidence. |
| PARK | Add a future fraud/failure-to-prevent expert route candidate. | `05_Experts/Expert_Map.md` | Good signal, wrong month unless Stage 4 journal frequency supports Agent #2. |
| DISCARD | Add a blanket rule that users no longer read long answers. | Methodology files | Too crude; ACI-OS needs proportional depth, not anti-depth design. |

## 8. Decision Cards For Tom

Decision card DOCS-1

Recommendation: create a standing source-feed file for the weekly radar.

Target file(s): `07_Research/Intelligence_Radar_Source_Feeds_v0.1.md`

Recommended decision: YES

Why: gives the Monday automation a stable official-source checklist across sanctions, ABAC, fraud, data/privacy, antitrust, whistleblowing, AI, and key jurisdictions.

Risk: small maintenance burden; sources can drift.

Reply token: `YES-DOCS-1` to implement now / `NO-DOCS-1` to park.

Decision card DOCS-2

Recommendation: update the source register with the official sources that proved useful in this first radar.

Target file(s): `07_Research/Source_Register_v0.1.md`

Recommended decision: YES, but only after DOCS-1 if you want source-register growth to stay controlled.

Why: source links should be visible and reusable, not rediscovered every week.

Risk: source register can become noisy if every weekly source is added.

Reply token: `YES-DOCS-2` to implement now / `NO-DOCS-2` to park.

Decision card METHOD-1

Recommendation: add a sanctions test-case candidate for changed license/FAQ status after earlier screening.

Target file(s): `06_Testing/Gate_2_Sanctions_Test_Library_v0.1.md`

Recommended decision: YES

Why: this is directly relevant to Sanctions Agent #1 and does not require choosing Agent #2.

Risk: small expansion of test library; must stay synthetic and non-confidential.

Reply token: `YES-METHOD-1` to implement now / `NO-METHOD-1` to park.

Decision card METHOD-2

Recommendation: add a methodology note that short-first answers must preserve auditability and source traceability.

Target file(s): `04_Methodology/Decision_Front_Door_Spec_v0.1.md` or `04_Methodology/Triage_Layer_Spec_v0.1.md`

Recommended decision: PARK for one more cycle, unless you want to hard-code it now.

Why: the signal is strong but should be phrased carefully so it does not weaken layered depth.

Risk: premature wording could overfit to generic attention-span claims.

Reply token: `YES-METHOD-2` to implement now / `NO-METHOD-2` to park.

## 9. Source Register

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

## 10. Calibration Questions For Tom

1. Should decision cards be limited to 3 per report so they remain actionable?
2. Should the source-register update be selective only, or should every recurring official feed be added?
3. Should methodology recommendations default to PARK unless the signal directly affects Sanctions Agent #1 or the Decision Front Door?

## Change Log

v0.2 - added documentation/knowledge/link recommendations, methodology/response-behavior recommendations, and YES/NO decision cards.

v0.1 - first live prototype report created to test the recurring ACI-OS intelligence-radar design.
