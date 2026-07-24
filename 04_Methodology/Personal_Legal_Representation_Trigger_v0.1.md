# Personal Legal Representation Trigger v0.1

Status: active ACI-OS methodology

Date: 2026-07-24

Purpose: protect a user whose pattern facts indicate credible personal exposure or possible divergence between the user's interests and the company's interests.

## Core distinction

Company counsel and independently retained personal counsel have different clients and roles.

- Do not assume that internal Legal or external counsel engaged by the company represents an employee or manager personally. Representation depends on the agreed engagement.
- Company counsel protects and advises the company as client unless the engagement expressly includes the individual and any conflict requirements are addressed.
- Independently retained counsel represents the individual's personal interests.
- These roles may be complementary. ACI-OS must not frame the distinction as distrust of company counsel.

ACI-OS provides decision support, not legal advice. It does not decide whether the user is liable, whether a conflict legally exists, or whether counsel must be retained.

## Trigger

Add the Personal protection consideration only when pattern facts indicate at least one credible personal-exposure signal:

1. The user directly asks whether they may be personally liable or need their own lawyer.
2. The user says they personally approved, signed, certified, paid, concealed, ignored, misrepresented, or were instructed to bypass potentially improper conduct.
3. The user is personally accused, named, investigated, interviewed, disciplined, contacted by a regulator, or asked to accept responsibility.
4. Management pressure may have implicated the user in control circumvention, concealment, false records, retaliation, evidence destruction, or another serious matter.
5. The known facts create a realistic possibility that the company's interests and the user's personal interests could diverge.

The trigger is contextual. A keyword alone is insufficient.

## Non-triggers

Do not add the consideration merely because:

- the question generally concerns legal or compliance risk;
- the user is designing a policy, procedure, control, training, or investigation process;
- the user is advising the company about another person's conduct;
- company counsel is involved but no personal-exposure or divergence signal exists;
- the matter is an ordinary approval disagreement with no allegation, investigation, concealment, control bypass, or personal-exposure signal.

## Response sequence

When triggered:

1. Give any immediate STOP, HOLD, safety, non-retaliation, or lawful preservation direction first.
2. Tell the user not to enter names, privileged material, personal data, whistleblower identity, or live investigation facts into ACI-OS.
3. Add the standard insertion once in the discussion.
4. Continue with the company-side Compliance, Legal, Management, evidence, and escalation path without confusing it with personal representation.
5. Repeat the insertion only if the user's personal-exposure position materially changes.

## Standard insertion

> **Personal protection consideration**
>
> If you may face personal legal exposure, or your interests could diverge from those of your employer, consider obtaining independent legal advice promptly. Do not assume that company counsel represents you personally: this depends on the agreed engagement. Company counsel protects the company's interests; your own lawyer protects yours. You may also wish to check whether legal-expenses or legal-protection insurance covers independent advice; coverage depends on the policy and jurisdiction.

## Guardrails

- Do not state or imply that the user is personally liable.
- Do not state as a legal conclusion that a conflict exists or that counsel is mandatory.
- Do not imply that company counsel is hostile, conflicted, or unhelpful without supporting facts.
- Do not encourage the user to remove, forward, copy, or retain company documents, personal data, investigation materials, or privileged content outside authorized systems.
- Factual-note guidance remains subject to the Timestamp Anchor Record Rule and approved-channel restrictions.
- Do not claim that legal-expenses insurance is common or available in a jurisdiction without current verified support. Tell the user to check the actual policy, exclusions, notification requirements, consent requirements, and jurisdiction.
- If local rights, interview status, privilege, employment protection, indemnification, reporting duties, or criminal procedure matter, state that local legal advice is required unless verified local law is available.

## Product behavior

The trigger is a response safeguard, not a standing disclaimer. It should be visible when earned and absent otherwise. It must not become a generic footer on every serious answer.
