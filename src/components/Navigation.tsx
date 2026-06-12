"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

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
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
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
            ? 'bg-noir-950/90 backdrop-blur-xl border-b border-black/[0.04]'
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
              <div className="relative w-9 h-9 rounded-lg border border-black/20 flex items-center justify-center group-hover:border-black/40 transition-colors duration-300">
                <span className="text-black font-bold text-sm tracking-tight">HP</span>
              </div>
              <div className="hidden sm:block text-left">
                <span className="text-black font-semibold text-[15px] tracking-tight block leading-none">Hezron</span>
                <span className="text-ash-500 font-light text-[15px] block leading-none mt-1">Paipai</span>
              </div>
            </button>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="relative px-4 py-2 text-[13px] font-medium tracking-wide text-ash-600 hover:text-black transition-colors duration-300"
                  id={`nav-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* CTA + Mobile */}
            <div className="flex items-center gap-4">
              {mounted && (
                <button
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center text-ash-500 hover:text-black hover:border-black/30 hover:bg-black/[0.03] transition-all"
                  aria-label="Toggle Dark Mode"
                >
                  {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                </button>
              )}

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-lg border border-black/20 text-black text-[13px] font-medium hover:bg-black hover:text-noir-950 transition-all duration-300"
                id="nav-resume"
              >
                Resume
              </a>

              <button
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className="md:hidden p-2 text-ash-500 hover:text-black transition-colors"
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
            <div className="absolute top-0 right-[25%] w-px h-full bg-black/[0.03]" />
            <div className="absolute bottom-[20%] left-0 w-full h-px bg-black/[0.03]" />

            {/* Header Area */}
            <div className="flex items-center justify-between px-8 h-24 border-b border-black/[0.05]">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg border border-black/20 flex items-center justify-center">
                  <span className="text-black font-bold text-xs">HP</span>
                </div>
                <span className="text-black font-medium text-sm tracking-tight">Menu</span>
              </div>
              <button 
                onClick={() => setIsMobileOpen(false)}
                className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center text-ash-400 hover:text-black hover:border-black/30 transition-all"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 flex flex-col justify-start pt-12 px-8 relative overflow-hidden">
              {/* Background Branding (Ultra Subtle) */}
              <div className="absolute bottom-10 right-0 w-[80%] opacity-[0.02] pointer-events-none select-none">
                <img src="/favicon.png" alt="" className="w-full h-full object-contain grayscale" />
              </div>

              <div className="relative z-10 space-y-1">
                {navLinks.map((link, i) => (
                  <motion.button
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05, duration: 0.5 }}
                    onClick={() => scrollTo(link.href)}
                    className="group flex items-center justify-between w-full px-6 py-4 rounded-xl border border-transparent hover:border-black/10 hover:bg-black/[0.03] transition-all duration-300"
                  >
                    <div className="flex items-center gap-5">
                      <span className="text-ash-800 font-mono text-[10px] tracking-widest uppercase">0{i + 1}</span>
                      <span className="text-lg font-semibold tracking-tight text-ash-300 group-hover:text-black transition-colors duration-300 uppercase">
                        {link.label}
                      </span>
                    </div>
                    <div className="w-6 h-px bg-black/0 group-hover:bg-black/20 transition-all duration-500" />
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Footer Area */}
            <div className="p-8 border-t border-black/[0.05]">
              <div className="flex flex-col gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 w-full py-4 rounded-xl border border-black/20 text-black font-bold text-sm hover:bg-black hover:text-noir-950 transition-all duration-500"
                  >
                    Resume
                  </a>
                </motion.div>

                <div className="flex items-center justify-between px-2">
                  <div className="flex items-center gap-6">
                    <a href="https://github.com/TechVenom" target="_blank" rel="noopener noreferrer" className="text-ash-700 hover:text-black transition-colors text-[10px] font-mono tracking-[0.2em] uppercase">GH</a>
                    <a href="https://linkedin.com/in/hezron-paipai" target="_blank" rel="noopener noreferrer" className="text-ash-700 hover:text-black transition-colors text-[10px] font-mono tracking-[0.2em] uppercase">LI</a>
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
