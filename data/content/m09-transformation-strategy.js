window.MODULE_M09 = {
  id: 'm09',
  title: 'AI Transformation Strategy',
  subtitle: 'The Consulting Playbook Applied to Industrial AI',
  day: 3,
  estimatedMinutes: 75,
  xpReward: 175,
  icon: '🎯',
  sections: [
    {
      id: 'm09-s01',
      title: 'Your Home Turf — Applied in a New Arena',
      type: 'intro',
      content: `<p>Of all the modules in this course, this one maps most directly to your existing skills. You have spent six years at BCG structuring transformation programs, building business cases, managing stakeholders, and translating strategy into executable roadmaps. This module does not teach you strategy. <strong>It gives you the O&amp;G-specific content to apply the strategic skills you already have.</strong></p>
<p>A note on the interview: when you walk into that room, the panel will test your industry knowledge in technical modules. But when they ask "How would you approach leading this transformation?" — <em>that</em> is your home turf. The interviewers will likely have seen AI transformation programs fail. They will be looking for someone who understands why programs fail, not just why they should succeed.</p>
<p>This module prepares you to answer questions like:</p>
<ul>
  <li>"How would you structure the first 18 months?"</li>
  <li>"How do you build the business case for AI when the data quality is poor?"</li>
  <li>"How do you handle the plant operators who don't trust AI systems?"</li>
  <li>"We've already had three AI pilots that went nowhere. Why would yours be different?"</li>
</ul>
<p>The answers to all of these questions live in this module. Take notes on the frameworks — they are designed to be used directly in interview responses and in your first 90-day plan.</p>`,
      keyTerms: ['AI Transformation', 'Digital Transformation', 'Transformation Roadmap']
    },
    {
      id: 'm09-s02',
      title: 'Precision of Language: Transformation vs Digitalization vs Automation',
      type: 'concept',
      content: `<p>In your interview and in your first stakeholder meetings, you will hear these terms used interchangeably. They are not the same thing. Using them precisely signals that you understand what you are actually trying to accomplish — and what you are not.</p>
<h3>Automation</h3>
<p>Replacing a specific human task with a machine. Installing an APC controller to hold a column temperature at setpoint. Automating the generation of a daily shift report. Running a scheduled SQL query to produce a KPI dashboard. These are <strong>isolated, specific improvements</strong>. They are valuable, but they don't change how the business fundamentally operates. Automation has been happening in refineries since the 1970s.</p>
<h3>Digitalization</h3>
<p>Converting analog information and processes to digital form — and making that data available for use. Moving paper maintenance records into a CMMS. Making sensor data electronically accessible via a historian. Enabling engineers to query process data from their laptops instead of the control room terminal. Digitalization <strong>creates the data foundation</strong> that makes everything else possible. Without it, AI transformation cannot happen.</p>
<h3>Digital Transformation</h3>
<p>Using digital technologies to <strong>fundamentally change how the business operates and creates value</strong>. Not just digitizing existing processes — rethinking them entirely. A refinery that has digitally transformed doesn't just have digital records of maintenance — it has predictive maintenance that eliminates most unplanned shutdowns. It doesn't just have process data — it has optimization models that continuously improve yield. The key word is <em>fundamentally</em>.</p>
<h3>AI Transformation</h3>
<p>A specific form of digital transformation where AI and machine learning enable capabilities that were <strong>not previously possible at any cost</strong>. Predictive models that detect equipment failure weeks in advance. Prescriptive optimization that finds setpoint combinations no human engineer could identify. Potentially autonomous operation of certain process loops with human oversight.</p>
<p>The critical framing for your interview: <strong>"We are not here to automate existing processes. We are here to reinvent how this refinery creates value."</strong> This sentence distinguishes you from every IT project manager who calls their work "transformation."</p>`,
      keyTerms: ['AI Transformation', 'Digital Transformation', 'Digitalization', 'Foundation Stage']
    },
    {
      id: 'm09-s03',
      title: 'The 4-Stage AI Transformation Framework',
      type: 'concept',
      content: `<p>The most common AI transformation failure mode is <strong>skipping Stage 1</strong>. Companies want to jump to building an AI platform before they have clean, reliable, accessible data. This is the equivalent of building a skyscraper on a swamp. The framework below reflects the actual dependencies of industrial AI — each stage genuinely enables the next.</p>
<h3>Stage 1 — Foundation (Year 0-1)</h3>
<p><strong>What it is:</strong> Getting the data and control infrastructure ready for AI. This is unglamorous work that nobody wants to do, but everything depends on it.</p>
<p><strong>Key activities:</strong> Data historian optimization (PI System health, tag cleanup, gap filling), APC and RTO health assessment and tuning, IT/OT network integration architecture, operational data lake deployment, data quality baseline establishment, basic process performance dashboards.</p>
<p><strong>Why it matters:</strong> If your historian has 30% missing data on critical tags, no AI model trained on that data will be reliable. If your APC controllers are in manual 40% of the time, you don't have a stable baseline to optimize against. Fix the foundation first.</p>
<h3>Stage 2 — Point Solutions (Year 1-2)</h3>
<p><strong>What it is:</strong> Deploy 3-5 high-value, relatively lower-complexity AI applications that prove the value of AI and build organizational trust.</p>
<p><strong>Key activities:</strong> Predictive maintenance on 3-5 critical rotating equipment assets (pumps, compressors), quality prediction soft sensors for 2-3 key product streams, energy consumption anomaly detection, first MLOps platform deployment to support these use cases.</p>
<p><strong>Why this stage:</strong> These are your <em>credibility builders</em>. Before you ask for a $30M platform investment, you need to show that AI works at this refinery, with this data, for these operators.</p>
<h3>Stage 3 — Platform (Year 2-3)</h3>
<p><strong>What it is:</strong> Build the horizontal infrastructure that allows you to scale from 5 use cases to 50 without rebuilding everything from scratch each time.</p>
<p><strong>Key activities:</strong> Full MLOps platform with CI/CD for model retraining, reusable data pipelines for common data sources, standardized model deployment and monitoring processes, model registry across all deployed AI, self-service tools that allow process engineers to test hypotheses without data science support.</p>
<h3>Stage 4 — Integrated Intelligence (Year 3-5)</h3>
<p><strong>What it is:</strong> The refinery operates at a fundamentally different performance level. AI is embedded in daily operations, not a separate "AI program."</p>
<p><strong>Key activities:</strong> Cross-functional AI optimization (e.g., planning-to-operations closed loop), digital twin integration for scenario planning, AI-assisted operations center, autonomous optimization of specific process loops with human oversight. The transformation leader's job shifts from building to governing.</p>`,
      keyTerms: ['Foundation Stage', 'Point Solutions', 'MLOps Platform', 'Integrated Intelligence']
    },
    {
      id: 'm09-s04',
      title: 'Building the Business Case',
      type: 'deep-dive',
      content: `<p>Your business case must be rigorous enough to pass a CFO's scrutiny and simple enough to communicate in 5 minutes to an operations VP. The numbers below are industry benchmarks — use them as starting points, then validate against plant-specific data.</p>
<h3>Revenue Uplift</h3>
<p><strong>Yield improvement:</strong> AI process optimization typically delivers 0.5–1.5% better product yield through more precise control of fractionation, blending, and conversion operations. <em>Reference calculation:</em> At 100,000 bbl/day throughput, $5/bbl margin, and 1% yield improvement: $5M × 365 = <strong>$18M/year</strong>. This is one of the largest single value levers in refinery AI.</p>
<p><strong>Throughput improvement:</strong> 1–3% better utilization from reduced unplanned downtime driven by predictive maintenance. A refinery running at 90% utilization that improves to 91.5% on a 100,000 bbl/day unit adds ~1,500 bbl/day of production capacity — potentially <strong>$10-15M/year</strong>.</p>
<h3>Cost Reduction</h3>
<p><strong>Maintenance cost:</strong> The shift from reactive/scheduled to predictive maintenance typically reduces total maintenance spend by 15–25%. For a large refinery spending $100M/year on maintenance, that is <strong>$15–25M in annual savings</strong>. The mechanism: you catch failures early, when they are cheap to fix, rather than after catastrophic failure.</p>
<p><strong>Energy cost:</strong> AI energy optimization delivers 5–15% reduction in energy consumption. On a $100M annual energy bill, that is <strong>$5–15M/year</strong>. Energy is typically 60–70% of a refinery's variable operating cost — this is a major lever.</p>
<p><strong>Lab and quality costs:</strong> Soft sensors replace some laboratory testing frequency. <strong>$1–3M/year</strong> at scale, plus faster feedback loops that reduce off-spec production.</p>
<h3>Risk Reduction (Often Underweighted in Business Cases)</h3>
<p>A single major safety incident at a refinery costs $50–500M or more in equipment damage, lost production, environmental remediation, regulatory fines, and reputational damage. Anomaly detection AI that reduces the probability of one major incident per decade is worth $5–50M/year in expected value. <strong>Include this in your business case — most AI programs ignore it, which understates total value.</strong></p>
<h3>How to Structure the Business Case for Approval</h3>
<p>Do not try to quantify all of Stage 4 upfront — nobody will believe numbers projected 5 years out. Instead: (1) build detailed, defensible ROI models for 2–3 Stage 2 use cases; (2) show the total portfolio value as a range; (3) frame Stage 1 investment as "infrastructure to unlock the portfolio." This approach asks for the right amount of money at the right time, with evidence at each stage gate.</p>`,
      keyTerms: ['Business Case', 'Yield Improvement', 'Predictive Maintenance', 'Value vs Feasibility Matrix']
    },
    {
      id: 'm09-s05',
      title: 'Stakeholder Mapping and Change Management',
      type: 'deep-dive',
      content: `<p>AI transformation is a people problem as much as a technology problem. The technology is the easy part. Getting people to trust it, use it, and ultimately build their workflows around it — that is the hard part. Your BCG background gives you a foundation here, but industrial operations have specific stakeholder dynamics that differ from corporate transformations.</p>
<h3>Champions — Nurture and Amplify</h3>
<ul>
  <li><strong>Progressive CDO/CTO:</strong> Often already has a mandate for digital transformation from the board. They need an operational ally who can translate technology into plant outcomes. Make them your sponsor.</li>
  <li><strong>Innovation-minded operations managers:</strong> Every large refinery has 1-2 operations managers who are curious about AI and frustrated by what they see as missed opportunities. Find them early. Turn them into visible advocates. Their endorsement with the operator workforce is worth more than any executive mandate.</li>
  <li><strong>CFO:</strong> Usually a potential champion if you give them the right framing. The CFO's language is ROI, payback period, and risk-adjusted NPV. Speak that language fluently.</li>
</ul>
<h3>Skeptics — Address Concerns, Build Trust Systematically</h3>
<ul>
  <li><strong>Plant operators:</strong> The highest-stakes stakeholder group. Their trust determines whether AI gets used or gets switched to "manual override" permanently. Their concern: "This will replace my job" or "This will make my job harder." Counter: involve them in design from day one. Have them define what a useful alert looks like. Run pilots at their consoles. Show them that AI makes <em>their</em> job easier, not a replacement for their judgment.</li>
  <li><strong>Maintenance engineers:</strong> "Our equipment is unique. No algorithm can know this compressor better than I do after 20 years." Counter: "You're right that your expertise is irreplaceable. What this does is give you 24/7 monitoring of 200 variables simultaneously — something that's impossible to do manually. It extends your expertise, it doesn't replace it."</li>
  <li><strong>IT teams:</strong> Security and integration concerns are legitimate. Address them with technical depth, not dismissal. Bring in the architecture early.</li>
</ul>
<h3>Blockers — Manage Carefully</h3>
<ul>
  <li><strong>Operations managers who've seen AI fail before:</strong> Ask them what failed and why — genuinely. Understand the specific failure mode. Then explain precisely what is different this time. Do not be defensive.</li>
  <li><strong>Union representatives (in unionized facilities):</strong> Involve them early. The framing that resonates: AI is about safety improvement and reducing the cognitive burden of monitoring. "We want your members to be able to focus on complex problems, not stare at 500 dashboards."</li>
</ul>
<h3>Kotter's 8 Steps Applied to Refinery AI Transformation</h3>
<ol>
  <li><strong>Create urgency</strong> — Competitive benchmarking showing peers achieving 2-3% margin improvement through AI</li>
  <li><strong>Build a guiding coalition</strong> — CDO + Operations VP + CISO + Finance Director</li>
  <li><strong>Form strategic vision</strong> — The 4-stage roadmap with clear milestones</li>
  <li><strong>Communicate the vision</strong> — Town halls, supervisor briefings, monthly progress updates</li>
  <li><strong>Remove barriers</strong> — Data access agreements, organizational structures, budget cycles</li>
  <li><strong>Generate quick wins</strong> — First predictive maintenance deployments at 6 months</li>
  <li><strong>Sustain acceleration</strong> — Expand across additional units and sites</li>
  <li><strong>Institute change</strong> — AI embedded in standard operating procedures, not a separate "program"</li>
</ol>`,
      keyTerms: ['Kotter Model', 'Change Management', 'Stakeholder Mapping', 'Quick Win']
    },
    {
      id: 'm09-s06',
      title: 'Quick Wins Strategy — The First Six Months',
      type: 'concept',
      content: `<p>The first six months of your AI transformation define whether you get budget for Year 2. This is not hyperbole. In most industrial organizations, the AI transformation program is still on probation during the first year. You need a visible, credible, quantifiable win before the annual budget cycle. Here is how to engineer one.</p>
<h3>Use Case Selection Criteria for Quick Wins</h3>
<p>Apply all four criteria simultaneously — a use case that fails on any one of them is not a quick win:</p>
<ul>
  <li><strong>High value:</strong> The ROI is clear and the business impact is meaningful. Ideally $5M+ per year so it can't be dismissed as "interesting but not material."</li>
  <li><strong>Low complexity:</strong> Data is available in the historian. The technical approach is well-established (not cutting-edge research). The stakeholders are willing. Integration risk is manageable.</li>
  <li><strong>Visible impact:</strong> The result is something people can see, understand, and talk about. "The AI flagged the bearing failure on Compressor C-201 two weeks before it happened" is a story. "The AI improved the loss function by 3%" is not.</li>
  <li><strong>Short timeline:</strong> Results achievable in 3–4 months so they are visible before budget conversations happen.</li>
</ul>
<h3>The Classic Quick Win: Predictive Maintenance on Rotating Equipment</h3>
<p>Predictive maintenance on 2–3 critical pumps or compressors is the gold standard quick win for most refineries because:</p>
<ul>
  <li>Vibration, temperature, and pressure data is almost always available in the historian</li>
  <li>The technical approach (anomaly detection + classification models) is well-established</li>
  <li>Operators can verify alerts — when the AI says "this bearing is degrading," a technician can go look at it and confirm</li>
  <li>A single avoided compressor failure saves $500K–$2M in repair costs and lost production</li>
  <li>Results are demonstrable within 4–6 months of deployment</li>
</ul>
<h3>What to Avoid</h3>
<p>Do not start with: complex process optimization that requires 12 months of data collection before training; a use case that requires new sensor installation (extends timeline by 6-12 months); anything that requires significant DCS modifications; or any use case where the data quality is unknown. Save the ambitious problems for Stage 3 when you have organizational credibility.</p>`,
      keyTerms: ['Quick Win', 'Predictive Maintenance', 'Portfolio Management', 'POC Trap']
    },
    {
      id: 'm09-s07',
      title: 'Why Transformations Fail — The Autopsy',
      type: 'deep-dive',
      content: `<p>If you are asked in your interview "We've had AI pilots that went nowhere — why would yours be different?" — this section is your answer. Understanding failure modes in detail is what separates a credible transformation leader from someone who is optimistic but naive.</p>
<h3>The POC Trap</h3>
<p>The most common failure in industrial AI: <strong>organizations accumulate 15-25 proof-of-concept projects, none of which ever reach production.</strong> POCs are easy to start — data scientists love exploring new problems, business units love seeing demos, and executives love the optics of "running AI pilots." But POCs have a kill date problem: it's politically difficult to stop them, and technically complex to scale them.</p>
<p><strong>The fix:</strong> Limit active POCs to 5 at a time. Every POC must have: (a) a clear production path — what would it take to deploy this in production? (b) specific go/no-go criteria evaluated at 8 weeks; (c) a named business owner who will be accountable for the production deployment. If no one wants to own it in production, kill the POC.</p>
<h3>Platform Before Foundation</h3>
<p>Building a sophisticated AI platform when the underlying data quality is terrible. The $10M Databricks deployment with beautiful dashboards that show 40% missing data and sensor tags that haven't been calibrated since 2018. Garbage in, garbage out at enterprise scale. Fix the data first.</p>
<h3>Ignoring Operators</h3>
<p>AI tools designed by data scientists for data scientists. No UX research. No operator input in design. Results: alerts that fire constantly (alarm fatigue), recommendations in engineering units operators don't use, interfaces that require navigating 5 screens to act on an insight. The operator turns it off. End of AI program.</p>
<h3>Vendor Dependency</h3>
<p>One vendor "does everything." Two years in, all AI capability lives in the vendor's cloud, maintained by the vendor's engineers, understood only by the vendor's data scientists. The vendor raises prices 40%. You have no leverage. You have no alternative. You cannot even understand what the models are doing. <strong>Never allow yourself to be in this position.</strong></p>
<h3>No Governance</h3>
<p>AI deployed with no ownership, no performance monitoring, no regular review. Models that were accurate when deployed in 2022 are still running in 2025 with no one aware that they have degraded significantly due to equipment modifications and crude slate changes. Silent failures are the worst failures because nobody knows they are happening.</p>
<h3>Unrealistic Timelines</h3>
<p>"We will transform the refinery in 12 months." This promise guarantees disappointment. Industrial AI is slow because operational validation requires patience — you cannot run a predictive maintenance model for 3 weeks and claim it works. Set honest expectations: <strong>3 years for meaningful transformation, 5 years for integrated intelligence.</strong> Then overdeliver on milestones.</p>`,
      keyTerms: ['POC Trap', 'Vendor Lock-in', 'Portfolio Management', 'AI Transformation']
    },
    {
      id: 'm09-s08',
      title: 'Portfolio Management Framework',
      type: 'concept',
      content: `<p>As your AI program matures beyond the first 2-3 use cases, you will face a portfolio management problem: dozens of potential use cases competing for limited data scientist time, budget, and organizational attention. The 2×2 portfolio framework gives you a systematic way to make these allocation decisions.</p>
<h3>The Value vs. Feasibility Matrix</h3>
<p>Place every potential AI use case on a 2×2 matrix with:</p>
<ul>
  <li><strong>Y-axis: Business Value</strong> — estimated annual financial impact (yield, cost reduction, risk reduction)</li>
  <li><strong>X-axis: Feasibility</strong> — composite of: data availability and quality, technical complexity, stakeholder readiness, integration risk</li>
</ul>
<h3>The Four Quadrants and Your Strategy for Each</h3>
<ul>
  <li><strong>Quick Wins (High Value, High Feasibility) — Do First:</strong> These are the predictive maintenance use cases, the soft sensors where data exists and the business case is clear. Attack these aggressively in Stage 2. They fund the rest of the program.</li>
  <li><strong>Strategic Bets (High Value, Lower Feasibility) — Invest to Make Feasible:</strong> These are the high-value use cases blocked by data gaps, technical complexity, or organizational resistance. For each one, identify the specific barriers: "We need 12 months of post-modification historian data" or "We need the operations VP's sponsorship." Create a plan to address the barriers, then move these into Quick Wins when ready.</li>
  <li><strong>Incremental (Lower Value, High Feasibility) — Do Opportunistically:</strong> Easy to build, but not worth prioritizing. These are fine to let a junior data scientist tackle as a learning project, but don't allocate senior resources.</li>
  <li><strong>Avoid (Lower Value, Low Feasibility) — Don't Touch Yet:</strong> The cost of pursuing these exceeds the value. They go to the bottom of the backlog indefinitely.</li>
</ul>
<h3>Portfolio Governance Cadence</h3>
<p>Review the portfolio quarterly with the AI Steering Committee (CDO, Operations VP, Finance). Kill POCs that have missed their go/no-go criteria. Accelerate use cases where early results exceed projections. Promote feasibility-constrained use cases where barriers have been removed. The quarterly review is also where you demonstrate that you are managing this program like a business, not like a research lab.</p>`,
      keyTerms: ['Value vs Feasibility Matrix', 'Portfolio Management', 'POC Trap', 'Quick Win']
    },
    {
      id: 'm09-s09',
      title: 'The AI Transformation Leader\'s Core Framework in 5 Principles',
      type: 'summary',
      content: `<p>These five principles are your synthesis of everything in this module. Each one is stated as a memorable headline you can use verbatim in an interview, in a board presentation, or in your first-week kickoff meeting with the operations team.</p>
<h3>Principle 1: "Foundation Before Platform"</h3>
<p>No AI program succeeds without clean, reliable, accessible data and stable process control foundations. Before deploying a single model, audit data quality, fix historian gaps, and tune existing APC systems. The unsexy work of Stage 1 is what separates successful transformations from expensive proof-of-concept graveyards.</p>
<h3>Principle 2: "Win Small, Win Fast, Win Credibly"</h3>
<p>The first six months must produce a visible, verifiable result that operators and executives can point to. Not a dashboard. Not a pilot. A working production deployment that prevented a real failure or captured a real value opportunity. This earns the right to ask for Stage 3 platform investment.</p>
<h3>Principle 3: "Operators Trust AI When AI Makes Their Job Better"</h3>
<p>Every design decision, every UX choice, every alert configuration must be made with the question: "Does this make the operator's job better or worse?" AI that operators distrust is AI that gets switched off. Operators are not the obstacle to AI adoption — they are the gateway to it.</p>
<h3>Principle 4: "Manage the Portfolio Like a Business, Not a Research Lab"</h3>
<p>Set go/no-go criteria for every POC. Limit concurrent pilots. Kill what isn't working. Accelerate what is. Govern the AI portfolio with the same rigor you would apply to a capital investment portfolio. AI without governance degrades silently.</p>
<h3>Principle 5: "Build Capability, Not Dependency"</h3>
<p>Vendors are a starting point, not a permanent solution. Every vendor engagement must include knowledge transfer to internal teams. Your long-term goal is a refinery that can build, deploy, monitor, and improve its own AI models — with vendors providing tools and platforms, not owning the intellectual capability. Dependency is a strategic risk that compounds over time.</p>`,
      keyTerms: ['AI Transformation', 'Quick Win', 'Portfolio Management', 'Change Management', 'Kotter Model']
    }
  ],
  diagram: {
    title: 'The 4-Stage AI Transformation Roadmap',
    description: 'Horizontal timeline showing the four stages of industrial AI transformation, with key activities and expected outcomes per stage. Stage dependencies are shown.',
    svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 320">
  <!-- Background -->
  <rect width="900" height="320" fill="#f9fafb"/>

  <!-- Title -->
  <text x="450" y="28" text-anchor="middle" font-size="15" font-weight="bold" fill="#111827">AI Transformation Roadmap — 4 Stages to Industrial Intelligence</text>

  <!-- Stage 1: Foundation -->
  <rect x="20" y="50" width="195" height="220" rx="10" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
  <rect x="20" y="50" width="195" height="40" rx="10" fill="#d97706"/>
  <rect x="20" y="78" width="195" height="12" rx="0" fill="#d97706"/>
  <text x="117" y="72" text-anchor="middle" font-size="13" font-weight="bold" fill="white">Stage 1: Foundation</text>
  <text x="117" y="106" text-anchor="middle" font-size="11" font-weight="bold" fill="#92400e">Year 0–1</text>
  <line x1="40" y1="118" x2="196" y2="118" stroke="#d97706" stroke-width="1" stroke-dasharray="3,2"/>
  <text x="117" y="134" text-anchor="middle" font-size="10" font-weight="bold" fill="#78350f">KEY ACTIVITIES</text>
  <text x="30" y="151" font-size="10" fill="#451a03">• Historian health &amp; tag cleanup</text>
  <text x="30" y="167" font-size="10" fill="#451a03">• IT/OT integration architecture</text>
  <text x="30" y="183" font-size="10" fill="#451a03">• Operational data lake build</text>
  <text x="30" y="199" font-size="10" fill="#451a03">• APC/RTO health assessment</text>
  <text x="30" y="215" font-size="10" fill="#451a03">• Data quality baseline</text>
  <line x1="40" y1="226" x2="196" y2="226" stroke="#d97706" stroke-width="1" stroke-dasharray="3,2"/>
  <text x="117" y="242" text-anchor="middle" font-size="10" font-weight="bold" fill="#78350f">OUTCOME</text>
  <text x="117" y="258" text-anchor="middle" font-size="10" fill="#451a03">Reliable data foundation</text>
  <text x="117" y="272" text-anchor="middle" font-size="10" fill="#451a03">ready for AI deployment</text>

  <!-- Arrow 1->2 -->
  <polygon points="220,155 240,145 240,165" fill="#6b7280"/>
  <line x1="215" y1="155" x2="240" y2="155" stroke="#6b7280" stroke-width="2"/>

  <!-- Stage 2: Point Solutions -->
  <rect x="245" y="50" width="195" height="220" rx="10" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
  <rect x="245" y="50" width="195" height="40" rx="10" fill="#2563eb"/>
  <rect x="245" y="78" width="195" height="12" rx="0" fill="#2563eb"/>
  <text x="342" y="72" text-anchor="middle" font-size="13" font-weight="bold" fill="white">Stage 2: Point Solutions</text>
  <text x="342" y="106" text-anchor="middle" font-size="11" font-weight="bold" fill="#1e40af">Year 1–2</text>
  <line x1="265" y1="118" x2="421" y2="118" stroke="#2563eb" stroke-width="1" stroke-dasharray="3,2"/>
  <text x="342" y="134" text-anchor="middle" font-size="10" font-weight="bold" fill="#1e3a8a">KEY ACTIVITIES</text>
  <text x="255" y="151" font-size="10" fill="#1e3a8a">• Predictive maintenance AI</text>
  <text x="255" y="167" font-size="10" fill="#1e3a8a">• Quality soft sensors</text>
  <text x="255" y="183" font-size="10" fill="#1e3a8a">• Energy anomaly detection</text>
  <text x="255" y="199" font-size="10" fill="#1e3a8a">• First MLOps deployment</text>
  <text x="255" y="215" font-size="10" fill="#1e3a8a">• Operator trust building</text>
  <line x1="265" y1="226" x2="421" y2="226" stroke="#2563eb" stroke-width="1" stroke-dasharray="3,2"/>
  <text x="342" y="242" text-anchor="middle" font-size="10" font-weight="bold" fill="#1e3a8a">OUTCOME</text>
  <text x="342" y="258" text-anchor="middle" font-size="10" fill="#1e3a8a">3-5 working AI use cases.</text>
  <text x="342" y="272" text-anchor="middle" font-size="10" fill="#1e3a8a">Credibility established</text>

  <!-- Arrow 2->3 -->
  <polygon points="445,155 465,145 465,165" fill="#6b7280"/>
  <line x1="440" y1="155" x2="465" y2="155" stroke="#6b7280" stroke-width="2"/>

  <!-- Stage 3: Platform -->
  <rect x="470" y="50" width="195" height="220" rx="10" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
  <rect x="470" y="50" width="195" height="40" rx="10" fill="#16a34a"/>
  <rect x="470" y="78" width="195" height="12" rx="0" fill="#16a34a"/>
  <text x="567" y="72" text-anchor="middle" font-size="13" font-weight="bold" fill="white">Stage 3: Platform</text>
  <text x="567" y="106" text-anchor="middle" font-size="11" font-weight="bold" fill="#166534">Year 2–3</text>
  <line x1="490" y1="118" x2="646" y2="118" stroke="#16a34a" stroke-width="1" stroke-dasharray="3,2"/>
  <text x="567" y="134" text-anchor="middle" font-size="10" font-weight="bold" fill="#14532d">KEY ACTIVITIES</text>
  <text x="480" y="151" font-size="10" fill="#14532d">• Full MLOps platform</text>
  <text x="480" y="167" font-size="10" fill="#14532d">• Reusable data pipelines</text>
  <text x="480" y="183" font-size="10" fill="#14532d">• Model registry across sites</text>
  <text x="480" y="199" font-size="10" fill="#14532d">• Self-service tools for engineers</text>
  <text x="480" y="215" font-size="10" fill="#14532d">• Internal team capability build</text>
  <line x1="490" y1="226" x2="646" y2="226" stroke="#16a34a" stroke-width="1" stroke-dasharray="3,2"/>
  <text x="567" y="242" text-anchor="middle" font-size="10" font-weight="bold" fill="#14532d">OUTCOME</text>
  <text x="567" y="258" text-anchor="middle" font-size="10" fill="#14532d">Infrastructure to scale from</text>
  <text x="567" y="272" text-anchor="middle" font-size="10" fill="#14532d">5 use cases to 50+</text>

  <!-- Arrow 3->4 -->
  <polygon points="670,155 690,145 690,165" fill="#6b7280"/>
  <line x1="665" y1="155" x2="690" y2="155" stroke="#6b7280" stroke-width="2"/>

  <!-- Stage 4: Integrated Intelligence -->
  <rect x="695" y="50" width="185" height="220" rx="10" fill="#fdf4ff" stroke="#9333ea" stroke-width="2"/>
  <rect x="695" y="50" width="185" height="40" rx="10" fill="#9333ea"/>
  <rect x="695" y="78" width="185" height="12" rx="0" fill="#9333ea"/>
  <text x="787" y="65" text-anchor="middle" font-size="12" font-weight="bold" fill="white">Stage 4: Integrated</text>
  <text x="787" y="79" text-anchor="middle" font-size="12" font-weight="bold" fill="white">Intelligence</text>
  <text x="787" y="106" text-anchor="middle" font-size="11" font-weight="bold" fill="#6b21a8">Year 3–5</text>
  <line x1="715" y1="118" x2="866" y2="118" stroke="#9333ea" stroke-width="1" stroke-dasharray="3,2"/>
  <text x="787" y="134" text-anchor="middle" font-size="10" font-weight="bold" fill="#581c87">KEY ACTIVITIES</text>
  <text x="705" y="151" font-size="10" fill="#581c87">• Cross-functional AI loops</text>
  <text x="705" y="167" font-size="10" fill="#581c87">• Digital twin integration</text>
  <text x="705" y="183" font-size="10" fill="#581c87">• AI-assisted operations center</text>
  <text x="705" y="199" font-size="10" fill="#581c87">• Autonomous optimization</text>
  <text x="705" y="215" font-size="10" fill="#581c87">  (supervised) loops</text>
  <line x1="715" y1="226" x2="866" y2="226" stroke="#9333ea" stroke-width="1" stroke-dasharray="3,2"/>
  <text x="787" y="242" text-anchor="middle" font-size="10" font-weight="bold" fill="#581c87">OUTCOME</text>
  <text x="787" y="258" text-anchor="middle" font-size="10" fill="#581c87">Refinery operates at a</text>
  <text x="787" y="272" text-anchor="middle" font-size="10" fill="#581c87">fundamentally higher level</text>

  <!-- Warning banner at bottom -->
  <rect x="20" y="285" width="860" height="28" rx="6" fill="#fef2f2" stroke="#dc2626" stroke-width="1.5"/>
  <text x="450" y="304" text-anchor="middle" font-size="11" font-weight="bold" fill="#dc2626">Most Common Failure: Skipping Stage 1 — Companies jump to Stage 3 without fixing data quality and control foundations</text>
</svg>`
  },
  video: {
    videoId: '2ahpOAFpwGo',
    title: 'Watch: What Digital Transformation Actually Means',
    start: 30,
    end: 270,
    placement: 'm09-s02',
    description: 'What digital transformation actually means for industrial organizations — cutting through the buzzwords to what changes and why it matters'
  },
  glossary: [
    { term: 'AI Transformation', definition: 'A form of digital transformation where AI and ML enable capabilities not previously possible — predictive, prescriptive, and potentially autonomous operation of industrial processes.' },
    { term: 'Digital Transformation', definition: 'Using digital technologies to fundamentally change how a business operates and creates value — not just digitizing existing processes, but rethinking them.' },
    { term: 'Digitalization', definition: 'Converting analog information and processes to digital form and making that data electronically accessible. The necessary precursor to digital and AI transformation.' },
    { term: 'Foundation Stage', definition: 'Stage 1 of the AI transformation roadmap: building the data infrastructure, fixing historian quality, and establishing stable process control before any AI deployment.' },
    { term: 'Point Solutions', definition: 'Stage 2 of the AI transformation roadmap: deploying 3-5 targeted, high-value AI use cases to build organizational credibility before investing in a full platform.' },
    { term: 'MLOps Platform', definition: 'Stage 3 of the AI transformation roadmap: the horizontal infrastructure (CI/CD for models, model registry, reusable pipelines) that allows scaling from 5 use cases to 50+.' },
    { term: 'Integrated Intelligence', definition: 'Stage 4 of the AI transformation roadmap: AI embedded in daily operations with cross-functional optimization, digital twins, and supervised autonomous loops.' },
    { term: 'Business Case', definition: 'The financial justification for AI investment, including yield improvement, maintenance cost reduction, energy savings, and risk reduction expressed in annual dollar value.' },
    { term: 'Kotter Model', definition: 'Kotter\'s 8-step change management framework: Create Urgency, Build Coalition, Form Vision, Communicate, Remove Barriers, Quick Wins, Sustain, Institute.' },
    { term: 'POC Trap', definition: 'The failure mode where organizations accumulate many proof-of-concept AI projects but none advance to production, consuming resources without delivering value.' },
    { term: 'Quick Win', definition: 'An AI use case that meets four criteria: high value, low complexity, visible impact, and achievable within 3-4 months — used to build organizational credibility early.' },
    { term: 'Portfolio Management', definition: 'Treating AI use cases as a portfolio with different risk/return profiles, using a Value vs. Feasibility matrix to allocate resources and make go/no-go decisions.' },
    { term: 'Value vs Feasibility Matrix', definition: 'A 2x2 framework for prioritizing AI use cases across four quadrants: Quick Wins (high value, high feasibility), Strategic Bets, Incremental, and Avoid.' }
  ]
};
