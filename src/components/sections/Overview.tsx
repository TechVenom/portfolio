import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Smartphone, Zap, Shield, Brain, Globe } from 'lucide-react';

const Overview = () => {
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
      position: { x: 20, y: -10 },
      size: "medium"
    },
    {
      id: 3,
      title: "Web Development",
      description: "Modern web applications and interfaces",
      icon: Globe,
      color: "from-green-500 to-teal-500",
      position: { x: -20, y: 15 },
      size: "small"
    },
    {
      id: 4,
      title: "Mobile Apps",
      description: "Cross-platform mobile solutions",
      icon: Smartphone,
      color: "from-yellow-500 to-orange-500",
      position: { x: 25, y: 20 },
      size: "medium"
    },
    {
      id: 5,
      title: "Cybersecurity",
      description: "Security solutions and penetration testing",
      icon: Shield,
      color: "from-red-500 to-pink-500",
      position: { x: -25, y: 25 },
      size: "small"
    },
    {
      id: 6,
      title: "Performance",
      description: "Optimization and system efficiency",
      icon: Zap,
      color: "from-indigo-500 to-purple-500",
      position: { x: 0, y: -25 },
      size: "large"
    }
  ];

  const getSizeClasses = (size: string) => {
    switch (size) {
      case "small": return "w-16 h-16";
      case "medium": return "w-20 h-20";
      case "large": return "w-24 h-24";
      default: return "w-16 h-16";
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Portfolio <span className="text-cyan-400">Overview</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore the diverse range of skills, projects, and expertise that define my professional journey
          </p>
        </motion.div>

        <div className="relative min-h-[500px] flex items-center justify-center">
          {portfolioSections.map((section, index) => {
            const IconComponent = section.icon;
            return (
              <motion.div
                key={section.id}
                className={`absolute ${getSizeClasses(section.size)}`}
                style={{
                  x: section.position.x,
                  y: section.position.y,
                }}
                initial={{ 
                  opacity: 0, 
                  scale: 0,
                  x: section.position.x,
                  y: section.position.y
                }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  x: section.position.x,
                  y: section.position.y
                }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.1,
                  rotate: 5,
                  transition: { duration: 0.2 }
                }}
              >
                <div className={`bg-gradient-to-r ${section.color} rounded-2xl flex items-center justify-center shadow-lg backdrop-blur-sm border border-white/10`}>
                  <IconComponent className="text-white w-8 h-8" />
                </div>
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-center">
                  <h3 className="text-white font-semibold text-sm whitespace-nowrap">
                    {section.title}
                  </h3>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-24"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {portfolioSections.map((section) => {
            const IconComponent = section.icon;
            return (
              <div 
                key={section.id}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-cyan-400/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/10"
              >
                <div className="flex items-center mb-4">
                  <div className={`bg-gradient-to-r ${section.color} w-12 h-12 rounded-lg flex items-center justify-center mr-4`}>
                    <IconComponent className="text-white w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{section.title}</h3>
                </div>
                <p className="text-gray-300">{section.description}</p>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Overview;