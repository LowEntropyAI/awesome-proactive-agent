# InquireMobile: Teaching VLM-based Mobile Agent to Request Human Assistance via Reinforcement Fine-Tuning

## Why It Matters

InquireMobile treats asking for confirmation as a learned mobile-agent action rather than a generic safety prompt, directly connecting proactive inquiry to risky GUI execution.

## Proactivity Signal

Before acting, the agent reasons over the instruction, screenshot, and trajectory, then can call the user when an action is ambiguous, privacy-sensitive, or potentially irreversible.

## Evaluation Setup

InquireBench covers five categories and 22 sub-categories of proactive inquiry. The trained Qwen2.5-VL-3B agent improves inquiry success by 46.8 percentage points over the best reported baseline while also being evaluated on end-to-end task success.

## Key Limitations

Inquiry improves sharply, but the reported overall task success remains low. The benchmark focuses on constructed critical decision points, so performance does not yet demonstrate robust behavior across long, open-ended phone use.

## Use For

Use this for consent-aware mobile agents, ask-before-act policies, reinforcement learning of clarification actions, and safety evaluation around high-risk GUI steps.
