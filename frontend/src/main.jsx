import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const API_BASE = import.meta.env.VITE_API_BASE_URL || "http://localhost:8030";

function App() {
  const [dashboard, setDashboard] = useState(null);
  const [agents, setAgents] = useState([]);
  const [runs, setRuns] = useState([]);
  const [pillars, setPillars] = useState([]);
  const [readiness, setReadiness] = useState([]);
  const [status, setStatus] = useState("Loading agent evaluation telemetry...");

  useEffect(() => {
    async function load() {
      try {
        const [dashRes, agentsRes, runsRes, pillarsRes, readinessRes] = await Promise.all([
          fetch(`${API_BASE}/api/dashboard`),
          fetch(`${API_BASE}/api/agents`),
          fetch(`${API_BASE}/api/evaluation-runs`),
          fetch(`${API_BASE}/api/evaluation-pillars`),
          fetch(`${API_BASE}/api/enterprise-readiness`)
        ]);

        if (!dashRes.ok || !agentsRes.ok || !runsRes.ok || !pillarsRes.ok || !readinessRes.ok) {
          throw new Error("Backend returned non-OK response");
        }

        setDashboard(await dashRes.json());
        setAgents(await agentsRes.json());
        setRuns(await runsRes.json());
        setPillars(await pillarsRes.json());
        setReadiness(await readinessRes.json());
        setStatus("Live agent evaluation backend connected");
      } catch {
        setStatus("Backend connection failed. Demo shell loaded.");
      }
    }

    load();
  }, []);

  const metricCards = dashboard
    ? [
        ["Agent Trust", `${dashboard.agent_trust_score}/100`],
        ["Test Runs", dashboard.total_test_runs],
        ["Pass Rate", `${dashboard.pass_rate}%`],
        ["Fail Rate", `${dashboard.fail_rate}%`],
        ["Hallucination", `${dashboard.hallucination_score}/3`],
        ["Tool Accuracy", `${dashboard.tool_call_accuracy}%`],
        ["Policy Score", `${dashboard.policy_compliance_score}%`],
        ["Avg Cost", `$${dashboard.average_cost_per_run}`],
        ["Latency", `${dashboard.average_latency_ms}ms`],
        ["Escalation", `${dashboard.human_escalation_rate}%`],
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
            <span>Before deployment</span>
            <span>After deployment</span>
            <span>CI eval gates</span>
            <span>Evidence-first</span>
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
          Flagship evaluation layer for agent quality, safety, tool behavior, RAG grounding, policy compliance, and regression control.
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
          <div className={label === "Agent Trust" ? "metric trustMetric" : "metric"} key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </section>

      <section className="shell">
        <div className="sectionHeader">
          <div>
            <p className="eyebrow">PHASE 2 · FLAGSHIP OPERATING MODEL</p>
            <h2>Agent Evaluation Lifecycle</h2>
            <p>
              A governed evaluation workflow for autonomous agents using prompts, tools, memory, retrieval, policy checks, and workflow automation.
            </p>
          </div>
          <div className="postureBox">
            <span>Evaluation Posture</span>
            <b>{status}</b>
          </div>
        </div>

        <div className="lifecycle">
          {[
            ["01", "Ground Truth", "Benchmark prompt, expected answer, policy, sources, and risk class."],
            ["02", "Agent Run", "Agent produces output, retrieval context, memory reference, and tool path."],
            ["03", "Score", "Hallucination, RAG grounding, tool accuracy, cost, latency, and policy compliance."],
            ["04", "Validate", "Safety, memory, tenant, approval, and destructive-action boundaries are checked."],
            ["05", "Detect Regression", "Compare against prior baselines for changed output, cost, risk, or failures."],
            ["06", "Export Evidence", "Generate test run record, failure reason, remediation, and reviewer notes."]
          ].map(([step, title, body]) => (
            <div className="card lifecycleCard" key={step}>
              <span className="step">{step}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="gridTwo">
        <div className="shell">
          <p className="eyebrow">COMMAND CENTER</p>
          <h2>Agent Evaluation Runs</h2>
          <p>{status}</p>

          <div className="stack">
            {runs.map((run) => (
              <div className={`card ${run.result === "pass" ? "pass" : "fail"}`} key={run.run_id}>
                <div className="row">
                  <h3>{run.test_name}</h3>
                  <span className="pill">{run.result.toUpperCase()}</span>
                </div>
                <p>{run.category}</p>
                <p>Decision: <b>{run.policy_decision}</b></p>
                <p>Policy score: <b>{run.policy_compliance_score}%</b> · Tool accuracy: <b>{run.tool_call_accuracy}%</b></p>
                {run.failure_reason && <p className="failure">{run.failure_reason}</p>}
              </div>
            ))}
          </div>
        </div>

        <div className="shell">
          <p className="eyebrow">AGENT INVENTORY</p>
          <h2>Agents Under Evaluation</h2>

          <div className="stack">
            {agents.map((agent) => (
              <div className="card" key={agent.agent_id}>
                <div className="row">
                  <h3>{agent.agent_name}</h3>
                  <span className="pill">{agent.risk_tier}</span>
                </div>
                <p>{agent.primary_capability}</p>
                <p>Owner: <b>{agent.owner}</b></p>
                <p>Status: <b>{agent.status}</b></p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="shell">
        <p className="eyebrow">ENTERPRISE ESCALATION PATH</p>
        <h2>Lab Today. Standalone Platform Ready.</h2>
        <p>
          Phase 2 keeps the product lab-safe while shaping the architecture toward an enterprise-grade evaluation platform.
        </p>

        <div className="enterpriseGrid">
          {readiness.map((item) => (
            <div className="card" key={item.area}>
              <h3>{item.area}</h3>
              <p><b>Current:</b> {item.lab_state}</p>
              <p><b>Enterprise path:</b> {item.enterprise_path}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="shell sotPanel">
        <p className="eyebrow">PLATFORM SOT & TRACEABILITY</p>
        <h2>State of Truth, Rollback & Drill-Down Foundation</h2>
        <p>
          The Agent Evaluation Platform is designed for enterprise-grade traceability:
          dashboard metrics should drill down into agents, test suites, benchmarks,
          evaluation runs, policy decisions, scores, remediation, reviewer notes, and evidence packages.
        </p>

        <div className="traceGrid">
          {[
            ["State of Truth", "Tracks phase, posture, doctrine boundary, SOC 2 readiness, and rollback state."],
            ["Rollback Points", "Stable tags preserve known-good baselines for recovery and audit history."],
            ["Traceability IDs", "Agents, suites, benchmarks, tests, runs, scores, decisions, evidence, and reviews get stable IDs."],
            ["Evidence Drill-Down", "Metrics should reconstruct the prompt, context, tool calls, policy decision, score, and remediation."]
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
