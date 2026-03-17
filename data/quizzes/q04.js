window.QUIZ_Q04 = {
  id: 'q04',
  moduleId: 'm04',
  title: 'Real-Time Optimization (RTO) — Knowledge Check',
  questions: [
    {
      id: 'q04-01',
      type: 'mcq',
      question: 'What is the fundamental distinction between APC (Advanced Process Control) and RTO (Real-Time Optimization)?',
      options: [
        'APC stabilizes process variables and controls quality/operating constraints on a 1-5 minute cycle; RTO determines the economically optimal operating targets (setpoints) for APC to chase, running every 30 minutes to hours based on an economic objective function',
        'APC is a software layer installed on the DCS; RTO is a hardware upgrade that replaces DCS controllers with faster processors capable of multi-unit optimization calculations',
        'APC optimizes individual process units in isolation; RTO is identical to APC but runs across multiple units simultaneously — they differ only in geographic scope, not in methodology',
        'APC uses real-time sensor data while RTO uses only laboratory sample results — the distinction is purely about data source, with RTO waiting for LIMS results before calculating any optimization'
      ],
      correctIndex: 0,
      explanation: 'APC and RTO operate at different layers of the automation hierarchy with different objectives and timescales. APC is a control-focused layer: it receives setpoint targets and works to keep the process at those targets while managing constraints and variability, executing every 1-5 minutes. RTO is an optimization-focused layer: it runs a steady-state economic model of the process (or plant section) and solves an optimization problem — maximize product revenue minus feedstock cost minus utility cost — to determine what the optimal targets should be, running every 30 minutes to several hours. APC asks "how do I get to the target stably?" — RTO asks "what should the target be?" These are fundamentally different questions requiring different mathematics.',
      interviewNote: 'The APC vs. RTO distinction is tested in almost every refinery technology discussion. The cleanest summary is: APC controls to a target, RTO sets the optimal target. A refinery without APC cannot benefit from RTO recommendations because there is no reliable mechanism to execute the targets RTO generates.'
    },
    {
      id: 'q04-02',
      type: 'mcq',
      question: 'The refinery automation hierarchy is typically described as five levels. Which of the following correctly lists these levels from bottom (physical) to top (business)?',
      options: [
        'Level 1: Field (sensors/actuators) → Level 2: DCS (basic process control) → Level 3: APC (multivariable control) → Level 4: RTO (economic optimization) → Level 5: Scheduling/Planning (production planning)',
        'Level 1: Safety (SIS) → Level 2: Control (DCS) → Level 3: Monitoring (historian) → Level 4: Analytics (AI/ML) → Level 5: Enterprise (ERP)',
        'Level 1: Sensors → Level 2: SCADA → Level 3: APC → Level 4: AI/ML → Level 5: Digital Twin',
        'Level 1: Equipment → Level 2: Operators → Level 3: Engineers → Level 4: Managers → Level 5: Executives'
      ],
      correctIndex: 0,
      explanation: 'The five-level automation hierarchy (based on the ISA-95 / Purdue Model framework) defines how automation systems nest within each other. Level 1 (Field): physical sensors, transmitters, and actuators that measure and affect the process. Level 2 (DCS/PLC): basic regulatory control — PID loops that maintain individual process variables. Level 3 (APC): multivariable predictive control that coordinates multiple Level 2 loops simultaneously. Level 4 (RTO): economic steady-state optimization that determines optimal targets for APC. Level 5 (Scheduling/Planning/ERP): production scheduling, crude procurement, product sales — the business layer that sets constraints for RTO. Each level communicates primarily with the adjacent levels. AI/ML applications can appear at multiple levels but must respect this hierarchy when determining integration points.',
      interviewNote: 'Drawing this five-level hierarchy on a whiteboard is one of the most effective ways to orient a mixed audience of IT and operations stakeholders. It answers "where does AI fit?" immediately: advanced analytics and AI advisory tools live between Level 4 and Level 5, with real-time AI applications interfacing with Level 3-4.'
    },
    {
      id: 'q04-03',
      type: 'mcq',
      question: 'RTO relies on a "steady-state assumption." What does this mean, and what is its practical limitation?',
      options: [
        'RTO assumes the process is at or near steady state before running its optimization — this means RTO must wait for the process to stabilize after disturbances before its recommendations are valid, making it slow to respond during dynamic transitions such as grade changes or feed upsets',
        'The steady-state assumption means RTO ignores all dynamic transients and only optimizes average performance over a rolling 24-hour window, making it unsuitable for anything faster than daily optimization cycles',
        'Steady-state assumption means RTO assumes product prices and utility costs are constant throughout the day — it cannot account for intra-day price changes in power or product markets',
        'The steady-state assumption means RTO assumes the process operates at its design capacity at all times — during partial-load operations the RTO model is inaccurate and must be manually adjusted by engineers'
      ],
      correctIndex: 0,
      explanation: 'Traditional (steady-state) RTO solves a nonlinear programming (NLP) problem using a rigorous steady-state process model. For this model to be valid, the process must actually be at or very near steady state — all process variables should be stable and not actively changing. This creates a practical limitation: after a feed rate change, crude switch, or any significant disturbance, the process enters a dynamic transition that can take 30 minutes to several hours to stabilize. RTO must wait or use a "steady-state detector" to determine when it is valid to run. This limitation motivated the development of Dynamic RTO (DRTO), which uses dynamic process models and can optimize during transitions, but DRTO is significantly more computationally complex and less widely deployed. The steady-state limitation is most consequential for highly dynamic operations.',
      interviewNote: 'When evaluating RTO for a client, always ask: "How frequently does your process reach true steady state between disturbances?" For some crude units running on a stable crude blend with infrequent feed changes, this is fine. For units that switch crude types multiple times per day or run highly dynamic operations, the steady-state assumption becomes a binding constraint on RTO value.'
    },
    {
      id: 'q04-04',
      type: 'mcq',
      question: 'What is the economic objective function that RTO typically maximizes for a refinery process unit?',
      options: [
        'Product revenue (price × volume of each product) minus feedstock cost (price × feed volume) minus utility cost (steam, fuel, electricity, hydrogen) minus quality give-away cost — subject to all process and equipment constraints',
        'Total throughput volume in barrels per day — RTO maximizes how much crude is processed regardless of product mix, since higher throughput always generates higher revenue',
        'Gross Refining Margin (GRM) for the entire refinery — RTO optimizes at the refinery level by continuously adjusting all unit operations to maximize the overall refinery margin number reported to management',
        'Energy efficiency in MBtu/bbl — RTO\'s primary objective is always to minimize energy consumption since this is the largest controllable operating cost and directly impacts the refinery\'s carbon footprint'
      ],
      correctIndex: 0,
      explanation: 'The RTO economic objective function is a profit maximization (or cost minimization) problem. On the revenue side: volumes of each product stream multiplied by their market prices. On the cost side: feedstock cost (crude or intermediate feeds), utility costs (high-pressure steam, fuel gas, electricity, hydrogen, cooling water), and sometimes quality give-away (producing better than spec quality when it could be used to increase yield). The objective function is solved subject to constraints: process variable limits (temperatures, pressures, flows), equipment capacity constraints, product quality specifications, and environmental permit limits. Pure throughput maximization (option B) ignores that producing more of a low-value product and less of a high-value product can reduce profit. Pure energy minimization (option D) ignores that sometimes burning more fuel to recover more valuable product is economically optimal.'
    },
    {
      id: 'q04-05',
      type: 'mcq',
      question: 'What is Dynamic RTO (DRTO) and when is it preferable to standard steady-state RTO?',
      options: [
        'Dynamic RTO uses dynamic process models that are valid during process transitions — it is preferable when the process changes frequently (multiple grade changes per day, frequent feed composition changes) and steady-state is rarely achieved, making traditional steady-state RTO rarely applicable',
        'Dynamic RTO is a marketing term for RTO systems that update every 5 minutes instead of every 30 minutes — the only difference is execution frequency, not the underlying model type',
        'Dynamic RTO refers to RTO systems that automatically retrain their optimization models using machine learning — it is preferable when the process has non-stationary behavior that traditional engineering models cannot capture',
        'Dynamic RTO is a planned future technology that has not yet been commercially deployed — all current commercial RTO systems are steady-state and DRTO remains in academic research'
      ],
      correctIndex: 0,
      explanation: 'Dynamic RTO (DRTO) replaces the steady-state process model with a dynamic model (typically differential-algebraic equations, DAE, similar in form to MPC models but more rigorous and economically focused). This allows the optimizer to plan optimal trajectories through transitions rather than just optimizing the steady-state endpoint. DRTO is computationally demanding but valuable in operations where transitions are frequent and significant: polymer grade changes, batch-continuous integration, refineries with frequent crude switches, or any unit where the transient path itself has economic impact (e.g., producing off-spec product during a transition that must be blended out). Standard steady-state RTO remains more common in refining because many units do run at near-steady-state for extended periods, but DRTO adoption is growing as computational power increases.',
      interviewNote: 'Knowing that Dynamic RTO exists and understanding the case for when it is preferred over steady-state RTO demonstrates a more sophisticated understanding than most generalist consultants will have. It also positions you to ask the right qualification question: how frequently does this process experience major transitions?'
    },
    {
      id: 'q04-06',
      type: 'mcq',
      question: 'In the pre-AI readiness checklist for a refinery, what are LIMS and CMMS, and why are they relevant to an AI transformation?',
      options: [
        'LIMS (Laboratory Information Management System) manages lab sample results and quality data; CMMS (Computerized Maintenance Management System) manages equipment maintenance records, work orders, and asset history — both are critical AI data sources for quality prediction and predictive maintenance respectively',
        'LIMS (Line Integrity Monitoring System) tracks pipeline corrosion data; CMMS (Crude Management and Scheduling System) handles crude procurement — both are relevant only for upstream and midstream AI applications, not for refinery unit optimization',
        'LIMS and CMMS are legacy acronyms for the DCS and APC systems respectively — they represent older terminology that has been replaced in modern refinery technology discussions',
        'LIMS (Logistics and Inventory Management System) tracks product inventory; CMMS (Cost and Margin Management System) tracks financial performance — they are business systems relevant for RTO economic inputs but not for process AI applications'
      ],
      correctIndex: 0,
      explanation: 'LIMS (Laboratory Information Management System) is the system where all laboratory analyses are recorded and managed: crude assay results, product quality measurements (octane, flash point, sulfur content, viscosity, cetane index), and process stream quality checks. This data is essential for AI quality prediction models — without reliable LIMS data, you cannot train or validate any quality-related AI. CMMS (Computerized Maintenance Management System) records all maintenance activities: work orders, failure history, maintenance intervals, parts used, and maintenance costs. This data is the foundation for predictive maintenance AI — knowing what maintenance was done, when, and what failure preceded it is critical for building failure prediction models. Both systems must be digitized, accessible via API, and historically complete for AI projects to succeed.',
      interviewNote: 'In your readiness assessment, always ask: "Do you have LIMS? How far back does the data go? Is it connected to your process historian or is it a separate island?" The same for CMMS. A refinery with 10 years of AVEVA PI data but paper-based LIMS and CMMS is in a very different AI readiness state than one where all three systems are digitized and integrated.'
    },
    {
      id: 'q04-07',
      type: 'truefalse',
      question: 'RTO typically operates on a timescale of 30 minutes to several hours, compared to APC which executes every 1-5 minutes — this slower cycle is appropriate because RTO is solving a more complex optimization problem and because the process must approach steady state between RTO executions.',
      options: ['True', 'False'],
      correctIndex: 0,
      explanation: 'True. The different timescales reflect fundamentally different computational and process requirements. APC solves a quadratic programming (QP) problem on a model with perhaps 10-30 variables, which completes in seconds — it must execute frequently (1-5 minutes) to keep up with process dynamics. RTO solves a nonlinear programming (NLP) problem on a rigorous thermodynamic process model (often a full simulation model with hundreds of equations) that may take 5-20 minutes of computation, and requires the process to be at or near steady state to produce valid results. The 30-minute to multi-hour RTO cycle is therefore set by both computation time and the minimum time needed for the process to settle after the previous RTO move before a valid new steady state can be observed and a new optimization can be run.'
    },
    {
      id: 'q04-08',
      type: 'truefalse',
      question: 'A refinery can capture the full value of RTO without having APC installed, as long as it has experienced panel operators who can manually implement the setpoint changes that RTO recommends within a reasonable time window.',
      options: ['True', 'False'],
      correctIndex: 1,
      explanation: 'False. Without APC, manual implementation of RTO setpoint targets creates two critical problems. First, speed and consistency: RTO may recommend coordinated changes to 10-15 setpoints across multiple loops simultaneously — a panel operator implementing these manually over 15-30 minutes introduces sequencing errors and partial implementations that can destabilize the process. Second, variability: without APC maintaining tight control around the new RTO targets, process variability quickly erodes the benefit. The operating point drifts away from the RTO optimal almost immediately after the operator implements it. APC is the "servo mechanism" that holds the process at the RTO-specified target precisely and persistently. This is the core reason the hierarchy must be built bottom-up: Field → DCS → APC → RTO → AI.'
    },
    {
      id: 'q04-09',
      type: 'scenario',
      question: 'A refinery Operations Manager says: "We have APC running well on the CDU and Vacuum Unit, with 85%+ active time. We are now considering adding RTO. Our crude mix changes twice a week and product prices update daily. Where does RTO add the most value in our situation, and what is the key implementation risk?"',
      options: [
        'RTO adds the most value in recalculating optimal cutpoints and product yields every time product prices or crude composition changes — with twice-weekly crude changes and daily price updates, manual target recalculation by engineers is slow and imprecise. The key risk is that with crude changes twice weekly, the process may spend significant time in transition (not at steady state), limiting how often RTO recommendations are valid.',
        'RTO adds the most value in replacing the APC controllers on the CDU and Vacuum Unit with a single unified optimization layer, simplifying the control architecture. The key risk is losing the APC capability during the transition period.',
        'RTO adds little value in this situation because twice-weekly crude changes mean the process is almost never at steady state — the Operations Manager should instead focus on Dynamic RTO which is a standard next step after APC.',
        'RTO adds the most value in long-term production planning — daily price updates and twice-weekly crude changes are better handled by the scheduling system (Level 5), not by RTO (Level 4). The Manager should upgrade the scheduling software first.'
      ],
      correctIndex: 0,
      explanation: 'With daily product price changes and twice-weekly crude composition changes, the economic landscape is shifting faster than an engineering team can manually recalculate optimal targets. RTO automates this recalculation — when crude API drops from 35 to 28, RTO recalculates CDU setpoints, VDU vacuum level, and product cutpoints to maximize profit given the new crude and current market prices. This is precisely the RTO value proposition. However, the transition risk is real: twice-weekly crude changes create process transitions that may last 4-8 hours each, during which the steady-state assumption is violated. The implementation team must design the steady-state detector carefully and possibly consider DRTO if transitions are found to represent more than 20-25% of operating time. The Operations Manager's 85% APC active time is a good foundation to build on.'
    },
    {
      id: 'q04-10',
      type: 'scenario',
      question: 'You are presenting the pre-AI readiness checklist to a refinery client. They have: AVEVA PI historian (15 years of data), a CMMS system (SAP PM, 8 years of data), but NO LIMS — all laboratory results are recorded in paper logbooks and Excel files maintained by individual lab technicians. They want to start with an AI quality prediction project for diesel cetane index. What is your assessment and recommendation?',
      options: [
        'The absence of a digital LIMS is a critical gap for a quality prediction project — cetane index prediction requires reliable historical quality data as the target variable for model training. Recommend either digitizing the historical lab data into a structured LIMS/database first (6-12 month effort), or scoping an initial predictive maintenance project using PI and SAP PM data while LIMS digitization proceeds in parallel.',
        'The paper-based LIMS is not a barrier — instruct the team to enter all historical cetane data into a spreadsheet in the next two weeks and use that as the training dataset. The 15 years of PI data is the important foundation and LIMS data is only needed for model validation.',
        'Proceed with the quality prediction project immediately using only PI process data — modern AI techniques like unsupervised clustering can predict product quality without any laboratory measurements as the training target, making LIMS irrelevant.',
        'The lack of LIMS is a regulatory compliance issue that must be resolved before any AI project can begin — advise the client to pause all AI discussions until a LIMS is fully deployed and validated, which typically takes 18-24 months.'
      ],
      correctIndex: 0,
      explanation: 'Diesel cetane index prediction is a supervised ML problem where cetane measurements are the target variable (y) and process variables from the historian are the features (X). Without reliable historical cetane data — accurate, timestamped, linked to the process conditions when the sample was collected — you cannot train or validate the model. Scattered Excel files and paper logbooks are typically inconsistent, incomplete, and lack the precise timestamps needed to join with PI data. However, the strong PI and SAP PM data assets mean predictive maintenance (pump failures, heat exchanger fouling) is immediately feasible. The recommended path is to start where the data is ready, and tackle LIMS digitization as a parallel workstream — this keeps project momentum while building the foundation for quality AI.',
      interviewNote: 'This scenario reflects a very common real-world situation. The instinct is to find a workaround and start immediately; the correct advice is honest data readiness assessment. Starting a quality prediction project with unreliable target variable data produces unreliable models that will fail in production and destroy client confidence in AI broadly.'
    }
  ]
};
