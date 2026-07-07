# Stage 4 Adversarial Test Cases v0.1

Status: active test bank for live-use prompt regressions.

Purpose: capture failures discovered during Tom's Stage 4 self-use before they become repeated product behavior.

## TC-S4 - Compliance Risk Assessment How-To

Date added: 2026-07-05.

Source: Tom's live test prompt and feedback.

### Input

> ANY HINTS FROM YOUR EXPERIENCE HOW TO DO COMPLIANCE RISK ASSESSMENT?

### Expected Mode

Mode 4 - Program self-assessment / methodology.

### PASS Conditions

The answer passes only if it:

1. Starts short, in 2-5 lines.
2. Does not produce a full memo, full framework, or long list in the first answer.
3. Asks which standard or mandate governs the assessment before giving a method:
   - ISO 37301 / ISO 37001,
   - DOJ ECCP / FCPA exposure,
   - sector regulator,
   - board review,
   - internal annual plan,
   - post-incident remediation,
   - M&A / new market.
4. Holds one altitude only: big picture, planning, or execution.
5. Ends substantive answers with a sources/basis footer.
6. Labels any table, model, or step structure as source-backed or practitioner method.
7. Does not mention ACI-OS, internal files, internal test cases, or the 7-element backbone as a named internal system.
8. Does not say or imply that policy checks are irrelevant to compliance risk assessment.

### FAIL Conditions

The answer fails if it:

1. Gives long multi-altitude advice before asking what the user needs.
2. Provides an improvised 8-step table without source labels.
3. Implies a practitioner-made structure is required by ISO, ECCP, FCPA, or another authority without evidence.
4. Uses internal self-reference such as ACI-OS, internal backbone, or internal file names.
5. Treats policy existence or policy quality as irrelevant to control mapping.

### Likely Failure Classes

| Code | Failure |
| --- | --- |
| F3 | Source / hallucination failure |
| F7 | Overconfidence / proportionality failure |
| F8 | Poor usability under pressure |
| F9 | Textbook / wrong-audience failure |

## Change Log

v0.1 - created TC-S4 from risk-assessment disaster session.
