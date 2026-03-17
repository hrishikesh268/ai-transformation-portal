/* ============================================
   CourseMapView
   ============================================ */
window.CourseMapView = {

  render() {
    const state = Storage.get();
    const modules = state.modules || {};

    const daysHTML = COURSE.days.map(day => {
      const isDayComplete = Storage.isDayComplete(day.modules);
      const bossUnlocked = isDayComplete;

      return `
      <div class="day-section mb-8 day-${day.id}">
        <!-- Day Header -->
        <div class="flex items-center gap-4 mb-5 p-4 rounded-2xl"
          style="background: linear-gradient(135deg, ${day.color}22, ${day.color}11); border: 1px solid ${day.color}44;">
          <div class="w-12 h-12 rounded-xl flex items-center justify-center text-2xl font-black"
            style="background: ${day.color}; color: ${day.number <= 2 ? '#000' : '#fff'};">
            ${day.number}
          </div>
          <div class="flex-1">
            <h2 class="text-lg font-bold text-white">${day.title}</h2>
            <p class="text-sm" style="color:${day.color}cc;">${day.theme}</p>
          </div>
          <div class="text-right">
            <div class="text-xs text-slate-400">${day.modules.length} modules</div>
            ${isDayComplete ? '<div class="text-xs text-emerald-400 font-semibold mt-1">✅ Complete</div>' : ''}
          </div>
        </div>

        <!-- Module Cards -->
        <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 mb-4">
          ${day.modules.map((modId, idx) => this._renderModuleCard(modId, modules, day, idx)).join('')}
        </div>

        <!-- Boss Quiz Card -->
        <div class="flex justify-end">
          ${this._renderBossQuizCard(day, bossUnlocked, state)}
        </div>
      </div>
      `;
    }).join('');

    // Final assessment
    const allDone = COURSE.days.every(d => Storage.isDayComplete(d.modules));
    const finalQuiz = state.quizzes['final'] || {};

    return `
    <div class="pb-8">
      <div class="mb-6">
        <h1 class="text-2xl font-bold text-white">Course Map</h1>
        <p class="text-slate-400 text-sm mt-1">Your complete 4-day AI transformation journey</p>
      </div>

      <!-- Legend -->
      <div class="flex flex-wrap gap-3 mb-6 text-xs">
        <div class="flex items-center gap-2"><div class="w-3 h-3 rounded bg-slate-600"></div><span class="text-slate-400">Locked</span></div>
        <div class="flex items-center gap-2"><div class="w-3 h-3 rounded bg-amber-500"></div><span class="text-slate-400">Available</span></div>
        <div class="flex items-center gap-2"><div class="w-3 h-3 rounded bg-blue-500"></div><span class="text-slate-400">In Progress</span></div>
        <div class="flex items-center gap-2"><div class="w-3 h-3 rounded bg-emerald-500"></div><span class="text-slate-400">Complete</span></div>
      </div>

      ${daysHTML}

      <!-- Final Assessment -->
      <div class="mt-6 p-5 rounded-2xl border ${allDone ? 'border-amber-500/60 bg-amber-900/10' : 'border-slate-700 bg-slate-800 opacity-60'}">
        <div class="flex items-center gap-4">
          <div class="text-4xl">${allDone ? '🏆' : '🔒'}</div>
          <div class="flex-1">
            <h3 class="font-bold text-white text-lg">Final Assessment</h3>
            <p class="text-slate-400 text-sm">Complete all 4 days to unlock · 50 questions · 80% to pass</p>
            ${finalQuiz.completedAt ? `<p class="text-emerald-400 text-sm mt-1">Best score: ${finalQuiz.bestScore}% · Completed ${Utils.formatDate(finalQuiz.completedAt)}</p>` : ''}
          </div>
          ${allDone ? `
          <button onclick="Router.navigate('#quiz/final')"
            class="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-black font-bold rounded-xl transition-all text-sm shrink-0">
            ${finalQuiz.attempts > 0 ? 'Retake' : 'Begin →'}
          </button>` : ''}
        </div>
      </div>
    </div>
    `;
  },

  _renderModuleCard(modId, modules, day, idx) {
    const mod = COURSE.modules[modId];
    if (!mod) return '';
    const modState = modules[modId] || { status: 'locked', sectionsRead: 0 };
    const status = modState.status || 'locked';

    const statusConfig = {
      locked:      { color: '#475569', label: '🔒 Locked',       border: 'border-slate-700', bg: 'bg-slate-800' },
      available:   { color: day.color, label: '▶ Start',         border: `border-slate-600`, bg: 'bg-slate-800' },
      in_progress: { color: '#3B82F6', label: '⏳ In Progress',  border: 'border-blue-600',  bg: 'bg-slate-800' },
      completed:   { color: '#10B981', label: '✅ Complete',      border: 'border-emerald-700', bg: 'bg-emerald-900/10' }
    };

    const sc = statusConfig[status] || statusConfig['locked'];
    const clickable = status !== 'locked';

    return `
    <div class="module-card ${sc.bg} border ${sc.border} rounded-2xl p-4 transition-all
      ${clickable ? 'card-hover cursor-pointer' : 'cursor-not-allowed'}
      status-${status}"
      ${clickable ? `onclick="Router.navigate('#module/${modId}')"` : ''}
      data-module="${modId}">

      <!-- Icon + Status -->
      <div class="flex items-start justify-between mb-3">
        <span class="text-3xl">${mod.icon}</span>
        <span class="text-xs px-2 py-1 rounded-full font-semibold"
          style="background: ${sc.color}22; color: ${sc.color};">
          ${status === 'locked' ? '🔒' : status === 'completed' ? '✅' : status === 'in_progress' ? '⏳' : '▶'}
        </span>
      </div>

      <!-- Title -->
      <h3 class="font-bold text-white text-sm leading-tight mb-1">${mod.title}</h3>
      <p class="text-slate-400 text-xs mb-3">${mod.subtitle}</p>

      <!-- Meta -->
      <div class="flex items-center justify-between text-xs text-slate-500">
        <span>⏱ ${mod.estimatedMinutes}m</span>
        <span style="color:${day.color}">⚡ ${mod.xpReward} XP</span>
      </div>

      <!-- Progress bar for in_progress -->
      ${status === 'in_progress' ? `
      <div class="mt-2 h-1 bg-slate-700 rounded-full overflow-hidden">
        <div class="h-full rounded-full bg-blue-500"
          style="width: ${Math.min(100, (modState.sectionsRead || 0) * 20)}%">
        </div>
      </div>` : ''}
    </div>
    `;
  },

  _renderBossQuizCard(day, unlocked, state) {
    const quizState = state.quizzes[day.bossQuizId] || {};
    const completed = quizState.completedAt != null;

    return `
    <div class="flex items-center gap-3 p-4 rounded-2xl border transition-all
      ${unlocked ? 'border-amber-500/50 bg-amber-900/10 cursor-pointer card-hover' : 'border-slate-700 bg-slate-800 opacity-50 cursor-not-allowed'}
      ${completed ? 'border-emerald-600/50 bg-emerald-900/10' : ''}"
      ${unlocked ? `onclick="Router.navigate('#quiz/${day.bossQuizId}')"` : ''}
      style="min-width:200px; max-width:280px;">
      <span class="text-2xl">${completed ? '🏆' : unlocked ? '⚔️' : '🔒'}</span>
      <div>
        <div class="text-sm font-bold text-white">Day ${day.number} Boss Quiz</div>
        <div class="text-xs ${unlocked ? 'text-amber-400' : 'text-slate-500'}">
          ${completed ? `✅ Best: ${quizState.bestScore}%` : unlocked ? 'Challenge ready!' : 'Complete all modules first'}
        </div>
      </div>
    </div>
    `;
  },

  afterRender() {
    // Module clicks are handled via onclick in the HTML
    // Boss quiz clicks handled via onclick in the HTML
  }
};
