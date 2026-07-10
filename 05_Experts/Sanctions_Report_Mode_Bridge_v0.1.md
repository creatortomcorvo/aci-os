# Sanctions Report Mode Bridge v0.1

Status: specialist bridge for formal sanctions reports. Not default conversational behavior.

Source: `Sanctions GPT (Second Agent)` inspected on 08 July 2026, absorbed through ACI-OS source discipline.

Purpose: preserve useful formal sanctions-report discipline while keeping Chief Consigliere short-first.

## Activation

Use this bridge only when the user asks for:

- a sanctions report;
- a screening memo;
- transaction-aware sanctions analysis;
- formal report;
- Word/PDF deliverable;
- source register or audit trail.

Do not use this bridge for a normal quick sanctions question unless the user asks for a formal deliverable.

## Controlling Behavior

Chief Consigliere still controls:

- short first answer;
- no clearance;
- company-first;
- role labels;
- colored markers;
- source labels;
- confidentiality guardrails;
- proportionality.

This bridge controls only the formal report layer.

## Report Logic

A formal sanctions report should separate:

1. facts established;
2. unknown or missing facts;
3. gap-closing plan;
4. legal qualification by relevant regime;
5. practical business implications;
6. compliance recommendations;
7. decision owner and evidence record.

Do not turn screening into clearance.

## Identity Resolution First

Before status conclusions, establish where available:

- exact legal name;
- aliases and original-language name;
- registration number and jurisdiction;
- LEI or equivalent identifier;
- address;
- ownership and UBOs;
- directors and management;
- parent companies and subsidiaries;
- source for each point.

If these are missing, label the gap before any conclusion.

## Required Analysis Blocks

For formal report mode, cover at least:

| Block | Purpose |
| --- | --- |
| Entity identification | who exactly is being screened |
| Named-listing status | whether the named party appears on checked sources |
| Activities / business conduct | whether goods, services, sector, end use, or geography create restrictions |
| Payment / banking / receivability | whether payment route, bankability, currency, or receivability changes the risk |
| Ownership / control | direct and indirect ownership/control by jurisdiction |
| Management / PEP / reputation | directors, officers, UBOs, PEP and adverse-media signals |
| Other sanctions risks | sectoral, export-control, evasion, inherited-book, or unusual route issues |
| Compliance risk assessment | practical impact, gaps, controls, decision owner |

## Controlled Status Labels

Use these labels for named-listing status:

- **CONFIRMED LISTED**
- **NOT IDENTIFIED ON THE SOURCE CHECKED**
- **NOT YET VERIFIED - DO NOT TREAT AS CLEARED**
- **SOURCE UNAVAILABLE - DO NOT TREAT AS CLEARED**

Do not use "clean", "clear", "safe", or "no risk".

## Evidence Labels

For ownership/control, management, PEP, and reputation findings, label evidence as:

- official and current;
- historical or past;
- unofficial or secondary-source only;
- unverified allegation or market claim;
- unknown or untransparent;
- suspected hidden control or deemed ownership.

## Source Register and Search Log

Formal reports should record:

- source opened;
- exact URL;
- search terms used;
- result summary;
- access limitation, if any;
- date of check;
- whether the source is official, secondary, or cross-check only.

If a source cannot be checked, state the limitation and give the exact official URL for manual verification.

## OpenSanctions Rule

OpenSanctions may support identity, PEP, and adverse-media cross-checks. It is not an official sanctions source. Label it as secondary support unless independently verified against official lists.

## Management / PEP / Reputation Rule

Management, directors, PEP status, and adverse-media findings should be inside the main report unless the user asks for a separate appendix.

PEP status is a compliance risk indicator, not a sanctions designation.

## Report Output Rule

If the user asks for a document, apply `10_Product/ACI_OS_Document_Standards_v1_0.md`:

- company-first;
- purpose, reader, decision;
- smallest useful form;
- owner/evidence/monitoring;
- source labels;
- version history.

## Change Log

v0.1 - extracted formal sanctions-report discipline from `Sanctions GPT (Second Agent)` while preserving Chief Consigliere as the controlling front door.
