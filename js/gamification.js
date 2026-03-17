/* ============================================
   Gamification — XP, Levels, Badges, Toasts
   ============================================ */
window.Gamification = {

  LEVELS: [
    { level: 1, name: 'Refinery Trainee',     minXP: 0,    icon: '⚙️' },
    { level: 2, name: 'Process Analyst',       minXP: 300,  icon: '📊' },
    { level: 3, name: 'Digital Strategist',    minXP: 700,  icon: '🗺️' },
    { level: 4, name: 'AI Architect',          minXP: 1300, icon: '🤖' },
    { level: 5, name: 'Transformation Leader', minXP: 2200, icon: '👑' }
  ],

  BADGES: {
    first_step:              { name: 'First Step',              icon: '🚀', description: 'Complete your first module' },
    process_wizard:          { name: 'Process Wizard',          icon: '⚙️', description: 'Complete all Day 1 modules' },
    control_freak:           { name: 'Control Freak',           icon: '🎛️', description: 'Score 90%+ on the APC quiz' },
    data_whisperer:          { name: 'Data Whisperer',          icon: '📊', description: 'Complete the Industrial Data module' },
    ai_apprentice:           { name: 'AI Apprentice',           icon: '🤖', description: 'Complete AI & ML Fundamentals' },
    refinery_ai_expert:      { name: 'Refinery AI Expert',      icon: '🏭', description: 'Complete AI Applications in Refineries' },
    security_guardian:       { name: 'Security Guardian',       icon: '🛡️', description: 'Complete AI Cybersecurity' },
    transformation_architect:{ name: 'Transformation Architect',icon: '🗺️', description: 'Complete Transformation Strategy' },
    speed_learner:           { name: 'Speed Learner',           icon: '⚡', description: 'Complete a module faster than estimated' },
    perfect_score:           { name: 'Perfect Score',           icon: '🏆', description: 'Score 100% on any quiz' },
    halfway_there:           { name: 'Halfway There',           icon: '🎯', description: 'Reach Level 3: Digital Strategist' },
    ai_leader:               { name: 'AI Leader',               icon: '👑', description: 'Pass final assessment with 80%+' }
  },

  /** Returns the level object for a given XP total */
  getLevelForXP(xp) {
    let currentLevel = this.LEVELS[0];
    for (const l of this.LEVELS) {
      if (xp >= l.minXP) currentLevel = l;
    }
    return currentLevel;
  },

  /** Returns XP needed to reach the next level (or 0 if max level) */
  getXPForNextLevel(xp) {
    const current = this.getLevelForXP(xp);
    const nextIdx = this.LEVELS.findIndex(l => l.level === current.level + 1);
    if (nextIdx === -1) return 0; // max level
    return this.LEVELS[nextIdx].minXP;
  },

  /** Returns XP progress percentage within current level (0-100) */
  getLevelProgress(xp) {
    const current = this.getLevelForXP(xp);
    const nextXP = this.getXPForNextLevel(xp);
    if (nextXP === 0) return 100; // max level
    const prevXP = current.minXP;
    const range = nextXP - prevXP;
    const earned = xp - prevXP;
    return Math.min(100, Math.round((earned / range) * 100));
  },

  /** Check all badge conditions against state, unlock any new ones.
   *  Returns array of newly-unlocked badge IDs */
  checkBadges(state) {
    if (!state) state = Storage.get();
    const newlyUnlocked = [];

    const mods = state.modules || {};
    const quizzes = state.quizzes || {};
    const xp = (state.xp && state.xp.total) || 0;

    const modComplete = (id) => mods[id] && mods[id].status === 'completed';
    const quizScore   = (id) => (quizzes[id] && quizzes[id].bestScore) || 0;

    const conditions = {
      first_step: () => Object.values(mods).some(m => m.status === 'completed'),
      process_wizard: () => ['m01','m02','m03','m04'].every(modComplete),
      control_freak: () => quizScore('q03') >= 90,
      data_whisperer: () => modComplete('m06'),
      ai_apprentice: () => modComplete('m05'),
      refinery_ai_expert: () => modComplete('m07'),
      security_guardian: () => modComplete('m08'),
      transformation_architect: () => modComplete('m09'),
      speed_learner: () => state.badges && state.badges.speed_learner && state.badges.speed_learner.unlocked,
      perfect_score: () => Object.values(quizzes).some(q => q.bestScore === 100),
      halfway_there: () => this.getLevelForXP(xp).level >= 3,
      ai_leader: () => quizScore('final') >= 80
    };

    for (const [badgeId, condition] of Object.entries(conditions)) {
      if (!(state.badges && state.badges[badgeId] && state.badges[badgeId].unlocked)) {
        try {
          if (condition()) {
            const wasNew = Storage.unlockBadge(badgeId);
            if (wasNew) {
              newlyUnlocked.push(badgeId);
            }
          }
        } catch (e) {
          // ignore badge check errors
        }
      }
    }

    return newlyUnlocked;
  },

  /** Award XP, check level up, check badges, show toast */
  awardXP(amount, source) {
    const stateBefore = Storage.get();
    const levelBefore = this.getLevelForXP(stateBefore.xp.total);

    const stateAfter = Storage.addXP(amount, source);
    const levelAfter = this.getLevelForXP(stateAfter.xp.total);

    // Update stored level
    if (levelAfter.level !== levelBefore.level) {
      Storage.update('level', levelAfter.level);
      this._showLevelUpToast(levelAfter);
    }

    // Reload state after modifications
    State.reload();

    // Show XP toast
    this.showXPToast(amount);

    // Check badges
    const newBadges = this.checkBadges(Storage.get());
    newBadges.forEach(badgeId => {
      setTimeout(() => this.showBadgeModal(this.BADGES[badgeId]), 800);
    });

    // Update sidebar
    this.updateSidebarXP();
  },

  /** Show floating XP toast */
  showXPToast(amount) {
    const toast = document.getElementById('xp-toast');
    const text = document.getElementById('xp-toast-text');
    if (!toast || !text) return;

    text.textContent = `+${amount} XP`;
    toast.classList.remove('hidden');
    // Restart animation by cloning
    const clone = toast.cloneNode(true);
    clone.id = 'xp-toast';
    toast.parentNode.replaceChild(clone, toast);

    const textEl = document.getElementById('xp-toast-text');
    if (textEl) textEl.textContent = `+${amount} XP`;
    const newToast = document.getElementById('xp-toast');
    if (newToast) {
      newToast.classList.remove('hidden');
      setTimeout(() => newToast.classList.add('hidden'), 2600);
    }
  },

  /** Show level-up toast */
  _showLevelUpToast(levelObj) {
    setTimeout(() => {
      const toast = document.getElementById('xp-toast');
      const text = document.getElementById('xp-toast-text');
      if (!toast || !text) return;
      text.textContent = `${levelObj.icon} Level Up! ${levelObj.name}`;
      toast.style.background = 'linear-gradient(135deg,#8B5CF6,#6D28D9)';
      toast.classList.remove('hidden');
      setTimeout(() => {
        toast.classList.add('hidden');
        toast.style.background = '';
      }, 3000);
    }, 1000);
  },

  /** Show badge unlock celebration modal */
  showBadgeModal(badge) {
    if (!badge) return;
    const modal    = document.getElementById('badge-modal');
    const icon     = document.getElementById('badge-modal-icon');
    const name     = document.getElementById('badge-modal-name');
    const desc     = document.getElementById('badge-modal-desc');
    if (!modal) return;

    if (icon) icon.textContent = badge.icon || '🏆';
    if (name) name.textContent = badge.name || '';
    if (desc) desc.textContent = badge.description || '';
    modal.classList.remove('hidden');
  },

  /** Update sidebar XP bar and level info */
  updateSidebarXP() {
    const state = Storage.get();
    const xp = (state.xp && state.xp.total) || 0;
    const level = this.getLevelForXP(xp);
    const nextXP = this.getXPForNextLevel(xp);
    const progress = this.getLevelProgress(xp);

    const streak = (state.user && state.user.currentStreak) || 0;

    const elLevelIcon   = document.getElementById('sidebar-level-icon');
    const elLevelName   = document.getElementById('sidebar-level-name');
    const elUserName    = document.getElementById('sidebar-user-name');
    const elXPCurrent   = document.getElementById('sidebar-xp-current');
    const elXPNext      = document.getElementById('sidebar-xp-next');
    const elXPBar       = document.getElementById('sidebar-xp-bar');
    const elStreak      = document.getElementById('sidebar-streak-count');
    const elMobileXP    = document.getElementById('mobile-xp');

    if (elLevelIcon) elLevelIcon.textContent = level.icon;
    if (elLevelName) elLevelName.textContent = `Level ${level.level} — ${level.name}`;
    if (elUserName)  elUserName.textContent  = (state.user && state.user.name) || 'Learner';
    if (elXPCurrent) elXPCurrent.textContent = `${xp} XP`;
    if (elXPNext)    elXPNext.textContent    = nextXP > 0 ? `${nextXP} XP` : 'Max';
    if (elXPBar)     elXPBar.style.width     = `${progress}%`;
    if (elStreak)    elStreak.textContent    = streak;
    if (elMobileXP)  elMobileXP.textContent  = `${xp} XP`;
  }
};
