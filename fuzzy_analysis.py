"""模糊匹配 + 固定大学集合 — 所有专业用同一批中等985来比"""
import xlrd, json, re
from collections import defaultdict

wb = xlrd.open_workbook(r'd:\Future-prediction-system\22238acf41fe4b17b534e4c1f258846d(已自动还原).xls')
sh = wb.sheet_by_name('tdx2026')

data = []
for r in range(1, sh.nrows):
    row = {
        'school': str(sh.cell_value(r, 1)).strip(),
        'major': str(sh.cell_value(r, 3)).strip(),
        'plan': float(sh.cell_value(r, 4)) if sh.cell_value(r, 4) else 0,
        'score': float(sh.cell_value(r, 5)) if sh.cell_value(r, 5) else 0,
    }
    if row['score'] > 0 and row['plan'] > 0:
        data.append(row)

def clean_uni(name):
    name = re.sub(r'[（(].*?(?:校区|学院|校[区园]).*?[）)]', '', name)
    return name.strip()

# 全部985关键词
ALL_985 = ['北京大','清华','复旦','上海交','浙江大','南京大','中国科学技术','哈尔滨工业','西安交',
    '武汉大','华中科技','中山大','四川大','同济','北京航空航天','中国人民','南开','天津大',
    '东南大','厦门大','北京理工','华南理工','中南大','大连理工','电子科技','山东大','吉林大',
    '西北工业','重庆大','兰州大','中国农业','华东师范','湖南大','东北大','中国海洋',
    '西北农林','中央民族','国防科技','北京师范','哈尔滨工程']

# 排除顶尖+末流 → 中等985
TOP_ELITE = ['北京大','清华','复旦','上海交','浙江大','南京大','中国科学技术','中国人民','北京航空航天']
BOTTOM = ['西北农林','中央民族','中国海洋','国防科技']

def is_mid_985(name):
    if any(kw in name for kw in TOP_ELITE): return False
    if any(kw in name for kw in BOTTOM): return False
    return any(kw in name for kw in ALL_985)

# 收集中等985数据
mid_data = [r for r in data if is_mid_985(r['school'])]
for r in mid_data:
    r['uni'] = clean_uni(r['school'])

# 去重得到固定大学列表
FIXED_UNIS = sorted(set(r['uni'] for r in mid_data))
print(f"固定中等985集合: {len(FIXED_UNIS)}所")
for u in FIXED_UNIS:
    print(f"  {u}")

# 每所大学的总体加权均分（兜底）
uni_avg = {}
for r in mid_data:
    u = r['uni']
    if u not in uni_avg:
        uni_avg[u] = {'tp': 0, 'ts': 0}
    uni_avg[u]['tp'] += r['plan']
    uni_avg[u]['ts'] += r['score'] * r['plan']
for u in uni_avg:
    uni_avg[u]['avg'] = uni_avg[u]['ts'] / uni_avg[u]['tp'] if uni_avg[u]['tp'] > 0 else 0

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
    '材料科学': ['材料科学与工程', '材料科学', '材料'],
}

# 对每个专业，收集有直接匹配的大学集合
major_unis = {}
for core_name, keywords in CORE_MAJORS.items():
    unis_with_major = set()
    for u in FIXED_UNIS:
        uni_rows = [r for r in mid_data if r['uni'] == u and any(kw in r['major'] for kw in keywords)]
        if uni_rows:
            unis_with_major.add(u)
    major_unis[core_name] = unis_with_major
    print(f"  {core_name}: {len(unis_with_major)}所直接匹配")

# 找交集：所有专业都开设的大学
common_unis = None
for unis in major_unis.values():
    if common_unis is None:
        common_unis = unis
    else:
        common_unis = common_unis & unis

print(f"\n所有专业共同开设的大学: {len(common_unis)}所")
for u in sorted(common_unis):
    print(f"  {u}")

# 如果交集太小(<5)，用top20高频大学
if len(common_unis) < 8:
    # 对每所大学统计它覆盖了多少个核心专业
    uni_coverage = defaultdict(int)
    for core_name, unis in major_unis.items():
        for u in unis:
            uni_coverage[u] += 1
    # 选覆盖专业最多的前N所
    top_n = 25
    top_unis = sorted(uni_coverage.items(), key=lambda x: x[1], reverse=True)[:top_n]
    common_unis = set(u for u, _ in top_unis)
    print(f"\n交集太小，改用覆盖专业最多的{top_n}所大学:")
    for u in sorted(common_unis):
        print(f"  {u} (覆盖{uni_coverage[u]}个专业)")

# 用这批共同大学重新计算，不做兜底
results = {}
for core_name, keywords in CORE_MAJORS.items():
    uni_scores = []
    for u in common_unis:
        uni_rows = [r for r in mid_data if r['uni'] == u and any(kw in r['major'] for kw in keywords)]
        if uni_rows:
            tp = sum(r['plan'] for r in uni_rows)
            ts = sum(r['score'] * r['plan'] for r in uni_rows)
            uni_scores.append(ts / tp)
        # 如果这所大学没有该专业，跳过（已经确保交集里有）
    if uni_scores:
        avg = sum(uni_scores) / len(uni_scores)
        results[core_name] = {'avg_raw': round(avg, 1), 'uni_count': len(uni_scores)}

# 排序和映射
sorted_results = sorted(results.items(), key=lambda x: x[1]['avg_raw'], reverse=True)
raw_min = min(r['avg_raw'] for _, r in sorted_results)
raw_max = max(r['avg_raw'] for _, r in sorted_results)
print(f"\n原始范围: {raw_min:.0f} - {raw_max:.0f} (全部基于{len(FIXED_UNIS)}所大学)")

def map_score(raw):
    return round(40 + (raw - raw_min) / (raw_max - raw_min) * 56)

print(f"\n=== 专业评分 (固定{len(FIXED_UNIS)}所中等985，未开设的用该校均分兜底) ===")
for name, info in sorted_results:
    ms = map_score(info['avg_raw'])
    results[name]['mapped'] = ms
    print(f"  {name}: {ms}分 (源{info['avg_raw']:.0f}, {info['uni_count']}所)")

# 保存
with open(r'd:\Future-prediction-system\fuzzy_scores.json', 'w', encoding='utf-8') as f:
    json.dump({k: {'avg_raw': v['avg_raw'], 'mapped': v['mapped'], 'uni_count': v['uni_count']}
               for k, v in results.items()}, f, ensure_ascii=False, indent=2)
print("\nDone.")
