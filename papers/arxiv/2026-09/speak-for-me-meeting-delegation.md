# Speak for Me: Giving LLMs the Situational Awareness to Participate in a Meeting

## Why It Matters

Speak for Me studies proactive participation by an agent representing an absent meeting attendee. It makes missed speaking opportunities measurable and decomposes the decision into state tracking, future prediction, intervention control, generation, and feedback-based recalibration.

## Proactivity Signal

After every observed meeting turn, the controller chooses between silence and speaking, and if it speaks, selects which of the absent participant's propositions to surface. The agent must recognize the right conversational floor and contribute without waiting for a direct prompt.

## Evaluation Setup

CAPA is evaluated on 137 AMI meetings with an episode-level whether-when-what protocol centered on the participant's observed idea units. The paper reports reducing the missed-opportunity silence rate from 51.4% to 2.5%, increasing credited recovery from 26.1 to 52.2, and keeping hallucination at 0.6%; schema-constrained judges reach Cohen's kappa of 0.71 with human annotations.

## Key Limitations

The evaluation reconstructs delegation opportunities from meetings in which the represented participant was actually present, rather than studying real absent-user deployment. Lower silence is not automatically better, and the remaining errors shift toward selecting the wrong proposition; social acceptability and privacy also require live-user validation.

## Use For

Use this for speak-versus-silence controllers, meeting-delegation agents, conversational-floor prediction, proposition selection, feedback-based state recalibration, and episode-level evaluation of whether, when, and what an agent contributes.
