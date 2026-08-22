# StreamSoccer: Event-Driven Memory for Streaming Soccer Commentary

## Why It Matters

StreamSoccer frames live commentary as an event-driven streaming problem rather than captioning predefined clips at supplied timestamps. Its event lifecycle provides a compact memory structure for deciding what temporal scope matters as a match continues.

## Proactivity Signal

A rule-assisted scheduler continuously selects current-event commentary, recent-window commentary, historical-memory commentary, or silence. The system can therefore initiate an utterance from the evolving match state or deliberately emit nothing, using only evidence available before the output time.

## Evaluation Setup

The three-track dataset contains 19,641 training, 4,209 validation, and 3,789 test samples with match-disjoint splits, derived from SoccerNet action annotations and MatchTime commentary. StreamSoccer reports CIDEr scores of 38.62, 23.96, and 17.39 for current, recent, and historical commentary, while 174 raw-video runs over 58 source-clean matches evaluate long-history runtime scaling.

## Key Limitations

Operational events and the speaking scheduler are deterministic and rule-assisted rather than learned end to end. The main commentary comparison uses fixed reference anchors, oracle event closure, label-assisted metadata, and a record-readiness intervention, so it does not directly evaluate native speaking decisions; experiments also cover only one soccer data ecosystem without established cross-league, cross-language, or broadcast-style generalization.

## Use For

Use this for proactive streaming commentary, explicit output-versus-silence policies, event-driven video memory, causal multimodal generation, and evaluating long-history efficiency across current, recent, and historical contexts.
