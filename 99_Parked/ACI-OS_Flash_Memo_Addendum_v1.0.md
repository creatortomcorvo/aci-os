# ACI-OS — Flash Memo Addendum v1.0

Status: PARKED — approved future direction; not active product behavior  
Date parked: 2026-07-23  
Applies on top of: Memo Module Spec v1.1  
Replaces: the depth system proposed in Memo Module Spec v1.2  

## Activation lock

This addendum must not be implemented until Memo Module Spec v1.1 is present in the repository and its memo classes M1–M4, readiness gate, snapshot schema, invariants, and API behavior have been reconciled with this addendum.

Do not implement the v1.2 depth system. Flash and Standard are the only depth choices introduced by this addendum.

## The feature in one sentence

A memo can render at Flash depth from the same immutable snapshot and through the same readiness gate as Standard: only the protected floor renders, targeting approximately 120–150 words, and it can later expand additively without changing a byte of the Flash text already sent.

Flash and Standard are render versions in the same memo family. Expansion creates a new immutable render version on the same snapshot; it does not overwrite the Flash render.

## Definitions

- **Memo family:** all render versions derived from the same matter and snapshot lineage.
- **Flash render:** the minimum protected memo output defined below.
- **Standard render:** the full memo output defined by Memo Module Spec v1.1.
- **Protected Flash text:** the canonical byte sequence of the complete Flash render. It receives its own render ID and content hash when generated.
- **Required open points:** every unresolved blocking gap and every active material condition. Record-enhancement items are not required in Flash.
- **Stale snapshot:** a snapshot that fails the currency rules in Memo Module Spec v1.1. A stale snapshot cannot be used for expansion.

## Normative rules

### 1. Flash renders only the protected floor

Flash renders exactly:

1. Memo header: matter, class, date, recipient, author and snapshot ID.
2. Verdict, operative instruction and pathway, verbatim from the snapshot.
3. Open points only when required open points exist. If they exist, none may be omitted:
   - each blocking gap names the holder and states that it remains acknowledged outstanding;
   - each material condition names its verifier.
4. For M2 only, one line: `Basis: <top reason> <validated citation>`.
5. The class-specific request in one sentence, including a deadline where applicable.
6. The exact accountability footer defined in the normative template.

No other content renders. Blocks 3, 4, 7 and 8 of the Standard memo are omitted, not compressed.

An M2 Flash memo cannot render unless its top reason has a validated citation. The system must not fabricate, infer or silently downgrade a missing citation.

### 2. Expansion is additive and immutable

`Expand to Standard` creates a new immutable Standard render in the same memo family and on the same snapshot.

The complete protected Flash text must survive as the byte-identical lead of the Standard render. The renderer must prepend the stored Flash byte sequence; it must not regenerate or paraphrase it.

If the snapshot is stale, expansion is blocked and a new snapshot is required. The new snapshot starts a new render lineage and does not overwrite the earlier Flash render.

### 3. The protected floor is inviolable

No memo render — any eligible class, audience or depth — may drop, soften or contradict:

- the verdict;
- the operative instruction;
- the pathway;
- any required open point;
- the accountability footer;
- the snapshot ID;
- the AI-assisted and human-review marker.

All existing Memo Module v1.1 guards, including forbidden-label and byte-stability invariants, apply to Flash unchanged.

### 4. Flash uses the same readiness gate

P1–P3 apply identically to Flash and Standard. Flash changes output length, never the preconditions for rendering.

### 5. M4 has no Flash

M4 cannot render at Flash depth through either the user interface or the API. An M4 closure memo without its completion table is meaningless. M4 minimum depth is Standard.

## Normative template

```text
MEMO (Flash) — [Matter] — [Class] — [Date]
To: [recipient]   From: [author, role]   Snapshot: [ID]

[VERDICT]: [operative instruction, verbatim]
Pathway: [pathway line, verbatim]

Open points:                          ← render only if required open points exist
– [blocking item — holder — acknowledged outstanding]
– [material condition — verifier]

Basis: [top reason] [validated citation]   ← M2 only

Requested: [class-specific request, one sentence, deadline if applicable]

Compliance assessment — formal decision: [owner], pending.
Not approval or clearance.
[Author, role] · Snapshot [ID] · AI-assisted, human review: [attested/____]
```

The three footer lines above are canonical and must render with exactly those line breaks. The variable fields may change; the fixed wording and punctuation may not.

## Depth selection

At memo generation, the user must explicitly select:

- Flash
- Standard

There is no preselected depth, automatic default, nudge or telemetry. These may be reconsidered only if evidence from live use justifies a later specification change.

M4 exposes Standard only. Flash must not appear as an enabled option.

## Acceptance tests

1. **Required open points:** a Flash memo with an acknowledged blocking gap or active material condition cannot render without the complete Open points list.
2. **Forbidden label:** forbidden-label validation blocks a Flash output containing an injected approval or clearance conclusion.
3. **Byte-stable expansion:** after Flash → Standard expansion, the byte diff between the stored protected Flash text and the Standard lead is zero.
4. **M4 exclusion:** an M4 Flash render is impossible through both the user interface and the API.
5. **M2 citation:** an M2 Flash render without a validated top-reason citation is blocked.
6. **Stale snapshot:** Flash → Standard expansion from a stale snapshot is blocked and requests a new snapshot.

## Implementation boundary

This is a structured-rendering feature, not a prompt-only variation. Conforming implementation requires:

- the Memo Module v1.1 snapshot and readiness-gate model;
- immutable memo-family and render-version identifiers;
- storage of the canonical Flash byte sequence and content hash;
- deterministic template rendering;
- user-interface and API validation;
- expansion lineage;
- automated acceptance tests.

The current app's prompt-based Memo conversion must remain unchanged until the activation lock is cleared.

