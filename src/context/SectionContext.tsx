import React, { createContext, useContext, useState, ReactNode } from 'react';

interface SectionContextType {
  visibleSections: Set<string>;
  showSection: (sectionName: string) => void;
  hideSection: (sectionName: string) => void;
  isSectionVisible: (sectionName: string) => boolean;
  showAllSections: () => void;
  hideAllSections: () => void;
  isTerminalVisible: boolean;
  setTerminalVisible: (visible: boolean) => void;
  navigationMode: 'terminal' | 'scroll';
}

const SectionContext = createContext<SectionContextType | undefined>(undefined);

export const useSectionContext = () => {
  const context = useContext(SectionContext);
  if (!context) {
    throw new Error('useSectionContext must be used within a SectionProvider');
  }
  return context;
};

interface SectionProviderProps {
  children: ReactNode;
}

export const SectionProvider: React.FC<SectionProviderProps> = ({ children }) => {
  // By default, only home is visible
  const [visibleSections, setVisibleSections] = useState<Set<string>>(() => {
    const initialSet = new Set<string>();
    initialSet.add('home');
    return initialSet;
  });

  // Terminal visibility state - check localStorage first, default to true (terminal mode)
  const [isTerminalVisible, setIsTerminalVisible] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem('portfolio-terminal-mode');
      return saved !== null ? JSON.parse(saved) : true;
    } catch {
      return true; // Default to terminal mode if localStorage fails
    }
  });

  // Navigation mode depends on terminal visibility
  const navigationMode: 'terminal' | 'scroll' = isTerminalVisible ? 'terminal' : 'scroll';

  const showSection = (sectionName: string) => {
    // In terminal mode, show as overlay
    // In scroll mode, this function is not used as all sections are always visible
    if (navigationMode === 'terminal') {
      setVisibleSections(prev => {
        const newSet = new Set(prev);
        newSet.add(sectionName);
        return newSet;
      });
    }
  };

  const hideSection = (sectionName: string) => {
    setVisibleSections(prev => {
      const newSet = new Set(prev);
      newSet.delete(sectionName);
      return newSet;
    });
  };

  const isSectionVisible = (sectionName: string) => {
    return visibleSections.has(sectionName);
  };

  const showAllSections = () => {
    const allSections = new Set<string>();
    allSections.add('home');
    allSections.add('about');
    allSections.add('overview');
    allSections.add('timeline');
    allSections.add('services');
    allSections.add('projects');
    allSections.add('testimonials');
    allSections.add('contact');
    setVisibleSections(allSections);
  };

  const hideAllSections = () => {
    const homeOnly = new Set<string>();
    homeOnly.add('home');
    setVisibleSections(homeOnly); // Always keep home visible
  };

  const setTerminalVisible = (visible: boolean) => {
    setIsTerminalVisible(visible);
    // Save preference to localStorage
    try {
      localStorage.setItem('portfolio-terminal-mode', JSON.stringify(visible));
    } catch {
      // Ignore localStorage errors
    }
    // When switching to scroll mode, hide all overlays
    if (!visible) {
      hideAllSections();
    }
  };

  const value: SectionContextType = {
    visibleSections,
    showSection,
    hideSection,
    isSectionVisible,
    showAllSections,
    hideAllSections,
    isTerminalVisible,
    setTerminalVisible,
    navigationMode,
  };

  return (
    <SectionContext.Provider value={value}>
      {children}
    </SectionContext.Provider>
  );
};
