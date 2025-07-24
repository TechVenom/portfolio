import React from 'react';
import { motion } from 'framer-motion';
import { Server, Database, Cloud, TestTube, Layers, Settings } from 'lucide-react';
import { ProjectData } from '../../data/projectsData';

interface TechnicalDetailsProps {
  project: ProjectData;
}

const TechnicalDetails: React.FC<TechnicalDetailsProps> = ({ project }) => {
  const technicalSections = [
    {
      key: 'architecture',
      title: 'Architecture',
      icon: Layers,
      value: project.techDetails.architecture,
      color: 'from-purple-500 to-pink-500'
    },
    {
      key: 'database',
      title: 'Database',
      icon: Database,
      value: project.techDetails.database,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      key: 'deployment',
      title: 'Deployment',
      icon: Cloud,
      value: project.techDetails.deployment,
      color: 'from-green-500 to-emerald-500'
    },
    {
      key: 'testing',
      title: 'Testing',
      icon: TestTube,
      value: project.techDetails.testing,
      color: 'from-orange-500 to-red-500'
    }
  ].filter(section => section.value); // Only show sections with values

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.3 }}
      className="mb-8 sm:mb-12 lg:mb-16"
    >
      <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 sm:p-8">
        {/* Section Header */}
        <div className="flex items-center space-x-3 mb-6 sm:mb-8">
          <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${project.color} flex items-center justify-center`}>
            <Settings size={24} className="text-white" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Technical Architecture</h2>
        </div>

        {/* Technical Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {technicalSections.map((section, index) => (
            <motion.div
              key={section.key}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 + index * 0.1 }}
              className="group"
            >
              {/* Section Card */}
              <div className="bg-gray-900/50 rounded-xl p-4 sm:p-6 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 h-full">
                {/* Header */}
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${section.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <section.icon size={16} className="text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">
                    {section.title}
                  </h3>
                </div>

                {/* Content */}
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  {section.value}
                </p>

                {/* Decorative Line */}
                <div className={`mt-4 h-0.5 w-0 group-hover:w-full bg-gradient-to-r ${section.color} transition-all duration-500 ease-out`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="mt-8 p-4 sm:p-6 bg-gray-900/30 rounded-xl border border-gray-700/30"
        >
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <Server size={12} className="text-cyan-400" />
            </div>
            <div>
              <h4 className="text-white font-semibold mb-2">Development Approach</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                This project follows modern development practices with emphasis on scalability, 
                maintainability, and performance. The architecture is designed to handle growth 
                and adapt to changing requirements while maintaining code quality and security standards.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default TechnicalDetails;
