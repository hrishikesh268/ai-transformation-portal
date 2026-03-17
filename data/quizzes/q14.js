window.QUIZ_Q14 = {
  id: 'q14',
  moduleId: 'm14',
  title: 'Interview Scenarios — Knowledge Check',
  questions: [
    {
      id: 'q14-01',
      type: 'scenario',
      question: 'You have just been appointed AI Transformation Leader at a 180,000 bbl/day refinery. In your first week, a senior data scientist on your team proposes deploying a predictive maintenance model he built from publicly available refinery datasets within 30 days. The COO is enthusiastic and wants quick wins. What is the correct first action?',
      options: [
        'Approve the fast-track deployment — the COO\'s support is precious and a quick win in Week 4 will fund the entire program',
        'Listen and assess first: spend the first 30 days understanding the plant\'s specific data landscape, operator culture, and existing systems before any deployment decisions; a model trained on generic data without site-specific validation is high-risk at a real facility',
        'Reject the proposal outright — models not trained on this specific plant\'s data should never be deployed, regardless of timeline',
        'Approve the deployment but insist it runs in shadow mode only, so there is no operational risk from the untested model'
      ],
      correctIndex: 1,
      explanation: 'The correct first action in any transformation leadership role is to listen and assess before prescribing. A model trained on generic external data may have fundamentally different process characteristics, failure modes, and sensor configurations than this specific plant. Deploying it to impress the COO without site-specific validation is a classic failure: one wrong alert or missed failure will destroy operator trust for months. The first 30 days should be spent in assessment mode — understanding the plant, its data, its people, and its pain points. Quick wins should come from this assessment, not from pre-packaged solutions.',
      interviewNote: 'The panel is testing whether you succumb to pressure to deploy before understanding. "Listen and assess first" is the mark of a mature transformation leader. Explicitly say: "My first 30 days are about understanding this specific plant — I will not propose solutions before I have diagnosed the problem."'
    },
    {
      id: 'q14-02',
      type: 'scenario',
      question: 'At a stakeholder kickoff meeting, the Head of Maintenance says: "We tried AI two years ago for compressor vibration monitoring. The vendor\'s model generated 40 false alarms per week. My technicians stopped looking at it after 3 weeks. It cost us $800K and delivered nothing. Why should I support this?" What is your FIRST move?',
      options: [
        'Explain that AI technology has improved dramatically in the last two years and the algorithms are now far more accurate',
        'Acknowledge the failure and immediately propose a contractual structure where you only get paid if the model delivers results, to demonstrate confidence',
        'Listen carefully and ask diagnostic questions: what use case exactly, how was the model tuned for alert sensitivity, were the maintenance technicians involved in the design, and what happened to model monitoring after the vendor left',
        'Propose starting with a completely different use case — not compressor monitoring — to avoid repeating the same technology in the same domain'
      ],
      correctIndex: 2,
      explanation: 'Listen and diagnose before prescribing — always. The Maintenance Head\'s experience contains critical information: 40 false alarms per week is an alert fatigue problem (the model sensitivity was never tuned for operational reality), technicians stopped using it (adoption was not built into the process), and the capability collapsed when the vendor left (no internal ownership). Each of these is a specific, solvable failure mode. But you can only propose targeted solutions if you first understand the specific failures. Option A dismisses his experience with technology hype. Option B is a commercial response to an operational concern. Option D avoids the problem rather than solving it.',
      interviewNote: 'This question will appear in your interview in some form. The winning answer always starts with listening. Say explicitly: "Before I tell you what we would do differently, I want to understand what happened in detail — because the right solution depends on the specific failure modes."'
    },
    {
      id: 'q14-03',
      type: 'scenario',
      question: 'A panel member asks: "You have no direct experience with APC or RTO systems. These are central to our refinery\'s optimization. How can you lead an AI transformation program that builds on top of them?" How do you respond?',
      options: [
        'Claim that APC and RTO experience is not necessary for this role, since the AI program focuses on machine learning rather than control systems',
        'Be honest about the gap, demonstrate that you have studied APC/RTO specifically in preparation for this role, explain that your role is to lead and translate — not to replace control engineers — and describe how you will structure the team to pair BCG AI capabilities with client APC domain expertise',
        'Redirect the question to your broader industrial AI credentials and project leadership experience at other companies',
        'Propose hiring an APC expert to your team as a condition of taking the role, to fill the gap'
      ],
      correctIndex: 1,
      explanation: 'Honesty plus preparation plus a clear partnership model is the only credible answer. Panelists asking this question are testing three things: self-awareness (do you know your gaps?), preparation (have you tried to close them?), and operating model (do you have a realistic plan for how you will function without this expertise?). Claiming APC is irrelevant (option A) is factually wrong and will be immediately challenged by any process engineer on the panel. Redirecting (option C) is evasive. Conditional hiring (option D) is not your decision to propose unilaterally. The winning answer combines intellectual honesty with evidence of seriousness and a realistic collaborative model.',
      interviewNote: 'Prepare a specific answer to the APC/RTO knowledge gap question. Include: (1) "I have studied APC and RTO specifically — I understand they are closed-loop control layers that AI builds on top of, not replaces"; (2) "My role is strategic and organizational leadership, not control system engineering"; (3) "I will partner closely with your process control team for every technical decision in this domain."'
    },
    {
      id: 'q14-04',
      type: 'scenario',
      question: 'During your first month, a process engineer raises a serious concern: "What happens if the AI system recommends an unsafe setpoint change that the operator follows? Who is liable? Our Safety Instrumented System is separate, but the AI could cause a near-miss before the SIS trips." How do you respond?',
      options: [
        'Reassure him that the AI models have been extensively tested and will not recommend unsafe setpoints',
        'Propose that all AI recommendations are vetted by a process engineer before being displayed to operators, adding a human review step',
        'Validate the concern as critical: confirm the AI will operate in advisory mode with hard constraint limits, clarify that the Safety Instrumented System remains fully independent of AI, commit to a formal incident response protocol for any AI-related near-miss, and agree that operator acceptance of an AI recommendation does not transfer safety accountability from the designated process owner',
        'Explain that the AI system will be configured to never recommend setpoints outside historical operating ranges, which eliminates the safety risk entirely'
      ],
      correctIndex: 2,
      explanation: 'This is a safety engineering question and must be treated with full seriousness. The correct answer has four components: (1) Advisory mode with hard constraint limits — the AI can only recommend within pre-approved safe operating envelopes; (2) SIS independence — the Safety Instrumented System operates on its own logic, is not connected to the AI system, and will trip the process regardless of what the AI recommends; (3) Incident response protocol — a formal process for investigating and reporting any AI-related near-miss; and (4) Liability clarity — operator acceptance of an AI recommendation does not transfer safety accountability. Saying "it has been tested and won't fail" (option A) is an unacceptable response to a legitimate safety concern.',
      interviewNote: 'Safety questions must be answered with full rigor — never brush them off. The four elements of this answer (advisory mode, SIS independence, incident response, liability clarity) should be in your mental model for any safety-related AI question. Panelists from operations and HSE backgrounds will probe deeply here.'
    },
    {
      id: 'q14-05',
      type: 'scenario',
      question: 'You have been given a list of 14 potential AI use cases generated by various plant departments. You have capacity to execute 3 use cases in Year 1. How do you decide which 3 to prioritize?',
      options: [
        'Select the 3 use cases with the highest estimated financial value, regardless of implementation complexity',
        'Select the 3 use cases that the COO has personally expressed interest in, to maintain executive sponsorship',
        'Apply a value versus feasibility matrix: score each use case on potential business value AND on data readiness, technical feasibility, and organizational readiness; select 3 that are high on both dimensions, validate this shortlist directly with plant department heads before finalizing',
        'Select the 3 use cases with the highest data readiness, because execution speed is the most important factor in Year 1'
      ],
      correctIndex: 2,
      explanation: 'The value vs. feasibility matrix is the standard framework for AI use case prioritization. Value alone (option A) leads you to select high-potential but technically undeliverable projects — you will fail publicly on your first attempt. Feasibility alone (option D) produces quick wins with marginal impact — you will succeed technically but disappoint financially. Executive preference (option B) creates political dependency and ignores technical reality. The matrix approach balances both dimensions, and the critical step of validating with plant department heads ensures you are not working from wrong assumptions about data availability or stakeholder appetite.',
      interviewNote: '"Value versus feasibility matrix" is the answer to use case prioritization questions. Always pair it with a validation step: "I would score these 14 use cases, propose a shortlist of 5, then validate data readiness and business owner commitment for each before committing to the final 3."'
    },
    {
      id: 'q14-06',
      type: 'scenario',
      question: 'An executive says: "We already have a major digitalization program running — we are upgrading our DCS and migrating to a new ERP. Do we really need an AI transformation on top of that? Isn\'t this all the same thing?" How do you explain the distinction?',
      options: [
        'Agree that the digitalization program may be sufficient — if the DCS and ERP are modern, AI capabilities may already be included in those platforms',
        'Digitalization and AI transformation are the same thing at a strategic level — the difference is mainly in the specific technologies used',
        'Digitalization builds the infrastructure (connected systems, clean data, modern platforms) — AI transformation is the value creation layer on top of that infrastructure. Digitalization is necessary but not sufficient: you can have perfect data pipelines and still capture zero AI value if no models are deployed and adopted. The two programs should be sequenced and integrated, not treated as alternatives.',
        'AI transformation should replace the digitalization program since AI delivers more value per dollar invested in most industrial contexts'
      ],
      correctIndex: 2,
      explanation: 'Digitalization (DCS upgrade, ERP migration, data historian modernization) creates the foundation — standardized data, connected systems, accessible infrastructure. AI transformation is what you build on that foundation to create business value: predictive maintenance models, soft sensors, optimization algorithms, and operator-facing tools. Many companies complete digitalization programs and then discover they have no AI value because no one built the models and drove adoption. The correct framing is: these are sequential and complementary, not competing or identical. Integrating the programs (so the digitalization project designs for AI data needs) is the smart approach.',
      interviewNote: 'This distinction — infrastructure versus value on top of infrastructure — is one of the most important conceptual frames for this role. Practice the one-sentence version: "Digitalization builds the highway; AI transformation is the commerce that runs on it."'
    },
    {
      id: 'q14-07',
      type: 'scenario',
      question: 'It is Month 8 of your AI transformation program. A predictive maintenance model recommended a compressor was operating normally. 6 hours later, the compressor failed unexpectedly, causing 18 hours of unplanned downtime and $2.3M in losses. The plant head is furious. What do you do?',
      options: [
        'Immediately suspend all AI systems across the plant until the root cause is determined, to protect the organization from further AI-related incidents',
        'Issue a statement that the model was operating within its stated confidence intervals and that AI predictions are probabilistic, not guarantees',
        'Be fully transparent with the plant head: acknowledge the failure, launch an immediate root cause investigation (was this a failure mode the model was not trained on? a data quality issue? a sensor that failed before the compressor?), contain the operational impact, and commit to a written findings report within 5 business days with corrective actions',
        'Quietly investigate the root cause internally and only disclose findings to leadership once you have a complete explanation and solution ready'
      ],
      correctIndex: 2,
      explanation: 'Transparency, containment, and rapid investigation is the only right response to an AI-related failure that caused significant operational harm. Suspending all AI systems (option A) is a disproportionate overreaction that destroys momentum. Citing confidence intervals (option B) to a furious plant head whose refinery just lost $2.3M is tone-deaf and will permanently damage trust. Quiet internal investigation (option D) is dishonest and will be viewed as a cover-up when discovered. The transparent approach — acknowledge, investigate, contain, report within a defined timeframe — demonstrates the leadership maturity that difficult situations require. Most AI missed-predictions are recoverable if handled with integrity.',
      interviewNote: 'How you handle failure is as important as how you handle success. Panelists from operations backgrounds will ask about failure scenarios specifically to see if you have the integrity and maturity to handle them. "Transparent, contain, investigate, report" is the framework. Never defensive, never evasive.'
    },
    {
      id: 'q14-08',
      type: 'mcq',
      question: 'What is the MOST common reason industrial AI projects at refineries fail to scale beyond the pilot stage?',
      options: [
        'The AI algorithms used are not sufficiently accurate for industrial applications',
        'Industrial data is too sparse and low-quality for machine learning models to function reliably',
        'Projects get stuck in the "POC trap" — multiple pilots are completed but none transitions to production because operator buy-in was not built, model maintenance ownership was not established, and integration with operational workflows was not designed from the start',
        'Regulatory approval processes for AI systems in safety-critical industries take too long and block deployment'
      ],
      correctIndex: 2,
      explanation: 'The POC trap is the most documented failure pattern in industrial AI: organizations run 5, 10, or 15 pilots — often with impressive technical results — but none reaches production because the non-technical requirements were never addressed. The three root causes are: (1) operator buy-in was treated as an afterthought rather than built from Day 1; (2) no one owns the model after the external team leaves (who retrains it when data drift occurs?); and (3) the integration between the model output and the operator\'s actual workflow was never designed. Algorithm accuracy (option A) is rarely the limiting factor. Data quality (option B) is a challenge but is manageable. Regulatory approval (option D) is not a primary barrier in most jurisdictions.',
      interviewNote: 'Name the POC trap explicitly in your interview. "The biggest risk I need to manage is the POC trap — deploying multiple pilots that all die in production because operator adoption and model maintenance were not built in from Day 1." This framing demonstrates you have learned from industry experience.'
    },
    {
      id: 'q14-09',
      type: 'scenario',
      question: 'A plant that uses AspenTech\'s APC suite (DMC3) as its primary advanced process control platform asks you to recommend a predictive maintenance vendor. They have AVEVA PI for their historian and Maximo for CMMS. Which vendor recommendation is most defensible?',
      options: [
        'Microsoft Azure ML — because cloud-native AI platforms are the most scalable and vendor-agnostic option',
        'Uptake or SparkCognition — pure-play industrial AI vendors with strong predictive maintenance track records',
        'AspenTech Mtell — because it is native to the AspenTech ecosystem already in use at this plant, offers pre-built PI and Maximo connectors, and reduces integration complexity and total cost of ownership for an existing AspenTech customer',
        'C3.ai — because it is purpose-built for enterprise AI in industrial settings and has broad oil and gas references'
      ],
      correctIndex: 2,
      explanation: 'When a refinery is already running AspenTech APC (DMC3), recommending AspenTech Mtell for predictive maintenance is strategically sound for three reasons: (1) existing vendor relationship reduces procurement friction and negotiation leverage is already established; (2) Mtell has native connectors to AVEVA PI and major CMMS platforms including Maximo, reducing integration engineering effort by 40-60%; and (3) AspenTech\'s unified platform allows the maintenance team to see AI recommendations alongside APC operational data in a familiar interface. This reduces the "new system" adoption barrier. Cloud-native platforms (option A) face OT security objections. Pure-play vendors (options B and D) require full greenfield integration work in an ecosystem that already has a relevant incumbent.',
      interviewNote: 'Vendor recommendations should always reference the client\'s existing ecosystem. An AspenTech shop should hear AspenTech Mtell or related tools. An AVEVA shop may lean toward AVEVA Predictive Analytics. Generic cloud-first recommendations signal you are not thinking about integration realities.'
    },
    {
      id: 'q14-10',
      type: 'mcq',
      question: 'In industrial AI deployment, "shadow mode" means:',
      options: [
        'The AI model runs hidden from operators and only alerts management — used for politically sensitive deployments',
        'The AI model generates predictions in parallel with actual operations, the predictions are recorded and compared to outcomes, but operators are not expected to act on them — building a real-world performance track record before the model influences any decisions',
        'The AI model runs only during night shifts when senior engineers are not present, to minimize resistance to the technology',
        'The AI model operates as a backup system that only activates when the primary control system fails'
      ],
      correctIndex: 1,
      explanation: 'Shadow mode is the standard first deployment stage for industrial AI: the model runs in parallel with real operations, generating predictions that are logged and validated against actual outcomes, but operators are explicitly told they are not expected to take action based on these outputs. The purpose is to build a verified track record under real plant conditions — demonstrating whether the model\'s predictions match what actually happens — before asking anyone to rely on its recommendations. This phase typically runs 4-12 weeks. Only after shadow mode demonstrates reliable performance does the model transition to advisory mode (recommendations displayed to operators, who decide whether to act).',
      interviewNote: 'Shadow mode is a concept that every operational leader on your panel will want you to understand. It is the trust-building bridge between "technically validated in the lab" and "operationally trusted in the control room." Always mention shadow mode when discussing AI deployment sequencing.'
    }
  ]
};
