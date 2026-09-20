# Clarify or Answer: Reinforcement Learning for Agentic VQA with Context Under-specification

## Why It Matters

This work turns clarification in visual question answering into an explicit agent decision rather than assuming every image-question pair is answerable. It connects multimodal uncertainty to an end-to-end interactive policy that can acquire missing external context before committing to an answer.

## Proactivity Signal

CoA first decides whether to answer or ask. When context is missing, it initiates one focused clarification question, incorporates the user's reply, and only then produces the final answer.

## Evaluation Setup

The paper introduces CONTEXTCLARIFY with ambiguous image-question pairs and a non-ambiguous contrast set. GRPO-CR trains clarification generation with rewards for focused, non-trivial, ambiguity-resolving questions; across three VLLMs and three datasets, the paper reports an average 15.3-point end-to-end VQA accuracy gain over prompting baselines.

## Key Limitations

The interaction is limited to a single clarification turn and assumes that the user supplies the requested missing context. The setting does not yet test repeated questions, user refusal, interruption cost, or continuous visual streams.

## Use For

Use this for multimodal ask-versus-answer policies, clarification-aware VQA, uncertainty-triggered interaction, contrast-set benchmark design, and reinforcement learning for question quality.
