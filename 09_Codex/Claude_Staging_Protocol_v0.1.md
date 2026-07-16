# Claude Staging Protocol v0.1

Status: active protocol, exact staging path resolved; originals preserved.

Trigger phrase: `process staging`.

Purpose: process pre-approved Claude deliverables from the local Claude delivery zone into the ACI-OS repo without re-litigating whether the deliverables are commissioned.

## Current Path Status

Exact local staging path: `C:\Users\Tomasz Kruk\Documents\ACI-OS\Claude`.

The path has been confirmed to exist. Do not process staging unless Tom says `process staging`.

## Authority

Files in the staging folder are pre-approved deliverables from Tom's Claude workflow.

Pre-approved means:

- read and route the files without asking whether they were commissioned;
- still enforce confidentiality guardrails;
- still follow the repo-layout rule;
- still respect the `Repo:` header as the intended destination;
- still stop or park if a file lacks a valid destination, conflicts with AGENTS.md, or appears to contain secrets, privileged material, personal data, employer/client facts, whistleblower identities, or live investigation facts.

## Persistent Infrastructure Exception

Files whose names start with `000_` are persistent staging infrastructure.

During `process staging`, do not move, copy into the repo, edit, delete, clear, park, or infer destinations for `000_` files unless Tom explicitly instructs that exact file action. They may be read only to understand staging instructions.

## Expected File Header

Each staged file should contain a header line:

```text
Repo: <relative/path/inside/ACI-OS>
```

Examples:

```text
Repo: 07_Research/New_Source_Intake_v0.1.md
Repo: 04_Methodology/New_Methodology_Note_v0.1.md
Repo: 99_Parked/INBOX.md
```

The `Repo:` path must be relative to `C:\Users\Tomasz Kruk\Documents\ACI-OS`.

Do not accept absolute paths, parent traversal such as `..`, repo-root replacement, hidden destructive destinations, or paths outside the current repo layout.

## Processing Steps

When Tom says `process staging`:

1. Resolve the exact staging folder path.
2. List every file in the staging folder.
3. Read every non-`000_` file before processing anything; read `000_` files only as staging instructions.
4. For each file, extract the first valid `Repo:` line, or use an approved inferred destination when Tom has approved processing without headers.
5. Validate that the destination is a relative path inside the ACI-OS repo.
6. If the destination folder exists, copy the file there or create a versioned copy.
7. If the destination folder does not exist but matches the current repo layout pattern, create only the needed folder path inside ACI-OS.
8. If the destination conflicts with the canonical repo layout, correct to the current repo layout only when the intended destination is unambiguous; otherwise park or ask.
9. If the target file already exists, do not overwrite silently. Compare or create a versioned filename unless Tom explicitly approved overwrite.
10. Log each action in `09_Codex/Claude_Staging_Move_Log.md`.
11. Preserve originals in the staging folder unless Tom explicitly says to clear them.
12. Leave failed, unresolved, skipped, and archive files in staging unless Tom explicitly says otherwise.
13. Leave all `000_` files in staging untouched unless Tom explicitly says otherwise.

## Log Format

Use this format in `09_Codex/Claude_Staging_Move_Log.md`:

```text
## YYYY-MM-DD HH:mm:ss +02:00 Europe/Zurich

- source: <absolute staging file path>
- repo: <relative destination path>
- action: copied | versioned | parked | skipped | archive-inventoried
- reason: <short reason>
- notes: <conflicts, missing header, confidentiality issue, or overwrite handling>
```

## Safety Rules

- Never delete the staging folder itself.
- Never delete or clear processed originals unless Tom explicitly asks.
- Never alter `000_` persistent infrastructure files during staging processing unless Tom explicitly asks.
- Never process a file with identifiable employer/client facts, personal data, privileged material, whistleblower identity, or live investigation facts. Stop and convert to pattern form or park for Tom's review.
- Never average a staged file against AGENTS.md or the Gate 1 Resolution Record. If there is a conflict, flag it.
- Never treat staged external source material as methodology automatically. Apply ACT / PARK / DISCARD before absorption unless the file is only a mechanical delivery into a pre-approved repo destination.

## Change Log

v0.1.3 - added `000_` persistent staging infrastructure exception: read for instructions only; never move, copy, edit, delete, clear, park, or infer destinations unless Tom explicitly asks.

v0.1.2 - changed operating mode to preserve staging originals and process by copy/version unless Tom explicitly asks to clear.

v0.1.1 - resolved current local staging path to `C:\Users\Tomasz Kruk\Documents\ACI-OS\Claude`; trigger remains `process staging`.

v0.1 - created Claude staging protocol after Tom established `ACI-OS_Claude_Staging` as Claude's pre-approved delivery zone.
