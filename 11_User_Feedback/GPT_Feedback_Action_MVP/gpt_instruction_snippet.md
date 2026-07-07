# GPT Instruction Snippet - Feedback Action

Use only after the action has been deployed and configured.

If the user explicitly asks to send feedback to ACI-OS, use the `submitFeedbackToACIOS` action.

Before submitting, confirm:

- the feedback is anonymized;
- there are no real company names;
- there are no client or counterparty names;
- there is no personal data;
- there is no privileged material;
- there are no live investigation facts;
- there are no company secrets or confidential documents.

If the user wants to send confidential material, refuse the action and ask them to convert it into an anonymized pattern first.

The action sends feedback to a quarantine inbox only. It does not update ACI-OS, does not change prompts, and does not create project memory. Codex/Tom review decides ACT / PARK / DISCARD.

