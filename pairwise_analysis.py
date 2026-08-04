"""两两对比法 — 每对专业只在同时开设的大学中比较"""
import xlrd, json, re
from collections import defaultdict

wb = xlrd.open_workbook(r'd:\Future-prediction-system\22238acf41fe4b17b534e4c1f258846d(已自动还原).xls')
sh = wb.sheet_by_name('tdx2026')

data = []
for r in range(1, sh.nrows):
    school = str(sh.cell_value(r, 1)).strip()
    major = str(sh.cell_value(r, 3)).strip()
    plan = float(sh.cell_value(r, 4)) if sh.cell_value(r, 4) else 0
    score = float(sh.cell_value(r, 5)) if sh.cell_value(r, 5) else 0
    if score > 0 and plan > 0:
        data.append({'school': school, 'major': major, 'plan': int(plan), 'score': int(score)})

def clean_uni(name):
    return re.sub(r'[（(].*?(?:校区|学院|校[区园]).*?[）)]', '', name).strip()

ALL_985 = ['北京大','清华','复旦','上海交','浙江大','南京大','中国科学技术','哈尔滨工业','西安交',
    '武汉大','华中科技','中山大','四川大','同济','北京航空航天','中国人民','南开','天津大',
    '东南大','厦门大','北京理工','华南理工','中南大','大连理工','电子科技','山东大','吉林大',
    '西北工业','重庆大','兰州大','中国农业','华东师范','湖南大','东北大','中国海洋',
    '西北农林','中央民族','国防科技','北京师范','哈尔滨工程']
TOP_ELITE = ['北京大','清华','复旦','上海交','浙江大','南京大','中国科学技术','中国人民','北京航空航天']
BOTTOM = ['西北农林','中央民族','中国海洋','国防科技']

def is_mid(name):
    if any(kw in name for kw in TOP_ELITE): return False
    if any(kw in name for kw in BOTTOM): return False
    return any(kw in name for kw in ALL_985)

mid_data = [r for r in data if is_mid(r['school'])]
for r in mid_data:
    r['uni'] = clean_uni(r['school'])

# 专业关键词
CORE_MAJORS = {
    '计算机': ['计算机'],
    '软件工程': ['软件工程', '软件'],
    '人工智能': ['人工智能'],
    '数据科学': ['数据科学', '大数据'],
    '临床医学': ['临床医学', '临床'],
    '口腔医学': ['口腔医学', '口腔'],
    '基础医学': ['基础医学'],
    '药学': ['药学'],
    '电子信息': ['电子信息', '电子信息类'],
    '通信工程': ['通信工程', '通信'],
    '电子科学': ['电子科学与技术'],
    '微电子': ['微电子'],
    '集成电路': ['集成电路'],
    '电气工程': ['电气工程', '电气'],
    '自动化': ['自动化'],
    '金融学': ['金融学', '金融'],
    '经济学': ['经济学'],
    '会计学': ['会计学', '会计'],
    '法学': ['法学'],
    '数学': ['数学与应用数学', '数学类'],
    '物理学': ['物理学'],
    '统计学': ['统计学'],
    '机械工程': ['机械工程', '机械类'],
    '土木工程': ['土木工程', '土木'],
    '建筑学': ['建筑学'],
    '材料科学': ['材料科学与工程', '材料', '材料科学'],
}

# 为每个专业计算每所大学的均分
major_uni_scores = {}
for name, keywords in CORE_MAJORS.items():
    uni_scores = {}
    for u in set(r['uni'] for r in mid_data):
        rows = [r for r in mid_data if r['uni'] == u and any(kw in r['major'] for kw in keywords)]
        if rows:
            tp = sum(r['plan'] for r in rows)
            ts = sum(r['score'] * r['plan'] for r in rows)
            uni_scores[u] = ts / tp
    major_uni_scores[name] = uni_scores

major_names = list(CORE_MAJORS.keys())
n = len(major_names)

# 构建两两对比矩阵
print("=== 两两对比矩阵 ===")
print(f"{'':>10}", end='')
for name in major_names:
    print(f'{name:>8}', end='')
print()

pairwise_diff = defaultdict(dict)
pairwise_count = defaultdict(dict)

for i, name_a in enumerate(major_names):
    print(f'{name_a:>10}', end='')
    for j, name_b in enumerate(major_names):
        if i == j:
            print(f'{"--":>8}', end='')
            continue
        # 找同时有A和B的大学
        common_unis = set(major_uni_scores[name_a].keys()) & set(major_uni_scores[name_b].keys())
        if len(common_unis) >= 3:  # 至少3所才有效
            diffs = [major_uni_scores[name_a][u] - major_uni_scores[name_b][u] for u in common_unis]
            avg_diff = sum(diffs) / len(diffs)
            pairwise_diff[name_a][name_b] = avg_diff
            pairwise_count[name_a][name_b] = len(common_unis)
            sign = '+' if avg_diff > 0 else ''
            print(f'{sign}{avg_diff:>7.0f}', end='')
        else:
            print(f'{"N/A":>8}', end='')
    print()

# 对每个专业，计算它胜过其他专业的平均优势
print("\n=== 两两对比综合排名 ===")
rankings = []
for name in major_names:
    advantages = []
    pair_count = 0
    for other in major_names:
        if other != name and other in pairwise_diff[name]:
            # name vs other: positive means name is better
            advantages.append(pairwise_diff[name][other])
            pair_count += 1
    if advantages:
        avg_advantage = sum(advantages) / len(advantages)
        rankings.append((name, avg_advantage, pair_count, len(major_uni_scores[name])))

rankings.sort(key=lambda x: x[1], reverse=True)

# 映射到40-96分
adv_min = min(r[1] for r in rankings)
adv_max = max(r[1] for r in rankings)
print(f"优势范围: {adv_min:.0f} ~ {adv_max:.0f}")

def map_score(adv):
    return round(40 + (adv - adv_min) / (adv_max - adv_min) * 56)

print(f"\n{'专业':<10} {'评分':>4} {'平均优势':>8} {'对战数':>6} {'开设数':>6}")
print("-" * 40)
results = {}
for name, adv, pairs, unis in rankings:
    ms = map_score(adv)
    results[name] = {'mapped': ms, 'avg_advantage': round(adv, 1), 'pairs': pairs, 'unis': unis}
    print(f'{name:<10} {ms:>4} {adv:>+8.0f} {pairs:>6} {unis:>6}')

# 保存
with open(r'd:\Future-prediction-system\pairwise_scores.json', 'w', encoding='utf-8') as f:
    json.dump(results, f, ensure_ascii=False, indent=2)
print("\nDone.")
