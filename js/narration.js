/* ============================================
   Narration — Web Speech API wrapper
   ============================================ */
window.Narration = {
  utterance: null,
  isPlaying: false,
  currentSection: null,
  supported: false,

  /** Initialize — check browser support */
  init() {
    this.supported = 'speechSynthesis' in window;
    if (!this.supported) {
      console.warn('Narration: SpeechSynthesis not supported in this browser.');
    }
  },

  /** Speak text, optionally highlighting a section element */
  speak(text, sectionEl) {
    if (!this.supported) return;

    // Cancel current speech
    this.stop();

    // Strip HTML tags from text for clean speech
    const cleanText = text.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    if (!cleanText) return;

    this.utterance = new SpeechSynthesisUtterance(cleanText);

    // Set rate from settings
    const state = Storage.get();
    this.utterance.rate = (state.settings && state.settings.narrationRate) || 1;
    this.utterance.pitch = 1;
    this.utterance.volume = 1;

    // Track active section
    if (sectionEl) {
      if (this.currentSection) {
        this.currentSection.classList.remove('narration-active');
      }
      sectionEl.classList.add('narration-active');
      this.currentSection = sectionEl;
    }

    // Events
    this.utterance.onstart = () => {
      this.isPlaying = true;
      this._updateControls('playing');
    };
    this.utterance.onend = () => {
      this.isPlaying = false;
      if (this.currentSection) {
        this.currentSection.classList.remove('narration-active');
        this.currentSection = null;
      }
      this._updateControls('stopped');
    };
    this.utterance.onerror = () => {
      this.isPlaying = false;
      this._updateControls('stopped');
    };

    window.speechSynthesis.speak(this.utterance);
    this.isPlaying = true;
  },

  /** Pause speech */
  pause() {
    if (!this.supported) return;
    window.speechSynthesis.pause();
    this.isPlaying = false;
    this._updateControls('paused');
  },

  /** Resume speech */
  resume() {
    if (!this.supported) return;
    window.speechSynthesis.resume();
    this.isPlaying = true;
    this._updateControls('playing');
  },

  /** Stop speech */
  stop() {
    if (!this.supported) return;
    window.speechSynthesis.cancel();
    this.isPlaying = false;
    if (this.currentSection) {
      this.currentSection.classList.remove('narration-active');
      this.currentSection = null;
    }
    this._updateControls('stopped');
  },

  /** Set narration rate */
  setRate(rate) {
    Storage.update('settings.narrationRate', rate);
    if (this.utterance) {
      this.utterance.rate = rate;
    }
    // Update dropdown
    const sel = document.getElementById('narration-rate');
    if (sel) sel.value = String(rate);
  },

  /** Create narration control bar HTML for a given section */
  createNarrationControls(sectionId, text) {
    if (!this.supported) {
      return `<div class="text-xs text-slate-500 italic mt-2">🔇 Narration not supported in this browser</div>`;
    }
    return `
      <div class="narration-bar flex items-center gap-2 mt-3 flex-wrap" data-section-id="${sectionId}">
        <button onclick="Narration._handleListen('${sectionId}')"
          class="narration-btn-listen flex items-center gap-1 px-3 py-1.5 bg-blue-600 hover:bg-blue-500 text-white text-xs rounded-lg transition-all font-semibold">
          🔊 Listen
        </button>
        <button onclick="Narration.pause()"
          class="flex items-center gap-1 px-3 py-1.5 bg-slate-600 hover:bg-slate-500 text-white text-xs rounded-lg transition-all">
          ⏸ Pause
        </button>
        <button onclick="Narration.stop()"
          class="flex items-center gap-1 px-3 py-1.5 bg-slate-600 hover:bg-slate-500 text-white text-xs rounded-lg transition-all">
          ⏹ Stop
        </button>
        <select onchange="Narration.setRate(parseFloat(this.value))"
          class="bg-slate-700 text-slate-200 text-xs rounded px-2 py-1.5 border border-slate-600 focus:outline-none focus:border-blue-500">
          <option value="0.8">0.8x</option>
          <option value="1" selected>1.0x</option>
          <option value="1.25">1.25x</option>
          <option value="1.5">1.5x</option>
        </select>
      </div>
    `;
  },

  /** Handle listen button click — extract text from section */
  _handleListen(sectionId) {
    const el = document.getElementById(sectionId);
    if (!el) return;
    const text = el.innerText || el.textContent || '';
    this.speak(text, el);
  },

  /** Update button states in all narration bars */
  _updateControls(state) {
    document.querySelectorAll('.narration-btn-listen').forEach(btn => {
      if (state === 'playing') {
        btn.textContent = '🔊 Playing...';
        btn.classList.add('bg-blue-700');
      } else {
        btn.textContent = '🔊 Listen';
        btn.classList.remove('bg-blue-700');
      }
    });
  }
};
