# MagicGUI-RMS: A Multi-Agent Reward Model System for Self-Evolving GUI Agents via Automated Feedback Reflux

## 基本信息

| 字段 | 内容 |
|------|------|
| **来源** | arXiv preprint |
| **arXiv ID** | [arXiv:2601.13060](https://arxiv.org/abs/2601.13060) |
| **提交日期** | 2026 年 1 月 |
| **领域** | cs.AI |

---

## 一句话总结

提出 MagicGUI-RMS，一套多智能体奖励模型系统：将**领域专用**与**通用**奖励模型融合，通过自动数据回流机制让 GUI 代理持续自我进化，无需人工标注。

---

## 动机

当前 GUI 代理面临两大核心瓶颈：
1. **轨迹评估自动化困难**：判断代理执行是否正确，传统上依赖人工标注或静态规则，难以扩展
2. **训练数据质量难以持续提升**：高质量训练数据稀缺，且无法随代理行为变化动态更新

MagicGUI-RMS 的核心主张：通过奖励模型自动化评估并生成改正反馈，让代理在无监督情况下持续进化。

---

## 方法

### 系统架构

```
GUI 代理执行轨迹
        ↓
┌──────────────────────────────────┐
│          MagicGUI-RMS            │
│  ┌────────────┐  ┌────────────┐  │
│  │  DS-RM     │  │  GP-RM     │  │
│  │ 领域专用   │  │ 通用奖励   │  │
│  │ 奖励模型   │  │ 模型       │  │
│  └────────────┘  └────────────┘  │
│         ↓ 细粒度动作评估         │
│   错误动作识别 + 改正方案生成    │
└──────────────────────────────────┘
        ↓
   自动数据回流（Feedback Reflux）
        ↓
   更新代理 / 持续进化
```

### 核心模块

| 模块 | 功能 |
|------|------|
| **DS-RM（领域专用奖励模型）** | 对特定 GUI 任务类型进行细粒度动作评估 |
| **GP-RM（通用奖励模型）** | 跨异质 GUI 任务提供鲁棒的泛化评估 |
| **结构化数据构建流程** | 自动生成平衡且多样的奖励数据集，降低标注成本 |
| **Feedback Reflux 机制** | 将识别到的错误和改正方案自动流回训练，实现持续改进 |

---

## 核心结论

- MagicGUI-RMS 在任务准确率和行为鲁棒性上带来显著提升
- DS-RM + GP-RM 融合架构兼顾精细评估与跨任务泛化
- 自动数据回流机制消除了对人工标注的依赖，实现可扩展的持续改进
- 建立了奖励驱动 GUI 代理自我进化的方法论基础

---

## 与项目的关联

MagicGUI-RMS 在本项目中处于**"GUI/Mobile/OS Proactive Agents"**类别的技术基础层：
- 操作对象是 GUI 代理的轨迹与行为
- 自动反馈与持续进化能力是主动代理的基础能力之一
- Feedback Reflux 机制可视为代理的一种**主动自我改进**行为

> **分类说明**：MagicGUI-RMS 本身是 GUI 代理训练基础设施，而非直接的"主动式代理"。其价值在于为主动 GUI 代理提供可持续改进的评估与训练闭环，与传统主动性（anticipating user needs）有所区别，更接近 Proactive Self-Improvement 的范式。

---

## 关键词

`GUI Agent` · `Reward Model` · `Self-Evolving` · `Automated Feedback` · `Multi-Agent System` · `Continuous Learning` · `Trajectory Evaluation`
