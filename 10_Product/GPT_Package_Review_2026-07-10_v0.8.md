# GPT Package Review - 2026-07-10 v0.8

Review timestamp: 2026-07-10 22:39:09 +02:00 Europe/Zurich

Status: completed package review for Chief Consigliere GPT v2.9 request-code onboarding speed fix.

Purpose: fix the observed 44-second delay and unnecessary source footer in the request-code onboarding starter.

## Diagnosis

The starter was being treated like a substantive compliance answer instead of UI help. That triggered unnecessary reasoning, full-method context, and a `SOURCES / BASIS` footer.

## Product Decision

Request-code onboarding is UI help.

| Requirement | Rule |
| --- | --- |
| Timing | Answer immediately. |
| Research | Do not research or source-check. |
| Footer | Do not add `SOURCES / BASIS`. |
| Content | Explain the code system, give one example, and ask the user to try. |

## Files Updated

| File | Change |
| --- | --- |
| `10_Product/Chief_Consigliere_GPT_Instructions_Gate2_v2.9_under8000.md` | New current instruction file with immediate UI-help override. |
| `04_Methodology/Answer_Calibration_Dials_v0.1.md` | Clarified that request-code onboarding is immediate UI help. |
| `10_Product/Chief_Consigliere_GPT_Editor_Config_v0.1.md` | Editor checklist now tests for no `SOURCES / BASIS` footer. |
| `10_Product/Build_GPT_Knowledge_Bundle.ps1` | Points bundle header to v2.9. |
| `10_Product/Chief_Consigliere_GPT_Knowledge_Pack_v0.1.md` | Upload guide points to v2.9. |
| `AGENTS.md` | Project-level rule updated for immediate UI-help onboarding. |
| `10_Product/Chief_Consigliere_GPT_Knowledge_Bundle_v0.1.md` | Regenerated after v2.9 changes. |

## Change Log

v0.8 - documented v2.9 request-code onboarding speed fix.
