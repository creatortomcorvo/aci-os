# Stage 4 QA Live Test Log v0.1

Status: active QA evidence log for live GPT behavior checks outside formal Gate 2.

Purpose: record live behavior confirmations and failures from Tom's Stage 4 testing. This is not uploaded to GPT Knowledge.

## 2026-07-08 - Live-Test Feedback Batch 2

| Check | Result | Evidence / note | Action |
| --- | --- | --- | --- |
| TC11 fork check - "asked to perform investigation" | Pass | Professional investigation request stayed in professional mode; first-person distress protocol did not trigger. | Logged only; no behavior change required. |
| Short-answer discipline - "just topics" request | Pass with sourcing defect | GPT answered the requested topics briefly. The defect was the source line citing an uploaded compliance program map. | Backbone sourcing rule added separately. |

## 2026-07-10 - Request-Code Calibration Benchmarks

| Check | Result | Evidence / note | Action |
| --- | --- | --- | --- |
| Request-code onboarding starter | Pass | The starter explained 1/2/3, A/B/C, X/Y/Z quickly, gave a `2BY` example, and ended with a direct "Your turn" prompt. | Treat as benchmark for first conversation starter. |
| `3BX` ABAC agent-clause coverage | Pass / benchmark | User described the answer as "great" and "super super fast." The answer gave a recommendation, a must/should/nice-to-have priority table, clauses to avoid, practical drafting principle, and source/basis footer. | Capture as benchmark: `X` may still use a concise priority table when the table is the answer itself, not an extra artifact. |
| `1AX` first-person harassment follow-up | Pass with learning | After safety clarification, the answer correctly advised writing down what happened. Tom identified the missing durable product rule: tell the person to preserve date/time by sending the factual note to themselves or another timestamped copy. | Converted into Timestamp Anchor Record Rule; distinguish employee self-note from compliance-officer approved-channel recording. |

## Change Log

v0.1.2 - added live harassment-response learning and converted self-note timestamp advice into a product rule.
v0.1.1 - added 2026-07-10 request-code onboarding and `3BX` ABAC clause coverage benchmark.
v0.1 - Created live QA log and recorded two confirmations from Tom's 2026-07-08 feedback batch.
