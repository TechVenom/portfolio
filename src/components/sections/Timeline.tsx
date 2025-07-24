import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Award, Code, GraduationCap, Briefcase } from 'lucide-react';

interface TimelineItem {
  id: number;
  type: 'education' | 'work' | 'achievement';
  title: string;
  organization: string;
  location: string;
  period: string;
  description: string;
  skills?: string[];
  position: 'left' | 'right';
}

const Timeline: React.FC = () => {
  const timelineData: TimelineItem[] = [
    {
      id: 1,
      type: 'education',
      title: 'BSc. Computer Systems Engineering',
      organization: 'University of Kirinyaga, Nairobi',
      location: 'Nairobi, Kenya',
      period: '2020 – 2024',
      description: 'Graduated with Honors. Specialized in Artificial Intelligence (AI), Cybersecurity, and System Architecture & Design.',
      skills: ['AI/ML', 'Cybersecurity', 'System Design', 'Software Engineering', 'Algorithms', 'Embedded Systems'],
      position: 'left'
    },
    {
      id: 2,
      type: 'work',
      title: 'Remote Software Engineer (Contract)',
      organization: 'Fiverr & Outlier Aligner',
      location: 'Remote',
      period: '2023 – Present',
      description: 'Delivering full-stack web development solutions for global clients. Focused on scalability, clean architecture, and performance.',
      skills: ['React', 'Node.js', 'TypeScript', 'MongoDB', 'REST APIs', 'AWS', 'Git', 'CI/CD', 'Agile'],
      position: 'right'
    },
    {
      id: 3,
      type: 'work',
      title: 'AI Research Intern',
      organization: 'Tech Innovation Lab',
      location: 'Remote',
      period: '2023 – Present',
      description: 'Contributed to AI agent development, machine learning model training, and real-world AI implementation.',
      skills: ['Python', 'TensorFlow', 'PyTorch', 'Natural Language Processing (NLP)', 'Data Engineering', 'Experimentation'],
      position: 'left'
    },
    {
      id: 4,
      type: 'achievement',
      title: 'Cybersecurity Certification',
      organization: 'CompTIA Security+',
      location: 'Online',
      period: '2024',
      description: 'Passed with distinction. Deep understanding of securing enterprise systems, risk management, and incident response.',
      skills: ['Network Security', 'Vulnerability Management', 'Risk Assessment', 'SOC Operations', 'Threat Detection'],
      position: 'right'
    },
    {
      id: 5,
      type: 'achievement',
      title: 'Cisco Networking & Security Training',
      organization: 'Cisco Certified Training',
      location: 'Online',
      period: '2024',
      description: 'Completed hands-on training in network configuration, cyber defense, and secure communication protocols.',
      skills: ['Cisco IOS', 'Network Protocols', 'Routing & Switching', 'Firewall Configuration', 'Intrusion Prevention', 'VPN'],
      position: 'left'
    }
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'education':
        return <GraduationCap className="w-5 h-5" />;
      case 'work':
        return <Briefcase className="w-5 h-5" />;
      case 'achievement':
        return <Award className="w-5 h-5" />;
      default:
        return <Code className="w-5 h-5" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'education':
        return 'from-blue-500 to-cyan-500';
      case 'work':
        return 'from-green-500 to-emerald-500';
      case 'achievement':
        return 'from-purple-500 to-pink-500';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-30"
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="glow-text">My Journey</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A timeline of my educational background, work experience, and achievements
          </p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          {/* Curved Road Timeline */}
          <div className="absolute inset-0 flex justify-center">
            <svg
              width="150px"
              height="100%"
              viewBox="0 0 150 1500"
              className="absolute top-0 left-1/2 transform -translate-x-1/2"
              style={{ minHeight: `${timelineData.length * 250}px` }}
            >
              <defs>
                {/* Gradient for the journey road */}
                <linearGradient id="journeyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
                  <stop offset="33%" stopColor="#22c55e" stopOpacity="0.8" />
                  <stop offset="66%" stopColor="#a855f7" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.8" />
                </linearGradient>

                {/* Animated gradient for glow effect */}
                <linearGradient id="journeyGlow" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.4">
                    <animate attributeName="stop-opacity" values="0.4;0.8;0.4" dur="3s" repeatCount="indefinite" />
                  </stop>
                  <stop offset="33%" stopColor="#22c55e" stopOpacity="0.4">
                    <animate attributeName="stop-opacity" values="0.4;0.8;0.4" dur="3s" begin="1s" repeatCount="indefinite" />
                  </stop>
                  <stop offset="66%" stopColor="#a855f7" stopOpacity="0.4">
                    <animate attributeName="stop-opacity" values="0.4;0.8;0.4" dur="3s" begin="2s" repeatCount="indefinite" />
                  </stop>
                  <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.4">
                    <animate attributeName="stop-opacity" values="0.4;0.8;0.4" dur="3s" begin="3s" repeatCount="indefinite" />
                  </stop>
                </linearGradient>

                {/* Filter for glow effect */}
                <filter id="journeyGlowFilter">
                  <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>

              {/* Curved Journey Path */}
              <motion.path
                d={`M 75 0
                   Q 60 150 75 300
                   Q 90 450 75 600
                   Q 60 750 75 900
                   Q 90 1050 75 1200
                   Q 60 1350 75 1500`}
                stroke="url(#journeyGradient)"
                strokeWidth="3"
                fill="none"
                filter="url(#journeyGlowFilter)"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 2.5, ease: "easeInOut" }}
              />

              {/* Glow overlay */}
              <motion.path
                d={`M 75 0
                   Q 60 150 75 300
                   Q 90 450 75 600
                   Q 60 750 75 900
                   Q 90 1050 75 1200
                   Q 60 1350 75 1500`}
                stroke="url(#journeyGlow)"
                strokeWidth="5"
                fill="none"
                opacity="0.6"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 2.5, ease: "easeInOut", delay: 0.5 }}
              />

              {/* Animated milestone dots - Only render if timelineData exists */}
              {timelineData && timelineData.length > 0 && timelineData.map((_, i) => {
                const progress = (i + 1) / (timelineData.length + 1);
                const y = progress * 1500;
                const x = 75 + Math.sin(progress * Math.PI * 3) * 15;

                // Ensure coordinates are valid numbers
                const safeX = isNaN(x) ? 75 : x;
                const safeY = isNaN(y) ? 0 : y;

                return (
                  <motion.circle
                    key={`milestone-${i}`}
                    cx={safeX}
                    cy={safeY}
                    r="2"
                    fill="#ffffff"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: [0, 1, 0], scale: [0, 1.5, 0] }}
                    transition={{
                      duration: 2,
                      delay: i * 0.2,
                      repeat: Infinity,
                      repeatDelay: 4
                    }}
                  />
                );
              })}

              {/* Moving progress indicator */}
              <motion.circle
                cx={75}
                cy={0}
                r="3"
                fill="#60a5fa"
                opacity="0.9"
                animate={{
                  cy: [0, 1500],
                  cx: [75, 60, 75, 90, 75, 60, 75]
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />

              {/* Journey sparkles */}
              {[...Array(10)].map((_, i) => {
                const x = 40 + Math.random() * 70;
                const y = Math.random() * 1500;

                // Ensure coordinates are valid numbers
                const safeX = isNaN(x) ? 75 : x;
                const safeY = isNaN(y) ? 0 : y;

                return (
                  <motion.circle
                    key={`journey-sparkle-${i}`}
                    cx={safeX}
                    cy={safeY}
                    r="0.5"
                    fill="#ffffff"
                    animate={{
                      opacity: [0, 1, 0],
                      scale: [0, 1.2, 0]
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

          {/* Timeline Items */}
          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: item.position === 'left' ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-center ${
                  item.position === 'left' ? 'justify-start' : 'justify-end'
                }`}
              >
                {/* Timeline Node - Following curved journey path */}
                <div
                  className="absolute z-10"
                  style={{
                    left: `calc(50% + ${Math.sin(index * Math.PI * 0.6) * 15}px)`,
                    transform: 'translateX(-50%)'
                  }}
                >
                  <motion.div
                    whileHover={{ scale: 1.3, rotate: 360 }}
                    className={`w-14 h-14 rounded-full bg-gradient-to-r ${getTypeColor(item.type)} flex items-center justify-center text-white shadow-xl border-2 border-gray-900 relative`}
                    animate={{
                      boxShadow: [
                        `0 0 15px ${item.type === 'education' ? '#3b82f6' : item.type === 'work' ? '#22c55e' : '#a855f7'}40`,
                        `0 0 30px ${item.type === 'education' ? '#3b82f6' : item.type === 'work' ? '#22c55e' : '#a855f7'}80`,
                        `0 0 15px ${item.type === 'education' ? '#3b82f6' : item.type === 'work' ? '#22c55e' : '#a855f7'}40`
                      ]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.5
                    }}
                  >
                    {getIcon(item.type)}

                    {/* Pulsing ring effect */}
                    <motion.div
                      className="absolute inset-0 rounded-full border-2 border-white"
                      animate={{
                        scale: [1, 1.4, 1],
                        opacity: [0.8, 0, 0.8]
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        delay: index * 0.3
                      }}
                    />
                  </motion.div>
                </div>

                {/* Timeline Card */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className={`w-5/12 ${item.position === 'left' ? 'mr-auto pr-8' : 'ml-auto pl-8'}`}
                >
                  <div className="bg-dark-800/50 backdrop-blur-md border border-gray-700/50 rounded-xl p-6 shadow-xl">
                    {/* Header */}
                    <div className="mb-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <Calendar className="w-4 h-4 text-primary-400" />
                        <span className="text-sm text-primary-400 font-medium">{item.period}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-1">{item.title}</h3>
                      <div className="flex items-center space-x-2 text-gray-400">
                        <span className="font-medium">{item.organization}</span>
                        <span>•</span>
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-3 h-3" />
                          <span className="text-sm">{item.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 mb-4 leading-relaxed">{item.description}</p>

                    {/* Skills */}
                    {item.skills && (
                      <div className="flex flex-wrap gap-2">
                        {item.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-3 py-1 text-xs bg-primary-600/20 text-primary-400 rounded-full border border-primary-500/30"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
