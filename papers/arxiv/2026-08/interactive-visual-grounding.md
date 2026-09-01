# When Seeing Is Not Enough: Benchmarking Interactive Visual Grounding in LVLMs

## Why It Matters

This work replaces the usual one-shot visual grounding assumption with a setting where the initial reference may be incomplete. It directly tests whether an LVLM can recognize that seeing is insufficient and actively acquire the missing target information.

## Proactivity Signal

When the target description is absent or ambiguous, the model asks follow-up questions, integrates the answers with visual evidence, and then grounds the referent rather than guessing from the first turn.

## Evaluation Setup

The controlled framework crosses four human-grounded visual contexts with four interaction protocols and compares models with task-level human baselines. Follow-up studies vary description source, reasoning effort, repeated interaction, provider, and visual context; current LVLMs remain below humans and are frequently overconfident.

## Key Limitations

The protocols control interaction tightly and focus on grounding rather than broader user goals. The benchmark reveals calibration and question-quality problems but does not evaluate real-time interruption cost or natural user willingness to answer repeated questions.

## Use For

Use this for multimodal clarification, interactive grounding, ask-versus-guess policies, confidence calibration, and evaluation of visual agents that must acquire information through dialogue.
