# MUSE-Autoskill: Self-Evolving Agents via Skill Creation, Memory, Management, and Evaluation

**一句话总结：**
MUSE-Autoskill 把 skills 当作可创建、可记忆、可管理、可测试、可迭代的长期资产，让 agent 在任务执行中生成并复用技能，而不是把技能当成一次性的静态提示文件。

## 1. 研究背景与 Motivation

LLM agent 越来越依赖 skills 来处理复杂任务，但很多自动技能方法只覆盖“生成一个 skill”这一步。现实系统里，skill 生成后还要被保存、检索、调用、验证、积累经验、修正错误，否则很快变成静态且不可靠的文档。作者想解决的矛盾是：skills 被认为是 agent 能力扩展的核心抽象，但现有系统缺少完整生命周期管理。

## 2. 核心问题定义

* **输入是什么：** 用户任务、agent 执行过程中的历史、已有 SkillBank，以及必要的工具环境。
* **输出是什么：** 最终任务结果，以及可能新增或更新的 skill package。
* **系统需要学会什么：** 在任务中判断是否需要创建技能，如何复用已有技能，如何为每个技能积累经验，并通过测试和运行反馈持续改进。
* **评价重点是什么：** 任务准确率、技能带来的提升、自动生成技能的覆盖和质量、跨 agent transfer，以及技能生成/使用成本。

## 3. 方法概述

1. **统一 skill lifecycle：** MUSE 把 creation、memory、management、evaluation、refinement 放进同一个 agent loop，避免技能生成和实际使用脱节。
2. **运行时 skill_create：** agent 可以在解决任务时根据上下文创建技能，生成 `SKILL.md`、脚本、测试和资源，而不是离线凭空写技能。
3. **Skill-level memory：** 每个技能都有自己的经验记忆，记录跨任务使用中的成功、失败和注意点，让后续调用更有上下文。
4. **评估与 refinement：** 技能不是写完就算，通过 unit tests 和运行反馈检测可靠性，失败时触发修正。
5. **结构化上下文管理：** 通过短期、长期、技能级 memory 和压缩机制，减少长任务中平铺历史导致的上下文膨胀。

## 4. 主要贡献

1. **系统设计贡献：** MUSE 把 skill 从“可选提示材料”提升为 agent 的长期基础设施，强调生命周期而不是单点生成。
2. **记忆贡献：** skill-level memory 很重要，因为同一个技能在不同任务中的经验不应混在全局对话历史里。
3. **可靠性贡献：** 通过 unit tests 和 runtime feedback 让技能可验证、可迭代，缓解自动生成技能静态、不可控的问题。
4. **迁移发现：** 自生成技能能转移到 Hermes 等不同 agent，说明技能确实外化为可读知识资产，而不只是 MUSE 的内部行为残留。

## 5. 实验与结果说明

作者在 SkillsBench 的 51 个真实任务上评估，任务覆盖 science & engineering、data analysis、document processing、ops & planning，并用 Docker verifier 自动判分。三个 agent 都用 GPT-5.5 作为 backbone，因此差异主要来自 agent 系统设计。

结果显示，human skills 对所有 agent 都有稳定提升：MUSE-Autoskill 从 53.19% 提升到 68.40%，Codex 从 52.11% 到 67.28%，Hermes 从 47.89% 到 61.21%。自动生成技能方面，MUSE 在 35/51 个任务中成功生成技能；全 51 任务平均从 53.19% 提升到 60.35%，而在成功生成技能的 35 个任务上 Phase 2 accuracy 达到 87.94%。这说明生成技能质量很高，但覆盖率仍是瓶颈。

跨 agent transfer 更能说明价值：把 MUSE 生成的技能直接注入 Hermes，Hermes 从 47.89% 提升到 58.40%，关闭了到 human-skill Hermes 的 79% 差距。成本上，生成技能一次性约 383K tokens、164 秒；之后使用生成技能比使用 human skill 更省 turns 和 tokens，说明生命周期管理有长期摊销价值。

## 6. 这篇论文的关键 insight

* Skill 的价值不在“生成一次”，而在之后能不能被测试、积累经验、复用和转移。
* 自动生成技能的主要瓶颈可能不是技能质量，而是 agent 先成功解决任务并抽取技能的覆盖率。
* 可迁移的 skill 应该是外部资产：人能读，别的 agent 能用，失败后能修。

## 7. 局限性与可改进点

* **覆盖率瓶颈明显：** 51 个任务里只有 35 个能生成技能，说明系统仍依赖 agent 无技能状态下先跑出成功轨迹。
* **Benchmark 规模有限：** SkillsBench 的 51 个任务能展示真实工作流，但不足以证明开放域长期使用中的稳定性。
* **技能质量评估仍偏任务完成：** unit tests 和 verifier 有用，但还没有充分覆盖安全性、隐私、用户偏好和副作用。
* **生成成本较高：** 一次技能生成约 383K tokens，适合高复用场景；低频任务未必划算。

## 8. 对我研究的启发

MUSE 对 proactive agent 的启发是：主动能力可以沉淀成 skill lifecycle。一个 proactive GUI agent 可以在反复处理相似软件流程后主动创建技能，在每次调用后更新 skill-level memory，并在失败时自动补测试或修脚本。对 robotics 来说，技能也可以是“操作策略 + 传感器条件 + 安全检查 + 失败恢复”的包，而不是单纯动作序列。

新的 research question 可以是：如何让 agent 主动发现“值得技能化”的重复行为？也就是从 memory 中识别高复用、高成本、高失败率的工作流，并自动提出创建、合并或废弃 skill。

## 9. 汇报用精简版

**论文想解决的问题：**
现有自动技能方法常把 skill 当成一次性生成物，缺少记忆、管理、评估和持续改进，导致技能复用性和可靠性不足。

**核心方法：**
MUSE-Autoskill 在 agent loop 中集成 skill creation、skill-level memory、skill management、unit-test evaluation 和 refinement，让技能成为长期可维护资产。

**主要贡献：**

1. 提出完整 skill lifecycle，而不是单点 skill generation。
2. 引入 skill-level memory，让每个技能积累跨任务经验。
3. 证明自生成技能可跨 agent transfer，具有外部知识资产属性。

**实验结论：**
在 SkillsBench 上，MUSE with human skills 达到 68.40%；自生成技能全任务平均提升到 60.35%，在成功生成的 35 个任务上达到 87.94%；注入 Hermes 后带来 +10.51% 提升。

**我的理解/评价：**
这篇论文适合和 SKILL0 对照读：MUSE 关注外部技能资产如何长期演化，SKILL0 关注技能如何内化到模型参数。proactive agent 可能需要两者结合，稳定流程技能化/内化，用户偏好和安全边界保持外部可控。

## Keywords

`Agent Skills` · `Self-evolving Agent` · `Skill Memory` · `Skill Evaluation` · `Cross-agent Transfer`
