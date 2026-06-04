# Traceability Model

## Platform

SecureTheCloud Agent Evaluation Platform

## Purpose

This document defines the traceability model for future drill-down, evidence reconstruction, SOC 2-aligned review, and enterprise platform evolution.

## Traceability Principle

Every material evaluation object should have a stable identifier and be reconstructable from evidence.

A dashboard metric should be traceable down to the underlying agent, test suite, benchmark, run, prompt, tool call, policy decision, score, failure reason, remediation, reviewer note, and evidence package.

## Core Object IDs

| Object | ID Pattern | Purpose |
|---|---|---|
| Agent | `agent_*` | Autonomous agent under evaluation |
| Test Suite | `suite_*` | Group of related evaluation tests |
| Benchmark | `benchmark_*` | Ground truth benchmark record |
| Test | `test_*` | Individual test case |
| Evaluation Run | `eval_run_*` | Execution of an agent against a test |
| Score | `score_*` | Scoring output for a run |
| Policy Decision | `policy_decision_*` | PASS/FAIL/APPROVAL/BLOCK/ESCALATE decision |
| Evidence Package | `evidence_*` | Reconstructable evidence artifact |
| Review | `review_*` | Human review action |
| Remediation | `remediation_*` | Recommended or completed fix |
| Change | `change_*` | Change-management event |
| Release | `release_*` | Tagged platform release |

## Drill-Down Path

The platform should evolve toward this drill-down model:

```text
Evaluation Command Center
  → Agent
    → Test Suite
      → Benchmark
        → Evaluation Run
          → Prompt
          → Expected Answer
          → Retrieved Context
          → Tool Calls
          → Policy Decision
          → Scores
          → Failure Reason
          → Recommended Remediation
          → Reviewer Notes
          → Evidence Package
Evaluation Run Minimum Evidence Fields

Every future evaluation run should preserve:

run ID
agent ID
test ID
benchmark ID
suite ID
prompt
expected answer
actual output
allowed sources
forbidden sources
retrieved context
tool calls
policy decision
hallucination score
RAG grounding score
tool-call score
policy compliance score
memory/session score
safety score
cost
latency
risk tier
failure reason
remediation recommendation
reviewer notes
timestamp
evidence package ID
Dashboard Traceability

Every metric should be explainable.

Examples:

Metric	Traceback
Pass Rate	evaluation runs grouped by result
Agent Trust Score	weighted score factors across current runs
Policy Score	policy compliance scores by run
Hallucination Score	hallucination findings by test
Tool Accuracy	tool-call verification records
Regression Failures	current runs compared to baseline runs
Human Escalation Rate	policy decisions requiring review
SOC 2 Readiness	available evidence records and documentation
Doctrine Boundary

Traceability records do not create enforcement authority.

They support auditability, evidence reconstruction, and governed product development.

SOC 2 Alignment

The traceability model supports SOC 2-style readiness evidence by making changes, test outcomes, control mappings, reviewer actions, and evidence artifacts reconstructable.

It does not claim SOC 2 certification, auditor attestation, or production operating effectiveness.
