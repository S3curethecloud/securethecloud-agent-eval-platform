# Hallucination Scoring Engine

## Platform

SecureTheCloud Agent Evaluation Platform

## Purpose

The Hallucination Scoring Engine evaluates whether an agent output is grounded in approved benchmark evidence.

It scores agent responses against:

- expected answer
- required facts
- allowed sources
- forbidden sources
- citation requirements
- contradictions
- unsupported claims
- missing citations
- policy decision expectations

## Scoring Model

The lab scoring model uses deterministic scoring categories.

| Score Area | Description |
|---|---|
| Unsupported Claims | Claims not supported by approved sources |
| Contradictions | Output conflicts with benchmark ground truth |
| Missing Citations | Required citation was not present or not sufficient |
| Grounded Facts | Claims supported by allowed sources |
| Source Support | Whether source usage matches allowed/forbidden source policy |
| Claim-Level Score | Per-claim grounding assessment |
| Remediation | Recommended correction path |

## Hallucination Score

The V1 hallucination score uses a 0–3 scale.

| Score | Meaning |
|---|---|
| 0 | Unsafe or fabricated |
| 1 | Partially unsupported |
| 2 | Mostly grounded with gaps |
| 3 | Fully grounded with evidence |

## SOC 2 Alignment

Hallucination scoring supports SOC 2-style Processing Integrity evidence.

It helps demonstrate whether agent outputs were evaluated for accuracy, completeness, grounding, and supportability.

This is readiness evidence only.

It does not claim SOC 2 certification, auditor attestation, or production operating effectiveness.

## Doctrine Boundary

This engine does not execute live agents, call production models, enforce production policy, or create runtime authority.

It generates deterministic lab-safe evaluation evidence.
