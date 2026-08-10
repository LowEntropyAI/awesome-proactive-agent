# GROVE: Growing and Reasoning over Temporally Stratified Memory from Streaming Video Experience

## Why It Matters

GROVE gives reactive recall and proactive assistance a shared memory interface instead of maintaining separate systems. Its causal, multi-scale organization is particularly relevant when useful evidence spans moments, episodes, and recurring patterns across days.

## Proactivity Signal

The same memory can be queried by an explicit user question or automatically from the current situation. In proactive mode, current perceptual evidence initiates retrieval over time-stamped moments, episodes, and cross-day patterns so the assistant can surface relevant past experience without a query.

## Evaluation Setup

The training-free framework is evaluated on several video-memory benchmarks, including MM-Lifelong for reactive long-horizon recall and EgoServe for proactive assistance. Ablations show that removing temporal strata or their scale-specific retrieval skills degrades results, especially for cross-day evidence.

## Key Limitations

Proactive evaluation is inherited from EgoServe rather than a live wearable deployment, and the system depends on upstream video captioning and foundation-model reasoning. The released code covers memory construction and inference, but not all ablation artifacts or result files.

## Use For

Use this for always-on wearable memory, shared reactive/proactive retrieval, temporal memory hierarchies, cross-day pattern discovery, and grounding interventions in visual history.
