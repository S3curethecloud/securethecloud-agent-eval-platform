# Phase 14 - Evidence Package Export & Reviewer Workspace

**Status:** Phase 14 / Foundation Added  
**Tag:** v0.14.0-evidence-package-reviewer-workspace

## Purpose

Add a lab-safe evidence package export and reviewer workspace foundation.

## Added

- ReviewerWorkspaceRecord
- EvidenceExportManifestRecord
- `/api/v1/reviewer/workspace`
- `/api/v1/evidence-export/manifest`
- `/api/v1/evidence-export/package/{evidence_package_id}`
- frontend reviewer workspace panel
- reviewable export manifests
- redaction posture
- reviewer decisions
- evidence chain references
- SOC 2 Security, Processing Integrity, and Confidentiality traceability

## Boundary

This phase does not activate:

- TRUE_MODE
- production exports
- signed bundles
- auditor attestation
- production authority
- runtime authority
- enforcement authority
- external IdP
- SENTINEL bypass
- live autonomous tool execution
- production operating effectiveness
