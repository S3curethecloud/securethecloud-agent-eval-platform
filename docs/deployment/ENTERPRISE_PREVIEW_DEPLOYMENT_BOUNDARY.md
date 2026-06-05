# Enterprise Preview Deployment Boundary

## Status

Phase 16 foundation added.

## Purpose

The enterprise preview deployment boundary defines Cloudflare preview readiness for the SecureTheCloud Agent Evaluation Platform without activating production authority.

## Boundary Statement

Enterprise preview deployment boundary is defined for Cloudflare readiness only. No TRUE_MODE activation, production authority, live autonomous execution, production agent tool use, or customer data processing is active.

## Preview Surfaces

- Cloudflare Pages frontend preview
- environment-gated backend API origin
- restricted CORS expectations
- preview environment variables
- readiness health checks

## Required Environment Variables

- VITE_API_BASE_URL
- DATABASE_URL
- APP_MODE
- TRUE_MODE_ENABLED=false
- ALLOWED_PREVIEW_ORIGINS
- EVIDENCE_EXPORT_SIGNING_ENABLED=false

## SOC 2 Alignment

This phase supports readiness evidence for:

- Security
- Availability
- Processing Integrity

## Non-Scope

This phase does not activate TRUE_MODE, production authority, production traffic cutover, production customer data, live autonomous execution, production agent tools, signed evidence bundles, auditor attestation, or production operating effectiveness.
