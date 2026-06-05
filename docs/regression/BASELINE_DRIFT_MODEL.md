# Baseline Drift Model

## Purpose

The baseline drift model preserves known-good evaluation snapshots and compares current runs against those snapshots.

## Baseline Snapshot Fields

Each baseline should preserve:

- baseline ID
- run ID
- benchmark ID
- prompt fingerprint
- output fingerprint
- grounding score
- hallucination score
- policy outcome
- tool path
- tool path cost
- latency
- risk tier
- approved baseline tag
- reviewer status

## Drift Comparison

Current runs are compared against baseline snapshots for:

- output changes
- score degradation
- policy outcome changes
- cost increases
- latency increases
- risk-tier changes
- new safety failures
- evidence drift

## Future Enterprise Direction

Future enterprise implementation should persist baselines, support reviewer approval, compare releases, and generate signed regression evidence packages.
