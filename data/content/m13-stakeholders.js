/* Module M13 — Stakeholder Communication */
window.MODULE_M13 = {
  id: 'm13',
  title: 'Stakeholder Communication',
  subtitle: 'Win the Room, Every Time',
  sections: [
    {
      id: 'm13-s01',
      type: 'intro',
      title: 'Communication Is Your Superpower',
      content: `<p>You can have the best AI strategy in the world — and fail because you couldn't get a refinery operations director to trust you, or couldn't explain the business case to a CFO in three minutes. Communication is the multiplier on all your technical knowledge.</p>
      <p class="mt-3">This module covers the four key stakeholder archetypes in a refinery AI transformation, how to tailor your message for each, and the communication frameworks that BCG partners use to win the room.</p>`,
      keyPoints: [
        'Communication is the multiplier on all your technical knowledge',
        'Different stakeholders need fundamentally different messages about the same initiative',
        'The Pyramid Principle (answer first) is the single most important communication tool',
        'Credibility comes from domain knowledge + listening + honest assessment'
      ]
    },
    {
      id: 'm13-s02',
      type: 'concept',
      title: 'The Four Stakeholder Archetypes',
      content: `<p>Every refinery AI transformation involves four primary stakeholder archetypes. Each needs a different conversation:</p>
      <div class="mt-4 space-y-3">
        <div class="p-4 bg-amber-900/15 border border-amber-700/30 rounded-xl">
          <p class="font-bold text-amber-300 text-sm">The Executive Sponsor (CEO/COO) 👔</p>
          <p class="text-slate-300 text-sm mt-1"><strong>What they care about:</strong> Competitive advantage, cost reduction, risk management, strategic optionality.<br><strong>Your message:</strong> "$45M annual benefit, 14-month payback, builds a capability that compounds over time. Here's what peer refineries are doing — we risk falling behind."<br><strong>Format:</strong> 10-slide deck, 30 minutes. Lead with the number. Details in appendix.</p>
        </div>
        <div class="p-4 bg-blue-900/15 border border-blue-700/30 rounded-xl">
          <p class="font-bold text-blue-300 text-sm">The Operations Leader (VP Operations/Chief Refinery Officer) 🏭</p>
          <p class="text-slate-300 text-sm mt-1"><strong>What they care about:</strong> Reliability, safety, team impact, operational control.<br><strong>Your message:</strong> "This AI works alongside your team, not instead of them. It reduces operator fatigue on routine monitoring and catches what humans miss at 3am. Your people stay in control."<br><strong>Format:</strong> Plant walk + working session. Show, don't tell.</p>
        </div>
        <div class="p-4 bg-emerald-900/15 border border-emerald-700/30 rounded-xl">
          <p class="font-bold text-emerald-300 text-sm">The Control Room Operator 👷</p>
          <p class="text-slate-300 text-sm mt-1"><strong>What they care about:</strong> Job security, ease of use, reliability, not being blamed when AI is wrong.<br><strong>Your message:</strong> "You are the expert. This tool gives you better information, faster. You always have override. We designed this with operators, not for operators."<br><strong>Format:</strong> One-on-one conversation + hands-on demo. Earn trust personally.</p>
        </div>
        <div class="p-4 bg-purple-900/15 border border-purple-700/30 rounded-xl">
          <p class="font-bold text-purple-300 text-sm">The IT/OT Manager 💻</p>
          <p class="text-slate-300 text-sm mt-1"><strong>What they care about:</strong> Cybersecurity, system stability, integration complexity, maintenance burden.<br><strong>Your message:</strong> "We follow IEC 62443. Data flows one-way through DMZ. No direct OT network access. We tested integration in a sandbox. Here's the rollback plan."<br><strong>Format:</strong> Technical deep-dive. Come with architecture diagrams and security specifications.</p>
        </div>
      </div>`,
      keyPoints: [
        'Executives want numbers and strategic positioning — never lead with technology',
        'Operations leaders respond to "control" and "safety" framing above all else',
        'Operators need to feel respected and protected — earn trust individually',
        'IT/OT managers need technical rigor and security evidence — not high-level reassurances'
      ]
    },
    {
      id: 'm13-s03',
      type: 'deep-dive',
      title: 'The Pyramid Principle in Action',
      content: `<p>The Pyramid Principle (Minto) is the communication framework used by all major consulting firms. It states: lead with your answer/recommendation, then support it with arguments, then support arguments with data.</p>
      <div class="mt-4 p-4 bg-slate-900/50 rounded-xl border border-slate-700">
        <p class="font-semibold text-white text-sm mb-3">Structure of a Pyramid Communication</p>
        <div class="space-y-2 text-sm">
          <div class="p-2 bg-amber-900/30 rounded text-center"><strong class="text-amber-300">TOP: The Answer (1 sentence)</strong><br><span class="text-slate-300 text-xs">"We recommend deploying predictive maintenance AI first — it delivers $12M/year with 8-month payback."</span></div>
          <div class="p-2 bg-blue-900/30 rounded text-center"><strong class="text-blue-300">SECOND: 3 Supporting Arguments</strong><br><span class="text-slate-300 text-xs">1. Highest ROI. 2. Fastest to deploy. 3. Lowest organizational risk.</span></div>
          <div class="p-2 bg-slate-700/50 rounded text-center"><strong class="text-slate-300">BASE: Evidence for each argument</strong><br><span class="text-slate-400 text-xs">Data, benchmarks, case studies, calculations that prove each argument</span></div>
        </div>
      </div>
      <div class="mt-4 p-4 bg-red-900/20 border border-red-700/40 rounded-xl text-sm">
        <p class="font-semibold text-red-300">Common Mistakes to Avoid</p>
        <ul class="text-slate-300 mt-2 space-y-1">
          <li>→ Starting with context/background before the answer (bury the lead)</li>
          <li>→ More than 3 supporting arguments (cognitive overload)</li>
          <li>→ Arguments that don't directly prove the top-line recommendation</li>
          <li>→ Using technical jargon with non-technical audiences</li>
        </ul>
      </div>`,
      keyPoints: [
        "Lead with the answer — executives have 30 seconds for your opening, not 30 minutes",
        'Three arguments max — research shows three is the optimal number for persuasion',
        'Data supports arguments, arguments support the answer — never lead with data',
        'Practice the "elevator version": can you deliver the recommendation in 2 minutes?'
      ]
    },
    {
      id: 'm13-s04',
      type: 'concept',
      title: 'Handling Resistance and Tough Questions',
      content: `<p>Expect these questions and have your answers ready:</p>
      <div class="mt-4 space-y-3 text-sm">
        <div class="p-4 bg-slate-900/50 rounded-xl border border-slate-700">
          <p class="font-bold text-red-300">"We tried AI before and it failed."</p>
          <p class="text-slate-300 mt-1"><strong>Your answer:</strong> "Tell me what happened — I want to understand why. [Listen carefully.] Based on what you've shared, I believe the issues were X and Y. Our approach addresses these differently by [specific solution]. Let me show you evidence from similar situations."</p>
        </div>
        <div class="p-4 bg-slate-900/50 rounded-xl border border-slate-700">
          <p class="font-bold text-red-300">"This will replace my operators' jobs."</p>
          <p class="text-slate-300 mt-1"><strong>Your answer:</strong> "The refineries that have deployed similar tools haven't reduced headcount — they've redeployed operators from routine monitoring to higher-value problem-solving. The goal is to make your team more effective, not smaller. Safety-critical oversight stays with humans."</p>
        </div>
        <div class="p-4 bg-slate-900/50 rounded-xl border border-slate-700">
          <p class="font-bold text-red-300">"How do I know the ROI numbers are real?"</p>
          <p class="text-slate-300 mt-1"><strong>Your answer:</strong> "I recommend we baseline current performance now and track the delta after deployment. We'll set up an A/B test — parallel units, one with AI, one without — for the first 90 days. You'll see the difference with your own data."</p>
        </div>
      </div>`,
      keyPoints: [
        "Acknowledge resistance, don't dismiss it — validation builds trust",
        'The job displacement concern must be addressed directly and honestly',
        'Offering a 90-day A/B test de-risks the commitment and builds credibility',
        'Never oversell — credibility is your most valuable long-term asset'
      ]
    },
    {
      id: 'm13-s05',
      type: 'summary',
      title: 'Communication Module Summary',
      content: `<p>You are now equipped to win the room with any stakeholder. Key takeaways:</p>
      <div class="mt-4 space-y-2">
        <div class="flex gap-3 p-3 bg-blue-900/20 border border-blue-700/30 rounded-xl">
          <span>🎯</span><div><strong class="text-white text-sm">Tailor the Message</strong><br><span class="text-slate-400 text-xs">Executive = numbers · Operations = control · Operator = respect · IT = security</span></div>
        </div>
        <div class="flex gap-3 p-3 bg-blue-900/20 border border-blue-700/30 rounded-xl">
          <span>🔺</span><div><strong class="text-white text-sm">Pyramid Principle</strong><br><span class="text-slate-400 text-xs">Answer first → 3 arguments → supporting evidence</span></div>
        </div>
        <div class="flex gap-3 p-3 bg-blue-900/20 border border-blue-700/30 rounded-xl">
          <span>🛡️</span><div><strong class="text-white text-sm">Handle Resistance Well</strong><br><span class="text-slate-400 text-xs">Acknowledge → Understand root cause → Address specifically → Propose evidence</span></div>
        </div>
      </div>`,
      keyPoints: [
        'Communication skill is the #1 differentiator for senior consultants',
        'The Pyramid Principle applies to every communication: emails, slides, verbal updates',
        'Your credibility compounds with every stakeholder interaction — protect it',
        'Final module: Interview Scenarios — put it all together'
      ]
    }
  ],
  diagram: {
    title: 'The Pyramid Principle — Answer First Communication',
    description: 'Lead with your recommendation, support with exactly 3 arguments, ground each argument in evidence. Used by McKinsey, BCG, Bain, and every top consulting firm.',
    svgContent: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 860 360" font-family="Arial, sans-serif">' +
      '<rect width="860" height="360" fill="#0f172a" rx="10"/>' +
      '<text x="430" y="28" text-anchor="middle" font-size="14" font-weight="bold" fill="#f1f5f9">The Pyramid Principle — Answer First Communication</text>' +
      // Pyramid top
      '<polygon points="430,48 530,148 330,148" fill="#f59e0b" opacity="0.85"/>' +
      '<text x="430" y="100" text-anchor="middle" font-size="11" font-weight="bold" fill="#0f172a">THE ANSWER</text>' +
      '<text x="430" y="116" text-anchor="middle" font-size="9" fill="#1e293b">1 clear recommendation</text>' +
      '<text x="430" y="130" text-anchor="middle" font-size="9" fill="#1e293b">Lead with this — always</text>' +
      // Middle tier (3 arguments)
      '<polygon points="330,154 530,154 600,234 260,234" fill="#3b82f6" opacity="0.7"/>' +
      '<text x="430" y="185" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">3 SUPPORTING ARGUMENTS</text>' +
      '<text x="430" y="202" text-anchor="middle" font-size="9" fill="#e2e8f0">Argument 1 · Argument 2 · Argument 3</text>' +
      '<text x="430" y="218" text-anchor="middle" font-size="9" fill="#bfdbfe">Each directly proves the top-line answer</text>' +
      // Bottom tier (evidence)
      '<polygon points="260,240 600,240 700,320 160,320" fill="#1e40af" opacity="0.6"/>' +
      '<text x="430" y="270" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">SUPPORTING EVIDENCE</text>' +
      '<text x="430" y="287" text-anchor="middle" font-size="9" fill="#bfdbfe">Data · Benchmarks · Case studies · Calculations</text>' +
      '<text x="430" y="303" text-anchor="middle" font-size="9" fill="#93c5fd">Each piece of evidence supports exactly ONE argument above it</text>' +
      // Labels on left side
      '<text x="145" y="104" text-anchor="end" font-size="10" fill="#fbbf24" font-weight="bold">Answer</text>' +
      '<text x="145" y="196" text-anchor="end" font-size="10" fill="#93c5fd" font-weight="bold">Arguments</text>' +
      '<text x="145" y="282" text-anchor="end" font-size="10" fill="#6ea8fe" font-weight="bold">Evidence</text>' +
      // Arrows from labels
      '<line x1="150" y1="100" x2="328" y2="100" stroke="#fbbf24" stroke-width="1" stroke-dasharray="3,2"/>' +
      '<line x1="150" y1="192" x2="328" y2="192" stroke="#93c5fd" stroke-width="1" stroke-dasharray="3,2"/>' +
      '<line x1="150" y1="278" x2="258" y2="278" stroke="#6ea8fe" stroke-width="1" stroke-dasharray="3,2"/>' +
      // "Anti-pattern" box on right
      '<rect x="625" y="50" width="210" height="240" fill="#1e293b" rx="8" stroke="#ef4444" stroke-width="1.5"/>' +
      '<text x="730" y="72" text-anchor="middle" font-size="11" font-weight="bold" fill="#ef4444">❌ AVOID: Bottom-Up</text>' +
      '<text x="730" y="92" text-anchor="middle" font-size="9" fill="#94a3b8">Start with context...</text>' +
      '<text x="730" y="108" text-anchor="middle" font-size="9" fill="#94a3b8">Then background...</text>' +
      '<text x="730" y="124" text-anchor="middle" font-size="9" fill="#94a3b8">Then data point 1...</text>' +
      '<text x="730" y="140" text-anchor="middle" font-size="9" fill="#94a3b8">Then data point 2...</text>' +
      '<text x="730" y="156" text-anchor="middle" font-size="9" fill="#94a3b8">Then analysis...</text>' +
      '<text x="730" y="172" text-anchor="middle" font-size="9" fill="#94a3b8">Then more context...</text>' +
      '<text x="730" y="200" text-anchor="middle" font-size="10" fill="#ef4444" font-weight="bold">...finally the answer</text>' +
      '<text x="730" y="220" text-anchor="middle" font-size="9" fill="#64748b">(by which point your</text>' +
      '<text x="730" y="236" text-anchor="middle" font-size="9" fill="#64748b">audience has checked out)</text>' +
      // Note at bottom
      '<text x="430" y="348" text-anchor="middle" font-size="10" fill="#64748b">Developed by Barbara Minto at McKinsey. Used by BCG, Bain, and every major consulting firm worldwide.</text>' +
      '</svg>'
  },
  video: {
    videoId: 'eIho2S0ZahI',
    title: 'How to Speak So That People Want to Listen — Julian Treasure (TED)',
    start: 0,
    end: 330,
    placement: 'm13-s03',
    description: "Julian Treasure's TED talk on the seven deadly sins of speaking and how to command a room. Essential for any consultant who needs to influence senior refinery executives and skeptical operators."
  },
  glossary: [
    { term: 'Pyramid Principle', definition: 'Communication framework: lead with the answer/recommendation, then provide supporting arguments, then evidence. Developed by Barbara Minto at McKinsey.' },
    { term: 'Stakeholder Mapping', definition: 'Process of identifying all parties affected by or influencing a project, their interests, and appropriate engagement strategies.' },
    { term: 'RACI', definition: 'Responsible, Accountable, Consulted, Informed — framework for clarifying roles and responsibilities on a project.' },
    { term: 'Executive Sponsorship', definition: 'Senior leader who provides organizational backing, budget authority, and conflict resolution for a transformation program.' }
  ]
};
