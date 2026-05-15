"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#timeline' },
  { label: 'Contact', href: '#contact' },
];

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setIsMobileOpen(false);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-noir ${
          isScrolled
            ? 'bg-noir-950/90 backdrop-blur-xl border-b border-white/[0.04]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <button
              onClick={() => scrollTo('#hero')}
              className="flex items-center gap-3 group"
              id="nav-logo"
            >
              <div className="relative w-9 h-9 rounded-lg border border-white/20 flex items-center justify-center group-hover:border-white/40 transition-colors duration-300">
                <span className="text-white font-bold text-sm tracking-tight">HP</span>
              </div>
              <div className="hidden sm:block">
                <span className="text-white font-semibold text-[15px] tracking-tight">Hezron</span>
                <span className="text-ash-500 font-light text-[15px] ml-1.5">Paipai</span>
              </div>
            </button>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="relative px-4 py-2 text-[13px] font-medium tracking-wide text-ash-600 hover:text-ash-100 transition-colors duration-300"
                  id={`nav-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* CTA + Mobile */}
            <div className="flex items-center gap-4">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-lg border border-white/20 text-white text-[13px] font-medium hover:bg-white hover:text-noir-950 transition-all duration-300"
                id="nav-resume"
              >
                Resume
              </a>

              <button
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className="md:hidden p-2 text-ash-500 hover:text-white transition-colors"
                id="nav-mobile-toggle"
              >
                {isMobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence mode="wait">
        {isMobileOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[60] bg-noir-950 flex flex-col"
          >
            {/* Architectural Lines */}
            <div className="absolute top-0 right-[25%] w-px h-full bg-white/[0.03]" />
            <div className="absolute bottom-[20%] left-0 w-full h-px bg-white/[0.03]" />

            {/* Header Area */}
            <div className="flex items-center justify-between px-8 h-24 border-b border-white/[0.05]">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg border border-white/20 flex items-center justify-center">
                  <span className="text-white font-bold text-xs">HP</span>
                </div>
                <span className="text-white font-medium text-sm tracking-tight">Menu</span>
              </div>
              <button 
                onClick={() => setIsMobileOpen(false)}
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-ash-400 hover:text-white hover:border-white/30 transition-all"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 flex flex-col justify-center px-12 relative overflow-hidden">
              {/* Background Branding (Subtle) */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] opacity-[0.02] pointer-events-none select-none -rotate-12">
                <img src="/favicon.png" alt="" className="w-full h-full object-contain grayscale invert" />
              </div>

              <div className="relative z-10 space-y-2">
                {navLinks.map((link, i) => (
                  <motion.button
                    key={link.href}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.07, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    onClick={() => scrollTo(link.href)}
                    className="group flex items-baseline gap-6 w-full text-left py-4"
                  >
                    <span className="text-ash-800 font-mono text-xs group-hover:text-white transition-colors duration-300">0{i + 1}</span>
                    <span className="text-4xl sm:text-5xl font-bold tracking-tighter text-ash-200 group-hover:text-white group-hover:translate-x-2 transition-all duration-500 italic uppercase">
                      {link.label}
                    </span>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Footer Area */}
            <div className="p-12 border-t border-white/[0.05] bg-noir-900/50">
              <div className="flex flex-col gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-white text-noir-950 font-bold text-sm hover:bg-ash-300 transition-all duration-300"
                  >
                    Download Resume
                  </a>
                </motion.div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                  <div className="flex items-center gap-8">
                    <a href="https://github.com/TechVenom" target="_blank" rel="noopener noreferrer" className="text-ash-600 hover:text-white transition-colors text-[10px] font-mono tracking-[0.2em] uppercase">GitHub</a>
                    <a href="https://linkedin.com/in/hezron-paipai" target="_blank" rel="noopener noreferrer" className="text-ash-600 hover:text-white transition-colors text-[10px] font-mono tracking-[0.2em] uppercase">LinkedIn</a>
                  </div>
                  <p className="text-[9px] text-ash-800 font-mono tracking-[0.3em] uppercase">VenomX © 2024</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
