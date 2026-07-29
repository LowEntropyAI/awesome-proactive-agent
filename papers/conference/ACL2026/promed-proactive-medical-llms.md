# ProMed: Shapley Information Gain Guided Reinforcement Learning for Proactive Medical LLMs

## Why It Matters

ProMed gives proactive medical questioning an explicit information-value objective, addressing the unsafe tendency of medical LLMs to answer before enough patient information has been gathered.

## Proactivity Signal

Given a partial case and dialogue history, the model chooses the next clinically valuable question or decides that it has enough evidence to produce a final answer. Shapley Information Gain rewards questions by their marginal clinical utility.

## Evaluation Setup

The two-stage pipeline uses search-generated supervision followed by reinforcement learning on partial-information versions of MedQA and CMB. The paper reports a 6.29% average improvement over the strongest comparison and a 54.45% gain over the direct reactive paradigm.

## Key Limitations

Patients are simulated and evaluation is benchmark-based rather than clinical. Better question selection and answer scores do not establish medical safety, calibration, or suitability for autonomous deployment.

## Use For

Use this for value-of-information questioning, proactive clinical dialogue research, credit assignment for clarification, and high-stakes ask-before-answer policies.
