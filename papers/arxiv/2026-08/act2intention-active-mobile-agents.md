# Act2Intention: A Benchmark For Developing Active Mobile Agents Through Inferring User Intention from GUI Actions

## Why It Matters

Act2Intention extends mobile agents from executing explicit commands to modeling what a user is likely to do next from continuous GUI history. It connects intention understanding, personalized prediction, suggestion, and execution in one benchmark and agent framework.

## Proactivity Signal

The agent observes prior app interactions, predicts the user's next intention before a complete instruction is given, surfaces a proactive suggestion, and executes the selected intention after user confirmation. This preserves a control boundary between inference and action rather than silently acting on a guessed goal.

## Evaluation Setup

Act2Intention Bench contains 72,511 intentions and more than 700,000 actions across 52 mobile apps and 360 personas. It combines consented logs from 90 anonymous phone users with validated generated trajectories, and evaluates intention understanding, personalized prediction, and execution; supervised fine-tuning improves the three reported task metrics over matching non-fine-tuned models.

## Key Limitations

The work does not yet test whether suggestions are useful, timely, or non-intrusive in an in-situ user study. Demographic information for the 90 real users is unavailable, generated trajectories may contain idealized or stereotyped patterns, and generalization to unseen apps, new layouts, and cross-app long-horizon intentions remains open.

## Use For

Use this for proactive mobile-agent benchmarks, next-intent prediction from GUI traces, personalized action suggestions, confirmation-gated execution, and studying the gap between offline intent accuracy and real user acceptance.
