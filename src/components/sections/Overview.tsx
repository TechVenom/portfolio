import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Smartphone, Zap, Shield, Brain, Globe } from 'lucide-react';

const Overview: React.FC = () => {
  const portfolioSections = [
    {
      id: 1,
      title: "Work Experience",
      description: "Professional journey and achievements",
      icon: Monitor,
      color: "from-blue-500 to-cyan-500",
      position: { x: -30, y: -20 },
      size: "large"
    },
    {
      id: 2,
      title: "AI Projects",
      description: "Machine learning and AI solutions",
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      position: { x: 25, y: -15 },
      size: "medium"
    },
    {
      id: 3,
      title: "Cybersecurity",
      description: "Security tools and assessments",
      icon: Shield,
      color: "from-red-500 to-orange-500",
      position: { x: -20, y: 15 },
      size: "medium"
    },
    {
      id: 4,
      title: "Web Development",
      description: "Modern web applications",
      icon: Globe,
      color: "from-green-500 to-emerald-500",
      position: { x: 30, y: 20 },
      size: "small"
    },
    {
      id: 5,
      title: "Mobile Apps",
      description: "Cross-platform solutions",
      icon: Smartphone,
      color: "from-indigo-500 to-purple-500",
      position: { x: 0, y: -30 },
      size: "small"
    },
    {
      id: 6,
      title: "Performance",
      description: "Optimization & speed",
      icon: Zap,
      color: "from-yellow-500 to-orange-500",
      position: { x: -35, y: 25 },
      size: "small"
    }
  ];

  const getSizeClasses = (size: string) => {
    switch (size) {
      case 'large':
        return 'w-72 h-48';
      case 'medium':
        return 'w-56 h-36';
      case 'small':
        return 'w-40 h-28';
      default:
        return 'w-56 h-36';
    }
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-950 to-purple-950">
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full" style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        {/* Floating particles */}
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
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
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="glow-text">3D Portfolio Website</span>
          </h2>
          <h3 className="text-2xl lg:text-3xl text-white mb-4">
            with Modern Technology
          </h3>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Unlocking Boundless Dimensions of Creativity! Explore an immersive portfolio experience 
            showcasing cutting-edge projects in AI, cybersecurity, and web development.
          </p>
        </motion.div>

        {/* Floating Portfolio Sections */}
        <div className="relative h-96 lg:h-[600px]">
          {portfolioSections.map((section, index) => (
            <motion.div
              key={section.id}
              className="absolute floating-card card-3d"
              style={{
                left: `${50 + section.position.x}%`,
                top: `${50 + section.position.y}%`,
                transform: `translate(-50%, -50%)`,
              }}
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              whileInView={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
              }}
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                rotateX: 2,
                z: 20,
                transition: { duration: 0.3 }
              }}
            >
              <div className={`${getSizeClasses(section.size)} bg-gradient-to-br ${section.color} bg-opacity-20 backdrop-blur-md border border-white/20 rounded-xl p-6 shadow-2xl glow-box`}>
                {/* Icon */}
                <div className="flex items-center justify-center mb-4">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.8 }}
                    className={`w-12 h-12 bg-gradient-to-r ${section.color} rounded-full flex items-center justify-center shadow-lg`}
                  >
                    <section.icon className="w-6 h-6 text-white" />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-white font-bold mb-2 text-sm lg:text-base">
                    {section.title}
                  </h3>
                  <p className="text-gray-300 text-xs lg:text-sm leading-relaxed">
                    {section.description}
                  </p>
                </div>

                {/* Floating particles in card */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-white rounded-full opacity-60"
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
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary text-lg px-8 py-4"
          >
            Explore Portfolio
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Overview;
