/* ============================================
   DashboardView
   ============================================ */
window.DashboardView = {

  render() {
    const state = Storage.get();
    const xp = (state.xp && state.xp.total) || 0;
    const level = Gamification.getLevelForXP(xp);
    const nextXP = Gamification.getXPForNextLevel(xp);
    const progress = Gamification.getLevelProgress(xp);
    const streak = (state.user && state.user.currentStreak) || 0;
    const userName = (state.user && state.user.name) || 'Learner';
    const greeting = Utils.getGreeting();

    // Compute stats
    const modules = state.modules || {};
    const quizzes = state.quizzes || {};
    const completedModules = Object.values(modules).filter(m => m.status === 'completed').length;
    const totalModules = Object.keys(COURSE.modules).length;
    const overallPct = Math.round((completedModules / totalModules) * 100);
    const quizAttempts = Object.values(quizzes).filter(q => q.attempts > 0);
    const avgScore = quizAttempts.length
      ? Math.round(quizAttempts.reduce((s, q) => s + q.bestScore, 0) / quizAttempts.length)
      : 0;

    // Find next module to continue
    const nextModule = this._findNextModule(state);

    // Recent badges
    const badges = state.badges || {};
    const recentBadges = Object.entries(badges)
      .filter(([, b]) => b.unlocked && b.unlockedAt)
      .sort((a, b) => new Date(b[1].unlockedAt) - new Date(a[1].unlockedAt))
      .slice(0, 3);

    // Today's modules (day based on progress)
    const todayModules = this._getTodayModules(state);

    return `
    <div class="space-y-6 pb-8 animate-fade-in">

      <!-- Welcome Header -->
      <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <p class="text-slate-400 text-sm">${greeting},</p>
          <h1 class="text-2xl md:text-3xl font-bold text-white">${Utils.sanitizeHTML(userName)}
            <span class="level-badge ml-2">${level.icon} ${level.name}</span>
          </h1>
          <p class="text-slate-400 text-sm mt-1">Keep going — you're ${100 - overallPct}% away from completion.</p>
        </div>
        <div class="flex items-center gap-3">
          ${streak > 0 ? `
            <div class="flex items-center gap-2 bg-slate-800 border border-slate-700 rounded-xl px-4 py-3">
              <span class="streak-flame text-2xl">🔥</span>
              <div>
                <div class="text-xl font-bold text-amber-400">${streak}</div>
                <div class="text-xs text-slate-400">Day Streak</div>
              </div>
            </div>` : ''}
          <div class="flex items-center gap-2 bg-slate-800 border border-slate-700 rounded-xl px-4 py-3">
            <span class="text-2xl">⚡</span>
            <div>
              <div class="text-xl font-bold text-amber-400">${xp}</div>
              <div class="text-xs text-slate-400">Total XP</div>
            </div>
          </div>
        </div>
      </div>

      <!-- XP Progress Bar -->
      <div class="bg-slate-800 border border-slate-700 rounded-2xl p-5">
        <div class="flex justify-between items-center mb-3">
          <div>
            <span class="text-sm font-semibold text-white">${level.icon} ${level.name}</span>
            <span class="text-slate-500 text-xs mx-2">→</span>
            <span class="text-sm text-slate-400">${nextXP > 0 ? Gamification.LEVELS.find(l=>l.minXP===nextXP)?.name || 'Max' : '✨ Max Level'}</span>
          </div>
          <span class="text-sm font-bold text-amber-400">${progress}%</span>
        </div>
        <div class="h-3 bg-slate-700 rounded-full overflow-hidden">
          <div class="progress-bar-animated h-full rounded-full"
            style="width:${progress}%; background: linear-gradient(90deg,#F59E0B,#FCD34D);">
          </div>
        </div>
        <div class="flex justify-between text-xs text-slate-500 mt-1.5">
          <span>${xp} XP</span>
          <span>${nextXP > 0 ? nextXP + ' XP to next level' : 'Maximum level reached!'}</span>
        </div>
      </div>

      <!-- Stats + Chart Row -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">

        <!-- Progress Ring -->
        <div class="bg-slate-800 border border-slate-700 rounded-2xl p-5 flex flex-col items-center justify-center">
          <canvas id="progress-chart" width="160" height="160"></canvas>
          <p class="text-slate-400 text-xs mt-3 text-center">Overall Progress</p>
          <p class="text-white font-bold text-lg">${completedModules}/${totalModules} Modules</p>
        </div>

        <!-- Quick Stats -->
        <div class="md:col-span-2 grid grid-cols-2 gap-4">
          <div class="bg-slate-800 border border-slate-700 rounded-2xl p-5 card-hover">
            <div class="text-3xl mb-2">📚</div>
            <div class="text-2xl font-bold text-white">${completedModules}</div>
            <div class="text-slate-400 text-sm">Modules Complete</div>
          </div>
          <div class="bg-slate-800 border border-slate-700 rounded-2xl p-5 card-hover">
            <div class="text-3xl mb-2">⚡</div>
            <div class="text-2xl font-bold text-amber-400">${xp}</div>
            <div class="text-slate-400 text-sm">Total XP Earned</div>
          </div>
          <div class="bg-slate-800 border border-slate-700 rounded-2xl p-5 card-hover">
            <div class="text-3xl mb-2">📝</div>
            <div class="text-2xl font-bold text-emerald-400">${avgScore}%</div>
            <div class="text-slate-400 text-sm">Avg Quiz Score</div>
          </div>
          <div class="bg-slate-800 border border-slate-700 rounded-2xl p-5 card-hover">
            <div class="text-3xl mb-2">🏆</div>
            <div class="text-2xl font-bold text-purple-400">${Object.values(badges).filter(b=>b.unlocked).length}</div>
            <div class="text-slate-400 text-sm">Badges Unlocked</div>
          </div>
        </div>
      </div>

      <!-- Continue Learning + Today's Goal -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">

        <!-- Continue Learning -->
        <div class="bg-slate-800 border border-slate-700 rounded-2xl p-5">
          <h2 class="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">Continue Learning</h2>
          ${nextModule ? `
            <div class="flex items-start gap-4">
              <div class="text-4xl">${nextModule.icon}</div>
              <div class="flex-1">
                <div class="font-bold text-white">${nextModule.title}</div>
                <div class="text-slate-400 text-sm mb-3">${nextModule.subtitle}</div>
                <div class="flex items-center gap-3 text-xs text-slate-500 mb-4">
                  <span>⏱ ${nextModule.estimatedMinutes} min</span>
                  <span>⚡ ${nextModule.xpReward} XP</span>
                </div>
                <button onclick="Router.navigate('#module/${nextModule.id}')"
                  class="w-full py-2.5 bg-amber-500 hover:bg-amber-400 text-black font-bold rounded-xl transition-all text-sm">
                  ${modules[nextModule.id]?.status === 'in_progress' ? '▶ Resume Module' : '▶ Start Module'}
                </button>
              </div>
            </div>
          ` : `
            <div class="text-center py-8">
              <div class="text-5xl mb-3">🎉</div>
              <p class="text-white font-bold">All modules complete!</p>
              <p class="text-slate-400 text-sm mt-1">Ready for the final assessment</p>
              <button onclick="Router.navigate('#quiz/final')"
                class="mt-4 px-6 py-2.5 bg-amber-500 hover:bg-amber-400 text-black font-bold rounded-xl transition-all text-sm">
                Take Final Assessment
              </button>
            </div>
          `}
        </div>

        <!-- Today's Goal -->
        <div class="bg-slate-800 border border-slate-700 rounded-2xl p-5">
          <h2 class="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">Today's Goal</h2>
          ${todayModules.length > 0 ? `
            <div class="space-y-2">
              ${todayModules.map(m => {
                const modState = modules[m.id] || {};
                const statusIcon = modState.status === 'completed' ? '✅' :
                                   modState.status === 'in_progress' ? '⏳' :
                                   modState.status === 'available' ? '▶' : '🔒';
                return `
                <div class="flex items-center gap-3 p-3 rounded-xl border border-slate-700 hover:border-slate-600 transition-all
                  ${modState.status === 'completed' ? 'bg-emerald-900/20' : 'bg-slate-900/40'}"
                  ${modState.status !== 'locked' ? `onclick="Router.navigate('#module/${m.id}')" style="cursor:pointer"` : ''}>
                  <span class="text-lg">${statusIcon}</span>
                  <div class="flex-1 min-w-0">
                    <div class="text-sm font-medium text-white truncate">${m.icon} ${m.title}</div>
                    <div class="text-xs text-slate-500">${m.estimatedMinutes} min · ${m.xpReward} XP</div>
                  </div>
                  ${modState.status === 'completed' ? '<span class="text-xs text-emerald-400 font-semibold">Done</span>' : ''}
                </div>`;
              }).join('')}
            </div>
          ` : `<p class="text-slate-500 text-sm">No modules scheduled yet.</p>`}
        </div>
      </div>

      <!-- Recent Achievements -->
      ${recentBadges.length > 0 ? `
      <div class="bg-slate-800 border border-slate-700 rounded-2xl p-5">
        <div class="flex items-center justify-between mb-4">
          <h2 class="text-sm font-semibold text-slate-400 uppercase tracking-wider">Recent Achievements</h2>
          <button onclick="Router.navigate('#achievements')" class="text-xs text-amber-400 hover:text-amber-300">View All →</button>
        </div>
        <div class="flex gap-4 flex-wrap">
          ${recentBadges.map(([badgeId, badge]) => {
            const def = Gamification.BADGES[badgeId] || {};
            return `
            <div class="flex items-center gap-3 bg-slate-900/60 border border-amber-500/20 rounded-xl px-4 py-3">
              <span class="text-2xl">${def.icon || '🏆'}</span>
              <div>
                <div class="text-sm font-semibold text-white">${def.name || badgeId}</div>
                <div class="text-xs text-slate-400">${Utils.formatDate(badge.unlockedAt)}</div>
              </div>
            </div>`;
          }).join('')}
        </div>
      </div>
      ` : ''}

    </div>
    `;
  },

  afterRender() {
    const state = Storage.get();
    const modules = state.modules || {};
    const completedModules = Object.values(modules).filter(m => m.status === 'completed').length;
    const totalModules = Object.keys(COURSE.modules).length;
    const remaining = totalModules - completedModules;

    const canvas = document.getElementById('progress-chart');
    if (canvas && typeof Chart !== 'undefined') {
      new Chart(canvas, {
        type: 'doughnut',
        data: {
          labels: ['Completed', 'Remaining'],
          datasets: [{
            data: [completedModules, remaining],
            backgroundColor: ['#10B981', '#334155'],
            borderWidth: 0,
            hoverOffset: 4
          }]
        },
        options: {
          cutout: '72%',
          plugins: {
            legend: { display: false },
            tooltip: { enabled: true }
          },
          animation: { animateRotate: true, duration: 800 }
        }
      });
    }
  },

  _findNextModule(state) {
    const moduleOrder = COURSE.getModuleOrder();
    for (const id of moduleOrder) {
      const m = state.modules[id];
      if (m && (m.status === 'available' || m.status === 'in_progress')) {
        return COURSE.modules[id];
      }
    }
    return null;
  },

  _getTodayModules(state) {
    // Determine current active day
    const dayNums = [1, 2, 3, 4];
    for (const dayNum of dayNums) {
      const dayMods = COURSE.getModulesForDay(dayNum);
      const allDone = dayMods.every(id => state.modules[id] && state.modules[id].status === 'completed');
      if (!allDone) {
        return dayMods.map(id => COURSE.modules[id]).slice(0, 3);
      }
    }
    return [];
  }
};
