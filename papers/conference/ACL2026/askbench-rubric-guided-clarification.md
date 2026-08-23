# When and What to Ask: AskBench and Rubric-Guided RLVR for LLM Clarification

## Why It Matters

AskBench evaluates both trigger quality and question content. It covers cases where the request lacks intent-critical details and cases where answering directly would reinforce a false premise.

## Proactivity Signal

At explicit checkpoints, the model decides whether to answer, ask a targeted clarification, or challenge a misleading premise. A simulated-user loop supplies information only when the model asks appropriately.

## Evaluation Setup

The benchmark contains AskMind for intent-deficient queries and AskOverconfidence for false-premise queries. Rubric-guided reinforcement learning with verifier rewards improves reported final accuracy, rubric adherence, and interaction efficiency, including on unseen domains.

## Key Limitations

The interaction loop and grading depend on model-based simulation and rubrics, so real-user patience and ambiguity resolution may differ. Converting standard QA pairs into dialogues also leaves out open-world tool side effects and long-horizon preference drift.

## Use For

Use this for when-to-ask training, targeted clarification, misconception correction, RLVR for interactive agents, and question-efficiency evaluation.
