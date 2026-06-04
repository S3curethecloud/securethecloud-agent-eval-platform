# Agent Eval Platform Phase 2 AI Chaos Harness Boundary

Status: Phase 01 / Boundary Adoption In Progress

## Purpose

Define the local doctrine boundary for the Agent Eval Platform as a Phase 2 AI Chaos Harness / offline evaluation support repository.

## Phase 2 role

The Agent Eval Platform supports the AI Chaos Harness lane.

It may support:

- adversarial simulation planning
- offline resilience validation
- evaluation contract planning
- benchmark harness planning
- policy candidate evidence
- RiskDNA feedback references
- Agent Black Box replay references
- Governance & Policy candidate handoff evidence

## AI Chaos Harness boundary

AI Chaos Harness may generate policy candidates.

AI Chaos Harness may generate offline resilience evidence.

AI Chaos Harness may generate RiskDNA feedback.

AI Chaos Harness may generate Black Box replay references.

AI Chaos Harness must not mutate live runtime rules.

AI Chaos Harness must not mutate customer-visible production traffic.

AI Chaos Harness must not directly update Aegis/OPA policy.

AI Chaos Harness must not bypass SENTINEL.

AI Chaos Harness must not bypass Agent Black Box.

## Hot-path boundary

The Agent Eval Platform must not enter the runtime hot path.

The Agent Eval Platform must not perform enforcement decisions.

The Agent Eval Platform must not perform runtime challenge decisions.

The Agent Eval Platform must not perform containment decisions.

The Agent Eval Platform must not call external LLMs, remote inference, or slow third-party systems in any runtime decision path.

## Adaptive feedback boundary

Offline findings may become governed policy candidates only.

Policy candidates must include evidence references.

Policy candidates must be reviewed by Governance & Policy.

Custodian approval is required before policy changes enter any release path.

No automatic runtime mutation is allowed.

## SOC 2 boundary

This repository may support SOC 2-aligned readiness evidence.

It does not claim SOC 2 certification.

It does not claim production operating effectiveness.
