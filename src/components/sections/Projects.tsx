import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import {
  Github,
  ExternalLink,
  Shield,
  Eye,
  Calendar,
  Brain,
  Globe,
  Bot,
  Camera,
  Mic,
  AlertTriangle
} from 'lucide-react';

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Cybersecurity Projects
  const cybersecurityProjects = [
    {
      id: 1,
      title: 'ShadowCloak',
      subtitle: 'Advanced Privacy & Anonymity Suite',
      description: 'An all-in-one modular cybersecurity toolkit focused on privacy preservation and anonymity. Includes encrypted communications, identity cloaking, and footprint obfuscation.',
      period: '2024 – Present',
      status: 'Active Development',
      technologies: ['Python', 'Bash', 'Linux', 'Cryptography', 'Shell Scripting'],
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      github: 'https://github.com/TechVenom/ShadowCloak',
      demo: null
    },
    {
      id: 2,
      title: 'ShadowVeil',
      subtitle: 'Next-Gen Security Framework',
      description: 'Real-time threat detection engine with autonomous response capabilities. Integrates with modern systems for seamless security operations.',
      period: '2023 – 2024',
      status: 'Production Ready',
      technologies: ['Python', 'AI/ML', 'Automation', 'Monitoring Systems'],
      icon: Eye,
      color: 'from-purple-500 to-pink-500',
      github: 'https://github.com/TechVenom/ShadowVeil',
      demo: null
    }
  ];

  // AI & ML Projects
  const aiProjects = [
    {
      id: 3,
      title: 'Brain Tumor Detection',
      subtitle: 'Deep Learning CNN-based Model',
      description: 'Deep learning CNN-based model for early brain tumor diagnosis via MRI images.',
      period: '2024',
      status: 'Public Release',
      technologies: ['Python', 'TensorFlow', 'CNN', 'Medical Imaging'],
      icon: Brain,
      color: 'from-blue-500 to-cyan-500',
      github: 'https://github.com/huckbyte/braintumor',
      demo: null
    },
    {
      id: 4,
      title: 'Face Recognition System',
      subtitle: 'Real-time Verification System',
      description: 'Face detection and recognition model with real-time verification using OpenCV.',
      period: '2024',
      status: 'Public Release',
      technologies: ['Python', 'OpenCV', 'FaceNet', 'Dlib'],
      icon: Camera,
      color: 'from-green-500 to-emerald-500',
      github: 'https://github.com/huckbyte/face-Recognition-Project',
      demo: null
    },
    {
      id: 5,
      title: 'Hand Tracking Project',
      subtitle: 'Real-time Hand Gesture Recognition',
      description: 'Advanced computer vision system for real-time hand tracking and gesture recognition using MediaPipe and OpenCV.',
      period: '2024',
      status: 'In Progress',
      technologies: ['Python', 'OpenCV', 'MediaPipe', 'Computer Vision', 'Machine Learning'],
      icon: Mic,
      color: 'from-yellow-500 to-orange-500',
      github: 'https://github.com/huckbyte/hand-tracking-project',
      demo: null
    },
    {
      id: 6,
      title: 'Malware URL Detection',
      subtitle: 'ML Classification Model',
      description: 'Machine learning model trained to classify and detect phishing/malicious URLs.',
      period: '2023 – 2024',
      status: 'Completed',
      technologies: ['Scikit-learn', 'NLP', 'URL Feature Engineering'],
      icon: AlertTriangle,
      color: 'from-red-500 to-pink-500',
      github: 'https://github.com/huckbyte/malware-url-detector',
      demo: null
    }
  ];

  // Web Development Projects
  const webProjects = [
    {
      id: 7,
      title: 'Client & Startup Websites',
      subtitle: 'End-to-End Web Solutions',
      description: 'End-to-end design and deployment of several responsive, high-performance web platforms for startups and individuals.',
      period: '2023 – Present',
      status: 'Live',
      technologies: ['React', 'Node.js', 'TypeScript', 'Firebase', 'MongoDB', 'TailwindCSS'],
      icon: Globe,
      color: 'from-indigo-500 to-purple-500',
      github: '#',
      demo: '#'
    }
  ];

  // AI Agents & Frameworks
  const agentProjects = [
    {
      id: 8,
      title: 'AgentZero',
      subtitle: 'AI Agent Framework',
      description: 'Custom-built intelligent autonomous agent architecture designed to learn, adapt, and interact across multiple environments and tasks.',
      period: '2023 – Present',
      status: 'R&D Phase',
      technologies: ['Python', 'OpenAI', 'FastAPI', 'PyTorch', 'Transformers'],
      icon: Bot,
      color: 'from-cyan-500 to-blue-500',
      github: '#',
      demo: null
    }
  ];



  // Combine all projects with category info for timeline
  const allProjects = [
    ...cybersecurityProjects.map(p => ({ ...p, category: 'Cybersecurity', categoryIcon: Shield, categoryColor: 'from-red-500 to-orange-500' })),
    ...aiProjects.map(p => ({ ...p, category: 'AI & ML', categoryIcon: Brain, categoryColor: 'from-blue-500 to-cyan-500' })),
    ...webProjects.map(p => ({ ...p, category: 'Web Development', categoryIcon: Globe, categoryColor: 'from-indigo-500 to-purple-500' })),
    ...agentProjects.map(p => ({ ...p, category: 'AI Agents', categoryIcon: Bot, categoryColor: 'from-cyan-500 to-blue-500' }))
  ].sort((a, b) => {
    // Sort by year (newest first)
    const yearA = parseInt(a.period.split('–')[0] || a.period.split('-')[0]);
    const yearB = parseInt(b.period.split('–')[0] || b.period.split('-')[0]);
    return yearB - yearA;
  });

  // Ensure we have valid data before rendering SVG elements
  const hasValidProjects = allProjects && allProjects.length > 0;

  const renderTimelineProject = (project: any, index: number) => {
    const isLeft = index % 2 === 0;

    return (
      <motion.div
        key={project.id}
        initial={{ opacity: 0, x: isLeft ? -100 : 100, y: 50 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        transition={{
          duration: 0.8,
          delay: index * 0.15,
          type: "spring",
          stiffness: 100,
          damping: 15
        }}
        className={`relative flex items-center mb-8 md:mb-10 ${
          isLeft ? 'justify-start' : 'justify-end'
        } md:${isLeft ? 'justify-start' : 'justify-end'} justify-center`}
      >
        {/* Timeline Node - Following curved road */}
        <div
          className="absolute z-20"
          style={{
            left: `calc(50% + ${Math.sin(index * Math.PI * 0.5) * 25}px)`,
            transform: 'translateX(-50%)'
          }}
        >
          <motion.div
            whileHover={{ scale: 1.3, rotate: 360 }}
            className={`w-14 h-14 md:w-18 md:h-18 rounded-full bg-gradient-to-r ${project.color} flex items-center justify-center text-white shadow-2xl border-3 md:border-4 border-gray-900 relative`}
            animate={{
              boxShadow: [
                `0 0 20px ${project.color.includes('red') ? '#ef4444' : project.color.includes('blue') ? '#3b82f6' : project.color.includes('green') ? '#22c55e' : project.color.includes('purple') ? '#a855f7' : '#06b6d4'}40`,
                `0 0 40px ${project.color.includes('red') ? '#ef4444' : project.color.includes('blue') ? '#3b82f6' : project.color.includes('green') ? '#22c55e' : project.color.includes('purple') ? '#a855f7' : '#06b6d4'}80`,
                `0 0 20px ${project.color.includes('red') ? '#ef4444' : project.color.includes('blue') ? '#3b82f6' : project.color.includes('green') ? '#22c55e' : project.color.includes('purple') ? '#a855f7' : '#06b6d4'}40`
              ]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: index * 0.3
            }}
          >
            <project.icon size={20} className="md:w-7 md:h-7" />

            {/* Pulsing ring effect */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-white"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.8, 0, 0.8]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: index * 0.2
              }}
            />
          </motion.div>

          {/* Connecting line to category - Curved */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
            className={`hidden md:block absolute top-12 md:top-16 left-1/2 transform -translate-x-1/2 w-1 h-4 md:h-6 bg-gradient-to-b ${project.categoryColor} origin-top`}
            style={{
              transform: `translateX(-50%) rotate(${Math.sin(index * Math.PI * 0.5) * 15}deg)`
            }}
          />

          {/* Category Badge - Following road curve */}
          <motion.div
            initial={{ opacity: 0, scale: 0, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            className={`absolute top-14 md:top-20 left-1/2 transform -translate-x-1/2 px-2 md:px-3 py-1 bg-gradient-to-r ${project.categoryColor} rounded-full text-white text-xs font-medium whitespace-nowrap flex items-center space-x-1 shadow-lg`}
            animate={{
              y: [0, -5, 0],
              scale: [1, 1.05, 1]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: index * 0.5
            }}
          >
            <project.categoryIcon size={10} className="md:w-3 md:h-3" />
            <span className="hidden sm:inline">{project.category}</span>
            <span className="sm:hidden">{project.category.split(' ')[0]}</span>
          </motion.div>
        </div>

        {/* Project Card - Fully responsive */}
        <motion.div
          whileHover={{ scale: 1.01, y: -5 }}
          transition={{ duration: 0.3 }}
          className={`
            w-full max-w-sm mx-4
            md:w-5/12 md:max-w-none
            ${isLeft ? 'md:mr-auto md:pr-8 lg:pr-12' : 'md:ml-auto md:pl-8 lg:pl-12'}
          `}
        >
          <div
            onClick={() => {
              window.open(`/portfolio/project/${project.id}`, '_blank', 'noopener,noreferrer');
            }}
            title="Click to view project details in new tab"
            className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl border border-gray-700/50 rounded-xl md:rounded-2xl p-3 md:p-4 lg:p-5 shadow-2xl hover:shadow-cyan-500/10 transition-all duration-500 relative overflow-hidden cursor-pointer group"
          >
            {/* Animated background glow */}
            <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-5 group-hover:opacity-10 rounded-xl md:rounded-2xl transition-opacity duration-300`} />
            <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${project.color}`} />

            {/* Click indicator */}
            <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-6 h-6 bg-white/10 rounded-full flex items-center justify-center">
                <ExternalLink size={12} className="text-white" />
              </div>
            </div>

            {/* Header */}
            <div className="relative z-10">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 gap-2">
                <div className="flex items-center space-x-2 text-xs">
                  <Calendar className="w-3 h-3 text-cyan-400" />
                  <span className="text-cyan-400 font-mono font-medium">{project.period}</span>
                </div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className={`px-2 py-1 md:px-3 md:py-1 bg-gradient-to-r ${project.color} rounded-full text-white text-xs font-bold shadow-lg self-start sm:self-auto`}
                >
                  {project.status}
                </motion.div>
              </div>

              <h3 className="text-base md:text-lg lg:text-xl font-bold text-white mb-2 font-mono leading-tight">
                {project.title}
              </h3>
              <p className="text-gray-400 text-xs mb-2 font-medium">
                {project.subtitle}
              </p>

              {/* Description */}
              <p className="text-gray-300 mb-3 md:mb-4 leading-relaxed text-xs md:text-sm">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-1 md:gap-1.5 mb-3 md:mb-4">
                {project.technologies.map((tech: string, techIndex: number) => (
                  <motion.span
                    key={techIndex}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.15 + techIndex * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className={`px-2 py-0.5 text-xs bg-gradient-to-r ${project.color} bg-opacity-20 text-white rounded-full border border-current border-opacity-30 font-mono`}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-2">
                <motion.button
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(`/portfolio/project/${project.id}`, '_blank', 'noopener,noreferrer');
                  }}
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  title="View project details in new tab"
                  className={`flex items-center justify-center space-x-2 px-3 py-2 bg-gradient-to-r ${project.color} rounded-lg text-xs text-white hover:opacity-90 transition-all duration-300 shadow-lg`}
                >
                  <ExternalLink size={14} />
                  <span className="font-medium">View Details</span>
                  <span className="text-xs opacity-75 hidden sm:inline ml-1">↗</span>
                </motion.button>
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center space-x-2 px-3 py-2 bg-gray-800/80 hover:bg-gray-700/80 rounded-lg text-xs text-gray-300 hover:text-white transition-all duration-300 border border-gray-600/50 hover:border-gray-500/50"
                >
                  <Github size={14} />
                  <span className="font-medium">GitHub</span>
                </motion.a>
                {project.demo && (
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    whileHover={{ scale: 1.02, y: -1 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center justify-center space-x-2 px-3 py-2 bg-gray-700/80 hover:bg-gray-600/80 rounded-lg text-xs text-gray-300 hover:text-white transition-all duration-300 border border-gray-600/50 hover:border-gray-500/50"
                  >
                    <ExternalLink size={14} />
                    <span className="font-medium">Demo</span>
                  </motion.a>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    );
  };

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Floating particles */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-400 rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container-custom section-padding relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4">
            🚀 Featured <span className="glow-text">Projects</span>
          </h2>
          <p className="text-base md:text-xl text-gray-400 max-w-2xl mx-auto px-4">
            A timeline of my innovative contributions in AI, Cybersecurity, and Web Development.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          {/* Curved Road Timeline */}
          <div className="absolute inset-0 flex justify-center">
            <svg
              width="200px"
              height="100%"
              viewBox={`0 0 200 ${allProjects.length * 350 + 200}`}
              className="absolute top-0 left-1/2 transform -translate-x-1/2"
              style={{ minHeight: `${allProjects.length * 350 + 200}px` }}
            >
              <defs>
                {/* Gradient for the road */}
                <linearGradient id="roadGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8" />
                  <stop offset="25%" stopColor="#a855f7" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#22c55e" stopOpacity="0.8" />
                  <stop offset="75%" stopColor="#f59e0b" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#ef4444" stopOpacity="0.8" />
                </linearGradient>

                {/* Animated gradient for glow effect */}
                <linearGradient id="glowGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.4">
                    <animate attributeName="stop-opacity" values="0.4;0.8;0.4" dur="3s" repeatCount="indefinite" />
                  </stop>
                  <stop offset="25%" stopColor="#a855f7" stopOpacity="0.4">
                    <animate attributeName="stop-opacity" values="0.4;0.8;0.4" dur="3s" begin="0.75s" repeatCount="indefinite" />
                  </stop>
                  <stop offset="50%" stopColor="#22c55e" stopOpacity="0.4">
                    <animate attributeName="stop-opacity" values="0.4;0.8;0.4" dur="3s" begin="1.5s" repeatCount="indefinite" />
                  </stop>
                  <stop offset="75%" stopColor="#f59e0b" stopOpacity="0.4">
                    <animate attributeName="stop-opacity" values="0.4;0.8;0.4" dur="3s" begin="2.25s" repeatCount="indefinite" />
                  </stop>
                  <stop offset="100%" stopColor="#ef4444" stopOpacity="0.4">
                    <animate attributeName="stop-opacity" values="0.4;0.8;0.4" dur="3s" begin="3s" repeatCount="indefinite" />
                  </stop>
                </linearGradient>

                {/* Filter for glow effect */}
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>

              {/* Curved Road Path */}
              <motion.path
                d={(() => {
                  const totalHeight = allProjects.length * 350 + 200;
                  const segments = allProjects.length + 1;
                  let path = `M 100 50`;

                  for (let i = 0; i < segments; i++) {
                    const y = 50 + (i + 1) * (totalHeight - 100) / segments;
                    const x = 100 + Math.sin(i * Math.PI * 0.5) * 25;
                    const prevY = i === 0 ? 50 : 50 + i * (totalHeight - 100) / segments;
                    const midY = (prevY + y) / 2;

                    path += ` Q ${x} ${midY} 100 ${y}`;
                  }

                  return path;
                })()}
                stroke="url(#roadGradient)"
                strokeWidth="4"
                fill="none"
                filter="url(#glow)"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />

              {/* Glow overlay */}
              <motion.path
                d={(() => {
                  const totalHeight = allProjects.length * 350 + 200;
                  const segments = allProjects.length + 1;
                  let path = `M 100 50`;

                  for (let i = 0; i < segments; i++) {
                    const y = 50 + (i + 1) * (totalHeight - 100) / segments;
                    const x = 100 + Math.sin(i * Math.PI * 0.5) * 25;
                    const prevY = i === 0 ? 50 : 50 + i * (totalHeight - 100) / segments;
                    const midY = (prevY + y) / 2;

                    path += ` Q ${x} ${midY} 100 ${y}`;
                  }

                  return path;
                })()}
                stroke="url(#glowGradient)"
                strokeWidth="6"
                fill="none"
                opacity="0.6"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
              />

              {/* Animated Dots along the path - Only render if allProjects has data */}
              {hasValidProjects && [...Array(allProjects.length * 3)].map((_, i) => {
                const totalHeight = allProjects.length * 350 + 200;
                const progress = (i + 1) / (allProjects.length * 3 + 1);
                const y = 50 + progress * (totalHeight - 100);
                const x = 100 + Math.sin(progress * Math.PI * allProjects.length * 0.5) * 25;

                // Ensure coordinates are valid numbers
                const safeX = isNaN(x) ? 100 : x;
                const safeY = isNaN(y) ? 50 : y;

                return (
                  <motion.circle
                    key={i}
                    cx={safeX}
                    cy={safeY}
                    r="2"
                    fill="#ffffff"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: [0, 1, 0], scale: [0, 1.5, 0] }}
                    transition={{
                      duration: 2,
                      delay: i * 0.1,
                      repeat: Infinity,
                      repeatDelay: 3
                    }}
                  />
                );
              })}

              {/* Moving particle effects - Only render if allProjects has data */}
              {hasValidProjects && (
                <>
                  <motion.circle
                    cx={100}
                    cy={50}
                    r="3"
                    fill="#00ffff"
                    opacity="0.8"
                    animate={{
                      cy: [50, allProjects.length * 350 + 150],
                      cx: (() => {
                        const points = [];
                        for (let i = 0; i <= 6; i++) {
                          const progress = i / 6;
                          const value = 100 + Math.sin(progress * Math.PI * allProjects.length * 0.5) * 25;
                          points.push(isNaN(value) ? 100 : value);
                        }
                        return points;
                      })()
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />

                  {/* Secondary particle */}
                  <motion.circle
                    cx={100}
                    cy={50}
                    r="2"
                    fill="#ff00ff"
                    opacity="0.6"
                    animate={{
                      cy: [50, allProjects.length * 350 + 150],
                      cx: (() => {
                        const points = [];
                        for (let i = 0; i <= 6; i++) {
                          const progress = i / 6;
                          const value = 100 + Math.sin((progress + 0.5) * Math.PI * allProjects.length * 0.5) * 25;
                          points.push(isNaN(value) ? 100 : value);
                        }
                        return points;
                      })()
                    }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: "linear",
                      delay: 2
                    }}
                  />
                </>
              )}

              {/* Road markers - Only render if allProjects has data */}
              {hasValidProjects && [...Array(allProjects.length)].map((_, i) => {
                const totalHeight = allProjects.length * 350 + 200;
                const y = 50 + (i + 1) * (totalHeight - 100) / (allProjects.length + 1);
                const x = 100 + Math.sin((i + 1) * Math.PI * 0.5) * 25;

                // Ensure values are valid numbers
                const safeX = isNaN(x) ? 100 : x;
                const safeY = isNaN(y) ? 50 : y;

                return (
                  <motion.rect
                    key={`marker-${i}`}
                    x={safeX - 1}
                    y={safeY - 8}
                    width="2"
                    height="16"
                    fill="#ffffff"
                    opacity="0.4"
                    animate={{
                      opacity: [0.4, 0.8, 0.4],
                      scaleY: [1, 1.2, 1]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.2
                    }}
                  />
                );
              })}

              {/* Sparkle effects - Only render if allProjects has data */}
              {hasValidProjects && [...Array(15)].map((_, i) => {
                const totalHeight = allProjects.length * 350 + 200;
                const x = 50 + Math.random() * 100;
                const y = 50 + Math.random() * (totalHeight - 100);

                // Ensure coordinates are valid numbers
                const safeX = isNaN(x) ? 75 : x;
                const safeY = isNaN(y) ? 50 : y;

                return (
                  <motion.circle
                    key={`sparkle-${i}`}
                    cx={safeX}
                    cy={safeY}
                    r="0.5"
                    fill="#ffffff"
                    animate={{
                      opacity: [0, 1, 0],
                      scale: [0, 1.5, 0]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: Math.random() * 3
                    }}
                  />
                );
              })}
            </svg>
          </div>

          {/* Timeline Projects */}
          <div className="relative">
            {allProjects.map((project, index) => renderTimelineProject(project, index))}
          </div>

          {/* Timeline End Marker */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-r from-red-500 to-orange-500 flex items-center justify-center shadow-2xl border-2 border-gray-900"
            style={{
              top: `${allProjects.length * 350 + 150}px`
            }}
            animate={{
              boxShadow: [
                "0 0 20px rgba(239, 68, 68, 0.5)",
                "0 0 40px rgba(239, 68, 68, 0.8)",
                "0 0 20px rgba(239, 68, 68, 0.5)"
              ]
            }}
            transition={{
              boxShadow: { duration: 2, repeat: Infinity },
              opacity: { duration: 0.8, delay: 0.5 },
              scale: { duration: 0.8, delay: 0.5 }
            }}
          >
            <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-white" />

            {/* End marker pulse ring */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-white"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.8, 0, 0.8]
              }}
              transition={{
                duration: 2,
                repeat: Infinity
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
