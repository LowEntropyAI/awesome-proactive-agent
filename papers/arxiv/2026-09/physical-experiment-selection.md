# New Evidence, Same Choice: Testing Physical Experiment Selection in Vision Language Models

## Why It Matters

This work evaluates evidence acquisition as an action rather than rewarding only a final answer. It exposes models that appear competent on isolated decisions but fail to change behavior when a matched observation or question changes what evidence is needed.

## Proactivity Signal

Given one measurement image, the model must either stop and answer or select the cheapest additional physical experiment that can resolve the question. The proactive step is choosing to gather targeted evidence instead of guessing from an insufficient observation.

## Evaluation Setup

The controlled benchmark spans sliding, bouncing, and spring systems with 144 parameter families and 576 core decisions. Six open vision-language models are tested on matched pairs, minimum-cost action choice, final answers, perception probes, and numerical controls; the best model gets both paired decisions correct for only 5.9% of image pairs.

## Key Limitations

The paper labels the analysis exploratory because planned control requirements were not met. The worlds are finite and synthetic, response parsing contributes some failures, and the task does not include a real user or physical robot executing the selected experiment.

## Use For

Use this for value-of-information policies, active perception, stop-versus-measure decisions, contrastive action evaluation, and diagnosing whether an agent adapts evidence gathering to the question.
