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
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-noir-950/98 backdrop-blur-3xl pt-24 overflow-hidden"
          >
            {/* Grain Overlay */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none grain-overlay" />
            
            {/* Decorative Background Element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-auto opacity-[0.03] pointer-events-none select-none z-0">
              <img src="/favicon.png" alt="" className="w-full h-full object-contain grayscale invert" />
            </div>

            <div className="relative z-10 flex flex-col items-center justify-between h-[80vh] px-8 py-10 text-center">
              <div className="flex flex-col items-center gap-1">
                {navLinks.map((link, i) => (
                  <motion.button
                    key={link.href}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ 
                      delay: i * 0.08, 
                      duration: 0.7, 
                      ease: [0.16, 1, 0.3, 1] 
                    }}
                    onClick={() => scrollTo(link.href)}
                    className="group relative py-4"
                  >
                    <span className="text-3xl font-bold tracking-tighter text-ash-300 group-hover:text-white transition-colors duration-300">
                      {link.label}
                    </span>
                    <motion.div 
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      className="absolute bottom-3 left-0 right-0 h-px bg-white origin-left transition-transform duration-500"
                    />
                  </motion.button>
                ))}
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: 0.45, duration: 0.5 }}
                  className="mt-8"
                >
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-10 py-4 rounded-xl border border-white/20 bg-white/5 text-white font-bold text-lg hover:bg-white hover:text-noir-950 transition-all duration-500"
                  >
                    Download Resume
                  </a>
                </motion.div>
              </div>

              {/* Bottom Mobile Footer */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="flex flex-col items-center gap-6"
              >
                <div className="w-12 h-px bg-white/10" />
                <div className="flex items-center gap-8">
                  <a href="https://github.com/TechVenom" target="_blank" rel="noopener noreferrer" className="text-ash-600 hover:text-white transition-colors text-sm font-mono tracking-widest uppercase">GitHub</a>
                  <a href="https://linkedin.com/in/hezron-paipai" target="_blank" rel="noopener noreferrer" className="text-ash-600 hover:text-white transition-colors text-sm font-mono tracking-widest uppercase">LinkedIn</a>
                </div>
                <p className="text-[10px] text-ash-800 font-mono tracking-widest uppercase">© 2024 VenomX Technologies</p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
