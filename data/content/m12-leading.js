/* Module M12 — Leading AI Transformation */
window.MODULE_M12 = {
  id: 'm12',
  title: 'Leading AI Transformation',
  subtitle: 'What the Role Actually Requires',
  sections: [
    {
      type: 'intro',
      title: 'The AI Transformation Leader\'s Role',
      content: `<p>The AI Transformation Leader role at BCG is not primarily a technical role — it is a leadership role. Your job is to create the conditions under which AI can deliver value: the strategy, the team, the trust, the operating model, and the culture. Anyone can load a Jupyter notebook. Not everyone can transform a 3,000-person refinery operation.</p>
      <p class="mt-3">This module covers what the role actually demands: the competencies that matter, the challenges you will face, and how the best AI transformation leaders operate.</p>`,
      keyPoints: [
        'AI transformation leadership is 40% technical, 60% organizational',
        'Your job is to create conditions for AI to succeed — not to build the models',
        'The skills that make you effective: translating, inspiring, protecting, connecting',
        'Failure is almost always organizational, not technical'
      ]
    },
    {
      type: 'concept',
      title: 'The Four Roles of an AI Leader',
      content: `<p>Effective AI transformation leaders wear four distinct hats, often within the same day:</p>
      <div class="mt-4 space-y-3">
        <div class="p-4 bg-blue-900/15 border border-blue-700/30 rounded-xl">
          <p class="font-bold text-blue-300 text-sm">1. Translator 🗣️</p>
          <p class="text-slate-300 text-sm mt-1">You translate between data scientists who speak in models and operators who speak in barrels. You translate executive vision into technical requirements. You translate AI capabilities into business impact. This skill is worth more than any technical expertise.</p>
        </div>
        <div class="p-4 bg-amber-900/15 border border-amber-700/30 rounded-xl">
          <p class="font-bold text-amber-300 text-sm">2. Champion 🚀</p>
          <p class="text-slate-300 text-sm mt-1">AI faces resistance at every level. Operators fear job displacement. IT fears OT security risk. Finance questions ROI. Leadership doubts execution. You are the champion who maintains momentum, celebrates wins visibly, and keeps the organization moving forward through inevitable setbacks.</p>
        </div>
        <div class="p-4 bg-emerald-900/15 border border-emerald-700/30 rounded-xl">
          <p class="font-bold text-emerald-300 text-sm">3. Risk Manager 🛡️</p>
          <p class="text-slate-300 text-sm mt-1">AI in a refinery context can have safety implications. You are responsible for ensuring AI systems are deployed safely, with appropriate human oversight, fail-safes, and override capabilities. Never let enthusiasm override safety discipline.</p>
        </div>
        <div class="p-4 bg-purple-900/15 border border-purple-700/30 rounded-xl">
          <p class="font-bold text-purple-300 text-sm">4. Capability Builder 📈</p>
          <p class="text-slate-300 text-sm mt-1">Your ultimate goal is to make yourself unnecessary — to build the client's internal AI capability to the point where they don't need BCG to maintain and advance the program. This requires teaching, mentoring, and structuring work to build rather than just deliver.</p>
        </div>
      </div>`,
      keyPoints: [
        'Translator: bridging data science and operations teams is your highest-value skill',
        'Champion: AI resistance is universal — your job is to convert skeptics',
        'Risk Manager: safety in AI deployment is non-negotiable, ever',
        'Capability Builder: successful transformation = client can run it without you'
      ]
    },
    {
      type: 'deep-dive',
      title: 'Managing the Human Side of AI',
      content: `<p>The #1 reason AI transformation programs fail is not technology — it's people. Here's how to navigate the key human challenges:</p>
      <div class="mt-4 space-y-3 text-sm">
        <div class="p-4 bg-slate-900/50 rounded-xl border border-amber-700/30">
          <p class="font-bold text-amber-300">Challenge 1: Operator Resistance</p>
          <p class="text-slate-300 mt-1"><strong>Root cause:</strong> Fear of job displacement or algorithmic override of their expertise.<br><strong>Solution:</strong> AI as "co-pilot not autopilot" framing. Show operators that AI handles the tedious monitoring while they focus on high-judgment decisions. Involve operators in AI design from day 1 — their domain knowledge improves the model.</p>
        </div>
        <div class="p-4 bg-slate-900/50 rounded-xl border border-blue-700/30">
          <p class="font-bold text-blue-300">Challenge 2: IT/OT Organizational Conflict</p>
          <p class="text-slate-300 mt-1"><strong>Root cause:</strong> IT and OT teams have different risk tolerances, reporting lines, and technology standards. AI projects require both to cooperate — which they historically don't.<br><strong>Solution:</strong> A joint AI governance body with co-sponsorship from both IT and Operations. Clear RACI. Escalation path to a C-level sponsor who can break deadlocks.</p>
        </div>
        <div class="p-4 bg-slate-900/50 rounded-xl border border-purple-700/30">
          <p class="font-bold text-purple-300">Challenge 3: Executive Impatience</p>
          <p class="text-slate-300 mt-1"><strong>Root cause:</strong> Leaders want AI results in months; sustainable transformation takes years.<br><strong>Solution:</strong> Quick wins in Months 1-3 demonstrate value and maintain political support. Be rigorous about measuring and communicating early results. Create a "wins dashboard" visible to leadership.</p>
        </div>
      </div>`,
      keyPoints: [
        '"Co-pilot not autopilot" is the framing that converts operator skeptics',
        'Involving operators in model design improves both the model and adoption',
        'Executive sponsorship at C-level is essential for IT/OT conflict resolution',
        'Quick wins buy you the time needed for the larger transformation'
      ]
    },
    {
      type: 'concept',
      title: 'KPIs for the AI Transformation Leader',
      content: `<p>How do you measure your own success as an AI transformation leader? Beyond financial ROI, these are the leading indicators of a healthy program:</p>
      <div class="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
        <div class="p-3 bg-slate-900/50 rounded-xl border border-slate-700">
          <p class="font-bold text-emerald-300">Time to First Production Model</p>
          <p class="text-slate-300 text-xs mt-1">Target: &lt;8 weeks from kickoff. Speed of first deployment signals program health.</p>
        </div>
        <div class="p-3 bg-slate-900/50 rounded-xl border border-slate-700">
          <p class="font-bold text-emerald-300">Model Utilization Rate</p>
          <p class="text-slate-300 text-xs mt-1">% of time AI recommendations are acted on by operators. Target: &gt;70%.</p>
        </div>
        <div class="p-3 bg-slate-900/50 rounded-xl border border-slate-700">
          <p class="font-bold text-emerald-300">Client Team Capability Score</p>
          <p class="text-slate-300 text-xs mt-1">Can the client team run the models without BCG? Tracked monthly.</p>
        </div>
        <div class="p-3 bg-slate-900/50 rounded-xl border border-slate-700">
          <p class="font-bold text-emerald-300">Value Captured vs. Target</p>
          <p class="text-slate-300 text-xs mt-1">Monthly tracking of $ benefit vs. business case. Enables early course correction.</p>
        </div>
      </div>`,
      keyPoints: [
        'Measure model utilization rate — it reveals adoption quality beyond technical deployment',
        'Monthly value tracking enables rapid diagnosis of underperforming use cases',
        'Client capability growth is the most important long-term metric',
        'Track early warning indicators, not just lagging financial results'
      ]
    },
    {
      type: 'summary',
      title: 'Leadership Module Summary',
      content: `<p>You now understand the full scope of the AI transformation leadership role. Walk into any engagement knowing:</p>
      <div class="mt-4 space-y-2">
        <div class="flex gap-3 p-3 bg-blue-900/20 border border-blue-700/30 rounded-xl">
          <span>👁️</span><div><strong class="text-white text-sm">Four Roles</strong><br><span class="text-slate-400 text-xs">Translator · Champion · Risk Manager · Capability Builder</span></div>
        </div>
        <div class="flex gap-3 p-3 bg-blue-900/20 border border-blue-700/30 rounded-xl">
          <span>🧠</span><div><strong class="text-white text-sm">Human Side is Harder</strong><br><span class="text-slate-400 text-xs">Operator resistance, IT/OT conflict, executive impatience — master these</span></div>
        </div>
        <div class="flex gap-3 p-3 bg-blue-900/20 border border-blue-700/30 rounded-xl">
          <span>📊</span><div><strong class="text-white text-sm">Measure What Matters</strong><br><span class="text-slate-400 text-xs">Utilization rate + value captured + client capability growth</span></div>
        </div>
      </div>`,
      keyPoints: [
        'This role is 60% leadership, 40% technical — own that framing',
        'Your ability to drive organizational change is your scarcest and most valuable skill',
        'Safety discipline is non-negotiable — protect it at all costs',
        'Continue to Module 13: Stakeholder Communication'
      ]
    }
  ],
  glossary: [
    { term: 'Co-Pilot Framing', definition: 'Positioning AI as a support tool that enhances operator decision-making rather than replacing it — the most effective adoption framing.' },
    { term: 'Change Management', definition: 'Structured approach to transitioning individuals and organizations from current state to desired future state, managing resistance and building adoption.' },
    { term: 'AI CoE', definition: 'Center of Excellence — dedicated internal team responsible for AI standards, capability building, and reusable tools across the organization.' },
    { term: 'Model Utilization Rate', definition: 'Percentage of time AI model recommendations are acted upon by operators — a key indicator of real-world adoption quality.' }
  ]
};
