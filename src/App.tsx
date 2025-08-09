import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/layout/Layout';
import ProjectDetail from './components/ProjectDetail';
import { SectionProvider, useSectionContext } from './context/SectionContext';
import Homepage from './components/sections/Homepage';
import About from './components/sections/About';
import Services from './components/sections/Services';
import Projects from './components/sections/Projects';
import Timeline from './components/sections/Timeline';
import Contact from './components/sections/Contact';
// import { useScrollRestoration } from './hooks/useScrollRestoration';
const HomePage: React.FC = () => {
  const { showSection } = useSectionContext();
  const location = useLocation();

  // Use the scroll restoration hook only if needed
  // useScrollRestoration({ delay: 300, behavior: 'smooth' });

  // Handle navigation state when returning from project detail pages
  useEffect(() => {
    if (location.state && location.state.showSection) {
      const sectionToShow = location.state.showSection;
      showSection(sectionToShow);
    }
  }, [location.state, showSection]);
return (
  <Layout>
    <Homepage />
    <About />
    <Timeline />
    <Services />
    <Projects />
    <Contact />
  </Layout>
);
};

const AppContent: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/portfolio" element={<HomePage />} />
      <Route path="/portfolio/project/:id" element={<ProjectDetail />} />
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
