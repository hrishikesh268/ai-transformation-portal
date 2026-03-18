/* Module M10 — Technology Architecture */
window.MODULE_M10 = {
  id: 'm10',
  title: 'Technology Architecture',
  subtitle: 'Stack, Vendors & Decisions',
  sections: [
    {
      id: 'm10-s01',
      type: 'intro',
      title: 'The Industrial AI Technology Stack',
      content: `<p>Technology architecture decisions made early in an AI program are notoriously hard to reverse. Choosing the wrong data platform, the wrong cloud vendor, or the wrong AI framework can lock a refinery into years of technical debt. This module gives you the vocabulary and framework to make — and advise on — these decisions confidently.</p>
      <p class="mt-3">The industrial AI stack spans four layers: Edge Computing, Industrial Data Platform, AI/ML Platform, and Application Layer. Each layer has different make-vs-buy tradeoffs and vendor landscape.</p>`,
      keyPoints: [
        "Architecture decisions in Month 1 determine what's possible in Year 3",
        'The stack has four layers: Edge → Data Platform → AI/ML Platform → Applications',
        'Make vs. buy decisions depend on competitive differentiation and internal capability',
        'Cloud-agnostic design prevents vendor lock-in for the most critical layers'
      ]
    },
    {
      id: 'm10-s02',
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
      id: 'm10-s03',
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
              <li>→ Generic predictive maintenance</li>
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
      id: 'm10-s04',
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
  diagram: {
    title: 'The Four-Layer Industrial AI Technology Stack',
    description: 'From plant floor edge computing up to user-facing applications — each layer has distinct vendors, responsibilities, and make-vs-buy considerations.',
    svgContent: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 860 380" font-family="Arial, sans-serif">' +
      '<rect width="860" height="380" fill="#0f172a" rx="10"/>' +
      '<text x="430" y="28" text-anchor="middle" font-size="14" font-weight="bold" fill="#f1f5f9">Industrial AI Technology Stack — 4 Layers</text>' +
      // Layer 4: Application (top)
      '<rect x="40" y="46" width="780" height="70" fill="#1e293b" rx="8" stroke="#10b981" stroke-width="2"/>' +
      '<rect x="40" y="46" width="200" height="70" fill="#10b981" opacity="0.2" rx="8"/>' +
      '<text x="140" y="78" text-anchor="middle" font-size="13" font-weight="bold" fill="#34d399">LAYER 4</text>' +
      '<text x="140" y="98" text-anchor="middle" font-size="11" fill="#6ee7b7">Application Layer</text>' +
      '<text x="450" y="70" text-anchor="middle" font-size="10" fill="#94a3b8">Predictive maintenance dashboards · Optimisation UIs · Operator alerts</text>' +
      '<text x="450" y="88" text-anchor="middle" font-size="10" fill="#64748b">Vendors: Aspen Mtell · GE Predix · SparkCognition · Custom Built</text>' +
      '<text x="780" y="82" text-anchor="middle" font-size="10" fill="#34d399" font-weight="bold">BUILD ⬆</text>' +
      // Arrow
      '<polygon points="430,120 420,130 440,130" fill="#475569"/>' +
      // Layer 3: AI/ML Platform
      '<rect x="40" y="135" width="780" height="70" fill="#1e293b" rx="8" stroke="#8b5cf6" stroke-width="2"/>' +
      '<rect x="40" y="135" width="200" height="70" fill="#8b5cf6" opacity="0.2" rx="8"/>' +
      '<text x="140" y="167" text-anchor="middle" font-size="13" font-weight="bold" fill="#a78bfa">LAYER 3</text>' +
      '<text x="140" y="187" text-anchor="middle" font-size="11" fill="#c4b5fd">AI/ML Platform</text>' +
      '<text x="450" y="159" text-anchor="middle" font-size="10" fill="#94a3b8">Model training · Experiment tracking · Model registry · Deployment · Monitoring</text>' +
      '<text x="450" y="177" text-anchor="middle" font-size="10" fill="#64748b">Vendors: Azure ML · AWS SageMaker · Google Vertex AI · DataRobot · C3.ai</text>' +
      '<text x="780" y="171" text-anchor="middle" font-size="10" fill="#a78bfa" font-weight="bold">BUY/BUILD</text>' +
      // Arrow
      '<polygon points="430,209 420,219 440,219" fill="#475569"/>' +
      // Layer 2: Data Platform
      '<rect x="40" y="224" width="780" height="70" fill="#1e293b" rx="8" stroke="#3b82f6" stroke-width="2"/>' +
      '<rect x="40" y="224" width="200" height="70" fill="#3b82f6" opacity="0.2" rx="8"/>' +
      '<text x="140" y="256" text-anchor="middle" font-size="13" font-weight="bold" fill="#60a5fa">LAYER 2</text>' +
      '<text x="140" y="276" text-anchor="middle" font-size="11" fill="#93c5fd">Industrial Data Platform</text>' +
      '<text x="450" y="248" text-anchor="middle" font-size="10" fill="#94a3b8">Time-series historian · Cloud data lake · Streaming pipeline · Data governance</text>' +
      '<text x="450" y="266" text-anchor="middle" font-size="10" fill="#64748b">Vendors: OSIsoft PI (65% market) · Honeywell Uniformance · Azure Data Explorer</text>' +
      '<text x="780" y="260" text-anchor="middle" font-size="10" fill="#60a5fa" font-weight="bold">BUY ⬆</text>' +
      // Arrow
      '<polygon points="430,298 420,308 440,308" fill="#475569"/>' +
      // Layer 1: Edge
      '<rect x="40" y="313" width="780" height="52" fill="#1e293b" rx="8" stroke="#f59e0b" stroke-width="2"/>' +
      '<rect x="40" y="313" width="200" height="52" fill="#f59e0b" opacity="0.2" rx="8"/>' +
      '<text x="140" y="336" text-anchor="middle" font-size="13" font-weight="bold" fill="#fbbf24">LAYER 1</text>' +
      '<text x="140" y="354" text-anchor="middle" font-size="11" fill="#fcd34d">Edge Computing</text>' +
      '<text x="450" y="336" text-anchor="middle" font-size="10" fill="#94a3b8">Plant floor servers · Low-latency AI inference · Local data processing</text>' +
      '<text x="450" y="354" text-anchor="middle" font-size="10" fill="#64748b">Vendors: Dell EMC · HPE · Siemens · AWS Outposts · Rockwell Automation</text>' +
      '<text x="780" y="344" text-anchor="middle" font-size="10" fill="#fbbf24" font-weight="bold">BUY ⬆</text>' +
      '</svg>'
  },
  video: {
    videoId: 'VwVg9jCtqaU',
    title: 'Machine Learning Zero to Hero (Google I/O)',
    start: 120,
    end: 420,
    placement: 'm10-s03',
    description: "Google's ML Zero to Hero talk gives you a developer's perspective on building ML in production — the same challenges (data pipelines, model serving, monitoring) you will face in industrial AI architecture decisions."
  },
  glossary: [
    { term: 'OSIsoft PI', definition: 'The leading industrial time-series data historian used in 65% of refineries worldwide. Now owned by AVEVA.' },
    { term: 'MLOps', definition: 'Machine Learning Operations — DevOps practices applied to ML model development, deployment, and monitoring lifecycle.' },
    { term: 'Data Lake', definition: 'Centralized storage repository holding large volumes of raw data in native format until needed for analysis.' },
    { term: 'Edge Computing', definition: 'Data processing performed at or near the source of data generation, rather than in a centralized cloud.' },
    { term: 'API', definition: 'Application Programming Interface — contract defining how software components communicate, enabling integration between systems.' }
  ]
};
