/* ============================================
   ModuleReaderView
   ============================================ */
window.ModuleReaderView = {
  moduleId: null,
  moduleData: null,
  currentSection: 0,
  startTime: null,
  totalSections: 0,

  render(moduleId) {
    if (!moduleId) return this._errorHTML('No module ID provided.');

    const modMeta = COURSE.modules[moduleId];
    if (!modMeta) return this._errorHTML(`Module "${moduleId}" not found in course structure.`);

    const modData = window[modMeta.dataVar];
    if (!modData) {
      return `
      <div class="max-w-3xl mx-auto">
        <div class="mb-4">
          <button onclick="Router.navigate('#course')" class="text-sm text-slate-400 hover:text-amber-400 transition-colors">← Back to Course Map</button>
        </div>
        <div class="bg-slate-800 border border-slate-700 rounded-2xl p-8 text-center">
          <div class="text-5xl mb-4">${modMeta.icon}</div>
          <h1 class="text-2xl font-bold text-white mb-2">${modMeta.title}</h1>
          <p class="text-slate-400 mb-2">${modMeta.subtitle}</p>
          <div class="mt-6 p-4 bg-amber-900/20 border border-amber-700/40 rounded-xl">
            <p class="text-amber-300 text-sm font-semibold">📦 Content file not yet loaded</p>
            <p class="text-slate-400 text-xs mt-1">This module's content (${modMeta.dataVar}) is not available yet.<br>Add the content file to data/content/ to enable this module.</p>
          </div>
          <div class="mt-6 flex gap-3 justify-center">
            <button onclick="Router.navigate('#course')"
              class="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-xl text-sm transition-all">
              ← Course Map
            </button>
            ${COURSE.modules[moduleId]?.quizId ? `
            <button onclick="Router.navigate('#quiz/${COURSE.modules[moduleId].quizId}')"
              class="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-black font-bold rounded-xl text-sm transition-all">
              Take Quiz Anyway →
            </button>` : ''}
          </div>
        </div>
      </div>
      `;
    }

    const sections = modData.sections || [];
    const day = COURSE.getDayForModule(moduleId);
    const dayColor = day ? day.color : '#F59E0B';
    const state = Storage.get();
    const modState = state.modules[moduleId] || { status: 'available', sectionsRead: 0 };
    const resumeAt = Math.min(modState.sectionsRead || 0, sections.length - 1);

    // Store temporarily so afterRender can access
    this._tempModuleId = moduleId;
    this._tempModData = modData;
    this._tempResumeAt = resumeAt;

    return `
    <div class="max-w-3xl mx-auto pb-10">

      <!-- Back -->
      <div class="mb-4">
        <button onclick="Router.navigate('#course')" class="text-sm text-slate-400 hover:text-amber-400 transition-colors flex items-center gap-1">
          ← Back to Course Map
        </button>
      </div>

      <!-- Module Header -->
      <div class="bg-slate-800 border border-slate-700 rounded-2xl p-6 mb-6"
        style="border-left: 4px solid ${dayColor};">
        <div class="flex items-start justify-between gap-4">
          <div class="flex items-start gap-4">
            <span class="text-4xl">${modMeta.icon}</span>
            <div>
              <div class="flex items-center gap-2 mb-1">
                <span class="text-xs px-2 py-0.5 rounded-full font-semibold"
                  style="background:${dayColor}33; color:${dayColor};">Day ${modMeta.day}</span>
              </div>
              <h1 class="text-xl font-bold text-white">${modData.title || modMeta.title}</h1>
              <p class="text-slate-400 text-sm">${modData.subtitle || modMeta.subtitle}</p>
              <div class="flex gap-3 mt-2 text-xs text-slate-500">
                <span>⏱ ~${modMeta.estimatedMinutes} min</span>
                <span>⚡ ${modMeta.xpReward} XP on completion</span>
                <span>📖 ${sections.length} sections</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Progress Bar -->
        <div class="mt-4">
          <div class="flex justify-between text-xs text-slate-500 mb-1.5">
            <span id="section-label">Section <span id="current-section-num">1</span> of ${sections.length}</span>
            <span id="section-pct">0%</span>
          </div>
          <div class="h-2 bg-slate-700 rounded-full overflow-hidden">
            <div id="module-progress-bar" class="h-full rounded-full transition-all duration-500"
              style="width: 0%; background: ${dayColor};">
            </div>
          </div>
        </div>
      </div>

      <!-- Section Content -->
      <div id="section-container">
        <!-- Rendered by afterRender -->
      </div>

      <!-- Glossary -->
      ${modData.glossary && modData.glossary.length > 0 ? `
      <div class="mt-6 bg-slate-800 border border-slate-700 rounded-2xl p-5">
        <h3 class="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">📖 Key Terms</h3>
        <div class="flex flex-wrap gap-2">
          ${modData.glossary.map(g => `
            <div class="tooltip-wrapper">
              <span class="tooltip-trigger text-sm px-3 py-1 bg-slate-700 rounded-full cursor-help">${g.term}</span>
              <div class="tooltip-box">${Utils.sanitizeHTML(g.definition)}</div>
            </div>
          `).join('')}
        </div>
      </div>` : ''}

    </div>
    `;
  },

  afterRender(moduleId) {
    this.moduleId = this._tempModuleId || moduleId;
    const modMeta = COURSE.modules[this.moduleId];
    if (!modMeta) return;

    const modData = window[modMeta.dataVar];
    if (!modData) return;

    this.moduleData = modData;
    this.totalSections = (modData.sections || []).length;
    this.startTime = Date.now();

    const state = Storage.get();
    const modState = state.modules[this.moduleId] || { status: 'available', sectionsRead: 0 };

    this.currentSection = this._tempResumeAt !== undefined ? this._tempResumeAt : 0;

    // Mark as in_progress
    if (modState.status === 'available') {
      Storage.setModuleStatus(this.moduleId, 'in_progress');
    }

    this._renderCurrentSection();
  },

  _renderCurrentSection() {
    const container = document.getElementById('section-container');
    if (!container || !this.moduleData) return;

    const sections = this.moduleData.sections || [];
    if (sections.length === 0) {
      container.innerHTML = '<p class="text-slate-400">No content sections found.</p>';
      return;
    }

    const section = sections[this.currentSection];
    if (!section) return;

    const isLast = this.currentSection >= sections.length - 1;
    const pct = Math.round(((this.currentSection + 1) / sections.length) * 100);
    const sectionId = `section-content-${this.currentSection}`;

    // Update progress
    const bar = document.getElementById('module-progress-bar');
    const pctEl = document.getElementById('section-pct');
    const numEl = document.getElementById('current-section-num');
    if (bar) bar.style.width = `${pct}%`;
    if (pctEl) pctEl.textContent = `${pct}%`;
    if (numEl) numEl.textContent = String(this.currentSection + 1);

    const typeConfig = {
      intro:      { icon: '🚀', label: 'Introduction',  border: '#F59E0B' },
      concept:    { icon: '💡', label: 'Key Concept',   border: '#3B82F6' },
      'deep-dive':{ icon: '🔍', label: 'Deep Dive',     border: '#8B5CF6' },
      'case-study':{ icon: '📋', label: 'Case Study',   border: '#10B981' },
      summary:    { icon: '✨', label: 'Summary',        border: '#EC4899' },
      video:      { icon: '🎬', label: 'Video',          border: '#EF4444' },
      diagram:    { icon: '📊', label: 'Diagram',        border: '#06B6D4' }
    };
    const tc = typeConfig[section.type] || { icon: '📄', label: section.type || 'Content', border: '#475569' };

    let videoHTML = '';
    if (section.video) {
      videoHTML = this.renderVideo(section.video);
    }

    let diagramHTML = '';
    if (section.diagram) {
      diagramHTML = this.renderDiagram(section.diagram);
    }

    container.innerHTML = `
    <div class="section-card ${section.type || 'concept'}" id="${sectionId}"
      style="border-left-color: ${tc.border};">
      <!-- Section type badge -->
      <div class="flex items-center gap-2 mb-4">
        <span class="text-base">${tc.icon}</span>
        <span class="text-xs font-semibold uppercase tracking-wider"
          style="color:${tc.border}">${tc.label}</span>
        <span class="text-xs text-slate-500 ml-auto">${this.currentSection + 1} / ${sections.length}</span>
      </div>

      <!-- Section title -->
      ${section.title ? `<h2 class="text-xl font-bold text-white mb-3">${section.title}</h2>` : ''}

      <!-- Section content -->
      <div class="text-slate-300 leading-relaxed space-y-3 prose-sm">
        ${section.content || ''}
      </div>

      ${videoHTML}
      ${diagramHTML}

      <!-- Key takeaways -->
      ${section.keyPoints && section.keyPoints.length > 0 ? `
      <div class="mt-4 p-4 bg-slate-900/60 rounded-xl border border-slate-700">
        <p class="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-2">Key Takeaways</p>
        <ul class="space-y-1">
          ${section.keyPoints.map(kp => `<li class="text-sm text-slate-300 flex gap-2"><span class="text-amber-400 mt-0.5 shrink-0">→</span>${kp}</li>`).join('')}
        </ul>
      </div>` : ''}

      <!-- Narration controls -->
      ${Narration.createNarrationControls(sectionId, section.content || '')}
    </div>

    <!-- Navigation Buttons -->
    <div class="flex items-center justify-between mt-4 gap-3">
      ${this.currentSection > 0 ? `
      <button onclick="ModuleReaderView.prevSection()"
        class="px-4 py-2.5 bg-slate-700 hover:bg-slate-600 text-white rounded-xl text-sm transition-all">
        ← Previous
      </button>` : '<div></div>'}

      ${!isLast ? `
      <button onclick="ModuleReaderView.nextSection()"
        class="flex-1 md:flex-none px-6 py-2.5 bg-amber-500 hover:bg-amber-400 text-black font-bold rounded-xl text-sm transition-all text-center">
        Next Section →
      </button>` : `
      <button onclick="ModuleReaderView.completeModule()"
        class="flex-1 md:flex-none px-6 py-2.5 font-bold rounded-xl text-sm transition-all text-center text-black"
        style="background: linear-gradient(135deg,#10B981,#059669);">
        Complete Module ✅
      </button>`}
    </div>
    `;

    // Set narration rate from settings
    const settings = Storage.get().settings || {};
    const sel = container.querySelector('select');
    if (sel) sel.value = String(settings.narrationRate || 1);
  },

  renderSection(index) {
    this.currentSection = index;
    this._renderCurrentSection();
  },

  renderDiagram(diagram) {
    return `
    <div class="diagram-container mt-4">
      ${diagram.title ? `<p class="text-sm font-semibold text-slate-300 mb-2">${diagram.title}</p>` : ''}
      ${diagram.svg || ''}
      ${diagram.description ? `<p class="text-xs text-slate-400 mt-2 text-center italic">${diagram.description}</p>` : ''}
    </div>
    `;
  },

  renderVideo(video) {
    const src = `https://www.youtube.com/embed/${video.videoId}?start=${video.start || 0}&end=${video.end || ''}&autoplay=0&rel=0`;
    return `
    <div class="mt-4">
      <p class="text-sm text-slate-400 mb-2">
        🎬 Watch: <span class="text-white font-medium">${video.title || 'Video Clip'}</span>
        ${video.duration ? `<span class="text-slate-500"> (~${video.duration} min clip)</span>` : ''}
      </p>
      <div class="video-embed-wrapper">
        <iframe src="${src}" allowfullscreen loading="lazy"
          title="${Utils.sanitizeHTML(video.title || 'Module Video')}">
        </iframe>
      </div>
    </div>
    `;
  },

  nextSection() {
    if (!this.moduleData) return;
    const sections = this.moduleData.sections || [];

    this.currentSection++;

    // Track reading progress
    const state = Storage.get();
    const modState = state.modules[this.moduleId] || {};
    if ((modState.sectionsRead || 0) < this.currentSection) {
      Storage.update(`modules.${this.moduleId}.sectionsRead`, this.currentSection);
    }

    this._renderCurrentSection();
    // Scroll to top of section
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },

  prevSection() {
    if (this.currentSection > 0) {
      this.currentSection--;
      this._renderCurrentSection();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  },

  completeModule() {
    if (!this.moduleId || !this.moduleData) return;
    const modMeta = COURSE.modules[this.moduleId];
    if (!modMeta) return;

    // Mark module complete
    Storage.setModuleStatus(this.moduleId, 'completed');

    // Check speed learner badge
    const elapsed = (Date.now() - this.startTime) / 1000 / 60; // minutes
    if (elapsed < modMeta.estimatedMinutes) {
      Storage.unlockBadge('speed_learner');
    }

    // Unlock next module
    Storage.unlockNextModule(this.moduleId);

    // Award XP
    Gamification.awardXP(modMeta.xpReward, `Module: ${modMeta.title}`);

    // Check badges
    const newBadges = Gamification.checkBadges(Storage.get());
    newBadges.forEach(badgeId => {
      setTimeout(() => Gamification.showBadgeModal(Gamification.BADGES[badgeId]), 800);
    });

    // Show completion screen
    this._renderCompletion(modMeta);
  },

  _renderCompletion(modMeta) {
    const container = document.getElementById('section-container');
    if (!container) return;

    const quizId = modMeta.quizId;
    const day = COURSE.getDayForModule(modMeta.id);
    const dayColor = day ? day.color : '#F59E0B';

    container.innerHTML = `
    <div class="text-center py-10 section-card summary" style="border-left-color:${dayColor};">
      <div class="text-6xl mb-4">🎉</div>
      <h2 class="text-2xl font-bold text-white mb-2">Module Complete!</h2>
      <p class="text-slate-400 mb-2">${modMeta.title}</p>
      <div class="inline-flex items-center gap-2 bg-emerald-900/30 border border-emerald-700/50 rounded-full px-5 py-2 mb-6">
        <span class="text-emerald-400 font-bold text-lg">+${modMeta.xpReward} XP</span>
        <span class="text-slate-400 text-sm">earned</span>
      </div>
      <div class="flex flex-col sm:flex-row gap-3 justify-center mt-4">
        <button onclick="Router.navigate('#course')"
          class="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-xl font-semibold transition-all">
          Back to Course Map
        </button>
        ${quizId ? `
        <button onclick="Router.navigate('#quiz/${quizId}')"
          class="px-6 py-3 text-black font-bold rounded-xl transition-all"
          style="background:${dayColor};">
          Take Quiz →
        </button>` : ''}
      </div>
    </div>
    `;

    // Also hide progress controls
    const prevBtn = document.querySelector('[onclick="ModuleReaderView.prevSection()"]');
    if (prevBtn) prevBtn.style.display = 'none';
  },

  _errorHTML(msg) {
    return `
    <div class="max-w-2xl mx-auto text-center py-20">
      <div class="text-4xl mb-4">⚠️</div>
      <h2 class="text-xl font-bold text-red-400 mb-2">Module Error</h2>
      <p class="text-slate-400">${Utils.sanitizeHTML(msg)}</p>
      <button onclick="Router.navigate('#course')" class="mt-6 px-5 py-2.5 bg-amber-500 text-black font-bold rounded-xl hover:bg-amber-400 transition-all">
        Back to Course Map
      </button>
    </div>
    `;
  }
};
