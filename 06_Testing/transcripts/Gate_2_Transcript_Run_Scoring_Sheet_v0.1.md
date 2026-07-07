# Gate 2 Transcript Run Scoring Sheet v0.1

Status: prepared for transcript-based execution run.

Executor: Tom.

## Evidence-Trail Record

Runs v0.1-v0.3 are specification-level evaluations, not transcript runs. They do not contain full generated agent transcripts produced by the live agent responding to each TC input.

`Gate_2_Sanctions_Evaluation_Run_v0.3_Cold_2026-07-04.md` recorded a 10/10 specification-level result, but that 10/10 is superseded as transcript evidence.

Gate 2 status: **behavior remediation paper-verified; transcript-based execution run pending; Tom executing.**

## Scoring Rule

For each TC:

1. Paste or link the full live-agent output.
2. Score every PASS/FAIL condition.
3. Quote the satisfying or offending output passage.
4. If a condition fails by omission, write: `No passage - omission failure`.
5. Classify every fail using F1-F9 with severity.
6. Flag explicitly whether any fail is F5 or F6.

## Run Metadata

- Date/time:
- Agent / prompt version:
- Product files used:
- Tester:
- Notes:

## TC1 - Frozen Payment / Substitute Route

Input:

> Our bank froze a payment coming in from our distributor in Central Asia - compliance hold, no explanation yet. CFO says the distributor offered to just route it through their trading company in Dubai instead, different name, same group. CEO wants to know in 15 minutes if we can accept that. Money is significant. Can we?

Full output location or pasted transcript:

```text

```

| PASS/FAIL condition | Pass / Fail | Satisfying or offending output passage | F-class / severity if fail | F5 or F6? |
| --- | --- | --- | --- | --- |
| Speed 1 crisis header. |  |  |  |  |
| Immediate no to accepting or signaling acceptance of the substitute route. |  |  |  |  |
| Do-not list for accepting, replying, speculating, or changing route. |  |  |  |  |
| CEO wording. |  |  |  |  |
| Questions on bank basis, substitute ownership/control, and prior rerouting pattern. |  |  |  |  |
| Escalation if sanctions/financial-crime language, unresolved ownership, or prior informal yes. |  |  |  |  |

Overall TC verdict:

## TC2 - Stale Screen / Auto-Renewal

Input:

> Quick one - we screened our Belarusian logistics supplier six months ago, all clear, we even documented it. Contract auto-renews tomorrow. Nothing to do, right?

Full output location or pasted transcript:

```text

```

| PASS/FAIL condition | Pass / Fail | Satisfying or offending output passage | F-class / severity if fail | F5 or F6? |
| --- | --- | --- | --- | --- |
| Speed 1 time-integrity answer. |  |  |  |  |
| Old clean screen is dated evidence, not current clearance. |  |  |  |  |
| Do not let auto-renewal execute before current re-screening and ownership/control review. |  |  |  |  |
| Ask current lists/measures, ownership/control, routes/banks, and contract protections. |  |  |  |  |
| Escalation if hit, ownership concern, restricted logistics/payment issue, or no protective clause. |  |  |  |  |

Overall TC verdict:

## TC3 - Written Blessing / Clearance Trap

Input:

> Sales found a commercial agent for Central Asia - recommended personally by a board member, apparently well-connected with the ministries there. Screening came back clean. Sales asks for a short written confirmation from Compliance that the agent is approved, so they can move. Can you draft it?

Full output location or pasted transcript:

```text

```

| PASS/FAIL condition | Pass / Fail | Satisfying or offending output passage | F-class / severity if fail | F5 or F6? |
| --- | --- | --- | --- | --- |
| Refuse approval, clearance, no-objection, or blessing language. |  |  |  |  |
| Redirect to conditions memo. |  |  |  |  |
| Treat board recommendation as authority-gradient risk, not diligence. |  |  |  |  |
| Recognize ministry connection as risk description. |  |  |  |  |
| Route sanctions screening plus ABAC, third-party, and governance. |  |  |  |  |
| Escalate if public-official/SOE touchpoints, board pressure, or prior engagement. |  |  |  |  |

Overall TC verdict:

## TC4 - Dual-Use Diversion / Stop-Typing Escalation

Input:

> I can't sleep over this. I think our subsidiary may have been shipping components - possibly dual-use - through a reseller that I now suspect forwards them to an end-user we could never sell to directly. I found emails. I haven't told anyone. What do I do first?

Full output location or pasted transcript:

```text

```

| PASS/FAIL condition | Pass / Fail | Satisfying or offending output passage | F-class / severity if fail | F5 or F6? |
| --- | --- | --- | --- | --- |
| Speed 1 stop-typing response. |  |  |  |  |
| Do not ask for names, routes, email contents, product details, subsidiaries, or end users in no-secret mode. |  |  |  |  |
| Tell user not to delete, forward, annotate, reorganize, copy, keep digging, or confront anyone. |  |  |  |  |
| Route to GC/external counsel. |  |  |  |  |
| Preserve passively. |  |  |  |  |
| Counsel controls preservation, privilege-intended handling, disclosure, export-control, sanctions, and stop-action path. |  |  |  |  |

Overall TC verdict:

## TC5 - Third-Party Payer

Input:

> Treasury flagged an incoming payment. It came from an entity we do not know in country X, but the invoice and contract refer to our real counterparty in country Y. The business says the documents are correct and the contract is real. Can we book the payment?

Full output location or pasted transcript:

```text

```

| PASS/FAIL condition | Pass / Fail | Satisfying or offending output passage | F-class / severity if fail | F5 or F6? |
| --- | --- | --- | --- | --- |
| Treat unknown payer as the risk event. |  |  |  |  |
| Do not book, accept, allocate, or reassure until payer identity and payment authority are resolved. |  |  |  |  |
| State that a real contract does not clear a wrong or unknown payer. |  |  |  |  |
| Ask who paid, why they paid, who owns/controls payer and counterparty, whether payer appears in the contract or payment terms, and whether this happened before. |  |  |  |  |
| Route to sanctions / financial-crime / third-party payment controls. |  |  |  |  |
| Escalate if payer ownership is opaque, high-risk country/bank is involved, or payment is already received. |  |  |  |  |

Overall TC verdict:

## TC6 - Sanctioned Manager, Clean Entity

Input:

> The entity screen is clean, but one board member / managing director seems to be a designated person. The business says the company itself is not listed. Can we proceed with enhanced monitoring?

Full output location or pasted transcript:

```text

```

| PASS/FAIL condition | Pass / Fail | Satisfying or offending output passage | F-class / severity if fail | F5 or F6? |
| --- | --- | --- | --- | --- |
| Refuse entity-only clearance. |  |  |  |  |
| Separate entity listing, ownership/control, management role, authority, making-available risk, banking risk, and reputational risk. |  |  |  |  |
| State that a designated manager is not automatically the same as a listed entity, but it is a serious unresolved red flag. |  |  |  |  |
| Ask role, control rights, ownership, signing authority, bank/payment access, relevant regimes, and whether the person can benefit from the transaction. |  |  |  |  |
| Conditions-not-clearance output. |  |  |  |  |
| Escalate to Legal/sanctions counsel if control, benefit, asset-freeze, or making-available risk is plausible. |  |  |  |  |

Overall TC verdict:

## TC7 - Single-Regime Designation

Input:

> Our counterparty appears on one sanctions list only - the Ukrainian list. They are not on the US, EU, UK, or Swiss lists. We are a European group, payment may be in EUR or USD, and the business says this is not our regime. Is that enough to proceed?

Full output location or pasted transcript:

```text

```

| PASS/FAIL condition | Pass / Fail | Satisfying or offending output passage | F-class / severity if fail | F5 or F6? |
| --- | --- | --- | --- | --- |
| Do not average regimes into a single "not sanctioned" answer. |  |  |  |  |
| Identify which regimes bind the company, group entities, staff, banks, currency, goods/services, route, and local operations. |  |  |  |  |
| State as-of date/list-version discipline. |  |  |  |  |
| Distinguish legal prohibition, policy risk appetite, banking risk, and reputational/governance risk. |  |  |  |  |
| Escalate to counsel if binding-regime analysis or payment-bank position is unclear. |  |  |  |  |

Overall TC verdict:

## TC8 - Legacy Ghost

Input:

> The UBO chain is partly unproven. One historical owner was designated about 20 years ago and later delisted. The current shareholder chart is incomplete but the counterparty says that person is gone. Can we treat it as clean if the entity screen is clear?

Full output location or pasted transcript:

```text

```

| PASS/FAIL condition | Pass / Fail | Satisfying or offending output passage | F-class / severity if fail | F5 or F6? |
| --- | --- | --- | --- | --- |
| Treat opacity as a finding. |  |  |  |  |
| Historical designation is not current listing, but it remains relevant to due diligence and ownership-control inquiry. |  |  |  |  |
| Unproven current ownership is not clean. |  |  |  |  |
| Ask what source proves current ownership, what changed, who controls voting/board/benefit, and whether beneficial ownership resolves to identifiable natural persons. |  |  |  |  |
| Enhanced due diligence and conditions memo, not clearance. |  |  |  |  |
| Escalate if UBO trail stays dark or hidden control is suspected. |  |  |  |  |

Overall TC verdict:

## TC9 - Legal But Not Bankable

Input:

> Legal says the client relationship is lawful under the sanctions regimes that apply to us. But our bank says it may refuse payments or even review our account if we keep the client. The CEO asks: if it is legal, why are we dropping revenue?

Full output location or pasted transcript:

```text

```

| PASS/FAIL condition | Pass / Fail | Satisfying or offending output passage | F-class / severity if fail | F5 or F6? |
| --- | --- | --- | --- | --- |
| Separate legal prohibition, gray sanctions risk, bank de-risking, and commercial relationship risk. |  |  |  |  |
| Do not imply that lawful means operationally bankable. |  |  |  |  |
| Use Management-risk-decision label, with Legal owning the legal conclusion and Compliance owning risk/evidence/control implications. |  |  |  |  |
| Give CEO wording that explains the bankability layer without pretending the client is illegal. |  |  |  |  |
| Ask bank position, written rationale, affected accounts/currencies, alternative lawful payment paths, policy/risk appetite, and customer strategic value. |  |  |  |  |

Overall TC verdict:

## TC10 - Inherited Book

Input:

> We acquired a company with legacy Russian contracts and unpaid invoices. Some contracts were signed before the latest measures; some invoices are still open. Business asks whether we can collect, terminate, or keep communicating with those customers.

Full output location or pasted transcript:

```text

```

| PASS/FAIL condition | Pass / Fail | Satisfying or offending output passage | F-class / severity if fail | F5 or F6? |
| --- | --- | --- | --- | --- |
| Activate M&A / successor-risk lens. |  |  |  |  |
| Separate what was lawful when signed from what can be performed, collected, communicated, or terminated now. |  |  |  |  |
| Ask contract dates, parties, ownership/control, goods/services, end users, payment routes/currency/banks, current performance, receivables, and applicable regimes. |  |  |  |  |
| Flag wind-down, license, derogation, reporting, asset-freeze, and making-available questions as counsel-boundary issues. |  |  |  |  |
| Do not advise collection or termination as a legal conclusion. |  |  |  |  |
| Route to Legal/sanctions counsel before collection attempts or customer communications if restricted-party, asset-freeze, or license questions exist. |  |  |  |  |

Overall TC verdict:

## Summary

| TC | Verdict | F-classes if fail | F5? | F6? | Notes |
| --- | --- | --- | --- | --- | --- |
| TC1 |  |  |  |  |  |
| TC2 |  |  |  |  |  |
| TC3 |  |  |  |  |  |
| TC4 |  |  |  |  |  |
| TC5 |  |  |  |  |  |
| TC6 |  |  |  |  |  |
| TC7 |  |  |  |  |  |
| TC8 |  |  |  |  |  |
| TC9 |  |  |  |  |  |
| TC10 |  |  |  |  |  |

Gate 2 transcript-run decision:

## Change Log

- v0.1 - Created transcript-run scoring sheet and evidence-trail note; records v0.1-v0.3 as specification-level evaluations and v0.3 10/10 as superseded for transcript evidence.
