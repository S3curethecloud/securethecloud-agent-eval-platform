# API v1 Persistence Contract

## Phase 11 API Surface

Phase 11 introduces a versioned persistence API foundation.

## Endpoints

- `GET /api/v1/persistence/status`
- `GET /api/v1/agents`
- `GET /api/v1/benchmarks`
- `GET /api/v1/evaluation-runs`
- `GET /api/v1/evaluation-runs/{run_id}`
- `GET /api/v1/evidence-packages`
- `GET /api/v1/evidence-packages/{evidence_id}`
- `GET /api/v1/regression-baselines`
- `GET /api/v1/audit-events`

## Boundary

The v1 API is read-only in Phase 11.

No production writes, destructive actions, live tools, customer data, or production agent execution are enabled.
