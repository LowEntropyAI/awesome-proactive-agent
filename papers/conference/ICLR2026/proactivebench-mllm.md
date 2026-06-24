# ProactiveBench: Benchmarking Proactiveness in Multimodal Large Language Models

## Why It Matters

This paper broadens proactivity from task prediction to multimodal uncertainty management. The key idea is that an assistant should know when visual evidence is insufficient and proactively ask the user for a better view or more information.

## Proactivity Signal

The model receives visually difficult inputs such as occluded objects, low-quality images, or ambiguous sketches. A proactive model should request help or additional evidence instead of confidently producing a weak answer.

## Evaluation Setup

The benchmark repurposes seven visual datasets and evaluates 22 multimodal LLMs on whether they proactively ask for help under visual uncertainty. The paper also studies prompting and reinforcement learning as ways to improve proactive behavior.

## Key Limitations

The benchmark focuses on visual help-seeking, not full agent workflows. It measures a narrow but important form of proactivity and should be paired with task, memory, and human-interaction evaluations.

## Use For

Use this paper for multimodal agents, uncertainty-aware intervention policies, help-seeking behavior, and the distinction between confident answering and responsible proactive clarification.
