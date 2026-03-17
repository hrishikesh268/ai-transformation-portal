/* ============================================
   App Bootstrap — loaded last
   ============================================ */
(function() {
  'use strict';

  // 1. Init State
  State.init();

  // 2. Init Narration
  Narration.init();

  // 3. Update streak
  Storage.updateStreak();
  State.reload(); // Reload after streak update

  // 4. Register routes
  Router.register('dashboard', function() {
    const app = document.getElementById('app');
    if (app) {
      app.innerHTML = DashboardView.render();
      DashboardView.afterRender();
    }
  });

  Router.register('course', function() {
    const app = document.getElementById('app');
    if (app) {
      app.innerHTML = CourseMapView.render();
      CourseMapView.afterRender();
    }
  });

  Router.register('module', function(id) {
    const app = document.getElementById('app');
    if (app) {
      app.innerHTML = ModuleReaderView.render(id);
      ModuleReaderView.afterRender(id);
    }
  });

  Router.register('quiz', function(id) {
    const app = document.getElementById('app');
    if (app) {
      app.innerHTML = QuizView.render(id);
      QuizView.afterRender(id);
    }
  });

  Router.register('achievements', function() {
    const app = document.getElementById('app');
    if (app) {
      app.innerHTML = AchievementsView.render();
    }
  });

  // 5. Init router (triggers initial route)
  Router.init();

  // 6. Update sidebar XP bar
  Gamification.updateSidebarXP();

  // 7. Wire up sidebar nav links
  document.querySelectorAll('[data-route]').forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      var route = link.dataset.route || '#dashboard';
      Router.navigate(route);
    });
  });

  // 8. Listen for State changes to keep sidebar in sync
  State.on('change', function() {
    Gamification.updateSidebarXP();
  });

  // 9. Handle page visibility change (stop narration when hidden)
  document.addEventListener('visibilitychange', function() {
    if (document.hidden && Narration.isPlaying) {
      Narration.pause();
    }
  });

  // 10. Stop narration on route change
  window.addEventListener('hashchange', function() {
    Narration.stop();
  });

  console.log('AI Leader Academy initialized successfully.');
})();
