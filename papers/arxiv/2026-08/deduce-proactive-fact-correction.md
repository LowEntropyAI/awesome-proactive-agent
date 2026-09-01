# From Passive Response to Proactive Correction: Enhancing LLM Robustness Against Input Fact Perturbations

## Why It Matters

DEDUCE targets a common failure mode in which an assistant complies with a misleading premise. It reframes robustness as an interactive responsibility: detect the faulty premise, decide how to correct it, and then answer without waiting for the user to request fact checking.

## Proactivity Signal

The framework autonomously extracts and verifies claims in the input, deliberates over correction strategies, and explicitly corrects the user's misconception while completing the original request.

## Evaluation Setup

The authors introduce MisFactQA with graded factual perturbations and evaluate DEDUCE alongside TruthfulQA and FalseQA. Experiments across Qwen, LLaMA, and Gemma families report consistent improvements in answer accuracy and error-correction capability.

## Key Limitations

The pipeline assumes access to sufficiently reliable verification evidence and is evaluated on benchmark perturbations rather than live conversations. Extra verification and deliberation add latency, and over-correction of legitimate but unusual premises remains an important deployment risk.

## Use For

Use this for false-premise handling, proactive misconception correction, verification-before-compliance, and dialogue agents that must distinguish being helpful from blindly accepting the user's framing.
