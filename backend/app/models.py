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


class OrganizationRecord(Base):
    __tablename__ = "organization_records"

    organization_id = Column(String(120), primary_key=True, index=True)
    tenant_id = Column(String(80), unique=True, index=True, nullable=False)
    organization_name = Column(String(200), nullable=False)
    organization_status = Column(String(80), nullable=False)
    boundary_status = Column(String(80), nullable=False)
    data_region = Column(String(80), nullable=False)
    created_at = Column(DateTime(timezone=True), server_default=func.now(), nullable=False)


class WorkspaceRecord(Base):
    __tablename__ = "workspace_records"

    workspace_id = Column(String(120), primary_key=True, index=True)
    organization_id = Column(String(120), index=True, nullable=False)
    tenant_id = Column(String(80), index=True, nullable=False)
    workspace_name = Column(String(200), nullable=False)
    workspace_type = Column(String(80), nullable=False)
    rbac_mode = Column(String(80), nullable=False)
    data_boundary = Column(String(120), nullable=False)
    lifecycle_status = Column(String(80), nullable=False)
    created_at = Column(DateTime(timezone=True), server_default=func.now(), nullable=False)


class RoleAssignmentRecord(Base):
    __tablename__ = "role_assignment_records"

    assignment_id = Column(String(120), primary_key=True, index=True)
    tenant_id = Column(String(80), index=True, nullable=False)
    workspace_id = Column(String(120), index=True, nullable=False)
    principal_id = Column(String(160), index=True, nullable=False)
    principal_type = Column(String(80), nullable=False)
    role_name = Column(String(120), nullable=False)
    permissions = Column(JSON, default=list, nullable=False)
    restricted_actions = Column(JSON, default=list, nullable=False)
    approval_required_actions = Column(JSON, default=list, nullable=False)
    assignment_status = Column(String(80), nullable=False)
    created_at = Column(DateTime(timezone=True), server_default=func.now(), nullable=False)


class RbacEvidenceRecord(Base):
    __tablename__ = "rbac_evidence_records"

    rbac_evidence_id = Column(String(120), primary_key=True, index=True)
    tenant_id = Column(String(80), index=True, nullable=False)
    workspace_id = Column(String(120), index=True, nullable=False)
    principal_id = Column(String(160), index=True, nullable=False)
    access_decision = Column(String(80), nullable=False)
    evaluated_permissions = Column(JSON, default=list, nullable=False)
    restricted_actions = Column(JSON, default=list, nullable=False)
    policy_reason = Column(Text, nullable=False)
    soc2_mapping = Column(JSON, default=dict, nullable=False)
    created_at = Column(DateTime(timezone=True), server_default=func.now(), nullable=False)


class AuditLedgerEventRecord(Base):
    __tablename__ = "audit_ledger_event_records"

    ledger_event_id = Column(String(140), primary_key=True, index=True)
    evidence_chain_id = Column(String(140), index=True, nullable=False)
    tenant_id = Column(String(80), index=True, nullable=False)
    workspace_id = Column(String(120), index=True, nullable=False)
    actor_id = Column(String(160), index=True, nullable=False)
    actor_type = Column(String(80), nullable=False)
    action = Column(String(160), nullable=False)
    object_type = Column(String(120), nullable=False)
    object_id = Column(String(160), nullable=False)
    request_id = Column(String(160), index=True, nullable=False)
    request_metadata = Column(JSON, default=dict, nullable=False)
    ledger_sequence = Column(Integer, nullable=False)
    previous_event_hash = Column(String(160), nullable=False)
    event_hash = Column(String(160), nullable=False)
    immutability_posture = Column(String(80), nullable=False)
    soc2_mapping = Column(JSON, default=dict, nullable=False)
    created_at = Column(DateTime(timezone=True), server_default=func.now(), nullable=False)


class EvidenceChainRecord(Base):
    __tablename__ = "evidence_chain_records"

    evidence_chain_id = Column(String(140), primary_key=True, index=True)
    tenant_id = Column(String(80), index=True, nullable=False)
    workspace_id = Column(String(120), index=True, nullable=False)
    chain_subject = Column(String(200), nullable=False)
    chain_status = Column(String(80), nullable=False)
    event_count = Column(Integer, nullable=False)
    first_event_id = Column(String(140), nullable=False)
    latest_event_id = Column(String(140), nullable=False)
    chain_integrity_status = Column(String(80), nullable=False)
    soc2_traceability = Column(JSON, default=dict, nullable=False)
    created_at = Column(DateTime(timezone=True), server_default=func.now(), nullable=False)


class ReviewerWorkspaceRecord(Base):
    __tablename__ = "reviewer_workspace_records"

    reviewer_workspace_id = Column(String(140), primary_key=True, index=True)
    tenant_id = Column(String(80), index=True, nullable=False)
    workspace_id = Column(String(120), index=True, nullable=False)
    reviewer_role = Column(String(120), nullable=False)
    review_queue_status = Column(String(80), nullable=False)
    packages_ready = Column(Integer, nullable=False)
    packages_requiring_review = Column(Integer, nullable=False)
    approval_required_count = Column(Integer, nullable=False)
    export_posture = Column(String(120), nullable=False)
    boundary_statement = Column(Text, nullable=False)
    soc2_mapping = Column(JSON, default=dict, nullable=False)
    created_at = Column(DateTime(timezone=True), server_default=func.now(), nullable=False)


class EvidenceExportManifestRecord(Base):
    __tablename__ = "evidence_export_manifest_records"

    export_manifest_id = Column(String(140), primary_key=True, index=True)
    evidence_package_id = Column(String(140), index=True, nullable=False)
    evidence_chain_id = Column(String(140), index=True, nullable=False)
    tenant_id = Column(String(80), index=True, nullable=False)
    workspace_id = Column(String(120), index=True, nullable=False)
    export_status = Column(String(80), nullable=False)
    export_type = Column(String(120), nullable=False)
    reviewer_decision = Column(String(80), nullable=False)
    package_integrity_status = Column(String(120), nullable=False)
    included_artifacts = Column(JSON, default=list, nullable=False)
    redaction_status = Column(String(120), nullable=False)
    boundary_statement = Column(Text, nullable=False)
    soc2_mapping = Column(JSON, default=dict, nullable=False)
    created_at = Column(DateTime(timezone=True), server_default=func.now(), nullable=False)
