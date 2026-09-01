# Not Just Reason, Not Just Scan: Reinforcement Learning for Proactive Scientific Error Verification over Academic Paper

## Why It Matters

VERA-RL pushes scientific assistants beyond answering prespecified questions: the model must inspect a paper, decide whether an error exists, assemble evidence, and justify the finding when neither the issue nor the relevant evidence is supplied.

## Proactivity Signal

The Scan setting requires autonomous issue discovery over a full academic paper. The model actively traverses the document and surfaces evidence-backed errors without receiving a target claim or location from the user.

## Evaluation Setup

VERA-13K contains 12,900 samples arranged as 4,300 matched Reason–Verify–Scan chains across six scientific-error categories and broad natural-science domains. Fine-grained rewards target reasoning completeness, evidence alignment, and error precision; training Qwen3-VL-8B reportedly approaches much larger flagship MLLMs on Scan.

## Key Limitations

The benchmark is synthetic or constructed around known error categories and does not establish reliability on newly published science. Autonomous critique also carries a high false-accusation cost, while the abstract does not report deployment-time calibration or expert adjudication at scale.

## Use For

Use this for proactive document inspection, issue-absent verification, scientific-agent training, traceable evidence gathering, and evaluation where finding the problem is part of the task.
