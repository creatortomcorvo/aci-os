# GPT Package Review - 2026-07-10 v0.4

Review timestamp: 2026-07-10 15:27:00 +02:00 Europe/Zurich

Status: completed package review for Chief Consigliere GPT v2.5 simple triage.

Purpose: correct the v2.4 calibration concept into Tom's requested operating behavior: short first answer, one option question, then concrete answer after the user chooses.

## Corrected Behavior

| Step | Required Behavior |
| --- | --- |
| 1 | Give a safe first answer immediately. Target <=300 characters, hard cap 500. |
| 2 | Ask one triage question using coded choices. |
| 3 | Wait for the user's choice. |
| 4 | Give the concrete answer in the chosen format. |

## Triage Question

Use this style:

`Choose format: speed 1 Fast / 2 Structured / 3 Deep; shape A Yes-No-If / B Options / C Analysis; output R Reply / T Table Checklist / M Memo. Example: 2-B-T.`

## Files Updated

| File | Change |
| --- | --- |
| `04_Methodology/Answer_Calibration_Dials_v0.1.md` | Converted into simple triage sequence. |
| `10_Product/Chief_Consigliere_GPT_Instructions_Gate2_v2.5_under8000.md` | New current instruction file. |
| `10_Product/Build_GPT_Knowledge_Bundle.ps1` | Points bundle header to v2.5. |
| `10_Product/Chief_Consigliere_GPT_Knowledge_Pack_v0.1.md` | Upload guide points to v2.5. |
| `10_Product/Chief_Consigliere_GPT_Editor_Config_v0.1.md` | Editor config points to v2.5 and simple triage starter. |
| `AGENTS.md` | Project-level simple triage rule. |
| `10_Product/Chief_Consigliere_GPT_Knowledge_Bundle_v0.1.md` | Regenerated bundle. |

## Change Log

v0.4 - documented v2.5 simple triage correction.
