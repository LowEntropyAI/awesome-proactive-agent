# Full-Duplex Speech Models Take the Floor When Asked, Not When Needed

## Why It Matters

This paper isolates a core failure in always-on speech assistants: current models take the floor when explicitly addressed or after silence, but rarely when conversation content itself creates a need to intervene. It separates conversational opportunity from intervention reason.

## Proactivity Signal

The evaluation checks whether a model self-selects to speak when it hears a false fact, a missing word, or a hazard, even though nobody directly asks it a question.

## Evaluation Setup

Context-matched English monologues vary only the trigger utterance across 10 turn-allocation conditions, with compressed pauses to reduce accidental floor opportunities. Across five model families, false-fact challenges occur in only 14–15% of non-empty replies and hazard warnings in 4–7% when Moshi or PersonaPlex is given the floor.

## Key Limitations

The protocol is English-only, uses controlled monologues, and measures a limited set of social and safety triggers. It diagnoses model behavior but does not train or validate a better intervention policy with users.

## Use For

Use this for speak-versus-silence benchmarks, full-duplex intervention timing, hazard warning evaluation, false-fact correction, and separating floor access from genuine proactive need.
