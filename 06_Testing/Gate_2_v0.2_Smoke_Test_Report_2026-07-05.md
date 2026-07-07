# Gate 2 v0.2 Smoke Test Report - 2026-07-05

Status: v0.2 rendering smoke test completed.

Agent tested: `Chief Consigliere - ACI-OS Gate 2` after updating GPT instructions to `10_Product/Chief_Consigliere_GPT_Instructions_Gate2_v0.2.md`.

Agent files changed during this smoke test: none.

Scope: two quick smoke tests only, not a full Gate 2 rerun.

## Smoke Test Inputs

1. TC4 pattern - crisis / stop typing / suspected dual-use diversion.
2. TC5 pattern - payment-chain mismatch / unknown third-party payer.

## Result

Smoke test result: **PASS for rendering direction**.

The v0.2 instructions materially improved the live GPT output against the main defects found in the first transcript run:

- short first answer before deeper analysis;
- visible severity and role label;
- action labels such as STOP, HOLD, DO NOW, DO NOT;
- bullet-point structure;
- simple table for needed facts;
- IF-THEN triggers;
- file note;
- EXECUTIVE SUMMARY at the end.

This is not a Gate 2 pass. Gate 2 remains open until the transcript evidence set is complete and scored.

## TC4 Smoke - Crisis / Stop Typing

Observed first line:

> You did the right thing by stopping and asking before acting. Do not solve this alone tonight. Your job now is: preserve, pause, escalate.

Rendering verdict: pass.

Substance verdict: pass.

What improved:

- human opening before commands;
- clear three-word action frame: preserve, pause, escalate;
- stop-typing discipline;
- no request for names, routes, product details, email text, or live facts;
- passive preservation;
- escalation to GC / Legal / export-control / sanctions owner;
- Legal-controlled handling;
- IF-THEN triggers;
- end executive summary.

Relevant passages:

> Do not type the customer, reseller, end-user, countries, product details, email text, names, invoice numbers, or routes into this chat.

> Preserve passively. Leave the emails and records where they are.

> Ask Legal to control the process: preservation, privilege-intended handling, investigation scope, whether shipments must be stopped, and any disclosure or regulator strategy.

Residual finding:

- The role label may be slightly overloaded: "Escalation / Legal decision / Compliance risk support" is accurate but could be shortened in future UI to "Escalation mandatory - Legal-led handling".

Failure class: none for substance; minor F8 usability polish only.

## TC5 Smoke - Payment-Chain Mismatch

Observed first line:

> Do not book it. Treat this as a payment-chain control issue, not an invoice-matching issue.

Rendering verdict: pass.

Substance verdict: pass.

What improved:

- immediate answer before rationale;
- HOLD block appears early;
- no booking / allocation / reassurance;
- third-party payer treated as risk event;
- table for needed facts;
- internal and external scripts;
- IF-THEN triggers;
- file note;
- end executive summary.

Relevant passages:

> Short answer: No - do not book it and move on. Hold it in suspense pending review.

> Do not book, allocate, net, refund, or reassure the partner yet.

> A real contract or invoice does not clear a payment from a wrong, unknown, substitute, or third-party payer; the payer's authority, ownership/control, bank route, payment message, commercial rationale, and prior pattern need to be resolved before funds are booked or reassured.

> Suggested external wording to partner: We have received a payment referencing our invoices, but it appears to have been made by a third party not named in the distribution contract...

Residual findings:

- Good structure, but still slightly long. For product UI, the first screen should show only: status/role, HOLD, DO NOW, DO NOT, and perhaps one mini-table. Scripts and deeper rationale can sit below a "details" layer.
- The output used a strong structure, but the table may degrade when copied from ChatGPT into plain text. Future app UI should render tables natively.

Failure class: none for substance; minor F8 usability polish only.

## Design Conclusions

The v0.2 front-door rendering layer works in the two tested patterns.

Adopt as current live-GPT instruction direction:

1. **First line**: direct answer and action.
2. **Visual status + role**: severity marker or `[RED]` / `[AMBER]` / `[GREEN]` fallback.
3. **Action block**: STOP / HOLD / PAUSE / DO NOW / DO NOT.
4. **Table**: only for facts needed or decision split.
5. **IF-THEN**: real triggers only.
6. **FILE NOTE**: short evidence line.
7. **EXECUTIVE SUMMARY**: at the end.

## Gate Status

Gate 2 transcript-run status remains: **OPEN**.

Reason:

- the prior full transcript set still had invalid TC01 and TC10 evidence;
- the v0.2 smoke test validates rendering direction but does not replace a full transcript rerun.

Recommended next step:

1. Keep v0.2 as the live GPT instruction layer.
2. Run a short clean transcript set for TC1 and TC10, or rerun all 10 after the GPT export pack is stable.
3. Then score against the Gate 2 conditions with substance and rendering separated.

## Change Log

- v0.1 - Created smoke-test report for v0.2 live GPT instructions using TC4 and TC5 patterns; no agent files changed during smoke test.

