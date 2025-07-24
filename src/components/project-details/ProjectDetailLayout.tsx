import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { ProjectData } from '../../data/projectsData';

import './ProjectDetail.css';

interface ProjectDetailLayoutProps {
  project: ProjectData;
  children: React.ReactNode;
}

const ProjectDetailLayout: React.FC<ProjectDetailLayoutProps> = ({ project, children }) => {
  const navigate = useNavigate();

  // Ensure scrolling is enabled for project detail pages
  useEffect(() => {
    const htmlElement = document.documentElement;
    const bodyElement = document.body;

    // Remove any navigation mode classes that might prevent scrolling
    htmlElement.classList.remove('terminal-mode', 'scroll-mode', 'project-detail-page');

    // Add the new scrollable class
    htmlElement.classList.add('project-detail-scrollable');

    // Force scrolling styles directly with maximum specificity
    const forceScrollingStyles = () => {
      htmlElement.style.setProperty('overflow', 'auto', 'important');
      htmlElement.style.setProperty('overflow-y', 'scroll', 'important');
      htmlElement.style.setProperty('overflow-x', 'hidden', 'important');
      htmlElement.style.setProperty('height', 'auto', 'important');
      htmlElement.style.setProperty('max-height', 'none', 'important');
      htmlElement.style.setProperty('min-height', '100vh', 'important');

      bodyElement.style.setProperty('overflow', 'auto', 'important');
      bodyElement.style.setProperty('overflow-y', 'scroll', 'important');
      bodyElement.style.setProperty('overflow-x', 'hidden', 'important');
      bodyElement.style.setProperty('height', 'auto', 'important');
      bodyElement.style.setProperty('max-height', 'none', 'important');
      bodyElement.style.setProperty('min-height', '100vh', 'important');
    };

    // Apply styles immediately
    forceScrollingStyles();

    // Apply styles again after a short delay to override any conflicting styles
    const timeoutId = setTimeout(forceScrollingStyles, 100);

    // Additional aggressive approach - force scroll by setting scrollTop
    const forceScrollability = () => {
      // Enable scrolling by setting a small scroll position and then back to 0
      window.scrollTo(0, 1);
      setTimeout(() => window.scrollTo(0, 0), 10);
    };

    // Apply scrollability check after component mounts
    const scrollCheckTimeout = setTimeout(forceScrollability, 200);

    // Cleanup function
    return () => {
      clearTimeout(timeoutId);
      clearTimeout(scrollCheckTimeout);
      htmlElement.classList.remove('project-detail-scrollable');

      // Reset styles
      const stylesToReset = ['overflow', 'overflow-y', 'overflow-x', 'height', 'max-height', 'min-height'];
      stylesToReset.forEach(prop => {
        htmlElement.style.removeProperty(prop);
        bodyElement.style.removeProperty(prop);
      });
    };
  }, []);

  const handleBackClick = () => {
    // Simply navigate back to home and show projects section
    navigate('/', {
      state: {
        showSection: 'projects'
      }
    });
  };

  return (
    <div
      className="project-detail-container min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
      style={{
        overflow: 'auto',
        overflowY: 'scroll',
        overflowX: 'hidden',
        height: 'auto',
        minHeight: '100vh',
        maxHeight: 'none'
      }}
    >
      {/* Navigation Header */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur-xl border-b border-gray-700/50"
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <motion.button
              onClick={handleBackClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 px-4 py-2 bg-gray-800/50 hover:bg-gray-700/50 rounded-lg text-gray-300 hover:text-white transition-all duration-300"
            >
              <ArrowLeft size={20} />
              <span className="hidden sm:inline">Back to Portfolio</span>
              <span className="sm:hidden">Back</span>
            </motion.button>
            
            <div className="flex items-center space-x-2 sm:space-x-4">
              {project.github && (
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 px-3 sm:px-4 py-2 bg-gray-800/50 hover:bg-gray-700/50 rounded-lg text-gray-300 hover:text-white transition-all duration-300"
                >
                  <Github size={18} />
                  <span className="hidden sm:inline">GitHub</span>
                </motion.a>
              )}
              {project.demo && (
                <motion.a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center space-x-2 px-3 sm:px-4 py-2 bg-gradient-to-r ${project.color} rounded-lg text-white hover:opacity-90 transition-opacity`}
                >
                  <ExternalLink size={18} />
                  <span className="hidden sm:inline">Live Demo</span>
                  <span className="sm:hidden">Demo</span>
                </motion.a>
              )}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="project-detail-content w-full" style={{ overflow: 'visible', height: 'auto' }}>
        <div className="container mx-auto px-4 py-6 sm:py-8 lg:py-12">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailLayout;
