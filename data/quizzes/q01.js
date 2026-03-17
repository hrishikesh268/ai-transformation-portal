window.QUIZ_M01 = {
  id: 'q01',
  moduleId: 'm01',
  title: 'Oil & Gas 101 — Knowledge Check',
  questions: [
    {
      id: 'q01-01',
      type: 'mcq',
      question: 'Crude oil cannot be used directly as a fuel because it is:',
      options: [
        'A complex mixture of hydrocarbon molecules of different sizes, each with different boiling points',
        'Too radioactive to use safely without treatment',
        'Primarily water with dissolved hydrocarbons that must be separated',
        'A single pure compound that requires chemical modification to become useful'
      ],
      correctIndex: 0,
      explanation: 'Crude oil is a complex mixture of thousands of different hydrocarbon molecules ranging from very small (2-4 carbon atoms, like propane) to very large (20+ carbon atoms, like bitumen). Each size has a different boiling point and different properties — making crude itself nearly useless as a direct fuel, but highly valuable once separated into its components. Options B, C, and D are all incorrect descriptions of crude oil.',
      interviewNote: 'Understanding that crude is a mixture — not a single substance — is the starting point for explaining why refining exists and what distillation does. A plant head might open an interview by asking "what is crude oil?" — this answer demonstrates foundational understanding.'
    },
    {
      id: 'q01-02',
      type: 'mcq',
      question: 'In oil and gas industry terminology, a refinery is classified as part of which segment?',
      options: [
        'Upstream — because it processes raw materials',
        'Midstream — because it is between production and consumption',
        'Downstream — because it receives crude from the upstream segment and converts it to products',
        'Integrated — because it combines multiple processes'
      ],
      correctIndex: 2,
      explanation: 'A refinery is a downstream asset. The terminology follows the flow of oil: upstream (exploration and production) extracts crude, midstream (pipelines, tankers, terminals) transports it, and downstream (refining and distribution) processes and distributes the final products. The refinery sits at the "downstream" end — it receives what upstream extracts. Options A and B misclassify the segment; option D is not standard industry terminology for this classification.',
      interviewNote: 'Confidently placing the refinery as "downstream" and explaining the logic of the terminology signals you understand industry structure from the first conversation.'
    },
    {
      id: 'q01-03',
      type: 'mcq',
      question: 'In an atmospheric distillation column, which product is collected at the LOWEST point of the column (bottom of the tower)?',
      options: [
        'LPG — because it is the most flammable',
        'Gasoline — because it is the most commercially valuable',
        'Atmospheric residue (bitumen) — because it has the highest boiling point and cannot vaporize',
        'Hydrogen — because it is the lightest element in crude'
      ],
      correctIndex: 2,
      explanation: 'The atmospheric residue (also called "long residue" or bitumen precursor) collects at the bottom of the CDU column because these molecules are so large that they do not vaporize even at the column\'s operating temperature (~350-400°C). LPG rises to the very top (lightest, lowest boiling point). The column is essentially a vertical sorting machine: lightest molecules at top, heaviest at bottom. Hydrogen (option D) is not a significant crude oil component in this context.',
      interviewNote: 'Understanding the distillation column\'s top-to-bottom ordering — and the physical reason for it (boiling points, molecular weight) — is a basic fluency test.'
    },
    {
      id: 'q01-04',
      type: 'mcq',
      question: 'A refinery has a throughput of 180,000 bbl/day and a nameplate capacity of 200,000 bbl/day. What is its utilization rate, and how would you assess this performance?',
      options: [
        '90% — this is considered excellent performance, at the upper end of industry benchmarks',
        '90% — this is below average; most refineries target 95%+',
        '11% — this calculation is wrong because we should use MTPA not bbl/day',
        '180,000/200,000 cannot be expressed as a percentage without knowing product prices'
      ],
      correctIndex: 0,
      explanation: '180,000 ÷ 200,000 = 90% utilization. This is considered excellent performance — well-run refineries target 90%+ and world-class refineries operate at 93-96%. Rates below 80% indicate significant operational problems. Option B is wrong about the benchmark (95%+ is aspirational but 90% is already very good). Option C is wrong — the calculation works fine in bbl/day. Option D is wrong — utilization is a volume ratio, independent of prices.',
      interviewNote: 'Operations managers reference utilization rates in nearly every performance conversation. Knowing that 90% is "good" and that below 80% signals problems will help you interpret status reports correctly.'
    },
    {
      id: 'q01-05',
      type: 'mcq',
      question: 'Today, crude oil costs $82/bbl and the combined market value of products refined from one barrel is $97/bbl. The refinery\'s operating costs (energy, labour, maintenance) are $8/bbl. What is the Gross Refining Margin (GRM) and what does it represent?',
      options: [
        '$15/bbl — the difference between product revenue and crude cost, before operating costs',
        '$7/bbl — the net profit per barrel after all costs',
        '$97/bbl — the total revenue generated per barrel',
        '$15/bbl — the difference between product revenue and all costs including operating costs'
      ],
      correctIndex: 0,
      explanation: 'GRM = product revenue - crude cost = $97 - $82 = $15/bbl. GRM is specifically the "gross" margin — it does not deduct operating costs. It measures how much value the refinery adds before paying its own running costs. Net profit would be $15 - $8 = $7/bbl. This distinction matters: GRM benchmarks refinery performance across the industry; net margin depends on each refinery\'s specific cost structure. Option D incorrectly includes operating costs in the GRM definition.',
      interviewNote: 'The GRM definition — and specifically the distinction between GRM (gross) and net margin — comes up in almost every refinery economics conversation. Know it precisely.'
    },
    {
      id: 'q01-06',
      type: 'mcq',
      question: 'A refinery has a Nelson Complexity Index (NCI) of 12, compared to a nearby competitor with an NCI of 3. What practical advantage does the higher NCI refinery have?',
      options: [
        'It can process crude oil 12 times faster than the lower NCI refinery',
        'It can process cheaper heavy crude oils and convert more of the barrel into high-value products like diesel and gasoline, achieving higher margins',
        'It has 12 times more storage capacity, allowing it to buy crude at lower spot prices',
        'NCI 12 means the refinery has 12 different process units, which is just a count of its assets'
      ],
      correctIndex: 1,
      explanation: 'NCI measures processing sophistication, not speed or storage. A high-NCI refinery has advanced conversion units (FCC, hydrocracker, coker, etc.) that can take heavy, cheap crude — which would be mostly residue in a simple refinery — and convert it into high-value products like gasoline and diesel. This combination of lower-cost feedstock + higher-value products = significantly higher margins. NCI is not a count of units (option D) or a capacity or speed measure.',
      interviewNote: 'When you frame AI transformation ROI, NCI matters — higher NCI refineries have more units to optimize, more variables to manage, and bigger financial gains from marginal improvements. Know why.'
    },
    {
      id: 'q01-07',
      type: 'truefalse',
      question: 'In a refinery distillation column, heavier molecules (larger hydrocarbons) vaporize first and rise to the top of the column because they contain more energy.',
      options: ['True', 'False'],
      correctIndex: 1,
      explanation: 'False. It is the opposite. Lighter molecules (smaller hydrocarbons, fewer carbon atoms) have LOWER boiling points and vaporize first and most easily. Heavier molecules (larger hydrocarbons) have HIGHER boiling points and require more heat to vaporize — many do not vaporize at all at atmospheric pressure and remain as liquid residue at the bottom. The column sorts molecules from lightest at top to heaviest at bottom based on this boiling point difference.'
    },
    {
      id: 'q01-08',
      type: 'truefalse',
      question: 'One of the reasons refinery operations are so challenging is that the process cannot be easily paused or stopped — it must run continuously 24 hours a day, 365 days a year.',
      options: ['True', 'False'],
      correctIndex: 0,
      explanation: 'True. Refineries are continuous process plants — the crude flow, heat, and chemistry do not have a simple "pause" function. Stopping a refinery unexpectedly (unplanned shutdown) causes significant losses: throughput is lost, equipment may be damaged by thermal shock, in-process material must be managed safely, and restarting takes days to weeks. Planned stoppages (turnarounds) occur only every 3-5 years. This continuous nature is exactly why 24/7 monitoring and AI-assisted operations have such high potential value.',
      interviewNote: 'The continuous nature of refineries is the single most important operational fact that shapes every technology decision. It explains why safety systems must be infallible, why predictive maintenance matters, and why operational disruptions are so costly.'
    },
    {
      id: 'q01-09',
      type: 'scenario',
      question: 'You are presenting to the Chief Operations Officer of a refinery at the start of your AI engagement. He asks: "Before we talk about AI, tell me — what do you think our biggest value lever is?" The refinery processes 300,000 bbl/day, has an NCI of 11, and currently runs at 84% utilization with a GRM of $9/bbl. What is the most credible and insightful answer?',
      options: [
        'Increasing crude throughput: every additional 1,000 bbl/day at $9 GRM is $9,000/day — at 84% utilization you have significant headroom to the 100,000 bbl/day gap',
        'Reducing staff costs through automation: your biggest cost after crude is people, and AI can eliminate many operator roles',
        'Switching to a cheaper crude blend: if you buy heavier crude you save $3-5/bbl on feedstock which dwarfs any AI optimization',
        'Investing in marketing and distribution: with GRM of $9/bbl your refinery economics are fine — the untapped value is in retail margin'
      ],
      correctIndex: 0,
      explanation: 'At 84% utilization vs. the 90-95% target, this refinery has roughly 18,000-33,000 bbl/day of untapped capacity. At $9 GRM, each additional 1,000 bbl/day recovered from unplanned downtime generates $9,000/day or $3.3M/year. Recovering 10,000 bbl/day through better reliability and predictive maintenance = $33M/year. This is a credible, quantified answer that shows you can think in their metrics. Option B is wrong — AI aims to augment operators, not replace them, and proposing headcount cuts in the first meeting destroys credibility. Option C ignores that crude selection is largely pre-determined and the refinery may already be optimizing it. Option D ignores that the question was about the refinery\'s value lever, not downstream retail.',
      interviewNote: 'This type of question tests whether you can immediately translate operational metrics into financial opportunity. The COO is testing if you think like a business leader or a technologist.'
    },
    {
      id: 'q01-10',
      type: 'scenario',
      question: 'During a site tour, the Plant Manager points to a large steel tower and asks: "Can you explain to me what that column does and why it\'s the most important unit in this refinery?" She is pointing at the Crude Distillation Unit (CDU). What do you say?',
      options: [
        '"That is the CDU — it separates crude oil into fractions based on molecular weight. Since different-sized hydrocarbon molecules have different boiling points, heating the crude and letting vapors rise and condense at different heights gives you your product streams. It\'s the first and most critical step — nothing else in the refinery can work until this unit processes the incoming crude. Its throughput capacity essentially defines the refinery\'s capacity."',
        '"That is the distillation tower — it uses chemical reactions to convert crude oil into useful products by breaking down the long hydrocarbon chains with heat and catalysts."',
        '"That is the primary process unit — it cracks the crude using steam and high pressure to produce the product slate. Its Nelson Complexity Index determines how many products it can make."',
        '"That is the atmospheric unit — it works by adding hydrogen to the crude oil molecules to make them more reactive, then separates them by weight using centrifugal force."'
      ],
      correctIndex: 0,
      explanation: 'Option A is correct and demonstrates genuine understanding: CDU separates by boiling point (physical separation, not chemical reaction), uses the principle of differential vaporization and condensation, and is the rate-limiting unit for the whole refinery. Option B incorrectly describes distillation as chemical cracking — distillation is a physical separation, not a chemical reaction. Option C confuses the CDU with a cracking unit and misapplies the NCI concept. Option D describes hydrocracking, not distillation. Giving the right explanation with confidence — using terms like "fractions," "boiling point," "product streams" — immediately establishes technical credibility with the plant manager.',
      interviewNote: 'This is the single most common "test" question you will face in your first plant tour. Practice this explanation until it flows naturally and confidently.'
    }
  ]
};
