# Platform State of Truth

## Platform

SecureTheCloud Agent Evaluation Platform

## Current State

| Field | Value |
|---|---|
| Current phase | Phase 23 - Runtime Readiness Orchestration / Smoke Check CI Gate |
| Current posture | Lab-safe evaluation platform surface |
| Latest stable baseline | v0.23.0-runtime-readiness-smoke-check-ci-gate |
| Doctrine alignment | Required |
| SOC 2 posture | Readiness evidence only |
| Production authority | Not granted |
| Runtime authority | Not granted |
| Enforcement authority | Not granted |
| SENTINEL bypass | Not allowed |
| Production agent execution | Not connected |
| Live autonomous tool execution | Not connected |

## Purpose

This State of Truth records the governed state of the Agent Evaluation Platform.

It exists to support:

- rollback readiness
- phase traceability
- evidence reconstruction
- SOC 2-aligned documentation
- doctrine boundary preservation
- enterprise-grade platform evolution

## Boundary

This SoT does not grant:

- suite membership
- module authority
- enforcement authority
- runtime authority
- SENTINEL bypass
- production deployment authority
- production operating effectiveness

## Current Platform Capabilities

The current platform demonstrates:

- evaluation command center
- evaluation trust fabric
- agent inventory
- evaluation run records
- mobile responsive layout
- enterprise escalation path
- doctrine alignment gate
- SOC 2 readiness documentation
- ecosystem integration positioning

## Current Simulated Evaluation Capabilities

- Ground Truth
- Scoring Engine
- RAG Evaluation
- Tool Verification
- Policy Compliance
- Regression Detection
- Memory Evaluation
- Safety Verification
- Multi-Agent Coordination

## Next Planned Phase

Phase 24 - CI Run Evidence / Workflow Status Verification Gate

Planned additions:

- memory leakage detection
- session isolation checks
- tenant separation checks
- context expiration checks
- sensitive retention checks
- cross-user contamination checks
- approved memory scope validation
- SOC 2 Confidentiality and Privacy traceability


## Phase 11 Persistent Evidence Store

Phase 11 adds PostgreSQL-backed persistence foundation and read-only `/api/v1` endpoints for durable agent records, benchmarks, evaluation runs, evidence packages, regression baselines, and audit-ready events.

TRUE_MODE remains inactive.

- tenant / workspace / RBAC boundary foundation

- append-only audit and evidence ledger foundation

- evidence package export and reviewer workspace foundation

- queue-backed evaluation runner boundary foundation

- enterprise preview deployment boundary foundation

- portfolio fit doctrine reconciliation

- enterprise preview website doctrine-safe positioning

- AI Chaos Harness planning surface

- offline resilience validation evidence

## Phase 21 Runtime State Reconciliation Evidence

Phase 21 reconciles runtime metadata and validation evidence with the completed Phase 20 runtime surface.

Evidence recorded:

- `/health` reports Phase 21 current phase.
- `/health` reports Phase 20 - Offline Resilience Validation Evidence as the latest completed runtime surface.
- Runtime smoke check passed using `./scripts/runtime_smoke_check.sh`.
- Backend test suite passed: `10 passed, 2 warnings`.
- `/api/dashboard` returned command-center metrics.
- `/api/v1/persistence/status` confirmed persistent database mode.
- `/api/v1/ai-chaos/resilience-validations` confirmed offline-only Phase 20 resilience validation evidence.
- Frontend production build passed.
- npm audit reported 0 vulnerabilities.
- Phase 21 commits pushed to `main`: `f3545bf`, `1bce294`, `65b7756`.

Boundary preserved:

- runtime authority: false
- production authority: false
- enforcement authority: false
- policy mutation authority: false
- live autonomous execution: false
- backend/API public exposure: false
- token/session authority: false
- SENTINEL bypass: false
- Agent Black Box custody bypass: false
- SOC 2 certification claimed: false

Next planned phase:

Phase 22 - FastAPI Lifespan Migration / Startup Contract Hardening Gate

## Phase 22 FastAPI Lifespan Migration Evidence

Phase 22 migrates backend startup seeding from FastAPI's deprecated `@app.on_event("startup")` hook to the supported FastAPI lifespan contract.

Evidence recorded:

- Startup seeding now uses FastAPI lifespan.
- Deprecated `@app.on_event("startup")` usage was removed.
- Existing seed order was preserved.
- `/health` reports Phase 22 current phase.
- `/health` reports Phase 21 - Runtime State Reconciliation / API Smoke Evidence Gate as the latest completed phase.
- `/health` reports Phase 20 - Offline Resilience Validation Evidence as the latest completed runtime surface.
- Runtime smoke check passed using `./scripts/runtime_smoke_check.sh`.
- Backend test suite passed: `10 passed`.
- Docker Compose backend image built successfully.
- Docker Compose frontend image built successfully.
- PostgreSQL container reached healthy state.
- Backend container started successfully.
- Frontend container started successfully.
- FastAPI startup deprecation warnings were removed.
- Phase 22 implementation commit pushed to `main`: `7e8d91e`.

Boundary preserved:

- runtime authority: false
- production authority: false
- enforcement authority: false
- policy mutation authority: false
- live autonomous execution: false
- backend/API public exposure: false
- token/session authority: false
- SENTINEL bypass: false
- Agent Black Box custody bypass: false
- SOC 2 certification claimed: false

Next planned phase:

Phase 23 - Runtime Readiness Orchestration / Smoke Check CI Gate

## Phase 23 Runtime Readiness Orchestration Evidence

Phase 23 adds a lightweight CI readiness gate while preserving the local/manual Docker runtime smoke posture.

Evidence recorded:

- GitHub Actions workflow added at `.github/workflows/runtime-readiness.yml`.
- Backend pytest CI gate added.
- Smoke script shell syntax validation added.
- Smoke script boundary-string validation added.
- README documents the local/manual runtime smoke gate.
- `/health` reports Phase 23 current phase.
- `/health` reports Phase 22 - FastAPI Lifespan Migration / Startup Contract Hardening Gate as the latest completed phase.
- `/health` reports Phase 20 - Offline Resilience Validation Evidence as the latest completed runtime surface.
- Local runtime smoke check passed using `./scripts/runtime_smoke_check.sh`.
- Backend test suite passed: `10 passed`.
- Docker Compose backend image built successfully.
- Docker Compose frontend image built successfully.
- PostgreSQL container reached healthy state.
- Backend container started successfully.
- Frontend container started successfully.
- Phase 23 implementation commit pushed to `main`: `f4aa5e6`.

CI posture:

- CI runs backend pytest.
- CI validates smoke script shell syntax.
- CI validates smoke script boundary strings.
- CI does not run Docker Compose runtime smoke in Phase 23.
- CI does not expose backend/API services.

Boundary preserved:

- runtime authority: false
- production authority: false
- enforcement authority: false
- policy mutation authority: false
- live autonomous execution: false
- backend/API public exposure: false
- token/session authority: false
- SENTINEL bypass: false
- Agent Black Box custody bypass: false
- SOC 2 certification claimed: false

Next planned phase:

Phase 24 - CI Run Evidence / Workflow Status Verification Gate
