"""根据985投档线分析结果更新data.js中的专业评分"""
import json
import re

# 加载分析结果
with open(r'd:\Future-prediction-system\major_score_analysis.json', 'r', encoding='utf-8') as f:
    analysis = json.load(f)

# 建立专业名→新评分的映射
score_map = {}
for item in analysis:
    name = item['name']
    # 跳过试验班/大类/预科等
    if any(kw in name for kw in ['试验班', '预科', '提前批', '专项', '艺术', '体育', '大类']):
        continue
    if len(name) > 15:
        continue
    score_map[name] = item['score']

# 读取现有data.js
with open(r'd:\Future-prediction-system\js\data.js', 'r', encoding='utf-8') as f:
    content = f.read()

# 对每个在score_map中的专业，更新其在MAJOR_CATEGORIES中的score
updated_count = 0
added_count = 0
not_found = []

for major_name, new_score in sorted(score_map.items(), key=lambda x: x[1], reverse=True):
    # 在MAJOR_CATEGORIES中查找
    # 模式: '专业名': { category: '...', score: XX, ...
    pattern = re.compile(
        r"('" + re.escape(major_name) + r"'\s*:\s*\{\s*category:\s*'[^']*'\s*,\s*score:\s*)\d+",
        re.DOTALL
    )
    match = pattern.search(content)
    if match:
        # 更新分数
        old = match.group(0)
        new = match.group(1) + str(new_score)
        content = content.replace(old, new, 1)
        updated_count += 1
    else:
        not_found.append((major_name, new_score))

# 写入更新后的文件
with open(r'd:\Future-prediction-system\js\data.js', 'w', encoding='utf-8') as f:
    f.write(content)

print(f"更新了 {updated_count} 个已有专业的评分")
print(f"未在data.js中找到的 {len(not_found)} 个专业(来自Excel但不在现有专业库):")
for name, score in not_found:
    print(f"  '{name}': {{ category: '待归类', score: {score} }},")

# 输出新增专业的JS代码
if not_found:
    print(f"\n=== 可添加到MAJOR_CATEGORIES的新专业 ===")
    # 分类
    categories = {
        '计算机/AI': ['计算机', '软件', '人工智能', '数据', '智能', '信息', '网络', '数字', '机器人'],
        '电子信息': ['电子', '通信', '微电子', '集成电路', '芯片', '光电', '自动化', '电气', '测控'],
        '医学': ['医', '临床', '药', '护理', '口腔', '麻醉', '眼视光', '基础医学', '预防'],
        '金融经济': ['金融', '经济', '会计', '财务', '审计', '保险', '投资', '精算', '税收', '国际贸易'],
        '传统工科': ['机械', '土木', '建筑', '材料', '能源', '环境', '化工', '纺织', '交通', '水利', '测绘', '采矿', '食品', '船舶', '航空'],
        '基础理学': ['数学', '物理', '化学', '生物', '统计', '天文', '地理', '大气', '海洋', '地质'],
        '法律管理': ['法', '管理', '行政', '公共', '营销', '人力', '物流', '供应链', '旅游', '酒店'],
        '人文社科': ['中文', '汉语言', '新闻', '英语', '日语', '翻译', '哲学', '历史', '考古', '社会', '教育', '心理', '政治', '马克思'],
        '艺术设计': ['设计', '艺术', '动画', '影视', '音乐', '美术', '摄影', '书法', '广播'],
    }

    for name, score in not_found:
        cat = '待归类'
        for cname, keywords in categories.items():
            if any(kw in name for kw in keywords):
                cat = cname
                break
        print(f"  '{name}': {{ category: '{cat}', score: {score}, demand: '--', outlook: '基于985投档线分析' }},")
