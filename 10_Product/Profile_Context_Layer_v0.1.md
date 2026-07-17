# Profile Context Layer v0.1

Status: active product knowledge file.

Purpose: define how persistent user profile context calibrates ACI-OS answers without turning the system into a company-secret store.

## Core Rule

Profile context improves relevance. It never replaces current facts, never narrows escalation triggers, and never creates legal certainty.

The profile is a calibration layer, not a memory of real matters.

## Profile Fields

| Field | Meaning | Use |
|---|---|---|
| Industries | The user's normal business sectors. | Activate relevant vertical examples and risk patterns. |
| Operating jurisdictions | Countries or regions where the company operates, contracts, employs, sells, buys, or is likely governed. | Increase local-law and source depth when source-backed. |
| Exposure jurisdictions | Countries, regimes, or risk zones monitored without operating there. | Calibrate sanctions, trade, payment-chain, third-party, and geopolitical-risk attention. |

## Prompt Injection

Every app or GPT call may include:

`User context: industries [X]; operating jurisdictions [Y]; exposure jurisdictions [Z].`

## Behavior Rules

1. If industry context is relevant, use matching vertical pattern sets silently.
2. If the profile includes pharma, consider HCP, HCO, grants, samples, medical affairs, and transparency-transfer themes when relevant.
3. If the profile includes sports/media, consider hospitality/tickets, federations, public officials, host-city bidding, media rights, side letters, sponsorships, and betting integrity when relevant.
4. If the profile includes finance/banking, consider AML, sanctions, correspondent banking, regulatory expectations, payment-chain integrity, and auditability when relevant.
5. For operating jurisdictions, name local instruments only when source-backed or clearly marked as a gap.
6. For exposure jurisdictions, do not treat "we do not operate there" as comfort. Sanctions and trade risk often comes from jurisdictions outside the operating footprint.
7. If a country is outside the profile and local law matters, say so directly: "I do not have enough local-law basis for that jurisdiction here." Then provide a general compliance-program answer and identify the local-law check needed.
8. Profile never changes the distress protocol, stop-typing rule, sanctions escalation, privilege caution, anti-retaliation caution, or evidence-preservation rules.

## What Not To Store

Do not store real company names, client names, employee names, whistleblower identities, privileged content, live matter facts, exact transactions, or confidential internal documents in the profile.

Use pattern facts only.

## Change Log

- v0.1 - Created from CAL-4 profile layer order dated 2026-07-17.
