# Knowing When to Yield: Grounded Arbitration of User Corrections in Text-Based Embodied Agents

## Why It Matters

The paper studies a difficult form of mixed initiative: a person corrects an agent, but the correction itself may be wrong. Blind compliance and automatic rejection are both unsafe.

## Proactivity Signal

GAVA chooses among accepting, rejecting, inspecting the environment, and asking the speaker using observation-bounded evidence and a one-step expected-loss rule.

## Evaluation Setup

In text-only ALFWorld, 162 checkpoints yield 972 paired true and false interventions. Complete local inspection establishes 100% correction accuracy for both GAVA and always-verify; a frozen semantic-prior policy reduces declared interaction and joint costs on held-out cohorts while making four factual errors in each cohort and completing every task.

## Key Limitations

The study uses symbolic observations, controlled speakers, normalized claims, and declared costs. It does not evaluate humans, visual perception, or physical robots, and the matched comparison does not establish a general value-of-information advantage over clarification.

## Use For

Use this for mixed-initiative correction, accept-versus-verify arbitration, grounded clarification, cost-sensitive information gathering, and resisting confidently wrong user feedback.
