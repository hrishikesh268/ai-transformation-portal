/* ============================================
   Course Structure — Master data
   ============================================ */
window.COURSE = {
  days: [
    {
      id: 'day1',
      number: 1,
      title: 'The Refinery World',
      theme: 'Master the industrial landscape you will transform',
      color: '#F59E0B',
      colorClass: 'amber',
      modules: ['m01', 'm02', 'm03', 'm04'],
      bossQuizId: 'boss-day1'
    },
    {
      id: 'day2',
      number: 2,
      title: 'The AI Engine',
      theme: 'Learn the technology that powers transformation',
      color: '#10B981',
      colorClass: 'emerald',
      modules: ['m05', 'm06', 'm07'],
      bossQuizId: 'boss-day2'
    },
    {
      id: 'day3',
      number: 3,
      title: 'Transformation Mechanics',
      theme: 'Build the systems to make transformation real',
      color: '#8B5CF6',
      colorClass: 'violet',
      modules: ['m08', 'm09', 'm10', 'm11'],
      bossQuizId: 'boss-day3'
    },
    {
      id: 'day4',
      number: 4,
      title: 'Lead Like a Pro',
      theme: 'Master leadership, communication, and interview excellence',
      color: '#3B82F6',
      colorClass: 'blue',
      modules: ['m12', 'm13', 'm14'],
      bossQuizId: 'boss-day4'
    }
  ],
  modules: {
    m01: {
      id: 'm01',
      title: 'Oil & Gas 101',
      subtitle: 'From Crude to Products',
      day: 1,
      estimatedMinutes: 45,
      xpReward: 100,
      icon: '🛢️',
      dataVar: 'MODULE_M01',
      quizVar: 'QUIZ_Q01',
      quizId: 'q01'
    },
    m02: {
      id: 'm02',
      title: 'Refinery Operations',
      subtitle: 'Deep Dive into Process Units',
      day: 1,
      estimatedMinutes: 45,
      xpReward: 100,
      icon: '🏭',
      dataVar: 'MODULE_M02',
      quizVar: 'QUIZ_Q02',
      quizId: 'q02'
    },
    m03: {
      id: 'm03',
      title: 'Advanced Process Control',
      subtitle: 'APC & Model Predictive Control',
      day: 1,
      estimatedMinutes: 60,
      xpReward: 150,
      icon: '🎛️',
      dataVar: 'MODULE_M03',
      quizVar: 'QUIZ_Q03',
      quizId: 'q03'
    },
    m04: {
      id: 'm04',
      title: 'Real-Time Optimization',
      subtitle: 'RTO — The Economic Brain',
      day: 1,
      estimatedMinutes: 45,
      xpReward: 150,
      icon: '📈',
      dataVar: 'MODULE_M04',
      quizVar: 'QUIZ_Q04',
      quizId: 'q04'
    },
    m05: {
      id: 'm05',
      title: 'AI & ML Fundamentals',
      subtitle: 'The Technology Behind the Magic',
      day: 2,
      estimatedMinutes: 75,
      xpReward: 150,
      icon: '🤖',
      dataVar: 'MODULE_M05',
      quizVar: 'QUIZ_Q05',
      quizId: 'q05'
    },
    m06: {
      id: 'm06',
      title: 'Industrial Data & Systems',
      subtitle: 'OT, IT, and Data Historians',
      day: 2,
      estimatedMinutes: 45,
      xpReward: 100,
      icon: '📊',
      dataVar: 'MODULE_M06',
      quizVar: 'QUIZ_Q06',
      quizId: 'q06'
    },
    m07: {
      id: 'm07',
      title: 'AI in Refineries',
      subtitle: '6 High-Value Use Cases',
      day: 2,
      estimatedMinutes: 75,
      xpReward: 200,
      icon: '🔬',
      dataVar: 'MODULE_M07',
      quizVar: 'QUIZ_Q07',
      quizId: 'q07'
    },
    m08: {
      id: 'm08',
      title: 'AI Cybersecurity',
      subtitle: 'Protecting Industrial AI Systems',
      day: 3,
      estimatedMinutes: 60,
      xpReward: 150,
      icon: '🛡️',
      dataVar: 'MODULE_M08',
      quizVar: 'QUIZ_Q08',
      quizId: 'q08'
    },
    m09: {
      id: 'm09',
      title: 'AI Transformation Strategy',
      subtitle: 'Framework for Industrial AI',
      day: 3,
      estimatedMinutes: 75,
      xpReward: 200,
      icon: '🗺️',
      dataVar: 'MODULE_M09',
      quizVar: 'QUIZ_Q09',
      quizId: 'q09'
    },
    m10: {
      id: 'm10',
      title: 'Technology Architecture',
      subtitle: 'Stack, Vendors & Decisions',
      day: 3,
      estimatedMinutes: 45,
      xpReward: 100,
      icon: '⚡',
      dataVar: 'MODULE_M10',
      quizVar: 'QUIZ_Q10',
      quizId: 'q10'
    },
    m11: {
      id: 'm11',
      title: 'Agile & MLOps',
      subtitle: 'Delivering AI at Speed',
      day: 3,
      estimatedMinutes: 60,
      xpReward: 150,
      icon: '🔄',
      dataVar: 'MODULE_M11',
      quizVar: 'QUIZ_Q11',
      quizId: 'q11'
    },
    m12: {
      id: 'm12',
      title: 'Leading AI Transformation',
      subtitle: 'What the Role Actually Requires',
      day: 4,
      estimatedMinutes: 60,
      xpReward: 200,
      icon: '👁️',
      dataVar: 'MODULE_M12',
      quizVar: 'QUIZ_Q12',
      quizId: 'q12'
    },
    m13: {
      id: 'm13',
      title: 'Stakeholder Communication',
      subtitle: 'Win the Room, Every Time',
      day: 4,
      estimatedMinutes: 45,
      xpReward: 150,
      icon: '🤝',
      dataVar: 'MODULE_M13',
      quizVar: 'QUIZ_Q13',
      quizId: 'q13'
    },
    m14: {
      id: 'm14',
      title: 'Interview Scenarios',
      subtitle: 'Case Studies & Power Answers',
      day: 4,
      estimatedMinutes: 60,
      xpReward: 200,
      icon: '🏆',
      dataVar: 'MODULE_M14',
      quizVar: 'QUIZ_Q14',
      quizId: 'q14'
    }
  },

  /** Get day config by ID */
  getDay(dayId) {
    return this.days.find(d => d.id === dayId) || null;
  },

  /** Get day config for a module */
  getDayForModule(moduleId) {
    const mod = this.modules[moduleId];
    if (!mod) return null;
    return this.days.find(d => d.number === mod.day) || null;
  },

  /** Get ordered list of all module IDs */
  getModuleOrder() {
    return Object.keys(this.modules);
  },

  /** Get module IDs for a given day number */
  getModulesForDay(dayNum) {
    return Object.values(this.modules)
      .filter(m => m.day === dayNum)
      .map(m => m.id);
  }
};
