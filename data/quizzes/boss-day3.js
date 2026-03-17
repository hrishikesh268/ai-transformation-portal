window.QUIZ_BOSS_DAY3 = {
  id: 'boss-day3',
  dayId: 'day3',
  title: 'Day 3 Boss Challenge: Transformation Mechanics',
  subtitle: 'Cybersecurity, Strategy, Architecture & Agile — 15 harder questions',
  timeLimit: 1200,
  passingScore: 0.7,
  questions: [
    // === CYBERSECURITY (3 questions) ===
    {
      id: 'bd3-01',
      type: 'scenario',
      question: 'A vendor you are evaluating for AI process optimization insists on two requirements: (1) their platform must be hosted in their managed cloud environment, and (2) they need a persistent API connection to your DCS to push setpoint recommendations automatically. Your plant cybersecurity officer has declined both. The vendor argues that their cloud is "SOC 2 certified" and their DCS integration has been deployed at "multiple refineries in Europe." How do you resolve this impasse?',
      options: [
        'Override the cybersecurity officer — the vendor\'s SOC 2 certification and reference deployments provide sufficient assurance, and blocking the architecture will delay the program',
        'The cybersecurity officer is correct on both counts. Cloud hosting of industrial AI violates OT isolation requirements regardless of SOC 2 status — SOC 2 addresses IT data governance, not OT safety architecture. Automated DCS write-back via API creates a remote code execution pathway into process controls. Propose the compliant alternative: edge inference at Level 3 using the vendor\'s model, with operator-reviewed recommendations entered manually or through a tightly controlled, plant-approved integration layer. If the vendor cannot support this architecture, they are the wrong vendor.',
        'Accept the cloud requirement but reject the DCS write-back — cloud hosting with read-only OT data access is a reasonable compromise',
        'Request a 90-day pilot with the vendor\'s proposed architecture under a special security exception, with enhanced monitoring to detect any incidents'
      ],
      correctIndex: 1,
      explanation: 'This scenario tests whether you can hold the line on cybersecurity architecture under vendor pressure. SOC 2 certification addresses data governance for IT systems — it does not validate OT safety architecture. A SOC 2-certified cloud platform that receives live OT data is still a violation of DMZ principles, because the threat model is OT-to-cloud data exposure and cloud-to-OT attack vectors, not just data governance. Reference deployments at "multiple refineries in Europe" are not evidence that the architecture is safe — they may reflect poor security practice at those sites, or different threat profiles. The correct resolution is architectural: edge inference, human-in-the-loop for setpoint changes, read-only historian access. A vendor who cannot support compliant architecture is not suitable for an OT deployment regardless of their marketing credentials.',
      interviewNote: 'This is the exact scenario you will face in your first 6 months. Holding the architectural line while proposing a constructive alternative — rather than either overriding the CISO or blocking the program — is the leadership behavior that builds lasting credibility with both OT and IT organizations.'
    },
    {
      id: 'bd3-02',
      type: 'mcq',
      question: 'Triton/TRISIS (2017) and Stuxnet (2010) are the two most important industrial cyberattack case studies. What is the single most important architectural lesson that applies directly to the design of industrial AI data pipelines?',
      options: [
        'All industrial AI systems must be air-gapped from the internet — no cloud connectivity of any kind is acceptable',
        'Safety Instrumented Systems must be completely isolated from any AI data pipeline — Triton targeted SIS specifically, and any data pathway connecting an AI platform to SIS networks creates a pathway for the same attack class. For all other OT systems, enforce read-only access with authenticated, monitored conduits through the DMZ.',
        'Industrial AI should only use vendor-managed platforms because internal teams cannot achieve the security rigor demonstrated by nation-state threat actors',
        'USB drives and removable media should be banned from plant sites — since Stuxnet propagated via USB, this eliminates the primary attack vector'
      ],
      correctIndex: 1,
      explanation: 'The Triton/TRISIS attack is specifically relevant to AI architecture design because it demonstrates the catastrophic consequence of SIS network access — and SIS isolation is the single most critical architectural requirement in any industrial AI deployment. AI data pipelines need access to historian data, not SIS networks. If a data pipeline accidentally crosses into SIS territory (e.g., a PI tag incorrectly mapped from an SIS signal), it creates a connection that Triton-class malware could exploit. The lesson is: know your network zones, verify which tags come from which network level, and enforce hard isolation between AI data flows and SIS networks. USB prohibition (option D) is important but is a physical security control, not an architectural design principle for AI systems.',
      interviewNote: null
    },
    {
      id: 'bd3-03',
      type: 'mcq',
      question: 'You are conducting a security review of your AI transformation program and discover that the data engineering team has configured the AVEVA PI historian to push data to the AI platform using an outbound connection initiated from within the OT zone, rather than the AI platform pulling data through the DMZ. From a cybersecurity standpoint, which configuration is preferred and why?',
      options: [
        'The push configuration (OT-initiated) is preferred because it keeps the AI platform from having any inbound access rights to the OT network',
        'The pull configuration (AI-initiated, with AI platform reaching into OT through the DMZ) is always preferred because it is simpler to implement',
        'Both configurations are equivalent from a security standpoint — the direction of connection initiation does not matter if the data is encrypted in transit',
        'The push configuration (OT-initiated outbound) is generally preferred for DMZ architecture: the OT zone initiates a one-way outbound connection to deposit data in a DMZ buffer zone, and the AI platform retrieves it from the buffer. This ensures the AI platform has zero inbound access rights to the OT network, and any compromise of the AI platform cannot be leveraged to reach back into OT systems.'
      ],
      correctIndex: 3,
      explanation: 'In IEC 62443-compliant DMZ architecture, the preferred pattern is OT-initiated outbound push to a DMZ buffer, followed by AI platform pull from the buffer. This creates a two-stage data transfer where the AI platform never has any inbound connectivity to the OT zone — it only reads from the neutral DMZ buffer. If the AI platform is compromised, an attacker controls a system that can only read from the DMZ buffer, not write commands into OT. This is fundamentally safer than allowing the AI platform to initiate connections into the OT zone, even read-only ones, because connection initiation requires a firewall rule permitting inbound traffic that could be exploited. Data diodes (hardware-enforced one-way transfer devices) are the physical implementation of this principle in the highest-security environments.',
      interviewNote: null
    },

    // === TRANSFORMATION STRATEGY (5 questions) ===
    {
      id: 'bd3-04',
      type: 'scenario',
      question: 'The board of a major refinery group asks you to present your AI transformation strategy. After your presentation, the Chairman says: "This is interesting, but our competitor announced last week that they will achieve \'fully autonomous AI-managed refinery operations\' within 18 months. We need to leapfrog them — skip your Foundation stage and go directly to Integrated Intelligence within 12 months. We have a $50M budget." How do you respond?',
      options: [
        'Accept the mandate enthusiastically — $50M and board-level commitment are exactly the resources needed to compress the timeline, and integrated intelligence in 12 months is achievable with sufficient investment',
        'Decline the engagement — if the board wants integrated intelligence in 12 months, the program will fail and you should not be associated with it',
        'Reframe with strategic honesty: your competitor\'s 18-month claim is almost certainly aspirational marketing rather than an executable roadmap — no major refinery has achieved integrated intelligence without years of foundation work. Accepting the board\'s mandate to skip Foundation will produce a high-visibility failure. Propose a credible 36-month roadmap that delivers measurable financial results in year 1 (2-3 point solutions generating $15-30M), significant portfolio expansion in year 2, and platform-level integration in year 3 — with the $50M enabling acceleration within each stage, not compression of the stages themselves.',
        'Propose a compromise: 24 months to integrated intelligence, skipping only the late Foundation activities and compressing Point Solutions to a single 6-month sprint'
      ],
      correctIndex: 2,
      explanation: 'This question tests leadership courage — the ability to challenge an unrealistic mandate from the most senior level while preserving the relationship and proposing a credible alternative. The correct response has three elements: (1) challenge the competitor claim as likely marketing rather than executable roadmap; (2) explain why skipping Foundation stages predictably produces failure, not acceleration — the $50M cannot buy away the organizational learning and data infrastructure that Foundation stages develop; (3) show how $50M can be invested to deliver real, measurable returns faster within a credible framework. Accepting the mandate (option A) leads to failure in 18 months. Declining (option B) is commercially unacceptable. The compromise (option D) still skips critical stages and will fail for the same reasons.',
      interviewNote: 'This is the highest-stakes version of the "board wants to skip stages" scenario. The ability to be honest with a Chairman while offering a compelling alternative defines whether you are a transformation leader or an order-taker. Boards ultimately respect the person who tells them hard truths over the person who agrees and then fails.'
    },
    {
      id: 'bd3-05',
      type: 'mcq',
      question: 'A refinery has been running an AI transformation program for 2 years. They have 22 active POC projects but only 2 models in production. The Chief Digital Officer says this represents a "rich innovation pipeline." What is the accurate diagnosis and the intervention required?',
      options: [
        'The program is progressing normally — 22 POCs after 2 years is appropriate and production deployments will follow naturally as the most promising POCs mature',
        'The program has fallen into the POC Trap. 22 active POCs with 2 in production after 2 years means the organization has optimized for starting projects, not finishing them. The intervention is a portfolio moratorium: freeze all new POC initiations, conduct a forced ranking of existing POCs by value and readiness-to-deploy, and concentrate all resources on getting the top 3-5 to production within the next 6 months. The metric that matters is production deployments generating auditable returns, not POC count.',
        'The program needs more budget — 22 POCs cannot reach production with current resources, and a 5x budget increase would resolve the bottleneck',
        'The program needs better data science talent — the reason POCs are not reaching production is insufficient model quality'
      ],
      correctIndex: 1,
      explanation: 'The POC Trap is a well-documented failure mode in industrial AI transformation. After 2 years, an organization with 22 active POCs and 2 productions has a structural problem: the incentive system, governance, or capability stack is optimized for starting projects, not completing and deploying them. Common root causes include: no clear production deployment criteria (the "Definition of Done" is vague), insufficient MLOps and data engineering infrastructure to support production deployment, organizational resistance at the deployment stage (operator training, integration with workflows), and management rewarding AI activity rather than AI value. The portfolio moratorium is a decisive intervention that signals to the organization that POC activity without production deployment does not count as progress.',
      interviewNote: null
    },
    {
      id: 'bd3-06',
      type: 'mcq',
      question: 'You are 6 months into an AI transformation program. An influential plant manager who runs one of the two units where models are deployed tells his team: "These AI alerts are just noise. Ignore them and call me if a compressor actually trips." His operators have stopped acknowledging alerts entirely. From a Kotter change model perspective, which steps have failed — and what is the specific intervention?',
      options: [
        'Step 1 (Create Urgency) has failed — the plant manager does not believe AI is needed. Intervention: show him the financial cost of the last unplanned compressor failure',
        'Steps 4 (Communicate Vision) and 5 (Remove Obstacles) have failed at the plant manager level. The vision of what AI can do for his unit has not been effectively communicated to him personally, and the barriers to his engagement (unclear model validation, no operator training, no feedback mechanism for false positives) have not been removed. Intervention: meet with the plant manager one-on-one to review the model\'s actual track record on his equipment, involve his operators in model tuning, and give them a formal feedback channel to flag false positives.',
        'Step 6 (Generate Short-Term Wins) has failed — the program has not produced any wins visible to this plant manager. Intervention: retroactively identify a prevented failure in his unit and publicize it widely',
        'Step 8 (Anchor the Change) has failed — AI alerts have not been incorporated into the plant\'s standard operating procedures. Intervention: update the SOPs to make alert acknowledgment mandatory'
      ],
      correctIndex: 1,
      explanation: 'The plant manager\'s behavior is a classic Steps 4-5 failure. He has not been enrolled in the vision — no one has sat with him, reviewed the model\'s performance on his specific equipment, and demonstrated its value in terms he cares about. And the obstacles to his engagement have not been removed: if operators report high false positive rates and no one is addressing them, the manager\'s response ("ignore them") is rational given the information he has. The intervention must be personal and operational: a one-on-one review of the model\'s actual predictions vs. outcomes on his compressors, a joint session with his operators to review false positives and submit them for model tuning, and a commitment to measure alert quality and reduce false positives over the next 4 weeks. Without this, the model will be disabled in his unit.',
      interviewNote: 'This question tests whether you can apply the Kotter framework to a specific operational situation, not just recite the steps. The specific intervention — one-on-one with the plant manager, operator involvement in tuning — is what distinguishes a practitioner from a theorist.'
    },
    {
      id: 'bd3-07',
      type: 'mcq',
      question: 'You are constructing the business case for a 3-year AI transformation program at a 250,000 bbl/day refinery with a GRM of $11/bbl and current utilization of 83%. The CFO asks: "What is the credible financial range for this program, and what are the three biggest value levers?" Which answer demonstrates the strongest financial framing?',
      options: [
        'The program can deliver $10-15M/year in value. The main lever is cost reduction through lower maintenance spend.',
        'The program can deliver $40-80M/year at full deployment across three levers: (1) utilization improvement — recovering 3-5% utilization through predictive maintenance and reliability (3,750-6,250 bbl/day × $11 GRM × 365 = $15-25M/year); (2) process optimization — 0.3-0.5% yield and energy improvement ($7-15M/year at this throughput); (3) quality loss reduction — reducing off-spec and downgrade events ($5-10M/year). The program investment of $8-12M over 3 years targets 5-8x ROI.',
        'The program will pay back in 6 months through immediate energy savings once the optimization models are deployed',
        'The financial return cannot be estimated until the data quality assessment is complete — the CFO should not expect financial commitments until Sprint 0 is finished'
      ],
      correctIndex: 1,
      explanation: 'The correct answer builds the financial case from first principles using the refinery\'s own metrics. At 250,000 bbl/day with 83% utilization, the refinery is running at 207,500 bbl/day against 250,000 bbl/day capacity. Recovering 3-5% utilization (recovering planned and unplanned downtime through predictive maintenance) means 7,500-12,500 bbl/day additional throughput at $11 GRM — $30-50M/year annual value from utilization alone if fully achieved, with a realistic 50% capture rate yielding $15-25M. Process optimization value at 0.3-0.5% improvement is well-documented in industry. This type of grounded financial framing — built from the refinery\'s own GRM and throughput — is far more credible to a CFO than a generic ROI claim. The 5-8x ROI benchmark over 3 years is achievable and defensible.',
      interviewNote: 'The ability to build a financial case from a refinery\'s own operating metrics — GRM, throughput, utilization — in real time during an interview is a high-value differentiator. Practice this calculation pattern until it is instinctive.'
    },
    {
      id: 'bd3-08',
      type: 'scenario',
      question: 'You have been asked to prioritize 8 AI use cases for a refinery using a value vs. feasibility 2x2. Use case A: real-time crude blend optimization (very high value — $15-20M/year — but requires crude assay integration, LP model coupling, and significant operator change management; low feasibility). Use case B: rotating equipment predictive maintenance for 60 critical pumps and compressors (high value — $8-12M/year — historian data exists, CMMS has failure labels, technology proven; high feasibility). Which use case should you recommend first, and how do you handle use case A?',
      options: [
        'Recommend use case A first — the financial return is larger and the board will support the investment needed to overcome feasibility challenges',
        'Recommend use case B as the first production deployment — it sits in the high-value/high-feasibility quadrant and delivers demonstrable results that build organizational confidence and fund future work. Use case A should be placed on the 18-24 month roadmap after use case B validates the data infrastructure, establishes operator trust, and generates the organizational credibility needed to tackle a more complex initiative',
        'Recommend doing both in parallel — splitting the team to attack the highest-value and highest-feasibility use cases simultaneously maximizes portfolio returns',
        'Defer both — neither use case can proceed until the full data quality audit from Sprint 0 is complete across all 8 candidate use cases'
      ],
      correctIndex: 1,
      explanation: 'This is a direct application of the value vs. feasibility 2x2 prioritization framework. Use case B (predictive maintenance) is in the high-value/high-feasibility quadrant — the right first deployment. Use case A (crude blend optimization) is in the high-value/low-feasibility quadrant — a long-term target requiring foundational work before it can succeed. The sequencing logic is not just about individual project risk: successful delivery of use case B builds the data infrastructure (historian API, CMMS integration), organizational credibility (operators trust AI alerts), and business case ammunition ($8-12M demonstrated return) that are prerequisites for tackling the more complex use case A. Attempting use case A first without this foundation typically results in a high-profile failure that sets back the entire program. Parallel execution splits scarce resources and risks failing both.',
      interviewNote: null
    },

    // === TECHNOLOGY ARCHITECTURE (4 questions) ===
    {
      id: 'bd3-09',
      type: 'scenario',
      question: 'A vendor insists that your AI program requires both: (a) deploying their platform on a cloud environment outside your plant firewall, and (b) direct connectivity to your DCS for real-time setpoint optimization. Your OT team, cybersecurity officer, and IT architect have all objected. The vendor says their architecture has been deployed at "12 refineries globally" and is fully compliant. Formulate the complete set of cybersecurity AND architecture objections.',
      options: [
        'The only legitimate objection is the DCS write-back — cloud hosting with read-only data access is acceptable if TLS encryption is used',
        'The cybersecurity objections are: (1) cloud hosting exposes live OT data to an external network, violating DMZ and IEC 62443 zone isolation; (2) any breach of the vendor cloud platform creates a pathway to OT data and, through DCS connectivity, to process controls. The architecture objections are: (3) direct DCS connectivity creates a remote code execution pathway — a compromised or malfunctioning cloud system could send arbitrary commands to the DCS; (4) inference running in the cloud creates an unacceptable single point of failure — any connectivity outage stops predictions; (5) the architecture bypasses the edge inference layer where IEC 62443-compliant systems deploy inference servers. Reference deployments at "12 refineries" do not validate security compliance — they may reflect poor security posture at those sites.',
        'The vendor is correct — 12 reference refineries constitute sufficient evidence that the architecture is safe and the internal teams\' objections should be overridden',
        'Accept the architecture but require the vendor to purchase cyber insurance and provide indemnification for any incidents caused by their platform'
      ],
      correctIndex: 1,
      explanation: 'This cross-module question requires applying both cybersecurity (Module 8) and architecture (Module 10) knowledge simultaneously. From cybersecurity: cloud hosting of live OT data violates DMZ isolation (IEC 62443 zones and conduits), SOC 2 or other IT certifications do not address OT architecture, and any cloud platform compromise creates an attack vector toward OT. From architecture: inference should run at edge servers at Level 3 (not cloud) for OT isolation and resilience, direct DCS write-back from an external system is an unacceptable remote code execution risk, and the correct architecture is historian read-only → DMZ → edge inference → human operator → DCS manual entry. Reference deployments cannot substitute for architectural compliance review — they may simply reflect that 12 other sites made the same mistake.',
      interviewNote: 'This is the signature cross-module question. The ability to enumerate five distinct objections spanning two knowledge domains — without conflating them — demonstrates the integrated thinking that a senior transformation leader must demonstrate.'
    },
    {
      id: 'bd3-10',
      type: 'mcq',
      question: 'You are designing the data integration architecture for a refinery AI program. The refinery uses AVEVA PI as historian, Maximo as CMMS, and SAP as ERP. Which statement correctly describes the integration priority and the master data challenge?',
      options: [
        'ERP (SAP) integration should be the first priority because financial data is needed to calculate AI ROI in real time',
        'All three systems should be integrated simultaneously in a single data integration sprint to avoid sequential delays',
        'The historian (AVEVA PI) is the highest priority first integration — it provides the continuous sensor data backbone for every AI model. CMMS (Maximo) is the second priority — it provides failure labels for supervised ML. ERP integration is lower priority for model development. The master data challenge is equipment naming consistency: the same pump may be "P-1203" in PI, "Pump 1203A" in Maximo, and "Unit P1203" in SAP. A master data mapping table must be built to reconcile these identifiers before any multi-source model training can begin.',
        'CMMS (Maximo) is the highest priority because failure labels are the scarcest asset in supervised ML for predictive maintenance'
      ],
      correctIndex: 2,
      explanation: 'PI first, then CMMS is the correct integration sequence for predictive maintenance AI. PI is the data backbone: every feature in every model comes from historian tags. CMMS failure labels are essential for supervised ML but only matter once the PI feature pipeline is running. The master data challenge — inconsistent equipment naming across PI, Maximo, and SAP — is a practical prerequisite for any multi-source model and must be addressed in Sprint 0. Without a master data mapping, you cannot reliably join historian sensor data with CMMS failure events to create training datasets. This work is invisible to executives but is consistently the longest single preparation task in industrial AI programs. ERP integration (for cost data) is valuable for ROI tracking but not required for model development.',
      interviewNote: null
    },
    {
      id: 'bd3-11',
      type: 'mcq',
      question: 'A refinery is choosing between AspenTech (with Aspen Mtell for predictive maintenance and Aspen DMC3 for APC) and a build-your-own approach using open-source MLflow, Python, and custom PI API integrations. The refinery already uses Aspen HYSYS for process simulation. Which factors most strongly favor AspenTech in this decision?',
      options: [
        'AspenTech is always the right choice for refineries because their models are pre-trained on industry data and require no site-specific training',
        'The existing HYSYS relationship creates integration advantages, but AspenTech is still inferior to open-source for all AI use cases',
        'Factors favoring AspenTech: existing HYSYS relationship (familiar vendor, existing procurement contracts, likely favorable pricing); Mtell\'s proven integration with AVEVA PI (reducing data pipeline work); pre-built equipment agent library that may accelerate deployment; AspenTech process engineering team relationships that ease operator adoption. Factors favoring build: lower long-term cost, greater model flexibility, avoidance of vendor lock-in, ability to integrate models with non-AspenTech systems. The correct decision depends on whether the refinery has internal data engineering capability and whether long-term proprietary model ownership is a strategic priority.',
        'Open-source is always preferred because vendor platforms create lock-in that undermines long-term AI program independence'
      ],
      correctIndex: 2,
      explanation: 'This is a nuanced build vs. buy decision that requires balancing specific factors, not applying a universal rule. AspenTech\'s strengths in this context are real: the existing HYSYS relationship reduces procurement friction, Mtell\'s PI integration is mature and well-tested, and process engineers who already use Aspen tools are more likely to adopt Mtell alerts. However, these advantages must be weighed against: AspenTech\'s license costs (which can be 5-10x more expensive than open-source over a 5-year horizon), the constraint of working within AspenTech\'s model framework, and the risk that proprietary model formats create dependency that is difficult to exit. The "buy platform, build team" principle suggests a middle path: use AspenTech\'s infrastructure but invest in internal capability to understand, validate, and extend the models.',
      interviewNote: null
    },
    {
      id: 'bd3-12',
      type: 'scenario',
      question: 'Your refinery\'s AI team is designing the inference architecture for a new real-time flare prediction model. The model must generate predictions every 60 seconds from 340 live historian tags and alert operators when flaring risk exceeds a threshold. Two architectures are proposed: (X) edge inference server at Level 3 reading from PI via PI Web API locally, running the model in a containerized Python service; (Y) the model runs on the corporate IT network, pulling data from a replicated PI shadow database that syncs every 5 minutes. Evaluate both architectures.',
      options: [
        'Architecture Y is preferred because the corporate IT network has higher availability and better SLA guarantees than plant-floor edge servers',
        'Architecture X is preferred: it reads live data at 60-second intervals directly from the source PI system with no sync lag, runs within the OT zone maintaining security boundaries, and is resilient to corporate network outages. Architecture Y has two critical flaws: (1) the 5-minute sync lag means the model is making predictions on data that is up to 5 minutes old — for a flare prediction model this is operationally unacceptable; (2) running on the corporate network creates a dependency on IT network availability and takes inference outside the OT zone, requiring live OT data to cross the DMZ boundary continuously.',
        'Both architectures are equivalent — the 5-minute sync lag is acceptable because flaring events develop over longer time periods',
        'Architecture Y is preferred because running AI on the corporate network allows the data science team to access and debug the model more easily without OT access restrictions'
      ],
      correctIndex: 1,
      explanation: 'Architecture X is clearly superior for this use case. The 60-second prediction interval combined with a 5-minute sync lag in Architecture Y means predictions are based on data that is up to 5 minutes stale — which makes the flare prediction model operationally unreliable for early warning. Flare events can escalate within minutes, so a model operating on 5-minute-old data may alert operators after the event has already started. Additionally, Architecture Y moves inference outside the OT zone, requiring continuous live OT data flow across the DMZ — which increases the attack surface continuously rather than limiting it to scheduled batch transfers. The developer convenience argument (Architecture Y is easier to access) is not a valid architectural justification when it compromises both latency and security.',
      interviewNote: 'This scenario applies the edge inference principle to a specific operational requirement — 60-second predictions — and shows why the sync lag in a corporate-network architecture is operationally disqualifying, not just theoretically suboptimal.'
    },

    // === AGILE / MLOps (3 questions) ===
    {
      id: 'bd3-13',
      type: 'scenario',
      question: 'After 8 weeks of shadow mode, your quality prediction model for the FCC unit has 78% accuracy on live data against a target of 85%. The model has generated 240 shadow predictions; the process engineers have reviewed 60 of them and found 47 aligned with their professional judgment. Your data science lead says: "We need to either deploy at 78% and accept the lower performance, or go back to waterfall — gather all remaining data gaps, fully retrain, and return to shadow mode in 4 months." What is the correct response?',
      options: [
        'Deploy the model now at 78% — the business cannot wait 4 months and operators can compensate for the lower accuracy with their own judgment',
        'Abandon shadow mode and return to waterfall: systematically gather all data gaps, retrain the full model, and re-enter shadow mode in 4 months',
        'Continue shadow mode while iteratively improving the model: analyze the 13 misaligned predictions from the process engineer review to identify systematic error patterns, address the highest-impact data gaps or feature engineering improvements in 2-week sprints, and re-evaluate performance every 2 weeks against the 85% target. This agile approach avoids the 4-month delay of waterfall while generating real-world validation data that informs specific model improvements.',
        'Adjust the target from 85% to 78% — the target was set before seeing real data and should be revised to match achievable performance'
      ],
      correctIndex: 2,
      explanation: 'This scenario tests the core principle that agile and shadow mode are complementary, not competing, approaches. The correct response is to continue shadow mode while iterating on the model — not to choose between premature deployment and a 4-month waterfall restart. The 13 misaligned predictions are the most valuable data in the program: they represent specific failure modes that, if analyzed, will reveal exactly which data gaps or feature deficiencies are driving the 7% performance gap. A focused sprint addressing those specific gaps is faster and more targeted than a complete retrain from scratch. Deploying at 78% creates operator distrust that is difficult to recover from. Abandoning shadow mode abandons the real-world validation infrastructure already built. Lowering the target capitulates to underperformance without fixing the root cause.',
      interviewNote: 'This scenario is the acid test for integrated Agile + MLOps thinking. The ability to prescribe "continue shadow while iterating" — and explain the analytical basis for it (analyze the 13 misaligned predictions) — demonstrates you understand agile as a learning system, not just a scheduling framework.'
    },
    {
      id: 'bd3-14',
      type: 'mcq',
      question: 'An industrial AI program has 8 models in production across 3 process units. The MLOps team has detected drift in 3 models simultaneously — all deployed on the same crude distillation unit (CDU) — over the past 6 weeks. The drift appeared immediately after a planned crude slate change from Arab Heavy to Basrah Light. What is the root cause and the correct MLOps response?',
      options: [
        'The drift is a random statistical fluctuation — retrain all 8 models as a precaution and monitor for 4 more weeks',
        'The drift is caused by a data pipeline failure — the historian tags for the CDU are no longer being correctly processed. Audit the data pipeline before any model retraining.',
        'The drift is caused by the crude slate change — the models were trained on Arab Heavy operating data, and the Basrah Light crude has different characteristics (lower density, different distillation curve) that shift the input-output relationships the models learned. The correct response is to collect 6-8 weeks of operating data under the new crude slate, retrain the 3 drifted CDU models on this data, and validate performance before restoring production status. Also update the model monitoring policy to trigger drift detection whenever a crude slate change exceeds a defined threshold.',
        'The drift is caused by the planned shutdown maintenance that typically accompanies a crude slate change — equipment condition changes after maintenance affect model accuracy. Retrain using post-maintenance data only.'
      ],
      correctIndex: 2,
      explanation: 'This is a model drift root cause analysis question. The simultaneous drift of 3 CDU models immediately following a crude slate change is a clear causal signal — the crude slate change is the root cause, not a coincidence. Arab Heavy and Basrah Light have substantially different physical properties (density, API gravity, distillation curve, sulfur content), which shifts the statistical relationships between operating variables that the models learned. This is a known, predictable failure mode for industrial ML models when operating conditions change. The correct MLOps response is not to retrain immediately on limited data, but to collect sufficient data under the new operating regime (6-8 weeks) before retraining. The process improvement is to establish a crude slate change as a documented "model drift trigger" — a known operational event that should automatically initiate monitoring review.',
      interviewNote: null
    },
    {
      id: 'bd3-15',
      type: 'scenario',
      question: 'You are 12 months into an AI transformation program. The program has 4 models in production, 3 in shadow mode, and 2 in development. A new CISO has joined the organization and conducted a security review. She identifies that the AI inference servers at Level 3 are running software with 14-month-old libraries, the PI Web API credentials used by the AI platform have not rotated in 18 months, and there is no audit log of which users have accessed model outputs. She recommends pausing all AI operations until a full security remediation is complete. How do you respond?',
      options: [
        'Support the full pause — the CISO is responsible for security and her recommendation must be followed without question',
        'Reject the pause recommendation — the AI program generates too much business value to stop for security administration',
        'Partner with the CISO to implement a risk-tiered response: (1) prioritize remediation by risk level — credential rotation (highest risk, can be done in days without pausing operations) and audit logging (can be implemented in parallel with operations); (2) schedule library updates during the next planned maintenance window with proper testing; (3) establish a security governance process for AI systems going forward (quarterly library reviews, 90-day credential rotation policy, access audit trails). A full operational pause for 14-month-old libraries is disproportionate if active monitoring shows no indicators of compromise — but the CISO\'s concerns are legitimate and the remediation roadmap she identified must be delivered.',
        'Escalate to the CEO to override the CISO — the AI program has executive sponsorship and security concerns should not be allowed to stop business-critical operations'
      ],
      correctIndex: 2,
      explanation: 'This scenario tests whether you can navigate a legitimate security concern without unnecessarily stopping a program that is generating business value. The CISO\'s findings are real problems: 14-month-old libraries may have known vulnerabilities, stale credentials are a security risk, and absence of audit logs is a governance gap. But the correct response is a risk-tiered remediation, not a full pause. Credential rotation and audit logging can be implemented in days without halting operations. Library updates require a maintenance window but can be scheduled, not executed as emergency downtime. The correct outcome is: CISO gets a credible remediation roadmap with committed dates, AI operations continue under enhanced monitoring during remediation, and the program establishes the security governance processes that should have been in place from the start. Escalating to override the CISO (option D) destroys the organizational relationship needed to run the program safely long-term.',
      interviewNote: 'The ability to find the risk-tiered middle path — validating the CISO\'s concerns, committing to remediation, and preserving operations — is a hallmark of mature transformation leadership. It requires technical knowledge of what can be done in parallel vs. what requires downtime, and the relationship skills to turn a security confrontation into a collaborative partnership.'
    }
  ]
};
