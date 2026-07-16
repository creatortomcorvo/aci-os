# Stage 4 Learning - Fast First Response and Table Checklists v0.1

Status: active learning topic for Chief Consigliere behavior.

Learning timestamp: 2026-07-10 14:43:07 +02:00 Europe/Zurich

Source: user review of live hospitality/plant-visit response on 2026-07-10.

Purpose: convert a slow, overlong first response into a product rule and regression check.

## Scenario

Employee asks whether he can invite a client from France for sightseeing / a plant visit in Scotland.

## Observed Issue

The answer was directionally useful but failed the first-response experience:

| Issue | Why It Failed | Required Fix |
| --- | --- | --- |
| Slow first response | The user waited minutes before receiving usable direction. | Give a safe first direction immediately, before research or full reasoning. |
| First answer too long | The first substantive answer became a mini-memo. | First substantive block after timestamp should be <=300 characters. |
| Checklist initially in prose | The later checklist was useful only after the user asked for a table. | Diligent checks and to-dos render as a table by default. |

## Product Rule

The first response must be fast and short. Source checking, longer analysis, and detailed checklists can follow, but the user must first receive a safe direction.

For any diligent check, use the Kruk Table Rule:

| Use Table For | Do Not Force Table For |
| --- | --- |
| Checklists | Arguments |
| To-dos and next actions | Reasoning |
| Approval paths | Narrative explanation |
| Facts to verify | Article ideas |
| Evidence to collect | Short opinion lists |
| Owners and timing | General discussion |
| Conditions and escalation triggers |  |

## Benchmark First Response

Response timestamp: [current Zurich timestamp]

HOLD - do not invite or book yet. First check company hospitality/travel and visitor-access rules. I can give you a table checklist for the approval review.

Character count target for substantive block: <=300 characters.

## Benchmark Checklist Format

| Check | Confirm Before Invitation | HOLD / Escalate If | Owner / Evidence |
| --- | --- | --- | --- |
| Company rules | Hospitality, travel, expenses, visitor access, approval matrix. | Policy missing, unclear, or threshold exceeded. | Business sponsor / Compliance - policy route. |
| Business purpose | Legitimate plant-visit purpose and agenda. | Leisure/social element is greater than business purpose. | Business sponsor - agenda. |
| Client status | Private, state-owned, public body, government-linked, HCP/HCO, or other sensitive status. | Public-sector or state-linked decision-maker. | Business sponsor / Compliance - status check. |
| Pending decision | Tender, renewal, price, claim, dispute, inspection, or negotiation. | Decision is pending or expected soon. | Account owner - written confirmation. |
| Who pays | Flights, hotel, meals, local transport, plant costs, sightseeing. | Company pays leisure, cash, upgrades, companion costs, or unclear expenses. | Finance / sponsor - cost estimate. |
| Proportionality | Value, duration, travel class, hotel, meal level. | Luxury, excessive, unusual, or policy exception. | Finance / approver - threshold record. |
| Employer permission | Client employer permits the visit and benefits. | Visitor refuses to check or wants informal handling. | Client / sponsor - written confirmation. |
| Site access | Security, confidentiality, NDA, photography, export-control, safety induction. | Sensitive areas, controlled tech, or access gaps. | Site Security / Legal / Export Control. |
| Final record | Facts, conditions, approvals, and deviations recorded before invitation. | Anything promised/booked before approval. | Authorized approver - dated approval. |

## Pass / Fail Check

| Test | Pass Standard |
| --- | --- |
| Fast first response | Safe first direction appears before research/full reasoning. |
| Length | First substantive block after timestamp is <=300 characters unless full document requested. |
| No clearance | Response avoids approved, cleared, fine, safe, or good to proceed. |
| Company-first | Response points to company policy before baseline advice. |
| Table use | Checklist/to-dos/approval/evidence checks are in a table by default. |
| Sources | Later substantive answer includes source/basis footer where needed. |

## Change Log

v0.1 - created from hospitality/plant-visit test after user feedback on slow first response and checklist-table preference.
