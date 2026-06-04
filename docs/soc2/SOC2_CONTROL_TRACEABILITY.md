# SOC 2 Control Traceability

## Platform

SecureTheCloud Agent Evaluation Platform

## Purpose

This matrix maps platform capabilities to SOC 2-style readiness evidence.

## Traceability Matrix

| Control Area | Platform Capability | Evidence Generated | Current State |
|---|---|---|---|
| Security | Tool-call verification | Forbidden tool detection, approval requirement, destructive-action block result | Simulated |
| Security | Policy compliance validator | PASS, FAIL, APPROVAL REQUIRED, ESCALATE, BLOCK decisions | Simulated |
| Security | Agent safety verification | Prompt injection, tool hijacking, approval bypass, policy evasion checks | Simulated |
| Availability | Cost / latency evaluation | Average latency, cost per run, tool loop detection | Simulated |
| Availability | Regression detection | Baseline comparison, latency regression, cost regression, risk tier changes | Simulated |
| Processing Integrity | Ground truth benchmark store | Expected answer, required citation, allowed/forbidden sources | Simulated |
| Processing Integrity | Hallucination scoring | Unsupported claims, contradictions, missing citation results | Simulated |
| Processing Integrity | RAG evaluation | Retrieval precision, recall, citation accuracy, answer grounding | Simulated |
| Confidentiality | Sensitive data handling | Redaction expectation, forbidden disclosure result, PHI-style checks | Simulated |
| Confidentiality | Memory/session evaluation | Memory leakage, session isolation, tenant separation checks | Simulated |
| Privacy | Data retention boundary | Sensitive retention detection, context expiration checks | Simulated |
| Privacy | Public demo boundary | No real patient/customer/regulatory data connected | Documented |

## Required Evidence Fields

Every future evaluation run should preserve:

- test ID
- agent ID
- prompt
- benchmark ID
- expected answer
- allowed sources
- forbidden sources
- retrieved context
- tool calls
- policy decision
- output
- scores
- failure reason
- remediation recommendation
- reviewer notes
- timestamp
- evidence package ID

## Non-Claims

This matrix does not prove production control operation.

It documents intended SOC 2-aligned traceability for the lab platform.
