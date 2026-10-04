# Contributing to Proactive Atlas

Help keep the collection useful, traceable, and easy to maintain. Bibliographic content and the LowEntropyAI website share the same Markdown sources.

## Add or correct a paper

1. Check `README.md` for the title and canonical source URL to avoid duplicates.
2. Confirm a user-facing proactive decision: infer an unstated need, choose an intervention moment, ask, suggest, remind, act, or deliberately stay silent. Describe the actual decision and its evaluation.
3. Add a row under the best-fitting `## Papers` section using the existing five-column schema: date, title, venue/source, tags, resources. Use existing tags from the vocabulary.
4. Preserve publication uncertainty: a submission, preprint, repository claim, and verified conference acceptance are distinct statuses.
5. Add a note under `papers/arxiv/YYYY-MM/` or `papers/conference/VENUE/`. Use the exact headings `Why It Matters`, `Proactivity Signal`, `Evaluation Setup`, `Key Limitations`, and `Use For`. Ground results in primary sources and state evaluation limits.
6. Link the note from the paper's README row using `[Notes](papers/.../note.md)` or the existing Notes badge format.
7. Update `RESEARCH_MAP.md`, `BENCHMARKS.md`, or `STREAMING.md` when the work adds a useful research route or evaluation target.

For a benchmark, keep all nine columns in `BENCHMARKS.md`. Do not compare scores across incompatible datasets, hardware, protocols, or timing boundaries.

## Add a project

Use `PROJECTS.md`. Record what triggers the assistant, what context it sees, what user-facing behavior it chooses, release/access status, evidence boundaries, canonical links, and checked date. Distinguish a memory/capture/serving component from a complete proactive assistant.

## Place a resource in the collection

Use [Applications](APPLICATIONS.md) and [Personal Agents](PERSONAL_AGENTS.md) for selective reading routes. A paper keeps its canonical metadata in the README; projects keep implementation/access facts in PROJECTS; streaming mechanisms stay in STREAMING; benchmark protocols stay in BENCHMARKS. Link between these views instead of copying full records.

Record application, device/modality, decision mechanism, and resource type separately. Do not infer personalization from a camera interface or learned proactivity from a scheduler. Include supporting components through [Infrastructure](INFRASTRUCTURE.md) with their specific role. A model may support personal interaction without being a complete personal assistant. The [restructuring design](docs/RESTRUCTURE_PLAN.md) defines the scope and staged data plan.

## Verify

```sh
npm ci
npm run check
git diff --check
```

Preview website changes with `npm run dev`. Verify desktop and mobile reading layouts and relevant interactions. See [WEBSITE.md](WEBSITE.md) for architecture and deployment.
