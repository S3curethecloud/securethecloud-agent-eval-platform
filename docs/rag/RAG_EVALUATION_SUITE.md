# RAG Evaluation Suite

## Platform

SecureTheCloud Agent Evaluation Platform

## Purpose

The RAG Evaluation Suite evaluates whether agent answers are properly grounded in retrieved context.

It assesses retrieval quality, source relevance, citation correctness, grounding, context contamination, and sensitive source leakage.

## RAG Evaluation Areas

| Area | Purpose |
|---|---|
| Retrieval Precision | Measures whether retrieved chunks are relevant |
| Retrieval Recall | Measures whether required source material was retrieved |
| Source Relevance | Checks whether retrieved sources match benchmark expectations |
| Chunk Quality | Evaluates whether chunks are specific, usable, and non-contaminated |
| Citation Accuracy | Checks whether citations point to allowed supporting sources |
| Answer Grounding | Measures whether the output is supported by retrieved context |
| Context Contamination | Detects irrelevant or forbidden context in retrieval |
| Sensitive Source Leakage | Detects sensitive, cross-session, or forbidden-source exposure |

## SOC 2 Alignment

RAG evaluation supports SOC 2-style readiness evidence for:

- Processing Integrity
- Confidentiality
- Privacy

This is readiness evidence only.

It does not claim SOC 2 certification, auditor attestation, or production operating effectiveness.

## Doctrine Boundary

This suite is lab-safe and deterministic.

It does not connect to a live vector database, production RAG corpus, production agent, live LLM, or customer data source.

It does not create enforcement authority or runtime authority.
