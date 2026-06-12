"use client";

import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-14 border-t border-black/[0.04]">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left — Brand */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-3 group"
            >
              <div className="w-7 h-7 rounded-md border border-black/15 flex items-center justify-center group-hover:border-black/30 transition-colors">
                <span className="text-black font-bold text-[10px]">HP</span>
              </div>
              <span className="text-ash-300 font-medium text-sm tracking-tight">Hezron Paipai</span>
            </button>
            <p className="text-ash-700 text-xs mt-1">
              Full-Stack Developer & AI Engineer
            </p>
          </div>

          {/* Center — Social links */}
          <div className="flex items-center gap-4">
            <a href="https://github.com/TechVenom" target="_blank" rel="noopener noreferrer"
              className="p-2.5 rounded-lg border border-black/[0.04] text-ash-700 hover:text-black hover:border-black/10 transition-all duration-300" aria-label="GitHub">
              <Github size={16} />
            </a>
            <a href="https://ke.linkedin.com/in/hezron-paipai-92013a264" target="_blank" rel="noopener noreferrer"
              className="p-2.5 rounded-lg border border-black/[0.04] text-ash-700 hover:text-black hover:border-black/10 transition-all duration-300" aria-label="LinkedIn">
              <Linkedin size={16} />
            </a>
            <a href="mailto:phezron65@gmail.com"
              className="p-2.5 rounded-lg border border-black/[0.04] text-ash-700 hover:text-black hover:border-black/10 transition-all duration-300" aria-label="Email">
              <Mail size={16} />
            </a>
          </div>

          {/* Right — Copyright */}
          <div className="flex flex-col items-center md:items-end gap-1 text-center md:text-right">
            <p className="text-ash-700 text-xs">
              &copy; {currentYear} Hezron Paipai
            </p>
            <p className="text-ash-800 text-[10px] font-mono tracking-wider">
              Built with Next.js & TypeScript
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
