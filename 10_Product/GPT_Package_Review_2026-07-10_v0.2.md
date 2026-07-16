# GPT Package Review - 2026-07-10 v0.2

Review timestamp: 2026-07-10 14:43:07 +02:00 Europe/Zurich

Status: completed package review for Chief Consigliere GPT v2.3 fast-first and table-checklist update.

Purpose: record the July 10 learning from a live hospitality/plant-visit test and the resulting GPT package changes.

## Trigger

User tested an employee-facing hospitality question: whether an employee can invite a client from France for sightseeing / a plant visit in Scotland.

The first answer was too slow and too long. The later checklist became useful when rendered as a table.

## Decisions

| Decision | Result |
| --- | --- |
| Fast first response | First substantive block after timestamp should be <=300 characters unless a full document is explicitly requested. |
| Research timing | Give safe first direction before research, source checking, or long reasoning. |
| Kruk Table Rule | Diligent checks and to-dos render as tables by default. |
| Learning note | Stored in testing as a Stage 4 learning note, not uploaded into GPT Knowledge. |
| GPT instruction | Updated from v2.2 to v2.3. |
| GPT Knowledge | Front-door rules, Decision Front Door, and Response Pattern Cards now carry the rule; bundle regenerated. |

## Files Updated

| File | Role |
| --- | --- |
| `10_Product/Chief_Consigliere_GPT_Instructions_Gate2_v2.3_under8000.md` | Current GPT instruction file. |
| `10_Product/Chief_Consigliere_Response_Front_Door_Rules_v0.1.md` | Knowledge-layer front-door rule. |
| `04_Methodology/Decision_Front_Door_Spec_v0.1.md` | Methodology-layer front-door design. |
| `04_Methodology/Response_Pattern_Cards_v0.2.md` | Response-pattern rendering rules. |
| `06_Testing/Stage4_Learning_Fast_First_Response_Table_Checklists_v0.1.md` | Learning/test note. |
| `10_Product/Build_GPT_Knowledge_Bundle.ps1` | Bundle generator pointing to v2.3. |
| `10_Product/Chief_Consigliere_GPT_Knowledge_Pack_v0.1.md` | Upload guide pointing to v2.3. |
| `10_Product/Chief_Consigliere_GPT_Knowledge_Bundle_v0.1.md` | Regenerated GPT Knowledge bundle. |
| `AGENTS.md` | Project-level operating rule for Codex/ACI-OS work. |

## Current GPT Package

Instruction box:

`10_Product/Chief_Consigliere_GPT_Instructions_Gate2_v2.3_under8000.md`

Knowledge upload:

`10_Product/Chief_Consigliere_GPT_Knowledge_Bundle_v0.1.md`

## Change Log

v0.2 - documented fast-first and Kruk Table Rule alignment after live hospitality/plant-visit test.
