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
  const [runStatus, setRunStatus] = useState("Ready to run deterministic lab evaluation.");

  async function load() {
    try {
      const [dashRes, agentsRes, runsRes, benchmarksRes, pillarsRes, readinessRes] = await Promise.all([
        fetch(`${API_BASE}/api/dashboard`),
        fetch(`${API_BASE}/api/agents`),
        fetch(`${API_BASE}/api/evaluation-runs`),
        fetch(`${API_BASE}/api/benchmarks`),
        fetch(`${API_BASE}/api/evaluation-pillars`),
        fetch(`${API_BASE}/api/enterprise-readiness`)
      ]);

      if (!dashRes.ok || !agentsRes.ok || !runsRes.ok || !benchmarksRes.ok || !pillarsRes.ok || !readinessRes.ok) {
        throw new Error("Backend returned non-OK response");
      }

      const nextRuns = await runsRes.json();

      setDashboard(await dashRes.json());
      setAgents(await agentsRes.json());
      setRuns(nextRuns);
      setBenchmarks(await benchmarksRes.json());
      setPillars(await pillarsRes.json());
      setReadiness(await readinessRes.json());
      setStatus("Live agent evaluation backend connected");

      if (!selectedRun && nextRuns.length > 0) {
        await loadRunDetail(nextRuns[0].run_id);
      }
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
          {pillars.map((pillar) => (
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
              {agents.map((agent) => (
                <option key={agent.agent_id} value={agent.agent_id}>
                  {agent.agent_name}
                </option>
              ))}
            </select>
          </label>

          <label>
            Benchmark
            <select value={selectedBenchmarkId} onChange={(event) => setSelectedBenchmarkId(event.target.value)}>
              {benchmarks.map((benchmark) => (
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
          {benchmarks.map((benchmark) => (
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

      <section className="gridTwo">
        <div className="shell">
          <p className="eyebrow">COMMAND CENTER</p>
          <h2>Evaluation Runs</h2>
          <p>{status}</p>

          <div className="stack">
            {runs.map((run) => (
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
