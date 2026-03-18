/* Module M11 — Agile & MLOps */
window.MODULE_M11 = {
  id: 'm11',
  title: 'Agile & MLOps',
  subtitle: 'Delivering AI at Speed',
  sections: [
    {
      id: 'm11-s01',
      type: 'intro',
      title: 'Why AI Programs Need Agile',
      content: `<p>Traditional waterfall project management kills AI programs. Requirements change. Data surprises you. Models don't behave as expected. The only way to deliver AI in a refinery context is through agile methodologies adapted for industrial environments.</p>
      <p class="mt-3">MLOps — the practice of applying DevOps principles to machine learning — is what separates one-off AI pilots from scalable production systems. Without MLOps, models degrade silently, data pipelines break without notice, and AI value evaporates.</p>`,
      keyPoints: [
        'Waterfall fails for AI because requirements are discovered during development',
        'Agile for AI uses 2-week sprints with working model demos — not documents',
        'MLOps closes the "last mile" gap between model training and production value',
        '87% of ML models never make it to production — MLOps is why the survivors do'
      ]
    },
    {
      id: 'm11-s02',
      type: 'concept',
      title: 'Agile for Industrial AI — Adapted Scrum',
      content: `<p>Standard Scrum requires adaptation for industrial AI projects. Here's BCG's industrial AI Scrum framework:</p>
      <div class="mt-4 space-y-3">
        <div class="p-4 bg-slate-900/50 rounded-xl border border-amber-700/30">
          <p class="font-bold text-amber-300 text-sm">Sprint 0 (2 weeks): Data Discovery</p>
          <p class="text-slate-300 text-sm mt-1">Before any modeling, a dedicated data sprint: assess availability, quality, and labeling. Define data pipeline architecture. This prevents the #1 AI project failure mode: discovering data problems after committing to a solution.</p>
        </div>
        <div class="p-4 bg-slate-900/50 rounded-xl border border-blue-700/30">
          <p class="font-bold text-blue-300 text-sm">Sprints 1-3 (6 weeks): MVP Model</p>
          <p class="text-slate-300 text-sm mt-1">Build a minimum viable model using available data. Validate with domain experts. Get operators to react to predictions. Value: learning what matters before investing in perfect data.</p>
        </div>
        <div class="p-4 bg-slate-900/50 rounded-xl border border-purple-700/30">
          <p class="font-bold text-purple-300 text-sm">Sprints 4-8 (10 weeks): Production Hardening</p>
          <p class="text-slate-300 text-sm mt-1">Real-time data pipeline. Integration with DCS/APC. Operator UI development. Performance testing. Security review. Change management and training.</p>
        </div>
        <div class="p-4 bg-slate-900/50 rounded-xl border border-emerald-700/30">
          <p class="font-bold text-emerald-300 text-sm">Ongoing: MLOps Operations</p>
          <p class="text-slate-300 text-sm mt-1">Model performance monitoring. Automated retraining triggers. A/B testing of model updates. Drift detection. Incident response. Continuous improvement cycle.</p>
        </div>
      </div>`,
      keyPoints: [
        'Sprint 0 data discovery prevents the most common AI project failure',
        'MVP model in 6 weeks gets operator feedback before major investment',
        'Production hardening takes longer than model building — plan for it',
        'MLOps operations is ongoing work — not a one-time deployment'
      ]
    },
    {
      id: 'm11-s03',
      type: 'deep-dive',
      title: 'The MLOps Pipeline in Detail',
      content: `<p>A mature MLOps pipeline covers the full model lifecycle:</p>
      <div class="mt-4 grid grid-cols-1 gap-2 text-sm">
        <div class="flex gap-3 p-3 bg-slate-900/50 rounded-xl border border-slate-700">
          <span class="text-blue-400 font-bold shrink-0 w-6">1</span>
          <div><strong class="text-white">Data Pipeline</strong><br><span class="text-slate-300">Automated ingestion from OSIsoft PI → data validation → feature engineering → feature store</span></div>
        </div>
        <div class="flex gap-3 p-3 bg-slate-900/50 rounded-xl border border-slate-700">
          <span class="text-blue-400 font-bold shrink-0 w-6">2</span>
          <div><strong class="text-white">Model Training</strong><br><span class="text-slate-300">Versioned training runs, experiment tracking (MLflow), hyperparameter optimisation, model registry</span></div>
        </div>
        <div class="flex gap-3 p-3 bg-slate-900/50 rounded-xl border border-slate-700">
          <span class="text-blue-400 font-bold shrink-0 w-6">3</span>
          <div><strong class="text-white">CI/CD for ML</strong><br><span class="text-slate-300">Automated model validation before deployment, staged rollout (shadow mode → limited → full), rollback capability</span></div>
        </div>
        <div class="flex gap-3 p-3 bg-slate-900/50 rounded-xl border border-slate-700">
          <span class="text-blue-400 font-bold shrink-0 w-6">4</span>
          <div><strong class="text-white">Model Monitoring</strong><br><span class="text-slate-300">Real-time prediction quality tracking, data drift detection, performance degradation alerts, automated retraining triggers</span></div>
        </div>
        <div class="flex gap-3 p-3 bg-slate-900/50 rounded-xl border border-slate-700">
          <span class="text-blue-400 font-bold shrink-0 w-6">5</span>
          <div><strong class="text-white">Governance &amp; Audit</strong><br><span class="text-slate-300">Model lineage tracking, explainability logs, regulatory compliance documentation, change approval workflows</span></div>
        </div>
      </div>`,
      keyPoints: [
        'MLflow for experiment tracking is the industry standard — know it',
        'Shadow mode deployment (running parallel to operators) builds trust before going live',
        'Data drift is the #1 reason models degrade in production — monitor it',
        'In regulated environments (safety-critical AI), full audit trails are mandatory'
      ]
    },
    {
      id: 'm11-s04',
      type: 'summary',
      title: 'Agile & MLOps Summary',
      content: `<p>You now understand how to deliver AI programs at speed while maintaining production quality. Key principles:</p>
      <div class="mt-4 space-y-2">
        <div class="flex gap-3 p-3 bg-violet-900/20 border border-violet-700/30 rounded-xl">
          <span>🔄</span><div><strong class="text-white text-sm">Agile Delivery</strong><br><span class="text-slate-400 text-xs">Sprint 0 (data) → MVP (6 wks) → Production hardening → Continuous improvement</span></div>
        </div>
        <div class="flex gap-3 p-3 bg-violet-900/20 border border-violet-700/30 rounded-xl">
          <span>⚙️</span><div><strong class="text-white text-sm">MLOps Pipeline</strong><br><span class="text-slate-400 text-xs">Data pipeline → Training → CI/CD → Monitoring → Governance</span></div>
        </div>
        <div class="flex gap-3 p-3 bg-violet-900/20 border border-violet-700/30 rounded-xl">
          <span>📊</span><div><strong class="text-white text-sm">Key Metric</strong><br><span class="text-slate-400 text-xs">Time to production value (target: 8-12 weeks for first use case)</span></div>
        </div>
      </div>`,
      keyPoints: [
        'Agile is not optional for AI — it is the only methodology that works',
        'MLOps is what keeps models delivering value after deployment — not optional either',
        'Shadow mode is your best change management tool — let operators compare AI vs. their judgment',
        'Day 3 complete! Continue to Day 4: Lead Like a Pro'
      ]
    }
  ],
  diagram: {
    title: 'MLOps Lifecycle — From Data to Production to Improvement',
    description: 'The complete ML operations loop: data pipeline feeds training, CI/CD deploys models, monitoring detects drift, triggering retraining in a continuous cycle.',
    svgContent: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 860 340" font-family="Arial, sans-serif">' +
      '<rect width="860" height="340" fill="#0f172a" rx="10"/>' +
      '<text x="430" y="28" text-anchor="middle" font-size="14" font-weight="bold" fill="#f1f5f9">MLOps Lifecycle — Continuous Delivery for ML</text>' +
      // Central "Production Value" circle
      '<circle cx="430" cy="180" r="55" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>' +
      '<text x="430" y="174" text-anchor="middle" font-size="11" font-weight="bold" fill="#fbbf24">PRODUCTION</text>' +
      '<text x="430" y="190" text-anchor="middle" font-size="11" font-weight="bold" fill="#fbbf24">VALUE</text>' +
      '<text x="430" y="206" text-anchor="middle" font-size="9" fill="#94a3b8">87% never reach here</text>' +
      // Stage 1: Data Pipeline (top-left)
      '<rect x="40" y="50" width="150" height="65" fill="#1e293b" rx="8" stroke="#3b82f6" stroke-width="1.5"/>' +
      '<text x="115" y="74" text-anchor="middle" font-size="11" font-weight="bold" fill="#60a5fa">1. DATA PIPELINE</text>' +
      '<text x="115" y="91" text-anchor="middle" font-size="9" fill="#94a3b8">Ingest → Validate</text>' +
      '<text x="115" y="106" text-anchor="middle" font-size="9" fill="#94a3b8">Feature engineer → Store</text>' +
      // Stage 2: Model Training (top-right)
      '<rect x="670" y="50" width="150" height="65" fill="#1e293b" rx="8" stroke="#8b5cf6" stroke-width="1.5"/>' +
      '<text x="745" y="74" text-anchor="middle" font-size="11" font-weight="bold" fill="#a78bfa">2. TRAINING</text>' +
      '<text x="745" y="91" text-anchor="middle" font-size="9" fill="#94a3b8">MLflow experiments</text>' +
      '<text x="745" y="106" text-anchor="middle" font-size="9" fill="#94a3b8">Model registry</text>' +
      // Stage 3: CI/CD Deployment (right)
      '<rect x="690" y="158" width="150" height="65" fill="#1e293b" rx="8" stroke="#10b981" stroke-width="1.5"/>' +
      '<text x="765" y="182" text-anchor="middle" font-size="11" font-weight="bold" fill="#34d399">3. CI/CD</text>' +
      '<text x="765" y="199" text-anchor="middle" font-size="9" fill="#94a3b8">Shadow → Limited → Full</text>' +
      '<text x="765" y="214" text-anchor="middle" font-size="9" fill="#94a3b8">Auto rollback</text>' +
      // Stage 4: Monitoring (bottom-right)
      '<rect x="670" y="250" width="150" height="65" fill="#1e293b" rx="8" stroke="#ef4444" stroke-width="1.5"/>' +
      '<text x="745" y="274" text-anchor="middle" font-size="11" font-weight="bold" fill="#f87171">4. MONITORING</text>' +
      '<text x="745" y="291" text-anchor="middle" font-size="9" fill="#94a3b8">Drift detection</text>' +
      '<text x="745" y="306" text-anchor="middle" font-size="9" fill="#94a3b8">Performance alerts</text>' +
      // Stage 5: Governance (bottom-left)
      '<rect x="40" y="250" width="150" height="65" fill="#1e293b" rx="8" stroke="#f59e0b" stroke-width="1.5"/>' +
      '<text x="115" y="274" text-anchor="middle" font-size="11" font-weight="bold" fill="#fbbf24">5. GOVERNANCE</text>' +
      '<text x="115" y="291" text-anchor="middle" font-size="9" fill="#94a3b8">Audit trails</text>' +
      '<text x="115" y="306" text-anchor="middle" font-size="9" fill="#94a3b8">Compliance docs</text>' +
      // Arrows connecting stages
      '<path d="M190,82 Q300,55 375,140" stroke="#475569" stroke-width="1.5" fill="none" marker-end="url(#arr)"/>' +
      '<path d="M670,82 Q560,55 485,140" stroke="#475569" stroke-width="1.5" fill="none" marker-end="url(#arr)"/>' +
      '<path d="M690,190 Q600,180 485,180" stroke="#475569" stroke-width="1.5" fill="none" marker-end="url(#arr)"/>' +
      '<path d="M670,282 Q560,260 485,220" stroke="#475569" stroke-width="1.5" fill="none" marker-end="url(#arr)"/>' +
      '<path d="M190,282 Q300,260 375,220" stroke="#475569" stroke-width="1.5" fill="none" marker-end="url(#arr)"/>' +
      // Retraining feedback loop arrow
      '<path d="M115,250 Q50,180 115,115" stroke="#3b82f6" stroke-width="1.5" fill="none" stroke-dasharray="4,3" marker-end="url(#arr2)"/>' +
      '<text x="22" y="186" text-anchor="middle" font-size="8" fill="#60a5fa" transform="rotate(-90,22,186)">Retrain Loop</text>' +
      '<defs><marker id="arr" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#475569"/></marker>' +
      '<marker id="arr2" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#3b82f6"/></marker></defs>' +
      '</svg>'
  },
  video: {
    videoId: '06-AZXmwHjo',
    title: 'A Chat with Andrew Ng on MLOps: From Model-centric to Data-centric AI',
    start: 120,
    end: 420,
    placement: 'm11-s03',
    description: "Andrew Ng (AI pioneer) explains the shift to data-centric AI and why MLOps matters — directly applicable to the industrial AI pipelines you'll be managing in refineries."
  },
  glossary: [
    { term: 'MLOps', definition: 'Machine Learning Operations — practices for reliable, scalable production ML systems.' },
    { term: 'MLflow', definition: 'Open-source platform for managing ML experiment tracking, model registry, and deployment.' },
    { term: 'Data Drift', definition: 'Change in the statistical properties of input data over time, causing model predictions to degrade.' },
    { term: 'Shadow Mode', definition: 'Running an AI model in parallel with human decisions without acting on its outputs — used to build trust and validate performance.' },
    { term: 'Sprint', definition: 'Fixed-length iteration (typically 2 weeks) in Agile methodology, ending with a working deliverable review.' }
  ]
};
