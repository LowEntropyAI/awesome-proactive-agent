# When Reasoning Is Not Enough: Proactive Inquiry for Cross-Modal Safety in Multimodal Large Language Models

[Primary source](https://arxiv.org/abs/2610.22068) · Checked 2026-10-19 · arXiv 2610. Review depth: abstract and arXiv metadata; no experiments rerun.

## Why It Matters

Adjacent active clarification: image/text ambiguity can commit a model to a hazardous interpretation even when each modality appears benign.

## Proactivity Signal

SAFE-PRO combines entropy and a cross-modal risk score to choose safety-grounded questions and reasoning-path optimization, with an over-refusal penalty.

## Evaluation Setup

SSUI-Dialog supplies dual-intent multi-turn supervision; the abstract reports evaluation on seven benchmarks and two base MLLMs.

## Key Limitations

Reported safety and refusal results are benchmark evidence, not a guarantee of safe deployment. This is inquiry during an existing multimodal request, not continuous unsolicited assistance.

## Use For

Use for intent-level safety clarification and balancing harmful compliance against excessive refusal.
