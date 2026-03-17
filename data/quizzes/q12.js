window.QUIZ_Q12 = {
  id: 'q12',
  moduleId: 'm12',
  title: 'Leading AI Transformation — Knowledge Check',
  questions: [
    {
      id: 'q12-01',
      type: 'scenario',
      question: 'You have just been appointed AI Transformation Leader at a 200,000 bbl/day refinery. It is Day 1. What is the correct sequence for your first 90 days?',
      options: [
        'Deploy the first predictive maintenance model in Week 2 to demonstrate immediate value and win stakeholder support quickly',
        'Days 1-30: listen, assess data readiness, map stakeholders, identify quick wins; Days 31-60: design the roadmap and governance model; Days 61-90: launch first pilot with operator involvement',
        'Days 1-30: build the AI team by hiring data engineers and data scientists; Days 31-60: procure the technology platform; Days 61-90: begin data integration',
        'Days 1-30: present the transformation vision to all employees; Days 31-90: run a detailed RFP for AI platform vendors'
      ],
      correctIndex: 1,
      explanation: 'The correct first-90-days sequence always starts with listening and assessment — you cannot design a credible roadmap without understanding the plant\'s data landscape, cultural readiness, and existing pain points. Deploying models before this assessment is a classic failure mode: you solve the wrong problem. Hiring and procurement (option C) happens during governance design, not before. The sequence is: diagnose first, design second, execute third.',
      interviewNote: 'Interviewers will probe whether you rush to deploy AI or start by understanding the organization. "Listen before you prescribe" is the answer they are looking for — it demonstrates leadership maturity over technical eagerness.'
    },
    {
      id: 'q12-02',
      type: 'mcq',
      question: 'What is the "hybrid organization model" for industrial AI transformation, and why is it preferred over a fully centralized or fully decentralized approach?',
      options: [
        'A model where BCG consultants and client staff work in the same office — preferred because co-location improves communication',
        'A central AI CoE that owns standards, infrastructure, and reusable tools, combined with embedded AI product teams within each business unit — preferred because it balances consistency with domain proximity',
        'A model where AI projects alternate between central IT and plant operations teams depending on budget — preferred for cost efficiency',
        'A fully outsourced AI delivery model where a vendor runs all AI development while the client focuses on business requirements'
      ],
      correctIndex: 1,
      explanation: 'The hybrid model pairs a central AI Center of Excellence (which handles platform, governance, talent, and reusable components) with embedded AI product teams within each plant or business unit (who understand the operational context and drive adoption). Pure centralization creates bottlenecks and loses operational relevance. Pure decentralization produces silos, inconsistent standards, and wasted effort rebuilding similar components. The hybrid model delivers both scale and domain depth.',
      interviewNote: 'If asked about organizational design for AI, the hybrid CoE-plus-embedded-team model is the answer BCG consistently recommends. Know the rationale: central for standards and infrastructure, local for domain knowledge and adoption.'
    },
    {
      id: 'q12-03',
      type: 'mcq',
      question: 'For a greenfield industrial AI program at a major refinery, which is the MOST critical first hire and why?',
      options: [
        'Chief Data Scientist — because building models is the core value-creating activity and requires the most senior technical leader',
        'Data Engineer — because without clean, accessible, integrated data pipelines, no AI model can be trained or deployed at scale',
        'Change Management Lead — because operator adoption is the biggest risk and should be addressed before any technical work begins',
        'AI Product Manager — because use case prioritization and stakeholder alignment must come before any data or model work'
      ],
      correctIndex: 1,
      explanation: 'The data engineer is the most critical first hire in industrial AI because 60-70% of all project time is spent on data: extracting from PI, CMMS, LIMS, and ERP; cleaning sensor anomalies; building integration pipelines; resolving master data conflicts. Without this infrastructure, data scientists have nothing to model. Hiring data scientists first without data engineers is a common and expensive mistake — models cannot be built on data that does not exist in usable form.',
      interviewNote: 'When asked "what is your first hire?", answer confidently: data engineer. Explain that you cannot do AI without data infrastructure and that this is the most common gap in refinery organizations starting their AI journey.'
    },
    {
      id: 'q12-04',
      type: 'mcq',
      question: 'What is the primary purpose of an AI Steering Committee in a refinery transformation program?',
      options: [
        'To review and approve machine learning model architectures and hyperparameter choices before deployment',
        'To provide executive-level governance: approve use case priorities, resolve IT/OT organizational conflicts, ensure budget alignment, and hold the transformation accountable to value delivery',
        'To manage the day-to-day project schedule, sprint planning, and delivery milestones for the AI team',
        'To evaluate and select AI technology vendors through a formal procurement process'
      ],
      correctIndex: 1,
      explanation: 'The AI Steering Committee is an executive governance body — typically the COO, CIO, CHRO, and CFO — whose role is strategic oversight, not operational management. Its three core functions are: (1) resolving organizational conflicts that the AI leader cannot resolve alone (especially IT/OT), (2) maintaining alignment between the AI program and business priorities as both evolve, and (3) holding the program accountable to its value delivery commitments. Day-to-day project management belongs to the delivery team, not the steering committee.',
      interviewNote: 'Knowing the distinction between a Steering Committee (governance) and a delivery team (execution) signals organizational maturity. The Steering Committee is your escalation path and political protection — use it strategically.'
    },
    {
      id: 'q12-05',
      type: 'mcq',
      question: 'What is the primary purpose of a Use Case Review Board in an industrial AI program?',
      options: [
        'To review completed AI models for accuracy and performance before production deployment',
        'To evaluate incoming use case proposals against a consistent value-feasibility framework, prioritize the portfolio, and prevent resource dilution across too many parallel initiatives',
        'To audit AI system cybersecurity compliance against IEC 62443 before go-live',
        'To approve vendor selection for each individual AI use case to ensure procurement compliance'
      ],
      correctIndex: 1,
      explanation: 'The Use Case Review Board is a portfolio management function. Industrial AI programs consistently face the challenge of too many enthusiastic use case proposals — from plant engineers, process teams, and vendors — all competing for the same limited data engineering and data science capacity. The Review Board applies a consistent value (potential ROI, strategic fit) versus feasibility (data readiness, technical complexity, organizational readiness) filter, selects the right portfolio size, and sequences delivery. Without this governance, teams become fragmented across 20 half-finished pilots.',
      interviewNote: 'The POC trap — too many pilots, none reaching production — is the most common failure mode in industrial AI. The Use Case Review Board is the governance mechanism that prevents it. Mention this explicitly.'
    },
    {
      id: 'q12-06',
      type: 'mcq',
      question: 'Which of the following is a LEADING indicator (rather than a lagging indicator) of AI transformation health?',
      options: [
        'Total financial value captured by AI models in the last 12 months',
        'Number of unplanned shutdowns prevented by predictive maintenance in Year 1',
        'Model utilization rate — the percentage of AI recommendations that operators actually act upon',
        'Cumulative ROI of the AI program since inception'
      ],
      correctIndex: 2,
      explanation: 'Model utilization rate is a leading indicator: it measures the current state of operator adoption and trust, and predicts future value capture before financial results materialize. If operators are not acting on AI recommendations (low utilization rate), financial value will not be captured — regardless of how technically accurate the models are. Financial results (options A, B, D) are lagging indicators: they reflect past performance, not the current health of the adoption pipeline. Tracking utilization rate gives you time to intervene before financial targets are missed.',
      interviewNote: 'Distinguish leading from lagging indicators confidently. "Model utilization rate is my most important leading indicator — if operators are not using the tool, no financial value will flow" is a strong answer that shows operational sophistication.'
    },
    {
      id: 'q12-07',
      type: 'truefalse',
      question: 'True or False: The most effective way to build operator trust in a new AI system is to deploy it directly in closed-loop mode from Day 1, demonstrating confidence in the technology and accelerating value capture.',
      options: ['True', 'False'],
      correctIndex: 1,
      explanation: 'False. Deploying directly in closed-loop mode from Day 1 is one of the most reliable ways to destroy operator trust permanently. Operators need to see the AI make correct predictions repeatedly before they trust it enough to act on its recommendations — let alone allow it to make automatic setpoint adjustments. The correct sequence is: shadow mode (AI predicts, operators observe, no action expected) for several weeks to build a track record, then advisory mode (recommendations displayed, operator decides), and only then closed-loop automation after extensive trust has been established and safety protocols confirmed.',
      interviewNote: 'Shadow mode is a non-negotiable trust-building step. Any interviewer with operational experience will know this. Proposing closed-loop Day 1 deployment signals you do not understand how operator trust works in safety-critical environments.'
    },
    {
      id: 'q12-08',
      type: 'truefalse',
      question: 'True or False: When an AI model generates a recommendation that contradicts what the senior operator believes is correct, the transformation leader should always defer to the AI model, since it is processing more data than any human can.',
      options: ['True', 'False'],
      correctIndex: 1,
      explanation: 'False. This is precisely the wrong framing. Operators have contextual knowledge the AI model does not have: they know about recent maintenance work, current equipment quirks, an unusual crude batch, or a safety concern not captured in any dataset. When a conflict arises, the transformation leader should treat it as a learning opportunity — investigate why the AI and the operator disagree, determine whether the AI is missing context or the operator is pattern-matching to a past situation that does not apply, and use the disagreement to improve the model. The AI is an advisor, not an authority.',
      interviewNote: 'This question tests your philosophical alignment on human-AI collaboration. "AI as co-pilot, human in command" is the correct framing in any safety-critical industrial environment. Never position AI as overriding human expertise.'
    },
    {
      id: 'q12-09',
      type: 'scenario',
      question: 'Your team has built an excellent predictive maintenance model for crude pump failures. It has 85% recall and 78% precision validated on historical data. After 6 months of shadow mode, you propose moving to advisory mode. The operations VP says: "I want to see it run for another 6 months in shadow mode before we go to advisory." What is the most appropriate response?',
      options: [
        'Override the VP — the model metrics justify advisory mode and the delay is costing the business money',
        'Agree immediately and extend shadow mode indefinitely — the VP\'s trust is more important than schedule',
        'Acknowledge the VP\'s caution as legitimate, share the shadow mode performance data (how many actual failures the model predicted correctly in the last 6 months), propose a limited advisory pilot on a specific pump class with a 30-day review, and agree on the specific criteria that would justify advisory mode',
        'Escalate to the COO to apply pressure on the VP to approve the transition'
      ],
      correctIndex: 2,
      explanation: 'The correct answer balances the VP\'s legitimate caution with the program\'s momentum needs. The VP is not wrong to be cautious — operator safety is paramount. But indefinite shadow mode is not the answer either. The transformation leader\'s job is to make the VP\'s decision easy by providing concrete evidence (real shadow mode results, not just training metrics), proposing a limited-scope pilot that manages risk, and agreeing on pre-defined success criteria. This is a trust-building conversation, not a negotiation to win.',
      interviewNote: 'Escalating over a VP\'s head (option D) is politically destructive and demonstrates poor judgment. Agreeing indefinitely (option B) stalls value capture. The right answer — evidence plus limited pilot plus agreed criteria — is what strong transformation leaders do.'
    },
    {
      id: 'q12-10',
      type: 'scenario',
      question: 'Which of the following BEST describes what the AI Transformation Leader role at a refinery is NOT?',
      options: [
        'Owning the AI program strategy and ensuring it aligns with overall business objectives',
        'Building and maintaining the data engineering pipelines, training ML models, and tuning hyperparameters daily',
        'Translating between data science teams and operational leaders to ensure solutions are both technically sound and operationally adopted',
        'Managing stakeholder relationships, resolving organizational conflicts, and maintaining executive sponsorship'
      ],
      correctIndex: 1,
      explanation: 'The AI Transformation Leader is not a hands-on technical practitioner building pipelines and tuning models day-to-day — that is the data engineer\'s and data scientist\'s role. The transformation leader\'s value comes from strategy, stakeholder management, organizational change, and translation between technical and operational worlds. Being the most technically detailed person in the room is actually counterproductive: it pulls you away from the leadership work that only you can do. Hire great technical people, set direction, remove blockers, and drive adoption.',
      interviewNote: 'A very common trap is to answer that the role IS about building models. Interviewers expect you to distinguish leadership responsibilities from technical execution. "I hire and direct great data scientists — my job is to create the conditions for their success and translate their work into business value."'
    }
  ]
};
