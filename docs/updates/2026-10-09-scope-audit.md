# Scope correction — 2026-10-09

## Outcome

The October 8 ingestion was over-inclusive. **12 of its 23 papers have been removed**, including their evidence cards and current bibliography, benchmark, application, infrastructure, and website-guide references. **11 papers remain**: seven directly address proactive behavior, its evaluation, or proactive-specific security; four address active clarification or autonomy/consent decisions and are explicitly labeled adjacent.

This correction covers the October 8 batch only, not a retroactive audit of the older collection. It does not question the excluded papers' quality. It narrows this repository's topic. Removed notes remain recoverable from Git history.

## Inclusion rule

A standalone paper needs a central contribution on initiative, need inference, event-conditioned assistance or silence, agent-selected clarification/stopping, direct evaluation of those decisions, or proactive-specific governance/security. General usefulness to a proactive agent is insufficient.

Do not infer proactive assistance from a title, personal-agent architecture, memory improvement, user simulator, streaming/full-duplex interface, internal exploration, compute scheduling, or improved agent reliability alone. Asking during an existing task and deciding whether an action needs permission remain useful adjacent routes; they are not presented as independent discovery of an unsolicited need.

## Retained entries

| Source | Classification | Direct relevance |
|---|---|---|
| [Replannable Dialogue Timelines](https://arxiv.org/abs/2610.05159) | Direct proactive dialogue | Self-initiated exchanges, reconsidered future messages, cancellation, and deliberate silence. |
| [Jarvis](https://arxiv.org/abs/2610.07506) | Direct proactive assistance | Speaks from shared sources when a group fails to resolve an omission or error; tests self-correction silence. |
| [Event-Driven Proactive Robot Assistance](https://arxiv.org/abs/2610.08344) | Direct proactive assistance | Observed human-object events trigger help/no-help reasoning without an inference-time task instruction. |
| [ProactiveCoach](https://arxiv.org/abs/2610.06505) | Direct proactive assistance | Continuously observes task progress and chooses appropriately granular guidance or silence. |
| [ARISE](https://arxiv.org/abs/2610.05964) | Direct proactive interaction | Social context determines whether, when, and what the robot communicates. |
| [InteractionBench](https://arxiv.org/abs/2610.05775) | Direct proactive evaluation | Tests event-triggered output, timing, ongoing updates, and silence on negative and near-miss streams. |
| [Provider-Side Indirect Prompt Injection](https://arxiv.org/abs/2610.05266) | Proactive-specific security | Attack targets proactive recommendation, private-context binding, and offered follow-up assistance. |
| [Beyond Correctness / PlanPool](https://arxiv.org/abs/2610.02739) | Adjacent: active clarification | Agent maintains its own question obligations and decides whether to ask or explicitly drop each one. |
| [Ask, Relax, or Act?](https://arxiv.org/abs/2610.03102) | Adjacent: intervention decisions | Directly contrasts act, clarify, and permitted repair, including cases where intervention is unnecessary. |
| [Learning to Clarify](https://arxiv.org/abs/2610.04719) | Adjacent: active clarification | Acquires missing intent through agent-selected questions under a user-interaction budget and utility objective. |
| [DelegationBench](https://arxiv.org/abs/2610.05532) | Adjacent: consent governance | Matched requested/unrequested actions test act, ask permission, ask information, and refuse. |

## Removed entries

| Source | Why removed from this collection |
|---|---|
| [FORESIGHT](https://arxiv.org/abs/2610.03123) | Anticipatory compute and sampling, not a user-facing initiative policy. |
| [StateWise](https://arxiv.org/abs/2610.05241) | Operational-state repair before execution; main contribution is general agent reliability. |
| [ProactiveVLA](https://arxiv.org/abs/2610.06999) | Self-proposed robot exploration builds memory; not unsolicited assistance or an ask/help/silence policy. |
| [DyaFDB](https://arxiv.org/abs/2610.08125) | Reciprocal full-duplex dialogue evaluation, without a direct need-based proactive-intervention target. |
| [Knowing When Not to Answer](https://arxiv.org/abs/2610.08413) | Primarily latent unanswerability/readiness probes; insufficient direct proactive-assistance focus for this narrowed collection. |
| [ARCS](https://arxiv.org/abs/2610.09396) | Structured text-to-SQL ambiguity resolution; the abstract does not establish an agent-selected intervention policy. |
| [MIMESIS](https://arxiv.org/abs/2610.09484) | General interactive-agent user simulation and training, not a proactive policy or proactive-specific benchmark. |
| [nanoMuse](https://arxiv.org/abs/2610.08699) | Cross-device personal-agent architecture; speak-first aspiration does not establish a concrete proactive mechanism. |
| [Value of Steering](https://arxiv.org/abs/2610.09115) | Trajectory steering improves another agent's execution; not direct human-facing proactive assistance. |
| [DyadMem](https://arxiv.org/abs/2610.03020) | Relational-memory capture, update, recall, and QA; no direct proactive-intervention objective. |
| [PERSIST / SpokenTrace](https://arxiv.org/abs/2610.07725) | Speaker-aware temporal retrieval and latency, not when or whether to initiate assistance. |
| [COOL](https://arxiv.org/abs/2610.09358) | Curiosity-driven ownership memory supports requested robot tasks; no direct user-facing proactive-assistance policy. |

ARCS, DyaFDB, the multi-turn underspecification diagnostic, DyadMem, and SpokenTrace were also removed from the benchmark directory. Five evaluation entries from the original batch remain: Actionable Indeterminacy, DelegationBench, InteractionBench, ProactiveCoach-Bench, and CHI-180-proactive.

## Evidence and verification

Re-screened all 23 primary abstracts and metadata on October 9. These are scope judgments based on each paper's stated main contribution, not full-paper reproducibility reviews. Source URLs above are the primary records; the original scan window and publication-status audit remain in the [historical October 8 record](2026-10-08.md).

After cleanup, the generated catalog contains **199 papers, 180 notes, 77 benchmarks, and 14 projects**. The repository validation includes all five note sections, deduplication, benchmark schema, generated routes, and internal links. The website uses the same cleaned inputs rather than a separate bibliography.

