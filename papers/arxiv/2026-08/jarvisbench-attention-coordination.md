# JarvisBench: Always-on Intelligence Between Humans and Agents

## Why It Matters

JarvisBench isolates a coordination layer that can monitor long-running agents while the user is away. It makes scarce human attention an explicit resource: the intermediary must know when a decision belongs to the user and when the workers should continue uninterrupted.

## Proactivity Signal

During ongoing work, Jarvis recognizes a consequential decision that requires user judgment, pauses the worker at an action boundary, asks one focused question, and routes the response back as scoped guidance. The need emerges during execution rather than from an obvious missing field in the initial request, and unnecessary requests are discouraged.

## Evaluation Setup

The benchmark contains 45 agentic task instances across 19 domains: 20 single-agent tasks and 25 workstreams grouped into 10 multi-agent projects. Its agent-collaboration track measures task-score gains, request count, and attention efficiency, while the user-interaction track measures response quality and spoken latency; the reference implementation also provides a full-duplex speech interface.

## Key Limitations

The tasks are selected and adapted from public candidates rather than observed longitudinal user-agent work, and each attention need is designed to be resolved by one concise benchmark decision. Evaluation relies partly on model-based grading, the intervention policy is fixed, and reported latency is entangled with API and speech-serving configurations rather than being a controlled model-speed comparison.

## Use For

Use this for always-on agent supervision, human-attention allocation, escalation policies, single- and multi-agent intervention timing, and systems that must ask for judgment without forcing users to watch every action.
