# FingerTip 20K: A Benchmark for Proactive and Personalized Mobile LLM Agents

## Why It Matters

FingerTip 20K makes mobile GUI proactivity concrete by combining proactive task suggestion with personalized task execution. It is important because it uses long-term Android behavior traces rather than isolated screenshots or one-off instructions.

## Proactivity Signal

The benchmark asks agents to use user history, mobile context, task traces, and preference signals to decide what task to suggest and how to execute it in a way that matches the user.

## Evaluation Setup

The dataset contains roughly 20K human demonstrations from mobile-use trajectories and evaluates two tracks: proactive task suggestion and personalized mobile task execution across everyday Android app scenarios.

## Key Limitations

It is a benchmark dataset rather than a full live deployment study. The work is strong for measuring mobile personalization and suggestion quality, but does not fully evaluate notification fatigue, consent, or real-time user acceptance.

## Use For

Use this paper when comparing mobile proactive agents, studying long-term user-history conditioning, or separating task-suggestion quality from personalized execution quality.
