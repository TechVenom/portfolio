"use client";

import React, { useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';

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
    const count = Math.min(Math.floor((w * h) / 14000), 100);
    const colors = ['rgba(34,197,94,', 'rgba(6,182,212,', 'rgba(124,58,237,'];

    const pts = Array.from({ length: count }, () => ({
      x: Math.random() * w, y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.4, vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 2 + 0.5,
      c: colors[Math.floor(Math.random() * 3)],
      a: Math.random() * 0.5 + 0.2,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (let i = 0; i < pts.length; i++) {
        const p = pts[i];
        const dx = p.x - mouseRef.current.x;
        const dy = p.y - mouseRef.current.y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < 180) {
          const f = (180 - d) / 180;
          p.vx += (dx / d) * f * 0.25;
          p.vy += (dy / d) * f * 0.25;
        }
        p.vx *= 0.99; p.vy *= 0.99;
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = w; if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h; if (p.y > h) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.c + p.a + ')';
        ctx.fill();

        for (let j = i + 1; j < pts.length; j++) {
          const q = pts[j];
          const ex = p.x - q.x, ey = p.y - q.y;
          const ed = Math.sqrt(ex * ex + ey * ey);
          if (ed < 140) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = p.c + ((1 - ed / 140) * 0.12) + ')';
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

const Hero: React.FC = () => {
  const ease = [0.22, 1, 0.36, 1] as const;
  const scroll = (id: string) => { document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' }); };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleCanvas />
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-abyss-950/50 via-transparent to-abyss-950" />
      <div className="absolute inset-0 z-[1]" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-venom-500/[0.06] rounded-full blur-[150px]" />
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-cyber-500/[0.04] rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 section-container text-center max-w-5xl mx-auto py-20 px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: ease as any, delay: 0.3 }} className="mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-venom-500/20 text-venom-400 font-mono text-xs tracking-[0.25em] uppercase">
            <span className="w-2 h-2 rounded-full bg-venom-500 animate-pulse" />
            System Online
          </span>
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: ease as any, delay: 0.5 }}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[0.95]">
          <span className="block text-white/90">Architecting</span>
          <span className="block text-glow-sovereign mt-2">Sovereign Intelligence.</span>
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: ease as any, delay: 0.7 }}
          className="text-lg sm:text-xl text-white/40 font-light max-w-2xl mx-auto mb-12 leading-relaxed">
          <span className="text-venom-400/80">Full-Stack Developer</span>
          <span className="mx-3 text-white/20">·</span>
          <span className="text-cyber-400/80">AI Architect</span>
          <span className="mx-3 text-white/20">·</span>
          <span className="text-amethyst-400/80">Cybersecurity Researcher</span>
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: ease as any, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button onClick={() => scroll('#skills')} id="hero-cta-enter"
            className="group relative px-8 py-4 rounded-2xl bg-gradient-to-r from-venom-600 to-venom-500 text-abyss-950 font-display font-semibold text-base hover:shadow-glow-venom-lg transition-all duration-500 hover:scale-105 apple-ease overflow-hidden">
            <span className="relative z-10">Enter the System ↓</span>
            <div className="absolute inset-0 bg-gradient-to-r from-venom-400 to-cyber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </button>
          <a href="https://github.com/TechVenom" target="_blank" rel="noopener noreferrer" id="hero-cta-dossier"
            className="px-8 py-4 rounded-2xl glass border border-white/10 text-white/70 font-display font-medium text-base hover:text-venom-400 hover:border-venom-500/30 transition-all duration-500 apple-ease">
            Explore GitHub
          </a>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-white/20 font-mono text-[10px] tracking-[0.3em] uppercase">Scroll</span>
          <div className="w-[1px] h-10 bg-gradient-to-b from-venom-500/50 to-transparent animate-pulse" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
