# Regression Detection

## Platform

SecureTheCloud Agent Evaluation Platform

## Purpose

Regression Detection compares current agent evaluation runs against known-good baselines.

It identifies whether agent behavior, grounding, policy compliance, tool behavior, cost, latency, or risk posture degraded after a prompt, model, RAG, tool, memory, policy, or workflow change.

## Regression Signals

This phase detects:

- same prompt, different output
- worse grounding score
- new policy violation
- more expensive tool path
- new hallucination
- latency regression
- changed risk tier
- baseline drift

## Enterprise Purpose

Regression Detection turns the platform into a release-quality control surface.

Future enterprise use cases include:

- CI release gates
- prompt regression testing
- model upgrade validation
- RAG index change validation
- tool policy change validation
- workflow automation release review
- SOC 2 change-management evidence

## Outcomes

| Outcome | Meaning |
|---|---|
| STABLE | Current run matches baseline expectations |
| WARNING | Minor regression or drift detected |
| REGRESSION | Material degradation detected |
| BLOCK RELEASE | High-risk regression should block release |
| REVIEW REQUIRED | Human review or governance review required |

## Boundary

This implementation is deterministic and lab-safe.

It does not execute live agents, call live LLMs, connect to production telemetry, enforce release gates, or mutate production systems.
