window.QUIZ_M07 = {
  id: 'q07',
  moduleId: 'm07',
  title: 'AI Applications in Refineries — Knowledge Check',
  questions: [
    {
      id: 'q07-01',
      type: 'mcq',
      question: 'A refinery has good dashboard reporting and KPI tracking. Engineers can pull historical trend data to investigate why a process upset happened last week. Which AI maturity stage does this represent, and what is the next logical step?',
      options: [
        'Stage 3 (Predictive) — the next step is Stage 4 (Prescriptive) optimization',
        'Stage 1-2 (Descriptive/Diagnostic) — the next step is Stage 3 (Predictive): deploying ML models to predict failures and quality deviations before they happen',
        'Stage 4 (Prescriptive) — the next step is Stage 5 (Autonomous) control',
        'Stage 2 (Diagnostic) — the next step is to improve the dashboard quality before adding AI'
      ],
      correctIndex: 1,
      explanation: 'Dashboards and historical trend analysis are Stage 1 (Descriptive) and Stage 2 (Diagnostic) capabilities. Both are looking backward — what happened and why. The next value-creating step is Stage 3 (Predictive): deploying ML models that look forward — predicting equipment failures, quality drift, and process upsets before they occur. This is where industrial AI starts generating distinct financial returns through prevented failures and tighter quality control.',
      interviewNote: 'Being able to place a refinery on the maturity scale and articulate the next step is a high-value framing in any transformation discussion.'
    },
    {
      id: 'q07-02',
      type: 'mcq',
      question: 'Why is predictive maintenance consistently the first AI use case deployed at most refineries?',
      options: [
        'It is technically the simplest AI application and requires very little data',
        'It combines high data readiness (historian + CMMS data typically exists), mature technology, clear financial return, and well-understood deployment patterns',
        'Regulatory requirements in oil and gas mandate predictive maintenance AI before other applications',
        'It is the only AI application that works without OT/IT integration'
      ],
      correctIndex: 1,
      explanation: 'Predictive maintenance typically leads the roadmap because all the prerequisites usually exist: historian data going back years, a CMMS with failure records providing labels, documented financial losses from unplanned failures, and a mature vendor ecosystem with proven implementations. The data pipeline challenge (PI + CMMS integration) is well-understood. The financial case is straightforward to quantify. These factors make it the lowest-risk, highest-confidence starting point for an industrial AI program.',
      interviewNote: null
    },
    {
      id: 'q07-03',
      type: 'mcq',
      question: 'A refinery deploys an anomaly detection system that generates 60 alerts per shift across the control room. After two weeks, operators have stopped acknowledging the alerts entirely. What is this phenomenon called, and what is the correct response?',
      options: [
        'System overload — the solution is to upgrade the server hardware',
        'Alert fatigue — the response is to tune the model sensitivity to reduce false positives and prioritize only high-confidence, high-severity alerts that require operator action',
        'Model underfitting — the model needs more training data to reduce false positives',
        'Integration failure — the alerts are being sent to the wrong system and should be redirected'
      ],
      correctIndex: 1,
      explanation: 'Alert fatigue is the phenomenon where excessive alerts cause operators to disengage from and ultimately ignore the alerting system. It is the single most common reason anomaly detection systems fail in practice. The correct response is to tune model sensitivity to reduce false positives (even at some cost to recall), filter to only high-priority alerts, and give operators tools to acknowledge and suppress known benign anomalies. A system generating 3-5 actionable high-confidence alerts per shift is far more valuable than one generating 60.',
      interviewNote: 'Alert fatigue is a concept that will resonate strongly in any interview with operational leaders. It demonstrates you understand the human factors dimension of AI adoption, not just the technology.'
    },
    {
      id: 'q07-04',
      type: 'mcq',
      question: 'What is the fundamental difference between anomaly detection and predictive maintenance in an industrial AI context?',
      options: [
        'Anomaly detection is more accurate than predictive maintenance because it uses more variables',
        'Predictive maintenance monitors specific equipment using supervised learning with failure labels; anomaly detection monitors the overall process using unsupervised learning without labels, detecting any deviation from normal',
        'Anomaly detection is a subset of predictive maintenance that applies to pumps and compressors',
        'Predictive maintenance works on real-time data; anomaly detection only works on historical data'
      ],
      correctIndex: 1,
      explanation: 'These are distinct approaches with different purposes. Predictive maintenance is asset-specific and supervised — it monitors a specific pump or compressor, uses labeled failure data to train a model, and predicts a specific failure event. Anomaly detection is process-wide and unsupervised — it monitors many variables across a process unit simultaneously, learns what normal looks like without labels, and flags any unusual state. Both are valuable and complementary; predictive maintenance targets known failure modes while anomaly detection catches unexpected deviations.',
      interviewNote: null
    },
    {
      id: 'q07-05',
      type: 'mcq',
      question: 'A soft sensor predicts diesel sulfur content continuously from process data. The current specification limit is 10 ppm sulfur. The soft sensor allows operators to target 8 ppm instead of their current practice of 6 ppm (a 2 ppm safety margin). What is the business value of this tighter operation?',
      options: [
        'Reduced safety risk — lower sulfur is always safer',
        'Increased hydrotreater throughput by processing more diesel per day',
        'Reduced hydrotreater severity (less hydrogen consumption, lower energy cost) while staying within spec — recovering margin from over-treating',
        'The ability to sell diesel as ultra-low sulfur diesel at a premium price'
      ],
      correctIndex: 2,
      explanation: 'The value of a soft sensor is operational tightening — staying closer to the specification limit without the risk of going off-spec. If operators can trust a real-time quality prediction, they can reduce the safety margin they need to maintain (from 4 ppm below spec to 2 ppm below spec). The smaller safety margin means less hydrogen is consumed in hydrotreating — lower energy costs and higher throughput of on-spec product. On a large hydrotreater, even a 0.5% reduction in hydrogen consumption is worth hundreds of thousands of dollars per year.',
      interviewNote: 'Being able to explain the value chain from soft sensor to financial benefit (quality measurement lag → safety margin → over-treatment cost) is a strong differentiator.'
    },
    {
      id: 'q07-06',
      type: 'mcq',
      question: 'Which of the following statements about AI for process optimization is correct?',
      options: [
        'Process optimization AI replaces APC and RTO systems, making them redundant',
        'Process optimization AI works best by being directly connected to control valves for autonomous setpoint adjustment from day one',
        'Process optimization AI learns empirical plant behavior from historical data to find optimization opportunities that the engineering models underlying APC/RTO miss, and is deployed in shadow mode before any live operation',
        'Process optimization AI is only applicable to gas processing plants, not crude oil refineries'
      ],
      correctIndex: 2,
      explanation: 'Process optimization AI complements rather than replaces APC/RTO. It learns from actual historical plant data the real-world relationships between operating conditions and outcomes — which drift from theoretical engineering models over time as catalysts degrade and equipment ages. Shadow mode deployment (where the AI generates recommendations but operators decide) is mandatory before any live optimization to build trust, validate predictions, and ensure the AI operates safely within constraints.',
      interviewNote: null
    },
    {
      id: 'q07-07',
      type: 'truefalse',
      question: 'True or False: The primary barrier to AI adoption at most refineries is that current AI technology is not mature enough to handle complex industrial processes.',
      options: ['True', 'False'],
      correctIndex: 1,
      explanation: 'False. The technology is mature and proven at scale across dozens of major refineries globally. The primary barriers are organizational and data-related: data quality issues, IT/OT integration complexity, operator trust and change resistance, unclear ownership of the AI program, model maintenance processes, and vendor over-promising. Shell, Saudi Aramco, ExxonMobil, and others have demonstrated that the technology works. The challenge is execution and change management, not technology limitations.',
      interviewNote: 'This framing — "the technology works; the challenge is organizational" — is one of the most important perspectives you can bring to an interview.'
    },
    {
      id: 'q07-08',
      type: 'scenario',
      question: 'You are presenting an AI roadmap to the plant head of a 150,000 bbl/day refinery. He says: "We tried AI two years ago with a software vendor. They promised 40% reduction in downtime. After 18 months, the model was ignored by our operators and the vendor had moved on. Why will this be different?" What is the most credible response?',
      options: [
        'This time we have better AI algorithms that are more accurate and easier to deploy',
        'We will use a different, more reputable vendor with a stronger track record',
        'We will start with a data quality audit, involve your operators in model development and validation, deploy in shadow mode for 6 months before operators are expected to act on alerts, and define clear model maintenance ownership so the capability does not decay after the vendor leaves',
        'We will guarantee the 40% reduction in downtime with a performance-based contract'
      ],
      correctIndex: 2,
      explanation: 'The plant head\'s question identifies the two most common failure modes: operator non-adoption and vendor dependency without internal capability. The credible answer addresses both directly: operator involvement in development and validation builds trust; shadow mode builds confidence before expectations are set; and explicit model maintenance ownership ensures the capability is sustained after the engagement. Better algorithms or a different vendor do not address the root causes. Performance guarantees are commercially risky and do not change the adoption dynamics.',
      interviewNote: 'This answer demonstrates you have analyzed why AI projects fail and have a systematic plan to avoid those failures — exactly what a transformation leader should do.'
    },
    {
      id: 'q07-09',
      type: 'scenario',
      question: 'A vendor pitches an AI platform for crude oil optimization, claiming their system increased refining margin by $3/barrel at a "similar refinery in the Middle East." Your refinery processes 100,000 bbl/day. What questions must you ask before evaluating this claim?',
      options: [
        'What programming language their AI models use, and whether it is compatible with your IT infrastructure',
        'How many employees their company has and how long they have been in business',
        'What crude types the reference refinery processed, whether the $3/barrel was realized on full throughput or marginal barrels, what data sources were integrated (including assay data), and whether the gain was independently verified or self-reported',
        'Whether the vendor can provide a demo using synthetic data before accessing any real plant data'
      ],
      correctIndex: 2,
      explanation: 'Vendor case study claims require rigorous due diligence. Crude optimization value is highly context-specific: the crude slate, refinery configuration, existing LP optimization quality, and market conditions all affect the achievable gain. Key questions: Was the gain on the full throughput or only the marginal optimization? Was it independently audited? What does "similar refinery" mean specifically? Was the assay data integration comparable to your situation? Without these answers, $3/barrel is an unverifiable marketing claim.',
      interviewNote: 'This questioning discipline — decomposing vendor ROI claims into their assumptions — is a core skill for an AI transformation leader. It protects the organization from over-committing to solutions that will underdeliver.'
    },
    {
      id: 'q07-10',
      type: 'scenario',
      question: 'You are 6 months into deploying a predictive maintenance model for compressors. The model has generated 12 alerts. Operations investigated 10 of them and found 7 were genuine early degradation signs that led to planned interventions. Three alerts were false positives, and 2 were not investigated at all. How would you characterize the state of the deployment, and what is the single most important action to take now?',
      options: [
        'The deployment is failing — 3 false positives and 2 ignored alerts means the model is not working',
        'The deployment is succeeding — 7 correct out of 10 investigated is 70% precision. The most important action is to understand why the 2 alerts were not investigated and fix the workflow so no alerts are ignored',
        'The model needs to be retrained immediately to eliminate the 3 false positives',
        'The deployment is complete — 70% precision is industry-standard and no further action is needed'
      ],
      correctIndex: 1,
      explanation: '70% precision (7 genuine alerts out of 10 investigated) is a solid result for an early predictive maintenance deployment — it means operators are finding real value. The critical issue is the 2 uninvestigated alerts, which represents a workflow failure, not a model failure. If operators are not acting on alerts, the ROI is not being captured and you risk missing a genuine failure. The priority is to understand the barrier (too busy? alert went to wrong person? alert was unclear?) and fix the workflow. Model refinement to reduce false positives is a secondary concern.',
      interviewNote: null
    }
  ]
};
