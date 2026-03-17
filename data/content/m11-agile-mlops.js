/* Module M11 — Agile & MLOps */
window.MODULE_M11 = {
  id: 'm11',
  title: 'Agile & MLOps',
  subtitle: 'Delivering AI at Speed',
  sections: [
    {
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
          <div><strong class="text-white">Model Training</strong><br><span class="text-slate-300">Versioned training runs, experiment tracking (MLflow), hyperparameter optimization, model registry</span></div>
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
          <div><strong class="text-white">Governance & Audit</strong><br><span class="text-slate-300">Model lineage tracking, explainability logs, regulatory compliance documentation, change approval workflows</span></div>
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
  glossary: [
    { term: 'MLOps', definition: 'Machine Learning Operations — practices for reliable, scalable production ML systems.' },
    { term: 'MLflow', definition: 'Open-source platform for managing ML experiment tracking, model registry, and deployment.' },
    { term: 'Data Drift', definition: 'Change in the statistical properties of input data over time, causing model predictions to degrade.' },
    { term: 'Shadow Mode', definition: 'Running an AI model in parallel with human decisions without acting on its outputs — used to build trust and validate performance.' },
    { term: 'Sprint', definition: 'Fixed-length iteration (typically 2 weeks) in Agile methodology, ending with a working deliverable review.' }
  ]
};
