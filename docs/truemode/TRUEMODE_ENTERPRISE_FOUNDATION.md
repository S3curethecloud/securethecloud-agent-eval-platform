# TRUE_MODE Enterprise Foundation

## Status

Phase 10 foundation gate.

## Purpose

TRUE_MODE defines the enterprise operating posture required before SecureTheCloud Agent Evaluation Platform can move from lab-safe evaluation surface to standalone enterprise-grade platform.

The platform is currently lab-safe and deterministic. TRUE_MODE is not active yet.

## Operating Modes

### LAB_MODE

Local and deterministic evaluation surface.

Characteristics:

- seeded data;
- deterministic scoring;
- no real customer data;
- no production agents;
- no live autonomous tools;
- no enterprise authorization system;
- no production operating effectiveness claim.

### ENTERPRISE_PREVIEW_MODE

Public-facing enterprise demo posture.

Characteristics:

- polished executive-facing UI;
- simulated but realistic enterprise data;
- Cloudflare-hosted frontend;
- demo-safe backend;
- explicit no-production boundary;
- SOC 2-aligned readiness language;
- no claim of SOC 2 certification or production enforcement.

### TRUE_MODE

Enterprise platform operating posture.

Required before TRUE_MODE can be claimed:

- persistent database;
- tenant and workspace model;
- user identity;
- RBAC;
- append-only audit log;
- persistent evaluation run store;
- persistent evidence package store;
- benchmark versioning;
- regression baseline history;
- queue-backed evaluation runner;
- secret management;
- API versioning;
- deployment and rollback controls;
- SOC 2 control traceability tied to real backend events.

## Current Decision

Phase 10 does not activate TRUE_MODE.

Phase 10 defines the boundary, maturity model, backend requirements, frontend positioning, and next implementation gates.

## Forbidden Claims

Until TRUE_MODE is implemented, the platform must not claim:

- production operating effectiveness;
- SOC 2 certification;
- customer production deployment;
- real autonomous tool execution;
- enforcement authority;
- SENTINEL bypass authority;
- runtime authority;
- enterprise authorization coverage.

## Enterprise Direction

The platform is being shaped toward an enterprise-grade agent evaluation control plane.

The next implementation gate after Phase 10 should be persistent evidence storage.
