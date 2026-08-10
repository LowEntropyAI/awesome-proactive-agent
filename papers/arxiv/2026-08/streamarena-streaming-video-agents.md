# StreamArena: Toward Continuous, Interactive, and Long-Horizon Agentic Streaming Video Understanding

## Why It Matters

StreamArena evaluates proactive monitoring together with perception, historical recall, and tool use over hour-scale streams. This exposes failures hidden by short clips and multiple-choice evaluation, where recent-frame baselines can appear competitive.

## Proactivity Signal

Its proactive tasks specify a monitoring horizon and a ground-truth trigger time, requiring the system to watch continuously and initiate a response when relevant evidence appears. StreamMind assigns proactive monitoring and latency-critical interaction to independently scheduled frontend workers.

## Evaluation Setup

The benchmark contains 243 full-length videos averaging 88.8 minutes and 3,646 manually validated open-ended tasks across seven domains, including 774 proactive tasks. StreamMind is compared with recent-window, text-summary, and model-internal compression baselines across all four capabilities.

## Key Limitations

Most source videos are Mandarin and come from public long-form content rather than private first-person deployments. Full evaluations are expensive: reported table cells use single runs, without standard deviations or significance tests.

## Use For

Use this for long-horizon streaming agents, proactive monitoring benchmarks, persistent multimodal memory, concurrent reactive/proactive workers, and latency-aware continuous-video systems.
