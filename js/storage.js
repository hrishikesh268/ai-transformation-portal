/* ============================================
   Storage — LocalStorage abstraction layer
   ============================================ */
window.Storage = {
  KEY: 'ai_portal_data',

  defaultState: {
    user: {
      name: 'Hrishikesh',
      startDate: new Date().toISOString(),
      currentStreak: 0,
      lastActiveDate: null
    },
    xp: {
      total: 0,
      history: []
    },
    level: 1,
    modules: {
      m01: { status: 'available',  sectionsRead: 0, completedAt: null },
      m02: { status: 'locked',     sectionsRead: 0, completedAt: null },
      m03: { status: 'locked',     sectionsRead: 0, completedAt: null },
      m04: { status: 'locked',     sectionsRead: 0, completedAt: null },
      m05: { status: 'locked',     sectionsRead: 0, completedAt: null },
      m06: { status: 'locked',     sectionsRead: 0, completedAt: null },
      m07: { status: 'locked',     sectionsRead: 0, completedAt: null },
      m08: { status: 'locked',     sectionsRead: 0, completedAt: null },
      m09: { status: 'locked',     sectionsRead: 0, completedAt: null },
      m10: { status: 'locked',     sectionsRead: 0, completedAt: null },
      m11: { status: 'locked',     sectionsRead: 0, completedAt: null },
      m12: { status: 'locked',     sectionsRead: 0, completedAt: null },
      m13: { status: 'locked',     sectionsRead: 0, completedAt: null },
      m14: { status: 'locked',     sectionsRead: 0, completedAt: null }
    },
    quizzes: {
      q01:       { attempts: 0, bestScore: 0, completedAt: null },
      q02:       { attempts: 0, bestScore: 0, completedAt: null },
      q03:       { attempts: 0, bestScore: 0, completedAt: null },
      q04:       { attempts: 0, bestScore: 0, completedAt: null },
      q05:       { attempts: 0, bestScore: 0, completedAt: null },
      q06:       { attempts: 0, bestScore: 0, completedAt: null },
      q07:       { attempts: 0, bestScore: 0, completedAt: null },
      q08:       { attempts: 0, bestScore: 0, completedAt: null },
      q09:       { attempts: 0, bestScore: 0, completedAt: null },
      q10:       { attempts: 0, bestScore: 0, completedAt: null },
      q11:       { attempts: 0, bestScore: 0, completedAt: null },
      q12:       { attempts: 0, bestScore: 0, completedAt: null },
      q13:       { attempts: 0, bestScore: 0, completedAt: null },
      q14:       { attempts: 0, bestScore: 0, completedAt: null },
      'boss-day1': { attempts: 0, bestScore: 0, completedAt: null },
      'boss-day2': { attempts: 0, bestScore: 0, completedAt: null },
      'boss-day3': { attempts: 0, bestScore: 0, completedAt: null },
      'boss-day4': { attempts: 0, bestScore: 0, completedAt: null },
      final:     { attempts: 0, bestScore: 0, completedAt: null }
    },
    badges: {
      first_step:             { unlocked: false, unlockedAt: null },
      process_wizard:         { unlocked: false, unlockedAt: null },
      control_freak:          { unlocked: false, unlockedAt: null },
      data_whisperer:         { unlocked: false, unlockedAt: null },
      ai_apprentice:          { unlocked: false, unlockedAt: null },
      refinery_ai_expert:     { unlocked: false, unlockedAt: null },
      security_guardian:      { unlocked: false, unlockedAt: null },
      transformation_architect:{ unlocked: false, unlockedAt: null },
      speed_learner:          { unlocked: false, unlockedAt: null },
      perfect_score:          { unlocked: false, unlockedAt: null },
      halfway_there:          { unlocked: false, unlockedAt: null },
      ai_leader:              { unlocked: false, unlockedAt: null }
    },
    settings: {
      timerEnabled: true,
      hintsEnabled: true,
      narrationRate: 1
    }
  },

  /** Get state from localStorage, merging with defaults for any missing keys */
  get() {
    try {
      const raw = localStorage.getItem(this.KEY);
      if (!raw) return Utils.clone(this.defaultState);
      const parsed = JSON.parse(raw);
      // Deep merge to ensure new keys from defaultState are present
      return this._deepMerge(Utils.clone(this.defaultState), parsed);
    } catch (e) {
      console.warn('Storage.get error:', e);
      return Utils.clone(this.defaultState);
    }
  },

  /** Save full state to localStorage */
  save(state) {
    try {
      localStorage.setItem(this.KEY, JSON.stringify(state));
    } catch (e) {
      console.warn('Storage.save error:', e);
    }
  },

  /** Update a value using dot-notation path, e.g. 'modules.m01.status' */
  update(path, value) {
    const state = this.get();
    const keys = path.split('.');
    let obj = state;
    for (let i = 0; i < keys.length - 1; i++) {
      if (obj[keys[i]] === undefined) obj[keys[i]] = {};
      obj = obj[keys[i]];
    }
    obj[keys[keys.length - 1]] = value;
    this.save(state);
    return state;
  },

  /** Reset all data to defaults */
  reset() {
    const fresh = Utils.clone(this.defaultState);
    fresh.user.startDate = new Date().toISOString();
    this.save(fresh);
    return fresh;
  },

  /** Get a module's state by id */
  getModule(id) {
    const state = this.get();
    return state.modules[id] || null;
  },

  /** Set a module's status */
  setModuleStatus(id, status) {
    const state = this.get();
    if (!state.modules[id]) state.modules[id] = { status: 'locked', sectionsRead: 0, completedAt: null };
    state.modules[id].status = status;
    if (status === 'completed' && !state.modules[id].completedAt) {
      state.modules[id].completedAt = new Date().toISOString();
    }
    this.save(state);
    return state;
  },

  /** Get a quiz's state by id */
  getQuiz(id) {
    const state = this.get();
    return state.quizzes[id] || { attempts: 0, bestScore: 0, completedAt: null };
  },

  /** Record a quiz attempt */
  recordQuizAttempt(quizId, score) {
    const state = this.get();
    if (!state.quizzes[quizId]) {
      state.quizzes[quizId] = { attempts: 0, bestScore: 0, completedAt: null };
    }
    state.quizzes[quizId].attempts += 1;
    if (score > state.quizzes[quizId].bestScore) {
      state.quizzes[quizId].bestScore = score;
    }
    if (!state.quizzes[quizId].completedAt && score >= 60) {
      state.quizzes[quizId].completedAt = new Date().toISOString();
    }
    this.save(state);
    return state;
  },

  /** Add XP with a source label */
  addXP(amount, source) {
    const state = this.get();
    state.xp.total += amount;
    state.xp.history.push({
      amount,
      source: source || 'Unknown',
      date: new Date().toISOString()
    });
    this.save(state);
    return state;
  },

  /** Unlock a badge */
  unlockBadge(badgeId) {
    const state = this.get();
    if (!state.badges[badgeId]) {
      state.badges[badgeId] = { unlocked: false, unlockedAt: null };
    }
    if (!state.badges[badgeId].unlocked) {
      state.badges[badgeId].unlocked = true;
      state.badges[badgeId].unlockedAt = new Date().toISOString();
      this.save(state);
      return true; // newly unlocked
    }
    return false; // was already unlocked
  },

  /** Update streak — call on each app load */
  updateStreak() {
    const state = this.get();
    const today = Utils.todayString();
    const last = state.user.lastActiveDate;

    if (last === today) {
      // Already updated today — nothing to do
      return state;
    }

    if (last) {
      const lastDate = new Date(last);
      const todayDate = new Date(today);
      const diffDays = Math.round((todayDate - lastDate) / (1000 * 60 * 60 * 24));
      if (diffDays === 1) {
        // Consecutive day — extend streak
        state.user.currentStreak += 1;
      } else if (diffDays > 1) {
        // Missed days — reset streak
        state.user.currentStreak = 1;
      }
    } else {
      // First time — start streak at 1
      state.user.currentStreak = 1;
    }

    state.user.lastActiveDate = today;
    this.save(state);
    return state;
  },

  /** Unlock the next module in sequence */
  unlockNextModule(completedModuleId) {
    const moduleOrder = ['m01','m02','m03','m04','m05','m06','m07','m08','m09','m10','m11','m12','m13','m14'];
    const idx = moduleOrder.indexOf(completedModuleId);
    if (idx >= 0 && idx < moduleOrder.length - 1) {
      const nextId = moduleOrder[idx + 1];
      const state = this.get();
      if (state.modules[nextId] && state.modules[nextId].status === 'locked') {
        state.modules[nextId].status = 'available';
        this.save(state);
      }
    }
  },

  /** Check if all modules in a day are complete (to unlock boss quiz) */
  isDayComplete(dayModules) {
    const state = this.get();
    return dayModules.every(mId => state.modules[mId] && state.modules[mId].status === 'completed');
  },

  // ---- Private ----
  _deepMerge(target, source) {
    const result = Object.assign({}, target);
    for (const key of Object.keys(source)) {
      if (source[key] !== null && typeof source[key] === 'object' && !Array.isArray(source[key])) {
        result[key] = this._deepMerge(target[key] || {}, source[key]);
      } else {
        result[key] = source[key];
      }
    }
    return result;
  }
};
