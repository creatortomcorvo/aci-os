# Triage Layer Spec v0.1

Status: historical methodology artifact. Superseded for active front-door behavior by `04_Methodology/Decision_Front_Door_Spec_v0.1.md`.

Source: founder note on short first response, initial question menu, severity signal, and advice / approval / management risk decision classification, reviewed 2026-07-04.

## Purpose

The triage layer is the front door before the full answer.

It should help a stressed user explain the situation quickly without forcing them to write a perfect paragraph, while preserving the product's judgment role.

## Core Sequence

Interface-agnostic sequence:

1. Situation picker, with free text always available.
2. Request-type echo.
3. Mode and provisional severity.
4. Two to four tool-chosen triage questions, with suggested answer chips, "don't know," and free text.
5. Speed-1 or answer shape per mode and apparatus weight.

In chat, this can render as a short opening and 2-4 questions.

In an app, it can render as buttons, chips, fields, and color signals.

The methodology is the same.

## Situation Picker

The situation picker helps the user start.

Useful first-level options:

- Frozen / rejected / blocked payment.
- Regulator, police, inspection, or dawn raid.
- Gift, hospitality, travel, donation, or sponsorship.
- Third party, agent, distributor, intermediary, or supplier.
- Speak-up, hotline report, investigation, or retaliation concern.
- Sanctions, export-control, restricted goods, or end-user concern.
- Conflict of interest or related-party concern.
- Program, policy, training, monitoring, or remediation question.
- Advice versus approval / who owns the decision.
- Something happened already.
- Just thinking / need sparring.
- Something else.

Free text must always be one tap away.

"Something else" and free-text overrides are useful instrumentation. If the "something else" rate stays high, the picker is wrong or incomplete.

## Request-Type Echo

After the situation picker, ACI-OS should echo what kind of help the user appears to be asking for.

Visible request types:

- Advice: "Help me understand the risk and conditions."
- Formal Compliance approval: "Policy gives Compliance approval authority."
- Input to management risk decision: "Management owns go/no-go, Compliance gives risk view."
- Counsel briefing: "Help me prepare the lawyer conversation."
- Thinking room: "Help me structure my own judgment."
- Draft wording: "Help me say this to business / CEO / board."

This is where the advice / approval / management risk decision distinction becomes architecture rather than only answer content.

If the user selects formal Compliance approval, ACI-OS must still ask whether policy actually assigns that approval authority to Compliance.

## Provisional Severity

ACI-OS may show early severity because it calms and orients the user.

Allowed severity signals:

- Neutral: no immediate crisis indicators in the facts provided so far.
- Amber: needs care; more facts or controls are required before action.
- Red: stop / hold / preserve / escalate before action.

Hard rule: no green.

A green signal before analysis is a visual clearance leak. It can function as "safe" before the facts are known.

No immediate-crisis indicators should be expressed in words, not a soothing color:

"No immediate-crisis indicators in what you have told me so far, as of these facts."

Severity may escalate as answers land. Red should not quietly downgrade within the same session unless a human owner deliberately reclassifies the matter and records why.

## Triage Questions

The product chooses the triage questions.

The user should not choose which questions matter. Choosing the questions is part of the Consigliere's judgment.

Default for non-trivial, non-crisis situations:

- One-line pattern recognition.
- Two to four questions that change the answer.
- Suggested answer chips where useful.
- Always include "don't know."
- Always include free text.

"Don't know" is a first-class answer. It becomes a gap, not a user failure.

Examples of answer chips:

- Pending decision? "Tender live" / "Renewal" / "No pending decision" / "Don't know" / "Other."
- Public-sector touchpoint? "Government" / "State-owned entity" / "Federation or sports body" / "None known" / "Don't know" / "Other."
- Status? "Proposed only" / "Approved not executed" / "Already happened" / "Paid/booked" / "Discovered later" / "Don't know."

## Proportionality Rule

Triage always happens in the reasoning.

Whether it renders as visible questions depends on stakes.

- Trivial matters may get an answer with one visible assumption.
- Non-trivial judgment calls get two to four questions.
- Crisis patterns get Speed-1 first, then controlled questions.
- Counsel-boundary and escalation-mandatory patterns get fewer questions and safer handoff wording.

This preserves proportional rendering and avoids reinstalling template inflation at the front door.

## No-Clearance Safeguards

The triage layer must not produce visual or wording shortcuts that imply clearance.

Avoid:

- Green status.
- "Looks fine."
- "No issue."
- "Cleared."
- "Approved."
- "No objection."

Use:

- "No immediate-crisis indicators in the facts so far."
- "Needs review before action."
- "Do not proceed yet."
- "Conditions required before management decision."
- "Counsel / escalation owner should take this."

## Supersession Note

This file introduced the first triage layer. Its hard "no green" rule has been refined, not simply deleted. Active behavior now allows advisory green where there is no live decision and earned routine green after triage on live matters, with no-clearance microcopy and strict birth rules. Unearned green on a live matter remains a clearance failure.

## Change Log

- v0.1 - Created triage-layer methodology: situation picker, request-type echo, provisional severity with no green, tool-chosen questions, answer chips, don't-know/free-text handling, and proportional rendering.
- v0.1.1 - Marked as historical after Decision Front Door Spec v0.1 refined the active color and sequence rules.
