import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[1] / "backend"))

from fastapi.testclient import TestClient

from app.main import app


def get_json(path: str):
    with TestClient(app) as client:
        response = client.get(path)
        assert response.status_code == 200
        return response.json()


def test_health_reports_phase21_runtime_boundary():
    payload = get_json("/health")

    assert payload["status"] == "ok"
    assert payload["lab_mode"] is True
    assert payload["current_phase"] == "Phase 21 - Runtime State Reconciliation / API Smoke Evidence Gate"
    assert payload["latest_completed_phase"] == "Phase 20 - Offline Resilience Validation Evidence"
    assert payload["runtime_authority"] is False
    assert payload["production_authority"] is False
    assert payload["enforcement_authority"] is False
    assert payload["policy_mutation_authority"] is False
    assert payload["live_autonomous_execution"] is False
    assert payload["soc2_certification_claimed"] is False


def test_phase20_resilience_endpoint_preserves_offline_boundary():
    payload = get_json("/api/v1/ai-chaos/resilience-validations")

    assert payload["phase"] == "20"
    assert payload["execution_posture"] == "OFFLINE_VALIDATION_ONLY"
    assert payload["production_authority"] == "not_granted"
    assert payload["runtime_mutation"] == "not_granted"
    assert payload["policy_mutation"] == "not_granted"
    assert payload["black_box_custody_bypass"] == "not_allowed"


def test_persistence_status_remains_lab_safe_without_true_mode():
    payload = get_json("/api/v1/persistence/status")

    assert payload["storage_mode"] == "persistent_database"
    assert payload["database_ready"] is True
    assert payload["true_mode_active"] is False
    assert payload["soc2_posture"] == "readiness_evidence_only"
