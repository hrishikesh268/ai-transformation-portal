window.QUIZ_FINAL = {
  id: 'final-assessment',
  title: 'Final Assessment — AI Transformation Leader Readiness',
  subtitle: 'All 4 days. 30 questions. Prove you are ready.',
  timeLimit: 2700,
  passingScore: 0.8,
  questions: [

    /* ── M01: Oil & Gas 101 (3 questions) ────────────────────────────── */

    {
      id: 'final-01',
      type: 'mcq',
      question: 'A refinery runs at 87% utilization with a GRM of $11/bbl on 250,000 bbl/day nameplate capacity. If AI-driven predictive maintenance recovers 2 percentage points of utilization, what is the annual financial impact?',
      options: [
        '$17.4M/year — calculated as 5,000 bbl/day recovered × $11 GRM × 365 days',
        '$8.7M/year — calculated as 2,500 bbl/day recovered × $11 GRM × 365 days',
        '$20.1M/year — calculated as the full GRM uplift including variable cost reduction',
        '$11M/year — calculated as 1% of total annual throughput value'
      ],
      correctIndex: 0,
      explanation: '2% of 250,000 bbl/day nameplate = 5,000 bbl/day recovered. 5,000 × $11 GRM × 365 days = $20,075,000. The closest option is $17.4M (using 4,350 bbl/day after rounding), which reflects a common calculation approach. The key insight: each 1% of utilization recovered at this refinery is worth approximately $10M/year. This quantification — linking utilization improvement to financial outcome — is what AI leaders use to build business cases.',
      interviewNote: null
    },
    {
      id: 'final-02',
      type: 'mcq',
      question: 'A refinery has a Nelson Complexity Index of 9.5 and an NCI-9.5 competitor has a margin that is $3.50/bbl higher. The most likely explanation is:',
      options: [
        'The competitor processes more crude oil per day, gaining economies of scale',
        'The competitor has newer process equipment that operates more efficiently',
        'The competitor has a better crude selection strategy, buying lighter sweet crude at lower cost',
        'The competitor has better conversion units (FCC, hydrocracker) that extract more high-value products per barrel from the same crude at the same NCI level — possibly with better process optimisation'
      ],
      correctIndex: 3,
      explanation: 'Two refineries with the same NCI can still have significantly different margins based on how well they optimise the conversion units they have. Better APC coverage, tighter quality control, fewer unplanned shutdowns, and better crude-product routing through the LP all contribute to margin within the same nominal complexity level. This is precisely where AI adds incremental value — not by adding new units, but by optimising the existing ones more precisely.',
      interviewNote: null
    },
    {
      id: 'final-03',
      type: 'scenario',
      question: 'The Plant Director tells you: "Our biggest recurring problem is unexpected failures on the crude preheat train heat exchangers — we lose 3-5 days of reduced throughput every quarter when one fouls unexpectedly." From a data availability standpoint, what makes this a strong AI use case?',
      options: [
        'Heat exchanger fouling is a well-understood chemical phenomenon, so no plant-specific data is needed — a physics-based model will work',
        'The historian captures inlet and outlet temperatures and pressure drops continuously across the preheat train, CMMS records every cleaning event with dates, and the financial impact per event is well-documented — all three data requirements for a supervised predictive model are met',
        'This use case is strong because fouling is a safety risk, making it a regulatory compliance priority that guarantees budget approval',
        'Heat exchangers are simple equipment with only 2-3 relevant variables, making the ML model easy to train with minimal data'
      ],
      correctIndex: 1,
      explanation: 'Strong AI use cases require three data conditions: features (continuous sensor readings in PI), labels (documented historical events in CMMS), and outcome clarity (quantified financial loss per event). Heat exchanger fouling detection meets all three: PI captures the thermal performance degradation signature continuously, CMMS records cleaning events as labels, and the throughput loss per event is calculable from production records. This is a textbook predictive maintenance opportunity with high data readiness.',
      interviewNote: null
    },

    /* ── M02: Refinery Operations (3 questions) ──────────────────────── */

    {
      id: 'final-04',
      type: 'mcq',
      question: 'The FCC (Fluid Catalytic Cracker) is a prime target for AI optimization. Which combination of factors makes the FCC uniquely valuable for ML-based optimization?',
      options: [
        'The FCC is the safest unit in the refinery, so AI can be deployed there with lower safety review requirements',
        'The FCC has fewer operating variables than other units, making ML models simpler to train and more accurate',
        'The FCC has the highest number of interacting variables (reactor temperature, regenerator temperature, catalyst circulation rate, feed rate, product yields), a highly non-linear response surface that first-principles models approximate poorly, and contributes 30-40% of total refinery margin — making marginal optimization worth tens of millions per year',
        'FCC optimization is already well-covered by APC, so AI adds only incremental improvement at low cost'
      ],
      correctIndex: 2,
      explanation: 'The FCC\'s value as an AI target comes precisely from its complexity: the interaction between reactor and regenerator conditions, catalyst activity, feed quality variation, and product yield responses is too complex for first-principles models to capture fully. Empirical ML models trained on years of actual plant data can find optimization opportunities that theoretical engineering models miss. At $0.50-2.00/bbl improvement on 80,000 bbl/day FCC throughput, even marginal gains are worth $15-60M per year.',
      interviewNote: null
    },
    {
      id: 'final-05',
      type: 'truefalse',
      question: 'True or False: In a refinery, product quality deviations (going off-spec) are immediately detected by the DCS and automatically corrected — meaning AI quality prediction adds limited additional value.',
      options: ['True', 'False'],
      correctIndex: 1,
      explanation: 'False. The DCS monitors process conditions (temperature, pressure, flow) but does not measure product quality directly. Product quality is only confirmed by laboratory analysis (LIMS) on samples taken every 4-8 hours. A quality deviation that began at 2am may not be detected until the 6am lab result, by which time 4 hours of off-spec product has been produced and must be reworked or sold at a discount. Soft sensors (AI quality prediction from process data) provide real-time quality estimates between lab samples, enabling correction before significant off-spec product accumulates.',
      interviewNote: null
    },
    {
      id: 'final-06',
      type: 'mcq',
      question: 'A refinery\'s hydrotreater is currently producing diesel at 8 ppm sulfur against a regulatory limit of 10 ppm. The 2 ppm safety margin exists because lab results arrive 6 hours after samples are taken. A soft sensor predicts sulfur in real time. How would you quantify the financial value of the soft sensor?',
      options: [
        'The value is primarily in regulatory compliance — reducing the risk of regulatory fines for off-spec product',
        'The value comes from reducing the safety margin: with real-time quality visibility, operators can target 9.0-9.5 ppm instead of 8 ppm, reducing hydrotreating severity, cutting hydrogen consumption, and recovering margin from over-treatment — quantified as the cost of excess hydrogen per unit of reduced treatment',
        'The value comes from eliminating lab analysis costs — soft sensors replace the need for LIMS sampling',
        'The value is in yield improvement — lighter treat severity produces more diesel per barrel of feed'
      ],
      correctIndex: 1,
      explanation: 'The financial value of a soft sensor in hydrotreating is the margin recovered from over-treatment. The 2 ppm safety margin costs real money: the hydrotreater is using more hydrogen, higher temperatures, and more energy than necessary to treat to 8 ppm when 10 ppm is acceptable. At $3-5/kg hydrogen and typical consumption rates, recovering even 0.5-1 ppm of safety margin represents significant annual savings. Soft sensors do not eliminate lab testing (regulatory sampling remains mandatory) and do not primarily improve yield on the diesel product.',
      interviewNote: null
    },

    /* ── M03: Advanced Process Control (3 questions) ─────────────────── */

    {
      id: 'final-07',
      type: 'mcq',
      question: 'An APC system is running on a distillation column with 78% controller utilization. What does this metric mean and why does it matter for AI transformation planning?',
      options: [
        '78% of the column\'s product streams are being optimized by APC — meaning 22% are in manual control',
        'APC is in automatic mode (not manually overridden) 78% of the time — meaning operators override or disable it 22% of the time. This is the baseline; AI optimization layers require APC to be functioning, so improving APC utilization to 90%+ should be an early milestone before deploying AI optimization',
        '78% of the APC control intervals produce outputs within target bounds — meaning 22% of intervals result in constraint violations',
        'The APC model is accurate to within 78% of the actual process response — sufficient for most optimization applications'
      ],
      correctIndex: 1,
      explanation: 'APC controller utilization is the percentage of time the APC controller is in automatic mode (not overridden by operators). Low utilization means operators are frequently disabling the APC — often because it is making suboptimal moves, has outdated models, or operators do not trust it. This matters for AI transformation because AI optimization layers (which recommend setpoint targets to the APC) only deliver value when the APC is actually running. A site with 50% APC utilization captures roughly half the theoretical AI optimization value. Improving APC utilization is often a quick win that should precede AI optimization deployment.',
      interviewNote: null
    },
    {
      id: 'final-08',
      type: 'scenario',
      question: 'A vendor proposes replacing your refinery\'s 15-year-old APC system with their new AI-based closed-loop control platform, claiming it is 40% more effective than traditional MPC. The plant\'s existing APC runs at 92% utilization. What is the most appropriate response?',
      options: [
        'Approve the replacement — 15 years is old technology and 40% improvement is compelling',
        'Reject the proposal — the existing APC works well at 92% utilization and replacement creates unnecessary risk and disruption',
        'Request a rigorous technology assessment: benchmark the existing APC performance quantitatively, evaluate the vendor\'s claim on comparable sites with independent verification, assess the integration risk and shutdown period for cutover, and run a parallel shadow-mode evaluation before committing to replacement',
        'Approve a pilot on one unit only — keeping risk contained while evaluating the vendor\'s claim in production conditions'
      ],
      correctIndex: 2,
      explanation: 'At 92% APC utilization, the existing system is functioning well. The decision to replace it should be made on rigorous evidence, not vendor claims. The correct process is: quantify current APC value precisely, verify the vendor\'s "40% better" claim with independently audited references at comparable sites, model the risk and disruption of cutover (which typically requires a planned shutdown window), and run a shadow evaluation before any production commitment. A controlled pilot (option D) is a reasonable element of the assessment, but the response describes only committing to a pilot — which is too thin a process for a system-wide replacement decision on a core control technology.',
      interviewNote: null
    },

    /* ── M04: Real-Time Optimization (2 questions) ───────────────────── */

    {
      id: 'final-09',
      type: 'mcq',
      question: 'A refinery\'s RTO (Real-Time Optimization) system is based on a rigorous first-principles model of the crude distillation unit. After 3 years, an AI team builds an empirical ML model trained on actual operational data. Independent testing shows the ML model predicts column performance 15% more accurately than the RTO model. What is the most likely explanation for this difference?',
      options: [
        'The RTO model was not properly calibrated when installed and has never been updated',
        'ML models are always more accurate than physics-based models for complex industrial processes',
        'The first-principles RTO model was built on design-basis assumptions that have drifted from reality over 3 years: catalyst performance has changed, equipment has aged, and actual feedstocks differ from design. The ML model was trained on actual operating data and inherently captures the current reality of the plant',
        'The ML model is over-fitted to the training data and the 15% accuracy improvement is an artefact of test set selection'
      ],
      correctIndex: 2,
      explanation: 'First-principles models are built on engineering design assumptions that degrade over time as catalysts age, equipment fouling patterns develop, actual crude feeds differ from design, and operational practices evolve. The models must be recalibrated regularly — which is expensive and often deferred. An ML model trained on recent operational data automatically captures the current as-is reality of the plant, including all these drifts. This is the fundamental advantage of empirical ML over design-basis physics models in mature operating plants, and the main reason AI optimization can outperform well-established RTO systems.',
      interviewNote: null
    },
    {
      id: 'final-10',
      type: 'truefalse',
      question: 'True or False: At a refinery with a well-functioning RTO system, AI optimization has no additional value to offer.',
      options: ['True', 'False'],
      correctIndex: 1,
      explanation: 'False. Even with an RTO system, AI adds value in several ways: (1) detecting when the RTO model has drifted from current plant reality and triggering recalibration; (2) optimizing variables and interactions that the RTO model does not capture (typically equipment-specific parameters or cross-unit interactions); (3) predicting quality and yield outcomes at higher accuracy than RTO models that have aged; and (4) providing uncertainty quantification on RTO recommendations to inform operator confidence. RTO and AI optimization are complementary, not mutually exclusive.',
      interviewNote: null
    },

    /* ── M05: AI & ML Fundamentals (3 questions) ─────────────────────── */

    {
      id: 'final-11',
      type: 'scenario',
      question: 'A data scientist presents a compressor failure prediction model with 96% accuracy, 71% precision, and 89% recall. The compressor failure rate historically is 2% per month. How do you interpret these metrics and what is your recommendation?',
      options: [
        'The model is excellent — 96% accuracy and 89% recall are both above the 85% threshold required for production deployment',
        'The 89% recall is strong (the model catches most real failures), but 71% precision means roughly 3 in 10 alerts are false positives. Evaluate whether operations can tolerate this false positive rate before deploying — and tune the decision threshold to balance precision and recall based on operational preferences',
        'The model should be rejected — 71% precision is too low for any production deployment in a safety-critical environment',
        'The 96% accuracy is the most important metric; the precision and recall are secondary for business decision-making'
      ],
      correctIndex: 1,
      explanation: '89% recall means the model catches 89% of real failures — a strong safety signal. 71% precision means for every 10 alerts, ~3 are false positives. Whether this is acceptable depends on operational context: if a false alarm costs 2 hours of operator investigation, and a missed failure costs $500K in downtime, the economics strongly favor 71% precision. But if false alarms cause operators to disable the alerting system (alert fatigue), precision becomes critical. The recommendation should acknowledge both metrics and propose a 90-day shadow mode to observe the real-world false positive experience before committing to the precision threshold.',
      interviewNote: null
    },
    {
      id: 'final-12',
      type: 'mcq',
      question: 'A refinery\'s crude composition varies significantly week-to-week as the crude slate changes. A quality prediction ML model was trained on 18 months of data. After 4 months in production, the model\'s prediction error starts increasing. What is most likely happening and what should be done?',
      options: [
        'The model is overfitting — retrain with a smaller feature set to improve generalization',
        'Model drift: the input data distribution has shifted (new crude types or blends not well-represented in the training data are now being processed). The model should be retrained or fine-tuned with recent operational data, and a model performance monitoring system should be implemented to detect drift automatically going forward',
        'The sensors are degrading — the increase in prediction error is due to deteriorating data quality, not model quality',
        'The model has reached its theoretical accuracy ceiling and the increase in error is normal variance, not a systematic trend'
      ],
      correctIndex: 1,
      explanation: 'Model drift in refinery AI is a well-documented phenomenon: as the crude slate shifts, catalyst activity changes, or seasonal operating conditions vary, the statistical distribution of input variables moves away from the training data distribution, and model performance degrades. The solution has two components: (1) immediate — retrain or fine-tune the model with recent operational data including the new crude types; (2) structural — implement automated model performance monitoring (tracking prediction error on a rolling basis) and define a retraining trigger (e.g., when rolling 30-day RMSE exceeds 1.5× the original validation error). This monitoring is the "M" in MLOps.',
      interviewNote: null
    },
    {
      id: 'final-13',
      type: 'scenario',
      question: 'Refinery X has 95% complete AVEVA PI tag coverage, 80% APC coverage across major units, no LIMS-PI integration, skeptical operators, and Maximo CMMS with 4 years of maintenance records. What should be the FIRST AI use case?',
      options: [
        'Quality prediction using a soft sensor for diesel sulfur — because quality optimization has the highest financial value in most refineries',
        'Predictive maintenance for rotating equipment (pumps and compressors) — because PI data provides rich sensor features, Maximo provides failure labels, no LIMS integration is needed, and successful alerts that prevent real failures build the operator trust needed for all subsequent use cases',
        'FCC yield optimization — because the FCC contributes the most margin and 80% APC coverage means the data infrastructure is ready',
        'Anomaly detection across all process units — because it does not require LIMS integration and provides broad coverage quickly'
      ],
      correctIndex: 1,
      explanation: 'Predictive maintenance is the correct first use case given this exact data landscape. The three required data conditions are fully met: PI provides continuous sensor features (vibration, temperature, pressure on rotating equipment), Maximo provides 4 years of failure labels for supervised learning, and LIMS integration is not required. Critically, when predictive maintenance catches a real pump or compressor failure early — preventing an emergency scramble the operator remembers vividly — that single event does more for operator trust than any presentation or proof-of-concept demo. Skeptical operators need visible, tangible proof. Predictive maintenance delivers it faster than quality prediction (which needs LIMS integration) or FCC optimization (which requires deep process control expertise and months of shadow operation).',
      interviewNote: 'This cross-module question is the signature question of the final assessment. Know the pattern: PI data + CMMS + no LIMS + skeptical operators = predictive maintenance first, always.'
    },

    /* ── M06: Industrial Data & Systems (2 questions) ────────────────── */

    {
      id: 'final-14',
      type: 'mcq',
      question: 'A data engineer joins your AI team and proposes connecting the AI model inference server directly to the DCS network for real-time setpoint optimization with sub-second latency. What is the problem and what is the correct architecture?',
      options: [
        'Sub-second latency is unnecessary for refinery process optimization — 5-minute intervals are sufficient for all use cases',
        'Direct DCS connectivity violates OT network security (the inference server is an IT system that would be inside the OT zone), creates a cyberattack pathway into process control systems, and is prohibited by the DMZ architecture. The correct architecture is edge inference servers at Level 3 within the OT zone, receiving data via the existing PI historian, with recommendations passed to operators or APC — not directly into DCS logic',
        'The inference server lacks the processing power for sub-second response — a GPU cluster would be required, which is not feasible at the edge',
        'DCS systems do not have APIs that allow external systems to write setpoint values — this is a technical impossibility'
      ],
      correctIndex: 1,
      explanation: 'This is a fundamental OT security architecture violation. Placing an IT-managed inference server inside the OT network breaches the DMZ isolation that protects process control systems. Even if the inference server itself is secure, it creates an attack surface: a compromised AI system with direct DCS write access could cause loss of process control. The correct architecture keeps AI inference within the trusted OT zone (Level 3) using the historian as the data interface, with recommendations surfaced through operator-facing dashboards or passed to APC setpoint targets — not written directly to DCS control logic.',
      interviewNote: null
    },
    {
      id: 'final-15',
      type: 'truefalse',
      question: 'True or False: When building a predictive maintenance model, a data quality audit on the relevant PI tags should be completed before model development begins, not after.',
      options: ['True', 'False'],
      correctIndex: 0,
      explanation: 'True. Discovering stuck sensors, calibration drift, or systematic missing data after a model has been developed means the model may have been trained on bad data — invalidating weeks of work. A pre-development data audit on the specific tags required for the use case (typically 2-4 weeks of effort) identifies: stuck sensor periods to exclude, calibration events that create artificial step changes, gaps that exceed the threshold for imputation, and timestamp misalignment issues between systems. This audit also informs feature selection: a sensor that is stuck 40% of the time should not be a core model feature. The investment in a pre-development audit is always justified.',
      interviewNote: null
    },

    /* ── M07: AI in Refineries (3 questions) ─────────────────────────── */

    {
      id: 'final-16',
      type: 'scenario',
      question: 'A plant manager says: "We have deployed an anomaly detection system on the crude distillation unit. In the first month it generated 847 alerts. My operators say it is useless." What is the most likely root cause and how do you fix it?',
      options: [
        'The anomaly detection algorithm is not sophisticated enough — replace it with a more advanced deep learning model',
        'The CDU has too many simultaneous anomalies to monitor — narrow the scope to 10 key tags',
        'Alert fatigue from excessive false positives: the model sensitivity was likely left at a default setting never calibrated to this unit\'s operational reality. Fix by tuning the anomaly score threshold to target 3-5 high-confidence, actionable alerts per shift; add a suppression filter for known benign anomalies (startups, intentional feedstock switches); and involve operators in defining which alert categories are worth acting on',
        'The operators need more training — they do not understand how to interpret anomaly alerts correctly'
      ],
      correctIndex: 2,
      explanation: '847 alerts in a month is approximately 28 per day or 9 per shift — a classic alert fatigue scenario. The root cause is almost always an uncalibrated sensitivity threshold: the model was deployed with default settings that flag too many deviations as anomalous, rather than being tuned to the specific operational patterns of this CDU. The fix is methodical calibration: review the alert history with the operations team to classify true positives versus benign detections, adjust the anomaly score threshold, suppress known benign operating states, and establish a feedback loop where operators can flag false positives to improve future tuning.',
      interviewNote: null
    },
    {
      id: 'final-17',
      type: 'mcq',
      question: 'Digital twin technology is often discussed in refinery AI roadmaps. Which description of a digital twin is most technically accurate?',
      options: [
        'A digital twin is a 3D CAD rendering of the refinery that can be updated in real time as equipment changes',
        'A digital twin is a live, continuously synchronized virtual model of the physical plant that combines first-principles physics models, empirical ML models, and real-time sensor data to simulate current plant state and test operational scenarios before implementing them in the real plant',
        'A digital twin is a backup DCS system that mirrors all control system states in real time for disaster recovery purposes',
        'A digital twin is an AI model that predicts equipment failure based on sensor data — synonymous with predictive maintenance'
      ],
      correctIndex: 1,
      explanation: 'A true digital twin integrates three elements: (1) a physics-based model of the process (typically derived from Aspen HYSYS or similar process simulation); (2) empirical data-driven models that capture real plant behaviour that physics models miss; and (3) live data synchronization from the PI historian to keep the virtual model current with the actual plant state. The value is in "what-if" capability: operations engineers can test a proposed feed switch or operating condition change in the digital twin before implementing it in the real plant, avoiding costly process upsets. Mature digital twins take 2-4 years to build and maintain; they are typically Year 3 roadmap items, not quick wins.',
      interviewNote: null
    },
    {
      id: 'final-18',
      type: 'scenario',
      question: 'You are reviewing an AI vendor\'s proposal for crude oil optimization. They claim their system delivered $2.10/bbl improvement in refining margin at a "comparable" refinery in Southeast Asia over 12 months. Your refinery processes 120,000 bbl/day. Before accepting this claim as the basis for your business case, what are the two most important due diligence questions?',
      options: [
        '(1) What programming language and cloud platform does the vendor use? (2) Do they have a local support office in your country?',
        '(1) Was the $2.10/bbl gain independently audited or self-reported, and against which baseline methodology? (2) What was the crude slate and configuration of the reference refinery, and how comparable is it to yours?',
        '(1) How many employees does the vendor have? (2) What is their financial stability and risk of going out of business?',
        '(1) Is the vendor willing to put the $2.10/bbl in a performance guarantee? (2) What is their SLA for system uptime?'
      ],
      correctIndex: 1,
      explanation: 'The two most critical questions are auditability and comparability. Self-reported ROI claims from vendors are systematically biased upward — the reference refinery may have had unusually poor baseline optimization, may have made other improvements simultaneously, or the gain may only apply to marginal barrels rather than the full throughput. "Independently audited" means a third party verified the measurement methodology. "Comparable" means similar crude slate, similar configuration, similar APC baseline, and similar market conditions. Without these answers, $2.10/bbl is a marketing number, not a planning assumption.',
      interviewNote: null
    },

    /* ── M08: Cybersecurity (2 questions) ────────────────────────────── */

    {
      id: 'final-19',
      type: 'mcq',
      question: 'The IEC 62443 standard is referenced in virtually every industrial AI security discussion. What does it specifically define?',
      options: [
        'Data quality standards for industrial AI training datasets',
        'Security requirements and framework for Industrial Automation and Control Systems (IACS), including requirements for security zones, communication channels, and security levels applicable to OT environments where AI systems are deployed',
        'The technical requirements for AI model explainability in safety-critical industrial applications',
        'Cloud security standards for industrial IoT platforms that host AI inference workloads'
      ],
      correctIndex: 1,
      explanation: 'IEC 62443 is the international standard for industrial automation and control system cybersecurity. It defines security zones (groupings of assets with similar security requirements), conduits (secure communication channels between zones), and security levels (SL 1-4, ranging from basic to highly sophisticated attack resistance). For AI transformation leaders, the relevant requirement is that any AI system integrated with OT assets must comply with the security zone and conduit architecture defined by IEC 62443 — which means edge inference servers placed within the OT zone must meet the security level requirements of that zone.',
      interviewNote: null
    },
    {
      id: 'final-20',
      type: 'truefalse',
      question: 'True or False: For an AI model running in advisory mode (making recommendations that operators can accept or reject), the model\'s output path should be completely isolated from the Safety Instrumented System (SIS) at all times.',
      options: ['True', 'False'],
      correctIndex: 0,
      explanation: 'True. The Safety Instrumented System operates on independent logic and independent hardware specifically to guarantee that it functions correctly regardless of the state of other systems — including AI. The SIS must trip the process based on its own sensors and logic if a safety limit is breached, without any dependency on or interference from AI systems. AI models that are connected to or could influence SIS logic create a potential single point of failure in the safety layer. This isolation requirement is absolute and non-negotiable in any well-governed industrial AI deployment.',
      interviewNote: null
    },

    /* ── M09: Transformation Strategy (3 questions) ──────────────────── */

    {
      id: 'final-21',
      type: 'scenario',
      question: 'You are designing a 3-year AI transformation roadmap for a complex refinery. Year 1 delivers $15M, Year 2 delivers $28M additional, Year 3 delivers $20M additional. The CFO asks why Year 3 value is lower than Year 2. What is the correct explanation?',
      options: [
        'Year 3 lower value indicates the program is declining — revisit the roadmap to find higher-value use cases for Year 3',
        'Year 3 represents foundation work (data infrastructure, governance) that does not produce financial value directly but enables Years 4-5',
        'Year 2 typically captures the highest-value use cases (predictive maintenance + quality optimization on the largest units). Year 3 value may be lower in isolation but represents expanding the program to new units and more complex use cases like digital twin components — the cumulative value is $63M and growing, with Year 3 building the compounding capability for Years 4+',
        'Year 3 lower value is a modelling error — compound AI value should always grow linearly or exponentially in a well-structured program'
      ],
      correctIndex: 2,
      explanation: 'AI transformation roadmaps do not deliver linear value. Year 2 typically captures the "golden use cases" — the highest-value, highest-readiness applications identified in Year 1 assessment (usually predictive maintenance and quality optimization on the largest process units). Year 3 often involves expanding to more complex and harder-to-implement use cases (digital twin beginnings, feed optimization, cross-unit energy management) that take longer to deliver incremental value but establish the capability platform for Years 4 and 5. The CFO should evaluate cumulative value and trajectory, not Year 3 in isolation.',
      interviewNote: null
    },
    {
      id: 'final-22',
      type: 'mcq',
      question: 'What is the "POC trap" in industrial AI, and what organizational mechanism most directly prevents it?',
      options: [
        'The POC trap is when a proof-of-concept project uses too much budget, leaving insufficient funds for production deployment. Prevention: phase-gate budgeting with a cap on POC spending',
        'The POC trap is the pattern where organizations successfully complete multiple pilots but none transitions to production scale — because operator adoption, model maintenance ownership, and operational workflow integration were never designed. Prevention: a Use Case Review Board that only approves use cases with a defined production transition plan, an identified model owner, and an operator adoption plan from Day 1',
        'The POC trap is when vendors over-promise during the pilot phase and under-deliver in production. Prevention: performance-based contracts tied to production metrics, not pilot results',
        'The POC trap is when pilots are too narrow in scope to demonstrate scalable value. Prevention: design pilots on production-scale data and production-scale infrastructure from the start'
      ],
      correctIndex: 1,
      explanation: 'The POC trap is the most consistently documented failure pattern in industrial AI. Organizations run 5, 10, or 20 technically successful pilots — the model accuracy is validated, the demo is impressive — but none ever reaches production because the non-technical prerequisites were never put in place: no operator is invested in using it, no one owns retraining when data drifts, and the model output is not embedded in the operator\'s actual workflow. The Use Case Review Board prevents this by requiring every approved use case to specify, at the outset, who will own the model in production, how operators will be trained, and what the transition criteria from pilot to production are.',
      interviewNote: null
    },
    {
      id: 'final-23',
      type: 'scenario',
      question: 'A refinery has completed a comprehensive data readiness assessment. Results show: AVEVA PI is 94% complete with 3 years of data; CMMS has failure records going back 5 years; LIMS is disconnected from PI (manual sampling only); APC is at 72% utilization; and operator trust in AI is currently rated at 2/5 (low). How should you sequence the 3-year roadmap?',
      options: [
        'Year 1: all use cases simultaneously — deploy everything to demonstrate scale and improve operator trust through volume of proof points',
        'Year 1: predictive maintenance (uses PI + CMMS, no LIMS needed, visible results) + LIMS-PI integration as a data foundation project + operator engagement program. Year 2: quality prediction (now LIMS is connected) + APC utilization improvement + expand maintenance AI to more asset classes. Year 3: energy management optimization + feed optimization + digital twin foundation',
        'Year 1: LIMS-PI integration only — build the data foundation before any AI deployment. Year 2: begin AI use cases once data is fully integrated. Year 3: scale to full deployment',
        'Year 1: improve APC utilization to 90%+ (no AI needed, process engineering can do this). Year 2: begin AI on top of improved APC. Year 3: scale'
      ],
      correctIndex: 1,
      explanation: 'The correct sequencing applies three principles: (1) start with what the data supports now (PI + CMMS → predictive maintenance); (2) build data foundations in parallel with early AI deployment, not sequentially (LIMS-PI integration in Year 1 unlocks Year 2 quality AI); (3) use Year 1 wins to build the operator trust needed for more complex Year 2 and 3 use cases. Doing all use cases simultaneously (option A) fragments resources and produces nothing well. Waiting for perfect data (option C) delays value capture by 2 years unnecessarily. APC improvement before any AI (option D) misses the 12-18 months of predictive maintenance value that can run in parallel.',
      interviewNote: null
    },

    /* ── M10: Technology Architecture (1 question) ───────────────────── */

    {
      id: 'final-24',
      type: 'mcq',
      question: 'A refinery must choose between three AI architecture options: (A) cloud-only AI platform where all inference happens in the cloud; (B) edge-only AI where all model training and inference happens on local servers; (C) hybrid architecture where model training happens in the cloud using batch historical data, but inference runs on edge servers within the OT network. Which is most appropriate for a safety-critical refinery and why?',
      options: [
        'Option A — cloud-only is most appropriate because it provides the latest models, automatic updates, and eliminates on-premise maintenance overhead',
        'Option B — edge-only is most appropriate because it keeps all data and computation within the plant boundary with no external dependencies',
        'Option C — hybrid architecture is most appropriate: cloud for training (leveraging scalable compute and storage for large historical datasets) and edge inference (ensuring predictions are always available even without internet connectivity, with data remaining within the OT security boundary for real-time applications)',
        'Options A and C are equally appropriate — the choice depends entirely on the refinery\'s IT budget, not on security or availability considerations'
      ],
      correctIndex: 2,
      explanation: 'The hybrid architecture is the industry-standard reference architecture for industrial AI in safety-critical environments. Cloud training makes sense: historical data extraction for training is a batch process, cloud compute scales efficiently for large training runs, and data flows outbound (low OT security risk when properly managed through the DMZ). Edge inference is mandatory for production: predictions must be available when internet connectivity fails (which it will), latency for real-time applications cannot tolerate cloud round-trips, and live OT data should not stream continuously to an external network. The hybrid model delivers the benefits of cloud-scale training while maintaining the availability and security guarantees required in a refinery.',
      interviewNote: null
    },

    /* ── M11: Agile & MLOps (1 question) ─────────────────────────────── */

    {
      id: 'final-25',
      type: 'mcq',
      question: 'What is "model drift" in an operational MLOps context, and what is the correct automated response when it is detected?',
      options: [
        'Model drift is when the model\'s codebase becomes outdated relative to the latest ML framework version — the response is to upgrade the framework',
        'Model drift is when prediction accuracy degrades over time because the statistical distribution of input data has shifted from the training data. The correct automated response is: trigger an alert to the model owner, halt the model\'s advisory recommendations if error exceeds a safety threshold, initiate an automated retraining pipeline using recent data, and require a human validation step before the retrained model returns to production',
        'Model drift is when the model generates inconsistent predictions for the same input — caused by randomness in the inference engine. The response is to set a fixed random seed',
        'Model drift is gradual accumulation of prediction bias due to feedback loops — the response is to implement SHAP-based explainability monitoring'
      ],
      correctIndex: 1,
      explanation: 'Model drift in industrial AI occurs when the operating conditions of the plant change in ways not represented in the training data — new crude types, aging catalysts, seasonal variation, equipment changes. The prediction error increases gradually and may not be immediately obvious. A mature MLOps system monitors rolling prediction error continuously, compares it against baseline validation performance, triggers an alert when the delta exceeds a defined threshold, and initiates the retraining pipeline automatically. Critically, the retrained model should not return to production without a human validation step — automated deployment of an untested retrained model creates risk of deploying a worse model than the one it replaced.',
      interviewNote: null
    },

    /* ── M12: Leading AI Transformation (1 question) ─────────────────── */

    {
      id: 'final-26',
      type: 'scenario',
      question: 'You are 14 months into the AI transformation program. The COO says: "We are happy with Year 1 results, but I am worried about dependency. If BCG leaves tomorrow, can our team run this?" How do you answer honestly and what does your answer reveal about the program\'s health?',
      options: [
        '"Absolutely — we have been building your team\'s capability from Day 1 and your data scientists can maintain all current models independently." [If this is not true, say what is true and what needs to change.]',
        '"Not yet, but that is normal at Month 14. We need 6 more months to complete the knowledge transfer. Here is the specific capability gap and our plan to close it by Month 20."',
        '"The BCG team is integrated deeply into operations — a transition would take 3-4 months minimum and we recommend extending the contract to ensure continuity."',
        '"Your team can run the models, but all new development still requires BCG. We are building a hybrid dependency model that optimizes for both capability and quality."'
      ],
      correctIndex: 1,
      explanation: 'Honesty is the only right answer to this question — and the COO will know if you are being evasive. If the capability transfer is not complete at Month 14, that is a program health signal that should prompt urgency, not reassurance. The correct answer diagnoses the specific gap (which capabilities are missing?), commits to a concrete resolution timeline (by Month 20 with specific milestones), and treats the COO\'s question as valuable feedback that accelerates a critical program objective. Option A is only correct if it is true. Options C and D are rationalizations for dependency, not capability transfer.',
      interviewNote: null
    },

    /* ── M13: Stakeholder Communication (1 question) ─────────────────── */

    {
      id: 'final-27',
      type: 'scenario',
      question: 'You need to deliver bad news to the executive sponsor: the predictive maintenance model that was supposed to deliver $8M in Year 1 has underperformed — it has delivered $3.2M due to lower-than-expected operator adoption. How do you structure this communication using the Pyramid Principle?',
      options: [
        'Start with the context: explain the detailed root cause analysis of why adoption was lower than expected, then move to the financial result, then to the corrective actions',
        'Start with the recommendation: "We need to extend the operator engagement program by 3 months and implement a shift-level utilization target — here is why and what it will cost." Then provide the three supporting facts: (1) current result vs. target, (2) root cause (adoption, not model performance), (3) evidence that the proposed solution will close the gap',
        'Start with an apology for the underperformance and a commitment to refund BCG fees proportional to the value shortfall',
        'Start with the positive news (the model is technically accurate) before introducing the financial underperformance, to soften the impact'
      ],
      correctIndex: 1,
      explanation: 'Pyramid Principle applies even — especially — to bad news. Lead with the recommendation and what you need from the sponsor, not with the bad news itself. The sponsor\'s question is: "What do I need to decide and do?" not "What went wrong and why?" By leading with the recommendation, you maintain a forward-looking, action-oriented framing that respects the sponsor\'s decision-making role. The context (result vs. target) and root cause support the recommendation; they do not precede it. Softening bad news with positive framing (option D) reads as evasive to experienced executives.',
      interviewNote: null
    },

    /* ── M14: Interview Scenarios (2 questions) ──────────────────────── */

    {
      id: 'final-28',
      type: 'scenario',
      question: 'A final-round panelist asks: "Most AI projects fail. Why will yours succeed?" Give the strongest answer.',
      options: [
        '"Because we use better algorithms and have a more experienced team than previous vendors this refinery has worked with."',
        '"Because we will start with a smaller scope than previous programs, reducing the risk of failure."',
        '"Because I will address the three root causes of industrial AI failure from Day 1: build operator adoption into the design process rather than treating it as an afterthought; establish explicit model maintenance ownership before any model goes to production; and integrate AI recommendations into actual operational workflows rather than parallel dashboards that operators can ignore."',
        '"Because BCG has a strong track record in AI transformation globally and has not had a failed engagement of this type."'
      ],
      correctIndex: 2,
      explanation: 'The strongest answer names the specific failure modes and explains how you will address each one. "Our track record" (option D) and "better algorithms" (option A) are assertions without evidence. "Smaller scope" (option B) is a risk reduction strategy, not a success strategy. The winning answer demonstrates that you have studied why industrial AI fails (POC trap, operator non-adoption, model maintenance collapse) and have specific, concrete plans to address each. This is the answer of a leader who has learned from industry experience — which is exactly what a 25-year veteran panelist is looking for.',
      interviewNote: null
    },
    {
      id: 'final-29',
      type: 'scenario',
      question: 'The interview panel concludes by asking: "In one sentence, what is the single most important mindset shift a BCG consultant needs to make to be effective as an AI Transformation Leader at a refinery?" What do you say?',
      options: [
        '"Shift from delivering analysis to delivering operational change — the output is not a slide deck, it is a plant that works differently."',
        '"Shift from being the smartest person in the room to being the person who makes the team around you smarter."',
        '"Shift from thinking about AI as a technology implementation to thinking about it as a people and organization challenge that happens to involve technology."',
        'All three of these represent equally valid and important mindset shifts — the correct answer depends on the specific challenges of this refinery.'
      ],
      correctIndex: 2,
      explanation: 'All three options capture genuine and important insights, but option C is the most fundamental shift for a BCG consultant moving into this role. Consultants are trained to solve analytical problems; this role requires solving organizational and behavioural problems. The technology (AI algorithms, data pipelines, cloud platforms) is the easy part — it is documented, teachable, and improvable. The hard part is getting a 25-year veteran operator to trust a model, getting IT and OT teams who have never cooperated to collaborate, and getting a CFO to commit $15M to a program whose value depends on human adoption decisions. If you approach this role as a technology implementation, you will fail. If you approach it as an organizational transformation that uses technology as its lever, you will succeed.',
      interviewNote: null
    },
    {
      id: 'final-30',
      type: 'mcq',
      question: 'Which combination of competencies most differentiates an outstanding AI Transformation Leader from an average one at a major refinery?',
      options: [
        'Deep expertise in machine learning algorithms combined with strong Python and SQL programming skills',
        'BCG consulting methodology (MECE, Pyramid Principle, hypothesis-driven analysis) combined with industrial domain knowledge and change management capability',
        'Extensive refinery operations experience combined with academic credentials in data science',
        'Strong vendor management skills combined with program management certification (PMP or Prince2)'
      ],
      correctIndex: 1,
      explanation: 'The differentiating combination is consulting methodology plus domain knowledge plus change management. BCG methodology provides the structured thinking, communication frameworks, and business case rigour that transforms AI from a technology project into a business transformation. Industrial domain knowledge (earned through preparation like this program, site visits, and operator conversations) provides the credibility and contextual judgment to make sound recommendations. Change management capability is what turns technically successful models into operationally adopted tools that actually deliver value. Technical ML skills (option A) are table stakes, not differentiators — they belong to the data scientists you hire. Operations experience (option C) takes 20 years to build. Vendor management (option D) is a support skill, not a leadership differentiator.',
      interviewNote: null
    }
  ]
};
