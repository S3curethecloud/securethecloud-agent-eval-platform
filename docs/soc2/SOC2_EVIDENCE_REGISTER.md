# SOC 2 Evidence Register

## Platform

SecureTheCloud Agent Evaluation Platform

## Evidence Register

| Evidence ID | Evidence Type | Description | Source | Status |
|---|---|---|---|---|
| SOC2-AEP-001 | Platform boundary | Lab-safe no-production-data boundary | README / doctrine alignment | Present |
| SOC2-AEP-002 | Agent inventory | Agents under evaluation and risk tiers | `/api/agents` | Present |
| SOC2-AEP-003 | Evaluation run record | Test result, score, policy decision, failure reason | `/api/evaluation-runs` | Present |
| SOC2-AEP-004 | Dashboard posture | Pass/fail, policy score, latency, cost, trust score | `/api/dashboard` | Present |
| SOC2-AEP-005 | Evaluation pillars | Evaluation capability coverage | `/api/evaluation-pillars` | Present |
| SOC2-AEP-006 | Enterprise readiness | Future enterprise control path | `/api/enterprise-readiness` | Present |
| SOC2-AEP-007 | Doctrine alignment | Downstream doctrine compliance boundary | `docs/doctrine/DOCTRINE_ALIGNMENT.md` | Present |
| SOC2-AEP-008 | SOC 2 overview | SOC 2 readiness positioning | `docs/soc2/SOC2_ALIGNMENT_OVERVIEW.md` | Present |
| SOC2-AEP-009 | Control traceability | SOC 2-style control mapping | `docs/soc2/SOC2_CONTROL_TRACEABILITY.md` | Present |
| SOC2-AEP-010 | Change management | Change control and release gate expectations | `docs/soc2/SOC2_CHANGE_MANAGEMENT.md` | Present |

## Future Evidence

Future phases should add:

- benchmark store exports
- run detail evidence packets
- reviewer notes
- remediation tracking
- signed or hashed evidence bundles
- CI evaluation gate results
- regression comparison evidence
- policy pack version evidence
- tenant-scoped evidence retention records

## Boundary

Evidence is simulated and lab-only until persistence, authentication, tenant isolation, policy versioning, and production-grade evidence retention are implemented.
