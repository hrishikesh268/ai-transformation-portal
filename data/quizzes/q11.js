window.QUIZ_Q11 = {
  id: 'q11',
  moduleId: 'm11',
  title: 'Agile & MLOps — Knowledge Check',
  questions: [
    {
      id: 'q11-01',
      type: 'mcq',
      question: 'A refinery\'s project management office insists on using a waterfall methodology for the AI predictive maintenance program: full requirements specification first, then data collection, then model development, then testing, then deployment — all in sequence with no overlap. Why does waterfall fail specifically for AI projects?',
      options: [
        'Waterfall fails because AI projects always take longer than planned and waterfall does not allow for schedule adjustments',
        'Waterfall fails because AI projects are inherently exploratory — you cannot fully specify requirements until you have seen the data, and model performance on real data frequently invalidates assumptions made during requirements. Agile\'s iterative loops allow teams to learn from data and adjust approach without restarting the entire project',
        'Waterfall fails because it requires too much documentation, which slows down data scientists',
        'Waterfall works fine for AI projects — the problem is that AI teams do not follow waterfall discipline rigorously enough'
      ],
      correctIndex: 1,
      explanation: 'The core incompatibility between waterfall and AI is the exploratory nature of ML development. In waterfall, requirements are locked before work begins — but AI requirements depend on what the data reveals. You cannot specify which features are predictive until you have explored the data. You cannot specify model performance thresholds until you have a baseline. You cannot specify the deployment interface until you know what the model outputs. When initial assumptions prove wrong (which they always do), waterfall forces a costly restart. Agile\'s 2-week sprint cycles allow the team to incorporate learning from data exploration into the next sprint\'s plan, adjust the approach as the data reveals its structure, and deliver incremental value rather than waiting months for a big-bang deployment.',
      interviewNote: 'Articulating why waterfall fails for AI — with the specific mechanism (exploratory nature, data dependency) — is stronger than just saying "AI needs agile." The mechanism is the insight.'
    },
    {
      id: 'q11-02',
      type: 'mcq',
      question: 'Sprint 0 is the preparatory sprint before model development begins in an industrial AI project. What is its primary purpose?',
      options: [
        'Sprint 0 is used to write detailed technical specifications and architecture diagrams before any data work begins',
        'Sprint 0 is used to conduct data discovery: accessing actual data sources, assessing data quality, identifying gaps, validating that the labeled events needed for supervised ML exist, and confirming the technical feasibility of the use case before committing to development',
        'Sprint 0 is used to build the deployment infrastructure so it is ready when the model is complete',
        'Sprint 0 is optional — experienced AI teams can begin model development immediately and address data issues as they arise'
      ],
      correctIndex: 1,
      explanation: 'Sprint 0 is the most important sprint in an industrial AI project and is frequently skipped, resulting in painful mid-project discoveries. Its purpose is data due diligence: Can we actually access the historian? Does the CMMS have failure labels in the right format and time range? Are there enough labeled failure events to train a supervised model? Is the data quality acceptable or will it require months of cleaning? What is the actual tag naming for the variables we need? Sprint 0 answers these questions before the team commits to a 3-month development roadmap. A Sprint 0 that reveals data problems saves far more time than it consumes — because the alternative is discovering those problems in Sprint 4 after significant investment.',
      interviewNote: 'Sprint 0 is a concept that immediately resonates with experienced practitioners because they have all suffered from projects that skipped it. Naming it and explaining it specifically demonstrates you have done this work before.'
    },
    {
      id: 'q11-03',
      type: 'mcq',
      question: 'A data science team declares their compressor failure prediction model "done" because it achieved 87% recall on the validation set. As the transformation leader, what additional criteria must be met before the model is truly ready for production deployment?',
      options: [
        'The model is done — 87% recall on the validation set is a strong result and the team should proceed to deployment immediately',
        'The model must also achieve 90%+ precision before deployment, because false positives will cause alert fatigue',
        'The Definition of Done for ML in production requires: validated performance on held-out data (met), business stakeholder sign-off that the performance meets operational requirements, integration with the operator alert workflow, monitoring infrastructure to detect model drift, operator training on how to interpret and act on alerts, and a documented retraining process with a named owner',
        'The model must be retrained on data from at least 5 other refineries to prove generalizability before it can be deployed at this site'
      ],
      correctIndex: 2,
      explanation: 'Model accuracy is necessary but far from sufficient for production readiness. The Definition of Done for an industrial AI deployment is a comprehensive checklist: technical performance (validation metrics, edge case testing), business validation (operators and process engineers have reviewed predictions and confirmed they are actionable), alert integration (predictions flow to the operator interface with the right format and priority), monitoring (drift detection is running with defined thresholds and alert procedures), training (operators understand what the alert means and what to do), and maintenance ownership (a named person is responsible for retraining when drift is detected). A model deployed without these elements will either be ignored by operators or fail silently without anyone noticing.',
      interviewNote: 'The full Definition of Done — not just model accuracy — is a concept that distinguishes practitioners who have deployed industrial AI from those who have only built models in controlled environments. It directly addresses the "last mile" problem.'
    },
    {
      id: 'q11-04',
      type: 'mcq',
      question: 'What is "shadow mode" deployment in industrial AI, and why is it a mandatory step before a model goes live?',
      options: [
        'Shadow mode is a security testing technique where penetration testers mimic attacker behavior against the AI system before go-live',
        'Shadow mode means the model runs in parallel with normal operations, generating predictions that are recorded and reviewed by the team but not shown to operators and not used to make any operational decisions — allowing validation of real-world performance before any operational dependency is created',
        'Shadow mode means the model\'s algorithm is kept hidden from operators to prevent gaming of the predictions',
        'Shadow mode is the period between model training and deployment during which the model is tested against synthetic data scenarios'
      ],
      correctIndex: 1,
      explanation: 'Shadow mode is the critical validation step between model training and live operation. During shadow mode, the model runs continuously on real-time data and generates predictions — but those predictions are not surfaced to operators and have no operational consequences. The AI team reviews the predictions against actual outcomes, measures precision and recall on live data (which may differ significantly from historical validation data), identifies systematic errors, and calibrates operator expectations. Shadow mode typically runs for 4-8 weeks for predictive maintenance applications. It answers the question: "Does this model behave the way we expected when operating on real live data?" — a question that validation on historical data alone cannot answer. Only after shadow mode validates real-world performance should operator-visible alerts be activated.',
      interviewNote: 'Shadow mode is one of the most important deployment practices to know and advocate for. Any vendor or data science team that wants to skip shadow mode and go directly to live alerts is creating unnecessary operational risk and organizational resistance.'
    },
    {
      id: 'q11-05',
      type: 'mcq',
      question: 'An AI quality prediction model that performed well at deployment has been in production for 14 months. The process engineering team reports that its predictions have become noticeably less accurate over the past 2 months. What is the most likely explanation and the correct response?',
      options: [
        'The model has a bug that was introduced during a software update — roll back to the previous version',
        'Model drift: the statistical relationship between inputs and outputs has shifted due to changes in operating conditions, crude slate, catalyst age, or equipment degradation. The correct response is to retrain the model on more recent historical data that reflects current operating conditions',
        'The model has been overfitting progressively — increasing model complexity over time until it no longer generalizes',
        'The data pipeline has developed a systematic error that is corrupting model inputs — audit the data pipeline integrity before any model changes'
      ],
      correctIndex: 1,
      explanation: 'Model drift is the degradation in model performance over time as the real-world data distribution or underlying relationships change. In a refinery context, common causes include: crude slate changes (the model was trained on Arab Medium but the refinery switched to a lighter blend), catalyst deactivation (performance relationships shift as catalyst ages through a cycle), equipment degradation (heat exchanger fouling changes the relationship between measured temperatures and actual process state), and seasonal variation in ambient conditions. The correct response is to retrain the model on a data window that reflects current operating conditions — typically the most recent 6-12 months of data weighted more heavily in training. Monitoring for drift (tracking prediction error over time with defined thresholds) is the preventive practice that catches this before it becomes a significant operational problem.',
      interviewNote: 'Model drift is a concept that every ML practitioner knows intellectually but that many AI programs fail to operationalize with monitoring and retraining processes. Being able to name it, explain its industrial causes, and prescribe the response demonstrates practical deployment experience.'
    },
    {
      id: 'q11-06',
      type: 'mcq',
      question: 'What is the primary purpose of an MLOps platform (such as MLflow or Kubeflow) in an industrial AI program?',
      options: [
        'MLOps platforms replace data scientists by automating model development — you provide the data and the platform builds the model',
        'MLOps platforms automate and standardize the full ML lifecycle: experiment tracking (logging model versions, hyperparameters, and performance metrics), model versioning (knowing exactly which model version is in production), deployment pipelines (packaging and deploying models consistently), and monitoring (tracking model performance and triggering retraining when drift is detected)',
        'MLOps platforms are primarily used for security monitoring of AI systems — they detect anomalous model behavior that could indicate an adversarial attack',
        'MLOps platforms are equivalent to traditional DevOps CI/CD pipelines and are only relevant for software teams, not data science teams'
      ],
      correctIndex: 1,
      explanation: 'MLOps (Machine Learning Operations) platforms solve the operational complexity that emerges when moving from 1-2 models to a portfolio of 10-50+ models in production. Without MLOps, teams lose track of which model version is deployed, cannot reproduce past experiments, cannot consistently deploy model updates, and have no systematic way to detect when model performance degrades. MLflow (open-source, widely used) provides experiment tracking, model registry, and deployment tooling. Kubeflow runs on Kubernetes and provides scalable training and serving infrastructure. The value of MLOps is not in model building — it is in model governance and operational sustainability, ensuring that a portfolio of models can be maintained reliably by a team without heroic individual effort.',
      interviewNote: null
    },
    {
      id: 'q11-07',
      type: 'truefalse',
      question: 'True or False: When deploying a new AI model to a fleet of 50 compressors, a canary deployment approach — activating the model for 5 compressors first, validating performance for 2-3 weeks, then rolling out to the remaining 45 — is safer than deploying to all 50 simultaneously.',
      options: ['True', 'False'],
      correctIndex: 0,
      explanation: 'True. Canary deployment (also called a phased rollout) is the risk-management best practice for industrial AI deployments. Activating a new model for approximately 10% of assets first limits the blast radius if the model behaves unexpectedly in production: instead of 50 compressors generating incorrect alerts, only 5 are affected. The 2-3 week validation window on the canary group answers: Is alert volume reasonable? Are predictions actionable? Are there any systematic errors on specific compressor subtypes? Do operators understand the alerts? If the canary group validates, the rollout proceeds with confidence. If problems emerge, the scope of disruption is limited and the investigation is focused. This is directly analogous to canary deployments in software engineering.',
      interviewNote: 'Canary deployment is one of the deployment practices that translates directly from software engineering to industrial AI. Knowing the terminology and the rationale demonstrates that you apply engineering discipline to AI deployment, not just model development.'
    },
    {
      id: 'q11-08',
      type: 'truefalse',
      question: 'True or False: For a well-resourced industrial AI team with access to clean historical data, a realistic timeline from project kick-off to first live production deployment of a predictive maintenance model is approximately 2-4 months.',
      options: ['True', 'False'],
      correctIndex: 0,
      explanation: 'True. For a well-prepared team with good data access, the typical timeline is: Sprint 0 (2 weeks, data discovery and validation) → Sprints 1-4 (8 weeks, feature engineering, model development, validation) → Shadow mode (4-8 weeks, live validation without operator visibility) → Production go-live (with operator training). This yields a total of approximately 4 months to first production deployment. Teams that claim 2-4 week timelines are typically building a demo, not a production-grade deployment with monitoring, operator workflows, and governance. Teams that quote 12-18 months are usually over-engineering or not working iteratively. The 4-month benchmark is widely cited across industrial AI practitioners and aligns with the agile sprint cadence described above.',
      interviewNote: 'The 4-month first deployment benchmark is a key number to know. In interviews, it demonstrates realistic calibration — neither over-promising nor under-delivering. It also sets appropriate stakeholder expectations when starting a new engagement.'
    },
    {
      id: 'q11-09',
      type: 'scenario',
      question: 'You are building the AI team for a refinery\'s first production deployment. You have budget for one full-time hire. The candidates are: (A) a senior data scientist with strong Python/ML skills, (B) a data engineer with experience building industrial data pipelines and API integrations, (C) a UX designer specialized in operator interface design, and (D) a project manager with agile experience. Which hire creates the most value at this stage, and why?',
      options: [
        'Hire the senior data scientist (A) — model quality is the primary constraint on AI value',
        'Hire the data engineer (B) — without reliable, clean data pipelines, the data scientist cannot build or deploy anything; data engineering is consistently the bottleneck in industrial AI programs',
        'Hire the UX designer (C) — operator adoption depends on interface design, which is the most common failure mode',
        'Hire the project manager (D) — coordination complexity is the primary constraint in cross-functional AI programs'
      ],
      correctIndex: 1,
      explanation: 'The data engineer is the highest-leverage first hire for an industrial AI program because data pipeline work is consistently the bottleneck. 60-70% of time in industrial AI projects is spent on data collection, integration, cleaning, and pipeline maintenance — not model development. Without a data engineer, the data scientist spends most of their time doing data plumbing: extracting data from PI, cleaning historian records, joining CMMS work orders, building feature pipelines. A data engineer frees the data scientist to focus on modeling and dramatically accelerates the path from data to production-ready features. Data engineers with industrial experience (PI Web API, Modbus/OPC-UA integration, time-series data handling) are particularly scarce and valuable. The UX designer and project manager become critical hires at a later stage.',
      interviewNote: 'The "data engineer first" answer is a strong signal of practical experience. It runs counter to the instinct to hire modelers first, and explaining the bottleneck rationale demonstrates you understand how industrial AI programs actually spend their time.'
    },
    {
      id: 'q11-10',
      type: 'scenario',
      question: 'You are reviewing a sprint retrospective for an AI team 10 weeks into a predictive maintenance project. The team reports: data pipeline is running, 18 months of historian data has been extracted, feature engineering is complete, and the initial model achieves 74% recall with 71% precision on the validation set. The team lead says: "We need 4 more sprints to improve the model to 85% recall before we can show it to operators." What is your response as the transformation leader?',
      options: [
        'Agree — 74% recall is too low to show operators and the team is right to focus on model improvement before any business engagement',
        'Deploy immediately — 74% recall is acceptable for production and the team is wasting time optimizing',
        'Enter shadow mode now with the 74% recall model to generate real-world performance data, while the team continues model improvement in parallel. Real-world performance on live data is more informative than validation set improvements, and shadow mode data will reveal whether the actual bottleneck is model accuracy or alert workflow design, feature coverage, or operator usability',
        'Pause model development and conduct a full data quality audit — 74% recall suggests the training data has quality issues that must be resolved before further modeling'
      ],
      correctIndex: 2,
      explanation: 'Entering shadow mode while continuing model improvement is the correct agile response. 74% recall on validation data is a reasonable starting point for shadow mode — it is not strong enough for live operator-facing deployment, but it is strong enough to generate meaningful real-world validation data. Shadow mode serves two purposes: it validates whether the validation set performance reflects real-world performance (validation recall and production recall can differ significantly), and it reveals whether the bottleneck is actually model accuracy or something else (alert format, workflow integration, feature coverage gaps). Four sprints of pure model optimization without real-world feedback is the kind of local optimization that loses the forest for the trees. The combined approach — shadow mode running while the team continues to improve the model — is faster to first operator-facing deployment than sequential optimization.',
      interviewNote: null
    }
  ]
};
