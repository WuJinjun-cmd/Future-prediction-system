/**
 * 前途预测系统 — 应用主控制器
 */

// ========== 初始化 ==========
document.addEventListener('DOMContentLoaded', () => {
  initTabs();
  initForm();
  initHistoryTab();
  initFortuneTab();
  handleHashRoute();

  // 监听 hash 变化
  window.addEventListener('hashchange', handleHashRoute);
});

// ========== Tab 导航 ==========

function initTabs() {
  const tabs = document.querySelectorAll('.nav-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.tab;
      switchTab(target);
      // 更新 URL hash
      window.location.hash = target;
    });
  });
}

function switchTab(tabName) {
  // 更新 Tab 按钮状态
  document.querySelectorAll('.nav-tab').forEach(t => {
    t.classList.toggle('active', t.dataset.tab === tabName);
  });

  // 更新面板显示
  document.querySelectorAll('.panel').forEach(p => {
    p.classList.toggle('active', p.id === 'panel-' + tabName);
  });

  // 如果切换到运势 Tab，刷新运势
  if (tabName === 'fortune') {
    renderFortune();
  }

  // 如果切换到历史 Tab，刷新历史
  if (tabName === 'history') {
    renderHistory();
  }

  // 滚动到顶部
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function handleHashRoute() {
  const hash = window.location.hash.replace('#', '');
  const validTabs = ['home', 'result', 'fortune', 'history'];
  const target = validTabs.includes(hash) ? hash : 'home';

  // 如果目标是 result 但没有数据，跳回 home
  if (target === 'result' && !getProfile()) {
    switchTab('home');
    window.location.hash = 'home';
    return;
  }

  switchTab(target);
}

// ========== 预测表单 ==========

function initForm() {
  // 加载已保存的 profile 回填表单
  const profile = getProfile();
  if (profile) {
    document.getElementById('input-name').value = profile.name || '';
    document.getElementById('input-university').value = profile.university || '';
    document.getElementById('input-major').value = profile.major || '';
    document.getElementById('input-birthyear').value = profile.birthYear || '';
    document.getElementById('input-birthmonth').value = profile.birthMonth || '';
    document.getElementById('input-birthday').value = profile.birthDay || '';
    document.getElementById('input-birthhour').value = profile.birthHour !== undefined ? profile.birthHour : '';
    document.getElementById('input-birthminute').value = profile.birthMinute !== undefined ? profile.birthMinute : '';
    document.getElementById('input-mbti').value = profile.mbti || '';
  }

  // 绑定提交事件
  document.getElementById('btn-predict').addEventListener('click', handlePredict);

  // 回车键提交
  document.querySelectorAll('#panel-home input, #panel-home select').forEach(el => {
    el.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') handlePredict();
    });
  });
}

function handlePredict() {
  // 收集表单数据
  const hourVal = document.getElementById('input-birthhour').value;
  const minVal = document.getElementById('input-birthminute').value;
  const profile = {
    name: document.getElementById('input-name').value.trim(),
    university: document.getElementById('input-university').value.trim(),
    major: document.getElementById('input-major').value.trim(),
    birthYear: parseInt(document.getElementById('input-birthyear').value) || null,
    birthMonth: parseInt(document.getElementById('input-birthmonth').value) || null,
    birthDay: parseInt(document.getElementById('input-birthday').value) || null,
    birthHour: hourVal !== '' ? parseInt(hourVal) : null,
    birthMinute: minVal !== '' ? parseInt(minVal) : null,
    mbti: document.getElementById('input-mbti').value.trim().toUpperCase()
  };

  // 基本验证：至少填写2项
  const filledCount = [
    profile.university, profile.major,
    profile.birthYear, profile.mbti
  ].filter(Boolean).length;

  if (filledCount < 2) {
    showToast('请至少填写2项信息以获得更准确的预测结果', 'warning');
    return;
  }

  // 保存用户信息
  saveProfile(profile);

  // 计算预测
  const result = calculateScore(profile);

  // 保存到历史
  savePrediction(result);

  // 先切换到结果页（面板显示后 Canvas 才能获取正确尺寸）
  switchTab('result');
  window.location.hash = 'result';

  // 渲染结果（在面板可见后进行，确保 Canvas 尺寸正确）
  renderResult(result);

  // 播放动画
  animateScoreNumber(result.total);

  showToast('预测完成！✨', 'success');
}

// ========== 结果渲染 ==========

function renderResult(result) {
  // 特殊人物横幅
  const specialBanner = document.getElementById('special-banner');
  if (result.specialPerson) {
    specialBanner.style.display = 'block';
    specialBanner.querySelector('.special-title').textContent = result.specialPerson.title;
    specialBanner.querySelector('.special-praise').textContent = result.specialPerson.praise;
  } else {
    specialBanner.style.display = 'none';
  }

  // 总分
  document.getElementById('result-total').textContent = result.total;
  // 如果是顶尖三校用特殊颜色
  if (result.university.score === 100 && result.university.level === '前途亮到刺眼') {
    document.getElementById('result-total').style.color = '#ff6b00';
  } else {
    document.getElementById('result-total').style.color = '';
  }
  document.getElementById('result-grade').textContent = result.grade.label;
  document.getElementById('result-grade').style.color = result.grade.color;

  // 评级描述
  document.getElementById('result-grade-desc').textContent = result.grade.desc;

  // 各维度详情
  renderDimensionDetail('dim-uni', result.university, '大学');
  renderDimensionDetail('dim-major', result.major, '专业');
  renderDimensionDetail('dim-stem', result.stemBranch, '五行命理');
  renderDimensionDetail('dim-zodiac', result.zodiac, '星座');
  renderDimensionDetail('dim-mbti', result.mbti, 'MBTI');

  // 建议（分组结构）
  const adviceList = document.getElementById('result-advice');
  adviceList.innerHTML = result.advice.map(group => `
    <li class="advice-group">
      <div class="advice-group-title">${group.icon} ${group.title}</div>
      <ul class="advice-sub-list">
        ${group.items.map(item => `<li>${item}</li>`).join('')}
      </ul>
    </li>
  `).join('');

  // 今日运势（基于五行+星座）
  renderResultFortune(result);

  // 雷达图（分数封顶100以保证图表比例）
  renderRadarChart([
    result.university.score,
    result.major.score,
    Math.min(100, result.stemBranch.score),
    result.zodiac.score,
    result.mbti.score
  ]);

  // 环形进度条
  renderRingProgress(result.total);

  // 时间戳
  document.getElementById('result-time').textContent =
    '预测时间：' + new Date(result.timestamp).toLocaleString('zh-CN');
}

/**
 * 在结果页渲染今日运势（基于五行命理+星座元素）
 */
function renderResultFortune(result) {
  const container = document.getElementById('result-fortune-content');
  if (!container) return;

  const sb = result.stemBranch;
  const zodiac = result.zodiac;
  const today = new Date();
  const daySeed = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();

  // 基于五行日主 + 星座元素 + 日期计算运势
  const dayMaster = sb.dayMaster || {};
  const zodiacElement = zodiac.element || '';
  const strongest = sb.strongest || {};
  const weakest = sb.weakest || {};

  // 五行和星座综合运势分
  const wuxingBase = sb.score || 60;
  const zodiacBase = zodiac.score || 60;
  const combinedBase = (wuxingBase * 0.6 + zodiacBase * 0.4);
  const fluctuation = (seededRandom(daySeed) * 20 - 10);
  const fortuneScore = Math.min(120, Math.max(40, Math.round(combinedBase + fluctuation)));

  // 运势等级
  let levelText, levelColor;
  if (fortuneScore >= 95) { levelText = '大吉'; levelColor = '#c9a96e'; }
  else if (fortuneScore >= 80) { levelText = '吉'; levelColor = '#5cb85c'; }
  else if (fortuneScore >= 60) { levelText = '中平'; levelColor = '#4a90d9'; }
  else if (fortuneScore >= 45) { levelText = '小凶'; levelColor = '#f0ad4e'; }
  else { levelText = '大凶'; levelColor = '#d9534f'; }

  // 基于五行生克生成宜忌
  const dmEl = dayMaster.element || '木';
  const shengEl = WUXING_SHENG[dmEl] || '火';  // 日主所生
  const keEl = WUXING_KE[dmEl] || '土';        // 日主所克
  const shengMeEl = Object.keys(WUXING_SHENG).find(k => WUXING_SHENG[k] === dmEl) || '水'; // 生我者

  const yi = [
    `多接触${shengEl}属性的事物`, `与${shengMeEl}属性的人合作`,
    `发挥${dmEl}的${WUXING_TRAITS[dmEl].trait}`, `在${WUXING_TRAITS[shengEl].career}方面发力`
  ];
  const ji = [
    `避免与${keEl}属性的人冲突`, `少做${WUXING_TRAITS[keEl].career}相关的决策`,
    `不要过度消耗${dmEl}的能量`, `忌急躁，${dmEl}需顺势而为`
  ];

  // 星座元素运势解读
  const elementMap = { '火': '火象', '土': '土象', '风': '风象', '水': '水象' };
  const zodiacEleType = elementMap[zodiacElement] || '';
  const zodiacInsight = zodiacEleType
    ? `你的星座属${zodiacEleType}，${zodiacElement === '火' ? '行动力强但需控制冲动' : zodiacElement === '土' ? '稳重务实但需灵活应变' : zodiacElement === '风' ? '思维敏捷但需落地执行' : zodiacElement === '水' ? '情感丰富但需理性决策' : ''}。`
    : '';

  // 日主今日运势解读
  const dayMasterInsight = `今日日主「${dmEl}」${shengEl ? `生${shengEl}` : ''}，${keEl ? `克${keEl}` : ''}，${shengMeEl ? `被${shengMeEl}所生` : ''}。五行流转之间，${fortuneScore >= 75 ? '顺势而上' : '以守为攻'}是今天的关键词。`;

  container.innerHTML = `
    <div class="result-fortune">
      <div class="rf-score-row">
        <div class="rf-score" style="color:${levelColor}">${fortuneScore}</div>
        <div class="rf-level" style="color:${levelColor}">${levelText}</div>
      </div>
      <p class="rf-desc">${dayMasterInsight}</p>
      <p class="rf-desc">${zodiacInsight}</p>
      <div class="rf-meta">
        <span>☀️ 日主：${dayMaster.emoji || ''}${dmEl} ${sb.deLing ? '· 得令' : '· 失令'}</span>
        <span>${zodiac.emoji || ''} ${zodiac.name} · ${zodiacElement}象</span>
      </div>
      <div class="rf-elements">
        <span>最强：${strongest.emoji || ''}${strongest.element || '--'}</span>
        <span>最弱：${weakest.emoji || ''}${weakest.element || '--'}</span>
        <span>平衡：${sb.balance || 0}</span>
      </div>
      <div class="yi-ji" style="margin-top:12px;">
        <div class="yi">
          <h4>✅ 今日宜</h4>
          <ul>${yi.map(item => `<li>${item}</li>`).join('')}</ul>
        </div>
        <div class="ji">
          <h4>❌ 今日忌</h4>
          <ul>${ji.map(item => `<li>${item}</li>`).join('')}</ul>
        </div>
      </div>
    </div>
  `;
}

function renderDimensionDetail(id, data, label) {
  const el = document.getElementById(id);
  if (!el) return;

  let name, score, detail;
  if (label === '大学') {
    name = data.name; score = data.score; detail = `${data.level || ''} · ${data.tier || ''}`;
  } else if (label === '专业') {
    name = data.name; score = data.score; detail = `${data.category || ''} · 需求${data.demand || '--'}`;
  } else if (label === '五行命理') {
    const dm = data.dayMaster || {};
    name = `日主${dm.emoji || ''}${dm.element || '?'} · ${data.stemBranch || ''}`;
    score = data.score;
    const wc = data.wuxingCount || {};
    detail = `🌳${wc['木']||0} 🔥${wc['火']||0} 🏔${wc['土']||0} ⚜️${wc['金']||0} 💧${wc['水']||0} | ${data.deLing ? '得令' : '失令'} | 平衡${data.balance || 0}`;
  } else if (label === '星座') {
    name = `${data.emoji || ''} ${data.name}`; score = data.score; detail = data.trait || '';
  } else if (label === 'MBTI') {
    name = `${data.type} (${data.name})`; score = data.score; detail = data.trait || '';
  }

  el.querySelector('.dim-name').textContent = name;
  el.querySelector('.dim-score').textContent = score;
  el.querySelector('.dim-detail').textContent = detail;
  el.querySelector('.dim-bar-fill').style.width = score + '%';
  el.querySelector('.dim-bar-fill').style.backgroundColor = getScoreColor(score);
}

function getScoreColor(score) {
  if (score >= 85) return '#5cb85c';
  if (score >= 70) return '#4a90d9';
  if (score >= 55) return '#f0ad4e';
  return '#d9534f';
}

function animateScoreNumber(targetScore) {
  const el = document.getElementById('result-total');
  const duration = 1200;
  const startTime = performance.now();
  const startScore = 0;

  function step(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    // easeOutCubic
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.round(startScore + (targetScore - startScore) * eased);
    el.textContent = current;
    if (progress < 1) {
      requestAnimationFrame(step);
    }
  }

  requestAnimationFrame(step);
}

// ========== 雷达图 ==========

function renderRadarChart(scores) {
  const svg = document.getElementById('radar-chart');
  if (!svg) return;

  const labels = ['大学', '专业', '五行命理', '星座', 'MBTI'];
  const count = labels.length;
  const levels = 5;
  const cx = 160, cy = 160, r = 110;

  // 计算顶点的辅助函数
  function point(angle, radius) {
    return {
      x: cx + radius * Math.cos(angle - Math.PI / 2),
      y: cy + radius * Math.sin(angle - Math.PI / 2)
    };
  }

  let html = '';

  // 绘制网格（5层多边形）
  for (let level = 1; level <= levels; level++) {
    const lr = r * (level / levels);
    let points = [];
    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 2 * i) / count;
      const p = point(angle, lr);
      points.push(`${p.x},${p.y}`);
    }
    html += `<polygon points="${points.join(' ')}" fill="none" stroke="#e0e0e0" stroke-width="1"/>`;
  }

  // 绘制轴线
  for (let i = 0; i < count; i++) {
    const angle = (Math.PI * 2 * i) / count;
    const p = point(angle, r);
    html += `<line x1="${cx}" y1="${cy}" x2="${p.x}" y2="${p.y}" stroke="#e0e0e0" stroke-width="1"/>`;
  }

  // 绘制数据区域
  let dataPoints = [];
  for (let i = 0; i < count; i++) {
    const angle = (Math.PI * 2 * i) / count;
    const lr = r * (scores[i] / 100);
    const p = point(angle, lr);
    dataPoints.push(`${p.x},${p.y}`);
  }
  html += `<polygon points="${dataPoints.join(' ')}" fill="rgba(74,144,217,0.15)" stroke="#4a90d9" stroke-width="2" stroke-linejoin="round"/>`;

  // 绘制数据点
  for (let i = 0; i < count; i++) {
    const angle = (Math.PI * 2 * i) / count;
    const lr = r * (scores[i] / 100);
    const p = point(angle, lr);
    html += `<circle cx="${p.x}" cy="${p.y}" r="5" fill="#4a90d9" stroke="#fff" stroke-width="2"/>`;
  }

  // 绘制标签
  for (let i = 0; i < count; i++) {
    const angle = (Math.PI * 2 * i) / count;
    const lp = point(angle, r + 20);
    html += `<text x="${lp.x}" y="${lp.y + 5}" text-anchor="middle" fill="#666" font-size="13" font-family="SimSun,STSong,宋体,serif" font-weight="bold">${labels[i]}</text>`;
  }

  // 绘制分数（在每个数据点旁边）
  for (let i = 0; i < count; i++) {
    const angle = (Math.PI * 2 * i) / count;
    const lr = r * (scores[i] / 100) - 12;
    const sp = point(angle, lr);
    html += `<text x="${sp.x}" y="${sp.y + 4}" text-anchor="middle" fill="${getScoreColor(scores[i])}" font-size="11" font-family="SimSun,STSong,宋体,serif" font-weight="bold">${scores[i]}</text>`;
  }

  svg.innerHTML = html;
}

// ========== 环形进度条 ==========

function renderRingProgress(score) {
  const svg = document.getElementById('ring-progress');
  if (!svg) return;

  const size = 160, strokeWidth = 12, r = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * r;
  const offset = circumference - (score / 100) * circumference;
  const color = getScoreColor(score);

  svg.innerHTML = `
    <circle cx="${size/2}" cy="${size/2}" r="${r}"
      fill="none" stroke="#eee" stroke-width="${strokeWidth}"/>
    <circle cx="${size/2}" cy="${size/2}" r="${r}"
      fill="none" stroke="${color}" stroke-width="${strokeWidth}"
      stroke-dasharray="${circumference}" stroke-dashoffset="${offset}"
      stroke-linecap="round" transform="rotate(-90 ${size/2} ${size/2})"
      style="transition: stroke-dashoffset 1.2s ease-out;"/>
  `;
}

// ========== 抽签 + 八卦 ==========

function initFortuneTab() {}

function renderFortune() {
  // 不再动态渲染主结构，只清空之前的抽签和八卦结果
  const drawResult = document.getElementById('draw-result');
  const baguaResult = document.getElementById('bagua-result');
  if (drawResult) { drawResult.style.display = 'none'; drawResult.innerHTML = ''; }
  if (baguaResult) { baguaResult.style.display = 'none'; baguaResult.innerHTML = ''; }
}

/**
 * 处理抽签
 */
function handleDrawStick() {
  const profile = getProfile();

  // 没有用户信息时提示先去预测页填写
  if (!profile || (!profile.birthYear && !profile.mbti)) {
    showToast('请先在「预测首页」填写个人信息，才能抽到专属你的签文 🙏', 'warning');
    return;
  }

  // 基于日期 + 用户信息生成唯一种子（每人每天不同）
  const today = new Date();
  const dateNum = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
  const profileStr = [
    profile.university || '', profile.major || '',
    profile.birthYear || '', profile.birthMonth || '', profile.birthDay || '',
    profile.birthHour || '', profile.mbti || ''
  ].join('|');
  // 简单字符串哈希
  let hash = dateNum;
  for (let i = 0; i < profileStr.length; i++) {
    hash = ((hash << 5) - hash) + profileStr.charCodeAt(i);
    hash |= 0;
  }
  const stick = drawStick(Math.abs(hash));

  const resultEl = document.getElementById('draw-result');

  // 动画：签筒抖动
  const tube = document.getElementById('draw-tube');
  if (tube) {
    tube.classList.add('shaking');
    setTimeout(() => tube.classList.remove('shaking'), 600);
  }

  // 延迟显示结果
  setTimeout(() => {
    const hex = stick.hexagram;
    const levelColors = { '大吉': '#c9a96e', '吉': '#5cb85c', '中吉': '#4a90d9', '小吉': '#f0ad4e', '平': '#888', '末吉': '#d9534f', '凶': '#555' };

    resultEl.innerHTML = `
      <div class="stick-result">
        <div class="stick-badge" style="background:${levelColors[stick.level] || '#888'}">第${stick.number}签 · ${stick.level}</div>
        <div class="stick-hexagram">
          <span class="hex-symbol">${hex.symbol}</span>
          <span class="hex-name">${hex.name}</span>
          <span class="hex-element">(${hex.element}卦)</span>
        </div>
        <div class="stick-poem">${stick.poem}</div>
        <div class="stick-interpretation">${stick.interpretation}</div>
        <div class="stick-details">
          <div class="stick-detail-item"><span class="sd-label">💼 事业</span>${stick.career}</div>
          <div class="stick-detail-item"><span class="sd-label">💕 感情</span>${stick.love}</div>
          <div class="stick-detail-item"><span class="sd-label">🏥 健康</span>${stick.health}</div>
        </div>
      </div>
    `;
    resultEl.style.display = 'block';
    resultEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, 700);
}

/**
 * 处理八卦占卜
 */
function handleBagua() {
  const seed = Date.now();
  const result = divine(seed);

  const resultEl = document.getElementById('bagua-result');
  const hex = result.hexagram;

  // 绘制六爻
  let linesHtml = '';
  for (let i = 5; i >= 0; i--) {
    const line = result.lines[i];
    const cls = line.yang ? 'yao yang' : 'yao yin';
    const changeMark = line.changing ? ' ⭕' : '';
    linesHtml += `<div class="${cls}">${line.yang ? '━━━━━' : '━━ ━━'}${changeMark}</div>`;
  }

  // 变卦
  let changeHtml = '';
  if (result.hasChanging) {
    changeHtml = `<p class="bagua-change">变爻：第${result.changingLines.map(l => l.position).join('、')}爻动</p>`;
  }

  resultEl.innerHTML = `
    <div class="bagua-result-inner">
      <div class="hex-symbol-large">
        <span>${BAGUA[result.upperTrigram.name].symbol}</span>
        <span>${BAGUA[result.lowerTrigram.name].symbol}</span>
      </div>
      <div class="hex-name-large">${hex.name}</div>
      <div class="yao-lines">${linesHtml}</div>
      <div class="trigram-info">
        <span>上卦：${result.upperTrigram.name}（${result.upperTrigram.nature}·${result.upperTrigram.element}）</span>
        <span>下卦：${result.lowerTrigram.name}（${result.lowerTrigram.nature}·${result.lowerTrigram.element}）</span>
      </div>
      ${changeHtml}
      <div class="hex-judgment">「${hex.judgment}」</div>
      <div class="hex-interpretation">${hex.interpretation}</div>
      <div class="stick-details">
        <div class="stick-detail-item"><span class="sd-label">💼 事业</span>${hex.career}</div>
        <div class="stick-detail-item"><span class="sd-label">💕 感情</span>${hex.love}</div>
        <div class="stick-detail-item"><span class="sd-label">🏥 健康</span>${hex.health}</div>
      </div>
    </div>
  `;
  resultEl.style.display = 'block';
  resultEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// ========== 历史记录 ==========

function initHistoryTab() {
  // 预绑定事件
}

function renderHistory() {
  const history = getHistory();
  const container = document.getElementById('panel-history');
  if (!container) return;

  if (history.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">📋</div>
        <p>暂无预测记录</p>
        <p class="empty-hint">完成一次预测后，记录将显示在这里</p>
      </div>
    `;
    return;
  }

  let html = `
    <div class="history-actions">
      <span class="history-count">共 ${history.length} 条记录</span>
      <button class="btn btn-small btn-danger" onclick="handleClearHistory()">清空全部</button>
    </div>
    <div class="history-list">
  `;

  history.forEach(item => {
    const dateStr = new Date(item.timestamp).toLocaleString('zh-CN');
    const detailId = 'hist-detail-' + item.id;

    html += `
      <div class="history-item" onclick="toggleHistoryDetail('${item.id}')">
        <div class="history-item-header">
          <div class="history-score" style="color:${item.grade.color}">${item.total}</div>
          <div class="history-info">
            <div class="history-grade" style="color:${item.grade.color}">${item.grade.grade} · ${item.grade.label}</div>
            <div class="history-date">${dateStr}</div>
          </div>
          <button class="btn btn-small btn-text" onclick="event.stopPropagation();handleDeleteHistory('${item.id}')">删除</button>
        </div>
        <div class="history-detail" id="${detailId}" style="display:none;">
          <div class="mini-dims">
            <div class="mini-dim"><span>🏫 大学</span><span style="color:${getScoreColor(item.university.score)}">${item.university.score}</span></div>
            <div class="mini-dim"><span>💼 专业</span><span style="color:${getScoreColor(item.major.score)}">${item.major.score}</span></div>
            <div class="mini-dim"><span>🀄 天干地支</span><span style="color:${getScoreColor(item.stemBranch.score)}">${item.stemBranch.score}</span></div>
            <div class="mini-dim"><span>♈ 星座</span><span style="color:${getScoreColor(item.zodiac.score)}">${item.zodiac.score}</span></div>
            <div class="mini-dim"><span>🧠 MBTI</span><span style="color:${getScoreColor(item.mbti.score)}">${item.mbti.score}</span></div>
          </div>
          <div class="mini-advice">
            <strong>综合建议：</strong>
            ${Array.isArray(item.advice) && item.advice.length > 0 && item.advice[0].title
              ? item.advice.map(g => `<div class="mini-group"><em>${g.icon} ${g.title}</em>: ${g.items.slice(0, 2).join('；')}</div>`).join('')
              : ''
            }
          </div>
        </div>
      </div>
    `;
  });

  html += '</div>';
  container.innerHTML = html;
}

function toggleHistoryDetail(id) {
  const el = document.getElementById('hist-detail-' + id);
  if (el) {
    el.style.display = el.style.display === 'none' ? 'block' : 'none';
  }
}

function handleDeleteHistory(id) {
  if (confirm('确定要删除这条预测记录吗？')) {
    deleteHistory(id);
    renderHistory();
    showToast('已删除', 'info');
  }
}

function handleClearHistory() {
  if (confirm('确定要清空所有预测记录吗？此操作不可恢复。')) {
    clearHistory();
    renderHistory();
    showToast('历史记录已清空', 'info');
  }
}

// ========== 工具函数 ==========

function showToast(message, type) {
  // 移除已有 toast
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.className = 'toast toast-' + (type || 'info');
  toast.textContent = message;
  document.body.appendChild(toast);

  // 显示动画
  requestAnimationFrame(() => {
    toast.classList.add('show');
  });

  // 3秒后移除
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}
