# PASK: Toward Intent-Aware Proactive Agents with Long-Term Memory

## Why It Matters

PASK integrates demand detection, long-term memory, and low-latency assistance into an always-on system. It tests proactivity on real speech transcripts rather than only clean synthetic prompts.

## Proactivity Signal

For each streaming turn, IntentFlow selects `silent`, fast intervention, or full assistance. The choice is conditioned on current context and a hybrid workspace, user, and global memory, with an explicit interruption cost.

## Evaluation Setup

LatentNeeds-Bench contains 100 sessions and 3,936 turns across work, learning, and daily-life categories. IntentFlow reports an average score of 84.2, 3.4 points above Gemini 3 Flash, while remaining strong on both demand and no-demand cases; the paper also includes small staged user studies.

## Key Limitations

The evaluation split is small, several labels are human-refined transcripts rather than live multimodal streams, and the user evidence is preliminary. Long-term privacy, preference drift, open-world perception errors, and sustained false-interruption burden need deployment-scale validation.

## Use For

Use this for always-on assistants, demand-versus-silence detection, hierarchical memory, fast/full response routing, and latency-constrained proactive systems.
