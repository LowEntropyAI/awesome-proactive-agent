# ProEvent: An Event-centric Benchmark for Proactive Agents

## Why It Matters

ProEvent isolates event maintenance as a core proactive-assistant capability: extracting future commitments from ongoing chats, tracking changes or cancellations, and acting at the appropriate later moment.

## Proactivity Signal

The agent observes concurrent instant-messaging threads, infers explicit and implicit upcoming events, updates a timetable as conversations evolve, and decides when to respond or remind without receiving a direct event-management command.

## Evaluation Setup

The benchmark uses synthesized but realistic multi-thread chats with concurrent users and noise. It evaluates response timing plus single-step and multi-step correctness across eight LLMs and agent pipelines; tested systems frequently overact and struggle with event cancellation.

## Key Limitations

The conversations are synthetic and the task centers on timetable maintenance rather than broader assistance. Success on this benchmark does not establish real-world notification acceptance, calendar integration, privacy handling, or long-term trust.

## Use For

Use this for proactive event tracking, reminder timing, cancellation handling, first-person intent reasoning, multi-thread dialogue state, and benchmarks that penalize over-action.
