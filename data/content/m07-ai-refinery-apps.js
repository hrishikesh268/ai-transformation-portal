window.MODULE_M07 = {
  id: 'm07',
  title: 'AI Applications in Refineries',
  subtitle: 'The specific use cases, vocabulary, and case studies you need for your interview',
  day: 2,
  estimatedMinutes: 75,
  xpReward: 150,
  icon: '⚙️',
  sections: [
    {
      id: 'm07-s01',
      title: 'What Is Actually Possible — and What Is Proven',
      type: 'intro',
      content: `
        <p>You now have the technical foundation: how AI works, how industrial data is structured, and what the OT/IT landscape looks like. This module is where that foundation becomes operational. After this module, you will be able to walk into an interview and discuss specific AI use cases in a refinery with the fluency and precision of someone who has been working in the field for years.</p>
        <p>The framing matters: industrial AI is not a research project or a speculative technology. The use cases in this module are deployed at real refineries, producing documented financial returns. The technology works. The reasons AI transformations fail are almost never technical — they are organizational, data-related, and change management failures. Understanding what is possible and proven lets you focus your transformation energy on the real barriers.</p>
        <p>In this module you will cover:</p>
        <ul>
          <li>The AI maturity stages in a refinery — where most refineries are today, and where you are taking them</li>
          <li>Six specific, high-value AI use cases with technical depth, business case, and implementation considerations</li>
          <li>The real barriers to adoption — what you will actually encounter on the ground</li>
          <li>Industry case studies: what Shell, BP, Saudi Aramco, and ExxonMobil have built and proven</li>
        </ul>
        <p>Two important calibration points before you start. First, be specific in your interviews: "I would prioritize predictive maintenance on rotating equipment as the first use case because it has the highest data readiness, proven ROI, and lowest safety risk" is far more impressive than "I would use AI to improve operations." Second, always connect the technical to the financial. Every use case in this module has a number attached to it. Know those numbers.</p>
      `,
      keyTerms: ['Predictive Maintenance', 'Soft Sensor', 'Anomaly Detection', 'Condition Monitoring']
    },
    {
      id: 'm07-s02',
      title: 'AI Maturity Stages: Where Refineries Are and Where They Need to Go',
      type: 'concept',
      content: `
        <p>Not all AI is equal, and not all refineries are at the same point. Having a clear maturity framework allows you to assess where a refinery currently sits, articulate the transformation journey, and set realistic expectations with leadership. The five-stage model is widely used and will be recognizable to both technical and business stakeholders.</p>
        <p><strong>Stage 1 — Descriptive:</strong> What happened? Dashboards, reports, KPI tracking. Data is collected and visualized. Engineers can review historical trends. The vast majority of refineries are at this stage — they have good historian data and reporting tools, but the data is not being used to make forward-looking decisions. This stage has no predictive or prescriptive value; it is historical reporting. The risk at Stage 1 is that people confuse having data with having AI.</p>
        <p><strong>Stage 2 — Diagnostic:</strong> Why did it happen? Analytics tools help engineers investigate process upsets, equipment failures, and quality deviations after the fact. Root cause analysis is faster and more data-driven. Anomaly correlation tools identify which variables changed before an event. More advanced than Stage 1 but still reactive — you are investigating what already happened, not preventing what is about to happen. Many refineries claim to be here, and with good analytics tools, they are.</p>
        <p><strong>Stage 3 — Predictive:</strong> What will happen? ML models predict equipment failures before they occur, forecast product quality before lab results arrive, and anticipate process upsets before they escalate. This is where AI begins delivering distinct financial value — moving from reaction to prevention. Predictive maintenance and soft sensors are the flagship Stage 3 applications. Reaching Stage 3 requires clean, labeled historical data and a functioning data pipeline from the historian to ML models.</p>
        <p><strong>Stage 4 — Prescriptive:</strong> What should we do? AI not only predicts the future state but recommends specific actions to improve outcomes. Optimization models recommend setpoint changes to maximize yield. Decision support systems advise operators on the optimal response to a predicted equipment health decline. APC systems are enhanced by AI layers that adapt recommendations to current plant conditions. At Stage 4, the AI is functionally a co-pilot for operations.</p>
        <p><strong>Stage 5 — Autonomous:</strong> AI takes action directly, with human oversight and the ability to override. Very few refinery applications are genuinely at Stage 5. Closed-loop control optimizers that adjust setpoints automatically (within pre-defined safety constraints) represent Stage 5. The technology exists, but organizational trust and regulatory approval for autonomous operation in safety-critical environments is still evolving.</p>
        <p><strong>Your interview positioning:</strong> "Most refineries I encounter are at Stage 1–2. A credible AI transformation takes you to Stage 3 in 18 months and Stage 4 in 3 years. Stage 5 for specific, well-defined, low-risk control loops in years 3–5. That progression requires getting data infrastructure right first."</p>
      `,
      keyTerms: ['Predictive Maintenance', 'Anomaly Detection', 'Digital Twin', 'Shadow Mode']
    },
    {
      id: 'm07-s03',
      title: 'Use Case 1: Predictive Maintenance — The Highest ROI Starting Point',
      type: 'deep-dive',
      content: `
        <p>Predictive maintenance is consistently the first AI use case deployed at refineries because it combines the highest data readiness, the most mature technology, and the clearest financial return. It is also the use case with the deepest ecosystem of vendors, the most published case studies, and the most experienced practitioners. For your interview, you should be able to discuss this end-to-end with confidence.</p>
        <p><strong>What it is:</strong> Using sensor data — vibration, temperature, pressure, motor current draw — to predict when a specific piece of equipment will fail, before it fails. The prediction is specific enough to allow maintenance to be planned and executed in the maintenance window before failure, rather than responding after an unplanned breakdown.</p>
        <p><strong>Why unplanned failure is so costly in a refinery:</strong></p>
        <ul>
          <li>A centrifugal pump failure: $50,000–$500,000 per incident, depending on repair complexity and lost production during downtime</li>
          <li>A critical compressor failure (e.g., charge gas compressor on a hydrocracker): $1–5M per day in lost production if the unit must shut down</li>
          <li>Forced outage on a CDU or FCC: $3–8M per day in lost refining margin</li>
          <li>Rotating equipment — pumps, compressors, fans, turbines — accounts for the majority of unplanned downtime in a refinery</li>
        </ul>
        <p><strong>How it works technically:</strong></p>
        <ol>
          <li>Vibration sensors, temperature transmitters, and current monitors collect continuous data on target equipment and store it in the historian (AVEVA PI)</li>
          <li>A data scientist extracts historical data and labels it using CMMS records: periods before a documented failure are labeled as "degradation," periods of normal operation are labeled as "healthy"</li>
          <li>An ML model (typically XGBoost or a neural network for time-series) trains on these labeled examples, learning to distinguish the vibration and temperature signatures that precede failure from normal operating patterns</li>
          <li>The deployed model runs continuously on live data, producing a real-time health score (0–100) for each monitored asset</li>
          <li>When the health score falls below a threshold, an alert is sent to the maintenance team: "Pump P-1203 showing early bearing wear pattern — estimated failure in 2–3 weeks"</li>
          <li>Maintenance plans and schedules the repair during the next planned shutdown or maintenance window</li>
        </ol>
        <p><strong>Typical outcomes:</strong> 30–50% reduction in unplanned downtime on monitored equipment. 15–25% reduction in total maintenance costs (shift from emergency repairs to planned maintenance). Maintenance teams can prioritize — not every piece of equipment needs inspection, only those with declining health scores.</p>
        <p><strong>Implementation challenges:</strong> The label problem is real — for rare failures, you may have only 8–12 labeled failure events over 5 years of data, which is a thin training set. Getting maintenance teams to trust and act on AI alerts (rather than their own experience) is the dominant adoption barrier — address this with a shadow mode period where the model generates alerts but maintenance makes decisions independently. Compare model predictions against actual outcomes for 3–6 months before making the alerts prescriptive.</p>
        <p><strong>Vendor landscape:</strong> Aspentech Mtell, Emerson Plantweb, Honeywell Forge, SparkCognition, C3.ai all offer predictive maintenance platforms. Evaluate them on: how they handle sparse failure data, whether they explain their predictions (feature importance), and whether their deployment architecture satisfies your OT security requirements.</p>
      `,
      keyTerms: ['Predictive Maintenance', 'Condition Monitoring', 'Vibration Analysis', 'Shadow Mode', 'Alert Fatigue']
    },
    {
      id: 'm07-s04',
      title: 'Use Case 2: Process Optimization — Beyond APC',
      type: 'deep-dive',
      content: `
        <p>Advanced Process Control (APC) and Real-Time Optimization (RTO) already exist at most large refineries and deliver significant value. Process optimization AI goes a step further — it learns from actual plant data to find optimization opportunities that the pre-built engineering models underlying APC and RTO cannot capture.</p>
        <p><strong>Why APC/RTO leave value on the table:</strong> RTO optimizes based on a rigorous first-principles model of the process — thermodynamic and kinetic equations that describe ideal behavior. But real plants drift from their models. Catalysts degrade. Heat exchangers foul. Equipment wears. A rigid engineering model calibrated 5 years ago may be 5–8% off from the plant's current actual behavior. That gap represents missed optimization opportunity.</p>
        <p><strong>What AI-based process optimization adds:</strong> Instead of optimizing against a pre-built model, AI learns the actual empirical relationship between operating conditions and outcomes (yield, energy consumption, product quality) directly from historical plant data. It can discover optimization opportunities that the engineering model did not account for — because they emerge from the real-world behavior of the specific plant in its current condition.</p>
        <p><strong>FCC example:</strong> The Fluid Catalytic Cracker is the highest-margin unit in a typical refinery. It converts heavy vacuum gas oil into lighter, higher-value products (gasoline, LCO). The FCC has hundreds of operating variables — riser temperature, catalyst circulation rate, feed preheat temperature, regenerator conditions, stripping steam. Traditional RTO uses a kinetic model to optimize these variables. An AI model trained on 3 years of historian data, LIMS quality results, and economic data can identify operating patterns that produce 0.5–1.0% additional liquid yield — on a unit processing 50,000 barrels per day, that is $2–4M/year in additional margin at typical crack spreads.</p>
        <p><strong>Technical approaches:</strong></p>
        <ul>
          <li><strong>Surrogate models:</strong> ML models that replicate the behavior of a rigorous simulation model at much lower computational cost. The surrogate is embedded in the optimization loop, allowing rapid evaluation of thousands of operating scenarios in real time.</li>
          <li><strong>Bayesian optimization:</strong> Efficient search algorithms that find optimal operating conditions with fewer experiments. Useful when running experiments on the actual plant is expensive.</li>
          <li><strong>Reinforcement learning:</strong> An RL agent learns to adjust setpoints to maximize a reward function (e.g., liquid yield minus energy cost). Most powerful but requires the most careful safety design — it must be constrained to operate within safe boundaries at all times.</li>
        </ul>
        <p><strong>Safety is paramount:</strong> Process optimization AI must always operate within validated safety constraints. The standard deployment pattern is: test in shadow mode for 3–6 months (model generates recommendations but operators decide), then move to operator-guided mode (model recommends, operator accepts or rejects), then to semi-autonomous mode (model acts within constraints, operator can override). Never skip shadow mode. The plant team's trust is built one correctly predicted optimization at a time.</p>
      `,
      keyTerms: ['Reinforcement Learning for Control', 'Shadow Mode', 'Digital Twin']
    },
    {
      id: 'm07-s05',
      title: 'Use Case 3: Quality Prediction (Soft Sensors) — Real-Time Quality Control',
      type: 'deep-dive',
      content: `
        <p>Soft sensors are one of the most impactful and widely deployed AI applications in refining. They address a fundamental constraint of product quality management: lab analysis takes time, but the process runs continuously. A soft sensor eliminates the quality measurement lag.</p>
        <p><strong>The problem they solve:</strong> A lab analysis of diesel sulfur content takes 4–8 hours from sample collection to result. During those 4–8 hours, if the process has drifted and sulfur is rising toward (or past) the specification limit of 10 ppm, the refinery is either producing off-spec product (which must be reprocessed or sold at a discount) or over-treating (adding more hydrogen than necessary, wasting energy). The operator is essentially flying blind for 4–8 hours at a time.</p>
        <p><strong>How soft sensors work:</strong> A machine learning model learns the relationship between continuous process measurements (temperatures, pressures, flow rates, feed composition proxies) and the periodic lab quality result. Once trained, the model can generate a quality prediction every minute (or more frequently) from live process data — without waiting for a lab result. The model is "soft" because it is a software-based measurement rather than a physical instrument.</p>
        <p><strong>Key refinery applications:</strong></p>
        <ul>
          <li><strong>Diesel sulfur content:</strong> Predict sulfur ppm in real time to optimize hydrotreater severity — add just enough hydrogen to meet spec without over-treating</li>
          <li><strong>Gasoline octane number (RON/MON):</strong> Predict octane continuously from reformer conditions — allows tighter operation to maximum octane spec without risk of off-spec production</li>
          <li><strong>Jet fuel flash point:</strong> Predict minimum flash point continuously to optimize cut point and maximize yield</li>
          <li><strong>Atmospheric distillation cut points:</strong> Predict ASTM distillation curves to optimize cut points in real time as feed composition changes</li>
        </ul>
        <p><strong>The value:</strong> Real-time quality control allows operators to stay closer to specification limits — the "golden band" between under-spec (off-spec product) and over-spec (lost yield). Industry estimates suggest that optimizing cut points using soft sensors can recover 0.3–0.8% additional yield on major distillation units. On a 200,000 barrel/day refinery, 0.5% additional yield at $15/barrel margin is $5.5M/year per unit.</p>
        <p><strong>Soft sensors in APC:</strong> Once validated, soft sensor outputs can be fed directly into APC as a controlled variable — the APC adjusts process conditions to maintain predicted quality at setpoint, creating a closed-loop quality control system that effectively runs the process to within much tighter tolerances than manual operator control.</p>
        <p><strong>Key challenge:</strong> Lab data quality is the limiting factor. LIMS data may have transcription errors, mislabeled samples, inconsistent sampling times (the sample was drawn at 14:00 but the lab result was entered at 18:00 with the entry time as the timestamp). Cleaning LIMS data requires collaboration with the laboratory team and often reveals systematic issues that need to be fixed in the LIMS configuration before any ML model can be trained reliably.</p>
      `,
      keyTerms: ['Soft Sensor', 'Flash Point', 'Octane Number', 'Condition Monitoring']
    },
    {
      id: 'm07-s06',
      title: 'Use Case 4: Energy Management — The Hidden Value Pool',
      type: 'deep-dive',
      content: `
        <p>Energy costs are one of the largest controllable cost items in refinery operations — and they are consistently under-optimized because the energy system is complex, interconnected, and difficult to optimize manually. AI provides the tools to manage this complexity systematically.</p>
        <p><strong>The scale of the opportunity:</strong> A typical mid-to-large refinery uses 6–10% of its crude throughput equivalent as energy (fuel gas, steam, electricity). Energy costs range from $50M to $200M per year for a large complex. A 10% reduction in energy costs is $5–20M/year — and AI-driven optimization can realistically target 5–15% reduction.</p>
        <p><strong>Fired heater optimization:</strong> Fired heaters (furnaces) heat the crude feed and process streams. They are the single largest energy consumers in most refineries. The heater efficiency is determined by the excess air ratio in the combustion, heat loss through the flue gas, and fouling of the radiant tubes. AI models that continuously optimize burner controls — adjusting air-to-fuel ratios, oxygen trim, and heat distribution across burner rows — to minimize fuel gas consumption while maintaining outlet temperatures can achieve 5–10% fuel savings. On a large crude heater, that is $1–3M/year per heater.</p>
        <p><strong>Steam system optimization:</strong> Refineries run complex steam systems with multiple pressure levels (high pressure, medium pressure, low pressure) generated from multiple sources (fired boilers, waste heat recovery, let-down turbines) and consumed by hundreds of users. Optimizing steam generation and distribution manually is practically impossible — the system is too interconnected, too dynamic, and responds too quickly for human operators to continuously optimize. AI optimization models can navigate this complexity and reduce steam generation costs by 3–8%.</p>
        <p><strong>Hydrogen network optimization:</strong> Hydrogen is critical for desulfurization and hydrocracking. It is expensive to produce (via steam methane reforming) and easy to waste (through over-purging of hydrogen-rich streams). An AI optimization model managing hydrogen production, consumption, and purge rates across the network can reduce hydrogen production by 3–7% while maintaining all process hydrogen requirements. At $800–1,200/tonne for hydrogen, the savings are significant.</p>
        <p><strong>Cooling water optimization:</strong> Cooling water systems serve hundreds of heat exchangers. AI models can identify the optimal routing of cooling water and the optimal supply temperatures, reducing pumping energy and cooling tower fan energy by 5–10%.</p>
        <p><strong>Why this use case is often underprioritized:</strong> Energy optimization is less "glamorous" than predictive maintenance or quality prediction. There is no single dramatic failure to prevent. But the cumulative financial impact of a comprehensive energy AI program rivals or exceeds predictive maintenance for most large refineries. This is a strong argument to make in your interview when discussing the AI roadmap — energy management is high ROI and relatively low risk.</p>
      `,
      keyTerms: ['Digital Twin', 'Soft Sensor', 'Reinforcement Learning for Control']
    },
    {
      id: 'm07-s07',
      title: 'Use Case 5: Anomaly Detection — Early Warning for Process Safety',
      type: 'deep-dive',
      content: `
        <p>Anomaly detection is the unsupervised learning use case with the broadest applicability in a refinery. It does not require labeled failure data, works across any process unit, and can be deployed as a continuous real-time monitoring layer that catches process deviations significantly earlier than traditional alarm management.</p>
        <p><strong>What it is:</strong> Anomaly detection AI learns what normal operation looks like by analyzing historical process data across hundreds of variables simultaneously. When the current operating state deviates from learned normal patterns — even subtly, across multiple variables in combination — the system generates an alert. The key capability is detecting multivariate anomalies: deviations that would not trigger any individual alarm in the DCS, but represent an abnormal combination of conditions that precede a process upset.</p>
        <p><strong>How it differs from predictive maintenance:</strong> Predictive maintenance is asset-specific (it monitors a specific pump or compressor) and uses supervised learning trained on labeled failure examples. Anomaly detection is process-wide, uses unsupervised learning (no labels required), and detects general process deviations rather than specific equipment failure patterns. The two are complementary — deploy both.</p>
        <p><strong>Key applications:</strong></p>
        <ul>
          <li><strong>Early warning for process upsets:</strong> Detecting the multivariate pattern that precedes a column flooding event, a reactor runaway, or a compressor surge — 15–60 minutes before the event would become evident to an operator watching individual process variables</li>
          <li><strong>Heat exchanger fouling detection:</strong> Fouling develops gradually. The anomaly detection system identifies when the heat transfer efficiency pattern deviates from normal, allowing proactive cleaning before a production impact occurs</li>
          <li><strong>Leak detection:</strong> Deviations in flow balance or pressure patterns that indicate early-stage leaks in piping or heat exchangers</li>
          <li><strong>Feed composition shift detection:</strong> Identifying when incoming feed has changed in a way that requires process adjustments — before the change has propagated through the unit and created quality or operational problems</li>
        </ul>
        <p><strong>The alert fatigue problem — the most critical implementation challenge:</strong> If the anomaly detection system generates alerts constantly, operators will ignore them. Alert fatigue is the graveyard of early warning systems. A system that generates 50 alerts per shift will be turned off within a month. Effective tuning requires: setting sensitivity carefully to balance detection rate against false positive rate; classifying alerts by severity; suppressing known benign deviations (planned transitions, startup conditions); and giving operators tools to acknowledge and dismiss alerts with context. The first 3–6 months of deployment is almost entirely tuning, not technology.</p>
        <p><strong>Integration with safety systems:</strong> Anomaly detection is an advisory layer — it supports operator decision-making. It explicitly does not replace or interact with the Safety Instrumented System (SIS), which performs safety-critical trips based on predetermined, validated logic. The AI layer provides early warning; the SIS provides the safety backstop.</p>
      `,
      keyTerms: ['Anomaly Detection', 'Alert Fatigue', 'Condition Monitoring', 'Digital Twin']
    },
    {
      id: 'm07-s08',
      title: 'Use Case 6: Feed and Crude Optimization — Margin at the Source',
      type: 'deep-dive',
      content: `
        <p>The crude oil that enters the refinery is both the largest cost and the largest opportunity. Selecting the right crude, blending crudes optimally, and managing feed composition in real time are among the highest-value decisions a refinery makes. AI can enhance all three.</p>
        <p><strong>Why crude selection matters:</strong> A complex refinery can typically process 30–60 different crude types and blends. Different crudes produce different yields of each product (more naphtha, less diesel; high sulfur vs low sulfur; high TAN vs sweet), require different process severity, create different operational challenges (high asphaltene crudes cause fouling; high acid crudes cause corrosion), and are available at different prices. Selecting the optimal blend of crudes to maximize gross refining margin — given market prices, product demand, processing constraints, and equipment limitations — is an enormous optimization problem.</p>
        <p><strong>How AI enhances crude optimization:</strong></p>
        <ul>
          <li><strong>Better yield prediction:</strong> Traditional Linear Programming (LP) crude optimization uses a static yield matrix — for each crude type, an assumed yield of each product fraction. This matrix is often based on lab assay data and engineering judgment, not actual plant performance. ML models trained on actual processing history predict yields more accurately for specific crude blends in the real plant — especially in regions of the operating envelope where the LP model has not been well-calibrated.</li>
          <li><strong>Real-time blend optimization:</strong> As prices move during the day, the optimal crude blend may change. AI-enhanced optimization can continuously recalculate the optimal blend given current market prices and production targets.</li>
          <li><strong>Operational constraint prediction:</strong> Some crude types create operational issues (fouling, corrosion, slug flow in pipelines) that are not captured in the LP model. ML models can predict these constraints from crude assay properties and flag blends that are likely to cause operational problems.</li>
        </ul>
        <p><strong>The financial scale:</strong> Crude optimization is worth $1–5 per barrel in margin improvement for a well-optimized refinery versus a poorly optimized one. On a 100,000 barrel/day refinery, $1/barrel improvement is $36.5M/year. Even capturing 20% of that through better AI-assisted crude selection is a highly material return.</p>
        <p><strong>Key enabler for AI:</strong> Access to crude assay data (detailed chemical characterization of each crude type) linked to actual processing results in the historian and LIMS. The data pipeline for crude optimization is complex — it requires integrating commercial systems (pricing, contracts), laboratory systems (assay data), planning systems (LP model), and the process historian. This integration effort is significant, which is why crude optimization AI typically comes later in the roadmap, after simpler use cases have been deployed.</p>
      `,
      keyTerms: ['Crude Assay', 'Flash Point', 'Octane Number', 'Digital Twin']
    },
    {
      id: 'm07-s09',
      title: 'The Real Barriers to AI Adoption — What You Will Actually Face',
      type: 'concept',
      content: `
        <p>AI projects at refineries do not fail because the algorithms are insufficient. They fail for organizational, data, and change management reasons. As a transformation leader, your job is to anticipate these barriers, plan for them, and systematically remove them. Pretending they do not exist — or being surprised by them — is a leadership failure.</p>
        <p><strong>Barrier 1 — Data Quality:</strong> "Our data is too messy to use." This is partially true at almost every refinery. The correct response is not to wait for perfect data (it will never arrive) but to prioritize use cases with the best available data, execute a data quality improvement program in parallel with AI deployment, and document exactly what data quality improvements enable which future use cases. Start where the data is best; use early successes to fund data infrastructure improvements.</p>
        <p><strong>Barrier 2 — The OT/IT Gap:</strong> Getting data from the DCS/historian to the AI platform takes months of negotiation and technical work. OT teams have legitimate safety and security concerns. Address this early — bring the OT team into the AI design process as stakeholders, not obstacles. Propose architectures that respect OT security principles (edge computing, one-way data flows, no direct OT connectivity from cloud). Build relationships before you need permissions.</p>
        <p><strong>Barrier 3 — Operator Trust:</strong> "I've been running this plant for 20 years. I don't need a computer telling me what to do." This is the most common and most damaging adoption barrier. It is also completely understandable — operators are responsible for process safety, and they will not hand that responsibility to a system they do not understand or trust. The solution is: shadow mode deployment (model runs but humans decide), transparency in how predictions are made (not black boxes), quick wins that demonstrate the model is right when experienced operators are wrong, and operator involvement in model development and validation. Never deploy AI as a top-down mandate without operator buy-in.</p>
        <p><strong>Barrier 4 — Unclear Ownership:</strong> Who owns the AI program? If the answer is "IT," the operations team will not adopt it. If the answer is "Operations," IT will not support it. If the answer is "Strategy," neither will. Industrial AI requires a dedicated cross-functional team with clear authority, reporting to someone who bridges IT and operations — ideally a CTO or Chief Digital Officer with the CEO's backing. Organizational design is not a detail; it is a success factor.</p>
        <p><strong>Barrier 5 — Vendor Hype:</strong> Many AI vendors promise 10x ROI, 90% reduction in downtime, and deployment in 6 weeks. Almost none deliver what they promise. Technical credibility to evaluate vendor claims — asking about their model validation methodology, their data requirements, their deployment architecture, and their track record at refineries with comparable complexity — is one of the most valuable things you bring to the role.</p>
        <p><strong>Barrier 6 — Model Maintenance:</strong> A model deployed and forgotten is a model that becomes a liability. As the process changes (catalyst replacements, equipment modifications, operating mode changes), model performance degrades. Many organizations deploy AI models but never establish the processes and resources to maintain and retrain them. Define model maintenance responsibilities, performance monitoring thresholds, and retraining triggers before deployment, not after degradation is observed.</p>
      `,
      keyTerms: ['Alert Fatigue', 'Shadow Mode', 'Data Quality', 'IT/OT Convergence']
    },
    {
      id: 'm07-s10',
      title: 'Industry Case Studies: What Is Proven at Scale',
      type: 'case-study',
      content: `
        <p>The following examples are drawn from public announcements, industry publications, and case studies. They demonstrate that industrial AI in refining is not theoretical — it is operational and producing documented returns at the world's largest energy companies. Know these examples; use them to ground your interviews in proof points rather than potential.</p>
        <p><strong>Shell — Predictive Maintenance at Scale:</strong> Shell deployed predictive maintenance AI across more than 30 global production and refining sites. Their program monitors rotating equipment — compressors, pumps, and turbines. Reported outcomes: 50% reduction in unplanned downtime on monitored equipment at several sites. The program reportedly saved over $5M in a single year at one large site through avoided compressor failures. Shell's approach: start with the highest-consequence rotating equipment, build a central AI team that supports all sites, and invest in data quality before model development.</p>
        <p><strong>BP — APEX Drilling Optimization:</strong> BP developed the APEX (Automated Performance Examination) system using AI to optimize drilling operations. APEX analyzes real-time drilling data to recommend optimal drilling parameters (weight on bit, rotation speed, flow rate). Results: 10–20% reduction in well construction time and cost. More relevant to refining: BP has extended AI into their refinery operations for energy optimization and predictive maintenance, targeting hundreds of millions of dollars in annual savings across their downstream portfolio.</p>
        <p><strong>Saudi Aramco — Enterprise-Wide AI Deployment:</strong> Saudi Aramco has made AI transformation a strategic priority across their refining, petrochemical, and production operations. Their stated program covers AI for process optimization, predictive maintenance, crude oil quality prediction, and safety monitoring across multiple facilities. Claimed benefits: $500M+ in annual value from AI and automation programs. Aramco's advantage: massive scale (largest integrated energy company in the world), deep data assets going back decades, and financial resources to invest in data infrastructure before chasing model results.</p>
        <p><strong>Reliance Jamnagar — Quality and Energy AI:</strong> Reliance Industries' Jamnagar complex — the world's largest refining complex — has deployed AI for quality prediction (soft sensors on major product streams), energy optimization (steam and hydrogen networks), and predictive maintenance on critical rotating equipment. The scale of the complex (1.4 million barrels/day) means even small efficiency improvements translate to enormous financial returns. Reliance's program is notable for the investment in unified data infrastructure that preceded AI deployment.</p>
        <p><strong>ExxonMobil + Microsoft — Partnership for Scale:</strong> ExxonMobil announced a partnership with Microsoft to deploy AI across 50 global sites, targeting $1 billion in savings over several years. The partnership covers upstream, downstream, and chemical operations. The technology layer is Microsoft Azure; the use cases span energy optimization, predictive maintenance, and supply chain optimization. This partnership is notable as a model for how large energy companies are scaling AI — partnering with hyperscale cloud providers rather than building all capabilities internally.</p>
        <p><strong>The consistent pattern across all these examples:</strong> Success is correlated with investment in data infrastructure before AI deployment, dedicated cross-functional AI teams, executive sponsorship, and patient deployment with shadow mode periods before autonomous operation. The technology is not the bottleneck. The organizations that succeed are the ones that treat AI transformation as a capability-building program, not a technology installation project.</p>
      `,
      keyTerms: ['Predictive Maintenance', 'Digital Twin', 'Soft Sensor', 'Condition Monitoring']
    }
  ],
  diagram: {
    title: 'AI Use Cases in Refineries — Value and Maturity Map',
    description: 'Six primary AI use cases mapped across a 2x3 grid with use case name, description, typical ROI, and color-coded by value category',
    svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 460">
  <defs>
    <style>
      .uc-title { font-family: 'Segoe UI', Arial, sans-serif; font-weight: 700; font-size: 13px; }
      .uc-desc { font-family: 'Segoe UI', Arial, sans-serif; font-size: 10px; fill: #444; }
      .uc-roi { font-family: 'Segoe UI', Arial, sans-serif; font-weight: 700; font-size: 11px; fill: #1a5276; }
      .main-title { font-family: 'Segoe UI', Arial, sans-serif; font-weight: 700; font-size: 15px; fill: #1a1a2e; }
      .icon-text { font-family: 'Segoe UI', Arial, sans-serif; font-size: 22px; }
    </style>
  </defs>
  <rect width="800" height="460" fill="#f8f9fa" rx="12"/>
  <text x="400" y="28" text-anchor="middle" class="main-title">AI Use Cases in Refineries — What's Proven, What It's Worth</text>

  <!-- Row 1, Col 1 — Predictive Maintenance -->
  <rect x="20" y="45" width="240" height="185" rx="10" fill="#d6eaf8" stroke="#2980b9" stroke-width="2"/>
  <text x="50" y="72" class="icon-text">🔧</text>
  <text x="85" y="74" class="uc-title" fill="#1a5276">Predictive Maintenance</text>
  <text x="30" y="94" class="uc-desc">Monitor vibration, temp, and current</text>
  <text x="30" y="108" class="uc-desc">on rotating equipment. Predict failure</text>
  <text x="30" y="122" class="uc-desc">2–4 weeks before it happens.</text>
  <text x="30" y="140" class="uc-desc">ML type: Supervised learning</text>
  <text x="30" y="154" class="uc-desc">Data: AVEVA PI + CMMS (Maximo)</text>
  <text x="30" y="174" class="uc-roi">ROI: 30-50% less unplanned downtime</text>
  <text x="30" y="190" class="uc-roi">$1-5M/yr per unit saved</text>
  <rect x="20" y="220" width="100" height="18" rx="4" fill="#2980b9"/>
  <text x="70" y="233" text-anchor="middle" font-family="'Segoe UI',Arial,sans-serif" font-size="10" font-weight="700" fill="white">Maturity: HIGH</text>

  <!-- Row 1, Col 2 — Quality Prediction -->
  <rect x="280" y="45" width="240" height="185" rx="10" fill="#d5e8d4" stroke="#27ae60" stroke-width="2"/>
  <text x="310" y="72" class="icon-text">🧪</text>
  <text x="345" y="74" class="uc-title" fill="#1e8449">Quality Prediction</text>
  <text x="290" y="94" class="uc-desc">Predict product quality (octane, sulfur,</text>
  <text x="290" y="108" class="uc-desc">flash point) in real time from process</text>
  <text x="290" y="122" class="uc-desc">conditions. Soft sensors replace 4-8hr</text>
  <text x="290" y="136" class="uc-desc">lab wait times.</text>
  <text x="290" y="154" class="uc-desc">ML type: Supervised (XGBoost / NN)</text>
  <text x="290" y="168" class="uc-desc">Data: AVEVA PI + LIMS</text>
  <text x="290" y="188" class="uc-roi">ROI: 0.3-0.8% additional yield</text>
  <text x="290" y="202" class="uc-roi">$3-8M/yr per major unit</text>
  <rect x="280" y="220" width="100" height="18" rx="4" fill="#27ae60"/>
  <text x="330" y="233" text-anchor="middle" font-family="'Segoe UI',Arial,sans-serif" font-size="10" font-weight="700" fill="white">Maturity: HIGH</text>

  <!-- Row 1, Col 3 — Anomaly Detection -->
  <rect x="540" y="45" width="240" height="185" rx="10" fill="#fdebd0" stroke="#e67e22" stroke-width="2"/>
  <text x="570" y="72" class="icon-text">⚠️</text>
  <text x="600" y="74" class="uc-title" fill="#9a6400">Anomaly Detection</text>
  <text x="550" y="94" class="uc-desc">Monitor 100s of process variables</text>
  <text x="550" y="108" class="uc-desc">simultaneously. Detect unusual</text>
  <text x="550" y="122" class="uc-desc">multivariate patterns before operators</text>
  <text x="550" y="136" class="uc-desc">see them. 15-60min early warning.</text>
  <text x="550" y="154" class="uc-desc">ML type: Unsupervised learning</text>
  <text x="550" y="168" class="uc-desc">Data: AVEVA PI (no labels needed)</text>
  <text x="550" y="188" class="uc-roi">ROI: Avoided upsets $500K-5M/event</text>
  <text x="550" y="202" class="uc-roi">Depends on upset frequency</text>
  <rect x="540" y="220" width="110" height="18" rx="4" fill="#e67e22"/>
  <text x="595" y="233" text-anchor="middle" font-family="'Segoe UI',Arial,sans-serif" font-size="10" font-weight="700" fill="white">Maturity: MEDIUM</text>

  <!-- Row 2, Col 1 — Energy Optimization -->
  <rect x="20" y="250" width="240" height="185" rx="10" fill="#e8daef" stroke="#8e44ad" stroke-width="2"/>
  <text x="50" y="277" class="icon-text">⚡</text>
  <text x="82" y="279" class="uc-title" fill="#6c3483">Energy Optimization</text>
  <text x="30" y="299" class="uc-desc">Optimize fired heaters, steam systems,</text>
  <text x="30" y="313" class="uc-desc">hydrogen network, cooling water.</text>
  <text x="30" y="327" class="uc-desc">Continuous AI-driven setpoint</text>
  <text x="30" y="341" class="uc-desc">recommendations.</text>
  <text x="30" y="359" class="uc-desc">ML type: Supervised + optimization</text>
  <text x="30" y="373" class="uc-desc">Data: AVEVA PI + utility meters</text>
  <text x="30" y="393" class="uc-roi">ROI: 5-15% energy cost reduction</text>
  <text x="30" y="407" class="uc-roi">$5-30M/yr large refinery</text>
  <rect x="20" y="425" width="110" height="18" rx="4" fill="#8e44ad"/>
  <text x="75" y="438" text-anchor="middle" font-family="'Segoe UI',Arial,sans-serif" font-size="10" font-weight="700" fill="white">Maturity: MEDIUM</text>

  <!-- Row 2, Col 2 — Process Optimization -->
  <rect x="280" y="250" width="240" height="185" rx="10" fill="#fdfefe" stroke="#17a589" stroke-width="2"/>
  <text x="310" y="277" class="icon-text">🎯</text>
  <text x="342" y="279" class="uc-title" fill="#0e6655">Process Optimization</text>
  <text x="290" y="299" class="uc-desc">AI learns real plant behavior beyond</text>
  <text x="290" y="313" class="uc-desc">engineering models. Finds setpoint</text>
  <text x="290" y="327" class="uc-desc">patterns that add 0.5-1% yield on</text>
  <text x="290" y="341" class="uc-desc">FCC, CDU, and reformer.</text>
  <text x="290" y="359" class="uc-desc">ML type: RL / Bayesian optimization</text>
  <text x="290" y="373" class="uc-desc">Data: PI + LIMS + economics</text>
  <text x="290" y="393" class="uc-roi">ROI: 0.5-1% yield on major unit</text>
  <text x="290" y="407" class="uc-roi">$2-8M/yr per unit</text>
  <rect x="280" y="425" width="90" height="18" rx="4" fill="#17a589"/>
  <text x="325" y="438" text-anchor="middle" font-family="'Segoe UI',Arial,sans-serif" font-size="10" font-weight="700" fill="white">Maturity: LOW</text>

  <!-- Row 2, Col 3 — Crude Optimization -->
  <rect x="540" y="250" width="240" height="185" rx="10" fill="#fadbd8" stroke="#e74c3c" stroke-width="2"/>
  <text x="570" y="277" class="icon-text">🛢️</text>
  <text x="600" y="279" class="uc-title" fill="#922b21">Crude Optimization</text>
  <text x="550" y="299" class="uc-desc">AI-enhanced crude blending and</text>
  <text x="550" y="313" class="uc-desc">selection. Better yield prediction</text>
  <text x="550" y="327" class="uc-desc">vs LP models. Real-time blend</text>
  <text x="550" y="341" class="uc-desc">adjustments as prices shift.</text>
  <text x="550" y="359" class="uc-desc">ML type: Supervised + LP hybrid</text>
  <text x="550" y="373" class="uc-desc">Data: PI + LIMS + ERP + Assay</text>
  <text x="550" y="393" class="uc-roi">ROI: $1-5/barrel improvement</text>
  <text x="550" y="407" class="uc-roi">$10-50M/yr large refinery</text>
  <rect x="540" y="425" width="90" height="18" rx="4" fill="#e74c3c"/>
  <text x="585" y="438" text-anchor="middle" font-family="'Segoe UI',Arial,sans-serif" font-size="10" font-weight="700" fill="white">Maturity: LOW</text>
</svg>`
  },
  video: {
    videoId: 'F_-1hpIgQNg',
    title: 'Watch: Predictive Maintenance AI in Industrial Settings',
    start: 30,
    end: 240,
    placement: 'm07-s03',
    description: 'How predictive maintenance AI works in practice — from sensor data to failure prediction to maintenance scheduling'
  },
  glossary: [
    { term: 'Predictive Maintenance', definition: 'Using ML models trained on sensor data (vibration, temperature, current) to predict equipment failure before it occurs, enabling planned maintenance instead of unplanned breakdown response.' },
    { term: 'Soft Sensor', definition: 'An ML model that predicts product quality (octane, sulfur, flash point) in real time from continuous process measurements, replacing or supplementing the 4-8 hour wait for lab results.' },
    { term: 'Anomaly Detection', definition: 'Unsupervised ML that learns normal process behavior and alerts when current operating conditions deviate significantly from that baseline. Provides early warning of process upsets without requiring labeled failure data.' },
    { term: 'Digital Twin', definition: 'A software model that replicates the behavior of a physical asset or process in real time, used for simulation, optimization, and training AI models without risking the physical plant.' },
    { term: 'Shadow Mode', definition: 'A deployment practice where an AI model generates recommendations in parallel with normal operations, but operators make all decisions independently. Used to build trust and validate model performance before live deployment.' },
    { term: 'Reinforcement Learning for Control', definition: 'An ML approach where an AI agent learns optimal process setpoints by taking actions and receiving feedback (yield, energy cost, quality). The most powerful but most carefully deployed approach to process optimization.' },
    { term: 'Crude Assay', definition: 'A detailed chemical characterization of a crude oil, including its distillation profile, sulfur content, viscosity, metals content, and product yield potential. Essential input data for crude selection and blending optimization.' },
    { term: 'Flash Point', definition: 'The minimum temperature at which a liquid produces enough vapor to ignite. A critical quality specification for jet fuel and diesel. Soft sensors that predict flash point in real time enable tighter cut point control.' },
    { term: 'Octane Number', definition: 'A measure of a gasoline\'s resistance to engine knock. RON (Research Octane Number) and MON (Motor Octane Number) are the two standard measures. Soft sensors predict octane continuously from reformer process conditions.' },
    { term: 'Alert Fatigue', definition: 'The phenomenon where operators stop responding to alerts because too many false alarms are generated. The single biggest reason anomaly detection and predictive maintenance systems fail in practice.' },
    { term: 'Condition Monitoring', definition: 'Continuous tracking of equipment health indicators (vibration, temperature, lubrication condition) to detect degradation trends. The data foundation for predictive maintenance.' },
    { term: 'Vibration Analysis', definition: 'Analysis of vibration frequency and amplitude data from rotating equipment to identify specific failure modes — imbalance, misalignment, bearing wear, cavitation — from their characteristic vibration signatures.' }
  ]
};
