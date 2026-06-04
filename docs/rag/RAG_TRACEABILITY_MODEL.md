# RAG Traceability Model

## Purpose

RAG traceability links an agent answer back to the retrieved context and benchmark expectations used to evaluate it.

## Traceability Path

```text
Evaluation Run
  → Benchmark
    → Allowed Sources
    → Forbidden Sources
    → Retrieved Context
    → Retrieved Chunks
    → Citations
    → Answer Claims
    → Grounding Score
    → RAG Evidence Record
Minimum RAG Evidence Fields

Each RAG evaluation record should preserve:

run ID
benchmark ID
source IDs
chunk IDs
retrieved context
allowed source match
forbidden source detection
citation accuracy
retrieval precision
retrieval recall
answer grounding score
context contamination flag
sensitive source leakage flag
remediation guidance
SOC 2 trace area
Enterprise Future

Future enterprise implementation should support:

vector store integration
source document versioning
chunk lineage
citation span validation
sensitive source classifiers
retrieval replay
signed evidence packages
CI/CD RAG regression gates
