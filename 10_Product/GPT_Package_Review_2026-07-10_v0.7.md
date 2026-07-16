# GPT Package Review - 2026-07-10 v0.7

Review timestamp: 2026-07-10 22:26:34 +02:00 Europe/Zurich

Status: completed package review for Chief Consigliere GPT v2.8 request-code onboarding starter.

Purpose: improve tester usability by making the first conversation starter teach the request code before asking for a scenario.

## Product Decision

The first conversation starter should not merely hint at the request code. It should open a short onboarding interaction:

| Step | Required Behavior |
| --- | --- |
| 1 | Explain that the user can put a three-character code before the scenario. |
| 2 | Define speed, answer shape, and output. |
| 3 | Give one concrete `2BY` example. |
| 4 | Ask the user to try with their own scenario. |

## Starter Text

Use this in GPT Builder:

```text
You can request code before the scenario: 1/2/3 speed, A/B/C shape, X/Y/Z output.
```

Expected GPT response:

```text
Use a three-character code before your scenario:

Speed
1 = Fast - brief, immediate direction
2 = Structured - practical reasoning with enough detail
3 = Deep - comprehensive analysis

Answer shape
A = Yes-No-If - direct conditional answer
B = Options - available paths and trade-offs
C = Analysis - deeper assessment and reasoning

Output
X = Answer only
Y = Table checklist
Z = Memo or document

Example
2BY Can we invite a client to a plant visit and pay for travel and sightseeing?

This requests a structured answer, presented as options, with a table checklist.

Your turn: What scenario would you like to discuss? Start with your code, for example 1AX, 2BY, or 3CZ, then describe the situation.
```

## Files Updated

| File | Change |
| --- | --- |
| `10_Product/Chief_Consigliere_GPT_Instructions_Gate2_v2.8_under8000.md` | New current instruction file with request-code onboarding behavior. |
| `04_Methodology/Answer_Calibration_Dials_v0.1.md` | Stable insert changed into mini-onboarding text. |
| `10_Product/Chief_Consigliere_GPT_Editor_Config_v0.1.md` | First conversation starter changed to the request-code onboarding prompt. |
| `10_Product/Build_GPT_Knowledge_Bundle.ps1` | Points bundle header to v2.8. |
| `10_Product/Chief_Consigliere_GPT_Knowledge_Pack_v0.1.md` | Upload guide points to v2.8. |
| `AGENTS.md` | Project-level rule updated for request-code onboarding behavior. |
| `10_Product/Chief_Consigliere_GPT_Knowledge_Bundle_v0.1.md` | Regenerated after v2.8 changes. |

## Change Log

v0.7 - documented v2.8 request-code onboarding starter.
