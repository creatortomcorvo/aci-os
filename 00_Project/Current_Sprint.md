# Current Sprint

## Sprint 1 - Chief Consigliere Prototype

Goal: create first usable logic for the front-door compliance sparring partner.

Status: in progress.

## Sprint Purpose

This sprint turns the project from a concept into an operating prototype. The first milestone is not a full compliance platform. It is a reliable front door that can receive messy compliance questions, calm the situation, ask the right first questions, route the issue to the right expert logic, and flag escalation triggers before the user goes too far down the wrong path.

## Sprint Deliverables

- Chief Consigliere v0.1 product logic.
- Expert map for the first expert routes.
- Initial test set with realistic compliance scenarios.
- First-response rules and escalation triggers.
- Routing logic for mixed issues.

## In Scope

- Front-door triage.
- Short first responses.
- Risk-level language.
- Expert routing.
- Escalation trigger detection.
- Test cases for prototype behavior.
- Practical compliance sparring for a Head of Compliance.

## Out of Scope for Sprint 1

- Full legal research engine.
- Jurisdiction-specific legal advice.
- Live sanctions screening.
- Hotline case management.
- Document management.
- Workflow approvals.
- User accounts, permissions, and audit logs.
- Integration with company systems.

## Current Files

- 10_Product/Chief_Consigliere_v0.1.md
- 10_Product/Chief_Consigliere_System_Prompt_v0.1.md
- 05_Experts/Expert_Map.md
- 06_Testing/Test_Cases_Chief_Consigliere_v0.1.md
- 06_Testing/Evaluation_Checklist_Chief_Consigliere_v0.1.md
- 06_Testing/Evaluation_Run_Chief_Consigliere_v0.1_2026-07-03.md
- 00_Project/Current_Sprint.md

## Acceptance Criteria

The sprint is successful when the Chief Consigliere can:

- Give a calm first response to a messy compliance question.
- Identify the likely risk level without overstating certainty.
- Ask targeted triage questions.
- Route the matter to one or more expert areas.
- Flag urgent escalation triggers.
- Avoid giving final legal clearance.
- Avoid making up facts.
- Produce a practical next step the user can act on.

## Prototype Behavior Standard

Every first answer should show:

1. What the issue appears to be.
2. Why it matters.
3. What is missing.
4. What questions must be asked first.
5. Which expert route applies.
6. What immediate next step is safest and most useful.

## Initial Expert Routes

- Investigations
- ABAC
- Sanctions
- Third Party Due Diligence
- Competition Law
- Governance / Tone at the Top
- CEO / Boss Communication
- Business Expectations
- Speak Up
- Dawn Raid / Regulator Contact
- Training
- Monitoring
- Compliance Program

## Sprint Risks

- The assistant may over-answer before it has enough facts.
- It may sound too legalistic for a stressed user.
- It may miss mixed issues, for example sanctions plus third-party risk plus CEO pressure.
- It may fail to escalate senior-management or retaliation issues.
- It may provide generic compliance advice instead of practical first steps.

## Next Work

1. Create Chief Consigliere System Prompt v0.1.1 addressing the three partial-pass cases: board effectiveness, training after incident, and isolated compliance officer.
2. Rerun the 15-case evaluation against v0.1.1 and record results.
3. Build response templates for high-risk first answers.
4. Add source-backed expert instructions for each expert route.
