import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowLeft, Share2, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { ProjectData } from '../../data/projectsData';

interface ProjectActionsProps {
  project: ProjectData;
}

const ProjectActions: React.FC<ProjectActionsProps> = ({ project }) => {
  const navigate = useNavigate();

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: project.title,
          text: project.description,
          url: window.location.href,
        });
      } catch (error) {
        // Fallback to clipboard
        navigator.clipboard.writeText(window.location.href);
      }
    } else {
      // Fallback to clipboard
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.6 }}
      className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 sm:p-8"
    >
      {/* Call to Action Header */}
      <div className="text-center mb-6 sm:mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
          Interested in This Project?
        </h2>
        <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
          Explore the code, try the live demo, or get in touch to discuss similar projects.
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-6 sm:mb-8">
        {/* GitHub Button */}
        {project.github && (
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-3 px-6 py-3 bg-gray-900/80 hover:bg-gray-800/80 rounded-xl text-gray-300 hover:text-white transition-all duration-300 border border-gray-600/50 hover:border-gray-500/50 w-full sm:w-auto justify-center"
          >
            <Github size={20} />
            <span className="font-medium">View Source Code</span>
          </motion.a>
        )}

        {/* Live Demo Button */}
        {project.demo && (
          <motion.a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className={`flex items-center space-x-3 px-6 py-3 bg-gradient-to-r ${project.color} rounded-xl text-white hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto justify-center`}
          >
            <ExternalLink size={20} />
            <span className="font-medium">Try Live Demo</span>
          </motion.a>
        )}

        {/* Share Button */}
        <motion.button
          onClick={handleShare}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center space-x-3 px-6 py-3 bg-cyan-600/20 hover:bg-cyan-600/30 rounded-xl text-cyan-400 hover:text-cyan-300 transition-all duration-300 border border-cyan-500/30 hover:border-cyan-400/50 w-full sm:w-auto justify-center"
        >
          <Share2 size={20} />
          <span className="font-medium">Share Project</span>
        </motion.button>
      </div>

      {/* Navigation */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-gray-700/50">
        {/* Back Button */}
        <motion.button
          onClick={() => navigate('/')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center space-x-2 px-4 py-2 text-gray-400 hover:text-white transition-colors duration-300"
        >
          <ArrowLeft size={18} />
          <span>Back to Portfolio</span>
        </motion.button>

        {/* Like Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="flex items-center space-x-2 px-4 py-2 text-gray-400 hover:text-red-400 transition-colors duration-300 group"
        >
          <Heart size={18} className="group-hover:fill-current" />
          <span className="text-sm">Like this project</span>
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ProjectActions;
