window.MODULE_M08 = {
  id: 'm08',
  title: 'AI Cybersecurity for Industrial Systems',
  subtitle: 'Protecting the Industrial AI Backbone',
  day: 3,
  estimatedMinutes: 60,
  xpReward: 150,
  icon: '🛡️',
  sections: [
    {
      id: 'm08-s01',
      title: 'Why You Need to Own This Topic',
      type: 'intro',
      content: `<p>You are applying to lead an AI transformation at a major refinery. At some point during your interview — or your first 90 days on the job — someone will ask you: <strong>"How will you ensure our AI systems don't create new vulnerabilities?"</strong></p>
<p>This is not a question for the CISO. It is a question for you. Because every AI system you deploy will require data pipelines, network connections, and software running somewhere on or near the plant's control infrastructure. Every one of those is a potential attack surface that didn't exist before you arrived.</p>
<p>Here is the brutal framing: <strong>one successful cyberattack on an AI-connected refinery could destroy your entire transformation program</strong> — and your personal credibility along with it. If an attacker exploits a vulnerability introduced by your AI data pipeline and causes a production upset, an environmental incident, or worse, you will not survive that professionally.</p>
<p>You do not need to become a cybersecurity expert. You need to understand this domain well enough to:</p>
<ul>
  <li>Set clear cybersecurity requirements before procurement begins</li>
  <li>Recognize red flags when a vendor proposes a dangerous architecture</li>
  <li>Have intelligent conversations with the plant's cybersecurity and OT teams</li>
  <li>Write cybersecurity requirements into vendor contracts</li>
  <li>Know when to escalate a concern vs. when to approve a technical approach</li>
</ul>
<p>This module gives you that foundation. It is dense with technical vocabulary, but each concept maps directly to a decision you will face as a transformation leader.</p>`,
      keyTerms: ['OT Security', 'Attack Surface', 'ICS', 'SCADA']
    },
    {
      id: 'm08-s02',
      title: 'Why Industrial Cybersecurity Is Different',
      type: 'concept',
      content: `<p>Most cybersecurity knowledge comes from the IT world. When you hear about data breaches, ransomware, and phishing, those are IT security incidents. Industrial (OT) cybersecurity is a fundamentally different discipline, with different stakes and different constraints.</p>
<h3>The Core Difference: What Failure Looks Like</h3>
<p>In IT security, the worst-case outcome is typically <strong>data loss, financial theft, or business disruption</strong>. Painful, but recoverable. In OT security, the worst-case outcome is <strong>physical damage to equipment, environmental disaster, or loss of human life</strong>. A refinery processes flammable hydrocarbons under high temperature and pressure. A compromised control system can trigger explosions, fires, toxic releases, and catastrophic equipment failures.</p>
<h3>Why You Can't Just Apply IT Security Practices</h3>
<ul>
  <li><strong>IT systems can be patched and rebooted</strong>. OT systems often cannot be taken offline without shutting down production — which may cost $500K per day. Security patches are often delayed months or years as a result.</li>
  <li><strong>OT systems have very long lifecycles</strong>. A PLC (Programmable Logic Controller) installed in 2003 may still be running your distillation column today. Security patches simply didn't exist for many of these devices when they were designed.</li>
  <li><strong>The security priority order is inverted</strong>. IT security prioritizes <em>Confidentiality → Integrity → Availability (CIA)</em>. OT security must prioritize <em>Availability → Integrity → Confidentiality (AIC)</em>. Taking a control system offline to apply a security patch is often unacceptable.</li>
</ul>
<h3>The Air Gap Myth</h3>
<p>For decades, OT security relied on a simple concept: the <strong>air gap</strong>. The OT network was physically isolated from the internet and corporate IT networks. "We're not connected, so we're safe."</p>
<p>This was largely true in 2000. It is largely false today. The air gap has been eroded by:</p>
<ul>
  <li><strong>Vendor remote access</strong>: technicians need to log in remotely to service equipment</li>
  <li><strong>IT/OT integration for AI</strong>: your own AI program requires data to flow from the OT historian to the AI platform</li>
  <li><strong>USB connections</strong>: maintenance laptops brought onto the plant floor carry malware from the outside world</li>
  <li><strong>Enterprise network connectivity</strong>: management wants real-time production dashboards on their corporate laptops</li>
</ul>
<p>The lesson: never accept an assurance that "our OT network is isolated, so AI security is not a concern." The moment you deploy AI, you are creating new connections.</p>`,
      keyTerms: ['Air Gap', 'OT Security', 'PLC', 'Availability Priority']
    },
    {
      id: 'm08-s03',
      title: 'The OT Threat Landscape: Real Attacks on Industrial Systems',
      type: 'concept',
      content: `<p>Industrial cyberattacks are not theoretical. Here are three real incidents every industrial AI leader should know — because they illustrate exactly what attackers are capable of and what the consequences look like.</p>
<h3>Triton / TRISIS (2017) — The Most Dangerous ICS Malware Ever Discovered</h3>
<p><strong>Triton</strong> was malware specifically designed to attack <strong>Triconex Safety Instrumented Systems (SIS)</strong> — the final layer of automated safety protection in petrochemical plants. These are the systems that trigger emergency shutdowns when a unit exceeds safe operating parameters.</p>
<p>It targeted a petrochemical plant in the Middle East. The attackers' goal was not data theft — it was <strong>physical destruction</strong>. By disabling the SIS, they could allow an unsafe condition to escalate without triggering an emergency shutdown. The attack was only discovered when it accidentally triggered a safety shutdown due to a bug in the malware itself.</p>
<p>The significance for AI leaders: <strong>if your AI platform has any connectivity to SIS networks, that is an unacceptable risk</strong>. SIS networks must remain completely isolated from AI data pipelines.</p>
<h3>Industroyer / Crashoverride (2016) — Attack on Ukraine's Power Grid</h3>
<p><strong>Industroyer</strong> was modular malware specifically designed to speak <em>industrial protocols</em> — IEC 104, IEC 101, GOOSE, and OPC DA. It attacked Ukraine's power grid, causing a blackout affecting 230,000 customers. What made it particularly dangerous was that it could directly manipulate industrial control systems without needing to compromise the underlying operating system. It understood the language of industrial equipment.</p>
<h3>Stuxnet (2010) — The First Known Cyberweapon</h3>
<p><strong>Stuxnet</strong> targeted Iranian nuclear centrifuges via Siemens PLCs. It was the first known state-sponsored cyberweapon designed to cause physical damage to industrial equipment. Stuxnet spread via USB drives and deliberately remained hidden while slowly damaging centrifuges by causing them to spin at incorrect speeds — while reporting normal operation to operators.</p>
<h3>Key Lessons Across All Three</h3>
<ul>
  <li><strong>These attacks are patient and sophisticated</strong>. Attackers spend months or years inside networks before striking. They study the target's systems carefully.</li>
  <li><strong>They target industrial protocols and industrial equipment</strong>, not just IT systems.</li>
  <li><strong>The threat actors include nation-states</strong> (Russia, China, Iran, North Korea), organized crime, and hacktivists.</li>
  <li><strong>The goal is often physical damage</strong>, not just disruption — a critical distinction for refineries.</li>
</ul>`,
      keyTerms: ['Triton malware', 'Stuxnet', 'SIS (Safety Instrumented System)', 'ICS', 'SCADA']
    },
    {
      id: 'm08-s04',
      title: 'AI-Specific Cybersecurity Threats',
      type: 'deep-dive',
      content: `<p>Beyond the general OT threat landscape, AI systems introduce a new category of attacks that are specific to machine learning models and data pipelines. As an AI transformation leader, you need to understand these because they are novel risks that your cybersecurity team may not yet be thinking about.</p>
<h3>Data Poisoning</h3>
<p><strong>Data poisoning</strong> is an attack where adversaries inject false or manipulated data into the training dataset — either before or during model training. The result is a model that appears to work normally under typical conditions but has been trained to fail under specific conditions that the attacker can trigger.</p>
<p><em>Industrial example:</em> An attacker slowly introduces falsified "normal" sensor readings into your historian during an early-stage cyberattack. Your anomaly detection AI model is trained on this poisoned data. When the actual attack reaches its critical phase, the model classifies the anomalous conditions as normal — because it was trained to do so.</p>
<p><strong>Defense:</strong> Data provenance tracking, statistical anomaly detection on training data, data integrity validation before model training.</p>
<h3>Adversarial Attacks (Model Evasion)</h3>
<p>In an <strong>adversarial attack</strong>, the attacker crafts specific inputs designed to fool a trained model into making incorrect predictions — while the inputs appear normal to human observers and other systems.</p>
<p><em>Industrial example:</em> An attacker with access to sensor communications slightly modifies temperature and pressure readings in a way that causes your predictive maintenance model to classify a failing pump as healthy. The pump fails, causing an unplanned shutdown.</p>
<p>These attacks require the attacker to have either access to the model or the ability to probe it extensively. This is a realistic threat if a vendor-hosted model is accessible via API.</p>
<h3>Adversarial Sensor Spoofing</h3>
<p>Physically or digitally manipulating sensor hardware to feed false data to AI models. This is a hybrid physical/cyber attack. A compromised field device can send fabricated readings that cause an AI to recommend incorrect setpoint changes.</p>
<h3>Model Theft</h3>
<p>An attacker queries an AI model extensively to reconstruct a copy of it. In a refinery context, proprietary optimization models represent significant intellectual property and competitive advantage. A process optimization model trained on 10 years of operational data is a valuable asset.</p>
<h3>Supply Chain Attacks</h3>
<p>Arguably the most dangerous vector: compromising an AI vendor's software or data pipeline <em>before</em> it reaches your refinery. Your vendor's model update contains malware. Your data pipeline software has a backdoor inserted during development. This is why <strong>vendor security due diligence is not optional</strong> — it is a core AI leadership responsibility.</p>`,
      keyTerms: ['Data Poisoning', 'Adversarial Attack', 'Sensor Spoofing', 'Supply Chain Attack', 'Model Theft']
    },
    {
      id: 'm08-s05',
      title: 'Key Cybersecurity Frameworks for Industrial Settings',
      type: 'concept',
      content: `<p>Cybersecurity frameworks provide the common language you need to set requirements with vendors, engage with your OT security team, and demonstrate credibility in technical discussions. You do not need to know every clause of these standards — but you need to know what they are, what they cover, and when to reference them.</p>
<h3>IEC 62443 — The Primary Industrial Cybersecurity Standard</h3>
<p><strong>IEC 62443</strong> is the international standard specifically designed for industrial automation and control system security. It defines:</p>
<ul>
  <li><strong>Security Levels (SL0-SL4)</strong>: a hierarchy of security capability requirements, from basic (SL1) to protection against state-sponsored attacks (SL4)</li>
  <li><strong>Zones and Conduits model</strong>: divide the OT network into security zones. Define which communications are allowed between zones (conduits). Any AI deployment must fit within this framework.</li>
  <li>Responsibilities across <strong>asset owners</strong> (you), <strong>system integrators</strong>, and <strong>product suppliers</strong> (vendors)</li>
</ul>
<p><strong>Practical implication:</strong> If a vendor does not mention IEC 62443 in their security documentation, that is a significant red flag. You should ask explicitly: "Which IEC 62443 security levels does your solution support?"</p>
<h3>NIST Cybersecurity Framework (NIST CSF)</h3>
<p>The <strong>NIST CSF</strong> organizes cybersecurity activities into 5 core functions: <strong>Identify → Protect → Detect → Respond → Recover</strong>. This is not industrial-specific, but it is widely understood and provides a useful structure for building your AI cybersecurity program. When talking to a CFO or board about cybersecurity investment, the NIST CSF language is recognized and respected.</p>
<h3>NERC CIP (Critical Infrastructure Protection)</h3>
<p><strong>NERC CIP</strong> is mandatory for North American electric utilities. It is not directly applicable to most refineries, but it sets a high bar for industrial cybersecurity practice. If your refinery benchmarks against it, that signals a sophisticated security posture.</p>
<h3>ISA/IEC 62443 Zones and Conduits in Practice</h3>
<p>This is the most operationally relevant concept. The Zones and Conduits model says: group industrial assets into security zones based on their security requirements and exposure level. Define the rules for communication between zones (conduits). For AI deployment, this means:</p>
<ul>
  <li>Your AI platform lives in the IT zone or a DMZ — never in the OT zone</li>
  <li>Data flows <em>from</em> OT to AI via a defined conduit with specific access controls</li>
  <li>Nothing from the AI platform flows <em>back into</em> the OT zone without going through a human-operated control layer</li>
</ul>`,
      keyTerms: ['IEC 62443', 'NIST CSF', 'NERC CIP', 'DMZ', 'Zero-Trust']
    },
    {
      id: 'm08-s06',
      title: 'Zero-Trust Architecture for Industrial AI',
      type: 'deep-dive',
      content: `<p>Traditional network security relied on the principle: <em>"Trust everything inside the network perimeter."</em> If a device was on the plant network, it was trusted. The problem with this model — especially obvious after Stuxnet and Triton — is that once an attacker gets past the perimeter, they have unrestricted access.</p>
<p><strong>Zero-trust</strong> replaces this with a simple principle: <strong>"Trust nothing by default. Verify everything, every time."</strong> Every device, user, and application must authenticate and be authorized for each access request — even if they are already inside the network.</p>
<h3>Zero-Trust Applied to Industrial AI Deployments</h3>
<p>Here is what zero-trust means in practice for each component of your AI system:</p>
<ul>
  <li><strong>AI Platform Access to Historian Data:</strong> The AI platform does not get broad access to the OT network. It gets specifically scoped, read-only access to specific data streams from the historian. This access is authenticated (the AI platform must present credentials), authorized (only to the specific tags it needs), and audited (every data pull is logged).</li>
  <li><strong>Model Serving Endpoints:</strong> Any API endpoint that serves model predictions must be encrypted (HTTPS/TLS), require authentication from consuming applications, and log every request with timestamp, requestor, inputs, and outputs.</li>
  <li><strong>Vendor Access:</strong> Third-party AI vendors who need access to your environment get time-limited, narrowly scoped access. They connect through a bastion host with full session recording. Their access is revoked automatically when the session ends.</li>
  <li><strong>Human operators accessing the AI interface:</strong> Role-based access control. Operators see alerts for their units. Engineers see model performance dashboards. Only designated AI engineers can modify model configurations.</li>
</ul>
<h3>The Critical Principle: Read-Only AI Access to OT</h3>
<p>This principle is non-negotiable and deserves emphasis: <strong>the AI platform should ONLY read data from the OT historian. It should never write directly to DCS, PLCs, or any OT system.</strong></p>
<p>Any AI-generated recommendation must travel through a human operator (or a validated APC layer with human oversight) before it actuates anything in the physical plant. This is not a technical limitation — it is a deliberate architectural decision that protects against the consequences of a compromised AI model.</p>
<p>If a vendor tells you their AI "directly controls" plant equipment — that is a red flag requiring serious scrutiny and validation before acceptance.</p>`,
      keyTerms: ['Zero-Trust', 'Least Privilege', 'Air Gap', 'DMZ']
    },
    {
      id: 'm08-s07',
      title: 'Secure AI Deployment Principles',
      type: 'concept',
      content: `<p>These six principles should be treated as non-negotiable requirements for any AI deployment in your transformation program. They are concrete enough to write into vendor contracts and technical specifications.</p>
<h3>Principle 1 — Data Isolation</h3>
<p>AI models train on copies of historian data, never directly on live OT data streams. You create an <strong>operational data lake</strong> in the IT zone — a secure repository of historical and near-real-time data. The AI platform reads from this data lake. The OT historian is not directly exposed to AI training processes.</p>
<h3>Principle 2 — Read-Only OT Integration</h3>
<p>As established in the zero-trust section: <strong>AI never writes to OT systems directly</strong>. Data flows one way: from OT historian to data lake to AI platform. Period.</p>
<h3>Principle 3 — Human-in-the-Loop</h3>
<p>AI generates recommendations. A human operator reviews and executes. No automated actuation without extensive validation (at minimum 6 months of shadow mode operation, independent safety review, and explicit operations management sign-off). This principle protects against both cybersecurity risks and simple model errors.</p>
<h3>Principle 4 — Model Versioning and Audit</h3>
<p>Every model version is logged with its training data, parameters, and performance metrics. Every prediction is logged with timestamp, inputs, and outputs. This creates a full audit trail. If something goes wrong — a bad recommendation during a process upset — you can trace exactly what the model received as input and what it recommended. This is also your defense in a liability investigation.</p>
<h3>Principle 5 — Vendor Security Requirements</h3>
<p>Before signing any AI vendor contract, require them to answer: Which IEC 62443 security levels does your solution support? Where does our operational data reside? Who within your organization can access our data? Have you undergone a third-party penetration test in the last 12 months? What is your incident disclosure policy? These are not optional questions.</p>
<h3>Principle 6 — Incident Response Plan</h3>
<p>You must have a specific, documented, and tested plan for: "What if the AI model gives wrong advice during a process emergency?" Operators must know exactly how to disable AI guidance in under 30 seconds. This should be part of operator training. The plan should be reviewed and tested in tabletop exercises annually.</p>`,
      keyTerms: ['Data Isolation', 'Zero-Trust', 'Least Privilege', 'IEC 62443', 'Audit Trail']
    },
    {
      id: 'm08-s08',
      title: 'Red Flags, Your Role, and Building a Cyber-Aware Team',
      type: 'case-study',
      content: `<p>You will sit through vendor pitches. Some vendors are sophisticated and security-conscious. Others will propose architectures that would horrify your OT security team. Your job is to recognize the difference before you sign a contract.</p>
<h3>Red Flags in Vendor Pitches</h3>
<p>Stop the conversation and ask hard questions if you hear any of the following:</p>
<ul>
  <li><strong>"We'll need direct access to your DCS for real-time control."</strong> This is the clearest possible red flag. A DCS is a safety-critical system. No external AI vendor should have direct write access to it without extraordinary validation and safeguards. Push back hard.</li>
  <li><strong>"Just open this port on your OT firewall."</strong> "Just" is doing a lot of work in that sentence. Every open port in the OT firewall is a potential attack vector. Any request to modify OT firewall rules must go through your cybersecurity team and be documented with a formal risk assessment.</li>
  <li><strong>"Your data will be stored on our cloud — don't worry about it."</strong> You should absolutely worry about it. Where is the data center? What jurisdiction? Who has access? What are the data residency requirements for your country of operation? Regulatory requirements in many regions prohibit transferring operational data to foreign servers.</li>
  <li><strong>"Our AI directly actuates control valves."</strong> Unless this has been through a full safety lifecycle review equivalent to a Safety Instrumented Function, this is not acceptable at a greenfield stage of AI deployment.</li>
</ul>
<h3>Your Role as AI Transformation Leader</h3>
<p>You are not the CISO, but you are the person responsible for ensuring that the AI program does not create new vulnerabilities. This means:</p>
<ul>
  <li><strong>Set cybersecurity requirements BEFORE procurement begins</strong> — not after a vendor has been selected</li>
  <li><strong>Write security requirements into vendor contracts</strong> — IEC 62443 compliance, penetration testing obligations, data residency, incident disclosure timelines</li>
  <li><strong>Require penetration testing</strong> of AI components before go-live and annually thereafter</li>
  <li><strong>Mandate data residency requirements</strong> — know where your operational data is at all times</li>
</ul>
<h3>Building a Cyber-Aware AI Team</h3>
<p>The most dangerous hire for an industrial AI program is a brilliant cloud/data scientist who has never seen an OT network and doesn't understand why you can't just "connect to the API." Your team needs to understand OT network architecture, the IEC 62443 zones model, and why industrial data is not like enterprise data.</p>
<p>Make cybersecurity awareness part of AI team onboarding. Schedule a half-day with the OT security team for every new AI hire. This investment pays dividends every time a team member proposes an architecture that would otherwise have created a vulnerability.</p>`,
      keyTerms: ['IEC 62443', 'OT Security', 'Zero-Trust', 'Vendor Risk', 'SIS (Safety Instrumented System)']
    }
  ],
  diagram: {
    title: 'Industrial Network Security Architecture for AI Deployment',
    description: 'Shows the OT and IT zones, DMZ, attack vectors, and secure data flow path from plant systems to AI platform. IEC 62443 zone boundaries are marked.',
    svgContent: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 420">
  <defs>
    <marker id="arrow-green" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
      <path d="M0,0 L0,6 L8,3 z" fill="#16a34a"/>
    </marker>
    <marker id="arrow-red" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
      <path d="M0,0 L0,6 L8,3 z" fill="#dc2626"/>
    </marker>
  </defs>

  <!-- Background zones -->
  <!-- OT Zone -->
  <rect x="20" y="50" width="240" height="330" rx="12" fill="#fef2f2" stroke="#dc2626" stroke-width="2" stroke-dasharray="6,3"/>
  <text x="140" y="75" text-anchor="middle" font-size="13" font-weight="bold" fill="#dc2626">OT ZONE</text>
  <text x="140" y="90" text-anchor="middle" font-size="10" fill="#dc2626">IEC 62443 Security Level 3+</text>

  <!-- DMZ -->
  <rect x="290" y="50" width="160" height="330" rx="12" fill="#fffbeb" stroke="#d97706" stroke-width="2" stroke-dasharray="6,3"/>
  <text x="370" y="75" text-anchor="middle" font-size="13" font-weight="bold" fill="#d97706">DMZ</text>
  <text x="370" y="90" text-anchor="middle" font-size="10" fill="#d97706">Data Diode / Firewall</text>

  <!-- IT Zone -->
  <rect x="480" y="50" width="220" height="230" rx="12" fill="#f0fdf4" stroke="#16a34a" stroke-width="2" stroke-dasharray="6,3"/>
  <text x="590" y="75" text-anchor="middle" font-size="13" font-weight="bold" fill="#16a34a">IT ZONE</text>
  <text x="590" y="90" text-anchor="middle" font-size="10" fill="#16a34a">IEC 62443 Security Level 2</text>

  <!-- Cloud -->
  <rect x="730" y="50" width="150" height="230" rx="12" fill="#eff6ff" stroke="#2563eb" stroke-width="2" stroke-dasharray="6,3"/>
  <text x="805" y="75" text-anchor="middle" font-size="13" font-weight="bold" fill="#2563eb">CLOUD</text>
  <text x="805" y="90" text-anchor="middle" font-size="10" fill="#2563eb">Model Training</text>

  <!-- OT Zone Components -->
  <rect x="40" y="105" width="100" height="45" rx="6" fill="#fee2e2" stroke="#dc2626" stroke-width="1.5"/>
  <text x="90" y="124" text-anchor="middle" font-size="11" font-weight="bold" fill="#991b1b">DCS</text>
  <text x="90" y="140" text-anchor="middle" font-size="9" fill="#991b1b">Distributed Control</text>

  <rect x="155" y="105" width="90" height="45" rx="6" fill="#fee2e2" stroke="#dc2626" stroke-width="1.5"/>
  <text x="200" y="124" text-anchor="middle" font-size="11" font-weight="bold" fill="#991b1b">PLCs</text>
  <text x="200" y="140" text-anchor="middle" font-size="9" fill="#991b1b">Controllers</text>

  <rect x="40" y="175" width="100" height="45" rx="6" fill="#fecaca" stroke="#dc2626" stroke-width="1.5"/>
  <text x="90" y="194" text-anchor="middle" font-size="11" font-weight="bold" fill="#991b1b">SIS</text>
  <text x="90" y="210" text-anchor="middle" font-size="9" fill="#991b1b">Safety Systems</text>

  <rect x="155" y="175" width="90" height="45" rx="6" fill="#fee2e2" stroke="#dc2626" stroke-width="1.5"/>
  <text x="200" y="194" text-anchor="middle" font-size="11" font-weight="bold" fill="#991b1b">Sensors</text>
  <text x="200" y="210" text-anchor="middle" font-size="9" fill="#991b1b">Field Devices</text>

  <rect x="70" y="245" width="130" height="45" rx="6" fill="#fde68a" stroke="#d97706" stroke-width="1.5"/>
  <text x="135" y="264" text-anchor="middle" font-size="11" font-weight="bold" fill="#92400e">Historian</text>
  <text x="135" y="280" text-anchor="middle" font-size="9" fill="#92400e">AVEVA PI System</text>

  <!-- DMZ Component -->
  <rect x="305" y="130" width="130" height="50" rx="6" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/>
  <text x="370" y="151" text-anchor="middle" font-size="11" font-weight="bold" fill="#92400e">Data Diode /</text>
  <text x="370" y="166" text-anchor="middle" font-size="11" font-weight="bold" fill="#92400e">PI Web API</text>

  <rect x="305" y="205" width="130" height="50" rx="6" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/>
  <text x="370" y="226" text-anchor="middle" font-size="11" font-weight="bold" fill="#92400e">OPC-UA</text>
  <text x="370" y="241" text-anchor="middle" font-size="9" fill="#92400e">Secure Conduit</text>

  <!-- IT Zone Components -->
  <rect x="495" y="105" width="120" height="45" rx="6" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/>
  <text x="555" y="124" text-anchor="middle" font-size="11" font-weight="bold" fill="#166534">Data Lake</text>
  <text x="555" y="140" text-anchor="middle" font-size="9" fill="#166534">Operational Data Store</text>

  <rect x="495" y="175" width="120" height="45" rx="6" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/>
  <text x="555" y="194" text-anchor="middle" font-size="11" font-weight="bold" fill="#166534">AI Platform</text>
  <text x="555" y="210" text-anchor="middle" font-size="9" fill="#166534">Inference Engine</text>

  <rect x="635" y="105" width="55" height="45" rx="6" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/>
  <text x="662" y="124" text-anchor="middle" font-size="10" font-weight="bold" fill="#166534">Model</text>
  <text x="662" y="140" text-anchor="middle" font-size="10" font-weight="bold" fill="#166534">Registry</text>

  <rect x="635" y="175" width="55" height="45" rx="6" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/>
  <text x="662" y="194" text-anchor="middle" font-size="10" font-weight="bold" fill="#166534">Monitor</text>
  <text x="662" y="210" text-anchor="middle" font-size="10" fill="#166534">MLOps</text>

  <!-- Cloud Components -->
  <rect x="745" y="105" width="120" height="45" rx="6" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5"/>
  <text x="805" y="124" text-anchor="middle" font-size="11" font-weight="bold" fill="#1e40af">Model Training</text>
  <text x="805" y="140" text-anchor="middle" font-size="9" fill="#1e40af">Azure ML / AWS</text>

  <rect x="745" y="175" width="120" height="45" rx="6" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5"/>
  <text x="805" y="194" text-anchor="middle" font-size="11" font-weight="bold" fill="#1e40af">Experiment</text>
  <text x="805" y="210" text-anchor="middle" font-size="9" fill="#1e40af">Tracking</text>

  <!-- SECURE DATA FLOW (green arrows) -->
  <!-- Historian to DMZ -->
  <line x1="200" y1="268" x2="302" y2="155" stroke="#16a34a" stroke-width="2.5" marker-end="url(#arrow-green)"/>
  <!-- DMZ to Data Lake -->
  <line x1="437" y1="155" x2="493" y2="128" stroke="#16a34a" stroke-width="2.5" marker-end="url(#arrow-green)"/>
  <!-- Data Lake to AI Platform -->
  <line x1="555" y1="150" x2="555" y2="173" stroke="#16a34a" stroke-width="2.5" marker-end="url(#arrow-green)"/>
  <!-- IT to Cloud (model training) -->
  <line x1="692" y1="128" x2="743" y2="128" stroke="#2563eb" stroke-width="2" stroke-dasharray="5,3" marker-end="url(#arrow-green)"/>

  <!-- ATTACK VECTORS (red dashed arrows) -->
  <!-- USB Attack -->
  <line x1="90" y1="295" x2="90" y2="352" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,3" marker-end="url(#arrow-red)"/>

  <!-- Vendor Remote Access -->
  <line x1="805" y1="280" x2="600" y2="280" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,3" marker-end="url(#arrow-red)"/>

  <!-- Supply Chain Attack on Cloud -->
  <line x1="860" y1="50" x2="860" y2="105" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,3" marker-end="url(#arrow-red)"/>

  <!-- Attack Labels -->
  <rect x="300" y="340" width="115" height="30" rx="4" fill="#fee2e2" stroke="#dc2626" stroke-width="1"/>
  <text x="357" y="353" text-anchor="middle" font-size="9" font-weight="bold" fill="#dc2626">USB / Maintenance</text>
  <text x="357" y="365" text-anchor="middle" font-size="9" fill="#dc2626">Laptop Intrusion</text>
  <line x1="140" y1="352" x2="300" y2="355" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="4,2"/>

  <rect x="490" y="340" width="130" height="30" rx="4" fill="#fee2e2" stroke="#dc2626" stroke-width="1"/>
  <text x="555" y="353" text-anchor="middle" font-size="9" font-weight="bold" fill="#dc2626">Vendor Remote</text>
  <text x="555" y="365" text-anchor="middle" font-size="9" fill="#dc2626">Access Vector</text>
  <line x1="700" y1="280" x2="620" y2="355" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="4,2"/>

  <rect x="720" y="340" width="115" height="30" rx="4" fill="#fee2e2" stroke="#dc2626" stroke-width="1"/>
  <text x="777" y="353" text-anchor="middle" font-size="9" font-weight="bold" fill="#dc2626">Supply Chain /</text>
  <text x="777" y="365" text-anchor="middle" font-size="9" fill="#dc2626">Cloud Attack</text>
  <line x1="855" y1="283" x2="800" y2="340" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="4,2"/>

  <!-- Legend -->
  <rect x="20" y="390" width="200" height="25" rx="4" fill="white" stroke="#e5e7eb" stroke-width="1"/>
  <line x1="30" y1="403" x2="55" y2="403" stroke="#16a34a" stroke-width="2.5"/>
  <text x="60" y="407" font-size="10" fill="#374151">Secure data flow (read-only)</text>

  <rect x="240" y="390" width="180" height="25" rx="4" fill="white" stroke="#e5e7eb" stroke-width="1"/>
  <line x1="250" y1="403" x2="275" y2="403" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,3"/>
  <text x="280" y="407" font-size="10" fill="#374151">Attack vector / threat</text>

  <rect x="440" y="390" width="190" height="25" rx="4" fill="white" stroke="#e5e7eb" stroke-width="1"/>
  <text x="445" y="407" font-size="10" fill="#374151">NO write-back from AI to OT</text>
</svg>`
  },
  video: {
    videoId: 'erp8-ZCy9WQ',
    title: 'Watch: ICS/SCADA Cybersecurity Fundamentals',
    start: 30,
    end: 270,
    placement: 'm08-s03',
    description: 'Overview of industrial control system cybersecurity threats, including real-world attack examples and defense strategies'
  },
  glossary: [
    { term: 'ICS', definition: 'Industrial Control System — the broad category of systems used to control industrial processes, including SCADA, DCS, and PLCs.' },
    { term: 'SCADA', definition: 'Supervisory Control and Data Acquisition — a system for remote monitoring and control of industrial processes, common in pipelines, utilities, and refineries.' },
    { term: 'SIS (Safety Instrumented System)', definition: 'The automated safety layer in industrial plants that triggers emergency shutdowns when unsafe conditions are detected. Must be kept completely isolated from AI systems.' },
    { term: 'Air Gap', definition: 'Physical isolation of an OT network from external networks including the internet and corporate IT. Largely eroded in modern refineries due to remote access, IT/OT integration, and vendor connectivity.' },
    { term: 'Data Poisoning', definition: 'A cyberattack in which false data is injected into an AI model\'s training dataset to cause the model to behave incorrectly under conditions the attacker can trigger.' },
    { term: 'Adversarial Attack', definition: 'Crafting specific inputs to a trained AI model that cause it to make incorrect predictions, while the inputs appear normal to human observers or other systems.' },
    { term: 'IEC 62443', definition: 'The primary international standard for industrial automation and control system cybersecurity, defining security levels (SL0-SL4), zones, and conduits.' },
    { term: 'NIST CSF', definition: 'NIST Cybersecurity Framework — organizes cybersecurity activities into five functions: Identify, Protect, Detect, Respond, Recover.' },
    { term: 'Zero-Trust', definition: 'A security model that trusts nothing by default and requires every device, user, and application to authenticate and be authorized for each access request, regardless of network location.' },
    { term: 'DMZ', definition: 'Demilitarized Zone — a network segment between the OT zone and IT zone that acts as a buffer, preventing direct connections between the two.' },
    { term: 'Triton malware', definition: 'Malware discovered in 2017 specifically designed to attack Safety Instrumented Systems in petrochemical plants, aiming to disable safety systems and cause physical damage. The most dangerous known ICS malware.' },
    { term: 'Stuxnet', definition: 'The first known state-sponsored cyberweapon (2010), designed to damage Iranian nuclear centrifuges by manipulating Siemens PLCs while concealing the attack from operators.' },
    { term: 'OT Security', definition: 'Operational Technology Security — cybersecurity for industrial control systems where the consequences of failure include physical damage, environmental harm, or loss of life, not just data loss.' },
    { term: 'Least Privilege', definition: 'The security principle that every user, application, and device should have only the minimum permissions required to perform its specific function — nothing more.' }
  ]
};
