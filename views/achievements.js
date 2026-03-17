/* ============================================
   AchievementsView
   ============================================ */
window.AchievementsView = {

  render() {
    const state = Storage.get();
    const xp = (state.xp && state.xp.total) || 0;
    const level = Gamification.getLevelForXP(xp);
    const nextXP = Gamification.getXPForNextLevel(xp);
    const progress = Gamification.getLevelProgress(xp);
    const badges = state.badges || {};
    const quizzes = state.quizzes || {};
    const xpHistory = (state.xp && state.xp.history) || [];

    // Levels display
    const levelsHTML = Gamification.LEVELS.map(l => {
      const isCurrent = level.level === l.level;
      const isReached = xp >= l.minXP;
      return `
      <div class="flex items-center gap-3 p-3 rounded-xl border transition-all
        ${isCurrent ? 'border-amber-500/50 bg-amber-900/10' : isReached ? 'border-emerald-700/40 bg-emerald-900/10' : 'border-slate-700 bg-slate-800 opacity-50'}">
        <span class="text-2xl">${l.icon}</span>
        <div class="flex-1">
          <div class="text-sm font-semibold text-white">${l.name}</div>
          <div class="text-xs text-slate-400">Level ${l.level} · ${l.minXP} XP</div>
        </div>
        ${isCurrent ? '<span class="text-xs text-amber-400 font-bold">← Current</span>' :
          isReached  ? '<span class="text-xs text-emerald-400">✅</span>' : '🔒'}
      </div>
      `;
    }).join('');

    // Badges grid
    const badgesHTML = Object.entries(Gamification.BADGES).map(([badgeId, def]) => {
      const userBadge = badges[badgeId] || {};
      const unlocked = userBadge.unlocked;
      return `
      <div class="badge-card ${unlocked ? 'unlocked' : 'locked'}">
        <div class="text-4xl mb-2">${def.icon}</div>
        <div class="text-sm font-bold text-white mb-1">${def.name}</div>
        <div class="text-xs text-slate-400 leading-tight mb-2">
          ${unlocked ? def.description : '??? — Complete conditions to unlock'}
        </div>
        ${unlocked && userBadge.unlockedAt ? `
          <div class="text-xs text-amber-400 mt-auto">🗓 ${Utils.formatDate(userBadge.unlockedAt)}</div>
        ` : ''}
        ${!unlocked ? '<div class="text-xs text-slate-600 mt-auto">🔒 Locked</div>' : ''}
      </div>
      `;
    }).join('');

    // Quiz scores table
    const quizTableRows = Object.entries(quizzes)
      .filter(([, q]) => q.attempts > 0)
      .map(([qId, q]) => {
        // Get quiz title from course structure
        let title = qId;
        if (qId.match(/^q\d+$/)) {
          const num = parseInt(qId.slice(1), 10);
          const modId = `m${String(num).padStart(2,'0')}`;
          const mod = COURSE.modules[modId];
          if (mod) title = mod.title;
        } else if (qId.startsWith('boss-')) {
          title = `Day ${qId.replace('boss-day','')} Boss Quiz`;
        } else if (qId === 'final') {
          title = 'Final Assessment';
        }
        return `
        <tr class="border-b border-slate-700 hover:bg-slate-700/20 transition-colors">
          <td class="py-3 px-4 text-sm text-white">${title}</td>
          <td class="py-3 px-4 text-sm font-bold ${q.bestScore >= 80 ? 'text-emerald-400' : q.bestScore >= 60 ? 'text-amber-400' : 'text-red-400'}">
            ${q.bestScore}%
          </td>
          <td class="py-3 px-4 text-sm text-slate-400">${q.attempts}</td>
          <td class="py-3 px-4 text-sm text-slate-400">${q.completedAt ? Utils.formatDate(q.completedAt) : '—'}</td>
        </tr>
        `;
      }).join('');

    // XP History
    const recentXP = xpHistory.slice(-20).reverse();
    const xpLogHTML = recentXP.length > 0
      ? recentXP.map(item => `
        <div class="xp-log-item">
          <div class="flex items-center gap-2">
            <span class="text-amber-400 font-bold text-sm">+${item.amount} XP</span>
            <span class="text-slate-300 text-xs">${item.source || 'Activity'}</span>
          </div>
          <span class="text-slate-500 text-xs">${Utils.formatDate(item.date)}</span>
        </div>
      `).join('')
      : '<p class="text-slate-500 text-sm">No XP earned yet. Start learning!</p>';

    return `
    <div class="space-y-8 pb-10">

      <div>
        <h1 class="text-2xl font-bold text-white">Achievements</h1>
        <p class="text-slate-400 text-sm mt-1">Track your progress, badges, and XP history</p>
      </div>

      <!-- Level Section -->
      <div class="bg-slate-800 border border-slate-700 rounded-2xl p-6">
        <h2 class="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">Level Progress</h2>

        <!-- Current Level -->
        <div class="flex items-center gap-4 mb-5">
          <div class="text-5xl">${level.icon}</div>
          <div class="flex-1">
            <div class="text-xl font-bold text-white">${level.name}</div>
            <div class="text-slate-400 text-sm">Level ${level.level} · ${xp} XP total</div>
          </div>
        </div>

        <!-- XP Progress Bar -->
        <div class="mb-5">
          <div class="flex justify-between text-xs text-slate-400 mb-1.5">
            <span>${level.minXP} XP</span>
            <span>${nextXP > 0 ? nextXP + ' XP' : 'Max Level'}</span>
          </div>
          <div class="h-3 bg-slate-700 rounded-full overflow-hidden">
            <div class="progress-bar-animated h-full rounded-full"
              style="width:${progress}%; background: linear-gradient(90deg,#F59E0B,#FCD34D);">
            </div>
          </div>
          <p class="text-xs text-slate-500 mt-1 text-right">${progress}% to next level</p>
        </div>

        <!-- All levels -->
        <div class="grid grid-cols-1 sm:grid-cols-5 gap-2">
          ${levelsHTML}
        </div>
      </div>

      <!-- Badges Section -->
      <div class="bg-slate-800 border border-slate-700 rounded-2xl p-6">
        <div class="flex items-center justify-between mb-4">
          <h2 class="text-sm font-semibold text-slate-400 uppercase tracking-wider">Badges</h2>
          <span class="text-xs text-amber-400">${Object.values(badges).filter(b=>b.unlocked).length} / ${Object.keys(Gamification.BADGES).length} unlocked</span>
        </div>
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          ${badgesHTML}
        </div>
      </div>

      <!-- Quiz Scores -->
      ${quizTableRows ? `
      <div class="bg-slate-800 border border-slate-700 rounded-2xl p-6">
        <h2 class="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">Quiz Scores</h2>
        <div class="overflow-x-auto">
          <table class="w-full text-left">
            <thead>
              <tr class="border-b border-slate-700 text-xs text-slate-500 uppercase">
                <th class="py-2 px-4">Quiz</th>
                <th class="py-2 px-4">Best Score</th>
                <th class="py-2 px-4">Attempts</th>
                <th class="py-2 px-4">Completed</th>
              </tr>
            </thead>
            <tbody>${quizTableRows}</tbody>
          </table>
        </div>
      </div>
      ` : ''}

      <!-- XP History -->
      <div class="bg-slate-800 border border-slate-700 rounded-2xl p-6">
        <h2 class="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">XP History</h2>
        <div class="max-h-64 overflow-y-auto space-y-1">
          ${xpLogHTML}
        </div>
        ${xpHistory.length > 20 ? `<p class="text-xs text-slate-500 mt-2 text-center">Showing last 20 entries</p>` : ''}
      </div>

    </div>
    `;
  }
};
