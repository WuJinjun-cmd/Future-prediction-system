#!/usr/bin/env python3
"""分析985高校各专业投档线 - 只用实际有该专业的学校数据"""
import xlrd
import json
import re
from collections import defaultdict

wb = xlrd.open_workbook(r'd:\Future-prediction-system\22238acf41fe4b17b534e4c1f258846d(已自动还原).xls')
sh = wb.sheet_by_name('tdx2026')

# 读取所有行
data = []
for r in range(1, sh.nrows):
    row = {
        'school_name': str(sh.cell_value(r, 1)).strip(),
        'major_name': str(sh.cell_value(r, 3)).strip(),
        'plan': float(sh.cell_value(r, 4)) if sh.cell_value(r, 4) else 0,
        'score': float(sh.cell_value(r, 5)) if sh.cell_value(r, 5) else 0,
    }
    if row['score'] > 0 and row['plan'] > 0:
        data.append(row)

print(f"有效数据行: {len(data)}")

# 大学名称清洗 - 去掉校区/学院后缀，合并相同主校
def clean_uni(name):
    # 去掉括号内校区信息
    name = re.sub(r'[（(].*?(?:校区|学院|校[区园]).*?[）)]', '', name)
    name = re.sub(r'[（(](?!.*?医学).*?[）)]', '', name)
    # 单独处理一些常见情况
    name = name.replace('(沙河校区)', '').replace('(盘锦校区)', '')
    name = name.replace('(威海)', '').replace('(深圳)', '')
    name = name.replace('医学部', '').replace('医学院', '')
    return name.strip()

# 985高校名单
UNI_985_PATTERNS = [
    '北京大学', '清华大学', '复旦大学', '上海交通', '浙江大学',
    '南京大学', '中国科学技术大学', '哈尔滨工业', '西安交通',
    '武汉大学', '华中科技', '中山大学', '四川大学', '同济大学',
    '北京航空航天', '中国人民大学', '南开大学', '天津大学',
    '东南大学', '厦门大学', '北京理工', '华南理工', '中南大学',
    '大连理工', '电子科技', '山东大学', '吉林大学',
    '西北工业', '重庆大学', '兰州大学', '中国农业',
    '华东师范', '湖南大学', '东北大学', '中国海洋',
    '西北农林', '中央民族', '国防科技', '北京师范',
]

def is_985(name):
    for p in UNI_985_PATTERNS:
        if p in name:
            return True
    return False

# 过滤985
data_985 = [row for row in data if is_985(row['school_name'])]

# 合并校区
for row in data_985:
    row['uni_clean'] = clean_uni(row['school_name'])

unis = set(row['uni_clean'] for row in data_985)
print(f"985高校数(合并校区后): {len(unis)}")

# 清理专业名称 - 提取基础专业名
def clean_major(name):
    # 去掉各种括号内的限定词
    name = re.sub(r'[（(].*?[）)]', '', name)
    # 去掉常见后缀
    name = re.sub(r'\(.*?\)', '', name)
    # 去除多余空格
    name = name.strip()
    # 统一一些变体
    name = name.replace('（', '').replace('）', '')
    return name

# 为每行添加清洗后的专业名
for row in data_985:
    row['major_clean'] = clean_major(row['major_name'])
    # 进一步提取：如果一个清洗后的名字太长，尝试去掉末尾的修饰词
    # 如 "工科试验班院士特色班" → 保留原样（这种本身就是大类招生）

# 按干净专业名聚合：每个专业→{学校→加权平均分}
major_uni_scores = defaultdict(lambda: defaultdict(lambda: {'tp': 0, 'ts': 0}))
for row in data_985:
    mn = row['major_clean']
    un = row['uni_clean']
    major_uni_scores[mn][un]['tp'] += row['plan']
    major_uni_scores[mn][un]['ts'] += row['score'] * row['plan']

# 计算每个专业在各985的平均分
major_stats = {}
for mn, uni_dict in major_uni_scores.items():
    scores = []
    for un, stats in uni_dict.items():
        if stats['tp'] > 0:
            avg = stats['ts'] / stats['tp']
            scores.append({'uni': un, 'score': avg, 'plan': stats['tp']})
    if scores:
        # 加权平均（按招生人数加权）
        total_plan = sum(s['plan'] for s in scores)
        weighted_avg = sum(s['score'] * s['plan'] for s in scores) / total_plan
        major_stats[mn] = {
            'uni_count': len(scores),
            'weighted_avg': round(weighted_avg, 2),
            'max_score': max(s['score'] for s in scores),
            'min_score': min(s['score'] for s in scores),
            'total_plan': total_plan,
            'unis': sorted(scores, key=lambda x: x['score'], reverse=True)[:5]
        }

# 按加权平均分排序
sorted_majors = sorted(major_stats.items(), key=lambda x: x[1]['weighted_avg'], reverse=True)
print(f"\n分析到的专业数: {len(sorted_majors)}")

score_min = min(info['weighted_avg'] for _, info in sorted_majors)
score_max = max(info['weighted_avg'] for _, info in sorted_majors)
print(f"原始分数范围: {score_min:.1f} - {score_max:.1f}")

def map_score(raw):
    return round(40 + (raw - score_min) / (score_max - score_min) * 56)

print("\n=== TOP 50 高分专业(按985投档均分) ===")
for i, (name, info) in enumerate(sorted_majors[:50]):
    ms = map_score(info['weighted_avg'])
    top_unis = ', '.join(f"{u['uni']}({u['score']:.0f})" for u in info['unis'][:3])
    print(f"{i+1}. {name}: {ms}分 (投档均分{info['weighted_avg']:.1f}, {info['uni_count']}所985, {top_unis})")

print("\n=== BOTTOM 30 低分专业 ===")
for name, info in sorted_majors[-30:]:
    ms = map_score(info['weighted_avg'])
    print(f"{name}: {ms}分 (投档均分{info['weighted_avg']:.1f}, {info['uni_count']}所985)")

# 生成可用于data.js的推荐评分
print("\n\n=== 推荐更新的专业评分（可直接放入data.js MAJOR_CATEGORIES）===")
for name, info in sorted_majors:
    ms = map_score(info['weighted_avg'])
    # 只输出有意义的核心专业名称(过滤掉试验班/大类等)
    if any(kw in name for kw in ['试验班', '预科', '提前批', '专项', '艺术', '体育']):
        continue
    print(f"  '{name}': {{ category: '待归类', score: {ms}, demand: '--', outlook: '基于985投档线均分{info['weighted_avg']:.1f}' }},")

# 保存完整分析结果
output = []
for name, info in sorted_majors:
    ms = map_score(info['weighted_avg'])
    output.append({
        'name': name,
        'score': ms,
        'raw_avg': info['weighted_avg'],
        'uni_count': info['uni_count'],
        'total_plan': info['total_plan'],
        'top_unis': [(u['uni'], round(u['score'], 1)) for u in info['unis']]
    })

with open(r'd:\Future-prediction-system\major_score_analysis.json', 'w', encoding='utf-8') as f:
    json.dump(output, f, ensure_ascii=False, indent=2)
print(f"\n完整分析已保存: {len(output)} 条")
