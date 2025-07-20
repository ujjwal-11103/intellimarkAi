export interface CaseStudy {
    id: string;
    title: string;
    description: string;
    industry: string;
    industryLabel: string;
    metrics: {
      improvement: string;
      timeFrame: string;
    };
    problem: string;
    solution: string;
    results: string[];
    technologies: string[];
    challenges: string[];
    approach: string[];
    testimonial: {
      quote: string;
      author: string;
      position: string;
      company: string;
    };
  }
  
  export const caseStudiesData: CaseStudy[] = [
    {
      id: '1',
      title: 'AI-Powered Diagnostic Assistant',
      description: 'Revolutionizing medical diagnostics with machine learning algorithms that assist doctors in identifying diseases faster and more accurately.',
      industry: 'healthcare',
      industryLabel: 'Healthcare',
      metrics: {
        improvement: '94%',
        timeFrame: '6 months'
      },
      problem: 'Healthcare providers were experiencing delays in diagnostic processes, leading to increased patient wait times and potential misdiagnoses. The manual review process was time-consuming and prone to human error.',
      solution: 'We developed an AI-powered diagnostic assistant that analyzes medical images, patient history, and symptoms to provide preliminary diagnostic suggestions to healthcare professionals.',
      results: [
        '94% improvement in diagnostic accuracy',
        '67% reduction in diagnosis time',
        '45% decrease in patient wait times',
        '89% satisfaction rate among medical professionals'
      ],
      technologies: ['Computer Vision', 'Natural Language Processing', 'Deep Learning', 'TensorFlow'],
      challenges: [
        'Ensuring HIPAA compliance and data security',
        'Training models with diverse medical datasets',
        'Integration with existing hospital systems'
      ],
      approach: [
        'Conducted extensive research on medical diagnostic patterns',
        'Developed custom neural networks for image analysis',
        'Implemented real-time processing capabilities',
        'Extensive testing with medical professionals'
      ],
      testimonial: {
        quote: "The AI diagnostic assistant has transformed our workflow. We're now able to provide faster, more accurate diagnoses while maintaining the human touch that's essential in healthcare.",
        author: "Dr. Sarah Chen",
        position: "Chief Medical Officer",
        company: "Metropolitan Health System"
      }
    },
    {
      id: '2',
      title: 'Intelligent Fraud Detection System',
      description: 'Advanced AI algorithms that detect fraudulent transactions in real-time, protecting financial institutions and their customers.',
      industry: 'finance',
      industryLabel: 'Finance',
      metrics: {
        improvement: '87%',
        timeFrame: '4 months'
      },
      problem: 'A major financial institution was losing millions annually to fraudulent transactions. Traditional rule-based systems were generating too many false positives and missing sophisticated fraud patterns.',
      solution: 'Our team implemented a machine learning system that analyzes transaction patterns, user behavior, and contextual data to identify fraudulent activities with unprecedented accuracy.',
      results: [
        '87% reduction in fraudulent transactions',
        '62% decrease in false positives',
        '$12M saved annually',
        '99.7% system uptime'
      ],
      technologies: ['Machine Learning', 'Real-time Analytics', 'Anomaly Detection', 'Neural Networks'],
      challenges: [
        'Processing millions of transactions per second',
        'Balancing security with user experience',
        'Adapting to evolving fraud techniques'
      ],
      approach: [
        'Analyzed historical transaction data patterns',
        'Developed ensemble learning models',
        'Implemented real-time processing pipeline',
        'Continuous model refinement and updates'
      ],
      testimonial: {
        quote: "Intellimark's fraud detection system has been a game-changer. We've significantly reduced losses while improving customer experience through fewer false declines.",
        author: "Michael Rodriguez",
        position: "VP of Risk Management",
        company: "SecureBank Financial"
      }
    },
    {
      id: '3',
      title: 'Personalized Recommendation Engine',
      description: 'Dynamic AI system that personalizes product recommendations, increasing conversion rates and customer satisfaction.',
      industry: 'ecommerce',
      industryLabel: 'E-commerce',
      metrics: {
        improvement: '156%',
        timeFrame: '3 months'
      },
      problem: 'An e-commerce platform was struggling with low conversion rates and poor customer engagement. Generic product recommendations were not resonating with diverse customer preferences.',
      solution: 'We built a sophisticated recommendation engine using collaborative filtering, content-based filtering, and deep learning to provide personalized product suggestions.',
      results: [
        '156% increase in conversion rates',
        '73% improvement in user engagement',
        '89% increase in average order value',
        '92% customer satisfaction score'
      ],
      technologies: ['Collaborative Filtering', 'Deep Learning', 'Natural Language Processing', 'Real-time Analytics'],
      challenges: [
        'Handling sparse user-item interaction data',
        'Cold start problem for new users and products',
        'Scaling to millions of users and products'
      ],
      approach: [
        'Implemented hybrid recommendation algorithms',
        'Developed real-time user behavior tracking',
        'Created A/B testing framework for optimization',
        'Built scalable cloud infrastructure'
      ],
      testimonial: {
        quote: "The recommendation engine transformed our business. Customers are finding products they love, and our revenue has grown substantially.",
        author: "Lisa Wang",
        position: "Head of E-commerce",
        company: "StyleCraft Marketplace"
      }
    },
    {
      id: '4',
      title: 'Predictive Maintenance Platform',
      description: 'IoT-enabled AI system that predicts equipment failures before they occur, minimizing downtime and maintenance costs.',
      industry: 'manufacturing',
      industryLabel: 'Manufacturing',
      metrics: {
        improvement: '78%',
        timeFrame: '8 months'
      },
      problem: 'A manufacturing company was experiencing unexpected equipment failures, resulting in costly downtime and emergency repairs. Reactive maintenance was proving inefficient and expensive.',
      solution: 'We developed a predictive maintenance platform that uses IoT sensors and machine learning to predict equipment failures weeks in advance.',
      results: [
        '78% reduction in unplanned downtime',
        '45% decrease in maintenance costs',
        '92% prediction accuracy',
        '$2.3M annual cost savings'
      ],
      technologies: ['IoT Sensors', 'Time Series Analysis', 'Machine Learning', 'Predictive Analytics'],
      challenges: [
        'Integrating with legacy manufacturing systems',
        'Processing high-volume sensor data',
        'Creating accurate failure prediction models'
      ],
      approach: [
        'Deployed comprehensive IoT sensor network',
        'Developed custom time series forecasting models',
        'Created intuitive maintenance dashboard',
        'Implemented automated alert system'
      ],
      testimonial: {
        quote: "Intellimark's predictive maintenance solution has revolutionized our operations. We now prevent failures instead of reacting to them.",
        author: "James Thompson",
        position: "Operations Director",
        company: "Advanced Manufacturing Corp"
      }
    },
    {
      id: '5',
      title: 'Intelligent Patient Monitoring',
      description: 'Real-time AI monitoring system that tracks patient vitals and alerts medical staff to potential complications.',
      industry: 'healthcare',
      industryLabel: 'Healthcare',
      metrics: {
        improvement: '85%',
        timeFrame: '5 months'
      },
      problem: 'Hospital staff were overwhelmed with manual patient monitoring, leading to delayed responses to critical patient conditions and increased workload.',
      solution: 'An AI-powered patient monitoring system that continuously analyzes vital signs and patient data to predict and alert staff to potential medical emergencies.',
      results: [
        '85% faster emergency response time',
        '56% reduction in adverse events',
        '72% improvement in patient outcomes',
        '38% decrease in nurse workload'
      ],
      technologies: ['Real-time Analytics', 'Pattern Recognition', 'Alert Systems', 'Medical IoT'],
      challenges: [
        'Ensuring system reliability for critical applications',
        'Minimizing false alarms while maintaining sensitivity',
        'Integration with hospital information systems'
      ],
      approach: [
        'Analyzed patient data patterns and outcomes',
        'Developed multi-parameter monitoring algorithms',
        'Created intelligent alerting system',
        'Extensive validation with medical professionals'
      ],
      testimonial: {
        quote: "This monitoring system has significantly improved our ability to provide proactive patient care. It's like having an extra set of expert eyes on every patient.",
        author: "Dr. Maria Gonzalez",
        position: "Head of ICU",
        company: "City General Hospital"
      }
    },
    {
      id: '6',
      title: 'Algorithmic Trading Platform',
      description: 'High-frequency trading system powered by machine learning that optimizes trading strategies in real-time.',
      industry: 'finance',
      industryLabel: 'Finance',
      metrics: {
        improvement: '127%',
        timeFrame: '6 months'
      },
      problem: 'Investment firm was struggling to keep up with market volatility and was missing profitable trading opportunities due to manual decision-making processes.',
      solution: 'We created an algorithmic trading platform that uses machine learning to analyze market data, identify patterns, and execute trades automatically.',
      results: [
        '127% increase in trading profits',
        '89% reduction in execution time',
        '94% accuracy in market predictions',
        '76% decrease in trading risks'
      ],
      technologies: ['High-Frequency Trading', 'Machine Learning', 'Real-time Data Processing', 'Risk Analytics'],
      challenges: [
        'Processing massive amounts of market data in real-time',
        'Ensuring low-latency trade execution',
        'Managing and minimizing trading risks'
      ],
      approach: [
        'Built ultra-low latency data processing pipeline',
        'Developed ensemble trading algorithms',
        'Implemented comprehensive risk management',
        'Created real-time performance monitoring'
      ],
      testimonial: {
        quote: "The algorithmic trading platform has transformed our investment strategy. We're now able to capitalize on market opportunities that were previously impossible to catch.",
        author: "Robert Kim",
        position: "Chief Investment Officer",
        company: "Quantum Capital Management"
      }
    },
    {
      id: '7',
      title: 'Smart Inventory Optimization',
      description: 'AI-driven inventory management system that optimizes stock levels and predicts demand patterns.',
      industry: 'ecommerce',
      industryLabel: 'E-commerce',
      metrics: {
        improvement: '92%',
        timeFrame: '4 months'
      },
      problem: 'Retail chain was struggling with overstocking and stockouts, leading to increased carrying costs and lost sales opportunities.',
      solution: 'Intelligent inventory optimization system that predicts demand, optimizes stock levels, and automates replenishment decisions.',
      results: [
        '92% improvement in inventory turnover',
        '48% reduction in carrying costs',
        '67% decrease in stockouts',
        '34% increase in profit margins'
      ],
      technologies: ['Demand Forecasting', 'Optimization Algorithms', 'Supply Chain Analytics', 'Machine Learning'],
      challenges: [
        'Handling seasonal demand variations',
        'Coordinating across multiple distribution centers',
        'Integrating with existing ERP systems'
      ],
      approach: [
        'Analyzed historical sales and demand patterns',
        'Developed multi-variate forecasting models',
        'Created optimization algorithms for stock levels',
        'Implemented automated replenishment system'
      ],
      testimonial: {
        quote: "Our inventory management has never been more efficient. We're saving money while ensuring our customers always find what they need.",
        author: "Amanda Foster",
        position: "Supply Chain Director",
        company: "RetailMax Corporation"
      }
    },
    {
      id: '8',
      title: 'Quality Control Vision System',
      description: 'Computer vision system that automatically detects product defects with superhuman accuracy and speed.',
      industry: 'manufacturing',
      industryLabel: 'Manufacturing',
      metrics: {
        improvement: '96%',
        timeFrame: '7 months'
      },
      problem: 'Manufacturing line was experiencing quality issues with manual inspection missing defects, leading to customer complaints and increased returns.',
      solution: 'AI-powered computer vision system that inspects products at the speed of production, detecting even microscopic defects.',
      results: [
        '96% defect detection accuracy',
        '84% reduction in customer returns',
        '73% increase in inspection speed',
        '91% improvement in product quality'
      ],
      technologies: ['Computer Vision', 'Deep Learning', 'Image Processing', 'Edge Computing'],
      challenges: [
        'Achieving real-time processing at production speed',
        'Handling varying lighting and environmental conditions',
        'Training models with limited defect samples'
      ],
      approach: [
        'Deployed high-resolution cameras and lighting systems',
        'Developed custom CNN architectures for defect detection',
        'Implemented edge computing for real-time processing',
        'Created synthetic data augmentation techniques'
      ],
      testimonial: {
        quote: "The vision system has revolutionized our quality control. We're catching defects we never could before and our customers have noticed the improvement.",
        author: "David Park",
        position: "Quality Assurance Manager",
        company: "Precision Components Inc"
      }
    },
    {
      id: '9',
      title: 'Clinical Trial Optimization',
      description: 'AI system that optimizes clinical trial design and patient matching for faster, more effective medical research.',
      industry: 'healthcare',
      industryLabel: 'Healthcare',
      metrics: {
        improvement: '73%',
        timeFrame: '9 months'
      },
      problem: 'Pharmaceutical company was struggling with lengthy clinical trial timelines and difficulty finding suitable patient participants.',
      solution: 'Intelligent clinical trial optimization platform that matches patients to trials and optimizes trial design for better outcomes.',
      results: [
        '73% faster patient recruitment',
        '58% reduction in trial duration',
        '82% improvement in patient retention',
        '91% increase in trial success rate'
      ],
      technologies: ['Natural Language Processing', 'Patient Matching', 'Predictive Analytics', 'Data Mining'],
      challenges: [
        'Processing complex medical criteria and patient data',
        'Ensuring patient privacy and regulatory compliance',
        'Integrating with multiple healthcare systems'
      ],
      approach: [
        'Developed NLP system for medical criteria extraction',
        'Created intelligent patient matching algorithms',
        'Built predictive models for trial outcomes',
        'Implemented secure, compliant data processing'
      ],
      testimonial: {
        quote: "This platform has accelerated our research timeline significantly. We're bringing life-saving treatments to market faster than ever before.",
        author: "Dr. Jennifer Walsh",
        position: "Director of Clinical Research",
        company: "BioTech Innovations"
      }
    },
    {
      id: '10',
      title: 'Risk Assessment Automation',
      description: 'Automated risk assessment system that evaluates loan applications and investment opportunities using advanced AI.',
      industry: 'finance',
      industryLabel: 'Finance',
      metrics: {
        improvement: '89%',
        timeFrame: '5 months'
      },
      problem: 'Financial institution was spending too much time on manual risk assessments, leading to slow loan approvals and missed opportunities.',
      solution: 'AI-powered risk assessment system that automatically evaluates financial risk using multiple data sources and sophisticated algorithms.',
      results: [
        '89% faster risk assessment process',
        '76% improvement in risk prediction accuracy',
        '52% reduction in default rates',
        '94% customer satisfaction with faster approvals'
      ],
      technologies: ['Credit Scoring', 'Risk Analytics', 'Machine Learning', 'Alternative Data Sources'],
      challenges: [
        'Incorporating diverse data sources for comprehensive assessment',
        'Ensuring fair and unbiased decision-making',
        'Meeting regulatory compliance requirements'
      ],
      approach: [
        'Integrated multiple alternative data sources',
        'Developed ensemble risk scoring models',
        'Implemented bias detection and mitigation',
        'Created transparent decision explanation system'
      ],
      testimonial: {
        quote: "The automated risk assessment has transformed our lending process. We're making better decisions faster while maintaining responsible lending practices.",
        author: "Thomas Anderson",
        position: "Head of Risk Management",
        company: "Progressive Credit Union"
      }
    },
    {
      id: '11',
      title: 'Dynamic Pricing Engine',
      description: 'AI-powered pricing optimization that adjusts prices in real-time based on demand, competition, and market conditions.',
      industry: 'ecommerce',
      industryLabel: 'E-commerce',
      metrics: {
        improvement: '134%',
        timeFrame: '4 months'
      },
      problem: 'E-commerce business was losing revenue due to static pricing that didn\'t respond to market changes, competitor actions, or demand fluctuations.',
      solution: 'Dynamic pricing engine that continuously optimizes prices using machine learning to maximize revenue while staying competitive.',
      results: [
        '134% increase in revenue',
        '67% improvement in profit margins',
        '78% better competitive positioning',
        '85% increase in price optimization efficiency'
      ],
      technologies: ['Price Optimization', 'Competitive Intelligence', 'Demand Forecasting', 'Real-time Analytics'],
      challenges: [
        'Balancing revenue optimization with customer satisfaction',
        'Processing real-time competitor pricing data',
        'Handling complex pricing rules and constraints'
      ],
      approach: [
        'Developed real-time competitor monitoring system',
        'Created demand elasticity models',
        'Implemented constrained optimization algorithms',
        'Built comprehensive pricing analytics dashboard'
      ],
      testimonial: {
        quote: "The dynamic pricing engine has maximized our revenue potential. We're now pricing optimally across our entire catalog in real-time.",
        author: "Rachel Chen",
        position: "VP of Revenue Operations",
        company: "TechMart Online"
      }
    },
    {
      id: '12',
      title: 'Production Scheduling AI',
      description: 'Intelligent scheduling system that optimizes manufacturing workflows and resource allocation for maximum efficiency.',
      industry: 'manufacturing',
      industryLabel: 'Manufacturing',
      metrics: {
        improvement: '82%',
        timeFrame: '6 months'
      },
      problem: 'Manufacturing facility was struggling with inefficient production scheduling, leading to bottlenecks, idle time, and missed delivery deadlines.',
      solution: 'AI-powered production scheduling system that optimizes workflows, allocates resources efficiently, and adapts to changing conditions in real-time.',
      results: [
        '82% improvement in production efficiency',
        '64% reduction in idle time',
        '91% on-time delivery rate',
        '47% decrease in production costs'
      ],
      technologies: ['Optimization Algorithms', 'Resource Planning', 'Workflow Automation', 'Predictive Analytics'],
      challenges: [
        'Coordinating complex multi-stage production processes',
        'Handling unexpected equipment failures and delays',
        'Balancing multiple competing objectives and constraints'
      ],
      approach: [
        'Modeled complex production workflows and constraints',
        'Developed adaptive scheduling algorithms',
        'Implemented real-time monitoring and adjustment',
        'Created intuitive scheduling dashboard for operators'
      ],
      testimonial: {
        quote: "The AI scheduling system has transformed our manufacturing operations. We're producing more with the same resources and meeting all our delivery commitments.",
        author: "Mark Stevens",
        position: "Plant Manager",
        company: "Industrial Solutions Manufacturing"
      }
    }
  ];