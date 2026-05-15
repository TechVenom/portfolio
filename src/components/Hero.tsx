"use client";

import React, { useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

/* ── Minimal particle network — monochrome, low density ── */
const ParticleCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  const init = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);
    const count = Math.min(Math.floor((w * h) / 22000), 60);

    const pts = Array.from({ length: count }, () => ({
      x: Math.random() * w, y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.25, vy: (Math.random() - 0.5) * 0.25,
      r: Math.random() * 1.5 + 0.3,
      a: Math.random() * 0.25 + 0.05,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (let i = 0; i < pts.length; i++) {
        const p = pts[i];
        const dx = p.x - mouseRef.current.x;
        const dy = p.y - mouseRef.current.y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < 160) {
          const f = (160 - d) / 160;
          p.vx += (dx / d) * f * 0.15;
          p.vy += (dy / d) * f * 0.15;
        }
        p.vx *= 0.99; p.vy *= 0.99;
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = w; if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h; if (p.y > h) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${p.a})`;
        ctx.fill();

        for (let j = i + 1; j < pts.length; j++) {
          const q = pts[j];
          const ex = p.x - q.x, ey = p.y - q.y;
          const ed = Math.sqrt(ex * ex + ey * ey);
          if (ed < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = `rgba(255,255,255,${(1 - ed / 120) * 0.06})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      animRef.current = requestAnimationFrame(draw);
    };

    const onResize = () => { w = canvas.width = window.innerWidth; h = canvas.height = window.innerHeight; };
    const onMouse = (e: MouseEvent) => { mouseRef.current = { x: e.clientX, y: e.clientY }; };
    window.addEventListener('resize', onResize);
    window.addEventListener('mousemove', onMouse);
    draw();
    return () => {
      window.removeEventListener('resize', onResize);
      window.removeEventListener('mousemove', onMouse);
      cancelAnimationFrame(animRef.current);
    };
  }, []);

  useEffect(() => { const c = init(); return () => { if (c) c(); }; }, [init]);

  return <canvas ref={canvasRef} className="absolute inset-0 z-0" style={{ width: '100%', height: '100%' }} />;
};

const ease = [0.16, 1, 0.3, 1] as const;

const Hero: React.FC = () => {
  const scroll = (id: string) => { document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' }); };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleCanvas />

      {/* Subtle radial vignette */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-noir-950/30 via-transparent to-noir-950" />
      <div className="absolute inset-0 z-[1]" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-white/[0.015] rounded-full blur-[200px]" />
      </div>

      <div className="relative z-10 section-container text-center max-w-4xl mx-auto py-20 px-6">
        {/* Status badge */}
        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: ease as any, delay: 0.4 }} className="relative mb-10 inline-block">
          {/* Background Logo Backdrop */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 opacity-15 pointer-events-none select-none z-0">
            <img src="/favicon.png" alt="VenomX" className="w-full h-full object-contain grayscale invert" />
          </div>
          
          <span className="relative z-10 inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-white/10 text-ash-500 text-[11px] font-mono tracking-[0.2em] uppercase bg-noir-950/40 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-white/60 animate-pulse-subtle" />
            Available for work
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: ease as any, delay: 0.6 }}
          className="text-[clamp(2.5rem,6vw,5.5rem)] font-bold tracking-[-0.04em] leading-[1.05] mb-8">
          <span className="block text-white">Hezron Paipai</span>
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
            className="px-8 py-3.5 rounded-lg bg-white text-noir-950 font-semibold text-[14px] hover:bg-ash-300 transition-colors duration-300">
            View My Work
          </button>
          <button onClick={() => scroll('#contact')} id="hero-cta-contact"
            className="px-8 py-3.5 rounded-lg border border-white/15 text-ash-400 font-medium text-[14px] hover:text-white hover:border-white/30 transition-all duration-300">
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
