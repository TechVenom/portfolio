"use client";

import React, { useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

/* ── Clean Geometric Grid Animation ── */
const ease = [0.16, 1, 0.3, 1] as const;

const Hero: React.FC = () => {
  const scroll = (id: string) => { document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' }); };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="relative z-10 section-container text-center max-w-4xl mx-auto py-20 px-6">
        {/* Branding Logo */}
        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: ease as any, delay: 0.2 }} className="mb-6">
          <div className="w-32 h-32 mx-auto pointer-events-none select-none mix-blend-multiply opacity-80">
            <img src="/favicon.png" alt="VenomX Technologies" className="w-full h-full object-contain" />
          </div>
        </motion.div>

        {/* Status badge */}
        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: ease as any, delay: 0.4 }} className="mb-10">
          <span className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-black/10 text-ash-500 text-[11px] font-mono tracking-[0.2em] uppercase bg-noir-950/40 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-black/60 animate-pulse-subtle" />
            Available for work
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: ease as any, delay: 0.6 }}
          className="text-[clamp(2.5rem,6vw,5.5rem)] font-bold tracking-[-0.04em] leading-[1.05] mb-8">
          <span className="block text-black">Hezron Paipai</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: ease as any, delay: 0.8 }}
          className="text-lg sm:text-xl text-ash-500 font-light max-w-2xl mx-auto mb-6 leading-relaxed tracking-tight">
          Full-Stack Developer building scalable web solutions,<br className="hidden sm:block" />
          intelligent systems, and privacy-first security tools.
        </motion.p>

        {/* Role tags */}
        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: ease as any, delay: 1.0 }}
          className="flex items-center justify-center gap-3 text-ash-600 text-sm font-light mb-14">
          <span>Full-Stack Developer</span>
          <span className="w-1 h-1 rounded-full bg-ash-700" />
          <span>AI Engineer</span>
          <span className="w-1 h-1 rounded-full bg-ash-700" />
          <span>Security Researcher</span>
        </motion.div>

        {/* CTAs */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: ease as any, delay: 1.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button onClick={() => scroll('#projects')} id="hero-cta-work"
            className="px-8 py-3.5 rounded-lg bg-black text-noir-950 font-semibold text-[14px] hover:bg-ash-300 transition-colors duration-300">
            View My Work
          </button>
          <button onClick={() => scroll('#contact')} id="hero-cta-contact"
            className="px-8 py-3.5 rounded-lg border border-black/15 text-ash-400 font-medium text-[14px] hover:text-black hover:border-black/30 transition-all duration-300">
            Get in Touch
          </button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
          <ArrowDown size={16} className="text-ash-700 animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
