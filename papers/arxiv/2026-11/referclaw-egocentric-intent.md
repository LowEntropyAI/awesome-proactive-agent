# ReferClaw: Disambiguating User Intent for Egocentric Assistance

[Paper](https://arxiv.org/abs/2611.07683) · First posted 2026-11-05 · Checked 2026-11-06. Primary paper and available artifact listings reviewed; no rerun.

## Why It Matters

Short questions to a wearable assistant, such as “Where did I leave it?”, often have several plausible referents in the video history.

## Proactivity Signal

For a question already asked, a controller decides whether a clarifying question is worth the user’s effort, and skips asking when the history already settles the referent.

## Evaluation Setup

Augmented BuddyVQA (6,240 test inputs, 1,197 ambiguous) and EgoBlind with intent labels; an LLM simulator answers the questions in the main results. Frozen ReferClaw reaches 66.2% accuracy against 58.5% for Clarify-or-Answer and asks on 4.1% of well-specified inputs. In a 10-person study it identified the intended referent on 80.0% of held-out examples against 70.0%.

## Key Limitations

Online learning receives the annotated target after each answer, feedback unlikely in deployment. Main results use a simulated user and an LLM judge, and the human study is small. Code and annotations are promised upon acceptance.

## Use For

Cost-aware clarification over egocentric video history.
