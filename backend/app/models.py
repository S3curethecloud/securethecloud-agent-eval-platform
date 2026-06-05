from sqlalchemy import Boolean, Column, DateTime, Float, Integer, JSON, String, Text, func

from app.database import Base


class AgentRecord(Base):
    __tablename__ = "agent_records"

    record_pk = Column(String(80), primary_key=True, index=True)
    tenant_id = Column(String(80), index=True, nullable=False)
    workspace_id = Column(String(80), index=True, nullable=False)
    agent_id = Column(String(120), unique=True, index=True, nullable=False)
    agent_name = Column(String(200), nullable=False)
    owner = Column(String(160), nullable=False)
    risk_tier = Column(String(40), nullable=False)
    lifecycle_status = Column(String(60), nullable=False)
    created_at = Column(DateTime(timezone=True), server_default=func.now(), nullable=False)


class BenchmarkRecord(Base):
    __tablename__ = "benchmark_records"

    benchmark_id = Column(String(120), primary_key=True, index=True)
    tenant_id = Column(String(80), index=True, nullable=False)
    workspace_id = Column(String(80), index=True, nullable=False)
    category = Column(String(120), nullable=False)
    risk_class = Column(String(60), nullable=False)
    question = Column(Text, nullable=False)
    expected_answer = Column(Text, nullable=False)
    expected_policy = Column(String(80), nullable=False)
    required_citation = Column(Boolean, default=False, nullable=False)
    allowed_sources = Column(JSON, default=list, nullable=False)
    forbidden_sources = Column(JSON, default=list, nullable=False)
    created_at = Column(DateTime(timezone=True), server_default=func.now(), nullable=False)


class EvaluationRunRecord(Base):
    __tablename__ = "evaluation_run_records"

    run_id = Column(String(120), primary_key=True, index=True)
    tenant_id = Column(String(80), index=True, nullable=False)
    workspace_id = Column(String(80), index=True, nullable=False)
    agent_id = Column(String(120), index=True, nullable=False)
    benchmark_id = Column(String(120), index=True, nullable=False)
    run_status = Column(String(60), nullable=False)
    decision = Column(String(80), nullable=False)
    risk_tier = Column(String(60), nullable=False)
    hallucination_score = Column(Float, default=0, nullable=False)
    tool_score = Column(Float, default=0, nullable=False)
    policy_score = Column(Float, default=0, nullable=False)
    regression_status = Column(String(80), nullable=False)
    created_at = Column(DateTime(timezone=True), server_default=func.now(), nullable=False)


class EvidencePackageRecord(Base):
    __tablename__ = "evidence_package_records"

    evidence_id = Column(String(120), primary_key=True, index=True)
    tenant_id = Column(String(80), index=True, nullable=False)
    workspace_id = Column(String(80), index=True, nullable=False)
    run_id = Column(String(120), index=True, nullable=False)
    prompt = Column(Text, nullable=False)
    retrieved_context = Column(JSON, default=list, nullable=False)
    tool_calls = Column(JSON, default=list, nullable=False)
    policy_decisions = Column(JSON, default=list, nullable=False)
    scores = Column(JSON, default=dict, nullable=False)
    failure_reason = Column(Text, nullable=True)
    remediation = Column(Text, nullable=True)
    reviewer_notes = Column(Text, nullable=True)
    evidence_digest = Column(String(160), nullable=False)
    created_at = Column(DateTime(timezone=True), server_default=func.now(), nullable=False)


class RegressionBaselineRecord(Base):
    __tablename__ = "regression_baseline_records"

    baseline_id = Column(String(120), primary_key=True, index=True)
    tenant_id = Column(String(80), index=True, nullable=False)
    workspace_id = Column(String(80), index=True, nullable=False)
    benchmark_id = Column(String(120), index=True, nullable=False)
    approved_run_id = Column(String(120), index=True, nullable=False)
    baseline_status = Column(String(80), nullable=False)
    grounding_score = Column(Float, default=0, nullable=False)
    policy_score = Column(Float, default=0, nullable=False)
    latency_ms = Column(Integer, default=0, nullable=False)
    cost_usd = Column(Float, default=0, nullable=False)
    created_at = Column(DateTime(timezone=True), server_default=func.now(), nullable=False)


class AuditEventRecord(Base):
    __tablename__ = "audit_event_records"

    audit_id = Column(String(120), primary_key=True, index=True)
    tenant_id = Column(String(80), index=True, nullable=False)
    workspace_id = Column(String(80), index=True, nullable=False)
    actor = Column(String(160), nullable=False)
    action = Column(String(160), nullable=False)
    object_type = Column(String(120), nullable=False)
    object_id = Column(String(160), nullable=False)
    event_metadata = Column(JSON, default=dict, nullable=False)
    created_at = Column(DateTime(timezone=True), server_default=func.now(), nullable=False)
