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

## Hallucination Scoring Engine

The Phase 5 Hallucination Scoring Engine adds deterministic claim-level grounding analysis.

It evaluates:

- unsupported claims
- contradictions
- missing citations
- grounded facts
- forbidden source usage
- source support
- claim-level score
- remediation guidance
- SOC 2 Processing Integrity traceability

Phase 5 endpoints:

- `GET /api/scoring/hallucination`
- `GET /api/scoring/hallucination/{run_id}`

The scoring engine is lab-safe and deterministic. It does not call live LLMs, execute production agents, or perform production enforcement.

## RAG Evaluation Suite

The Phase 6 RAG Evaluation Suite adds deterministic retrieval and grounding analysis.

It evaluates:

- retrieval precision
- retrieval recall
- source relevance
- chunk quality
- citation accuracy
- answer grounding
- context contamination
- sensitive source leakage
- RAG evidence traceability

Phase 6 endpoints:

- `GET /api/rag/evaluations`
- `GET /api/rag/evaluations/{run_id}`

The RAG suite is lab-safe and deterministic. It does not connect to a live vector database, production RAG corpus, live LLM, production agent, or customer data source.

## Tool-Call Verification & MCP Governance Bridge

The Phase 7 Tool-Call Verification layer connects the Agent Evaluation Platform to the SecureTheCloud MCP Governance Lab story.

It evaluates whether agents:

- called the correct tool
- avoided forbidden tools
- used valid parameters
- honored approval requirements
- blocked destructive actions
- respected tool-call budgets
- preserved RBAC / permission boundaries

Phase 7 endpoints:

- `GET /api/tool-policy-rules`
- `GET /api/tool-verification`
- `GET /api/tool-verification/{run_id}`

The bridge is lab-safe and deterministic. It does not connect to a live MCP server, execute tools, enforce runtime policy, or create production authority.

## Policy Compliance Validator

The Phase 8 Policy Compliance Validator maps each evaluation run to governance, compliance, model-risk, and audit-readiness expectations.

It maps runs to:

- NIST AI RMF
- Responsible AI
- SOC 2 readiness
- HIPAA-style controls
- Internal AI policy
- Model risk management

Policy outcomes:

- PASS
- FAIL
- APPROVAL REQUIRED
- ESCALATE
- BLOCK

Phase 8 endpoints:

- `GET /api/policy/frameworks`
- `GET /api/policy/compliance`
- `GET /api/policy/compliance/{run_id}`

The validator is lab-safe and deterministic. It does not create production approval workflows, enforcement authority, runtime authority, SENTINEL bypass behavior, or SOC 2 certification claims.

## Regression Detection

The Phase 9 Regression Detection layer compares current evaluation runs against known-good baselines.

It detects:

- same prompt, different output
- worse grounding score
- new policy violation
- more expensive tool path
- new hallucination
- latency regression
- changed risk tier
- baseline drift

Regression outcomes:

- STABLE
- REVIEW REQUIRED
- BLOCK RELEASE

Phase 9 endpoints:

- `GET /api/regression/baselines`
- `GET /api/regression/detections`
- `GET /api/regression/detections/{run_id}`

Regression Detection is lab-safe and deterministic. It does not enforce production release gates, execute live agents, call live LLMs, or mutate runtime systems.


## Portfolio Fit and Doctrine Boundary

The SecureTheCloud Agent Evaluation Platform is classified as a governed Phase 2 AI Chaos Harness / offline evaluation support repository.

It supports evaluation and assurance workflows including benchmark harness planning, hallucination checks, RAG grounding checks, tool-call verification, policy compliance mapping, regression detection, resilience validation evidence, and reviewer-ready evidence package preparation.

It is not a new product suite, not a fifth suite, not an independent authority plane, not an enforcement surface, not a runtime controller, and not a live production mutation system.

Canonical operating phrase:

> Agent Eval recommends. Governance approves. Aegis/OPA/SENTINEL enforce. Black Box preserves evidence.

See:

- `docs/portfolio/AGENT_EVALUATION_PLATFORM_PORTFOLIO_FIT_BASELINE.md`
- `docs/doctrine/CANONICAL_DOCTRINE_ADOPTION.md`
- `docs/doctrine/AGENT_EVAL_PLATFORM_PHASE_2_AI_CHAOS_HARNESS_BOUNDARY.md`
