# Conversation Handoff

## Project

ACI-OS / Compliance Consigliere is a compliance decision-support project for Heads of Compliance and senior compliance professionals, especially in mid-sized global firms. The first product focus is the Chief Consigliere: a front-door compliance sparring partner that helps triage messy issues, ask the right first questions, route to expert logic, and flag escalation triggers.

## What We Decided

- The permanent local project folder is: C:\Users\Tomasz Kruk\Documents\ACI-OS
- The temporary Codex folder under Documents\Codex\2026-07-01 should no longer be used as the project home.
- GitHub is the permanent knowledge base and version history.
- The local ACI-OS folder is the working project folder on the hard drive.
- ChatGPT acts as Chief AI Architect.
- Codex acts as Builder and Project Secretary.
- The project should be built through clear markdown files, test cases, expert maps, research notes, and versioned product logic.
- The assistant must be practical, calm, source-aware, and careful not to provide final legal clearance.

## Files Created

- README.md
- 00_Project/WHERE_ARE_WE.md
- 00_Project/PROJECT_JOURNAL.md
- 00_Project/PROJECT_HISTORY.md
- 00_Project/Current_Sprint.md
- 08_Articles/ARTICLE_PIPELINE.md
- 10_Product/Chief_Consigliere_v0.1.md
- 05_Experts/Expert_Map.md
- 06_Testing/Test_Cases_Chief_Consigliere_v0.1.md
- 09_Codex/CONVERSATION_HANDOFF.md

## Current Sprint

Sprint 1 - Chief Consigliere Prototype

Goal: create first usable logic for the front-door compliance sparring partner.

Status: in progress.

## Next Action

Tom will show the created files to ChatGPT for architecture review.

After that, the next likely Codex tasks are:

1. Review the ACI-OS folder structure without modifying files.
2. Create the first Chief Consigliere system prompt.
3. Convert the 15 test cases into a repeatable evaluation checklist.
4. Add source-backed instructions for the first expert routes.
5. Keep PROJECT_JOURNAL.md and PROJECT_HISTORY.md updated after meaningful work.

## How Codex Should Behave

- Work inside C:\Users\Tomasz Kruk\Documents\ACI-OS for future project work.
- Treat the repository files as project memory.
- Before creating new files, check whether the relevant file already exists.
- Prefer appending project history and journal entries instead of overwriting them.
- Keep files simple, clear, and in markdown unless the user asks otherwise.
- Act as Builder and Project Secretary: structure the project, create files, maintain order, and keep a practical record of decisions.
- Do not invent legal conclusions or treat the assistant as a substitute for legal counsel.
- Do not place real client confidential data, personal data, live investigation details, or secrets into reusable project files.

## How ChatGPT Should Behave

- Act as Chief AI Architect.
- Review concepts, architecture, reasoning models, and product direction.
- Challenge unclear assumptions and help improve the compliance logic.
- Help define expert roles, escalation standards, answer style, and source discipline.
- Keep the product focused on decision support for compliance leaders, not a generic chatbot or policy database.

## Continuity Prompt For New Codex Chats

When starting a new Codex chat in ACI-OS, use:

```text
Read 09_Codex/CONVERSATION_HANDOFF.md and continue from there.
Treat the files in this repository as the project memory.
Do not rely on the old temporary Codex folder.
Review the current folder structure first. Do not modify anything until you understand what exists.
```

## Latest Continuation - 2026-07-03

Codex continued from this handoff inside C:/Users/Tomasz Kruk/Documents/ACI-OS, using the repository files as project memory. A temporary write-test file was created, confirmed, and deleted in the active repository folder.

New files added:

- 10_Product/Chief_Consigliere_System_Prompt_v0.1.md
- 06_Testing/Evaluation_Checklist_Chief_Consigliere_v0.1.md

Project tracking updated:

- 00_Project/WHERE_ARE_WE.md
- 00_Project/Current_Sprint.md
- 00_Project/PROJECT_JOURNAL.md
- 00_Project/PROJECT_HISTORY.md

Next recommended action:

1. Run the 15-case evaluation checklist against the v0.1 system prompt.
2. Record pass, partial pass, and fail results.
3. Refine the system prompt based on misses.
4. Then add source-backed expert instructions for the first expert routes.

## Testing Update - 2026-07-03

Codex ran the first baseline evaluation of 10_Product/Chief_Consigliere_System_Prompt_v0.1.md against the 15-case checklist. Results were recorded in 06_Testing/Evaluation_Run_Chief_Consigliere_v0.1_2026-07-03.md.

Result summary:

- Pass: 12
- Partial: 3
- Fail: 0
- Critical fails: 0

Partial-pass cases:

- Test Case 08: board program effectiveness structure.
- Test Case 10: training after repeated gifts and hospitality breaches.
- Test Case 15: isolated compliance officer seeking business traction.

Next recommended action:

Create Chief Consigliere System Prompt v0.1.1 with explicit patterns for those three scenarios, then rerun the 15-case evaluation before adding source-backed expert instructions.
