"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Genesis', href: '#hero' },
  { label: 'Loadout', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'History', href: '#timeline' },
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
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 apple-ease ${
          isScrolled
            ? 'bg-abyss-950/80 backdrop-blur-xl border-b border-white/[0.06]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <button
              onClick={() => scrollTo('#hero')}
              className="flex items-center gap-3 group"
              id="nav-logo"
            >
              <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-venom-500 to-cyber-500 flex items-center justify-center overflow-hidden group-hover:shadow-glow-venom transition-shadow duration-500">
                <span className="text-abyss-950 font-display font-bold text-lg">H</span>
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="hidden sm:block">
                <span className="text-white font-display font-semibold text-lg tracking-tight">Hezron</span>
                <span className="text-venom-500 font-display font-light text-lg ml-1">Paipai</span>
              </div>
            </button>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link, i) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="relative px-5 py-2 text-sm font-mono tracking-wider text-white/50 hover:text-venom-400 transition-colors duration-300 group"
                  id={`nav-${link.label.toLowerCase()}`}
                >
                  <span className="relative z-10">{link.label}</span>
                  <div className="absolute inset-0 rounded-lg bg-venom-500/0 group-hover:bg-venom-500/[0.06] transition-colors duration-300" />
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-venom-500 to-cyber-500 group-hover:w-3/4 transition-all duration-500 apple-ease" />
                </button>
              ))}
            </div>

            {/* CTA + Mobile */}
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/TechVenom"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-venom-600 to-venom-500 text-abyss-950 font-semibold text-sm hover:shadow-glow-venom transition-all duration-500 hover:scale-105 apple-ease"
                id="nav-download-dossier"
              >
                Explore GitHub
              </a>

              <button
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className="md:hidden p-2 text-white/60 hover:text-venom-400 transition-colors"
                id="nav-mobile-toggle"
              >
                {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-abyss-950/95 backdrop-blur-2xl pt-24"
          >
            <div className="flex flex-col items-center gap-6 p-8">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  onClick={() => scrollTo(link.href)}
                  className="text-2xl font-display font-semibold text-white/70 hover:text-venom-400 transition-colors duration-300"
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                href="https://github.com/TechVenom"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 px-8 py-3 rounded-xl bg-gradient-to-r from-venom-600 to-venom-500 text-abyss-950 font-semibold text-lg"
              >
                Explore GitHub
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
