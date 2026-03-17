/* Module M10 — Technology Architecture */
window.MODULE_M10 = {
  id: 'm10',
  title: 'Technology Architecture',
  subtitle: 'Stack, Vendors & Decisions',
  sections: [
    {
      type: 'intro',
      title: 'The Industrial AI Technology Stack',
      content: `<p>Technology architecture decisions made early in an AI program are notoriously hard to reverse. Choosing the wrong data platform, the wrong cloud vendor, or the wrong AI framework can lock a refinery into years of technical debt. This module gives you the vocabulary and framework to make — and advise on — these decisions confidently.</p>
      <p class="mt-3">The industrial AI stack spans four layers: Edge Computing, Industrial Data Platform, AI/ML Platform, and Application Layer. Each layer has different make-vs-buy tradeoffs and vendor landscape.</p>`,
      keyPoints: [
        'Architecture decisions in Month 1 determine what\'s possible in Year 3',
        'The stack has four layers: Edge → Data Platform → AI/ML Platform → Applications',
        'Make vs. buy decisions depend on competitive differentiation and internal capability',
        'Cloud-agnostic design prevents vendor lock-in for the most critical layers'
      ]
    },
    {
      type: 'concept',
      title: 'The Four-Layer Industrial AI Stack',
      content: `<div class="space-y-3">
        <div class="p-4 bg-amber-900/15 border border-amber-700/30 rounded-xl">
          <p class="font-bold text-amber-300 text-sm">Layer 1: Edge Computing</p>
          <p class="text-slate-300 text-sm mt-1"><strong>What:</strong> Computing hardware at the plant floor that processes sensor data locally with low latency.<br><strong>Why:</strong> Some AI inference (predictive maintenance alerts) must happen in milliseconds — too fast for cloud round-trip.<br><strong>Vendors:</strong> Dell EMC, HPE, Siemens, Rockwell Automation, AWS Outposts</p>
        </div>
        <div class="p-4 bg-blue-900/15 border border-blue-700/30 rounded-xl">
          <p class="font-bold text-blue-300 text-sm">Layer 2: Industrial Data Platform</p>
          <p class="text-slate-300 text-sm mt-1"><strong>What:</strong> Time-series data historian + cloud data lake + streaming pipeline.<br><strong>Why:</strong> The foundation of all AI — quality data infrastructure is non-negotiable.<br><strong>Vendors:</strong> OSIsoft PI (market leader), Honeywell Uniformance, AspenTech, Azure Data Explorer, AWS Timestream</p>
        </div>
        <div class="p-4 bg-purple-900/15 border border-purple-700/30 rounded-xl">
          <p class="font-bold text-purple-300 text-sm">Layer 3: AI/ML Platform</p>
          <p class="text-slate-300 text-sm mt-1"><strong>What:</strong> Environment for developing, training, deploying, and monitoring AI models.<br><strong>Why:</strong> Model lifecycle management (MLOps) is critical for production AI.<br><strong>Vendors:</strong> Azure ML, AWS SageMaker, Google Vertex AI, DataRobot, C3.ai</p>
        </div>
        <div class="p-4 bg-emerald-900/15 border border-emerald-700/30 rounded-xl">
          <p class="font-bold text-emerald-300 text-sm">Layer 4: Application Layer</p>
          <p class="text-slate-300 text-sm mt-1"><strong>What:</strong> User-facing AI applications (predictive maintenance dashboards, optimization UIs).<br><strong>Why:</strong> This is what operators see — adoption depends on good UX.<br><strong>Vendors:</strong> Custom built, Aspen Mtell, GE Predix, Akselos, SparkCognition</p>
        </div>
      </div>`,
      keyPoints: [
        'OSIsoft PI is in 65% of refineries worldwide — the de facto data historian standard',
        'Cloud platform choice (Azure/AWS/Google) should match corporate IT direction',
        'Application layer is where custom development adds most client-specific value',
        'Edge computing is often underestimated — plan for it in the architecture from Day 1'
      ]
    },
    {
      type: 'deep-dive',
      title: 'Make vs. Buy Decision Framework',
      content: `<p>A critical strategic question in every AI program: what do you build yourself vs. what do you buy from vendors?</p>
      <div class="mt-4 p-4 bg-slate-900/50 rounded-xl border border-slate-700">
        <p class="font-semibold text-white text-sm mb-3">BCG Make vs. Buy Matrix</p>
        <div class="grid grid-cols-2 gap-3 text-sm">
          <div class="p-3 bg-emerald-900/20 border border-emerald-700/30 rounded-xl">
            <p class="font-bold text-emerald-300">BUY (Vendor Solutions)</p>
            <ul class="text-slate-300 mt-2 space-y-1 text-xs">
              <li>→ Data infrastructure (historian)</li>
              <li>→ Cloud AI/ML platforms</li>
              <li>→ Cybersecurity tools</li>
              <li>→ Generic predictive maint.</li>
            </ul>
          </div>
          <div class="p-3 bg-blue-900/20 border border-blue-700/30 rounded-xl">
            <p class="font-bold text-blue-300">BUILD (Custom AI)</p>
            <ul class="text-slate-300 mt-2 space-y-1 text-xs">
              <li>→ Proprietary process models</li>
              <li>→ Site-specific optimization</li>
              <li>→ Competitive differentiators</li>
              <li>→ Integration logic</li>
            </ul>
          </div>
        </div>
        <p class="text-slate-400 text-xs mt-3">Rule of thumb: Buy the "pipes", build the "thinking"</p>
      </div>`,
      keyPoints: [
        '"Buy the pipes, build the thinking" — infrastructure is commodity, algorithms are differentiated',
        'Vendor lock-in risk is highest at the data platform layer — insist on open APIs',
        'C3.ai and similar AI-for-industry platforms reduce build time but limit customization',
        'Internal ML engineers are needed even for vendor-heavy approaches'
      ]
    },
    {
      type: 'summary',
      title: 'Technology Architecture Summary',
      content: `<p>You now understand the complete industrial AI technology stack and the key decisions involved. In client conversations, you can:</p>
      <div class="mt-4 space-y-2">
        <div class="flex gap-3 p-3 bg-blue-900/20 border border-blue-700/30 rounded-xl">
          <span>⚡</span><div><strong class="text-white text-sm">Name all four layers</strong><br><span class="text-slate-400 text-xs">Edge → Data Platform → AI/ML Platform → Application Layer</span></div>
        </div>
        <div class="flex gap-3 p-3 bg-blue-900/20 border border-blue-700/30 rounded-xl">
          <span>🏪</span><div><strong class="text-white text-sm">Name key vendors at each layer</strong><br><span class="text-slate-400 text-xs">OSIsoft PI, Azure ML, AWS SageMaker, Aspen Mtell, C3.ai</span></div>
        </div>
        <div class="flex gap-3 p-3 bg-blue-900/20 border border-blue-700/30 rounded-xl">
          <span>🔧</span><div><strong class="text-white text-sm">Apply Make vs. Buy logic</strong><br><span class="text-slate-400 text-xs">Buy infrastructure, build differentiated AI capabilities</span></div>
        </div>
      </div>`,
      keyPoints: [
        'Technology architecture is strategy in hardware form — get the foundations right',
        'The data platform layer is the single most important investment',
        'OSIsoft PI knowledge is a credibility booster in refinery conversations',
        'Continue to Module 11: Agile & MLOps'
      ]
    }
  ],
  glossary: [
    { term: 'OSIsoft PI', definition: 'The leading industrial time-series data historian used in 65% of refineries worldwide. Now owned by AVEVA.' },
    { term: 'MLOps', definition: 'Machine Learning Operations — DevOps practices applied to ML model development, deployment, and monitoring lifecycle.' },
    { term: 'Data Lake', definition: 'Centralized storage repository holding large volumes of raw data in native format until needed for analysis.' },
    { term: 'Edge Computing', definition: 'Data processing performed at or near the source of data generation, rather than in a centralized cloud.' },
    { term: 'API', definition: 'Application Programming Interface — contract defining how software components communicate, enabling integration between systems.' }
  ]
};
