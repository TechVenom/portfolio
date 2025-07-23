import React from 'react';
import Layout from './components/Layout';
import Hero3DHacker from './components/Hero3DHacker';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Timeline from './components/Timeline';
import Testimonials from './components/Testimonials';
import Overview from './components/Overview';
import SectionOverlay from './components/SectionOverlay';
import { SectionProvider, useSectionContext } from './context/SectionContext';

const AppContent: React.FC = () => {
  const { navigationMode } = useSectionContext();

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

function App() {
  return (
    <SectionProvider>
      <AppContent />
    </SectionProvider>
  );
}

export default App;
