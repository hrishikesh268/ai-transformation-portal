window.QUIZ_BOSS_DAY1 = {
  id: 'boss-day1',
  moduleId: 'boss-day1',
  title: 'Day 1 Boss Challenge — Operations Mastery',
  timeLimit: 1200,
  passingScore: 0.7,
  questions: [
    {
      id: 'bd1-01',
      type: 'scenario',
      question: 'A refinery has a throughput of 180,000 bbl/day against a nameplate capacity of 220,000 bbl/day. The Operations Director says "we\'re running fine." What is the utilization rate, how does it compare to industry benchmarks, and what is the direct revenue implication at a GRM of $11/bbl?',
      options: [
        'Utilization is 81.8% — this is below the 90%+ target for well-run refineries. The gap of 40,000 bbl/day at $11 GRM represents $440,000/day or $160M/year of potential revenue. Even recovering half this gap through better reliability would generate $80M/year — this is the most important number to surface before any AI conversation.',
        'Utilization is 81.8% — this is within normal operating range. Most refineries run between 75-85% to preserve equipment life and maintain operational flexibility for crude switches. The Operations Director is correct that this is fine.',
        'Utilization is 81.8% — the right benchmark comparison requires knowing the refinery\'s NCI score first, since complex refineries intentionally run at lower utilization to allow catalyst regeneration cycles. Cannot assess without NCI data.',
        'Utilization cannot be calculated in bbl/day — you need MTPA (million tonnes per annum) figures to compute utilization correctly because crude oil density varies by grade and bbl/day is not a standardized capacity measure.'
      ],
      correctIndex: 0,
      explanation: '180,000 ÷ 220,000 = 81.8% utilization. Industry benchmarks: world-class refineries target 93-96%; well-run refineries maintain 90%+; 80-90% indicates moderate reliability issues; below 80% signals significant problems. 81.8% is not "fine" — it is approximately 10 percentage points below where this refinery should be. The financial gap: 40,000 bbl/day × $11 GRM × 365 = $160M/year in foregone gross margin. This single calculation — converting utilization gap to dollars — is the most powerful opening for an AI/predictive maintenance business case. The Operations Director\'s dismissal signals either lack of benchmark awareness or defensiveness about reliability performance.',
      interviewNote: 'Any time you see utilization data in a client meeting, immediately calculate the gap to 90% and multiply by GRM. Do this in your head if possible. The number is almost always large enough to justify significant AI investment, and quantifying it immediately demonstrates that you think in their terms.'
    },
    {
      id: 'bd1-02',
      type: 'scenario',
      question: 'A technology vendor proposes deploying their AI optimization system "directly on DCS data in real time, sending setpoint commands automatically without operator approval." What are your three primary concerns with this proposal?',
      options: [
        'Concern 1 (Safety): Direct setpoint commands to DCS bypass the operator, removing human oversight from a safety-critical system — any model error or edge case could drive the process to unsafe conditions faster than any human can intervene. Concern 2 (Architecture): Without APC between AI and DCS, the AI must function as both optimizer AND controller, collapsing two distinct layers — this creates fragility and model-plant mismatch issues. Concern 3 (Trust/Adoption): Operators will immediately find ways to disable a system that removes their control — adoption will collapse within weeks.',
        'Concern 1 (Cost): Direct DCS integration is more expensive than historian-based integration. Concern 2 (Compatibility): The AI vendor\'s protocol may not be compatible with the existing DCS vendor\'s API. Concern 3 (Maintenance): Real-time systems require 24/7 support contracts that are typically 3-5x the cost of advisory systems.',
        'Concern 1 (Data latency): Real-time DCS data has too much noise for AI models to work reliably. Concern 2 (Compute): Running AI in real time requires GPU infrastructure that is not available in most refinery control rooms. Concern 3 (Licensing): DCS vendors charge additional licensing fees for third-party direct interface connections.',
        'Concern 1 (Regulatory): Most countries require AI systems that control process units to be certified under IEC 61511 as Safety Instrumented Systems. Concern 2 (Insurance): Insurers will void plant insurance coverage if autonomous AI setpoint changes cause an incident. Concern 3 (Union): Operations unions typically have contract provisions preventing automation of operator functions without negotiation.'
      ],
      correctIndex: 0,
      explanation: 'Direct autonomous AI-to-DCS setpoint control is a red flag for three foundational reasons. Safety: the DCS is the control layer sitting directly above physical equipment — autonomous setpoint changes without human review remove the last non-automated safety check in normal operations (the SIS handles emergencies, not bad optimization decisions). Architecture: the proven industry hierarchy requires APC between any optimization layer and the DCS; APC provides constraint enforcement, smooth moves, and rate limiting that prevent aggressive optimization moves from causing process upsets. Trust: operators lose the ability to understand what the system is doing, cannot anticipate its moves, and will distrust and disable it at the first unexpected behavior. The correct architecture is: AI generates recommendations → operator reviews → APC executes smoothly → DCS responds.',
      interviewNote: 'The "direct to DCS" vendor claim is one of the clearest warning signs in AI procurement. When you hear it, slow the conversation down and ask: "What happens when the model is wrong? What is the operator\'s role? What prevents a bad recommendation from causing a process upset?" A vendor who cannot answer these questions confidently should not be awarded the project.'
    },
    {
      id: 'bd1-03',
      type: 'scenario',
      question: 'You are reviewing a refinery\'s APC program. APC is installed on 40% of process units; operators report disabling it 60% of the time on the units where it exists. A junior colleague suggests: "This is perfect — we have real operator expertise captured in those manual overrides; we can train AI on the override decisions to replicate expert operator behavior." What is wrong with this reasoning?',
      options: [
        'Manual overrides during APC disablement are a biased, non-representative data set: they capture operator responses to specific conditions that triggered the override (often abnormal operations or model failures), not optimal operations. Training AI on override data would encode the reasons APC was failing, not expert best practice. The correct approach is to fix APC health first and learn from stable, well-controlled operation.',
        'The reasoning is sound — operator override decisions are indeed the highest-quality training signal for AI in process control. However, 60% of the time is not enough data — the team should increase override frequency to 80-90% to generate a richer training dataset before AI deployment.',
        'The only issue is a technical one: DCS override events are typically not logged with sufficient metadata to link operator decisions to process outcomes. The conceptual approach of learning from operators is correct but requires a custom data capture system.',
        'Training AI on override data is valid for advisory systems but not for closed-loop control. The junior colleague\'s approach is fine as long as the AI is limited to recommendations that operators can choose to accept or reject.'
      ],
      correctIndex: 0,
      explanation: 'This is a classic data quality and selection bias problem. Operators disable APC in specific circumstances: when the model is performing poorly, during abnormal operations, during crude transitions, or when they are uncertain about the controller\'s response to unusual conditions. This means the override dataset represents a subset of process conditions that are specifically associated with APC underperformance — not a representative sample of normal operations. Building AI that replicates the reasons operators override a struggling APC controller would be building a model of suboptimal responses to APC failure modes. Furthermore, different operators have different styles, knowledge levels, and risk tolerances — "operator expertise" is not monolithic. Fix APC health first, then study the optimal behavior of a well-functioning APC+operator system.',
      interviewNote: 'The "learn from operator overrides" argument sounds appealing but is almost always wrong. The best training data for process optimization AI comes from periods of stable, APC-controlled operation with good performance — not from the exception cases that caused operators to take manual control.'
    },
    {
      id: 'bd1-04',
      type: 'mcq',
      question: 'The Nelson Complexity Index (NCI) of a refinery is 14. A competing refinery in the same region has an NCI of 5. If both refineries have the same nameplate capacity of 200,000 bbl/day, which statement best explains the strategic difference for AI transformation?',
      options: [
        'The NCI 14 refinery has far more process units, more interacting variables, more conversion options, and a more complex economic optimization problem — meaning both the potential AI benefit (more to optimize) and the implementation challenge (more units, more data sources, more stakeholders) are significantly higher than at the NCI 5 refinery',
        'The NCI 14 refinery will achieve lower ROI from AI because its complexity makes it harder to optimize — simpler operations at the NCI 5 refinery allow AI to make more impactful improvements with less effort',
        'NCI has no relevance to AI transformation potential — the primary driver of AI ROI is throughput volume, and both refineries process the same 200,000 bbl/day regardless of complexity',
        'The NCI 14 refinery should prioritize AI for crude selection optimization while the NCI 5 refinery should focus on predictive maintenance — complexity determines the appropriate AI use case category'
      ],
      correctIndex: 0,
      explanation: 'A refinery with NCI 14 has significantly more secondary conversion units: FCC, hydrocracker, coker, reformer, multiple treating units, and complex product blending systems. Each additional unit adds variables to the optimization problem, additional data sources to integrate, and additional failure modes to predict. The AI opportunity is proportionally larger: more units means more APC optimization potential, more equipment to apply predictive maintenance, and a more complex product routing and blending optimization that can benefit from ML. However, the implementation is also more complex: more stakeholder groups, more DCS systems (often from multiple vendors), more data silos, and more organizational change management required. High-complexity refineries have the highest AI upside but also the highest execution risk — they require a more phased approach.'
    },
    {
      id: 'bd1-05',
      type: 'scenario',
      question: 'A refinery\'s CDU has been running for 14 months since its last major turnaround. The lead process engineer tells you: "Our preheat train heat exchange efficiency has dropped from 68% to 59% over the past six months. The operators keep increasing furnace firing to compensate." What is happening, why is it costly, and what AI application addresses it?',
      options: [
        'The preheat train is experiencing fouling — crude deposits are coating heat exchanger surfaces, reducing heat transfer efficiency. Operators compensating with more furnace firing increases fuel consumption and CO2 emissions. The economic impact is direct: every 1% drop in preheat efficiency increases furnace fuel consumption by roughly 0.5-1%. AI fouling prediction models can forecast the optimal cleaning schedule (wash cycles, mechanical cleaning) to maintain efficiency while minimizing costly planned interventions.',
        'The preheat efficiency drop is a normal seasonal variation caused by ambient temperature changes affecting cooling water temperature — 68% to 59% over six months is within normal operating variation and no action is needed until the next scheduled turnaround.',
        'The efficiency drop indicates a process chemistry change in the crude blend — heavier crude has lower heat capacity, so the same heat exchanger recovers less heat. The solution is to switch to lighter crude, not to clean the exchangers or deploy AI.',
        'Preheat train efficiency dropping from 68% to 59% indicates the CDU column is flooding — liquid is backing up into the preheat section. AI cannot help here because this is a mechanical design issue requiring capital modification.'
      ],
      correctIndex: 0,
      explanation: 'Crude preheat train fouling is one of the most economically significant and well-documented AI use cases in refining. As crude flows through the pre-heat exchanger network before the CDU furnace, asphaltenes and other heavy compounds deposit on heat exchanger surfaces, reducing the overall heat transfer coefficient (U-value) and therefore efficiency. The furnace must fire harder to compensate, directly increasing fuel consumption (energy cost) and CO2 emissions. This is very often monitored through the "preheat efficiency" or "approach temperature" metric. ML-based fouling prediction models use process variables (inlet/outlet temperatures, flow rates, pressure drops) to forecast the fouling rate and predict optimal cleaning timing, balancing cleaning cost against energy cost. This is a well-proven use case with ROI typically measured in hundreds of thousands to millions of dollars per year.',
      interviewNote: 'Crude preheat train fouling prediction is frequently cited as one of the top-3 highest-ROI AI use cases in refining. Knowing the mechanism (asphaltene deposition → reduced U-value → increased furnace firing → energy cost increase) and the AI solution (ML fouling rate prediction → optimized cleaning schedule) is a core part of your refinery AI pitch.'
    },
    {
      id: 'bd1-06',
      type: 'mcq',
      question: 'What is the correct safety-criticality ordering of the control and safety layers in a refinery, from least to most safety-critical?',
      options: [
        'APC (least critical) → DCS basic control → SIS/ESD (most critical) — each higher layer operates independently of the one below and cannot be overridden or bypassed by a lower layer during an emergency',
        'DCS (least critical) → APC → SIS/ESD (most critical) — the DCS is just a data collection layer; all real control is handled by APC and safety by SIS',
        'SIS (least critical, rarely activated) → DCS → APC (most critical, runs most often) — frequency of operation determines safety criticality',
        'All three layers are equally safety-critical and must be designed to the same SIL level — no hierarchy exists in modern integrated safety and control architectures'
      ],
      correctIndex: 0,
      explanation: 'The safety hierarchy runs: APC at the top of the optimization/control stack (advisors to DCS, can be disabled without process safety impact), DCS in the middle (regulatory control, process safety concerns if failures occur but recoverable), and SIS/ESD as the last line of automated safety defense (absolutely must not fail, designed to IEC 61511 SIL requirements, architecturally independent from DCS). When an upset occurs: APC tries to control within normal limits; if APC cannot handle it or is disabled, DCS PID control takes over; if DCS cannot maintain safe limits, SIS activates and shuts the process down or to a safe state. Critically, the SIS must operate independently of both DCS and APC — its sensors, logic solvers, and actuators cannot be shared. No AI system, regardless of how sophisticated, should ever be placed in a position where it could interfere with SIS activation.'
    },
    {
      id: 'bd1-07',
      type: 'mcq',
      question: 'A refinery operates at a GRM of $8.50/bbl with throughput of 250,000 bbl/day. A process engineer presents data showing that better column cutpoint optimization via APC could shift 1.2% of current naphtha production into diesel (currently diesel price premium = $18/bbl over naphtha). What is the annual value of this cutpoint optimization?',
      options: [
        '$250,000 × 0.012 × $18 × 365 = approximately $19.7M/year — the incremental value comes from repricing 3,000 bbl/day from naphtha to diesel pricing, not from the GRM, since this is a product mix optimization within existing throughput',
        '$250,000 × $8.50 × 365 × 0.012 = approximately $9.3M/year — you multiply GRM by throughput by the 1.2% improvement factor',
        '$18/bbl × 250,000 bbl/day × 365 = $1.64B/year — the full diesel premium applies to all throughput since we are changing the entire product slate',
        'Cannot calculate without knowing the refinery\'s total naphtha production volume and the current naphtha market price — the 1.2% shift is meaningless without the absolute baseline volume'
      ],
      correctIndex: 0,
      explanation: 'This is a product mix optimization calculation, not a throughput expansion calculation — so GRM ($8.50/bbl) is not the right multiplier. The value comes from repricing a volume of product from the naphtha price to the diesel price. Volume shifted: 250,000 × 1.2% = 3,000 bbl/day. Each barrel shifted earns an additional $18 (the diesel-naphtha price differential). Annual value: 3,000 × $18 × 365 = $19.71M/year. This is the incremental margin from the product mix change alone. This type of calculation — cutpoint shift × volume × price differential — is the core economic model for distillation column optimization AI. The GRM figure ($8.50) is irrelevant here because we are not changing throughput, just the value of what we produce with existing throughput.',
      interviewNote: 'Product mix value calculations are a distinct skill from throughput value calculations. Mixing them up in front of a client CFO is a credibility-damaging error. Know when to use: price differential × shifted volume (product mix) vs. GRM × incremental throughput (utilization recovery).'
    },
    {
      id: 'bd1-08',
      type: 'scenario',
      question: 'During an engagement kick-off, the Plant Manager says: "We had an AI vendor here six months ago. They built a dashboard with 40 KPIs and called it AI. The operators looked at it for two weeks, then stopped. Complete waste of money. Why will your approach be different?" How do you respond?',
      options: [
        '"What you\'re describing is a classic implementation failure pattern — beautiful dashboards that inform but do not act. Our approach starts differently: we spend the first phase understanding which decisions operators actually make and at what frequency, then build recommendations that fit into their existing workflow rather than adding another screen to watch. And we measure success by operator adoption rate and process KPI improvement, not by dashboard clicks."',
        '"The previous vendor clearly did not have experience in refining — our firm has worked in over 30 refineries globally and our AI models are pre-trained on industry data, so we do not need to build from scratch. We can have an operational system running within 6 weeks."',
        '"That experience is unfortunately common across the industry, but AI technology has advanced significantly in the past six months. Large language models and generative AI can now interpret process data in natural language, which solves the adoption problem by making AI accessible to all operators regardless of technical background."',
        '"The key difference is that we use explainable AI (XAI) techniques, which allow operators to see exactly why the AI made each recommendation. Once operators can see the reasoning, trust follows naturally and adoption problems disappear."'
      ],
      correctIndex: 0,
      explanation: 'The plant manager has described dashboard fatigue — a failure mode where AI becomes yet another information tool that adds cognitive load without changing behavior or outcomes. The right response demonstrates three things: (1) you have heard this before and have a clear diagnosis (dashboards inform, they do not decide), (2) your approach is workflow-first, not technology-first (start with operator decisions, not with available data), and (3) you measure success operationally, not technically. Option B is a sales pitch that dismisses the failure without addressing the root cause. Option C pivots to a technology trend (LLMs) that is irrelevant to the actual problem. Option D (XAI) addresses one factor but ignores the workflow and adoption design problem.',
      interviewNote: 'Almost every senior operations leader has seen at least one failed AI or analytics project. Your credibility is established in the first 60 seconds of handling this objection. Acknowledge the pattern, diagnose it correctly, and explain your differentiated approach without disparaging the previous vendor.'
    },
    {
      id: 'bd1-09',
      type: 'mcq',
      question: 'A HAZOP study identifies a scenario where a control valve fails open in the hydrogen supply to a hydrocracker reactor, potentially causing a runaway exothermic reaction. What layers of protection (in order from first to last) would a well-designed refinery deploy against this scenario?',
      options: [
        'Basic process design (reactor design limits) → DCS alarm and operator response → High-high temperature SIS trip → Emergency pressure relief valve (PRV) → Plant emergency response procedure',
        'SIS trip (first and most important) → DCS alarm → Operator response → PRV → HAZOP documentation update',
        'Operator manual check → DCS monitoring → PRV → SIS → Emergency shutdown of entire refinery',
        'AI anomaly detection (real-time monitoring) → DCS alarm → Operator response → SIS trip → PRV'
      ],
      correctIndex: 0,
      explanation: 'This follows the Layers of Protection Analysis (LOPA) framework — independent protection layers (IPLs) are deployed in sequence, each independent of the others, so that multiple failures must occur simultaneously for the accident to proceed. Process design (correct valve sizing, reactor design pressure) is the inherent first layer. DCS instrumentation provides early warning and operator opportunity to intervene before the process reaches dangerous limits. The SIS (Safety Instrumented Function) with its independent sensors and logic provides automatic shutdown if the DCS/operator response fails or is too slow. The PRV is the final mechanical protection layer that does not depend on any instrument or software. Emergency response handles the aftermath. Note that AI/ML anomaly detection (option D) is not a certified protection layer — it can provide early warning but cannot replace certified IPLs in the LOPA framework.',
      interviewNote: 'Understanding that AI is not a certified safety layer is essential. When proposing AI anomaly detection, always frame it as a supplementary early warning tool that improves operator response time — never as a replacement for SIS or mechanical safeguards. Refineries with strong process safety culture will immediately challenge any AI proposal that blurs this boundary.'
    },
    {
      id: 'bd1-10',
      type: 'mcq',
      question: 'What does "energy intensity" measure in a refinery, what are typical values, and what are the main operational levers to improve it?',
      options: [
        'Energy intensity is energy consumed per unit of crude processed (MBtu/bbl or GJ/tonne) — world-class refineries achieve 60-80 MBtu/bbl; poor performers exceed 110 MBtu/bbl. Primary levers: heat exchanger cleaning (reduces furnace firing), APC/RTO to minimize heating/cooling cycles, steam trap maintenance, fuel gas composition optimization, and reducing unnecessary flaring.',
        'Energy intensity is the cost of energy per barrel of product sold — it measures total electricity, gas, and steam cost divided by product revenue, with world-class refineries below 5% energy cost as a percentage of revenue.',
        'Energy intensity measures total refinery CO2 emissions per barrel of crude processed — it is an environmental compliance metric set by regulation with no direct operational optimization lever beyond switching to lower-carbon utility fuels.',
        'Energy intensity is the ratio of actual energy consumption to theoretical thermodynamic minimum energy consumption — the theoretical minimum for crude distillation is 0 MBtu/bbl, so the efficiency gap represents 100% waste that AI can fully eliminate with sufficient optimization.'
      ],
      correctIndex: 0,
      explanation: 'Energy intensity (also called the Energy Intensity Index or Solomon energy factor) is measured in MBtu per barrel equivalent (or GJ/tonne in metric systems) and represents total energy consumed divided by total crude processed. World-class simple refineries achieve 60-70 MBtu/bbl; complex refineries with more conversion units typically run 80-110 MBtu/bbl due to additional processing. Key improvement levers: preheat train efficiency (fouled exchangers increase furnace fuel consumption directly), APC/RTO reducing unnecessary temperature cycling and reflux rates, steam system optimization (steam traps, waste heat recovery), fuel gas management (maximizing calorific value of fuel), and minimizing flaring (both an energy waste and emission source). AI use cases addressing energy include heat exchanger fouling prediction, furnace combustion optimization, and steam system AI advisors.'
    },
    {
      id: 'bd1-11',
      type: 'scenario',
      question: 'An RTO system has been deployed on the CDU/VDU section for 8 months. The process engineer reports: "RTO runs correctly about 55% of the time. The other 45% it either fails the steady-state detector check and skips the execution cycle, or its recommended moves are overridden by the shift supervisor because they seem too aggressive." Is this RTO deployment successful, and what action should be taken?',
      options: [
        'A 55% execution rate with 45% either failing steady-state detection or manual overrides indicates the RTO deployment is underperforming. Root cause investigation should cover: (1) steady-state detector threshold calibration (may be too sensitive, rejecting valid operating states), (2) RTO model validation (if the model is inaccurate, supervisors are right to override), and (3) operator training on how to interpret RTO recommendations to reduce unwarranted overrides.',
        'A 55% execution rate is considered excellent for RTO deployment — industry benchmarks suggest RTO operates validly only 40-60% of the time due to frequent process transitions, so this deployment is performing at the upper end of expectations.',
        'The 45% override rate is the primary problem — the shift supervisors should be instructed to trust the RTO system and reduce manual overrides to below 10%. Manual overrides indicate organizational resistance that needs to be addressed through management directive.',
        'The solution is to switch from steady-state RTO to Dynamic RTO — this would eliminate the steady-state detector failures (the 45% invalid runs) and capture the remaining optimization value. DRTO deployment should be prioritized immediately.'
      ],
      correctIndex: 0,
      explanation: 'A combined 45% failure-to-execute-or-override rate warrants structured investigation, not acceptance. The two failure modes have different root causes. Steady-state detector failures (process not stable enough for RTO to run): may indicate the detector threshold is overly conservative, that APC performance needs improvement to stabilize the process faster after disturbances, or that actual operating conditions genuinely include more transitions than the RTO was designed for. Supervisor overrides: if the RTO recommendations consistently look "too aggressive" to experienced operators, this is a strong signal that the RTO model has drifted from actual process behavior — model-plant mismatch. This requires RTO model re-identification and validation. Both issues are fixable. DRTO (option D) is a valid long-term consideration but does not address the model accuracy or override trust issues.',
      interviewNote: 'RTO deployment health metrics — execution rate, override rate, model accuracy KPIs — are the ongoing measurement framework for RTO programs. In any engagement involving existing RTO, ask for these numbers in the first data request. They tell you the real state of the program regardless of what the presentation slides say.'
    },
    {
      id: 'bd1-12',
      type: 'mcq',
      question: 'What is the primary purpose of a refinery turnaround (planned maintenance shutdown) and which of the following best describes the data opportunity it creates for AI programs?',
      options: [
        'Turnarounds allow access to internal equipment surfaces that cannot be inspected during normal operations — wall thickness measurements, weld inspections, catalyst sampling, heat exchanger tube bundles, and vessel internal inspections. This inspection data, combined with operational process data from the preceding run, enables degradation models that predict remaining equipment life and optimize the next turnaround scope.',
        'Turnarounds are primarily regulatory events required by environmental permits — they create AI opportunities mainly in emissions reporting and compliance prediction but not in process optimization since units are offline during the shutdown.',
        'Turnarounds create AI opportunities primarily for construction scheduling optimization — the large number of concurrent maintenance activities (thousands of work orders over 3-8 weeks) can be optimized by AI project management tools to minimize the total shutdown duration.',
        'Turnarounds are the primary source of failure data for predictive maintenance AI — since most equipment failures are deliberately induced during turnarounds to test safety systems, this is when the rich failure mode data needed for ML models is generated.'
      ],
      correctIndex: 0,
      explanation: 'A turnaround (TA) creates a unique data collection opportunity that is impossible during normal operations: physical access to every vessel, exchanger, pipe, and piece of rotating equipment. Inspection data collected includes: ultrasonic thickness measurements across pipe and vessel walls (corrosion mapping), internal vessel inspection photos and findings, heat exchanger tube bundle condition (fouling, corrosion, plugging), catalyst sampling and analysis, rotating equipment condition (bearing wear, rotor inspection), and weld inspection. This physical inspection data, timestamped and linked to the process history leading up to the TA, is the ground truth that enables degradation and corrosion prediction AI models. Refineries that fail to digitize and structure TA inspection data — leaving it as paper inspection reports in filing cabinets — are missing the most valuable training data asset they have. The $50-300M TA cost also makes AI-driven TA scope optimization (doing only necessary work, not missing critical work) a high-value application.'
    },
    {
      id: 'bd1-13',
      type: 'truefalse',
      question: 'A Shift Supervisor has more authority than a Panel Operator to deviate from standard operating procedures (SOPs) during abnormal operations, which means AI recommendations targeting operational optimization should be routed to the Shift Supervisor rather than the Panel Operator.',
      options: ['True', 'False'],
      correctIndex: 1,
      explanation: 'False — this confuses authority with implementation. The Shift Supervisor has more decision-making authority, but the Panel Operator is the person who actually executes control actions through the DCS. For real-time optimization recommendations (adjust reflux rate, change column pressure setpoint), routing to the Shift Supervisor who then relays to the Panel Operator creates a communication bottleneck that slows response time and introduces transcription errors. The correct design routes actionable control recommendations directly to the Panel Operator (who can implement them) while providing the Shift Supervisor with a higher-level view of optimization performance, strategy, and alerts that require supervisor-level decisions. Different users need different information from AI: operators need specific, actionable moves; supervisors need operational summary and exception alerts.'
    },
    {
      id: 'bd1-14',
      type: 'mcq',
      question: 'What is the "on-stream factor" of a process unit and how does it differ from the refinery\'s overall "utilization rate"?',
      options: [
        'On-stream factor measures the fraction of time a specific process unit was operational (e.g., the FCC was running 91% of calendar hours); utilization rate measures total throughput versus nameplate capacity for the whole refinery. A refinery can have high utilization but low on-stream factor on specific units if those units are being debottlenecked or run at reduced rates.',
        'On-stream factor and utilization rate are identical metrics expressed differently — on-stream factor is the percentage form and utilization rate is the fractional form of the same underlying calculation (actual throughput ÷ capacity).',
        'On-stream factor is measured only for rotating equipment (pumps, compressors, turbines); utilization rate applies to the entire refinery including static equipment. They are calculated differently because rotating equipment availability is governed by mechanical uptime, not process throughput.',
        'On-stream factor is a safety metric measuring what percentage of safety device tests were completed on schedule; utilization rate is the operational performance metric. The two metrics are tracked by different departments (HSE vs. Operations) and should not be compared.'
      ],
      correctIndex: 0,
      explanation: 'On-stream factor (OSF) and utilization rate measure different things at different scopes. OSF is typically reported at the individual unit level: the FCC ran for 7,978 hours out of 8,760 calendar hours = 91.1% OSF. This is a reliability/availability metric. Utilization rate is typically reported at the refinery level: actual throughput ÷ nameplate capacity. A refinery can run at 94% utilization while having an FCC with only 85% OSF if the FCC underperformance is partially masked by increased CDU throughput that feeds other conversion units, or if the FCC runs at higher-than-normal rate during its on-stream periods. Both metrics matter for AI: OSF drives predictive maintenance value calculations, utilization rate drives throughput optimization value calculations. Confusing them leads to incorrect financial modeling.'
    },
    {
      id: 'bd1-15',
      type: 'scenario',
      question: 'A refinery is preparing for a major AI investment decision. The CFO asks: "If we spend $15M on AI over 3 years, what tangible, measurable improvements should we hold you accountable for?" The refinery processes 300,000 bbl/day at $10 GRM, has 88% utilization (nameplate 340,000 bbl/day), energy intensity of 92 MBtu/bbl (industry benchmark: 78 MBtu/bbl), and APC installed on 60% of units with 70% active time. Construct the business case.',
      options: [
        'Three measurable value streams: (1) Utilization recovery: closing half the 12% utilization gap = 20,400 bbl/day × $10 GRM × 365 = $74.5M/year. (2) Energy intensity improvement to 85 MBtu/bbl (partial benchmark closure) at $4/MBtu on 300,000 bbl/day = $8.4M/year. (3) APC active time from 70% to 85% on existing units = 15% improvement on ~60% of units = estimated $12M/year yield benefit. Total potential: $95M/year against $15M investment, with Year 1 focus on predictive maintenance (fastest ROI) and Year 2-3 on APC improvement and energy optimization.',
        'The CFO should hold the AI vendor accountable only for technology delivery milestones (model accuracy, system uptime, data integration completeness) — operational KPIs like utilization and energy intensity are influenced by too many factors outside AI control to be valid accountability metrics for an AI program.',
        'A $15M investment should generate $15-20M in annual savings based on standard AI ROI benchmarks of 1-1.5x annual return. The specific metrics to track are: MTBF (mean time between failures) for predictive maintenance, APC active time for process control, and dashboard usage rate for adoption. Financial KPIs are the CFO\'s responsibility to calculate from these operational inputs.',
        'The business case cannot be built without a detailed data audit first — the utilization gap, energy intensity gap, and APC performance data provided may not be reliable enough to forecast AI ROI. Recommend a $500K diagnostic study before committing to the $15M program.'
      ],
      correctIndex: 0,
      explanation: 'A CFO asking for accountability metrics is asking you to do exactly this calculation — build a credible, bottoms-up financial case. The three value streams map directly to the data provided. Utilization gap: 300,000 ÷ 340,000 = 88.2%, so the gap to 94% target is ~19,500 bbl/day; recovering half through predictive maintenance and reliability AI is conservative. Energy gap: 92 vs 78 MBtu/bbl = 14 MBtu/bbl gap; a realistic AI target might close this by 50% over 3 years. APC active time improvement: each percentage point of active time improvement on 300,000 bbl/day translates to roughly $2-4M/year in yield and energy benefits. Total three-year NPV well exceeds the $15M investment. Option B (accountability only for tech metrics) is a red flag answer — clients should hold vendors accountable for business outcomes. Option D (diagnostic study first) is reasonable but in this scenario the data provided is sufficient for a first-pass business case.',
      interviewNote: 'This is the capstone question for Day 1: can you build a financial business case from operational data? The answer structure — identify value streams, apply quantification framework, sum to total vs. investment — is the template for every AI business case in refining. Practice this until it is automatic.'
    }
  ]
};
