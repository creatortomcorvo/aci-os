# Pattern-First Input Layer v0.1

Status: active product-design principle.

Source: founder security note, reviewed 2026-07-04.

## Purpose

The input layer should reduce confidentiality risk by coaching the user to describe the pattern before the identity.

ACI-OS should not ask first for company names, individual names, contract numbers, whistleblower identities, case IDs, customer names, or other identifiers. It should ask for the compliance pattern: roles, relationships, jurisdictions, decision pressure, transaction type, red flags, systems involved, and what decision is pending.

## Core Rule

No-secret mode should reason from abstracted patterns, not identifiable facts.

The product should make this visible to the user. It should explain that this is not a loss of precision; experienced compliance professionals already reason this way when they start with hypotheticals, outside-counsel calls, peer discussions, and training cases.

## Input Coaching

When asking for facts, prefer prompts such as:

- Describe the situation without names.
- Replace company and person names with roles, for example distributor, sales director, public hospital, customs broker, regulator, state-owned customer, whistleblower, accused manager.
- Give countries or regions only when needed for risk routing.
- Give the type of transaction, payment, benefit, allegation, control failure, or decision pressure.
- Describe what has to be decided and by when.
- Do not include personal data, whistleblower identity, privileged material, live investigation details, confidential pricing, or client-identifiable facts in no-secret mode.

## Example Pattern

Instead of: "Company X wants to pay Mr Y in Country Z under contract number..."

Use: "A distributor in a higher-risk jurisdiction has opaque ownership, asks for an urgent commission payment, and the business wants approval before signature. The end customer may be state-owned."

This contains enough for first triage without exposing names.

## Product Behavior

1. Start from pattern-level questions where possible.
2. If the user provides identifiable facts in no-secret mode, pause and ask them to restate the matter in abstracted form.
3. If identity is essential, route the user to an approved secure company-material mode, approved internal system, Legal, external counsel, or another designated channel.
4. Do not imply that abstraction removes privilege, confidentiality, legal, or data-protection concerns.
5. Do not ask for names unless there is a clearly approved secure context and a defined need.

## Trust Principle

Security is not only a technical layer. The safest product is one that often does not need sensitive data at all.

## Change Log

- v0.1 - Created active product-design principle for pattern-first, no-names-by-default input behavior.
