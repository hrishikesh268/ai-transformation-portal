/* Module M09 — AI Transformation Strategy */
window.MODULE_M09 = {
  id: 'm09',
  title: 'AI Transformation Strategy',
  subtitle: 'Framework for Industrial AI',
  sections: [
    {
      type: 'intro',
      title: 'Building a Winning AI Transformation Strategy',
      content: `<p>Technology alone doesn't transform a refinery. Thousands of AI projects fail not because the algorithms were wrong, but because the strategy was weak. This module gives you BCG's proven framework for designing and executing industrial AI transformations that actually deliver.</p>
      <p class="mt-3">A BCG study of 850 industrial AI projects found that only 11% achieved significant scale and lasting impact. The difference between the 11% and the 89% was not technical capability — it was strategy, governance, and change management.</p>`,
      keyPoints: [
        'Only 11% of industrial AI projects achieve scale — strategy is the differentiator',
        'Use case selection, data readiness, and talent are the three strategy pillars',
        'BCG\'s ADOPT framework: Assess, Design, Operationalize, Prove, Transform',
        'Without an AI strategy, you end up with isolated pilots that never scale'
      ]
    },
    {
      type: 'concept',
      title: 'BCG\'s AI Transformation Framework',
      content: `<p>BCG uses a five-stage framework for industrial AI transformation:</p>
      <div class="mt-4 space-y-3">
        <div class="p-4 bg-amber-900/15 border border-amber-700/30 rounded-xl">
          <p class="font-bold text-amber-300 text-sm">Stage 1: Assess (Weeks 1-4)</p>
          <p class="text-slate-300 text-sm mt-1">Digital maturity assessment. Map data assets. Identify top 10 value opportunities. Benchmark against peers. Output: AI opportunity map and prioritized business case.</p>
        </div>
        <div class="p-4 bg-blue-900/15 border border-blue-700/30 rounded-xl">
          <p class="font-bold text-blue-300 text-sm">Stage 2: Design (Months 1-2)</p>
          <p class="text-slate-300 text-sm mt-1">Technology architecture blueprint. Data governance framework. Operating model design. Change management plan. Output: Transformation roadmap with phased delivery plan.</p>
        </div>
        <div class="p-4 bg-purple-900/15 border border-purple-700/30 rounded-xl">
          <p class="font-bold text-purple-300 text-sm">Stage 3: Operationalize (Months 3-12)</p>
          <p class="text-slate-300 text-sm mt-1">Deploy first 2-3 high-value use cases. Build internal capability. Establish MLOps pipeline. Capture early wins to build momentum.</p>
        </div>
        <div class="p-4 bg-emerald-900/15 border border-emerald-700/30 rounded-xl">
          <p class="font-bold text-emerald-300 text-sm">Stages 4-5: Prove & Transform (Months 12-36)</p>
          <p class="text-slate-300 text-sm mt-1">Prove ROI at scale. Build AI CoE. Scale to all sites. Embed AI into operating model. Achieve competitive differentiation.</p>
        </div>
      </div>`,
      keyPoints: [
        'The Assess phase is the most critical — scope creep kills more AI programs than bad algorithms',
        'Always start with a use case that has a clear metric, data available, and an engaged sponsor',
        'Build capability alongside delivery — don\'t deliver projects, deliver capability',
        '36 months is a realistic timeline for full-scale transformation'
      ]
    },
    {
      type: 'deep-dive',
      title: 'Use Case Prioritization Matrix',
      content: `<p>Not all use cases are equal. BCG prioritizes AI use cases using a two-dimensional matrix:</p>
      <div class="mt-4 grid grid-cols-2 gap-4 text-sm">
        <div>
          <p class="font-semibold text-white mb-2">Value Dimensions (Y-axis)</p>
          <ul class="text-slate-300 space-y-1">
            <li>→ Annual economic impact ($M)</li>
            <li>→ Strategic importance</li>
            <li>→ Safety/compliance benefit</li>
            <li>→ Scalability across sites</li>
          </ul>
        </div>
        <div>
          <p class="font-semibold text-white mb-2">Feasibility Dimensions (X-axis)</p>
          <ul class="text-slate-300 space-y-1">
            <li>→ Data availability & quality</li>
            <li>→ Technical complexity</li>
            <li>→ Organizational readiness</li>
            <li>→ Time to value</li>
          </ul>
        </div>
      </div>
      <div class="mt-4 p-4 bg-slate-900/50 rounded-xl border border-slate-700">
        <p class="text-sm font-semibold text-white mb-2">The Four Quadrants</p>
        <p class="text-slate-300 text-sm"><strong class="text-emerald-400">Quick Wins</strong> (High value, High feasibility): Start here. <strong class="text-blue-400">Strategic Bets</strong> (High value, Low feasibility): Build toward. <strong class="text-amber-400">Fill-ins</strong> (Low value, High feasibility): Do if cheap. <strong class="text-red-400">Avoid</strong> (Low value, Low feasibility): Don't bother.</p>
      </div>`,
      keyPoints: [
        'Quick wins build credibility and fund the program — always find one in Phase 1',
        'Predictive maintenance is almost always a "quick win" — high value, mature technology',
        'Whole-refinery optimization is a "strategic bet" — worth doing, requires patient capital',
        'Use cases that lack data are "strategic bets" at best — fix data first'
      ]
    },
    {
      type: 'concept',
      title: 'The 3 Pillars of AI Readiness',
      content: `<p>Before deploying AI, a refinery must have three pillars in place:</p>
      <div class="mt-4 space-y-3">
        <div class="p-4 bg-slate-900/50 rounded-xl border border-amber-700/30">
          <p class="font-bold text-amber-300 text-sm">Pillar 1: Data Foundation</p>
          <p class="text-slate-300 text-sm mt-1">60-70% of AI program time is data work. You need: real-time data streaming from OT, a data historian or cloud data lake, labeled failure data for maintenance, and a data governance framework.</p>
          <p class="text-amber-400 text-xs mt-2">BCG typical finding: 40-60% of sensor data is unreliable or unavailable</p>
        </div>
        <div class="p-4 bg-slate-900/50 rounded-xl border border-blue-700/30">
          <p class="font-bold text-blue-300 text-sm">Pillar 2: Technology Architecture</p>
          <p class="text-slate-300 text-sm mt-1">Edge computing for low-latency AI. Cloud for training and analytics. Secure OT/IT connectivity. MLOps infrastructure for model lifecycle management. API layer for integration with DCS/APC.</p>
        </div>
        <div class="p-4 bg-slate-900/50 rounded-xl border border-purple-700/30">
          <p class="font-bold text-purple-300 text-sm">Pillar 3: People & Operating Model</p>
          <p class="text-slate-300 text-sm mt-1">AI will not be adopted if operators don't trust it. Need: AI CoE, data scientists embedded in operations, change management program, and new KPIs that reward AI-driven behaviors.</p>
        </div>
      </div>`,
      keyPoints: [
        'Data foundation is the most underestimated pillar — budget 40% of program for data work',
        'Technology architecture decisions made in Month 1 are hard to reverse in Year 3',
        'The operating model change is where most transformations fail — culture eats strategy',
        'AI CoE should be embedded with operations — not a distant IT team'
      ]
    },
    {
      type: 'case-study',
      title: 'Strategy in Action: National Oil Company Transformation',
      content: `<p>BCG led a national oil company (NOC) in the Middle East through a full AI transformation strategy:</p>
      <div class="mt-4 space-y-3">
        <div class="p-4 bg-slate-900/50 rounded-xl border border-slate-700 text-sm">
          <p class="font-bold text-white">Context</p>
          <p class="text-slate-300 mt-1">5-refinery system, 1.2M bpd total capacity. Previous AI pilots had failed to scale. New leadership committed to transformation but lacked a coherent strategy.</p>
        </div>
        <div class="p-4 bg-blue-900/15 border border-blue-700/30 rounded-xl text-sm">
          <p class="font-bold text-blue-300">BCG Approach</p>
          <p class="text-slate-300 mt-1">8-week assessment across all 5 sites. Identified 23 high-value use cases. Prioritized top 8 for Phase 1. Designed unified data architecture (single cloud platform for all sites). Established AI CoE of 45 people.</p>
        </div>
        <div class="p-4 bg-emerald-900/15 border border-emerald-700/30 rounded-xl text-sm">
          <p class="font-bold text-emerald-300">18-Month Results</p>
          <p class="text-slate-300 mt-1">$85M annual benefit across all sites. 8 use cases in production. 45-person AI CoE operational. Two new data scientists promoted to operations leadership roles.</p>
        </div>
      </div>`,
      keyPoints: [
        'Unified data architecture across all sites is critical for scaling',
        'The AI CoE should evolve from BCG-led to client-led within 18-24 months',
        'Promoting AI champions into operations leadership embeds the capability',
        'Speed matters — 8-week assessment, not 6-month study'
      ]
    },
    {
      type: 'summary',
      title: 'Transformation Strategy Summary',
      content: `<p>You now have BCG\'s complete AI transformation strategy framework. You can walk into any refinery engagement and articulate:</p>
      <div class="mt-4 space-y-2">
        <div class="flex gap-3 p-3 bg-purple-900/20 border border-purple-700/30 rounded-xl">
          <span>🗺️</span><div><strong class="text-white text-sm">The 5-Stage Framework</strong><br><span class="text-slate-400 text-xs">Assess → Design → Operationalize → Prove → Transform</span></div>
        </div>
        <div class="flex gap-3 p-3 bg-purple-900/20 border border-purple-700/30 rounded-xl">
          <span>📊</span><div><strong class="text-white text-sm">Use Case Prioritization</strong><br><span class="text-slate-400 text-xs">Value vs. Feasibility matrix — start with Quick Wins</span></div>
        </div>
        <div class="flex gap-3 p-3 bg-purple-900/20 border border-purple-700/30 rounded-xl">
          <span>🏛️</span><div><strong class="text-white text-sm">3 Pillars of Readiness</strong><br><span class="text-slate-400 text-xs">Data Foundation · Technology Architecture · People & Operating Model</span></div>
        </div>
      </div>`,
      keyPoints: [
        'Strategy comes before technology — most programs get this backwards',
        'Quick wins in Phase 1 are not compromises — they are strategic investments in credibility',
        'Building client capability is as important as delivering use cases',
        'Continue to Module 10: Technology Architecture'
      ]
    }
  ],
  glossary: [
    { term: 'AI CoE', definition: 'Center of Excellence — dedicated team responsible for AI strategy, standards, talent, and reusable capabilities across the organization.' },
    { term: 'MLOps', definition: 'Machine Learning Operations — practices and tools for deploying, monitoring, and maintaining ML models in production.' },
    { term: 'Digital Maturity', definition: 'Assessment of an organization\'s current capabilities across data, technology, process, and culture dimensions.' },
    { term: 'Use Case', definition: 'A specific application of AI technology to solve a defined business problem with measurable value.' },
    { term: 'ROI', definition: 'Return on Investment — ratio of net benefit to program cost; typically measured over 3-5 years for AI programs.' }
  ]
};
