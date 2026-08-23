# ROMA: Real-time Omni-Multimodal Assistant with Interactive Streaming Understanding

## Why It Matters

ROMA unifies reactive QA with proactive monitoring in one real-time audio-video assistant. Its lightweight speak head separates the decision to initiate a response from the more expensive content generator.

## Proactivity Signal

The speak head continuously chooses whether the current multimodal unit warrants a response. The model can issue an event alert or narration without a new prompt and remain silent between relevant moments.

## Evaluation Setup

ROMA is trained with a two-stage streaming curriculum and evaluated across 12 reorganized benchmarks covering proactive alerting, narration, and reactive QA. The paper reports state-of-the-art results on the proactive tasks while remaining competitive on reactive ones.

## Key Limitations

The unified suite aggregates existing benchmarks with heterogeneous protocols, and most proactive tasks use predefined standing instructions. Open-world false-alert burden, user-specific timing preferences, and continuous privacy controls are not established.

## Use For

Use this for decoupled speak heads, low-latency omni-modal agents, unified reactive/proactive training, streaming alerts, and real-time narration.
