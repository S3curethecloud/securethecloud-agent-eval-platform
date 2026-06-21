# Phase 25 - CI Determinism / Dependency Pinning Hardening Gate

Status: Evidence Recorded

## Purpose

Phase 25 adds dependency determinism and CI hardening evidence to the SecureTheCloud Agent Evaluation Platform.

This phase pins backend test dependencies, records dependency-input hashes, verifies dependency lock integrity in CI, and preserves the existing lab-safe runtime posture.

This phase does not change runtime behavior, backend/API exposure, production authority, enforcement authority, token/session authority, policy mutation authority, or live autonomous execution posture.

## Evidence Source

Verified implementation commit:

- `5babd86afc45b1758120f362e6f51fdcd9033ba3` - Add Phase 25 dependency determinism gate

Verified workflow:

- `Runtime Readiness Gate`

GitHub Actions run:

- Run ID: `27894834754`
- Status: `completed`
- Conclusion: `success`
- Created at: `2026-06-21T05:34:15Z`
- Updated at: `2026-06-21T05:34:36Z`
- URL: `https://github.com/S3curethecloud/securethecloud-agent-eval-platform/actions/runs/27894834754`

## Implementation Evidence

Phase 25 implementation commit:

- `5babd86` - Add Phase 25 dependency determinism gate

Files added or updated:

- `backend/requirements-test.txt`
- `docs/evidence/phase25_dependency_lock_manifest.json`
- `scripts/verify_dependency_locks.py`
- `.github/workflows/runtime-readiness.yml`
- `README.md`

Implementation summary:

- Added pinned backend test dependency file.
- Added dependency lock manifest with SHA-256 digests.
- Added deterministic dependency lock verifier script.
- Added dependency lock verification to GitHub Actions.
- Updated CI to install backend test dependencies from `backend/requirements-test.txt`.
- Documented Phase 25 dependency determinism in README.

## Verified Jobs

- `Smoke script static validation`
  - Job ID: `82544477887`
  - Status: `completed`
  - Conclusion: `success`
- `Backend pytest gate`
  - Job ID: `82544477894`
  - Status: `completed`
  - Conclusion: `success`

## Verification Result

The GitHub Actions workflow for commit `5babd86afc45b1758120f362e6f51fdcd9033ba3` completed successfully.

The following CI gates were verified:

- Dependency lock manifest verification
- Backend pytest gate
- Smoke script static validation
- Smoke script boundary-string validation

## Scope

Allowed:

- Pin backend test dependencies.
- Record dependency-input hashes.
- Verify dependency lock manifest.
- Harden CI determinism.
- Preserve local/manual Docker runtime smoke posture.
- Update phase tracker.
- Update Platform State of Truth.

Not allowed:

- Runtime behavior changes
- Backend/API public exposure
- CI-hosted public service exposure
- Runtime authority
- Enforcement authority
- Production authority
- Live autonomous execution
- Token issuance
- Session creation
- Aegis/OPA/SENTINEL policy mutation
- SENTINEL bypass
- Agent Black Box custody bypass
- SOC 2 certification or attestation claim

## Boundary Preserved

Runtime authority granted: false

Enforcement authority granted: false

Production authority granted: false

Policy mutation authority granted: false

Live autonomous execution enabled: false

Backend/API public exposure granted: false

Token/session authority granted: false

Aegis/OPA/SENTINEL mutation granted: false

SENTINEL bypass granted: false

Agent Black Box custody bypass granted: false

SOC 2 certification claimed: false

## Outcome

Phase 25 CI determinism evidence is recorded.

The Runtime Readiness Gate now verifies dependency lock integrity before installing pinned backend test dependencies.

No runtime behavior was changed.

## Next Recommended Phase

Phase 26 - CI Artifact Retention / Evidence Snapshot Gate
