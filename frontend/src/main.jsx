import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const API_BASE = import.meta.env.VITE_API_BASE_URL || "http://localhost:8030";

function App() {
  const [dashboard, setDashboard] = useState(null);
  const [agents, setAgents] = useState([]);
  const [runs, setRuns] = useState([]);
  const [status, setStatus] = useState("Loading agent evaluation telemetry...");

  useEffect(() => {
    async function load() {
      try {
        const [dashRes, agentsRes, runsRes] = await Promise.all([
          fetch(`${API_BASE}/api/dashboard`),
          fetch(`${API_BASE}/api/agents`),
          fetch(`${API_BASE}/api/evaluation-runs`)
        ]);

        if (!dashRes.ok || !agentsRes.ok || !runsRes.ok) {
          throw new Error("Backend returned non-OK response");
        }

        setDashboard(await dashRes.json());
        setAgents(await agentsRes.json());
        setRuns(await runsRes.json());
        setStatus("Live agent evaluation backend connected");
      } catch {
        setStatus("Backend connection failed. Demo shell loaded.");
      }
    }

    load();
  }, []);

  const metricCards = dashboard
    ? [
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
        </div>

        <div className="principle">
          <h3>Core Principle</h3>
          <p>Agents must be tested before deployment, monitored after deployment, and re-evaluated whenever prompts, tools, memory, retrieval, policies, or workflows change.</p>
          <p><b>AI can act. Governance verifies. Evidence proves.</b></p>
        </div>
      </section>

      <section className="shell">
        <h2 className="centerTitle">EVALUATION TRUST FABRIC</h2>
        <div className="fabricGrid">
          {[
            "Ground Truth",
            "Scoring Engine",
            "RAG Evaluation",
            "Tool Verification",
            "Policy Compliance",
            "Regression Detection"
          ].map((item) => (
            <div className="card" key={item}>
              <div className="hex">⬡</div>
              <h3>{item}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="metrics">
        {metricCards.map(([label, value]) => (
          <div className="metric" key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
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

          <div className="boundary">
            <h3>Public Demo Boundary</h3>
            <p>
              Simulated agent evaluation workflow only. No real customer data, patient data, production agents,
              live autonomous tools, regulated systems, production model runtimes, or enterprise authorization systems are connected.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
