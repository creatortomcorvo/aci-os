# ACI-OS — Decision Panel Specification v2.0

**Replaces:** v1.0 and the existing ACI-OS panel.
**Status:** build-ready functional specification. Every behavior described here is a requirement, not an illustration.
**Change basis:** v1.0 consolidated spec + adversarial critique (verdict logic, gap taxonomy, defensibility states, precedent anchoring, artifact validity, pre-render checks). All eleven critique points are resolved in this version; see §18 change log.

---

## 1. Purpose and operating principle

Help Compliance and Legal leaders make sound, proportionate and defensible decisions under pressure. The panel identifies the risk pattern, immediate action, gaps, decision owner, escalation path, controls and evidence required. It supports — but never replaces — legal advice, formal approval, management accountability or professional judgment.

**Operating principle:** state what the user may defensibly do **now**, then show the pathway to what may become possible, then go deeper only where it could change the decision.

**Governing question of every screen:** "What decision or action do you need help with?" — never "what kind of answer would you like?"

---

## 2. Design principles (user-friendliness rules)

These six rules resolve every UI dispute during the build. When two layouts conflict, the one that satisfies the higher-numbered principle loses.

1. **The three-second rule.** A user under pressure must extract verdict + operative instruction + owner within three seconds of the answer rendering, without scrolling, on any device.
2. **The badge never lies.** The color and word of the verdict badge must match the present-tense operational instruction. If the instruction is "do not proceed today," the badge cannot be green. Restraint is never carried only in a subordinate clause.
3. **Now and pathway are separate objects.** What is defensible now (verdict) and what could become defensible (pathway) are two visually distinct fields. They never merge into one sentence.
4. **Every claim shows its epistemic status.** Facts show sources; judgments say they are judgments; gaps say they are gaps. The panel never dresses an assessment as a verification.
5. **Designed to be argued with.** Corrections, challenges and counter-verdicts are first-class controls, as prominent as conversions. A panel that is easy to agree with and hard to dispute is mis-designed.
6. **No approval illusion, structurally.** The formal-decision slot is visible and empty until a human fills it. The system never renders the words approved, cleared, safe, or compliant as its own conclusion.

---

## 3. Architecture overview

```
INPUT LAYER      free text + artifact intake + matter memory
TASK LAYER       router + six task modes (Assess, Challenge, Escalate, Control, Draft, Lead)
VERDICT ENGINE   fact extraction → gap classification → pattern match →
                 candidate verdict → pre-render adversarial check → verdict + pathway
ANSWER LAYER     decision bar + tabbed components + deeper analysis
ACTION LAYER     conversions, corrections (with propagation), audience re-render
TRUST LAYER      citations, epistemic states, decision record, audit log, safeguards
```

The internal processing chain (situation → task → triage → gap classification → pattern → candidate verdict → adversarial check → verdict/pathway → reasons → immediate action → owner → escalation → controls → evidence → defensibility → output → record) is the engine's order of operations and the panel's layout order. It is **never** rendered as a click-through wizard. The user sees one panel.

---

## 4. Panel anatomy — zone by zone

The panel has seven zones, top to bottom: (A) matter header, (B) input zone, (C) decision bar, (D) precedent strip (conditional), (E) core answer, (F) action rail, (G) correction bar. Desktop: E and F sit side by side (answer left, rail right, ~78/22 split). All zones below are specified with content, states, and behaviors.

### 4A. Matter header

- Left: product mark + matter name. Matters are named containers ("Agent payment — Q3"); every session belongs to a matter, auto-created from the first input if none is selected, renamable inline.
- Right: matter log icon (opens the append-only record list for this matter, §15) and settings.
- The header is the only place the product name appears. Everything below is about the user's decision, not the product.

### 4B. Input zone

**Elements:** one free-text field, an artifact drop area, six mode chips, and (after first render) a collapsed summary of the current input.

**Free-text field.**
- Placeholder rotates through realistic examples ("Regional team wants to pay a new intermediary today — can we release?"). Never "Ask me anything."
- Accepts fully unstructured input. The extraction engine (§5.1) pulls out: what is happening; pending decision; urgency; possibly applicable rules; steps already taken. Missing elements are inferred or listed as gaps — the user is never bounced back to "please provide more information" as a whole; at most **one** clarifying question is asked, and only when the mode or the decision itself is undeterminable (see router rules below).

**Artifact intake.**
- Drop or click-to-attach. Accepted: policies, procedures, delegation-of-authority (DoA) matrices, contracts, invoices, screening results, due-diligence reports, draft decisions, prior decision records, org charts.
- On upload, every artifact is classified and receives a **validity label**, shown as a small tag on its chip:
  - `current & applicable` — dated, approved, in-scope for the entity and jurisdiction.
  - `currentness unverified` — no reliable date/version marker found. Default when in doubt.
  - `draft` — watermark, "draft" marker, or unapproved status detected.
  - `superseded` — a newer version exists in the matter/policy library.
  - `incomplete` — pages/annexes/signatures missing.
  - `jurisdiction or entity mismatch` — document governs a different entity or country than the situation.
- Labels are clickable: the user can correct a label ("this is the current version"), and the correction is logged with the user's identity in the audit trail.
- **Grounding rule:** artifacts labeled `current & applicable` are primary grounding. Any other label may still be cited, but every citation from it carries the label ("per Policy GRP-07 §4 *(currentness unverified)*"). Primary never means presumed valid.

**Mode chips.** Assess · Challenge · Escalate · Control · Draft · Lead. Single row, always visible. The router (below) pre-selects one; the user overrides with one click. Hovering a chip shows its one-line job-to-be-done.

**Router behavior.**
- Classifies input into a mode with a confidence score. High confidence: mode chip activates silently. Medium: chip activates with a one-line note ("Reading this as Assess — override if you meant something else"). Low: the router asks its single clarifying question ("Is this a live decision you need direction on, or a decision you want tested?").
- Free text always works in every mode. Chips are accelerators; there is no chip-only path.

**After first render** the input zone collapses to a two-line summary with an edit control, so the decision bar takes the top of the viewport. Editing the input re-runs the engine and marks superseded outputs in the matter log (never silently overwrites them).

### 4C. Decision bar

The most important surface in the product. Always rendered first, pinned (sticky) while the user scrolls the answer. Contents, top to bottom:

**1. Verdict badge + operative instruction + pathway (the two-field structure).**
- Badge: one of four verdicts (§6), large (visually dominant over everything else on screen), color-coded, wording per §6.
- **Operative instruction** (field one): one or two sentences, present tense, imperative, describing what to do *now* — "Do not release the payment today. Preserve the request and decision trail; no oral instruction replaces the required process."
- **Pathway** (field two): visually subordinate line (smaller, secondary color, arrow prefix) describing what could change the verdict — "GO-IF becomes available once the receiving-account owner, the route-change rationale, the intermediary's authority and formal risk acceptance by the regional CEO are verified."
- The badge always agrees with field one, never with field two. A green badge with a stop instruction is a rendering defect and must be blocked at the template level (§6.4).
- Pathway is present on every verdict: HOLD shows the GO-IF/NO-GO fork it leads to; NO-GO shows what would have to change for reconsideration; GO-IF shows what completes the conditions; ESCALATE shows what the recipient is being asked to decide.

**2. Chip row.** Compact status chips, in fixed order:
- Risk level (low/medium/high/severe — colored tint).
- Gap counter, by tier: "Blocking gaps: 2" (amber/red when >0) or "No blocking gaps" (neutral).
- Risk pattern chip(s) — **plural when multiple patterns apply** (e.g., sanctions ownership/control *and* management-override risk). Each chip clickable → opens the pattern playbook entry (§11).
- Decision owner, with authority status appended when unverified: "Owner: regional CEO *(DoA unverified)*".
- Urgency, only when stated or inferred from the input; the panel never invents deadlines.

**3. Gap strip.** One compact line listing gaps grouped by tier (see §7): *Blocking:* … · *Conditions (pathway):* … · *Record items* collapsed behind a count. Every gap named here appears in full in the Missing-facts tab; the strip is the summary, not a second list.

**4. Separation row.** Three fields, always: `AI recommendation: <verdict>` · `Formal decision: pending` (turns to `recorded — <name, date>` once a human records it, §15) · a standing boundary note. The boundary note is context-sensitive: default "Not approval or clearance"; when screening was part of the input, extended with "— no screening hit does not establish permission" (§12.2).

**5. Defensibility summary.** The tri-state chips (§8): each check rendered as `Verified: <basis>`, `Assessed: <judgment>`, or `Gap: <what is missing>`. Clicking a chip opens the Defensibility tab at that item.

### 4D. Precedent strip (conditional)

Rendered only when matter memory finds a candidate precedent **and** the comparability gate passes or the matter is high-risk (where it auto-runs). Wording is mandatory and fixed in structure:

> *Potentially relevant precedent — not yet validated as comparable: <matter, date, verdict>. Compare.*

- "Compare" opens the comparability table (§10.2). The precedent's verdict is **never** shown in the decision bar as support for the current verdict until the table has been generated and at least reviewed (opened) by the user.
- The strip carries the precedent's status tag: `authoritative` (a recorded formal decision by an authorized person under the same rule) or `informative` (an AI assessment or a decision under different facts/rules). Only authoritative precedents may be cited in the Why tab.
- Anti-anchoring rule: the verdict engine computes its verdict **before** retrieving precedent; precedent may add a consistency warning ("this diverges from the March decision — review the difference") but never substitutes for the current-facts analysis. Divergence from precedent is displayed, not auto-corrected.

### 4E. Core answer

Tab row: **Why · Immediate action · Missing facts · Roles · Evidence · Escalation · Defensibility**, plus the **Deeper analysis** expander below the active tab. "Why" opens by default; the engine may auto-open a different tab when it matters more (HOLD with blocking gaps → Missing facts; ESCALATE → Roles). Tab specifications:

**Why.** Three to five decisive reasons, numbered, each ending with citation chip(s) (§9.4). Never more than five; never a legal essay. If the honest analysis has more than five decisive reasons, the verdict is probably NO-GO or ESCALATE and the reasons consolidate.

**Immediate action.** Imperative checklist of the next hours: pause payment; preserve evidence (named artifacts); do not communicate externally; obtain X; notify GC; apply interim control Y. Where management pressure is detected (§11.3): "Preserve the request and the decision trail. Do not allow an informal oral instruction to replace the required decision process." Each action carries who performs it.

**Missing facts.** The three tiers of §7, each tier a labeled group, each gap a row with: the fact, why it matters (one clause), who most likely holds it, and its consequence tier. Blocking rows carry a "resolved →" control: the user enters the fact, and the engine re-runs (§13.2).

**Roles.** The five-row role table (Legal / Compliance / Management / Specialist / Formal approver) populated for this matter, with the two mandatory explicit sentences: either "Compliance is not the commercial owner of this decision" or "The policy assigns formal approval to <role> *(per DoA <version>, <status label>)*." Where the DoA is not in the artifact set, the approver row shows `Gap: delegation not verified` and this propagates to the defensibility chips.

**Evidence.** What must be retained, as a checklist grouped by: exists (attached/named), must be obtained, must be created (e.g., written business rationale, written risk acceptance). Standing rule pinned to this tab: **paperwork completeness does not equal substantive approval.**

**Escalation.** Whether escalation is required (per the proportionality test §12.4 — the tab shows the test's result, including "escalation not required; handled by existing rule" when that is the answer); recipient; the precise decision requested (one sentence, decidable); what must not be delegated; deadline; consequence of no decision.

**Defensibility.** Full checklist behind the summary chips. Eight checks (facts identified; applicable rule considered; decided by right person; alternatives considered; conditions proportionate; reasoning recorded; consistent with precedent; control enforceable), each with tri-state (§8) and its basis: Verified items name the artifact/section; Assessed items are worded as judgments ("assessed as proportionate because…"); Gaps link to the fix (the missing-fact row, the record-creation action, the comparability table).

**Deeper analysis (expander).** Renders only on demand: detailed analysis; alternative options; counterarguments; open legal questions routed to Legal; control design; precedent implications; full source list. Depth is a pull. The expander's content is generated on expand (not pre-generated and hidden) so the initial answer stays fast and the log reflects what the user actually saw.

### 4F. Action rail

Two labeled groups. All actions operate on the **completed** analysis; none restarts it.

**Act on this.**
- *Challenge this* — runs Challenge mode against the panel's own answer: consistency, proportionality, ownership, factual basis, precedent risk, enforceability, defensibility. Output renders as an overlay of objections, each accepted (panel amends, logged) or rebutted (rebuttal logged). The system challenging itself and the record of that exchange are part of the decision record.
- *Alternatives* — generates 2–3 materially different courses (not tone variants), each with its own verdict-and-pathway line and trade-offs.
- *Prepare escalation* — re-renders as the §4E Escalation content plus an executive brief in the recipient's frame.
- *Build controls* — opens Control mode seeded with this matter (approval path, roles, controls, monitoring, triggers, evidence, review date).

**Convert.** Decision record (§15) · Memo · Email · Checklist · Management brief · Control plan. Conversions are deterministic re-renderings: same verdict, same reasons, same gaps — format changes, substance never does. Every conversion footer carries the separation row (recommendation / formal decision / boundary).

### 4G. Correction bar

**Chips:** Wrong facts · Wrong jurisdiction · Wrong company rule · Wrong risk level · Wrong owner · Missing a relevant risk · Impractical · Challenge harder · Shorter. Plus the audience selector.

**Behavior per chip:** opens a one-line input ("What did I get wrong?"), then re-runs **only the affected components** per the propagation matrix:

| Correction | Re-runs | Untouched |
|---|---|---|
| Wrong facts | Full engine (facts are upstream of everything) | — |
| Wrong jurisdiction | Rule retrieval, citations, verdict check, pattern | Roles table structure |
| Wrong company rule | Citations, Why, verdict check, defensibility | Immediate action unless rule-dependent |
| Wrong risk level | Chip row, verdict check, escalation proportionality | Facts, roles |
| Wrong owner | Roles, escalation, decision bar owner chip, defensibility (owner check) | Why, evidence |
| Missing a relevant risk | Pattern match, Why, verdict check | Roles |
| Impractical | Immediate action, conditions, control suggestions | Verdict unless conditions were load-bearing |
| Challenge harder | Runs Challenge with elevated aggressiveness | Base analysis retained for comparison |
| Shorter | Presentation only | All substance |

- Every re-run that could change the verdict passes through the pre-render adversarial check again (§6.3). If the verdict changes after a correction, the bar animates the change and the old verdict is retained in the log with the correction that displaced it.
- Corrections are logged **by category and content**. A monthly correction report (settings → quality) shows the distribution — the product's built-in error-pattern telemetry: if "wrong jurisdiction" dominates, retrieval needs work; if "impractical" dominates, condition generation needs grounding in operational reality.

**Audience selector.** CEO · General Counsel · Compliance leader (default) · Board/Audit Committee · Business owner · Employee · Auditor · Regulator. Re-renders emphasis, vocabulary, and length for the recipient. **Invariants that never change with audience:** the verdict, the operative instruction, the gaps, the conditions, and the separation row. If a CEO rendering would need to soften "do not release today" to be palatable, the rendering is wrong, not the verdict.

---

## 5. Input processing

### 5.1 Fact extraction
From the free text and artifacts the engine extracts a structured fact sheet: parties (with roles), jurisdictions, amounts, dates, the pending decision, actions already taken, rules invoked by the user, pressure indicators (§11.3), and screening references. The fact sheet is visible (input-zone summary, expandable) and editable; edits are corrections (Wrong facts) and propagate accordingly. The engine distinguishes **stated facts** (user said it), **document facts** (artifact says it), and **inferences** (engine concluded it) — inferences render in the fact sheet with an "inferred" marker and are the first candidates for the clarifying question.

### 5.2 Sub-typing before verdict
Vague fact patterns with materially different implications are sub-typed **before** the verdict engine runs. Example — "payment route differs": payment to contracting entity but different bank / to an affiliate / to an individual / to an unrelated third party / offshore / split / cash or crypto / different jurisdiction / account-name mismatch / account changed shortly before payment. If the sub-type is undeterminable from input, the ambiguity itself becomes a **blocking gap** ("nature of the route change unknown — who owns the receiving account?") and pushes toward HOLD. The sub-type lists live in the pattern playbooks (§11) so the library grows without touching the engine.

---

## 6. Verdict engine

### 6.1 The four verdicts

| Verdict | Definition | Badge color | Operative-instruction grammar |
|---|---|---|---|
| **HOLD NOW** | A blocking gap or missing interim control prevents any defensible decision at this moment. | Amber | "Do not <act> until <blocking items>." |
| **NO-GO** | On the known facts, proceeding is not defensible; conditions cannot cure it. | Red | "Do not proceed. <Reason class>." |
| **GO-IF** | Proceeding is defensible now, provided the listed **material conditions** are executed; a named, authorized owner accepts residual risk. | Green | "Proceed only with: <conditions>. Owner: <name>." |
| **ESCALATE** | The decision does not belong at this level or to this function. | Blue | "Route to <recipient> with this decision request: <one sentence>." |

**The boundary rule (critique resolution #1):** GO-IF may contain conditions, but never *unresolved conditions that prevent a defensible decision now*. Operationally: if any gap is classified **blocking** (§7), GO-IF is unavailable and the verdict is HOLD NOW with GO-IF in the pathway. Material conditions (executable verification or approval steps that do not change the direction) are compatible with GO-IF. The classifier's test for each open item: *"If this fact came back badly, would the direction change?"* Yes → blocking → HOLD. No, it's an execution step → condition → GO-IF possible.

A plain "YES" is never rendered. Low-risk matters inside an existing rule are GO-IF with the rule as the condition ("GO-IF: within Policy T&E §3 — retain receipt and line-manager approval").

### 6.2 Selection algorithm (normative)
1. Extract facts, sub-type ambiguous patterns (§5).
2. Classify every open item into the three gap tiers (§7).
3. Match risk pattern(s) (§11); multiple patterns allowed.
4. Compute candidate verdict: any blocking gap → HOLD NOW; direction indefensible regardless of conditions → NO-GO; decision outside user's function/level or requiring a legal conclusion → ESCALATE; else → GO-IF with material conditions.
5. Run the pre-render adversarial check (§6.3).
6. Render verdict + pathway; log candidate, challenges, and final verdict.

### 6.3 Pre-render adversarial check (critique resolution #11)
Mandatory, internal, before anything renders. Both directions:
- Every **GO-IF** must answer: Why is this not HOLD (is any condition actually blocking)? Why is this not NO-GO? Is every condition realistically verifiable and enforceable, by a named person, in the available time? Is the owner actually authorized (DoA verified?) to accept the residual risk?
- Every **HOLD NOW** must answer: Is each blocking gap genuinely decision-critical, or is the system avoiding a difficult but possible judgment? Could an interim control convert this to GO-IF today?
- Every **NO-GO** must answer: is there truly no proportionate condition set that would make this defensible?
- Every **ESCALATE** must pass the proportionality test (§12.4).
Failed checks force reclassification. The check's outcome (questions and answers) is stored in the decision record's reasoning section — this is what makes "reasoning recorded" verifiable rather than assessed.

### 6.4 Rendering guards
Template-level validations that block a render: green badge with a present-tense prohibition in field one; verdict word inconsistent with badge color; GO-IF rendered while blocking-gap count > 0; forbidden labels (§12.1) in any output; empty pathway field; owner field empty on GO-IF.

---

## 7. Gap taxonomy (critique resolution #4)

Every open item is classified into exactly one tier, and every tier has a defined decision consequence:

| Tier | Definition | Consequence |
|---|---|---|
| **Blocking gap** | Without this, no defensible decision can be made now; the answer could change the direction. | Verdict is HOLD NOW (or NO-GO/ESCALATE on other grounds). Listed in the gap strip and the pathway. |
| **Material condition** | The direction is defensible; this is an execution/verification/approval step that must be completed and evidenced. | Compatible with GO-IF; each condition names its verifier and its evidence. |
| **Record-enhancement item** | Improves the file; does not affect the decision. | Listed collapsed; feeds the Evidence tab; never blocks. |

Tier assignment is shown, disputable (correction: Wrong facts / Wrong risk level), and logged. The words "critical gap" without a tier are banned from the interface.

---

## 8. Defensibility engine (critique resolution #6)

Eight checks, three epistemic states — never a bare PASS:

- **Verified** — supported by a named source or artifact with a `current & applicable` label. Chip shows the basis: "Verified: rule GRP-07 §4". A verification resting on an artifact with any other validity label downgrades to Assessed and says why.
- **Assessed** — reasoned judgment by the engine, not externally verified. Worded as judgment: "Assessed: conditions proportionate (reasoning in record)". Applies by default to: alternatives considered, proportionality, enforceability.
- **Gap** — unresolved; links to the fix (the missing-fact row, the record-creation action, the comparability table, the DoA request).

Fact-type checks (facts identified; rule considered; right person; precedent consistency) can reach Verified. Judgment-type checks (alternatives; proportionality; enforceability) top out at Assessed by design — the interface must not pretend the AI verified its own judgment. "Reasoning recorded" becomes Verified only once the decision record exists (§15).

---

## 9. Grounding and citations

### 9.1 Internal rules first
For policy/procedure/operational questions, sources are applied and **labeled** in this order: existing company rule → existing approval authority (DoA) → established precedent (authoritative only) → external legal/regulatory requirement → good-practice recommendation. The answer distinguishes each layer; the user always sees whether an instruction comes from their own rulebook or from general practice.

### 9.2 Citation chips
Every reason, condition, evidence item and role assignment carries an inline chip: source name + pinpoint (article/section) + validity label where not `current & applicable`. Where the basis is judgment, the chip reads `assessment`. Clicking a chip opens the source at the pinpoint (artifact viewer) or the reasoning note (assessments). An uncited reason is a rendering defect.

### 9.3 Citation validation
Chips are validated before render: the pinpoint must exist in the artifact; quoted or paraphrased content must match the source. Failed validation converts the chip to `assessment` and logs a retrieval error — the system never fabricates a pinpoint to look grounded.

---

## 10. Matter memory and precedent (critique resolution #5)

### 10.1 What is stored
Per matter: fact sheet versions, verdicts with pathways, gap classifications, patterns, conditions and their completion status, corrections, challenge exchanges, decision records, artifacts with validity labels. Per organization: policy library with versioning, DoA versions, the pattern playbook extensions, the correction telemetry.

### 10.2 The comparability gate
Precedent influences nothing until compared. The comparability table is generated on demand (or automatically for high-risk matters / whenever the engine would cite precedent):

| Element | Current matter | Prior matter | Material difference? |
|---|---|---|---|
| (party role, payment route, jurisdiction, rule version, pressure indicators, prior-conditions completion, …) | | | yes/no + one clause |

Below the table, the engine states: whether the prior rule/policy version still applies; whether the prior conditions were completed; whether the prior decision is `authoritative` or `informative`; and its conclusion — *comparable and supportive*, *comparable and adverse* (a precedent with better facts that still received HOLD argues **against** leniency now), or *not comparable*. "Consistency with precedent" in the defensibility check references this conclusion, never raw similarity.

---

## 11. Risk-pattern library and playbooks

### 11.1 Playbook structure (uniform for every pattern)
`Pattern name → definition → sub-types → blocking questions → typical gap classifications → typical verdict logic → immediate-action set → evidence set → escalation guidance`. The engine consumes playbooks; adding a pattern never changes engine code.

### 11.2 Core library (extensible)
Third-party corruption; sanctions ownership/control; public-official interaction; conflict of interest; management override; improper payment route; weak evidence; retrospective approval; control circumvention; retaliation risk; inconsistent precedent; legal-versus-policy ambiguity.

### 11.3 Management pressure (critique resolution #7)
Pressure indicators (urgency imposed by a senior, instruction to skip steps, request for retroactive papering, unusual channel, displeasure signaling) trigger the **management override / pressure on a control function** pattern as an *additional* chip — pressure is a risk pattern, never merely background urgency. Its playbook adds: preserve the request and decision trail; require the instruction in writable form; assess whether the purported decision owner is acting freely; consider whether independence of the control function is impaired; retaliation-risk note where the user may be personally exposed.

### 11.4 Example playbook: improper payment route
Sub-types per §5.2. Blocking questions: Who is the contractual payee? Who owns the receiving account? Why is the route different? Who requested the change? Is the change documented and independently verified (call-back to a known contact, not the requester)? Does the invoice match contract and actual services? Is the intermediary authorized to receive the funds? Typical logic: unknown account owner or undocumented change → blocking → HOLD NOW; documented, verified change to the contracting entity's account → material condition → GO-IF possible.

---

## 12. Safeguards

**12.1 Forbidden labels.** The system never outputs *approved, cleared, safe, compliant* as its own conclusion (guarded at render, §6.4). Permitted vocabulary: AI assessment; recommended direction; conditions to proceed; decision pending; management decision recorded (only when recording an authorized person's decision, attributed).

**12.2 Screening safeguard.** Trigger: screening, "no hits," database checks, or documentary completeness appears in the input or artifacts. Effect: the separation row's boundary note extends ("no screening hit does not establish permission"), and the Why/Evidence tabs include the full safeguard text: ownership, control, purpose, payment flow, geographic exposure, circumvention risk and applicable restrictions still require assessment. Contextual, in the answer body — never only a general footer.

**12.3 Legal boundary.** When a legal conclusion is necessary, the answer body states: "Legal conclusion required: this issue should be determined by Legal. Compliance can assess the risk and recommend interim controls." Verdict in such cases is typically ESCALATE (to Legal, with the precise question) or HOLD NOW — never a substituted legal conclusion. The open legal questions are listed verbatim in Deeper analysis so they can be handed to Legal unchanged.

**12.4 Over-escalation test.** Before any ESCALATE or escalation recommendation: Is the issue within an existing rule? Is there a designated owner? Can ordinary controls handle it? Would escalation unnecessarily transfer accountability? Is the recipient actually empowered to decide? The Escalation tab shows the test's outcome, including the negative ("escalation not required — within Policy X, owner is Y").

---

## 13. Dynamic behaviors and edge cases

**13.1 Progressive engagement.** First render targets < 10 s to decision bar; tabs hydrate progressively; Deeper analysis generates on expand.

**13.2 Gap resolution loop.** Resolving a blocking gap inline re-runs classification → adversarial check → verdict. A HOLD NOW can graduate to GO-IF within the session; the graduation (old verdict, resolved fact, new verdict) is a logged event and appears in the decision record's timeline.

**13.3 Conflicting artifacts.** Two versions of a rule: the engine prefers the later `current & applicable`; if versions conflict without clear precedence, the conflict itself is surfaced as a blocking or material item ("Policy v3 and v4 differ on approval threshold — confirm governing version") rather than silently choosing.

**13.4 Thin input.** If the input supports no defensible analysis ("can we pay someone?"), the engine renders HOLD NOW with the blocking gaps being the missing situation elements — it never renders a generic essay, and never interrogates beyond the gap list.

**13.5 User disputes the verdict.** "Challenge harder" and corrections are the sanctioned route. If the user simply re-asks hoping for a better answer, the engine notices the unchanged fact sheet and says so: same facts, same verdict, here are the gaps that would change it. Verdict shopping is structurally unrewarding.

**13.6 Retrieval failure.** If the policy library or an artifact cannot be read, affected citations render as `assessment`, the failure is disclosed in the answer ("Policy GRP-07 could not be read — direction below is not grounded in your rulebook"), and the defensibility check downgrades accordingly. The system never hides degraded grounding.

---

## 14. Mobile variant

Screen 1 (default): verdict badge, operative instruction, pathway, owner, blocking-gap count — nothing else. Swipe up: chip row, gap strip, separation row. Tabs become an accordion; action rail becomes a bottom sheet (Act on this / Convert); correction bar persists as a single "Something's wrong" button opening the chip list. The three-second rule governs screen 1 absolutely.

---

## 15. Decision record

One click from the action rail. Fields (all auto-populated except the formal-decision block):
matter and record ID; date/time; mode; input summary and fact-sheet version; artifacts with validity labels; verdict + operative instruction + pathway; reasons with citations; gap classification (all three tiers, with resolution timeline); risk patterns; roles table; evidence checklist with status; escalation section with proportionality-test result; defensibility results with tri-states and bases; adversarial-check Q&A; challenge exchanges and corrections applied; **formal-decision block** (decision, decider name and role, authority reference, date, conditions accepted) — completed by the human, in-app or countersigned on the export; AI-assessment marker and boundary text.

Records are append-only, versioned, exportable (PDF/print), searchable, and constitute the matter log. Editing is impossible; superseding (new record referencing the old) is the only change mechanism.

---

## 16. Technical requirements (critique resolution #10)

The mockups prove interaction design; these functions must demonstrably work before the panel replaces the existing one: source retrieval with pinpoint accuracy; policy-precedence resolution (§9.1); fact extraction with stated/document/inferred typing; citation validation (§9.3); precedent comparison generation; correction propagation per the matrix (§4G); decision-record integrity (append-only, versioned); authorization control on the formal-decision block (only designated users record decisions); full audit logging (every render, correction, override, label change, with user identity); user permissions and role-based access to matters; data isolation per organization; retention configuration; artifact and policy versioning. Deployment remains local-first / sovereign hosting; matter data never leaves the controlled environment.

**Acceptance tests (minimum):** (a) a scenario with one blocking gap must never render GO-IF; (b) resolving that gap in-session must graduate the verdict with a logged event; (c) an audience switch must produce zero diff in verdict, gaps and conditions; (d) a `draft`-labeled policy must never appear as an unlabeled citation; (e) precedent must not appear in Why before its comparability table exists; (f) the forbidden-label guard must catch "approved" in every output surface including conversions.

---

## 17. MVP cut

Phase 1: Assess + Challenge modes; four verdicts with the two-field structure; gap taxonomy; components Why / Immediate action / Missing facts / Roles / Defensibility; citation chips with validation; decision record; correction bar with propagation; forbidden-label guard; adversarial check. Phase 2: Escalate + Control modes; precedent memory with comparability gate; artifact validity pipeline; Evidence and Escalation tabs; audience re-render. Phase 3: Draft + Lead modes; playbook editor; correction telemetry dashboard; mobile variant.

---

## 18. Change log v1.0 → v2.0

1. Verdict/pathway split: every verdict is two fields — current instruction + pathway; badge must agree with the instruction (critique #1, #2).
2. GO-IF/HOLD boundary rule made programmatic; blocking gap → HOLD NOW, enforced by render guard (#1).
3. "Solidity" signal replaced by the three-tier gap taxonomy with defined consequences (#4).
4. Defensibility pass/gap replaced by Verified / Assessed / Gap with mandatory bases; judgment checks capped at Assessed (#6).
5. Precedent strip gated behind comparability table; authoritative/informative status; anti-anchoring rule (verdict computed before precedent retrieval) (#5).
6. Management pressure elevated to a risk pattern with its own playbook and immediate actions (#7).
7. Sub-typing before verdict; ambiguity becomes a blocking gap; payment-route playbook as the model (#8).
8. Artifact validity labels; "primary grounding" no longer implies presumed validity; label-aware citations (#9).
9. Pre-render adversarial check in both directions, stored in the record (#11).
10. Overclaim removed: mockups demonstrate the intended end-to-end user experience, not system reliability; §16 defines what must work, with acceptance tests (#10, #3).
11. Citation validation, retrieval-failure disclosure, conflicting-artifact handling, verdict-shopping resistance added (§9.3, §13).
