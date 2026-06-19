#!/usr/bin/env bash
set -euo pipefail

BASE_URL="${BASE_URL:-http://localhost:8030}"

echo "Checking SecureTheCloud Agent Evaluation Platform runtime at ${BASE_URL}"

curl -fsS "${BASE_URL}/health" | python -m json.tool >/tmp/agent_eval_health.json
curl -fsS "${BASE_URL}/api/dashboard" | python -m json.tool >/tmp/agent_eval_dashboard.json
curl -fsS "${BASE_URL}/api/platform/sot" | python -m json.tool >/tmp/agent_eval_platform_sot.json
curl -fsS "${BASE_URL}/api/v1/persistence/status" | python -m json.tool >/tmp/agent_eval_persistence.json
curl -fsS "${BASE_URL}/api/v1/ai-chaos/resilience-validations" | python -m json.tool >/tmp/agent_eval_resilience.json

grep -q '"status": "ok"' /tmp/agent_eval_health.json
grep -q '"current_phase": "Phase 22 - FastAPI Lifespan Migration / Startup Contract Hardening Gate"' /tmp/agent_eval_health.json
grep -q '"latest_completed_phase": "Phase 21 - Runtime State Reconciliation / API Smoke Evidence Gate"' /tmp/agent_eval_health.json
grep -q '"latest_completed_runtime_surface": "Phase 20 - Offline Resilience Validation Evidence"' /tmp/agent_eval_health.json
grep -q '"runtime_authority": false' /tmp/agent_eval_health.json
grep -q '"production_authority": false' /tmp/agent_eval_health.json
grep -q '"enforcement_authority": false' /tmp/agent_eval_health.json
grep -q '"policy_mutation_authority": false' /tmp/agent_eval_health.json

grep -q '"total_test_runs"' /tmp/agent_eval_dashboard.json
grep -q '"database_ready": true' /tmp/agent_eval_persistence.json
grep -q '"phase": "20"' /tmp/agent_eval_resilience.json
grep -q '"OFFLINE_VALIDATION_ONLY"' /tmp/agent_eval_resilience.json
grep -q '"production_authority": "not_granted"' /tmp/agent_eval_resilience.json
grep -q '"runtime_mutation": "not_granted"' /tmp/agent_eval_resilience.json
grep -q '"policy_mutation": "not_granted"' /tmp/agent_eval_resilience.json
grep -q '"black_box_custody_bypass": "not_allowed"' /tmp/agent_eval_resilience.json

echo "Runtime smoke check passed."
