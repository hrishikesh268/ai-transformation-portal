window.QUIZ_Q08 = {
  id: 'q08',
  moduleId: 'm08',
  title: 'AI Cybersecurity — Knowledge Check',
  questions: [
    {
      id: 'q08-01',
      type: 'mcq',
      question: 'An IT team proposes applying the same monthly patch-and-reboot cycle to OT systems that they use for corporate servers. Why is this approach fundamentally incompatible with industrial operations?',
      options: [
        'OT systems use proprietary operating systems that cannot accept standard security patches',
        'OT systems prioritize Availability over Confidentiality — they cannot be rebooted while controlling a live process running at dangerous temperatures and pressures',
        'OT patches must be certified by regulators before installation, which takes at least 12 months',
        'IT patches are incompatible with OT hardware architectures at the firmware level'
      ],
      correctIndex: 1,
      explanation: 'The core IT/OT security difference is the priority order. IT follows CIA (Confidentiality, Integrity, Availability) — availability can be sacrificed temporarily for a patch. OT must follow AIC (Availability, Integrity, Confidentiality) — a DCS controlling a reactor at 380°C and 60 bar cannot be rebooted mid-operation without risking a catastrophic loss of control. OT patch cycles are tied to planned turnarounds, which occur every 3-5 years, not monthly. Additionally, OT systems prioritize safety at all times — the physical consequences of an unplanned interruption dwarf any cybersecurity benefit of fast patching.',
      interviewNote: 'This distinction — AIC vs CIA priority inversion — is one of the most important concepts to articulate when discussing OT cybersecurity with either IT teams or interview panels. It explains why OT engineers resist "just updating" systems and why they are right to do so.'
    },
    {
      id: 'q08-02',
      type: 'mcq',
      question: 'A plant manager assures you: "Our OT network has always been air-gapped from the internet. Now that you are deploying AI, security is not a concern because nothing is connected." What is wrong with this reasoning?',
      options: [
        'Nothing — an air-gapped OT network is genuinely secure and AI deployment will not change that',
        'The air gap has already been eroded by vendor remote access, USB maintenance laptops, and IT/OT integration for dashboards — and your AI deployment will add new data pipeline connections, further breaking the isolation',
        'Air gaps are only effective against external threats; the real risk is insider sabotage',
        'The plant manager is correct about historical security but wrong only because cloud AI vendors require internet connectivity'
      ],
      correctIndex: 1,
      explanation: 'The air gap myth is one of the most dangerous assumptions in industrial security. By 2024, very few refineries have a true air gap: vendor remote access for equipment servicing, USB drives carried by maintenance technicians, corporate dashboard connectivity, and IT/OT integration for MES and ERP have all created pathways into OT networks. When you add AI, you create additional data pipelines from the historian to an AI platform. Each connection is an attack surface. Stuxnet demonstrated in 2010 that even genuinely air-gapped systems can be compromised via USB. The correct response is to design a secure architecture — not to assume isolation provides protection.',
      interviewNote: 'Challenging the air gap assumption confidently and intelligently is a strong signal to any cybersecurity-aware interviewer. It shows you understand the real threat environment, not just the theoretical one.'
    },
    {
      id: 'q08-03',
      type: 'mcq',
      question: 'In 2017, the Triton/TRISIS malware attacked a petrochemical facility in the Middle East. What made this attack uniquely dangerous compared to prior industrial cyberattacks?',
      options: [
        'It spread faster than any previous malware, infecting thousands of sites within hours',
        'It specifically targeted Safety Instrumented Systems (SIS) — the final automated safety barrier — with the intent to disable emergency shutdowns and enable physical destruction',
        'It exfiltrated proprietary process formulas and sold them to competitors',
        'It caused a refinery fire by directly manipulating control valve setpoints through the DCS'
      ],
      correctIndex: 1,
      explanation: 'Triton/TRISIS was the first known malware specifically designed to attack Safety Instrumented Systems (Triconex SIS). The SIS is the last-resort automated safety layer — it triggers emergency shutdowns when a unit exceeds safe operating parameters. By disabling the SIS, attackers could allow an unsafe condition (overpressure, overtemperature) to escalate without triggering a protective shutdown, enabling physical destruction and potential loss of life. The attack was only discovered when a bug in the malware accidentally triggered a safety shutdown. For AI leaders: any AI architecture that has any data pathway touching SIS networks creates an unacceptable risk and must be rejected outright.',
      interviewNote: 'Triton/TRISIS is the single most important cyberattack example for industrial AI leaders to know. It directly answers the "what is the worst case?" question and explains why SIS isolation from AI data pipelines is non-negotiable.'
    },
    {
      id: 'q08-04',
      type: 'mcq',
      question: 'An adversary injects thousands of falsified sensor readings into the training dataset used to build a predictive quality model over a period of three months. The model is trained, deployed, and begins giving systematically incorrect quality predictions. What type of attack is this?',
      options: [
        'Adversarial inference attack — manipulating model outputs at prediction time',
        'Data poisoning attack — corrupting the training data to degrade model performance or bias outputs in a controlled direction',
        'Model inversion attack — extracting proprietary process knowledge from the model',
        'Man-in-the-middle attack — intercepting data between the historian and the AI platform'
      ],
      correctIndex: 1,
      explanation: 'Data poisoning is an AI-specific attack where an adversary corrupts the training dataset before or during the training process. Unlike adversarial inference attacks (which manipulate inputs at prediction time), data poisoning operates upstream — the compromised model is then deployed with a built-in flaw. In an industrial context, a poisoned quality prediction model could systematically bias operators toward incorrect setpoints, resulting in off-spec product, equipment damage, or safety incidents — all while appearing to function normally. Defenses include data provenance controls, anomaly detection on training data, and secure data pipeline authentication.',
      interviewNote: null
    },
    {
      id: 'q08-05',
      type: 'mcq',
      question: 'IEC 62443 is the primary international cybersecurity standard for industrial control systems. What is the core architectural concept it introduces to protect OT environments?',
      options: [
        'Mandatory annual penetration testing of all OT networks by certified third parties',
        'A zones-and-conduits model — dividing the OT network into security zones based on criticality, with tightly controlled conduits governing all inter-zone communication',
        'Requiring air gaps between all OT devices and any external network, enforced by physical disconnection',
        'Encryption of all data at rest and in transit across industrial networks using AES-256'
      ],
      correctIndex: 1,
      explanation: 'IEC 62443 organizes industrial cybersecurity around the concept of security zones and conduits. A zone is a grouping of assets (devices, systems, networks) with a common security level requirement. A conduit is the controlled communication pathway between zones — specifying what data can flow, in which direction, and with what authentication. For AI deployment, this framework is directly applicable: the historian sits in one zone, the AI platform in another, and the conduit between them must be designed to enforce one-way data extraction without creating a pathway for commands or malware to flow back into the OT zone. IEC 62443 also defines Security Levels (SL 1-4) that specify the rigor of protection required for each zone.',
      interviewNote: 'Being able to name IEC 62443 and explain zones and conduits in an interview demonstrates you know the governing standard, not just general security concepts. It signals you can set contractual requirements with vendors.'
    },
    {
      id: 'q08-06',
      type: 'mcq',
      question: 'Zero-trust architecture is increasingly being applied to industrial AI deployments. Which statement best describes the zero-trust principle as applied in an OT/AI context?',
      options: [
        'Zero-trust means removing all firewalls and relying on encryption alone to protect data in transit',
        'Zero-trust means no user, device, or system — including internal ones — is automatically trusted; every access request must be authenticated, authorized, and verified before being granted',
        'Zero-trust means that AI systems never receive write access to any OT system, only read access',
        'Zero-trust is an IT concept that does not apply to OT environments due to legacy system constraints'
      ],
      correctIndex: 1,
      explanation: 'Zero-trust replaces the traditional perimeter model ("everything inside the firewall is trusted") with continuous verification: every access request — regardless of origin — must be authenticated, authorized against explicit policies, and verified. In an AI/OT context, this means an AI platform requesting historian data must authenticate with credentials, the request must be authorized against a policy (which tags, which time range, read-only), and the session must be logged and audited. Zero-trust is especially important as IT/OT integration increases and the concept of a clear perimeter erodes. Legacy OT systems may require additional controls (like a proxy or gateway) to participate in a zero-trust model without modification.',
      interviewNote: null
    },
    {
      id: 'q08-07',
      type: 'truefalse',
      question: 'True or False: The safest AI architecture for a refinery grants the AI platform read-only access to the AVEVA PI historian through a controlled DMZ connection, and never provides the AI system with any write access to DCS setpoints or control outputs.',
      options: ['True', 'False'],
      correctIndex: 0,
      explanation: 'True. The foundational cybersecurity principle for industrial AI is read-only access to process data — the AI reads from the historian but never writes commands to the DCS or any control system. Even if an AI model generates setpoint recommendations, those recommendations must be presented to a human operator who then manually applies them. This eliminates the most dangerous attack vector: an adversary compromising the AI platform and using it to send malicious commands to process control systems. The historian read-only connection through the DMZ is the architecturally correct pattern endorsed by IEC 62443 and industrial cybersecurity best practice.',
      interviewNote: 'This is a simple principle to state but profound in its implications. In any vendor discussion where a system requests write access to OT systems, the answer is an immediate architectural rejection pending extraordinary justification and review.'
    },
    {
      id: 'q08-08',
      type: 'truefalse',
      question: 'True or False: A vendor proposes connecting their AI platform directly to your DCS to provide real-time setpoint optimization. This is a red flag that should trigger an immediate architecture review, even if the vendor has a strong industry reputation.',
      options: ['True', 'False'],
      correctIndex: 0,
      explanation: 'True. Direct DCS connectivity from an AI platform — regardless of vendor reputation — violates the core OT security principle of isolating control systems from external software. A DCS directly connected to a vendor platform creates a pathway for malware, compromised credentials, or software bugs to send unintended commands to process control equipment. Even well-intentioned vendors can have their platforms compromised. The correct architecture is always: AI reads from historian (read-only), recommendations are reviewed by operators, and setpoint changes are entered manually or through a tightly controlled, audited integration that requires human approval. Any vendor asking for direct DCS access without this architecture is either uninformed about industrial cybersecurity or willing to accept risks that the plant cannot accept.',
      interviewNote: 'Knowing this red flag and being able to articulate why it is dangerous will protect the organization from well-marketed but architecturally dangerous vendor proposals. This is a practical skill you will use in your first 90 days.'
    },
    {
      id: 'q08-09',
      type: 'scenario',
      question: 'You are reviewing an AI vendor\'s proposed deployment architecture. They plan to: (1) collect live sensor data directly from PLCs every second, (2) send it to their cloud platform for real-time inference, (3) return setpoint recommendations to the DCS automatically via API. The vendor says their platform is "certified secure" and uses TLS encryption. What is your response?',
      options: [
        'Approve the architecture — TLS encryption and a security certification are sufficient protections for industrial AI',
        'Approve with conditions — require the vendor to add multi-factor authentication to their cloud platform',
        'Reject the architecture: it violates three core principles — direct PLC access bypasses zone isolation, sending live OT data to an external cloud breaks DMZ requirements, and automated DCS write-back creates a remote code execution pathway into process controls. Require a redesign with historian-based read-only data extraction, edge inference within the OT zone, and human-in-the-loop for any setpoint changes',
        'Request a 30-day pilot to test whether the architecture causes any incidents before making a permanent decision'
      ],
      correctIndex: 2,
      explanation: 'This architecture has three distinct and serious security violations. First, direct PLC access bypasses the zone isolation model — PLCs should never be directly accessible from an AI platform. Second, sending live OT data to an external cloud violates DMZ principles — live OT data must not cross to external networks in real time. Third, automated setpoint write-back via API from a cloud platform is the most dangerous element: a compromised or malfunctioning cloud platform could send arbitrary commands to process controls. TLS encryption and a "security certification" do not address these architectural flaws — they are mitigations for data-in-transit, not architectural safeguards. The correct architecture: historian-based batch extraction through DMZ, edge inference at Level 3, human operator approves all setpoint changes.',
      interviewNote: 'This scenario tests whether you can decompose a vendor proposal and identify each specific violation. Articulating all three objections — PLC access, cloud live streaming, and automated write-back — is what distinguishes a leader who can protect the organization from one who gets captured by vendor marketing.'
    },
    {
      id: 'q08-10',
      type: 'scenario',
      question: 'Your AI quality prediction model has been running for 6 months. The cybersecurity team reports that over the past 3 weeks, sensor readings feeding the model show unusual statistical patterns: several key temperature sensors have been reporting values that cluster tightly around round numbers (e.g., exactly 342.0, 342.0, 342.0) with no normal process variation. The model has continued to produce predictions that operators find plausible. What is the most concerning interpretation, and what is the immediate action?',
      options: [
        'The sensors have entered a steady-state equilibrium — this is normal process behavior during stable operations',
        'This is most likely stuck sensors due to transmitter failure — flag the affected data and retrain the model with clean data',
        'This pattern is consistent with adversarial sensor spoofing — an attacker may be injecting falsified readings to manipulate model outputs while keeping them within plausible range. Immediately isolate the suspect data pipeline, validate sensor readings against physical instruments, audit data pipeline integrity, and treat model outputs as unreliable until the root cause is confirmed',
        'The model has learned to ignore high-variance inputs and is smoothing the sensor data internally — this is a feature, not a bug'
      ],
      correctIndex: 2,
      explanation: 'While stuck sensors (option B) are more common and should be investigated first, the combination of factors here — multiple sensors simultaneously showing identical round-number readings across 3 weeks, with model outputs remaining plausible — is consistent with a sophisticated adversarial sensor spoofing scenario. A skilled attacker would inject values that are physically plausible to avoid detection while manipulating model outputs in a desired direction. The correct response is to treat this as a potential security incident: isolate and audit the data pipeline, validate affected sensors against independent physical measurements, preserve logs for forensic analysis, and suspend reliance on model outputs. If sensors are simply stuck, the investigation will confirm it. If it is an attack, early detection prevents a serious incident.',
      interviewNote: null
    }
  ]
};
