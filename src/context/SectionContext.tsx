import React, { createContext, useContext, useState, ReactNode } from 'react';

interface SectionContextType {
  visibleSections: Set<string>;
  showSection: (sectionName: string) => void;
  hideSection: (sectionName: string) => void;
  isSectionVisible: (sectionName: string) => boolean;
  showAllSections: () => void;
  hideAllSections: () => void;
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

  const showSection = (sectionName: string) => {
    setVisibleSections(prev => {
      const newSet = new Set(prev);
      newSet.add(sectionName);
      return newSet;
    });
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

  const value: SectionContextType = {
    visibleSections,
    showSection,
    hideSection,
    isSectionVisible,
    showAllSections,
    hideAllSections,
  };

  return (
    <SectionContext.Provider value={value}>
      {children}
    </SectionContext.Provider>
  );
};
