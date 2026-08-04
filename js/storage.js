/**
 * 前途预测系统 — localStorage 存储封装
 */

const STORAGE_KEYS = {
  PROFILE: 'fps_profile',
  HISTORY: 'fps_history',
  FORTUNE_CACHE: 'fps_fortune_cache',
  MAX_HISTORY: 50
};

// ========== 用户信息 ==========

function saveProfile(profile) {
  try {
    localStorage.setItem(STORAGE_KEYS.PROFILE, JSON.stringify(profile));
    return true;
  } catch (e) {
    console.error('保存用户信息失败:', e);
    return false;
  }
}

function getProfile() {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.PROFILE);
    return raw ? JSON.parse(raw) : null;
  } catch (e) {
    console.error('读取用户信息失败:', e);
    return null;
  }
}

// ========== 预测历史 ==========

function savePrediction(result) {
  try {
    const history = getHistory();
    history.unshift(result);

    // 最多保留50条
    if (history.length > STORAGE_KEYS.MAX_HISTORY) {
      history.length = STORAGE_KEYS.MAX_HISTORY;
    }

    localStorage.setItem(STORAGE_KEYS.HISTORY, JSON.stringify(history));
    return true;
  } catch (e) {
    console.error('保存预测历史失败:', e);
    return false;
  }
}

function getHistory() {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.HISTORY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.error('读取历史记录失败:', e);
    return [];
  }
}

function deleteHistory(id) {
  try {
    const history = getHistory();
    const filtered = history.filter(item => item.id !== id);
    localStorage.setItem(STORAGE_KEYS.HISTORY, JSON.stringify(filtered));
    return true;
  } catch (e) {
    console.error('删除历史记录失败:', e);
    return false;
  }
}

function clearHistory() {
  try {
    localStorage.setItem(STORAGE_KEYS.HISTORY, JSON.stringify([]));
    return true;
  } catch (e) {
    console.error('清空历史记录失败:', e);
    return false;
  }
}

/**
 * 根据 ID 查找某条历史记录
 */
function getHistoryById(id) {
  const history = getHistory();
  return history.find(item => item.id === id) || null;
}

// ========== 运势缓存 ==========

function saveFortuneCache(date, data) {
  try {
    const cache = getAllFortuneCache();
    cache[date] = data;

    // 只保留最近7天的缓存
    const keys = Object.keys(cache).sort();
    while (keys.length > 7) {
      delete cache[keys.shift()];
    }

    localStorage.setItem(STORAGE_KEYS.FORTUNE_CACHE, JSON.stringify(cache));
    return true;
  } catch (e) {
    console.error('保存运势缓存失败:', e);
    return false;
  }
}

function getFortuneCache(date) {
  try {
    const cache = getAllFortuneCache();
    return cache[date] || null;
  } catch (e) {
    console.error('读取运势缓存失败:', e);
    return null;
  }
}

function getAllFortuneCache() {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.FORTUNE_CACHE);
    return raw ? JSON.parse(raw) : {};
  } catch (e) {
    console.error('读取运势缓存失败:', e);
    return {};
  }
}
