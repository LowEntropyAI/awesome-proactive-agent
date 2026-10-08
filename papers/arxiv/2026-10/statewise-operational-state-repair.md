# StateWise: Diagnosing and Repairing Persistent Operational State Before Agent Actions

[Primary source](https://arxiv.org/abs/2610.05241) · Checked 2026-10-08 · arXiv preprint. Review depth: abstract and arXiv metadata; no experiments rerun.

## Why It Matters

An action can be reasonable under a stale stored belief yet wrong in the current environment. Persistent operational state needs verification before it controls execution.

## Proactivity Signal

Counterfactual replanning identifies decision-critical records. StateWise verifies world facts read-only or clarifies developer intent, applies typed repairs with lineage, then replans and independently checks the state-action pair.

## Evaluation Setup

On 150 executable coding cases, the abstract reports 93.3% correctness versus 38.7% for the comparison condition, with no unsafe actions observed in the evaluated cases.

## Key Limitations

The controlled coding cases do not establish zero risk outside the benchmark. Repairing world facts and obtaining authority to change developer intent are distinct operations.

## Use For

Use for pre-action state validation, stale-memory diagnosis, repair provenance, and permission-preserving execution.

