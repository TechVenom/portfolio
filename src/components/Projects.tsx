import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Github,
  ExternalLink,
  Shield,
  Eye,
  Terminal,
  Code,
  Star,
  GitFork,
  Calendar,
  MapPin
} from 'lucide-react';

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      id: 1,
      title: 'ShadowCloak',
      subtitle: 'Advanced Privacy & Anonymity Suite',
      description: 'Professional cybersecurity toolkit with modular architecture for privacy protection and anonymity. Features comprehensive tools for secure communications, identity protection, and digital footprint management.',
      period: '2024 - Present',
      status: 'Active Development',
      technologies: ['Shell', 'Python', 'Bash', 'Linux', 'Cryptography'],
      category: 'Cybersecurity',
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      github: 'https://github.com/venomx/ShadowCloak',
      demo: '#',
      features: [
        'Modular Architecture',
        'Privacy Protection Tools',
        'Secure Communications',
        'Identity Management',
        'Digital Footprint Control'
      ],
      stats: {
        stars: 15,
        forks: 8,
        language: 'Shell'
      },
      position: 'left'
    },
    {
      id: 2,
      title: 'ShadowVeil',
      subtitle: 'Next-Gen Security Framework',
      description: 'Advanced security framework designed for modern threat detection and prevention. Implements cutting-edge algorithms for real-time security monitoring and automated response systems.',
      period: '2023 - 2024',
      status: 'Production Ready',
      technologies: ['Python', 'AI/ML', 'Security', 'Automation', 'Monitoring'],
      category: 'AI Security',
      icon: Eye,
      color: 'from-purple-500 to-pink-500',
      github: 'https://github.com/venomx/ShadowVeil',
      demo: '#',
      features: [
        'Real-time Monitoring',
        'AI-Powered Detection',
        'Automated Response',
        'Threat Intelligence',
        'Security Analytics'
      ],
      stats: {
        stars: 23,
        forks: 12,
        language: 'Python'
      },
      position: 'right'
    },
    {
      id: 3,
      title: 'AI Agent Framework',
      subtitle: 'Intelligent Autonomous Systems',
      description: 'Comprehensive framework for building and deploying AI agents with advanced decision-making capabilities. Features multi-agent coordination, learning algorithms, and real-time adaptation.',
      period: '2023 - Present',
      status: 'Research & Development',
      technologies: ['Python', 'TensorFlow', 'PyTorch', 'OpenAI', 'FastAPI'],
      category: 'AI Development',
      icon: Terminal,
      color: 'from-blue-500 to-cyan-500',
      github: '#',
      demo: '#',
      features: [
        'Multi-Agent Systems',
        'Machine Learning',
        'Real-time Adaptation',
        'Decision Making',
        'API Integration'
      ],
      stats: {
        stars: 45,
        forks: 18,
        language: 'Python'
      },
      position: 'left'
    }
  ];



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
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="glow-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A timeline of my innovative projects in AI development, cybersecurity, and software solutions
          </p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          {/* Central Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 via-cyan-500 to-purple-500 opacity-30"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, x: project.position === 'left' ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-center ${
                  project.position === 'left' ? 'justify-start' : 'justify-end'
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className={`w-12 h-12 rounded-full bg-gradient-to-r ${project.color} flex items-center justify-center text-white shadow-lg`}
                  >
                    <project.icon size={20} />
                  </motion.div>
                </div>

                {/* Timeline Card */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className={`w-5/12 ${project.position === 'left' ? 'mr-auto pr-8' : 'ml-auto pl-8'}`}
                >
                  <div className="bg-dark-800/50 backdrop-blur-md border border-gray-700/50 rounded-xl p-6 shadow-xl">
                    {/* Header */}
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4 text-purple-400" />
                          <span className="text-sm text-purple-400 font-medium">{project.period}</span>
                        </div>
                        <span className={`px-3 py-1 bg-gradient-to-r ${project.color} rounded-full text-white text-xs font-medium`}>
                          {project.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-1">{project.title}</h3>
                      <div className="flex items-center space-x-2 text-gray-400 mb-2">
                        <span className="font-medium">{project.subtitle}</span>
                        <span>•</span>
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-3 h-3" />
                          <span className="text-sm">{project.status}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>

                    {/* Stats */}
                    <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                      <div className="flex items-center space-x-1">
                        <Star size={14} />
                        <span>{project.stats.stars}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <GitFork size={14} />
                        <span>{project.stats.forks}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Code size={14} />
                        <span>{project.stats.language}</span>
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 text-xs bg-purple-600/20 text-purple-400 rounded-full border border-purple-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-3">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center space-x-2 px-4 py-2 bg-gray-700/50 hover:bg-gray-600/50 rounded-lg text-sm text-gray-300 hover:text-white transition-colors"
                      >
                        <Github size={16} />
                        <span>Code</span>
                      </motion.a>
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`flex items-center space-x-2 px-4 py-2 bg-gradient-to-r ${project.color} rounded-lg text-sm text-white hover:opacity-90 transition-opacity`}
                      >
                        <ExternalLink size={16} />
                        <span>Demo</span>
                      </motion.a>
                    </div>
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

export default Projects;
