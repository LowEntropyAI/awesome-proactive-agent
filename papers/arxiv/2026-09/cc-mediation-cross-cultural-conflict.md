# CC-Mediation: Evaluating Large Language Models for Cross-Cultural Conflict Mediation

## Why It Matters

CC-Mediation evaluates proactive social intervention through its downstream effect rather than only whether a response sounds helpful. It separates the decision of when to enter a conflict from the choice of mediation strategy and measures whether intercultural improvement persists after the intervention.

## Proactivity Signal

While observing a multi-turn cross-cultural conflict, the model must identify an appropriate intervention point and generate a culturally grounded mediation response. Remaining silent, intervening too early or late, and choosing an ineffective strategy produce different failure modes.

## Evaluation Setup

The benchmark contains 1,661 ten-turn dialogues grounded in the Developmental Model of Intercultural Sensitivity, split into 1,503 training and 158 evaluation instances. Trajectory AUC measures persistence of post-intervention improvement, while signed Wasserstein-1 distance measures the magnitude and direction of stance change; the analysis also isolates positional-prior timing errors and late-layer strategy-elicitation collapse.

## Key Limitations

The dialogues and mediator turns are constructed within one cultural-development theory, so coverage of real conflict dynamics and alternative mediation theories remains uncertain. Downstream stance metrics correlate with human judgment but do not replace live studies of consent, social legitimacy, or harm from unwanted intervention.

## Use For

Use this for proactive mediation, when-and-how intervention benchmarks, persistent outcome metrics, culturally grounded dialogue agents, and analyses that separate timing failure from response-strategy failure.
