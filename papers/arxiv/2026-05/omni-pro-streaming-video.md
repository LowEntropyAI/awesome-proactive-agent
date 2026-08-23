# OmniPro: A Comprehensive Benchmark for Omni-Proactive Streaming Video Understanding

## Why It Matters

OmniPro distinguishes true self-triggered streaming evaluation from polling at fixed timestamps. It also broadens proactive video assistance beyond one-shot alerts to monitoring, grounding, counting, narration, and procedural instructions.

## Proactivity Signal

In Online mode, the model receives a standing instruction once and autonomously decides when and what to report while processing the stream. Multiple responses are allowed and over-triggering is penalized; Probe mode separately diagnoses content understanding.

## Evaluation Setup

The benchmark contains 2,700 human-verified samples over nine subtasks and six capabilities; 84% require or benefit from audio. Across 11 models, audio-visual input improves scores by 2.4–11.1 points, while later triggers retain only 37% of early-segment performance on average.

## Key Limitations

The tasks are synthesized from existing videos and conditioned on predefined standing instructions. Online content uses an LLM judge, and the benchmark does not measure personalized interruption cost, privacy, or open-ended long-duration deployment.

## Use For

Use this for genuine online proactive video evaluation, when-to-speak policies, multimodal trigger analysis, multiple-trigger streams, false-alarm control, and long-horizon degradation studies.
