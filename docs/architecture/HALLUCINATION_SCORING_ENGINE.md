# Hallucination Scoring Engine Architecture

## Platform

SecureTheCloud Agent Evaluation Platform

## Purpose

The Hallucination Scoring Engine converts run-level evaluation into claim-level traceability.

## Inputs

- evaluation run
- benchmark record
- expected answer
- actual output
- allowed sources
- forbidden sources
- citation requirement
- failure taxonomy
- remediation guidance

## Outputs

- unsupported claim count
- contradiction count
- missing citation count
- forbidden source use count
- grounded fact count
- source support score
- claim-level score
- remediation guidance
- SOC 2 Processing Integrity trace

## Enterprise Future

Future implementation should support:

- parser-backed claim extraction
- source span matching
- citation validation
- contradiction detection
- reviewer override
- persisted score artifacts
- signed evidence package linkage
- CI release gates

## Boundary

Current implementation is deterministic and lab-safe.

It does not call live models or execute production agents.
