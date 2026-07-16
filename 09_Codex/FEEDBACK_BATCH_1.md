# FEEDBACK BATCH 1 — Stage 0b Closure + Scope-Creep Park Call

Response date: 2026-07-10 (Claude session; exact Zurich clock time not available to this agent — Codex/Tom should timestamp the actual edit on execution).
Source: Tom's direct statement in-session ("Employer approval is granted"), 10.07.2026 — not yet a written memo on file. Cross-checked against `00_Project/WHERE_ARE_WE.md`, `00_Project/Current_Sprint.md`, and the current Project Instructions phase block.

## Item 1 — ACT: Close Stage 0b across status files

**Verdict: ACT.**

Change the Stage 0b line from OPEN to CLOSED in every file that carries the phase block. Do not touch Stage 0a, Gate 1, Gate 2, or Stage 4 lines — only Stage 0b changes.

Replace:
`Stage 0b (OPEN): employer approval required before any commercial/external step. Checked at Stage 3/5 entry - no per-session reminders.`

With:
`Stage 0b (CLOSED, 10.07.2026): employer approval granted, confirmed directly by Tom in session. Written memo on file recommended for evidence-trail consistency with Stage 0a — not yet created as of this batch.`

Files to edit (keep identical text in all three):
1. `00_Project/WHERE_ARE_WE.md` — Current Phase block.
2. `00_Project/Current_Sprint.md` — Current Phase block.
3. The current governing Project Instructions file (repo showed both a v0.4 and a v0.4.7 phase block in different locations during this review — resolve to whichever is the single current file per the repo-layout rule and that file's own "this file wins" clause before editing; do not edit a superseded copy).

**Explicit non-implications — do not act on these without a separate, later instruction:**
- This does NOT mean Stage 3 or Stage 5 has been entered.
- This does NOT mean Gate 4 has been passed (still requires ≥60 journaled real uses, override rate trending down across two consecutive quarters, zero confidentiality incidents, escalation triggers firing correctly every time).
- This does NOT authorize branding, second-agent, or app work. That is a separate gate (Stage 4 discipline, Development Plan v0.3 §4), untouched by employer approval.

## Item 2 — PARK: 10_Product branding / market-positioning material

**Verdict: PARK (not discard — material is useful, just early).**

Files affected: `10_Product/European_Market_Positioning_v0.1.md`, `10_Product/Product_Strategy_Trusted_Companion_v0.1.md`, and any other commercial-notes content in `10_Product/`.

Action: no file moves. Add a one-line status note to each file (or one shared cover note referencing all of them):
`Parked pending next quarterly calibration review. Stage 4 discipline currently prohibits branding/positioning work absent a formal review reopening the question (Development Plan v0.3 §4). Stage 0b closing (10.07.2026) does not reopen this on its own — different gate, confirmed in Claude session 10.07.2026.`

Log this park call at the next quarterly calibration review (Development Plan v0.3 §5.5) rather than acting on the material now.

## Explicitly excluded from this batch

`Register_Preference_Layer_Design_Note_v0.1.md` (staged 10.07.2026 in `ACI-OS_Claude_Staging`) is deliberately NOT included here. It carries 3 unresolved open questions for Tom and has received no act/park/discard verdict. Do not process it under Hard Constraint 6 until Tom answers those questions in a later batch.

## Logging

Log the Item 1 and Item 2 actions in `09_Codex/Claude_Staging_Move_Log.md` using the existing log format, with `action: edited` for Item 1 and `action: parked` for Item 2.
