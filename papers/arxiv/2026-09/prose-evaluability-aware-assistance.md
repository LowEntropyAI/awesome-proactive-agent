# Propose to Learn, Learn to Propose: Evaluability-Aware Assistance under Bounded Rationality

## Why It Matters

This paper adds user evaluability to proactive assistance: a high-value proposal can still be a poor intervention when the user cannot confidently judge it. Proposals therefore serve both as candidate task improvements and as probes that reveal latent preferences and evaluation constraints.

## Proactivity Signal

The assistant chooses edits, plans, or designs to propose before the user specifies the next action. It observes acceptance or rejection, updates its belief about the user's latent response model, and uses that information to choose later proposals rather than optimizing only immediate acceptance.

## Evaluation Setup

The paper formalizes ProSE as a hidden-parameter sequential assistance problem with a bounded-rational binary response model. ProSE-Plan performs depth-2 Bayes-adaptive planning over possible proposal responses; controlled graph simulations compare it with random, value-greedy, threshold, myopic, and evaluability-unaware baselines, with a probe-commit ablation testing the value of informative proposals.

## Key Limitations

Evidence comes from controlled graph simulations and a stylized accept-or-reject user model, not a deployed assistant or human study. A proposal chosen partly for information gain can burden or manipulate users unless exploration is transparent and constrained by consent.

## Use For

Use this for proposal-based proactive assistance, preference learning through interaction, bounded-rational user models, evaluability-aware planning, probe-versus-help trade-offs, and Bayes-adaptive mixed-initiative systems.
