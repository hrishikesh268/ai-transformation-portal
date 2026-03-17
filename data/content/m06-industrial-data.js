window.MODULE_M06 = {
  id: 'm06',
  title: 'Industrial Data & Systems',
  subtitle: 'Understanding the OT/IT landscape — the foundation of all industrial AI',
  day: 2,
  estimatedMinutes: 45,
  xpReward: 100,
  icon: '🏭',
  sections: [
    {
      id: 'm06-s01',
      title: 'Why Industrial Data Is Different — and Why It Matters',
      type: 'intro',
      content: `
        <p>Every AI system is only as good as the data that feeds it. In a refinery, the data landscape is fundamentally unlike anything you have encountered in a consulting engagement with a consumer company, a bank, or a healthcare provider. The systems are different, the priorities are different, the architecture is different — and the risks of getting data access wrong are entirely different.</p>
        <p>A consultant from a digital background who walks into a refinery and starts talking about "connecting to APIs" or "moving everything to the cloud" will immediately lose the room. The plant's OT engineers will dismiss the idea — not because they are being obstinate, but because they know something the consultant does not: those systems control a process running at 400°C and 80 bar, and connecting them carelessly to a corporate network is a safety and operational risk.</p>
        <p>Understanding the OT/IT boundary is consistently cited by refinery CIOs and AI leads as the single biggest differentiator between consultants who can actually add value in an industrial AI engagement and those who cannot. After this module, you will:</p>
        <ul>
          <li>Explain the fundamental difference between IT and OT systems — and why that difference shapes every data decision</li>
          <li>Navigate the Purdue Model of industrial network architecture with confidence</li>
          <li>Understand what AVEVA PI is, what data historians do, and why they are the primary data source for industrial AI</li>
          <li>Identify the other systems (LIMS, CMMS, ERP) that need to be integrated and understand their roles</li>
          <li>Articulate the specific data quality challenges in industrial settings</li>
          <li>Make informed recommendations on edge vs. cloud vs. on-premise deployment</li>
        </ul>
        <p>This knowledge will set you apart in your interview and in your first 90 days on the job.</p>
      `,
      keyTerms: ['OT', 'IT', 'IT/OT Convergence', 'Data Historian']
    },
    {
      id: 'm06-s02',
      title: 'IT vs OT: Two Completely Different Worlds',
      type: 'concept',
      content: `
        <p>Most professionals entering industrial AI understand IT well — they have worked with ERP systems, cloud platforms, CRMs, and analytics tools throughout their careers. OT is different in almost every dimension that matters. Getting this wrong is not just an intellectual error — it creates genuine operational risk.</p>
        <p><strong>Information Technology (IT)</strong> encompasses the systems you know: email servers, ERP (SAP), CRM, HR platforms, financial systems, business intelligence tools. The primary design principle is <em>confidentiality</em> — protecting the information. If an IT system goes down, it is inconvenient and costly. But no one gets hurt, and operations continue. IT systems are updated frequently, patched regularly, and may be rebooted without warning. They are increasingly hosted in the cloud. Security posture assumes that breaches will happen and focuses on detection, containment, and recovery.</p>
        <p><strong>Operational Technology (OT)</strong> encompasses the systems that run the physical plant: Distributed Control Systems (DCS), Programmable Logic Controllers (PLCs), SCADA systems, sensors, transmitters, control valves, and the communications networks connecting them. The primary design principle is <em>availability and safety</em>. If an OT system goes down, the plant shuts down — or worse, a process runs out of control with serious safety and environmental consequences. OT systems are not updated frequently. Many run software that is 10–15 years old on hardware that cannot be replaced without major capital expenditure. You do not patch a PLC while it is controlling a reaction running at 400°C. You do not reboot a DCS controller to install an update.</p>
        <p><strong>The IT/OT convergence problem</strong> is the central technical challenge of industrial AI: AI systems need data from OT, but OT was never designed to interface with IT or the internet. OT networks were deliberately isolated ("air-gapped") for security. OT devices run proprietary protocols (Modbus, PROFIBUS, OPC-UA) that are alien to IT infrastructure. OT teams have deep institutional resistance to connecting their systems to the corporate network — and that resistance is justified by a long history of IT-connected industrial systems being compromised.</p>
        <p>The IT/OT boundary is where most industrial AI projects stall — not because the AI is too hard, but because getting data from the process control layer to the AI computing layer requires months of negotiation between IT security, OT engineering, plant management, and corporate cybersecurity. As a transformation leader, you must account for this in your roadmap and engage OT stakeholders early.</p>
      `,
      keyTerms: ['OT', 'IT', 'IT/OT Convergence', 'PLCs', 'SCADA', 'DCS']
    },
    {
      id: 'm06-s03',
      title: 'The Purdue Model: Industrial Network Architecture',
      type: 'concept',
      content: `
        <p>The Purdue Enterprise Reference Architecture — universally known as "the Purdue Model" — is the standard framework for structuring industrial network architecture. It defines five levels of the industrial network, each with distinct functions, security requirements, and connectivity rules. Every refinery you encounter will have some variant of this structure. Understanding it tells you exactly where your data lives, how to get it, and what security hurdles you will face.</p>
        <p><strong>Level 0 — Field Devices:</strong> The physical sensors and actuators in direct contact with the process. Temperature transmitters, pressure gauges, flow meters, level sensors, control valves, and pumps. These generate the raw data. They communicate with Level 1 devices via fieldbus protocols (4-20mA analog, HART, PROFIBUS, Foundation Fieldbus).</p>
        <p><strong>Level 1 — Basic Control:</strong> PLCs (Programmable Logic Controllers) and DCS (Distributed Control System) controllers. These receive inputs from field devices and send control outputs. They execute the basic regulatory control logic — holding temperature at setpoint, maintaining flow rate, opening valves in response to conditions. Time-critical. Cannot be interrupted.</p>
        <p><strong>Level 2 — Supervisory Control:</strong> DCS human-machine interfaces (HMIs) and SCADA systems. Operators sit at Level 2 to monitor and adjust the process. This is the control room. Data from Level 1 is aggregated and displayed here. Operators can change setpoints, acknowledge alarms, and manually intervene.</p>
        <p><strong>Level 3 — Manufacturing Operations:</strong> The data historian lives here — most commonly AVEVA PI. Advanced Process Control (APC) systems, Real-Time Optimization (RTO), manufacturing execution systems (MES), and scheduling tools also operate at Level 3. This is where process data is stored long-term and where AI models that need low-latency data access are deployed.</p>
        <p><strong>Level 3.5 — DMZ (Demilitarized Zone):</strong> A security buffer layer between the OT network (Levels 0–3) and the IT network (Levels 4–5). Data flows through one-way data diodes or tightly controlled firewalls in the DMZ — typically only outbound from OT to IT, never inbound from IT to OT. This is the gatekeeper that OT security teams use to prevent corporate IT issues from propagating into process control systems.</p>
        <p><strong>Level 4 — Business Systems:</strong> ERP (SAP), production planning, scheduling, commercial systems. AI platforms that train models and run inference on non-real-time data often operate at Level 4, consuming historian data that has flowed up through the DMZ.</p>
        <p><strong>Level 5 — Enterprise / Cloud:</strong> Corporate IT and cloud platforms. Advanced analytics, corporate reporting, cloud-based AI training. Data at Level 5 has traveled the entire path from the process floor through multiple security layers.</p>
        <p><strong>Why this matters for your role:</strong> When a vendor proposes connecting their AI platform directly to your DCS, the correct response is to ask how they traverse the DMZ and what security review they have undergone with your OT team. AI platforms that demand unrestricted OT access will not get approved. Design your data architecture to pull data upward through the hierarchy, never push instructions down through it from unsecured sources.</p>
      `,
      keyTerms: ['Purdue Model', 'DMZ', 'PLCs', 'SCADA', 'Data Historian', 'DCS']
    },
    {
      id: 'm06-s04',
      title: 'Data Historians: The Data Backbone of Every Refinery',
      type: 'deep-dive',
      content: `
        <p>If you learn one data system deeply before your interview, make it the data historian — and specifically AVEVA PI. This is the primary data source for every industrial AI application in a refinery. It is where process data lives, and it is where your data scientists will spend most of their time.</p>
        <p><strong>What a data historian does:</strong> A data historian is a specialized time-series database engineered for one task: storing and retrieving process measurement data at high speed and high volume. Unlike a relational database (which stores rows and columns), a historian is optimized for time-indexed numerical values. It uses compression algorithms to reduce storage requirements while preserving data fidelity — a critical design choice given the volume of data a large refinery generates.</p>
        <p><strong>AVEVA PI (formerly OSIsoft PI):</strong> PI is the dominant historian platform in oil and gas, chemicals, and power generation globally. If a refinery has a data historian, there is a greater than 80% chance it is PI. Understanding PI is not optional for industrial AI work. Key facts:</p>
        <ul>
          <li><strong>Tags:</strong> The fundamental data unit in PI is the "tag" — each tag represents a single measurement point. A tag might be "CDU-TI-1042" — the temperature indicator at location 1042 on the Crude Distillation Unit. A large refinery may have 500,000 to 2 million tags.</li>
          <li><strong>Storage:</strong> Each tag stores timestamped values. PI uses exception reporting (stores a new value only when the reading changes by more than a configured threshold) and compression to manage storage efficiently. Effective sampling intervals range from sub-second to 1 minute depending on how the tag is configured.</li>
          <li><strong>History depth:</strong> Most major refineries have 5–20 years of historical data in PI. This is the training data for your ML models.</li>
          <li><strong>Access:</strong> Data scientists access PI via PI Web API (REST-based) or OSIsoft OData API. Python libraries (PIconnect, osipi) and direct ODBC connections are common. This is the technical handshake between your data science team and the plant data.</li>
        </ul>
        <p><strong>Other historians you may encounter:</strong> Honeywell PHD is common in refineries with Honeywell DCS infrastructure. Emerson DeltaV has its own historian. Siemens offers SIMATIC IT historian. These are functionally similar to PI but with different access patterns and tooling. PI has by far the broadest ecosystem of data science tools built around it.</p>
        <p><strong>The AI implication:</strong> When scoping an AI project, the first question is: "Are the relevant process variables instrumented and stored in PI? How far back does the data go? What is the data quality like?" The historian is the foundation. Without good historian data, there is no industrial AI.</p>
      `,
      keyTerms: ['Data Historian', 'AVEVA PI', 'Tags (data)', 'OT']
    },
    {
      id: 'm06-s05',
      title: 'The Other Data Sources: LIMS, CMMS, ERP, and Process Simulation',
      type: 'concept',
      content: `
        <p>The historian provides continuous process data. But most valuable AI applications — quality prediction, predictive maintenance, production planning — require data from multiple systems that were designed independently and have never been integrated. Understanding what each system contains and what it contributes to an AI model is essential for data architecture decisions.</p>
        <p><strong>LIMS (Laboratory Information Management System)</strong> stores the results of physical and chemical analysis performed in the plant laboratory. Operators periodically take product samples — typically every 4–8 hours for key products — and submit them to the lab. The lab analyzes flash point, distillation curve, sulfur content, octane number, viscosity, and hundreds of other properties depending on the product stream. LIMS is the ground truth for product quality. It is critical for training soft sensor models that predict quality from process conditions. The challenge: LIMS data is sparse (one reading every 4–8 hours versus thousands of process readings per hour from PI), and sample timestamps may not precisely match when the sample was actually drawn. Common LIMS platforms: LabWare, STARLIMS.</p>
        <p><strong>CMMS (Computerized Maintenance Management System)</strong> tracks all maintenance activity: work orders, repair records, spare parts usage, equipment failure events, inspection results, and preventive maintenance schedules. CMMS is the ground truth for equipment health history. It provides the failure labels needed to train predictive maintenance models — "Pump P-1203 failed on March 5, 2022" is a label that the ML model uses to learn what sensor patterns precede failure. The challenge: CMMS records are often incomplete, inconsistent, or entered days after the fact by technicians who have many other priorities. The failure date recorded may be when the work order was entered, not when the failure actually occurred. Common CMMS platforms: IBM Maximo, SAP Plant Maintenance (SAP PM).</p>
        <p><strong>ERP (Enterprise Resource Planning)</strong> manages the business layer: crude oil purchasing, production scheduling, product sales, inventory, financial planning, and supply chain. SAP dominates in large refineries. ERP data is essential for optimization AI that crosses the boundary between operations and economics — crude selection models, production planning, and margin optimization all require ERP data to understand what is profitable, not just what is feasible. The challenge: ERP and process data operate on completely different timescales and units. Integrating them requires careful data modeling.</p>
        <p><strong>Process Simulation (Aspen HYSYS, PRO/II)</strong> stores engineering models of the refinery process — the first-principles equations that describe thermodynamics, reaction kinetics, and phase behavior. These are not data stores in the traditional sense but they can generate synthetic training data, validate AI model outputs, and serve as a physics-based check on AI predictions. Hybrid models that combine process simulation with ML are an active area of development in industrial AI.</p>
        <p><strong>The integration challenge:</strong> These four systems use different equipment naming conventions, different timestamps, different data formats, and were procured and maintained by different organizational functions. A pump is "P-1203" in the historian, "Pump 1203A" in the CMMS, and "Unit 1203" in the ERP. Creating a unified data model — a consistent master data layer that reconciles these identifiers — is a significant data engineering project that must precede any multi-system AI application.</p>
      `,
      keyTerms: ['LIMS', 'CMMS', 'ERP', 'Data Quality', 'IT/OT Convergence']
    },
    {
      id: 'm06-s06',
      title: 'Data Quality Issues in Industrial Settings',
      type: 'deep-dive',
      content: `
        <p>Industrial data quality problems are pervasive and systematic. Unlike consumer data quality issues (duplicate records, missing fields), industrial data quality problems are rooted in the physics of measurement and the economics of instrumentation maintenance. A leader who understands these issues will never over-promise on AI timelines or under-resource the data engineering phase.</p>
        <p><strong>Sensor Drift</strong> is the gradual, slow degradation of sensor calibration accuracy over time. A temperature transmitter that read accurately when it was calibrated six months ago may now read 8°C high — every reading in the historian for the past three months is systematically biased. The data looks plausible (it shows reasonable values) but is wrong. ML models trained on drifted data will produce predictions biased in the same direction as the drift. Detection requires cross-referencing with lab measurements or periodic sensor audits.</p>
        <p><strong>Stuck Sensors</strong> occur when a sensor or transmitter fails and stops updating. The historian records the last value for hours or days until someone notices. Raw historian data with a stuck sensor looks like a perfectly flat line — temperature holding at exactly 342.7°C for 6 hours. In reality the instrument has failed. This data must be identified and removed before training. Automatic detection: any tag showing zero variance over a statistically improbable window is a stuck sensor candidate.</p>
        <p><strong>Missing Data</strong> is ubiquitous. Communications failures, network outages, historian maintenance windows, and control system shutdowns all create gaps. Expect 5–15% missing data in typical refinery historian data — higher for older or less-maintained systems. Missing data must be handled explicitly before model training: imputed (filled with estimated values), forward-filled (last known value propagated), or excluded.</p>
        <p><strong>Inconsistent Sampling Rates</strong> create alignment challenges. One tag may update every second (a fast control loop), another every 5 minutes (a slower process variable), and a lab result every 4–8 hours. Combining these into a single training dataset requires resampling — deciding at what frequency to align all data, and how to aggregate or interpolate the higher-frequency data. The choice of resampling window significantly affects model quality.</p>
        <p><strong>Process Shutdowns and Upsets</strong> in the historical data represent abnormal plant states. If a model trains on data from a plant shutdown, it learns nothing useful about normal operation — but it may learn patterns that only occur during upsets, leading to false positives in production. Shutdown periods must be identified (often from operational logs, not automatically) and excluded from training data.</p>
        <p><strong>Label Noise in Failure Data</strong> is a particularly insidious problem for predictive maintenance. A CMMS record may say "pump bearing failed on March 5." But the actual degradation process began 3–4 weeks earlier. If you train a model using March 5 as the failure date, you may label the early degradation period as "normal" — teaching the model that those patterns are acceptable. Accurate labeling requires reviewing maintenance notes, vibration trend data, and operator logs to establish when degradation actually began.</p>
        <p><strong>Your leadership approach:</strong> Never begin an AI project without a formal data quality audit. Deliver the audit findings as a risk document before any model development begins. Budget the data engineering phase at a minimum of 60% of total data science effort. The projects that fail are almost always the projects that skipped the audit.</p>
      `,
      keyTerms: ['Sensor Drift', 'Data Quality', 'AVEVA PI', 'Tags (data)']
    },
    {
      id: 'm06-s07',
      title: 'Edge Computing vs Cloud vs On-Premise: Where Does AI Run?',
      type: 'concept',
      content: `
        <p>Where AI models run is not a purely technical decision — it intersects with OT security requirements, plant connectivity, real-time performance needs, and IT governance. You will encounter this debate in every industrial AI deployment, and you need to be able to frame the trade-offs clearly for plant management and IT/OT stakeholders.</p>
        <p><strong>On-Premise Deployment</strong> means all AI computing runs on servers physically located within the plant's own infrastructure. Data never leaves the site. This is the default preference of OT security teams: no external connectivity means no external attack surface, no data sovereignty concerns, and no dependence on internet connectivity for production systems. The trade-offs: expensive to procure and maintain compute infrastructure, harder to scale, requires on-site IT support capabilities. For refineries in remote locations or with strict regulatory data residency requirements, on-premise may be the only viable option.</p>
        <p><strong>Cloud Deployment (AWS, Azure, GCP)</strong> runs AI training and inference on cloud platforms. The advantages are significant: elastic compute (you can train a large model without owning the hardware), managed services (no infrastructure maintenance), global access for central AI teams supporting multiple sites, and access to cutting-edge ML tooling. The challenges: data must travel from the OT network to the cloud, which requires navigating the DMZ, cybersecurity approval, and sometimes regulatory compliance. Latency is unsuitable for real-time inference that must react within seconds. Cloud vendors who promise to "just pull your historian data" without a serious discussion of how it traverses the DMZ are not credible industrial AI partners.</p>
        <p><strong>Edge Computing</strong> runs AI inference on local servers positioned close to the data source — within the plant network, at Level 3 or Level 4 in the Purdue Model. The AI model is trained centrally (cloud or on-premise data center) then deployed to the edge server at the plant. Inference happens locally, with results served to the control room or fed into APC systems at low latency and without dependence on external connectivity. This is the deployment pattern that resolves most OT security objections: data never leaves the site, connectivity is not required for production operation, and performance is predictable. Edge servers require periodic connectivity (to receive model updates) but not continuous connectivity.</p>
        <p><strong>The recommended hybrid architecture</strong> for most refinery AI deployments: train models in a cloud or on-premise data lake using historical data extracted from PI through the DMZ; deploy trained models to edge servers at the plant for real-time inference; stream model outputs to operator dashboards at Level 2/3; feed predictions into APC systems at Level 3. This architecture satisfies OT security, achieves real-time performance, and keeps sensitive process data within the plant boundary.</p>
        <p><strong>Red flag in vendor evaluation:</strong> Any AI vendor who says "your plant data streams continuously to our cloud platform and we send predictions back" is proposing an architecture that most OT security teams will refuse — and rightfully so. The correct question is: "Where does inference run, and what is the minimum connectivity requirement for production operation?"</p>
      `,
      keyTerms: ['Edge Computing', 'DMZ', 'Purdue Model', 'OT', 'IT/OT Convergence']
    }
  ],
  diagram: {
    title: 'The Purdue Model: Industrial Network Architecture',
    description: 'Five-level hierarchy of industrial network architecture showing where each system type lives, security zones, and where AI platforms are deployed',
    svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 480">
  <defs>
    <style>
      .level-title { font-family: 'Segoe UI', Arial, sans-serif; font-weight: 700; font-size: 12px; }
      .level-desc { font-family: 'Segoe UI', Arial, sans-serif; font-size: 10px; }
      .zone-label { font-family: 'Segoe UI', Arial, sans-serif; font-weight: 700; font-size: 11px; }
      .main-title { font-family: 'Segoe UI', Arial, sans-serif; font-weight: 700; font-size: 15px; fill: #1a1a2e; }
    </style>
  </defs>
  <rect width="800" height="480" fill="#f0f2f5" rx="12"/>
  <text x="400" y="28" text-anchor="middle" class="main-title">The Purdue Model — Industrial Network Architecture</text>

  <!-- Zone labels on left -->
  <!-- OT zone bracket -->
  <rect x="10" y="50" width="18" height="235" rx="4" fill="#e8d5b7" stroke="#c0a06a" stroke-width="1.5"/>
  <text x="19" y="172" text-anchor="middle" class="zone-label" fill="#7d5a00" transform="rotate(-90 19 172)">OT ZONE — Safety-Critical</text>

  <!-- IT zone bracket -->
  <rect x="10" y="340" width="18" height="110" rx="4" fill="#d5e8f5" stroke="#5b9bd5" stroke-width="1.5"/>
  <text x="19" y="395" text-anchor="middle" class="zone-label" fill="#1a5276" transform="rotate(-90 19 395)">IT ZONE</text>

  <!-- Level 0 -->
  <rect x="40" y="52" width="720" height="55" rx="8" fill="#fdebd0" stroke="#e67e22" stroke-width="2"/>
  <text x="55" y="73" class="level-title" fill="#784212">Level 0 — Field Devices</text>
  <text x="55" y="88" class="level-desc" fill="#555">Sensors (temperature, pressure, flow, level), control valves, actuators, pumps. Direct contact with the process.</text>
  <text x="55" y="100" class="level-desc" fill="#888">Protocols: 4-20mA analog, HART, PROFIBUS, Foundation Fieldbus</text>

  <!-- Level 1 -->
  <rect x="40" y="115" width="720" height="55" rx="8" fill="#fad7a0" stroke="#d35400" stroke-width="2"/>
  <text x="55" y="136" class="level-title" fill="#6e2c00">Level 1 — Basic Control</text>
  <text x="55" y="151" class="level-desc" fill="#555">PLCs, DCS controllers. Execute regulatory control loops. Cannot be interrupted during operation.</text>
  <text x="55" y="163" class="level-desc" fill="#888">Examples: Honeywell C300, Emerson DeltaV, Yokogawa CENTUM</text>

  <!-- Level 2 -->
  <rect x="40" y="178" width="720" height="55" rx="8" fill="#d5f5e3" stroke="#1e8449" stroke-width="2"/>
  <text x="55" y="199" class="level-title" fill="#145a32">Level 2 — Supervisory Control</text>
  <text x="55" y="214" class="level-desc" fill="#555">DCS HMIs, SCADA systems, operator workstations. Control room. Operators monitor and adjust setpoints here.</text>
  <text x="55" y="226" class="level-desc" fill="#888">Examples: Honeywell Experion PKS, Emerson DeltaV HMI, Yokogawa CENTUM VP</text>

  <!-- Level 3 -->
  <rect x="40" y="241" width="720" height="60" rx="8" fill="#d6eaf8" stroke="#1a5276" stroke-width="2"/>
  <text x="55" y="262" class="level-title" fill="#1a5276">Level 3 — Manufacturing Operations</text>
  <text x="55" y="277" class="level-desc" fill="#555">Data Historian (AVEVA PI), APC, RTO, MES, scheduling. Long-term data storage. AI models for real-time inference live here.</text>
  <text x="55" y="289" class="level-desc" fill="#888">AI inference on edge servers at this level — data never leaves OT zone</text>
  <!-- AI badge -->
  <rect x="650" y="248" width="100" height="22" rx="5" fill="#2980b9" opacity="0.9"/>
  <text x="700" y="263" text-anchor="middle" font-family="'Segoe UI',Arial,sans-serif" font-size="10" font-weight="700" fill="white">AI Edge Servers</text>

  <!-- DMZ -->
  <rect x="40" y="310" width="720" height="30" rx="6" fill="#f9ebea" stroke="#e74c3c" stroke-width="2.5" stroke-dasharray="8,4"/>
  <text x="400" y="330" text-anchor="middle" class="zone-label" fill="#c0392b">Level 3.5 — DMZ (Demilitarized Zone) — One-way data diodes / controlled firewall — OT→IT only</text>

  <!-- Level 4 -->
  <rect x="40" y="348" width="720" height="50" rx="8" fill="#e8daef" stroke="#7d3c98" stroke-width="2"/>
  <text x="55" y="368" class="level-title" fill="#6c3483">Level 4 — Business Systems</text>
  <text x="55" y="383" class="level-desc" fill="#555">ERP (SAP), production planning, scheduling, commercial systems. AI training platforms, data lakes, ML pipelines.</text>
  <text x="55" y="395" class="level-desc" fill="#888">AI model training happens here using historical data pulled from Level 3 through DMZ</text>

  <!-- Level 5 -->
  <rect x="40" y="406" width="720" height="48" rx="8" fill="#ebf5fb" stroke="#2980b9" stroke-width="2"/>
  <text x="55" y="426" class="level-title" fill="#1a5276">Level 5 — Enterprise / Cloud</text>
  <text x="55" y="441" class="level-desc" fill="#555">Corporate IT, cloud platforms (AWS, Azure, GCP). Advanced analytics, corporate reporting, central AI COE.</text>
  <text x="55" y="453" class="level-desc" fill="#888">Examples: Azure IoT Hub, AWS SageMaker, GCP Vertex AI</text>

  <!-- Down arrow label -->
  <text x="775" y="180" text-anchor="middle" class="level-desc" fill="#888" transform="rotate(90 775 180)">Data flows UP ↑ through DMZ</text>
  <line x1="765" y1="52" x2="765" y2="453" stroke="#bbb" stroke-width="1.5" stroke-dasharray="4,3"/>
</svg>`
  },
  video: {
    videoId: 'k3oIfR4NZBY',
    title: 'Watch: How SCADA and Industrial Control Systems Work',
    start: 30,
    end: 260,
    placement: 'm06-s03',
    description: 'Clear walkthrough of how SCADA systems monitor and control industrial processes — essential context for understanding where AI fits in the OT stack'
  },
  glossary: [
    { term: 'OT (Operational Technology)', definition: 'Systems that monitor and control physical processes — DCS, PLCs, SCADA, sensors, and actuators. Prioritize availability and safety above all else. Cannot be patched or rebooted without operational impact.' },
    { term: 'IT (Information Technology)', definition: 'Business computing systems — ERP, email, CRM, analytics platforms. Prioritize data confidentiality. Can tolerate downtime and frequent updates.' },
    { term: 'Purdue Model', definition: 'The standard five-level framework for industrial network architecture (Levels 0–5), defining what systems exist at each level, their security requirements, and how data flows between them.' },
    { term: 'Data Historian', definition: 'A specialized time-series database for storing and retrieving industrial process measurements. Optimized for high-volume, time-indexed numerical data. The primary data source for industrial AI.' },
    { term: 'AVEVA PI', definition: 'The dominant data historian platform in oil and gas globally. Stores process data as "tags" — timestamped measurement values. A large refinery may have 500K–2M tags going back 5–20 years.' },
    { term: 'Tags (data)', definition: 'Individual measurement points in a data historian. Each tag has a unique identifier (e.g., CDU-TI-1042) and stores a time series of values. The atomic unit of process data in AVEVA PI.' },
    { term: 'LIMS (Laboratory Information Management System)', definition: 'Stores product quality analysis results from the plant laboratory — octane, sulfur, flash point, viscosity, etc. Provides the quality ground truth for training soft sensor ML models.' },
    { term: 'CMMS (Computerized Maintenance Management System)', definition: 'Records all maintenance activity: work orders, equipment failures, inspection history, repair records. Provides failure labels for predictive maintenance ML models. IBM Maximo and SAP PM are common platforms.' },
    { term: 'ERP (Enterprise Resource Planning)', definition: 'Business management system integrating finance, procurement, scheduling, and supply chain. SAP dominates in large refineries. Required for optimization AI that crosses operational and economic boundaries.' },
    { term: 'Edge Computing', definition: 'Running AI inference on local servers at or near the plant, rather than in the cloud. Provides low latency, no connectivity dependence, and keeps data within the plant boundary — essential for OT security compliance.' },
    { term: 'DMZ (Demilitarized Zone)', definition: 'The Level 3.5 security buffer between OT and IT networks. Uses one-way data diodes or tightly controlled firewalls. Data flows OT→IT only, never IT→OT. The primary technical barrier to industrial AI data access.' },
    { term: 'PLCs (Programmable Logic Controllers)', definition: 'Industrial computers at Level 1 of the Purdue Model that execute basic control logic. Receive inputs from sensors, execute logic, and send outputs to actuators. Cannot be interrupted during operation.' },
    { term: 'SCADA (Supervisory Control and Data Acquisition)', definition: 'Level 2 supervisory system for monitoring and controlling distributed industrial processes. Aggregates data from PLCs and DCS, provides operator interfaces, generates alarms.' },
    { term: 'Sensor Drift', definition: 'Gradual loss of sensor calibration accuracy over time. Data looks plausible but is systematically biased. A temperature sensor may read 8°C too high for months before detection. Must be identified and corrected before AI model training.' },
    { term: 'Data Quality', definition: 'The accuracy, completeness, consistency, and timeliness of process data. Data quality issues — drift, stuck sensors, missing values, bad timestamps — are the leading cause of industrial AI project failure.' },
    { term: 'IT/OT Convergence', definition: 'The integration of IT business systems with OT process control systems to enable data flow for analytics and AI. The central technical and organizational challenge of industrial AI transformation.' }
  ]
};
