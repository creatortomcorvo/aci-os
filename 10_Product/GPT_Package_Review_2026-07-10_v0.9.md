# GPT Package Review - 2026-07-10 v0.9

Review timestamp: 2026-07-10 23:06:57 +02:00 Europe/Zurich

Status: completed package review for Chief Consigliere GPT v2.10 speed-precedence fix.

Purpose: fix the observed `1AY` behavior where a fast yes/no-if table answer became too long and slow.

## Diagnosis

The output dial was overpowering the speed dial. `Y Table Checklist` caused the model to produce a structured mini-memo even when the user selected `1 Fast`.

## Product Decision

Speed wins over output.

| Code Pattern | Required Behavior |
| --- | --- |
| `1X` | Fast answer only. |
| `1Y` | Fast answer plus compact table, maximum 5 rows. |
| `1Z` | Brief memo skeleton only. |
| `2Y` | Normal structured table checklist. |
| `3Z` | Fuller memo/document, still no legal advice or clearance. |

## Test Case

Use this GPT Builder starter:

```text
1AY My CEO wants to invite a CEO of an old supplier to a sport event as a token of appreciation. I need to say yes/no fast; what do I do?
```

Expected behavior: fast verdict first, compact table only, no long file note, no mini-memo.

## Files Updated

| File | Change |
| --- | --- |
| `10_Product/Chief_Consigliere_GPT_Instructions_Gate2_v2.10_under8000.md` | New current instruction file with speed-precedence rule. |
| `04_Methodology/Answer_Calibration_Dials_v0.1.md` | Added speed-precedence table. |
| `10_Product/Chief_Consigliere_GPT_Editor_Config_v0.1.md` | Added `1AY` CEO-hospitality test starter. |
| `10_Product/Build_GPT_Knowledge_Bundle.ps1` | Points bundle header to v2.10. |
| `10_Product/Chief_Consigliere_GPT_Knowledge_Pack_v0.1.md` | Upload guide points to v2.10. |
| `AGENTS.md` | Project-level simple triage rule updated. |
| `10_Product/Chief_Consigliere_GPT_Knowledge_Bundle_v0.1.md` | Regenerated after v2.10 changes. |

## Change Log

v0.9 - documented v2.10 speed-precedence fix for `1AY`.
