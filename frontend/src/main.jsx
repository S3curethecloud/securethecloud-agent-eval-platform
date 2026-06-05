import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const API_BASE = import.meta.env.VITE_API_BASE_URL || "http://localhost:8030";

function App() {
  const [dashboard, setDashboard] = useState(null);
  const [agents, setAgents] = useState([]);
  const [runs, setRuns] = useState([]);
  const [benchmarks, setBenchmarks] = useState([]);
  const [pillars, setPillars] = useState([]);
  const [readiness, setReadiness] = useState([]);
  const [selectedRun, setSelectedRun] = useState(null);
  const [selectedAgentId, setSelectedAgentId] = useState("agent_policy_copilot");
  const [selectedBenchmarkId, setSelectedBenchmarkId] = useState("benchmark_regulatory_claim_grounding");
  const [status, setStatus] = useState("Loading agent evaluation telemetry...");
  const [hallucination, setHallucination] = useState(null);
  const [rag, setRag] = useState(null);
  const [toolVerification, setToolVerification] = useState(null);
  const [policyCompliance, setPolicyCompliance] = useState(null);
  const [regression, setRegression] = useState(null);
  const [platformMode, setPlatformMode] = useState(null);
  const [trueModeRequirements, setTrueModeRequirements] = useState(null);
  const [enterpriseReadinessPosture, setEnterpriseReadinessPosture] = useState(null);
  const [tenancyStatus, setTenancyStatus] = useState(null);
  const [rbacAccess, setRbacAccess] = useState(null);
  const [auditLedger, setAuditLedger] = useState(null);
  const [evidenceChain, setEvidenceChain] = useState(null);
  const [reviewerWorkspace, setReviewerWorkspace] = useState(null);
  const [exportManifest, setExportManifest] = useState(null);
  const [runnerQueue, setRunnerQueue] = useState(null);
  const [runnerJobs, setRunnerJobs] = useState(null);
  const [deploymentBoundary, setDeploymentBoundary] = useState(null);
  const [deploymentHealthChecks, setDeploymentHealthChecks] = useState(null);
  const [aiChaosScenarios, setAiChaosScenarios] = useState(null);
  const [aiChaosPlans, setAiChaosPlans] = useState(null);
  const [aiChaosReferences, setAiChaosReferences] = useState(null);
  const [runStatus, setRunStatus] = useState("Ready to run deterministic lab evaluation.");

  async function load() {
    try {
      const loadJson = async (path, fallback) => {
        try {
          const res = await fetch(`${API_BASE}${path}`);

          if (!res.ok) {
            throw new Error(`${path} returned ${res.status}`);
          }

          return await res.json();
        } catch (err) {
          console.error("API load failed:", path, err);
          return fallback;
        }
      };

      const asArray = (value, key) => {
        if (Array.isArray(value)) return value;
        if (value && Array.isArray(value[key])) return value[key];
        return [];
      };

      const [
        dashboardData,
        agentsData,
        runsData,
        benchmarksData,
        pillarsData,
        readinessData,
        hallucinationData,
        ragData,
        toolVerificationData,
        policyComplianceData,
        regressionData,
        platformModeData,
        trueModeRequirementsData,
        enterpriseReadinessPostureData,
        tenancyStatusData,
        rbacAccessData,
        auditLedgerData,
        evidenceChainData
      ] = await Promise.all([
        loadJson("/api/dashboard", {}),
        loadJson("/api/agents", []),
        loadJson("/api/evaluation-runs", []),
        loadJson("/api/benchmarks", []),
        loadJson("/api/evaluation-pillars", []),
        loadJson("/api/enterprise-readiness", []),
        loadJson("/api/scoring/hallucination", {
          average_claim_level_score: 0,
          average_hallucination_score: 0,
          unsupported_claims: 0,
          contradictions: 0,
          missing_citations: 0,
          forbidden_source_uses: 0,
          summaries: []
        }),
        loadJson("/api/rag/evaluations", {
          average_retrieval_precision: 0,
          average_retrieval_recall: 0,
          average_citation_accuracy: 0,
          average_answer_grounding: 0,
          context_contamination_count: 0,
          sensitive_source_leakage_count: 0,
          evaluations: []
        }),
        loadJson("/api/tool-verification", {
          average_tool_verification_score: 0,
          blocked_tool_attempts: 0,
          forbidden_tool_attempts: 0,
          approval_requirements_honored: 0,
          destructive_actions_blocked: 0,
          tool_budget_violations: 0,
          verifications: []
        }),
        loadJson("/api/policy/compliance", {
          outcomes: {
            PASS: 0,
            FAIL: 0,
            "APPROVAL REQUIRED": 0,
            ESCALATE: 0,
            BLOCK: 0
          },
          governance_board_referrals: 0,
          frameworks_mapped: [],
          validations: []
        }),
      loadJson("/api/regression/detections", {
        stable_runs: 0,
        review_required: 0,
        blocked_releases: 0,
        baseline_drift_count: 0,
        same_prompt_different_output_count: 0,
        worse_grounding_count: 0,
        new_policy_violation_count: 0,
        cost_regression_count: 0,
        new_hallucination_count: 0,
        latency_regression_count: 0,
        risk_tier_change_count: 0,
        detections: []
      }),
        loadJson("/api/platform/mode", null),
        loadJson("/api/platform/truemode-requirements", null),
        loadJson("/api/platform/enterprise-readiness-posture", null),
        loadJson("/api/v1/tenancy/status", null),
        loadJson("/api/v1/rbac/effective-access", null),
        loadJson("/api/v1/audit-ledger/events", null),
        loadJson("/api/v1/audit-ledger/evidence-chain", null)
      ]);

      setDashboard(dashboardData);
      setAgents(asArray(agentsData, "agents"));
      setRuns(asArray(runsData, "runs"));
      setBenchmarks(asArray(benchmarksData, "benchmarks"));
      setPillars(asArray(pillarsData, "pillars"));
      setReadiness(asArray(readinessData, "readiness"));
      setHallucination(hallucinationData);
      setRag(ragData);
      setToolVerification(toolVerificationData);
      setPolicyCompliance(policyComplianceData);
      setRegression(regressionData);
      setPlatformMode(platformModeData);
      setTrueModeRequirements(trueModeRequirementsData);
      setEnterpriseReadinessPosture(enterpriseReadinessPostureData);
      setTenancyStatus(tenancyStatusData);
      setRbacAccess(rbacAccessData);
      setAuditLedger(auditLedgerData);
      setEvidenceChain(evidenceChainData);
    // phase12TenantRbacHydration
    try {
      const [tenantBoundaryResponse, rbacBoundaryResponse] = await Promise.all([
        fetch(`${API_BASE}/api/v1/tenancy/status`),
        fetch(`${API_BASE}/api/v1/rbac/effective-access`)
      ]);

      if (tenantBoundaryResponse.ok) {
        setTenancyStatus(await tenantBoundaryResponse.json());
      }

      if (rbacBoundaryResponse.ok) {
        setRbacAccess(await rbacBoundaryResponse.json());
      }
    } catch (phase12Error) {
      console.warn("Phase 12 tenant/RBAC hydration failed", phase12Error);
    }


      setStatus("Live backend connected.");
    } catch {
      setStatus("Backend connection failed. Demo shell loaded.");
    }
  }

  async function loadRunDetail(runId) {
    const res = await fetch(`${API_BASE}/api/evaluation-runs/${runId}`);
    if (!res.ok) {
      setRunStatus("Run detail fetch failed.");
      return;
    }
    setSelectedRun(await res.json());
  }

  async function executeRun() {
    setRunStatus("Running deterministic lab evaluation...");
    const res = await fetch(`${API_BASE}/api/evaluation-runs`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        agent_id: selectedAgentId,
        benchmark_id: selectedBenchmarkId,
        reviewer_note: "Phase 3 deterministic harness run."
      })
    });

    if (!res.ok) {
      setRunStatus("Evaluation run failed.");
      return;
    }

    const detail = await res.json();
    setSelectedRun(detail);
    setRunStatus(`Evaluation complete: ${detail.run.result.toUpperCase()} / ${detail.run.policy_decision}`);
    await load();
  }

  useEffect(() => {
    load();
  }, []);

  const metricCards = dashboard
    ? [
        ["Agent Trust", `${dashboard.agent_trust_score}/100`],
        ["Test Runs", dashboard.total_test_runs],
        ["Benchmarks", dashboard.benchmark_count],
        ["Evidence", dashboard.evidence_package_count],
        ["Pass Rate", `${dashboard.pass_rate}%`],
        ["Fail Rate", `${dashboard.fail_rate}%`],
        ["Hallucination", `${dashboard.hallucination_score}/3`],
        ["Tool Accuracy", `${dashboard.tool_call_accuracy}%`],
        ["Policy Score", `${dashboard.policy_compliance_score}%`],
        ["Latency", `${dashboard.average_latency_ms}ms`],
        ["Risk Tier", dashboard.highest_risk_tier]
      ]
    : [];

  const selectedBenchmark = benchmarks.find(
    (benchmark) => benchmark.benchmark_id === selectedBenchmarkId
  );


  // phase14ReviewerWorkspaceIndependentHydration
  useEffect(() => {
    const hydrateReviewerWorkspace = async () => {
      try {
        const [reviewerResponse, manifestResponse] = await Promise.all([
          fetch(`${API_BASE}/api/v1/reviewer/workspace`),
          fetch(`${API_BASE}/api/v1/evidence-export/manifest`)
        ]);

        if (reviewerResponse.ok) {
          setReviewerWorkspace(await reviewerResponse.json());
        }

        if (manifestResponse.ok) {
          setExportManifest(await manifestResponse.json());
        }
      } catch (error) {
        console.warn("Phase 14 reviewer workspace hydration failed", error);
      }
    };

    hydrateReviewerWorkspace();
  }, []);


  // phase15QueueRunnerIndependentHydration
  useEffect(() => {
    const hydrateQueueRunner = async () => {
      try {
        const [queueResponse, jobsResponse] = await Promise.all([
          fetch(`${API_BASE}/api/v1/evaluation-runner/queue`),
          fetch(`${API_BASE}/api/v1/evaluation-runner/jobs`)
        ]);

        if (queueResponse.ok) {
          setRunnerQueue(await queueResponse.json());
        }

        if (jobsResponse.ok) {
          setRunnerJobs(await jobsResponse.json());
        }
      } catch (error) {
        console.warn("Phase 15 evaluation runner hydration failed", error);
      }
    };

    hydrateQueueRunner();
  }, []);


  // phase16DeploymentBoundaryIndependentHydration
  useEffect(() => {
    const hydrateDeploymentBoundary = async () => {
      try {
        const [boundaryResponse, checksResponse] = await Promise.all([
          fetch(`${API_BASE}/api/v1/deployment/enterprise-preview`),
          fetch(`${API_BASE}/api/v1/deployment/health-checks`)
        ]);

        if (boundaryResponse.ok) {
          setDeploymentBoundary(await boundaryResponse.json());
        }

        if (checksResponse.ok) {
          setDeploymentHealthChecks(await checksResponse.json());
        }
      } catch (error) {
        console.warn("Phase 16 deployment boundary hydration failed", error);
      }
    };

    hydrateDeploymentBoundary();
  }, []);


  // phase19AIChaosHarnessIndependentHydration
  useEffect(() => {
    const hydrateAIChaosHarness = async () => {
      try {
        const [scenarioResponse, planResponse, referenceResponse] = await Promise.all([
          fetch(`${API_BASE}/api/v1/ai-chaos/scenarios`),
          fetch(`${API_BASE}/api/v1/ai-chaos/plans`),
          fetch(`${API_BASE}/api/v1/ai-chaos/evidence-references`)
        ]);

        if (scenarioResponse.ok) {
          setAiChaosScenarios(await scenarioResponse.json());
        }

        if (planResponse.ok) {
          setAiChaosPlans(await planResponse.json());
        }

        if (referenceResponse.ok) {
          setAiChaosReferences(await referenceResponse.json());
        }
      } catch (error) {
        console.warn("Phase 19 AI Chaos Harness hydration failed", error);
      }
    };

    hydrateAIChaosHarness();
  }, []);

  return (
    <main className="page">
      <section className="hero shell">
        <div>
          <div className="brand">🛡️ SecureTheCloud</div>
          <p className="eyebrow">AGENT EVALUATION PLATFORM</p>
          <h1>SecureTheCloud Agent Evaluation Platform</h1>
          <p className="lede">
            Evaluation infrastructure for testing, scoring, and verifying autonomous AI agents before and after deployment.
          </p>
          <div className="heroBadges">
            <span>Test Harness</span>
            <span>Run Traceability</span>
            <span>SOC 2 Evidence</span>
            <span>Doctrine Safe</span>
          </div>
        </div>

        <div className="principle">
          <h3>Core Principle</h3>
          <p>
            Agents must be tested before deployment, monitored after deployment,
            and re-evaluated whenever prompts, tools, memory, retrieval, policies,
            or workflows change.
          </p>
          <p><b>AI can act. Governance verifies. Evidence proves.</b></p>
        </div>
      </section>

      <section className="shell">
        <h2 className="centerTitle">EVALUATION TRUST FABRIC</h2>
        <p className="centerSub">
          Flagship evaluation layer for agent quality, safety, tool behavior, RAG grounding, policy compliance, regression control, and evidence traceability.
        </p>
        <div className="fabricGrid">
          {(pillars || []).map((pillar) => (
            <div className="card fabricCard" key={pillar.name}>
              <div className="hex">⬡</div>
              <h3>{pillar.name}</h3>
              <p>{pillar.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="metrics">
        {metricCards.map(([label, value]) => (
          <button
            className={label === "Agent Trust" ? "metric trustMetric clickableMetric" : "metric clickableMetric"}
            key={label}
            onClick={() => runs[0] && loadRunDetail(runs[0].run_id)}
          >
            <strong>{value}</strong>
            <span>{label}</span>
          </button>
        ))}
      </section>

      <section className="shell harnessPanel">
        <div className="sectionHeader">
          <div>
            <p className="eyebrow">PHASE 3 · TEST HARNESS ENGINE</p>
            <h2>Deterministic Agent Evaluation Harness</h2>
            <p>
              Run lab-safe benchmark evaluations and drill down into the traceability record:
              prompt, ground truth, retrieved context, tool calls, policy decision, scores, remediation, and evidence package.
            </p>
          </div>
          <div className="postureBox">
            <span>Harness Status</span>
            <b>{runStatus}</b>
          </div>
        </div>

        <div className="harnessControls">
          <label>
            Agent
            <select value={selectedAgentId} onChange={(event) => setSelectedAgentId(event.target.value)}>
              {(agents || []).map((agent) => (
                <option key={agent.agent_id} value={agent.agent_id}>
                  {agent.agent_name}
                </option>
              ))}
            </select>
          </label>

          <label>
            Benchmark
            <select value={selectedBenchmarkId} onChange={(event) => setSelectedBenchmarkId(event.target.value)}>
              {(benchmarks || []).map((benchmark) => (
                <option key={benchmark.benchmark_id} value={benchmark.benchmark_id}>
                  {benchmark.test_id}
                </option>
              ))}
            </select>
          </label>

          <button className="primaryButton" onClick={executeRun}>
            Run Evaluation
          </button>
        </div>

        <div className="benchmarkGrid">
          {(benchmarks || []).map((benchmark) => (
            <button
              key={benchmark.benchmark_id}
              className={selectedBenchmarkId === benchmark.benchmark_id ? "card selectedCard" : "card selectableCard"}
              onClick={() => setSelectedBenchmarkId(benchmark.benchmark_id)}
            >
              <h3>{benchmark.test_id}</h3>
              <p>{benchmark.category}</p>
              <p>Decision: <b>{benchmark.expected_policy_decision}</b></p>
              <p>Risk: <b>{benchmark.risk_classification}</b></p>
            </button>
          ))}
        </div>
      </section>

      <section className="shell regressionPanel">
        <div className="sectionHeader">
          <div>
            <p className="eyebrow">PHASE 9 · REGRESSION DETECTION</p>
            <h2>Known-Good Baseline Drift & Release Risk</h2>
            <p>
              Regression Detection compares current agent evaluation runs against known-good baselines to detect
              output drift, worse grounding, new policy violations, cost or latency regression, new hallucination,
              changed risk tier, and baseline drift.
            </p>
          </div>
          <div className="postureBox">
            <span>Release Gate Posture</span>
            <b>{regression ? `${regression.blocked_releases} blocked` : "Loading"}</b>
          </div>
        </div>

        {regression && (
          <>
            <div className="regressionMetrics">
              {[
                ["Stable", regression.stable_runs],
                ["Review Required", regression.review_required],
                ["Blocked", regression.blocked_releases],
                ["Baseline Drift", regression.baseline_drift_count],
                ["Policy Regressions", regression.new_policy_violation_count],
                ["Latency Regressions", regression.latency_regression_count]
              ].map(([label, value]) => (
                <div className="metric" key={label}>
                  <strong>{value}</strong>
                  <span>{label}</span>
                </div>
              ))}
            </div>

            <div className="regressionSignalStrip">
              {[
                ["Same Prompt / Different Output", regression.same_prompt_different_output_count],
                ["Worse Grounding", regression.worse_grounding_count],
                ["Cost Regression", regression.cost_regression_count],
                ["New Hallucination", regression.new_hallucination_count],
                ["Risk Tier Change", regression.risk_tier_change_count]
              ].map(([label, value]) => (
                <span className="sourceChip forbiddenSource" key={label}>{label}: {value}</span>
              ))}
            </div>

            <div className="regressionGrid">
              {(regression.detections || []).map((detection) => (
                <button
                  className={detection.release_recommendation === "STABLE" ? "card regressionCard pass" : "card regressionCard fail"}
                  key={detection.regression_detection_id}
                  onClick={() => loadRunDetail(detection.run_id)}
                >
                  <div className="row">
                    <h3>{detection.regression_detection_id}</h3>
                    <span className="pill">{detection.release_recommendation}</span>
                  </div>
                  <p>Run: <b>{detection.run_id}</b></p>
                  <p>Baseline: <b>{detection.baseline_id}</b></p>
                  <p>Findings: <b>{detection.finding_count}</b></p>
                  <p>Output drift: <b>{detection.same_prompt_different_output ? "yes" : "no"}</b></p>
                  <p>Grounding regression: <b>{detection.worse_grounding_score ? "yes" : "no"}</b></p>
                  <p>Policy regression: <b>{detection.new_policy_violation ? "yes" : "no"}</b></p>
                  <p>Risk tier changed: <b>{detection.changed_risk_tier ? "yes" : "no"}</b></p>
                  <p className="failure">{detection.remediation_guidance}</p>
                </button>
              ))}
            </div>
          </>
        )}

        <div className="drillPath">
          <b>Regression trace:</b> Baseline → Current Run → Prompt → Output → Scores → Policy → Cost / Latency → Risk Tier → Release Decision → Evidence
        </div>
      </section>

      <section className="shell policyPanel">
        <div className="sectionHeader">
          <div>
            <p className="eyebrow">PHASE 8 · POLICY COMPLIANCE VALIDATOR</p>
            <h2>Governance, Compliance & Audit Readiness Mapping</h2>
            <p>
              Policy compliance validation maps each agent evaluation run to NIST AI RMF,
              Responsible AI, SOC 2 readiness, HIPAA-style controls, internal AI policy,
              and model risk management outcomes.
            </p>
          </div>
          <div className="postureBox">
            <span>AI Governance Board Bridge</span>
            <b>{policyCompliance ? `${policyCompliance.governance_board_referrals} referrals` : "Loading"}</b>
          </div>
        </div>

        {policyCompliance && (
          <>
            <div className="policyMetrics">
              {[
                ["PASS", policyCompliance.outcomes.PASS],
                ["FAIL", policyCompliance.outcomes.FAIL],
                ["APPROVAL REQUIRED", policyCompliance.outcomes["APPROVAL REQUIRED"]],
                ["ESCALATE", policyCompliance.outcomes.ESCALATE],
                ["BLOCK", policyCompliance.outcomes.BLOCK],
                ["Board Referrals", policyCompliance.governance_board_referrals]
              ].map(([label, value]) => (
                <div className="metric" key={label}>
                  <strong>{value}</strong>
                  <span>{label}</span>
                </div>
              ))}
            </div>

            <div className="governanceBridge">
              <h3>Connection to SecureTheCloud AI Governance Board</h3>
              <p>
                Agent Evaluation Platform validates agent behavior and evidence. AI Governance Board is the
                natural review surface for approval, escalation, risk decisioning, required controls, and
                board-ready evidence package review.
              </p>
            </div>

            <div className="frameworkStrip">
              {(policyCompliance.frameworks_mapped || []).map((framework) => (
                <span className="sourceChip allowedSource" key={framework}>{framework}</span>
              ))}
            </div>

            <div className="policyGrid">
              {(policyCompliance.validations || []).map((validation) => (
                <button
                  className={validation.policy_outcome === "PASS" ? "card policyCard pass" : "card policyCard fail"}
                  key={validation.policy_validation_id}
                  onClick={() => loadRunDetail(validation.run_id)}
                >
                  <div className="row">
                    <h3>{validation.policy_validation_id}</h3>
                    <span className="pill">{validation.policy_outcome}</span>
                  </div>
                  <p>Run: <b>{validation.run_id}</b></p>
                  <p>Risk: <b>{validation.risk_classification}</b></p>
                  <p>Expected policy: <b>{validation.expected_policy_decision}</b></p>
                  <p>Failed controls: <b>{validation.failed_controls.length}</b></p>
                  <p>Required controls: <b>{validation.required_controls.length}</b></p>
                  <p>Board referral: <b>{validation.governance_board_referral ? "yes" : "no"}</b></p>
                  <p className="failure">{validation.escalation_reason}</p>
                </button>
              ))}
            </div>
          </>
        )}

        <div className="drillPath">
          <b>Policy trace:</b> Run → Benchmark → Framework Mapping → Failed Controls → Outcome → Governance Board Referral → Evidence
        </div>
      </section>

      <section className="shell toolPanel">
        <div className="sectionHeader">
          <div>
            <p className="eyebrow">PHASE 7 · TOOL-CALL VERIFICATION</p>
            <h2>MCP Governance Bridge & Tool Behavior Evidence</h2>
            <p>
              Tool-call verification checks whether agents called the correct tool, avoided forbidden tools,
              honored approval requirements, blocked destructive actions, respected tool budgets, and preserved
              permission boundaries.
            </p>
          </div>
          <div className="postureBox">
            <span>MCP Governance Bridge</span>
            <b>{toolVerification ? `${toolVerification.average_tool_verification_score}% verified` : "Loading"}</b>
          </div>
        </div>

        {toolVerification && (
          <>
            <div className="toolMetrics">
              {[
                ["Tool Score", `${toolVerification.average_tool_verification_score}%`],
                ["Blocked Attempts", toolVerification.blocked_tool_attempts],
                ["Forbidden Attempts", toolVerification.forbidden_tool_attempts],
                ["Approvals Honored", toolVerification.approval_requirements_honored],
                ["Destructive Blocked", toolVerification.destructive_actions_blocked],
                ["Budget Violations", toolVerification.tool_budget_violations]
              ].map(([label, value]) => (
                <div className="metric" key={label}>
                  <strong>{value}</strong>
                  <span>{label}</span>
                </div>
              ))}
            </div>

            <div className="mcpBridge">
              <h3>Connection to SecureTheCloud MCP Governance Lab</h3>
              <p>
                MCP Governance Lab governs tool access. Agent Evaluation Platform verifies whether tool behavior,
                approval boundaries, permission checks, and evidence records matched the expected governance policy.
              </p>
            </div>

            <div className="toolGrid">
              {(toolVerification.verifications || []).map((verification) => (
                <button
                  className={verification.verification_result === "pass" ? "card toolCard pass" : "card toolCard fail"}
                  key={verification.tool_verification_id}
                  onClick={() => loadRunDetail(verification.run_id)}
                >
                  <div className="row">
                    <h3>{verification.tool_verification_id}</h3>
                    <span className="pill">{verification.verification_result}</span>
                  </div>
                  <p>Run: <b>{verification.run_id}</b></p>
                  <p>Expected tool: <b>{verification.expected_tool_call}</b></p>
                  <p>Actual tools: <b>{verification.actual_tool_names.length ? verification.actual_tool_names.join(", ") : "none"}</b></p>
                  <p>Forbidden attempted: <b>{verification.forbidden_tool_attempted ? "yes" : "no"}</b></p>
                  <p>Approval honored: <b>{verification.approval_requirement_honored ? "yes" : "no"}</b></p>
                  <p>Destructive blocked: <b>{verification.destructive_action_blocked ? "yes" : "no"}</b></p>
                  <p className="failure">{verification.remediation_guidance}</p>
                </button>
              ))}
            </div>
          </>
        )}

        <div className="drillPath">
          <b>Tool trace:</b> Run → Benchmark → Expected Tool → Actual Tool Calls → Approval → Permission Boundary → Findings → Evidence
        </div>
      </section>

      <section className="shell ragPanel">
        <div className="sectionHeader">
          <div>
            <p className="eyebrow">PHASE 6 · RAG EVALUATION SUITE</p>
            <h2>Retrieval Quality, Citation Accuracy & Grounding</h2>
            <p>
              The RAG Evaluation Suite checks retrieval precision, recall, source relevance,
              chunk quality, citation accuracy, answer grounding, context contamination, and sensitive source leakage.
            </p>
          </div>
          <div className="postureBox">
            <span>RAG Evidence Trace</span>
            <b>{rag ? `${rag.average_answer_grounding}% grounded` : "Loading"}</b>
          </div>
        </div>

        {rag && (
          <>
            <div className="ragMetrics">
              {[
                ["Precision", `${rag.average_retrieval_precision}%`],
                ["Recall", `${rag.average_retrieval_recall}%`],
                ["Citation Accuracy", `${rag.average_citation_accuracy}%`],
                ["Grounding", `${rag.average_answer_grounding}%`],
                ["Contamination", rag.context_contamination_count],
                ["Sensitive Leakage", rag.sensitive_source_leakage_count]
              ].map(([label, value]) => (
                <div className="metric" key={label}>
                  <strong>{value}</strong>
                  <span>{label}</span>
                </div>
              ))}
            </div>

            <div className="ragGrid">
              {(rag.evaluations || []).map((evaluation) => (
                <button
                  className={evaluation.context_contamination ? "card ragCard fail" : "card ragCard pass"}
                  key={evaluation.rag_eval_id}
                  onClick={() => loadRunDetail(evaluation.run_id)}
                >
                  <div className="row">
                    <h3>{evaluation.rag_eval_id}</h3>
                    <span className="pill">{evaluation.answer_grounding_score}%</span>
                  </div>
                  <p>Run: <b>{evaluation.run_id}</b></p>
                  <p>Precision: <b>{evaluation.retrieval_precision}%</b> · Recall: <b>{evaluation.retrieval_recall}%</b></p>
                  <p>Citation: <b>{evaluation.citation_accuracy}%</b> · Chunk quality: <b>{evaluation.chunk_quality_score}%</b></p>
                  <p>Context contamination: <b>{evaluation.context_contamination ? "yes" : "no"}</b></p>
                  <p>Sensitive leakage: <b>{evaluation.sensitive_source_leakage ? "yes" : "no"}</b></p>
                  <p className="failure">{evaluation.remediation_guidance}</p>
                </button>
              ))}
            </div>
          </>
        )}

        <div className="drillPath">
          <b>RAG trace:</b> Run → Benchmark → Sources → Retrieved Chunks → Citations → Grounding → Contamination → Evidence
        </div>
      </section>

      <section className="shell hallucinationPanel">
        <div className="sectionHeader">
          <div>
            <p className="eyebrow">PHASE 5 · HALLUCINATION SCORING ENGINE</p>
            <h2>Claim-Level Grounding & Source Support</h2>
            <p>
              The scoring engine evaluates unsupported claims, contradictions, missing citations,
              grounded facts, source support, claim-level score, and remediation guidance.
            </p>
          </div>
          <div className="postureBox">
            <span>Processing Integrity Trace</span>
            <b>{hallucination ? `${hallucination.average_claim_level_score}/3 claim score` : "Loading"}</b>
          </div>
        </div>

        {hallucination && (
          <>
            <div className="scoringMetrics">
              {[
                ["Unsupported Claims", hallucination.unsupported_claims],
                ["Contradictions", hallucination.contradictions],
                ["Missing Citations", hallucination.missing_citations],
                ["Forbidden Sources", hallucination.forbidden_source_uses],
                ["Avg Hallucination", `${hallucination.average_hallucination_score}/3`],
                ["Avg Claim Score", `${hallucination.average_claim_level_score}/3`]
              ].map(([label, value]) => (
                <div className="metric" key={label}>
                  <strong>{value}</strong>
                  <span>{label}</span>
                </div>
              ))}
            </div>

            <div className="claimGrid">
              {(hallucination.summaries || []).map((summary) => (
                <button
                  className="card selectableCard"
                  key={summary.run_id}
                  onClick={() => loadRunDetail(summary.run_id)}
                >
                  <div className="row">
                    <h3>{summary.run_id}</h3>
                    <span className="pill">{summary.hallucination_score}/3</span>
                  </div>
                  <p>Claim score: <b>{summary.claim_level_score}/3</b></p>
                  <p>Source support: <b>{summary.source_support_score}%</b></p>
                  <p>Unsupported: <b>{summary.unsupported_claims}</b> · Missing citations: <b>{summary.missing_citations}</b></p>
                  <p className="failure">{summary.remediation_guidance}</p>
                </button>
              ))}
            </div>
          </>
        )}

        <div className="drillPath">
          <b>Scoring trace:</b> Run → Agent Output → Claim → Source Support → Citation Check → Contradiction Check → Score → Remediation
        </div>
      </section>

      <section className="shell groundTruthPanel">
        <div className="sectionHeader">
          <div>
            <p className="eyebrow">PHASE 4 · GROUND TRUTH BENCHMARK STORE</p>
            <h2>Benchmark Management & Traceability</h2>
            <p>
              Ground truth records define the expected answer, allowed sources, forbidden sources,
              required citations, expected policy decision, risk classification, and remediation path
              for every deterministic agent evaluation run.
            </p>
          </div>
          <div className="postureBox">
            <span>Benchmark Coverage</span>
            <b>{(benchmarks || []).length} traceable records</b>
          </div>
        </div>

        <div className="groundTruthGrid">
          <div className="stack">
            {(benchmarks || []).map((benchmark) => (
              <button
                key={benchmark.benchmark_id}
                className={selectedBenchmarkId === benchmark.benchmark_id ? "card selectedCard" : "card selectableCard"}
                onClick={() => setSelectedBenchmarkId(benchmark.benchmark_id)}
              >
                <div className="row">
                  <h3>{benchmark.test_id}</h3>
                  <span className="pill">{benchmark.risk_classification}</span>
                </div>
                <p>{benchmark.category}</p>
                <p>Expected policy: <b>{benchmark.expected_policy_decision}</b></p>
                <p>Citation required: <b>{benchmark.required_citation ? "yes" : "no"}</b></p>
              </button>
            ))}
          </div>

          <div className="card benchmarkDetail">
            <p className="eyebrow">BENCHMARK DETAIL</p>
            {selectedBenchmark ? (
              <>
                <h3>{selectedBenchmark.benchmark_id}</h3>
                <p><b>Question:</b> {selectedBenchmark.question}</p>
                <p><b>Expected answer:</b> {selectedBenchmark.expected_answer}</p>
                <p><b>Expected tool:</b> {selectedBenchmark.expected_tool_call || "none"}</p>
                <p><b>Expected policy:</b> {selectedBenchmark.expected_policy_decision}</p>
                <p><b>Recommended remediation:</b> {selectedBenchmark.recommended_remediation}</p>

                <div className="sourceColumns">
                  <div>
                    <h3>Allowed Sources</h3>
                    {selectedBenchmark.allowed_sources.map((source) => (
                      <span className="sourceChip allowedSource" key={source}>{source}</span>
                    ))}
                  </div>
                  <div>
                    <h3>Forbidden Sources</h3>
                    {selectedBenchmark.forbidden_sources.map((source) => (
                      <span className="sourceChip forbiddenSource" key={source}>{source}</span>
                    ))}
                  </div>
                </div>

                <div className="drillPath">
                  <b>Trace:</b> Benchmark → Expected Answer → Sources → Policy Decision → Evaluation Run → Evidence Package
                </div>
              </>
            ) : (
              <p>Select a benchmark to inspect ground truth detail.</p>
            )}
          </div>
        </div>
      </section>

      <section className="gridTwo">
        <div className="shell">
          <p className="eyebrow">COMMAND CENTER</p>
          <h2>Evaluation Runs</h2>
          <p>{status}</p>

          <div className="stack">
            {(runs || []).map((run) => (
              <button
                className={`card runCard ${run.result === "pass" ? "pass" : "fail"}`}
                key={run.run_id}
                onClick={() => loadRunDetail(run.run_id)}
              >
                <div className="row">
                  <h3>{run.test_name}</h3>
                  <span className="pill">{run.result.toUpperCase()}</span>
                </div>
                <p>{run.category}</p>
                <p>Decision: <b>{run.policy_decision}</b></p>
                <p>Evidence: <b>{run.evidence_id}</b></p>
                {run.failure_reason && <p className="failure">{run.failure_reason}</p>}
              </button>
            ))}
          </div>
        </div>

        <div className="shell detailPanel">
          <p className="eyebrow">RUN TRACEABILITY</p>
          <h2>Evaluation Run Detail</h2>

          {selectedRun ? (
            <div>
              <div className={`detailHeader ${selectedRun.run.result === "pass" ? "passBorder" : "failBorder"}`}>
                <h3>{selectedRun.run.run_id}</h3>
                <span className="pill">{selectedRun.run.result.toUpperCase()}</span>
              </div>

              <div className="tracePath">
                {selectedRun.traceability_path.map((item) => (
                  <span key={item}>{item.replaceAll("_", " ")}</span>
                ))}
              </div>

              <div className="detailGrid">
                <div className="card">
                  <h3>Agent</h3>
                  <p>{selectedRun.agent.agent_name}</p>
                  <p>Owner: <b>{selectedRun.agent.owner}</b></p>
                  <p>Risk: <b>{selectedRun.agent.risk_tier}</b></p>
                </div>

                <div className="card">
                  <h3>Benchmark</h3>
                  <p>{selectedRun.benchmark.test_id}</p>
                  <p>Risk: <b>{selectedRun.benchmark.risk_classification}</b></p>
                  <p>Expected policy: <b>{selectedRun.benchmark.expected_policy_decision}</b></p>
                </div>

                <div className="card">
                  <h3>Scores</h3>
                  <p>Overall: <b>{selectedRun.run.overall_score}/100</b></p>
                  <p>Hallucination: <b>{selectedRun.run.hallucination_score}/3</b></p>
                  <p>Policy: <b>{selectedRun.run.policy_compliance_score}%</b></p>
                  <p>Tool: <b>{selectedRun.run.tool_call_accuracy}%</b></p>
                </div>

                <div className="card">
                  <h3>Evidence</h3>
                  <p>{selectedRun.run.evidence_id}</p>
                  <p>Policy decision: <b>{selectedRun.run.policy_decision}</b></p>
                  <p>Score ID: <b>{selectedRun.run.score_id}</b></p>
                </div>
              </div>

              <div className="card evidenceBox">
                <h3>Prompt</h3>
                <p>{selectedRun.run.prompt}</p>
                <h3>Expected Answer</h3>
                <p>{selectedRun.run.expected_answer}</p>
                <h3>Actual Output</h3>
                <p>{selectedRun.run.actual_output}</p>
                <h3>Recommended Remediation</h3>
                <p>{selectedRun.run.recommended_remediation}</p>
              </div>

              <div className="card evidenceBox">
                <h3>Retrieved Context</h3>
                {selectedRun.evidence.retrieved_context.map((ctx) => (
                  <p key={ctx.source_id}>
                    <b>{ctx.source_id}</b>: {ctx.summary}
                  </p>
                ))}
                <h3>Tool Calls</h3>
                {selectedRun.evidence.tool_calls.length === 0 ? (
                  <p>No tool call expected for this benchmark.</p>
                ) : (
                  selectedRun.evidence.tool_calls.map((tool) => (
                    <p key={tool.tool_name}>
                      <b>{tool.tool_name}</b>: {tool.allowed ? "allowed" : "blocked"} — {tool.reason}
                    </p>
                  ))
                )}
              </div>
            </div>
          ) : (
            <p>Select a run to inspect traceability.</p>
          )}
        </div>
      </section>

      <section className="shell sotPanel">
        <p className="eyebrow">PLATFORM SOT & TRACEABILITY</p>
        <h2>State of Truth, Rollback & Drill-Down Foundation</h2>
        <p>
          Dashboard metrics now drill down into agents, benchmarks, evaluation runs, policy decisions,
          scores, remediation, reviewer notes, and evidence packages.
        </p>

        <div className="traceGrid">
          {[
            ["State of Truth", "Tracks phase, posture, doctrine boundary, SOC 2 readiness, and rollback state."],
            ["Rollback Points", "Stable tags preserve known-good baselines for recovery and audit history."],
            ["Traceability IDs", "Agents, suites, benchmarks, tests, runs, scores, decisions, evidence, and reviews get stable IDs."],
            ["Evidence Drill-Down", "Metrics reconstruct prompt, context, tool calls, policy decision, score, and remediation."]
          ].map(([title, body]) => (
            <div className="card" key={title}>
              <h3>{title}</h3>
              <p>{body}</p>
            </div>
          ))}
        </div>

        <div className="drillPath">
          <b>Drill-down path:</b> Dashboard → Agent → Suite → Benchmark → Run → Prompt → Context → Tool Calls → Policy → Scores → Evidence
        </div>
      </section>

      <section className="shell ecosystemPanel">
        <p className="eyebrow">SECURETHECLOUD ECOSYSTEM FIT</p>
        <h2>Flagship Evaluation Surface Across the Portfolio</h2>
        <p>
          SecureTheCloud Agent Evaluation Platform is a lab-safe evaluation surface for testing,
          scoring, and verifying autonomous AI agents across the SecureTheCloud ecosystem.
        </p>
        <p>
          It demonstrates how agent outputs, tool calls, RAG grounding, memory behavior,
          policy decisions, safety failures, regressions, and SOC 2-aligned evidence can be
          evaluated before and after deployment.
        </p>

        <div className="ecosystemGrid">
          {[
            ["AI Governance Board", "Governance before deployment", "Tests whether an agent is safe and compliant before approval."],
            ["MCP Governance Lab", "Governance during tool access", "Verifies tool-call correctness, forbidden tool blocking, and approval boundaries."],
            ["Runtime Trust Center", "Governance after deployment", "Evaluates runtime regressions, drift, incidents, and monitoring evidence."],
            ["Agent Evaluation Platform", "Evaluation across the lifecycle", "Scores agent behavior before and after deployment."]
          ].map(([name, role, detail]) => (
            <div className="card ecosystemCard" key={name}>
              <h3>{name}</h3>
              <p><b>{role}</b></p>
              <p>{detail}</p>
            </div>
          ))}
        </div>

        <div className="ecosystemBoundary">
          <h3>Doctrine-Safe Flagship Positioning</h3>
          <p>
            This platform does not create new suite membership, enforcement authority,
            runtime authority, SENTINEL bypass behavior, or production agent execution.
          </p>
        </div>
      </section>


      <section className="shell trueModePanel">
        <div className="sectionHeader">
          <div>
            <p className="eyebrow">Phase 10 · TRUE_MODE Enterprise Foundation</p>
            <h2>Enterprise Platform Mode, Backend Maturity & Production Boundary</h2>
            <p>
              The platform is transitioning from feature-rich lab posture toward a standalone enterprise-grade
              agent evaluation control plane. TRUE_MODE is defined but not active.
            </p>
          </div>
          <div className="postureBox">
            <span>Current Mode</span>
            <b>{platformMode?.current_mode || "LAB_MODE"}</b>
          </div>
        </div>

        <div className="modeGrid">
          {(platformMode?.available_modes || [
            { mode: "LAB_MODE", status: "active", description: "Deterministic lab-safe evaluation surface." },
            { mode: "ENTERPRISE_PREVIEW_MODE", status: "planned", description: "Cloudflare-hosted enterprise preview with demo-safe backend." },
            { mode: "TRUE_MODE", status: "not_active", description: "Future persistent, tenant-aware, RBAC-controlled enterprise platform." }
          ]).map((mode) => (
            <div className="card" key={mode.mode}>
              <h3>{mode.mode}</h3>
              <p><b>Status:</b> {mode.status}</p>
              <p>{mode.description}</p>
            </div>
          ))}
        </div>

        <div className="enterpriseCallout">
          <h3>TRUE_MODE Entry Criteria</h3>
          <p>
            TRUE_MODE requires persistent data, tenant boundaries, identity, RBAC, append-only audit,
            evidence storage, queue-backed evaluation execution, managed secrets, API versioning,
            and SOC 2-aligned control evidence tied to real backend events.
          </p>
          <p>
            Target preview domain candidate: <b>{enterpriseReadinessPosture?.target_domain_candidate || "agent-eval.securethecloud.dev"}</b>
          </p>
        </div>

        <div className="requirementGrid">
          {(trueModeRequirements?.requirements || []).map((item) => (
            <div className="card" key={item.area}>
              <h3>{item.area}</h3>
              <p><b>Current:</b> {item.current_state}</p>
              <p><b>TRUE_MODE:</b> {item.true_mode_requirement}</p>
              <span className="pill">{item.status}</span>
            </div>
          ))}
        </div>

        <div className="drillPath">
          <b>Enterprise path:</b> LAB_MODE → ENTERPRISE_PREVIEW_MODE → TRUE_MODE → Persistent Evidence Store → Tenant / RBAC → Audit Ledger → Cloudflare Enterprise Preview
        </div>
      </section>








      <section className="shell phase19Panel">
        <div className="sectionHeader">
          <div>
            <p className="eyebrow">Phase 19 - AI Chaos Harness Planning Surface</p>
            <h2>Adversarial Scenario Planning, Resilience Evidence & Policy Candidate Handoff</h2>
            <p>
              The AI Chaos Harness planning surface defines non-production adversarial scenarios,
              simulation plans, expected resilience signals, policy candidate outputs, Black Box
              replay references, and RiskDNA feedback references. This is planning-only: no live
              autonomous execution, production traffic, runtime mutation, or TRUE_MODE activation is active.
            </p>
          </div>
          <div className="statusCard phase12StatusCard">
            <span>AI Chaos Harness</span>
            <b>{aiChaosScenarios?.execution_posture || "Loading"}</b>
          </div>
        </div>

        <div className="ledgerMetrics">
          <div className="metricCard ledgerMetricCard">
            <b>{aiChaosScenarios?.scenario_count ?? 0}</b>
            <span>Scenarios</span>
          </div>
          <div className="metricCard ledgerMetricCard">
            <b>{aiChaosPlans?.plan_count ?? 0}</b>
            <span>Simulation Plans</span>
          </div>
          <div className="metricCard ledgerMetricCard">
            <b>{aiChaosReferences?.reference_count ?? 0}</b>
            <span>Evidence References</span>
          </div>
          <div className="metricCard ledgerMetricCard">
            <b>{aiChaosScenarios?.production_authority || "not_granted"}</b>
            <span>Production Authority</span>
          </div>
        </div>

        <div className="reviewerBoundary">
          <h3>AI Chaos Harness Boundary</h3>
          <p>
            Scenario records are planning-only and may produce offline findings, resilience evidence,
            and policy candidates. They do not mutate Aegis/OPA/SENTINEL, bypass Black Box custody,
            run uncontrolled adversarial traffic, or execute production agent tools.
          </p>
        </div>

        <div className="ledgerGrid">
          {(aiChaosScenarios?.scenarios || []).map((scenario) => (
            <div className="card ledgerCard" key={scenario.scenario_id}>
              <div className="cardTitleRow">
                <h3>{scenario.scenario_name}</h3>
                <span className="pill good">{scenario.execution_posture}</span>
              </div>
              <p>Category: <b>{scenario.scenario_category}</b></p>
              <p>Target: <b>{scenario.target_surface}</b></p>
              <p>Blast radius: <b>{scenario.blast_radius}</b></p>
              <p>Policy candidate: <b>{scenario.policy_candidate_output}</b></p>
              <p>Approval required: <b>{scenario.approval_required ? "yes" : "no"}</b></p>
              <p className="remediation">{scenario.expected_resilience_signal}</p>
            </div>
          ))}
        </div>

        <div className="traceLine">
          AI Chaos trace: Scenario → Simulation Plan → Non-Production Scope → Expected Resilience Signal → Evidence Reference → Policy Candidate → Governance Handoff
        </div>
      </section>

<section className="shell phase18Panel">
        <div className="sectionHeader">
          <div>
            <p className="eyebrow">Phase 18 - Enterprise Preview Website & Doctrine-Safe Public Positioning</p>
            <h2>Agent Evaluation for AI Chaos Harness, Evidence Readiness & Release Assurance</h2>
            <p>
              SecureTheCloud Agent Evaluation Platform is a governed Phase 2 AI Chaos Harness and
              offline evaluation support repository. It helps evaluate autonomous agent behavior,
              benchmark outcomes, resilience evidence, policy candidates, RAG grounding, tool-call
              behavior, regression drift, and reviewer-ready evidence packages.
            </p>
          </div>
          <div className="statusCard phase12StatusCard">
            <span>Public Positioning</span>
            <b>DOCTRINE_SAFE</b>
          </div>
        </div>

        <div className="websitePersonaGrid">
          <div className="card">
            <h3>For AI Governance Leaders</h3>
            <p>
              View evaluation findings, policy candidate evidence, release-readiness posture,
              and reviewer evidence without granting runtime authority.
            </p>
          </div>
          <div className="card">
            <h3>For CISOs and Risk Leaders</h3>
            <p>
              Inspect tool-call behavior, blocked actions, queue boundaries, tenant/RBAC posture,
              and evaluation evidence aligned to security readiness.
            </p>
          </div>
          <div className="card">
            <h3>For Auditors and Reviewers</h3>
            <p>
              Review evidence packages, audit ledger traces, export manifests, redaction posture,
              and SOC 2-aligned readiness evidence only.
            </p>
          </div>
        </div>

        <div className="positioningSplit">
          <div className="card allowedClaims">
            <h3>Allowed Enterprise Preview Claims</h3>
            <p>Phase 2 AI Chaos Harness support lane</p>
            <p>Offline evaluation and benchmark harness planning</p>
            <p>Resilience validation and policy candidate evidence</p>
            <p>Reviewable evidence package surface</p>
            <p>SOC 2-aligned readiness evidence only</p>
          </div>
          <div className="card forbiddenClaims">
            <h3>Forbidden Claims</h3>
            <p>Not a new product suite or fifth suite</p>
            <p>Not an enforcement surface or runtime controller</p>
            <p>No TRUE_MODE activation</p>
            <p>No production authority or production mutation</p>
            <p>No SOC 2 certification or production operating effectiveness claim</p>
          </div>
        </div>

        <div className="reviewerBoundary">
          <h3>Doctrine-Safe Operating Phrase</h3>
          <p>
            Agent Eval recommends. Governance approves. Aegis/OPA/SENTINEL enforce.
            Black Box preserves evidence.
          </p>
        </div>

        <div className="traceLine">
          Website trace: Enterprise Preview → AI Chaos Harness Support Lane → Offline Evaluation → Evidence Readiness → Governance Handoff → No Runtime Authority
        </div>
      </section>

<section className="shell phase16Panel">
        <div className="sectionHeader">
          <div>
            <p className="eyebrow">Phase 16 - Enterprise Preview Deployment Boundary</p>
            <h2>Cloudflare Preview Readiness, API Origin & Deployment Controls</h2>
            <p>
              Cloudflare enterprise preview readiness is defined without production activation.
              Frontend preview posture, API origin expectations, CORS boundaries, environment variables,
              and health checks are recorded while TRUE_MODE and live autonomous execution remain inactive.
            </p>
          </div>
          <div className="statusCard phase12StatusCard">
            <span>Preview Boundary</span>
            <b>{deploymentBoundary?.foundation_status || "Loading"}</b>
          </div>
        </div>

        <div className="ledgerMetrics">
          <div className="metricCard ledgerMetricCard">
            <b>{deploymentBoundary?.deployment_posture || "pending"}</b>
            <span>Deployment Posture</span>
          </div>
          <div className="metricCard ledgerMetricCard">
            <b>{deploymentBoundary?.target_preview_domain || "pending"}</b>
            <span>Preview Domain</span>
          </div>
          <div className="metricCard ledgerMetricCard">
            <b>{deploymentBoundary?.cors_posture || "pending"}</b>
            <span>CORS Boundary</span>
          </div>
          <div className="metricCard ledgerMetricCard">
            <b>{deploymentHealthChecks?.health_check_count ?? 0}</b>
            <span>Health Checks</span>
          </div>
        </div>

        <div className="reviewerBoundary">
          <h3>Deployment Boundary</h3>
          <p>
            {deploymentBoundary?.boundary_statement ||
              "Enterprise preview deployment boundary pending. No production activation is allowed."}
          </p>
        </div>

        <div className="ledgerGrid">
          {(deploymentHealthChecks?.checks || []).map((check) => (
            <div className="card ledgerCard" key={check.deployment_health_check_id}>
              <div className="cardTitleRow">
                <h3>{check.check_name}</h3>
                <span className="pill good">{check.current_status}</span>
              </div>
              <p>Type: <b>{check.check_type}</b></p>
              <p>Expected: <b>{check.expected_result}</b></p>
              <p>Surface: <b>{check.endpoint_or_surface}</b></p>
              <p>Failure action: <b>{check.failure_action}</b></p>
            </div>
          ))}
        </div>

        <div className="traceLine">
          Deployment trace: Cloudflare Preview → Frontend Surface → API Origin → CORS Boundary → Environment Variables → Health Checks → No TRUE_MODE → SOC 2 Trace
        </div>
      </section>

<section className="shell phase15Panel">
        <div className="sectionHeader">
          <div>
            <p className="eyebrow">Phase 15 - Queue-Backed Evaluation Runner Boundary</p>
            <h2>Evaluation Runner Queue, Job Lifecycle & Worker Boundary</h2>
            <p>
              Queue-backed runner boundary is defined and simulated for enterprise architecture readiness.
              No live autonomous execution, external worker system, production agent tool use, or TRUE_MODE activation is active.
            </p>
          </div>
          <div className="statusCard phase12StatusCard">
            <span>Runner Boundary</span>
            <b>{runnerQueue?.foundation_status || "Loading"}</b>
          </div>
        </div>

        <div className="ledgerMetrics">
          <div className="metricCard ledgerMetricCard">
            <b>{runnerJobs?.job_count ?? 0}</b>
            <span>Runner Jobs</span>
          </div>
          <div className="metricCard ledgerMetricCard">
            <b>{runnerJobs?.review_required ?? 0}</b>
            <span>Review Required</span>
          </div>
          <div className="metricCard ledgerMetricCard">
            <b>{runnerJobs?.completed ?? 0}</b>
            <span>Completed Simulated</span>
          </div>
          <div className="metricCard ledgerMetricCard">
            <b>{runnerJobs?.blocked ?? 0}</b>
            <span>Blocked</span>
          </div>
        </div>

        <div className="reviewerBoundary">
          <h3>Runner Boundary</h3>
          <p>
            {runnerQueue?.queues?.[0]?.boundary_statement ||
              "Queue-backed runner boundary is simulated. No external workers or live autonomous execution are active."}
          </p>
        </div>

        <div className="ledgerGrid">
          {(runnerJobs?.jobs || []).map((job) => (
            <div className="card ledgerCard" key={job.runner_job_id}>
              <div className="cardTitleRow">
                <h3>{job.runner_job_id}</h3>
                <span className={job.lifecycle_state === "COMPLETED_SIMULATED" ? "pill good" : "pill danger"}>
                  {job.lifecycle_state}
                </span>
              </div>
              <p>Run: <b>{job.evaluation_run_id}</b></p>
              <p>Benchmark: <b>{job.benchmark_id}</b></p>
              <p>Status: <b>{job.scheduling_status}</b></p>
              <p>Retry: <b>{job.retry_count}/{job.retry_limit}</b></p>
              <p>Timeout: <b>{job.timeout_seconds}s</b></p>
              <p>Cost: <b>${job.estimated_cost_usd} / ${job.cost_budget_usd}</b></p>
              <p>Isolation: <b>{job.worker_isolation}</b></p>
            </div>
          ))}
        </div>

        <div className="traceLine">
          Runner trace: Queue → Job → Benchmark → Policy Precheck → Retry Boundary → Timeout Boundary → Cost Boundary → Worker Isolation → SOC 2 Trace
        </div>
      </section>

<section className="shell phase14Panel">
        <div className="sectionHeader">
          <div>
            <p className="eyebrow">Phase 14 - Evidence Package Export & Reviewer Workspace</p>
            <h2>Reviewer Workspace, Export Manifest & Evidence Package Review</h2>
            <p>
              Reviewers can inspect lab-safe evidence package manifests, export posture, redaction state,
              included artifacts, evidence chain references, and SOC 2-aligned traceability before any
              enterprise-style presentation. This is reviewable JSON export posture only.
            </p>
          </div>
          <div className="statusCard phase12StatusCard">
            <span>Reviewer Workspace</span>
            <b>{reviewerWorkspace?.foundation_status || "Loading"}</b>
          </div>
        </div>

        <div className="ledgerMetrics">
          <div className="metricCard ledgerMetricCard">
            <b>{exportManifest?.manifest_count ?? 0}</b>
            <span>Export Manifests</span>
          </div>
          <div className="metricCard ledgerMetricCard">
            <b>{exportManifest?.ready_for_review ?? 0}</b>
            <span>Ready</span>
          </div>
          <div className="metricCard ledgerMetricCard">
            <b>{exportManifest?.review_required ?? 0}</b>
            <span>Review Required</span>
          </div>
          <div className="metricCard ledgerMetricCard">
            <b>{exportManifest?.blocked ?? 0}</b>
            <span>Blocked</span>
          </div>
        </div>

        <div className="reviewerBoundary">
          <h3>Review Boundary</h3>
          <p>
            {reviewerWorkspace?.workspaces?.[0]?.boundary_statement ||
              "Reviewable package metadata only. No production export, signed bundle, or auditor attestation is active."}
          </p>
        </div>

        <div className="ledgerGrid">
          {(exportManifest?.manifests || []).map((manifest) => (
            <div className="card ledgerCard" key={manifest.export_manifest_id}>
              <div className="cardTitleRow">
                <h3>{manifest.export_manifest_id}</h3>
                <span className={manifest.export_status === "READY_FOR_REVIEW" ? "pill good" : "pill danger"}>
                  {manifest.export_status}
                </span>
              </div>
              <p>Evidence: <b>{manifest.evidence_package_id}</b></p>
              <p>Chain: <b>{manifest.evidence_chain_id}</b></p>
              <p>Decision: <b>{manifest.reviewer_decision}</b></p>
              <p>Redaction: <b>{manifest.redaction_status}</b></p>
              <p className="wrapValue">Artifacts: <b>{(manifest.included_artifacts || []).join(", ")}</b></p>
            </div>
          ))}
        </div>

        <div className="traceLine">
          Review trace: Evidence Package → Export Manifest → Evidence Chain → Included Artifacts → Redaction State → Reviewer Decision → SOC 2 Trace
        </div>
      </section>

<section className="shell phase13Panel">
        <div className="sectionHeader">
          <div>
            <p className="eyebrow">Phase 13 - Append-Only Audit & Evidence Ledger</p>
            <h2>Audit Ledger, Evidence Chain & SOC 2 Traceability</h2>
            <p>
              The ledger foundation records actor, action, object, request metadata, tenant/workspace scope,
              evidence chain IDs, and SOC 2 Security plus Processing Integrity traceability.
              It is append-only posture only: TRUE_MODE, production authority, and live autonomous execution remain inactive.
            </p>
          </div>
          <div className="statusCard phase12StatusCard">
            <span>Audit Ledger</span>
            <b>{auditLedger?.foundation_status || "Loading"}</b>
          </div>
        </div>

        <div className="ledgerMetrics">
          <div className="metricCard ledgerMetricCard">
            <b>{auditLedger?.event_count ?? 0}</b>
            <span>Ledger Events</span>
          </div>
          <div className="metricCard ledgerMetricCard">
            <b>{evidenceChain?.chain_count ?? 0}</b>
            <span>Evidence Chains</span>
          </div>
          <div className="metricCard ledgerMetricCard">
            <b className="wrapValue">{auditLedger?.ledger_posture || "pending"}</b>
            <span>Ledger Posture</span>
          </div>
          <div className="metricCard ledgerMetricCard">
            <b>{auditLedger?.true_mode || "not_active"}</b>
            <span>TRUE_MODE</span>
          </div>
        </div>

        <div className="ledgerGrid">
          {(auditLedger?.events || []).map((event) => (
            <div className="card ledgerCard" key={event.ledger_event_id}>
              <div className="cardTitleRow">
                <h3>{event.ledger_event_id}</h3>
                <span className="pill good">SEQ {event.ledger_sequence}</span>
              </div>
              <p>Actor: <b>{event.actor_id}</b></p>
              <p>Action: <b>{event.action}</b></p>
              <p>Object: <b>{event.object_type}:{event.object_id}</b></p>
              <p>Request: <b>{event.request_id}</b></p>
              <p>Hash: <b>{event.event_hash}</b></p>
              <p className="wrapValue">Posture: <b>{event.immutability_posture}</b></p>
            </div>
          ))}
        </div>

        <div className="traceLine">
          Audit trace: Tenant → Workspace → Actor → Action → Object → Request Metadata → Event Hash → Evidence Chain → SOC 2 Trace
        </div>
      </section>

<section className="shell phase12Panel">
        <div className="sectionHeader">
          <div>
            <p className="eyebrow">Phase 12 - Tenant / Workspace / RBAC Boundary</p>
            <h2>Enterprise Access Boundary Foundation</h2>
            <p>
              Tenant, workspace, and role-assignment records establish the enterprise access boundary
              required before TRUE_MODE. This is a foundation layer only: no production authority,
              SENTINEL bypass, live autonomous tool execution, or external identity provider is active.
            </p>
          </div>
          <div className="statusCard phase12StatusCard">
            <span>Tenant / RBAC</span>
            <b>{tenancyStatus?.foundation_status || "Loading"}</b>
          </div>
        </div>

        <div className="boundarySummaryGrid">
          <div className="card">
            <h3>Tenant Boundary</h3>
            <p>Organizations: <b>{tenancyStatus?.organization_count ?? 0}</b></p>
            <p>Workspaces: <b>{tenancyStatus?.workspace_count ?? 0}</b></p>
            <p>Boundary: <b>{tenancyStatus?.tenant_boundary || "pending"}</b></p>
            <span className="pill good">{tenancyStatus?.foundation_status || "PENDING"}</span>
          </div>
          <div className="card">
            <h3>Identity and RBAC</h3>
            <p>Assignments: <b>{rbacAccess?.role_assignment_count ?? 0}</b></p>
            <p>Posture:</p>
            <p className="wrapValue"><b>{rbacAccess?.access_posture || "pending"}</b></p>
            <p>TRUE_MODE: <b>{rbacAccess?.true_mode || "not_active"}</b></p>
            <span className="pill good">{rbacAccess?.foundation_status || "PENDING"}</span>
          </div>
          <div className="card">
            <h3>Restricted Actions</h3>
            {(rbacAccess?.restricted_actions || []).slice(0, 5).map((action) => (
              <p key={action}>{action}</p>
            ))}
          </div>
          <div className="card">
            <h3>Approval Required</h3>
            {(rbacAccess?.approval_required_actions || []).slice(0, 5).map((action) => (
              <p key={action}>{action}</p>
            ))}
          </div>
        </div>

        <div className="traceLine">
          {"Access trace: Tenant → Workspace → Principal → Role Assignment → Permissions → Restricted Actions → Approval Boundary → RBAC Evidence"}
        </div>
      </section>

<section className="shell soc2Panel">
        <p className="eyebrow">SOC 2 READINESS</p>
        <h2>SOC 2-Aligned Evidence Posture</h2>
        <p>
          The platform generates lab-safe readiness evidence for agent evaluation workflows across
          Security, Availability, Processing Integrity, Confidentiality, and Privacy.
        </p>

        <div className="enterpriseGrid">
          {[
            ["Security", "Policy compliance, tool verification, safety checks"],
            ["Availability", "Regression, latency, cost, and reliability signals"],
            ["Processing Integrity", "Ground truth, hallucination scoring, RAG grounding"],
            ["Confidentiality", "Sensitive data handling, memory/session checks"],
            ["Privacy", "Retention boundary, no real customer or patient data"]
          ].map(([title, body]) => (
            <div className="card" key={title}>
              <h3>{title}</h3>
              <p>{body}</p>
            </div>
          ))}
        </div>

        <p className="soc2Note">
          Readiness evidence only. This lab does not claim SOC 2 certification, auditor attestation,
          or production operating effectiveness.
        </p>
      </section>

      <section className="boundary">
        <h3>Public Demo Boundary</h3>
        <p>
          Simulated agent evaluation workflow only. No real customer data, patient data,
          production agents, live autonomous tools, regulated systems, production model
          runtimes, or enterprise authorization systems are connected.
        </p>
      </section>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
