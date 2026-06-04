# SecureTheCloud Agent Evaluation Platform

SecureTheCloud Agent Evaluation Platform is evaluation infrastructure for testing, scoring, and verifying autonomous AI agents before and after deployment.

It demonstrates how enterprises can evaluate agent safety, factuality, RAG grounding, tool-call correctness, policy compliance, memory isolation, regression risk, cost behavior, and evidence readiness.

## Core Principle

Agents must be tested before deployment, monitored after deployment, and re-evaluated whenever prompts, tools, memory, retrieval, policies, or workflows change.

## Portfolio Positioning

This platform is the flagship SecureTheCloud evaluation layer.

| Platform | Lifecycle Role |
|---|---|
| SecureTheCloud AI Governance Board | Governance before deployment |
| SecureTheCloud MCP Governance Lab | Governance during tool access |
| SecureTheCloud AI Runtime Trust Center | Governance after deployment |
| SecureTheCloud Agent Evaluation Platform | Evaluation across the agent lifecycle |

## Public Demo Boundary

This is a simulated agent evaluation workflow.

No real customer data, patient data, production agents, live autonomous tools, regulated systems, production model runtimes, or enterprise authorization systems are connected.

## Local Development

Frontend:

```text
http://localhost:3030

Backend:

http://localhost:8030

Run:

docker compose up --build -d

Health check:

curl http://localhost:8030/health


## Doctrine Alignment

SecureTheCloud Agent Evaluation Platform is downstream of the SecureTheCloud doctrine control plane.

Before changing suite positioning, module authority, product packaging, callable interfaces, enforcement behavior, evidence authority, or runtime authority, contributors must consult the doctrine control plane.

Current boundary:

- lab-safe evaluation platform surface
- no new customer-offerable suite declaration
- no new enforcement authority
- no SENTINEL bypass
- no runtime authority
- no production agent execution
- no live autonomous tool execution

The platform may demonstrate simulated agent evaluation workflows and evidence records, but production authority must be granted through the doctrine control plane first.

## SecureTheCloud Ecosystem Fit

SecureTheCloud Agent Evaluation Platform is a lab-safe evaluation surface for testing, scoring, and verifying autonomous AI agents across the SecureTheCloud ecosystem.

It demonstrates how agent outputs, tool calls, RAG grounding, memory behavior, policy decisions, safety failures, regressions, and SOC 2-aligned evidence can be evaluated before and after deployment.

It does not create new suite membership, enforcement authority, runtime authority, SENTINEL bypass behavior, or production agent execution.

### Lifecycle Positioning

| SecureTheCloud Surface | Lifecycle Role |
|---|---|
| SecureTheCloud AI Governance Board | Governance before deployment |
| SecureTheCloud MCP Governance Lab | Governance during tool access |
| SecureTheCloud AI Runtime Trust Center | Governance after deployment |
| SecureTheCloud Agent Evaluation Platform | Evaluation across the agent lifecycle |

### Flagship Evaluation Role

The platform is intended to become the evaluation control surface across the SecureTheCloud ecosystem.

It evaluates:

- agent outputs
- tool calls
- RAG grounding
- memory behavior
- policy decisions
- safety failures
- regressions
- SOC 2-aligned evidence readiness

Current state remains lab-safe and simulated.

## Platform State of Truth

The platform State of Truth records the current governed state of the Agent Evaluation Platform, including active phase, release tags, doctrine boundary, SOC 2 readiness posture, rollback points, and traceability object model.

The SoT is not a runtime authority source and does not grant enforcement authority. It exists to support governed development, rollback, auditability, and evidence reconstruction.

Current SoT documents:

- `docs/sot/PLATFORM_STATE.md`
- `docs/sot/ROLLBACK_POINTS.md`
- `docs/sot/TRACEABILITY_MODEL.md`

The platform is designed to evolve toward drill-down traceability from executive dashboard metrics to underlying agents, benchmarks, evaluation runs, policy decisions, scores, reviewer notes, remediation, and evidence packages.

## Test Harness Engine

The Phase 3 test harness engine introduces deterministic, benchmark-driven evaluation runs.

The platform now supports drill-down from dashboard metrics and run cards into:

- agent
- test suite
- benchmark
- evaluation run
- prompt
- expected answer
- actual output
- retrieved context
- tool calls
- policy decision
- scores
- failure reason
- recommended remediation
- evidence package

Current Phase 3 endpoints:

- `GET /api/benchmarks`
- `GET /api/failure-taxonomy`
- `GET /api/evaluation-runs`
- `GET /api/evaluation-runs/{run_id}`
- `POST /api/evaluation-runs`
- `GET /api/evidence-packages/{evidence_id}`

The harness remains deterministic and lab-safe. It does not execute production agents or live autonomous tools.

## Ground Truth Benchmark Store

The Phase 4 Ground Truth Benchmark Store defines governed benchmark records for agent evaluation.

Each benchmark includes:

- benchmark ID
- suite ID
- test ID
- category
- question
- expected answer
- allowed sources
- forbidden sources
- required citation flag
- risk classification
- expected tool call
- expected policy decision
- expected result
- failure type
- recommended remediation

Phase 4 endpoints:

- `GET /api/ground-truth`
- `GET /api/ground-truth/coverage`
- `GET /api/ground-truth/{benchmark_id}`

The benchmark store is lab-safe and deterministic. It does not execute production agents or live autonomous tools.
