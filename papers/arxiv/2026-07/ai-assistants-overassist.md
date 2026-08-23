# AI Assistants Overassist

## Why It Matters

Int-Bench exposes a failure mode that ordinary task accuracy hides: an assistant can improve the current answer while intervening so early and directly that it reduces productive struggle and does not improve transfer.

## Proactivity Signal

A teacher model watches an unfolding reasoning trace and decides whether, when, and how to intervene or stay silent. The decision is evaluated separately from the content and downstream effect of the intervention.

## Evaluation Setup

Int-Bench contains 1,500 code-debugging, mathematics, and brain-teaser problems. Four LLM teachers intervene in about 90% of standard-monitoring trials at an average relative time of 0.18; full-answer oracle access reduces this to 54% at 0.56. Standard interventions yield a 0.20 net immediate-accuracy gain but do not reliably improve generalization, and LLMs intervene earlier and more directly than humans.

## Key Limitations

The students are LLM simulations, generalization is measured on one immediate related problem, and the study does not capture human motivation, cognitive load, or longer-term learning after repeated interventions.

## Use For

Use this for over-assistance analysis, tutoring intervention policies, assistance content calibration, silence-aware evaluation, and separating short-term correction from human learning.
