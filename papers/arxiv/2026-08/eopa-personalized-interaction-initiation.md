# Preference-Driven Online Adaptation for Personalized Interaction Initiation in Proactive AI Assistants

## Why It Matters

EOPA targets a central proactive-agent problem: the same moment may warrant an intervention for one user and silence for another. It learns these timing preferences online without repeatedly fine-tuning an LLM or asking an LLM to reason at every polling step.

## Proactivity Signal

At each user-state poll, the method fuses temporal preference anchors with activity prototypes and explicitly chooses `INTERACT` or `SILENT`. User feedback updates the evidence carriers and decision threshold; response generation is invoked only after the trigger fires.

## Evaluation Setup

Experiments use a ProPerSim-based benchmark with online feedback. EOPA improves interaction-timing F1 by 19.80 points over the strongest reported baseline and reduces average daily adaptation time from 11.41 seconds to 0.39 seconds while also lowering inference latency.

## Key Limitations

The evidence is simulation-based rather than a longitudinal deployment with real users. The state is represented by time and textual activity descriptions, leaving multimodal perception errors, preference drift, consent, and response quality under real-world conditions unresolved.

## Use For

Use this for personalized intervention timing, efficient always-on triggers, online preference adaptation, silence-aware policies, and decoupling a lightweight trigger from LLM response generation.
