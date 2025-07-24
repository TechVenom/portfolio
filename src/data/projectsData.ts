import { Shield, Eye, Brain, Camera, Mic, AlertTriangle, Globe, Bot } from 'lucide-react';

export interface ProjectData {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  period: string;
  status: string;
  technologies: string[];
  icon: any;
  color: string;
  github: string;
  demo: string | null;
  category: string;
  categoryIcon: any;
  categoryColor: string;
  features: string[];
  challenges: string[];
  outcomes: string[];
  images: string[];
  techDetails: {
    architecture: string;
    database?: string;
    deployment?: string;
    testing?: string;
  };
  liveLinks?: {
    name: string;
    url: string;
    description: string;
  }[];
}

export const projectsData: ProjectData[] = [
  {
    id: 1,
    title: 'ShadowCloak',
    subtitle: 'Advanced Privacy & Anonymity Suite',
    description: 'An all-in-one modular cybersecurity toolkit focused on privacy preservation and anonymity. Includes encrypted communications, identity cloaking, and footprint obfuscation.',
    longDescription: 'ShadowCloak is a comprehensive cybersecurity suite designed for privacy-conscious users and security professionals. This advanced toolkit provides multi-layered anonymity features including encrypted communications, identity cloaking, digital footprint obfuscation, and secure browsing capabilities. Built with a modular Python architecture, it allows users to customize their privacy protection based on specific threat models. The system implements advanced cryptographic protocols, proxy chain management, and real-time threat detection to ensure maximum anonymity and security in hostile environments.',
    period: '2024 – Present',
    status: 'Active Development',
    technologies: ['Python', 'Bash', 'Linux', 'Cryptography', 'Shell Scripting'],
    icon: Shield,
    color: 'from-red-500 to-orange-500',
    github: 'https://github.com/TechVenom/ShadowCloak',
    demo: null,
    category: 'Cybersecurity',
    categoryIcon: Shield,
    categoryColor: 'from-red-500 to-orange-500',
    features: [
      'Encrypted communication channels',
      'Identity cloaking and anonymization',
      'Digital footprint obfuscation',
      'Secure browsing with Tor integration',
      'Modular architecture for customization',
      'Cross-platform compatibility',
      'Real-time threat detection',
      'Automated security hardening'
    ],
    challenges: [
      'Balancing security with usability',
      'Ensuring cross-platform compatibility',
      'Implementing robust encryption without performance loss',
      'Creating intuitive interfaces for complex security features'
    ],
    outcomes: [
      'Successfully deployed in production environments',
      'Positive feedback from security professionals',
      'Reduced digital footprint by 85% in testing',
      'Zero security breaches in deployed instances'
    ],
    images: [
      '/images/shadowcloak-1.jpg',
      '/images/shadowcloak-2.jpg',
      '/images/shadowcloak-3.jpg'
    ],
    techDetails: {
      architecture: 'Modular Python-based architecture with shell script automation',
      deployment: 'Docker containers with Kubernetes orchestration',
      testing: 'Comprehensive security testing with penetration testing protocols'
    }
  },
  {
    id: 2,
    title: 'ShadowVeil',
    subtitle: 'Next-Gen Security Framework',
    description: 'Real-time threat detection engine with autonomous response capabilities. Integrates with modern systems for seamless security operations.',
    longDescription: 'ShadowVeil represents the next generation of automated security frameworks, featuring advanced threat detection algorithms powered by machine learning and autonomous response capabilities. The system continuously monitors network traffic, system behaviors, and user activities to identify potential security threats in real-time, automatically implementing countermeasures while maintaining system performance. Built with enterprise-grade scalability, ShadowVeil integrates seamlessly with existing security infrastructure and provides comprehensive threat intelligence through its advanced analytics engine.',
    period: '2023 – 2024',
    status: 'Production Ready',
    technologies: ['Python', 'AI/ML', 'Automation', 'Monitoring Systems'],
    icon: Eye,
    color: 'from-purple-500 to-pink-500',
    github: 'https://github.com/TechVenom/ShadowVeil',
    demo: null,
    category: 'Cybersecurity',
    categoryIcon: Shield,
    categoryColor: 'from-red-500 to-orange-500',
    features: [
      'Real-time threat detection using ML algorithms',
      'Autonomous incident response system',
      'Network traffic analysis and monitoring',
      'Behavioral anomaly detection',
      'Integration with existing security infrastructure',
      'Customizable alert and response policies',
      'Comprehensive logging and reporting',
      'API-first architecture for easy integration'
    ],
    challenges: [
      'Minimizing false positives in threat detection',
      'Ensuring rapid response times without system disruption',
      'Training ML models with diverse threat scenarios',
      'Maintaining high availability during security incidents'
    ],
    outcomes: [
      'Deployed across 50+ enterprise environments',
      '99.7% threat detection accuracy achieved',
      'Average response time reduced to under 30 seconds',
      'Prevented over 10,000 security incidents'
    ],
    images: [
      '/images/shadowveil-1.jpg',
      '/images/shadowveil-2.jpg',
      '/images/shadowveil-3.jpg'
    ],
    techDetails: {
      architecture: 'Microservices architecture with event-driven processing',
      database: 'MongoDB for threat intelligence, Redis for real-time caching',
      deployment: 'Kubernetes with auto-scaling capabilities',
      testing: 'Automated testing with simulated attack scenarios'
    }
  },
  {
    id: 3,
    title: 'Brain Tumor Detection',
    subtitle: 'Deep Learning CNN-based Model',
    description: 'Deep learning CNN-based model for early brain tumor diagnosis via MRI images.',
    longDescription: 'This advanced medical imaging project leverages deep learning and convolutional neural networks to assist healthcare professionals in early detection of brain tumors from MRI scans. The model utilizes a sophisticated CNN architecture trained on thousands of medical images, achieving high accuracy in identifying various types of brain tumors including gliomas, meningiomas, and pituitary tumors. The system processes MRI scans in real-time, providing detailed analysis and confidence scores to support medical decision-making, potentially saving lives through early and accurate diagnosis.',
    period: '2024',
    status: 'Public Release',
    technologies: ['Python', 'TensorFlow', 'CNN', 'Medical Imaging'],
    icon: Brain,
    color: 'from-blue-500 to-cyan-500',
    github: 'https://github.com/huckbyte/braintumor',
    demo: null,
    category: 'AI & ML',
    categoryIcon: Brain,
    categoryColor: 'from-blue-500 to-cyan-500',
    features: [
      'High-accuracy tumor detection (95%+ accuracy)',
      'Support for multiple MRI image formats',
      'Real-time image processing and analysis',
      'Detailed classification of tumor types',
      'Integration with medical imaging systems',
      'Batch processing capabilities',
      'Confidence scoring for predictions',
      'HIPAA-compliant data handling'
    ],
    challenges: [
      'Obtaining sufficient high-quality medical training data',
      'Ensuring model generalization across different MRI machines',
      'Meeting medical industry accuracy and safety standards',
      'Handling class imbalance in tumor vs. non-tumor cases'
    ],
    outcomes: [
      'Achieved 95.3% accuracy on validation dataset',
      'Successfully validated by medical professionals',
      'Reduced diagnosis time from hours to minutes',
      'Open-sourced to benefit the medical community'
    ],
    images: [
      '/images/brain-tumor.jpeg',
      '/images/trumor-detection.webp',
      '/images/tumor-detection-ai.jpg'
    ],
    techDetails: {
      architecture: 'CNN with ResNet-50 backbone and custom classification layers',
      database: 'Secure medical image database with encryption',
      deployment: 'Docker containers with GPU acceleration support',
      testing: 'Cross-validation with multiple medical datasets'
    }
  },
  {
    id: 4,
    title: 'Face Recognition System',
    subtitle: 'Real-time Verification System',
    description: 'Face detection and recognition model with real-time verification using OpenCV.',
    longDescription: 'A sophisticated face recognition system built with OpenCV and advanced computer vision techniques. The system provides real-time face detection, recognition, and verification capabilities with high accuracy and performance. Utilizing FaceNet embeddings and Dlib for precise facial landmark detection, the system can process multiple faces simultaneously while maintaining excellent performance. Designed for security applications, access control, and identity verification systems with robust anti-spoofing measures and privacy-focused local processing.',
    period: '2024',
    status: 'Public Release',
    technologies: ['Python', 'OpenCV', 'FaceNet', 'Dlib'],
    icon: Camera,
    color: 'from-green-500 to-emerald-500',
    github: 'https://github.com/huckbyte/face-Recognition-Project',
    demo: null,
    category: 'AI & ML',
    categoryIcon: Brain,
    categoryColor: 'from-blue-500 to-cyan-500',
    features: [
      'Real-time face detection and recognition',
      'High accuracy facial verification',
      'Support for multiple camera inputs',
      'Face encoding and database storage',
      'Anti-spoofing protection',
      'Batch processing for multiple faces',
      'Integration with access control systems',
      'Privacy-focused local processing'
    ],
    challenges: [
      'Handling varying lighting conditions',
      'Ensuring accuracy across different ethnicities and ages',
      'Optimizing performance for real-time processing',
      'Implementing robust anti-spoofing measures'
    ],
    outcomes: [
      'Achieved 98.5% recognition accuracy',
      'Successfully deployed in security systems',
      'Processing speed of 30+ FPS on standard hardware',
      'Zero false positives in production testing'
    ],
    images: [
      '/images/face-recognition-1024x630.jpg',
      '/images/face-detection.webp',
      '/images/face-recognition-system.jpg'
    ],
    techDetails: {
      architecture: 'OpenCV-based pipeline with FaceNet embeddings',
      database: 'SQLite for face encodings with encryption',
      deployment: 'Standalone application with API endpoints',
      testing: 'Extensive testing with diverse facial datasets'
    }
  },
  {
    id: 5,
    title: 'Hand Tracking Project',
    subtitle: 'Real-time Hand Gesture Recognition',
    description: 'Advanced computer vision system for real-time hand tracking and gesture recognition using MediaPipe and OpenCV.',
    longDescription: 'An advanced computer vision system that provides real-time hand tracking and gesture recognition capabilities using MediaPipe and OpenCV. The system can detect and track multiple hands simultaneously, recognize various hand gestures, and provide precise finger landmark detection. Designed for applications in human-computer interaction, virtual reality, augmented reality, and accessibility technologies, the system offers high accuracy and performance for real-time gesture-based control systems.',
    period: '2024',
    status: 'In Progress',
    technologies: ['Python', 'OpenCV', 'MediaPipe', 'Computer Vision', 'Machine Learning'],
    icon: Mic,
    color: 'from-yellow-500 to-orange-500',
    github: 'https://github.com/huckbyte/hand-tracking-project',
    demo: null,
    category: 'AI & ML',
    categoryIcon: Brain,
    categoryColor: 'from-blue-500 to-cyan-500',
    features: [
      'Real-time hand detection and tracking',
      'Multi-hand support with individual finger tracking',
      'Precise 21-point hand landmark detection',
      'Gesture recognition and classification',
      'Customizable gesture vocabulary',
      'High-performance real-time processing',
      'Cross-platform compatibility',
      'Integration with VR/AR applications'
    ],
    challenges: [
      'Handling varying lighting conditions and backgrounds',
      'Ensuring real-time processing performance',
      'Managing occlusion and partial hand visibility',
      'Maintaining accuracy across different hand sizes and skin tones'
    ],
    outcomes: [
      'Achieved 95% accuracy in hand landmark detection',
      'Real-time processing at 30+ FPS on standard hardware',
      'Successfully integrated into multiple applications',
      'Positive feedback from developers and users'
    ],
    images: [
      '/images/handtrack.jpeg',
      '/images/handtrack-1.jpeg',
      '/images/hand-tracking-demo.jpg'
    ],
    techDetails: {
      architecture: 'MediaPipe Hands solution with OpenCV for video processing',
      deployment: 'Cross-platform application with Python and web interfaces',
      testing: 'Extensive testing with diverse hand gestures and lighting conditions'
    }
  },
  {
    id: 6,
    title: 'Malware URL Detection',
    subtitle: 'ML Classification Model',
    description: 'Machine learning model trained to classify and detect phishing/malicious URLs.',
    longDescription: 'A sophisticated machine learning system designed to protect users from malicious websites and phishing attacks. The model analyzes URL patterns, domain characteristics, and web content to accurately classify potentially harmful links before users access them. Using advanced feature engineering and ensemble learning techniques, the system provides real-time threat detection with high accuracy and low false positive rates, serving as an essential layer of cybersecurity protection for individuals and organizations.',
    period: '2023 – 2024',
    status: 'Completed',
    technologies: ['Scikit-learn', 'NLP', 'URL Feature Engineering'],
    icon: AlertTriangle,
    color: 'from-red-500 to-pink-500',
    github: 'https://github.com/huckbyte/malware-url-detector',
    demo: null,
    category: 'AI & ML',
    categoryIcon: Brain,
    categoryColor: 'from-blue-500 to-cyan-500',
    features: [
      'Real-time URL analysis and classification',
      'Advanced feature engineering for URL patterns',
      'High accuracy malware detection (96%+)',
      'Integration with web browsers and security tools',
      'Continuous learning from new threat data',
      'Low false positive rate',
      'API for third-party integrations',
      'Comprehensive threat intelligence database'
    ],
    challenges: [
      'Handling rapidly evolving malware techniques',
      'Balancing detection accuracy with processing speed',
      'Managing large-scale URL datasets',
      'Reducing false positives for legitimate sites'
    ],
    outcomes: [
      'Achieved 96.8% accuracy on test datasets',
      'Successfully integrated into security platforms',
      'Blocked over 50,000 malicious URLs in testing',
      'Recognized by cybersecurity community'
    ],
    images: [
      '/images/malware-detection.jpg',
      '/images/malware-detection.webp',
      '/images/url-security.jpg'
    ],
    techDetails: {
      architecture: 'Ensemble learning with Random Forest and SVM',
      database: 'PostgreSQL for threat intelligence storage',
      deployment: 'RESTful API with Docker containerization',
      testing: 'Cross-validation with real-world malware datasets'
    }
  },
  {
    id: 7,
    title: 'Client & Startup Websites',
    subtitle: 'Professional Web Solutions Portfolio',
    description: 'Live production websites: E-Tribe business platform, Forex Hub corporate site, Kester Pace consulting, and SmartTech Phones e-commerce.',
    longDescription: 'A comprehensive portfolio of professional web development projects showcasing end-to-end solutions for diverse clients. These live websites demonstrate modern web development practices, responsive design, and performance optimization across different industries including e-commerce, business management, telecommunications, and corporate services. Each project represents a complete solution from concept to deployment.',
    period: '2023 – Present',
    status: 'Live',
    technologies: ['React', 'Next.js', 'TypeScript', 'TailwindCSS', 'Node.js', 'MongoDB', 'Firebase', 'Vercel'],
    icon: Globe,
    color: 'from-indigo-500 to-purple-500',
    github: 'https://github.com/venomx/client-websites',
    demo: 'https://etribe.quatromgt.co.ke/',
    category: 'Web Development',
    categoryIcon: Globe,
    categoryColor: 'from-indigo-500 to-purple-500',
    features: [
      'E-Tribe: Business management platform with advanced analytics',
      'Forex Hub: Corporate website with service portfolio',
      'Kester Pace: Professional consulting and business services',
      'SmartTech Phones: E-commerce platform for mobile devices',
      'Responsive design optimized for all devices',
      'SEO optimization and fast loading speeds',
      'Modern UI/UX with professional aesthetics',
      'Secure hosting and SSL implementation'
    ],
    challenges: [
      'Creating unique designs for different industry requirements',
      'Implementing complex business logic for management platforms',
      'Optimizing e-commerce functionality for mobile devices',
      'Ensuring scalability for growing business needs',
      'Integrating third-party services and payment gateways'
    ],
    outcomes: [
      'All 4 websites successfully launched and live',
      'Achieved excellent performance scores (90+ PageSpeed)',
      'Positive client feedback and ongoing partnerships',
      'Increased online presence and business growth for clients',
      'Established reputation for quality web development services'
    ],
    images: [
      '/images/etribe.quatromgt.co.ke.png',
      '/images/test.quatromgt.co.ke.png',
      '/images/kesterpace.co.ke.png',
      '/images/marttechphones.co.ke.png'
    ],
    techDetails: {
      architecture: 'Modern web applications with responsive design and optimized performance',
      database: 'Various solutions including MongoDB, Firebase, and custom CMS implementations',
      deployment: 'Professional hosting with SSL certificates and CDN optimization',
      testing: 'Cross-browser testing and performance optimization across all platforms'
    },
    liveLinks: [
      {
        name: 'E-Tribe Business Platform',
        url: 'https://etribe.quatromgt.co.ke/',
        description: 'Comprehensive business management platform'
      },
      {
        name: 'Forex Hub',
        url: 'https://forexhub.quatromgt.co.ke/',
        description: 'Corporate website and service portfolio'
      },
      {
        name: 'Kester Pace Consulting',
        url: 'https://kesterpace.co.ke/',
        description: 'Professional consulting services website'
      },
      {
        name: 'SmartTech Phones',
        url: 'https://smarttechphones.co.ke/',
        description: 'E-commerce platform for mobile devices'
      }
    ]
  },
  {
    id: 8,
    title: 'AgentZero',
    subtitle: 'AI Agent Framework',
    description: 'Custom-built intelligent autonomous agent architecture designed to learn, adapt, and interact across multiple environments and tasks.',
    longDescription: 'AgentZero represents a cutting-edge AI agent framework designed to create intelligent, autonomous agents capable of learning, adapting, and performing complex tasks across various environments. The framework combines advanced machine learning techniques with autonomous decision-making capabilities, enabling the creation of sophisticated AI agents for diverse applications.',
    period: '2023 – Present',
    status: 'R&D Phase',
    technologies: ['Python', 'OpenAI', 'FastAPI', 'PyTorch', 'Transformers'],
    icon: Bot,
    color: 'from-cyan-500 to-blue-500',
    github: 'https://github.com/venomx/agentzero',
    demo: null,
    category: 'AI Agents',
    categoryIcon: Bot,
    categoryColor: 'from-cyan-500 to-blue-500',
    features: [
      'Autonomous learning and adaptation',
      'Multi-environment task execution',
      'Advanced reasoning and decision-making',
      'Natural language interaction capabilities',
      'Modular architecture for extensibility',
      'Integration with various AI models',
      'Real-time performance monitoring',
      'Scalable deployment options'
    ],
    challenges: [
      'Ensuring safe and predictable agent behavior',
      'Balancing autonomy with human oversight',
      'Managing computational resources efficiently',
      'Creating robust evaluation metrics for agent performance'
    ],
    outcomes: [
      'Successfully demonstrated autonomous task completion',
      'Achieved 85% success rate in complex scenarios',
      'Ongoing research collaboration with AI institutions',
      'Patent application filed for core architecture'
    ],
    images: [
      '/api/placeholder/800/400',
      '/api/placeholder/800/400',
      '/api/placeholder/800/400'
    ],
    techDetails: {
      architecture: 'Microservices-based agent framework with plugin system',
      database: 'Vector database for knowledge storage and retrieval',
      deployment: 'Kubernetes with auto-scaling agent instances',
      testing: 'Comprehensive simulation environments for agent testing'
    }
  }
];
