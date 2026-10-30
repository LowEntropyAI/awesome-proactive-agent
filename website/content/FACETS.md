# Recent-paper research lenses

The proactive decision is the entry point, not a fashionable modality or model name. Four independent, overlapping axes support discovery:

1. **Question:** need/intent inference, clarification, timing/silence, anticipation/planning, personalization, boundaries/trust.
2. **Context:** streaming, personal assistance, dialogue/collaboration, digital/mobile work, embodied/robotics, multimodal/wearable. These are overlapping interaction settings, not mutually exclusive devices. Text-only embodied simulation is not physical-robot evidence.
3. **Mechanism:** memory, reasoning/planning, policy learning, runtime/activation. Do not tag memory merely because an LLM has context, or learning merely because a model was evaluated.
4. **Contribution:** a contributed benchmark, human study/judgment, or conceptual framework. Empty is valid: using an existing benchmark does not mean contributing one. Human judgment includes annotations and validation; it does not promise a live deployment study.

`recent-facets.json` is a per-paper editorial mapping grounded in the corresponding `papers/` evidence note and linked primary sources. The stable paper ID maps directly to its note; no title-keyword classifier or model-brand category is used. For example, StreamingJev spans timing, embodied/streaming context, runtime and policy learning; MemoProAgent spans need, timing, personalization, memory and learning; PITCH covers non-streaming conversational timing; OverAct covers authorization boundaries. Streaming membership must agree with the existing audited recent-edition list. A streaming facet is not a claim of a native streaming model; a personal-assistance context is not proof of learning personal preferences.

One option can be selected per axis; active axes intersect. The same paper can carry multiple labels per axis. Counts hold the other axes/search fixed and vary that row. The gallery URL preserves these filters and accepts legacy `lens=streaming`, `lens=clarification`, and `lens=benchmark` links. English and Chinese labels are searchable. Homepage secondary axes are expandable; the full gallery exposes all four.

New entries must have a nonempty proactive-question annotation and all four arrays, with only vocabulary IDs from `facets.mjs`. Unknown, missing, orphan and contradictory streaming assignments fail the build. Add new directions when supported by evidence rather than forcing every new paper into an existing bin. These are evolving editorial lenses, not a claim of a complete field taxonomy. No bibliography entries, first-posted dates or inclusion criteria are changed by this navigation update.
