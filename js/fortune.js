/**
 * 前途预测系统 — 每日运势生成
 * A. 个性化运势（需用户 profile）
 * B. 每日一签（独立随机，日期种子）
 */

/**
 * 获取今日运势（含缓存判断）
 */
function getDailyFortune(profile) {
  const today = getDateKey();
  const cached = getFortuneCache(today);
  if (cached) return cached;

  const fortune = {
    date: today,
    personalized: null,
    dailyCard: getDailyCard()
  };

  // 如果用户已保存 profile，生成个性化运势
  if (profile && profile.birthMonth && profile.birthDay) {
    fortune.personalized = generatePersonalizedFortune(profile);
  }

  // 缓存今日运势
  saveFortuneCache(today, fortune);
  return fortune;
}

/**
 * 生成个性化运势
 */
function generatePersonalizedFortune(profile) {
  const zodiac = getZodiac(parseInt(profile.birthMonth), parseInt(profile.birthDay));
  const today = new Date();
  const daySeed = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();

  // 如果有完整出生信息，使用五行分析；否则退回到年柱
  let stemBase, stemBranchName;
  const year = parseInt(profile.birthYear) || new Date().getFullYear();
  const month = parseInt(profile.birthMonth) || 1;
  const day = parseInt(profile.birthDay) || 1;
  const hour = profile.birthHour !== null && profile.birthHour !== undefined && profile.birthHour !== ''
    ? parseInt(profile.birthHour) : new Date().getHours();

  if (profile.birthMonth && profile.birthDay) {
    // 完整五行分析
    const wuxing = analyzeWuxing(year, month, day, hour);
    stemBase = wuxing.score;
    stemBranchName = wuxing.pillars.day.stemBranch;
  } else {
    // 退回到年柱
    const sb = getYearStemBranch(year);
    stemBase = TIAN_GAN_SCORE[sb.tianGan].score;
    stemBranchName = sb.stemBranch;
  }

  // 基于星座和五行命理 + 日期计算综合运势指数

  // 日期波动（-15 ~ +15）
  const fluctuation = (seededRandom(daySeed) * 30 - 15);
  const fortuneScore = Math.min(100, Math.max(30, Math.round(combinedBase + fluctuation)));

  // 宜忌
  const yiCount = 3;
  const jiCount = 3;
  const yiSeed = daySeed + 1;
  const jiSeed = daySeed + 2;
  const yi = pickRandomItems(FORTUNE_YI, yiCount, yiSeed);
  const ji = pickRandomItems(FORTUNE_JI, jiCount, jiSeed);

  // 幸运元素
  const luckyColorIdx = Math.floor(seededRandom(daySeed + 3) * LUCKY_COLORS.length);
  const luckyNum = Math.floor(seededRandom(daySeed + 4) * 90) + 10;
  const luckyDirIdx = Math.floor(seededRandom(daySeed + 5) * LUCKY_DIRECTIONS.length);

  // 运势等级
  let fortuneLevel, fortuneColor, fortuneDesc;
  if (fortuneScore >= 85) {
    fortuneLevel = '⭐⭐⭐⭐⭐ 大吉'; fortuneColor = '#c9a96e';
    fortuneDesc = '今日运势极佳，诸事顺遂！适合做重要决定，大胆迈出关键一步。';
  } else if (fortuneScore >= 75) {
    fortuneLevel = '⭐⭐⭐⭐ 吉'; fortuneColor = '#5cb85c';
    fortuneDesc = '运势上扬，心情愉悦。适合与人沟通合作，会有不错的收获。';
  } else if (fortuneScore >= 65) {
    fortuneLevel = '⭐⭐⭐ 中吉'; fortuneColor = '#4a90d9';
    fortuneDesc = '运势平稳，按部就班。适合完成日常任务，不宜冒进。';
  } else if (fortuneScore >= 55) {
    fortuneLevel = '⭐⭐ 小吉'; fortuneColor = '#f0ad4e';
    fortuneDesc = '略有波折，但无大碍。保持耐心，专注做好手头的事情。';
  } else if (fortuneScore >= 40) {
    fortuneLevel = '⭐ 平平'; fortuneColor = '#d9534f';
    fortuneDesc = '今日宜静不宜动，适合反思和充电。不必勉强自己，休息也是前进。';
  } else {
    fortuneLevel = '⚡ 低谷'; fortuneColor = '#888888';
    fortuneDesc = '运势暂处低谷，但低谷之后必有反弹。低调行事，修身养性。';
  }

  return {
    zodiacName: zodiac.name,
    zodiacEmoji: zodiac.emoji,
    stemBranch: stemBranchName,
    fortuneScore,
    fortuneLevel,
    fortuneColor,
    fortuneDesc,
    yi,
    ji,
    luckyColor: LUCKY_COLORS[luckyColorIdx],
    luckyColorName: LUCKY_COLORS_NAMES[luckyColorIdx],
    luckyNumber: luckyNum,
    luckyDirection: LUCKY_DIRECTIONS[luckyDirIdx]
  };
}

/**
 * 获取每日一签（日期种子，同一天同一签）
 */
function getDailyCard() {
  const today = new Date();
  const seed = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
  const idx = Math.floor(seededRandom(seed) * FORTUNE_POOL.length);
  return FORTUNE_POOL[idx];
}

/**
 * 基于种子的伪随机数（0-1）
 * 使用简单的乘法哈希
 */
function seededRandom(seed) {
  let s = seed;
  s = Math.imul(s ^ (s >>> 16), 0x45d9f3b);
  s = Math.imul(s ^ (s >>> 16), 0x45d9f3b);
  s = s ^ (s >>> 16);
  return (s >>> 0) / 0xFFFFFFFF;
}

/**
 * 从数组中随机选取 n 个不重复元素（基于种子）
 */
function pickRandomItems(arr, n, seed) {
  const indices = arr.map((_, i) => i);
  // Fisher-Yates shuffle with seeded random
  let s = seed;
  for (let i = indices.length - 1; i > 0; i--) {
    s = Math.imul(s ^ (s >>> 16), 0x45d9f3b);
    s = Math.imul(s ^ (s >>> 16), 0x45d9f3b);
    s = s ^ (s >>> 16);
    const r = (s >>> 0) % (i + 1);
    [indices[i], indices[r]] = [indices[r], indices[i]];
  }
  return indices.slice(0, n).map(i => arr[i]);
}

/**
 * 获取日期字符串 YYYY-MM-DD
 */
function getDateKey() {
  const d = new Date();
  return d.getFullYear() + '-' +
    String(d.getMonth() + 1).padStart(2, '0') + '-' +
    String(d.getDate()).padStart(2, '0');
}
