import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Code2 } from 'lucide-react';
import { ProjectData } from '../../data/projectsData';

interface ProjectOverviewProps {
  project: ProjectData;
}

const ProjectOverview: React.FC<ProjectOverviewProps> = ({ project }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12 lg:mb-16">
      {/* Project Description */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="lg:col-span-2"
      >
        <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 sm:p-8 h-full">
          <div className="flex items-center space-x-3 mb-6">
            <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${project.color} flex items-center justify-center`}>
              <BookOpen size={20} className="text-white" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">About This Project</h2>
          </div>
          <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
            {project.longDescription}
          </p>
        </div>
      </motion.div>

      {/* Technologies */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
        className="lg:col-span-1"
      >
        <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 sm:p-8 h-full">
          <div className="flex items-center space-x-3 mb-6">
            <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${project.color} flex items-center justify-center`}>
              <Code2 size={20} className="text-white" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">Tech Stack</h2>
          </div>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {project.technologies.map((tech, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className={`px-3 py-2 bg-gradient-to-r ${project.color} bg-opacity-20 text-white rounded-full border border-current border-opacity-30 font-mono text-sm transition-transform duration-200`}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectOverview;
