/**
 * 前途预测系统 — 静态参考数据
 * 包含：大学分级、专业分类、天干地支、星座、MBTI、签文库
 */

// ========== 大学分级数据 ==========
const UNIVERSITY_TIERS = {
  // C9 联盟
  '清华大学': { tier: 'C9', score: 98, level: '顶尖名校' },
  '北京大学': { tier: 'C9', score: 98, level: '顶尖名校' },
  '复旦大学': { tier: 'C9', score: 95, level: '顶尖名校' },
  '上海交通大学': { tier: 'C9', score: 95, level: '顶尖名校' },
  '浙江大学': { tier: 'C9', score: 95, level: '顶尖名校' },
  '南京大学': { tier: 'C9', score: 94, level: '顶尖名校' },
  '中国科学技术大学': { tier: 'C9', score: 94, level: '顶尖名校' },
  '哈尔滨工业大学': { tier: 'C9', score: 92, level: '顶尖名校' },
  '西安交通大学': { tier: 'C9', score: 92, level: '顶尖名校' },

  // 985 高校
  '武汉大学': { tier: '985', score: 90, level: '一流名校' },
  '华中科技大学': { tier: '985', score: 90, level: '一流名校' },
  '中山大学': { tier: '985', score: 89, level: '一流名校' },
  '四川大学': { tier: '985', score: 87, level: '一流名校' },
  '同济大学': { tier: '985', score: 88, level: '一流名校' },
  '北京航空航天大学': { tier: '985', score: 89, level: '一流名校' },
  '中国人民大学': { tier: '985', score: 90, level: '一流名校' },
  '南开大学': { tier: '985', score: 87, level: '一流名校' },
  '天津大学': { tier: '985', score: 86, level: '一流名校' },
  '东南大学': { tier: '985', score: 86, level: '一流名校' },
  '厦门大学': { tier: '985', score: 86, level: '一流名校' },
  '北京理工大学': { tier: '985', score: 85, level: '一流名校' },
  '华南理工大学': { tier: '985', score: 85, level: '一流名校' },
  '中南大学': { tier: '985', score: 84, level: '一流名校' },
  '大连理工大学': { tier: '985', score: 84, level: '一流名校' },
  '电子科技大学': { tier: '985', score: 86, level: '一流名校' },
  '山东大学': { tier: '985', score: 85, level: '一流名校' },
  '吉林大学': { tier: '985', score: 83, level: '一流名校' },
  '西北工业大学': { tier: '985', score: 84, level: '一流名校' },
  '重庆大学': { tier: '985', score: 83, level: '一流名校' },
  '兰州大学': { tier: '985', score: 82, level: '一流名校' },
  '中国农业大学': { tier: '985', score: 83, level: '一流名校' },
  '华东师范大学': { tier: '985', score: 84, level: '一流名校' },
  '湖南大学': { tier: '985', score: 82, level: '一流名校' },
  '东北大学': { tier: '985', score: 81, level: '一流名校' },
  '中国海洋大学': { tier: '985', score: 80, level: '一流名校' },
  '西北农林科技大学': { tier: '985', score: 78, level: '一流名校' },
  '中央民族大学': { tier: '985', score: 79, level: '一流名校' },
  '国防科技大学': { tier: '985', score: 90, level: '一流名校' },

  // 211 高校
  '北京邮电大学': { tier: '211', score: 78, level: '重点大学' },
  '上海财经大学': { tier: '211', score: 80, level: '重点大学' },
  '中央财经大学': { tier: '211', score: 79, level: '重点大学' },
  '对外经济贸易大学': { tier: '211', score: 79, level: '重点大学' },
  '中国政法大学': { tier: '211', score: 78, level: '重点大学' },
  '北京交通大学': { tier: '211', score: 76, level: '重点大学' },
  '南京航空航天大学': { tier: '211', score: 76, level: '重点大学' },
  '南京理工大学': { tier: '211', score: 75, level: '重点大学' },
  '西安电子科技大学': { tier: '211', score: 77, level: '重点大学' },
  '武汉理工大学': { tier: '211', score: 74, level: '重点大学' },
  '西南交通大学': { tier: '211', score: 74, level: '重点大学' },
  '北京科技大学': { tier: '211', score: 75, level: '重点大学' },
  '华东理工大学': { tier: '211', score: 75, level: '重点大学' },
  '苏州大学': { tier: '211', score: 74, level: '重点大学' },
  '暨南大学': { tier: '211', score: 74, level: '重点大学' },
  '郑州大学': { tier: '211', score: 72, level: '重点大学' },
  '上海大学': { tier: '211', score: 73, level: '重点大学' },
  '北京工业大学': { tier: '211', score: 72, level: '重点大学' },
  '河海大学': { tier: '211', score: 72, level: '重点大学' },
  '江南大学': { tier: '211', score: 71, level: '重点大学' },
  '合肥工业大学': { tier: '211', score: 72, level: '重点大学' },
  '福州大学': { tier: '211', score: 71, level: '重点大学' },
  '南昌大学': { tier: '211', score: 70, level: '重点大学' },

  // 双一流（非985/211）
  '南方科技大学': { tier: '双一流', score: 82, level: '新型名校' },
  '上海科技大学': { tier: '双一流', score: 78, level: '新型名校' },
  '深圳大学': { tier: '双一流', score: 76, level: '实力高校' },
  '杭州电子科技大学': { tier: '双一流', score: 70, level: '特色强校' },
};

/** 大学分级基础分（未在具体列表中的按此给分） */
const UNIVERSITY_TIER_BASE = {
  'C9': 94,
  '985': 85,
  '211': 75,
  '双一流': 70,
  '一本': 60,
  '二本': 45,
  '专科': 30,
  '未知': 40
};

/** 大学名称关键词匹配 */
const UNIVERSITY_KEYWORDS = [
  { keywords: ['交通', '交通大'], tier: '一本', score: 62 },
  { keywords: ['工业', '工业大'], tier: '一本', score: 62 },
  { keywords: ['理工', '理工大'], tier: '一本', score: 63 },
  { keywords: ['科技', '科技大'], tier: '一本', score: 63 },
  { keywords: ['师范', '师范大'], tier: '一本', score: 58 },
  { keywords: ['财经', '财经大'], tier: '一本', score: 61 },
  { keywords: ['医科', '医科大', '医药', '中医药', '医学'], tier: '一本', score: 60 },
  { keywords: ['农业', '农业大', '农林'], tier: '一本', score: 55 },
  { keywords: ['政法', '政法大'], tier: '一本', score: 60 },
  { keywords: ['大学'], tier: '一本', score: 55 },
  { keywords: ['学院'], tier: '二本', score: 42 },
];

// ========== 专业分类数据 ==========
const MAJOR_CATEGORIES = {
  // 热门高薪专业
  '计算机科学与技术': { category: '计算机/AI', score: 95, demand: '极高', outlook: '人工智能、互联网、金融科技等领域需求旺盛' },
  '软件工程': { category: '计算机/AI', score: 94, demand: '极高', outlook: '全行业数字化转型的核心驱动力' },
  '人工智能': { category: '计算机/AI', score: 96, demand: '极高', outlook: '未来十年最具发展潜力的方向之一' },
  '数据科学': { category: '计算机/AI', score: 93, demand: '极高', outlook: '大数据时代，数据驱动决策成为主流' },
  '数据科学与大数据技术': { category: '计算机/AI', score: 93, demand: '极高', outlook: '大数据时代，数据驱动决策成为主流' },
  '智能科学与技术': { category: '计算机/AI', score: 91, demand: '很高', outlook: '智能系统未来将渗入各行各业' },
  '物联网工程': { category: '计算机/AI', score: 88, demand: '很高', outlook: '万物互联时代的基础技术' },
  '网络空间安全': { category: '计算机/AI', score: 90, demand: '很高', outlook: '数字化时代的刚需，人才缺口巨大' },
  '信息安全': { category: '计算机/AI', score: 89, demand: '很高', outlook: '企业安全合规需求持续增长' },
  '区块链工程': { category: '计算机/AI', score: 85, demand: '高', outlook: 'Web3和数字经济的核心基础设施' },

  // 电子信息类
  '电子信息工程': { category: '电子信息', score: 88, demand: '很高', outlook: '通信、芯片、消费电子行业需求稳定' },
  '通信工程': { category: '电子信息', score: 87, demand: '很高', outlook: '5G/6G建设持续推进，通信人才需求大' },
  '电子科学与技术': { category: '电子信息', score: 86, demand: '很高', outlook: '芯片产业的战略重要性日益提升' },
  '微电子科学与工程': { category: '电子信息', score: 90, demand: '很高', outlook: '国产芯片自主研发的核心专业' },
  '集成电路设计与集成系统': { category: '电子信息', score: 91, demand: '极高', outlook: '国家战略重点，长期利好' },
  '光电信息科学与工程': { category: '电子信息', score: 83, demand: '高', outlook: '光通信和光学设备领域稳定增长' },
  '电气工程及其自动化': { category: '电子信息', score: 84, demand: '高', outlook: '电网、新能源、智能制造领域需求大' },
  '自动化': { category: '电子信息', score: 84, demand: '高', outlook: '工业4.0和智能制造的核心专业' },

  // 医学类
  '临床医学': { category: '医学', score: 90, demand: '极高', outlook: '医疗健康永远是人类刚需，社会地位高' },
  '口腔医学': { category: '医学', score: 92, demand: '极高', outlook: '收入可观，就业灵活度高的黄金专业' },
  '基础医学': { category: '医学', score: 82, demand: '高', outlook: '医学科研方向，适合学术路线' },
  '药学': { category: '医学', score: 82, demand: '高', outlook: '制药行业稳定，研发岗前景好' },
  '中医学': { category: '医学', score: 80, demand: '高', outlook: '国家大力扶持中医药发展，海外认可度提升' },
  '护理学': { category: '医学', score: 75, demand: '极高', outlook: '老龄化社会催生大量护理需求' },
  '医学影像学': { category: '医学', score: 80, demand: '高', outlook: 'AI+医疗影像方向有新机会' },
  '公共卫生': { category: '医学', score: 78, demand: '高', outlook: '疫情后公共卫生体系建设加速' },

  // 金融经济类
  '金融学': { category: '金融经济', score: 82, demand: '高', outlook: '金融行业核心岗位竞争激烈但回报丰厚' },
  '金融工程': { category: '金融经济', score: 85, demand: '高', outlook: '量化金融方向，数理能力强者优势明显' },
  '经济学': { category: '金融经济', score: 78, demand: '中高', outlook: '适用面广但需结合其他技能提升竞争力' },
  '国际经济与贸易': { category: '金融经济', score: 74, demand: '中', outlook: '全球化波动影响需求，跨境电商是新方向' },
  '会计学': { category: '金融经济', score: 78, demand: '高', outlook: '稳定刚需，CPA持证者竞争力强' },
  '财务管理': { category: '金融经济', score: 77, demand: '高', outlook: '企业财务数字化转型带来新机遇' },

  // 法律/管理类
  '法学': { category: '法律管理', score: 76, demand: '中高', outlook: '法考通过后职业发展空间大' },
  '工商管理': { category: '法律管理', score: 70, demand: '中', outlook: '需结合行业深耕，单靠专业竞争力有限' },
  '人力资源管理': { category: '法律管理', score: 70, demand: '中高', outlook: '组织发展领域有增长空间' },
  '市场营销': { category: '法律管理', score: 68, demand: '中高', outlook: '数字营销方向有增量机会' },

  // 人文社科类
  '汉语言文学': { category: '人文社科', score: 62, demand: '中', outlook: '内容创作、编辑出版、教育方向' },
  '新闻传播学': { category: '人文社科', score: 65, demand: '中', outlook: '新媒体和内容营销带来新就业形态' },
  '英语': { category: '人文社科', score: 63, demand: '中', outlook: '翻译、外贸、国际业务方向，AI翻译冲击需关注' },
  '心理学': { category: '人文社科', score: 68, demand: '中高', outlook: '心理健康需求上升，但需深造才能执业' },
  '社会学': { category: '人文社科', score: 60, demand: '中低', outlook: '用户研究、社会调查、公共管理方向' },
  '哲学': { category: '人文社科', score: 58, demand: '中低', outlook: '批判性思维是核心竞争力，需结合行业应用' },
  '历史学': { category: '人文社科', score: 55, demand: '中低', outlook: '文化教育、文博产业、内容创作' },

  // 理科基础类
  '数学与应用数学': { category: '基础理学', score: 75, demand: '中高', outlook: 'AI时代数学功底价值凸显，转行空间大' },
  '物理学': { category: '基础理学', score: 72, demand: '中', outlook: '量子计算、半导体等前沿领域有高端需求' },
  '化学': { category: '基础理学', score: 68, demand: '中', outlook: '新能源材料和化工方向有稳定需求' },
  '生物科学': { category: '基础理学', score: 68, demand: '中', outlook: '生物医药和基因技术是未来方向' },
  '统计学': { category: '基础理学', score: 82, demand: '很高', outlook: '数据科学时代的硬通货' },

  // 工科传统类
  '机械工程': { category: '传统工科', score: 70, demand: '中高', outlook: '智能制造升级带动新需求' },
  '土木工程': { category: '传统工科', score: 66, demand: '中', outlook: '基建增速放缓，但城市更新仍有空间' },
  '建筑学': { category: '传统工科', score: 68, demand: '中', outlook: '绿色建筑和智能设计是新方向' },
  '材料科学与工程': { category: '传统工科', score: 72, demand: '中高', outlook: '新能源材料、半导体材料前景好' },
  '能源与动力工程': { category: '传统工科', score: 74, demand: '中高', outlook: '新能源转型带来增量机会' },
  '环境工程': { category: '传统工科', score: 66, demand: '中', outlook: '双碳目标下环保投入加大' },

  // 艺术设计类
  '数字媒体技术': { category: '艺术设计', score: 78, demand: '高', outlook: '游戏、影视、元宇宙内容产业需求大' },
  '工业设计': { category: '艺术设计', score: 70, demand: '中', outlook: '智能硬件和消费电子领域有空间' },
  '视觉传达设计': { category: '艺术设计', score: 66, demand: '中', outlook: '品牌设计和数字营销方向' },
};

/** 专业关键词兜底匹配 */
const MAJOR_KEYWORDS = [
  { keywords: ['计算机', '软件', '编程', '算法', 'AI', '智能', '数据'], category: '计算机/AI', score: 88 },
  { keywords: ['电子', '通信', '电信', '集成电路', '芯片', '微电子', '半导体'], category: '电子信息', score: 85 },
  { keywords: ['医', '临床', '药', '护理', '口腔'], category: '医学', score: 82 },
  { keywords: ['金融', '经济', '会计', '财务', '审计'], category: '金融经济', score: 78 },
  { keywords: ['法律', '法学', '律师'], category: '法律管理', score: 74 },
  { keywords: ['数学', '物理', '化学', '生物', '统计'], category: '基础理学', score: 72 },
  { keywords: ['机械', '土木', '建筑', '材料', '能源', '环境'], category: '传统工科', score: 68 },
  { keywords: ['中文', '汉语言', '新闻', '英语', '日语', '翻译', '哲学', '历史', '考古'], category: '人文社科', score: 62 },
  { keywords: ['管理', '营销', '人力', '行政', '公共'], category: '法律管理', score: 68 },
  { keywords: ['设计', '媒体', '艺术', '动画', '影视', '音乐', '美术'], category: '艺术设计', score: 66 },
];

// ========== 天干地支数据 ==========
// 十天干
const TIAN_GAN = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'];
// 十二地支
const DI_ZHI = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'];

/** 天干五行属性 */
const TIAN_GAN_WUXING = {
  '甲': '木', '乙': '木',
  '丙': '火', '丁': '火',
  '戊': '土', '己': '土',
  '庚': '金', '辛': '金',
  '壬': '水', '癸': '水'
};

/** 地支五行属性 */
const DI_ZHI_WUXING = {
  '子': '水', '丑': '土',
  '寅': '木', '卯': '木',
  '辰': '土', '巳': '火',
  '午': '火', '未': '土',
  '申': '金', '酉': '金',
  '戌': '土', '亥': '水'
};

/** 天干评分（基于传统命理对事业发展的解释） */
const TIAN_GAN_SCORE = {
  '甲': { score: 85, trait: '参天大树，领导力强，适合开创性事业', element: '木' },
  '乙': { score: 78, trait: '柔韧花草，适应力强，适合协作型工作', element: '木' },
  '丙': { score: 88, trait: '太阳之火，热情奔放，适合创意和公众事业', element: '火' },
  '丁': { score: 82, trait: '烛火之光，专注执着，适合研究和精细化工作', element: '火' },
  '戊': { score: 80, trait: '城墙之土，稳重可靠，适合管理和基础建设', element: '土' },
  '己': { score: 75, trait: '田园之土，温和包容，适合教育和协调工作', element: '土' },
  '庚': { score: 86, trait: '刀剑之金，果敢决断，适合法律和工程技术', element: '金' },
  '辛': { score: 76, trait: '珠宝之金，精致敏锐，适合金融和艺术设计', element: '金' },
  '壬': { score: 84, trait: '江河之水，智慧灵动，适合学术和外交工作', element: '水' },
  '癸': { score: 74, trait: '雨露之水，细腻善感，适合文化创意和心理咨询', element: '水' },
};

/** 地支评分 */
const DI_ZHI_SCORE = {
  '子': { score: 82, trait: '聪明机敏，应变能力强' },
  '丑': { score: 78, trait: '踏实稳重，积累型发展' },
  '寅': { score: 84, trait: '敢作敢为，勇于开拓' },
  '卯': { score: 76, trait: '灵活柔韧，善于沟通' },
  '辰': { score: 80, trait: '气度不凡，有宏大志向' },
  '巳': { score: 80, trait: '思维敏捷，善于谋划' },
  '午': { score: 86, trait: '光明磊落，事业心强' },
  '未': { score: 74, trait: '温和敦厚，稳步前行' },
  '申': { score: 83, trait: '机灵多变，适应力强' },
  '酉': { score: 77, trait: '精明细致，专注专业' },
  '戌': { score: 76, trait: '忠诚可靠，团队支柱' },
  '亥': { score: 78, trait: '乐观豁达，人缘广阔' },
};

/**
 * 根据公历年份计算天干地支
 * 公元4年为甲子年，以此为基准推算
 */
function getYearStemBranch(year) {
  const baseYear = 4;
  const offset = (year - baseYear) % 60;
  const ganIndex = offset % 10;
  const zhiIndex = offset % 12;
  return {
    tianGan: TIAN_GAN[ganIndex],
    diZhi: DI_ZHI[zhiIndex],
    stemBranch: TIAN_GAN[ganIndex] + DI_ZHI[zhiIndex],
    ganIndex: ganIndex,
    zhiIndex: zhiIndex
  };
}

// ========== 时辰映射 ==========
/**
 * 根据小时获取时辰地支
 * 子时 23-00, 丑时 01-02, 寅时 03-04, 卯时 05-06, 辰时 07-08, 巳时 09-10,
 * 午时 11-12, 未时 13-14, 申时 15-16, 酉时 17-18, 戌时 19-20, 亥时 21-22
 */
function getShichen(hour) {
  const h = parseInt(hour);
  if (isNaN(h) || h < 0 || h > 23) return null;
  const zhiIndex = Math.floor(((h + 1) % 24) / 2);
  return {
    name: ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'][zhiIndex],
    index: zhiIndex,
    period: ['夜半(23-1)', '鸡鸣(1-3)', '平旦(3-5)', '日出(5-7)', '食时(7-9)', '隅中(9-11)',
             '日中(11-13)', '日昳(13-15)', '晡时(15-17)', '日入(17-19)', '黄昏(19-21)', '人定(21-23)'][zhiIndex]
  };
}

// ========== 日柱计算 ==========
/**
 * 计算日柱天干地支（基于公历日期）
 * 以 1900年1月1日 = 甲戌日 为基准
 */
function getDayStemBranch(year, month, day) {
  const baseDate = new Date(1900, 0, 1);
  const targetDate = new Date(year, month - 1, day);
  const diffDays = Math.round((targetDate - baseDate) / (1000 * 60 * 60 * 24));
  // 1900-01-01 = 甲戌 = 干支序号 10 (甲戌在60甲子中排第11,0-indexed = 10)
  const ganIndex = ((diffDays % 10) + 10) % 10;
  const zhiIndex = ((diffDays % 12) + 10) % 12;
  return {
    tianGan: TIAN_GAN[(ganIndex + 10) % 10],
    diZhi: DI_ZHI[(zhiIndex + 10) % 12],
    stemBranch: TIAN_GAN[(ganIndex + 10) % 10] + DI_ZHI[(zhiIndex + 10) % 12],
    ganIndex: (ganIndex + 10) % 10,
    zhiIndex: (zhiIndex + 10) % 12
  };
}

// ========== 时柱计算 ==========
/**
 * 根据日干和时辰地支计算时柱天干
 * 五鼠遁口诀：甲己还加甲，乙庚丙作初，丙辛从戊起，丁壬庚子居，戊癸何方发，壬子是真途。
 */
function getHourStemBranch(dayGanIndex, hourZhiIndex) {
  const hourStemStart = [0, 2, 4, 6, 8]; // 甲己→甲(0), 乙庚→丙(2), 丙辛→戊(4), 丁壬→庚(6), 戊癸→壬(8)
  const group = Math.floor(dayGanIndex / 2); // 每两个天干一组
  const ganIndex = (hourStemStart[group] + hourZhiIndex) % 10;
  return {
    tianGan: TIAN_GAN[ganIndex],
    diZhi: DI_ZHI[hourZhiIndex],
    stemBranch: TIAN_GAN[ganIndex] + DI_ZHI[hourZhiIndex],
    ganIndex: ganIndex,
    zhiIndex: hourZhiIndex
  };
}

// ========== 月柱计算 ==========
/**
 * 根据年干和月份计算月柱
 * 五虎遁口诀：甲己之年丙作首，乙庚之岁戊为头，丙辛必定寻庚起，丁壬壬位顺行流，若问戊癸何方发，甲寅之上好追求。
 */
function getMonthStemBranch(yearGanIndex, month) {
  const monthStemStart = [2, 4, 6, 8, 0]; // 甲己→丙(2), 乙庚→戊(4), 丙辛→庚(6), 丁壬→壬(8), 戊癸→甲(0)
  const group = Math.floor(yearGanIndex / 2);
  const ganIndex = (monthStemStart[group] + month - 1) % 10;
  const zhiIndex = (month + 1) % 12; // 正月建寅(2), 二月卯(3)...
  return {
    tianGan: TIAN_GAN[ganIndex],
    diZhi: DI_ZHI[zhiIndex],
    stemBranch: TIAN_GAN[ganIndex] + DI_ZHI[zhiIndex],
    ganIndex: ganIndex,
    zhiIndex: zhiIndex
  };
}

// ========== 五行分析 ==========
/** 五行相生关系 */
const WUXING_SHENG = {
  '木': '火', '火': '土', '土': '金', '金': '水', '水': '木'
};

/** 五行相克关系 */
const WUXING_KE = {
  '木': '土', '土': '水', '水': '火', '火': '金', '金': '木'
};

/** 五行属性特征（用于事业分析） */
const WUXING_TRAITS = {
  '木': { name: '木', emoji: '🌳', trait: '生发向上，创造力强', career: '教育、文化创意、医疗健康、生态环保', score_base: 80, color: '#5cb85c' },
  '火': { name: '火', emoji: '🔥', trait: '热情奔放，行动力强', career: '传媒演艺、市场营销、餐饮娱乐、能源电力', score_base: 82, color: '#d9534f' },
  '土': { name: '土', emoji: '🏔', trait: '稳重包容，诚信可靠', career: '房地产、建筑、金融、管理咨询', score_base: 78, color: '#f0ad4e' },
  '金': { name: '金', emoji: '⚜️', trait: '刚毅果断，执行力强', career: '法律、金融、工程技术、精密制造', score_base: 84, color: '#c9a96e' },
  '水': { name: '水', emoji: '💧', trait: '智慧灵动，适应力强', career: '学术研究、国际贸易、物流交通、信息技术', score_base: 80, color: '#4a90d9' }
};

/**
 * 完整八字分析：年柱 + 月柱 + 日柱 + 时柱 → 五行强弱
 */
function analyzeWuxing(year, month, day, hour) {
  // 四柱
  const yearPillar = getYearStemBranch(year);
  const monthPillar = getMonthStemBranch(yearPillar.ganIndex, month);
  const dayPillar = getDayStemBranch(year, month, day);
  const shichen = getShichen(hour);
  const hourPillar = shichen ? getHourStemBranch(dayPillar.ganIndex, shichen.index) : null;

  // 日主（日干五行）— 八字的核心
  const dayMasterElement = TIAN_GAN_WUXING[dayPillar.tianGan];

  // 统计天干五行出现次数
  const ganElements = [yearPillar.tianGan, monthPillar.tianGan, dayPillar.tianGan];
  if (hourPillar) ganElements.push(hourPillar.tianGan);

  // 统计地支五行出现次数
  const zhiElements = [yearPillar.diZhi, monthPillar.diZhi, dayPillar.diZhi];
  if (hourPillar) zhiElements.push(hourPillar.diZhi);

  // 五行计数
  const wuxingCount = { '木': 0, '火': 0, '土': 0, '金': 0, '水': 0 };
  ganElements.forEach(g => wuxingCount[TIAN_GAN_WUXING[g]]++);
  zhiElements.forEach(z => wuxingCount[DI_ZHI_WUXING[z]] += 0.5); // 地支权重0.5

  // 日主是否得令（月支五行与日主相同 → 得令）
  const monthZhiElement = DI_ZHI_WUXING[monthPillar.diZhi];
  const deLing = monthZhiElement === dayMasterElement;

  // 计算五行得分（日主加分，相生加分，被克减分）
  const wuxingScore = {};
  for (const [el, count] of Object.entries(wuxingCount)) {
    let score = count * 10;
    if (el === dayMasterElement) score += deLing ? 15 : 5; // 日主加成
    wuxingScore[el] = Math.round(score);
  }

  // 五行是否平衡（标准差越小越平衡）
  const values = Object.values(wuxingScore);
  const avg = values.reduce((a, b) => a + b, 0) / 5;
  const variance = values.reduce((sum, v) => sum + Math.pow(v - avg, 2), 0) / 5;
  const stdDev = Math.sqrt(variance);
  const balance = Math.max(0, Math.round(100 - stdDev * 3)); // 平衡度 0-100

  // 日主强弱
  const dayMasterStrength = Math.min(100, Math.round(wuxingScore[dayMasterElement] * 4));

  // 最强五行和最弱五行
  const sorted = Object.entries(wuxingScore).sort((a, b) => b[1] - a[1]);
  const strongest = sorted[0];
  const weakest = sorted[4];

  // 综合五行命理评分（日主强度 40% + 五行平衡 40% + 得令加成 20%）
  const rawScore = dayMasterStrength * 0.4 + balance * 0.4 + (deLing ? 20 : 0);

  return {
    pillars: {
      year: yearPillar,
      month: monthPillar,
      day: dayPillar,
      hour: hourPillar
    },
    shichen: shichen,
    dayMaster: {
      element: dayMasterElement,
      trait: WUXING_TRAITS[dayMasterElement].trait,
      emoji: WUXING_TRAITS[dayMasterElement].emoji,
      career: WUXING_TRAITS[dayMasterElement].career
    },
    wuxingCount: wuxingScore,
    strongest: { element: strongest[0], ...WUXING_TRAITS[strongest[0]], count: strongest[1] },
    weakest: { element: weakest[0], ...WUXING_TRAITS[weakest[0]], count: weakest[1] },
    balance: balance,
    dayMasterStrength: dayMasterStrength,
    deLing: deLing,
    score: Math.min(100, Math.max(30, Math.round(rawScore))),
    advice: generateWuxingAdvice(dayMasterElement, wuxingScore, deLing, balance)
  };
}

/**
 * 生成五行建议
 */
function generateWuxingAdvice(dayMaster, wuxingCount, deLing, balance) {
  const advices = [];
  const dt = WUXING_TRAITS[dayMaster];

  // 日主分析
  advices.push(`你的日主为「${dt.emoji} ${dayMaster}」— ${dt.trait}。${deLing ? '日主得月令之气，根基扎实，发展有后劲。' : '日主不得月令，需借助外界平台和团队力量来发挥潜能。'}`);

  // 五行平衡分析
  if (balance >= 75) {
    advices.push('你的五行分布均衡，性格和能力维度较为全面，适合多方面发展。');
  } else if (balance >= 50) {
    advices.push('五行略有偏颇，某方面特质突出，建议在优势领域深耕，同时适当补充短板。');
  } else {
    advices.push('五行分布不均，个性鲜明。不必强求面面俱到，找到适合自己的方向就是最好的。');
  }

  // 行业建议
  advices.push(`五行视角下适合的方向：${dt.career}。顺应自身五行特质选择行业，事半功倍。`);

  return advices;
}

// ========== 星座数据 ==========
const ZODIAC_DATA = [
  {
    name: '白羊座', emoji: '♈', element: '火',
    dateRange: [3, 21, 4, 19],
    score: 82, trait: '勇敢进取、充满激情',
    career: '适合创业、销售、竞技体育等需要冲劲的领域',
    advice: '发挥行动力优势，注意培养耐心和团队协作'
  },
  {
    name: '金牛座', emoji: '♉', element: '土',
    dateRange: [4, 20, 5, 20],
    score: 80, trait: '稳健踏实、持之以恒',
    career: '适合金融、会计、工程等需要稳定性的职业',
    advice: '稳健是你的优势，但也要敢于抓住机遇突破舒适区'
  },
  {
    name: '双子座', emoji: '♊', element: '风',
    dateRange: [5, 21, 6, 21],
    score: 78, trait: '机智灵活、善于沟通',
    career: '适合传媒、营销、教育等多元化的工作环境',
    advice: '广泛涉猎的同时，选定一两个方向深度发展'
  },
  {
    name: '巨蟹座', emoji: '♋', element: '水',
    dateRange: [6, 22, 7, 22],
    score: 77, trait: '细腻温柔、忠诚可靠',
    career: '适合医疗、教育、心理咨询等关怀型职业',
    advice: '发挥共情力优势，同时建立职业边界感'
  },
  {
    name: '狮子座', emoji: '♌', element: '火',
    dateRange: [7, 23, 8, 22],
    score: 88, trait: '自信大方、领导力强',
    career: '适合管理、演艺、创意总监等舞台中央的角色',
    advice: '领导力是你的天赋，记得给团队成员发光的机会'
  },
  {
    name: '处女座', emoji: '♍', element: '土',
    dateRange: [8, 23, 9, 22],
    score: 83, trait: '严谨细致、追求完美',
    career: '适合数据分析、质量控制、编辑、医疗等精细工作',
    advice: '完美主义是双刃剑，学会在"够好"和"完美"间平衡'
  },
  {
    name: '天秤座', emoji: '♎', element: '风',
    dateRange: [9, 23, 10, 23],
    score: 79, trait: '优雅公正、善于平衡',
    career: '适合法律、外交、设计、人力资源等需要协调力的职业',
    advice: '善于权衡利弊，但在关键时刻要敢于做决断'
  },
  {
    name: '天蝎座', emoji: '♏', element: '水',
    dateRange: [10, 24, 11, 22],
    score: 85, trait: '深邃敏锐、意志坚定',
    career: '适合科研、侦探、投资分析、战略咨询等深入型工作',
    advice: '洞察力是你最大的武器，保持专注就能做出成绩'
  },
  {
    name: '射手座', emoji: '♐', element: '火',
    dateRange: [11, 23, 12, 21],
    score: 81, trait: '乐观豁达、热爱自由',
    career: '适合国际贸易、旅游业、教育、出版等开阔型职业',
    advice: '保持探索精神，但也要有把一件事做透的耐心'
  },
  {
    name: '摩羯座', emoji: '♑', element: '土',
    dateRange: [12, 22, 1, 19],
    score: 87, trait: '坚韧不拔、目标明确',
    career: '适合企业管理、政府、建筑、金融等需要长期积累的领域',
    advice: '大器晚成的典范，坚持就是胜利，注意劳逸结合'
  },
  {
    name: '水瓶座', emoji: '♒', element: '风',
    dateRange: [1, 20, 2, 18],
    score: 80, trait: '独立创新、思维超前',
    career: '适合科技研发、互联网创业、公益事业等创新领域',
    advice: '保持独立思考的勇气，同时学会让想法落地执行'
  },
  {
    name: '双鱼座', emoji: '♓', element: '水',
    dateRange: [2, 19, 3, 20],
    score: 74, trait: '感性浪漫、富有想象力',
    career: '适合艺术创作、音乐、影视、心理咨询等领域',
    advice: '创造力是你的宝藏，同时需要建立现实感和执行力'
  }
];

/**
 * 根据月日获取星座
 */
function getZodiac(month, day) {
  for (const zodiac of ZODIAC_DATA) {
    const [startMonth, startDay, endMonth, endDay] = zodiac.dateRange;
    if (startMonth > endMonth) {
      // 跨年星座（摩羯座 12/22 - 1/19）
      if ((month === startMonth && day >= startDay) || (month === endMonth && day <= endDay)) {
        return zodiac;
      }
    } else {
      if ((month === startMonth && day >= startDay) || (month === endMonth && day <= endDay) ||
          (month > startMonth && month < endMonth)) {
        return zodiac;
      }
    }
  }
  return ZODIAC_DATA[0]; // fallback
}

// ========== MBTI 数据 ==========
const MBTI_DATA = {
  'INTJ': {
    name: '建筑师', score: 92,
    trait: '战略思维、独立自主、追求卓越',
    career: '科学家、工程师、战略顾问、投资分析师',
    advice: '你的远见和规划能力是最大的优势，相信自己的判断，同时多关注他人的感受会让你的路更宽。'
  },
  'INTP': {
    name: '逻辑学家', score: 85,
    trait: '善于分析、好奇心强、热爱理论',
    career: '程序员、数学家、研究员、系统架构师',
    advice: '你的逻辑分析能力超群，找对赛道后深度钻研，在技术和学术领域容易做出突破性成果。'
  },
  'ENTJ': {
    name: '指挥官', score: 94,
    trait: '天生的领导者、果断高效、目标驱动',
    career: 'CEO、政治家、军事指挥官、企业家',
    advice: '你是天生的领袖，大胆追求你的雄心壮志，注意培养同理心，领导者也需要追随者的心声。'
  },
  'ENTP': {
    name: '辩论家', score: 84,
    trait: '思维敏捷、善于创新、热爱挑战',
    career: '创业者、律师、产品经理、创意总监',
    advice: '你的创新思维和口才是稀缺资源，在创业或产品领域大有可为，注意把好想法执行落地。'
  },
  'INFJ': {
    name: '提倡者', score: 83,
    trait: '深刻的洞察力、理想主义、利他精神',
    career: '心理咨询师、作家、教育者、非营利组织负责人',
    advice: '你的共情力和洞察力能帮助很多人，选择有意义的领域深耕，让理想照进现实。'
  },
  'INFP': {
    name: '调停者', score: 72,
    trait: '理想主义、创造力丰富、忠于价值观',
    career: '作家、艺术家、心理咨询师、社会工作者',
    advice: '你的内心世界丰富多彩，追随内心的热情去做有创造性的事，注意加强行动力和现实规划。'
  },
  'ENFJ': {
    name: '主人公', score: 86,
    trait: '富有魅力、善于激励、以人为本',
    career: '教育者、HR总监、公关专家、政治家',
    advice: '你的人格魅力和领导力能点燃团队的激情，适合在教育和组织中扮演核心角色。'
  },
  'ENFP': {
    name: '竞选者', score: 76,
    trait: '热情洋溢、充满创意、社交达人',
    career: '记者、营销专家、演员、自由职业者',
    advice: '你的热情和创造力是你的超级力量，在需要灵感和沟通的领域会发光发热。'
  },
  'ISTJ': {
    name: '物流师', score: 82,
    trait: '严谨务实、责任感强、可靠稳定',
    career: '会计师、审计师、法官、行政管理者',
    advice: '你的可靠性是团队最宝贵的资产，在需要精确和纪律的领域是不可替代的人才。'
  },
  'ISFJ': {
    name: '守卫者', score: 78,
    trait: '温暖守护、默默奉献、细致入微',
    career: '护士、教师、社工、图书管理员',
    advice: '你的关怀和细致让世界更温暖，在医疗、教育等助人领域会找到深度的成就感。'
  },
  'ESTJ': {
    name: '总经理', score: 87,
    trait: '执行力强、组织有序、结果导向',
    career: '企业管理者、军官、法官、项目经理',
    advice: '你的组织能力和执行力是职场的硬通货，适合在传统组织中稳步晋升到领导岗位。'
  },
  'ESFJ': {
    name: '执政官', score: 79,
    trait: '热心周到、社交能力强、注重和谐',
    career: '销售经理、公关人员、活动策划、医疗从业者',
    advice: '你的人际交往能力让你在任何团队中都备受欢迎，这份人脉资源是长期发展的基石。'
  },
  'ISTP': {
    name: '鉴赏家', score: 77,
    trait: '实操能力强、冷静理性、善于解决问题',
    career: '工程师、飞行员、技师、外科医生',
    advice: '你的动手能力和冷静头脑在技术和实操领域价值连城，深耕一门硬技能最有前途。'
  },
  'ISFP': {
    name: '探险家', score: 71,
    trait: '艺术天赋、随和自然、活在当下',
    career: '设计师、摄影师、花艺师、按摩治疗师',
    advice: '你的审美和艺术感是独特的天赋，在设计和创意行业能走出自己的路，记得多展示作品。'
  },
  'ESTP': {
    name: '企业家', score: 82,
    trait: '行动派、适应力强、善于抓住机会',
    career: '销售明星、企业家、急救人员、体育教练',
    advice: '你的行动力和应变能力让你在商业实战中脱颖而出，敢闯敢拼但也要做好风险控制。'
  },
  'ESFP': {
    name: '表演者', score: 73,
    trait: '活力四射、善于表现、享受当下',
    career: '演员、主持人、导游、健身教练',
    advice: '你的舞台魅力和感染力是与生俱来的，在需要展示自我的职业中能获得最大的满足感。'
  }
};

// ========== 签文库（每日一签） ==========
const FORTUNE_POOL = [
  { level: '大吉', poem: '龙行九天云雾开，凤栖高梧福自来。前程似锦无需虑，步步高升到玉台。', explain: '此签大吉！预示你正处在一个上升期，之前的努力即将开花结果。无论是学业还是事业，都将迎来突破性进展。保持信心，大胆前行。' },
  { level: '大吉', poem: '红日初升照九州，春风得意马蹄柔。贵人已在来时路，一片丹心不用愁。', explain: '如旭日东升，前途一片光明。近期会有贵人相助，在关键时刻为你指点迷津。你的真诚和努力终将被看见。' },
  { level: '大吉', poem: '金鳞跃浪化龙身，万里鹏程次第新。岁月从来酬志士，青云有路莫辞频。', explain: '鱼跃龙门之象！你正面临一个重要的转折点，勇敢跨过去就是海阔天空。学业或事业上会有质的飞跃。' },
  { level: '大吉', poem: '东风送暖入华庭，紫气东来万象明。自有天机藏妙处，好将心力付长缨。', explain: '紫气东来，运势亨通。新的机会正在靠近，你现在做的准备都会派上用场。保持敏锐，抓住属于你的时刻。' },
  { level: '大吉', poem: '沧海月明珠有泪，蓝田日暖玉生烟。此情可待成追忆，只是当时已悄然。', explain: '宝贵的机会往往在不经意间降临。你的才华如明珠美玉，终将被人发现和珍视。耐心等待，静待花开。' },

  { level: '吉', poem: '青山一道同云雨，明月何曾是两乡。莫愁前路无知己，天下谁人不识君。', explain: '你并不孤单，前方有同道之人相伴。坚持做对的事，你的能力和品格会为你赢得尊重和机会。' },
  { level: '吉', poem: '好风凭借力，送我上青云。待到重阳日，还来就菊花。', explain: '借助有利的时机和平台，你能够快速成长。近期如果有新的学习或工作机会，不妨大胆尝试。' },
  { level: '吉', poem: '千淘万漉虽辛苦，吹尽狂沙始到金。自古成功无捷径，一分辛苦一分才。', explain: '虽需付出努力，但回报是确定的。你正在积累阶段，每一步都不会白走，坚持下去就会看到成果。' },
  { level: '吉', poem: '小荷才露尖尖角，早有蜻蜓立上头。天生我材必有用，莫使金樽空对月。', explain: '你的潜力正在被看见。虽然才刚起步，但已经展现出独特的竞争力。继续深耕，未来可期。' },
  { level: '吉', poem: '春风桃李花开日，秋雨梧桐叶落时。世间万物皆有序，水到渠成莫强求。', explain: '万事万物都有自己的节奏，不必焦虑比较。按自己的步调前进，属于你的季节终会到来。' },

  { level: '中吉', poem: '山重水复疑无路，柳暗花明又一村。人生何处不风景，且把浮名换浅斟。', explain: '眼前的困难只是暂时的，转机即将出现。有时候绕道而行反而能发现更美的风景，保持灵活和乐观。' },
  { level: '中吉', poem: '十年磨一剑，霜刃未曾试。今日把示君，谁有不平事。', explain: '长期积累的实力即将派上用场。你比想象中更强大，只是在等待一个合适的时机展示自己。' },
  { level: '中吉', poem: '梅须逊雪三分白，雪却输梅一段香。各有因缘莫羡人，此心安处是吾乡。', explain: '不必羡慕他人的路，你有自己独特的优势。找到适合自己的方向比盲目跟风更重要，各有所长。' },
  { level: '中吉', poem: '潮平两岸阔，风正一帆悬。海日生残夜，江春入旧年。', explain: '平稳向前的运势。没有大起大落，正好适合沉淀和积累。在平静中做好规划，为未来蓄力。' },
  { level: '中吉', poem: '众里寻他千百度，蓦然回首，那人却在灯火阑珊处。', explain: '你寻求的答案可能就在身边。有时候最好的机会不在远方，而在你忽视的日常之中，回头看看。' },

  { level: '小吉', poem: '半亩方塘一鉴开，天光云影共徘徊。问渠那得清如许，为有源头活水来。', explain: '保持学习和成长的心态是关键。你的潜力需要持续输入新知识来激活，不要停滞不前。' },
  { level: '小吉', poem: '不畏浮云遮望眼，自缘身在最高层。心宽天地阔，何必苦钻营。', explain: '用更高的视角看问题，很多困扰自然消散。提升格局是关键，不要陷入眼前的琐碎之中。' },
  { level: '小吉', poem: '竹杖芒鞋轻胜马，谁怕？一蓑烟雨任平生。', explain: '轻装上阵，保持豁达的心态。不需要太多包袱，用平常心面对挑战反而能走得更远。' },
  { level: '小吉', poem: '纸上得来终觉浅，绝知此事要躬行。知行合一最为贵，莫做空谈误国人。', explain: '光有想法不够，行动才是关键。近期适合把计划付诸实践，实践中的经验比书本更宝贵。' },
  { level: '小吉', poem: '昨夜西风凋碧树，独上高楼，望尽天涯路。', explain: '你可能正处于独处和思考的阶段。这不是坏事，理清方向比盲目赶路更重要，想好了再出发。' },

  { level: '平', poem: '春有百花秋有月，夏有凉风冬有雪。若无闲事挂心头，便是人间好时节。', explain: '平常心态，顺其自然。运势没有大波动，适合按部就班地做好手头的事，不急不躁。' },
  { level: '平', poem: '莫听穿林打叶声，何妨吟啸且徐行。竹杖芒鞋轻胜马，谁怕一蓑烟雨任平生。', explain: '外界的声音很多，但不必被影响。按照自己的节奏走，风雨只是暂时的，内心平静最重要。' },
  { level: '平', poem: '花开堪折直须折，莫待无花空折枝。青春易逝须珍惜，把握当下莫迟疑。', explain: '提醒你把握当下的时光和机会。光阴易逝，不要让犹豫消耗掉宝贵的青春和机遇。' },
  { level: '平', poem: '横看成岭侧成峰，远近高低各不同。不识庐山真面目，只缘身在此山中。', explain: '你可能被自己的想法困住了。试着换个角度看问题，或者向信任的人请教，会有新的发现。' },
  { level: '平', poem: '人生到处知何似，应似飞鸿踏雪泥。泥上偶然留指爪，鸿飞那复计东西。', explain: '人生充满偶然和不确定性，不必太执着于一时的得失。保持流动性，随遇而安中寻找方向。' },

  { level: '末吉', poem: '欲渡黄河冰塞川，将登太行雪满山。闲来垂钓碧溪上，忽复乘舟梦日边。', explain: '短期内可能遇到一些阻碍，建议暂缓重大决定。利用这段时间充电和反思，转机在冬天到来前会出现。' },
  { level: '末吉', poem: '抽刀断水水更流，举杯消愁愁更愁。人生在世不称意，明朝散发弄扁舟。', explain: '强行对抗困境效果可能不佳。暂时放一放，给自己喘息的空间。烦恼总会过去，重要的是调整心态。' },
  { level: '末吉', poem: '无边落木萧萧下，不尽长江滚滚来。世事浮沉皆有定，且将心事付瑶琴。', explain: '有些事不在你的控制范围内，学会接受和放下。把精力放在自己能改变的事情上，余下的交给时间。' },
  { level: '末吉', poem: '林花谢了春红，太匆匆。无奈朝来寒雨晚来风。', explain: '近期的运势稍有波折，可能与机会失之交臂。不要气馁，风雨过后会有新的生机，保持韧性。' },
  { level: '末吉', poem: '世事一场大梦，人生几度秋凉。夜来风叶已鸣廊，看取眉头鬓上。', explain: '这段时间适合反思和内省。不要急于求成，慢下来审视自己真正想要的，沉淀后的出发更有力量。' }
];

// ========== 运势宜忌数据 ==========
const FORTUNE_YI = [
  '学习新技能', '结交良友', '规划未来', '投资自我', '阅读经典',
  '整理思路', '锻炼身体', '早睡早起', '记录心得', '帮助他人',
  '参加培训', '思考方向', '尝试新事物', '与人合作', '沉淀积累'
];

const FORTUNE_JI = [
  '冲动决策', '与人争执', '急于求成', '熬夜透支', '盲目跟风',
  '半途而废', '骄傲自满', '拖延逃避', '投机取巧', '固步自封',
  '好高骛远', '贪图安逸', '轻信流言', '过度消费', '闭门造车'
];

const LUCKY_COLORS = ['#4a90d9', '#c9a96e', '#5cb85c', '#f0ad4e', '#d9534f', '#8e44ad', '#1abc9c', '#e74c3c', '#3498db', '#2ecc71'];
const LUCKY_COLORS_NAMES = ['天空蓝', '香槟金', '翠绿', '暖橙', '中国红', '优雅紫', '青碧', '朱砂红', '深海蓝', '翡翠绿'];
const LUCKY_DIRECTIONS = ['东方', '东南方', '南方', '西南方', '西方', '西北方', '北方', '东北方'];
