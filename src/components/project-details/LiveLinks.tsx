import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Globe } from 'lucide-react';
import { ProjectData } from '../../data/projectsData';

interface LiveLinksProps {
  project: ProjectData;
}

const LiveLinks: React.FC<LiveLinksProps> = ({ project }) => {
  if (!project.liveLinks || project.liveLinks.length === 0) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 }}
      className="mb-8 sm:mb-12 lg:mb-16"
    >
      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8 text-center">
        Live Websites
      </h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        {project.liveLinks.map((link, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 + index * 0.1 }}
            className="group glass-effect rounded-xl overflow-hidden border border-gray-700/50 hover:border-primary-500/50 transition-all duration-300"
          >
            {/* Website Screenshot */}
            <div className="relative overflow-hidden">
              <img
                src={project.images[index]}
                alt={link.name}
                className="w-full h-48 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Live indicator */}
              <div className="absolute top-4 right-4">
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-500/20 text-green-400 border border-green-500/30">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-1 animate-pulse"></div>
                  LIVE
                </span>
              </div>
            </div>

            {/* Website Info */}
            <div className="p-6">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-semibold text-white group-hover:text-primary-300 transition-colors duration-300">
                  {link.name}
                </h3>
                <ExternalLink
                  size={18}
                  className="text-gray-400 group-hover:text-primary-400 transition-colors duration-300 flex-shrink-0 ml-2"
                />
              </div>

              <p className="text-gray-400 text-sm mb-4 group-hover:text-gray-300 transition-colors duration-300">
                {link.description}
              </p>

              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500 truncate">
                  {link.url.replace('https://', '').replace('http://', '')}
                </span>

                <motion.a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-3 py-1.5 bg-gradient-to-r from-primary-500 to-accent-500 text-white text-xs font-medium rounded-lg hover:opacity-90 transition-opacity duration-300"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Globe size={14} className="mr-1" />
                  Visit Site
                </motion.a>
              </div>
            </div>

            {/* Hover effect overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-accent-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          </motion.div>
        ))}
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="text-center mt-8"
      >
        <p className="text-gray-400 text-sm">
          Click any website above to view it live • All sites are fully functional and responsive
        </p>
      </motion.div>
    </motion.div>
  );
};

export default LiveLinks;
