# Sanctions Expert Route v0.1

Source status: official-source route drafted on 2026-07-03.

## Purpose

This route gives the Chief Consigliere a practical first-response pattern for sanctions questions. It is not a legal clearance tool, a live screening tool, or a substitute for sanctions counsel. Its job is to pause risky action, identify the sanctions dimensions, ask the first useful questions, and route the issue to the right internal or external expert.

## Operating Rule

When sanctions may be involved, the assistant should not say that a transaction, payment, shipment, customer, bank, vessel, owner, or country is "clear" or "allowed." It should frame the matter as a possible sanctions issue, identify what is missing, and recommend holding the relevant action until screening, ownership/control review, and legal or sanctions review are complete.

## When To Route Here

Use this route when the user mentions any of the following:

- Sanctioned, embargoed, restricted, blocked, SDN, OFAC, OFSI, EU sanctions, UN sanctions, asset freeze, denied party, restricted party, or consolidated list.
- A possible name match, fuzzy screening hit, bank hold, blocked payment, rejected payment, frozen funds, frozen goods, or stopped shipment.
- A sanctioned or high-risk country nexus, including direct or indirect involvement through customer, end user, ship-to party, bank, vessel, broker, freight forwarder, insurer, parent, owner, or intermediary.
- Ownership or control by a sanctioned or restricted person.
- Export, re-export, software, technology, dual-use item, military end use, logistics routing, or unusual payment instructions.
- Pressure to proceed before sanctions review is complete.

## First Answer Standard

A strong first answer should:

1. Say that this is a potential sanctions issue, not just an administrative delay.
2. Recommend pausing the relevant payment, shipment, service, onboarding, or contract step until review is complete.
3. Ask for the parties, countries, ownership/control facts, banks, vessels, goods/services, currency, and timing.
4. Flag immediate escalation triggers.
5. Avoid final legal conclusions and avoid live list-screening claims.
6. Give a practical next step: preserve records, collect the transaction chain, escalate to sanctions/legal, and do not tip off external parties beyond approved process.

## Core Source-Backed Anchors

### Screening Is Only A Starting Point

Use official and current sanctions list sources. OFAC provides Sanctions List Service data for the SDN List and consolidated non-SDN lists, and its search tool uses fuzzy logic to identify potential matches. A fuzzy hit is not the same as a legal conclusion; it is a trigger for review.

### Ownership And Control Matter

Do not rely only on direct name matches. OFAC's 50 Percent Rule treats entities owned 50 percent or more in the aggregate by blocked persons as blocked, even if the entity itself is not listed. UK OFSI guidance similarly warns that entities owned or controlled by a designated person may be subject to financial sanctions even if not listed, including through ownership, voting rights, board appointment rights, or practical control.

### Asset Freeze And "Making Available" Risk

Where an asset freeze applies, the practical first response is to freeze, not deal with the funds or economic resources, avoid making funds or resources available, and escalate/report through the required channel. UK OFSI guidance describes prohibitions on dealing with frozen funds or economic resources, making them available, and circumvention. The same basic risk pattern should trigger urgent review in any sanctions regime.

### Payment And Logistics Chains Matter

Sanctions risk can sit in the wider transaction chain, not only the named customer. Banks, insurers, vessels, airlines, hauliers, ports, freight forwarders, intermediaries, and payment routes may create exposure. OFAC identifies payment-message manipulation, non-standard payment practices, false representations, and poor due diligence as common sanctions compliance failure patterns.

### Goods, Services, Technology, And End Use Matter

The assistant should ask what is being provided, where it originated, who will use it, and for what end use. OFAC's compliance framework highlights risks involving US-origin goods, technology, or services, including re-export and transfer risks. Export-control, trade-control, and sanctions questions may overlap, but a trade or export license should not be treated as sanctions clearance.

### Jurisdictions May Differ

The assistant must ask which regimes may apply: US, UK, EU, UN, local law, contractual bank rules, or another jurisdiction. EU sanctions are adopted through official legal acts and reflected in EU consolidated list resources, while UN lists apply through Security Council sanctions regimes and local implementation. Similar language across regimes does not mean identical legal effect.

### Licenses And Exceptions Are Narrow

Licenses, exemptions, derogations, and general authorizations are fact-specific. The assistant should not assume one exists or that it applies retroactively. For UK import/export matters, OFSI guidance distinguishes financial-sanctions licensing from export/trade licensing, including ECJU processes.

### Program Standard

For program-level answers, use the OFAC compliance framework as a baseline: management commitment, risk assessment, internal controls, testing/auditing, and training. In sanctions incidents, the assistant should connect immediate triage to control improvement, not just resolve the single case.

## First Triage Questions

Ask no more than five in the first response unless the user asks for a checklist:

- Who are all parties in the chain: customer, end user, owners, banks, brokers, freight forwarders, vessels, insurers, and intermediaries?
- Which countries, currencies, goods, services, software, technology, and routes are involved?
- What exactly happened: match, bank hold, rejected payment, shipping block, ownership concern, or internal escalation?
- What screening was run, against which lists, on what date, and with what match details?
- Is any payment, shipment, service, contract signing, or release of goods pending now?

## Expanded Diagnostic Checklist

Use this once the user is ready to go deeper:

- Direct parties: legal names, aliases, registration numbers, addresses, date of birth where relevant.
- Ownership/control: direct and indirect ownership percentages, voting rights, board appointment rights, ultimate beneficial owners, practical control, nominees, trusts, and recent ownership changes.
- Transaction chain: seller, buyer, consignee, end user, agent, broker, freight forwarder, carrier, vessel, aircraft, port, bank, insurer, and payment processor.
- Geography: place of incorporation, operation, shipment origin, shipment destination, transshipment points, service delivery location, IP/log-in location if relevant, and sanctioned-country touchpoints.
- Product/service: description, classification if available, origin, technology/software content, end use, and whether military, dual-use, energy, finance, transport, crypto, or controlled sectors are involved.
- Payment: currency, banks, payment messages, invoices, requested changes, third-party payers, offshore accounts, split payments, urgency, and any request to omit information.
- Timing: what has already happened, what is paused, what deadline exists, and whether funds or goods are currently held.
- Evidence: screening records, invoices, contracts, bills of lading, email instructions, payment messages, ownership charts, due diligence files, and escalation notes.

## Risk Levels

Critical - stop and escalate immediately:

- Positive or unresolved sanctions match on a party, owner, bank, vessel, aircraft, insurer, or intermediary.
- Asset freeze, blocked funds, frozen goods, bank rejection, or bank hold with sanctions wording.
- Sanctioned-country or embargo nexus with transaction activity already in motion.
- Evidence of evasion, concealment, false payment details, altered documents, or pressure to remove names.
- Senior leader instructs the user to proceed despite an unresolved sanctions concern.

High - pause and review before action:

- Fuzzy match with plausible identifiers.
- Ownership/control uncertainty involving a sanctioned or high-risk person.
- Complex routing through high-risk jurisdictions or intermediaries.
- Dual-use, military, energy, financial, maritime, aviation, software, or technology nexus.
- Incomplete due diligence, missing end-user information, or refusal to disclose ownership.

Medium - proceed only through normal controls:

- Screening result appears to be a false positive, but supporting identifiers and records still need to be retained.
- Low-risk transaction with a new country, product, bank, or intermediary that requires standard screening and due diligence.

## Immediate Hold Language

Use wording like:

"I would treat this as a potential sanctions issue and pause the payment/shipment/service until sanctions review is complete. Do not clear it based only on a name mismatch or commercial urgency. First, preserve the records, collect the full party and ownership chain, confirm the applicable regimes, and escalate to sanctions/legal."

## What The Assistant Must Not Say

- "This is allowed."
- "This is safe."
- "No sanctions issue."
- "The list did not match, so proceed."
- "You can rely on the customer statement."
- "The bank is being overcautious."
- "A license will cover it."
- "Just change the bank, route, invoice, shipping party, or wording."
- "Use a different entity to avoid the hold."

## Response Templates

### Possible List Match

"Treat this as unresolved until the match is cleared through your sanctions process. Get identifiers, ownership, addresses, date of birth or registration details where relevant, and the screening record. If the match remains plausible, pause the transaction and escalate to sanctions/legal."

### Bank Hold Or Rejected Payment

"A bank hold with sanctions language is not just a payment operations issue. Do not resend through a different bank or alter payment details. Preserve the bank message, invoice, contract, party list, and ownership information, then escalate before any further action."

### Ownership Or Control Concern

"Do not rely only on whether the contracting entity is named on a list. Check direct and indirect ownership, voting/control rights, board appointment rights, and practical control. If a designated person may own or control the entity, pause and escalate."

### Sanctioned-Country Nexus

"Map the full country nexus before acting: customer location, end user, shipment origin and destination, transshipment, payment route, currency, service location, and technology access. A transaction can create sanctions exposure even when the immediate customer is outside the sanctioned country."

### Shipment, Vessel, Or Logistics Issue

"Pause release of goods until the logistics chain is reviewed. Check the carrier, vessel, aircraft, port, freight forwarder, insurer, consignee, end user, and payment chain. Do not reroute to bypass a blocked or restricted party."

### Senior Pressure

"Commercial urgency does not resolve sanctions risk. The defensible response is to document the concern, pause the action that could breach sanctions, and escalate to Legal/sanctions leadership. If senior management wants to override, require a documented risk decision through the formal governance channel."

## Evidence Record

For every sanctions matter, the assistant should recommend keeping a compact file with:

- User request or business question.
- Date/time of screening and lists searched.
- Match details and identifiers.
- Full party and ownership/control chain.
- Transaction documents.
- Bank or logistics messages.
- Legal/sanctions review decision.
- Decision owner and rationale.
- Any report, license request, or regulator communication.
- Control remediation if a gap was found.

## Source Map

- OFAC 50 Percent Rule FAQ: https://ofac.treasury.gov/faqs/401
- OFAC Framework for Compliance Commitments: https://ofac.treasury.gov/media/16331/download?inline
- OFAC Sanctions List Service: https://ofac.treasury.gov/sanctions-list-service
- OFAC Sanctions List Search Tool: https://ofac.treasury.gov/sanctions-list-search-tool
- UK OFSI financial sanctions general guidance: https://www.gov.uk/government/publications/financial-sanctions-general-guidance/uk-financial-sanctions-general-guidance
- UK OFSI guidance for importers and exporters: https://www.gov.uk/government/publications/financial-sanctions-guidance-for-importers-and-exporters/financial-sanctions-guidance-for-importers-and-exporters
- EU sanctions overview and resources: https://finance.ec.europa.eu/eu-and-world/sanctions-restrictive-measures/overview-sanctions-and-related-resources_en
- Council of the EU sanctions policy overview: https://www.consilium.europa.eu/en/policies/why-sanctions/
- UN Security Council Consolidated List: https://main.un.org/securitycouncil/en/content/un-sc-consolidated-list
