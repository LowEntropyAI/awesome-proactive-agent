# Multimodal Duplex Interaction Agent

[Paper v3](https://arxiv.org/abs/2609.08977v3) · [Code](https://github.com/Omni-Interaction-Gander/Omni-Interaction-Agent) · [Models](https://huggingface.co/Gander-Omni/Gander) · Checked 2026-10-24. Earlier title: *Omni Interaction Agent Technical Report*; same arXiv record, not a new paper.

## Why It Matters

Gander combines low-latency full-duplex interaction with longer-horizon tool-using agency. Its Brain-Cerebellum split is useful for systems that must keep a live conversation flowing while slower reasoning continues asynchronously.

## Proactivity Signal

The streaming interaction model explicitly predicts listen or speak at each chunk. It can initiate engagement, provide intermediate task feedback, ask follow-up questions, use backchannels, or let the user interrupt while a separate reasoning model works.

## Evaluation Setup

Evaluation includes Full-Duplex-Bench v3, spoken conversation, multimodal understanding, and internal human judgments. Interaction timing and tool-task accuracy are separate outcomes. The roughly 36,000 GUI/video agent trajectories describe data construction, not an independent long-horizon execution test.

## Key Limitations

The report acknowledges that no dedicated Omni Interaction Agent benchmark exists, so results combine established benchmarks and subjective demonstrations. Some proactive claims rely on internal human evaluation, and the back-end reasoning component uses a separate frontier model, complicating attribution to the released 9B interaction model.

## Use For

Use this for full-duplex proactive dialogue, asynchronous fast-and-slow agent architectures, speak/listen state control, proactive progress updates, and multimodal tool-use interfaces.

Release audit (2026-10-24): public runtime and training code; ungated Thinker weight shards and Talker weights in the Hugging Face file index. The full training dataset remains marked coming soon. File availability was checked; inference was not run. Long-horizon execution still requires a separately configured Brain provider.
