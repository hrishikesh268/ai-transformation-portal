window.MODULE_M05 = {
  id: 'm05',
  title: 'AI & ML Fundamentals',
  subtitle: 'Understand artificial intelligence well enough to lead the people who build it',
  day: 2,
  estimatedMinutes: 75,
  xpReward: 150,
  icon: '🤖',
  sections: [
    {
      id: 'm05-s01',
      title: 'Why an AI Transformation Leader Needs to Understand AI',
      type: 'intro',
      content: `
        <p>You will not be writing code. You will not be building models. But you will be making decisions that determine whether AI projects succeed or fail — and those decisions require enough technical fluency to ask the right questions, challenge vendor claims, set realistic expectations, and earn the trust of the people doing the technical work.</p>
        <p>This is the gap that derails many transformation leaders. They are excellent strategists and change managers, but when the data scientist says "our model has an RMSE of 0.87 and we think the feature set is rich enough," the leader nods and moves on. That is a dangerous position to be in.</p>
        <p>The goal of this module is not to make you a data scientist. It is to make you a credible leader of data scientists. Specifically, after this module you should be able to:</p>
        <ul>
          <li>Explain clearly what machine learning is and how it differs from traditional programming</li>
          <li>Identify which type of ML approach fits which business problem</li>
          <li>Understand the full AI project lifecycle — and know where most projects fail</li>
          <li>Evaluate model performance metrics and ask meaningful questions about them</li>
          <li>Distinguish between industrial AI (the kind that matters in a refinery) and generative AI (the kind everyone is talking about)</li>
          <li>Make the data quality argument — because it will be your most important argument in the first year</li>
        </ul>
        <p>Industrial AI at a refinery is not about ChatGPT. It is about getting machine learning models trained on plant data to predict equipment failure before it happens, optimize process conditions in real time, and catch quality deviations before product goes off-spec. Understanding the mechanics of how that works is a genuine competitive advantage in your role.</p>
      `,
      keyTerms: ['AI', 'Machine Learning', 'AI Transformation']
    },
    {
      id: 'm05-s02',
      title: 'The AI Family Tree: AI, ML, Deep Learning, and Generative AI',
      type: 'concept',
      content: `
        <p>These four terms are used interchangeably in the media and by vendors who do not want you to know the difference. They are not interchangeable. Each is a subset of the one before it, and each matters differently for industrial applications.</p>
        <p><strong>Artificial Intelligence (AI)</strong> is the broadest category — the field of making computers perform tasks that normally require human intelligence. This includes rule-based systems, search algorithms, and anything else that makes a machine seem smart. The term dates to the 1950s and is intentionally broad.</p>
        <p><strong>Machine Learning (ML)</strong> is a subset of AI where systems learn from data rather than being explicitly programmed with rules. This is the key distinction. In traditional software, a programmer writes: "if temperature exceeds 400°C and pressure drops below 15 bar, trigger alarm." In machine learning, the system is shown thousands of examples of normal and abnormal conditions and learns to identify the boundary itself. The rules emerge from data, not from human specification.</p>
        <p><strong>Deep Learning (DL)</strong> is a subset of ML that uses neural networks with many layers (hence "deep"). Deep learning dramatically outperforms classical ML on unstructured data — images, audio, and text. It is what powers image recognition, speech-to-text, and most of modern AI. It requires significantly more data and computing power than classical ML.</p>
        <p><strong>Generative AI</strong> is a subset of deep learning focused specifically on creating new content — text, images, code, audio. ChatGPT, Claude, DALL-E, and Gemini are generative AI systems. They generate outputs rather than classifying or predicting from inputs.</p>
        <p><strong>The critical point for refinery AI:</strong> the majority of high-value industrial AI use cases — predictive maintenance, quality prediction, anomaly detection, process optimization — are classical machine learning problems, not generative AI problems. When you hear "we need to bring AI to our refinery," the answer is almost never "let's deploy ChatGPT." It is "let's build supervised ML models on our historian data." Be precise about this distinction in every conversation.</p>
      `,
      keyTerms: ['AI', 'Machine Learning', 'Deep Learning', 'Generative AI', 'LLM']
    },
    {
      id: 'm05-s03',
      title: 'Three Types of Machine Learning',
      type: 'concept',
      content: `
        <p>All ML approaches can be grouped into three learning paradigms. Each solves a different kind of problem, and knowing which to recommend for which situation is one of the practical skills you need.</p>
        <p><strong>Supervised Learning</strong> is the most common and most powerful paradigm for industrial AI. You give the model labeled training examples — pairs of input and correct output. The model learns to map inputs to outputs, then applies that learned mapping to new, unseen inputs.</p>
        <ul>
          <li><em>Predictive maintenance:</em> Input = 90 days of vibration, temperature, and current draw for a pump. Output = failed / did not fail within 30 days. The model learns what patterns precede failure.</li>
          <li><em>Quality prediction:</em> Input = real-time process conditions (temperatures, pressures, flow rates). Output = predicted octane number or sulfur content. The model learns how process variables relate to quality.</li>
        </ul>
        <p><strong>Unsupervised Learning</strong> operates without labels. The model receives only inputs and must find structure in the data on its own. The main applications in industrial settings are:</p>
        <ul>
          <li><em>Anomaly detection:</em> The model learns what "normal" process operation looks like by studying historical data. It then flags operating states that deviate significantly from that learned normal. No one has to define what "abnormal" is — the model discovers it.</li>
          <li><em>Clustering:</em> Grouping process operating states into distinct regimes. Useful for understanding when the plant is in fundamentally different modes of operation.</li>
        </ul>
        <p><strong>Reinforcement Learning (RL)</strong> trains an agent by letting it take actions and learn from the rewards or penalties those actions produce. An RL agent controlling a distillation column would try different setpoint combinations, observe the resulting yield and energy consumption, and gradually learn the policy that maximizes yield while staying within safety constraints. RL is more complex to deploy safely than supervised methods, but it is the paradigm closest to truly autonomous process control. It is used in advanced process optimization — not yet in safety-critical loops.</p>
        <p>In practice, most refinery AI projects start with supervised learning (high ROI, well-understood, easier to validate) and move toward RL-based optimization as confidence builds.</p>
      `,
      keyTerms: ['Supervised Learning', 'Unsupervised Learning', 'Reinforcement Learning', 'Anomaly Detection']
    },
    {
      id: 'm05-s04',
      title: 'Key ML Algorithms: The Intuition Without the Math',
      type: 'concept',
      content: `
        <p>You do not need to implement these algorithms. You do need to understand what they are, when they are appropriate, and what their trade-offs are. Vendors will mention them; your data scientists will argue about them; you need enough grounding to follow those conversations.</p>
        <p><strong>Linear Regression</strong> fits a mathematical line (or plane, in multiple dimensions) through data points, capturing how output changes with inputs. It is fast, transparent, and interpretable — you can read out exactly how much each variable contributes to the prediction. In industrial settings, interpretability matters enormously: operators and engineers will not trust a model they cannot interrogate. Use linear regression as a baseline and for cases where the relationship is genuinely linear and explanation is paramount.</p>
        <p><strong>Decision Trees and Random Forests</strong> make predictions by asking a series of yes/no questions: "Is temperature above 380°C? If yes, is pressure below 12 bar?" They are naturally interpretable and handle non-linear relationships. A Random Forest builds hundreds of decision trees on random subsets of the data and averages their predictions — this dramatically reduces the variance of any single tree and produces robust results. Very widely used in industrial AI.</p>
        <p><strong>Gradient Boosting (XGBoost, LightGBM)</strong> builds an ensemble of models sequentially: each new model focuses specifically on correcting the errors of the previous one. This iterative error-correction produces extremely strong predictive performance on tabular data — the structured, row-and-column format that refineries produce. XGBoost is often the first algorithm a data scientist reaches for on a refinery dataset. It is fast, accurate, and handles missing values gracefully.</p>
        <p><strong>Neural Networks</strong> consist of layers of interconnected nodes that progressively transform raw inputs into increasingly abstract representations. Each layer learns features at a higher level of abstraction. Neural networks require substantially more data than tree-based methods but can capture very complex non-linear relationships. They excel at time-series data (sequences of sensor readings) and are used in advanced predictive maintenance and soft sensor applications at refineries with large, high-quality datasets.</p>
        <p><strong>Transformers</strong> are the architecture underlying GPT-4, Claude, and all modern large language models. They process sequences by computing "attention" — how much each element in a sequence should influence every other element. Originally developed for text, transformers are increasingly applied to time-series sensor data in industrial settings. For your interviews: know that transformers are the state of the art, but classical gradient boosting still competes strongly on tabular industrial data.</p>
        <p><strong>Bottom line for refinery AI:</strong> XGBoost and gradient boosting dominate for quality prediction and predictive maintenance on tabular data. Neural networks (specifically LSTMs and transformers) are used when the time-series structure of the data is important. Random forests are a reliable, explainable choice when operator trust is a concern.</p>
      `,
      keyTerms: ['XGBoost', 'Neural Network', 'Transformer', 'Random Forest', 'Feature Engineering']
    },
    {
      id: 'm05-s05',
      title: 'The ML Pipeline: How an AI Project Actually Works',
      type: 'deep-dive',
      content: `
        <p>Every ML project follows the same fundamental pipeline. Understanding this pipeline is critical for scoping projects, setting timelines, and diagnosing why projects fail. The pipeline is not linear — it is iterative, with frequent returns to earlier stages.</p>
        <p><strong>Step 1 — Data Collection.</strong> Identify and extract the data sources relevant to the problem. For a pump failure prediction model: vibration data from the historian (AVEVA PI), maintenance records from the CMMS (Maximo), and equipment metadata. This step exposes data gaps — missing tags, systems that were never connected, data that was never collected.</p>
        <p><strong>Step 2 — Data Cleaning and Preparation.</strong> Raw industrial data is messy. Sensors fail and produce erroneous values. Timestamps are misaligned across systems. Maintenance shutdowns create periods that look like process conditions but are not. Missing values need to be handled (imputed or excluded). Outliers need to be investigated and addressed. This step consistently takes 60–70% of total project time. It is unglamorous and cannot be shortcut.</p>
        <p><strong>Step 3 — Feature Engineering.</strong> Raw sensor readings are rarely the most informative inputs for a model. Feature engineering transforms raw data into more predictive variables. Instead of just "current temperature," you create "rate of temperature change over the last 2 hours," "maximum temperature in the last 24 hours," "deviation from historical average for this operating condition." A skilled data scientist's feature engineering decisions often matter more than algorithm choice.</p>
        <p><strong>Step 4 — Model Training.</strong> Feed the prepared, feature-engineered data to the selected algorithm. The algorithm adjusts its internal parameters to minimize the difference between its predictions and the known correct answers. Training a gradient boosting model on a standard refinery dataset takes minutes. Training a large neural network may take hours. This is the step that looks like "the AI is being built" but is often the fastest part of the pipeline.</p>
        <p><strong>Step 5 — Model Validation.</strong> Test the trained model on data it has never seen — data held out from training specifically for this purpose. If the model performs well on new data, it has learned real patterns. If it performs well on training data but poorly on validation data, it has overfit (memorized the training data without learning generalizable patterns). Validation is not optional and cannot be performed on the training data.</p>
        <p><strong>Step 6 — Deployment.</strong> Integrate the validated model into operations. This means: connecting the model to live data feeds, building operator dashboards to display predictions, setting up alerting logic, and integrating outputs into existing workflows (APC systems, maintenance scheduling tools). Deployment is frequently underestimated — it can take as long as model development.</p>
        <p><strong>Step 7 — Monitoring.</strong> A deployed model is not a finished product. Process conditions change over time — equipment ages, catalysts are replaced, operating modes shift. As the real world drifts from the world the model was trained on, prediction accuracy degrades. Monitoring tracks model performance in production and triggers retraining when performance drops below acceptable thresholds. Without monitoring, models become liabilities.</p>
      `,
      keyTerms: ['Feature Engineering', 'Overfitting', 'Model Validation', 'ML Pipeline']
    },
    {
      id: 'm05-s06',
      title: 'Model Evaluation: Knowing Whether a Model is Actually Good',
      type: 'concept',
      content: `
        <p>Vendors and data scientists will present model performance numbers. You need to know what those numbers mean, what questions to ask, and what red flags to look for. Model evaluation is not a detail — it is the basis on which you decide whether to deploy something that will affect plant operations and safety.</p>
        <p><strong>For regression models</strong> (predicting a continuous value, like octane number or temperature):</p>
        <ul>
          <li><strong>RMSE (Root Mean Square Error):</strong> The average magnitude of prediction error, in the same units as the output. If your model predicts octane numbers with an RMSE of 0.3 RON, predictions are typically within ±0.3 octane numbers of reality. Whether that is acceptable depends entirely on the specification tolerance for the product.</li>
          <li><strong>R² (R-squared):</strong> Proportion of output variance explained by the model. R² of 0.95 means the model explains 95% of the variation in the target variable. Context-dependent — a good R² for one problem may be inadequate for another.</li>
        </ul>
        <p><strong>For classification models</strong> (predicting a category, like fail/no-fail):</p>
        <ul>
          <li><strong>Accuracy:</strong> Percentage of predictions that are correct. Can be deeply misleading when classes are imbalanced. If only 2% of pumps fail, a model that always predicts "no failure" achieves 98% accuracy while being completely useless.</li>
          <li><strong>Precision:</strong> Of all the failures the model predicted, what fraction were actual failures? High precision means fewer false alarms. Operators care deeply about this — false alarms destroy trust.</li>
          <li><strong>Recall (Sensitivity):</strong> Of all actual failures that occurred, what fraction did the model detect? High recall means fewer missed failures. Safety teams care deeply about this. In industrial settings, missed failures can be catastrophic.</li>
          <li><strong>F1 Score:</strong> The harmonic mean of precision and recall. A single number that balances both. Useful when you need to summarize classification performance without cherry-picking one metric.</li>
        </ul>
        <p><strong>Overfitting</strong> is when a model performs suspiciously well on training data but poorly on validation data. It has memorized the training set rather than learning the underlying pattern. It is analogous to a student who memorizes past exam answers but cannot solve a new problem. Always ask: "What is the performance gap between training and validation?" If a vendor shows you only training metrics, that is a red flag.</p>
        <p><strong>Underfitting</strong> is when a model is too simple to capture the patterns in the data. Performance is poor on both training and validation data. The solution is a more complex model or better features, not more data.</p>
        <p><strong>The question you must always ask:</strong> "What does failure of this model look like operationally?" A model with good average performance but occasional catastrophic errors may be worse than a simpler model with consistent moderate errors. Context determines what "good" means.</p>
      `,
      keyTerms: ['RMSE', 'Precision', 'Recall', 'F1 Score', 'Overfitting']
    },
    {
      id: 'm05-s07',
      title: 'Generative AI in Industrial Settings: What It Can and Cannot Do',
      type: 'concept',
      content: `
        <p>Generative AI — specifically large language models (LLMs) — is the most discussed category of AI in 2024 and 2025. It is also the most misapplied category in industrial contexts. Understanding precisely where it helps and where it does not is one of the clearest signals of technical sophistication in an interview.</p>
        <p><strong>What LLMs are:</strong> Large language models are deep learning systems trained on internet-scale text data — hundreds of billions of words from websites, books, code repositories, and scientific literature. They learn statistical patterns in text and generate new text that follows those patterns. GPT-4, Claude, and Gemini are examples. They are extraordinarily capable at language tasks: summarizing documents, generating text, answering questions about general knowledge, writing and explaining code.</p>
        <p><strong>Where generative AI genuinely helps in refineries:</strong></p>
        <ul>
          <li><em>Maintenance documentation:</em> Automatically generating work order descriptions, maintenance reports, and procedure summaries from structured data and technician voice input</li>
          <li><em>Natural language interfaces:</em> Allowing operators to query process data in plain English ("What was the average outlet temperature of H-101 last week?") rather than learning historian query syntax</li>
          <li><em>Root cause analysis assistance:</em> Helping engineers structure and document RCA findings, cross-referencing against known failure modes</li>
          <li><em>Training and knowledge capture:</em> Generating training materials, converting tribal knowledge from experienced operators into documented procedures</li>
          <li><em>Report generation:</em> Summarizing daily production reports and KPI dashboards for management</li>
        </ul>
        <p><strong>Where generative AI does NOT help — and where misapplication is common:</strong></p>
        <ul>
          <li><em>Process optimization:</em> An LLM trained on internet text has no knowledge of your specific plant's behavior. It cannot optimize your FCC's operating conditions because it has never seen your data.</li>
          <li><em>Predictive maintenance:</em> An LLM cannot predict pump failure from vibration data. This requires a supervised ML model trained on your historical equipment data.</li>
          <li><em>Quality prediction:</em> Real-time octane prediction requires a model trained on the specific relationship between your process conditions and your lab results.</li>
        </ul>
        <p><strong>The critical message for your interviews:</strong> When the plant head asks "can we use AI to prevent equipment failures?", the answer is "yes, through supervised machine learning on our historian and CMMS data — not through ChatGPT." Conflating the two undermines your credibility and leads to wasted investment. Generative AI is a powerful productivity tool for the people running an industrial AI program. It is not a substitute for domain-specific ML models trained on plant data.</p>
      `,
      keyTerms: ['Generative AI', 'LLM', 'Supervised Learning']
    },
    {
      id: 'm05-s08',
      title: 'The 70% Rule: Why Data Is Everything',
      type: 'deep-dive',
      content: `
        <p>Across industrial AI projects, data collection, cleaning, and preparation consistently consume 60–70% of total project time. This is not a failure of methodology — it is a structural reality of industrial environments. Understanding this deeply is what separates transformation leaders who set realistic expectations from those who overpromise and underdeliver.</p>
        <p><strong>Why industrial data is particularly challenging:</strong></p>
        <ul>
          <li><strong>Quality variability in historians:</strong> Sensor data exists in the historian, but quality varies enormously. A sensor may have drifted 15% from calibration. A transmitter may have been stuck for two days before anyone noticed. These errors are in the data, and the model will learn from them unless they are identified and corrected.</li>
          <li><strong>Data silos:</strong> Process data lives in the historian (AVEVA PI). Quality results live in the LIMS (laboratory information management system). Equipment records live in the CMMS (maintenance management system). These three systems do not talk to each other, use different equipment naming conventions, and store data at different frequencies. Joining them to create a single training dataset is a significant engineering effort.</li>
          <li><strong>No unified data model:</strong> Different units in the same refinery may have been instrumented at different times, with different tag naming conventions, and connected to different historian instances. "Temperature at the top of CDU column" may be tagged differently in three systems.</li>
          <li><strong>The label problem:</strong> Training a failure prediction model requires examples of both normal operation and failures. But failures are rare events by design — a well-maintained refinery may have only 5–10 pump failures per year on any given circuit. With so few positive examples, training a reliable classifier is genuinely difficult. This is one of the most under-discussed challenges in industrial AI.</li>
          <li><strong>Process shutdowns in the data:</strong> The historical data contains periods when the plant was shut down for maintenance or turnaround. During these periods, sensor readings are meaningless or absent. If these periods are not identified and excluded, models train on nonsensical data.</li>
        </ul>
        <p><strong>What this means for your leadership approach:</strong></p>
        <ul>
          <li>Never agree to a project timeline that assumes clean, ready-to-use data</li>
          <li>Always begin with a data audit — a formal assessment of what data exists, its quality, and what additional instrumentation or integration is needed</li>
          <li>In interviews, the statement "The first thing I do is a data audit, because AI capability is 100% constrained by data quality" demonstrates sophisticated operational understanding</li>
          <li>Budget and timeline should explicitly allocate 60–70% of the data science team's effort to data engineering before a single model is trained</li>
        </ul>
        <p>The refinery with the best AI team but poor data infrastructure will be outperformed by a refinery with average data scientists and excellent data pipelines. Data is the foundation, not the model.</p>
      `,
      keyTerms: ['Feature Engineering', 'Data Quality', 'LIMS', 'CMMS']
    },
    {
      id: 'm05-s09',
      title: 'What You Now Know — Applied to Your Role',
      type: 'summary',
      content: `
        <p>You have covered the full conceptual foundation of machine learning and industrial AI. Before moving to the next module, here are five statements that capture what an AI transformation leader should be able to say — and mean — after this module:</p>
        <ul>
          <li><strong>"AI in our refinery context means supervised machine learning on process data — not generative AI."</strong> You can now explain the difference clearly and redirect conversations that conflate the two.</li>
          <li><strong>"Our most valuable near-term use cases are predictive maintenance and quality prediction — both supervised learning problems."</strong> You can match problem types to the right ML paradigm and justify the prioritization.</li>
          <li><strong>"Before we discuss models, we need a data audit."</strong> You understand why 60–70% of AI project effort is data-related, and you will not let a vendor skip past this reality.</li>
          <li><strong>"I want to see validation metrics on held-out data, not training performance."</strong> You can evaluate model performance claims critically and ask for the right evidence before committing to deployment.</li>
          <li><strong>"Our anomaly detection system needs high recall — I'm willing to accept some false positives to ensure we don't miss real upsets."</strong> You can make informed trade-off decisions between precision and recall based on what matters operationally.</li>
        </ul>
        <p>The next module covers the industrial data infrastructure — the systems that generate and store the data your AI models will depend on. Understanding AVEVA PI, IT/OT boundaries, and data quality challenges will ground everything you have just learned in the physical reality of a refinery.</p>
      `,
      keyTerms: ['AI', 'Machine Learning', 'Data Quality', 'Supervised Learning']
    }
  ],
  diagrams: [
    {
      title: 'The AI Family Tree',
      description: 'Hierarchical relationship between AI, Machine Learning, Deep Learning, and Generative AI — with industrial relevance noted at each level',
      svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 420">
  <defs>
    <style>
      .ring-label { font-family: 'Segoe UI', Arial, sans-serif; font-weight: 700; }
      .ring-sub { font-family: 'Segoe UI', Arial, sans-serif; font-size: 11px; fill: #555; }
      .example-text { font-family: 'Segoe UI', Arial, sans-serif; font-size: 10px; fill: #444; }
      .title-text { font-family: 'Segoe UI', Arial, sans-serif; font-weight: 700; font-size: 15px; fill: #1a1a2e; }
    </style>
  </defs>
  <!-- Background -->
  <rect width="800" height="420" fill="#f8f9fa" rx="12"/>
  <!-- Title -->
  <text x="400" y="32" text-anchor="middle" class="title-text">The AI Family Tree</text>
  <!-- AI outer ring -->
  <ellipse cx="400" cy="230" rx="350" ry="170" fill="#e8f4fd" stroke="#2980b9" stroke-width="2.5"/>
  <text x="110" y="120" text-anchor="middle" class="ring-label" font-size="14" fill="#2980b9">AI</text>
  <text x="110" y="137" text-anchor="middle" class="ring-sub">Artificial Intelligence</text>
  <text x="110" y="152" text-anchor="middle" class="example-text">Rule-based systems,</text>
  <text x="110" y="165" text-anchor="middle" class="example-text">search, expert systems</text>
  <!-- ML ring -->
  <ellipse cx="400" cy="240" rx="265" ry="130" fill="#d5e8d4" stroke="#27ae60" stroke-width="2.5"/>
  <text x="185" y="148" text-anchor="middle" class="ring-label" font-size="13" fill="#27ae60">ML</text>
  <text x="185" y="163" text-anchor="middle" class="ring-sub">Machine Learning</text>
  <text x="185" y="178" text-anchor="middle" class="example-text">Learns from data.</text>
  <text x="185" y="191" text-anchor="middle" class="example-text">Predictive maintenance,</text>
  <text x="185" y="204" text-anchor="middle" class="example-text">quality prediction ✓</text>
  <!-- DL ring -->
  <ellipse cx="410" cy="255" rx="175" ry="95" fill="#fff2cc" stroke="#f39c12" stroke-width="2.5"/>
  <text x="295" y="185" text-anchor="middle" class="ring-label" font-size="12" fill="#e67e22">Deep Learning</text>
  <text x="295" y="200" text-anchor="middle" class="ring-sub">Neural networks,</text>
  <text x="295" y="213" text-anchor="middle" class="example-text">image recognition,</text>
  <text x="295" y="226" text-anchor="middle" class="example-text">speech, time-series</text>
  <!-- GenAI ring -->
  <ellipse cx="430" cy="268" rx="90" ry="60" fill="#ffe6e6" stroke="#e74c3c" stroke-width="2.5"/>
  <text x="430" y="250" text-anchor="middle" class="ring-label" font-size="11" fill="#c0392b">Generative AI</text>
  <text x="430" y="265" text-anchor="middle" font-family="'Segoe UI',Arial,sans-serif" font-size="10" fill="#555">ChatGPT, DALL-E</text>
  <text x="430" y="279" text-anchor="middle" font-family="'Segoe UI',Arial,sans-serif" font-size="10" fill="#c0392b">Not for process AI</text>
  <!-- Key label -->
  <rect x="540" y="340" width="230" height="60" rx="8" fill="white" stroke="#ddd" stroke-width="1.5"/>
  <text x="552" y="358" font-family="'Segoe UI',Arial,sans-serif" font-size="11" fill="#27ae60" font-weight="700">✓ Industrial refinery AI = ML</text>
  <text x="552" y="375" font-family="'Segoe UI',Arial,sans-serif" font-size="10" fill="#555">Supervised learning on plant data</text>
  <text x="552" y="390" font-family="'Segoe UI',Arial,sans-serif" font-size="10" fill="#c0392b">Not generative AI</text>
</svg>`
    },
    {
      title: 'The ML Pipeline',
      description: 'Seven-step machine learning project lifecycle from data collection to production monitoring, with feedback loop',
      svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 240">
  <defs>
    <style>
      .step-title { font-family: 'Segoe UI', Arial, sans-serif; font-weight: 700; font-size: 11px; }
      .step-desc { font-family: 'Segoe UI', Arial, sans-serif; font-size: 9px; fill: #555; }
      .pct-badge { font-family: 'Segoe UI', Arial, sans-serif; font-weight: 700; font-size: 10px; fill: #c0392b; }
    </style>
    <marker id="arrowhead" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
      <polygon points="0 0, 8 3, 0 6" fill="#555"/>
    </marker>
    <marker id="arrowhead-red" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
      <polygon points="0 0, 8 3, 0 6" fill="#e74c3c"/>
    </marker>
  </defs>
  <rect width="800" height="240" fill="#f8f9fa" rx="12"/>
  <text x="400" y="26" text-anchor="middle" font-family="'Segoe UI',Arial,sans-serif" font-weight="700" font-size="14" fill="#1a1a2e">The ML Pipeline</text>

  <!-- Step boxes: 7 steps across, y=50, width~90, height=100 -->
  <!-- Step 1: Data Collection -->
  <rect x="20" y="50" width="90" height="105" rx="8" fill="#d6eaf8" stroke="#2980b9" stroke-width="1.5"/>
  <text x="65" y="72" text-anchor="middle" class="step-title" fill="#1a5276">1. Data</text>
  <text x="65" y="85" text-anchor="middle" class="step-title" fill="#1a5276">Collection</text>
  <text x="65" y="102" text-anchor="middle" class="step-desc">Historian, CMMS,</text>
  <text x="65" y="114" text-anchor="middle" class="step-desc">LIMS, ERP</text>
  <text x="65" y="128" text-anchor="middle" class="step-desc">sources identified</text>
  <text x="65" y="145" text-anchor="middle" class="step-desc">and extracted</text>

  <!-- Arrow 1 -->
  <line x1="111" y1="102" x2="125" y2="102" stroke="#555" stroke-width="1.5" marker-end="url(#arrowhead)"/>

  <!-- Step 2: Data Cleaning -->
  <rect x="126" y="50" width="90" height="105" rx="8" fill="#d5e8d4" stroke="#27ae60" stroke-width="1.5"/>
  <text x="171" y="72" text-anchor="middle" class="step-title" fill="#1e8449">2. Clean &amp;</text>
  <text x="171" y="85" text-anchor="middle" class="step-title" fill="#1e8449">Prepare</text>
  <text x="171" y="102" text-anchor="middle" class="step-desc">Handle missing</text>
  <text x="171" y="114" text-anchor="middle" class="step-desc">values, sensor</text>
  <text x="171" y="126" text-anchor="middle" class="step-desc">errors, timestamp</text>
  <text x="171" y="138" text-anchor="middle" class="step-desc">alignment</text>
  <text x="171" y="152" text-anchor="middle" class="pct-badge">60-70% of effort</text>

  <!-- Arrow 2 -->
  <line x1="217" y1="102" x2="231" y2="102" stroke="#555" stroke-width="1.5" marker-end="url(#arrowhead)"/>

  <!-- Step 3: Feature Engineering -->
  <rect x="232" y="50" width="90" height="105" rx="8" fill="#fdebd0" stroke="#f39c12" stroke-width="1.5"/>
  <text x="277" y="72" text-anchor="middle" class="step-title" fill="#9a6400">3. Feature</text>
  <text x="277" y="85" text-anchor="middle" class="step-title" fill="#9a6400">Engineering</text>
  <text x="277" y="102" text-anchor="middle" class="step-desc">Create meaningful</text>
  <text x="277" y="114" text-anchor="middle" class="step-desc">variables from</text>
  <text x="277" y="126" text-anchor="middle" class="step-desc">raw sensor</text>
  <text x="277" y="138" text-anchor="middle" class="step-desc">readings</text>

  <!-- Arrow 3 -->
  <line x1="323" y1="102" x2="337" y2="102" stroke="#555" stroke-width="1.5" marker-end="url(#arrowhead)"/>

  <!-- Step 4: Training -->
  <rect x="338" y="50" width="90" height="105" rx="8" fill="#e8daef" stroke="#8e44ad" stroke-width="1.5"/>
  <text x="383" y="72" text-anchor="middle" class="step-title" fill="#6c3483">4. Model</text>
  <text x="383" y="85" text-anchor="middle" class="step-title" fill="#6c3483">Training</text>
  <text x="383" y="102" text-anchor="middle" class="step-desc">Algorithm learns</text>
  <text x="383" y="114" text-anchor="middle" class="step-desc">from labeled</text>
  <text x="383" y="126" text-anchor="middle" class="step-desc">examples;</text>
  <text x="383" y="138" text-anchor="middle" class="step-desc">parameters tuned</text>

  <!-- Arrow 4 -->
  <line x1="429" y1="102" x2="443" y2="102" stroke="#555" stroke-width="1.5" marker-end="url(#arrowhead)"/>

  <!-- Step 5: Validation -->
  <rect x="444" y="50" width="90" height="105" rx="8" fill="#d6dbdf" stroke="#5d6d7e" stroke-width="1.5"/>
  <text x="489" y="72" text-anchor="middle" class="step-title" fill="#2c3e50">5. Model</text>
  <text x="489" y="85" text-anchor="middle" class="step-title" fill="#2c3e50">Validation</text>
  <text x="489" y="102" text-anchor="middle" class="step-desc">Test on held-out</text>
  <text x="489" y="114" text-anchor="middle" class="step-desc">data. Check for</text>
  <text x="489" y="126" text-anchor="middle" class="step-desc">overfitting.</text>
  <text x="489" y="138" text-anchor="middle" class="step-desc">Evaluate metrics.</text>

  <!-- Arrow 5 -->
  <line x1="535" y1="102" x2="549" y2="102" stroke="#555" stroke-width="1.5" marker-end="url(#arrowhead)"/>

  <!-- Step 6: Deploy -->
  <rect x="550" y="50" width="90" height="105" rx="8" fill="#fadbd8" stroke="#e74c3c" stroke-width="1.5"/>
  <text x="595" y="72" text-anchor="middle" class="step-title" fill="#922b21">6. Deploy</text>
  <text x="595" y="88" text-anchor="middle" class="step-desc">Connect to live</text>
  <text x="595" y="100" text-anchor="middle" class="step-desc">data. Build</text>
  <text x="595" y="112" text-anchor="middle" class="step-desc">dashboards and</text>
  <text x="595" y="124" text-anchor="middle" class="step-desc">alerts. Integrate</text>
  <text x="595" y="136" text-anchor="middle" class="step-desc">with operations.</text>

  <!-- Arrow 6 -->
  <line x1="641" y1="102" x2="655" y2="102" stroke="#555" stroke-width="1.5" marker-end="url(#arrowhead)"/>

  <!-- Step 7: Monitor -->
  <rect x="656" y="50" width="90" height="105" rx="8" fill="#fdfefe" stroke="#17a589" stroke-width="2"/>
  <text x="701" y="72" text-anchor="middle" class="step-title" fill="#0e6655">7. Monitor</text>
  <text x="701" y="88" text-anchor="middle" class="step-desc">Track performance</text>
  <text x="701" y="100" text-anchor="middle" class="step-desc">over time. Detect</text>
  <text x="701" y="112" text-anchor="middle" class="step-desc">drift. Schedule</text>
  <text x="701" y="124" text-anchor="middle" class="step-desc">retraining as</text>
  <text x="701" y="136" text-anchor="middle" class="step-desc">process changes.</text>

  <!-- Feedback arrow: Monitor back to Data -->
  <path d="M 701 156 Q 701 210 400 210 Q 99 210 65 156" fill="none" stroke="#e74c3c" stroke-width="1.8" stroke-dasharray="5,4" marker-end="url(#arrowhead-red)"/>
  <text x="400" y="228" text-anchor="middle" font-family="'Segoe UI',Arial,sans-serif" font-size="10" fill="#e74c3c">Model performance degrades → retrain with new data</text>
</svg>`
    }
  ],
  videos: [
    {
      videoId: 'Gv9_4yMHFhI',
      title: 'Watch: StatQuest — How Machine Learning Works',
      start: 60,
      end: 280,
      placement: 'm05-s03',
      description: 'Visual introduction to how machine learning works — from a statistician who explains clearly without jargon'
    },
    {
      videoId: 'aircAruvnKk',
      title: 'Watch: 3Blue1Brown — Neural Networks Explained',
      start: 0,
      end: 240,
      placement: 'm05-s04',
      description: 'Intuitive visual explanation of how neural networks learn — the clearest explanation of neural networks available'
    }
  ],
  glossary: [
    { term: 'AI (Artificial Intelligence)', definition: 'The broad field of making computers perform tasks that normally require human intelligence. Encompasses all approaches from rule-based systems to machine learning.' },
    { term: 'Machine Learning (ML)', definition: 'A subset of AI where systems learn patterns from data rather than following explicitly programmed rules. The core technology behind industrial predictive maintenance, quality prediction, and optimization.' },
    { term: 'Deep Learning (DL)', definition: 'A subset of ML using neural networks with many layers. Powers image recognition, speech processing, and modern generative AI. Requires more data and compute than classical ML.' },
    { term: 'Generative AI', definition: 'A subset of deep learning that creates new content (text, images, code). Includes ChatGPT, DALL-E, and Claude. Useful for documentation and interfaces in industrial settings, but not a substitute for domain-specific ML models.' },
    { term: 'LLM (Large Language Model)', definition: 'A type of generative AI trained on massive text datasets to understand and generate human language. GPT-4, Claude, and Gemini are examples.' },
    { term: 'Supervised Learning', definition: 'ML paradigm where models learn from labeled examples (input-output pairs). The dominant approach for industrial AI: predictive maintenance, quality prediction, and yield forecasting.' },
    { term: 'Unsupervised Learning', definition: 'ML paradigm where models find patterns in data without labels. Used for anomaly detection (learning normal, flagging deviations) and clustering process operating states.' },
    { term: 'Reinforcement Learning', definition: 'ML paradigm where an agent learns by taking actions and receiving rewards. Used in advanced process control optimization — the AI learns to adjust setpoints to maximize yield.' },
    { term: 'Feature Engineering', definition: 'The process of creating meaningful input variables from raw data. E.g., transforming raw temperature readings into "rate of temperature change over 4 hours" — often more predictive than the raw value.' },
    { term: 'Overfitting', definition: 'When a model performs well on training data but poorly on new data. It has memorized the training set rather than learning generalizable patterns. Always validate on held-out data.' },
    { term: 'RMSE (Root Mean Square Error)', definition: 'Average magnitude of prediction error for regression models, in the same units as the output. A model predicting octane number with RMSE of 0.3 is typically within 0.3 RON of the actual value.' },
    { term: 'Precision', definition: 'Of all the failures predicted by a model, what fraction were actual failures. High precision means few false alarms — important for maintaining operator trust.' },
    { term: 'Recall', definition: 'Of all actual failures that occurred, what fraction did the model detect. High recall means few missed failures — critical for safety applications where missing a failure is catastrophic.' },
    { term: 'F1 Score', definition: 'The harmonic mean of precision and recall, providing a single balanced metric for classification model performance. Useful when both false alarms and missed events matter.' },
    { term: 'XGBoost', definition: 'A gradient boosting algorithm that builds models sequentially, each correcting errors of the previous. One of the most effective algorithms for tabular data and widely used in industrial AI applications.' },
    { term: 'Neural Network', definition: 'A ML model architecture of interconnected layers of nodes that progressively transform inputs into outputs. Excels at complex patterns in images, text, and time-series data.' },
    { term: 'Transformer', definition: 'The deep learning architecture underlying GPT-4 and modern LLMs. Processes sequences by computing attention between elements. Increasingly applied to industrial time-series data.' }
  ]
};
