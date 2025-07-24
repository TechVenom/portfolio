import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/layout/Layout';
import SectionOverlay from './components/layout/SectionOverlay';
import Hero3DHacker from './components/terminal/Hero3DHacker';
import About from './components/sections/About';
import Services from './components/sections/Services';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import Timeline from './components/sections/Timeline';
import Testimonials from './components/sections/Testimonials';
import Overview from './components/sections/Overview';
import ProjectDetail from './components/ProjectDetail';
import { SectionProvider, useSectionContext } from './context/SectionContext';
import { useScrollRestoration } from './hooks/useScrollRestoration';

const HomePage: React.FC = () => {
  const { navigationMode, showSection } = useSectionContext();
  const location = useLocation();

  // Use the scroll restoration hook
  useScrollRestoration({ delay: 300, behavior: 'smooth' });

  // Handle navigation state when returning from project detail pages
  useEffect(() => {
    if (location.state && location.state.showSection) {
      const sectionToShow = location.state.showSection;

      // Small delay to ensure the page is loaded
      setTimeout(() => {
        showSection(sectionToShow);
      }, 100);
    }
  }, [location.state, showSection]);

  return (
    <Layout>
      {/* Home section is always visible - single page */}
      <Hero3DHacker />

      {/* Section overlays that appear on command - only in terminal mode */}
      {navigationMode === 'terminal' && (
        <>
          <SectionOverlay sectionName="about" title="about_me.sh">
            <About />
          </SectionOverlay>

          <SectionOverlay sectionName="overview" title="overview.sh">
            <Overview />
          </SectionOverlay>

          <SectionOverlay sectionName="timeline" title="timeline.sh">
            <Timeline />
          </SectionOverlay>

          <SectionOverlay sectionName="services" title="services.sh">
            <Services />
          </SectionOverlay>

          <SectionOverlay sectionName="projects" title="projects.sh">
            <Projects />
          </SectionOverlay>

          <SectionOverlay sectionName="testimonials" title="testimonials.sh">
            <Testimonials />
          </SectionOverlay>

          <SectionOverlay sectionName="contact" title="contact.sh">
            <Contact />
          </SectionOverlay>
        </>
      )}
    </Layout>
  );
};

const AppContent: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/project/:id" element={<ProjectDetail />} />
    </Routes>
  );
};

function App() {
  return (
    <Router>
      <SectionProvider>
        <AppContent />
      </SectionProvider>
    </Router>
  );
}

export default App;
