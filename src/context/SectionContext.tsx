import React, { createContext, useContext, useState, ReactNode, useCallback } from 'react';

interface SectionContextType {
  visibleSections: Set<string>;
  showSection: (sectionName: string) => void;
  hideSection: (sectionName: string) => void;
  isSectionVisible: (sectionName: string) => boolean;
  showAllSections: () => void;
  hideAllSections: () => void;
  navigationMode: 'scroll';
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
  // By default, all sections are visible in scroll mode
  const [visibleSections, setVisibleSections] = useState<Set<string>>(() => {
    const allSections = new Set<string>();
    allSections.add('home');
    allSections.add('about');
    allSections.add('overview');
    allSections.add('timeline');
    allSections.add('services');
    allSections.add('projects');
    allSections.add('testimonials');
    allSections.add('contact');
    return allSections;
  });

  // Always use scroll mode
  const navigationMode: 'scroll' = 'scroll';

  const showSection = useCallback((sectionName: string) => {
    // In scroll mode, all sections are always visible, but we keep this for compatibility
    setVisibleSections(prev => {
      const newSet = new Set(prev);
      newSet.add(sectionName);
      return newSet;
    });
  }, []);

  const hideSection = useCallback((sectionName: string) => {
    setVisibleSections(prev => {
      const newSet = new Set(prev);
      newSet.delete(sectionName);
      // Always keep home visible
      newSet.add('home');
      return newSet;
    });
  }, []);

  const isSectionVisible = useCallback((sectionName: string) => {
    return visibleSections.has(sectionName);
  }, [visibleSections]);

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

  const hideAllSections = useCallback(() => {
    const homeOnly = new Set<string>();
    homeOnly.add('home');
    setVisibleSections(homeOnly); // Always keep home visible
  }, []);

  const value: SectionContextType = {
    visibleSections,
    showSection,
    hideSection,
    isSectionVisible,
    showAllSections,
    hideAllSections,
    navigationMode,
  };

  return (
    <SectionContext.Provider value={value}>
      {children}
    </SectionContext.Provider>
  );
};
