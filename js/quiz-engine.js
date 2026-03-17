/* ============================================
   QuizEngine — Quiz state machine
   ============================================ */
window.QuizEngine = {
  currentQuiz: null,
  currentQuestionIndex: 0,
  answers: [],
  startTime: null,
  questionStartTime: null,
  timer: null,
  timeRemaining: 0,
  xpEarned: 0,

  /** Initialize engine with a quiz ID */
  init(quizId) {
    // Try to find quiz data by quizVar pattern
    const varName = this._quizVarName(quizId);
    const quizData = window[varName];

    if (!quizData) {
      console.error(`QuizEngine: No quiz data found for ${quizId} (tried ${varName})`);
      return false;
    }

    this.currentQuiz = quizData;
    this.currentQuestionIndex = 0;
    this.answers = [];
    this.startTime = Date.now();
    this.questionStartTime = Date.now();
    this.xpEarned = 0;
    this.timeRemaining = quizData.timeLimit || 0;

    // Start timer if applicable
    if (this.timeRemaining > 0) {
      this._startTimer();
    }

    return true;
  },

  /** Derive variable name from quiz ID — supports QUIZ_Q01 and QUIZ_M01 conventions */
  _quizVarName(quizId) {
    if (quizId === 'final') return 'QUIZ_FINAL';
    // Primary pattern: q01 -> QUIZ_Q01, boss-day1 -> QUIZ_BOSS_DAY1
    const primary = 'QUIZ_' + quizId.toUpperCase().replace(/-/g, '_');
    if (window[primary] !== undefined) return primary;
    // Fallback: q01 -> QUIZ_M01 (alternate naming from some content files)
    const mMatch = quizId.match(/^q(\d+)$/);
    if (mMatch) {
      const alt = 'QUIZ_M' + mMatch[1].padStart(2, '0');
      if (window[alt] !== undefined) return alt;
    }
    return primary;
  },

  /** Get current question object */
  getCurrentQuestion() {
    if (!this.currentQuiz || !this.currentQuiz.questions) return null;
    return this.currentQuiz.questions[this.currentQuestionIndex] || null;
  },

  /** Record an answer, returns result object */
  answer(optionIndex) {
    const question = this.getCurrentQuestion();
    if (!question) return null;

    const timeTaken = (Date.now() - this.questionStartTime) / 1000;
    // Support both 'correctIndex' and 'correct' field names
    const correctIdx = question.correctIndex !== undefined ? question.correctIndex : question.correct;
    const isCorrect = optionIndex === correctIdx;

    // Calculate XP
    let xp = isCorrect ? 10 : 0;
    if (isCorrect && timeTaken < 15) xp += 3; // speed bonus

    this.xpEarned += xp;

    const answerRecord = {
      questionIndex: this.currentQuestionIndex,
      question: question.question,
      selectedOption: optionIndex,
      correct: correctIdx,
      isCorrect,
      timeTaken,
      xpEarned: xp,
      explanation: question.explanation || '',
      interviewNote: question.interviewNote || null
    };

    this.answers.push(answerRecord);
    this.questionStartTime = Date.now();

    return {
      correct: isCorrect,
      explanation: question.explanation || '',
      xpEarned: xp,
      interviewNote: question.interviewNote || null,
      correctOption: correctIdx
    };
  },

  /** Move to next question */
  nextQuestion() {
    this.currentQuestionIndex++;
  },

  /** Check if quiz is complete */
  isComplete() {
    if (!this.currentQuiz || !this.currentQuiz.questions) return true;
    return this.currentQuestionIndex >= this.currentQuiz.questions.length;
  },

  /** Get final results object */
  getResults() {
    const total = this.currentQuiz ? this.currentQuiz.questions.length : 0;
    const correct = this.answers.filter(a => a.isCorrect).length;
    const score = total > 0 ? Math.round((correct / total) * 100) : 0;
    const timeTaken = Math.round((Date.now() - this.startTime) / 1000);

    return {
      quizId: this.currentQuiz ? this.currentQuiz.id : null,
      quizTitle: this.currentQuiz ? this.currentQuiz.title : '',
      score,
      totalQuestions: total,
      correct,
      wrong: total - correct,
      xpEarned: this.xpEarned,
      timeTaken,
      breakdown: this.answers,
      passed: score >= (this.currentQuiz ? (this.currentQuiz.passingScore || 60) : 60)
    };
  },

  /** Finalize quiz — save results, award XP, unlock next */
  finish(results) {
    if (!results || !results.quizId) return;

    // Stop timer
    this._stopTimer();

    // Save to storage
    Storage.recordQuizAttempt(results.quizId, results.score);

    // Award XP
    Gamification.awardXP(results.xpEarned, `Quiz: ${results.quizTitle}`);

    // Perfect score badge
    if (results.score === 100) {
      Storage.unlockBadge('perfect_score');
    }

    // Control freak: 90%+ on APC quiz (q03)
    if (results.quizId === 'q03' && results.score >= 90) {
      Storage.unlockBadge('control_freak');
    }

    // AI Leader badge: final assessment 80%+
    if (results.quizId === 'final' && results.score >= 80) {
      Storage.unlockBadge('ai_leader');
    }

    // Unlock next module after module quiz
    if (results.quizId && results.quizId.match(/^q\d+$/)) {
      const num = parseInt(results.quizId.slice(1), 10);
      if (results.passed) {
        const nextModuleId = `m${String(num + 1).padStart(2, '0')}`;
        const state = Storage.get();
        if (state.modules[nextModuleId] && state.modules[nextModuleId].status === 'locked') {
          Storage.update(`modules.${nextModuleId}.status`, 'available');
        }
      }
    }

    // Reload state
    State.reload();
    Gamification.updateSidebarXP();

    // Re-check all badges
    Gamification.checkBadges(Storage.get());
  },

  /** Start countdown timer */
  _startTimer() {
    this._stopTimer();
    this.timer = setInterval(() => {
      this.timeRemaining--;
      const timerEl = document.getElementById('quiz-timer');
      if (timerEl) {
        timerEl.textContent = Utils.formatTime(this.timeRemaining);
        if (this.timeRemaining <= 30) timerEl.classList.add('text-red-400');
        else timerEl.classList.remove('text-red-400');
      }
      if (this.timeRemaining <= 0) {
        this._stopTimer();
        // Auto-finish if timer runs out
        const results = this.getResults();
        this.finish(results);
        // Navigate to results
        if (window.QuizView && typeof window.QuizView.showResults === 'function') {
          window.QuizView.showResults(results);
        }
      }
    }, 1000);
  },

  /** Stop timer */
  _stopTimer() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }
};
