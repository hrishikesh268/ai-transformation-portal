/* ============================================
   Router — Hash-based SPA router
   ============================================ */
window.Router = {
  routes: {},
  currentRoute: null,

  /** Register a route handler.
   *  name: 'dashboard' | 'course' | 'module' | 'quiz' | 'achievements'
   *  handler: function(param) {}
   */
  register(name, handler) {
    this.routes[name] = handler;
  },

  /** Navigate to a hash */
  navigate(hash) {
    window.location.hash = hash;
  },

  /** Initialize: listen to hashchange and dispatch current */
  init() {
    window.addEventListener('hashchange', () => this.dispatch());
    this.dispatch();
  },

  /** Parse and dispatch the current hash */
  dispatch() {
    const hash = window.location.hash || '#dashboard';
    const withoutHash = hash.startsWith('#') ? hash.slice(1) : hash;
    const [route, param] = withoutHash.split('/');

    // Highlight active nav
    this._updateActiveNav(route);

    // Default to dashboard
    const routeName = route || 'dashboard';
    const handler = this.routes[routeName];

    if (handler) {
      try {
        this.currentRoute = routeName;
        handler(param || null);
      } catch (e) {
        console.error('Router dispatch error:', e);
        this._renderError(routeName, e);
      }
    } else {
      // Fallback: dashboard
      const dashboard = this.routes['dashboard'];
      if (dashboard) dashboard(null);
    }
  },

  /** Update active styling on nav links */
  _updateActiveNav(route) {
    document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(link => {
      link.classList.remove('active');
      const linkRoute = (link.getAttribute('data-route') || '').replace('#', '');
      if (linkRoute === route || (route === '' && linkRoute === 'dashboard')) {
        link.classList.add('active');
      }
    });
  },

  /** Render an error message in the app container */
  _renderError(route, error) {
    const app = document.getElementById('app');
    if (app) {
      app.innerHTML = `
        <div class="flex flex-col items-center justify-center h-64 text-center">
          <div class="text-4xl mb-4">⚠️</div>
          <h2 class="text-xl font-bold text-red-400 mb-2">Route Error</h2>
          <p class="text-slate-400 text-sm">Could not load view for: <code class="text-amber-400">#${route}</code></p>
          <p class="text-slate-500 text-xs mt-2">${Utils.sanitizeHTML(error.message)}</p>
          <button onclick="Router.navigate('#dashboard')"
            class="mt-4 px-4 py-2 bg-amber-500 text-black rounded-lg font-semibold text-sm hover:bg-amber-400 transition">
            Go to Dashboard
          </button>
        </div>
      `;
    }
  }
};
