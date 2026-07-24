# Compliance Control Design Rules D28 — Amendment Spec v0.1

Status: amendment spec for Codex. Filed 2026-07-22 from a Claude working session; content originates from Tom's own drafted Codex instruction, reviewed and corrected in that session before filing. Per project discipline (external-AI-input rule), this is a proposal awaiting Codex's OK / MODIFY / DISCARD before any implementation.

Scope: `03_Kruk_Principles/Regulatory_Design_Rules_D28_v1.0.md`, plus the cross-references listed in the "Cross-Reference Update Required" section below.

## Purpose And Rationale

The current D28 doctrine is directionally good but too generic to be auditable, automation-ready, or directly usable by business teams. This amendment makes it a practical, risk-based, proportionate rule for deciding whether an issue needs a policy, procedure, guideline, escalation rule, workflow, system control, or case-by-case handling — without silently telling the company to regulate *more*. The design principle behind every change below:

> D28 should not tell the company to regulate more; it should tell the company to regulate only as much as needed, with the right instrument, named accountability, evidence, proportionality, and review.

This is consistent with DOJ ECCP expectations that compliance programs be risk-tailored, integrated into operations, understood by employees, tested, and revised based on lessons learned, and with ISO 37301's requirement that compliance obligations and risks be identified, controlled, documented where necessary, reviewed, and continually improved. It also fits the AD1–AD4 methodology: D28 should help classify the right instrument (policy, procedure, process, guideline, or SOP) and avoid a "policy written like a procedure," identifying triggers, decision points, roles, evidence, escalation paths, and automation potential.

## Important: This Is An Amendment, Not A Silent Deletion

The current live file contains more than the seven numbered rules: it also has an Instrument Ladder table (with use/avoid guidance), a One-Screen Flow decision table, a Product Behavior Rule section that operationally binds this doctrine into ACI-OS's own behavior, a Phrase Bank, and Article Candidates. "Replace the core rules, not lightly edit them" applies to the numbered-rules section — it does **not** mean deleting the sections below it. Every section below states explicitly whether it is replaced, amended, or carried forward unchanged.

## Step 1 — Title And Identifier

Change the in-file H1 from:

`# Regulatory Design Rules D28 v1.0`

to:

`# Compliance Control Design Rules D28 v1.1`

Keep the identifier **D28** unchanged — it is used as shorthand across at least eight other repo files (listed below) and should not be renumbered. Keep the filename `Regulatory_Design_Rules_D28_v1.0.md` as-is for path stability, unless Codex and Tom explicitly decide together to rename it — if it is renamed, every cross-reference in the list below must be updated to the new path, not just the in-file title.

## Step 2 — Replace The Core Rule Framing

Replace the current opening framing:

> Do not write a policy just because a topic exists. First decide whether the behavior needs a rule, a procedure, a system control, guidance, an escalation line, or only case-by-case judgment.

with:

> Do not write a policy just because a topic exists. These rules guide whether and how to regulate an activity, decision, transaction, relationship, or recurring business practice. First decide whether it needs a rule, a procedure, a system control, guidance, an escalation line, or only case-by-case judgment.

Keep the existing mandate-wins sentence that follows it (if a law, regulator, certification, contract, board mandate, or binding internal governance requirement requires a document or control, that requirement wins; D28 then decides the leanest defensible way to implement it) — it already does the job of Tom's proposed "Obligation Test" and should be promoted into the numbered table below rather than duplicated as separate prose.

## Step 3 — Replace The Numbered Rules Table

Replace the current seven-row table with this nine-row table, **keeping the table format** (`Rule | Name | Working test | Result`) rather than converting to numbered prose — the stated goal is auditability and automation-readiness, and a table is more machine-parseable and scannable than paragraphs. This preserves the current file's strongest structural asset instead of trading it away.

| Rule | Name | Working test | Result |
|---|---|---|---|
| 1 | Obligation test | Does a law, regulation, contract, sports-body rule, governance mandate, regulator expectation, or management requirement require a document, control, approval, record, or escalation path? | If yes, that requirement wins; implement the leanest defensible way. If no, continue. |
| 2 | Rarity test | If it happens rarely and is not mandated, can a named decision-maker handle it? | Use a named owner and short documented-judgment record, not a full rule. |
| 3 | Standardization test | Is risk, frequency, detectability, reversibility, regulatory expectation, repeated business uncertainty, or control value high enough to justify a repeatable rule or process? | High risk can justify a rule even at low frequency; high-volume low-risk activity can justify a light standard. If neither applies, do not regulate; monitor if needed. |
| 4 | Tripwire test | For high-risk rare events, is a short mandatory escalation rule enough instead of a long procedure? | Create a one-line escalation rule that names the trigger, escalation owner, timing, and minimum evidence required. |
| 5 | Reality test | Will employees understand it, can business teams follow it, can systems support it, and will management enforce it consistently? | If no, channel the behavior with guardrails instead of pretending to prohibit it. |
| 6 | Lowest sufficient instrument | What is the lightest effective instrument that controls the risk? | Choose from: no instrument (case-by-case only), FAQ / example / guidance, checklist, one-line escalation rule, approval workflow, procedure, policy, training, monitoring, or embedded system control. Do not default to policy. |
| 7 | Authority currency | Will this rule strengthen or weaken respect for the rulebook? | Dead, ignored, or unenforced rules devalue all other rules — do not adopt a rule the organization will not enforce. |
| 8 | Proportionality test | Are control burden, delay, chilling effect, and business disruption proportionate to the prevention, detection, accountability, and remediation benefit? | If the burden exceeds the benefit, simplify the instrument or do not regulate. |
| 9 | Living test | Can this be reviewed after one year, and earlier on trigger? | Review on: one-year mark, legal change, incident, audit finding, control failure, repeated questions, new market, acquisition, business-model change, new technology, or enforcement trend. Keep, simplify, strengthen, or retire based on evidence. |

Two corrections against Tom's original draft, both already folded into the table above:

- **"No instrument (case-by-case only)" is explicitly listed first** in row 6's instrument options. Tom's draft list — FAQ, guidance, checklist, escalation rule, approval workflow, procedure, policy, training, monitoring, system control — omitted the "do not regulate at all" outcome, which contradicts the doctrine's own stated purpose. This must not be silently dropped.
- **Authority Currency is preserved as row 7**, not deleted. It is cited by name in `03_Kruk_Principles/Kruk_Way_Operating_Doctrines_v0.1.md` (rule 25, and the phrase-bank line "Dead rules tax living rules"). Dropping it from D28 would leave that file citing a principle its own source document no longer contains.
- **"Audit finding" is intentionally left out of row 1 (Obligation test)** and appears only in row 9 (Living test) — an audit finding is evidence that creates a remediation obligation, not itself a hard external mandate on the same footing as a law or contract. Keeping that distinction clean matches the file's own existing mandate-vs-judgment framing.

## Step 4 — Update The Instrument Ladder Table (Carry Forward, Amended)

Keep this table; do not delete it. Add a "No rule" row at the top consistent with Step 3, and align the escalation-rule row with the new Tripwire test's required fields:

| Instrument | Use when | Avoid when |
|---|---|---|
| No rule | Rare, low-risk, already managed by judgment | People need repeatable guidance or evidence |
| FAQ / guidance / example | Users need orientation, not binding steps | Consequences or approvals are required |
| Checklist | A sequence needs to be followed but doesn't need mandate weight | The steps require named accountability or escalation |
| One-line escalation rule | High-risk rare events need fast routing; must state trigger, escalation owner, timing, and minimum evidence | The process repeats often enough to standardize |
| Approval workflow | A decision needs a named approver and record before proceeding | The matter is low-risk or already delegated |
| Policy | The organization needs a clear rule and mandate | Operational detail would make it unreadable |
| Procedure | People need sequence, owner, evidence, and timing | The issue is only a principle or position |
| Policy + procedure | Both mandate and operation are needed | One document would become too long |
| Training | The gap is understanding, not control design | The real gap is a missing control or escalation path |
| Monitoring | Ongoing visibility into a control's effectiveness is needed | The control itself hasn't been designed yet |
| Embedded system control | The behavior is frequent and must be forced or evidenced | Human judgment is still needed case by case |

## Step 5 — One-Screen Flow Table (Carry Forward, Amended Wording Only)

Keep this table; do not delete it. Update the terminology in-place to match the renamed/renumbered rules (e.g., step references to "risk x frequency" become "standardization test," references to "enforcement can be justified" become "proportionality test"), but the flow logic itself — including the "do not regulate" branch at step 3 — stays intact.

## Step 6 — Product Behavior Rule (Carry Forward, Update Terminology Only)

Keep this section unchanged in function — it is what makes D28 operationally binding on ACI-OS's own behavior:

> When a user asks for a policy, procedure, template, rule, standard, checklist, guidance, or control design, ACI-OS must not jump directly to drafting. First run D28 silently or visibly: (1) check whether the user's company already has a governing document; (2) check whether law, regulator, certification, contract, board mandate, or internal governance requires a document; (3) decide the lowest sufficient instrument; (4) if drafting is still needed, draft only that instrument.

Only update any internal references to renamed rules (e.g., if this section is later expanded to name specific rule numbers).

## Step 7 — Phrase Bank And Article Candidates (Carry Forward Unchanged)

Keep both sections as-is. "Dead rules tax living rules" now maps to row 7 (Authority currency) in the amended table; no wording change needed.

## Step 8 — Implementation Note (New, Optional Section)

Add this new section after the numbered rules table:

> **Implementation note.** For each D28 decision, record: issue / conduct area; obligation source, if any; risk and frequency assessment; selected instrument; owner; required evidence or record; escalation trigger; review date or review trigger.
>
> Do not add hardcoded monetary thresholds in D28. Thresholds that vary by country or business line belong in the relevant procedure or local annex.

## Cross-Reference Update Required

D28 is referenced in at least these files. Codex should check each and update terminology/wording where it quotes now-renamed rules (e.g. "enforcement-harm balance" → "proportionality test"), rather than leaving them to drift out of sync with the amended source:

- `03_Kruk_Principles/Kruk_Way_Operating_Doctrines_v0.1.md` — rule 25 and rule 6 cite D28 by name and paraphrase its rules; reconcile wording.
- `00_Project/PRODUCT_PRINCIPLES.md`
- `10_Product/Chief_Consigliere_Response_Front_Door_Rules_v0.1.md`
- `04_Methodology/Router_Spec_v1.0.md`
- `04_Methodology/Control_Medium_Dimension_v0.1.md`
- `10_Product/Chief_Consigliere_GPT_Knowledge_Pack_v0.1.md`
- `10_Product/mobile_web_app_mvp/knowledge_manifest.json` — verify whether this only references a file path (no change needed) or embeds content.

**Do not hand-edit** `10_Product/Chief_Consigliere_GPT_Knowledge_Bundle_v0.1.md` — it appears to be a generated artifact (see `10_Product/Build_GPT_Knowledge_Bundle.ps1`). Regenerate it from source after D28 and its cross-references are updated.

## Versioning

Bump `03_Kruk_Principles/Regulatory_Design_Rules_D28_v1.0.md` to v1.1 (amendment, not a ground-up replacement — structure, tables, and most section content are preserved, so this is a substantial revision of an existing doctrine, not a new one). Add a change-log line at the bottom of the file in the repo's standard format, e.g.:

> v1.1 — Renamed to Compliance Control Design Rules; broadened scope beyond "behavior" to activity/decision/transaction/relationship/recurring practice; added explicit Obligation Test and Tripwire Test rows; expanded Standardization Test risk factors; expanded Proportionality Test language; expanded Living Test review triggers; preserved Authority Currency and the "no instrument" outcome from v1.0; added Implementation Note.

## Acceptance Criteria

Codex should treat the amendment as successful only if the revised D28:

- is no longer limited to "behavior";
- clearly distinguishes mandatory obligations from discretionary controls;
- prevents over-regulation of rare, non-mandated issues, and explicitly retains "no instrument / case-by-case only" as a valid outcome;
- gives high-risk rare events a clear escalation tripwire with trigger, owner, timing, and evidence;
- preserves the Authority Currency test and keeps `Kruk_Way_Operating_Doctrines_v0.1.md` consistent with it;
- preserves the "lowest sufficient instrument" principle, the Instrument Ladder table, the One-Screen Flow table, and the Product Behavior Rule — updated in wording, not deleted;
- includes proportionality and reality/usability tests;
- includes a review mechanism after one year and upon triggering events;
- is presented in the same table format as the current file, not converted to prose;
- remains short enough to function as a design rule, not a procedure;
- has all listed cross-references checked, with the GPT Knowledge Bundle regenerated rather than hand-edited.

## Reply Protocol

Reply OK / MODIFY / DISCARD before building, per standing project discipline for externally-proposed changes.

## Change Log

- v0.1 — created. Captured Tom's original D28 amendment instruction, corrected to restore the "no instrument" outcome and the Authority Currency test, specified which existing sections (Instrument Ladder, One-Screen Flow, Product Behavior Rule, Phrase Bank) carry forward rather than being silently dropped, kept the table format for automation-readability, removed "audit finding" from the Obligation Test list, and added the cross-reference and versioning instructions.
