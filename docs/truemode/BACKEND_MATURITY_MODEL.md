# Backend Maturity Model

## Purpose

This document defines the backend maturity path from deterministic lab API to TRUE_MODE enterprise backend.

## Current Backend

The current backend provides deterministic lab-safe evaluation data and API endpoints.

Current characteristics:

- FastAPI service;
- seeded in-memory evaluation data;
- deterministic scoring;
- no persistence;
- no authentication;
- no RBAC;
- no tenant isolation;
- no production audit trail;
- no asynchronous evaluation runner;
- no managed evidence store.

## Required TRUE_MODE Backend Capabilities

### 1. Persistent Data Layer

Required:

- PostgreSQL or equivalent managed database;
- schema migrations;
- durable records for agents, benchmarks, test suites, runs, scores, evidence, policies, baselines, and reviewer notes.

### 2. Tenant Boundary

Required:

- organizations;
- workspaces;
- users;
- roles;
- tenant-scoped records;
- request-level tenant validation.

### 3. Identity and RBAC

Required:

- authenticated users;
- role-based permissions;
- reviewer, admin, auditor, operator, and read-only roles;
- approval-gated sensitive actions.

### 4. Evaluation Execution Layer

Required:

- isolated evaluation runner;
- queue-backed jobs;
- retry controls;
- timeout controls;
- tool-call budget controls;
- run status lifecycle.

### 5. Evidence Store

Required:

- persistent evidence packages;
- immutable evaluation record snapshots;
- prompt, context, retrieval, tool-call, policy, score, remediation, and reviewer trace.

### 6. Audit Ledger

Required:

- append-only audit events;
- actor, action, object, timestamp, and request metadata;
- evidence digest or hash-chain readiness.

### 7. API Versioning

Required:

- `/api/v1/*` enterprise API surface;
- stable contracts;
- OpenAPI review;
- backwards-compatible evolution rules.

## TRUE_MODE Entry Criteria

TRUE_MODE cannot be claimed until persistence, tenancy, RBAC, audit, and evidence storage are implemented and validated.
