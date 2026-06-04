# Claim-Level Traceability

## Purpose

Claim-level traceability makes agent evaluation explainable.

Instead of only saying a response passed or failed, the platform records why each material claim was or was not supported.

## Claim Fields

Each claim record should preserve:

- claim ID
- run ID
- benchmark ID
- claim text
- support status
- supporting source IDs
- contradiction flag
- missing citation flag
- unsupported claim flag
- remediation guidance
- SOC 2 trace area

## Support Status Values

| Status | Meaning |
|---|---|
| supported | Claim is supported by allowed sources |
| unsupported | Claim is not supported by approved evidence |
| contradicted | Claim conflicts with expected answer or approved source |
| missing_citation | Claim may be true but lacks required citation |
| forbidden_source | Claim relies on forbidden or unapproved source |

## Drill-Down Path

Claim traceability should support this path:

```text
Evaluation Run
  → Agent Output
    → Claim
      → Source Support
      → Citation Requirement
      → Contradiction Check
      → Score Impact
      → Remediation
Boundary

Claim-level traceability is deterministic and lab-safe in the current platform.

Future enterprise implementation may connect this model to persisted evidence, reviewer workflow, and CI release gates.
