window.QUIZ_Q13 = {
  id: 'q13',
  moduleId: 'm13',
  title: 'Stakeholder Communication — Knowledge Check',
  questions: [
    {
      id: 'q13-01',
      type: 'mcq',
      question: 'You are meeting the Plant Head (VP Operations) of a 150,000 bbl/day refinery for the first time to discuss AI transformation. What does the Plant Head care about MOST in this first conversation?',
      options: [
        'The specific AI algorithms and machine learning frameworks you plan to use, and how they compare to industry benchmarks',
        'Whether AI will affect the reliability of his units, the safety of his team, and whether his operators will remain in control of the process',
        'The total budget and timeline for the transformation program, and the expected IRR',
        'Which AI vendors you are recommending and whether they have worked at refineries similar to his plant'
      ],
      correctIndex: 1,
      explanation: 'The Plant Head\'s primary concerns are always operational: reliability (will AI cause unexpected shutdowns?), safety (could AI recommendations endanger people or equipment?), and control (will my operators be overridden by a machine?). These are existential concerns for a plant leader, not secondary considerations. Budget and timeline (option C) are executive-level concerns. Algorithms (option A) are data science concerns. Vendor selection (option D) comes much later. Leading with operational outcomes — not technology or finance — is what earns a Plant Head\'s trust.',
      interviewNote: 'In any interview panel that includes an operations leader, frame every answer around reliability, safety, and operator control. These are their three core values. If your answer does not touch at least one of them, you have missed the audience.'
    },
    {
      id: 'q13-02',
      type: 'mcq',
      question: 'What is the primary fear of the IT/OT Security leader when an AI transformation program is proposed at a refinery?',
      options: [
        'That the AI program will be too expensive and consume IT budget that should go to ERP upgrades',
        'That connecting OT systems to AI platforms will create new attack surfaces that could compromise process control systems, cause safety incidents, or enable ransomware attacks on critical infrastructure',
        'That the data scientists hired for the AI program will not follow IT\'s software development standards',
        'That AI will make the IT team\'s skills obsolete and lead to headcount reductions in the IT department'
      ],
      correctIndex: 1,
      explanation: 'The IT/OT Security leader\'s primary fear is cybersecurity: specifically, that AI initiatives will pressure the organization to connect OT systems (DCS, PLCs, historians) to IT networks or external cloud platforms in ways that violate the Purdue Model DMZ architecture. A successful cyberattack on a refinery OT network is not just an IT incident — it can cause loss of process control, safety system compromise, environmental damage, and production loss measured in tens of millions per day. This fear is entirely legitimate and must be addressed with rigorous architectural specifics, not reassurances.',
      interviewNote: 'When presenting to an IT/OT security leader, always lead with your architecture: "Data flows one-way from OT to IT through the existing DMZ. We do not put anything into the OT network. Inference runs at the edge, not in the cloud." Specifics earn credibility; general reassurances do not.'
    },
    {
      id: 'q13-03',
      type: 'mcq',
      question: 'You are presenting an AI transformation business case to the CFO. What does the CFO primarily want to see?',
      options: [
        'A detailed technical architecture showing how data flows from the historian to the ML model to the operator dashboard',
        'A quantified financial return with a clear methodology: identified value pools, baseline metrics, attribution approach, payback period, and IRR — plus an honest risk assessment',
        'Evidence that your team has deployed AI at other refineries similar to this one',
        'A list of the AI use cases ranked by technical feasibility'
      ],
      correctIndex: 1,
      explanation: 'The CFO is a financial professional whose job is capital allocation. She needs to evaluate the AI investment against competing uses of the same capital. What she requires is: quantified value (how much? over what time period?), a credible methodology (how did you calculate it?), a payback period and IRR she can compare to her hurdle rate, and an honest assessment of risks and assumptions. Technical architecture (option A) is irrelevant to her. Track record (option C) is supporting evidence, not the core case. Feasibility ranking (option D) is an operational input, not a financial argument.',
      interviewNote: 'BCG consultants know how to build financial cases. In the interview, demonstrate this: "I would build a bottom-up value model: baseline current downtime cost, model the expected reduction, discount it, and calculate NPV. I would also show sensitivity to key assumptions." This is the language CFOs speak.'
    },
    {
      id: 'q13-04',
      type: 'mcq',
      question: 'You are a BCG consultant with no prior oil and gas experience being considered for an AI Transformation Leader role at a refinery. A panelist asks directly: "You have never worked in a refinery before. Why should we trust your judgment on operational decisions?" What is the most credible response?',
      options: [
        'Acknowledge the gap directly, describe the intensive domain preparation you have done (this course, industry reading, site visits), explain that your role is to lead and translate — not to replace process engineers — and emphasize that you will always partner with domain experts rather than overriding them',
        'Redirect to your AI and consulting credentials — your technical skills are more relevant than industry experience for this role',
        'Point to analogous experiences at other industrial companies, even if not oil and gas, and argue that all process industries are fundamentally similar',
        'Propose a 90-day trial period where your performance can be assessed before a final decision is made'
      ],
      correctIndex: 0,
      explanation: 'Honesty combined with evidence of preparation and a clear operating model is the only credible answer. Panelists know you do not have refinery experience — they are testing whether you are self-aware, whether you have prepared seriously, and whether you have a realistic model for how you will operate. Redirecting to AI credentials (option B) dismisses a legitimate concern. Analogous industries (option C) is weak. A trial period (option D) is not your decision to propose. The strongest answer acknowledges the gap, demonstrates preparation, and describes a partnership model with domain experts.',
      interviewNote: 'This question is nearly certain to come up in your interview. Prepare a 90-second answer that covers: (1) honest acknowledgment, (2) specific preparation you have done, (3) your operating model — "I will be the strategic and AI leader; my process engineering partners will validate every operational decision," and (4) examples of BCG leaders who have successfully transferred to unfamiliar industries.'
    },
    {
      id: 'q13-05',
      type: 'mcq',
      question: 'The BCG Pyramid Principle says you should structure communications by leading with your answer first, then supporting arguments, then evidence. A colleague structures her executive presentation in the opposite order: context, analysis, findings, then recommendation at the end. What is the primary risk of this approach?',
      options: [
        'The analysis may not be rigorous enough to support the final recommendation',
        'Executives will disengage or draw their own conclusions before hearing your recommendation — because they are accustomed to drawing conclusions from partial information and will not wait patiently through 20 minutes of context',
        'The presentation will be too long and exceed the allocated time slot',
        'The recommendation may not be MECE if the supporting analysis is presented before the conclusion'
      ],
      correctIndex: 1,
      explanation: 'The core risk of bottom-up presentation to executives is premature conclusion: senior leaders are trained to spot patterns and form views quickly. If you spend the first 15 minutes presenting context and analysis without your conclusion, they will have already formed their own view — and you will then have to overcome a position they have committed to mentally. Leading with the answer first (Pyramid Principle) means executives evaluate your recommendation against the context you provide, rather than forming their own recommendation before you offer yours. This is why McKinsey, BCG, and all major consulting firms use the Pyramid Principle universally.',
      interviewNote: 'The Pyramid Principle is a BCG core methodology. Mentioning it by name — and being able to explain it and defend its rationale — signals cultural fit with BCG\'s working style. Apply it explicitly in your interview answers: "My recommendation is X. Here are three reasons. First..."'
    },
    {
      id: 'q13-06',
      type: 'scenario',
      question: 'In your first stakeholder meeting, the Head of Process Engineering says: "We tried an AI project two years ago with a major vendor. It was a disaster — the model was wrong half the time and we wasted 18 months. I am very skeptical about this initiative." What is your FIRST action?',
      options: [
        'Present your technical credentials and the superior methodology you will use, to establish that this engagement will be fundamentally different',
        'Listen carefully and ask open questions to fully understand what happened: what was the use case, how was the model validated, what was the operator experience, and what specifically caused the failure',
        'Acknowledge his frustration and pivot immediately to a different use case to avoid repeating the same mistake',
        'Agree with his skepticism and propose starting with a much smaller, lower-risk pilot than originally planned'
      ],
      correctIndex: 1,
      explanation: 'Listen first — always. Before you can credibly explain why this will be different, you need to understand specifically what went wrong. Was it a data quality problem? A model that was over-fitted and failed in production? Operator non-adoption because they were not involved in the design? A vendor that disappeared after deployment? Each of these has a different solution. Jumping to your own narrative (options A, C, or D) before understanding the specific failure shows you are not listening — the very opposite of what builds trust with a skeptical stakeholder. Diagnose before you prescribe.',
      interviewNote: '"Listen to diagnose first" is the critical differentiator in stakeholder trust-building. Stating your own solution before fully understanding the problem is a red flag to experienced operators. Show that you ask more than you tell, especially in the first meeting.'
    },
    {
      id: 'q13-07',
      type: 'mcq',
      question: 'In a stakeholder power/interest matrix, a refinery\'s union shop steward has HIGH interest in the AI program (because it affects workers) but LOW formal power to approve or block the initiative. What is the correct engagement strategy?',
      options: [
        'Minimal engagement — low power means the shop steward cannot meaningfully affect the program and their time is better spent elsewhere',
        'Keep informed with regular updates — acknowledge their interest, provide transparency, and address their concerns through proper channels, without involving them in strategic decisions',
        'Manage closely — their high interest means they could become a strong advocate or vocal opponent, and operators follow their lead even if the org chart gives them low formal power',
        'Involve them in governance — give the shop steward a formal seat on the AI Steering Committee to represent worker interests'
      ],
      correctIndex: 2,
      explanation: 'The classic power/interest matrix places "keep informed" for high-interest/low-power stakeholders — but in a refinery context, this standard answer is incomplete and potentially dangerous. Shop stewards have informal power disproportionate to their org chart position: operators trust them, and a skeptical shop steward can poison adoption among the entire operations workforce through informal channels no governance structure controls. The correct strategy is "manage closely" — maintain regular dialogue, address concerns specifically, and ideally convert them into visible advocates. An enthusiastic shop steward is one of your most powerful adoption tools.',
      interviewNote: 'This answer demonstrates you understand that formal org chart power and actual influence are different things in industrial settings. Operators follow peer leaders, not org charts. Recognizing and managing informal influence networks is a senior leadership competency.'
    },
    {
      id: 'q13-08',
      type: 'truefalse',
      question: 'True or False: "Reverse mentoring" — where experienced operators teach the AI team about actual process behavior, failure modes, and operational constraints — improves AI model quality and operator adoption simultaneously.',
      options: ['True', 'False'],
      correctIndex: 0,
      explanation: 'True. Reverse mentoring creates two simultaneous benefits. First, operators have contextual knowledge that is impossible to extract from sensor data alone: they know which failures are actually related (a vibration that only matters when the cooling water temperature is above 35°C), which sensors are chronically unreliable, and which process states are genuinely abnormal versus temporarily transient. Incorporating this knowledge directly improves model quality. Second, operators who teach the team feel ownership of the model — they are co-designers, not passive recipients. This psychological co-ownership is one of the strongest predictors of adoption.',
      interviewNote: 'Reverse mentoring is an underused tool that demonstrates genuine respect for operational expertise. Mentioning it in an interview signals that you understand AI adoption is as much about relationships as technology.'
    },
    {
      id: 'q13-09',
      type: 'scenario',
      question: 'The IT leader tells you: "Our data quality is too poor for AI. The historian has 30% missing values on key tags and our CMMS records are inconsistent. We need to fix the data before we start any AI work." How do you respond?',
      options: [
        'Agree completely — suspend all AI work until the data quality issues are resolved, which may take 12-18 months',
        'Disagree and proceed with AI development using the available data, applying imputation techniques to handle the missing values',
        'Propose a specific 4-6 week data audit on the tags needed for your first priority use case — quantify the actual quality gaps, estimate remediation effort, and distinguish between gaps that can be worked around versus those that block the model',
        'Commission a full enterprise data governance program before beginning AI work — data quality is a foundational issue that must be resolved systematically'
      ],
      correctIndex: 2,
      explanation: '"Data quality too poor" is the most common blocker statement in industrial AI — and it is often overstated. The IT leader is right that poor data is a real problem, but wrong that all AI must wait. The correct response is a targeted data audit scoped to the specific tags and time periods needed for your first priority use case. This audit will distinguish genuine blockers (critical tags with >80% missing values, no CMMS labels for the target failure mode) from manageable gaps (isolated missing windows that can be imputed or excluded). You often discover that 20% of your tags account for 80% of the quality issues. This scoped approach keeps momentum while respecting the data quality concern.',
      interviewNote: '"Propose a specific data audit" is the professional answer to data quality objections. It acknowledges the concern, does not dismiss it, and proposes an evidence-based next step rather than either capitulating or steamrolling. Use the phrase "scoped data audit" in your interview response.'
    },
    {
      id: 'q13-10',
      type: 'truefalse',
      question: 'True or False: The MECE principle (Mutually Exclusive, Collectively Exhaustive) is most usefully applied to AI transformation roadmaps by ensuring that all planned use cases address different parts of the value chain with no overlapping scope and no gaps.',
      options: ['True', 'False'],
      correctIndex: 0,
      explanation: 'True. Applying MECE to the AI roadmap means: (1) Mutually Exclusive — each use case addresses a distinct problem domain (e.g., predictive maintenance, quality optimization, energy management) with no two use cases solving the same problem in parallel; and (2) Collectively Exhaustive — the roadmap covers all major value creation opportunities across the refinery\'s value chain with no significant gaps. A non-MECE roadmap will either waste resources on overlapping scope or leave important value pools untouched. MECE also makes the roadmap easier to communicate to executives — each work stream maps to a distinct, non-overlapping business problem.',
      interviewNote: 'BCG methodology is built on MECE. Explicitly applying it to AI roadmap design in your interview demonstrates consulting discipline applied to industrial AI — exactly the combination this role requires. Practice articulating a MECE use case structure for a generic refinery.'
    }
  ]
};
