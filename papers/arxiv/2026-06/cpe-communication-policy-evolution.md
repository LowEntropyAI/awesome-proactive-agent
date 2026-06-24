# Communication Policy Evolution for Proactive LLM Agents

## Why It Matters

CPE is the first framework to treat *how* proactive agents communicate as a first-class design dimension, separating it from *what* they decide to do. It reveals that text vs. UI modality choices meaningfully affect task success, persona compliance, and information-asymmetry resolution.

## Proactivity Signal

The agent operates under information asymmetry — users do not always state their full preferences, so the agent must proactively resolve the gap through optimal channel choice (text or structured UI). Two complementary settings are studied: User–Agent (outward communication) and Planner–Executor (internal coordination).

## Evaluation Setup

Evaluated across diverse environments, personas, and model combinations. CPE uses rollout-based and prompt-level self-evolution to refine communication policies without modifying model weights. Achieves best task success across multiple settings.

## Key Limitations

CPE operates at the prompt/policy level and does not modify model weights; gains may be bounded by the underlying model's reasoning ability. Evaluation environments are curated and may not reflect the full diversity of real-world agent deployments.

## Use For

Use for proactive agent communication design, modality selection, information-asymmetry handling, and self-evolving agent policy research.
