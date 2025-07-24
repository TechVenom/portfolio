import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useSectionContext } from '../../context/SectionContext';

interface SectionOverlayProps {
  sectionName: string;
  title: string;
  children: React.ReactNode;
}

// Generate a unique z-index for each overlay based on section name
// Start at z-index 100 to ensure overlays are above footer (z-10)
const getZIndex = (sectionName: string): number => {
  const baseZIndex = 100;
  const sectionOrder = ['about', 'overview', 'timeline', 'services', 'projects', 'testimonials', 'contact'];
  const index = sectionOrder.indexOf(sectionName);
  return baseZIndex + (index >= 0 ? index : 0);
};

const SectionOverlay: React.FC<SectionOverlayProps> = ({ sectionName, title, children }) => {
  const { isSectionVisible, hideSection, navigationMode } = useSectionContext();
  const zIndex = getZIndex(sectionName);

  const handleClose = React.useCallback(() => {
    hideSection(sectionName);
  }, [hideSection, sectionName]);

  const handleBackdropClick = React.useCallback((e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  }, [handleClose]);

  // Check if section is visible for the effect
  const isVisible = isSectionVisible(sectionName);
  const isTerminalMode = navigationMode === 'terminal';

  // Handle ESC key to close overlay - ALWAYS call hooks before any returns
  useEffect(() => {
    if (!isTerminalMode || !isVisible) {
      return; // Don't add event listener if overlay is not visible
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleClose, isTerminalMode, isVisible]);

  // Don't render overlay if not in terminal mode or not visible
  if (!isTerminalMode || !isVisible) {
    return null;
  }

  // Count how many overlays are currently visible
  const allSections = ['about', 'overview', 'timeline', 'services', 'projects', 'testimonials', 'contact'];
  const visibleCount = allSections.filter(section => isSectionVisible(section)).length;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.8, y: 50 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
          duration: 0.6
        }}
        className="fixed inset-0 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
        style={{ zIndex }}
        onClick={handleBackdropClick}
      >
        <motion.div
          initial={{ opacity: 0, rotateX: -15 }}
          animate={{ opacity: 1, rotateX: 0 }}
          exit={{ opacity: 0, rotateX: -15 }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="relative w-full max-w-6xl max-h-[90vh] bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-lg border border-green-400/30 shadow-2xl overflow-hidden"
          style={{
            transform: `translate(${(zIndex - 50) * 10}px, ${(zIndex - 50) * 10}px)`,
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-green-400/30 bg-black/50">
            <div className="flex items-center space-x-4">
              <h2 className="text-2xl font-bold text-green-400 font-mono flex items-center space-x-2">
                <span className="text-cyan-400">$</span>
                <span>{title}</span>
              </h2>
              {visibleCount > 1 && (
                <span className="text-sm text-yellow-400 font-mono bg-yellow-400/20 px-2 py-1 rounded">
                  {visibleCount} overlays open
                </span>
              )}
            </div>
            <button
              onClick={handleClose}
              className="text-gray-400 hover:text-red-400 transition-colors p-2 rounded-lg hover:bg-red-500/20"
              aria-label="Close overlay"
            >
              <X size={24} />
            </button>
          </div>

          {/* Content */}
          <div className="overflow-y-auto max-h-[calc(90vh-80px)] p-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              {children}
            </motion.div>
          </div>

          {/* Terminal-style footer */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 via-cyan-400 to-green-400 opacity-50"></div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default SectionOverlay;
