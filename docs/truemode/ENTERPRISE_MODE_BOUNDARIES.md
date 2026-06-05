# Enterprise Mode Boundaries

## Purpose

This document prevents the platform from drifting into false enterprise claims before TRUE_MODE is implemented.

## Mode Boundary

| Mode | Intended use | Production claim |
|---|---|---|
| LAB_MODE | Local deterministic development | Not allowed |
| ENTERPRISE_PREVIEW_MODE | Public enterprise-style demo | Not allowed |
| TRUE_MODE | Real enterprise platform posture | Allowed only after required controls exist |

## Current Mode

Current mode is LAB_MODE with enterprise preview design direction.

## Allowed Current Claims

The platform may claim:

- lab-safe agent evaluation surface;
- deterministic test harness;
- SOC 2-aligned readiness evidence;
- doctrine-safe positioning;
- enterprise platform path;
- evaluation control plane concept;
- simulated evaluation workflows.

## Forbidden Current Claims

The platform must not claim:

- production deployment;
- live enterprise customer use;
- SOC 2 certification;
- auditor attestation;
- production operating effectiveness;
- real autonomous agent execution;
- live destructive tool blocking;
- enterprise authorization enforcement;
- production tenant isolation.

## Enterprise Preview Language

Preferred wording:

SecureTheCloud Agent Evaluation Platform is an enterprise-grade agent evaluation control plane in preview posture. It demonstrates how autonomous AI agents can be tested, scored, governed, and evidenced before and after deployment while preserving lab-safe boundaries.

## TRUE_MODE Language

Only after implementation:

SecureTheCloud Agent Evaluation Platform provides a tenant-aware, evidence-backed enterprise control plane for testing, scoring, governing, and auditing autonomous AI agents across their lifecycle.
