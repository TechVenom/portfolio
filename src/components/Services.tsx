import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Brain,
  Shield,
  Code,
  Smartphone,
  Cloud,
  Zap,
  Settings
} from 'lucide-react';

const Services: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      id: 1,
      title: 'AI Development & Research',
      description: 'Custom AI solutions, machine learning models, and intelligent automation systems tailored to your business needs.',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      features: [
        'Machine Learning Models',
        'Natural Language Processing',
        'Computer Vision',
        'AI Agent Development',
        'Model Training & Optimization'
      ],
      technologies: ['Python', 'TensorFlow', 'PyTorch', 'OpenAI', 'Hugging Face']
    },
    {
      id: 2,
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security assessments, penetration testing, and security architecture design for robust protection.',
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      features: [
        'Penetration Testing',
        'Vulnerability Assessment',
        'Security Architecture',
        'Incident Response',
        'Security Automation'
      ],
      technologies: ['Kali Linux', 'Metasploit', 'Wireshark', 'Burp Suite', 'OWASP']
    },
    {
      id: 3,
      title: 'Full-Stack Development',
      description: 'Modern web applications with cutting-edge technologies, responsive design, and optimal performance.',
      icon: Code,
      color: 'from-blue-500 to-cyan-500',
      features: [
        'React/Next.js Applications',
        'TypeScript Development',
        'API Design & Integration',
        'Database Architecture',
        'Performance Optimization'
      ],
      technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS']
    },
    {
      id: 4,
      title: 'Mobile App Development',
      description: 'Cross-platform mobile applications with native performance and modern user experiences.',
      icon: Smartphone,
      color: 'from-green-500 to-teal-500',
      features: [
        'React Native Apps',
        'Cross-Platform Development',
        'Native Performance',
        'App Store Deployment',
        'Mobile Security'
      ],
      technologies: ['React Native', 'Expo', 'Firebase', 'Redux', 'TypeScript']
    },
    {
      id: 5,
      title: 'Cloud Architecture',
      description: 'Scalable cloud solutions, DevOps implementation, and infrastructure automation for modern applications.',
      icon: Cloud,
      color: 'from-indigo-500 to-purple-500',
      features: [
        'AWS/Azure Solutions',
        'Container Orchestration',
        'CI/CD Pipelines',
        'Infrastructure as Code',
        'Monitoring & Logging'
      ],
      technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins']
    },
    {
      id: 6,
      title: 'System Integration',
      description: 'Seamless integration of complex systems, APIs, and third-party services for unified workflows.',
      icon: Settings,
      color: 'from-yellow-500 to-orange-500',
      features: [
        'API Integration',
        'System Architecture',
        'Data Migration',
        'Legacy System Modernization',
        'Workflow Automation'
      ],
      technologies: ['REST APIs', 'GraphQL', 'Microservices', 'Message Queues', 'ETL']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
    <section id="services" className="section-padding bg-dark-800/30 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Floating particles */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-green-400 rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -35, 0],
              x: [0, Math.random() * 15 - 7.5, 0],
              opacity: [0.2, 0.7, 0.2],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-green-950/5 to-transparent" />
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
            My <span className="glow-text">Services</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Comprehensive technology solutions spanning AI development, cybersecurity, and modern software engineering. 
            Let's build something extraordinary together.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              whileHover={{
                y: -10,
                rotateY: 5,
                rotateX: 2,
                scale: 1.02,
                z: 20
              }}
              className="glass-effect rounded-xl p-6 card-hover group glow-box floating-card card-3d"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Floating particles in card */}
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-50"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, -15, 0],
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 2 + Math.random(),
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}

              {/* Service Icon */}
              <div className="relative mb-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon size={32} className="text-white" />
                </div>
                <div className={`absolute inset-0 w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300`} />
              </div>

              {/* Service Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wide">Key Features</h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-2 text-sm text-gray-400">
                        <Zap size={12} className="text-primary-400 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wide">Technologies</h4>
                  <div className="flex flex-wrap gap-1">
                    {service.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-white/5 border border-white/10 rounded text-xs text-gray-400 hover:border-primary-500/30 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Hover Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300`} />
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="glass-effect rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Let's discuss how I can help bring your ideas to life with cutting-edge technology and innovative solutions.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const contactSection = document.querySelector('#contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="btn-primary"
            >
              Get In Touch
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
