# User Memory And Recall Model v0.1

Status: active product architecture note.

Source: Tom's key question on whether users should be able to return to what they asked last week or last year, reviewed 2026-07-04.

## Short Answer

Yes, memory should be planned.

But memory cannot mean "the app remembers everything by default."

For ACI-OS, memory is a controlled product capability with different rules depending on the operating mode.

## Why Memory Matters

Calibration helps the product answer better today.

Memory helps the product become useful over time.

The user should be able to ask:

- What did I ask about this topic last week?
- What did we decide about this third-party process?
- Which issues keep coming back?
- What did I tell the CEO last time?
- What open conditions or escalations did we leave?
- What patterns should I teach the system from this week?
- What should become a procedure, workflow, training, or control?

This is central to Adaptive Compliance Intelligence.

## Memory Layers

### Layer 1 - User And Role Profile Memory

Purpose: calibrate answer style.

Examples:

- User role: Head of Compliance, Legal Counsel wearing Compliance Hat, HR, Finance, Audit, business manager.
- User maturity level.
- Preferred answer style.
- Common pressure points.
- Usual reporting line.

No-secret mode can store this only if it contains no company secrets or personal data.

### Layer 2 - Company Profile Memory

Purpose: calibrate advice to approved company context.

Examples:

- Company size, industry, operating countries.
- Reporting line.
- Hotline or speak-up provider.
- Sanctions tool.
- Investigation procedure.
- Outside counsel availability.
- Internal Audit presence.
- Risk appetite.
- Program maturity.
- Key policies and workflows.

This belongs mainly in secure company-material mode.

### Layer 3 - Conversation Recall Memory

Purpose: let the user return to prior discussions.

Examples:

- Prior questions.
- Topics discussed.
- Conditions noted.
- Open gaps.
- Suggested next steps.
- Draft wording prepared.
- User decisions or risk-owner decisions, where recorded.

Design rule: recall should preferably store structured summaries and Reasoning Records, not uncontrolled raw chat.

### Layer 4 - Matter / Decision Memory

Purpose: keep continuity on serious issues.

Examples:

- Matter title or abstracted pattern.
- Date.
- Mode and expert routes.
- Known facts at that time.
- Missing facts.
- Escalation owner.
- Conditions.
- Decision owner.
- Status: open, waiting, escalated, closed, superseded.

In no-secret mode this must remain anonymized and pattern-based. In secure company-material mode it may include company-specific details only if approved.

### Layer 5 - Learning / Pattern Memory

Purpose: improve the methodology.

Examples:

- Repeated user questions.
- "Something else" selections in triage.
- Failed or corrected responses.
- Article candidates.
- Candidate new pattern cards.
- Procedure / training / workflow opportunities.

This should be reviewed before becoming reusable product logic.

## Operating Modes

### No-Secret Mode

Memory may include:

- Role preferences.
- Abstracted patterns.
- Non-identifiable question history.
- User-approved notes.
- Generic lessons learned.

Memory must not include:

- Company secrets.
- Personal data.
- Whistleblower identity.
- Live investigation facts.
- Privileged material.
- Client-identifiable or matter-identifiable facts.
- Confidential pricing, strategy, deal names, or contract identifiers.

Default posture: ask before saving anything that could become sensitive.

### Secure Company-Material Mode

Memory may include approved company materials and prior company-specific conversations, subject to:

- Access control.
- Authentication.
- User / role permissions.
- Tenant separation.
- Retention rules.
- Deletion and export rights.
- Audit logs.
- Security review.
- DPA / procurement / legal review where applicable.

This mode should cost more because it is a materially different security and governance product.

## User Controls

The user should be able to see and control memory.

Minimum controls:

- Save this.
- Do not remember this.
- Forget this item.
- Show what you remember about me.
- Show what you remember about this company profile.
- Show prior related conversations.
- Mark as superseded.
- Export memory / Reasoning Record where allowed.

Memory should not be mysterious.

## Recall Behavior

When using memory, ACI-OS should say what it is relying on.

Example:

"Based on your saved company profile and the prior discussion on 2026-07-04, this looks similar to the distributor-approval issue we treated as a conditions-memo matter. I am not assuming the facts are the same; here is what must be checked again."

Rules:

- Do not treat old memory as current fact.
- Do not treat prior no-hit, prior approval, or prior advice as current clearance.
- Show date and status of remembered material.
- Flag if remembered material may be stale.
- Ask what has changed.

## Memory Is Not Clearance

Memory must never become a quiet approval engine.

Bad memory behavior:

"We approved this type of agent last year, so this one is probably fine."

Good memory behavior:

"Last year we used a conditions memo for a similar agent structure. The same categories need checking again: ownership/control, service scope, fee, public-sector touchpoints, payment route, and decision owner."

## Relationship To Reasoning Records

Reasoning Records are the safest memory unit for serious matters.

They are structured, timestamped, and clear about:

- Facts known at that time.
- Missing facts.
- Assumptions.
- Professional judgment.
- Escalation triggers.
- Recommended next step.
- Decision owner.
- Version and date.

They are still not legal advice, clearance, proof of correctness, or privilege.

## Product Questions To Resolve Later

- Should memory be opt-in by default or on by default only in secure mode?
- How long should no-secret memory be retained?
- Can users maintain separate personal, team, and company memory spaces?
- What is the audit log standard for memory access?
- Who can delete company memory?
- How should memory interact with external counsel or KRUK / kruk.ch escalation?
- How should memory support weekly reflection and article prompts?

## Change Log

- v0.1 - Created user memory and recall model: five memory layers, no-secret vs secure company-material mode, user controls, recall behavior, and no-clearance guardrails.
