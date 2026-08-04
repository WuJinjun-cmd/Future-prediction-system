<div align="center">

# 🔮 前途预测系统 · Future Prediction System

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-deployed-brightgreen)](https://wujinjun-cmd.github.io/Future-prediction-system/)
[![License](https://img.shields.io/badge/license-MIT-blue)](LICENSE)
[![Vanilla JS](https://img.shields.io/badge/vanilla-JS-yellow)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

*融合理性分析与玄学智慧的前途预测 Web 应用*

*A web app combining rational analysis with metaphysical wisdom to predict your future potential*

</div>

---

## 📖 简介 | Introduction

**中文**

前途预测系统从五个维度综合评估你的未来发展潜力：

| 维度 | 说明 |
|------|------|
| 🏫 **大学** | 基于学校层级的竞争力评分（支持 200+ 高校） |
| 💼 **专业** | 基于市场需求和前景的专业评分（覆盖 300+ 专业） |
| 🌟 **五行命理** | 完整八字四柱 + 五行强弱分析 + 日主研判 |
| ♈ **星座** | 12 星座性格特质与职业匹配度 |
| 🧠 **MBTI** | 16 种人格类型的职场竞争力与发展建议 |

**English**

The Future Prediction System evaluates your future potential across five dimensions:

| Dimension | Description |
|-----------|-------------|
| 🏫 **University** | Competitiveness score based on institution tier (200+ universities) |
| 💼 **Major** | Market demand & outlook scoring (300+ majors covered) |
| 🌟 **Five Elements** | Full Ba-Zi (Four Pillars) + Five Elements balance + Day Master analysis |
| ♈ **Zodiac** | 12 zodiac signs' personality traits & career compatibility |
| 🧠 **MBTI** | 16 personality types' workplace competitiveness & growth advice |

---

## ✨ 功能特性 | Features

### 🎓 综合预测 | Comprehensive Prediction
- **ZH** — 填写个人信息，五维等权重算法生成综合前途评分（0-100），包含雷达图、评级、分组建议
- **EN** — Fill in your profile; equal-weight algorithm generates a composite score (0-100) with radar chart, grade, and grouped advice

### 🎋 灵签千抽 | Fortune Sticks (×1000)
- **ZH** — 基于六十四卦演化的 1000 支灵签，结合用户个人信息生成专属签文，每人每天不同
- **EN** — 1,000 sticks derived from the 64 Hexagrams; personalized seed ensures unique results per person per day

### ☯️ 八卦占卜 | Bagua Divination
- **ZH** — 六爻起卦，模拟三枚铜钱摇卦过程，显示卦象、卦辞、上卦下卦、变爻及白话解读
- **EN** — Six-line casting simulating three-coin toss; displays hexagram symbol, judgment, trigrams, changing lines & interpretation

### 📊 可视化结果 | Visual Results
- **ZH** — SVG 矢量雷达图、环形进度条、五维详情进度条、四级趣味评级（光明→微亮→迷茫→睡着）
- **EN** — SVG radar chart, ring progress, dimension detail bars, 4-tier playful grading

### 📋 历史记录 | History
- **ZH** — localStorage 自动保存预测历史（最多 50 条），支持查看详情和单条删除
- **EN** — Auto-saves prediction history (max 50) via localStorage; supports detail view & deletion

### 🔮 今日运势 | Daily Fortune (in-result)
- **ZH** — 预测结果页嵌入基于五行生克和星座元素的当日运势，含宜忌和运势分数
- **EN** — In-result daily fortune based on Five Elements & zodiac, with dos/don'ts and score

---

## 🚀 快速开始 | Quick Start

### 在线访问 | Live Demo

```
https://wujinjun-cmd.github.io/Future-prediction-system/
```

### 本地运行 | Run Locally

```bash
# 克隆仓库 | Clone the repo
git clone https://github.com/WuJinjun-cmd/Future-prediction-system.git

# 直接在浏览器打开 | Open in browser
open index.html

# 或用 Python 起本地服务器 | Or start a local server
cd Future-prediction-system
python -m http.server 8080
# → http://localhost:8080
```

无需安装、无需构建 — 纯静态页面，即开即用。

*Zero dependencies, zero build steps — pure static HTML/CSS/JS.*

---

## 🛠 技术栈 | Tech Stack

| 技术 | 用途 |
|------|------|
| **HTML5** | 页面结构 |
| **CSS3** | 样式 + 动画 + 响应式（现代简约风） |
| **Vanilla JS** | 业务逻辑，零框架依赖 |
| **SVG** | 雷达图 + 环形进度条（矢量渲染） |
| **localStorage** | 用户数据 + 历史记录本地持久化 |

---

## 📁 项目结构 | Project Structure

```
Future-prediction-system/
├── index.html              # 主页面 · Main entry
├── css/
│   └── style.css           # 全局样式 · Global styles
├── js/
│   ├── data.js             # 数据引擎：大学/专业/八字/六十四卦/签文库
│   │                       #   Data engine: universities, majors, hexagrams, sticks
│   ├── prediction.js       # 预测算法：五维评分 + 评级 + 特殊人物检测
│   │                       #   Prediction: scoring + grading + special person detection
│   ├── fortune.js          # 抽签 + 八卦占卜引擎
│   │                       #   Stick drawing + Bagua divination engine
│   ├── storage.js          # localStorage 封装
│   │                       #   localStorage wrapper
│   └── app.js              # 主控制器：Tab路由/表单/渲染/交互动画
│                           #   Controller: routing, forms, rendering, animations
├── assets/
│   └── favicon.svg         # 网站图标 · Favicon
└── README.md
```

---

## 🎯 评分体系 | Scoring System

| 总分 | 评级 | Grade |
|------|------|-------|
| 85-100 | ☀️ 你的前途一片光明！误闯天家 | Blindingly Bright! |
| 70-84 | 🌤 还可以，前途微亮 | Moderately Bright |
| 55-69 | 🌥 一般，前路一片迷茫 | Somewhat Foggy |
| 0-54 | 🌑 前途暗的一下就睡着了 | Pitch Dark, Asleep |

### 特殊规则 | Special Rules

- **🏫 清华大学 / 北京大学 / 浙江大学** → 大学维度 100 分，评级「前途亮到刺眼」
- **👤 陈祉璇 / 魏子辰** → 检测到姓名后触发专属夸奖段落与金色横幅

---

## ⚠️ 免责声明 | Disclaimer

**中文**：本系统仅供娱乐参考，评分结果不构成任何实际建议。五行命理、星座、MBTI 分析均为传统文化与现代心理学的趣味解读。人生的精彩在于你亲手创造 ✨

**English**: This system is for entertainment purposes only. Scores and analyses do not constitute professional advice. Five Elements, zodiac, and MBTI interpretations are playful takes on traditional culture and modern psychology. Your future is what you make of it ✨

---

## 📄 License

MIT © 2025
