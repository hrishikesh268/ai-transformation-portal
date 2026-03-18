/* Module M09 — AI Transformation Strategy */
window.MODULE_M09 = {
  id: 'm09',
  title: 'AI Transformation Strategy',
  subtitle: 'Framework for Industrial AI',
  sections: [
    {
      id: 'm09-s01',
      type: 'intro',
      title: 'Building a Winning AI Transformation Strategy',
      content: `<p>Technology alone doesn't transform a refinery. Thousands of AI projects fail not because the algorithms were wrong, but because the strategy was weak. This module gives you BCG's proven framework for designing and executing industrial AI transformations that actually deliver.</p>
      <p class="mt-3">A BCG study of 850 industrial AI projects found that only 11% achieved significant scale and lasting impact. The difference between the 11% and the 89% was not technical capability — it was strategy, governance, and change management.</p>`,
      keyPoints: [
        'Only 11% of industrial AI projects achieve scale — strategy is the differentiator',
        'Use case selection, data readiness, and talent are the three strategy pillars',
        "BCG's ADOPT framework: Assess, Design, Operationalize, Prove, Transform",
        'Without an AI strategy, you end up with isolated pilots that never scale'
      ]
    },
    {
      id: 'm09-s02',
      type: 'concept',
      title: "BCG's AI Transformation Framework",
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
        "Build capability alongside delivery — don't deliver projects, deliver capability",
        '36 months is a realistic timeline for full-scale transformation'
      ]
    },
    {
      id: 'm09-s03',
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
            <li>→ Data availability &amp; quality</li>
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
      id: 'm09-s04',
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
          <p class="font-bold text-purple-300 text-sm">Pillar 3: People &amp; Operating Model</p>
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
      id: 'm09-s05',
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
      id: 'm09-s06',
      type: 'summary',
      title: 'Transformation Strategy Summary',
      content: `<p>You now have BCG's complete AI transformation strategy framework. You can walk into any refinery engagement and articulate:</p>
      <div class="mt-4 space-y-2">
        <div class="flex gap-3 p-3 bg-purple-900/20 border border-purple-700/30 rounded-xl">
          <span>🗺️</span><div><strong class="text-white text-sm">The 5-Stage Framework</strong><br><span class="text-slate-400 text-xs">Assess → Design → Operationalize → Prove → Transform</span></div>
        </div>
        <div class="flex gap-3 p-3 bg-purple-900/20 border border-purple-700/30 rounded-xl">
          <span>📊</span><div><strong class="text-white text-sm">Use Case Prioritization</strong><br><span class="text-slate-400 text-xs">Value vs. Feasibility matrix — start with Quick Wins</span></div>
        </div>
        <div class="flex gap-3 p-3 bg-purple-900/20 border border-purple-700/30 rounded-xl">
          <span>🏛️</span><div><strong class="text-white text-sm">3 Pillars of Readiness</strong><br><span class="text-slate-400 text-xs">Data Foundation · Technology Architecture · People &amp; Operating Model</span></div>
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
  diagram: {
    title: "BCG's 5-Stage AI Transformation Framework",
    description: 'Five stages from initial assessment through full organisational transformation. Only 11% of AI programs reach Stage 5.',
    svgContent: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 310" font-family="Arial, sans-serif">' +
      '<rect width="900" height="310" fill="#0f172a" rx="10"/>' +
      '<text x="450" y="28" text-anchor="middle" font-size="14" font-weight="bold" fill="#f1f5f9">BCG AI Transformation Framework — 5 Stages</text>' +
      '<rect x="30" y="50" width="155" height="205" fill="#1e293b" rx="8" stroke="#f59e0b" stroke-width="2"/>' +
      '<rect x="30" y="50" width="155" height="34" fill="#f59e0b" rx="8"/><rect x="30" y="72" width="155" height="12" fill="#f59e0b"/>' +
      '<text x="107" y="74" text-anchor="middle" font-size="12" font-weight="bold" fill="#0f172a">1. ASSESS</text>' +
      '<text x="107" y="100" text-anchor="middle" font-size="10" fill="#fbbf24">Weeks 1-4</text>' +
      '<text x="107" y="120" text-anchor="middle" font-size="9" fill="#94a3b8">Digital maturity</text>' +
      '<text x="107" y="136" text-anchor="middle" font-size="9" fill="#94a3b8">Map data assets</text>' +
      '<text x="107" y="152" text-anchor="middle" font-size="9" fill="#94a3b8">Top 10 use cases</text>' +
      '<text x="107" y="168" text-anchor="middle" font-size="9" fill="#94a3b8">Peer benchmark</text>' +
      '<text x="107" y="238" text-anchor="middle" font-size="9" fill="#fbbf24" font-weight="bold">→ AI Opp. Map</text>' +
      '<polygon points="190,155 200,145 210,155 200,165" fill="#475569"/>' +
      '<rect x="215" y="50" width="155" height="205" fill="#1e293b" rx="8" stroke="#3b82f6" stroke-width="2"/>' +
      '<rect x="215" y="50" width="155" height="34" fill="#3b82f6" rx="8"/><rect x="215" y="72" width="155" height="12" fill="#3b82f6"/>' +
      '<text x="292" y="74" text-anchor="middle" font-size="12" font-weight="bold" fill="#fff">2. DESIGN</text>' +
      '<text x="292" y="100" text-anchor="middle" font-size="10" fill="#93c5fd">Months 1-2</text>' +
      '<text x="292" y="120" text-anchor="middle" font-size="9" fill="#94a3b8">Architecture blueprint</text>' +
      '<text x="292" y="136" text-anchor="middle" font-size="9" fill="#94a3b8">Data governance</text>' +
      '<text x="292" y="152" text-anchor="middle" font-size="9" fill="#94a3b8">Operating model</text>' +
      '<text x="292" y="168" text-anchor="middle" font-size="9" fill="#94a3b8">Change mgmt plan</text>' +
      '<text x="292" y="238" text-anchor="middle" font-size="9" fill="#93c5fd" font-weight="bold">→ Roadmap</text>' +
      '<polygon points="375,155 385,145 395,155 385,165" fill="#475569"/>' +
      '<rect x="400" y="50" width="155" height="205" fill="#1e293b" rx="8" stroke="#8b5cf6" stroke-width="2"/>' +
      '<rect x="400" y="50" width="155" height="34" fill="#8b5cf6" rx="8"/><rect x="400" y="72" width="155" height="12" fill="#8b5cf6"/>' +
      '<text x="477" y="74" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">3. OPERATIONALIZE</text>' +
      '<text x="477" y="100" text-anchor="middle" font-size="10" fill="#c4b5fd">Months 3-12</text>' +
      '<text x="477" y="120" text-anchor="middle" font-size="9" fill="#94a3b8">Deploy 2-3 use cases</text>' +
      '<text x="477" y="136" text-anchor="middle" font-size="9" fill="#94a3b8">Build capability</text>' +
      '<text x="477" y="152" text-anchor="middle" font-size="9" fill="#94a3b8">Establish MLOps</text>' +
      '<text x="477" y="168" text-anchor="middle" font-size="9" fill="#94a3b8">Capture early wins</text>' +
      '<text x="477" y="238" text-anchor="middle" font-size="9" fill="#c4b5fd" font-weight="bold">→ Live Models</text>' +
      '<polygon points="560,155 570,145 580,155 570,165" fill="#475569"/>' +
      '<rect x="585" y="50" width="130" height="205" fill="#1e293b" rx="8" stroke="#10b981" stroke-width="2"/>' +
      '<rect x="585" y="50" width="130" height="34" fill="#10b981" rx="8"/><rect x="585" y="72" width="130" height="12" fill="#10b981"/>' +
      '<text x="650" y="74" text-anchor="middle" font-size="12" font-weight="bold" fill="#fff">4. PROVE</text>' +
      '<text x="650" y="100" text-anchor="middle" font-size="10" fill="#6ee7b7">Months 12-24</text>' +
      '<text x="650" y="120" text-anchor="middle" font-size="9" fill="#94a3b8">Prove ROI at scale</text>' +
      '<text x="650" y="136" text-anchor="middle" font-size="9" fill="#94a3b8">Scale to all units</text>' +
      '<text x="650" y="152" text-anchor="middle" font-size="9" fill="#94a3b8">Embed in KPIs</text>' +
      '<text x="650" y="238" text-anchor="middle" font-size="9" fill="#6ee7b7" font-weight="bold">→ Verified ROI</text>' +
      '<polygon points="720,155 730,145 740,155 730,165" fill="#475569"/>' +
      '<rect x="745" y="50" width="128" height="205" fill="#1e293b" rx="8" stroke="#f43f5e" stroke-width="2"/>' +
      '<rect x="745" y="50" width="128" height="34" fill="#f43f5e" rx="8"/><rect x="745" y="72" width="128" height="12" fill="#f43f5e"/>' +
      '<text x="809" y="74" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">5. TRANSFORM</text>' +
      '<text x="809" y="100" text-anchor="middle" font-size="10" fill="#fda4af">Months 24-36+</text>' +
      '<text x="809" y="120" text-anchor="middle" font-size="9" fill="#94a3b8">AI-native ops model</text>' +
      '<text x="809" y="136" text-anchor="middle" font-size="9" fill="#94a3b8">Comp. differentiation</text>' +
      '<text x="809" y="152" text-anchor="middle" font-size="9" fill="#94a3b8">Self-sustaining CoE</text>' +
      '<text x="809" y="238" text-anchor="middle" font-size="9" fill="#fda4af" font-weight="bold">→ AI-Led Refinery</text>' +
      '<text x="450" y="290" text-anchor="middle" font-size="10" fill="#64748b">Only 11% of industrial AI programs reach Stage 5 — strategy and change management are the key differentiators</text>' +
      '</svg>'
  },
  video: {
    videoId: 'reUZRyXxUs4',
    title: 'How AI Could Empower Any Business — Andrew Ng (TED)',
    start: 0,
    end: 360,
    placement: 'm09-s03',
    description: "Andrew Ng explains how AI transformation works across industries — the same principles BCG applies in refineries. Watch for his use case selection thinking and the vision of AI as infrastructure."
  },
  glossary: [
    { term: 'AI CoE', definition: 'Center of Excellence — dedicated team responsible for AI strategy, standards, talent, and reusable capabilities across the organization.' },
    { term: 'MLOps', definition: 'Machine Learning Operations — practices and tools for deploying, monitoring, and maintaining ML models in production.' },
    { term: 'Digital Maturity', definition: "Assessment of an organisation's current capabilities across data, technology, process, and culture dimensions." },
    { term: 'Use Case', definition: 'A specific application of AI technology to solve a defined business problem with measurable value.' },
    { term: 'ROI', definition: 'Return on Investment — ratio of net benefit to program cost; typically measured over 3-5 years for AI programs.' }
  ]
};
