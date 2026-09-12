# Ask Before You Optimize: Dynamic Pre-Formulation Clarification for Interactive Optimization

## Why It Matters

This work shows that an optimization agent should not silently turn an incomplete business request into a mathematical program. It treats readiness to model as a selective decision and distinguishes diagnosing missing formulation requirements from choosing the next clarification question.

## Proactivity Signal

InterOPT maintains a ledger of unresolved formulation-critical gaps and repeatedly decides whether to ask another question or declare `READY_TO_MODEL`. It must recover missing objectives, constraints, or assumptions while avoiding both premature stopping and unnecessary questioning.

## Evaluation Setup

OR-Clarify contains 100 source-grounded optimization cases and 178 hidden slots, including 75 blocking P0, 83 substantive P1, and 20 secondary P2 requirements. Open-ended and choice-based protocols measure exact slot recovery, premature or excessive stopping, silent assumptions, question count, and interaction cost; InterOPT uses dynamic gap search followed by gap-guided action selection.

## Key Limitations

The benchmark uses structured hidden slots and a simulated user under a bounded interaction protocol. Results therefore test pre-formulation completeness more directly than end-to-end optimization quality, and the gap ledger can miss an uncertainty or retain issues that do not justify another question.

## Use For

Use this for proactive clarification before planning, readiness-to-proceed policies, ask-versus-stop decisions, persistent uncertainty ledgers, silent-assumption audits, and benchmarks that weight missing requirements by severity.
