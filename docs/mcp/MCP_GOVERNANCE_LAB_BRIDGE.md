# MCP Governance Lab Bridge

## Platform

SecureTheCloud Agent Evaluation Platform

## Purpose

This document defines the bridge between SecureTheCloud Agent Evaluation Platform and SecureTheCloud MCP Governance Lab.

## Connection

MCP Governance Lab answers:

> Should this agent be allowed to call this tool in this context?

Agent Evaluation Platform answers:

> Did the agent call the correct tool, avoid forbidden tools, honor approval requirements, preserve permissions, and produce evidence?

## Lifecycle Fit

| Surface | Role |
|---|---|
| MCP Governance Lab | Governance during tool access |
| Agent Evaluation Platform | Evaluation before and after tool-enabled deployment |

## Evidence Relationship

The Agent Evaluation Platform can produce evidence for:

- expected tool call
- actual tool call
- forbidden tool attempt
- approval requirement
- destructive action block
- permission boundary
- tool-call budget
- remediation path

## Doctrine-Safe Boundary

This bridge is a positioning and evidence model only.

It does not create:

- live MCP server connection
- runtime tool execution
- enforcement authority
- runtime authority
- SENTINEL bypass
- production agent execution
