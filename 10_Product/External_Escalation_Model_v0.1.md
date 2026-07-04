# External Escalation Model v0.1

## Purpose

ACI-OS should support external escalation for serious compliance matters, but it must not pretend that a live external escalation integration exists until one is actually built and secured.

The intended future model is a configurable external expert channel, including KRUK / kruk.ch where appropriate.

## Core Rule

ACI-OS may recommend external escalation. It must not automatically transmit company secrets, personal data, investigation details, whistleblower identities, sanctions facts, or other sensitive information to any external party unless the user is in a properly configured secure mode and has explicitly approved the transfer.

## Trigger Categories

The system should consider external escalation when a matter involves:

- Harassment, discrimination, retaliation, or speak-up protection risk.
- Sanctions, embargoes, restricted parties, ownership/control, blocked payments, or sanctions evasion.
- Fraud, accounting manipulation, falsified documents, theft, or misuse of assets.
- Bribery, kickbacks, facilitation payments, public officials, state-owned entities, or improper advantages.
- Money laundering, tax evasion, market abuse, or other potential criminal conduct.
- Competition law risk, bid rigging, market sharing, price coordination, or sensitive competitor contact.
- Senior management, board members, country managers, or high performers implicated in misconduct.
- Regulator, law enforcement, dawn raid, subpoena, inspection, or compulsory information request.
- Evidence deletion, obstruction, witness pressure, or conflict of interest in the internal process.
- Internal Compliance is isolated, under-resourced, overridden, or not independent enough to handle the matter alone.

## Escalation Levels

### Internal Escalation

First identify the internal owner: Legal, Compliance, HR, Internal Audit, Data Protection, Security, Finance, the board, audit committee, or another governance body.

### External Expert Escalation

If the matter is high-risk, conflicted, legally sensitive, or requires independent judgment, ACI-OS should recommend considering external expert support.

Configured external expert examples may include:

- KRUK / kruk.ch.
- External counsel.
- Forensic investigator.
- Sanctions specialist.
- Employment counsel.
- Speak-up or investigation specialist.
- Competition law counsel.
- Data protection counsel.

### Emergency / Authority Escalation

If there is immediate legal or safety exposure, ACI-OS should advise the user to follow the company's emergency protocol and involve the appropriate internal or external legal owner before contacting authorities directly, unless law or safety requires otherwise.

## Data Protection Guardrails

In no-secret mode, ACI-OS should produce only a sanitized escalation summary. It should avoid:

- Names of reporters, accused persons, witnesses, or counterparties.
- Client names.
- Transaction values.
- Bank details.
- Personal data.
- Confidential documents.
- Investigation facts that are not necessary for first contact.

In secure company-material mode, ACI-OS may help prepare a fuller escalation pack only if the configured security, access control, retention, and authorization rules allow it.

## Suggested First-Contact Template

Use a sanitized first-contact note unless the user is in a secure approved workflow:

"We have a high-risk compliance matter involving [risk category]. I need independent support on triage, preservation, escalation route, and next steps. I can share a sanitized summary first and then provide details through an approved secure channel."

## Product Requirement

Future product design should allow the user or company admin to configure:

- External escalation contacts.
- Which risk categories trigger suggested escalation.
- Whether KRUK / kruk.ch is available as an escalation option.
- Whether escalation is only advisory or can generate a draft email/task.
- What information can be included in no-secret mode.
- What information can be included in secure company-material mode.
- Approval requirements before any external transmission.
