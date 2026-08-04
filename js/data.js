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
  '计算机科学与技术': { category: '计算机/AI', score: 79, demand: '极高', outlook: '人工智能、互联网、金融科技等领域需求旺盛' },
  '软件工程': { category: '计算机/AI', score: 73, demand: '极高', outlook: '全行业数字化转型的核心驱动力' },
  '人工智能': { category: '计算机/AI', score: 77, demand: '极高', outlook: '未来十年最具发展潜力的方向之一' },
  '数据科学': { category: '计算机/AI', score: 72, demand: '极高', outlook: '大数据时代，数据驱动决策成为主流' },
  '数据科学与大数据技术': { category: '计算机/AI', score: 72, demand: '极高', outlook: '985投档线持续走高，就业薪资领先' },
  '智能科学与技术': { category: '计算机/AI', score: 76, demand: '很高', outlook: '智能系统未来将渗入各行各业' },
  '物联网工程': { category: '计算机/AI', score: 64, demand: '很高', outlook: '万物互联时代的基础技术' },
  '网络空间安全': { category: '计算机/AI', score: 79, demand: '很高', outlook: '数字化时代的刚需，人才缺口巨大' },
  '信息安全': { category: '计算机/AI', score: 76, demand: '很高', outlook: '企业安全合规需求持续增长' },
  '区块链工程': { category: '计算机/AI', score: 84, demand: '高', outlook: 'Web3和数字经济的核心基础设施' },

  // 电子信息类
  '电子信息工程': { category: '电子信息', score: 80, demand: '很高', outlook: '通信、芯片、消费电子行业需求稳定' },
  '通信工程': { category: '电子信息', score: 67, demand: '很高', outlook: '5G/6G建设持续推进，通信人才需求大' },
  '电子科学与技术': { category: '电子信息', score: 69, demand: '很高', outlook: '芯片产业的战略重要性日益提升' },
  '微电子科学与工程': { category: '电子信息', score: 90, demand: '很高', outlook: '国产芯片自主研发的核心专业，985投档线极高' },
  '集成电路设计与集成系统': { category: '电子信息', score: 85, demand: '极高', outlook: '国家战略重点，长期利好，投档线直逼计算机' },
  '光电信息科学与工程': { category: '电子信息', score: 66, demand: '高', outlook: '光通信和光学设备领域稳定增长' },
  '电气工程及其自动化': { category: '电子信息', score: 69, demand: '高', outlook: '电网、新能源、智能制造领域需求大' },
  '自动化': { category: '电子信息', score: 66, demand: '高', outlook: '工业4.0和智能制造的核心专业' },

  // 医学类
  '临床医学': { category: '医学', score: 91, demand: '极高', outlook: '医疗健康永远是人类刚需，985投档线极高' },
  '口腔医学': { category: '医学', score: 92, demand: '极高', outlook: '收入可观，就业灵活度高的黄金专业' },
  '基础医学': { category: '医学', score: 96, demand: '中高', outlook: '医学科研方向，适合学术路线，投档线低于临床' },
  '药学': { category: '医学', score: 86, demand: '高', outlook: '制药行业稳定，研发岗前景好' },
  '中医学': { category: '医学', score: 78, demand: '高', outlook: '国家大力扶持中医药发展，海外认可度提升' },
  '护理学': { category: '医学', score: 68, demand: '极高', outlook: '老龄化社会催生大量护理需求，投档线偏低但就业好' },
  '医学影像学': { category: '医学', score: 80, demand: '高', outlook: 'AI+医疗影像方向有新机会' },
  '公共卫生': { category: '医学', score: 76, demand: '高', outlook: '疫情后公共卫生体系建设加速' },

  // 金融经济类
  '金融学': { category: '金融经济', score: 74, demand: '高', outlook: '金融行业核心岗位竞争激烈但回报丰厚' },
  '金融工程': { category: '金融经济', score: 71, demand: '高', outlook: '量化金融方向，数理能力强者优势明显' },
  '经济学': { category: '金融经济', score: 85, demand: '中高', outlook: '适用面广但需结合其他技能提升竞争力' },
  '国际经济与贸易': { category: '金融经济', score: 58, demand: '中', outlook: '全球化波动影响需求，跨境电商是新方向' },
  '会计学': { category: '金融经济', score: 65, demand: '高', outlook: '稳定刚需，CPA持证者竞争力强' },
  '财务管理': { category: '金融经济', score: 63, demand: '高', outlook: '企业财务数字化转型带来新机遇' },

  // 法律/管理类
  '法学': { category: '法律管理', score: 86, demand: '中高', outlook: '法考通过后职业发展空间大' },
  '工商管理': { category: '法律管理', score: 72, demand: '中', outlook: '需结合行业深耕，单靠专业竞争力有限' },
  '人力资源管理': { category: '法律管理', score: 71, demand: '中高', outlook: '组织发展领域有增长空间' },
  '市场营销': { category: '法律管理', score: 54, demand: '中高', outlook: '数字营销方向有增量机会' },

  // 人文社科类
  '汉语言文学': { category: '人文社科', score: 82, demand: '中', outlook: '内容创作、编辑出版、教育方向' },
  '新闻传播学': { category: '人文社科', score: 74, demand: '中', outlook: '新媒体和内容营销带来新就业形态' },
  '英语': { category: '人文社科', score: 63, demand: '中', outlook: '翻译、外贸、国际业务方向，AI翻译冲击需关注' },
  '心理学': { category: '人文社科', score: 76, demand: '中高', outlook: '心理健康需求上升，但需深造才能执业' },
  '社会学': { category: '人文社科', score: 65, demand: '中低', outlook: '用户研究、社会调查、公共管理方向' },
  '哲学': { category: '人文社科', score: 84, demand: '中低', outlook: '批判性思维是核心竞争力，需结合行业应用' },
  '历史学': { category: '人文社科', score: 84, demand: '中低', outlook: '文化教育、文博产业、内容创作' },

  // 理科基础类
  '数学与应用数学': { category: '基础理学', score: 87, demand: '中高', outlook: 'AI时代数学功底价值凸显，转行空间大' },
  '物理学': { category: '基础理学', score: 85, demand: '中', outlook: '量子计算、半导体等前沿领域有高端需求' },
  '化学': { category: '基础理学', score: 83, demand: '中', outlook: '新能源材料和化工方向有稳定需求' },
  '生物科学': { category: '基础理学', score: 82, demand: '中', outlook: '生物医药和基因技术是未来方向' },
  '统计学': { category: '基础理学', score: 84, demand: '很高', outlook: '数据科学时代的硬通货' },

  // 工科传统类
  '机械工程': { category: '传统工科', score: 87, demand: '中高', outlook: '智能制造升级带动新需求' },
  '土木工程': { category: '传统工科', score: 40, demand: '中', outlook: '基建增速放缓，但城市更新仍有空间' },
  '建筑学': { category: '传统工科', score: 62, demand: '中', outlook: '绿色建筑和智能设计是新方向' },
  '材料科学与工程': { category: '传统工科', score: 80, demand: '中高', outlook: '新能源材料、半导体材料前景好' },
  '能源与动力工程': { category: '传统工科', score: 85, demand: '中高', outlook: '新能源转型带来增量机会' },
  '环境工程': { category: '传统工科', score: 68, demand: '中', outlook: '双碳目标下环保投入加大' },

  // 艺术设计类
  '数字媒体技术': { category: '艺术设计', score: 74, demand: '高', outlook: '游戏、影视、元宇宙内容产业需求大' },
  '工业设计': { category: '艺术设计', score: 60, demand: '中', outlook: '智能硬件和消费电子领域有空间' },
  '视觉传达设计': { category: '艺术设计', score: 64, demand: '中', outlook: '品牌设计和数字营销方向' },

  // ===== 更多专业补充 =====
  // 计算机/AI 补充
  '网络工程': { category: '计算机/AI', score: 82, demand: '高', outlook: '云计算和网络基础设施持续增长' },
  '数字媒体技术(计算机)': { category: '计算机/AI', score: 82, demand: '高', outlook: '计算机与艺术交叉领域新机遇' },
  '空间信息与数字技术': { category: '计算机/AI', score: 80, demand: '中高', outlook: '地理信息和智慧城市方向' },
  '虚拟现实技术': { category: '计算机/AI', score: 85, demand: '很高', outlook: 'VR/AR/MR产业正在爆发前夜' },
  '新媒体技术': { category: '计算机/AI', score: 78, demand: '中高', outlook: '新媒体和数字内容产业需求增长' },
  '信息与计算科学': { category: '计算机/AI', score: 79, demand: '高', outlook: '数学+计算机复合型人才稀缺' },

  // 电子信息补充
  '电磁场与无线技术': { category: '电子信息', score: 78, demand: '中高', outlook: '天线/射频/雷达领域有稳定需求' },
  '电波传播与天线': { category: '电子信息', score: 75, demand: '中', outlook: '通信和国防领域的特色专业' },
  '电子信息科学与技术': { category: '电子信息', score: 84, demand: '高', outlook: '电子+信息的复合型专业前景好' },
  '测控技术与仪器': { category: '电子信息', score: 76, demand: '中高', outlook: '精密仪器和智能检测方向' },
  '智能感知工程': { category: '电子信息', score: 85, demand: '很高', outlook: '智能传感器和物联网的黄金赛道' },
  '柔性电子学': { category: '电子信息', score: 88, demand: '很高', outlook: '未来显示和可穿戴设备的核心' },
  '机器人工程': { category: '电子信息', score: 77, demand: '极高', outlook: '工业4.0和服务机器人爆发式增长' },

  // 机械/交通/航空航天
  '车辆工程': { category: '传统工科', score: 74, demand: '高', outlook: '新能源汽车和智能驾驶带来新机遇' },
  '船舶与海洋工程': { category: '传统工科', score: 82, demand: '中', outlook: '航运和海洋资源开发有稳定需求' },
  '航空航天工程': { category: '传统工科', score: 84, demand: '很高', outlook: '商业航天和低空经济是国家战略方向' },
  '飞行器设计与工程': { category: '传统工科', score: 86, demand: '很高', outlook: '大飞机和无人机产业蓬勃发展' },
  '飞行器动力工程': { category: '传统工科', score: 64, demand: '很高', outlook: '航空发动机核心技术突破期' },
  '交通运输': { category: '传统工科', score: 68, demand: '中', outlook: '智慧交通和物流升级带来新方向' },
  '交通工程': { category: '传统工科', score: 53, demand: '中', outlook: '轨道交通和城市交通管理' },
  '轮机工程': { category: '传统工科', score: 62, demand: '中', outlook: '船舶动力和海洋工程方向' },
  '过程装备与控制工程': { category: '传统工科', score: 66, demand: '中', outlook: '化工装备和过程控制领域' },
  '智能制造工程': { category: '传统工科', score: 74, demand: '很高', outlook: '制造强国战略下的热门新专业' },
  '增材制造工程': { category: '传统工科', score: 81, demand: '高', outlook: '3D打印技术在工业领域的深度应用' },
  '新能源汽车工程': { category: '传统工科', score: 88, demand: '极高', outlook: '新能源汽车产业持续爆发' },

  // 土木/建筑/水利
  '给排水科学与工程': { category: '传统工科', score: 62, demand: '中', outlook: '城市基础设施升级仍有需求' },
  '水利水电工程': { category: '传统工科', score: 72, demand: '中高', outlook: '国家水网建设投入持续加大' },
  '港口航道与海岸工程': { category: '传统工科', score: 62, demand: '中', outlook: '海洋强国战略下的基础专业' },
  '测绘工程': { category: '传统工科', score: 68, demand: '中高', outlook: '高分遥感+GIS+无人机测绘新方向' },
  '城乡规划': { category: '传统工科', score: 68, demand: '中', outlook: '新型城镇化和城市更新有空间' },
  '风景园林': { category: '传统工科', score: 63, demand: '中', outlook: '生态文明建设带动景观设计需求' },
  '城市地下空间工程': { category: '传统工科', score: 64, demand: '中', outlook: '地铁和地下管廊建设' },

  // 材料/化工/纺织
  '高分子材料与工程': { category: '传统工科', score: 82, demand: '中高', outlook: '塑料/橡胶/纤维在新能源中的应用' },
  '复合材料与工程': { category: '传统工科', score: 76, demand: '中高', outlook: '航空航天和新能源汽车催生高端需求' },
  '新能源材料与器件': { category: '传统工科', score: 66, demand: '很高', outlook: '光伏/储能/氢能材料是万亿级赛道' },
  '纳米材料与技术': { category: '传统工科', score: 82, demand: '高', outlook: '前沿新材料方向，研发岗位多' },
  '化学工程与工艺': { category: '传统工科', score: 66, demand: '中高', outlook: '传统化工向绿色化工转型中' },
  '制药工程': { category: '传统工科', score: 76, demand: '高', outlook: '生物制药和化学制药行业稳定增长' },
  '轻化工程': { category: '传统工科', score: 58, demand: '中低', outlook: '纺织印染方向，建议向新材料转型' },
  '纺织工程': { category: '传统工科', score: 56, demand: '中低', outlook: '传统纺织，智能穿戴是新机会' },
  '服装设计与工程': { category: '艺术设计', score: 60, demand: '中', outlook: '时尚产业和电商直播带来增量' },
  '食品科学与工程': { category: '传统工科', score: 68, demand: '中高', outlook: '食品安全和健康食品是长期刚需' },
  '酿酒工程': { category: '传统工科', score: 70, demand: '中高', outlook: '酒类消费稳定，高端化趋势明显' },

  // 生物/农业/环境
  '生物工程': { category: '基础理学', score: 74, demand: '中', outlook: '生物制药和合成生物学是新方向' },
  '生物医学工程': { category: '基础理学', score: 87, demand: '很高', outlook: '医疗器械和AI辅助诊断前景广阔' },
  '生物制药': { category: '基础理学', score: 86, demand: '很高', outlook: '精准医疗和细胞治疗蓬勃发展' },
  '农业工程': { category: '传统工科', score: 89, demand: '中低', outlook: '智慧农业和精准农业是新增长点' },
  '农学': { category: '基础理学', score: 84, demand: '中', outlook: '种业振兴和粮食安全国家战略' },
  '植物保护': { category: '基础理学', score: 78, demand: '中低', outlook: '绿色植保和生物农药有发展' },
  '动物科学': { category: '基础理学', score: 81, demand: '中', outlook: '畜牧业和宠物经济有空间' },
  '动物医学': { category: '医学', score: 72, demand: '高', outlook: '宠物医疗爆发式增长的好赛道' },
  '林学': { category: '基础理学', score: 58, demand: '中低', outlook: '碳中和背景下林业碳汇有新机遇' },
  '园林': { category: '艺术设计', score: 64, demand: '中', outlook: '城市绿化和景观设计稳定需求' },
  '水产养殖学': { category: '基础理学', score: 58, demand: '中', outlook: '水产养殖和海洋牧场方向' },

  // 能源/矿业/安全
  '核工程与核技术': { category: '传统工科', score: 84, demand: '很高', outlook: '核能和核技术应用战略地位提升' },
  '新能源科学与工程': { category: '传统工科', score: 87, demand: '极高', outlook: '光伏/风电/储能/氢能全面爆发' },
  '储能科学与工程': { category: '传统工科', score: 91, demand: '极高', outlook: '储能是新能源时代的核心瓶颈' },
  '采矿工程': { category: '传统工科', score: 52, demand: '低', outlook: '传统采矿，建议向智能采矿转型' },
  '矿物加工工程': { category: '传统工科', score: 54, demand: '中低', outlook: '选矿和资源综合利用' },
  '石油工程': { category: '传统工科', score: 60, demand: '中', outlook: '传统能源面临转型，地热是新增量' },
  '安全工程': { category: '传统工科', score: 70, demand: '中高', outlook: '安全生产监管持续加强' },
  '应急技术与管理': { category: '传统工科', score: 74, demand: '高', outlook: '应急管理体系建设的刚需专业' },

  // 数学/物理/天文
  '信息与计算科学': { category: '基础理学', score: 84, demand: '高', outlook: '数学+计算机复合型人才稀缺' },
  '应用物理学': { category: '基础理学', score: 83, demand: '中', outlook: '半导体/量子/光学等方向有高端需求' },
  '应用化学': { category: '基础理学', score: 71, demand: '中', outlook: '新材料和化工方向应用广泛' },
  '天文学': { category: '基础理学', score: 70, demand: '中低', outlook: '天体物理和航天探索高端科研方向' },
  '大气科学': { category: '基础理学', score: 83, demand: '中', outlook: '气象和气候变化的科研和公共服务' },
  '海洋科学': { category: '基础理学', score: 82, demand: '中', outlook: '海洋资源和环境保护的战略方向' },
  '地球物理学': { category: '基础理学', score: 66, demand: '中低', outlook: '地震勘探和能源探测有需求' },
  '地质学': { category: '基础理学', score: 62, demand: '中低', outlook: '矿产资源勘探和地质灾害防治' },
  '地理信息科学': { category: '基础理学', score: 74, demand: '高', outlook: 'GIS和遥感技术的应用日益广泛' },

  // 医学补充
  '预防医学': { category: '医学', score: 86, demand: '高', outlook: '公共卫生体系建设持续加强' },
  '麻醉学': { category: '医学', score: 84, demand: '极高', outlook: '麻醉医生缺口大，收入可观' },
  '眼视光医学': { category: '医学', score: 82, demand: '很高', outlook: '近视防控和眼科医疗需求旺盛' },
  '精神医学': { category: '医学', score: 80, demand: '很高', outlook: '心理健康需求爆发式增长' },
  '放射医学': { category: '医学', score: 78, demand: '高', outlook: 'AI+影像和介入治疗新方向' },
  '儿科学': { category: '医学', score: 81, demand: '很高', outlook: '儿科医生缺口巨大' },
  '妇幼保健医学': { category: '医学', score: 76, demand: '高', outlook: '生育健康和妇幼保健刚需' },
  '中西医临床医学': { category: '医学', score: 77, demand: '中高', outlook: '中西医结合是国家鼓励方向' },
  '针灸推拿学': { category: '医学', score: 74, demand: '高', outlook: '中医药国际化带动海外需求' },
  '中药学': { category: '医学', score: 73, demand: '高', outlook: '中药现代化和国际化空间大' },
  '法医学': { category: '医学', score: 72, demand: '中高', outlook: '司法鉴定和社会治理需求稳定' },
  '医学检验技术': { category: '医学', score: 70, demand: '高', outlook: '第三方医学检验市场持续扩大' },
  '康复治疗学': { category: '医学', score: 74, demand: '很高', outlook: '老龄化社会和运动康复需求爆发' },
  '智能医学工程': { category: '医学', score: 84, demand: '极高', outlook: 'AI+医疗交叉的黄金新赛道' },

  // 经济/管理补充
  '保险学': { category: '金融经济', score: 72, demand: '中高', outlook: '人口老龄化带动养老保险增长' },
  '投资学': { category: '金融经济', score: 80, demand: '高', outlook: '资本市场和财富管理行业上升期' },
  '精算学': { category: '金融经济', score: 87, demand: '很高', outlook: '精算师稀缺，保险和金融刚需' },
  '税收学': { category: '金融经济', score: 59, demand: '中高', outlook: '税务筹划和企业合规需求旺盛' },
  '信用管理': { category: '金融经济', score: 72, demand: '中高', outlook: '征信和信用评级行业增长' },
  '数字经济': { category: '金融经济', score: 76, demand: '很高', outlook: '数字经济和平台经济是国家战略' },
  '供应链管理': { category: '法律管理', score: 73, demand: '高', outlook: '全球供应链重构带来新需求' },
  '物流管理': { category: '法律管理', score: 50, demand: '中高', outlook: '电商物流和智慧供应链方向' },
  '电子商务': { category: '法律管理', score: 59, demand: '中高', outlook: '直播电商和跨境电商蓬勃发展' },
  '旅游管理': { category: '法律管理', score: 60, demand: '中', outlook: '文旅融合和定制旅游是新机会' },
  '酒店管理': { category: '法律管理', score: 58, demand: '中', outlook: '高端酒店和度假产业稳定' },
  '会展经济与管理': { category: '法律管理', score: 61, demand: '中', outlook: '会展产业和活动经济有空间' },
  '公共事业管理': { category: '法律管理', score: 62, demand: '中', outlook: '公共服务和社会治理方向' },
  '行政管理': { category: '法律管理', score: 64, demand: '中', outlook: '公务员和企事业单位管理岗' },
  '劳动与社会保障': { category: '法律管理', score: 63, demand: '中', outlook: '社保和人力资源服务稳定需求' },

  // 教育/体育
  '教育学': { category: '人文社科', score: 68, demand: '中', outlook: '教育行业是永恒主题，AI教育是新方向' },
  '学前教育': { category: '人文社科', score: 62, demand: '高', outlook: '托幼一体化和早教市场刚需' },
  '特殊教育': { category: '人文社科', score: 64, demand: '高', outlook: '特殊教育师资缺口长期存在' },
  '教育技术学': { category: '人文社科', score: 72, demand: '高', outlook: '在线教育和AI教育技术爆发' },
  '体育教育': { category: '人文社科', score: 60, demand: '中', outlook: '学校体育和社会体育培训' },
  '运动训练': { category: '人文社科', score: 62, demand: '中高', outlook: '竞技体育和健身产业发展快' },
  '运动康复': { category: '医学', score: 75, demand: '很高', outlook: '运动医学和康复产业高速增长' },

  // 艺术补充
  '广播电视编导': { category: '艺术设计', score: 65, demand: '中', outlook: '内容创作和短视频产业有空间' },
  '播音与主持艺术': { category: '艺术设计', score: 63, demand: '中', outlook: '新媒体主播和有声内容增长' },
  '动画': { category: '艺术设计', score: 74, demand: '高', outlook: '国漫崛起和游戏产业带动需求' },
  '摄影': { category: '艺术设计', score: 60, demand: '中', outlook: '商业摄影和短视频拍摄有市场' },
  '书法学': { category: '艺术设计', score: 55, demand: '中低', outlook: '传统文化复兴和教育培训方向' },
  '产品设计': { category: '艺术设计', score: 66, demand: '中', outlook: '智能硬件和消费升级带动需求' },
  '环境设计': { category: '艺术设计', score: 64, demand: '中', outlook: '室内设计和商业空间设计需求稳' },
  '服装与服饰设计': { category: '艺术设计', score: 60, demand: '中', outlook: '国潮品牌和时尚电商有增量' },
  '工艺美术': { category: '艺术设计', score: 57, demand: '中低', outlook: '非遗传承和文化创意方向' },
  '数字媒体艺术': { category: '艺术设计', score: 76, demand: '高', outlook: '游戏/影视/元宇宙对艺术+技术人才需求大' },
  '艺术与科技': { category: '艺术设计', score: 78, demand: '高', outlook: '科技艺术跨界，沉浸式体验产业爆发' },

  // ===== 基于985投档线数据的专业评分(2026) =====
  '临床医学类': { category: '医学', score: 91, demand: '极高', outlook: '985投档均分700 — 医学精英之路' },
  '口腔医学类': { category: '医学', score: 92, demand: '极高', outlook: '985投档均分669 — 口腔医学持续热门' },
  '基础医学类': { category: '医学', score: 96, demand: '高', outlook: '985投档均分652 — 医学研究基础' },
  '预防医学类': { category: '医学', score: 86, demand: '高', outlook: '985投档均分664 — 公共卫生人才紧缺' },
  '药学类': { category: '医学', score: 86, demand: '高', outlook: '985投档均分652 — 药学研发前景好' },
  '临床药学': { category: '医学', score: 83, demand: '高', outlook: '985投档均分651 — 临床药学新兴方向' },
  '生物医学科学': { category: '医学', score: 82, demand: '高', outlook: '985投档均分649 — 生物医学交叉学科' },
  '医学检验技术': { category: '医学', score: 72, demand: '高', outlook: '985投档线参考 — 第三方医检市场扩大' },

  '空间科学与技术': { category: '电子信息', score: 91, demand: '很高', outlook: '985投档均分681 — 航天科技前沿' },
  '微电子科学与工程': { category: '电子信息', score: 86, demand: '很高', outlook: '985投档均分665 — 芯片产业核心' },
  '信息工程': { category: '电子信息', score: 87, demand: '很高', outlook: '985投档均分665 — 信息技术核心专业' },
  '电子科学与技术': { category: '电子信息', score: 75, demand: '很高', outlook: '985投档均分624 — 电子信息基石' },
  '通信工程': { category: '电子信息', score: 68, demand: '很高', outlook: '985投档均分598 — 通信行业稳定需求' },
  '电子信息类': { category: '电子信息', score: 76, demand: '高', outlook: '985投档均分658 — 电子信息大类招生' },
  '光电信息科学与工程': { category: '电子信息', score: 77, demand: '高', outlook: '985投档均分631 — 光电子方向有前景' },
  '集成电路设计与集成系统': { category: '电子信息', score: 80, demand: '极高', outlook: '985投档均分640 — 芯片自主化核心' },

  '人工智能': { category: '计算机/AI', score: 77, demand: '极高', outlook: '985投档均分630 — AI持续最热赛道' },
  '智能制造工程': { category: '计算机/AI', score: 81, demand: '很高', outlook: '985投档均分646 — 制造强国核心' },
  '智能科学与技术': { category: '计算机/AI', score: 86, demand: '很高', outlook: '985投档均分663 — AI+科学前沿' },
  '数据科学与大数据技术': { category: '计算机/AI', score: 77, demand: '极高', outlook: '985投档均分631 — 大数据时代刚需' },
  '计算机类': { category: '计算机/AI', score: 79, demand: '极高', outlook: '985投档均分674 — 计算机大类精英' },
  '软件工程': { category: '计算机/AI', score: 83, demand: '极高', outlook: '985投档均分652 — 软件定义一切' },
  '网络空间安全': { category: '计算机/AI', score: 79, demand: '很高', outlook: '985投档均分639 — 网络安全人才缺口大' },
  '信息安全': { category: '计算机/AI', score: 76, demand: '很高', outlook: '985投档均分625 — 信息安全刚需' },
  '数字媒体技术': { category: '计算机/AI', score: 74, demand: '高', outlook: '985投档均分620 — 数字内容产业增长' },
  '空间信息与数字技术': { category: '计算机/AI', score: 83, demand: '中高', outlook: '985投档均分654 — 航天+IT复合' },
  '虚拟现实技术': { category: '计算机/AI', score: 76, demand: '很高', outlook: '985投档均分627 — VR/AR产业爆发前夜' },

  '金融学类': { category: '金融经济', score: 74, demand: '高', outlook: '985投档均分661 — 金融核心赛道' },
  '经济学类': { category: '金融经济', score: 85, demand: '高', outlook: '985投档均分661 — 经济学基础扎实' },
  '国际经济与贸易': { category: '金融经济', score: 58, demand: '中', outlook: '985投档均分561 — 受全球化波动影响' },
  '财政学类': { category: '金融经济', score: 84, demand: '中高', outlook: '985投档均分657 — 财税体制稳定需求' },
  '保险学': { category: '金融经济', score: 73, demand: '中高', outlook: '985投档均分615 — 养老保险增长空间' },
  '金融工程': { category: '金融经济', score: 89, demand: '高', outlook: '985投档均分673 — 量化金融方向' },
  '统计学类': { category: '金融经济', score: 87, demand: '很高', outlook: '985投档均分666 — 数据科学硬通货' },
  '数字经济': { category: '金融经济', score: 85, demand: '很高', outlook: '985投档均分660 — 数字经济国家战略' },

  '航空航天类': { category: '传统工科', score: 87, demand: '很高', outlook: '985投档均分666 — 商业航天蓝海' },
  '航空航天工程': { category: '传统工科', score: 84, demand: '很高', outlook: '985投档均分657 — 大飞机+低空经济' },
  '机械类': { category: '传统工科', score: 85, demand: '中高', outlook: '985投档均分661 — 智能制造升级' },
  '机械工程': { category: '传统工科', score: 70, demand: '中高', outlook: '985投档均分598 — 高端制造转型中' },
  '机械设计制造及其自动化': { category: '传统工科', score: 56, demand: '中', outlook: '985投档均分553 — 传统机械需升级' },
  '能源与动力工程': { category: '传统工科', score: 85, demand: '中高', outlook: '985投档均分660 — 新能源动力方向' },
  '电气工程及其自动化': { category: '传统工科', score: 86, demand: '高', outlook: '985投档均分662 — 电网+新能源' },
  '材料科学与工程': { category: '传统工科', score: 83, demand: '中高', outlook: '985投档均分652 — 新材料战略方向' },
  '土木工程': { category: '传统工科', score: 51, demand: '中', outlook: '985投档均分534 — 基建放缓注意转型' },
  '建筑学': { category: '传统工科', score: 82, demand: '中', outlook: '985投档均分648 — 绿色建筑新方向' },
  '城乡规划': { category: '传统工科', score: 45, demand: '中', outlook: '985投档均分512 — 城市更新有空间' },
  '测绘工程': { category: '传统工科', score: 73, demand: '中高', outlook: '985投档均分616 — 遥感+GIS新机遇' },
  '化学工程与工艺': { category: '传统工科', score: 70, demand: '中高', outlook: '985投档均分605 — 绿色化工转型' },
  '制药工程': { category: '传统工科', score: 76, demand: '高', outlook: '985投档均分627 — 生物制药产业链' },
  '食品科学与工程': { category: '传统工科', score: 80, demand: '中高', outlook: '985投档均分641 — 食品工业化升级' },
  '船舶与海洋工程': { category: '传统工科', score: 82, demand: '中', outlook: '985投档均分647 — 海洋强国战略' },
  '核工程与核技术': { category: '传统工科', score: 76, demand: '很高', outlook: '985投档均分627 — 核能战略地位提升' },
  '新能源科学与工程': { category: '传统工科', score: 80, demand: '极高', outlook: '985投档均分640 — 碳中和核心赛道' },
  '环境工程': { category: '传统工科', score: 83, demand: '中', outlook: '985投档均分651 — 双碳目标新需求' },
  '环境科学与工程': { category: '传统工科', score: 83, demand: '中高', outlook: '985投档均分652 — 环保升级方向' },
  '生物工程': { category: '传统工科', score: 84, demand: '中高', outlook: '985投档均分656 — 生物制造新兴领域' },
  '生物医学工程': { category: '传统工科', score: 85, demand: '很高', outlook: '985投档均分660 — 医疗器械黄金赛道' },
  '交通运输': { category: '传统工科', score: 84, demand: '中', outlook: '985投档均分655 — 智慧交通新方向' },
  '交通工程': { category: '传统工科', score: 63, demand: '中', outlook: '985投档均分576 — 轨道交通方向' },
  '水利水电工程': { category: '传统工科', score: 83, demand: '中高', outlook: '985投档均分650 — 国家水网建设' },

  '数学类': { category: '基础理学', score: 85, demand: '中高', outlook: '985投档均分660 — AI时代数学价值凸显' },
  '数学与应用数学': { category: '基础理学', score: 75, demand: '中高', outlook: '985投档均分622 — 数学基础万金油' },
  '信息与计算科学': { category: '基础理学', score: 81, demand: '高', outlook: '985投档均分646 — 数学+CS复合' },
  '物理学类': { category: '基础理学', score: 85, demand: '中', outlook: '985投档均分660 — 量子/半导体高端需求' },
  '应用物理学': { category: '基础理学', score: 70, demand: '中', outlook: '985投档均分609 — 半导体方向热门' },
  '化学类': { category: '基础理学', score: 84, demand: '中', outlook: '985投档均分657 — 新能源材料方向' },
  '应用化学': { category: '基础理学', score: 71, demand: '中', outlook: '985投档均分609 — 材料化工应用广' },
  '生物科学类': { category: '基础理学', score: 83, demand: '中', outlook: '985投档均分654 — 生物医药前沿' },
  '生物技术': { category: '基础理学', score: 84, demand: '中高', outlook: '985投档均分656 — 合成生物学崛起' },
  '天文学': { category: '基础理学', score: 83, demand: '中低', outlook: '985投档均分650 — 天体物理高端科研' },
  '大气科学': { category: '基础理学', score: 85, demand: '中', outlook: '985投档均分658 — 气象+气候变化' },
  '海洋科学': { category: '基础理学', score: 83, demand: '中', outlook: '985投档均分650 — 海洋资源开发' },
  '地球物理学': { category: '基础理学', score: 83, demand: '中低', outlook: '985投档均分651 — 能源勘探需求' },
  '地理信息科学': { category: '基础理学', score: 82, demand: '高', outlook: '985投档均分649 — GIS+遥感前景好' },

  '法学类': { category: '法律管理', score: 86, demand: '中高', outlook: '985投档均分661 — 法考后职业空间大' },
  '工商管理类': { category: '法律管理', score: 68, demand: '中', outlook: '985投档均分611 — 需结合行业深耕' },
  '公共管理类': { category: '法律管理', score: 85, demand: '中', outlook: '985投档均分598 — 公务员方向稳定' },
  '人力资源管理': { category: '法律管理', score: 71, demand: '中高', outlook: '985投档均分609 — 组织发展方向' },
  '物流管理与工程类': { category: '法律管理', score: 81, demand: '中高', outlook: '985投档均分646 — 供应链重构机遇' },

  '中国语言文学类': { category: '人文社科', score: 84, demand: '中', outlook: '985投档均分657 — 文化教育方向' },
  '新闻传播学类': { category: '人文社科', score: 85, demand: '中', outlook: '985投档均分660 — 新媒体内容方向' },
  '历史学类': { category: '人文社科', score: 85, demand: '中低', outlook: '985投档均分660 — 文博产业机遇' },
  '哲学类': { category: '人文社科', score: 84, demand: '中低', outlook: '985投档均分657 — 批判思维价值' },
  '社会学类': { category: '人文社科', score: 84, demand: '中', outlook: '985投档均分653 — 用户研究方向' },
  '英语': { category: '人文社科', score: 63, demand: '中低', outlook: '985投档均分577 — 受AI翻译冲击' },
  '日语': { category: '人文社科', score: 54, demand: '中低', outlook: '985投档均分563 — 日企方向稳定' },
  '教育学': { category: '人文社科', score: 69, demand: '中', outlook: '985投档均分602 — 教育永恒主题' },
  '心理学': { category: '人文社科', score: 83, demand: '中高', outlook: '985投档均分649 — 心理健康需求上升' },
  '考古学': { category: '人文社科', score: 83, demand: '中低', outlook: '985投档均分649 — 文化遗产保护' },
  '广播电视学': { category: '人文社科', score: 57, demand: '中', outlook: '985投档均分556 — 新媒体转型中' },

  '设计学类': { category: '艺术设计', score: 82, demand: '中高', outlook: '985投档均分647 — 数字设计需求大' },
  '美术学类': { category: '艺术设计', score: 63, demand: '中低', outlook: '985投档均分577 — 美术教育方向' },
  '音乐与舞蹈学类': { category: '艺术设计', score: 81, demand: '中低', outlook: '985投档均分645 — 文化消费升级' },
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
    score: Math.min(120, Math.max(40, Math.round(rawScore))),
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

// ========== 六十四卦数据 ==========
// 上卦(外卦) + 下卦(内卦) = 重卦
// 八卦：乾☰ 兑☱ 离☲ 震☳ 巽☴ 坎☵ 艮☶ 坤☷
const BAGUA = {
  '乾': { symbol: '☰', element: '金', nature: '天', direction: '西北' },
  '兑': { symbol: '☱', element: '金', nature: '泽', direction: '西' },
  '离': { symbol: '☲', element: '火', nature: '火', direction: '南' },
  '震': { symbol: '☳', element: '木', nature: '雷', direction: '东' },
  '巽': { symbol: '☴', element: '木', nature: '风', direction: '东南' },
  '坎': { symbol: '☵', element: '水', nature: '水', direction: '北' },
  '艮': { symbol: '☶', element: '土', nature: '山', direction: '东北' },
  '坤': { symbol: '☷', element: '土', nature: '地', direction: '西南' }
};

// 六十四卦完整数据
const HEXAGRAMS = [
  { id: 1, num: '01', name: '乾为天', upper: '乾', lower: '乾', symbol: '☰☰', element: '金',
    judgment: '元亨利贞', interpretation: '大吉之卦。乾卦象征天，刚健中正，纯粹精也。事业大有可为，宜积极进取。',
    career: '飞龙在天，利见大人。事业巅峰期，适合大胆开拓。', love: '二气感应，和谐美满。', health: '身强体健，注意劳逸结合。' },
  { id: 2, num: '02', name: '坤为地', upper: '坤', lower: '坤', symbol: '☷☷', element: '土',
    judgment: '元亨，利牝马之贞', interpretation: '大吉之卦。坤卦象征地，柔顺承天，厚德载物。宜顺势而为，以柔克刚。',
    career: '厚德载物，包容万象。宜稳扎稳打。', love: '柔顺利贞，感情稳固。', health: '脾胃为主，注意调理。' },
  { id: 3, num: '03', name: '水雷屯', upper: '坎', lower: '震', symbol: '☵☳', element: '水',
    judgment: '元亨利贞，勿用有攸往', interpretation: '始生之难。万物初生，艰难重重。宜守不宜攻，静待时机。',
    career: '创业维艰，坚守初心。', love: '初始波折，终得圆满。', health: '注意肾脏调养。' },
  { id: 4, num: '04', name: '山水蒙', upper: '艮', lower: '坎', symbol: '☶☵', element: '土',
    judgment: '亨。匪我求童蒙，童蒙求我', interpretation: '启蒙之卦。如孩童蒙昧待启，宜虚心求学，不可好高骛远。',
    career: '求学深造的好时机。', love: '慢慢了解，不宜草率。', health: '保持好奇心有益身心。' },
  { id: 5, num: '05', name: '水天需', upper: '坎', lower: '乾', symbol: '☵☰', element: '水',
    judgment: '有孚，光亨，贞吉', interpretation: '等待之卦。时机未到，需耐心等待。诚信守正，终获吉祥。',
    career: '蓄力待发，不可急躁。', love: '耐心等待对的人。', health: '静养为宜。' },
  { id: 6, num: '06', name: '天水讼', upper: '乾', lower: '坎', symbol: '☰☵', element: '金',
    judgment: '有孚窒惕，中吉终凶', interpretation: '争讼之卦。宜化解矛盾，避免冲突升级。退一步海阔天空。',
    career: '避免卷入职场纷争。', love: '宽容理解化解矛盾。', health: '心平气和为养生之本。' },
  { id: 7, num: '07', name: '地水师', upper: '坤', lower: '坎', symbol: '☷☵', element: '土',
    judgment: '贞，丈人吉，无咎', interpretation: '师出有名。宜以正道教化，师出有名则吉。当以仁德服众。',
    career: '团队合作，领导有力。', love: '以德服人，赢得尊重。', health: '规律作息。' },
  { id: 8, num: '08', name: '水地比', upper: '坎', lower: '坤', symbol: '☵☷', element: '水',
    judgment: '吉。原筮，元永贞', interpretation: '亲比之卦。人与人互相依靠，团结和谐。贵人相助，万事顺遂。',
    career: '团队融洽，合作共赢。', love: '亲密无间，感情升温。', health: '社交有益身心。' },
  { id: 9, num: '09', name: '风天小畜', upper: '巽', lower: '乾', symbol: '☴☰', element: '木',
    judgment: '亨。密云不雨，自我西郊', interpretation: '小有积蓄。力量尚不足，需继续积累。云已密布，雨将降未降。',
    career: '积蓄力量，耐心等待。', love: '感情渐入佳境。', health: '调养为主，勿过劳。' },
  { id: 10, num: '10', name: '天泽履', upper: '乾', lower: '兑', symbol: '☰☱', element: '金',
    judgment: '履虎尾，不咥人，亨', interpretation: '如履薄冰。身处险境但可化险为夷。谨慎行事，依礼而为。',
    career: '谨慎行事，遵循规则。', love: '以礼相待，循序渐进。', health: '注意安全，防患未然。' },
  { id: 11, num: '11', name: '地天泰', upper: '坤', lower: '乾', symbol: '☷☰', element: '土',
    judgment: '小往大来，吉亨', interpretation: '大吉之卦。天地交泰，万物亨通。上下同心，否极泰来。',
    career: '事业亨通，大有作为。', love: '两情相悦，和谐美满。', health: '身心畅达。' },
  { id: 12, num: '12', name: '天地否', upper: '乾', lower: '坤', symbol: '☰☷', element: '金',
    judgment: '否之匪人，不利君子贞', interpretation: '闭塞不通。天地不交，万物不通。小人道长，君子道消。宜韬光养晦。',
    career: '逆境中坚守本心。', love: '沟通不畅，需要耐心。', health: '注意调养，防病未然。' },
  { id: 13, num: '13', name: '天火同人', upper: '乾', lower: '离', symbol: '☰☲', element: '金',
    judgment: '同人于野，亨。利涉大川', interpretation: '志同道合。与人同心协力，可成大事。广结善缘，得道多助。',
    career: '团队协作，共创佳绩。', love: '志趣相投，关系升温。', health: '集体活动有益身心。' },
  { id: 14, num: '14', name: '火天大有', upper: '离', lower: '乾', symbol: '☲☰', element: '火',
    judgment: '元亨', interpretation: '大吉之卦。大有收获，丰盛圆满。顺天应人，无所不利。',
    career: '丰收之时，把握机遇。', love: '感情丰盈美满。', health: '精力充沛。' },
  { id: 15, num: '15', name: '地山谦', upper: '坤', lower: '艮', symbol: '☷☶', element: '土',
    judgment: '亨，君子有终', interpretation: '谦虚受益。满招损，谦受益。保持谦逊态度，必得善终。',
    career: '谦虚谨慎，广结善缘。', love: '低调真诚最动人。', health: '心态平和养生之道。' },
  { id: 16, num: '16', name: '雷地豫', upper: '震', lower: '坤', symbol: '☳☷', element: '木',
    judgment: '利建侯行师', interpretation: '和乐愉悦。顺势而动，事半功倍。但不可乐极生悲，宜有所节制。',
    career: '顺时而动，事半功倍。', love: '感情顺利甜蜜。', health: '保持愉悦，但勿过度。' },
  { id: 17, num: '17', name: '泽雷随', upper: '兑', lower: '震', symbol: '☱☳', element: '金',
    judgment: '元亨利贞，无咎', interpretation: '随顺时势。随机应变，灵活处世。跟随时势而动，方得无咎。',
    career: '灵活应变，顺势而为。', love: '随缘而行，不强求。', health: '作息有时，顺应自然。' },
  { id: 18, num: '18', name: '山风蛊', upper: '艮', lower: '巽', symbol: '☶☴', element: '土',
    judgment: '元亨，利涉大川', interpretation: '整治腐败。蛊者事也，有事而后可大。发现问题及时整治，则可亨通。',
    career: '整顿革新，继往开来。', love: '解决问题增进感情。', health: '及时体检，防微杜渐。' },
  { id: 19, num: '19', name: '地泽临', upper: '坤', lower: '兑', symbol: '☷☱', element: '土',
    judgment: '元亨利贞。至于八月有凶', interpretation: '居高临下。事物发展壮大，宜亲临指导。但盛极必衰，需居安思危。',
    career: '事业壮大，亲力亲为。', love: '主动关心对方。', health: '注意季节变化。' },
  { id: 20, num: '20', name: '风地观', upper: '巽', lower: '坤', symbol: '☴☷', element: '木',
    judgment: '盥而不荐，有孚颙若', interpretation: '观察思考。宜静观其变，深思熟虑后再行动。',
    career: '多观察少行动，等待时机。', love: '深入了解再做决定。', health: '静养观察身体变化。' },
  { id: 21, num: '21', name: '火雷噬嗑', upper: '离', lower: '震', symbol: '☲☳', element: '火',
    judgment: '亨。利用狱', interpretation: '咬合清除。清除障碍，明断是非。宜果断处理积压问题。',
    career: '果断处理棘手问题。', love: '坦诚沟通解决隔阂。', health: '清除体内积毒。' },
  { id: 22, num: '22', name: '山火贲', upper: '艮', lower: '离', symbol: '☶☲', element: '土',
    judgment: '亨。小利有攸往', interpretation: '文饰之美。外在修饰固然重要，但不可舍本逐末。宜内外兼修。',
    career: '提升外在形象和包装。', love: '浪漫装饰增进感情。', health: '外在保养+内在调理。' },
  { id: 23, num: '23', name: '山地剥', upper: '艮', lower: '坤', symbol: '☶☷', element: '土',
    judgment: '不利有攸往', interpretation: '剥落衰颓。阴盛阳衰，小人得势。宜顺应时势，厚下安宅。',
    career: '以退为进，保存实力。', love: '给彼此空间和尊重。', health: '固本培元，养精蓄锐。' },
  { id: 24, num: '24', name: '地雷复', upper: '坤', lower: '震', symbol: '☷☳', element: '土',
    judgment: '亨。出入无疾，朋来无咎', interpretation: '一阳来复。冬尽春来，万象更新。宜把握转机，复兴再起。',
    career: '东山再起，重振旗鼓。', love: '旧情复燃或重新开始。', health: '恢复期，循序渐进。' },
  { id: 25, num: '25', name: '天雷无妄', upper: '乾', lower: '震', symbol: '☰☳', element: '金',
    judgment: '元亨利贞。其匪正有眚', interpretation: '真实无妄。宜守正道，不可妄为。心存诚敬，天自佑之。',
    career: '脚踏实地，不投机取巧。', love: '真诚相待最重要。', health: '顺其自然，不妄作劳。' },
  { id: 26, num: '26', name: '山天大畜', upper: '艮', lower: '乾', symbol: '☶☰', element: '土',
    judgment: '利贞，不家食吉', interpretation: '大有积蓄。厚积薄发，蓄势待发。宜积累德才，大展宏图。',
    career: '厚积薄发，蓄力待时。', love: '感情日渐深厚。', health: '积蓄能量，养生为要。' },
  { id: 27, num: '27', name: '山雷颐', upper: '艮', lower: '震', symbol: '☶☳', element: '土',
    judgment: '贞吉。观颐，自求口实', interpretation: '颐养之道。养生养德，自食其力。言语谨慎，饮食有节。',
    career: '自力更生，养精蓄锐。', love: '细水长流的感情。', health: '注意饮食养生。' },
  { id: 28, num: '28', name: '泽风大过', upper: '兑', lower: '巽', symbol: '☱☴', element: '金',
    judgment: '栋桡，利有攸往，亨', interpretation: '过度负荷。太过则折，宜适度调整。非常之时当有非常之举。',
    career: '压力过大，适当减负。', love: '不要给对方太大压力。', health: '身心负荷过重，需减压。' },
  { id: 29, num: '29', name: '坎为水', upper: '坎', lower: '坎', symbol: '☵☵', element: '水',
    judgment: '习坎，有孚，维心亨', interpretation: '重重险阻。身处困境，宜守信用、持诚信，终能化险为夷。',
    career: '逆境中保持诚信。', love: '经历考验感情更坚。', health: '注意肾脏和泌尿系统。' },
  { id: 30, num: '30', name: '离为火', upper: '离', lower: '离', symbol: '☲☲', element: '火',
    judgment: '利贞，亨。畜牝牛吉', interpretation: '光明依附。如火焰般光明灿烂，但需有所依附。宜柔顺中正。',
    career: '找到好的平台依附发展。', love: '温柔体贴维系感情。', health: '注意心脏和眼睛。' },
  { id: 31, num: '31', name: '泽山咸', upper: '兑', lower: '艮', symbol: '☱☶', element: '金',
    judgment: '亨利贞，取女吉', interpretation: '感应之道。男女感应，万物化生。虚心接纳，和谐共鸣。',
    career: '敏锐感知市场变化。', love: '心心相印，感情和美。', health: '身心感应，调和阴阳。' },
  { id: 32, num: '32', name: '雷风恒', upper: '震', lower: '巽', symbol: '☳☴', element: '木',
    judgment: '亨，无咎，利贞', interpretation: '恒久之道。日月得天而能久照。持之以恒，方得始终。',
    career: '坚持就是胜利。', love: '长久的感情需要经营。', health: '长期坚持养生习惯。' },
  { id: 33, num: '33', name: '天山遁', upper: '乾', lower: '艮', symbol: '☰☶', element: '金',
    judgment: '亨，小利贞', interpretation: '退避隐忍。君子以远小人。适时退让，以退为进。',
    career: '暂时退让以避锋芒。', love: '给彼此一些空间。', health: '远离不良环境。' },
  { id: 34, num: '34', name: '雷天大壮', upper: '震', lower: '乾', symbol: '☳☰', element: '木',
    judgment: '利贞', interpretation: '强盛壮大。阳气盛长，但不可恃强凌弱。宜以正自守。',
    career: '事业壮大，蒸蒸日上。', love: '热情主动追求。', health: '精力旺盛，适当运动。' },
  { id: 35, num: '35', name: '火地晋', upper: '离', lower: '坤', symbol: '☲☷', element: '火',
    judgment: '康侯用锡马蕃庶，昼日三接', interpretation: '光明上进。如日之升，前途光明。宜积极进取，步步高升。',
    career: '晋升顺利，前程似锦。', love: '感情日渐升温。', health: '状态上升，精力充沛。' },
  { id: 36, num: '36', name: '地火明夷', upper: '坤', lower: '离', symbol: '☷☲', element: '土',
    judgment: '利艰贞', interpretation: '光明受损。日入地中，昏暗中宜坚守正道。忍耐过后必有光明。',
    career: '韬光养晦，等待时机。', love: '感情低谷需要坚持。', health: '注意休养，减少消耗。' },
  { id: 37, num: '37', name: '风火家人', upper: '巽', lower: '离', symbol: '☴☲', element: '木',
    judgment: '利女贞', interpretation: '家庭和谐。言有物而行有恒。宜治家有道，和睦相处。',
    career: '内部管理井井有条。', love: '家庭和睦，感情稳定。', health: '家庭支持有益健康。' },
  { id: 38, num: '38', name: '火泽睽', upper: '离', lower: '兑', symbol: '☲☱', element: '火',
    judgment: '小事吉', interpretation: '乖离不合。小事可成，大事需和。存异求同，互相理解。',
    career: '求同存异，灵活应对。', love: '小摩擦需要沟通化解。', health: '身心调和为要。' },
  { id: 39, num: '39', name: '水山蹇', upper: '坎', lower: '艮', symbol: '☵☶', element: '水',
    judgment: '利西南，不利东北', interpretation: '艰难险阻。宜选择正确的方向，不宜冒险前行。',
    career: '选择正确的方向很重要。', love: '感情路上有波折。', health: '注意关节和骨骼。' },
  { id: 40, num: '40', name: '雷水解', upper: '震', lower: '坎', symbol: '☳☵', element: '木',
    judgment: '利西南，无所往，其来复吉', interpretation: '困难解除。久旱逢甘霖，问题迎刃而解。宜宽恕和解。',
    career: '困难化解，柳暗花明。', love: '误会解除，和好如初。', health: '疾病将愈，坚持治疗。' },
  { id: 41, num: '41', name: '山泽损', upper: '艮', lower: '兑', symbol: '☶☱', element: '土',
    judgment: '有孚，元吉，无咎', interpretation: '损下益上。减法生活，去繁就简。损己利人，反得增益。',
    career: '适当舍弃才能获得更多。', love: '为爱付出是值得的。', health: '减负养生，戒除陋习。' },
  { id: 42, num: '42', name: '风雷益', upper: '巽', lower: '震', symbol: '☴☳', element: '木',
    judgment: '利有攸往，利涉大川', interpretation: '大吉之卦。增益无穷，见善则迁。宜抓住机遇，大展宏图。',
    career: '抓住机遇，大展宏图。', love: '感情增益，甜蜜美满。', health: '身心增益，状态良好。' },
  { id: 43, num: '43', name: '泽天夬', upper: '兑', lower: '乾', symbol: '☱☰', element: '金',
    judgment: '扬于王庭，孚号有厉', interpretation: '决断果断。宜当机立断，不可犹疑不决。快刀斩乱麻。',
    career: '果断决策，当断则断。', love: '该表白时就表白。', health: '果断改变不良习惯。' },
  { id: 44, num: '44', name: '天风姤', upper: '乾', lower: '巽', symbol: '☰☴', element: '金',
    judgment: '女壮，勿用取女', interpretation: '不期而遇。宜谨慎对待突如其来的机遇，察其真伪。',
    career: '机遇与风险并存。', love: '邂逅需谨慎对待。', health: '突发状况及时应对。' },
  { id: 45, num: '45', name: '泽地萃', upper: '兑', lower: '坤', symbol: '☱☷', element: '金',
    judgment: '亨。王假有庙', interpretation: '聚集荟萃。人才汇集，精英云集。宜聚众力以成大事。',
    career: '人才聚集，团队强大。', love: '聚会认识新朋友。', health: '集体活动有益身心。' },
  { id: 46, num: '46', name: '地风升', upper: '坤', lower: '巽', symbol: '☷☴', element: '土',
    judgment: '元亨，用见大人', interpretation: '步步高升。积小以高大，循序渐进。宜稳步上升，勿急勿躁。',
    career: '步步高升，稳步前进。', love: '感情稳步升温。', health: '健康状态逐渐改善。' },
  { id: 47, num: '47', name: '泽水困', upper: '兑', lower: '坎', symbol: '☱☵', element: '金',
    judgment: '亨，贞，大人吉', interpretation: '困窘之时。身陷困境，但守正可以亨通。宜坚守信念。',
    career: '困境中坚持就是胜利。', love: '感情遇到困难要坚守。', health: '身体不适，需耐心调养。' },
  { id: 48, num: '48', name: '水风井', upper: '坎', lower: '巽', symbol: '☵☴', element: '水',
    judgment: '改邑不改井，无丧无得', interpretation: '井养不穷。宜修身养性，惠及他人。养人亦自养。',
    career: '深耕专业，利己利人。', love: '细水长流的付出。', health: '养生之道贵在坚持。' },
  { id: 49, num: '49', name: '泽火革', upper: '兑', lower: '离', symbol: '☱☲', element: '金',
    judgment: '己日乃孚，元亨利贞', interpretation: '变革革新。宜顺应时势进行变革，但须时机成熟。',
    career: '改革创新的好时机。', love: '关系进入新阶段。', health: '改变不良生活方式。' },
  { id: 50, num: '50', name: '火风鼎', upper: '离', lower: '巽', symbol: '☲☴', element: '火',
    judgment: '元吉，亨', interpretation: '大吉之卦。鼎新革故，建功立业。宜树立权威，成就大业。',
    career: '建功立业，树立权威。', love: '感情稳固如鼎。', health: '身体如鼎之稳固。' },
  { id: 51, num: '51', name: '震为雷', upper: '震', lower: '震', symbol: '☳☳', element: '木',
    judgment: '亨。震来虩虩，笑言哑哑', interpretation: '震惊百里。临危不乱，处变不惊。宜以敬畏之心应对变故。',
    career: '处变不惊，临危不乱。', love: '经历了风波感情更坚。', health: '突受惊吓后需静养。' },
  { id: 52, num: '52', name: '艮为山', upper: '艮', lower: '艮', symbol: '☶☶', element: '土',
    judgment: '艮其背，不获其身', interpretation: '止于当止。宜适可而止，知止不殆。安守本分是最佳选择。',
    career: '适可而止，知止不殆。', love: '感情需要适当克制。', health: '静养为主，勿过度。' },
  { id: 53, num: '53', name: '风山渐', upper: '巽', lower: '艮', symbol: '☴☶', element: '木',
    judgment: '女归吉，利贞', interpretation: '循序渐进。宜按部就班，不可急于求成。一切皆有过程。',
    career: '按部就班，水到渠成。', love: '感情需要慢慢培养。', health: '康复需要过程。' },
  { id: 54, num: '54', name: '雷泽归妹', upper: '震', lower: '兑', symbol: '☳☱', element: '木',
    judgment: '征凶，无攸利', interpretation: '少女归嫁。宜摆正自己的位置，不可越位行事。',
    career: '摆正位置，不宜冒进。', love: '认真对待感情关系。', health: '注意内分泌平衡。' },
  { id: 55, num: '55', name: '雷火丰', upper: '震', lower: '离', symbol: '☳☲', element: '木',
    judgment: '亨，王假之，勿忧', interpretation: '丰盛之极。如日中天，但盛极必衰。宜居安思危。',
    career: '事业鼎盛，居安思危。', love: '感情热烈如火。', health: '精力旺盛但需节制。' },
  { id: 56, num: '56', name: '火山旅', upper: '离', lower: '艮', symbol: '☲☶', element: '火',
    judgment: '小亨，旅贞吉', interpretation: '旅居在外。客居他乡，宜谨慎行事。人生如逆旅，保持谦逊。',
    career: '外出发展有利有弊。', love: '异地的感情需要维系。', health: '旅途注意安全和健康。' },
  { id: 57, num: '57', name: '巽为风', upper: '巽', lower: '巽', symbol: '☴☴', element: '木',
    judgment: '小亨，利有攸往', interpretation: '柔顺谦逊。如风吹草低，以柔克刚。宜顺势而为，勿强行对抗。',
    career: '顺势而为，柔和处事。', love: '温柔体贴最动人。', health: '柔和运动如太极瑜伽。' },
  { id: 58, num: '58', name: '兑为泽', upper: '兑', lower: '兑', symbol: '☱☱', element: '金',
    judgment: '亨利贞', interpretation: '和悦喜悦。宜以和为贵，广交朋友。愉悦的心情是最好的风水。',
    career: '人际关系良好有助事业。', love: '甜蜜喜悦的感情。', health: '心情愉悦有益健康。' },
  { id: 59, num: '59', name: '风水涣', upper: '巽', lower: '坎', symbol: '☴☵', element: '木',
    judgment: '亨。王假有庙', interpretation: '涣散分离。宜聚合人心，化解隔阂。水散而复聚，事在人为。',
    career: '凝聚团队，化解分歧。', love: '化解矛盾，重修旧好。', health: '气机调畅，散郁为要。' },
  { id: 60, num: '60', name: '水泽节', upper: '坎', lower: '兑', symbol: '☵☱', element: '水',
    judgment: '亨。苦节不可贞', interpretation: '节制有度。凡事有度，过犹不及。宜张弛有节。',
    career: '张弛有度，合理安排。', love: '给对方适当空间。', health: '节制饮食和欲望。' },
  { id: 61, num: '61', name: '风泽中孚', upper: '巽', lower: '兑', symbol: '☴☱', element: '木',
    judgment: '豚鱼吉，利涉大川', interpretation: '诚信之道。内心诚信，外显和悦。以至诚感人者，人亦以诚应之。',
    career: '诚信为本，赢得信任。', love: '真诚相待最可靠。', health: '心神安宁，诚于中形于外。' },
  { id: 62, num: '62', name: '雷山小过', upper: '震', lower: '艮', symbol: '☳☶', element: '木',
    judgment: '亨利贞，可小事不可大事', interpretation: '小有过越。小事可为，大事需慎重。小步快跑，积小胜为大胜。',
    career: '从小事做起，积少成多。', love: '小浪漫比大惊喜更重要。', health: '微调生活习惯即可。' },
  { id: 63, num: '63', name: '水火既济', upper: '坎', lower: '离', symbol: '☵☲', element: '水',
    judgment: '亨小，利贞。初吉终乱', interpretation: '事已成就。圆满之时更要居安思危。成功之后是新挑战的开始。',
    career: '功成名就，居安思危。', love: '感情圆满但要继续经营。', health: '身体看似健康仍需保养。' },
  { id: 64, num: '64', name: '火水未济', upper: '离', lower: '坎', symbol: '☲☵', element: '火',
    judgment: '亨。小狐汔济，濡其尾', interpretation: '功业未成。虽未成功但已在路上。坚持到底，不可半途而废。',
    career: '虽未成功但前景可期。', love: '感情还需时间发展。', health: '治疗在进行中，坚持下去。' }
];

/**
 * 生成第N签（1-1000）
 * 基于六十四卦 + 变爻生成1000种不同签文
 */
function generateStick(n) {
  const hexIdx = (n - 1) % 64;
  const variation = Math.floor((n - 1) / 64); // 0-15 变体
  const hex = HEXAGRAMS[hexIdx];

  // 基于卦的吉凶定基调
  const auspiciousHexes = [1, 2, 11, 14, 15, 35, 42, 46, 50, 55, 58, 61]; // 十二个大吉卦
  const neutralHexes = [3, 4, 5, 7, 8, 9, 10, 13, 16, 17, 19, 20, 22, 24, 25, 26, 27, 30, 31, 32, 37, 40, 41, 43, 44, 45, 48, 49, 53, 56, 57, 59, 60, 62, 63, 64];
  const inauspiciousHexes = [6, 12, 18, 21, 23, 28, 29, 33, 34, 36, 38, 39, 47, 51, 52, 54];

  let baseLevel, baseScore;
  if (auspiciousHexes.includes(hex.id)) { baseLevel = '大吉'; baseScore = 85; }
  else if (inauspiciousHexes.includes(hex.id)) { baseLevel = '凶'; baseScore = 35; }
  else { baseLevel = '中平'; baseScore = 60; }

  // 变体微调
  const variationLevels = ['大吉', '吉', '中吉', '小吉', '平', '平', '末吉', '末吉', '小吉', '吉', '中吉', '平', '末吉', '吉', '中吉', '平'];
  const level = variation < 2 ? baseLevel : variationLevels[variation % variationLevels.length];
  const scoreAdjust = (variation % 5 - 2) * 5;
  const fortuneScore = Math.min(100, Math.max(20, baseScore + scoreAdjust + Math.floor(seededRandomStick(n) * 10)));

  // 变体诗
  const poems = [
    hex.name + '卦显象，' + hex.judgment + '。',
    hex.symbol + ' 卦象昭然，' + hex.interpretation.slice(0, 30) + '。',
    '得' + hex.name + '之象，' + hex.element + '气当令。',
    hex.upper + '上' + hex.lower + '下，' + BAGUA[hex.upper].nature + BAGUA[hex.lower].nature + '相交。',
  ];
  const poemBase = poems[variation % poems.length];

  // 针对生涯的解读
  const careerInsights = [
    hex.career,
    '宜' + hex.element + '属性行业，' + hex.career,
    '当前运势：' + hex.element + '气' + (level.includes('吉') ? '旺盛' : '不足') + '，' + hex.career,
  ];

  return {
    number: n,
    hexagram: hex,
    variation: variation,
    level: level,
    fortuneScore: fortuneScore,
    poem: poemBase + ' ' + careerInsights[variation % 3],
    interpretation: hex.interpretation + (level.includes('吉') ? ' 此时正当顺势而为，宜积极进取。' : level === '凶' ? ' 此时宜韬光养晦，守正待时。' : ' 稳扎稳打，以守为攻。'),
    career: hex.career,
    love: hex.love,
    health: hex.health,
    element: hex.element,
    baguaSymbol: hex.symbol
  };
}

function seededRandomStick(seed) {
  let s = seed;
  s = Math.imul(s ^ (s >>> 16), 0x45d9f3b);
  s = Math.imul(s ^ (s >>> 16), 0x45d9f3b);
  s = s ^ (s >>> 16);
  return (s >>> 0) / 0xFFFFFFFF;
}

/**
 * 八卦占卜 — 生成卦象（基于日期种子或用户提问）
 */
function castHexagram(seed) {
  // 模拟六爻起卦
  const lines = [];
  let s = seed || Date.now();
  for (let i = 0; i < 6; i++) {
    s = Math.imul(s ^ (s >>> 16), 0x45d9f3b);
    s = Math.imul(s ^ (s >>> 16), 0x45d9f3b);
    s = s ^ (s >>> 16);
    const value = ((s >>> 0) % 4); // 0=老阴, 1=少阳, 2=少阴, 3=老阳
    const isYang = value === 1 || value === 3;
    const isChanging = value === 0 || value === 3;
    lines.push({ position: i + 1, yang: isYang, changing: isChanging, value: value });
  }

  // 从下往上：下卦（初爻到三爻）+ 上卦（四爻到六爻）
  const lowerYang = [lines[0].yang, lines[1].yang, lines[2].yang];
  const upperYang = [lines[3].yang, lines[4].yang, lines[5].yang];

  const trigramOrder = ['坤', '震', '坎', '兑', '艮', '离', '巽', '乾'];
  const lowerIdx = (lowerYang[0] ? 1 : 0) | (lowerYang[1] ? 2 : 0) | (lowerYang[2] ? 4 : 0);
  const upperIdx = (upperYang[0] ? 1 : 0) | (upperYang[1] ? 2 : 0) | (upperYang[2] ? 4 : 0);
  const lowerTrigram = trigramOrder[lowerIdx];
  const upperTrigram = trigramOrder[upperIdx];

  // 找到对应的六十四卦
  const hexagram = HEXAGRAMS.find(h => h.lower === lowerTrigram && h.upper === upperTrigram);
  const changingLines = lines.filter(l => l.changing);

  return {
    lines: lines,
    lowerTrigram: { name: lowerTrigram, ...BAGUA[lowerTrigram] },
    upperTrigram: { name: upperTrigram, ...BAGUA[upperTrigram] },
    hexagram: hexagram || HEXAGRAMS[0],
    changingLines: changingLines,
    hasChanging: changingLines.length > 0
  };
}
