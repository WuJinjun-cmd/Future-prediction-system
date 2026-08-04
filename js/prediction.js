/**
 * 前途预测系统 — 预测评分算法
 * 五维度等权重：大学、专业、五行命理、星座、MBTI
 */

/**
 * 主预测函数
 * @param {Object} profile - { university, major, birthYear, birthMonth, birthDay, birthHour, birthMinute, mbti }
 * @returns {Object} 完整的预测结果
 */
function calculateScore(profile) {
  const university = calcUniversity(profile.university || '');
  const major = calcMajor(profile.major || '');
  const stemBranch = calcStemBranch(profile);
  const zodiac = calcZodiac(profile.birthMonth, profile.birthDay);
  const mbti = calcMBTI(profile.mbti || '');

  const scores = [university.score, major.score, stemBranch.score, zodiac.score, mbti.score];
  let total = Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);

  // 特殊人物检测
  const specialPerson = checkSpecialPerson(profile);

  const grade = getGrade(total);
  const advice = generateAdvice({ university, major, stemBranch, zodiac, mbti, total, specialPerson });

  return {
    university,
    major,
    stemBranch,
    zodiac,
    mbti,
    total,
    grade,
    advice,
    specialPerson: specialPerson,
    timestamp: Date.now(),
    id: generateId()
  };
}

/**
 * 检测特殊人物
 */
function checkSpecialPerson(profile) {
  const name = (profile.name || '').replace(/\s/g, '');
  if (name === '陈祉璇') {
    return {
      name: '陈祉璇',
      title: '🌟 天选之女 · 前途无量 🌟',
      praise: '陈祉璇同学！经系统全方位评估，你的命格非同凡响——五维评分如同为你量身打造。你的智慧与才华注定让你在未来的道路上熠熠生辉，无论选择哪个领域都将成为最耀眼的那颗星。继续保持你的独特与优秀，世界正在等你大放异彩！✨'
    };
  }
  if (name === '魏子辰') {
    return {
      name: '魏子辰',
      title: '🚀 天命之人 · 前程似锦 🚀',
      praise: '魏子辰同学！系统检测到你的潜力值爆表——你的综合素质令人惊叹，天生的领导气质与过人的智慧将带你走向非凡的未来。无论身处何种环境，你都能脱颖而出。愿你始终保持这份锐气与从容，你的前途注定是一片星辰大海！🌌'
    };
  }
  return null;
}
    stemBranch,
    zodiac,
    mbti,
    total,
    grade,
    advice,
    timestamp: Date.now(),
    id: generateId()
  };
}

/**
 * 大学评分
 */
function calcUniversity(name) {
  if (!name || !name.trim()) {
    return { name: '未填写', tier: '未知', score: 35, level: '--', match: 'default' };
  }

  const cleanName = name.trim();

  // 顶尖三校特殊处理
  if (cleanName.includes('清华') || cleanName.includes('Tsinghua')) {
    return { name: cleanName, tier: '顶尖', score: 100, level: '前途亮到刺眼', match: 'elite' };
  }
  if (cleanName.includes('北大') || cleanName.includes('北京大') || cleanName.includes('Peking')) {
    return { name: cleanName, tier: '顶尖', score: 100, level: '前途亮到刺眼', match: 'elite' };
  }
  if (cleanName.includes('浙大') || cleanName.includes('浙江大') || cleanName.includes('Zhejiang')) {
    return { name: cleanName, tier: '顶尖', score: 100, level: '前途亮到刺眼', match: 'elite' };
  }

  // 精确匹配
  if (UNIVERSITY_TIERS[cleanName]) {
    const info = UNIVERSITY_TIERS[cleanName];
    return { name: cleanName, tier: info.tier, score: info.score, level: info.level, match: 'exact' };
  }

  // 模糊匹配（包含关键词）
  for (const kw of UNIVERSITY_KEYWORDS) {
    for (const keyword of kw.keywords) {
      if (cleanName.includes(keyword)) {
        return {
          name: cleanName,
          tier: kw.tier,
          score: kw.score + Math.floor(Math.random() * 5),
          level: kw.tier + '院校',
          match: 'fuzzy'
        };
      }
    }
  }

  // 完全未知
  return { name: cleanName, tier: '未知', score: 40, level: '待评估', match: 'unknown' };
}

/**
 * 专业评分
 */
function calcMajor(name) {
  if (!name || !name.trim()) {
    return { name: '未填写', category: '未知', score: 40, demand: '--', outlook: '请填写专业信息以获取评估', match: 'default' };
  }

  const cleanName = name.trim();

  // 精确匹配
  if (MAJOR_CATEGORIES[cleanName]) {
    const info = MAJOR_CATEGORIES[cleanName];
    return { name: cleanName, ...info, match: 'exact' };
  }

  // 模糊匹配
  for (const kw of MAJOR_KEYWORDS) {
    for (const keyword of kw.keywords) {
      if (cleanName.includes(keyword)) {
        return {
          name: cleanName,
          category: kw.category,
          score: kw.score + Math.floor(Math.random() * 5),
          demand: '中高',
          outlook: '基于专业关键词匹配，仅供参考',
          match: 'fuzzy'
        };
      }
    }
  }

  // 未知专业
  return {
    name: cleanName,
    category: '其他',
    score: 50,
    demand: '未知',
    outlook: '该专业暂未收录详细数据，建议结合行业趋势自行判断',
    match: 'unknown'
  };
}

/**
 * 五行命理评分（天干地支 + 五行分析）
 */
function calcStemBranch(profile) {
  const year = parseInt(profile.birthYear) || new Date().getFullYear();
  const month = parseInt(profile.birthMonth) || 1;
  const day = parseInt(profile.birthDay) || 1;
  const hour = profile.birthHour !== null && profile.birthHour !== undefined && profile.birthHour !== ''
    ? parseInt(profile.birthHour) : new Date().getHours();

  // 完整的五行分析
  const wuxing = analyzeWuxing(year, month, day, hour);

  return {
    year: year,
    month: month,
    day: day,
    hour: hour,
    // 四柱
    yearPillar: wuxing.pillars.year,
    monthPillar: wuxing.pillars.month,
    dayPillar: wuxing.pillars.day,
    hourPillar: wuxing.pillars.hour,
    shichen: wuxing.shichen,
    stemBranch: wuxing.pillars.day.stemBranch, // 日柱作为代表
    // 五行分析
    dayMaster: wuxing.dayMaster,
    strongest: wuxing.strongest,
    weakest: wuxing.weakest,
    wuxingCount: wuxing.wuxingCount,
    balance: wuxing.balance,
    dayMasterStrength: wuxing.dayMasterStrength,
    deLing: wuxing.deLing,
    wuxingAdvice: wuxing.advice,
    score: wuxing.score
  };
}

/**
 * 星座评分
 */
function calcZodiac(month, day) {
  const m = parseInt(month);
  const d = parseInt(day);

  if (!m || !d || m < 1 || m > 12 || d < 1 || d > 31) {
    return { name: '未知', emoji: '❓', score: 60, trait: '请填写正确的出生日期', career: '', advice: '', element: '' };
  }

  const zodiac = getZodiac(m, d);
  return {
    name: zodiac.name,
    emoji: zodiac.emoji,
    element: zodiac.element,
    score: zodiac.score,
    trait: zodiac.trait,
    career: zodiac.career,
    advice: zodiac.advice
  };
}

/**
 * MBTI 评分
 */
function calcMBTI(type) {
  if (!type || !type.trim()) {
    return { type: '未填写', name: '--', score: 50, trait: '请选择MBTI类型以获取评估', career: '', advice: '' };
  }

  const upperType = type.trim().toUpperCase();
  const data = MBTI_DATA[upperType];

  if (data) {
    return { type: upperType, ...data };
  }

  return { type: upperType, name: '未知类型', score: 55, trait: '未识别的MBTI类型', career: '', advice: '请检查MBTI类型是否正确（如 INTJ、ENFP 等）' };
}

/**
 * 分数 → 评级
 */
function getGrade(score) {
  if (score >= 85) return { grade: '☀️', label: '你的前途一片光明！误闯天家', color: '#c9a96e', desc: '命格非凡，天选之人！各大维度表现优异，未来不可限量，大胆去闯吧。' };
  if (score >= 70) return { grade: '🌤', label: '还可以，前途微亮', color: '#5cb85c', desc: '整体条件不错，有明确的上升通道。找对方向持续努力，光明就在前方。' };
  if (score >= 55) return { grade: '🌥', label: '一般，前路一片迷茫', color: '#f0ad4e', desc: '目前的组合中规中矩，可能需要多一些尝试和探索。迷茫只是暂时的，找准赛道就有突破。' };
  return { grade: '🌑', label: '前途暗的一下就睡着了', color: '#888888', desc: '眼下或许不是最顺的阶段，但黑暗之后必有黎明。蓄力待发，厚积薄发，也是一种策略。' };
}

/**
 * 生成综合建议（三大类，每类含子条目）
 */
function generateAdvice({ university, major, stemBranch, zodiac, mbti, total, specialPerson }) {
  const groups = [];

  // ===== 特殊人物专属 =====
  if (specialPerson) {
    groups.push({
      icon: '👑',
      title: specialPerson.title,
      items: [specialPerson.praise]
    });
  }

  // ===== 第一大类：学业与专业 =====
  const academicItems = [];

  if (university.score >= 85) {
    academicItems.push('学校背景优秀，善用名校资源和人脉网络，这是重要的起点优势。');
  } else if (university.score >= 65) {
    academicItems.push('学校平台有一定竞争力，可通过考研深造或证书加持来进一步提升背景。');
  } else {
    academicItems.push('学校背景虽非顶尖，但实际能力和经验同样重要，专注打造核心竞争力。');
  }

  if (major.score >= 85) {
    academicItems.push(`${major.name}正处于黄金赛道，市场需求旺盛，深耕技术能力将获得丰厚回报。`);
  } else if (major.score >= 70) {
    academicItems.push(`${major.name}前景稳定，关注行业前沿动态，适时补充新兴技能提升竞争力。`);
  } else {
    academicItems.push(`${major.name}市场需求一般，可考虑辅修热门技能或向交叉领域发展。`);
  }

  groups.push({ icon: '🏫', title: '学业与专业', items: academicItems });

  // ===== 第二大类：命理与性格 =====
  const destinyItems = [];

  const p = stemBranch;
  // 四柱八字
  if (p.yearPillar && p.dayPillar) {
    destinyItems.push(`八字：${p.yearPillar.stemBranch}年 ${p.monthPillar.stemBranch}月 ${p.dayPillar.stemBranch}日${p.hourPillar ? ' ' + p.hourPillar.stemBranch + '时' : ''}`);
  }
  // 日主
  destinyItems.push(`日主「${p.dayMaster.emoji}${p.dayMaster.element}」— ${p.dayMaster.trait}${p.deLing ? '，得月令之气根基深厚' : '，不得月令宜借力发展'}`);
  // 五行分布
  if (p.strongest && p.weakest) {
    destinyItems.push(`五行：最强${p.strongest.emoji}${p.strongest.element}(${p.wuxingCount[p.strongest.element]})，最弱${p.weakest.emoji}${p.weakest.element}(${p.wuxingCount[p.weakest.element]})，平衡度${p.balance}`);
  }
  // 五行建议核心句
  if (p.wuxingAdvice && p.wuxingAdvice.length > 0) {
    destinyItems.push(p.wuxingAdvice[0].replace(/^[^·]+·/, '')); // 取第一条建议的核心内容
  }
  // 星座
  if (zodiac.advice) {
    destinyItems.push(`${zodiac.emoji}${zodiac.name}（${zodiac.element}象）：${zodiac.advice}`);
  }
  // MBTI
  if (mbti.advice) {
    destinyItems.push(`🧠 ${mbti.type}（${mbti.name}）：${mbti.advice}`);
  }

  groups.push({ icon: '🌟', title: '命理与性格', items: destinyItems });

  // ===== 第三大类：综合展望 =====
  const outlookItems = [];

  if (total >= 85) {
    outlookItems.push('综合条件非常优秀，大胆追求高远目标，你对得起自己的天赋。');
  } else if (total >= 70) {
    outlookItems.push('基础条件不错，关键在于找到最适合自己的路，持续深耕。');
  } else {
    outlookItems.push('人生是马拉松而非短跑，从今天开始的每个选择和行动才真正决定未来。');
  }

  // 日主行业方向
  const dmEl = p.dayMaster.element;
  if (dmEl && WUXING_TRAITS[dmEl]) {
    outlookItems.push(`五行视角推荐方向：${WUXING_TRAITS[dmEl].career}`);
  }

  groups.push({ icon: '🎯', title: '综合展望', items: outlookItems });

  return groups;
}

/**
 * 生成唯一ID
 */
function generateId() {
  return 'pred_' + Date.now() + '_' + Math.random().toString(36).substr(2, 6);
}
