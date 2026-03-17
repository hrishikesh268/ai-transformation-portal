window.QUIZ_Q10 = {
  id: 'q10',
  moduleId: 'm10',
  title: 'Technology Architecture — Knowledge Check',
  questions: [
    {
      id: 'q10-01',
      type: 'mcq',
      question: 'The industrial AI technology stack is organized in 5 layers. Which of the following correctly describes the layer order from bottom to top?',
      options: [
        'UI → Applications → AI Platform → Infrastructure → Data Sources',
        'Data Sources → Infrastructure → AI Platform → Applications → UI',
        'AI Platform → Data Sources → Infrastructure → UI → Applications',
        'Infrastructure → Data Sources → AI Platform → UI → Applications'
      ],
      correctIndex: 1,
      explanation: 'The 5-layer industrial AI stack runs from the physical world upward: Data Sources (sensors, PLCs, historian, LIMS, CMMS) form the base. Infrastructure (compute, storage, networking — both edge and cloud) sits above. The AI Platform (model training, deployment, monitoring tools like MLflow, Kubeflow) sits in the middle. Applications (the specific AI use cases — predictive maintenance, soft sensors, optimization) are built on the platform. The UI (operator interfaces, dashboards, alert systems) forms the top layer through which humans interact with AI outputs. Each layer is a prerequisite for the one above it, which is why data quality and infrastructure work must precede model development.',
      interviewNote: 'Being able to recite and explain the 5-layer stack fluently in an interview signals architectural literacy. It also provides a framework for diagnosing where a specific deployment problem originates.'
    },
    {
      id: 'q10-02',
      type: 'mcq',
      question: 'For a real-time predictive maintenance model running at an operating refinery, where should model inference (generating live predictions) run, and where should model training (building/retraining models) run?',
      options: [
        'Both inference and training should run in the cloud — modern cloud platforms have low enough latency for real-time industrial applications',
        'Both inference and training should run on edge servers within the OT zone — keeping everything on-premise maximizes security',
        'Inference should run at edge servers within the OT network (Level 3) for low latency and OT isolation; training should run in the cloud or central data center using historical data extracted through the DMZ',
        'Inference should run in the cloud for scalability; training should run at the edge using fresh sensor data for maximum model relevance'
      ],
      correctIndex: 2,
      explanation: 'The correct split is inference at the edge, training in the cloud/central. Edge inference (at Level 3 of the Purdue Model, close to the historian and OT systems) provides low-latency predictions without requiring live OT data to cross to an external network — preserving OT isolation and ensuring predictions continue if internet connectivity fails. Cloud or central training is appropriate because it has access to large historical datasets, significant compute for retraining, and data science tooling — and training runs on historical data that has already safely crossed the DMZ, not on live OT streams. This split is the architectural standard endorsed by IEC 62443 and implemented by leading industrial AI vendors.',
      interviewNote: 'Edge inference + cloud training is one of the most important architectural principles to know and be able to justify. It appears in almost every industrial AI architecture discussion.'
    },
    {
      id: 'q10-03',
      type: 'mcq',
      question: 'A refinery is modernizing its OT communication infrastructure. The engineering team debates between continuing to use Modbus (the existing protocol) and migrating to OPC-UA. What are the critical differences relevant to an AI transformation leader?',
      options: [
        'Modbus is faster and more reliable for real-time control; OPC-UA is only suitable for reporting and analytics applications',
        'OPC-UA is a modern, secure protocol with built-in authentication, encryption, and a rich data model — it enables safe, structured data access for AI pipelines. Modbus is a 1979 legacy protocol with no authentication or encryption, making it unsuitable as a direct data source for internet-connected systems and difficult to integrate with modern AI platforms',
        'OPC-UA and Modbus are functionally equivalent for AI data ingestion; the choice is purely a vendor preference',
        'Modbus is preferred for AI because it is simpler and data scientists can connect to it directly without OT team involvement'
      ],
      correctIndex: 1,
      explanation: 'OPC-UA (OPC Unified Architecture) was designed as a modern, secure industrial communication standard. Key features relevant to AI: built-in authentication (username/password, certificates), TLS encryption, a rich hierarchical data model that includes units and context (not just raw values), and cross-platform interoperability. Modbus, designed in 1979, has none of these security features — any device on the same network can read and write Modbus registers without authentication. For AI data pipelines, OPC-UA provides a governed, authenticated data access layer. Modbus connections for AI data extraction require additional security controls (firewalls, proxies) to prevent unintended exposure of control devices. Wherever possible, OPC-UA should be the target protocol for AI data integration.',
      interviewNote: null
    },
    {
      id: 'q10-04',
      type: 'mcq',
      question: 'AspenTech is a major vendor in the industrial AI and process optimization space. What is AspenTech\'s primary market position, and what specific product do they offer for predictive maintenance?',
      options: [
        'AspenTech is primarily a cybersecurity vendor for OT networks; their maintenance product is AspenGuard',
        'AspenTech is primarily a process simulation and optimization vendor (Aspen HYSYS, Aspen Plus, Aspen DMC3 for APC); their predictive maintenance product is Aspen Mtell, which uses agent-based ML for equipment failure prediction',
        'AspenTech is primarily a historian and data management vendor; their historian product competes directly with AVEVA PI',
        'AspenTech is primarily an ERP vendor for refineries; they acquired a predictive maintenance startup called Mtell in 2020'
      ],
      correctIndex: 1,
      explanation: 'AspenTech is the dominant vendor for process simulation (Aspen HYSYS, Aspen Plus) and advanced process control (Aspen DMC3). Their portfolio for industrial AI includes Aspen Mtell for predictive maintenance — Mtell uses an agent-based machine learning approach where individual "agents" monitor specific equipment signatures and learn normal operating behavior to detect anomalies. AspenTech also offers Aspen AI (broader ML-based process optimization). Their strong existing relationships with refinery process engineering teams gives them a competitive advantage in selling AI into organizations that already use their simulation and APC products. Understanding AspenTech\'s portfolio is important when evaluating build vs. buy decisions for process optimization AI.',
      interviewNote: 'Being able to name specific vendors and their product positioning (AspenTech = HYSYS + DMC3 + Mtell) signals market familiarity that impresses both client engineers and interviewers from transformation consulting roles.'
    },
    {
      id: 'q10-05',
      type: 'mcq',
      question: 'AVEVA PI (formerly OSIsoft PI) is the dominant industrial data historian. What is its approximate market penetration among major industrial facilities, and what does this mean strategically for AI deployments?',
      options: [
        'AVEVA PI has approximately 25% market share — the remaining 75% use a mix of competitors including Honeywell Uniformance and GE Predix',
        'AVEVA PI has approximately 65% penetration among major industrial facilities — meaning most refinery AI programs will use PI as the primary data source, and knowing the PI ecosystem (PI Web API, PI AF, PI DataLink) is a core technical requirement for industrial AI teams',
        'AVEVA PI has approximately 90% market share — it is a monopoly and there are effectively no viable alternatives for industrial historians',
        'AVEVA PI market share has declined below 40% since AVEVA\'s acquisition by Schneider Electric, with many sites migrating to cloud-native alternatives'
      ],
      correctIndex: 1,
      explanation: 'AVEVA PI holds approximately 65% penetration among major industrial facilities — making it the de facto standard for industrial time-series data in refineries, petrochemicals, and utilities. This market position means that in the majority of industrial AI engagements, the data pipeline will be built on PI. Practical implications: AI teams need PI expertise (PI Web API for programmatic access, PI Asset Framework for equipment hierarchy, PI DataLink for Excel-based analysis), data scientists should understand PI\'s compression algorithm and its effects on data quality, and architecture decisions around data extraction need to account for PI\'s security model. The remaining ~35% of sites use alternatives including Honeywell Uniformance, GE Historian, and newer cloud-native historians.',
      interviewNote: 'AVEVA PI\'s 65% market dominance is a specific fact that signals genuine market knowledge. It also frames why PI expertise is a practical requirement, not just a nice-to-have, for industrial AI teams.'
    },
    {
      id: 'q10-06',
      type: 'mcq',
      question: 'When should an industrial company build custom AI models vs. buy a vendor platform? Which principle correctly guides this decision?',
      options: [
        'Always build — custom models always outperform vendor models because they are trained on site-specific data',
        'Always buy — building internal AI capability is too expensive and slow for most industrial companies',
        'Buy the platform (infrastructure, MLOps tooling, data connectors) and build the internal team and domain-specific models — this combines the scale advantages of vendor platforms with the competitive advantage of site-specific model development and internal capability that persists after the vendor relationship ends',
        'Buy everything including the models — industrial AI models are commodities and there is no competitive advantage in building custom models for standard use cases like predictive maintenance'
      ],
      correctIndex: 2,
      explanation: 'The correct principle is "buy the platform, build the team and models." Vendor platforms (like C3.ai, AspenTech, or Azure ML) provide value through pre-built industrial data connectors, MLOps infrastructure, and deployment tooling — capabilities that would take years to build internally and do not differentiate the organization competitively. However, the AI models themselves — trained on site-specific data, calibrated to specific equipment and operating conditions — are a source of competitive advantage and should be developed and owned internally. Building internal data science and ML engineering capability ensures the organization can maintain, retrain, and extend models without ongoing vendor dependency. Companies that buy everything, including models, become permanently dependent on vendors and lose the knowledge that drives continuous improvement.',
      interviewNote: null
    },
    {
      id: 'q10-07',
      type: 'truefalse',
      question: 'True or False: For a refinery with an existing AVEVA PI historian at Level 3 of the Purdue Model, the recommended AI architecture deploys inference servers at the edge (Level 3) so that predictions continue even when connectivity to the corporate network or cloud is lost.',
      options: ['True', 'False'],
      correctIndex: 0,
      explanation: 'True. Edge inference at Level 3 is the correct architecture for two reasons. First, OT isolation: keeping inference within the OT zone means live sensor data does not need to traverse the DMZ to generate predictions — preserving the security model. Second, resilience: if corporate network or cloud connectivity fails (planned or unplanned), edge inference continues uninterrupted. A refinery cannot afford for its predictive maintenance alerts to stop every time the WAN link has a problem. The AVEVA PI historian is already at Level 3 and provides the data source for real-time inference — the edge inference server co-located at Level 3 reads directly from PI via the PI Web API and generates predictions without any external dependency.',
      interviewNote: null
    },
    {
      id: 'q10-08',
      type: 'truefalse',
      question: 'True or False: C3.ai is an enterprise AI platform vendor used by major industrial companies including Shell, and their platform approach is to provide pre-built industry-specific AI applications on top of a common data and model management infrastructure.',
      options: ['True', 'False'],
      correctIndex: 0,
      explanation: 'True. C3.ai (founded by Tom Siebel) is an enterprise AI platform that sells pre-built AI applications for industrial, financial, and government sectors. Shell is one of their marquee customers, using C3.ai for predictive maintenance across global operations. C3.ai\'s architecture provides a common data integration and model management platform on top of which industry-specific applications (predictive maintenance, supply chain optimization, fraud detection) are pre-built and configurable. This "application platform" approach positions C3.ai differently from pure infrastructure vendors like Azure ML or AWS SageMaker — C3.ai sells the application outcomes, not just the tooling. Understanding this positioning is important when evaluating enterprise AI procurement options.',
      interviewNote: 'Naming C3.ai, knowing Shell is a customer, and understanding the platform vs. infrastructure distinction demonstrates vendor market knowledge that differentiates you in transformation strategy discussions.'
    },
    {
      id: 'q10-09',
      type: 'scenario',
      question: 'A vendor proposes the following architecture for your refinery\'s predictive maintenance program: all sensor data streams to their cloud platform in real time via the internet, the AI model runs in their cloud, and predictions are returned to the control room via a web API every 30 seconds. They argue this is superior because "cloud computing has essentially unlimited scale." What is your architectural objection?',
      options: [
        'Cloud platforms cannot process industrial sensor data fast enough for 30-second prediction intervals',
        'The architecture has three structural problems: (1) streaming live OT data to the internet violates OT isolation and creates a continuous attack surface; (2) cloud dependency means predictions fail when connectivity fails — unacceptable for production-critical safety systems; (3) 30-second round-trip latency through a cloud API introduces unnecessary risk compared to millisecond-level edge inference. The correct architecture is edge inference at Level 3, not cloud inference.',
        'Cloud vendors cannot meet the uptime SLAs required for production-critical industrial applications',
        'The architecture requires too much bandwidth — 30-second data streams from hundreds of sensors will saturate the corporate WAN link'
      ],
      correctIndex: 1,
      explanation: 'This architecture fails on security, resilience, and latency grounds simultaneously. Security: continuously streaming live OT data to an external cloud platform is the exact pattern rejected by IEC 62443 and DMZ architecture — it creates a permanent pathway from OT systems to the internet. Resilience: cloud-dependent inference stops working during any WAN outage, ISP issue, or vendor maintenance window — and the plant cannot plan WAN outages around safety-critical AI systems. Latency: for time-sensitive applications, adding a cloud round-trip introduces unnecessary delay and a failure point compared to local edge inference. Scale is not the constraint in predictive maintenance — a single edge server can handle hundreds of models. The only valid use of cloud in this architecture is for model training and retraining, using historical data batched through the DMZ.',
      interviewNote: 'This objection — decomposing the vendor claim into three specific architectural violations — is exactly the analysis a transformation leader must be able to perform. It protects the organization while maintaining a constructive vendor relationship.'
    },
    {
      id: 'q10-10',
      type: 'scenario',
      question: 'You are selecting an AI platform for a 300,000 bbl/day refinery. Option A is a major enterprise AI vendor (C3.ai or AspenTech) with pre-built industrial applications, connectors to AVEVA PI and CMMS, and a reference list of 20 major refineries. Option B is building everything in-house using open-source tools (Python, MLflow, Kubeflow, PostgreSQL). Option A costs 10x more annually. What framework do you use to make this decision, and what factors favor Option A?',
      options: [
        'Always choose Option B — open-source tools are functionally equivalent and the 10x cost premium is never justified for commodity AI infrastructure',
        'Always choose Option A — enterprise vendor support is required for production-critical industrial AI systems',
        'Evaluate against time-to-value, internal capability, total cost of ownership, and risk. Option A is favored when: the organization lacks internal data engineering and MLOps capability, speed to first production deployment is critical, pre-built PI and CMMS connectors save months of integration work, and reference implementations at comparable refineries reduce technical risk. Option B favors organizations with strong internal data science teams, a long time horizon, and a strategic goal of building proprietary AI capability.',
        'Choose based on vendor relationship — the vendor that already provides DCS or APC systems should be selected for AI to minimize integration complexity'
      ],
      correctIndex: 2,
      explanation: 'The build vs. buy decision is a classic framework question with no universal answer — it depends on the organization\'s starting position. Enterprise vendor platforms justify their premium through: pre-built connectors (saving 6-12 months of integration work), proven deployment patterns at comparable sites (reducing technical risk), managed MLOps infrastructure (avoiding the need to build and maintain this capability internally), and vendor support for production incidents. The 10x cost premium needs to be evaluated against these benefits, not just the license cost. For an organization starting from scratch in industrial AI, Option A\'s time-to-value advantage is often worth the premium. For a mature organization with strong internal teams, Option B\'s long-term economics and proprietary capability are compelling. The "buy platform, build team and models" principle provides a middle path: use vendor infrastructure, build internal modeling expertise.',
      interviewNote: null
    }
  ]
};
