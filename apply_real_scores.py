"""用真实的985投档线数据来设置专业评分 — 数据驱动，不拍脑袋"""
import json
import re

with open(r'd:\Future-prediction-system\major_score_analysis.json', 'r', encoding='utf-8') as f:
    analysis = json.load(f)

with open(r'd:\Future-prediction-system\js\data.js', 'r', encoding='utf-8') as f:
    content = f.read()

# 过滤出可靠数据
skip_kw = ['试验班', '预科', '提前批', '专项', '艺术', '体育', '大类']
clean = {}
for d in analysis:
    name = d['name']
    if any(kw in name for kw in skip_kw) or len(name) > 15:
        continue
    # 只保留有>=2所985数据的专业
    if d['uni_count'] >= 2:
        # 如果同名专业出现多次，保留uni_count更大的
        if name not in clean or d['uni_count'] > clean[name]['uni_count']:
            clean[name] = d

print(f"可靠数据: {len(clean)} 个专业 (>=2所985)")

# 按源均分排序
sorted_clean = sorted(clean.items(), key=lambda x: x[1]['raw_avg'], reverse=True)
for i, (name, d) in enumerate(sorted_clean[:30]):
    print(f"  {i+1}. {name}: {d['score']}分 (源{d['raw_avg']:.0f}, {d['uni_count']}所)")

# 去重（以第一个出现为准）
seen = set()
unique_clean = {}
for name, d in sorted_clean:
    if name not in seen:
        seen.add(name)
        unique_clean[name] = d

print(f"\n去重后: {len(unique_clean)} 个")

# 应用到data.js
applied = 0
for name, d in unique_clean.items():
    if d['score'] == 0:
        continue
    # 寻找并替换MAJOR_CATEGORIES中的评分
    pattern = re.compile(
        r"('" + re.escape(name) + r"'\s*:\s*\{\s*category:\s*'[^']*'\s*,\s*score:\s*)\d+",
        re.DOTALL
    )
    match = pattern.search(content)
    if match:
        old = match.group(0)
        new = match.group(1) + str(d['score'])
        # 只在MAJOR_KEYWORDS之前替换
        kw_pos = content.find("const MAJOR_KEYWORDS")
        if match.start() < kw_pos:
            content = content[:match.start()] + new + content[match.end():]
            applied += 1
            if d['uni_count'] >= 5:
                print(f"  OK {name}: {d['score']} (源{d['raw_avg']:.0f}, {d['uni_count']}所985)")

print(f"\n应用了 {applied} 个数据驱动的评分")

# 对于未覆盖的热门专业，使用相近专业数据推算
# 计算机/AI类 — 在数据中表现为"计算机类"均分~674
print("\n=== 数据中关键专业分数参考 ===")
key_majors = ['计算机', '人工智能', '软件', '临床医学', '口腔', '金融', '集成电路', '微电子', '数学', '统计', '法学']
for name, d in unique_clean.items():
    for kw in key_majors:
        if kw in name and d['uni_count'] >= 3:
            print(f"  {name}: {d['score']}分 (源{d['raw_avg']:.0f}, {d['uni_count']}所)")

with open(r'd:\Future-prediction-system\js\data.js', 'w', encoding='utf-8') as f:
    f.write(content)
print("\nDone.")
