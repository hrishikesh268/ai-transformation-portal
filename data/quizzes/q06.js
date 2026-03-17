window.QUIZ_M06 = {
  id: 'q06',
  moduleId: 'm06',
  title: 'Industrial Data & Systems — Knowledge Check',
  questions: [
    {
      id: 'q06-01',
      type: 'mcq',
      question: 'A refinery\'s DCS (Distributed Control System) controls a reactor operating at 380°C and 60 bar. The IT team proposes applying a security patch to the DCS controller and rebooting it during a weekday afternoon. What is the fundamental problem with this proposal?',
      options: [
        'The patch may not be compatible with the DCS vendor\'s software version',
        'OT systems like DCS controllers cannot be patched or rebooted while controlling an active process — availability and safety take precedence over security updates',
        'Security patches for OT systems must be applied by the vendor, not internal IT',
        'DCS systems are already secure by design and do not require security patches'
      ],
      correctIndex: 1,
      explanation: 'This is the core IT/OT difference in practice. IT systems tolerate downtime for updates. OT systems like DCS controllers cannot be interrupted while controlling a process running at extreme temperatures and pressures — the consequences of an unplanned interruption range from expensive (forced shutdown) to catastrophic (loss of control). OT updates are applied during planned shutdowns, not during active operation. IT teams who approach OT with IT methodology create serious operational risk.',
      interviewNote: 'Understanding this difference immediately establishes credibility with OT engineers. It shows you understand why their resistance to "just connecting things" is legitimate, not obstinate.'
    },
    {
      id: 'q06-02',
      type: 'mcq',
      question: 'In the Purdue Model, where does the data historian (AVEVA PI) primarily reside, and what is the significance of that level for AI applications?',
      options: [
        'Level 1 (Basic Control) — it captures data directly from PLCs in real time',
        'Level 3 (Manufacturing Operations) — it stores long-term process data and is where AI edge servers for real-time inference are deployed',
        'Level 5 (Enterprise/Cloud) — it is a cloud-based service accessible from anywhere',
        'Level 4 (Business Systems) — it interfaces with ERP to combine process and financial data'
      ],
      correctIndex: 1,
      explanation: 'The data historian (AVEVA PI) resides at Level 3 of the Purdue Model — the Manufacturing Operations layer. This is also where AI edge servers for real-time inference are most commonly deployed, because this level has access to live process data without requiring data to traverse the DMZ. Level 3 is within the OT zone, providing both data proximity and security compliance. Data extracted for model training flows upward to Level 4 or 5 through the DMZ.',
      interviewNote: null
    },
    {
      id: 'q06-03',
      type: 'mcq',
      question: 'A large refinery is using AVEVA PI as its data historian. A data scientist needs to extract 3 years of temperature and pressure data for 200 specific tags to train a quality prediction model. What is the standard method for accessing this data programmatically?',
      options: [
        'Direct SQL query to the PI relational database',
        'Export to Excel from the PI ProcessBook client and share via email',
        'PI Web API or OSIsoft OData API, accessed via Python libraries like PIconnect',
        'Request that the DCS operator manually export the data from the control room HMI'
      ],
      correctIndex: 2,
      explanation: 'AVEVA PI is accessed programmatically via the PI Web API (REST-based) or OSIsoft OData API. Python libraries such as PIconnect and osipi provide convenient wrappers for these APIs, making it straightforward for data scientists to extract time-series data in bulk. PI does not expose a standard SQL interface — it is a time-series database, not a relational database. Manual exports are impractical for 3 years of data across 200 tags.',
      interviewNote: 'Knowing that PI Web API is the standard access method signals technical familiarity with the actual tools used in industrial AI engagements.'
    },
    {
      id: 'q06-04',
      type: 'mcq',
      question: 'What is the primary purpose of the DMZ (Demilitarized Zone) at Level 3.5 of the Purdue Model?',
      options: [
        'To provide a backup communication path when primary network connections fail',
        'To allow bidirectional data exchange between IT and OT systems with authentication',
        'To create a one-way data buffer between OT and IT — data flows from OT to IT, but IT systems cannot send commands into OT',
        'To host the data historian and AI inference servers in a neutral security zone'
      ],
      correctIndex: 2,
      explanation: 'The DMZ enforces one-way data flow from OT to IT using one-way data diodes or tightly controlled firewalls. This allows process data to flow upward for analytics and AI while preventing IT systems (which are more exposed to cyber threats) from sending data or commands into the safety-critical OT network. Bidirectional connectivity would create a path for IT network threats to propagate into process control systems — an unacceptable risk in a refinery.',
      interviewNote: null
    },
    {
      id: 'q06-05',
      type: 'mcq',
      question: 'You are building a predictive maintenance model for pump failures. You have identified the relevant vibration data in AVEVA PI. What additional data source is essential, and what specific information does it provide that the historian cannot?',
      options: [
        'The ERP system (SAP) — which provides the financial cost of each pump repair',
        'The LIMS — which records pump performance quality metrics on a per-sample basis',
        'The CMMS (Maximo or SAP PM) — which provides the failure event records and dates that serve as training labels for the ML model',
        'The process simulation model (Aspen HYSYS) — which provides the theoretical failure thresholds for each pump type'
      ],
      correctIndex: 2,
      explanation: 'The CMMS (Computerized Maintenance Management System) stores equipment failure history — work orders, failure dates, failure modes, and repair records. These records provide the labels needed for supervised ML: "Pump P-1203 failed on March 5, 2022" tells the model which periods of sensor data preceded a real failure. Without CMMS data, you have sensor readings but no labels — you cannot train a supervised predictive maintenance model.',
      interviewNote: 'The PI + CMMS combination is the standard data pairing for predictive maintenance. Being able to articulate this clearly in an interview is a strong signal.'
    },
    {
      id: 'q06-06',
      type: 'mcq',
      question: 'A data scientist reviewing AVEVA PI data notices that a temperature tag shows exactly 342.7°C for 18 consecutive hours, then jumps to 351.2°C. What is the most likely explanation, and what should be done?',
      options: [
        'The process was running at exactly steady state for 18 hours — this is normal and the data should be used as-is',
        'This is a "stuck sensor" — the transmitter has failed and stopped updating. This period should be flagged and excluded from model training data.',
        'PI\'s compression algorithm is removing data points between the two values — request the raw uncompressed data',
        'The sensor calibration is off by a fixed offset — apply a correction factor of 8.5°C to the entire dataset'
      ],
      correctIndex: 1,
      explanation: 'A temperature reading that holds at exactly the same value for 18 hours is almost certainly a stuck sensor — a failed transmitter that has stopped updating. Real process temperatures fluctuate continuously even at nominal steady state. This data is not reliable and must be identified and excluded before model training. Automated detection: flag any tag with zero variance over a statistically improbable window (e.g., more than 2 hours for a temperature in a flowing process).',
      interviewNote: null
    },
    {
      id: 'q06-07',
      type: 'mcq',
      question: 'A vendor pitches an AI solution for your refinery where "all process data streams in real time to our cloud platform, and we return predictions every 5 minutes." What is the most serious problem with this architecture?',
      options: [
        'Cloud platforms cannot process real-time data fast enough for refinery applications',
        'This architecture requires continuous internet connectivity and exposes OT data to an external cloud — most refinery OT security teams will reject this as incompatible with the DMZ requirement',
        'A 5-minute prediction interval is too infrequent for effective process control',
        'Cloud AI platforms are not certified for use in safety-critical industrial applications'
      ],
      correctIndex: 1,
      explanation: 'Sending live OT data continuously to an external cloud platform violates the core OT security principle: OT systems must remain isolated from external networks to protect process safety. The DMZ is specifically designed to prevent this kind of direct OT-to-cloud connectivity. Additionally, cloud dependency means predictions fail when internet connectivity fails — unacceptable for production-critical applications. The correct architecture is edge inference at Level 3, with cloud used only for model training using historical data.',
      interviewNote: 'Use this question\'s reasoning when evaluating any vendor in your role. "Where does inference run, and what happens to predictions when connectivity fails?" is a fundamental evaluation question.'
    },
    {
      id: 'q06-08',
      type: 'truefalse',
      question: 'True or False: A refinery\'s LIMS (Laboratory Information Management System) provides continuous, second-by-second product quality data that is ideal for training real-time quality prediction models.',
      options: ['True', 'False'],
      correctIndex: 1,
      explanation: 'False. LIMS data is sparse and periodic — quality samples are typically taken every 4-8 hours for key product streams, not continuously. This is precisely why soft sensors (ML models that predict quality from continuous process data) are valuable: they provide the real-time quality information that LIMS cannot. Training a soft sensor requires careful alignment between sparse LIMS results and the continuous historian data at the time each sample was drawn.',
      interviewNote: null
    },
    {
      id: 'q06-09',
      type: 'mcq',
      question: 'When integrating CMMS, LIMS, and AVEVA PI data for a multi-variable AI model, a data engineer discovers that pump "P-1203" appears as "Pump 1203A" in the CMMS and "Unit P1203" in the ERP. What problem does this represent, and what is the solution?',
      options: [
        'A data format mismatch — resolved by converting all systems to use numeric IDs',
        'A master data problem — no unified equipment naming convention across systems. Solution is to build an equipment master data mapping that reconciles identifiers across all source systems before AI development begins.',
        'A timestamp alignment problem — different systems record events at different times',
        'A data volume problem — too many records to join across systems efficiently'
      ],
      correctIndex: 1,
      explanation: 'Inconsistent equipment naming across systems is a master data problem — one of the most common and most underestimated integration challenges in industrial AI. Without a unified master data layer, you cannot reliably join historian data, CMMS records, and ERP data to build multi-source training datasets. The solution is a master data mapping (also called an equipment hierarchy or asset register) that creates a canonical identifier for each asset and maps it to the naming convention of each source system. This work must be done before ML model development.',
      interviewNote: null
    },
    {
      id: 'q06-10',
      type: 'scenario',
      question: 'The refinery\'s OT team strongly objects to connecting their AVEVA PI system to the corporate AI platform on the grounds that it creates a security risk. The AI team argues that the connection is necessary to access training data. How should the transformation leader resolve this conflict?',
      options: [
        'Override the OT team — business value of AI outweighs security concerns in this case',
        'Abandon the AI project — OT security requirements make industrial AI impossible',
        'Engage both teams to design a compliant architecture: extract historical data from PI through the existing DMZ for one-time or scheduled batch transfers to the AI platform, while keeping live OT connectivity isolated. Real-time inference runs at edge servers within the OT zone, not on the corporate platform.',
        'Purchase a separate AI system from the DCS vendor that is already pre-approved for OT network access'
      ],
      correctIndex: 2,
      explanation: 'The correct answer is collaborative architecture design, not choosing a "winner." The OT team\'s concerns are legitimate and must be respected — their network protects process safety. But the AI team\'s need for data is also legitimate. The solution is a compliant architecture: scheduled batch extraction of historical data (not live streaming) through the DMZ for training, and edge inference deployed within the OT zone for real-time applications. This satisfies both teams. Overriding OT security creates real operational risk. Abandoning AI is unnecessary. Pre-approved DCS vendor solutions may be one option but limit architectural flexibility.',
      interviewNote: 'This scenario plays out in virtually every industrial AI engagement. The answer that shows leadership is the one that resolves the conflict through architecture, not through organizational power dynamics.'
    }
  ]
};
