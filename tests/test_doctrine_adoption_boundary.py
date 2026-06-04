from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]

REQUIRED_FILES = [
    "AGENTS.md",
    "docs/doctrine/CANONICAL_DOCTRINE_ADOPTION.md",
    "docs/doctrine/AGENT_EVAL_PLATFORM_PHASE_2_AI_CHAOS_HARNESS_BOUNDARY.md",
    "governance/phases/PHASE_01_AGENT_EVAL_PLATFORM_DOCTRINE_ADOPTION_GATE.md",
    "sot/PHASE_TRACKER.md",
]

REQUIRED_PHRASES = [
    "Phase 2 AI Chaos Harness",
    "Adaptive immunity is allowed.",
    "Autonomous runtime mutation is not.",
    "Custodian approval is required before any Aegis/OPA policy update enters a release path.",
    "SOC 2 certification claimed: false",
    "Live adversarial traffic enabled: false",
    "Aegis/OPA policy mutation granted: false",
]


def test_required_doctrine_files_exist():
    for path in REQUIRED_FILES:
        assert (ROOT / path).exists(), path


def test_required_boundary_phrases_present():
    combined = "\n".join((ROOT / path).read_text(encoding="utf-8") for path in REQUIRED_FILES)
    for phrase in REQUIRED_PHRASES:
        assert phrase in combined, phrase


def test_forbidden_runtime_claims_absent():
    combined = "\n".join((ROOT / path).read_text(encoding="utf-8").lower() for path in REQUIRED_FILES)
    forbidden = [
        "runtime authority granted: true",
        "enforcement authority granted: true",
        "aegis/opa policy mutation granted: true",
        "sentinel bypass granted: true",
        "backend/api exposure granted: true",
        "token/session authority granted: true",
        "production enforcement granted: true",
        "soc 2 certification claimed: true",
    ]
    for phrase in forbidden:
        assert phrase not in combined, phrase
