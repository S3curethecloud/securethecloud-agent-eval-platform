# Cloudflare Hosting Architecture

## Purpose

This document defines the Cloudflare-aligned hosting direction for the Agent Evaluation Platform.

## Recommended Near-Term Architecture

### Frontend

- Cloudflare Pages;
- custom domain;
- environment-gated API base URL;
- enterprise preview UI;
- static assets served at the edge.

### Backend

Recommended near-term backend:

- FastAPI backend hosted on Fly.io, Cloud Run, Render, or equivalent;
- Cloudflare DNS in front;
- managed PostgreSQL;
- secure environment variables;
- CORS restricted to approved frontend domains.

### Domain Candidate

Recommended platform domain:

`agent-eval.securethecloud.dev`

Alternative:

`eval.securethecloud.dev`

## Cloudflare-Native Future Option

A future Cloudflare-native implementation may use:

- Cloudflare Workers;
- D1;
- R2;
- Queues;
- KV;
- Access.

That is not required for Phase 10.

## Phase 10 Boundary

Phase 10 does not perform production deployment.

Phase 10 records the hosting architecture and enterprise preview path.
