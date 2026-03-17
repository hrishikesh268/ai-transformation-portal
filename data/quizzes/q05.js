window.QUIZ_M05 = {
  id: 'q05',
  moduleId: 'm05',
  title: 'AI & ML Fundamentals — Knowledge Check',
  questions: [
    {
      id: 'q05-01',
      type: 'mcq',
      question: 'A refinery wants to predict whether a centrifugal pump will fail within the next 30 days, using historical vibration and temperature data where past failures are labeled in the CMMS. Which category of machine learning is most appropriate?',
      options: [
        'Supervised Learning — because you have labeled examples of failures to train on',
        'Unsupervised Learning — because the model needs to discover failure patterns on its own',
        'Generative AI — because you need to generate predictions about future failures',
        'Reinforcement Learning — because the model should learn by interacting with the pump'
      ],
      correctIndex: 0,
      explanation: 'Supervised learning is correct here: you have labeled historical data (failure / no failure) paired with input features (sensor readings). The model learns the mapping from inputs to labels and applies it to new data. Unsupervised learning is used when you do not have labels. Generative AI creates content, not predictions from structured data. Reinforcement learning involves sequential decision-making with a reward signal, not classification from labeled examples.',
      interviewNote: 'In interviews, always justify your ML paradigm choice by referencing the data you have available. "We have labeled failure events in the CMMS" is the key fact that makes this supervised learning.'
    },
    {
      id: 'q05-02',
      type: 'mcq',
      question: 'Which of the following is NOT part of the machine learning pipeline?',
      options: [
        'Feature engineering — creating meaningful variables from raw sensor data',
        'Model training — adjusting model parameters to minimize prediction errors on labeled data',
        'Deploying an LLM to write the model code automatically',
        'Model validation — testing performance on data the model has never seen'
      ],
      correctIndex: 2,
      explanation: 'LLMs can assist with writing code as a productivity tool, but they are not a step in the ML pipeline. The ML pipeline consists of data collection, data cleaning, feature engineering, model training, validation, deployment, and monitoring. Each step is necessary; skipping validation is particularly dangerous as it masks overfitting.',
      interviewNote: null
    },
    {
      id: 'q05-03',
      type: 'mcq',
      question: 'A data scientist presents you with a predictive maintenance model that achieves 99.5% accuracy on the test set. Equipment failure is a rare event — only 1% of equipment-months result in a failure. What is the most important question to ask?',
      options: [
        'What is the RMSE of the model on the validation set?',
        'What are the precision and recall — and specifically, what fraction of actual failures does the model catch?',
        'Was XGBoost or a neural network used for training?',
        'Can the accuracy be improved further with more training data?'
      ],
      correctIndex: 1,
      explanation: 'With 1% of events being failures, a model that always predicts "no failure" achieves 99% accuracy without detecting a single real failure. Accuracy is meaningless for imbalanced datasets. Recall (what fraction of real failures does the model catch?) is the critical safety metric. Precision (what fraction of predicted failures are real?) determines how many false alarms operators will face. These two metrics define whether the model is actually useful.',
      interviewNote: 'This is a classic interview trap. Showing you recognize the imbalanced-class problem and pivot to precision/recall demonstrates real ML understanding.'
    },
    {
      id: 'q05-04',
      type: 'mcq',
      question: 'Which algorithm is most commonly used as a first-choice approach for quality prediction on tabular refinery data (structured rows and columns from historian and LIMS)?',
      options: [
        'A Transformer (the architecture behind GPT-4)',
        'Linear Regression — because refinery processes are linear',
        'XGBoost or gradient boosting — well-proven on tabular data with strong performance',
        'A convolutional neural network — designed for structured data'
      ],
      correctIndex: 2,
      explanation: 'Gradient boosting methods like XGBoost consistently perform best on tabular, structured data — the type that dominates in refinery AI. Transformers were designed for sequences (text, images) and are overkill for basic tabular problems, though they are applied to time-series. Linear regression is rarely adequate for the non-linear relationships in refinery processes. Convolutional neural networks are designed for grid-structured data like images, not tabular data.',
      interviewNote: null
    },
    {
      id: 'q05-05',
      type: 'mcq',
      question: 'In the context of AI for refineries, what is a "soft sensor"?',
      options: [
        'A physical sensor with improved sensitivity and lower failure rates',
        'A machine learning model that predicts a quality measurement (like octane or sulfur) in real time from process data, without waiting for a lab result',
        'A sensor that uses machine learning to self-calibrate when it drifts',
        'A generative AI system that suggests corrective actions to operators'
      ],
      correctIndex: 1,
      explanation: 'A soft sensor is a software-based measurement — an ML model trained to predict a quality or composition variable (flash point, octane, sulfur content) from continuous process measurements. It provides real-time quality estimates that are otherwise only available after a 4-8 hour lab analysis cycle. "Soft" distinguishes it from a physical ("hard") sensor instrument.',
      interviewNote: 'Soft sensors are one of the highest-ROI industrial AI applications and should be on your priority list in any refinery transformation interview.'
    },
    {
      id: 'q05-06',
      type: 'mcq',
      question: 'What does "overfitting" mean in the context of machine learning?',
      options: [
        'The model is trained on too much data, causing it to become overly complex',
        'The model performs well on training data but poorly on new, unseen data — it has memorized examples rather than learning the underlying pattern',
        'The model takes too long to train due to an excessively large feature set',
        'The model produces predictions outside the expected range of output values'
      ],
      correctIndex: 1,
      explanation: 'Overfitting occurs when a model learns the specific noise and patterns of the training data rather than the generalizable underlying relationship. It performs well on training data (which it has "memorized") but poorly on validation data it has never seen. The solution is to always evaluate model performance on a held-out validation set, use regularization techniques, and simplify the model if the training-validation performance gap is large.',
      interviewNote: null
    },
    {
      id: 'q05-07',
      type: 'truefalse',
      question: 'True or False: Generative AI (like ChatGPT) is the most appropriate technology for real-time process optimization in a refinery, because it has been trained on vast amounts of engineering knowledge.',
      options: ['True', 'False'],
      correctIndex: 1,
      explanation: 'False. Generative AI is trained on internet text and has no knowledge of a specific refinery\'s process behavior, equipment configuration, or current operating conditions. Real-time process optimization requires a supervised ML model trained on the specific refinery\'s historical data — temperatures, pressures, flows, and quality results from that plant. Generative AI is useful for documentation, natural language interfaces, and knowledge capture, but it cannot replace domain-specific ML models for operational optimization.',
      interviewNote: 'This distinction is critically important. Conflating ChatGPT with industrial AI in an interview for an AI transformation role at a refinery will immediately undermine your credibility.'
    },
    {
      id: 'q05-08',
      type: 'truefalse',
      question: 'True or False: In most industrial AI projects at refineries, the majority of time is spent training and tuning machine learning models.',
      options: ['True', 'False'],
      correctIndex: 1,
      explanation: 'False. The majority of time — consistently 60-70% — is spent on data collection, cleaning, and preparation. Industrial data has severe quality issues: sensor drift, stuck sensors, missing values, timestamp misalignment, and data silos across historian, LIMS, and CMMS. Model training itself is relatively fast. The bottleneck is always data. This is the most important operational reality for scoping industrial AI projects.',
      interviewNote: null
    },
    {
      id: 'q05-09',
      type: 'scenario',
      question: 'You are advising the plant manager of a refinery that wants to start its first AI project. The team is excited about large language models and wants to "bring ChatGPT into the control room." The plant has 5 years of good historian data, a well-maintained CMMS, and several pumps that have failed unexpectedly in the past 2 years. What do you recommend?',
      options: [
        'Support the LLM idea — ChatGPT can analyze process trends and recommend operator actions in natural language',
        'Redirect to supervised ML: build a predictive maintenance model for rotating equipment using the historian and CMMS data, where you have labeled failure events and proven ROI',
        'Wait 12 months for generative AI to mature enough to handle industrial data',
        'Recommend anomaly detection as the first step because it does not require labeled data'
      ],
      correctIndex: 1,
      explanation: 'The right answer is to redirect to supervised ML for predictive maintenance. The conditions are ideal: 5 years of historian data, a maintained CMMS with failure labels, and a documented problem (unexpected pump failures). This is a classic supervised learning use case with high data readiness and proven ROI. LLMs cannot optimize process conditions or predict failures from sensor data. Anomaly detection (option D) would also be reasonable, but supervised predictive maintenance is better positioned here given the available failure labels.',
      interviewNote: 'This is the scenario you will face repeatedly. The answer is always: match the use case to the data available, not to the most exciting technology.'
    },
    {
      id: 'q05-10',
      type: 'scenario',
      question: 'A vendor presents an AI model for predicting distillation column flooding. They show you a chart where the model achieves 94% accuracy on their training dataset and 91% accuracy on a separate test dataset. They have validated it at two other refineries. What is the most critical additional piece of information you need before agreeing to deploy this at your refinery?',
      options: [
        'The name of the algorithm they used — XGBoost or neural network',
        'The precision and recall values for the flooding prediction, and specifically the false positive rate that operators at the other refineries experienced',
        'Whether the model has been approved for use in regulated industries',
        'The size of the training dataset used for the model'
      ],
      correctIndex: 1,
      explanation: 'Accuracy alone tells you very little in this context. Column flooding is likely a rare event. What matters for deployment is: how often does the model predict flooding when there is no flooding (false positive rate, which drives alert fatigue) and how often does it miss actual flooding events (false negative rate, a safety concern). These are captured by precision and recall. The experience of operators at the other refineries is the most direct evidence of how the false positive rate plays out in practice.',
      interviewNote: 'In vendor evaluations, always drill into precision, recall, and operational experience at comparable sites. A model with good accuracy but high false positive rate will be disabled by operators within weeks.'
    }
  ]
};
