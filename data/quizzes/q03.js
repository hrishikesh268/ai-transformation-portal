window.QUIZ_Q03 = {
  id: 'q03',
  moduleId: 'm03',
  title: 'Advanced Process Control (APC) — Knowledge Check',
  badge: 'control_freak',
  badgeThreshold: 0.9,
  questions: [
    {
      id: 'q03-01',
      type: 'mcq',
      question: 'What is the fundamental limitation of a PID (Proportional-Integral-Derivative) controller that APC is designed to overcome?',
      options: [
        'A PID controller handles only one controlled variable against one manipulated variable and cannot account for interactions between multiple process variables or anticipate future disturbances — APC uses multivariable models that manage these interactions simultaneously',
        'PID controllers are analog devices that cannot be connected to digital DCS systems — APC provides the digital interface layer that makes modern process control possible',
        'PID controllers can only increase setpoints, not decrease them — APC adds the ability to move variables in both directions',
        'PID controllers require manual tuning every shift — APC replaces this manual effort with self-tuning algorithms that automatically adjust all control parameters'
      ],
      correctIndex: 0,
      explanation: 'A PID controller is a single-input, single-output (SISO) controller: it looks at one measurement (e.g., column overhead temperature) and adjusts one output (e.g., reflux flow) to minimize the error. In a real distillation column with dozens of interacting temperatures, flows, pressures, and compositions, you cannot optimize the system with independent PID loops — adjusting reflux affects multiple tray temperatures, product compositions, reboiler duty, and overhead pressure simultaneously. APC, specifically Model Predictive Control (MPC), uses a multivariable dynamic model to calculate the optimal moves for all manipulated variables simultaneously, accounting for all interactions and constraints. This is not a digital/analog issue or a directionality limitation.',
      interviewNote: 'If asked "why not just tune the PIDs better?" — this is the answer. PID limitation is single-loop thinking in a multi-loop world. APC thinks in matrices; PID thinks in single equations. The value of APC is not better control of individual loops but coordinated multivariable control.'
    },
    {
      id: 'q03-02',
      type: 'mcq',
      question: 'Describe the four-step cycle of Model Predictive Control (MPC) that executes every 1-5 minutes in an APC application.',
      options: [
        'Predict future process behavior using the dynamic model → Optimize manipulated variable moves to drive CVs to targets while respecting constraints → Apply the first set of calculated moves to the DCS → Repeat at the next execution interval with updated measurements',
        'Measure current process state → Calculate PID corrections for each loop → Apply all corrections simultaneously → Wait for process to stabilize before measuring again',
        'Collect 30 days of process data → Retrain the model → Upload new model to the controller → Run the updated controller for 30 days before the next cycle',
        'Identify disturbances from upstream units → Alert the operator → Wait for operator approval → Apply the pre-approved correction moves from a lookup table'
      ],
      correctIndex: 0,
      explanation: 'MPC executes a rolling four-step cycle: (1) Predict — using the current process state and the dynamic model, predict the future trajectory of all Controlled Variables (CVs) over the prediction horizon (typically 60-180 minutes ahead). (2) Optimize — solve an optimization problem to find Manipulated Variable (MV) moves that will drive CVs to their targets while keeping all variables within their constraints (MV limits, CV limits, rate-of-change limits). (3) Apply — only the first set of MV moves is sent to the DCS setpoints — the controller does not lock in the entire calculated trajectory. (4) Repeat — at the next execution interval (1-5 minutes), get fresh measurements, re-predict with updated data, re-optimize, and apply the next set of moves. This "receding horizon" approach means the controller continuously corrects for model-plant mismatch and new disturbances.',
      interviewNote: 'Being able to explain the MPC cycle fluently — especially the "only apply the first move" receding horizon concept — immediately signals to a process control engineer that you understand APC at more than a surface level. Most AI consultants cannot explain this.'
    },
    {
      id: 'q03-03',
      type: 'mcq',
      question: 'In APC terminology, what are Controlled Variables (CVs), Manipulated Variables (MVs), and Disturbance Variables (DVs)?',
      options: [
        'CVs are process outputs you want to keep within targets (e.g., product purity, column temperature); MVs are the inputs the controller adjusts to achieve those targets (e.g., reflux rate, feed preheat); DVs are measured process inputs that affect CVs but cannot be adjusted by the controller (e.g., crude feed composition)',
        'CVs are variables the operators control manually; MVs are variables the DCS manages automatically; DVs are variables that exceed design limits and trigger safety shutdowns',
        'CVs are the setpoints programmed by control engineers; MVs are the actual measured values; DVs are the deviation between setpoint and measurement that the controller tries to minimize',
        'CVs are variables in the crude distillation unit; MVs are variables in secondary conversion units; DVs are variables measured in the utilities section that affect all process units'
      ],
      correctIndex: 0,
      explanation: 'These three variable types define the APC problem structure. CVs (Controlled Variables) are the process outputs or quality variables that must be maintained within constraints — examples include diesel product flash point, naphtha octane number, column overhead temperature, and reactor pressure. MVs (Manipulated Variables) are the handles the MPC controller can move — reflux rate, feed rate, fuel gas flow to furnaces, or steam rates. DVs (Disturbance Variables) are measured inputs that the controller cannot change but can anticipate — crude API gravity from the lab, ambient temperature, or a known upstream unit rate change. DVs allow the MPC to take a feed-forward action before a disturbance reaches the controlled variables, which is a major advantage over feedback-only PID control.',
      interviewNote: 'Understanding CV/MV/DV is essential for scoping any AI project in a process plant. When a client says "we want AI to optimize our column," your first questions should be: What are the CVs you care about? What MVs does the operator have? What DVs disrupt the process most? This translates business language into a solvable control problem.'
    },
    {
      id: 'q03-04',
      type: 'mcq',
      question: 'Why must APC be deployed and proven before attempting to layer AI/ML optimization on top of refinery operations?',
      options: [
        'APC stabilizes process variability (creating consistent, high-quality training data), establishes a performance baseline, and builds operator trust in automated control — without these three foundations, AI recommendations will be based on noisy data, unmeasurable, and rejected by operators',
        'APC is required by refinery operating licenses in most countries — AI cannot be legally deployed until APC compliance certificates are in place for all major units',
        'APC must be installed first because AI models are trained on APC model parameters — without APC running, there are no model coefficients for the AI to use as inputs',
        'APC vendor contracts typically include clauses preventing refineries from using competitor AI products until the APC contract term expires, creating a contractual sequencing requirement'
      ],
      correctIndex: 0,
      explanation: 'The APC-before-AI sequencing requirement rests on three practical pillars. First, data quality: when a process unit runs with PID-only control and frequent manual overrides, process data is highly variable and full of step changes from operator interventions — this makes it very difficult to train reliable ML models. APC stabilizes the process, creating the smooth, consistent process data that ML models need. Second, baseline: you cannot measure the value of AI optimization if you have not first established a stable operating baseline. Third, operator trust: APC demonstrates that automated control can improve operations — operators who have seen APC work are far more willing to act on AI recommendations. Skipping APC and going straight to AI is one of the most common mistakes in refinery digitalization.',
      interviewNote: 'This is one of the most important points in the entire AI transformation playbook. When a client says "we want to skip APC and go straight to AI," you must push back clearly: stable data, measurable baseline, and operator trust are prerequisites. You cannot build a reliable ML model on a process that behaves differently every shift because operators are manually overriding unstable PID loops.'
    },
    {
      id: 'q03-05',
      type: 'mcq',
      question: 'What are the documented typical benefits of APC deployment on a refinery process unit?',
      options: [
        'Reduction in process variability of 40-60%, yield improvement of 0.5-2%, energy consumption reduction of 5-15%, and improved on-stream factor through more stable operation',
        'Reduction in headcount of 30-40% as operators are no longer needed to monitor control loops, and a complete elimination of unplanned shutdowns within 12 months of deployment',
        'Improvement in product quality only — APC does not improve throughput, yield, or energy consumption because it is a control tool, not an optimization tool',
        'Reduction in turnaround frequency from every 3-5 years to every 7-10 years because APC reduces the mechanical stress on equipment'
      ],
      correctIndex: 0,
      explanation: 'Industry-documented APC benefits cluster around four areas. Variability reduction (40-60%): APC keeps process variables tighter around setpoints, reducing quality giveaway — for example, if a product must be ≥95 octane, operating at an average of 97 with high variability wastes margin; APC allows operating closer to 95.5 confidently. Yield improvement (0.5-2%): tighter control allows operating closer to process constraints, recovering more valuable products. Energy reduction (5-15%): optimized furnace firing, reduced reflux rates, and better heat integration all improve energy efficiency. Stability benefit: fewer process upsets means fewer trips and shutdowns. APC does not eliminate operators (option B) and turnaround frequency is driven by regulatory and mechanical requirements, not control technology (option D).'
    },
    {
      id: 'q03-06',
      type: 'mcq',
      question: 'Which of the following best describes the three major APC vendors that dominate the refining industry?',
      options: [
        'AspenTech (DMC3), Honeywell (Profit Suite), and Emerson (DeltaV Predict/PredictPro) — each with proprietary MPC technology that requires specialized engineering for deployment and ongoing model maintenance',
        'Siemens (SIMATIC APC), ABB (800xA APC), and Rockwell (FactoryTalk APC) — the dominant vendors are the DCS manufacturers who bundle APC with their DCS platforms',
        'MATLAB/Simulink (MathWorks), Python-based open-source MPC, and GAMS optimization software — the industry has moved to open-source APC frameworks since 2015',
        'SAP (Process Optimization), Oracle (Refinery Management System), and IBM (ORRCA) — enterprise software vendors who added APC modules to their ERP platforms'
      ],
      correctIndex: 0,
      explanation: 'The refining APC market is dominated by three specialized vendors. AspenTech\'s DMC3 (Dynamic Matrix Control, 3rd generation) is the market leader, particularly strong in heavy process industries including refining and petrochemicals. Honeywell\'s Profit Suite (formerly RMPCT — Robust Multivariable Predictive Control Technology) is widely deployed in downstream refining. Emerson\'s offerings (DeltaV PredictPro and previously Connoisseur) round out the top three. These are dedicated process control technology companies, not DCS manufacturers or enterprise software vendors. The DCS manufacturers (Siemens, ABB, Rockwell) offer APC add-ons, but for complex refinery applications the dedicated vendors dominate. Open-source MPC (option C) exists in academia but is rarely used in production refinery environments due to support and certification requirements.',
      interviewNote: 'Knowing AspenTech, Honeywell Profit Suite, and Emerson by name — and knowing which is the market leader — signals industry literacy. When a refinery says "we already have AspenTech" or "we\'re on Honeywell Profit Suite," you need to know immediately what that means for the AI architecture and integration path.'
    },
    {
      id: 'q03-07',
      type: 'truefalse',
      question: 'The most significant ongoing challenge with APC is not the initial deployment but model maintenance — APC dynamic models degrade over time as process equipment ages, catalyst deactivates, and operating conditions change, requiring periodic re-identification and retuning.',
      options: ['True', 'False'],
      correctIndex: 0,
      explanation: 'True. Initial APC deployment (model identification, controller design, commissioning) is a one-time investment. The persistent challenge is model maintenance: the dynamic models that represent how MVs affect CVs are built from step test data collected at a specific point in time. Over months and years, catalyst activity changes (FCC catalyst deactivation), heat exchanger fouling alters heat transfer dynamics, mechanical wear changes valve characteristics, and feed composition shifts. All of these cause the APC model to become inaccurate, degrading controller performance. Without periodic model updates (every 1-3 years depending on the unit), APC performance deteriorates — a phenomenon called "model-plant mismatch." One of the most compelling AI use cases in process control is automated APC model adaptation using online learning algorithms.',
      interviewNote: 'Model maintenance cost is the most common reason cited when refineries say their APC is "underperforming." Before proposing additional AI on top of an existing APC installation, always ask: "When was the APC model last re-identified?" If the answer is "5 years ago," the APC model maintenance problem must be addressed first.'
    },
    {
      id: 'q03-08',
      type: 'truefalse',
      question: 'Economic APC (also called "optimizing APC") is a more advanced form of APC that adds an economic objective function to drive MVs not just to stable setpoints but to the operating point that maximizes profit or minimizes cost within all process constraints.',
      options: ['True', 'False'],
      correctIndex: 0,
      explanation: 'True. Standard APC stabilizes the process and drives CVs to fixed setpoints provided by operators or engineers. Economic APC extends this by including an economic layer that calculates the optimal setpoints dynamically based on current product prices, feed costs, utility costs, and process constraints. For example, if diesel margins are high today, economic APC might push the distillation column cutpoint to increase diesel yield at the expense of some kerosene yield — adjusting in real time as economics change. This is the bridge between APC (control focus) and RTO (optimization focus), and it is the configuration where the largest financial benefits are realized. Economic APC effectively embeds a simplified optimization within the MPC execution cycle.'
    },
    {
      id: 'q03-09',
      type: 'scenario',
      question: 'You visit a refinery where APC is installed on 40% of process units, but the Shift Supervisor mentions that operators are manually disabling APC on 60% of their shifts because "it fights with what we are trying to do." What is the most important first action before proposing any AI layer on top?',
      options: [
        'Conduct a structured investigation into why operators are disabling APC — likely causes include outdated models, constraints set too conservatively, or lack of operator training — and fix the APC health problem before discussing any additional AI, because AI on top of dysfunctional APC will fail for the same reasons',
        'Immediately propose an AI override system that prevents operators from disabling APC, ensuring the automated system runs without interruption and generates consistent data for future AI models',
        'Accept the current situation and build AI models using the manual operation data, since operator decisions represent domain expertise that AI should learn from and replicate',
        'Recommend replacing the current APC vendor with a more modern system, as frequent manual overrides indicate the technology is obsolete and cannot be rehabilitated'
      ],
      correctIndex: 0,
      explanation: 'A 60% manual override rate is a clear signal that the APC system has lost operator trust — and trust, once lost, is the hardest thing to rebuild. The root causes are almost always fixable: models that no longer represent current process behavior (model-plant mismatch), constraint limits set so conservatively that APC cannot achieve the operating target operators know is achievable, inadequate training so operators do not understand what APC is doing, or unreliable performance during abnormal situations. Building AI on top of a distrusted APC generates two problems: the training data is a mix of APC-controlled and manually-controlled operation (making it very noisy), and operators who do not trust APC will trust AI-generated recommendations even less. Fix APC health first.',
      interviewNote: 'This scenario is based on real engagement situations. The instinct is to add more technology; the right answer is to fix the foundation. APC override rate is a leading indicator of organizational readiness for AI — if it is above 30%, the APC program needs remediation before any AI investment.'
    },
    {
      id: 'q03-10',
      type: 'scenario',
      question: 'A client\'s process engineer states: "Our crude distillation unit currently operates at an average overhead temperature of 168°C with a standard deviation of 4.2°C. After APC, we expect to tighten standard deviation to 1.8°C. Why does this variability reduction translate into economic value?"',
      options: [
        'Tighter variability allows the average setpoint to be moved closer to the constraint (e.g., lower overhead temperature to cut more naphtha into the kerosene stream), recovering product margin that was previously sacrificed as a "safety buffer" against variability swings — every degree of tighter control translates into yield and energy benefits that compound across the full throughput',
        'Tighter variability has no direct economic value — it is a process quality metric that matters to engineers but does not affect the P&L; the economic benefit of APC comes from faster response to feed upsets, not from statistical variability reduction',
        'Tighter variability means the DCS logs fewer alarm events per shift, which reduces the administrative burden on operators and shift supervisors, freeing time for other value-adding activities — this indirect benefit is the primary economic justification for APC',
        'The economic value comes entirely from reduced energy consumption — running at a consistent temperature is more energy-efficient than frequent temperature fluctuations, and this energy saving can be directly calculated from the heat curve of the column'
      ],
      correctIndex: 0,
      explanation: 'The economic logic of variability reduction is the "move the average toward the constraint" argument. If the overhead temperature must stay above 165°C (minimum quality spec) and the current standard deviation is 4.2°C, the operator must set the average at 168°C to ensure the temperature rarely dips below 165°C (a 3-sigma buffer would require 165 + 3×4.2 = 177.6°C, but in practice operators use experience-based margins). With APC reducing sigma to 1.8°C, the operator can confidently operate at 166.5°C — this change in operating point shifts the fractionation cutpoint, moving valuable product across the cut. Multiply this across every constrained variable in every unit and the cumulative economic impact is substantial. Energy savings are a real secondary benefit but the primary value is from operating closer to constraints.'
    }
  ]
};
