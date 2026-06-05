# SOC 2 Enterprise Control Map

## Purpose

This document maps the future TRUE_MODE platform architecture to SOC 2-aligned evidence categories.

This is readiness evidence only. It does not claim SOC 2 certification.

## Trust Services Alignment

### Security

Relevant platform controls:

- authentication;
- RBAC;
- tenant boundaries;
- tool-call approval gates;
- destructive-action blocking;
- audit logging;
- secret management;
- API authorization.

### Availability

Relevant platform controls:

- evaluation runner job status;
- retry handling;
- latency tracking;
- cost and execution budgets;
- release regression gates;
- rollback records.

### Processing Integrity

Relevant platform controls:

- ground truth benchmark versioning;
- hallucination scoring;
- RAG grounding;
- policy compliance validation;
- regression detection;
- evidence replay.

### Confidentiality

Relevant platform controls:

- sensitive data handling;
- memory leakage testing;
- tenant separation;
- approved context validation;
- evidence access restrictions.

### Privacy

Relevant platform controls:

- retention boundaries;
- no real patient or customer data in demo mode;
- personal data minimization;
- reviewer notes governance;
- memory/session isolation.

## TRUE_MODE Requirement

SOC 2-aligned documentation becomes stronger only when mapped to real persistent events, audit records, and evidence packages.

Phase 10 records the future control map. It does not claim production operating effectiveness.
