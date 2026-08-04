/**
 * 前途预测系统 — 抽签 + 八卦占卜
 * 1000支签基于六十四卦，八卦占卜用六爻起卦
 */

/**
 * 基于种子的伪随机数（0-1），与 data.js 中 seededRandomStick 共用同一算法
 */
function seededRandom(seed) {
  let s = seed;
  s = Math.imul(s ^ (s >>> 16), 0x45d9f3b);
  s = Math.imul(s ^ (s >>> 16), 0x45d9f3b);
  s = s ^ (s >>> 16);
  return (s >>> 0) / 0xFFFFFFFF;
}

/**
 * 抽一支签
 * @param {number|null} seed — 可选种子（用于同一天同一签）
 * @returns {Object} 签文
 */
function drawStick(seed) {
  const s = seed || Date.now();
  const stickNum = Math.floor(seededRandom(s) * 1000) + 1;
  return generateStick(stickNum);
}

/**
 * 八卦占卜
 * @param {number|null} seed — 种子
 * @returns {Object} 卦象结果
 */
function divine(seed) {
  const s = seed || Date.now();
  return castHexagram(s);
}
