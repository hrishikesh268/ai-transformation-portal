window.QUIZ_Q02 = {
  id: 'q02',
  moduleId: 'm02',
  title: 'Refinery Operations — Knowledge Check',
  questions: [
    {
      id: 'q02-01',
      type: 'mcq',
      question: 'What is the fundamental difference between the Crude Distillation Unit (CDU) and the Vacuum Distillation Unit (VDU)?',
      options: [
        'CDU operates at atmospheric pressure and separates crude into primary fractions; VDU operates under vacuum to further separate the heavy residue from the CDU bottom without thermal cracking',
        'CDU uses chemical catalysts to crack crude oil; VDU uses physical pressure to compress heavy fractions into lighter products',
        'CDU handles light crude only; VDU handles heavy crude only — they are parallel first-stage units chosen based on crude type',
        'CDU produces fuel products; VDU produces only lubricating oils and waxes for non-fuel applications'
      ],
      correctIndex: 0,
      explanation: 'The CDU separates crude at atmospheric pressure (~350-400°C) into fractions from LPG at the top to atmospheric residue at the bottom. The atmospheric residue still contains valuable heavy gas oil fractions, but heating it further at atmospheric pressure would crack it destructively. The VDU lowers the boiling point by operating under vacuum (~10-40 mmHg), allowing those heavy fractions to vaporize without thermal degradation, yielding vacuum gas oil (VGO) for further processing and vacuum residue at the bottom.',
      interviewNote: 'The CDU/VDU relationship is one of the first things a plant manager will expect you to explain fluently. Frame it as a two-stage separation: CDU does atmospheric separation, VDU extracts remaining value from the CDU bottom by using vacuum to avoid cracking heavy molecules.'
    },
    {
      id: 'q02-02',
      type: 'mcq',
      question: 'A refinery is considering upgrading its heavy vacuum gas oil processing. What is the KEY operational difference between a Fluidized Catalytic Cracker (FCC) and a Hydrocracker?',
      options: [
        'FCC uses heat and catalyst to crack heavy molecules (no hydrogen required), producing high gasoline yield but some low-value coke; Hydrocracker uses hydrogen under high pressure to crack and saturate molecules, producing higher-quality distillates with no coke',
        'FCC is used for light crude only; Hydrocracker is used for heavy crude — they process different feedstocks and cannot be swapped',
        'FCC produces diesel; Hydrocracker produces gasoline — the choice between them depends only on which product the refinery wants to maximize',
        'FCC is a newer technology that is gradually replacing Hydrocrackers because it requires no hydrogen and is therefore cheaper to operate in all scenarios'
      ],
      correctIndex: 0,
      explanation: 'FCC thermally cracks heavy VGO using a fluidized catalyst (zeolite), producing primarily gasoline plus LPG and cycle oil — it generates coke as a byproduct which is burned to regenerate the catalyst. The Hydrocracker adds hydrogen under high pressure (100-200 bar) and temperature to crack and saturate the heavy molecules, producing premium distillates (jet fuel, diesel) with very low sulfur content and no coke. FCC is cheaper to run but produces lower-quality products; the Hydrocracker has high operating costs (hydrogen) but delivers better yields and product quality. Neither is universally superior — the choice depends on crude slate, product demand, and hydrogen availability.',
      interviewNote: 'When discussing AI optimization opportunities, the FCC and Hydrocracker are prime candidates. The FCC has hundreds of interacting variables (riser temperature, catalyst circulation, feed preheat) and the Hydrocracker\'s hydrogen management and reactor temperatures directly impact yield and quality — both reward advanced analytics significantly.'
    },
    {
      id: 'q02-03',
      type: 'mcq',
      question: 'In a refinery control room, what is the primary distinction between a DCS (Distributed Control System) and a SCADA (Supervisory Control and Data Acquisition) system?',
      options: [
        'DCS provides tight, closed-loop process control for continuous processes within a plant boundary (milliseconds to seconds response); SCADA monitors and controls geographically distributed assets like pipelines over wider areas with less frequent updates',
        'DCS is the older technology being replaced by SCADA; modern refineries use SCADA for all control because it is internet-connected and allows remote optimization',
        'DCS handles safety-critical shutdowns and emergency responses; SCADA handles normal day-to-day production control',
        'DCS is used only in the CDU and VDU; SCADA is used in secondary units like the FCC, Hydrocracker, and utilities'
      ],
      correctIndex: 0,
      explanation: 'DCS is designed for continuous, tight-loop process control within a defined geographic boundary (a single plant or unit). It manages thousands of control loops simultaneously with scan rates of milliseconds to seconds, and operators can make real-time adjustments from the control room. SCADA is designed for supervisory monitoring and control of assets spread across wide geographic areas (pipelines, pump stations, tank farms) where communication latency is acceptable. A refinery\'s process units run on DCS; its crude pipelines and product distribution may use SCADA. In modern facilities there is increasing integration between the two, but the fundamental architectural distinction remains.',
      interviewNote: 'Consultants frequently confuse DCS and SCADA. When you explain AI data integration, you must distinguish between them: AI models that require real-time closed-loop response must interface with the DCS; broader monitoring and reporting solutions may work through SCADA or the historian layer above both.'
    },
    {
      id: 'q02-04',
      type: 'mcq',
      question: 'What is a Safety Instrumented System (SIS) and what makes it architecturally distinct from the DCS?',
      options: [
        'SIS is an independent safety layer that monitors specific critical process parameters and triggers automatic shutdowns when dangerous conditions are detected — it is intentionally kept separate from the DCS so that a DCS failure cannot prevent the safety response',
        'SIS is the software layer within the DCS that handles safety alarms and alerts operators to abnormal conditions that require manual intervention',
        'SIS is a regulatory reporting system that logs all safety incidents and near-misses — it does not have any process control or shutdown capability',
        'SIS is identical to the DCS in architecture but uses redundant hardware to ensure it keeps running even if the primary DCS fails'
      ],
      correctIndex: 0,
      explanation: 'The SIS (also called Emergency Shutdown System or ESD) is deliberately architecturally independent from the DCS. It has its own sensors, logic solvers, and final control elements (valves, trips) that are entirely separate from DCS instrumentation. If a process variable crosses a Safety Instrumented Function (SIF) trip point — for example, a reactor temperature exceeding its high-high limit — the SIS activates automatically, overriding DCS control. This independence is critical: a DCS failure, cyberattack, or operator error cannot prevent the SIS from acting. The safety integrity level (SIL) of each SIF is governed by international standards (IEC 61511). No AI system should ever be placed between the DCS and the SIS.',
      interviewNote: 'This is a critical concept for AI positioning. Vendors who propose AI that "directly interfaces with the SIS" or "overrides safety systems" must be challenged immediately. The SIS is sacrosanct — AI optimization happens above the DCS layer, the SIS remains untouched and independent.'
    },
    {
      id: 'q02-05',
      type: 'mcq',
      question: 'A HAZOP (Hazard and Operability Study) is being conducted on a new heat exchanger being added to the naphtha hydrotreater. What is the primary purpose of a HAZOP?',
      options: [
        'To systematically identify how deviations from design intent (e.g., high flow, low pressure, reverse flow) could lead to hazards or operability problems, so that safeguards can be designed before construction',
        'To calculate the financial return on investment for the new heat exchanger by modeling expected energy savings against capital cost',
        'To train operators on the new equipment by walking through the process flow diagram step by step before commissioning',
        'To satisfy regulatory reporting requirements by documenting the equipment specifications and materials of construction for the safety case file'
      ],
      correctIndex: 0,
      explanation: 'HAZOP is a structured, team-based technique that uses guide words (MORE, LESS, NO, REVERSE, OTHER THAN) applied to process parameters (flow, temperature, pressure, composition) to systematically explore every credible deviation from design intent. For each deviation, the team identifies causes, consequences, and existing safeguards, and recommends additional safeguards if the risk is unacceptable. It is conducted before construction or major modification, when design changes are still cost-effective. HAZOPs are required by process safety regulations in most jurisdictions and are a core part of the Process Hazard Analysis (PHA) lifecycle. AI projects modifying process conditions or control logic may trigger requirements for HAZOP review.',
      interviewNote: 'Understanding HAZOP signals process safety awareness to a refinery audience. If your AI project changes process setpoints or control behavior, the refinery\'s safety team will almost certainly require a management of change (MOC) process that may include HAZOP review.'
    },
    {
      id: 'q02-06',
      type: 'mcq',
      question: 'What is the standard operations hierarchy in a refinery, from the field level to the top of site operations, and why does understanding it matter for an AI transformation project?',
      options: [
        'Field Operator → Panel Operator (Control Room) → Shift Supervisor → Operations Manager — understanding this hierarchy matters because AI recommendations must reach the right level and each level has different data needs, authority, and trust thresholds',
        'Data Analyst → Process Engineer → Operations Manager → Plant Director — this is the decision-making chain for technology investments and AI approvals',
        'Instrument Technician → Shift Supervisor → Plant Manager → CEO — AI tools must satisfy each level\'s specific KPI dashboard before full deployment',
        'Control Room Operator → Safety Officer → Maintenance Manager → Operations Director — the safety officer is the critical gatekeeper for any AI that touches process control'
      ],
      correctIndex: 0,
      explanation: 'The operations hierarchy runs from Field Operators who physically interact with equipment and verify readings on the ground, to Panel Operators (control room) who manage the DCS and respond to alarms, to the Shift Supervisor who oversees the entire shift and makes operational decisions including shutdowns, up to the Operations Manager who owns overall plant performance. AI tools must be designed for the right level: real-time anomaly alerts go to panel operators, shift performance summaries go to shift supervisors, and strategic optimization recommendations feed the operations manager and process engineers. Misaligning the AI output to the wrong level of the hierarchy is one of the most common causes of adoption failure.',
      interviewNote: 'Walk into your first stakeholder mapping exercise knowing this hierarchy. If you build a beautiful dashboard for the operations manager but forget the panel operators who actually implement recommendations, your AI tool will not be used.'
    },
    {
      id: 'q02-07',
      type: 'truefalse',
      question: 'A refinery turnaround (planned maintenance shutdown) typically occurs every 3-5 years, can cost $50-300 million, and represents a critical opportunity to collect physical inspection data that cannot be gathered during normal operations.',
      options: ['True', 'False'],
      correctIndex: 0,
      explanation: 'True. Turnarounds (also called "shutdowns" or "outages") are major planned events where the refinery or a major section is taken offline for inspection, maintenance, and equipment replacement. They occur every 3-5 years for most units, lasting 2-8 weeks, and cost between $50M (small refinery, single unit) and $300M+ (full refinery, complex units). They are critical for AI programs because physical inspection data — equipment wall thickness, internal corrosion, catalyst condition, heat exchanger fouling — can only be collected when equipment is open and offline. This inspection data, combined with operational process data, enables significantly better predictive maintenance and degradation models.',
      interviewNote: 'When a refinery asks about predictive maintenance AI, a key question is: "When was your last turnaround and do you have the inspection records digitized?" If the data exists only as paper files in a filing cabinet, there is a significant data preparation effort before any ML model can be built.'
    },
    {
      id: 'q02-08',
      type: 'truefalse',
      question: 'The "yield" KPI in a refinery refers specifically to the percentage of input crude oil that is converted into the single most valuable product (usually gasoline), and optimizing AI should focus only on maximizing this one metric.',
      options: ['True', 'False'],
      correctIndex: 1,
      explanation: 'False. Yield in refining refers to the proportion of each product produced from the crude input — a refinery produces a slate of products (LPG, naphtha, gasoline, kerosene, diesel, fuel oil, etc.) and "yield optimization" means maximizing the combined economic value of the entire product slate, not just one product. Depending on market prices, maximizing diesel yield may be more valuable than maximizing gasoline yield on a given day. AI optimization must consider the full product mix, current market prices, crude slate composition, and unit constraints simultaneously — single-metric optimization is a common oversimplification that experienced operators will immediately challenge.'
    },
    {
      id: 'q02-09',
      type: 'scenario',
      question: 'A Process Engineer tells you: "Our on-stream factor for the FCC unit was only 88% last year — that cost us a lot." You are not sure what "on-stream factor" means and why 88% is significant. What does this metric represent and what is your response?',
      options: [
        'On-stream factor is the percentage of scheduled operating hours the unit was actually running and producing. 88% means 12% of potential operating hours were lost to unplanned downtime or extended maintenance — at FCC throughput rates and margins, this represents tens of millions in lost gross margin that AI-based predictive maintenance could partially recover',
        'On-stream factor measures what percentage of crude oil fed into the FCC is successfully converted to products — 88% is normal conversion efficiency for a standard FCC and does not represent a significant problem',
        'On-stream factor is a safety metric tracking what percentage of safety inspections were completed on schedule — 88% suggests the maintenance team is understaffed and AI-driven scheduling could help prioritize inspections',
        'On-stream factor is the ratio of actual energy consumption to theoretical minimum energy consumption — 88% means the unit is 12% less energy-efficient than the design specification, and energy optimization AI is the clear solution'
      ],
      correctIndex: 0,
      explanation: 'On-stream factor (also called "on-stream time" or "availability factor") measures the fraction of total calendar hours — or sometimes planned operating hours — during which the unit was actually running. 88% means roughly 12% of the year (~44 days equivalent) was lost to unplanned trips, extended maintenance, or startup/shutdown time. For an FCC processing 50,000 bbl/day at a $5/bbl contribution, recovering just 2 percentage points (7 days) = $3.5M/year. This is a core target for predictive maintenance AI. Do not confuse on-stream factor with conversion efficiency, energy intensity, or safety compliance — these are entirely different KPIs.',
      interviewNote: 'On-stream factor, along with utilization rate and GRM, are the three metrics most likely to appear on a plant performance dashboard in your first client meeting. Know exactly what each one means and what a good vs. bad value looks like.'
    },
    {
      id: 'q02-10',
      type: 'scenario',
      question: 'You are reviewing a refinery\'s energy intensity data and see it has increased from 85 MBtu/bbl to 94 MBtu/bbl over the past two years. The Operations Manager asks what might have caused this and whether AI can help. What is the most insightful response?',
      options: [
        'Energy intensity rising from 85 to 94 MBtu/bbl is a 10.6% increase — potential causes include heat exchanger fouling reducing heat recovery, processing heavier crude requiring more heat input, increased unit cycling from instability, and aging equipment. AI can help by building fouling prediction models to optimize cleaning schedules and by providing operators with real-time energy efficiency targets through APC integration.',
        'Energy intensity going from 85 to 94 MBtu/bbl is a minor fluctuation within normal operating ranges — refineries typically see 10-15% variation depending on the season, so no action is needed unless the number exceeds 100 MBtu/bbl.',
        'The most likely cause is that operators have been manually overriding the control system setpoints — AI can fix this by removing manual operator control entirely and running the refinery autonomously.',
        'Energy intensity is not a controllable variable — it is entirely determined by crude API gravity and cannot be optimized by AI or any operational change.'
      ],
      correctIndex: 0,
      explanation: 'A sustained 10.6% increase in energy intensity over two years is operationally significant. Heat exchanger fouling is one of the most common causes — as heat transfer efficiency degrades, furnaces must work harder to achieve the same outlet temperature. Other causes include processing a heavier crude slate, increased startup/shutdown cycling from reliability issues, and degraded insulation. AI applications in this space include ML-based heat exchanger fouling prediction models that recommend optimal cleaning schedules, energy optimization via APC, and virtual sensors that identify inefficient unit operations in real time. This is a mature AI use case with documented ROI in refining.'
    }
  ]
};
