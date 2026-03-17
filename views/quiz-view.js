/* ============================================
   QuizView
   ============================================ */
window.QuizView = {
  quizId: null,
  answered: false,

  render(quizId) {
    if (!quizId) return '<p class="text-red-400">No quiz ID.</p>';

    const ok = QuizEngine.init(quizId);
    if (!ok) {
      return `
      <div class="max-w-2xl mx-auto text-center py-20">
        <div class="text-5xl mb-4">📝</div>
        <h2 class="text-xl font-bold text-white mb-2">Quiz Not Available</h2>
        <p class="text-slate-400 mb-6">Quiz data for <code class="text-amber-400">${Utils.sanitizeHTML(quizId)}</code> hasn't been loaded yet.</p>
        <p class="text-slate-500 text-sm mb-6">Add the quiz file to data/quizzes/ to enable this quiz.</p>
        <button onclick="Router.navigate('#course')"
          class="px-5 py-2.5 bg-amber-500 text-black font-bold rounded-xl hover:bg-amber-400 transition-all">
          ← Back to Course Map
        </button>
      </div>
      `;
    }

    return this._renderQuizShell(quizId);
  },

  _renderQuizShell(quizId) {
    const quiz = QuizEngine.currentQuiz;
    const total = quiz.questions ? quiz.questions.length : 0;
    const hasTimer = quiz.timeLimit && quiz.timeLimit > 0;
    const state = Storage.get();
    const settings = state.settings || {};

    return `
    <div class="max-w-2xl mx-auto pb-10">
      <!-- Header -->
      <div class="mb-4">
        <button onclick="QuizEngine._stopTimer(); Router.navigate('#course')"
          class="text-sm text-slate-400 hover:text-amber-400 transition-colors">← Back</button>
      </div>
      <div class="bg-slate-800 border border-slate-700 rounded-2xl p-5 mb-6">
        <div class="flex items-start justify-between gap-4">
          <div>
            <h1 class="text-xl font-bold text-white">${quiz.title || 'Quiz'}</h1>
            <p class="text-slate-400 text-sm mt-1">${total} questions · Passing: ${quiz.passingScore || 60}%</p>
          </div>
          ${hasTimer && settings.timerEnabled ? `
          <div class="text-center">
            <div id="quiz-timer" class="text-2xl font-mono font-bold text-amber-400">
              ${Utils.formatTime(quiz.timeLimit)}
            </div>
            <div class="text-xs text-slate-500">remaining</div>
          </div>` : ''}
        </div>
        <!-- Progress bar -->
        <div class="mt-4">
          <div class="flex justify-between text-xs text-slate-500 mb-1">
            <span id="q-label">Question 1 of ${total}</span>
            <span id="q-pct">0%</span>
          </div>
          <div class="h-2 bg-slate-700 rounded-full overflow-hidden">
            <div id="quiz-progress-bar" class="h-full bg-amber-500 rounded-full transition-all duration-500"
              style="width: ${total > 0 ? Math.round(1/total*100) : 0}%;">
            </div>
          </div>
        </div>
      </div>

      <!-- Question Container -->
      <div id="question-container">
        <!-- Rendered by afterRender -->
      </div>
    </div>
    `;
  },

  renderQuestion(question, index, total) {
    const container = document.getElementById('question-container');
    if (!container) return;

    this.answered = false;
    const pct = Math.round(((index + 1) / total) * 100);

    // Update progress
    const bar = document.getElementById('quiz-progress-bar');
    const label = document.getElementById('q-label');
    const pctEl = document.getElementById('q-pct');
    if (bar) bar.style.width = `${pct}%`;
    if (label) label.textContent = `Question ${index + 1} of ${total}`;
    if (pctEl) pctEl.textContent = `${pct}%`;

    const optionLetters = ['A', 'B', 'C', 'D'];
    const isTrueFalse = question.type === 'truefalse';
    const isScenario = question.type === 'scenario';

    let optionsHTML = '';
    const options = question.options || [];
    options.forEach((opt, i) => {
      optionsHTML += `
      <div class="quiz-option" id="option-${i}" onclick="QuizView._handleAnswer(${i})">
        <span class="inline-block w-7 h-7 rounded-full text-xs font-bold text-center leading-7 mr-3
          ${isTrueFalse ? (i === 0 ? 'bg-emerald-800 text-emerald-200' : 'bg-red-900 text-red-200') : 'bg-slate-700 text-slate-300'}">
          ${isTrueFalse ? (i === 0 ? 'T' : 'F') : optionLetters[i] || i}
        </span>
        <span class="text-slate-200 text-sm">${opt}</span>
      </div>
      `;
    });

    container.innerHTML = `
    <div class="section-card concept" style="animation: fadeIn 0.35s ease;">
      <!-- Q number badge -->
      <div class="flex items-center justify-between mb-4">
        <span class="text-xs px-3 py-1 bg-amber-900/30 text-amber-400 rounded-full font-semibold">
          Q${index + 1}
          ${question.type ? ` · ${question.type}` : ''}
        </span>
        <span class="text-xs text-slate-500">${question.topic || ''}</span>
      </div>

      <!-- Scenario box -->
      ${isScenario && question.scenario ? `
      <div class="mb-4 p-4 bg-slate-900/60 border border-blue-700/40 rounded-xl">
        <p class="text-xs text-blue-400 font-semibold uppercase mb-1">Scenario</p>
        <p class="text-slate-300 text-sm leading-relaxed">${question.scenario}</p>
      </div>` : ''}

      <!-- Question text -->
      <p class="text-white text-base font-semibold leading-snug mb-5">${question.question}</p>

      <!-- Options -->
      <div class="space-y-2" id="options-list">
        ${optionsHTML}
      </div>

      <!-- Feedback (hidden until answered) -->
      <div id="feedback-box" class="hidden mt-4 p-4 rounded-xl border">
        <p id="feedback-result" class="font-bold text-sm mb-1"></p>
        <p id="feedback-explanation" class="text-slate-300 text-sm"></p>
        <div id="interview-note-box" class="hidden mt-3 p-3 bg-blue-900/30 border border-blue-700/40 rounded-lg">
          <p class="text-xs font-semibold text-blue-400 mb-1">💼 Interview Note</p>
          <p id="interview-note-text" class="text-sm text-slate-300"></p>
        </div>
      </div>

      <!-- XP flash -->
      <div id="xp-flash" class="hidden mt-2 text-center text-emerald-400 font-bold text-sm animate-bounce"></div>

      <!-- Next button -->
      <div class="mt-5 hidden" id="next-btn-wrapper">
        <button id="next-question-btn" onclick="QuizView._handleNext()"
          class="w-full py-3 bg-amber-500 hover:bg-amber-400 text-black font-bold rounded-xl transition-all text-sm">
          ${QuizEngine.currentQuestionIndex >= (QuizEngine.currentQuiz?.questions?.length || 0) - 2
            ? 'See Results →'
            : 'Next Question →'}
        </button>
      </div>
    </div>
    `;
  },

  _handleAnswer(optionIndex) {
    if (this.answered) return;
    this.answered = true;

    const result = QuizEngine.answer(optionIndex);
    if (!result) return;

    // Disable all options
    document.querySelectorAll('.quiz-option').forEach(el => {
      el.classList.add('disabled');
    });

    // Mark selected
    const selectedEl = document.getElementById(`option-${optionIndex}`);
    const correctEl  = document.getElementById(`option-${result.correctOption}`);

    if (selectedEl) {
      selectedEl.classList.add(result.correct ? 'correct' : 'wrong');
    }
    if (!result.correct && correctEl) {
      correctEl.classList.add('correct');
    }

    // Show feedback
    const feedbackBox = document.getElementById('feedback-box');
    const feedbackResult = document.getElementById('feedback-result');
    const feedbackExp = document.getElementById('feedback-explanation');
    const interviewBox = document.getElementById('interview-note-box');
    const interviewText = document.getElementById('interview-note-text');
    const xpFlash = document.getElementById('xp-flash');

    if (feedbackBox) {
      feedbackBox.classList.remove('hidden');
      feedbackBox.style.borderColor = result.correct ? '#10B981' : '#EF4444';
      feedbackBox.style.backgroundColor = result.correct ? 'rgba(16,185,129,0.08)' : 'rgba(239,68,68,0.08)';
    }
    if (feedbackResult) {
      feedbackResult.textContent = result.correct ? '✅ Correct!' : '❌ Incorrect';
      feedbackResult.style.color = result.correct ? '#10B981' : '#EF4444';
    }
    if (feedbackExp && result.explanation) {
      feedbackExp.textContent = result.explanation;
    }
    if (result.interviewNote && interviewBox && interviewText) {
      interviewBox.classList.remove('hidden');
      interviewText.textContent = result.interviewNote;
    }
    if (xpFlash && result.xpEarned > 0) {
      xpFlash.classList.remove('hidden');
      xpFlash.textContent = `+${result.xpEarned} XP`;
    }

    // Show next button
    const nextWrapper = document.getElementById('next-btn-wrapper');
    if (nextWrapper) nextWrapper.classList.remove('hidden');

    // Update next button label
    const nextBtn = document.getElementById('next-question-btn');
    const q = QuizEngine.currentQuiz;
    if (nextBtn && q) {
      const isLast = QuizEngine.currentQuestionIndex >= q.questions.length - 1;
      nextBtn.textContent = isLast ? 'See Results →' : 'Next Question →';
    }
  },

  _handleNext() {
    if (QuizEngine.isComplete()) {
      const results = QuizEngine.getResults();
      QuizEngine.finish(results);
      this.showResults(results);
    } else {
      QuizEngine.nextQuestion();
      const q = QuizEngine.getCurrentQuestion();
      const total = QuizEngine.currentQuiz.questions.length;
      this.renderQuestion(q, QuizEngine.currentQuestionIndex, total);
    }
  },

  showResults(results) {
    const container = document.getElementById('question-container');
    if (!container) return;

    const passColor = results.passed ? '#10B981' : '#EF4444';
    const passLabel = results.passed ? 'Passed! 🎉' : 'Not Passed';

    // Breakdown
    const breakdownHTML = results.breakdown.map((item, i) => `
    <div class="flex items-start gap-3 py-2 border-b border-slate-700 last:border-0">
      <span class="text-sm ${item.isCorrect ? 'text-emerald-400' : 'text-red-400'} mt-0.5 shrink-0">
        ${item.isCorrect ? '✅' : '❌'}
      </span>
      <div class="flex-1 min-w-0">
        <p class="text-sm text-slate-300 truncate">Q${i+1}: ${item.question}</p>
        ${item.interviewNote ? `<p class="text-xs text-blue-400 mt-1">💼 ${item.interviewNote}</p>` : ''}
      </div>
      ${item.xpEarned > 0 ? `<span class="text-xs text-emerald-400 shrink-0">+${item.xpEarned} XP</span>` : ''}
    </div>
    `).join('');

    // Boss quiz next day unlock
    let nextDayBtn = '';
    if (results.quizId && results.quizId.startsWith('boss-day') && results.passed) {
      const dayNum = parseInt(results.quizId.replace('boss-day', ''), 10);
      if (dayNum < 4) {
        nextDayBtn = `
        <button onclick="Router.navigate('#course')"
          class="flex-1 py-3 text-black font-bold rounded-xl transition-all text-sm"
          style="background: linear-gradient(135deg,#10B981,#059669);">
          Unlock Day ${dayNum + 1} →
        </button>`;
      }
    }

    container.innerHTML = `
    <div class="section-card summary" style="animation: bounceIn 0.5s ease;">
      <div class="text-center mb-6">
        <div class="score-circle mx-auto mb-4 ${results.passed ? 'pass' : 'fail'}">
          ${results.score}%
        </div>
        <h2 class="text-2xl font-bold text-white">${passLabel}</h2>
        <p class="text-slate-400 text-sm mt-1">${results.correct} of ${results.totalQuestions} correct</p>
        <div class="inline-flex items-center gap-2 mt-3 bg-amber-900/20 border border-amber-700/30 rounded-full px-4 py-1.5">
          <span class="text-amber-400 font-bold">+${results.xpEarned} XP</span>
          <span class="text-slate-500 text-xs">earned this session</span>
        </div>
        <p class="text-slate-500 text-xs mt-2">Completed in ${Utils.formatTime(results.timeTaken)}</p>
      </div>

      <!-- Breakdown -->
      <div class="max-h-72 overflow-y-auto mb-5 pr-1">
        ${breakdownHTML}
      </div>

      <!-- CTA Buttons -->
      <div class="flex gap-3 flex-wrap">
        <button onclick="Router.navigate('#course')"
          class="flex-1 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-xl font-semibold transition-all text-sm">
          Back to Course
        </button>
        <button onclick="Router.navigate('#quiz/${results.quizId}')"
          class="flex-1 py-3 bg-amber-500 hover:bg-amber-400 text-black font-bold rounded-xl transition-all text-sm">
          Retake Quiz
        </button>
        ${nextDayBtn}
      </div>
    </div>
    `;

    // Update progress bar to 100%
    const bar = document.getElementById('quiz-progress-bar');
    if (bar) bar.style.width = '100%';
  },

  afterRender(quizId) {
    this.quizId = quizId;
    this.answered = false;

    const quiz = QuizEngine.currentQuiz;
    if (!quiz || !quiz.questions || quiz.questions.length === 0) return;

    const q = QuizEngine.getCurrentQuestion();
    const total = quiz.questions.length;
    this.renderQuestion(q, 0, total);
  }
};
