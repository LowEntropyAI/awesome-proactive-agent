# Designing for Doubt: The Case for Informed Abstention in Autonomous Agents

## Why It Matters

This work argues that task-completion benchmarks systematically reward compliance even when information, verification, or authorization is missing. It supplies a vocabulary and metrics for distinguishing a principled pause from failure or blanket refusal.

## Proactivity Signal

The agent detects specification, verification, or authority gaps and routes to clarification, bounded verification, escalation, or refusal instead of executing by default. The key signal is a justified pause paired with a concrete recovery path.

## Evaluation Setup

The preliminary evaluation uses 144 matched enterprise-agent scenarios across seven model families. A runtime checkpoint reaches 87.5–91% hazardous-action blocking while retaining 75–92% usability on authorized scenarios, measured with Safety Rate, Usability Rate, and Informed Refusal Rate.

## Key Limitations

The scenario set is small and enterprise-oriented, normative gap labels may be contestable, and tool-level enforcement cannot observe native refusals that bypass wrapped tools. The authors present the protocols as a starting point rather than a mature benchmark standard.

## Use For

Use this for consent-aware agents, safe pauses, authorization checks, abstention metrics, and evaluation designs that balance hazardous-action blocking with useful execution.
