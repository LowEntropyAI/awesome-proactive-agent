# SKILL0: In-Context Agentic Reinforcement Learning for Skill Internalization

**一句话总结：**
SKILL0 把 agent skills 从“推理时检索并塞进上下文的外部提示”转化为“训练时逐步撤掉脚手架后沉淀到模型参数里的能力”，从而让 agent 在零技能提示的推理阶段仍能执行复杂多步任务。

## 1. 研究背景与 Motivation

Agent skills 已经成为增强 LLM agent 的常见方式：把任务经验、工具调用流程或领域策略写成可复用文件，在推理时检索并注入上下文。但这种 skill augmentation 有三个硬伤：检索会引入噪声，长技能会吃掉上下文窗口，模型本身并没有真正学会这些行为。作者真正想解决的矛盾是：skills 很有用，但如果 agent 永远靠读提示来执行 skill，它就很难成为轻量、稳定、可迁移的自主策略。

## 2. 核心问题定义

* **输入是什么：** 一个任务指令、环境观测历史，以及训练阶段可用的技能库。
* **输出是什么：** agent 在交互环境中执行的一系列动作，最终完成任务。
* **系统需要学会什么：** 训练时利用 skill 提供结构化指导，逐步把工具调用、多轮决策和任务策略内化到模型参数中；推理时不再依赖 skill 检索。
* **评价重点是什么：** skill-free inference 下的任务成功率和每步上下文 token 成本，而不是只看带 skill prompt 时的表现。

## 3. 方法概述

1. **In-Context Reinforcement Learning：** 训练 rollout 中允许模型看到技能上下文，让 RL 初期不至于盲目探索；但这些技能只是训练脚手架，目标是最终撤掉它们。
2. **技能分组与紧凑视觉上下文：** 作者把 SkillBank 按任务和类别离线组织，并把技能与交互历史渲染成较紧凑的上下文，降低直接塞长文本的成本。
3. **Dynamic Curriculum：** 不按固定时间表删除技能，而是估计每个 skill 对当前 policy 的 on-policy helpfulness；只有当模型已经不再明显受益时，才逐步撤掉对应 skill。
4. **预算退火：** 技能可用数量从多到少，最后变成 0，强迫模型完成从“跟着说明做”到“自己会做”的迁移。
5. **零技能推理：** 推理阶段不检索、不注入技能，只保留很小的环境上下文，因此可以检验能力是否真的内化。

## 4. 主要贡献

1. **技术贡献：** 它把 skill internalization 明确建模成训练目标，而不是继续优化 skill retrieval。这一点把问题从“如何找到更相关的技能”推进到“如何让模型不再依赖外部技能”。
2. **训练范式贡献：** ICRL 提供了一种中间路线：训练时用 skill 降低探索难度，推理时撤掉 skill 保持轻量，避免了纯 RL 难学和纯提示依赖重的两端问题。
3. **课程机制贡献：** Dynamic Curriculum 用当前策略是否仍受益来决定撤哪些技能，比固定退火更贴近“模型学会了再撤”的过程。
4. **实验发现：** skill 的作用在训练中呈现先升后降，说明好的 skill 更像短期脚手架，而不是应该永久留在上下文里的外挂。

## 5. 实验与结果说明

作者在 ALFWorld、Search-QA 和 WebShop 上评估 SKILL0，并和 zero-shot、few-shot skill prompting、GRPO、AgentOCR、EvolveR、SkillRL 等方法比较。核心结果不是“带技能更强”，而是 **不带技能推理也更强**：SKILL0 相比标准 RL 基线在 ALFWorld、Search-QA、WebShop 上分别有约 +9.7、+6.6、+10.1 的提升，同时每步上下文低于 0.5k tokens。

Ablation 说明 Dynamic Curriculum 很关键。完整的 Filter-Rank-Select 在 ALFWorld 的无技能推理达到 87.9%，而去掉过滤会引入噪声，随机选择技能下降更明显。固定保留全部技能在推理撤掉时会崩，说明一直喂 skill 会造成依赖；逐步撤除反而能让模型形成更稳的内部策略。

局限也比较直接：SKILL0 依赖初始 SkillBank 的质量，而且离线技能分组换到新领域时需要重新组织。也就是说，它解决的是“如何内化已有技能”，还没有完全解决“技能从哪里高质量、低成本地产生”。

## 6. 这篇论文的关键 insight

* Skill 不一定应该永远被检索和注入；在很多 agent 场景里，它更适合作为训练时的 curriculum。
* 如果训练和推理的上下文结构差别很大，模型容易学会“读技能”，而不是学会“做任务”。
* 评价 skill agent 时必须单独看 skill-free inference，否则很难区分外部提示收益和模型真实能力提升。

## 7. 局限性与可改进点

* **初始技能库依赖强：** 如果 SkillBank 本身质量差、覆盖不足或分类混乱，课程学习也只能内化错误或片面的策略。
* **新领域迁移成本高：** 离线 relevance-driven grouping 需要重新分区，说明方法还没有完全自动化地适应开放域任务。
* **参数内化不易更新：** 一旦技能被写进模型参数，后续纠错、删除或个性化更新比外部 skill 文件更难，这对持续学习和安全控制很重要。
* **评测环境仍偏标准化：** ALFWorld、Search-QA、WebShop 能验证多步和工具行为，但还不能完全代表真实 GUI、移动端或长期个人助理里的非平稳偏好。

## 8. 对我研究的启发

这篇论文对 proactive agent 很有启发：主动能力不一定只靠推理时 planner 决定，也可以通过训练把常见的主动策略内化成默认行为。对于 GUI agent，可以把“何时检查状态、何时调用工具、何时向用户确认”做成训练期 skill scaffold，再逐步撤掉，训练出低上下文成本的 proactive policy。对于 robotics 或 embodied agent，类似思路也可以用于把专家演示、操作规程或安全约束从外部提示转成内部控制策略。

一个值得追的问题是：能不能把 SKILL0 和可编辑外部记忆结合起来，让稳定技能内化到参数，而用户偏好、隐私规则和临时约束保留在外部可控 memory 中？

## 9. 汇报用精简版

**论文想解决的问题：**
现有 agent skills 多数在推理时检索并注入上下文，带来噪声、token 成本和提示依赖；作者想让模型真正学会 skill，而不是每次都读 skill。

**核心方法：**
训练时用 skill 作为上下文脚手架进行 RL，再通过 Dynamic Curriculum 根据 skill helpfulness 逐步撤掉技能，最后实现 skill-free inference。

**主要贡献：**

1. 把 skill internalization 明确提出为 agent 训练目标。
2. 用 ICRL 在“纯 RL 难探索”和“skill prompting 过依赖”之间建立过渡。
3. 通过 helpfulness-driven curriculum 证明技能应当逐步撤除，而不是永久注入。

**实验结论：**
在 ALFWorld、Search-QA、WebShop 上，SKILL0 的无技能推理显著强于 RL 和 skill-augmented baselines，并且上下文成本低于 0.5k tokens/step。消融显示随机或无过滤地保留技能会造成噪声和依赖。

**我的理解/评价：**
这篇论文的价值在于把 skills 从“推理外挂”重新定位为“训练脚手架”。对 proactive / GUI agent 来说，它提示我们可以训练模型把常见主动策略内化，而把动态偏好和安全边界留给外部可控记忆。

## Keywords

`Agent Skills` · `Skill Internalization` · `Agentic RL` · `Curriculum Learning` · `Zero-shot Inference`
