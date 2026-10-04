# 仓库重构设计与实施计划

日期：2026-10-04。定位：**Awesome Proactive Agents**。本次采用“保留完整资料层，重构阅读入口”的迁移方式。

## 1. 定位与边界

推荐描述：

> A curated collection of proactive AI agents, models, systems, and benchmarks across personal assistance, streaming multimodal interaction, and domain-specific and embodied assistance.

以 proactive 为收录主线，以 personal agents 为重点应用分支。Personal 描述服务对象及其持续上下文，允许桌面、手机、手表、眼镜和具身接口；streaming 描述持续输入及交互机制，两者可以交叉。行业助手与多人协作也保留独立位置。

是否收录要回答：**什么上下文或目标促使系统选择 ask / suggest / act / speak / wait / silence？决定发生在模型、框架、运行时还是产品流程？** Benchmark 可以通过明确评测这一决策进入；记忆、感知、服务组件通过标明支撑作用进入。

本次不拆建 Personal Agent 仓库。独立仓库只有在范围扩展到通用个人助手生态（包括非主动式助手、连接器、部署、隐私和个性化工具）时才具有独立维护价值；不能把可能的流量收益当作已验证结论。

## 2. 当前资料与问题

重构前本地资料快照包含 188 篇独立论文、169 篇关联笔记、72 个评测矩阵条目和 13 个项目/产品/组件条目；streaming 自动浏览标签命中 37 篇，不等于 37 个已验证主动式模型。

已有材料覆盖个人、移动、穿戴、协作与机器人；主要问题在展示层：

- 应用、能力、资源类型混在一起，读者容易把 personal 等同桌面、streaming 等同 model。
- Must Read 有层级，但个人移动、穿戴和具身路线代表性不足。
- 完整论文列表适合查阅，缺少“我要做哪类助手”的入口。
- 网站的精选卡片取决于概览图，不能承担完整的 Must Read 阅读路线。

## 3. 目标信息架构

```text
Awesome Proactive Agents
├── Must Read：概念与人因 → 应用/机制 → 匹配评测
├── Agents & Applications
│   ├── Personal Agents（数字工作流、移动、穿戴、持续用户上下文）
│   ├── Coding & Knowledge Work
│   ├── Meetings & Collaboration
│   ├── Embodied & Robot Assistance
│   └── Domain-Specific Assistance
├── Streaming Proactivity
│   ├── Scene-triggered interaction
│   ├── Evidence / memory / response timing
│   └── Full-duplex interaction & delegation
├── Projects & Products：实现与访问状态
├── Benchmarks & Human Factors：协议、时机、效用、打扰和控制
├── Supporting Infrastructure：感知、记忆、唤醒、推理接口
└── Full Bibliography & Research Map
```

穿戴式工作可以同时属于 personal 和 streaming；PACT 等工作可以同时属于持续用户适应和机器人协作。这里的分支是阅读视图，不要求互斥。

## 4. 文件职责与唯一事实来源

| 文件 | 职责 | 维护约束 |
|---|---|---|
| [README](../README.md) | 定位、入口、分层 Must Read、完整论文目录 | 继续作为出版元数据与论文链接来源，保留五列格式和既有分类锚点。 |
| [APPLICATIONS](../APPLICATIONS.md) | 跨场景应用导航 | 选代表、说明决策、链接评测；不复制完整论文记录。 |
| [PERSONAL_AGENTS](../PERSONAL_AGENTS.md) | 个人助手专题 | 连接项目、跨设备研究、交互模型与评测；说明模型作为组件的边界。 |
| [PROJECTS](../PROJECTS.md) | 项目、产品、运行时、组件的实现与访问证据 | 版本/许可/发布状态集中在此维护。 |
| [STREAMING](../STREAMING.md) | 流式模型和框架的机制与资源 | 区分新需求发现、已有问题的等待回答、内部记忆生成、双工执行。 |
| [BENCHMARKS](../BENCHMARKS.md) | 评测协议和资源矩阵 | 保留九列结构；人因阅读通过 Research Map 和 Must Read 联动。 |
| [INFRASTRUCTURE](../INFRASTRUCTURE.md) | 系统组件与接口职责 | 链接项目事实记录；不把支撑组件计为完整主动助手。 |
| [RESEARCH_MAP](../RESEARCH_MAP.md) | 按研究问题检索 | 与应用视图交叉链接。 |
| `papers/**/*.md` | 论文证据卡 | 保留路径和五个固定标题，避免旧链接失效。 |
| `website/` | 基于上述资料生成网站 | 应用、个人助手、基础设施和分层 Must Read 共用 Markdown。 |

## 5. Must Read 的选择原则

三个层级代表阅读顺序，不表示论文质量或推荐强度：

1. **建立概念**：human-centered 定义、Proactive Agent 基线、Need Help? 人因。
2. **选择应用或机制**：ContextAgent；OpenClaw/Proactivity SDK；dot/MineContext；PersonalAlign；Satori/ProMemAssist；PACT/PACE；JoyAI/MOSS；OneStreamer/StreamReady；MiniCPM-o/Gander。
3. **匹配评测**：ProAgentBench/KnowU；π-Bench/VibeLifeBench；OmniMMI/StreamGaze；EgoPro/EgoServe；Why2Speak。

GitHub 首页使用三列表格及跨列分组标题。每条说明“为什么读、对应什么决策”，项目和模型有资源类型提示。网站单独呈现同一阅读路线；Selected 按 Proactive Agents / Models / Benchmarks 三组展示，分别为 Proactive Agent、ContextAgent、PASK；JoyAI、OneStreamer；π-Bench、KnowU-Bench、PIRA-Bench / PIRF。网页上的 Streaming 使用普通 tag，取消独立导航入口和专属标记。有没有概览图不决定入选，也不代替分层 Must Read。

## 6. 多维分类设计

当前落实为人工编排的阅读视图。未来若升级完整结构化目录，建议每条资源有稳定 ID，并支持以下独立字段：

| 字段 | 示例 | 判断依据 |
|---|---|---|
| `resource_types` | paper / model / framework / project / product / benchmark / component | 实际资源，可多选。 |
| `applications` | personal / coding / collaboration / embodied / domain-specific | 论文任务或产品使用场景，可多选。 |
| `interfaces` | desktop / mobile / wearable / robot / connected-services | 已展示的交互接口；不能据此推断本地部署。 |
| `modalities` | text / screen / video / audio / sensors | 实际输入输出。 |
| `decisions` | ask / suggest / act / speak / wait / silence / record / delegate | 方法与实现中的动作。 |
| `initiative_layer` | model / framework / runtime / product | 哪一层选择下一步。 |
| `trigger` | event / schedule / heartbeat / inferred-need / answer-readiness | 区分唤醒和唤醒后的用户可见干预。 |
| `evidence_role` | core / supporting / adjacent | 核心主动决策、支撑组件、发现线索。 |
| `sources`, `checked_at`, `availability` | 官方论文/文档，核验日期，代码/权重/数据状态 | 对发布冲突保留来源与检查结果。 |

示例：PersonalAlign 是 mobile + personal 的方法/研究系统；OneStreamer 是 streaming 的模型/论文，记录与响应时机分别标注；dot 是 personal 的产品；memU 是 supporting memory component。不能直接把四者归入同一个“模型”列表。

## 7. 实施阶段与验收

### 阶段 A：阅读结构迁移（本次落实）

- 更新定位、导航和 Must Read；补充移动、穿戴和具身代表工作。
- 新建 Applications、Personal Agents、Infrastructure 三份导航，复用已核验的项目与既有论文。
- 同步贡献规则及研究地图交叉链接。
- 保留全部 188 篇论文、笔记路径及原有目录锚点；这一阶段不需要搬迁 `papers/`。

验收：原论文主链接集合不变；本地链接有效；笔记契约及既有数据解析通过。

### 阶段 B：网站导航同步（本次落实）

- 新增应用、个人助手和基础设施页面入口。
- `/start/` 渲染分层 Must Read，包含项目、产品、模型与评测；不再只展开论文精选。
- 保留既有目录、搜索、筛选、概览图及双语界面；新增指南正文与仓库保持英文。

验收：构建/测试通过；内部页面及锚点可达；表格保留跨列标题，在窄屏可横向滚动。部署状态需要另行通过线上验证确认。

### 阶段 C：完整多维目录（后续可选工程）

仅在需要跨全部资源进行组合筛选时推进：逐条人工标注 `applications`、`decisions` 等；先对 Must Read 和项目试标，再扩展到全量论文。存储采用一个明确的规范来源，导出 README/网站，避免同时手工维护两份总表。保留旧 URL 映射、缺省值及不确定标签。

验收：抽样逐条回溯原始证据；多标签筛选符合组合语义；全量 ID/来源链接和历史路由保持兼容。**本次未声称已完成全量结构化标注。**

### 阶段 D：持续内容扩展

优先补充具有明确干预机制的非桌面个人助手、家庭/具身实测、主动语音和长期用户研究。每条新资源核验官方来源、实际触发机制、代码/模型/数据可用性及评测边界。普通聊天、仅有记忆或仅能接收视频的系统不自动升级为核心 proactive 条目。

验收：新增的每类应用能给出机制与匹配评测；缺少开放实现或长期用户证据时明确保留空缺，不靠未核验项目填满分类。


## 8. 本次验证结果

- 12 项自动测试通过；生成 10 个内容页面和 1 个 404 页面，513 个内部资源链接通过检查。
- 当前目录保留 188 篇论文；重构前原始 181 篇论文均能按资源链接匹配，新增资料继续保留。
- 347 个文档本地文件链接、21 个生成页面片段链接检查通过（贡献说明中的占位路径不计入）。
- 浏览器检查了桌面、390px 手机布局和深色模式；已核验精选概览图来源及加载，手机页面没有整体横向溢出。
- Selected 覆盖 Agent / Model / Benchmark 三组，包含 PASK 和 PIRA-Bench / PIRF，配图保留官方来源；分类入口使用统一视觉权重，Streaming 无常驻高亮；导航图使用原创 SVG 图标和概念流程，不代表具体论文结构；首页以大字号、独立强调色及渐变底线突出 Proactive。
- 完整结构化多标签目录仍属于阶段 C；本地构建通过不代表线上发布完成。
