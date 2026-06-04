# SOC 2 Change Management

## Platform

SecureTheCloud Agent Evaluation Platform

## Purpose

This document defines SOC 2-aligned change management expectations for the lab platform.

## Current Change Control

Current changes are tracked through:

- Git commits
- Git tags
- phase evidence documents
- doctrine alignment documents
- local build validation
- API health checks
- frontend build validation

## Required Validation Before Phase Completion

Each phase should validate:

- backend Python syntax
- Docker build
- backend health endpoint
- dashboard endpoint
- relevant new API endpoints
- frontend availability
- mobile layout when UI changes
- doctrine boundary preservation
- SOC 2 documentation update when evidence/control posture changes

## Release Evidence

Each phase should include:

- phase evidence document
- commit hash
- tag
- validation commands
- validation output summary

## Change Categories

| Change Type | Required Evidence |
|---|---|
| API change | Endpoint validation, schema/field summary |
| Scoring change | Scoring logic summary, evidence impact |
| Policy change | Policy decision mapping, doctrine check |
| UI change | Local visual validation, mobile validation |
| Evidence change | Evidence register update |
| Packaging change | Doctrine alignment check |
| Deployment change | Share-safe ops and public boundary validation |

## Non-Scope

This lab does not yet implement:

- production approval workflows
- formal change advisory board
- automated release gates
- production access control
- production evidence retention
- formal auditor review
