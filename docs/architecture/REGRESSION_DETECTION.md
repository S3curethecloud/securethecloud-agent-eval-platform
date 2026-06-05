# Regression Detection Architecture

## Platform

SecureTheCloud Agent Evaluation Platform

## Purpose

Regression Detection compares current agent evaluation runs against known-good baselines.

## Inputs

- known-good baseline snapshot
- current evaluation run
- benchmark
- hallucination scoring result
- RAG evaluation result
- tool-call verification result
- policy compliance result

## Outputs

- same prompt / different output signal
- worse grounding signal
- new policy violation signal
- more expensive tool path signal
- new hallucination signal
- latency regression signal
- changed risk tier signal
- baseline drift signal
- release recommendation
- remediation guidance

## Release Recommendations

- STABLE
- REVIEW REQUIRED
- BLOCK RELEASE

## Enterprise Direction

Future enterprise versions should persist baseline snapshots, require reviewer approval, compare release candidates, and support CI/CD release gates.

## SOC 2 Alignment

Regression Detection supports SOC 2-style change-management evidence for:

- Security
- Availability
- Processing Integrity

It does not claim SOC 2 certification, auditor attestation, or production operating effectiveness.

## Boundary

Current implementation is deterministic and lab-safe.

It does not enforce production release gates, execute live agents, call live LLMs, or mutate runtime systems.
