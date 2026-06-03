# MemEye: A Visual-Centric Evaluation Framework for Multimodal Agent Memory

**一句话总结：**
MemEye 用“视觉证据粒度”和“记忆推理深度”两条轴重新评估多模态长期记忆，证明当前 agent memory 仍难以保留细粒度视觉证据并追踪随时间变化的视觉状态。

## 1. 研究背景与 Motivation

多模态 agent 越来越需要跨会话记住图像、界面、环境和用户状态，但很多现有 memory benchmark 的视觉问题其实能靠 caption 或对话文本猜出来。这样会掩盖一个关键问题：agent 是否真的保存了原始视觉证据，尤其是小物体、OCR、材质、空间关系和状态变化。作者要解决的是评测错位：我们以为在测 multimodal memory，实际常常只是在测文本摘要和检索。

## 2. 核心问题定义

* **输入是什么：** 多轮、多会话的图文交互历史，包含生活场景图片、对话和后续问题。
* **输出是什么：** 多选答案或开放式回答，并给出基于历史视觉证据的判断。
* **系统需要学会什么：** 保留不同粒度的视觉证据，检索相关历史，并在状态更新、冲突或跨场景关联中进行推理。
* **评价重点是什么：** 问题是否真的需要原图；模型是否能处理从 scene-level 到 pixel-level 的证据，以及从单证据检索到 evolution synthesis 的记忆推理。

## 3. 方法概述

1. **二维评估框架：** X 轴表示 decisive visual evidence 的粒度，从场景级到像素/OCR/实例绑定；Y 轴表示 memory reasoning depth，从单证据检索到跨时间状态综合。
2. **MemEye benchmark：** 构建 8 类生活场景任务、221 个 sessions、848 个 rounds、438 张图片、371 个问题，并为每个问题提供多选和开放回答两个版本。
3. **验证门控：** 用 answerability、shortcut resistance、visual necessity、reasoning structure 等检查减少文本捷径，确保问题确实依赖视觉证据。
4. **多 memory 方法对比：** 评估 13 种 memory 方法，覆盖 text-only 与 multimodal memory，并在 4 个 VLM backbone 上检查泛化。
5. **诊断而非排名：** 结果按二维矩阵分析，重点定位 failure mode，而不是只给一个总分榜单。

## 4. 主要贡献

1. **Benchmark 贡献：** MemEye 针对“视觉不可替代性”设计，比 LoCoMo、MMRC、Mem-Gallery 等更能避免 caption shortcut。
2. **评测框架贡献：** X/Y 二维矩阵把“看得多细”和“怎么用记忆”拆开，让研究者能判断失败来自视觉压缩、检索路由还是时间状态推理。
3. **实验发现：** text memory 更擅长组织状态和更新，但容易丢细节；image memory 保留证据更好，却不一定知道哪个状态是最新、有效的。
4. **方向贡献：** 它把 multimodal agent memory 的核心从“存更多上下文”转向“证据路由、时间追踪、细节抽取”。

## 5. 实验与结果说明

作者比较 full-context、retrieval、reflection、Generative Agents、MemOS、A-Mem、MIRIX、MMA、M2A 等文本或多模态 memory 方法。主结果显示当前系统远未饱和：在 gpt-5.4-mini backbone 下，SRAG(V) 的整体开放式 LLM-Judge 约 0.4937，多选 EM 约 0.6177，是最强方法之一，但仍在高视觉粒度和高推理深度区域明显掉分。

诊断结果说明两个压力源相互叠加：低 X 的场景级问题可以通过更详细 caption 缓解；高 X 的实例绑定、细纹理、OCR 和像素级属性即使用任务感知 caption 仍有视觉流优势。Y 轴方面，即使提供 oracle clue rounds，Y1 到 Y3 的性能仍下降，说明难点不只是检索不到，而是状态更新和演化推理本身困难。

Ablation 还显示，混入更多无关记忆时，简单扩大上下文并不等于更好；长期多模态记忆需要能过滤无关历史，同时保留关键视觉细节和时间权威性。

## 6. 这篇论文的关键 insight

* 视觉 memory 的核心不是“有没有图片”，而是后续问题需要的 decisive evidence 是否被保留下来。
* Caption 可以覆盖很多 scene/region 级信息，但在实例绑定、细粒度属性和状态演化上仍会丢失关键证据。
* 多模态长期记忆必须同时解决 evidence routing 和 temporal authority：找对证据，还要知道哪个证据仍然有效。

## 7. 局限性与可改进点

* **仍是诊断 benchmark：** 场景、模型面板、caption pipeline 和人工验证样本不能覆盖所有真实部署。
* **部分数据是生成/渲染的：** 这有利于控制变量，但真实用户图像、噪声、隐私约束会更复杂。
* **比较受实现影响：** 不同 memory architecture 的 encoder、检索器和压缩策略会影响结果，因此不宜把排行榜当绝对结论。
* **隐私风险更突出：** 更强的视觉长期记忆会保存个人环境和状态变化，必须和 consent、删除、最小化存储、访问控制一起设计。

## 8. 对我研究的启发

如果研究 proactive / GUI agent，MemEye 的启发非常直接：agent 要主动帮助用户，必须记得屏幕、文件、视觉状态和变化，但不能只把图像压成 caption。GUI agent 可以借鉴它的二维评估，把任务拆成“视觉证据粒度”和“状态演化深度”，专门测试 agent 是否记住按钮位置、表格值、窗口状态、错误提示，以及这些状态是否被后续操作覆盖。

对于 robotics，也可以把 X 轴扩展为物体姿态、材质、接触关系，Y 轴扩展为环境状态变化和长期任务进度。一个有价值的新问题是：如何设计 proactive memory，在用户还没问之前就主动维护可能未来会用到的高粒度视觉证据，同时遵守隐私和存储预算？

## 9. 汇报用精简版

**论文想解决的问题：**
现有多模态 memory benchmark 很多问题可由 caption 或文本上下文回答，无法判断 agent 是否真的保留了细粒度视觉证据和视觉状态变化。

**核心方法：**
MemEye 用视觉证据粒度 X 轴和记忆推理深度 Y 轴构建评估矩阵，并在 8 类生活场景中设计 caption-proof、visual-necessary 的长期图文记忆问题。

**主要贡献：**

1. 提供更强视觉不可替代性的多模态长期记忆 benchmark。
2. 用二维矩阵区分视觉细节丢失、检索失败和状态演化推理失败。
3. 系统比较文本记忆和多模态记忆的 trade-off。

**实验结论：**
当前 13 类 memory 方法仍难处理高粒度视觉证据和 Y3 状态综合；text memory 组织状态较好但丢细节，image memory 保留证据但时间权威性弱。

**我的理解/评价：**
这篇论文值得读，因为它把“多模态记忆到底记住了什么”问得很尖锐。对 proactive agent 来说，未来的关键不是无限存图，而是主动维护未来可能有用、可验证、可删除的视觉证据。

## Keywords

`Multimodal Agent Memory` · `Visual Memory` · `Long-term Memory` · `Benchmark` · `Temporal State Tracking`
