# Interactive Backdoor Attacks in LLM-Based Proactive Dialogue Systems

[Paper](https://arxiv.org/abs/2611.06969) · First posted 2026-11-04 · Checked 2026-11-06. Primary paper and available artifact listings reviewed; no rerun.

## Why It Matters

A system that steers a conversation toward a goal can be steered toward someone else’s goal. The attack surface is the dialogue policy, not a single reply.

## Proactivity Signal

The attacked capability is goal-directed steering in counseling-style dialogue. Poisoned fine-tuning makes an ordinary user phrase switch the system’s steering toward an attacker’s objective over later turns.

## Evaluation Setup

Llama3-8B and Qwen2-7B are fine-tuned with LoRA on two Chinese counseling corpora (PsyDT, PsyDial) containing 100–500 poisoned dialogues. GPT-4o simulates users for 15 turns, and LLMs judge the outcomes. With 500 poisoned dialogues, direct attacks succeed 84–92% of the time on PsyDT and sustained steering reaches up to 92.9%; Qwen3Guard removed under 1% of poisoned dialogues.

## Key Limitations

Simulated users; the authors say the results are not evidence of real-user susceptibility. One domain, an LLM that both builds the poison and judges outcomes, and defenses tested in one setting. The anonymous code link had expired when checked.

## Use For

Threat-modeling the training data of goal-steering assistants.
