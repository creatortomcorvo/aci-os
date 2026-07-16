# GPT Package Review - 2026-07-10 v0.5

Review timestamp: 2026-07-10 15:56:30 +02:00 Europe/Zurich

Status: completed package review for Chief Consigliere GPT v2.6 triage visibility correction.

Purpose: align the GPT package with Tom's latest test feedback: the first answer must be fast, the triage menu must be visible, and the output dial must use X/Y/Z.

## Corrected Behavior

| Step | Required Behavior |
| --- | --- |
| 1 | Give a safe first answer immediately. Target <=300 characters, hard cap 500. |
| 2 | Show the triage menu vertically, not as one long line. |
| 3 | Wait for the user's code before giving the full answer. |
| 4 | Use `X` for no extra artifact, `Y` for table checklist, and `Z` for memo/document. |

## Required Triage Menu

```text
Choose speed:
1 Fast
2 Structured
3 Deep

Choose shape:
A Yes-No-If
B Options
C Analysis

Choose output:
X Nothing additional
Y Table Checklist
Z Memo

Recommended: 2BY
Reply with the code, e.g. 2BY.
```

## Files Updated

| File | Change |
| --- | --- |
| `04_Methodology/Answer_Calibration_Dials_v0.1.md` | Replaced R/T/M with X/Y/Z, made the menu vertical, and set 2BY as the checklist default. |
| `10_Product/Chief_Consigliere_GPT_Instructions_Gate2_v2.6_under8000.md` | New current instruction file. |
| `10_Product/Build_GPT_Knowledge_Bundle.ps1` | Points bundle header to v2.6. |
| `10_Product/Chief_Consigliere_GPT_Knowledge_Pack_v0.1.md` | Upload guide points to v2.6. |
| `10_Product/Chief_Consigliere_GPT_Editor_Config_v0.1.md` | Editor config points to v2.6 and tests visible triage. |
| `AGENTS.md` | Project-level simple triage rule updated. |
| `10_Product/Chief_Consigliere_GPT_Knowledge_Bundle_v0.1.md` | Regenerated after v2.6 changes. |

## Change Log

v0.5 - documented v2.6 X/Y/Z visible triage correction.
