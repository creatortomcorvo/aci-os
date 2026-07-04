# Decision Front Door Spec v0.1

Status: active methodology artifact.

Source: founder note "The Decision Front Door - full recommendation v2", reviewed 2026-07-04.

Relationship to prior file: this refines and supersedes the color and sequence rules in `04_Methodology/Triage_Layer_Spec_v0.1.md`. The older file remains useful history; this file is the active front-door design.

## Purpose

The Decision Front Door is the first product layer before a full answer.

Its job is to identify the situation, time pressure, role boundary, provisional status, and useful output shape before the system starts giving advice. The product should feel like an experienced colleague deciding what kind of conversation this is.

The front door is not a clearance layer.

## Operating Sequence

For every non-trivial live matter, use this sequence.

1. Situation picker.
2. Timing question.
3. Role-boundary echo.
4. Initial view with controlled color.
5. First answer.
6. Two to four tool-chosen questions.
7. Output menu.

The full sequence renders only when stakes justify it. Trivial questions may compress into one or two sentences. Crisis matters get Speed 1 before questions.

## Step 1 - Situation Picker

Use six to eight first-level chips, with free text always visible.

Default chips:

- Payment blocked / rejected.
- Regulator, police, inspection, or dawn raid.
- Gift, hospitality, donation, sponsorship, or travel.
- Third party, agent, distributor, supplier, or intermediary.
- Speak-up, allegation, investigation, or retaliation concern.
- Policy, program, training, monitoring, or remediation question.
- Advice versus approval / who owns the decision.
- Something else - describe it.

Every "something else" selection should be logged as product instrumentation. A rising rate means the pattern library or menu is wrong.

## Step 2 - Timing Question

Timing is a standing live-matter question, not optional.

Ask early:

"When is this needed - hours, days, or no deadline? And who set the deadline?"

Reason:

- Hours plus high stakes may require Speed 1 / crisis treatment.
- Days usually permit full judgment-call apparatus.
- No deadline often permits a lighter, calmer answer.
- Deadline provenance is diagnostic. A bank cutoff, regulator deadline, court date, or shipment hold may be a real external constraint. "The CEO wants it today" may be manufactured urgency and should be treated as part of the fact pattern.

Useful wording:

"Who set the deadline and what missing it costs is part of the risk picture."

## Step 3 - Role-Boundary Echo

The front door should label the user's role before answering.

Use six labels. One role label should be visible in the output for non-trivial live matters:

- Advice: explains rule, risk, options, and conditions; approves nothing.
- Recommendation: recommends approve / condition / decline / escalate; another owner decides.
- Compliance approval: only where policy demonstrably delegates approval authority to Compliance.
- Legal decision: counsel must own the legal answer.
- Management risk decision: management decides within law and policy; management cannot accept bribery, sanctions, retaliation, false-record, obstruction, or other non-acceptably illegal risk.
- Escalation mandatory: the matter must move to the designated owner before business action.

The mandate check lives inside "Compliance approval." If policy does not give Compliance approval authority, do not let the answer become approval by tone.

## Step 4 - Controlled Color

Color can orient the user, but it must not become visual clearance.

Allowed states:

### Advisory Green

Birth rule: immediate, but only where there is no live decision.

Examples:

- Training.
- Education.
- Policy explanation.
- Program design.
- Benchmarking.
- Drafting a generic checklist.

Meaning:

"Advisory mode - no live matter is being decided here."

Advisory green is a mode marker, not a risk conclusion.

### Routine Green

Birth rule: earned only after triage on a live matter.

Meaning:

"Routine policy path appears to apply to the facts as stated, as of [date]. Proceed per policy and document."

Routine green must point to the policy path. It must not say or imply "approved," "safe," "cleared," "no issue," or "no objection."

Screenshot-safe microcopy is mandatory because users will screenshot color.

### Neutral

Meaning:

"Gathering facts. No immediate-crisis indicators in the facts provided so far."

Neutral is not reassurance. It is a holding state.

### Amber

Meaning:

"Pause before approval or action. This may be possible, but only after facts, controls, approvals, or written conditions."

### Red

Meaning:

"Stop, preserve, hold, or escalate. No business action until the required owner confirms the path."

## Color Hard Rules

1. Amber and red can appear at any moment.
2. Amber and red should not quietly downgrade in-session. If downgrade is justified, record who changed it and why.
3. Green can only be reached, never assumed, except advisory green where no live decision exists.
4. No green in crisis mode.
5. No green under Legal Decision or Escalation Mandatory labels.
6. Urgent plus approval request is amber minimum, always. Short notice to advise is normal. Short notice to approve is a pressure pattern.
7. A green state must carry no-clearance microcopy.
8. If color and text conflict, text controls and the incident is a QA defect.
9. Split verdicts are by fact pattern, not by conversation. One routine sub-item can remain on a policy path while another sub-item is amber or red.

## Step 5 - First Answer

Crisis patterns get a pre-written Speed 1 header that closes unsafe doors without granting permission.

Door-closing rule:

- Speed 1 may say what not to do, what not to decide yet, what to preserve, and who must own the next step.
- Speed 1 must not grant affirmative permission.
- Speed 1 must not make fact-dependent claims that Speed 2 could later need to reverse.
- Recognition of the pattern is the reassurance; do not add theatrical empathy.

Other non-trivial matters get one line of pattern recognition.

Examples:

- "Success fee plus vague services - the combination matters more than either fact alone."
- "Hospitality for a decision-maker - the ticket is not the only question."
- "A blocked payment followed by a substitute route is a rerouting-risk pattern."

## Step 6 - Tool-Chosen Questions

The product chooses the questions.

The user may choose the situation type or write freely. The user should not have to decide which questions matter.

Default question budget:

- Two to four visible questions for non-trivial matters.
- The timing question counts toward the budget.
- Crisis and escalation-mandatory modes may use fewer questions.
- Trivial matters may use no visible question or one visible assumption.

Each question should support:

- Suggested answer chips where useful.
- "Don't know" as a first-class answer.
- Free text one tap away.

"Don't know" becomes a gap, not a user failure.

Question banks should include at least:

- Decision context.
- Benefit / payment / hospitality.
- Investigation / misconduct.
- Program / policy.

## Step 7 - Output Menu

Offer five choices, not ten.

Default options:

- Quick risk view.
- Conditions to make it compliant.
- Draft the reply to the business.
- Escalation / counsel memo.
- My own question.

"Draft the reply" is first-class because much of the compliance officer's job is finding words that are firm, useful, and documentable.

"Approval note" is not a product output unless reframed as documentation for the officer's own verified delegated authority. The tool documents facts, assumptions, conditions, evidence, and owner. The officer decides only where policy gives that authority.

## Pressure Detector

Run silently underneath the front door.

Signals include:

- "We need this today."
- "The CEO already agreed."
- "Everyone does it."
- "Just say no objection."
- "Don't write too much."
- "How do we make it okay?"
- "It is strategic."
- "It is only hospitality."

When a signal is triggered, name the move once in the answer:

"The deadline is part of the risk picture, not just an operational constraint."

or:

"The request for the plain word yes is itself important; it may be a request for cover rather than advice."

## Proportionality

The full front door is not the default visible template.

- Pen / notebook questions: short answer, visible assumption, no color required.
- Advisory education: advisory green can render as a mode marker.
- Judgment call: pattern line, role label, timing, controlled color, two to four questions.
- Crisis: Speed 1 first, then narrow questions.
- Counsel-boundary: convert to counsel briefing and safe interim steps.
- Escalation mandatory: stop / preserve / handoff.

Template inflation at the entrance is still an F7 failure.

## Acceptance Verdict

Act:

- Promote timing to the second question for live matters.
- Expand role-boundary labels to six.
- Adopt controlled color with advisory green and earned routine green.
- Add output menu and pressure detector.
- Add Speed-1 door-closing rule.
- Require a visible role label for non-trivial live matters.

Correct:

- Green is not generally banned, but unearned green on a live matter remains a clearance failure.
- Routine green is not an approval. It must point to a policy path, as of stated facts and date.
- Advisory green is only a mode marker where there is no live decision.

Park:

- Full v0.5 consolidation.
- Detailed instrumentation schema for "something else" rates and pressure-signal analytics.
- Full question banks beyond the initial categories.

Discard:

- Any design that lets the user pick which questions matter.
- Any "approval note" output that turns the tool into the approver.

## Change Log

- v0.1 - Created active Decision Front Door spec: situation picker, mandatory timing question, six role labels, controlled color with advisory and earned routine green, first answer, tool-chosen questions, output menu, pressure detector, and proportional rendering.
