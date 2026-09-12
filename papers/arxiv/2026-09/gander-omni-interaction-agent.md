# Omni Interaction Agent Technical Report

## Why It Matters

Gander combines low-latency full-duplex interaction with longer-horizon tool-using agency. Its Brain-Cerebellum split is useful for systems that must keep a live conversation flowing while slower reasoning continues asynchronously.

## Proactivity Signal

The streaming interaction model explicitly predicts listen or speak at each chunk. It can initiate engagement, provide intermediate task feedback, ask follow-up questions, use backchannels, or let the user interrupt while a separate reasoning model works.

## Evaluation Setup

One checkpoint is evaluated across full-duplex tool use, spoken conversation, omni understanding, and agentic workflows. Reported tests include timing-sensitive take-turn and interruption metrics, 2,052 spoken utterances, 4,369 audiovisual questions, roughly 36,000 GUI/video agent trajectories, and internal human evaluation of real-world interaction cases.

## Key Limitations

The report acknowledges that no dedicated Omni Interaction Agent benchmark exists, so results combine established benchmarks and subjective demonstrations. Some proactive claims rely on internal human evaluation, and the back-end reasoning component uses a separate frontier model, complicating attribution to the released 9B interaction model.

## Use For

Use this for full-duplex proactive dialogue, asynchronous fast-and-slow agent architectures, speak/listen state control, proactive progress updates, and multimodal tool-use interfaces.
