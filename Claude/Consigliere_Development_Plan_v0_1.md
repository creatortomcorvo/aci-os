# Compliance Consigliere — Development Plan v0.1
**Owner:** Tomasz Kruk · **Status:** Subordinate to Blueprint v0.1. If this document and the Blueprint conflict, the Blueprint wins until formally amended.
**Purpose of this document:** the standing instruction set for how the software behaves, how it is developed, in what stages, and how it measures itself. Paste-ready as governing instructions for the build environment.

---

## 1. What the software is

A methodology-first decision-support system for a solo Head of Compliance at a mid-size multinational. It reduces uncertainty through structured professional reasoning. It is **not** legal advice, not a screening engine, not a policy repository, and it never clears anything.

**North Star test (verbatim, from Blueprint §10):** if a Head of Compliance used this at 22:30, alone, facing a decision affecting their company, career, or integrity — would they finish feeling they *thought better*, not just that they got an answer? Yes → keep. No → redesign.

---

## 2. What the software does — functional specification

### 2.1 The five mandatory behaviors (every interaction, every agent, no exceptions)

1. **Calm first.** For crisis-pattern inputs (dawn raid, freeze, allegation, regulator contact), the first output is a ≤30-second stabilizing response: "this is manageable" + 3–6 first priorities. Only then triage.
2. **Triage before answers.** 3–5 sharp questions before any substantive analysis. First routing question is never "what law applies?" — it is "which of the 7 program elements is under stress?"
3. **Layered depth, user-pulled.**
   - **L1** — one-minute direction (default terminal state; most sessions should end here)
   - **L2** — professional reasoning (the "why," trade-offs, what an experienced peer would weigh)
   - **L3** — sources: framework citations, enforcement patterns, guidance excerpts, each with an as-of date
   - **L4** — formal memo/report from the dual-audience template set
   The system never pushes a deeper layer than requested.
4. **Epistemic categories, always labelled:** Confirmed facts / Assumptions / Inferences / Gaps / Required actions. No analysis ships without this block.
5. **No-clearance rule.** The system never states or implies that a party, transaction, or course of action is "cleared," "safe," or "compliant." No-list-hit ≠ clearance — stated explicitly in every sanctions-type output. Every output distinguishes: *established guidance* / *professional judgment* / *uncertainty*.

### 2.2 Escalation behavior

The system must know when **not** to answer. Hard escalation triggers (output = "stop; this needs external counsel / a human decision-maker," with a one-line reason):
- Potential criminal exposure of identifiable individuals
- Privilege-sensitive situations (active investigation, litigation hold, regulator contact)
- Facts suggesting the user is asked to bless a decision already made
- Jurisdictional conflict the frameworks don't resolve
- Any request to produce a "clearance"

Escalations are logged as first-class events (see §5) — escalation precision is a quality metric, not a failure.

### 2.3 Time-integrity rules (sanctions-critical, applied globally)

- Every output referencing regulatory lists, thresholds, or guidance carries an **as-of date** and, for sanctions, a **list-version reference**.
- The test library must always contain at least one stale-list / regime-change scenario.
- Any answer older than a defined shelf life (default: sanctions 30 days, other guidance 180 days) is flagged as stale if re-used.

### 2.4 Calibration profile (minimal version only)

One static profile file the reasoning engine reads: company size band, industry, footprint countries, reporting line, key systems in place (hotline, screening tool, LMS). Nothing dynamic, no learning from matters, no organisational memory — that remains parked per Blueprint §8.4/§9 until a proper deployment environment exists.

### 2.5 Explicit not-do list (behavioral)

The software must refuse to: clear/approve anything; give legal advice; store or reason over identifiable client/employer facts; generate output without the epistemic block; skip triage on a new matter (unless the user says "just draft it"); answer a crisis prompt with an 11-page memo.

---

## 3. Architecture

- **Platform-agnostic core.** Everything lives as markdown + JSON in the repository (Blueprint §6 structure). GPTs, Claude Projects, future app = disposable interfaces.
- **One skeleton, inherited.** Every agent = data model → decision engine → QA loop → dual-audience output templates. The Sanctions agent is the reference implementation; no agent gets bespoke architecture.
- **Single front door.** The Consigliere (general triage/routing layer) is the eventual entry point; capabilities behind it are agents sharing the skeleton. Until Gate 2 passes, the front door does not exist — only Agent #1 does.
- **Separation of knowledge and reasoning.** Frameworks (Foundation Map crosswalk) are data; the method (triage patterns, escalation logic, prioritization heuristics) is code/prompt. Sources inform reasoning; they are never quoted mechanically as the answer.
- **Private-by-design deployment for self-use.** Daily use at work means real matters approach the tool. Requirements from day one: private environment; pattern-abstraction habit before anything is typed; no real client/employer facts in any hosted tool; journal and logs stored locally under Tom's control.

---

## 4. Development stages and gates

Stages advance only through gates. A failed gate means fix or redesign — never "proceed anyway."

### Stage 0 — Preconditions *(open)*
Employment contract review: IP ownership, side-activity clause, conflict disclosure. **Blocking.** Nothing paid, published, or shared externally until closed.

### Stage 1 — Foundation *(current)*
Foundation Map: ≤10-page synthesis + crosswalk of the anchor frameworks against the 7-element model. Resolve the three documented tensions.
**Gate 1 exit criteria:** (a) 7-element model survives the crosswalk without an eighth element; (b) three tensions resolved and documented; (c) open decisions (OFAC as anchor; cross-cutting third-party/M&A lens) decided and logged.

### Stage 2 — Sanctions Agent v1
Consolidate existing artifacts into `02_agents/sanctions/`. Build the 10-case synthetic library (must include: stale-list scenario, regime-change scenario, one deliberate "user seeks clearance" trap, one mandatory-escalation case). Run, log every failure in `06_qa/failure_log.md`, iterate.
**Gate 2 exit criteria:** 10/10 cases pass QA; triage-first verified on every case; L1→L4 layering works; dual-audience output from one data model; zero clearance-language leaks; instrumentation (§5) live before daily use begins.

### Stage 3 — Real-pattern validation
Anonymised patterns from past casework (structure only, never facts traceable to a matter). 2–3 trusted peers test **blind, pattern-only** — they see outputs, not the tool, and no real access is granted. This is Blueprint Days 45–75 and is distinct from the friend cohort in Stage 5.
**Gate 3 exit criteria:** the 22:30 test answered "yes" by peers; failure taxonomy shows no critical-class failures in final run.

### Stage 4 — Production self-use *(the long phase, ~months 3–12+)*
Tom uses the tool as his actual daily sparring partner. Rules:
- Decision journal entry for **every real use** (§5.1) — two minutes, non-negotiable
- Quarterly calibration review (§5.5) producing a versioned methodology update (v0.2, v0.3…)
- 2–3 articles extracted from discovered principles (content engine per Blueprint §7)
- No new agents, no app, no branding work during this stage unless a quarterly review formally reopens the question
**Gate 4 exit criteria (before any external user):** ≥60 journaled real uses; override rate trending down across two consecutive quarters; zero confidentiality incidents; escalation triggers fired correctly in every applicable case.

### Stage 5 — Friend cohort *(~month 12)*
1–2 trusted peers (sports/media, pharma; DACH-centric) get real access, free.
- **Onboarding pack:** confidentiality rules + pattern-abstraction one-pager (they sign it), calibration profile setup, journal template, "what this tool will never do" sheet
- **Obligation:** they keep the same decision journal; no journal, no access
- Monthly 30-minute debrief; their failure reports enter the same failure log, tagged by user
**Gate 5 exit criteria:** both testers pass the 22:30 test unprompted; their element-frequency distribution compared to Tom's (first evidence the method generalizes beyond n=1); no confidentiality incidents.

### Stage 6 — Second agent
Only now. Selection criterion: the element/agent with the **highest frequency in the combined journals** — the data chooses, not intuition. Must reuse the skeleton unchanged; if it can't, that is an architecture failure → return to Gate 2 logic.

### Stage 7 — Commercialization *(parked, years out)*
Triggers to reopen, not plans: unsolicited willingness-to-pay from cohort or their networks; Stage 0 legal position permits it; ≥2 agents proven. Everything else (pricing, GC-as-buyer framing, industry packs, community, pension-practice model) stays in `99_parked/commercial_notes.md` — captured, not worked.

---

## 5. Instrumentation and learning system

The tool measures itself from Gate 2 onward. This is a core build deliverable, not an add-on: after the self-use years, the logs — not the code — are the unique asset.

### 5.1 Decision journal (`06_qa/decision_journal.md`)
One line per real use, synthetic/pattern form only:

| Field | Content |
|---|---|
| Date | — |
| Element(s) | 1–7, per the model |
| Pattern | situation type in abstract form ("third-party payment routed via new jurisdiction"), never identifiable facts |
| Depth reached | L1/L2/L3/L4 |
| Tool performance | helped / partially / failed (one clause why) |
| Override | did professional judgment override the tool? What was the delta? |
| Escalated | yes/no; correctly? |
| Follow-up | article candidate / test case candidate / methodology fix / none |

### 5.2 Usage statistics (aggregated monthly, automatically where possible)
- Frequency distribution across the 7 elements (the single most commercially valuable dataset)
- Depth-level distribution (validates or falsifies the L1-default hypothesis)
- Time-of-day pattern (tests the 22:30 thesis empirically)
- Session length; triage questions asked vs. skipped ("just draft it" rate)

### 5.3 Question bank analytics (`01_methodology/triage_stats.md`)
Per triage question: how often asked, answered, skipped, or answered "don't know." Questions that never change the recommendation get cut; gaps where the tool failed to ask something judgment later needed get added. The question bank is versioned like code.

### 5.4 Failure log (`06_qa/failure_log.md`) — fixed taxonomy
- **F1** Hallucinated or mis-dated source
- **F2** Stale list / missed regime change
- **F3** Wrong element routing
- **F4** Overconfidence (judgment presented as established guidance)
- **F5** Missed mandatory escalation
- **F6** Clearance-language leak
- **F7** Depth violation (pushed unrequested depth / skipped triage)
- **F8** Epistemic block missing or mislabelled
Severity: critical (F2, F5, F6 always critical) / major / minor. Critical failures block gate passage regardless of pass counts.

### 5.5 Quarterly calibration review (one page, versioned)
Inputs: journal + stats + failure log. Outputs: (a) methodology changes → new version number + change-log line; (b) test cases added from real patterns; (c) triage-bank edits; (d) article candidates; (e) explicit decision: does anything parked get reopened? Default answer: no.

---

## 6. Testing and QA regime

- **Synthetic-only test data** until Stage 3; pattern-abstracted thereafter. No real matter, ever, in any test asset.
- Every methodology version change reruns the full case library (regression, not just new cases).
- QA checklist per output: epistemic block present · as-of date present · layer discipline respected · no clearance language · escalation triggers evaluated · dual-audience templates consistent.
- Adversarial cases are permanent library members: the clearance trap, the "CEO needs it in 10 minutes" pressure case, the stale-list case, the privileged-matter case.

---

## 7. KPIs per stage (minimum set)

| Stage | KPI | Target |
|---|---|---|
| 2 | QA pass rate on 10 cases | 10/10, zero critical failures |
| 4 | Journal completion | 100% of real uses |
| 4 | Override rate | downward trend over 2 quarters |
| 4 | L1-sufficiency rate | >50% of sessions end at L1 (tests the core UX thesis) |
| 4–5 | Escalation precision | no F5 ever; false-positive escalations reviewed quarterly |
| 5 | 22:30 test | unprompted "yes" from both testers |
| 5 | Cross-user element correlation | documented (no target — it's discovery) |

---

## 8. Hard constraints (restated, non-negotiable)

1. No real client/employer data in any consumer AI tool, ever. Pattern abstraction first.
2. Stage 0 blocks all external exposure until closed.
3. Decision support, not legal advice; the no-clearance rule is architectural, not cosmetic.
4. Organisational memory, additional agents, apps, Stress Mode, branding, revenue: parked per Blueprint §9. Reopened only by a quarterly review, in writing.
5. Methodology → Product → Brand. Nothing built for a later pipeline stage before the earlier one is written down.

---

*Change log: v0.1 — initial version, extends Blueprint §7 beyond Day 90 into self-use (Stage 4), friend cohort (Stage 5), and instrumentation (§5). Gate 1 status unchanged (open).*
