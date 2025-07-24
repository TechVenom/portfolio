import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, AlertCircle, Target } from 'lucide-react';
import { ProjectData } from '../../data/projectsData';

interface ProjectFeaturesProps {
  project: ProjectData;
}

const ProjectFeatures: React.FC<ProjectFeaturesProps> = ({ project }) => {
  const sections = [
    {
      title: 'Key Features',
      icon: CheckCircle,
      color: 'text-green-400',
      bgColor: 'from-green-500/20 to-emerald-500/20',
      borderColor: 'border-green-500/30',
      items: project.features,
      delay: 1.0
    },
    {
      title: 'Challenges',
      icon: AlertCircle,
      color: 'text-yellow-400',
      bgColor: 'from-yellow-500/20 to-orange-500/20',
      borderColor: 'border-yellow-500/30',
      items: project.challenges,
      delay: 1.1
    },
    {
      title: 'Outcomes',
      icon: Target,
      color: 'text-blue-400',
      bgColor: 'from-blue-500/20 to-cyan-500/20',
      borderColor: 'border-blue-500/30',
      items: project.outcomes,
      delay: 1.2
    }
  ];

  return (
    <div className="mb-8 sm:mb-12 lg:mb-16">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
        className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8 text-center"
      >
        Project Insights
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
        {sections.map((section, sectionIndex) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: section.delay }}
            className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 sm:p-8 h-full"
          >
            {/* Section Header */}
            <div className="flex items-center space-x-3 mb-6">
              <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${section.bgColor} border ${section.borderColor} flex items-center justify-center`}>
                <section.icon size={20} className={section.color} />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white">{section.title}</h3>
            </div>

            {/* Items List */}
            <ul className="space-y-3 sm:space-y-4">
              {section.items.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: section.delay + index * 0.1 }}
                  className="flex items-start space-x-3 group"
                >
                  <div className={`w-2 h-2 rounded-full ${section.color.replace('text-', 'bg-')} mt-2 flex-shrink-0 group-hover:scale-125 transition-transform duration-200`} />
                  <span className="text-gray-300 text-sm sm:text-base leading-relaxed group-hover:text-white transition-colors duration-200">
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>

            {/* Decorative Element */}
            <div className={`mt-6 h-1 w-full bg-gradient-to-r ${section.bgColor} rounded-full opacity-50`} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectFeatures;
