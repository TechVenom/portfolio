import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Github,
  ExternalLink,
  Shield,
  Eye,
  Terminal,
  Zap,
  Code,
  Star,
  GitFork
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
      image: '/api/placeholder/600/400',
      technologies: ['Shell', 'Python', 'Bash', 'Linux', 'Cryptography'],
      category: 'Cybersecurity',
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      github: 'https://github.com/TechVenom/ShadowCloak',
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
      }
    },
    {
      id: 2,
      title: 'ShadowVeil',
      subtitle: 'Next-Gen Security Framework',
      description: 'Advanced security framework designed for modern threat detection and prevention. Implements cutting-edge algorithms for real-time security monitoring and automated response systems.',
      image: '/api/placeholder/600/400',
      technologies: ['Python', 'AI/ML', 'Security', 'Automation', 'Monitoring'],
      category: 'AI Security',
      icon: Eye,
      color: 'from-purple-500 to-pink-500',
      github: 'https://github.com/TechVenom/ShadowVeil',
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
      }
    },
    {
      id: 3,
      title: 'AI Agent Framework',
      subtitle: 'Intelligent Autonomous Systems',
      description: 'Comprehensive framework for building and deploying AI agents with advanced decision-making capabilities. Features multi-agent coordination, learning algorithms, and real-time adaptation.',
      image: '/api/placeholder/600/400',
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
      }
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Floating particles */}
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-400 rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/10 to-transparent" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Featured <span className="glow-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Explore my latest work in AI development, cybersecurity, and innovative software solutions. 
            Each project represents a unique challenge solved with cutting-edge technology.
          </p>
        </motion.div>

        {/* 3D Project Showcase - Temporarily Disabled */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="h-32 mb-16 flex items-center justify-center"
        >
          <div className="text-center">
            <div className="text-primary-400 text-lg font-medium mb-2">🎯 3D Project Showcase</div>
            <p className="text-gray-400">Interactive 3D project cards coming soon...</p>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-12"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className={`grid lg:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Project Image */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    rotateY: index % 2 === 0 ? 5 : -5,
                    rotateX: 2,
                    z: 50
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative group"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Floating particles around the card */}
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-60"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                      }}
                      animate={{
                        y: [0, -20, 0],
                        opacity: [0.3, 1, 0.3],
                      }}
                      transition={{
                        duration: 2 + Math.random(),
                        repeat: Infinity,
                        delay: Math.random() * 2,
                      }}
                    />
                  ))}

                  <div className="glass-effect rounded-xl overflow-hidden cyber-border shadow-2xl">
                    <div className="aspect-video bg-gradient-to-br from-dark-700 to-dark-800 flex items-center justify-center relative">
                      {/* Background pattern */}
                      <div className="absolute inset-0 opacity-10">
                        <div className="h-full w-full" style={{
                          backgroundImage: `
                            linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
                          `,
                          backgroundSize: '20px 20px'
                        }}></div>
                      </div>

                      <motion.div
                        className={`w-24 h-24 bg-gradient-to-r ${project.color} rounded-full flex items-center justify-center shadow-lg`}
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.8 }}
                      >
                        <project.icon size={40} className="text-white" />
                      </motion.div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="flex space-x-4">
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 hover:border-primary-500/50 transition-colors"
                        >
                          <Github size={20} className="text-white" />
                        </motion.a>
                        <motion.a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 hover:border-primary-500/50 transition-colors"
                        >
                          <ExternalLink size={20} className="text-white" />
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Project Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div>
                  <div className="flex items-center space-x-3 mb-2">
                    <span className={`px-3 py-1 bg-gradient-to-r ${project.color} rounded-full text-white text-sm font-medium`}>
                      {project.category}
                    </span>
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
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
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-lg text-primary-400 font-medium mb-4">{project.subtitle}</p>
                  <p className="text-gray-400 leading-relaxed">{project.description}</p>
                </div>

                {/* Features */}
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {project.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <Zap size={14} className="text-primary-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 hover:border-primary-500/30 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-secondary group"
                  >
                    <span className="flex items-center space-x-2">
                      <Github size={18} />
                      <span>View Code</span>
                    </span>
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-primary group"
                  >
                    <span className="flex items-center space-x-2">
                      <ExternalLink size={18} />
                      <span>Live Demo</span>
                    </span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
