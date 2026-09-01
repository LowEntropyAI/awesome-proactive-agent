# OmniAssistBench: Assistant-style Interaction Benchmark for Omni-LLMs

## Why It Matters

OmniAssistBench evaluates a streaming assistant as part of a changing interaction loop rather than as an offline video question-answering model. The benchmark makes guidance timing and multi-turn state maintenance visible failure modes.

## Proactivity Signal

The model continuously observes a task, combines the visual state with the user's goal and prior knowledge, and guides the user along a predefined route. It must also react to visual prompts and delay advice until the relevant event instead of speaking immediately.

## Evaluation Setup

The dataset is reverse-engineered from Internet videos and segmented into multi-turn interactions using more than 1,000 expert person-hours. On the reported 100-point score, Gemini-3-Pro reaches 66.4 and Qwen3-Omni-Instruct reaches 51.2; analysis highlights failures on gestures, conversation history, and delayed responses.

## Key Limitations

Predefined priors constrain the user to the route taken in the source video, so the setup does not fully model open-ended interaction or how assistant output changes real user behavior. Internet-video reconstruction is also only a proxy for live assistance.

## Use For

Use this for omni-modal assistant evaluation, continuous goal guidance, delayed-response policies, multi-turn visual state tracking, and benchmarks where model outputs influence subsequent user actions.
