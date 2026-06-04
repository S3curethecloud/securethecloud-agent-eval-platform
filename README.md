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

