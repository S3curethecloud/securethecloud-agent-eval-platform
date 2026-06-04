# SecureTheCloud Agent Evaluation Platform — Doctrine Alignment

## Status

Doctrine alignment required before platform expansion.

## Controlling Doctrine

This repository is downstream of the SecureTheCloud doctrine control plane.

Agents and contributors must treat the doctrine control plane as the canonical source of truth for:

- suite names
- suite membership
- module ownership
- authority type
- enforcement ownership
- callable interfaces
- product packaging boundaries
- SENTINEL control point rules
- status taxonomy values
- runtime authority

## Required First-Read Doctrine Files

Before changing suite positioning, module authority, product packaging, callable interfaces, evidence surfaces, enforcement surfaces, or runtime authority, contributors must read:

1. doctrine.lock.md
2. docs/portfolio/SUITE_CATALOG.md
3. docs/portfolio/MODULE_AUTHORITY_MATRIX.md
4. docs/portfolio/COMPOSITION_LAYER_DOCTRINE.md
5. docs/portfolio/SENTINEL_CONTROL_POINT_RULE.md
6. docs/portfolio/PRODUCT_PACKAGING_BOUNDARIES.md
7. contracts/portfolio/suite_catalog.json
8. contracts/portfolio/module_registry.json
9. contracts/portfolio/authority_matrix.json
10. contracts/portfolio/composition_rules.json
11. contracts/portfolio/status_taxonomy.json

## Current Packaging Boundary

SecureTheCloud Agent Evaluation Platform is currently a lab-safe evaluation platform surface.

It is not declared as:

- a new customer-offerable suite
- a new doctrine authority source
- a new enforcement owner
- a SENTINEL bypass path
- a production runtime authority
- a production adapter
- a live backend integration
- a production deployment control plane

## Existing Doctrine-Aligned Suite Relationship

This lab may demonstrate workflows that relate to existing doctrine-defined suites, including:

- agent_blackbox
- compliance_evidence
- runtime_assurance
- risk_intelligence

It must not alter suite membership or claim new suite ownership without a doctrine control plane update.

## Evidence Surface Boundary

This platform may generate simulated evidence records for agent evaluation runs.

Current evidence is lab-only and does not prove:

- production enforcement
- production operating effectiveness
- SOC 2 certification
- live runtime control
- real customer data validation
- real patient data validation
- enterprise authorization behavior

## Enforcement Boundary

This platform may simulate policy decisions such as:

- PASS
- FAIL
- APPROVAL REQUIRED
- ESCALATE
- BLOCK

These are demonstration outputs only.

They do not create production enforcement authority, runtime blocking authority, token issuance, runtime session creation, Kubernetes mutation, OPA mutation, SENTINEL bypass, or live adapter behavior.

## Enterprise Escalation Rule

The product may include an enterprise escalation path as a future architecture model.

Enterprise-grade claims must remain framed as future implementation requirements until the doctrine control plane grants the relevant authority and packaging boundaries.

## Non-Scope Confirmation

This repository must not contain:

- runtime adapter code
- Helm templates
- customer credential material
- generated secrets
- production enforcement scripts
- live backend integrations
- module-specific enforcement logic
- production deployment authority
