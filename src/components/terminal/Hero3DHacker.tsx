import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Download, ExternalLink, Terminal } from 'lucide-react';
import InteractiveTerminal from './InteractiveTerminal';
import ScrollableLayout from './ScrollableLayout';
import { useSectionContext } from '../../context/SectionContext';

// Move roles array outside component to prevent recreation on every render
const roles = [
  'Ethical Hacker',
  'AI Developer & Researcher',
  'Cybersecurity Expert',
  'Full Stack Developer',
  'AI Agents Specialist'
];

const Hero3DHacker: React.FC = () => {
  const { isTerminalVisible, setTerminalVisible, navigationMode, showSection } = useSectionContext();
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []); // Empty dependency array since roles is now constant



  // If in scroll mode, render the ScrollableLayout instead
  if (navigationMode === 'scroll') {
    return <ScrollableLayout />;
  }

  // Terminal mode - render the hero section with terminal
  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero Section */}
      <section id="home" className={`${isTerminalVisible ? 'h-screen' : 'min-h-screen'} relative overflow-hidden w-full`}>
      {/* Dark Cyber Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        {/* Matrix-style background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full" style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 0, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 0, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        {/* Animated Matrix Rain Effect */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={`matrix-${i}`}
            className="absolute text-green-400 font-mono text-xs opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `-10%`,
            }}
            animate={{
              y: ['0vh', '110vh'],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear"
            }}
          >
            {Math.random().toString(2).substr(2, 8)}
          </motion.div>
        ))}

        {/* Glowing Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`glow-${i}`}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [0.5, 1.5, 0.5],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 h-screen flex flex-col">
        {/* Terminal Toggle Button */}
        <motion.button
          onClick={() => {
            setTerminalVisible(!isTerminalVisible);
            // Scroll to top when switching to scroll mode
            if (isTerminalVisible) {
              setTimeout(() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }, 100);
            }
          }}
          className="fixed top-4 right-4 z-50 bg-black/90 border border-green-400 text-green-400 px-2 py-1.5 rounded-md font-mono hover:bg-green-500/20 transition-all duration-300 flex items-center space-x-1.5 text-xs backdrop-blur-sm"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          title={isTerminalVisible ? 'Switch to Scroll Mode' : 'Switch to Terminal Mode'}
        >
          <Terminal size={14} />
          <span className="hidden sm:inline text-xs">
            {isTerminalVisible ? 'Scroll' : 'Terminal'}
          </span>
        </motion.button>

        {/* Main Content Area */}
        <div className="flex-1 flex items-center">

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 h-full w-full overflow-x-hidden">
            <div className="flex flex-col xl:flex-row gap-6 lg:gap-8 xl:gap-12 3xl:gap-16 items-center justify-center h-full max-w-7xl 3xl:max-w-8xl mx-auto w-full">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className={`space-y-3 sm:space-y-4 md:space-y-6 lg:space-y-8 z-20 w-full overflow-x-hidden ${
                isTerminalVisible
                  ? 'xl:w-1/2 xl:max-w-2xl 3xl:max-w-3xl'
                  : 'max-w-4xl mx-auto text-center lg:text-left'
              }`}
            >
              {/* Greeting */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="space-y-4"
              >
                <p className="text-green-400 text-base sm:text-lg font-medium font-mono">
                  <span className="text-cyan-400">$</span> whoami
                </p>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 3xl:text-7xl font-bold font-mono leading-tight">
                  <span className="text-green-400 glow-text">venomx</span>
                </h1>
              </motion.div>

              {/* Animated Role */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="h-20 flex items-center justify-center lg:justify-start"
              >
                <span className="text-base sm:text-lg lg:text-xl 3xl:text-2xl text-gray-300 mr-3 font-mono">{'>'}</span>
                <motion.span
                  key={currentRole}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-base sm:text-lg lg:text-xl 3xl:text-2xl font-semibold bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent font-mono"
                >
                  {roles[currentRole]}
                </motion.span>
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="text-green-400 ml-1 font-mono text-base sm:text-lg lg:text-xl 3xl:text-2xl"
                >
                  _
                </motion.span>
              </motion.div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-xs sm:text-sm lg:text-base 3xl:text-lg text-gray-400 leading-relaxed max-w-3xl font-mono text-center lg:text-left"
              >
              <span className="text-green-400"># Penetrating systems</span> through{' '}
              <span className="text-cyan-400 font-medium">ethical hacking</span>,{' '}
              <span className="text-green-400 font-medium">AI development</span>, and{' '}
              <span className="text-cyan-400 font-medium">cybersecurity research</span>.
              <br />
              <span className="text-green-400"># Currently:</span> Building intelligent security systems.
            </motion.p>

            {/* Terminal-style Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="bg-black/60 border border-green-400/30 rounded-lg p-4 font-mono text-sm backdrop-blur-sm"
            >
              <div className="text-green-400 mb-3">$ cat /proc/venomx/uptime</div>
              <div className="space-y-1 text-gray-300">
                <div><span className="text-cyan-400">Projects:</span> <span className="text-white">14 active ops</span> <span className="text-gray-500">[4 open-source]</span></div>
                <div><span className="text-cyan-400">Stack:</span> <span className="text-white">Python, Go, Rust, TS, Docker, Burp, nmap</span></div>
                <div><span className="text-cyan-400">Clearance:</span> <span className="text-red-400">MAX_SEC_LVL</span> <span className="text-gray-500">[Red Access]</span></div>
                <div><span className="text-cyan-400">Status:</span> <span className="text-green-400 animate-pulse">ENGAGED & ACTIVE</span> <span className="text-red-400">⚔</span></div>
              </div>
              <div className="mt-3 pt-2 border-t border-gray-700/50">
                <div className="text-xs text-gray-500">
                  <span>uptime: 1337d 13h 37m</span> <span className="mx-2">|</span>
                  <span>load: 0.42, 0.69, 1.33</span> <span className="mx-2">|</span>
                  <span>mem: 95.3% efficiency</span>
                </div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button
                onClick={() => {
                  // Create a temporary link to download the CV
                  const link = document.createElement('a');
                  link.href = '/resume.pdf'; // You'll need to add your resume PDF to the public folder
                  link.download = 'VenomX_Resume.pdf';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
                className="bg-green-500/20 border border-green-400 text-green-400 px-6 py-3 rounded-lg font-mono hover:bg-green-500/30 transition-all duration-300 group"
              >
                <span className="flex items-center space-x-2">
                  <span>./download_cv.sh</span>
                  <Download size={18} className="group-hover:animate-bounce" />
                </span>
              </button>
              <button
                onClick={() => {
                  if (isTerminalVisible) {
                    // In terminal mode, show the projects section
                    showSection('projects');
                  } else {
                    // In scroll mode, scroll to projects section
                    const projectsSection = document.querySelector('#projects');
                    if (projectsSection) {
                      projectsSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }
                }}
                className="bg-cyan-500/20 border border-cyan-400 text-cyan-400 px-6 py-3 rounded-lg font-mono hover:bg-cyan-500/30 transition-all duration-300 group"
              >
                <span className="flex items-center space-x-2">
                  <span>./view_work.sh</span>
                  <ExternalLink size={18} className="group-hover:rotate-45 transition-transform" />
                </span>
              </button>
            </motion.div>
          </motion.div>



            {/* Interactive Terminal */}
            {isTerminalVisible && (
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative w-full xl:w-1/2 xl:max-w-2xl 3xl:max-w-3xl flex items-center justify-center xl:justify-start px-2 sm:px-0"
              >
                <div className="terminal-container bg-black/40 backdrop-blur-sm rounded-lg p-2 sm:p-3 lg:p-4 border border-green-400/50 shadow-2xl w-full max-w-sm sm:max-w-lg xl:max-w-xl 2xl:max-w-2xl 3xl:max-w-3xl h-[calc(100vh-180px)] sm:h-[calc(100vh-160px)] md:h-[calc(100vh-140px)] lg:h-[calc(100vh-120px)] xl:h-[calc(100vh-100px)] 3xl:h-[calc(100vh-80px)] flex flex-col mt-6 sm:mt-8 lg:mt-6 xl:mt-0">
                  <div className="flex items-center justify-between mb-2 sm:mb-3 lg:mb-4 flex-shrink-0">
                    <h3 className="text-green-400 font-mono text-xs sm:text-sm lg:text-base xl:text-lg flex items-center space-x-1 sm:space-x-2">
                      <Terminal size={12} className="sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
                      <span className="truncate">
                        <span className="hidden sm:inline">Interactive Portfolio Terminal</span>
                        <span className="sm:hidden">Terminal</span>
                      </span>
                    </h3>
                    <div className="text-xs text-gray-400 font-mono hidden lg:block">
                      Navigate using commands
                    </div>
                  </div>
                  <div className="flex-1 min-h-0 overflow-hidden">
                    <InteractiveTerminal />
                  </div>
                  <div className="mt-2 sm:mt-3 text-xs text-gray-500 font-mono bg-black/30 p-2 sm:p-3 rounded border border-green-400/20 flex-shrink-0">
                    <div className="text-green-400 mb-1 sm:mb-2 text-xs font-bold">🚀 Quick Start:</div>
                    <div className="space-y-0.5 sm:space-y-1">
                      <div className="break-words text-xs">• <span className="text-cyan-400">"help"</span> - all commands</div>
                      <div className="break-words text-xs">• <span className="text-cyan-400">"about"</span> or <span className="text-cyan-400">"projects"</span></div>
                      <div className="break-words text-xs hidden sm:block">• <span className="text-cyan-400">"hack"</span> - hacking simulation</div>
                      <div className="break-words text-xs hidden sm:block">• <span className="text-cyan-400">"matrix"</span> - matrix effect</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
            </div>
          </div>
        </div>

        {/* Footer - only shown in terminal mode */}
        {isTerminalVisible && (
          <footer className="bg-black/40 backdrop-blur-sm border-t border-green-400/20 py-2 sm:py-3 lg:py-4 w-full overflow-x-hidden mt-auto">
            <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 w-full">
              <div className="flex flex-col items-center text-center gap-2 sm:gap-3 lg:gap-4">
                {/* Main Info */}
                <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2 lg:gap-3">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 bg-gradient-to-r from-green-400 to-cyan-400 rounded-lg flex items-center justify-center">
                      <span className="text-black font-bold font-mono text-xs sm:text-sm lg:text-base">V</span>
                    </div>
                    <span className="text-sm sm:text-base lg:text-lg font-bold text-green-400 font-mono">venomx</span>
                  </div>
                  <div className="flex items-center space-x-1 sm:space-x-2 text-xs sm:text-sm text-gray-400">
                    <span className="hidden sm:inline">·</span>
                    <span>Ethical Hacker & AI Engineer</span>
                    <span className="hidden lg:inline">·</span>
                    <span className="hidden lg:inline">Portfolio v3.0.0</span>
                  </div>
                </div>

                {/* Contact Links */}
                <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 lg:gap-6 text-xs sm:text-sm font-mono">
                  <a href="mailto:Techvenom606@proton.me" className="text-gray-400 hover:text-green-400 transition-colors hover:underline break-all sm:break-normal">
                    📧 <span className="hidden sm:inline">Techvenom606@proton.me</span><span className="sm:hidden">Email</span>
                  </a>
                  <span className="hidden sm:inline text-gray-600">·</span>
                  <a href="https://github.com/TechVenom" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400 transition-colors hover:underline">
                    💻 GitHub
                  </a>
                  <span className="hidden sm:inline text-gray-600">·</span>
                  <a href="/Professional_Resume_VenomX.md" target="_blank" className="text-gray-400 hover:text-green-400 transition-colors hover:underline">
                    📄 Resume
                  </a>
                </div>

                {/* Tech Stack & Status */}
                <div className="flex flex-col items-center gap-1 sm:gap-2 text-xs sm:text-sm text-gray-500 font-mono">
                  <div className="text-center">
                    <span className="hidden sm:inline">🛠 Stack: TypeScript · React · Node.js · Python · Docker · TailwindCSS</span>
                    <span className="sm:hidden">🛠 TS · React · Node · Python · Docker</span>
                  </div>
                  <div className="text-center">
                    <span className="text-green-400 text-xs sm:text-sm">🔍 Open to Full-Time / Contract · Remote / Hybrid Roles</span>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        )}
      </div>
      </section>

      {/* Scrollable Layout - shown when terminal is hidden */}
      {!isTerminalVisible && (
        <div className="w-full overflow-x-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900">
          <ScrollableLayout />
        </div>
      )}
    </div>
  );
};

export default Hero3DHacker;
