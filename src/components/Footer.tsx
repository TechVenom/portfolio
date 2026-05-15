"use client";

import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 border-t border-white/[0.04] bg-abyss-950/50 backdrop-blur-md">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand/Logo */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-3 group"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-venom-500 to-cyber-500 flex items-center justify-center overflow-hidden">
                <span className="text-abyss-950 font-display font-bold text-sm">H</span>
              </div>
              <span className="text-white font-display font-semibold text-lg tracking-tight">Hezron Paipai</span>
            </button>
            <p className="text-white/20 text-xs font-mono tracking-widest uppercase mt-2">
              Sovereign Intelligence Architect
            </p>
          </div>

          {/* Copyright & Info */}
          <div className="flex flex-col items-center md:items-end gap-2 text-center md:text-right">
            <p className="text-white/40 text-sm font-light">
              &copy; {currentYear} Hezron Paipai. Built with <span className="text-venom-500">React</span> & <span className="text-cyber-500">Next-gen AI</span>.
            </p>
            <div className="flex items-center gap-4 text-[10px] font-mono text-white/10 uppercase tracking-widest">
              <span>All rights reserved</span>
              <span className="w-1 h-1 rounded-full bg-white/10" />
              <span>v2.0.0 "Cyber-Sophisticated"</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar Decor */}
        <div className="mt-12 w-full h-[1px] bg-gradient-to-r from-transparent via-venom-500/20 to-transparent" />
      </div>
    </footer>
  );
};

export default Footer;
