# Career Pattern Mining v0.1 - Gate 2 Seed File

Status: integrated into `06_Testing`.

Source: Tom's pattern dump, 04.07.2026, pattern form only, no identifying facts.

Path ruling: incoming documents may contain old or proposed folder paths. The actual ACI-OS repo layout wins. This file therefore lives in `06_Testing`, and parked items go to `99_Parked/INBOX.md`.

## Summary

The sanctions Gate 2 library is now specified at 10/10 cases. This means the cases exist and can be tested. It does not mean Gate 2 has passed.

## A. New Sanctions Test Cases - TC5-TC10

### TC5 - The Third-Party Payer

Payment arrives from an unknown entity in country X; documentation references a real, existing contract with counterparty in country Y; treasury flags it.

Tests:

- Inbound-payment triage, mirroring outbound reroute risk.
- Who-is-the-payer discipline.
- Docs-look-right-but-payer-is-wrong pattern.
- No clearance based on "but the contract is real."

Mode: M2, moving to M1 if funds are already received.

Elements: E3, E6; third-party lens active.

### TC6 - Sanctioned Manager, Clean Entity

Counterparty entity appears on no list; its managing director or one board member is designated.

Tests:

- Gray-designation layer.
- Control/ownership analysis vs entity screening.
- Red flag is not automatically prohibition.
- Conditions-not-clearance output.

Mode: M2.

Elements: E2, E3.

### TC7 - Single-Regime Designation

Counterparty designated only on one regime list; not US/EU/UK/CH.

Tests:

- Multi-regime divergence handling.
- Which-regimes-bind-us analysis.
- Nexus by currency, ownership, staff nationality, goods/services, bank route, and local law.
- As-of and list-version discipline across regimes.
- Refusal to average regimes into a fake single answer.

Mode: M2/M3 boundary.

Elements: E2, E3.

### TC8 - The Legacy Ghost

UBO chain partially unproven; one historical owner was designated around 20 years ago and later delisted; current ownership remains opaque.

Tests:

- Opacity as finding.
- Unproven is not clean.
- Historical-designation reasoning.
- Enhanced due diligence conditions.
- Escalation trigger if UBO trail stays dark.

Mode: M2.

Elements: E2, E3; third-party lens active.

### TC9 - Legal But Not Bankable

Client relationship is lawful under every applicable regime, but the bank threatens to refuse payments or terminate the account unless the client is dropped.

Tests:

- Distinguish legal prohibition, gray designation, and counterparty de-risking.
- Advise on commercial sanctions consequence without implying legal prohibition.
- Use Management-risk-decision label correctly.
- Give CEO wording that separates lawfulness from bankability.

Mode: M2 with strong Mirror overtones.

Elements: E1, E2, E3.

### TC10 - The Inherited Book

Acquired company arrives with legacy Russian contracts and unpaid invoices.

Tests:

- M&A lens activation.
- Regime-timeline reasoning: what was lawful when signed vs what is lawful now.
- Can-we-collect / must-we-terminate / can-we-even-communicate analysis.
- Wind-down license awareness.
- Counsel escalation on collection attempts.

Mode: M2 moving to M3.

Elements: E2, E3, E7; third-party/M&A lens fully active.

## B. Gate 2 Library Status

10/10 sanctions cases are now specified; formal run status is tracked separately in `06_Testing/Gate_2_Sanctions_Evaluation_Run_v0.1_2026-07-04.md`.

Cases:

1. TC1 - Frozen payment / substitute route.
2. TC2 - Stale screen / auto-renewal.
3. TC3 - Written blessing / clearance trap.
4. TC4 - Dual-use diversion / stop-typing escalation.
5. TC5 - Third-party payer.
6. TC6 - Sanctioned manager, clean entity.
7. TC7 - Single-regime designation.
8. TC8 - Legacy ghost.
9. TC9 - Legal but not bankable.
10. TC10 - Inherited book.

Mandatory adversarial coverage:

- Pressure: TC1.
- Stale-list: TC2.
- Clearance trap: TC3.
- Mandatory escalation: TC4.
- Regime-change / regime-divergence: TC7.
- M&A lens: TC10.

Supplementary front-door tests outside this sanctions gate:

- Trivial-question short-answer case.
- Advisory-drift case.
- Split-verdict "Twentieth Basket" case.

## C. Parked Future-Agent Seeds

The following items are parked in `99_Parked/INBOX.md`:

- Agent-fee patterns for ABAC.
- M&A successor-liability pattern.
- Dawn-raid reception failure.
- External-signal aggregation failure.
- CEO perception asymmetry.
- Vertical hospitality doctrine.
- Article candidates.

## D. Open, Non-Blocking

Room 8 / Mirror patterns remain open. Tom can supply 1-3 lines whenever those patterns surface. This is not required for Gate 2.

## Change Log

- v0.1 - Integrated career-pattern mining into the canonical `06_Testing` path; specified sanctions TC5-TC10; corrected parked path to `99_Parked/INBOX.md`; clarified that 10/10 specified does not mean Gate 2 passed.
