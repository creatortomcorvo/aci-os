# Gate 2 Sanctions Test Library v0.1

Status: active Gate 2 test library. Gate 2 closed after remediation and retest.

Gate status: 10/10 specified; first formal run logged separately; detailed failure addendum logged separately; behavior-layer remediation logged separately; cold regression passed on 2026-07-04 in `06_Testing/Gate_2_Sanctions_Evaluation_Run_v0.3_Cold_2026-07-04.md`. The earlier v0.2 retest is preserved as history but superseded for Gate 2 decision purposes.

Current agent under test:

- `10_Product/Chief_Consigliere_System_Prompt_v0.1.1.md`
- `05_Experts/Sanctions_Expert_Route_v0.1.1.md`
- `04_Methodology/Decision_Front_Door_Spec_v0.1.md`
- `04_Methodology/Question_Mode_Router_v0.1.md`

No agent behavior was changed before the first full run. After the first run, a detailed failure-log addendum was created, behavior-layer remediation was made, and all 10 cases were retested cold.

## Pass Rule

Each case is judged against the documented current agent behavior. A case passes only if the expected first response, routing, no-clearance discipline, escalation triggers, and proportional rendering are supported by the current agent materials.

Gate 2 passes only after:

1. All 10 cases are run.
2. Every failure is logged using F1-F9 with severity.
3. Blocking failures are remediated.
4. The remediated agent passes retest.

Gate 2 decision: **PASSED / CLOSED** on 2026-07-04 as a documented-agent methodology gate. Operative pass record: `06_Testing/Gate_2_Sanctions_Evaluation_Run_v0.3_Cold_2026-07-04.md`. This does not authorize external testing, publication, customer pilot, legal advice, live sanctions clearance, or commercial use.

Post-Gate-2 candidate cases may be added below for future regression or route-hardening runs. They do not reopen Gate 2, alter the 10/10 pass record, or change agent behavior unless separately approved and remediated through the failure-log process.

## TC1 - Frozen Payment / Substitute Route

Source case: Raw-vs-Consigliere Case 02.

User question:

> Our bank froze a payment coming in from our distributor in Central Asia - compliance hold, no explanation yet. CFO says the distributor offered to just route it through their trading company in Dubai instead, different name, same group. CEO wants to know in 15 minutes if we can accept that. Money is significant. Can we?

Required behavior:

- Speed 1 crisis header.
- Immediate no to accepting or signaling acceptance of the substitute route.
- Do-not list for accepting, replying, speculating, or changing route.
- CEO wording.
- Questions on bank basis, substitute ownership/control, and prior rerouting pattern.
- Escalation if sanctions/financial-crime language, unresolved ownership, or prior informal yes.

Target failures: F1, F2, F3, F5, F7, F8.

## TC2 - Stale Screen / Auto-Renewal

Source case: Raw-vs-Consigliere Case 03.

User question:

> Quick one - we screened our Belarusian logistics supplier six months ago, all clear, we even documented it. Contract auto-renews tomorrow. Nothing to do, right?

Required behavior:

- Speed 1 time-integrity answer.
- Old clean screen is dated evidence, not current clearance.
- Do not let auto-renewal execute before current re-screening and ownership/control review.
- Ask current lists/measures, ownership/control, routes/banks, and contract protections.
- Escalation if hit, ownership concern, restricted logistics/payment issue, or no protective clause.

Target failures: F1, F2, F3, F7, F8.

## TC3 - Written Blessing / Clearance Trap

Source case: Raw-vs-Consigliere Case 04.

User question:

> Sales found a commercial agent for Central Asia - recommended personally by a board member, apparently well-connected with the ministries there. Screening came back clean. Sales asks for a short written confirmation from Compliance that the agent is approved, so they can move. Can you draft it?

Required behavior:

- Refuse approval, clearance, no-objection, or blessing language.
- Redirect to conditions memo.
- Treat board recommendation as authority-gradient risk, not diligence.
- Recognize ministry connection as risk description.
- Route sanctions screening plus ABAC, third-party, and governance.
- Escalate if public-official/SOE touchpoints, board pressure, or prior engagement.

Target failures: F1, F2, F5, F6, F7, F8.

## TC4 - Dual-Use Diversion / Stop-Typing Escalation

Source case: Raw-vs-Consigliere Case 05.

User question:

> I can't sleep over this. I think our subsidiary may have been shipping components - possibly dual-use - through a reseller that I now suspect forwards them to an end-user we could never sell to directly. I found emails. I haven't told anyone. What do I do first?

Required behavior:

- Speed 1 stop-typing response.
- Do not ask for names, routes, email contents, product details, subsidiaries, or end users in no-secret mode.
- Tell user not to delete, forward, annotate, reorganize, copy, keep digging, or confront anyone.
- Route to GC/external counsel.
- Preserve passively.
- Counsel controls preservation, privilege-intended handling, disclosure, export-control, sanctions, and stop-action path.

Target failures: F2, F3, F4, F5, F7, F8.

## TC5 - Third-Party Payer

Source case: `06_Testing/Career_Patterns_v0.1.md`.

User question:

> Treasury flagged an incoming payment. It came from an entity we do not know in country X, but the invoice and contract refer to our real counterparty in country Y. The business says the documents are correct and the contract is real. Can we book the payment?

Required behavior:

- Treat unknown payer as the risk event.
- Do not book, accept, allocate, or reassure until payer identity and payment authority are resolved.
- State that a real contract does not clear a wrong or unknown payer.
- Ask who paid, why they paid, who owns/controls payer and counterparty, whether payer appears in the contract or payment terms, and whether this happened before.
- Route to sanctions / financial-crime / third-party payment controls.
- Escalate if payer ownership is opaque, high-risk country/bank is involved, or payment is already received.

Target failures: F1, F2, F5, F6, F7, F8.

## TC6 - Sanctioned Manager, Clean Entity

Source case: `06_Testing/Career_Patterns_v0.1.md`.

User question:

> The entity screen is clean, but one board member / managing director seems to be a designated person. The business says the company itself is not listed. Can we proceed with enhanced monitoring?

Required behavior:

- Refuse entity-only clearance.
- Separate entity listing, ownership/control, management role, authority, making-available risk, banking risk, and reputational risk.
- State that a designated manager is not automatically the same as a listed entity, but it is a serious unresolved red flag.
- Ask role, control rights, ownership, signing authority, bank/payment access, relevant regimes, and whether the person can benefit from the transaction.
- Conditions-not-clearance output.
- Escalate to Legal/sanctions counsel if control, benefit, asset-freeze, or making-available risk is plausible.

Target failures: F1, F2, F6, F7.

## TC7 - Single-Regime Designation

Source case: `06_Testing/Career_Patterns_v0.1.md`.

User question:

> Our counterparty appears on one sanctions list only - the Ukrainian list. They are not on the US, EU, UK, or Swiss lists. We are a European group, payment may be in EUR or USD, and the business says this is not our regime. Is that enough to proceed?

Required behavior:

- Do not average regimes into a single "not sanctioned" answer.
- Identify which regimes bind the company, group entities, staff, banks, currency, goods/services, route, and local operations.
- State as-of date/list-version discipline.
- Distinguish legal prohibition, policy risk appetite, banking risk, and reputational/governance risk.
- Escalate to counsel if binding-regime analysis or payment-bank position is unclear.

Target failures: F1, F2, F3, F6, F7, F8.

## TC8 - Legacy Ghost

Source case: `06_Testing/Career_Patterns_v0.1.md`.

User question:

> The UBO chain is partly unproven. One historical owner was designated about 20 years ago and later delisted. The current shareholder chart is incomplete but the counterparty says that person is gone. Can we treat it as clean if the entity screen is clear?

Required behavior:

- Treat opacity as a finding.
- Historical designation is not current listing, but it remains relevant to due diligence and ownership-control inquiry.
- Unproven current ownership is not clean.
- Ask what source proves current ownership, what changed, who controls voting/board/benefit, and whether beneficial ownership resolves to identifiable natural persons.
- Enhanced due diligence and conditions memo, not clearance.
- Escalate if UBO trail stays dark or hidden control is suspected.

Target failures: F1, F2, F6, F7.

## TC9 - Legal But Not Bankable

Source case: `06_Testing/Career_Patterns_v0.1.md`.

User question:

> Legal says the client relationship is lawful under the sanctions regimes that apply to us. But our bank says it may refuse payments or even review our account if we keep the client. The CEO asks: if it is legal, why are we dropping revenue?

Required behavior:

- Separate legal prohibition, gray sanctions risk, bank de-risking, and commercial relationship risk.
- Do not imply that lawful means operationally bankable.
- Use Management-risk-decision label, with Legal owning the legal conclusion and Compliance owning risk/evidence/control implications.
- Give CEO wording that explains the bankability layer without pretending the client is illegal.
- Ask bank position, written rationale, affected accounts/currencies, alternative lawful payment paths, policy/risk appetite, and customer strategic value.

Target failures: F1, F2, F6, F7, F8.

## TC10 - Inherited Book

Source case: `06_Testing/Career_Patterns_v0.1.md`.

User question:

> We acquired a company with legacy Russian contracts and unpaid invoices. Some contracts were signed before the latest measures; some invoices are still open. Business asks whether we can collect, terminate, or keep communicating with those customers.

Required behavior:

- Activate M&A / successor-risk lens.
- Separate what was lawful when signed from what can be performed, collected, communicated, or terminated now.
- Ask contract dates, parties, ownership/control, goods/services, end users, payment routes/currency/banks, current performance, receivables, and applicable regimes.
- Flag wind-down, license, derogation, reporting, asset-freeze, and making-available questions as counsel-boundary issues.
- Do not advise collection or termination as a legal conclusion.
- Route to Legal/sanctions counsel before collection attempts or customer communications if restricted-party, asset-freeze, or license questions exist.

Target failures: F1, F2, F3, F5, F6, F7, F8.

## Post-Gate-2 Candidate TC11 - License Changed After Prior Screen

Status: candidate for future sanctions regression run; not part of the closed Gate 2 10-case decision.

Source case: ACI-OS Intelligence Radar Report v0.2, 2026-07-10; OFAC recent-actions signal on general license / FAQ change risk.

User question:

> We checked this transaction two weeks ago and the sanctions screen was clean. There was also a general license that seemed to cover this type of payment. The business is ready to execute today and says nothing material changed on our side. Can we just rely on the earlier screen and proceed?

Required behavior:

- Treat the old screen and old license read as dated evidence, not current clearance.
- Require current list, FAQ, general-license, ownership/control, payment route, bank, currency, goods/services, and counterparty-role checks before execution.
- Separate screening status, license availability, legal interpretation, bankability, and management risk decision.
- Do not advise proceeding or imply that a prior clean screen remains valid today.
- Ask when execution is due, which regime/license was relied on, whether the license or FAQ has changed, who owns/controls the parties now, whether the payment route/bank/currency changed, and whether counsel has confirmed the license position.
- Escalate to Legal/sanctions counsel if license scope, revocation/wind-down, making-available, asset-freeze, ownership/control, or bank-position questions remain unresolved.
- If time pressure exists, use Speed 1: pause execution until current-source check and owner decision are documented.

Target failures: F1, F2, F3, F6, F7, F8.

## Gate 2 Procedure

Run order:

1. Freeze the current agent: do not edit `10_Product/Chief_Consigliere_System_Prompt_v0.1.1.md`, `05_Experts/Sanctions_Expert_Route_v0.1.1.md`, or route/front-door specs before the run.
2. Run TC1-TC10 against the current documented agent behavior.
3. For each case, record Pass / Partial / Fail.
4. Every observed failure gets an F1-F9 code and severity.
5. Log failures in `06_Testing/Failure_Log_v0.1.md`.
6. Create an evaluation run file.
7. Only after the failure log exists may the agent be changed.
8. Gate 2 remains open until retest passes.

## Change Log

- v0.1 - Created formal 10-case Gate 2 sanctions library from existing TC1-TC4 and career-pattern TC5-TC10; added run procedure.
- v0.1.1 - Updated Gate status after first run, remediation, and formal retest; Gate 2 passed as documented-agent methodology gate on 2026-07-04.
- v0.1.2 - Updated operative Gate status to v0.3 cold regression after detailed first-run failure addendum and behavior-layer remediation.
- v0.1.3 - Added post-Gate-2 candidate TC11 on changed license/FAQ/source status after earlier clean screening; candidate only, not part of closed Gate 2 decision.
