# GPT Package Review - 2026-07-10 v0.1

Review timestamp: 2026-07-10 14:08:43 +02:00 Europe/Zurich

Status: completed package review for current Chief Consigliere GPT instructions and Knowledge bundle.

Purpose: record what recent ACI-OS work should change in the GPT package, what should remain Codex/repo-only, and what should stay parked.

## Scope Reviewed

Reviewed recent work from 2026-07-03 to 2026-07-10:

- Gate 2 and post-Gate-2 behavior files.
- GPT instruction versions through v2.1.
- GPT Knowledge Pack and bundle builder.
- Document Standards.
- Source Register and intelligence-radar additions.
- Claude staging outputs.
- Founder-method additions: leadership doctrines and Last Control case.

## Findings

1. The GPT package needed a new instruction version.
   - Reason: v2.1 was already 7,930 characters and did not include the new response timestamp rule or the D22 audience doctrine.
   - Action: created `Chief_Consigliere_GPT_Instructions_Gate2_v2.2_under8000.md`.

2. The GPT Knowledge Pack and bundle builder were out of sync.
   - Reason: the builder already included more files than the visible upload list.
   - Action: rewrote `Chief_Consigliere_GPT_Knowledge_Pack_v0.1.md` around the one-file bundle as the controlling upload method.

3. `Kruk_Way_Leadership_v0.1.md` is approved for GPT Knowledge.
   - Reason: D22 changes answer form by audience and supports the product's short-first, top-manager reality.
   - Integration rule: use D22 as an audience/output-shape rule, but the no-clearance rule still wins.

4. `Case_The_Last_Control_v1.0.md` is approved for GPT Knowledge.
   - Reason: useful as ethics, sports/media, teaching, governance, and Mirror-mode pattern.
   - Integration rule: knowledge only; it is not a legal rule and not a new compliance-program element.

5. `The_Kruk_Way_v0.3.md` should not be uploaded as live GPT Knowledge.
   - Reason: `The_Kruk_Way_v0.4.md` supersedes it as master index, and approved operational content is already distilled into active method files.

6. The intelligence radar files should remain Codex/research operating material.
   - Reason: they guide recurring reports and source monitoring; they are not runtime behavior for the Chief GPT.

7. Claude staging protocol and move logs should remain Codex-only.
   - Reason: they govern repository intake, not user-facing GPT behavior.

8. Parked Claude development plans remain parked.
   - Reason: they were not absorbed into the current product behavior under the external-input discipline.

## Package Changes Made

- New GPT instruction file: `10_Product/Chief_Consigliere_GPT_Instructions_Gate2_v2.2_under8000.md`.
- Updated bundle builder: `10_Product/Build_GPT_Knowledge_Bundle.ps1`.
- Updated upload guide: `10_Product/Chief_Consigliere_GPT_Knowledge_Pack_v0.1.md`.
- Bundle source set expanded with:
  - `03_Kruk_Principles/Kruk_Way_Leadership_v0.1.md`
  - `03_Kruk_Principles/Case_The_Last_Control_v1.0.md`

## Conflict Resolutions

1. D22 uses "GO / NO-GO / GO-IF" language for top managers, but the project's no-clearance rule controls.
   - Resolution: GPT v2.2 instructs the model to avoid bare GO for compliance/legal risk and to use HOLD, NO-GO, GO-IF, or decision options unless mandate and process clearly permit approval wording.

2. GPT Knowledge source set exceeds the practical individual upload limit.
   - Resolution: one-file bundle is now the controlling upload method.

3. Recent research reports are useful but not core behavior.
   - Resolution: keep radar reports out of GPT Knowledge unless a future report produces an ACT decision for methodology or source-register change.

## Current GPT Package

Instruction box:

`10_Product/Chief_Consigliere_GPT_Instructions_Gate2_v2.2_under8000.md`

Knowledge upload:

`10_Product/Chief_Consigliere_GPT_Knowledge_Bundle_v0.1.md`

Upload guide:

`10_Product/Chief_Consigliere_GPT_Knowledge_Pack_v0.1.md`

## Change Log

v0.1 - created after full review of recent ACI-OS work and GPT package connections.
