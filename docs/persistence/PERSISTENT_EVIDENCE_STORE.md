# Persistent Evidence Store

## Status

Phase 11 foundation.

## Purpose

The Persistent Evidence Store is the first TRUE_MODE backend maturity step for SecureTheCloud Agent Evaluation Platform.

It moves core enterprise records from deterministic in-memory payloads toward durable database-backed evidence.

## Phase 11 Adds

- PostgreSQL-backed persistence foundation;
- durable agent records;
- durable benchmark records;
- durable evaluation run records;
- durable evidence package records;
- durable regression baseline records;
- audit-ready event records;
- `/api/v1` read endpoints.

## Current Boundary

Phase 11 does not activate TRUE_MODE.

The platform remains:

- lab-safe;
- enterprise-preview oriented;
- no production authority;
- no enforcement authority;
- no live autonomous tool execution;
- no SOC 2 certification claim.

## TRUE_MODE Relevance

Persistent evidence storage is required before:

- tenant enforcement;
- RBAC;
- audit immutability;
- reviewer workflows;
- Cloudflare enterprise preview;
- production-grade SOC 2 evidence mapping.
