/* ============================================
   State — Observer pattern state manager
   ============================================ */
window.State = {
  data: null,
  listeners: {},

  /** Initialize state from storage */
  init() {
    this.data = Storage.get();
  },

  /** Get value by dot-notation path, e.g. 'xp.total' */
  get(path) {
    if (!path) return this.data;
    const keys = path.split('.');
    let obj = this.data;
    for (const key of keys) {
      if (obj === null || obj === undefined) return undefined;
      obj = obj[key];
    }
    return obj;
  },

  /** Set value by dot-notation path, save, and notify listeners */
  set(path, value) {
    const keys = path.split('.');
    let obj = this.data;
    for (let i = 0; i < keys.length - 1; i++) {
      if (obj[keys[i]] === undefined || typeof obj[keys[i]] !== 'object') {
        obj[keys[i]] = {};
      }
      obj = obj[keys[i]];
    }
    obj[keys[keys.length - 1]] = value;
    Storage.save(this.data);
    this.emit('change', { path, value });
    // Emit specific event for path
    this.emit(path, value);
  },

  /** Subscribe to an event */
  on(event, callback) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }
    this.listeners[event].push(callback);
  },

  /** Unsubscribe from an event */
  off(event, callback) {
    if (!this.listeners[event]) return;
    this.listeners[event] = this.listeners[event].filter(cb => cb !== callback);
  },

  /** Emit an event to all listeners */
  emit(event, data) {
    const handlers = this.listeners[event];
    if (handlers) {
      handlers.forEach(cb => {
        try { cb(data); } catch (e) { console.warn('State listener error:', e); }
      });
    }
  },

  /** Reload data from storage (useful after external modifications) */
  reload() {
    this.data = Storage.get();
    this.emit('reload', this.data);
  },

  /** Shorthand: get current XP total */
  getXP() {
    return (this.data && this.data.xp && this.data.xp.total) || 0;
  },

  /** Shorthand: get current level number */
  getLevel() {
    return (this.data && this.data.level) || 1;
  },

  /** Shorthand: get module state */
  getModule(id) {
    return (this.data && this.data.modules && this.data.modules[id]) || null;
  },

  /** Shorthand: get streak */
  getStreak() {
    return (this.data && this.data.user && this.data.user.currentStreak) || 0;
  }
};
