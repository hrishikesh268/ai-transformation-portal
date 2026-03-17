/* ============================================
   Utils — General purpose utility functions
   ============================================ */
window.Utils = {

  /** Format seconds as MM:SS */
  formatTime(seconds) {
    if (isNaN(seconds) || seconds < 0) return '00:00';
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  },

  /** Format ISO date string as "Mar 17" */
  formatDate(dateStr) {
    if (!dateStr) return '';
    try {
      const d = new Date(dateStr);
      return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    } catch (e) {
      return '';
    }
  },

  /** Get integer days since a date string */
  getDaysSince(dateStr) {
    if (!dateStr) return 0;
    try {
      const then = new Date(dateStr);
      const now = new Date();
      const diff = now.getTime() - then.getTime();
      return Math.floor(diff / (1000 * 60 * 60 * 24));
    } catch (e) {
      return 0;
    }
  },

  /** Debounce a function */
  debounce(fn, delay) {
    let timer;
    return function(...args) {
      clearTimeout(timer);
      timer = setTimeout(() => fn.apply(this, args), delay);
    };
  },

  /** Create a DOM element with optional class and innerHTML */
  createElement(tag, className, innerHTML) {
    const el = document.createElement(tag);
    if (className) el.className = className;
    if (innerHTML !== undefined) el.innerHTML = innerHTML;
    return el;
  },

  /** Check if viewport is mobile-sized */
  isMobile() {
    return window.innerWidth < 768;
  },

  /** Basic XSS protection — escape HTML entities */
  sanitizeHTML(str) {
    if (typeof str !== 'string') return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  },

  /** Get time-of-day greeting */
  getGreeting() {
    const h = new Date().getHours();
    if (h < 12) return 'Good morning';
    if (h < 18) return 'Good afternoon';
    return 'Good evening';
  },

  /** Clamp a number between min and max */
  clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
  },

  /** Get today's date as YYYY-MM-DD string */
  todayString() {
    return new Date().toISOString().split('T')[0];
  },

  /** Pad number to fixed length */
  pad(n, len = 2) {
    return String(n).padStart(len, '0');
  },

  /** Deep clone an object (JSON safe) */
  clone(obj) {
    return JSON.parse(JSON.stringify(obj));
  }
};
