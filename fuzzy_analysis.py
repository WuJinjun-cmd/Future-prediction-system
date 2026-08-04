"""模糊匹配分析 — 所有含关键词的专业都计入"""
import xlrd, json, re, math
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

# 985模式
UNI_985_KW = ['北京大','清华','复旦','上海交','浙江大','南京大','中国科学技术','哈尔滨工业','西安交',
    '武汉大','华中科技','中山大','四川大','同济','北京航空航天','中国人民','南开','天津大',
    '东南大','厦门大','北京理工','华南理工','中南大','大连理工','电子科技','山东大','吉林大',
    '西北工业','重庆大','兰州大','中国农业','华东师范','湖南大','东北大','中国海洋',
    '西北农林','中央民族','国防科技','北京师范']

def is_985(name):
    return any(kw in name for kw in UNI_985_KW)

def clean_uni(name):
    name = re.sub(r'[（(].*?(?:校区|学院|校[区园]).*?[）)]', '', name)
    return name.strip()

data_985 = [r for r in data if is_985(r['school'])]
for r in data_985:
    r['uni'] = clean_uni(r['school'])

unis = set(r['uni'] for r in data_985)
print(f"985高校: {len(unis)}所")

# 计算每所大学的总体加权平均分（兜底用）
uni_total = {}
for r in data_985:
    u = r['uni']
    if u not in uni_total:
        uni_total[u] = {'tp': 0, 'ts': 0}
    uni_total[u]['tp'] += r['plan']
    uni_total[u]['ts'] += r['score'] * r['plan']
for u in uni_total:
    uni_total[u]['avg'] = uni_total[u]['ts'] / uni_total[u]['tp'] if uni_total[u]['tp'] > 0 else 0

# 核心专业关键词 — 每个专业只用一个精准关键词
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

# 对每个核心专业，模糊匹配所有相关条目
results = {}
for core_name, keywords in CORE_MAJORS.items():
    uni_scores = {}
    for r in data_985:
        matched = any(kw in r['major'] for kw in keywords)
        if matched:
            u = r['uni']
            if u not in uni_scores:
                uni_scores[u] = {'tp': 0, 'ts': 0}
            uni_scores[u]['tp'] += r['plan']
            uni_scores[u]['ts'] += r['score'] * r['plan']

    # 只用有该专业的大学数据，不兜底
    uni_avgs = []
    for u, s in uni_scores.items():
        if s['tp'] > 0:
            uni_avgs.append(s['ts'] / s['tp'])

    if uni_avgs:
        avg_score = sum(uni_avgs) / len(uni_avgs)
        results[core_name] = {
            'avg_raw': round(avg_score, 1),
            'matched_unis': len(uni_avgs),
        }

# 排序
sorted_results = sorted(results.items(), key=lambda x: x[1]['avg_raw'], reverse=True)

# 映射到40-96
raw_min = min(r['avg_raw'] for _, r in sorted_results)
raw_max = max(r['avg_raw'] for _, r in sorted_results)
print(f"原始范围: {raw_min:.0f} - {raw_max:.0f}")

def map_score(raw):
    return round(40 + (raw - raw_min) / (raw_max - raw_min) * 56)

print("\n=== 模糊匹配后的专业评分(基于真实投档线) ===")
for name, info in sorted_results:
    ms = map_score(info['avg_raw'])
    print(f"  {name}: {ms}分 (源{info['avg_raw']:.0f}, 直接匹配{info['matched_unis']}所985)")
    results[name]['mapped'] = ms

# 保存
with open(r'd:\Future-prediction-system\fuzzy_scores.json', 'w', encoding='utf-8') as f:
    json.dump({k: {'avg_raw': v['avg_raw'], 'mapped': v['mapped'], 'matched_unis': v['matched_unis']}
               for k, v in results.items()}, f, ensure_ascii=False, indent=2)
