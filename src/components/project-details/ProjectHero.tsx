import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Tag } from 'lucide-react';
import { ProjectData } from '../../data/projectsData';

interface ProjectHeroProps {
  project: ProjectData;
}

const ProjectHero: React.FC<ProjectHeroProps> = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center mb-8 sm:mb-12 lg:mb-16"
    >
      {/* Project Icon */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={`inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full bg-gradient-to-r ${project.color} mb-4 sm:mb-6`}
      >
        <project.icon size={24} className="sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white" />
      </motion.div>
      
      {/* Project Title */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-3 sm:mb-4 font-mono leading-tight"
      >
        {project.title}
      </motion.h1>
      
      {/* Project Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto"
      >
        {project.subtitle}
      </motion.p>

      {/* Project Meta Information */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 lg:gap-6 mb-6 sm:mb-8"
      >
        {/* Period */}
        <div className="flex items-center space-x-2 px-3 sm:px-4 py-2 bg-gray-800/50 rounded-full backdrop-blur-sm">
          <Calendar size={16} className="text-cyan-400" />
          <span className="text-sm sm:text-base text-gray-300 font-medium">{project.period}</span>
        </div>
        
        {/* Status */}
        <div className={`px-3 sm:px-4 py-2 bg-gradient-to-r ${project.color} rounded-full`}>
          <span className="text-sm sm:text-base text-white font-bold">{project.status}</span>
        </div>
        
        {/* Category */}
        <div className="flex items-center space-x-2 px-3 sm:px-4 py-2 bg-gray-800/50 rounded-full backdrop-blur-sm">
          <Tag size={16} className="text-cyan-400" />
          <span className="text-sm sm:text-base text-gray-300 font-medium">{project.category}</span>
        </div>
      </motion.div>

      {/* Short Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="text-base sm:text-lg text-gray-400 max-w-4xl mx-auto leading-relaxed"
      >
        {project.description}
      </motion.p>
    </motion.div>
  );
};

export default ProjectHero;
