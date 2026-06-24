# From Reactive to Proactive: Assessing the Proactivity of Voice Agents via ProVoice-Bench

## Why It Matters

ProVoice-Bench is the first benchmark specifically targeting proactive voice agents, filling a gap left by text-only and reactive evaluation frameworks. It surfaces a concrete failure mode — over-triggering — that is uniquely pronounced in the voice modality and under-studied elsewhere.

## Proactivity Signal

The agent must decide when to proactively intervene in audio streams without an explicit user request, across four tasks that test different dimensions of proactive voice interaction (monitoring, clarification, suggestion, interruption timing).

## Evaluation Setup

1,182 high-quality samples curated via a multi-stage data synthesis pipeline. Evaluates state-of-the-art Multimodal LLMs on proactive intervention and monitoring tasks. Key finding: current models exhibit significant over-triggering and weak reasoning when deciding whether to speak up.

## Key Limitations

Data is synthetically generated, which may not fully capture the noise and ambiguity of real voice interactions. Evaluation is limited to the four defined task types; open-ended proactive voice scenarios are not covered.

## Use For

Use for proactive voice agent benchmarking, over-triggering analysis, multimodal proactivity evaluation, and as a reference when designing audio-first proactive systems.
