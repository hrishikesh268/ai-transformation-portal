window.QUIZ_BOSS_DAY4 = {
  id: 'boss-day4',
  title: 'Day 4 Boss Challenge — Lead Like a Pro',
  subtitle: 'Prove you can lead the transformation AND win the interview room',
  timeLimit: 1200,
  passingScore: 0.7,
  questions: [

    /* ── LEADING AI TRANSFORMATION (4 questions) ─────────────────────── */

    {
      id: 'boss-d4-01',
      type: 'mcq',
      question: 'As AI Transformation Leader, you discover that your two best data scientists have each been independently building predictive maintenance models for the same three pump classes — duplicating six weeks of work. What does this reveal about your program structure, and what do you fix first?',
      options: [
        'It reveals the data scientists are not communicating — fix it with a weekly standup so they know what each other is working on',
        'It reveals an absence of a Use Case Review Board and a shared work portfolio — fix it by establishing portfolio governance with a single backlog, clear ownership per use case, and a review cadence that surfaces conflicts before they waste resources',
        'It reveals the data scientists are over-performing — this redundancy is actually healthy competition that produces better models',
        'It reveals a hiring mistake — one of the data scientists should be redeployed to a different workstream immediately'
      ],
      correctIndex: 1,
      explanation: 'Duplicated work is a portfolio governance failure, not a communication failure. A Use Case Review Board with a single prioritized backlog and explicit ownership assignments prevents this structurally. Standups help surface the symptom but do not fix the root cause. Treating redundancy as healthy (option C) is a rationalization that ignores the cost. Redeployment (option D) addresses the person rather than the system. Fix the governance structure and the communication problem resolves itself.',
      interviewNote: 'Portfolio governance prevents the POC trap and resource fragmentation simultaneously. Naming the Use Case Review Board as the solution signals organizational maturity.'
    },
    {
      id: 'boss-d4-02',
      type: 'mcq',
      question: 'Your AI program has been running for 9 months. The steering committee asks for a health assessment. You have: 4 models in production, 78% average model utilization rate, $8.2M value captured vs. $11M target, and 3 models stuck in shadow mode for more than 4 months each. What is the most honest assessment and the most important action?',
      options: [
        'The program is healthy — 78% utilization is above the 70% benchmark and $8.2M is a strong first-year result',
        'The program is underperforming — the 3 models stuck in shadow mode are the critical concern; investigate what is blocking the transition to advisory mode for each and set a 30-day resolution deadline for each blocker',
        'The program is on track — a small value shortfall against target in Month 9 is normal and will self-correct by Month 12',
        'The program needs a full reset — suspend all current work and redesign the roadmap based on the value gap'
      ],
      correctIndex: 1,
      explanation: 'The three models stuck in shadow mode for 4+ months are the leading indicator of a deeper problem: something is blocking the trust-building progression from shadow to advisory to production. Each model stuck in shadow mode represents future value that will not materialize. The utilization rate and current value capture are positive signals, but the shadow mode blockage will suppress Year 2 results if not resolved now. A full reset (option D) is disproportionate. Declaring health without addressing the blockage (options A and C) is incomplete leadership.',
      interviewNote: 'Models stuck in shadow mode are a critical program health warning. The correct diagnostic question is: "What specifically is blocking each model?" — it may be different for each: one may need operator training, another may have data drift, a third may have a safety concern that was never formally resolved.'
    },
    {
      id: 'boss-d4-03',
      type: 'truefalse',
      question: 'True or False: The most important KPI for an AI Transformation Leader to report to the executive steering committee is the total number of AI models deployed in production.',
      options: ['True', 'False'],
      correctIndex: 1,
      explanation: 'False. Model count is a vanity metric — it measures output, not value. A program with 15 deployed models that operators ignore captures zero business value. The most important KPIs are: (1) model utilization rate (are operators acting on recommendations?), (2) value captured versus target (are financial outcomes being realized?), and (3) client capability growth (can the organization sustain and advance AI without external support?). These leading and outcome metrics tell the executive committee whether the program is creating value, not just whether it is generating technical artefacts.',
      interviewNote: 'If asked what you would report to the steering committee, answer with utilization rate, value captured, and capability growth — not model count or number of pilots. This distinction is a strong signal of leadership maturity versus technical focus.'
    },
    {
      id: 'boss-d4-04',
      type: 'scenario',
      question: 'Six months into the program, your senior data engineer — who built all the PI-to-ML data pipelines — resigns to join a competitor. The pipelines are not documented and only she understands how they work. Two models in production depend entirely on those pipelines. What should you have done to prevent this situation, and what do you do now?',
      options: [
        'You should have paid her more to prevent her from leaving; now you must hire an urgent replacement and accept 4-6 weeks of risk',
        'You should have established a knowledge management standard from Day 1: documented pipelines, peer code reviews, and runbooks for all production systems; now you must do an emergency knowledge capture with her during her notice period and assign a second engineer to shadow her immediately',
        'You could not have prevented this; talent attrition is unpredictable; now you should contact the vendor who supplied the original data to rebuild the pipelines from scratch',
        'You should have used a cloud platform where pipelines are automatically documented; now is the time to migrate off the custom pipeline to a managed service'
      ],
      correctIndex: 1,
      explanation: 'This is a program resilience and knowledge management failure. No production AI system should have a single point of failure in its human capital. The prevention is standard engineering practice: documented code, peer review, runbooks, and at least two engineers who understand every production pipeline. The immediate response is to use the notice period productively: emergency documentation session, shadow assignment, and a realistic assessment of which pipelines can be reconstructed versus which need support from the departing engineer to finalize. Paying more (option A) does not address the structural problem. Cloud migration (option D) takes weeks and does not solve the immediate crisis.',
      interviewNote: 'Knowledge management and bus-factor risk are real program management responsibilities for an AI leader. Mentioning "no single point of failure in human capital" demonstrates program management depth beyond technical delivery.'
    },

    /* ── STAKEHOLDER COMMUNICATION (4 questions) ─────────────────────── */

    {
      id: 'boss-d4-05',
      type: 'mcq',
      question: 'You need to communicate the same AI transformation update to three different audiences in the same week: the COO (15-minute slot), the plant engineering team (60-minute working session), and the control room operators (informal conversation during shift handover). What is the core principle governing how you adapt the same content for each audience?',
      options: [
        'Use the same presentation for all three audiences to ensure message consistency — inconsistency between audiences creates organizational rumors',
        'Tailor the depth of technical content: simplified for the COO, technical for engineers, and very simplified for operators',
        'Tailor both the content emphasis and the format to what each audience cares about: COO gets financial outcomes and strategic positioning; engineers get technical architecture and data quality findings; operators get "what this means for your job and how it helps you" — same facts, completely different framing and format',
        'Ask each audience what they want to hear and customize the message to match their preferences, even if that means different groups hear different things about the program\'s status'
      ],
      correctIndex: 2,
      explanation: 'Effective stakeholder communication is not about simplification — it is about relevance. Each audience has different concerns and different decision rights. The COO needs to know if the investment is tracking to return. Engineers need enough technical detail to evaluate decisions and flag risks. Operators need to know this helps them and does not threaten them. Using identical content (option A) ignores that different stakeholders need different things. Depth calibration alone (option B) misses that the topics, not just depth, must change. Telling different audiences different things about program status (option D) is dishonest and will backfire when groups compare notes.',
      interviewNote: 'The formula for stakeholder communication is: same truth, different emphasis, different format, different metrics. Practice the one-sentence version for each archetype: COO = "tracking $X vs. $Y target, here are the blockers"; Engineers = "here is the data architecture and where we need your input"; Operators = "this tool is watching for problems you can\'t see at 3am."'
    },
    {
      id: 'boss-d4-06',
      type: 'scenario',
      question: 'The union shop steward — who informally leads the control room operators — approaches you after a team meeting and says privately: "Look, I\'ve seen a lot of technology initiatives come and go here. The operators are scared this AI is going to automate their jobs away in 2-3 years. You can manage the bosses, but if you lose the operators, this whole thing fails. What do you actually plan to do?" How do you respond?',
      options: [
        'Reassure him that there are no plans for job reduction and that this is company policy — direct him to the HR department for the official position on technology and employment',
        'Be honest: acknowledge that AI will change operator roles over time, explain that the goal is augmentation not replacement, describe specifically how operators will be involved in model design and validation from Day 1, commit to running a joint operator-AI team review every 6 weeks, and ask for his specific concerns so they can be addressed directly rather than managed through rumor',
        'Promise that operators who engage positively with the AI program will have job security guaranteed for a minimum of 3 years',
        'Ask him to keep this conversation confidential and then present a business case to the COO for an explicit no-redundancy commitment before proceeding'
      ],
      correctIndex: 1,
      explanation: 'The shop steward is your most important informal ally — and most dangerous potential opponent. He deserves a direct, honest answer, not HR policy (option A) or false guarantees (option C). Confidentiality requests (option D) signal you are managing around him rather than with him. The honest answer has four parts: (1) acknowledge the legitimate concern without dismissing it; (2) explain the augmentation model genuinely; (3) describe concrete involvement mechanisms so operators are co-designers, not recipients; (4) ask for his specific concerns to be addressed directly. Converting a skeptical shop steward into an engaged collaborator is one of the highest-leverage moves in industrial AI transformation.',
      interviewNote: 'This is a trust-building question, not a communication technique question. Operators follow the shop steward. If he advocates for the AI program, adoption happens. If he is hostile, it does not. Treat him as a strategic partner, not a managed stakeholder.'
    },
    {
      id: 'boss-d4-07',
      type: 'mcq',
      question: 'You are preparing a 10-slide executive presentation using the Pyramid Principle to propose expanding the AI program from Year 1 to Year 2. What belongs on Slide 1?',
      options: [
        'The background context: refinery production statistics, AI market trends, and the global benchmark for AI adoption in oil and gas',
        'The methodology: how you will conduct the Year 2 use case assessment and the governance framework for expanding the program',
        'The recommendation and its financial headline: "We recommend expanding the AI program to Year 2, targeting $18M in additional annual value. Here is why."',
        'An acknowledgment of Year 1 challenges and lessons learned, to establish credibility before making the Year 2 recommendation'
      ],
      correctIndex: 2,
      explanation: 'Pyramid Principle: answer first, always. The executive\'s most limited resource is attention in the first 90 seconds of a presentation. Slide 1 must deliver the recommendation and its financial headline — everything else supports and substantiates that opening position. Context (option A) and methodology (option B) belong in the body or appendix. Lessons learned (option D) is a supporting argument, not the top-line recommendation. If the recommendation is on Slide 7, many executives will have already formed a different view based on what they saw in Slides 1-6.',
      interviewNote: 'In BCG culture, the Pyramid Principle is applied to every communication artefact. Practice opening every recommendation — verbal and written — with a single clear sentence that contains your recommendation and the financial benefit. Everything else follows.'
    },
    {
      id: 'boss-d4-08',
      type: 'truefalse',
      question: 'True or False: When a CFO says "I am not convinced your ROI numbers are reliable — show me how you calculated them," the correct response is to present more detailed financial modelling to overwhelm the objection with analytical rigour.',
      options: ['True', 'False'],
      correctIndex: 1,
      explanation: 'False. A CFO\'s ROI scepticism is usually not a request for more complexity — it is a request for methodology transparency and assumption validation. More detailed modelling may increase scepticism if it makes the analysis harder to audit. The correct response is to make the model simpler and more transparent: walk through the key value drivers (e.g., "we are assuming 3 fewer unplanned shutdowns per year, each costing $1.2M in lost throughput — here is the data behind that assumption"), identify which assumptions are most sensitive to the conclusion, and propose a method to baseline and independently measure the actual value once deployed. Transparency and auditability are what CFOs trust, not analytical volume.',
      interviewNote: 'Financial credibility comes from transparent, auditable models with well-sourced assumptions — not from complexity. When challenged on numbers, simplify and make assumptions explicit, do not add layers of analysis.'
    },

    /* ── INTERVIEW SCENARIOS (7 questions) ───────────────────────────── */

    {
      id: 'boss-d4-09',
      type: 'scenario',
      question: 'You walk into your first stakeholder panel. The plant head immediately says he is skeptical about AI disrupting operations. The IT security manager raises concerns about connecting OT systems to new platforms. The CFO says he needs hard ROI proof before approving any budget. All three raise their issues in the first 10 minutes. What is your FIRST action?',
      options: [
        'Address the CFO\'s ROI concern first — budget approval is the critical path and without it the other concerns are moot',
        'Address the IT security concern first — OT cybersecurity is the highest-stakes risk and must be resolved before any other conversation',
        'Listen to all three fully before responding to any of them — take notes, ask clarifying questions of each, and then synthesize a response that addresses the root concern of each stakeholder simultaneously',
        'Tackle each concern separately in a structured order: first safety and operations, then IT security, then financials — and propose a follow-up meeting for each workstream'
      ],
      correctIndex: 2,
      explanation: 'When multiple stakeholders raise concerns simultaneously, your first move is always to listen to all of them completely before proposing solutions to any. This achieves three things: (1) you demonstrate that you have heard and understood each concern on its own terms, not just as an obstacle to manage; (2) you gather the information needed to give an integrated, coherent response rather than three disconnected reassurances; and (3) you signal leadership maturity — a leader who listens before prescribing. Prioritizing one concern over the others (options A and B) implicitly signals the other concerns are less important. Proposing sequential separate meetings (option D) fragments what could be a unified conversation.',
      interviewNote: 'This is the scenario that tests the single most important leadership skill: listening before prescribing. When the panel has multiple objections, say explicitly: "I want to make sure I fully understand each of your concerns before I respond — can each of you share more about what specifically worries you?" Then synthesize a response that addresses all three.'
    },
    {
      id: 'boss-d4-10',
      type: 'scenario',
      question: 'A panel member asks: "Give me your 30-second answer — what is the single most important thing you would do in your first 30 days at this refinery?" What do you say?',
      options: [
        '"I would deploy a quick-win AI pilot within 30 days to demonstrate value and build momentum for the broader program."',
        '"I would build a detailed transformation roadmap and present it to the executive team for approval."',
        '"I would spend the first 30 days listening: walking the plant, meeting every key stakeholder, understanding the existing data landscape, and identifying where the real pain is — because a transformation roadmap built without that understanding will solve the wrong problems."',
        '"I would hire the core AI team — a data engineer, two data scientists, and a change management lead — so we have the delivery capacity to execute from Day 31."'
      ],
      correctIndex: 2,
      explanation: 'Listen and assess first. A roadmap built without plant-specific understanding will misidentify the highest-value opportunities, underestimate data quality issues, and fail to account for the specific cultural and organizational dynamics of this refinery. Deploying within 30 days (option A) without this foundation is how you create a visible failure in Month 1 that taints the entire program. Presenting a roadmap (option B) before you have gathered the inputs is premature. Hiring (option D) is important but happens in parallel with assessment — it is not the single most important thing.',
      interviewNote: '"Listen before I prescribe" delivered with conviction and a brief rationale is the strongest 30-second answer you can give. It demonstrates that you are a leader, not a technologist — that you know the answer depends on understanding this specific context, not on applying a generic playbook.'
    },
    {
      id: 'boss-d4-11',
      type: 'scenario',
      question: 'The panel asks: "We have a refinery with 95% AVEVA PI tag coverage, 80% APC coverage across major units, no LIMS-PI integration, and operators who are openly skeptical of AI. What should be your FIRST AI use case?" What do you recommend?',
      options: [
        'Quality prediction using soft sensors — because it has the highest potential financial value in a refinery',
        'Predictive maintenance for rotating equipment — because the PI data already exists, no LIMS is needed, the failure labels are in the CMMS, and visible results build operator trust on a use case where operators have tangible experience with the pain of unexpected failures',
        'APC performance monitoring — because 80% APC coverage means the biggest untapped value is in improving APC utilization and detecting when APC is in manual mode unnecessarily',
        'An LLM-based operator assistant — because it is the fastest to deploy and the most visible demonstration of modern AI to a skeptical operations team'
      ],
      correctIndex: 1,
      explanation: 'Predictive maintenance is the correct first use case given this specific data landscape. The conditions are near-ideal: 95% PI coverage provides rich sensor features, CMMS provides failure labels for supervised learning, no LIMS-PI integration is required (unlike quality prediction), and the use case directly addresses a problem operators understand and feel personally — unexpected equipment failures that create emergency scrambles and shift disruptions. When predictive maintenance catches a real failure early, operators see it with their own eyes. This builds the trust foundation for subsequent use cases. Quality prediction (option A) requires LIMS-PI integration which does not exist. LLM assistants (option D) do not address the skepticism with tangible operational value.',
      interviewNote: 'This cross-module question tests your ability to synthesize data readiness, use case value, and adoption dynamics simultaneously. The answer is predictive maintenance when: PI exists, CMMS exists, LIMS integration is missing, and operators are skeptical. Know this pattern cold.'
    },
    {
      id: 'boss-d4-12',
      type: 'scenario',
      question: 'A panelist who has spent 25 years in refinery operations asks bluntly: "I have seen a dozen consultants come through here promising AI miracles. They all left after 18 months. The models stopped working after 6 months without them. What makes you different from all of them?" What do you say?',
      options: [
        '"We have better proprietary AI tools and a more structured methodology than any previous consulting engagement you have seen."',
        '"I will commit to a 36-month engagement to ensure continuity — most consulting engagements fail because they are too short."',
        '"I measure my success differently from a typical consulting engagement: my goal is for you to not need BCG to run this program by Month 18. That means every model I build is documented, every pipeline is owned by your team, and every capability I develop is transferred to your people. If you still need BCG after 18 months, I have failed."',
        '"The AI technology has changed fundamentally in the last two years — previous failures were a technology maturity problem that no longer applies."'
      ],
      correctIndex: 2,
      explanation: 'The veteran operations leader has seen the pattern: consultants build capability that evaporates when they leave, because the models were never transferred and the internal team was never developed. The only credible answer is to directly address this pattern and commit to a different goal: capability transfer, not perpetual dependency. The "I measure my success by whether you no longer need me" framing is counter-intuitive from a commercial perspective, which is exactly why it is credible. Better tools (option A) and longer engagements (option B) do not address the root cause. Technology improvement (option D) ignores that the failure was organizational, not technical.',
      interviewNote: '"My goal is to make myself unnecessary" is one of the most powerful things an AI transformation leader can say to a skeptical operations veteran. It reframes the engagement from "vendor relationship" to "capability transfer partnership." Use this framing explicitly.'
    },
    {
      id: 'boss-d4-13',
      type: 'scenario',
      question: 'A panelist asks: "Suppose the AI model recommends increasing the FCC reactor temperature by 4°C to improve naphtha yield. The senior operator says that is a bad idea based on 20 years of experience. What do you do?" What is your answer?',
      options: [
        '"The model is processing data the operator cannot hold in his head — I would recommend the operator follow the model\'s recommendation and document the outcome for model validation."',
        '"I would shut down the AI recommendation for that operating condition and retrain the model with the operator\'s feedback as a training signal."',
        '"I would treat this as valuable diagnostic information: the model and the operator disagree, which means either the model is missing context the operator has (recent catalyst loading? a subtle equipment change not in the data?) or the operator is pattern-matching to a past situation that may not apply here. I would bring both perspectives together, investigate the specific disagreement, and use the finding to either improve the model or update the operator\'s mental model — whichever the evidence supports."',
        '"The model\'s recommendation should always be deferred to operations leadership rather than individual operators — I would escalate to the operations VP to make the call."'
      ],
      correctIndex: 2,
      explanation: 'The disagreement between the model and the experienced operator is not a problem to be resolved by picking a winner — it is a diagnostic signal to be investigated. Experienced operators have contextual knowledge that is not in the data: recent maintenance that changed equipment behavior, a catalyst loading that the historian has not yet captured, a process interaction that manifests only under specific conditions. The correct response is to treat the disagreement as an opportunity to improve either the model or the collective understanding. Overriding the operator (option A) is operationally dangerous and culturally destructive. Retraining on a single operator opinion (option B) is statistically unsound. Escalation (option D) is a non-answer that abdicates leadership.',
      interviewNote: 'The model-vs-operator disagreement scenario is one of the most common and most important interview questions in this role. The answer that wins: "I investigate the disagreement — it contains information that improves either the model or our understanding of the process." Never choose a side; investigate the gap.'
    },
    {
      id: 'boss-d4-14',
      type: 'scenario',
      question: 'You are in the final round of an interview. The panel chair says: "You have 2 minutes. Tell us your vision for what this refinery\'s AI program looks like at the end of Year 3." What is the strongest answer?',
      options: [
        '"By Year 3, we will have the most sophisticated AI tech stack in the industry, with cutting-edge models across every unit operation and a cloud-native ML platform integrated with all operational systems."',
        '"By Year 3, this refinery will have an internally owned AI capability: a team of 6-8 client data engineers and data scientists who can build, maintain, and expand the program independently; 8-10 models in production with documented maintenance processes; $40-60M in annual value captured and tracked; and operator utilization rates above 75% — with BCG\'s role reduced to periodic strategic advisory, not daily delivery."',
        '"By Year 3, every operator in this plant will be using AI recommendations daily, and all major optimization decisions will be made by AI systems with operator oversight."',
        '"By Year 3, we will have completed all planned use cases and delivered the full business case value, at which point the AI program will be in steady-state maintenance mode."'
      ],
      correctIndex: 1,
      explanation: 'The strongest Year 3 vision combines specific, measurable outcomes across four dimensions: internal capability (the client team can run it independently), deployed scale (models in production with maintenance processes), financial value (quantified, tracked), and adoption quality (utilization rates). This vision demonstrates that you are building a capability, not running a project. A technology-centric vision (option A) ignores organizational outcomes. Full AI decision-making (option C) is operationally unrealistic and will alarm the operations panel. "Steady-state maintenance" (option D) undersells the program and misses the compounding value of AI capability growth.',
      interviewNote: 'Year 3 vision questions test whether you think like a transformation leader or a project manager. The answer that wins paints a picture of internal capability ownership, measurable outcomes, and BCG\'s role transitioning from delivery to advisory. Memorize the formula: team + models in production + financial value + utilization rate.'
    },
    {
      id: 'boss-d4-15',
      type: 'scenario',
      question: 'The HR director on your panel asks: "How do you build a high-performing AI team at a refinery where there is no existing data science talent and local hiring for ML engineers is very difficult?" What is your approach?',
      options: [
        'Rely entirely on BCG\'s global talent network to staff the team — client refinery hires can be made later once the program proves its value',
        'Build the team through a blended model: a small core of senior BCG data scientists for the first 6 months; aggressive training and upskilling of 2-3 high-potential engineers already inside the refinery who know the process; targeted external hires for 1-2 specialized data engineering roles; and structured knowledge transfer from BCG to client team throughout, so the client team leads delivery by Month 12',
        'Outsource all AI development to a specialist vendor and focus the internal team entirely on business requirements and deployment oversight',
        'Hire 8-10 external data scientists immediately to build a fully staffed AI team from scratch before beginning any technical work'
      ],
      correctIndex: 1,
      explanation: 'The blended model — senior external expertise plus internal upskilling plus targeted specialist hiring — is the most sustainable and realistic approach. Fully BCG-staffed teams (option A) create dependency and do not build client capability. Full outsourcing (option C) is even worse for capability transfer. Hiring 8-10 external data scientists immediately (option D) is operationally impractical (the talent market for industrial ML engineers is tight) and misses the most valuable internal asset: process engineers who know the plant and can be trained in data science. The highest-leverage insight: upskilling 2-3 internal engineers who already have deep process knowledge produces better outcomes than hiring generic data scientists who must spend a year learning the domain.',
      interviewNote: 'Talent strategy for industrial AI is a common interview topic. The winning answer always combines external expertise for fast start, internal upskilling for domain knowledge, and structured capability transfer for sustainability. Name the internal-engineer-upskilling approach explicitly — it demonstrates you understand that domain knowledge and data science skills are both required.'
    }
  ]
};
