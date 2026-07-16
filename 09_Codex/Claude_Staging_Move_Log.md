# Claude Staging Move Log

Status: active append-only move log.

Purpose: record every `process staging` move from `ACI-OS_Claude_Staging` into the ACI-OS repo.

Staging runs are logged below.

## 2026-07-10 13:47:28 +02:00 Europe/Zurich

- source: `C:\Users\Tomasz Kruk\Documents\ACI-OS\Claude\Kruk_Way_Leadership_v0_1.md`
- repo: `03_Kruk_Principles/Kruk_Way_Leadership_v0.1.md`
- action: copied
- reason: new Kruk leadership doctrine file; staged file had a usable internal `Repo:` line.
- notes: original preserved in staging per Tom's no-delete instruction.

- source: `C:\Users\Tomasz Kruk\Documents\ACI-OS\Claude\The_Kruk_Way_v0_3.md`
- repo: `03_Kruk_Principles/The_Kruk_Way_v0.3.md`
- action: copied
- reason: v0.3 Kruk Way master-index file belongs in current `03_Kruk_Principles` layout.
- notes: original preserved in staging; root-level older `The_Kruk_Way_v0_3.md` was not touched.

- source: `C:\Users\Tomasz Kruk\Documents\ACI-OS\Claude\Consigliere_Development_Plan_v0_1.md`
- repo: `99_Parked/Claude_Staging_Processed/Consigliere_Development_Plan_v0_1.md`
- action: parked
- reason: no `Repo:` header and content is superseded by current AGENTS.md / later phase records.
- notes: copied for record only; not absorbed into current methodology.

- source: `C:\Users\Tomasz Kruk\Documents\ACI-OS\Claude\Consigliere_Development_Plan_v0_3.md`
- repo: `99_Parked/Claude_Staging_Processed/Consigliere_Development_Plan_v0_3.md`
- action: parked
- reason: no `Repo:` header and content is superseded by current AGENTS.md / Gate records.
- notes: copied for record only; not absorbed into current methodology.

- source: `C:\Users\Tomasz Kruk\Documents\ACI-OS\Claude\ACI_OS_Document_Standards_v1_0.md`
- repo: `10_Product/ACI_OS_Document_Standards_v1_0.md`
- action: skipped
- reason: active canonical document-standards file already exists in current repo layout.
- notes: staged header pointed to old `00_foundation` path; repo-layout rule keeps current `10_Product` location. Original preserved in staging.

- source: `C:\Users\Tomasz Kruk\Documents\ACI-OS\Claude\TC11_distress_protocol.md`
- repo: `06_Testing/TC11_Distress_Call_Human_Moment_Protocol_v1.0.md`
- action: skipped
- reason: active TC11 distress protocol already exists in current `06_Testing` layout.
- notes: staged header used old `05_test_cases` path; current repo layout controls. Original preserved in staging.

- source: `C:\Users\Tomasz Kruk\Documents\ACI-OS\Claude\The_Kruk_Way_v0_4.md`
- repo: `03_Kruk_Principles/The_Kruk_Way_v0.4.md`
- action: skipped
- reason: active v0.4 Kruk Way file already exists and includes later integration notes.
- notes: original preserved in staging.

- source: `C:\Users\Tomasz Kruk\Documents\ACI-OS\Claude\files.zip`
- repo: `C:\Users\Tomasz Kruk\Documents\ACI-OS\Claude\files.zip`
- action: archive-inventoried
- reason: archive contents were listed; loose markdown files were treated as the active delivery set for this run.
- notes: archive preserved in staging; not extracted to avoid duplicating additional no-header files without explicit instruction.

- source: `C:\Users\Tomasz Kruk\Documents\ACI-OS\Claude\Case_The_Last_Control_v1_0.md`
- repo: `03_Kruk_Principles/Case_The_Last_Control_v1.0.md`
- action: copied
- reason: new Kruk teaching case and D27 doctrine; staged `Repo:` line normalized from Markdown-escaped underscores.
- notes: file appeared during verification after the initial staging inventory; original preserved in staging.

## 2026-07-10 22:53:28 +02:00 Europe/Zurich

- source: `Claude session paste: FEEDBACK BATCH 1 - Stage 0b Closure + Scope-Creep Park Call`
- repo: `00_Project/WHERE_ARE_WE.md`; `00_Project/Current_Sprint.md`; `AGENTS.md`
- action: edited
- reason: Item 1 ACT verdict; Stage 0b line changed from OPEN to CLOSED based on Tom's direct session confirmation.
- notes: Stage 0a, Gate 1, Gate 2, and Stage 4 lines were not changed. Stale "blocked by 0b" references in the same phase/status materials were corrected to separate-gate / not-entered wording. Written Stage 0b memo remains recommended.

- source: `Claude session paste: FEEDBACK BATCH 1 - Stage 0b Closure + Scope-Creep Park Call`
- repo: `10_Product/Commercial_Positioning_Park_Note_2026-07-10_v0.1.md`
- action: parked
- reason: Item 2 PARK verdict; commercial, branding, and market-positioning material is useful but premature.
- notes: no product files moved. `Register_Preference_Layer_Design_Note_v0.1.md` remains excluded and unprocessed.
