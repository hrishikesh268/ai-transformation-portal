/* Module M07 — AI in Refineries: 6 High-Value Use Cases */
window.MODULE_M07 = {
  id: 'm07',
  title: 'AI in Refineries',
  subtitle: '6 High-Value Use Cases',
  sections: [
    {
      type: 'intro',
      title: 'Where AI Creates the Most Value',
      content: `
        <p>After completing Days 1 and the AI fundamentals modules, you're now ready to connect the dots: where exactly does AI create the most value in a refinery? Based on BCG's global project experience, six use cases consistently deliver the highest ROI.</p>
        <p class="mt-3">These aren't theoretical applications — they are deployments in production at major refineries worldwide, delivering measurable results. Understanding them in depth is essential for client conversations and business case development.</p>
        <div class="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-3">
          <div class="p-3 bg-slate-900/50 rounded-xl text-center border border-amber-700/30"><p class="text-2xl mb-1">🔮</p><p class="text-xs text-amber-300 font-semibold">Predictive Maintenance</p></div>
          <div class="p-3 bg-slate-900/50 rounded-xl text-center border border-blue-700/30"><p class="text-2xl mb-1">⚙️</p><p class="text-xs text-blue-300 font-semibold">Process Optimization</p></div>
          <div class="p-3 bg-slate-900/50 rounded-xl text-center border border-emerald-700/30"><p class="text-2xl mb-1">🛢️</p><p class="text-xs text-emerald-300 font-semibold">Crude Selection</p></div>
          <div class="p-3 bg-slate-900/50 rounded-xl text-center border border-purple-700/30"><p class="text-2xl mb-1">🧪</p><p class="text-xs text-purple-300 font-semibold">Quality Prediction</p></div>
          <div class="p-3 bg-slate-900/50 rounded-xl text-center border border-red-700/30"><p class="text-2xl mb-1">🛡️</p><p class="text-xs text-red-300 font-semibold">Safety & Anomaly</p></div>
          <div class="p-3 bg-slate-900/50 rounded-xl text-center border border-pink-700/30"><p class="text-2xl mb-1">⚡</p><p class="text-xs text-pink-300 font-semibold">Energy Optimization</p></div>
        </div>
      `,
      keyPoints: [
        '6 use cases account for 80%+ of AI value in refining',
        'Predictive maintenance typically has the fastest payback (6-12 months)',
        'Process optimization has the largest absolute dollar value',
        'All 6 can be deployed simultaneously in a phased transformation program'
      ]
    },
    {
      type: 'concept',
      title: 'Use Case 1: Predictive Maintenance',
      content: `
        <p><strong class="text-amber-400">The Problem:</strong> Equipment failures cause unplanned downtime costing $1-5M/day. Traditional maintenance is time-based (calendar) or reactive (fix when broken). Neither is optimal.</p>
        <p class="mt-3"><strong class="text-amber-400">The AI Solution:</strong> Machine learning models trained on sensor data (vibration, temperature, pressure, current) predict equipment failures days to weeks in advance, enabling planned maintenance at optimal times.</p>
        <div class="mt-4 space-y-2 text-sm">
          <p class="font-semibold text-white">High-Value Equipment Targets:</p>
          <ul class="text-slate-300 space-y-1">
            <li>→ <strong class="text-white">Rotating equipment:</strong> Compressors, pumps, turbines — highest failure cost</li>
            <li>→ <strong class="text-white">Heat exchangers:</strong> Fouling prediction to optimize cleaning schedules</li>
            <li>→ <strong class="text-white">Fired heaters:</strong> Tube failure prevention (catastrophic if missed)</li>
            <li>→ <strong class="text-white">Distillation columns:</strong> Flooding and foaming detection</li>
          </ul>
        </div>
        <div class="mt-4 p-3 bg-emerald-900/20 border border-emerald-700/40 rounded-xl text-sm">
          <strong class="text-emerald-300">Typical ROI:</strong> <span class="text-slate-300">30-50% reduction in unplanned downtime; $5-15M/year at large refineries; 6-12 month payback</span>
        </div>
      `,
      keyPoints: [
        'Predictive maintenance catches failures 1-4 weeks before they occur',
        'Vibration analysis is the most mature signal for rotating equipment',
        'Heat exchanger fouling models optimize cleaning schedules for maximum throughput',
        'Fastest ROI of all AI use cases — high impact, relatively low implementation cost'
      ]
    },
    {
      type: 'concept',
      title: 'Use Case 2: AI-Augmented Process Optimization',
      content: `
        <p><strong class="text-blue-400">The Problem:</strong> Traditional RTO/APC is powerful but limited to predefined models. As crude quality shifts and market conditions change, models go "stale" and performance degrades. Retuning is manual and slow.</p>
        <p class="mt-3"><strong class="text-blue-400">The AI Solution:</strong> Reinforcement learning and neural network-based process models continuously learn from plant data, adapting to changing conditions without manual retuning. Combined with traditional APC, this delivers 20-40% more value.</p>
        <div class="mt-4 p-4 bg-blue-900/20 border border-blue-700/40 rounded-xl">
          <p class="text-sm text-blue-300 font-semibold mb-2">Key Differentiator vs. Traditional APC</p>
          <p class="text-slate-300 text-sm">Traditional APC models are static — built once and maintained manually. AI-augmented optimization uses online learning to continuously update the model from actual plant behavior. This is especially valuable for high-complexity units like FCC reactors and hydrocracking reactors.</p>
        </div>
        <div class="mt-3 p-3 bg-slate-900/50 rounded-xl border border-slate-700 text-sm">
          <strong class="text-white">Typical Impact:</strong> <span class="text-slate-300">Additional $2-5M/year above existing APC; 15-25% improvement in key yield metrics</span>
        </div>
      `,
      keyPoints: [
        'AI augments traditional APC by adding adaptive, self-learning capability',
        'Reinforcement learning is being tested for FCC and hydrocracker optimization',
        'Neural network soft sensors replace laboratory analyses with real-time predictions',
        'Highest long-term value of all AI use cases as models continuously improve'
      ]
    },
    {
      type: 'concept',
      title: 'Use Cases 3-6: Crude, Quality, Safety, Energy',
      content: `
        <div class="space-y-4">
          <div class="p-4 bg-emerald-900/15 border border-emerald-700/30 rounded-xl">
            <p class="font-bold text-emerald-300 text-sm">3. AI-Driven Crude Selection & Blending</p>
            <p class="text-slate-300 text-sm mt-1">ML models predict how different crude blends will process given current unit configurations and product prices. This optimizes the $200-500M/month crude purchasing decision. Value: $5-20M/year at large refineries.</p>
          </div>
          <div class="p-4 bg-purple-900/15 border border-purple-700/30 rounded-xl">
            <p class="font-bold text-purple-300 text-sm">4. Product Quality Prediction (Virtual Analyzers)</p>
            <p class="text-slate-300 text-sm mt-1">Lab analyses take 2-8 hours — by then, thousands of off-spec barrels may have been produced. AI virtual analyzers predict quality in real-time from process data, enabling immediate corrective action. Reduces quality giveaway by 1-3%.</p>
          </div>
          <div class="p-4 bg-red-900/15 border border-red-700/30 rounded-xl">
            <p class="font-bold text-red-300 text-sm">5. Safety & Anomaly Detection</p>
            <p class="text-slate-300 text-sm mt-1">AI monitors 10,000+ sensor tags simultaneously to detect abnormal process conditions before they become incidents. Reduces process safety incidents by 20-40%. Increasingly mandatory in high-risk jurisdictions.</p>
          </div>
          <div class="p-4 bg-pink-900/15 border border-pink-700/30 rounded-xl">
            <p class="font-bold text-pink-300 text-sm">6. Energy System Optimization</p>
            <p class="text-slate-300 text-sm mt-1">AI optimizes the complex refinery energy system: steam header pressure, fired heater optimization, heat integration, fuel gas management. Reduces energy costs 5-15%, worth $10-30M/year at large facilities.</p>
          </div>
        </div>
      `,
      keyPoints: [
        'Crude selection AI handles the single largest cost item in the refinery',
        'Virtual analyzers eliminate the 2-8 hour lab analysis delay',
        'Anomaly detection reduces process safety incidents by 20-40%',
        'Energy optimization is the "quick win" with fastest visible impact'
      ]
    },
    {
      type: 'case-study',
      title: 'BCG Case: Full AI Stack at a European Refinery',
      content: `
        <p>BCG deployed all six AI use cases at a major European refinery in a 24-month transformation program:</p>
        <div class="mt-4 space-y-2">
          <div class="p-3 bg-slate-900/50 rounded-xl border border-slate-700 text-sm flex gap-3">
            <span class="text-emerald-400 font-bold shrink-0">Phase 1 (Months 1-6):</span>
            <span class="text-slate-300">Predictive maintenance for 40 critical rotating machines. Result: 3 major failures prevented, $12M downtime avoided.</span>
          </div>
          <div class="p-3 bg-slate-900/50 rounded-xl border border-slate-700 text-sm flex gap-3">
            <span class="text-blue-400 font-bold shrink-0">Phase 2 (Months 6-12):</span>
            <span class="text-slate-300">Virtual analyzers + energy optimization. Result: $6M/year energy savings; quality giveaway reduced by 1.8%.</span>
          </div>
          <div class="p-3 bg-slate-900/50 rounded-xl border border-slate-700 text-sm flex gap-3">
            <span class="text-purple-400 font-bold shrink-0">Phase 3 (Months 12-24):</span>
            <span class="text-slate-300">AI-augmented process optimization + crude selection. Result: additional $15M/year margin improvement.</span>
          </div>
        </div>
        <div class="mt-4 p-4 bg-amber-900/20 border border-amber-700/40 rounded-xl">
          <p class="font-semibold text-amber-300 text-sm">Total Program Result</p>
          <p class="text-slate-300 text-sm mt-1">$33M/year annual benefit on a $28M program investment. Payback: 10 months. IRR: 118%.</p>
        </div>
      `,
      keyPoints: [
        'Phased deployment reduces risk and builds momentum',
        'Phase 1 quick wins (predictive maintenance) fund subsequent phases',
        'Change management was 40% of program cost — and worth every dollar',
        'Total program: $33M/year on $28M investment = 10-month payback'
      ]
    },
    {
      type: 'summary',
      title: 'Day 2 Summary — The AI Engine',
      content: `
        <p>You've completed Day 2. You now have a comprehensive understanding of the AI technologies and their refinery applications. Key takeaways:</p>
        <div class="mt-4 space-y-2">
          <div class="flex gap-3 p-3 bg-emerald-900/20 border border-emerald-700/30 rounded-xl">
            <span>🔬</span><div><strong class="text-white text-sm">6 Core Use Cases</strong><br><span class="text-slate-400 text-xs">Predictive maintenance, process optimization, crude selection, quality prediction, safety, energy</span></div>
          </div>
          <div class="flex gap-3 p-3 bg-emerald-900/20 border border-emerald-700/30 rounded-xl">
            <span>💰</span><div><strong class="text-white text-sm">Combined Value</strong><br><span class="text-slate-400 text-xs">$30-80M/year at a 200,000+ bpd refinery</span></div>
          </div>
          <div class="flex gap-3 p-3 bg-emerald-900/20 border border-emerald-700/30 rounded-xl">
            <span>📋</span><div><strong class="text-white text-sm">Sequencing Strategy</strong><br><span class="text-slate-400 text-xs">Start with predictive maintenance (quick win) → energy → process optimization</span></div>
          </div>
        </div>
      `,
      keyPoints: [
        'These 6 use cases are your primary "product portfolio" as an AI transformation leader',
        'Always start with the highest-ROI, lowest-risk use case first',
        'Each use case requires OT data access — solve data plumbing first',
        'Proceed to Day 3: Transformation Mechanics'
      ]
    }
  ],
  glossary: [
    { term: 'Predictive Maintenance', definition: 'Using ML/sensor data to predict equipment failures before they occur, enabling planned maintenance.' },
    { term: 'Virtual Analyzer', definition: 'Software model that predicts product quality in real-time from process variables, eliminating lab analysis delays.' },
    { term: 'Reinforcement Learning', definition: 'ML technique where an agent learns optimal control actions through trial-and-error interaction with a process environment.' },
    { term: 'Quality Giveaway', definition: 'Producing a product at higher quality (cost) than needed to meet specification — a form of economic waste.' },
    { term: 'Anomaly Detection', definition: 'Automated identification of abnormal process behavior that deviates from expected patterns.' }
  ]
};
