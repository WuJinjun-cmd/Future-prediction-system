/**
 * 前途预测系统 — 预测评分算法
 * 五维度等权重：大学、专业、天干地支、星座、MBTI
 */

/**
 * 主预测函数
 * @param {Object} profile - { university, major, birthYear, birthMonth, birthDay, mbti }
 * @returns {Object} 完整的预测结果
 */
function calculateScore(profile) {
  const university = calcUniversity(profile.university || '');
  const major = calcMajor(profile.major || '');
  const stemBranch = calcStemBranch(profile.birthYear || new Date().getFullYear());
  const zodiac = calcZodiac(profile.birthMonth, profile.birthDay);
  const mbti = calcMBTI(profile.mbti || '');

  const scores = [university.score, major.score, stemBranch.score, zodiac.score, mbti.score];
  const total = Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);

  const grade = getGrade(total);
  const advice = generateAdvice({ university, major, stemBranch, zodiac, mbti, total });

  return {
    university,
    major,
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
 * 天干地支评分
 */
function calcStemBranch(birthYear) {
  const year = parseInt(birthYear) || new Date().getFullYear();
  const sb = getYearStemBranch(year);

  const ganInfo = TIAN_GAN_SCORE[sb.tianGan];
  const zhiInfo = DI_ZHI_SCORE[sb.diZhi];

  // 天干占60%，地支占40%
  const score = Math.round(ganInfo.score * 0.6 + zhiInfo.score * 0.4);

  return {
    year: year,
    tianGan: sb.tianGan,
    diZhi: sb.diZhi,
    stemBranch: sb.stemBranch,
    ganTrait: ganInfo.trait,
    zhiTrait: zhiInfo.trait,
    ganElement: ganInfo.element,
    score: score
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
  if (score >= 90) return { grade: 'S', label: '至尊之命', color: '#c9a96e', desc: '天选之人，前程不可限量！各方面条件都非常优越，未来成就值得期待。' };
  if (score >= 82) return { grade: 'A', label: '上等之才', color: '#5cb85c', desc: '出类拔萃，发展潜力巨大。在适合自己的领域深耕，必有一番作为。' };
  if (score >= 72) return { grade: 'B', label: '中上之资', color: '#4a90d9', desc: '基础扎实，稳步向前。找准方向持续努力，前途依然光明。' };
  if (score >= 62) return { grade: 'C', label: '中等之运', color: '#f0ad4e', desc: '虽有挑战但并非无路。扬长避短，在适合自己的赛道发力，同样能取得成就。' };
  if (score >= 50) return { grade: 'D', label: '待时之机', color: '#d9534f', desc: '眼下或许不是最好的时机，但命运从来不是一成不变。持续提升自我，等待转机。' };
  return { grade: 'E', label: '蛰伏之期', color: '#888888', desc: '目前处于积累期，不要气馁。许多人都是大器晚成，关键是不放弃自己。' };
}

/**
 * 生成综合建议
 */
function generateAdvice({ university, major, stemBranch, zodiac, mbti, total }) {
  const advices = [];

  // 大学建议
  if (university.score >= 85) {
    advices.push('🏫 你的学校背景非常优秀，这是重要的起点优势，善用名校资源和人脉网络。');
  } else if (university.score >= 65) {
    advices.push('🏫 学校平台有一定竞争力，可以通过考研深造或证书加持来进一步提升背景。');
  } else {
    advices.push('🏫 学校背景虽非顶尖，但实际能力和经验同样重要，专注打造自己的核心竞争力。');
  }

  // 专业建议
  if (major.score >= 85) {
    advices.push('💼 你的专业正处于黄金赛道，市场需求旺盛，深耕技术能力将获得丰厚回报。');
  } else if (major.score >= 70) {
    advices.push('💼 专业前景稳定，建议关注行业前沿动态，适时补充新兴技能提升竞争力。');
  } else {
    advices.push('💼 专业市场需求一般，可以考虑辅修热门技能或向交叉领域发展，拓宽就业面。');
  }

  // 天干地支建议
  advices.push(`🌟 命理天干「${stemBranch.tianGan}」属${stemBranch.ganElement}，${stemBranch.ganTrait}。地支「${stemBranch.diZhi}」${stemBranch.zhiTrait}。顺应天性选择发展方向，事半功倍。`);

  // 星座建议
  if (zodiac.advice) {
    advices.push(`♈ 星座视角：${zodiac.advice}。`);
  }

  // MBTI建议
  if (mbti.advice) {
    advices.push(`🧠 MBTI视角：${mbti.advice}`);
  }

  // 综合建议
  if (total >= 85) {
    advices.push('🎯 综合来看，你拥有非常优秀的组合条件。大胆追求高远的目标，你对得起自己的天赋。');
  } else if (total >= 70) {
    advices.push('🎯 你有着不错的基础条件，关键在于找到最适合自己的那条路，然后持续深耕。');
  } else {
    advices.push('🎯 人生是一场马拉松而非短跑。当前的评分只是一个参考，真正决定未来的，是你从今天开始的每一个选择和行动。');
  }

  return advices;
}

/**
 * 生成唯一ID
 */
function generateId() {
  return 'pred_' + Date.now() + '_' + Math.random().toString(36).substr(2, 6);
}
