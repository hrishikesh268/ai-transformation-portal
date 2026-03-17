window.MODULE_M10 = {
  id: 'm10',
  title: 'Technology Architecture & Vendor Landscape',
  subtitle: 'Making Smart Technology Decisions for Industrial AI',
  day: 3,
  estimatedMinutes: 45,
  xpReward: 125,
  icon: '🏗️',
  sections: [
    {
      id: 'm10-s01',
      title: 'You Don\'t Need to Be an Architect — But You Do Need to Make Architecture Decisions',
      type: 'intro',
      content: `<p>At some point in your first year, you will sit across a table from a CTO, a vendor sales engineer, and your own IT team, all of them speaking a different technical dialect. You will need to make or influence decisions about which vendors to select, whether to build or buy, where to run AI workloads, and how to connect everything together.</p>
<p>You do not need to be able to design a Kubernetes cluster or write an ETL pipeline. But you need the vocabulary and judgment to:</p>
<ul>
  <li>Distinguish a well-designed architecture from one that will cause you pain at scale</li>
  <li>Make informed build vs. buy vs. partner decisions without being captured by vendor narratives</li>
  <li>Recognize when a vendor's proposed architecture creates security, performance, or lock-in risks</li>
  <li>Have credible conversations with your technical team so they trust your judgment</li>
</ul>
<p>This module gives you a working mental model of the industrial AI technology stack — from the sensor on a pipe to the dashboard an operator uses to act on AI recommendations. It maps the key vendor landscape so you know who the players are, what they are good at, and when to use them. And it gives you a practical framework for the most common architecture decisions you will face.</p>`,
      keyTerms: ['Industrial AI Stack', 'Vendor Landscape', 'Build vs Buy', 'Edge Inference']
    },
    {
      id: 'm10-s02',
      title: 'The 5-Layer Industrial AI Stack',
      type: 'concept',
      content: `<p>Think of the industrial AI technology stack as five layers, each building on the one below it. When you encounter a technology problem, the first question is always: which layer is the issue at? When you evaluate a vendor, the first question is: which layer(s) do they operate in?</p>
<h3>Layer 1 — Data Sources</h3>
<p>Where process data originates. <strong>DCS</strong> (Distributed Control Systems, e.g., Honeywell Experion, Emerson DeltaV), <strong>PLCs</strong> (Programmable Logic Controllers for discrete automation), <strong>field sensors</strong> (temperature, pressure, flow, vibration), <strong>data historian</strong> (AVEVA PI System — the central repository for time-series process data), <strong>LIMS</strong> (Laboratory Information Management System for lab data), <strong>CMMS</strong> (Computerized Maintenance Management System for work orders and asset history), and <strong>ERP</strong> (SAP or Oracle for planning and financial data).</p>
<h3>Layer 2 — Data Infrastructure</h3>
<p>Where data is consolidated, cleaned, and made accessible for AI. The <strong>operational data lake</strong> sits in the IT zone and receives copies of historian data plus other data sources. <strong>ETL pipelines</strong> (extract-transform-load) move data from OT systems to the data lake, cleaning and normalizing it. <strong>Streaming infrastructure</strong> handles real-time or near-real-time data for applications that need current readings, not just historical trends.</p>
<h3>Layer 3 — AI/ML Platform</h3>
<p>Where models are built, trained, deployed, versioned, and monitored. This can be a vendor-provided platform (<strong>AspenTech Mtell</strong>, <strong>C3.ai</strong>) or a general-purpose MLOps platform (<strong>MLflow</strong>, <strong>Azure ML</strong>, <strong>AWS SageMaker</strong>). The platform manages the entire model lifecycle from experiment to production.</p>
<h3>Layer 4 — Applications</h3>
<p>The specific AI use cases that run on Layer 3. Predictive maintenance application. Quality prediction dashboard. Energy optimization tool. Process anomaly detector. These are what engineers and operations managers interact with as named products with specific functionality.</p>
<h3>Layer 5 — User Interfaces</h3>
<p>How operators, engineers, and managers actually experience AI outputs. Operator alarm dashboards integrated into the control room. Mobile alerts for maintenance technicians. Management KPI dashboards. The quality of Layer 5 determines whether AI gets used — a brilliant model hidden behind a poor interface is a failed deployment.</p>`,
      keyTerms: ['Data Lake', 'ETL', 'MLflow', 'AVEVA PI', 'AspenTech']
    },
    {
      id: 'm10-s03',
      title: 'Cloud vs Edge vs On-Premise: The Decision Framework',
      type: 'concept',
      content: `<p>One of the most common technology debates you will facilitate is where to run AI workloads. The answer is almost never "all cloud" or "all on-premise" — it is a hybrid that puts different workloads where their requirements are best met.</p>
<h3>Cloud Computing for Industrial AI</h3>
<p><strong>Advantages:</strong> Virtually unlimited scalable compute for model training, access to the latest AI/ML services and frameworks, lower upfront investment (pay-per-use), easier collaboration across sites, simpler software updates, access to pre-built models and APIs.</p>
<p><strong>Disadvantages:</strong> Operational data must leave the plant and traverse the internet to reach cloud servers — a significant OT security concern. Latency is too high for real-time inference (decisions needed in under 100ms). Dependent on internet connectivity — plant goes offline if the link is down. Regulatory constraints in some jurisdictions (data sovereignty requirements) may prohibit sending production data to foreign cloud servers.</p>
<h3>On-Premise Computing</h3>
<p><strong>Advantages:</strong> Full data control — operational data never leaves the plant network. Low latency for real-time inference. OT teams are comfortable with physical servers they can see and touch. Can be closely integrated with existing DCS and historian systems.</p>
<p><strong>Disadvantages:</strong> High upfront capital investment in server infrastructure. Harder to scale compute during training. IT maintenance burden. Slower to access new AI capabilities. Requires on-site IT expertise.</p>
<h3>Edge Computing — The Industrial Sweet Spot for Inference</h3>
<p><strong>Edge computing</strong> means AI inference runs on servers physically located at or near the plant, on the plant's own secure network — but these are modern, purpose-built servers, not 20-year-old DCS hardware. This gives you the best of both worlds for real-time use cases: low latency because compute is local, strong data security because data stays on-site, but modern hardware with full AI capabilities.</p>
<h3>The Decision Rule That Works for Most Refineries</h3>
<ul>
  <li><strong>Model training:</strong> Cloud or central data center — not time-critical, needs large compute, can batch process historical data</li>
  <li><strong>Real-time inference:</strong> Edge or on-premise — latency and connectivity requirements demand local compute</li>
  <li><strong>Historical data storage:</strong> On-premise first (historian and data lake), cloud replication for disaster recovery and cross-site analytics if security assessment allows</li>
  <li><strong>Data science experimentation:</strong> Cloud or central server — data scientists need flexible compute, can work on anonymized/sampled data</li>
</ul>`,
      keyTerms: ['Edge Inference', 'Data Lake', 'ETL', 'OPC-UA', 'Vendor Lock-in']
    },
    {
      id: 'm10-s04',
      title: 'Vendor Landscape — The Players You Need to Know',
      type: 'deep-dive',
      content: `<p>The industrial AI vendor landscape is complex and evolving rapidly. You do not need to know every vendor, but you need to know the key players well enough to ask intelligent questions, avoid poor choices, and navigate procurement decisions confidently.</p>
<h3>Integrated Process Optimization Platforms — Often the Best First Choice</h3>
<ul>
  <li><strong>AspenTech:</strong> The dominant player in refinery process optimization. Key products: Aspen DMC3 (Advanced Process Control), Aspen PIMS (planning LP optimization), Aspen Mtell (predictive maintenance AI using physics-informed machine learning). Deep refinery domain expertise. The strongest choice if you want process optimization AI with built-in physics knowledge. Premium priced, but the ROI is usually defensible. If a refinery already uses Aspen APC, starting with Aspen Mtell is low-integration-risk.</li>
  <li><strong>Honeywell Process Solutions:</strong> Profit Suite (APC/RTO), Uniformance PHD (historian), Honeywell Forge (AI and analytics platform). Strong presence across O&amp;G, particularly upstream and downstream. Competitive with AspenTech for APC; Forge competes with C3.ai for industrial AI platform.</li>
  <li><strong>Emerson:</strong> DeltaV (DCS), Plantweb Optics (asset performance AI platform). Strong in process manufacturing and O&amp;G. Good choice if the plant runs DeltaV as the primary DCS — tight integration advantage.</li>
  <li><strong>ABB:</strong> 800xA DCS platform, ABB Ability™ AI suite. Particularly strong in Europe, Asia, and power generation. Growing O&amp;G footprint.</li>
  <li><strong>Siemens:</strong> SIMATIC PCS 7/PCS neo (DCS), MindSphere (IIoT and AI platform). Stronger in discrete manufacturing but growing in O&amp;G process industries.</li>
</ul>
<h3>Specialized Industrial AI Platforms</h3>
<ul>
  <li><strong>C3.ai:</strong> Enterprise AI platform with a dedicated O&amp;G vertical. Shell is a major customer. Particularly strong for predictive maintenance at scale across large asset fleets. Requires significant implementation effort but is highly configurable.</li>
  <li><strong>SparkCognition:</strong> Industrial AI with strong O&amp;G focus. Good for predictive analytics and anomaly detection. Smaller vendor — evaluate financial stability and long-term support carefully.</li>
  <li><strong>Akselos:</strong> Structural integrity AI using physics-based digital twin models. Relevant for refinery vessels and structural assets.</li>
</ul>
<h3>Cloud Providers with Industrial Offerings</h3>
<ul>
  <li><strong>AWS IoT Greengrass + SageMaker:</strong> Strong edge-to-cloud story. Greengrass runs AI inference at the edge; SageMaker handles training in cloud. Good if the organization is committed to AWS ecosystem.</li>
  <li><strong>Azure IoT Hub + Azure ML:</strong> Best choice if the enterprise is already Microsoft-centric (Office 365, Azure Active Directory). Strong integration story.</li>
  <li><strong>GCP Vertex AI:</strong> Less common in O&amp;G today but gaining traction. Strong data analytics tools (BigQuery, Looker).</li>
</ul>
<h3>Data Infrastructure — The Historian Duopoly</h3>
<p><strong>AVEVA PI System</strong> (formerly OSIsoft PI Server) is the dominant industrial time-series historian. It is installed in approximately 65% of major industrial facilities globally. If you are joining a large refinery, assume it uses PI unless told otherwise. AVEVA also offers PI Vision (visualization), PI Analytics (calculations), and Asset Framework (equipment hierarchy modeling). Your AI data pipelines will almost certainly need to integrate with PI.</p>`,
      keyTerms: ['AspenTech', 'AVEVA PI', 'C3.ai', 'Edge Inference', 'Systems Integrator']
    },
    {
      id: 'm10-s05',
      title: 'Build vs Buy vs Partner',
      type: 'concept',
      content: `<p>This decision will come up repeatedly throughout your transformation program. It is not a one-time choice — it applies to every layer of the stack and every use case. Here is how to think about it systematically rather than defaulting to whatever the loudest stakeholder recommends.</p>
<h3>Build (Develop AI In-House)</h3>
<p><strong>When it makes sense:</strong> You have a highly specific, proprietary use case where no vendor solution exists. You want to build institutional AI capability as a strategic asset. You have budget, time, and access to talent.</p>
<p><strong>The realistic picture:</strong> Building from scratch takes 18–36 months to reach meaningful capability. Attracting and retaining top AI talent to a refinery environment is genuinely difficult compared to competing against tech companies. Internal IT procurement processes slow everything down. <strong>Pure build is rarely the right answer for most refineries today.</strong></p>
<h3>Buy (Commercial Product)</h3>
<p><strong>When it makes sense:</strong> A vendor solution addresses your use case well, has been proven at comparable refineries, and can be deployed in a reasonable timeframe. You want domain expertise embedded in the product.</p>
<p><strong>The risks:</strong> Expensive licensing — enterprise AI software can cost $500K–$5M/year. Vendor lock-in — if your data and models live in a proprietary vendor platform, switching is painful and expensive. Less flexibility to customize for your specific process.</p>
<h3>Partner (Systems Integrator-Led)</h3>
<p><strong>When it makes sense:</strong> You need speed of deployment, you want to use proven tools, but you want more customization than a pure buy gives you. SI partners (Accenture, Infosys, Wipro, TCS, Deloitte) can deploy AI solutions by combining commercial tools with custom development.</p>
<p><strong>The risk:</strong> The SI builds it and leaves. You end up with a production AI system that only the SI's team understands, and you are paying ongoing support fees for someone else to maintain your capability. Insist on: documented architecture, code handover, internal team training, and a knowledge transfer plan as contract deliverables.</p>
<h3>The Recommended Approach for Most Refineries</h3>
<p><strong>Buy the platform, build the team to own it.</strong> Select a vendor platform for the AI/ML layer (e.g., AspenTech Mtell, Azure ML, or similar). Use an SI if needed for initial deployment. But simultaneously build your internal AI team — 2-3 data scientists and 1 data engineer at minimum — who become the operators and owners of the platform. Never allow a vendor to own your AI capability. The platform is a tool; the capability must live inside your organization.</p>`,
      keyTerms: ['Vendor Lock-in', 'Systems Integrator', 'Build vs Buy', 'AspenTech', 'AVEVA PI']
    },
    {
      id: 'm10-s06',
      title: 'Integration Protocols — The Plumbing That Makes AI Work',
      type: 'concept',
      content: `<p>When your data engineer says "we can't get the data out of the DCS easily," the problem is often a protocol mismatch or a missing integration layer. Understanding the key industrial protocols helps you ask the right questions and set the right infrastructure requirements.</p>
<h3>OPC-UA (OPC Unified Architecture) — The Modern Standard</h3>
<p><strong>OPC-UA</strong> is the international standard (IEC 62541) for secure, reliable, vendor-neutral data exchange between industrial systems. Key features: platform-independent (runs on Windows, Linux, embedded systems), encrypted and authenticated communications, firewall-friendly (uses standard TCP/IP ports), supports both data subscriptions and historical data access.</p>
<p><strong>Why it matters for AI:</strong> If your DCS and historian both support OPC-UA, you have a clean, secure, standardized integration path for getting data to your AI platform. If a vendor says "just use OPC-UA to connect your DCS to our cloud platform" — ask your OT security team first. OPC-UA is secure, but opening any OT data connection requires a formal security review.</p>
<h3>Modbus — The Legacy Reality</h3>
<p><strong>Modbus</strong> is a protocol from 1979. It is brutally simple, which is why it still runs on millions of field devices today. The problem: it has no authentication, no encryption, and no security features whatsoever. If Modbus-connected devices are exposed beyond the OT network, they are completely vulnerable. When assessing a site's AI readiness, ask how many field devices still communicate via Modbus only.</p>
<h3>MQTT — For Edge-to-Cloud Streaming</h3>
<p><strong>MQTT</strong> (Message Queuing Telemetry Transport) is a lightweight publish-subscribe messaging protocol designed for constrained environments with unreliable networks. Very low bandwidth overhead. Widely used for streaming sensor data from edge devices to cloud or central servers. Many edge AI platforms use MQTT to receive real-time sensor data.</p>
<h3>REST API / OData — The IT-Friendly Interface</h3>
<p>Modern industrial platforms expose data through standard web APIs. <strong>AVEVA PI Web API</strong> allows AI platforms in the IT zone to query historian data using standard HTTP/REST calls — the same technology pattern used by any web application. This is the standard and preferred integration pattern for AI platforms connecting to the historian: PI Web API over HTTPS with authentication and rate limiting.</p>
<h3>The Practical Assessment Question</h3>
<p>When evaluating a refinery's AI readiness, ask: <em>"Is there OPC-UA connectivity between your DCS/historian and the IT zone? Do you have a PI Web API or similar IT-accessible historian interface deployed?"</em> The answer tells you how much integration work stands between where they are today and a working AI data pipeline.</p>`,
      keyTerms: ['OPC-UA', 'MQTT', 'Modbus', 'AVEVA PI', 'ETL']
    },
    {
      id: 'm10-s07',
      title: 'Architecture in Practice — A Worked Decision Example',
      type: 'case-study',
      content: `<p>Abstract architecture frameworks are useful. But the real test is applying them to a specific situation. Here is a worked example that you can use as a template for your own thinking.</p>
<h3>The Scenario</h3>
<p>A 200,000 bbl/day refinery in the Middle East. AVEVA PI historian has 5 years of good-quality process data across all major units. AspenTech APC controllers are deployed on most units and are running in automatic approximately 80% of the time — a solid baseline. No AI has been deployed yet. The IT team is cautious about cloud (data sovereignty concerns). Operations wants predictive maintenance on the compressor train. Budget is $3M for Year 1. What do you recommend?</p>
<h3>The Recommended Architecture (and the Reasoning)</h3>
<p><strong>Step 1 — Data Layer:</strong> AVEVA PI is already deployed and healthy. No need to replace it. Deploy PI Web API to expose historian data to the IT zone over HTTPS. This is a standard AVEVA product, low-risk, well-understood by their support team.</p>
<p><strong>Step 2 — Data Infrastructure:</strong> Deploy an on-premise operational data lake in the IT zone (Microsoft Azure Stack or a Linux-based Hadoop cluster if the IT team prefers open source). Set up automated ETL pipelines from PI Web API to the data lake on 15-minute intervals. Keep raw data for 3 years minimum.</p>
<p><strong>Step 3 — AI Platform:</strong> Start with AspenTech Mtell for predictive maintenance. The rationale: (a) AspenTech already has a relationship with this refinery for APC — lower procurement friction; (b) Mtell integrates natively with PI System — lower integration risk; (c) Mtell uses physics-informed ML that leverages domain knowledge about rotating equipment — more robust than pure data-driven approaches on a relatively small dataset.</p>
<p><strong>Step 4 — Inference Infrastructure:</strong> Deploy edge inference servers on-premise (physically at the refinery) for real-time prediction serving. Data never leaves the plant. Latency is minimized. IT team is comfortable.</p>
<p><strong>Step 5 — Model Training:</strong> On-premise initially (the data lake server can handle the compute for 2-3 use cases). Plan to add a GPU server for training if the portfolio expands beyond 10 models, or use a private cloud deployment that keeps data within the country.</p>
<p><strong>Step 6 — Internal Team:</strong> Simultaneously hire: 1 data engineer (to own the PI-to-data-lake pipeline), 2 ML engineers (to own model development and validation), and embed 2 process engineers from operations (1 rotating equipment specialist, 1 process specialist) as domain experts. AspenTech provides platform support; the internal team owns the models.</p>
<p><strong>Step 7 — Year 2 Review:</strong> After 12 months of Mtell in production, evaluate: is the platform meeting needs? Are there use cases Mtell cannot serve well (e.g., process optimization, not just maintenance)? Does the data lake need to expand? Consider whether Azure ML or a similar general-purpose MLOps platform should be added to serve use cases outside Mtell's scope.</p>
<p>This approach is conservative, defensible, and designed to succeed — not to impress anyone with technical novelty.</p>`,
      keyTerms: ['AVEVA PI', 'AspenTech', 'Edge Inference', 'Data Lake', 'Build vs Buy', 'Systems Integrator']
    }
  ],
  diagram: {
    title: 'The 5-Layer Industrial AI Stack',
    description: 'Shows the five layers of the industrial AI technology stack from data sources to user interfaces, with OT zone vs IT zone vs cloud boundaries and example technologies at each layer.',
    svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 380">
  <!-- Background -->
  <rect width="900" height="380" fill="#f9fafb"/>

  <!-- Zone backgrounds -->
  <!-- OT Zone -->
  <rect x="15" y="45" width="200" height="295" rx="8" fill="#fef2f2" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="5,3"/>
  <text x="115" y="63" text-anchor="middle" font-size="11" font-weight="bold" fill="#dc2626">OT ZONE</text>

  <!-- IT Zone -->
  <rect x="230" y="45" width="380" height="295" rx="8" fill="#f0fdf4" stroke="#16a34a" stroke-width="1.5" stroke-dasharray="5,3"/>
  <text x="420" y="63" text-anchor="middle" font-size="11" font-weight="bold" fill="#16a34a">IT ZONE / EDGE</text>

  <!-- Cloud Zone -->
  <rect x="625" y="45" width="260" height="295" rx="8" fill="#eff6ff" stroke="#2563eb" stroke-width="1.5" stroke-dasharray="5,3"/>
  <text x="755" y="63" text-anchor="middle" font-size="11" font-weight="bold" fill="#2563eb">CLOUD (OPTIONAL)</text>

  <!-- Layer labels on left -->
  <text x="7" y="115" font-size="9" font-weight="bold" fill="#374151" transform="rotate(-90,7,115)">L1</text>
  <text x="7" y="175" font-size="9" font-weight="bold" fill="#374151" transform="rotate(-90,7,175)">L2</text>
  <text x="7" y="235" font-size="9" font-weight="bold" fill="#374151" transform="rotate(-90,7,235)">L3</text>
  <text x="7" y="290" font-size="9" font-weight="bold" fill="#374151" transform="rotate(-90,7,290)">L4</text>
  <text x="7" y="345" font-size="9" font-weight="bold" fill="#374151" transform="rotate(-90,7,345)">L5</text>

  <!-- Layer 1: Data Sources -->
  <rect x="20" y="75" width="185" height="75" rx="6" fill="#fee2e2" stroke="#dc2626" stroke-width="1.5"/>
  <text x="112" y="93" text-anchor="middle" font-size="11" font-weight="bold" fill="#991b1b">Layer 1: Data Sources</text>
  <text x="30" y="109" font-size="9" fill="#7f1d1d">DCS (Honeywell, Emerson)</text>
  <text x="30" y="122" font-size="9" fill="#7f1d1d">PLCs, Field Sensors</text>
  <text x="30" y="135" font-size="9" fill="#7f1d1d">AVEVA PI Historian</text>

  <!-- Layer 2: Data Infrastructure -->
  <rect x="235" y="75" width="185" height="75" rx="6" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/>
  <text x="327" y="93" text-anchor="middle" font-size="11" font-weight="bold" fill="#166534">Layer 2: Data Infrastructure</text>
  <text x="245" y="109" font-size="9" fill="#14532d">Operational Data Lake</text>
  <text x="245" y="122" font-size="9" fill="#14532d">ETL Pipelines (PI Web API)</text>
  <text x="245" y="135" font-size="9" fill="#14532d">MQTT / OPC-UA Bridge</text>

  <!-- Layer 2 cloud variant -->
  <rect x="635" y="75" width="240" height="75" rx="6" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5"/>
  <text x="755" y="93" text-anchor="middle" font-size="11" font-weight="bold" fill="#1e40af">Layer 2: Cloud Data</text>
  <text x="645" y="109" font-size="9" fill="#1e3a8a">AWS S3 / Azure Data Lake</text>
  <text x="645" y="122" font-size="9" fill="#1e3a8a">Kafka Streaming</text>
  <text x="645" y="135" font-size="9" fill="#1e3a8a">(if data sovereignty allows)</text>

  <!-- Layer 3: AI/ML Platform -->
  <rect x="235" y="165" width="185" height="75" rx="6" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/>
  <text x="327" y="183" text-anchor="middle" font-size="11" font-weight="bold" fill="#166534">Layer 3: AI/ML Platform</text>
  <text x="245" y="199" font-size="9" fill="#14532d">AspenTech Mtell / C3.ai</text>
  <text x="245" y="212" font-size="9" fill="#14532d">MLflow / Kubeflow</text>
  <text x="245" y="225" font-size="9" fill="#14532d">Model Registry + Monitoring</text>

  <!-- Layer 3 cloud -->
  <rect x="635" y="165" width="240" height="75" rx="6" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5"/>
  <text x="755" y="183" text-anchor="middle" font-size="11" font-weight="bold" fill="#1e40af">Layer 3: Cloud Training</text>
  <text x="645" y="199" font-size="9" fill="#1e3a8a">Azure ML / AWS SageMaker</text>
  <text x="645" y="212" font-size="9" fill="#1e3a8a">GPU compute for training</text>
  <text x="645" y="225" font-size="9" fill="#1e3a8a">Experiment tracking</text>

  <!-- Layer 4: Applications -->
  <rect x="235" y="255" width="185" height="70" rx="6" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/>
  <text x="327" y="273" text-anchor="middle" font-size="11" font-weight="bold" fill="#166534">Layer 4: Applications</text>
  <text x="245" y="289" font-size="9" fill="#14532d">Predictive Maintenance App</text>
  <text x="245" y="302" font-size="9" fill="#14532d">Quality Prediction Dashboard</text>
  <text x="245" y="315" font-size="9" fill="#14532d">Energy Optimization Tool</text>

  <!-- Layer 5: User Interfaces -->
  <rect x="235" y="338" width="185" height="35" rx="6" fill="#f0fdf4" stroke="#16a34a" stroke-width="1.5"/>
  <text x="327" y="355" text-anchor="middle" font-size="11" font-weight="bold" fill="#166534">Layer 5: User Interfaces</text>
  <text x="327" y="368" text-anchor="middle" font-size="9" fill="#14532d">Operator Dashboard | Mobile Alerts | KPI Reports</text>

  <!-- Right side Layer 4/5 cloud -->
  <rect x="635" y="255" width="240" height="118" rx="6" fill="#eff6ff" stroke="#2563eb" stroke-width="1.5"/>
  <text x="755" y="273" text-anchor="middle" font-size="11" font-weight="bold" fill="#1e40af">Layers 4-5: Cloud Apps</text>
  <text x="645" y="289" font-size="9" fill="#1e3a8a">Web dashboards (remote access)</text>
  <text x="645" y="302" font-size="9" fill="#1e3a8a">Mobile apps for maintenance</text>
  <text x="645" y="315" font-size="9" fill="#1e3a8a">Enterprise BI (Power BI, Looker)</text>
  <text x="645" y="335" font-size="9" fill="#1e3a8a">Management reporting</text>
  <text x="645" y="348" font-size="9" fill="#1e3a8a">Cross-site benchmarking</text>
  <text x="645" y="362" font-size="9" fill="#1e3a8a">Corporate data warehouse</text>

  <!-- Data flow arrows L1 -> L2 -->
  <line x1="205" y1="112" x2="233" y2="112" stroke="#16a34a" stroke-width="2"/>
  <polygon points="229,108 237,112 229,116" fill="#16a34a"/>
  <text x="219" y="108" font-size="8" fill="#166534">OPC-UA</text>

  <!-- Arrow L2 -> L3 -->
  <line x1="327" y1="150" x2="327" y2="163" stroke="#16a34a" stroke-width="2"/>
  <polygon points="323,159 327,167 331,159" fill="#16a34a"/>

  <!-- Arrow L3 -> L4 -->
  <line x1="327" y1="240" x2="327" y2="253" stroke="#16a34a" stroke-width="2"/>
  <polygon points="323,249 327,257 331,249" fill="#16a34a"/>

  <!-- Arrow L4 -> L5 -->
  <line x1="327" y1="325" x2="327" y2="336" stroke="#16a34a" stroke-width="2"/>
  <polygon points="323,332 327,340 331,332" fill="#16a34a"/>

  <!-- Cloud arrow L2 -> L3 cloud -->
  <line x1="755" y1="150" x2="755" y2="163" stroke="#2563eb" stroke-width="2"/>
  <polygon points="751,159 755,167 759,159" fill="#2563eb"/>

  <!-- IT to Cloud sync arrow -->
  <line x1="422" y1="112" x2="633" y2="112" stroke="#6b7280" stroke-width="1.5" stroke-dasharray="4,3"/>
  <polygon points="629,108 637,112 629,116" fill="#6b7280"/>
  <text x="527" y="108" text-anchor="middle" font-size="8" fill="#374151">Sync (if allowed)</text>

  <!-- Training model sent back -->
  <line x1="633" y1="200" x2="422" y2="200" stroke="#9333ea" stroke-width="1.5" stroke-dasharray="4,3"/>
  <polygon points="426,196 418,200 426,204" fill="#9333ea"/>
  <text x="527" y="195" text-anchor="middle" font-size="8" fill="#9333ea">Trained model deploy</text>

  <!-- Title -->
  <text x="450" y="20" text-anchor="middle" font-size="14" font-weight="bold" fill="#111827">5-Layer Industrial AI Stack with Deployment Zones</text>
</svg>`
  },
  video: {
    videoId: 'MmMkJIu4FBs',
    title: 'Watch: Industrial AI Technology Architecture',
    start: 30,
    end: 300,
    placement: 'm10-s02',
    description: 'How the industrial AI technology stack is architected — from sensors to cloud, and where different workloads belong'
  },
  glossary: [
    { term: 'OPC-UA', definition: 'OPC Unified Architecture — the modern international standard (IEC 62541) for secure, vendor-neutral data exchange between industrial systems. Uses encrypted, authenticated TCP/IP communications.' },
    { term: 'MQTT', definition: 'Message Queuing Telemetry Transport — a lightweight publish-subscribe messaging protocol designed for IoT and edge-to-cloud data streaming with low bandwidth overhead.' },
    { term: 'Modbus', definition: 'An industrial communication protocol from 1979, still widely used in legacy field devices. Has no authentication or encryption — a security risk if exposed beyond the OT network.' },
    { term: 'Data Lake', definition: 'A centralized repository (in the IT zone) that stores raw and processed operational data from the historian and other sources, making it accessible for AI training and analytics.' },
    { term: 'ETL', definition: 'Extract-Transform-Load — the process of extracting data from OT source systems, transforming it (cleaning, normalizing, engineering features), and loading it into the data lake for AI use.' },
    { term: 'MLflow', definition: 'An open-source MLOps platform for tracking experiments, packaging models, and managing the model lifecycle from training to production deployment.' },
    { term: 'Edge Inference', definition: 'Running AI model predictions on servers physically located at or near the plant, on the plant\'s own network — providing low latency and local data security without cloud dependency.' },
    { term: 'ISI (Independent Software Integration)', definition: 'The practice of integrating multiple software components from different vendors into a working system, often performed by a systems integrator.' },
    { term: 'Vendor Lock-in', definition: 'A situation where switching away from a vendor\'s platform becomes prohibitively expensive because critical data, models, or processes have been built entirely within their proprietary system.' },
    { term: 'AspenTech', definition: 'The dominant vendor for refinery process optimization software. Key products include Aspen DMC3 (APC), Aspen PIMS (planning), and Aspen Mtell (predictive maintenance AI).' },
    { term: 'AVEVA PI', definition: 'The dominant industrial time-series historian (formerly OSIsoft PI Server), installed in approximately 65% of major industrial facilities globally. The primary data source for industrial AI.' },
    { term: 'Systems Integrator', definition: 'A firm (e.g., Accenture, Infosys, TCS) that combines commercial software platforms with custom development to deploy integrated solutions. Risk: knowledge may not be transferred to the client team.' }
  ]
};
