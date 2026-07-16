# GPT Package Review - 2026-07-10 v0.6

Review timestamp: 2026-07-10 22:00:50 +02:00 Europe/Zurich

Status: completed package review for Chief Consigliere GPT v2.7 stable request-code insert.

Purpose: make calibration usable by testers who do not remember the code system, while preserving the future mobile-app pattern.

## Product Decision

The 1/2/3 + A/B/C + X/Y/Z calibration should be visible before testing, not only remembered by Tom.

| Placement | Decision | Reason |
| --- | --- | --- |
| GPT Instructions | Add code-prefix behavior. | The GPT must obey `2BY` if the tester types it. |
| GPT Description | Add short code hint. | Testers see it before starting. |
| Conversation Starters | Make the first starter the stable insert/example. | The starter teaches and tests the pattern at the same time. |
| Future Mobile App | Treat the same codes as UI controls later. | Buttons or chips should replace memorized text entry. |

## Stable Insert

```text
Use request code before the scenario:
1/2/3 speed, A/B/C shape, X/Y/Z output.
Example: 2BY An employee asks if they can invite a client to a plant visit with travel or sightseeing.
```

## Files Updated

| File | Change |
| --- | --- |
| `10_Product/Chief_Consigliere_GPT_Instructions_Gate2_v2.7_under8000.md` | New current instruction file with code-prefix behavior. |
| `04_Methodology/Answer_Calibration_Dials_v0.1.md` | Added stable user insert for GPT starters and future mobile-app helper text. |
| `10_Product/Chief_Consigliere_GPT_Editor_Config_v0.1.md` | Added code hint to description and made first starter the stable insert. |
| `10_Product/Build_GPT_Knowledge_Bundle.ps1` | Points bundle header to v2.7. |
| `10_Product/Chief_Consigliere_GPT_Knowledge_Pack_v0.1.md` | Upload guide points to v2.7. |
| `AGENTS.md` | Project-level simple triage rule now accepts code prefixes. |
| `10_Product/Chief_Consigliere_GPT_Knowledge_Bundle_v0.1.md` | Regenerated after v2.7 changes. |

## Change Log

v0.6 - documented v2.7 stable request-code insert and mobile-app calibration bridge.
