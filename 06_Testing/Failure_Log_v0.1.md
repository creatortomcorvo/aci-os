# Failure Log v0.1

Status: active internal QA log. Not public.

Source: buyer-objection and marketing-claim review, created 2026-07-04.

## Purpose

This log records observed ACI-OS failures using the F1-F9 taxonomy.

It exists so future claims about failure transparency are earned through real testing evidence, not asserted as marketing language.

## Rules

- Log failures from prompt tests, expert-route tests, red-team cases, and later controlled user feedback.
- Classify using 06_Testing/Failure_Taxonomy_F1_F9_v0.1.md.
- Do not include company secrets, personal data, whistleblower identities, privileged material, live investigation details, or client-identifiable facts.
- Do not publish this log externally until legal, product, and confidentiality review decide what can safely be disclosed.

## Failure Log

| Date | Version | Scenario / test | Failure code | Severity | What happened | Root cause | Fix | Retest / evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 2026-07-04 | v0.1.1 prompt review | No active failure; log created for future QA evidence. | N/A | N/A | Failure log initialized. | N/A | N/A | N/A |
| 2026-07-04 | v0.1.1 live mock-chat feedback | Multi-jurisdiction investigation privilege scenario. | F8 | Medium | The answer was substantively useful but too long and too slow as the first response for a pressured user. | Prompt had L1 / 30-second behavior but no L0 / 10-second stabilizer. | Added L0 first-response rule to product principles, active prompt, governance, and evaluation gate. | Retest pressure scenarios for first 2-4 line stabilizer before full analysis. |
| 2026-07-04 | Gate 2 Run v0.1 | TC5 - Third-party payer. | F8 | Medium | Current route lists third-party payers and unusual payment instructions, but lacks a sharp first-response pattern for "real contract, wrong/unknown payer." | Sanctions route has checklist coverage but no dedicated first-response template. | Add third-party-payer template and risk trigger after preserving this run. | Retest TC5 in Gate 2 sanctions library. |
| 2026-07-04 | Gate 2 Run v0.1 | TC7 - Single-regime designation. | F7 | Medium | Current route says regimes may differ, but does not force binding-regime/nexus sequence or explicitly reject regime averaging in the first answer. | Multi-regime divergence logic is present only as general guidance. | Add single-regime / regime-divergence template with as-of/list-version discipline. | Retest TC7 in Gate 2 sanctions library. |
| 2026-07-04 | Gate 2 Run v0.1 | TC9 - Legal but not bankable. | F6 | High | Current route may treat the issue mainly as legal sanctions permissibility and miss management-risk / bankability decision handling. | Banking risk exists as a category but not as a structured response mode. | Add legal-not-bankable template with legal/gray/bankability distinction and management-risk label. | Retest TC9 in Gate 2 sanctions library. |
| 2026-07-04 | Gate 2 Run v0.1 | TC9 - Legal but not bankable. | F8 | Medium | CEO-facing practical wording is not yet specified for the "lawful but bank-unacceptable" scenario. | Route lacks CEO-ready language for bankability pressure. | Add CEO script and short first answer. | Retest TC9 in Gate 2 sanctions library. |
| 2026-07-04 | Gate 2 Run v0.1 | TC10 - Inherited book. | F6 | High | Current route lacks a dedicated inherited-book / M&A sanctions pattern and could treat the matter as ordinary screening. | Foundation M&A lens has not yet been translated into sanctions-route operating logic. | Add inherited-book / M&A sanctions template with timeline, receivables, communications, and collection logic. | Retest TC10 in Gate 2 sanctions library. |
| 2026-07-04 | Gate 2 Run v0.1 | TC10 - Inherited book. | F2 | High | Counsel-boundary triggers for collection attempts, communications, wind-down, licenses, derogations, reporting, and asset-freeze implications are not explicit enough. | Sanctions route lacks M&A-specific escalation triggers. | Add counsel escalation triggers before collection or customer communication where restrictions/licensing questions exist. | Retest TC10 in Gate 2 sanctions library. |

## Change Log

- v0.1 - Created internal failure log template to support F1-F9 QA discipline and future evidence-backed transparency claims.
- v0.1.1 - Added Gate 2 Run v0.1 failures from TC5, TC7, TC9, and TC10 with F1-F9 classifications and severity.
