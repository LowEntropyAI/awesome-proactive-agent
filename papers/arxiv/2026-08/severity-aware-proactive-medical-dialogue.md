# Beyond Information Seeking: Severity-Aware Question Supervision for Proactive Medical Dialogue

## Why It Matters

The paper shows that the most informative question is not always the safest question. Expected-Severity-Risk (ESR) trains a medical dialogue policy to value questions by how much their possible answers reduce consequence-weighted diagnostic risk.

## Proactivity Signal

Given incomplete patient information, the agent selects and asks the next diagnostic question before seeing its answer. The policy can therefore seek evidence that protects against severe missed diagnoses instead of merely reducing generic uncertainty.

## Evaluation Setup

ESR rankings are distilled into a prefix-only language policy and evaluated on DDxPlus across three Qwen3-4B training seeds. Relative to matched information-seeking supervision, high-severity diagnostic misses fall from 0.0645 to 0.0455, diagnostic accuracy rises from 0.9123 to 0.9320, and the policy asks only 0.14 additional questions per dialogue.

## Key Limitations

The evaluation uses a simulated diagnostic dataset and train-only population statistics rather than clinical deployment. Severity weights, answer distributions, and downstream diagnosis quality may shift across populations, and no real-patient safety or usability study is reported.

## Use For

Use this for risk-sensitive clarification, high-stakes ask policies, value-of-information objectives with unequal error costs, and medical agents where missing a severe condition matters more than minimizing question count alone.
