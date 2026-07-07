# Gate 2 Regression Rerun Checklist v0.1 - 2026-07-05

Status: open.

Purpose: prevent confusion between paper prompt edits and live GPT behavior.

## Current Prompt

Current paste-ready GPT instruction file:

`10_Product/Chief_Consigliere_GPT_Instructions_Gate2_v1.1_under8000.md`

This file implements the remediation batch described as "v0.9.1" in Claude's review, but versioned as v1.1 because v1.0 already existed in the repo.

## Blocking Clarification

Claude's note stated a different F1-F9 numbering. That numbering conflicts with the active repo file:

`06_Testing/Failure_Taxonomy_F1_F9_v0.1.md`

The active repo taxonomy wins. The GPT prompt must use:

| Code | Active repo meaning |
| --- | --- |
| F1 | Clearance failure |
| F2 | Escalation failure |
| F3 | Source / hallucination failure |
| F4 | Confidentiality / data-minimization failure |
| F5 | Unsafe first-step failure |
| F6 | Misrouting failure |
| F7 | Overconfidence / proportionality failure |
| F8 | Poor usability under pressure |
| F9 | Textbook / wrong-audience failure |

No alternate F-numbering is adopted.

## Rerun Path

1. Tom installs v1.1 in the GPT Instructions field and clicks **Update**.
2. Tom removes duplicate Knowledge files if ChatGPT shows duplicate copies.
3. Tom uploads / confirms Knowledge contains:
   - `04_Methodology/Compliance_Risk_Assessment_Standards_First_v0.1.md`
   - `10_Product/Chief_Consigliere_Response_Front_Door_Rules_v0.1.md`
4. TC01 and TC10 transcript content issues remain pending from the prior run.
5. Fix TC01 and TC10 transcripts.
6. Rescore the corrected transcript set.
7. Run full 10-case cold rerun on the updated v1.1 GPT.
8. Run TC-S4 as a Stage 4 adversarial regression.
9. Score substance and rendering separately.
10. Gate verdict only after transcript evidence, not paper verification.

## Change Log

v0.1 - created rerun checklist after v1.1 prompt remediation.
