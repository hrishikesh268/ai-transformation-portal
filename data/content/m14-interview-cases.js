/* Module M14 — Interview Scenarios and Case Studies */
window.MODULE_M14 = {
  id: 'm14',
  title: 'Interview Scenarios and Case Studies',
  subtitle: 'Master the Room',
  day: 4,
  estimatedMinutes: 60,
  xpReward: 200,
  icon: '\u{1F3C6}',
  sections: [
    {
      type: 'intro',
      title: 'From Knowledge to Performance',
      content: `<p>You have spent four days building the knowledge of an AI Transformation Leader: oil and gas fundamentals, refinery process units, APC and RTO systems, AI and ML concepts, industrial data architecture, cybersecurity, transformation strategy, leadership frameworks, and stakeholder communication. That knowledge is necessary. It is not sufficient.</p>
      <p class="mt-3">The interview is where knowledge becomes performance. Panel members will not ask you to recite facts — they will construct scenarios that force you to apply everything you know simultaneously, under pressure, with four plausible-sounding options and no time to look anything up.</p>
      <p class="mt-3">This module is about that translation: from knowing to performing. It covers what each panelist is specifically testing, the ten most likely questions with full model answers, power phrases to use naturally, a complete case walkthrough, eight things never to say, and the five things you need to know cold before you walk in the room.</p>
      <ul class="mt-4 space-y-2">
        <li><strong>What panels test:</strong> judgment under pressure, not recall under comfort.</li>
        <li><strong>How they test it:</strong> scenario questions with four plausible options where three look reasonable and one is right.</li>
        <li><strong>What wins:</strong> structured thinking delivered with calm confidence, using the vocabulary of the domain.</li>
        <li><strong>What loses:</strong> generic consulting answers that could apply to any industry, or pure AI-tech answers that ignore the operational context.</li>
      </ul>`,
      keyPoints: [
        'The interview tests judgment and performance, not knowledge recall',
        'Every scenario question has four plausible options — the difference is in reasoning quality',
        'Domain vocabulary delivered naturally signals preparation and credibility',
        'The winning answer is always specific, contextual, and operationally grounded'
      ]
    },
    {
      type: 'concept',
      title: 'What Each Panelist Is Really Testing',
      content: `<p>A typical interview panel for an AI Transformation Leader role at a major refinery includes four to six members, each with a specific lens. Knowing what each person is listening for lets you tailor every answer — even general questions — to land with the whole room.</p>
      <div class="mt-4 space-y-3">
        <div class="p-4 bg-amber-900/15 border border-amber-700/30 rounded-xl">
          <p class="font-bold text-amber-300 text-sm">The Factory Head / VP Operations</p>
          <p class="text-slate-300 text-sm mt-2">Testing: <strong>Operational trust.</strong> Can this person understand how a refinery works well enough to add value without creating disruption? Will my operators respect them? Will they know when to push and when to defer?</p>
          <p class="text-slate-300 text-sm mt-2">What wins: specific knowledge of refinery process units, respect for operator expertise, "co-pilot not autopilot" framing, shadow mode discipline, and a realistic view of how long trust takes to build.</p>
          <p class="text-slate-300 text-sm mt-2">What loses: rushing to deploy, dismissing operator concerns, overconfidence in AI accuracy, or revealing you confuse distillation with cracking.</p>
        </div>
        <div class="p-4 bg-blue-900/15 border border-blue-700/30 rounded-xl">
          <p class="font-bold text-blue-300 text-sm">The IT / OT Security Manager</p>
          <p class="text-slate-300 text-sm mt-2">Testing: <strong>Security discipline.</strong> Does this person understand the OT-IT boundary? Will they create pressure to connect things that should not be connected? Do they know IEC 62443?</p>
          <p class="text-slate-300 text-sm mt-2">What wins: naming the DMZ architecture unprompted, explaining why inference runs at the edge and not in the cloud, referencing IEC 62443 security zones and conduits, and demonstrating that you treat the OT team's concerns as legitimate engineering constraints, not organizational obstacles.</p>
          <p class="text-slate-300 text-sm mt-2">What loses: cloud-first proposals, dismissing security concerns as overly conservative, or not knowing what a data diode does.</p>
        </div>
        <div class="p-4 bg-purple-900/15 border border-purple-700/30 rounded-xl">
          <p class="font-bold text-purple-300 text-sm">The CDO / CTO</p>
          <p class="text-slate-300 text-sm mt-2">Testing: <strong>Delivery track record and architectural judgment.</strong> Has this person actually delivered AI in production, not just designed it on slides? Do they understand MLOps? Can they separate hype from deliverable reality?</p>
          <p class="text-slate-300 text-sm mt-2">What wins: specific references to model drift, retraining pipelines, utilization rate as a KPI, the POC trap by name, and honest discussion of what you have seen fail and why. Naming specific vendors credibly (AspenTech Mtell, AVEVA, Seeq) also lands well.</p>
          <p class="text-slate-300 text-sm mt-2">What loses: slide-deck thinking with no operational grounding, generic MLOps buzzwords without specifics, or promising every use case simultaneously in Year 1.</p>
        </div>
        <div class="p-4 bg-emerald-900/15 border border-emerald-700/30 rounded-xl">
          <p class="font-bold text-emerald-300 text-sm">The HR / Leadership Assessor</p>
          <p class="text-slate-300 text-sm mt-2">Testing: <strong>Leadership and interpersonal judgment.</strong> Can this person navigate a politically complex environment? How do they handle conflict? Are they self-aware about their gaps? Do they develop people or just deliver projects?</p>
          <p class="text-slate-300 text-sm mt-2">What wins: the "I measure success by making myself unnecessary" framing, reverse mentoring as a concept, honest acknowledgment of experience gaps paired with a specific plan to address them, and evidence of listening before prescribing.</p>
          <p class="text-slate-300 text-sm mt-2">What loses: generic leadership clichés, claiming expertise you do not have, or answers that reveal you see stakeholders as obstacles to manage rather than partners to engage.</p>
        </div>
      </div>`,
      keyPoints: [
        'Operations panelists test operational trust — know your process units and respect operators',
        'IT/OT panelists test security discipline — name the DMZ and IEC 62443 architecture',
        'CDO/CTO panelists test delivery credibility — name the POC trap and MLOps specifics',
        'HR/leadership panelists test self-awareness and interpersonal judgment'
      ]
    },
    {
      type: 'deep-dive',
      title: 'The 10 Most Likely Questions — Full Model Answers',
      content: `<p>These are the ten questions most likely to appear in your interview, based on the common assessment pattern for senior industrial AI leadership roles. Each includes a full model answer — not a template, but a complete, interview-ready response.</p>

      <div class="mt-6 space-y-6">

        <div class="p-5 bg-slate-900/60 border border-amber-700/40 rounded-xl">
          <p class="font-bold text-amber-300 text-sm mb-1">Q1: "What would you do in your first 30 days?"</p>
          <p class="text-slate-300 text-sm"><strong class="text-white">Model Answer:</strong> "My first 30 days are entirely about listening and assessing — not deploying. I would spend the first two weeks walking the plant, meeting every key stakeholder from the COO to shift supervisors, and understanding the existing data landscape: what PI coverage looks like, what the CMMS contains, how APC is running, and where operators feel the most pain. I would use a structured data readiness framework — assessing completeness, recency, and labelling quality for the top 10 potential use cases. By end of Week 4, I would have a prioritised shortlist of 3-5 use cases and a stakeholder map showing who my advocates, neutrals, and skeptics are. The roadmap comes from that assessment — not from a generic playbook I brought from outside."</p>
          <p class="text-slate-400 text-xs mt-3 italic">Why it works: It leads with listening (not deploying), names specific data systems (PI, CMMS, APC), demonstrates a structured approach, and closes with a concrete deliverable (shortlist + stakeholder map) that the panel can evaluate.</p>
        </div>

        <div class="p-5 bg-slate-900/60 border border-red-700/40 rounded-xl">
          <p class="font-bold text-red-300 text-sm mb-1">Q2: "We tried AI before and it failed. Why will this be different?"</p>
          <p class="text-slate-300 text-sm"><strong class="text-white">Model Answer:</strong> "Before I answer, I want to understand exactly what happened — because the right answer depends on the specific failure. [Pause and genuinely invite the story.] Thank you. Based on what you have described, the failure had three identifiable root causes: the model was never calibrated to your specific operational patterns; operators were not involved in design so they never trusted it; and when the vendor left, no one owned the retraining process so the model drifted and no one noticed. These are the three most common failure modes in industrial AI, and I have specific answers to all three: I build operator involvement into the design process from Week 2, not as a consultation step at the end. I require that every model going to production has an identified internal model owner — a named person whose job includes retraining. And I deploy in shadow mode long enough for operators to see the model make correct predictions before we ask them to act on it. The technology is the same as before. The process is completely different."</p>
          <p class="text-slate-400 text-xs mt-3 italic">Why it works: It listens first, names the three failure modes by category, and provides a specific solution to each. The closing line — "the technology is the same, the process is completely different" — is memorable and true.</p>
        </div>

        <div class="p-5 bg-slate-900/60 border border-blue-700/40 rounded-xl">
          <p class="font-bold text-blue-300 text-sm mb-1">Q3: "You have no APC or RTO experience. How do you handle that gap?"</p>
          <p class="text-slate-300 text-sm"><strong class="text-white">Model Answer:</strong> "I will not pretend otherwise — you have process control engineers with 20 years of APC experience and I am not going to out-expert them in the room. What I have done is study APC and RTO seriously in preparation for this role: I understand that APC uses Model Predictive Control to handle multivariable constraints in real time, that RTO sits above it as the steady-state economic optimizer, and that AI optimization complements both rather than replacing either. My role is not to be the control systems engineer — it is to be the strategic leader who creates the conditions for AI to deliver value on top of your existing control infrastructure. Every operational decision in the APC and RTO domain, I will make in partnership with your process control team. My job is to set direction, manage stakeholders, build the team, and translate between your operations engineers and the data science team. I have designed my operating model explicitly around that partnership."</p>
          <p class="text-slate-400 text-xs mt-3 italic">Why it works: It is honest, demonstrates genuine preparation, does not pretend to expertise, and articulates a clear and realistic operating model. The specific technical vocabulary (MPC, multivariable, steady-state economic optimizer) proves the preparation is real.</p>
        </div>

        <div class="p-5 bg-slate-900/60 border border-emerald-700/40 rounded-xl">
          <p class="font-bold text-emerald-300 text-sm mb-1">Q4: "What happens if the AI gives a wrong recommendation and the operator follows it — who is responsible?"</p>
          <p class="text-slate-300 text-sm"><strong class="text-white">Model Answer:</strong> "This question is precisely why I insist on advisory mode rather than closed-loop control for all Year 1 deployments. In advisory mode, the operator always makes the final decision — the AI informs but does not act. The accountability structure is unchanged: the designated process authority retains accountability for every process decision, including those where they chose to follow an AI recommendation. What we do to protect operators: hard constraint limits ensure the AI cannot recommend outside the pre-approved safe operating envelope; the Safety Instrumented System is completely independent of the AI and will trip the process based on its own sensors regardless of what any AI system recommends; and we implement a formal incident response protocol that investigates every AI-related near-miss and near-hit, regardless of outcome. I also want to be clear: the question of liability is separate from the question of what we do when the AI is wrong. When it is wrong, we investigate transparently, we fix the model, and we communicate what we found and what we changed. No cover-up, ever."</p>
          <p class="text-slate-400 text-xs mt-3 italic">Why it works: It addresses the safety engineering dimension (advisory mode, hard constraints, SIS independence), the accountability dimension (process authority), the response dimension (incident protocol), and the integrity dimension (transparency). It covers all four angles without being asked.</p>
        </div>

        <div class="p-5 bg-slate-900/60 border border-purple-700/40 rounded-xl">
          <p class="font-bold text-purple-300 text-sm mb-1">Q5: "We have 20 potential AI use cases. How do you choose the first 3?"</p>
          <p class="text-slate-300 text-sm"><strong class="text-white">Model Answer:</strong> "I apply a value-versus-feasibility matrix. Every use case gets scored on two axes: potential business value (financial impact, strategic importance, executive priority) and deployment feasibility (data readiness, technical complexity, organizational readiness, operator enthusiasm). The ideal Year 1 portfolio sits in the upper-right quadrant: high value and high feasibility. Typically, this shortlists 5-6 candidates. I then do one additional step that the matrix alone cannot do: I sit with the business owners of each shortlisted use case and confirm that the underlying data assumption is accurate — because use cases that look high-readiness on paper sometimes have a fatal data gap that the business owner knows about but the data assessment missed. After that validation, the final 3 are committed with a named sponsor, a data owner, and an identified model owner — because I will not approve a use case without those three roles filled. That prevents the POC trap from the very first day."</p>
          <p class="text-slate-400 text-xs mt-3 italic">Why it works: It names the framework, explains the logic, adds the crucial validation step, and closes with the governance conditions — all in under 90 seconds.</p>
        </div>

        <div class="p-5 bg-slate-900/60 border border-amber-700/40 rounded-xl">
          <p class="font-bold text-amber-300 text-sm mb-1">Q6: "What is the difference between digitalization and AI transformation?"</p>
          <p class="text-slate-300 text-sm"><strong class="text-white">Model Answer:</strong> "Digitalization builds the highway. AI transformation is the commerce that runs on it. Digitalization — upgrading your DCS, migrating to a modern ERP, deploying AVEVA PI across the plant — creates the infrastructure: connected systems, accessible data, a technology platform. It is necessary but not sufficient. A fully digitalized refinery can still capture zero AI value if no one has built models on the data and no operator trusts the outputs. AI transformation is the value-creation layer on top of that infrastructure: the predictive maintenance models that prevent failures, the soft sensors that tighten quality control, the optimization algorithms that find the $2/barrel of margin the LP model left on the table. The two programs should be sequenced and integrated — your digitalization project should be designed from the start to serve the data needs of your AI roadmap. But they are not the same thing, and confusing them is how organizations spend three years on digital infrastructure and wake up having captured no AI value."</p>
          <p class="text-slate-400 text-xs mt-3 italic">Why it works: The highway analogy is concrete and memorable. The specific AI value examples (predictive maintenance, soft sensors, LP optimization) ground the abstract distinction in operational reality.</p>
        </div>

        <div class="p-5 bg-slate-900/60 border border-red-700/40 rounded-xl">
          <p class="font-bold text-red-300 text-sm mb-1">Q7: "An AI model missed a failure and caused $2M in downtime. What do you do?"</p>
          <p class="text-slate-300 text-sm"><strong class="text-white">Model Answer:</strong> "Immediate transparency — no delay. I go to the plant head directly and say: our model did not catch this failure, here is what we know right now, here is what we do not know yet, and here is our investigation process and timeline. Within 5 business days I deliver a written root cause report: was this a failure mode outside the model's training distribution? A sensor that failed before the compressor, giving the model false normal readings? A configuration drift not reflected in the data? Whatever it is, I find it and fix it. If the investigation reveals the model has a systematic gap — a class of failure it cannot reliably detect — I suspend its advisory function for that failure mode until it is retrained and revalidated. And I communicate that decision to operations proactively, not in response to a question. The one thing I will never do is minimize or delay the disclosure. Trust, once lost through a cover-up, takes years to rebuild. Trust maintained through honest handling of failure is actually strengthened."</p>
          <p class="text-slate-400 text-xs mt-3 italic">Why it works: It demonstrates integrity first, then process, then technical diagnostic thinking, and closes with a leadership principle. The veteran operations panelist is listening for the integrity and process — not the technical explanation.</p>
        </div>

        <div class="p-5 bg-slate-900/60 border border-blue-700/40 rounded-xl">
          <p class="font-bold text-blue-300 text-sm mb-1">Q8: "Why do most industrial AI projects fail to scale beyond pilots?"</p>
          <p class="text-slate-300 text-sm"><strong class="text-white">Model Answer:</strong> "The pattern has a name: the POC trap. Organizations run 10 technically successful pilots — the model accuracy validates well in testing, the vendor demo is impressive — but none of them makes it to production. The three root causes are almost always the same. First, operator buy-in was not built into the design process — operators were shown the finished model and asked to trust it, rather than being co-designers who trust it because they helped build it. Second, no one owns the model after the external team leaves — no defined person whose job includes retraining it when the data distribution shifts. Third, the model output was never integrated into the operator's actual workflow — it lived in a separate dashboard that operators could and did ignore. I prevent all three of these from Day 1 by requiring, before any use case is approved: a named operator champion who participated in design, an identified model owner who will maintain it, and a workflow integration plan that puts the AI output in the place the operator is already looking."</p>
          <p class="text-slate-400 text-xs mt-3 italic">Why it works: It names the POC trap, gives three specific and distinct root causes, and closes with the three corresponding prevention mechanisms. Structured, specific, and immediately actionable.</p>
        </div>

        <div class="p-5 bg-slate-900/60 border border-emerald-700/40 rounded-xl">
          <p class="font-bold text-emerald-300 text-sm mb-1">Q9: "We use AspenTech for APC. What AI vendor would you recommend for predictive maintenance?"</p>
          <p class="text-slate-300 text-sm"><strong class="text-white">Model Answer:</strong> "Given your AspenTech APC environment, I would put AspenTech Mtell at the top of the evaluation list. The rationale is not loyalty to a vendor — it is integration economics. Mtell is native to the AspenTech ecosystem, ships with pre-built connectors to AVEVA PI and major CMMS platforms including Maximo and SAP PM, and presents its alerts and recommendations through interfaces your operations team will already recognise from their APC experience. That reduces the integration engineering effort by 40-60% compared to a greenfield connection from a pure-play vendor, and it reduces the adoption barrier because operators are not learning a completely new interface. That said, I would run a structured evaluation of 2-3 alternatives — likely Seeq for analytics and one of the specialized industrial AI vendors like SparkCognition — to ensure we are selecting on merit rather than convenience. The evaluation criteria I would use: integration effort with your existing PI and CMMS, reference sites with comparable crude units, false positive rates in production (not just accuracy on test data), and vendor support model after go-live."</p>
          <p class="text-slate-400 text-xs mt-3 italic">Why it works: It gives a direct recommendation with specific reasoning, names the integration advantage quantitatively, names alternative vendors credibly, and proposes a rigorous evaluation framework. It shows vendor knowledge without vendor loyalty.</p>
        </div>

        <div class="p-5 bg-slate-900/60 border border-purple-700/40 rounded-xl">
          <p class="font-bold text-purple-300 text-sm mb-1">Q10: "What is shadow mode and why is it non-negotiable?"</p>
          <p class="text-slate-300 text-sm"><strong class="text-white">Model Answer:</strong> "Shadow mode is the first deployment stage for any AI model in a production environment: the model runs in parallel with actual operations, generates predictions, logs them, and compares them to what actually happens — but operators are explicitly told they are not expected to act on the outputs. No one's performance is judged by whether they followed the model. The purpose is to build a verified track record under real plant conditions before asking anyone to rely on the model's recommendations. Typically 4 to 12 weeks, depending on how frequently the target event occurs and how much of a track record the operations team needs to see before trusting the output. Why is it non-negotiable? Because telling an operator to act on a recommendation from a model they have never seen proven correct — in their plant, with their equipment, with their crude — is how you guarantee non-adoption. Shadow mode is the trust-building bridge between laboratory validation and operational trust. Skip it and the model will be accurate in the test set and ignored in the control room."</p>
          <p class="text-slate-400 text-xs mt-3 italic">Why it works: It defines shadow mode precisely, explains the duration and its determinants, and gives the trust-building rationale in a memorable frame. The closing line is quotable.</p>
        </div>

      </div>`,
      keyPoints: [
        'Listen before you prescribe — in every scenario question, the correct first move is to gather information',
        'Name frameworks explicitly: value-feasibility matrix, POC trap, shadow mode, Pyramid Principle',
        'Technical vocabulary delivered naturally (PI, CMMS, MPC, SIS, IEC 62443) signals genuine preparation',
        'Close every answer with a concrete deliverable or principle — not a vague commitment'
      ]
    },
    {
      type: 'concept',
      title: '10 Power Phrases to Use Naturally',
      content: `<p>These are phrases that signal fluency in the domain. The goal is to use them naturally — not as buzzwords dropped into answers, but as the precise vocabulary for concepts you genuinely understand. Each phrase below includes when and how to use it.</p>
      <div class="mt-4 space-y-3">
        <div class="p-4 bg-slate-900/50 rounded-xl border border-slate-700 text-sm">
          <p class="font-bold text-amber-300">1. "The POC trap"</p>
          <p class="text-slate-300 mt-1">Use when: asked why AI projects fail, or when describing how you will prevent the same pattern. <em>Example: "The risk I am most focused on preventing is the POC trap — the pattern where technically successful pilots never reach production."</em></p>
        </div>
        <div class="p-4 bg-slate-900/50 rounded-xl border border-slate-700 text-sm">
          <p class="font-bold text-amber-300">2. "Shadow mode before advisory mode before closed-loop"</p>
          <p class="text-slate-300 mt-1">Use when: asked about deployment sequencing or operator trust. <em>Example: "We follow the standard deployment sequence: shadow mode to build a track record, advisory mode when operators are ready to act, and closed-loop only after extended advisory success."</em></p>
        </div>
        <div class="p-4 bg-slate-900/50 rounded-xl border border-slate-700 text-sm">
          <p class="font-bold text-amber-300">3. "Co-pilot, not autopilot"</p>
          <p class="text-slate-300 mt-1">Use when: addressing operator concerns about job displacement or AI autonomy. <em>Example: "The framing I use with every operator is: AI is your co-pilot, not your autopilot. You remain in command of every process decision."</em></p>
        </div>
        <div class="p-4 bg-slate-900/50 rounded-xl border border-slate-700 text-sm">
          <p class="font-bold text-amber-300">4. "Model utilization rate"</p>
          <p class="text-slate-300 mt-1">Use when: discussing AI program KPIs or progress metrics. <em>Example: "The leading indicator I track most closely is model utilization rate — the percentage of AI recommendations that operators actually act on. It tells me whether we have real adoption or just a deployed model that no one uses."</em></p>
        </div>
        <div class="p-4 bg-slate-900/50 rounded-xl border border-slate-700 text-sm">
          <p class="font-bold text-amber-300">5. "Value versus feasibility matrix"</p>
          <p class="text-slate-300 mt-1">Use when: explaining use case prioritization. <em>Example: "I score every use case candidate on a value-versus-feasibility matrix before committing to the first three — that prevents us from selecting either glamorous-but-undeliverable use cases or easy-but-trivial ones."</em></p>
        </div>
        <div class="p-4 bg-slate-900/50 rounded-xl border border-slate-700 text-sm">
          <p class="font-bold text-amber-300">6. "Digitalization builds the highway; AI transformation is the commerce that runs on it"</p>
          <p class="text-slate-300 mt-1">Use when: asked to distinguish digitalization from AI transformation. This phrase is memorable, accurate, and demonstrates conceptual clarity.</p>
        </div>
        <div class="p-4 bg-slate-900/50 rounded-xl border border-slate-700 text-sm">
          <p class="font-bold text-amber-300">7. "My goal is to make myself unnecessary"</p>
          <p class="text-slate-300 mt-1">Use when: asked about your vision for the engagement or how you measure success. <em>Example: "I measure success by a simple test at Month 18: can your team run this program without us? If not, I have delivered a project, not a transformation."</em></p>
        </div>
        <div class="p-4 bg-slate-900/50 rounded-xl border border-slate-700 text-sm">
          <p class="font-bold text-amber-300">8. "Diagnosis before prescription"</p>
          <p class="text-slate-300 mt-1">Use when: explaining your approach to the first 30 days or responding to stakeholder concerns. <em>Example: "My operating principle in every engagement is diagnosis before prescription — I will not propose solutions until I have understood this specific plant's specific situation."</em></p>
        </div>
        <div class="p-4 bg-slate-900/50 rounded-xl border border-slate-700 text-sm">
          <p class="font-bold text-amber-300">9. "The Safety Instrumented System is completely independent of the AI"</p>
          <p class="text-slate-300 mt-1">Use when: answering any safety-related question. This phrase signals that you understand the fundamental safety architecture of a refinery and that you will not compromise it under any commercial pressure.</p>
        </div>
        <div class="p-4 bg-slate-900/50 rounded-xl border border-slate-700 text-sm">
          <p class="font-bold text-amber-300">10. "Alert fatigue"</p>
          <p class="text-slate-300 mt-1">Use when: discussing anomaly detection deployment or operator adoption. <em>Example: "The biggest risk in anomaly detection is alert fatigue — if we generate 40 alerts per shift, operators will disable the system within two weeks. I tune for 3 to 5 high-confidence, actionable alerts per shift, not maximum sensitivity."</em></p>
        </div>
      </div>`,
      keyPoints: [
        'Power phrases work only when you understand the concept behind them — they are vocabulary for genuine knowledge',
        'Use phrases in response to natural openings — do not force them into unrelated answers',
        'The most memorable phrases are those with a concrete image: "highway and commerce," "co-pilot not autopilot"',
        'Restraint signals confidence — using one or two phrases well beats forcing all ten'
      ]
    },
    {
      type: 'case-study',
      title: 'Full Case Walkthrough — Refinery X 3-Year AI Transformation Plan',
      content: `<p>This case walkthrough mirrors the format of a real interview case question or a BCG engagement kickoff. Study it until you can reconstruct the structure from memory — not the specific numbers, but the logic.</p>

      <div class="mt-4 p-4 bg-slate-900/50 rounded-xl border border-amber-700/30 text-sm">
        <p class="font-bold text-amber-300 text-base">Refinery X — Baseline Situation</p>
        <ul class="text-slate-300 mt-2 space-y-1">
          <li><strong>Throughput:</strong> 180,000 bbl/day nameplate, currently running at 88% utilization (158,400 bbl/day actual)</li>
          <li><strong>Gross Refining Margin:</strong> $10.50/bbl average (volatile, crude-dependent)</li>
          <li><strong>Process history:</strong> AVEVA PI installed 2019, 4 years of data, 91% tag coverage</li>
          <li><strong>APC coverage:</strong> 65% of major units on AspenTech DMC3, running at 74% average utilization</li>
          <li><strong>RTO:</strong> No dedicated RTO system — planning and scheduling driven by LP model updated weekly</li>
          <li><strong>CMMS:</strong> Maximo installed, 5 years of maintenance records, failure records inconsistently labelled before 2022</li>
          <li><strong>LIMS:</strong> Not connected to PI — samples logged manually, 6-8 hour lab turnaround</li>
          <li><strong>Operator trust in AI:</strong> 2 out of 5 — one failed vendor engagement 3 years ago generated alert fatigue and was shut down</li>
          <li><strong>IT/OT security:</strong> DMZ in place, conservative security posture, recent IEC 62443 compliance audit</li>
        </ul>
      </div>

      <div class="mt-5 p-4 bg-blue-900/15 border border-blue-700/30 rounded-xl text-sm">
        <p class="font-bold text-blue-300 text-base">Year 1 Plan — Foundation and First Wins ($12-16M target)</p>
        <p class="text-slate-300 mt-2 font-semibold">Use Case 1: Predictive Maintenance for Rotating Equipment (pumps and compressors)</p>
        <ul class="text-slate-300 mt-1 space-y-1 ml-3">
          <li>Data: AVEVA PI vibration, temperature, pressure features + Maximo failure labels (2021-present, after labelling quality improved)</li>
          <li>Deployment: AspenTech Mtell — native PI integration, familiar interface for AspenTech APC users</li>
          <li>Sequence: 8-week data quality audit, 10-week model development, 8-week shadow mode, advisory mode at Month 7</li>
          <li>Target: 4 fewer unplanned failures per year on covered assets = $8-10M annual benefit (each failure = 18-24 hours downtime × $10.50 GRM × 158,400 bbl/day)</li>
          <li>Operator engagement: 2 senior operators designated as co-designers from Week 2; shadow mode review sessions every 2 weeks</li>
        </ul>
        <p class="text-slate-300 mt-3 font-semibold">Use Case 2: Anomaly Detection on Crude Distillation Unit</p>
        <ul class="text-slate-300 mt-1 space-y-1 ml-3">
          <li>Data: PI historian — CDU temperature, pressure, flow tags (high coverage)</li>
          <li>Algorithm: unsupervised isolation forest or autoencoder trained on 2 years of stable operating data</li>
          <li>Tuning target: 3-5 actionable alerts per shift maximum; operator-defined suppression filters for known benign states</li>
          <li>Target: 2 major process upsets prevented per year = $3-5M annual benefit</li>
        </ul>
        <p class="text-slate-300 mt-3 font-semibold">Foundation Project: LIMS-PI Integration</p>
        <ul class="text-slate-300 mt-1 space-y-1 ml-3">
          <li>Connect LIMS to PI historian via automated data pipeline — linking each LIMS quality result to the PI process state at the time of sampling</li>
          <li>Timeline: 12-16 weeks, primarily data engineering work</li>
          <li>Value: Does not generate direct Year 1 value — but is the prerequisite for all Year 2 quality prediction use cases. Doing this in Year 1 in parallel with AI deployment is critical to Year 2 timeline.</li>
        </ul>
        <p class="text-slate-300 mt-3 font-semibold">Governance Established in Year 1:</p>
        <ul class="text-slate-300 mt-1 space-y-1 ml-3">
          <li>AI Steering Committee: COO (sponsor), VP Operations, CIO, CFO — monthly review</li>
          <li>Use Case Review Board: AI Leader, data engineering lead, process engineering lead — bi-weekly</li>
          <li>Model ownership: every production model has a named client-side owner responsible for retraining triggers</li>
        </ul>
      </div>

      <div class="mt-5 p-4 bg-emerald-900/15 border border-emerald-700/30 rounded-xl text-sm">
        <p class="font-bold text-emerald-300 text-base">Year 2 Plan — Value Expansion ($22-28M incremental target)</p>
        <p class="text-slate-300 mt-2 font-semibold">Use Case 3: Diesel Sulfur Soft Sensor (LIMS-PI integration now live)</p>
        <ul class="text-slate-300 mt-1 space-y-1 ml-3">
          <li>Data: PI continuous process data (hydrotreater temperatures, pressures, flows, feed composition) matched to LIMS sulfur results</li>
          <li>Value: Reduce safety margin from 2 ppm to 0.8 ppm below spec (from targeting 8 ppm to targeting 9.2 ppm against 10 ppm spec)</li>
          <li>Financial impact: Lower hydrotreater severity = reduced hydrogen consumption ≈ $5-7M/year at this scale</li>
          <li>Deployment: Shadow mode 6 weeks (high operator skepticism requires extended track record); advisory mode Month 8</li>
        </ul>
        <p class="text-slate-300 mt-3 font-semibold">Use Case 4: FCC Yield Optimization</p>
        <ul class="text-slate-300 mt-1 space-y-1 ml-3">
          <li>Data: PI FCC operating data — reactor temperature, regenerator temperature, catalyst circulation, feed rate, product yields</li>
          <li>Approach: Empirical ML model trained on 4 years of operational data, identifying setpoint combinations that yield higher naphtha without increasing coke formation</li>
          <li>Target: $0.60-1.00/bbl improvement on FCC throughput ≈ $8-12M/year at 80,000 bbl/day FCC capacity</li>
          <li>Integration: Recommendations passed to APC setpoint targets — does not bypass existing DMC3 layer</li>
        </ul>
        <p class="text-slate-300 mt-3 font-semibold">Use Case 5: APC Utilization Improvement Program</p>
        <ul class="text-slate-300 mt-1 space-y-1 ml-3">
          <li>Not an AI use case — but a critical enabler. Investigate root causes of 74% APC utilization (model staleness? operator distrust? setpoint limit violations?). Target 88%+ utilization on existing APC. Each percentage point recovered ≈ $1.5-2M annual value.</li>
        </ul>
        <p class="text-slate-300 mt-3 font-semibold">Team Milestone: Client data engineers run all Year 1 model maintenance independently by Month 18.</p>
      </div>

      <div class="mt-5 p-4 bg-purple-900/15 border border-purple-700/30 rounded-xl text-sm">
        <p class="font-bold text-purple-300 text-base">Year 3 Plan — Optimization and Compounding ($18-22M incremental target, $52-66M cumulative)</p>
        <p class="text-slate-300 mt-2 font-semibold">Use Case 6: Energy Management Optimization</p>
        <ul class="text-slate-300 mt-1 space-y-1 ml-3">
          <li>Integrate steam system, furnace efficiency, and power consumption data to identify energy waste patterns</li>
          <li>Target: 3-5% reduction in energy costs per barrel ≈ $6-9M/year at this scale</li>
        </ul>
        <p class="text-slate-300 mt-3 font-semibold">Use Case 7: Crude Feed Optimization</p>
        <ul class="text-slate-300 mt-1 space-y-1 ml-3">
          <li>ML-based crude blending optimizer that uses real crude assay data and current market prices to recommend blend compositions that maximize GRM given the current product price environment</li>
          <li>Target: $0.30-0.50/bbl improvement on crude-product spread ≈ $5-8M/year</li>
          <li>Dependency: requires integration of assay data system with PI and LP planning tool</li>
        </ul>
        <p class="text-slate-300 mt-3 font-semibold">Foundation: Digital Twin Initiation (CDU)</p>
        <ul class="text-slate-300 mt-1 space-y-1 ml-3">
          <li>Begin construction of a hybrid digital twin for the CDU: first-principles Aspen HYSYS model + empirical ML correction layer + live PI synchronization</li>
          <li>Year 3 delivers the foundation; operational use cases (process scenario testing, operator training) activate in Year 4</li>
          <li>This investment positions the refinery for a Step 5 (autonomous/AI-assisted scheduling) capability in Year 4-5</li>
        </ul>
        <p class="text-slate-300 mt-3 font-semibold">By End of Year 3:</p>
        <ul class="text-slate-300 mt-1 space-y-1 ml-3">
          <li>$50-66M annual benefit captured and tracked by agreed measurement methodology</li>
          <li>Client team of 5-7 data engineers and data scientists owns all models in production</li>
          <li>BCG role: periodic strategic advisory (2-3 engagements per year), not daily delivery</li>
          <li>Operator AI trust rating: target 4/5 based on visible track record and operator co-design involvement</li>
          <li>Use Case Review Board functioning independently under client leadership</li>
        </ul>
      </div>`,
      keyPoints: [
        'Start where the data is ready: PI + CMMS → predictive maintenance first',
        'Build data foundations in parallel with AI deployment — LIMS-PI integration in Year 1 unlocks Year 2 quality AI',
        'Sequence deployment: shadow mode → advisory mode → closed-loop — never skip shadow mode',
        'Year 3 value may be lower per use case than Year 2 but compounds with digital twin and autonomous scheduling capability'
      ]
    },
    {
      type: 'concept',
      title: '8 Things Never to Say in This Interview',
      content: `<p>These are statements that will immediately damage your credibility with at least one person on the panel — often the person whose support you most need. Each comes with an explanation of why it fails and what to say instead.</p>
      <div class="mt-4 space-y-3 text-sm">
        <div class="p-4 bg-red-900/20 border border-red-700/40 rounded-xl">
          <p class="font-bold text-red-300">1. "We can use ChatGPT / an LLM for that."</p>
          <p class="text-slate-300 mt-1">Why it fails: Large language models have no knowledge of this specific refinery's process behavior, equipment state, or current operating conditions. Proposing LLMs for process optimization or predictive maintenance signals you do not understand the fundamental difference between generative AI and industrial ML. <strong>Say instead:</strong> "That use case requires a supervised ML model trained on this plant's historical data — not a generative AI system."</p>
        </div>
        <div class="p-4 bg-red-900/20 border border-red-700/40 rounded-xl">
          <p class="font-bold text-red-300">2. "We should deploy this in closed-loop from Day 1 to capture value quickly."</p>
          <p class="text-slate-300 mt-1">Why it fails: Closed-loop deployment without shadow mode and advisory mode first is operationally reckless in a safety-critical environment and will be immediately recognized as such by any operations professional on the panel. <strong>Say instead:</strong> "We will follow the standard deployment sequence: shadow mode, then advisory mode, then closed-loop only after extended advisory success and explicit operations sign-off."</p>
        </div>
        <div class="p-4 bg-red-900/20 border border-red-700/40 rounded-xl">
          <p class="font-bold text-red-300">3. "AI will eventually replace operators in this process."</p>
          <p class="text-slate-300 mt-1">Why it fails: Even if you believe this might be true in 20 years, saying it in an interview for a role that depends on operator trust and adoption is disqualifying. It will be remembered by the HR assessor and the operations panelist. <strong>Say instead:</strong> "AI augments operators — it handles the data processing burden so operators can focus on the high-judgment decisions only they can make."</p>
        </div>
        <div class="p-4 bg-red-900/20 border border-red-700/40 rounded-xl">
          <p class="font-bold text-red-300">4. "Our AI technology is much more advanced than what this refinery has seen before."</p>
          <p class="text-slate-300 mt-1">Why it fails: This is how the last vendor opened their pitch before the failure the plant head just described. Technology superiority claims are meaningless to operations leaders who have seen impressive demos collapse in production. <strong>Say instead:</strong> "The technology is proven. The difference is in how we deploy it — with operators, not at them."</p>
        </div>
        <div class="p-4 bg-red-900/20 border border-red-700/40 rounded-xl">
          <p class="font-bold text-red-300">5. "We need to connect the DCS directly to our AI platform for real-time data."</p>
          <p class="text-slate-300 mt-1">Why it fails: The IT/OT security manager will stop you mid-sentence. Direct DCS connectivity bypasses the DMZ and violates OT network security architecture. <strong>Say instead:</strong> "We use the AVEVA PI historian as the data interface — data flows through the existing DMZ, not directly from OT systems."</p>
        </div>
        <div class="p-4 bg-red-900/20 border border-red-700/40 rounded-xl">
          <p class="font-bold text-red-300">6. "I don't have O&G experience, but all process industries are basically the same."</p>
          <p class="text-slate-300 mt-1">Why it fails: A refinery is not basically the same as a food plant or a pharmaceutical facility. Continuous high-temperature high-pressure hydrocarbon processing with specific safety systems, specific data architectures, and specific regulatory frameworks is a distinct domain. Minimizing this signals lack of preparation. <strong>Say instead:</strong> "I have studied this industry seriously and understand the specific characteristics that matter — the continuous process nature, the Purdue Model for OT security, AVEVA PI as the primary data platform, and the role of APC and RTO in the control architecture."</p>
        </div>
        <div class="p-4 bg-red-900/20 border border-red-700/40 rounded-xl">
          <p class="font-bold text-red-300">7. "We'll figure out model maintenance later — first let's get the model deployed."</p>
          <p class="text-slate-300 mt-1">Why it fails: This is exactly the approach that produced all the failed pilots the veteran panelists have lived through. Model maintenance is not an afterthought — it is a deployment prerequisite. <strong>Say instead:</strong> "I will not approve any use case for development unless we have identified the model owner and defined the retraining trigger before we start."</p>
        </div>
        <div class="p-4 bg-red-900/20 border border-red-700/40 rounded-xl">
          <p class="font-bold text-red-300">8. "I will need to bring in additional BCG resources to cover the refinery domain knowledge gaps."</p>
          <p class="text-slate-300 mt-1">Why it fails: The refinery is hiring you to lead this transformation. Immediately proposing to sub-contract the domain knowledge signals you are not confident in your ability to fill the role. <strong>Say instead:</strong> "I will develop the domain knowledge I need through intensive on-site learning, reverse mentoring from your senior engineers, and I will pair my AI and consulting capabilities with your domain experts on every technical decision."</p>
        </div>
      </div>`,
      keyPoints: [
        'Never propose LLMs for process optimization — this is an industrial ML context',
        'Never propose closed-loop Day 1 deployment — shadow mode before advisory mode is non-negotiable',
        'Never minimize O&G specificity — demonstrate you understand what makes refineries different',
        'Never defer model maintenance — name the model owner before the use case is approved'
      ]
    },
    {
      type: 'concept',
      title: 'Pre-Interview Research Checklist',
      content: `<p>Arriving at a final-round interview with specific knowledge of this refinery's situation converts generic answers into targeted ones. Fifteen minutes of targeted research can differentiate your answers from every other candidate. Here are the five things to look up.</p>
      <div class="mt-4 space-y-3 text-sm">
        <div class="p-4 bg-slate-900/50 rounded-xl border border-emerald-700/30">
          <p class="font-bold text-emerald-300">1. This refinery's Nelson Complexity Index and throughput capacity</p>
          <p class="text-slate-300 mt-1">Why it matters: NCI tells you how many conversion units the refinery has and what complexity of optimization is possible. A high-NCI refinery (9+) has FCC, hydrocracker, and potentially a coker — each is an AI optimization opportunity. Search the refinery name plus "NCI" or "Nelson Complexity" in industry databases or annual reports.</p>
        </div>
        <div class="p-4 bg-slate-900/50 rounded-xl border border-emerald-700/30">
          <p class="font-bold text-emerald-300">2. Any recent major incidents, outages, or production challenges in press releases or regulatory filings</p>
          <p class="text-slate-300 mt-1">Why it matters: If the refinery had a major unplanned shutdown related to equipment failure in the last 2 years, predictive maintenance is an especially high-priority topic. Referencing a known challenge (carefully, without appearing to exploit it) signals that you researched the context seriously.</p>
        </div>
        <div class="p-4 bg-slate-900/50 rounded-xl border border-emerald-700/30">
          <p class="font-bold text-emerald-300">3. The parent company's stated AI or digitalization strategy</p>
          <p class="text-slate-300 mt-1">Why it matters: If the parent company (Shell, Saudi Aramco, Valero, etc.) has published a digitalization or AI strategy, the refinery's program should align with it — and you can reference that alignment explicitly. This signals that you think about the refinery in its corporate context, not as an isolated site.</p>
        </div>
        <div class="p-4 bg-slate-900/50 rounded-xl border border-emerald-700/30">
          <p class="font-bold text-emerald-300">4. Which DCS and APC systems are deployed at this plant</p>
          <p class="text-slate-300 mt-1">Why it matters: A Honeywell Experion DCS environment has a different AI integration architecture than a Yokogawa CENTUM environment. An AspenTech APC shop has different vendor ecosystem considerations than an Emerson site. Knowing the specific platforms in advance lets you give a vendor recommendation that is immediately credible rather than generic.</p>
        </div>
        <div class="p-4 bg-slate-900/50 rounded-xl border border-emerald-700/30">
          <p class="font-bold text-emerald-300">5. Any previous AI or digital transformation announcements and their current status</p>
          <p class="text-slate-300 mt-1">Why it matters: If the company announced a digital transformation program 3 years ago and it has since gone quiet, that is a signal that the previous program encountered the POC trap. Acknowledging this tactfully — "I noticed your digital program announcement in 2021 — I'd like to understand where that stands and what I can build on versus what needs to be redesigned" — shows strategic awareness and intellectual honesty.</p>
        </div>
      </div>`,
      keyPoints: [
        'NCI and throughput tell you which units exist and what optimization potential the refinery has',
        'Recent incidents or outages define the highest-urgency use cases before you walk in',
        'Corporate AI strategy tells you how to align your program framing with the boardroom mandate',
        'Specific DCS/APC platforms let you give targeted, credible vendor recommendations'
      ]
    },
    {
      type: 'summary',
      title: '5 Things to Know Cold',
      content: `<p>If the interview starts in 10 minutes and you can only hold five things in your mind, hold these five. Each is a single-sentence headline that anchors the most important concept in its domain.</p>
      <div class="mt-4 space-y-3">
        <div class="flex gap-4 p-4 bg-amber-900/20 border border-amber-700/30 rounded-xl items-start">
          <span class="text-amber-400 font-bold text-xl">1</span>
          <div>
            <p class="font-bold text-white text-sm">The first 90 days are for listening, not deploying.</p>
            <p class="text-slate-400 text-xs mt-1">Days 1-30 = assess and listen. Days 31-60 = design the roadmap. Days 61-90 = launch the first pilot with operator co-design built in from the start.</p>
          </div>
        </div>
        <div class="flex gap-4 p-4 bg-blue-900/20 border border-blue-700/30 rounded-xl items-start">
          <span class="text-blue-400 font-bold text-xl">2</span>
          <div>
            <p class="font-bold text-white text-sm">The deployment sequence is always: shadow mode, then advisory mode, then closed-loop — never skipped.</p>
            <p class="text-slate-400 text-xs mt-1">Shadow mode builds the operator track record. Advisory mode builds operator trust. Closed-loop is earned, never assumed.</p>
          </div>
        </div>
        <div class="flex gap-4 p-4 bg-emerald-900/20 border border-emerald-700/30 rounded-xl items-start">
          <span class="text-emerald-400 font-bold text-xl">3</span>
          <div>
            <p class="font-bold text-white text-sm">The first AI use case at any refinery with PI data and a CMMS is predictive maintenance — it is the only use case with all three data requirements (features, labels, outcome) already in place.</p>
            <p class="text-slate-400 text-xs mt-1">PI = features. CMMS = failure labels. Documented downtime cost = outcome value. All three are present. No LIMS integration required.</p>
          </div>
        </div>
        <div class="flex gap-4 p-4 bg-purple-900/20 border border-purple-700/30 rounded-xl items-start">
          <span class="text-purple-400 font-bold text-xl">4</span>
          <div>
            <p class="font-bold text-white text-sm">The most common failure mode in industrial AI is the POC trap — address it by naming the model owner before the use case is approved.</p>
            <p class="text-slate-400 text-xs mt-1">No named model owner = the model will be unmaintained in production. No workflow integration = the dashboard will be ignored. No operator co-design = adoption will fail.</p>
          </div>
        </div>
        <div class="flex gap-4 p-4 bg-blue-900/20 border border-blue-700/30 rounded-xl items-start">
          <span class="text-blue-400 font-bold text-xl">5</span>
          <div>
            <p class="font-bold text-white text-sm">I measure my success by whether the client can run this program without me by Month 18 — that is the definition of transformation, not project delivery.</p>
            <p class="text-slate-400 text-xs mt-1">Capability transfer = named client model owners + documented pipelines + client team leads delivery + BCG transitions to strategic advisory. This framing closes every interview with the right lasting impression.</p>
          </div>
        </div>
      </div>`,
      keyPoints: [
        'Listen first — always diagnose before you prescribe',
        'Shadow mode, then advisory mode, then closed-loop — the trust-building sequence is non-negotiable',
        'Predictive maintenance first when PI and CMMS are available — it is the entry point to operator trust',
        'The POC trap is the risk you manage; capability transfer is the goal you target'
      ]
    }
  ],
  diagram: {
    type: 'svg',
    title: 'AI Transformation Leader Competency Wheel',
    description: 'Six core competency areas with BCG strength zones highlighted',
    svg: `<svg viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;">
  <defs>
    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="2" stdDeviation="4" flood-color="#00000055"/>
    </filter>
  </defs>

  <!-- Background circle -->
  <circle cx="300" cy="300" r="265" fill="#1e293b" filter="url(#shadow)"/>
  <circle cx="300" cy="300" r="260" fill="#0f172a"/>

  <!-- Segment 1: Domain Knowledge (amber) — 0 to 60 deg -->
  <!-- Arc from 270deg to 330deg (top, clockwise) -->
  <path d="M300,300 L300,40 A260,260 0 0,1 525.3,165 Z" fill="#B45309" opacity="0.85"/>

  <!-- Segment 2: AI/ML Literacy (orange) — 60 to 120 deg -->
  <path d="M300,300 L525.3,165 A260,260 0 0,1 525.3,435 Z" fill="#EA580C" opacity="0.85"/>

  <!-- Segment 3: Change Management (purple) — 120 to 180 deg -->
  <path d="M300,300 L525.3,435 A260,260 0 0,1 300,560 Z" fill="#7C3AED" opacity="0.85"/>

  <!-- Segment 4: Strategy and Business Case (green, BCG strength) — 180 to 240 deg -->
  <path d="M300,300 L300,560 A260,260 0 0,1 74.7,435 Z" fill="#059669" opacity="0.90"/>

  <!-- Segment 5: Stakeholder Communication (green, BCG strength) — 240 to 300 deg -->
  <path d="M300,300 L74.7,435 A260,260 0 0,1 74.7,165 Z" fill="#10B981" opacity="0.90"/>

  <!-- Segment 6: Program Delivery (blue) — 300 to 360 deg -->
  <path d="M300,300 L74.7,165 A260,260 0 0,1 300,40 Z" fill="#2563EB" opacity="0.85"/>

  <!-- Divider lines -->
  <line x1="300" y1="300" x2="300" y2="40" stroke="#0f172a" stroke-width="3"/>
  <line x1="300" y1="300" x2="525.3" y2="165" stroke="#0f172a" stroke-width="3"/>
  <line x1="300" y1="300" x2="525.3" y2="435" stroke="#0f172a" stroke-width="3"/>
  <line x1="300" y1="300" x2="300" y2="560" stroke="#0f172a" stroke-width="3"/>
  <line x1="300" y1="300" x2="74.7" y2="435" stroke="#0f172a" stroke-width="3"/>
  <line x1="300" y1="300" x2="74.7" y2="165" stroke="#0f172a" stroke-width="3"/>

  <!-- Inner white ring -->
  <circle cx="300" cy="300" r="110" fill="#0f172a"/>
  <circle cx="300" cy="300" r="108" fill="none" stroke="#334155" stroke-width="2"/>

  <!-- Centre label -->
  <text x="300" y="287" text-anchor="middle" font-family="system-ui,sans-serif" font-size="13" font-weight="700" fill="#f1f5f9">AI</text>
  <text x="300" y="305" text-anchor="middle" font-family="system-ui,sans-serif" font-size="13" font-weight="700" fill="#f1f5f9">Transformation</text>
  <text x="300" y="323" text-anchor="middle" font-family="system-ui,sans-serif" font-size="13" font-weight="700" fill="#f1f5f9">Leader</text>

  <!-- Labels for each segment (outside the ring) -->
  <!-- Segment 1: Domain Knowledge (top) -->
  <text x="300" y="115" text-anchor="middle" font-family="system-ui,sans-serif" font-size="13" font-weight="600" fill="#FDE68A">Domain</text>
  <text x="300" y="131" text-anchor="middle" font-family="system-ui,sans-serif" font-size="13" font-weight="600" fill="#FDE68A">Knowledge</text>
  <text x="300" y="151" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10" fill="#FCD34D">Must Learn</text>

  <!-- Segment 2: AI/ML Literacy (upper right) -->
  <text x="455" y="220" text-anchor="middle" font-family="system-ui,sans-serif" font-size="13" font-weight="600" fill="#FED7AA">AI / ML</text>
  <text x="455" y="236" text-anchor="middle" font-family="system-ui,sans-serif" font-size="13" font-weight="600" fill="#FED7AA">Literacy</text>
  <text x="455" y="256" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10" fill="#FDBA74">Must Learn</text>

  <!-- Segment 3: Change Management (lower right) -->
  <text x="455" y="390" text-anchor="middle" font-family="system-ui,sans-serif" font-size="13" font-weight="600" fill="#E9D5FF">Change</text>
  <text x="455" y="406" text-anchor="middle" font-family="system-ui,sans-serif" font-size="13" font-weight="600" fill="#E9D5FF">Management</text>
  <text x="455" y="426" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10" fill="#C4B5FD">Develop</text>

  <!-- Segment 4: Strategy and Business Case (bottom right-ish) -->
  <text x="300" y="505" text-anchor="middle" font-family="system-ui,sans-serif" font-size="13" font-weight="600" fill="#A7F3D0">Strategy &amp;</text>
  <text x="300" y="521" text-anchor="middle" font-family="system-ui,sans-serif" font-size="13" font-weight="600" fill="#A7F3D0">Business Case</text>
  <text x="300" y="541" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10" fill="#6EE7B7">BCG Strength</text>

  <!-- Segment 5: Stakeholder Communication (lower left) -->
  <text x="145" y="390" text-anchor="middle" font-family="system-ui,sans-serif" font-size="13" font-weight="600" fill="#A7F3D0">Stakeholder</text>
  <text x="145" y="406" text-anchor="middle" font-family="system-ui,sans-serif" font-size="13" font-weight="600" fill="#A7F3D0">Comms</text>
  <text x="145" y="426" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10" fill="#6EE7B7">BCG Strength</text>

  <!-- Segment 6: Program Delivery (upper left) -->
  <text x="145" y="220" text-anchor="middle" font-family="system-ui,sans-serif" font-size="13" font-weight="600" fill="#BFDBFE">Program</text>
  <text x="145" y="236" text-anchor="middle" font-family="system-ui,sans-serif" font-size="13" font-weight="600" fill="#BFDBFE">Delivery</text>
  <text x="145" y="256" text-anchor="middle" font-family="system-ui,sans-serif" font-size="10" fill="#93C5FD">Develop</text>

  <!-- Legend -->
  <rect x="35" y="555" width="12" height="12" rx="2" fill="#059669"/>
  <text x="52" y="565" font-family="system-ui,sans-serif" font-size="10" fill="#94a3b8">BCG Strength</text>
  <rect x="145" y="555" width="12" height="12" rx="2" fill="#B45309"/>
  <text x="162" y="565" font-family="system-ui,sans-serif" font-size="10" fill="#94a3b8">Must Learn</text>
  <rect x="245" y="555" width="12" height="12" rx="2" fill="#2563EB"/>
  <text x="262" y="565" font-family="system-ui,sans-serif" font-size="10" fill="#94a3b8">Develop</text>
</svg>`
  },
  video: null,
  glossary: [
    {
      term: 'Shadow Mode',
      definition: 'The first AI deployment stage where the model generates predictions in parallel with real operations and records them for comparison against actual outcomes, but operators are not expected to act on them. Builds a real-world performance track record before operational trust is required.'
    },
    {
      term: 'Quick Win',
      definition: 'A use case that can be designed, built, validated, and deployed to advisory mode within 8-12 weeks, delivering visible financial or operational value early enough to maintain stakeholder confidence and buy time for larger, more complex use cases.'
    },
    {
      term: 'Data Audit',
      definition: 'A structured assessment of the completeness, accuracy, recency, and labelling quality of the data required for a specific AI use case, conducted before model development begins. Identifies stuck sensors, calibration drift, missing periods, and master data mismatches that would invalidate model training if left unaddressed.'
    },
    {
      term: 'POC Trap',
      definition: 'The pattern where organizations successfully complete multiple AI pilots but none transitions to production — because operator buy-in, model maintenance ownership, and workflow integration were not established during the pilot phase. The most common failure mode in industrial AI programs.'
    },
    {
      term: 'Model Lifecycle Policy',
      definition: 'A governance document that defines: who owns each production AI model, what retraining triggers apply (e.g., rolling prediction error exceeds 1.5× baseline), the revalidation process before a retrained model returns to production, and the deprecation process when a model is retired.'
    },
    {
      term: 'Operator Trust',
      definition: 'The degree to which control room operators are willing to act on AI recommendations without being explicitly required to do so. Built through: co-design involvement, shadow mode demonstration of accuracy, advisory mode experience of correct recommendations, and a clear protocol for what happens when the AI is wrong.'
    },
    {
      term: 'Business Case',
      definition: 'A structured financial and strategic justification for an AI investment, comprising: identified value pools (quantified financial benefit from specific use cases), a baseline measurement methodology, a payback period and IRR, key assumptions and sensitivities, and an honest risk assessment. The document the CFO uses to make capital allocation decisions.'
    },
    {
      term: '90-Day Plan',
      definition: 'The structured first-quarter framework for an AI Transformation Leader: Days 1-30 for listening and assessment (stakeholder mapping, data readiness evaluation, pain point identification); Days 31-60 for roadmap design and governance establishment; Days 61-90 for first pilot launch with co-designed operator engagement and shadow mode deployment.'
    },
    {
      term: 'Value vs. Feasibility Matrix',
      definition: 'A 2x2 prioritization framework that scores AI use case candidates on potential business value (financial impact, strategic priority) against deployment feasibility (data readiness, technical complexity, organizational readiness). Use cases in the upper-right quadrant (high value, high feasibility) are Year 1 candidates.'
    },
    {
      term: 'Pyramid Principle',
      definition: 'The communication framework used by BCG and all major consulting firms: lead with your recommendation or answer first, support it with three key arguments, and ground each argument in evidence. Applies to all communication formats: presentations, emails, verbal updates, and interview answers.'
    },
    {
      term: 'Use Case Review Board',
      definition: 'A governance body that evaluates incoming AI use case proposals, applies the value-versus-feasibility framework, approves the portfolio, and enforces production-readiness conditions (named model owner, operator champion, workflow integration plan) before any use case begins development.'
    },
    {
      term: 'Model Drift',
      definition: 'The gradual degradation in AI model prediction accuracy that occurs when the statistical distribution of real-world input data shifts away from the distribution of the training data — caused by crude slate changes, equipment aging, seasonal variation, or process modifications. Detected through continuous monitoring of rolling prediction error against baseline validation performance.'
    }
  ]
};
