# Rollback Points

## Platform

SecureTheCloud Agent Evaluation Platform

## Purpose

This document records stable rollback points for the platform.

Rollback points are Git tags or commits that represent known-good states.

## Stable Rollback Tags

| Tag | Purpose | Notes |
|---|---|---|
| v0.1.0-agent-eval-baseline | Initial baseline | FastAPI + Vite scaffold with seeded eval data |
| v0.1.1-doctrine-alignment-gate | Doctrine alignment gate | Adds downstream doctrine-safe boundary |
| v0.2.0-mobile-enterprise-foundation | Mobile + enterprise foundation | Adds expanded pillars, trust score, enterprise path |
| v0.2.1-doctrine-mobile-foundation-merged | Reconciled doctrine/mobile history | Merge checkpoint |
| v0.2.2-soc2-alignment-gate | SOC 2 alignment gate | Adds SOC 2 readiness docs and panel |
| v0.2.3-ecosystem-integration-positioning | Ecosystem positioning | Adds SecureTheCloud portfolio fit |
| v0.2.4-platform-sot-traceability-foundation | Platform SoT foundation | Adds rollback, traceability, and drill-down model |
| v0.3.0-test-harness-engine | Test harness engine | Adds benchmark-driven deterministic runs and drill-down evidence |

## Rollback Command Pattern

To inspect a rollback point:

```bash
git checkout <tag>

To return to main:

git checkout main
git pull

To create a branch from a rollback point:

git checkout -b recovery/<reason> <tag>
Rollback Boundary

Rollback restores repository state only.

It does not restore:

external production services
deployed infrastructure
customer data
production evidence stores
runtime agents
live autonomous tool state

Current platform is lab-safe and does not contain production runtime state.

| v0.4.0-ground-truth-benchmark-store | Ground Truth Benchmark Store | Adds traceable benchmark management and source/policy expectations |

| v0.5.0-hallucination-scoring-engine | Hallucination Scoring Engine | Adds claim-level grounding, unsupported claim detection, and SOC 2 Processing Integrity traceability |

| v0.6.0-rag-evaluation-suite | RAG Evaluation Suite | Adds retrieval precision, citation accuracy, grounding, contamination, and leakage evidence |

| v0.7.0-tool-call-verification | Tool-Call Verification | Adds MCP Governance Lab bridge, tool policy registry, destructive-action blocking, and SOC 2 Security traceability |

| v0.8.0-policy-compliance-validator | Policy Compliance Validator | Adds framework mapping, governance board referral, policy outcomes, and SOC 2 readiness traceability |

| v0.9.0-regression-detection | Regression Detection | Adds known-good baselines, baseline drift, release recommendations, and SOC 2 change-management traceability |

## v0.11.0-persistent-evidence-store

Phase 11 persistent evidence store baseline.

Use this rollback point to restore:

- PostgreSQL local persistence foundation;
- SQLAlchemy data model;
- durable agent records;
- durable benchmark records;
- durable evaluation run records;
- durable evidence package records;
- durable regression baseline records;
- audit-ready event records;
- read-only `/api/v1` persistence endpoints.

TRUE_MODE is still not active at this rollback point.


## v0.12.0-tenant-workspace-rbac-boundary

Phase 12 rollback point for tenant, workspace, and RBAC boundary foundation.


## v0.13.0-audit-evidence-ledger

Phase 13 rollback point for append-only audit and evidence ledger foundation.

Restores:

- audit ledger event records
- evidence chain records
- tenant/workspace-scoped audit events
- request metadata traceability
- SOC 2 Security and Processing Integrity traceability
- frontend audit ledger panel


## v0.14.0-evidence-package-reviewer-workspace

Phase 14 rollback point for evidence package export and reviewer workspace foundation.

Restores:

- reviewer workspace records
- evidence export manifest records
- reviewable JSON export posture
- redaction status
- reviewer decisions
- evidence chain references
- frontend reviewer workspace panel


## v0.15.0-queue-backed-evaluation-runner-boundary

Phase 15 rollback point for queue-backed evaluation runner boundary.

Restores:

- evaluation runner queue records
- evaluation runner job records
- runner lifecycle states
- retry boundary
- timeout boundary
- cost budget boundary
- worker isolation posture
- frontend Queue-Backed Runner panel


## v0.16.0-enterprise-preview-deployment-boundary

Phase 16 rollback point for enterprise preview deployment boundary.

Restores:

- Cloudflare enterprise preview boundary record
- deployment health check records
- frontend deployment boundary panel
- API origin boundary
- CORS expectations
- environment variable expectations
- health check readiness definitions


## v0.17.0-portfolio-fit-doctrine-reconciliation

Phase 17 rollback point for portfolio fit and doctrine reconciliation.

Restores:

- Agent Evaluation Platform portfolio fit baseline
- Phase 2 AI Chaos Harness support-lane classification
- allowed and forbidden claim boundary
- diagram mapping
- local doctrine adoption reconciliation


## v0.18.0-enterprise-preview-website-positioning

Phase 18 rollback point for doctrine-safe enterprise preview website positioning.

Restores:

- enterprise preview website positioning documentation
- allowed public claims
- forbidden public claims
- frontend doctrine-safe public positioning panel
- AI Chaos Harness support-lane public language
