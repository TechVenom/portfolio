import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Download, ExternalLink, Terminal } from 'lucide-react';
import InteractiveTerminal from './InteractiveTerminal';

const Hero3DHacker: React.FC = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [showTerminal, setShowTerminal] = useState(true);
  
  const roles = [
    'Ethical Hacker',
    'AI Developer & Researcher', 
    'Cybersecurity Expert',
    'Full Stack Developer',
    'AI Agents Specialist'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [roles.length]);



  return (
    <section id="home" className="h-screen relative overflow-hidden">
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

      <div className="relative z-10 h-screen flex items-center">
        {/* Terminal Toggle Button */}
        <motion.button
          onClick={() => setShowTerminal(!showTerminal)}
          className="fixed top-6 right-6 z-50 bg-black/80 border border-green-400 text-green-400 px-4 py-3 rounded-lg font-mono hover:bg-green-500/20 transition-all duration-300 flex items-center space-x-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          title={showTerminal ? 'Hide Terminal' : 'Show Terminal'}
        >
          <Terminal size={18} />
          <span className="hidden sm:inline">{showTerminal ? 'Hide' : 'Show'}</span>
        </motion.button>

        <div className="container mx-auto px-8 lg:px-16 h-full">
          <div className="flex flex-col lg:flex-row gap-16 items-center justify-center h-full max-w-7xl mx-auto">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className={`space-y-10 z-20 ${showTerminal ? 'lg:w-1/2' : 'w-full max-w-4xl mx-auto text-center lg:text-left'}`}
            >
              {/* Greeting */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="space-y-4"
              >
                <p className="text-green-400 text-xl font-medium font-mono">
                  <span className="text-cyan-400">$</span> whoami
                </p>
                <h1 className="text-6xl lg:text-8xl font-bold font-mono leading-tight">
                  <span className="text-green-400 glow-text">Hezron</span>
                  <br />
                  <span className="text-white">Paipai</span>
                </h1>
              </motion.div>

              {/* Animated Role */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="h-20 flex items-center justify-center lg:justify-start"
              >
                <span className="text-2xl lg:text-3xl text-gray-300 mr-3 font-mono">{'>'}</span>
                <motion.span
                  key={currentRole}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-2xl lg:text-3xl font-semibold bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent font-mono"
                >
                  {roles[currentRole]}
                </motion.span>
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="text-green-400 ml-1 font-mono text-2xl lg:text-3xl"
                >
                  _
                </motion.span>
              </motion.div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-xl text-gray-400 leading-relaxed max-w-3xl font-mono text-center lg:text-left"
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
              className="bg-black/50 border border-green-400/30 rounded-lg p-4 font-mono text-sm backdrop-blur-sm"
            >
              <div className="text-green-400 mb-2">$ cat /proc/hezron/stats</div>
              <div className="space-y-1 text-gray-300">
                <div><span className="text-cyan-400">projects:</span> 3+</div>
                <div><span className="text-cyan-400">technologies:</span> 5+</div>
                <div><span className="text-cyan-400">security_level:</span> <span className="text-green-400">MAXIMUM</span></div>
                <div><span className="text-cyan-400">status:</span> <span className="text-green-400 animate-pulse">ONLINE</span></div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="bg-green-500/20 border border-green-400 text-green-400 px-6 py-3 rounded-lg font-mono hover:bg-green-500/30 transition-all duration-300 group">
                <span className="flex items-center space-x-2">
                  <span>./download_cv.sh</span>
                  <Download size={18} className="group-hover:animate-bounce" />
                </span>
              </button>
              <button
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
            {showTerminal && (
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative lg:w-1/2 w-full flex items-center"
              >
                <div className="bg-black/40 backdrop-blur-sm rounded-lg p-8 border border-green-400/50 shadow-2xl w-full max-w-2xl">
                  <div className="flex items-center justify-between mb-8">
                    <h3 className="text-green-400 font-mono text-2xl flex items-center space-x-3">
                      <Terminal size={28} />
                      <span>Interactive Portfolio Terminal</span>
                    </h3>
                    <div className="text-base text-gray-400 font-mono">
                      Navigate using commands
                    </div>
                  </div>
                  <InteractiveTerminal />
                  <div className="mt-6 text-base text-gray-500 font-mono bg-black/30 p-4 rounded border border-green-400/20">
                    <div className="text-green-400 mb-3 text-lg">🚀 Quick Start Guide:</div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div>• Type <span className="text-cyan-400">"help"</span> for all commands</div>
                      <div>• Try <span className="text-cyan-400">"about"</span> or <span className="text-cyan-400">"projects"</span></div>
                      <div>• Use <span className="text-cyan-400">"hack"</span> for hacking simulation</div>
                      <div>• Try <span className="text-cyan-400">"matrix"</span> for matrix effect</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>

        {/* Footer - stays in background */}
        <footer className="absolute bottom-0 left-0 right-0 z-10 bg-black/30 backdrop-blur-sm border-t border-green-400/20 py-4">
          <div className="container mx-auto px-8 lg:px-16">
            <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left">
              <div className="flex items-center space-x-3 mb-2 md:mb-0">
                <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-cyan-400 rounded-lg flex items-center justify-center">
                  <span className="text-black font-bold font-mono">H</span>
                </div>
                <span className="text-lg font-bold text-green-400 font-mono">Hezron Paipai</span>
              </div>

              <div className="text-sm text-gray-400 font-mono">
                <span>© 2025 Hezron Paipai</span>
                <span className="mx-2 text-green-400">•</span>
                <span>Ethical Hacker & AI Developer</span>
                <span className="mx-2 text-green-400">•</span>
                <span>Built with React & TypeScript</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Hero3DHacker;
