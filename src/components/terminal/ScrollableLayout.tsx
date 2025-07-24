import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, ExternalLink, Terminal } from 'lucide-react';
import { useSectionContext } from '../../context/SectionContext';
// import { useScrollRestoration } from '../../hooks/useScrollRestoration';
import About from '../sections/About';
import Overview from '../sections/Overview';
import Timeline from '../sections/Timeline';
import Services from '../sections/Services';
import Projects from '../sections/Projects';
import Testimonials from '../sections/Testimonials';
import Contact from '../sections/Contact';

// Move roles array outside component to prevent recreation
const roles = [
  'Ethical Hacker',
  'AI Developer & Researcher',
  'Cybersecurity Expert',
  'Full Stack Developer',
  'AI Agents Specialist'
];

const ScrollableLayout: React.FC = () => {
  const { setTerminalVisible } = useSectionContext();
  const [currentRole, setCurrentRole] = useState(0);

  // Disable scroll restoration for now to prevent issues
  // useScrollRestoration({ delay: 500, behavior: 'smooth' });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []); // Empty dependency array since roles is now constant



  // Home section component
  const HomeSection = () => (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-8 max-w-4xl mx-auto"
      >
        <p className="text-green-400 text-base sm:text-lg font-medium font-mono">
          <span className="text-cyan-400">$</span> whoami
        </p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-mono leading-tight">
          <span className="text-green-400 glow-text">venomx</span>
        </h1>
        <div className="flex items-center justify-center space-x-3 h-16">
          <span className="text-lg sm:text-xl text-gray-300 font-mono">{'>'}</span>
          <span className="text-lg sm:text-xl font-semibold bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent font-mono">
            {roles[currentRole]}
          </span>
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
            className="text-lg sm:text-xl text-green-400 font-mono"
          >
            █
          </motion.span>
        </div>
        <p className="text-base sm:text-lg text-gray-400 leading-relaxed max-w-3xl mx-auto font-mono">
          Penetrating systems through <span className="text-green-400">ethical hacking</span>, AI development,
          and <span className="text-cyan-400">cybersecurity</span> research.
          <br />
          Currently: Building intelligent security systems.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center pt-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-green-500 hover:bg-green-600 text-black px-6 py-3 rounded-lg font-semibold font-mono flex items-center space-x-2 transition-all duration-300"
          >
            <Download size={18} />
            <span>Download CV</span>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border border-green-400 text-green-400 hover:bg-green-500/20 px-6 py-3 rounded-lg font-semibold font-mono flex items-center space-x-2 transition-all duration-300"
          >
            <ExternalLink size={18} />
            <span>View Work</span>
          </motion.button>
        </div>
      </motion.div>
    </div>
  );

  const sections = [
    { id: 'home', title: 'Home', component: <HomeSection /> },
    { id: 'about', title: 'About Me', component: <About /> },
    { id: 'overview', title: 'Overview', component: <Overview /> },
    { id: 'timeline', title: 'Timeline', component: <Timeline /> },
    { id: 'services', title: 'Services', component: <Services /> },
    { id: 'projects', title: 'Projects', component: <Projects /> },
    { id: 'testimonials', title: 'Testimonials', component: <Testimonials /> },
    { id: 'contact', title: 'Contact', component: <Contact /> },
  ];

  return (
    <div className="w-full overflow-x-hidden relative pb-16 sm:pb-20">
      {/* Terminal Toggle Button */}
      <motion.button
        onClick={() => {
          setTerminalVisible(true);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        className="fixed top-4 right-4 z-50 bg-black/90 border border-green-400 text-green-400 px-2 py-1.5 rounded-md font-mono hover:bg-green-500/20 transition-all duration-300 flex items-center space-x-1.5 text-xs backdrop-blur-sm"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        title="Switch to Terminal Mode"
      >
        <Terminal size={14} />
        <span className="hidden sm:inline text-xs">Terminal</span>
      </motion.button>
      {sections.map((section, index) => (
        <section
          key={section.id}
          id={section.id}
          className="min-h-screen py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 w-full overflow-x-hidden"
        >
          {/* Section Content */}
          <div className="w-full max-w-7xl mx-auto">
            {section.component}
          </div>

          {/* Section Divider - Only show between sections, not after last one */}
          {index < sections.length - 1 && (
            <div className="mt-16 sm:mt-20 lg:mt-24 mb-8 mx-auto w-full max-w-4xl">
              <div className="h-px bg-gradient-to-r from-transparent via-green-400/20 to-transparent"></div>
              <div className="flex justify-center mt-6">
                <div className="flex space-x-2">
                  <div className="w-1.5 h-1.5 bg-green-400/60 rounded-full animate-pulse"></div>
                  <div className="w-1.5 h-1.5 bg-cyan-400/60 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                  <div className="w-1.5 h-1.5 bg-green-400/60 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                </div>
              </div>
            </div>
          )}
        </section>
      ))}

      {/* Fixed Footer - visible across all sections */}
      <footer className="fixed bottom-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-sm border-t border-green-400/20 py-3 sm:py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between text-center sm:text-left gap-2 sm:gap-0">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-green-400 to-cyan-400 rounded-lg flex items-center justify-center">
                <span className="text-black font-bold font-mono text-sm sm:text-base">V</span>
              </div>
              <span className="text-base sm:text-lg font-bold text-green-400 font-mono">venomx</span>
            </div>

            <div className="text-xs sm:text-sm text-gray-400 font-mono">
              <span>© 2025 venomx</span>
              <span className="mx-1 sm:mx-2 text-green-400">•</span>
              <span className="hidden sm:inline">Ethical Hacker & AI Developer</span>
              <span className="sm:hidden">Developer</span>
              <span className="mx-1 sm:mx-2 text-green-400">•</span>
              <span className="hidden sm:inline">Built with React & TypeScript</span>
              <span className="sm:hidden">React</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ScrollableLayout;
