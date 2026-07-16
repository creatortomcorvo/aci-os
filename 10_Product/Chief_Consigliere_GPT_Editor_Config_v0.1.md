# Chief Consigliere GPT Editor Config v0.1

Status: active GPT Builder configuration guide.

Config timestamp: 2026-07-11 00:53:22 +02:00 Europe/Zurich

Purpose: translate the current ACI-OS Codex package into practical GPT Builder settings: instructions, knowledge, conversation starters, model choice, capabilities, and actions.

## Current Package

| GPT Builder Field | Use |
| --- | --- |
| Name | `Chief Consigliere - ACI-OS Gate 2` |
| Description | `TESTING ENVIRONMENT - decision support only, not legal advice or clearance. Optional code: 1/2/3 speed + A/B/C shape + X/Y/Z output, e.g. 2BY.` |
| Instructions | `10_Product/Chief_Consigliere_GPT_Instructions_Gate2_v2.14_under8000.md` |
| Knowledge | `10_Product/Chief_Consigliere_GPT_Knowledge_Bundle_v0.1.md` |
| Visibility | `Only me` for current controlled testing until a separate release/tester decision. |

## Conversation Starters

Use starters that test product behavior, not marketing. Keep the first starter as the stable calibration insert for testers.

| Starter | What It Tests |
| --- | --- |
| `You can request code before the scenario: 1/2/3 speed, A/B/C shape, X/Y/Z output.` | Opens request-code onboarding immediately: defines all codes, gives a 2BY example, asks the user to try, and does not add a source/basis footer. |
| `1AY My CEO wants to invite a CEO of an old supplier to a sport event as a token of appreciation. I need to say yes/no fast; what do I do?` | Speed precedence: fast yes-no-if with compact table, not a mini-memo. |
| `3BX Legal dept asks for a new ABAC clause for the agent. Current clause is probably ok, but what should it cover from must-have to nice-to-have?` | Benchmark: deep options answer may use a priority table when the table is the answer itself, not an extra checklist. |
| `1AX A bank stopped a payment with sanctions wording. What should we do in the first 10 minutes?` | Fast coded answer, sanctions route, no-reroute rule, preservation, escalation. |

## Model Recommendation

| Question | Recommendation |
| --- | --- |
| Should the GPT be upgraded now? | Yes: update the editor to v2.14 instructions and regenerated Knowledge bundle now. |
| Should a stronger recommended model be selected? | Only if it does not break the fast-first experience. Test v2.14 first. A slower model that thinks for minutes fails the product, even if the analysis is stronger. |
| If `GPT-5.5 Pro` is available | Use for controlled testing only after the 300-character first response works. If it remains slow, use the fastest high-quality available model or leave no recommended model. |

## Capabilities

| Capability | Recommendation | Reason |
| --- | --- | --- |
| Web Search | Enable | Needed for current legal/source verification, but first response must not wait for it. |
| Code Interpreter / Data Analysis | Enable for testing | Useful for documents, source bundles, tables, and structured review. |
| Canvas | Optional | Useful for drafting documents; not core to fast first response. |
| Image Generation | Disable for now | Not needed for compliance decision support. |
| Actions | Do not activate yet | No live deployed action is ready; avoid adding latency and failure points. |

## Actions Decision

| Possible Action | Status | Decision |
| --- | --- | --- |
| `submitFeedbackToACIOS` | Scaffold exists in `11_User_Feedback/GPT_Feedback_Action_MVP/` | PARK until the endpoint is deployed and tested. |
| `example.com` mock action | Import-only mock | Remove from the live GPT if present. It is only for UI import testing. |
| Sanctions live screening action | Not built | DISCARD for now. The GPT must not pretend to screen live lists or clear transactions. |
| Codex memory write action | Not built | DISCARD for now. GPT feedback must go to quarantine, never directly into project memory. |

## Specialist GPT / Agent Intake

| Source | Use Now | Rule |
| --- | --- | --- |
| Sanctions GPT | Already partially absorbed | Keep as source-only bridge and expert route. Do not merge its full behavior into Chief. |
| `ComprehComplProgram2026.06.30` | Review later through ACT / PARK / DISCARD | Use as source library/template inventory only. Do not import style, long-report defaults, or behavior authority. |
| GPT icon / branding | Optional later | Product behavior still comes before brand. Do not spend build time here unless the test interface needs a clearer signal. |

## Immediate Editor Checklist

| Step | Action | Done When |
| --- | --- | --- |
| 1 | Paste v2.14 instructions into the Instructions box. | Header reads `Chief Consigliere GPT Instructions v2.14`. |
| 2 | Upload regenerated Knowledge bundle. | Bundle header points to v2.14 and generated timestamp is current. |
| 3 | Add the four conversation starters above. | First starter teaches the request code; the next three use live coded examples. |
| 4 | Remove any `example.com` action from live testing. | Actions section is empty unless a real endpoint exists. |
| 5 | Test the first starter. | GPT explains 1/2/3, A/B/C, X/Y/Z, gives a 2BY example, ends with `Your turn`, and does not add `SOURCES / BASIS`. |
| 6 | Test `1AY` CEO hospitality starter. | GPT gives a fast verdict and max 5-row compact table, not a long memo. |
| 7 | Test `3BX` ABAC clause starter. | GPT gives a fast structured priority answer with must/should/nice-to-have table and no memo padding. |
| 8 | Test first-person harassment follow-up after safety is established. | GPT advises factual note plus timestamped self-copy, without encouraging personal export of company evidence. |
| 9 | Test broad compliance taxonomy request. | GPT uses the enterprise compliance view first, then mentions sector modules and the 7-element backbone if useful; it must not default to sanctions. |
| 10 | Keep visibility `Only me`. | No external sharing without separate release/tester decision. |

## Change Log

v0.1.11 - updated editor config for v2.14 and Compliance Taxonomy v0.3 enterprise compliance view.
v0.1.10 - updated editor config for v2.13 Compliance Taxonomy v0.2 hook and Knowledge bundle.
v0.1.9 - updated editor config for v2.12 Timestamp Anchor Record Rule and added harassment follow-up test.
v0.1.8 - updated editor config for v2.11 `3BX` ABAC clause benchmark and X-as-no-extra-artifact rule.
v0.1.7 - updated editor config for v2.10 speed-precedence test using 1AY CEO hospitality.
v0.1.6 - updated editor config for v2.9 immediate request-code onboarding with no source/basis footer.
v0.1.5 - updated editor config for v2.8 request-code onboarding starter with definitions, example, and Your turn prompt.
v0.1.4 - updated editor config for v2.7 stable request-code insert in description and conversation starters.
v0.1.3 - updated editor config for v2.6 X/Y/Z output codes, visible vertical menu, and 2BY table-check default.
v0.1.2 - updated editor config for v2.5 simple triage and replaced broad calibration starter.
v0.1.1 - updated editor config for v2.4 answer calibration dials and fifth conversation starter.
v0.1 - created GPT Builder configuration guide after v2.3 fast-first and Kruk Table Rule update.
