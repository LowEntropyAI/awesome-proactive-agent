# When and How Should an Agent Clarify? CIGAsk: Teaching LLMs to Clarify via Counterfactual Information Gain

## Why It Matters

CIGAsk trains when to ask and how to ask in one policy instead of relying on prompting or a separate critic. Its reward directly values whether the user's response supplies information that improves the eventual answer.

## Proactivity Signal

The model chooses between answering and initiating clarification. When it asks, the question is rewarded for recovering disambiguating information rather than merely sounding relevant.

## Evaluation Setup

The method uses multi-turn GRPO with Counterfactual Information Gain and an asymmetric ambiguity bonus. Across table, passage, and open-domain QA clarification benchmarks, the 7B model outperforms the strongest reported external baseline, transfers across datasets without per-dataset tuning, and preserves single-turn QA performance on out-of-distribution tests.

## Key Limitations

The reward depends on gold answers, ambiguity labels, and a frozen reference model, so deployment without supervision remains unresolved. The experiments emphasize QA rather than long-horizon tool use or the cumulative burden of repeated questions.

## Use For

Use this for clarification-policy training, information-gain rewards, ask-versus-answer calibration, multi-turn reinforcement learning, and selective question generation.
