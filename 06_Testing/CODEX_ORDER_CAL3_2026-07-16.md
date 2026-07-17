# CODEX ORDER - CAL-3: THE CONTINUATION ROW (2026-07-16)

Status: queued / not implemented.
Sequence: Phase-2 item. It rides behind Gate 2 verification and behind CAL phase-1 commit from the 16.07 v2 order. Do not interrupt open work for this.
Source: Tom via Claude, filed by Codex on 2026-07-16.

Standing format note: every order explains WHAT to change and WHY. The reasoning is part of the instruction, so implementation decisions Codex must improvise stay aligned with intent.

## Why

Tom's observation on 2026-07-16: the Shape chips (Verdict / Advice / Plan / Wording) and the post-answer buttons (Deeper / Make checklist / Turn into memo) feel like near-duplicates because both produce kinds of output.

Resolution: the two rows differ on one axis: BEFORE vs AFTER; steering vs transforming.

- Shape (pre-ask) tells the router what kind of thinking to produce. It picks the entry station on the answer pipeline: know -> understand -> judge -> choose -> execute -> perform.
- The post-answer row transforms an answer that already exists. It travels the same pipeline without re-asking: Deeper goes down (more depth, same station); checklist/memo/wording go forward (judgment -> execution or communication form).

Consequence: continuation is the primary navigation of the product. Pre-ask shapes are a shortcut for users who already know what they want, not a toll gate. Users think in journeys ("show me your read; now commit; now give me the words"), not in correctly configured first pulls.

## Doctrine Line To Add

Add verbatim to `04_Methodology/Router_Spec_v1.0.md` as Section 1.8:

> Shape chooses the entry station; the continuation row travels the pipeline. Every shape must be reachable from every answer. Continuation is the primary navigation; pre-ask shape selection is the expert shortcut.

## Changes

### 1. Complete The Continuation Row

Current row: Deeper / Make checklist / Turn into memo.

Add:

- `Verdict ->`
  - Output: collapse current answer to D22 executive form: GO / NO-GO / GO-IF verdict line -> one-sentence reason -> one-sentence condition -> existing analysis below.
  - Why: the most valuable journey is advice -> commitment. The user reads the analysis, then wants the call.

- `Give me the wording`
  - Output: exact words, message, script, or escalation line that executes the current answer.
  - Why: analysis without the sentence to send still leaves the officer alone at the keyboard.

Prompt rule for both: transform the existing answer. Do not re-answer the original question from scratch. Same routing cell, new stopping point. Label transformed outputs with a small rubric: `FROM YOUR PREVIOUS ANSWER`.

### 2. Make The Row Context-Aware

Rules, in priority order:

- Never offer the shape the answer already has.
- After a Verdict answer: suppress `Verdict ->`.
- After a Wording answer: replace `Give me the wording` with `Formal memo version`.
- After a Plan/checklist answer: suppress `Make checklist`.
- Maximum 5 actions visible. If context suppresses some, do not backfill with extras.
- Fixed order: `Deeper down` / `Verdict ->` / `Make checklist` / `Turn into memo` / `Give me the wording`.
- Distress mode (TC11): do not render the continuation row at all.
- Employee-audience answers: suppress `Verdict ->` and `Turn into memo`.

### 3. Telemetry

Log each continuation tap as:

- `event_type`: `continuation`
- `action`: `deeper`, `verdict`, `checklist`, `memo`, or `wording`
- `source_answer_hash`
- `routing_cell`

Why: continuation taps show which journeys users actually take and later inform Agent #2 selection and pattern-bank priorities.

### 4. Repo Amendments

- `04_Methodology/Router_Spec_v1.0.md`
  - Add Section 1.8 doctrine line.
  - Add Section 1.9 continuation transforms table: action / target type / prompt rule.

- Design System
  - Version to v1.1.1.
  - Add continuation row component.
  - Secondary-button style per existing tokens.
  - `Deeper down` visually first and slightly emphasized.
  - Row sits directly under answer card and wraps on mobile.

- Core Spec
  - Add one paragraph in front-door section: continuation row is primary navigation; reference Router Spec Section 1.8.
  - Add one change-log line.

- Learning inbox schema
  - Add `continuation` to `event_type` enum.

## Acceptance

- After an Advice answer: row shows Deeper / Verdict -> / Make checklist / Turn into memo / Give me the wording.
- Tap `Verdict ->`: output opens with GO / NO-GO / GO-IF line, reason, condition, and label `FROM YOUR PREVIOUS ANSWER`; original analysis below.
- After a Verdict answer: no `Verdict ->` button.
- After a Wording answer: `Formal memo version` replaces `Give me the wording`.
- Employee-audience answer: no `Verdict ->`, no `Turn into memo`.
- Distress-protocol answer: no continuation row.
- One continuation tap creates inbox event with action, source hash, and routing cell.

## Report Back When Implemented

Mandatory first line: Gate 2 verification status + CAL phase-1 commit status.

Then report:

- Path of amended Router Spec with Sections 1.8 and 1.9 visible.
- Screenshots per acceptance item.
- Sample continuation event.

## Change Log

v1.0 - CAL-3 queued: continuation row completed conceptually (Verdict ->, Wording), context-awareness rules, telemetry, doctrine Section 1.8, and standing order-format rule recorded.
