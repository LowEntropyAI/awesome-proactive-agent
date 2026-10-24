# Learning What to Ask for Tomorrow: Active Preference Acquisition for Long-Term Personalized Web Agents

[Paper](https://arxiv.org/abs/2610.31107) · [Code / data](https://github.com/xiaoqi-7/Active-Preference-Acquisition) · First posted 2026-10-22 · Checked 2026-10-24. Review: method, benchmark and limitations; no rerun.

## Why It Matters

Adjacent active clarification: a preference question can be worth asking because its answer helps future tasks, even when the current task alone does not justify it.

## Proactivity Signal

APA estimates prospective personalization value from counterfactual task-solver gains and expected reuse, subtracts asking and disclosure costs, then selects questions under a budget.

## Evaluation Setup

ActiveWebPref uses synthetic profiles, structured alternatives, five domains and exact utilities. Qwen3-8B supplies the LLM roles. Cost-matched comparisons separate future reuse from current-task value of information.

## Key Limitations

This is not live browser evaluation. Structured simulators and predefined costs do not establish real users' privacy preferences, comprehension or interruption burden; no completed blinded human study is reported.

## Use For

Longitudinal ask-versus-act decisions. Repository code and benchmark JSON splits are public; this is a framework, not a separately verified trained checkpoint.
