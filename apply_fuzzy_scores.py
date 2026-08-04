"""将模糊匹配分析结果应用到data.js"""
import json, re

with open(r'd:\Future-prediction-system\fuzzy_scores.json', 'r', encoding='utf-8') as f:
    fuzzy = json.load(f)

with open(r'd:\Future-prediction-system\js\data.js', 'r', encoding='utf-8') as f:
    content = f.read()

# 关键词到专业名的映射
KW_TO_MAJORS = {
    '计算机': ['计算机科学与技术', '计算机类'],
    '软件工程': ['软件工程'],
    '人工智能': ['人工智能'],
    '数据科学': ['数据科学与大数据技术', '数据科学'],
    '临床医学': ['临床医学', '临床医学类'],
    '口腔医学': ['口腔医学', '口腔医学类'],
    '基础医学': ['基础医学', '基础医学类'],
    '药学': ['药学', '药学类'],
    '电子信息': ['电子信息工程'],
    '通信工程': ['通信工程'],
    '电子科学': ['电子科学与技术'],
    '微电子': ['微电子科学与工程'],
    '集成电路': ['集成电路设计与集成系统'],
    '电气工程': ['电气工程及其自动化'],
    '自动化': ['自动化'],
    '金融学': ['金融学', '金融学类'],
    '经济学': ['经济学', '经济学类'],
    '会计学': ['会计学'],
    '法学': ['法学', '法学类'],
    '数学': ['数学与应用数学'],
    '物理学': ['物理学'],
    '统计学': ['统计学'],
    '机械工程': ['机械工程'],
    '土木工程': ['土木工程'],
    '建筑学': ['建筑学'],
    '材料科学': ['材料科学与工程'],
}

applied = 0
for kw, info in fuzzy.items():
    score = info['mapped']
    majors = KW_TO_MAJORS.get(kw, [kw])
    for major_name in majors:
        pattern = re.compile(
            r"('" + re.escape(major_name) + r"'\s*:\s*\{[^}]*?score:\s*)\d+",
            re.DOTALL
        )
        match = pattern.search(content)
        if match:
            kw_pos = content.find("const MAJOR_KEYWORDS")
            if match.start() < kw_pos:
                old = match.group(0)
                new = match.group(1) + str(score)
                content = content[:match.start()] + new + content[match.end():]
                applied += 1
                print(f"  {major_name}: {score} (源{fuzzy[kw]['avg_raw']:.0f}, {fuzzy[kw]['matched_unis']}所)")

with open(r'd:\Future-prediction-system\js\data.js', 'w', encoding='utf-8') as f:
    f.write(content)
print(f"\nApplied {applied} scores")
