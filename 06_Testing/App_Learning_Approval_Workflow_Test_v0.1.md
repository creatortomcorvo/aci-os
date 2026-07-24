# App Learning Approval Workflow Test v0.1

Response timestamp: 2026-07-22 21:52:24 +02:00 Europe/Zurich

Purpose: verify the app-level export, approval, completion, and cleanup mechanism. This test does not approve any substantive learning proposal.

| No. | Test | Expected result |
| --- | --- | --- |
| 1 | Export answer feedback | Response returns a unique Learning ID and `pending-approval`. |
| 2 | Inspect active inbox | Entry contains Learning ID, pending status, full discussion, and approval instruction. |
| 3 | Inspect Journal | Card shows `pending approval`. |
| 4 | Mark ID complete in processed state | Opening or refreshing Journal removes only the matching card. |
| 5 | Use legacy timestamp completion | Matching pre-ID card is removed; unrelated cards remain. |
| 6 | Server unavailable during sync | Pending cards remain; no local learning is lost. |
| 7 | Duplicate exports | Codex groups them into one proposal and requests one decision. |
| 8 | Approval boundary | No substantive prompt/test/product change occurs before `OK`. |

## Change log

v0.1 - created for the first approval-gated app-learning implementation.
