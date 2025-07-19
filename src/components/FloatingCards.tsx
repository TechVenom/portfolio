import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code, Database, Shield, Brain } from 'lucide-react';

interface ProjectCard {
  id: number;
  title: string;
  description: string;
  image: string;
  tech: string[];
  category: string;
  position: { x: number; y: number; z: number };
  rotation: { x: number; y: number; z: number };
}

const FloatingCards: React.FC = () => {
  const projects: ProjectCard[] = [
    {
      id: 1,
      title: "AI Chat Assistant",
      description: "Intelligent conversational AI with natural language processing capabilities",
      image: "/api/placeholder/300/200",
      tech: ["Python", "TensorFlow", "React", "FastAPI"],
      category: "AI Development",
      position: { x: -45, y: -25, z: 0 },
      rotation: { x: 5, y: -15, z: 2 }
    },
    {
      id: 2,
      title: "Cybersecurity Dashboard",
      description: "Real-time threat monitoring and analysis platform",
      image: "/api/placeholder/300/200",
      tech: ["React", "Node.js", "MongoDB", "Socket.io"],
      category: "Cybersecurity",
      position: { x: 45, y: 25, z: -5 },
      rotation: { x: -3, y: 12, z: -1 }
    },
    {
      id: 3,
      title: "Smart IoT System",
      description: "Connected device management with predictive analytics",
      image: "/api/placeholder/300/200",
      tech: ["Arduino", "Python", "MQTT", "InfluxDB"],
      category: "IoT & Systems",
      position: { x: -15, y: -40, z: 10 },
      rotation: { x: 8, y: 0, z: -3 }
    }
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "AI Development":
        return <Brain className="w-5 h-5" />;
      case "Cybersecurity":
        return <Shield className="w-5 h-5" />;
      case "IoT & Systems":
        return <Database className="w-5 h-5" />;
      default:
        return <Code className="w-5 h-5" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "AI Development":
        return "from-purple-500/20 to-pink-500/20 border-purple-500/30";
      case "Cybersecurity":
        return "from-red-500/20 to-orange-500/20 border-red-500/30";
      case "IoT & Systems":
        return "from-green-500/20 to-blue-500/20 border-green-500/30";
      default:
        return "from-blue-500/20 to-cyan-500/20 border-blue-500/30";
    }
  };

  return (
    <div className="absolute inset-0 pointer-events-none opacity-60">
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          className="absolute pointer-events-auto"
          style={{
            left: `${50 + project.position.x}%`,
            top: `${50 + project.position.y}%`,
            transform: `translate(-50%, -50%) rotateX(${project.rotation.x}deg) rotateY(${project.rotation.y}deg) rotateZ(${project.rotation.z}deg)`,
            transformStyle: 'preserve-3d',
          }}
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ 
            opacity: 1, 
            scale: 1, 
            y: 0,
            rotateY: [project.rotation.y, project.rotation.y + 5, project.rotation.y],
          }}
          transition={{ 
            duration: 0.8, 
            delay: index * 0.2,
            rotateY: {
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
          whileHover={{ 
            scale: 1.05, 
            rotateY: project.rotation.y + 10,
            z: 20,
            transition: { duration: 0.3 }
          }}
        >
          <div className={`w-80 bg-gradient-to-br ${getCategoryColor(project.category)} backdrop-blur-md border rounded-xl overflow-hidden shadow-2xl glow-box floating-card`}>
            {/* Project Image */}
            <div className="h-40 bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute top-4 left-4 flex items-center space-x-2">
                <div className={`p-2 rounded-lg bg-gradient-to-r ${getCategoryColor(project.category)} backdrop-blur-sm`}>
                  {getCategoryIcon(project.category)}
                </div>
                <span className="text-xs text-gray-300 font-medium">{project.category}</span>
              </div>
              
              {/* Floating particles in image */}
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-white rounded-full opacity-60"
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
            </div>

            {/* Project Content */}
            <div className="p-6 space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{project.description}</p>
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 text-xs bg-gray-800/50 text-gray-300 rounded-md border border-gray-700/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-3 pt-2">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 flex items-center justify-center space-x-2 py-2 px-4 bg-primary-600/20 hover:bg-primary-600/30 border border-primary-500/30 rounded-lg text-primary-400 text-sm font-medium transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>View</span>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 flex items-center justify-center space-x-2 py-2 px-4 bg-gray-800/50 hover:bg-gray-700/50 border border-gray-600/50 rounded-lg text-gray-300 text-sm font-medium transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>Code</span>
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingCards;
