# Asking the Right Question at the Right Time: Human and Model Uncertainty Guidance to Ask Clarification Questions

## Why It Matters

This work directly tests whether model uncertainty is a reliable trigger for clarification and finds that it does not simply mirror human asking behavior. That distinction matters for agents that need their own calibrated ask policy rather than imitation of average human behavior.

## Proactivity Signal

The dialogue model estimates its uncertainty during a collaborative task and initiates a clarification question when additional information is expected to improve task success.

## Evaluation Setup

The paper compares human clarification behavior, model uncertainty, and several question-generation strategies in a collaborative dialogue task. Uncertainty-guided clarification improves task success relative to alternatives that rely more directly on human-question supervision.

## Key Limitations

The task is narrower than open-ended agent workflows, and uncertainty estimation quality depends on the underlying model and output space. The evaluation does not include tool execution, long-horizon user burden, or repeated-question policies.

## Use For

Use this for uncertainty-triggered clarification, human-versus-model uncertainty analysis, ask timing, collaborative dialogue evaluation, and calibration-aware intervention policies.
