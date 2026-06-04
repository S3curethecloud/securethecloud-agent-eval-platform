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
