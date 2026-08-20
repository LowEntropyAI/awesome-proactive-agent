# MOSS-VL Technical Report

## Why It Matters

MOSS-VL treats real-time visual interaction as a speak-or-wait policy rather than repeated video question answering. Its architecture and training recipe show how a streaming model can keep perceiving while it responds and revise an answer when later frames invalidate earlier evidence.

## Proactivity Signal

At every incoming frame, MOSS-VL independently decides whether to speak or emit a silence state. It can trigger an unprompted response when a standing visual condition occurs, remain silent when the event never happens, and revise an active response as the scene changes.

## Evaluation Setup

The 11.3B-parameter real-time model is trained with a synthesized interaction corpus that includes speak, silence, and revision decisions. Evaluation covers four streaming benchmarks; MOSS-VL reports the best average on three among the compared open streaming models and scores 66.0 on OmniMMI Proactive Alerting versus 37.5 for the strongest reported baseline, alongside serving-latency measurements and live demonstrations.

## Key Limitations

The proactive behaviors are installed largely through synthesized data and evaluated on existing benchmark subsets or scripted standing instructions. The live evidence is qualitative rather than a longitudinal user deployment, so false-alert burden, social appropriateness, robustness to open-world streams, and user control over persistent observation remain unresolved.

## Use For

Use this for real-time multimodal assistants, frame-level speak-or-silent policies, proactive visual alerts, streaming response revision, and training models that must perceive continuously while deciding whether to communicate.
