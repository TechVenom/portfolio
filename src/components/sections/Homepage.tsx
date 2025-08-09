import React, { useState } from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';
import { ReactTyped } from 'react-typed';
import { motion } from 'framer-motion';

const Homepage: React.FC = () => {
  // Profile data as specified
  const profileData = {
    name: "TechVenom",
    title: "Full-Stack Developer & AI Engineer",
    skills: ["React", "Node.js", "Python", "TensorFlow", "Cybersecurity"],
    experience: "5+ years",
    location: "Remote"
  };
// Colors for the typing effect
  const colors = [
    "#ffffff", // White
    "#a855f7", // Purple
    "#3b82f6", // Blue
    "#10b981", // Green
    "#f59e0b", // Yellow
    "#ef4444"  // Red
  ];

  // State for tracking current cursor color
  const [cursorColor, setCursorColor] = useState(colors[0]);

  // Format the profile code as a string with proper syntax highlighting classes
  const profileCode = `const profile = {
  name: "${profileData.name}",
  title: "${profileData.title}",
  skills: [${profileData.skills.map(skill => `"${skill}"`).join(', ')}],
  experience: "${profileData.experience}",
  location: "${profileData.location}"
};`;

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f1a] to-[#0d1220]" />
      
      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Two-column layout for desktop, stacked on mobile */}
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-between gap-12">
          
          {/* Left Column - Profile Section */}
          <motion.div 
            className="flex flex-col items-center text-center lg:text-left lg:items-start lg:w-1/2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Profile Image with border glow */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="relative mb-8"
            >
              <div className="w-48 h-48 rounded-full border-4 border-purple-500 shadow-lg shadow-purple-500/30 overflow-hidden relative">
                <img 
                  src="/images/placeholder.jpg" 
                  alt="TechVenom Profile" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 rounded-full shadow-[0_0_20px_rgba(168,85,247,0.5)]"></div>
              </div>
            </motion.div>

            {/* Auto-typing Name */}
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <ReactTyped
                strings={[
                  `<span style="color: #ffffff;">Hi, I'm ${profileData.name}</span>`,
                  `<span style="color: #a855f7;">Hi, I'm ${profileData.name}</span>`,
                  `<span style="color: #3b82f6;">Hi, I'm ${profileData.name}</span>`,
                  `<span style="color: #10b981;">Hi, I'm ${profileData.name}</span>`,
                  `<span style="color: #f59e0b;">Hi, I'm ${profileData.name}</span>`,
                  `<span style="color: #ef4444;">Hi, I'm ${profileData.name}</span>`
                ]}
                typeSpeed={120}
                backSpeed={120}
                loop={true}
                showCursor={false}
                cursorChar={"|"}
                backDelay={2000}
onStringTyped={(arrayPos) => {
                  // Update cursor color based on the current string position
                  setCursorColor(colors[arrayPos % colors.length]);
                }}
                contentType={'html'}
              />
{/* Custom blinking cursor that matches text color */}
              <span 
                className="ml-1 animate-blink"
                style={{ 
                  color: cursorColor,
                  animation: 'blink 1s infinite'
                }}
              >
                |
              </span>
            </h1>

            {/* Static Tagline */}
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-8 leading-relaxed">
              Crafting <span className="text-purple-400">innovative</span> digital solutions at the intersection of <span className="text-cyan-400">AI</span>, <span className="text-green-400">cybersecurity</span>, and <span className="text-yellow-400">modern web technologies</span>.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-6 mb-10">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-500 transition-colors duration-300"
              >
                <Github size={28} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 transition-colors duration-300"
              >
                <Linkedin size={28} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
              >
                <Twitter size={28} />
              </a>
            </div>

            {/* CTA Button */}
            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg shadow-purple-500/30 transition-all duration-300"
            >
              GET RESUME
            </motion.a>
          </motion.div>

          {/* Right Column - Terminal/Code Editor Panel */}
          <motion.div 
            className="lg:w-1/2 w-full"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          >
            {/* Code Editor Panel with glassmorphism effect */}
            <div className="bg-gray-800/30 backdrop-blur-md border border-gray-700/50 rounded-xl overflow-hidden shadow-2xl">
              {/* macOS-style header bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-gray-900/80 border-b border-gray-700/50">
                {/* Window buttons */}
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                
                {/* File name */}
                <div className="text-gray-400 text-sm font-mono">profile.js</div>
                
                {/* Spacer for alignment */}
                <div className="w-12"></div>
              </div>
              
              {/* Code content area */}
              <div className="p-6 overflow-x-auto">
                <pre className="text-gray-300 font-mono text-sm">
                  <code>
                    <span className="text-purple-400">const</span> <span className="text-blue-400">profile</span> <span className="text-gray-400">=</span> <span className="text-gray-400">{`{`}</span>
                    <br />
                    <span className="ml-4"> </span><span className="text-blue-400">name</span><span className="text-gray-400">:</span> <span className="text-green-400">"{profileData.name}"</span><span className="text-gray-400">,</span>
                    <br />
                    <span className="ml-4"> </span><span className="text-blue-400">title</span><span className="text-gray-400">:</span> <span className="text-green-400">"{profileData.title}"</span><span className="text-gray-400">,</span>
                    <br />
                    <span className="ml-4"> </span><span className="text-blue-400">skills</span><span className="text-gray-400">:</span> <span className="text-gray-400">[</span>
                    <br />
                    <span className="ml-8"> </span>
                    {profileData.skills.map((skill, index) => (
                      <span key={index}>
                        <span className="text-green-400">"{skill}"</span>
                        {index < profileData.skills.length - 1 && <span className="text-gray-400">,</span>}
                        <br />
                        <span className="ml-8"> </span>
                      </span>
                    ))}
                    <span className="text-gray-400">]</span><span className="text-gray-400">,</span>
                    <br />
                    <span className="ml-4"> </span><span className="text-blue-400">experience</span><span className="text-gray-400">:</span> <span className="text-green-400">"{profileData.experience}"</span><span className="text-gray-400">,</span>
                    <br />
                    <span className="ml-4"> </span><span className="text-blue-400">location</span><span className="text-gray-400">:</span> <span className="text-green-400">"{profileData.location}"</span>
                    <br />
                    <span className="text-gray-400">{`};`}</span>
                  </code>
                </pre>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Homepage;
