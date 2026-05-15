"use client";

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Brain, Camera, Shield, ExternalLink, Github, X, Server, Code, Terminal, ArrowUpRight } from 'lucide-react';

interface Project {
  id: string;
  num: string;
  title: string;
  subtitle: string;
  description: string;
  impact: string;
  icon: React.ElementType;
  tech: string[];
  github: string;
  live?: string;
  isPrivate?: boolean;
  features: string[];
}

const projects: Project[] = [
  {
    id: 'venomx', num: '01',
    title: 'VENOMX',
    subtitle: 'Autonomous Intelligence Engine',
    description: 'A production-grade autonomous AI system with a self-healing engine, multi-agent swarm orchestration, and a 9-tier unified memory architecture. Not a chatbot wrapper — a genuine self-improving system.',
    impact: '9-Tier Memory Architecture',
    icon: Brain,
    tech: ['Python', 'FastAPI', 'LangChain', 'ChromaDB', 'Ollama', 'Tauri'],
    github: '#',
    live: 'https://venomx-hq.vercel.app/',
    isPrivate: true,
    features: [
      'Self-healing engine with automated error diagnosis & patching',
      'Multi-agent swarm orchestration with shared context pool',
      '9-tier unified memory (vector, graph, episodic, semantic)',
      '49+ production-grade autonomous skills',
      'Multi-provider LLM routing with automatic fallback',
    ],
  },
  {
    id: 'paps', num: '02',
    title: 'VenomX PAPS',
    subtitle: 'Android Virtual Camera System',
    description: 'System-level virtual camera injector for rooted Android devices. Intercepts Camera2 API surfaces to inject custom video feeds from OBS, local files, or streaming sources.',
    impact: 'System-Level Camera Hooks',
    icon: Camera,
    tech: ['Kotlin', 'Jetpack Compose', 'LSPosed', 'Media3', 'Koin'],
    github: 'https://github.com/TechVenom/venomxapk',
    features: [
      'Xposed/LSPosed Camera2 API interception',
      'Dual-player engine (ExoPlayer + IJKPlayer)',
      'Cross-process ContentProvider secure feeds',
      'Advanced rotation, scaling, and source controls',
    ],
  },
  {
    id: 'shadowcloak', num: '03',
    title: 'ShadowCloak',
    subtitle: 'Privacy & Anonymity Toolkit',
    description: 'Comprehensive privacy toolkit for security professionals. Features real-time identity obfuscation, Tor integration, DNS protection, and automated anti-forensics.',
    impact: 'Zero Forensic Footprint',
    icon: Shield,
    tech: ['Bash', 'Tor', 'Macchanger', 'Systemd', 'Linux'],
    github: 'https://github.com/TechVenom/ShadowCloak',
    features: [
      'Tor integration without connection disruption',
      'Identity obfuscation (MAC, Hostname, Timezone)',
      'Automated log wiping & RAM sanitization',
      'Interactive and silent operation modes',
    ],
  },
  {
    id: 'pro-server', num: '04',
    title: 'Streaming Server',
    subtitle: 'Low-Latency Media Hub',
    description: 'Sub-second latency streaming hub built on MediaMTX. Supports RTMP, SRT, HLS, and WebRTC with zero-config Docker deployment.',
    impact: '~500ms End-to-End Latency',
    icon: Server,
    tech: ['Docker', 'Nginx', 'MediaMTX', 'Shell'],
    github: 'https://github.com/TechVenom/venomx-pro-server',
    features: [
      'Ultra-low latency WebRTC and SRT support',
      'Universal HLS compatibility for all devices',
      'Real-time monitoring dashboard',
      'Zero-config deployment with IP detection',
    ],
  },
  {
    id: 'skills-library', num: '05',
    title: 'Agent Skills Library',
    subtitle: '49+ Autonomous Agent Skills',
    description: 'A production-grade library of modular skills for autonomous agents — including crypto intelligence, red teaming, web scraping, and OS management.',
    impact: 'Modular Agent Intelligence',
    icon: Code,
    tech: ['Python', 'LangChain', 'Playwright', 'API'],
    github: 'https://github.com/TechVenom/VenomX-Master-Skills-Library',
    features: [
      'Crypto intelligence & market analysis',
      'World intelligence & web scraping',
      'Red teaming & security assessment',
      'System & OS level management tools',
    ],
  },
  {
    id: 'claws', num: '06',
    title: 'VENOMX-CLAWS',
    subtitle: 'Security Testing Framework',
    description: 'Automated vulnerability assessment and penetration testing tool integrated into the VenomX ecosystem for continuous security operations.',
    impact: 'Automated SecOps Pipeline',
    icon: Terminal,
    tech: ['Python', 'Security', 'Automation'],
    github: 'https://github.com/TechVenom/VENOMX-CLAWS',
    features: [
      'Automated vulnerability scanning',
      'Security posture assessment',
      'Integrated reporting & alerting',
      'Scalable testing architecture',
    ],
  },
];

const additionalProjects = [
  { name: 'AUTOINTEL', desc: 'Automated intelligence gathering', link: 'https://github.com/TechVenom/AUTOINTEL' },
  { name: 'LiveCam', desc: 'Live camera streaming solution', link: 'https://github.com/TechVenom/livecam' },
  { name: 'IP Changer', desc: 'Tor-based IP rotation tool', link: 'https://github.com/TechVenom/IP_Changer' },
  { name: 'ShadowVeil', desc: 'Additional privacy toolkit', link: 'https://github.com/TechVenom/ShadowVeil' },
];

const ease = [0.16, 1, 0.3, 1];

/* ── 3D Tilt Card ── */
function ProjectCard({ project, index, inView, onSelect }: { project: Project; index: number; inView: boolean; onSelect: () => void }) {
  const Icon = project.icon;
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-0.5, 0.5], [4, -4]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-4, 4]);

  const handleMouse = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.7, ease: ease as any }}
      onMouseMove={handleMouse}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      onClick={onSelect}
      className="group relative cursor-pointer"
      id={`project-card-${project.id}`}
    >
      {/* Animated border glow on hover */}
      <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-white/0 via-white/0 to-white/0 group-hover:from-white/[0.08] group-hover:via-white/[0.03] group-hover:to-white/[0.08] transition-all duration-700 pointer-events-none" />

      <div className="relative rounded-2xl p-7 bg-white/[0.015] border border-white/[0.06] group-hover:border-white/[0.12] group-hover:bg-white/[0.03] transition-all duration-500 overflow-hidden h-full">
        {/* Spotlight gradient on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-white/[0.04] rounded-full blur-[80px]" />
        </div>

        <div className="relative z-10 flex flex-col h-full">
          {/* Top row: number + icon */}
          <div className="flex items-start justify-between mb-6">
            <span className="text-ash-800 font-mono text-[11px] tracking-wider">{project.num}</span>
            <div className="w-10 h-10 rounded-xl border border-white/[0.08] flex items-center justify-center group-hover:border-white/20 group-hover:bg-white/[0.04] transition-all duration-500">
              <Icon size={17} className="text-ash-500 group-hover:text-ash-300 transition-colors duration-500" />
            </div>
          </div>

          {/* Title */}
          <h3 className="font-bold text-xl text-ash-200 mb-1.5 group-hover:text-white transition-colors duration-300">{project.title}</h3>
          <p className="text-[10px] text-ash-700 mb-4 tracking-[0.15em] uppercase font-mono">{project.subtitle}</p>

          {/* Description */}
          <p className="text-ash-600 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">{project.description}</p>

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.tech.slice(0, 4).map((t, j) => (
              <motion.span
                key={t}
                initial={{ opacity: 0, y: 8 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.1 + j * 0.05, duration: 0.4 }}
                className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.06] text-ash-600 font-mono text-[10px] group-hover:border-white/[0.1] group-hover:text-ash-500 transition-all duration-300"
              >
                {t}
              </motion.span>
            ))}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between pt-5 border-t border-white/[0.04] group-hover:border-white/[0.08] transition-colors duration-300">
            <span className="text-ash-800 font-mono text-[9px] uppercase tracking-widest group-hover:text-ash-600 transition-colors">{project.impact}</span>
            <motion.div
              initial={{ x: 0, y: 0 }}
              whileHover={{ x: 2, y: -2 }}
              className="w-7 h-7 rounded-lg border border-white/[0.06] flex items-center justify-center group-hover:border-white/[0.15] group-hover:bg-white/[0.04] transition-all duration-300"
            >
              <ArrowUpRight size={12} className="text-ash-700 group-hover:text-ash-400 transition-colors" />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

const FeaturedProjects: React.FC = () => {
  const [selected, setSelected] = useState<Project | null>(null);
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true });

  return (
    <section id="projects" className="relative py-28 overflow-hidden" ref={ref}>
      {/* Background accents */}
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-white/[0.006] rounded-full blur-[180px] pointer-events-none" />

      <div className="section-container">
        {/* Header with project count */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: ease as any }}
          >
            <p className="section-label mb-4">Selected Work</p>
            <h2 className="section-heading mb-4">Featured Projects</h2>
            <p className="text-ash-600 max-w-lg text-base leading-relaxed">
              Systems engineered at the intersection of AI, media streaming, and cybersecurity.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: ease as any }}
            className="flex items-center gap-6"
          >
            <div className="text-right">
              <div className="text-3xl font-bold text-white tracking-tight">{projects.length + additionalProjects.length}</div>
              <p className="text-ash-700 text-[11px] font-mono uppercase tracking-wider">Total Projects</p>
            </div>
            <div className="w-px h-10 bg-white/[0.08]" />
            <div className="text-right">
              <div className="text-3xl font-bold text-white tracking-tight">6</div>
              <p className="text-ash-700 text-[11px] font-mono uppercase tracking-wider">Featured</p>
            </div>
          </motion.div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16" style={{ perspective: '1200px' }}>
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              inView={inView}
              onSelect={() => setSelected(project)}
            />
          ))}
        </div>

        {/* Additional Projects — animated list */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: ease as any, delay: 0.5 }}
          className="max-w-4xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <h4 className="text-ash-500 text-sm font-medium">More Projects</h4>
            <div className="flex-1 h-px bg-white/[0.04]" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {additionalProjects.map((p, i) => (
              <motion.a
                key={p.name}
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -15 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.6 + i * 0.08, duration: 0.5, ease: ease as any }}
                className="flex items-center justify-between p-4 rounded-xl border border-white/[0.04] bg-white/[0.01] hover:border-white/[0.1] hover:bg-white/[0.03] transition-all duration-300 group"
              >
                <div>
                  <p className="text-ash-300 text-sm font-medium group-hover:text-white transition-colors">{p.name}</p>
                  <p className="text-ash-700 text-xs mt-0.5">{p.desc}</p>
                </div>
                <ExternalLink size={14} className="text-ash-800 group-hover:text-ash-400 transition-colors flex-shrink-0" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-noir-950/90 backdrop-blur-2xl"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.4, ease: ease as any }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl rounded-2xl p-8 sm:p-10 border border-white/[0.08] bg-noir-900/95 backdrop-blur-xl max-h-[90vh] overflow-y-auto scrollbar-hide"
            >
              {/* Close button */}
              <button onClick={() => setSelected(null)} className="absolute top-5 right-5 w-8 h-8 rounded-lg border border-white/[0.06] flex items-center justify-center text-ash-700 hover:text-white hover:border-white/20 transition-all" id="modal-close">
                <X size={16} />
              </button>

              {/* Modal header */}
              <div className="flex items-start gap-5 mb-8">
                <div className="w-14 h-14 rounded-2xl border border-white/[0.08] bg-white/[0.03] flex items-center justify-center flex-shrink-0">
                  <selected.icon size={24} className="text-ash-400" />
                </div>
                <div>
                  <span className="text-ash-700 font-mono text-[11px] tracking-wider">{selected.num}</span>
                  <h3 className="font-bold text-2xl text-white mt-0.5">{selected.title}</h3>
                  <p className="font-mono text-[11px] text-ash-600 mt-1 uppercase tracking-widest">{selected.subtitle}</p>
                </div>
              </div>

              <p className="text-ash-500 leading-relaxed mb-8 text-[15px]">{selected.description}</p>

              <div className="space-y-8">
                {/* Capabilities */}
                <div>
                  <h4 className="font-semibold text-sm text-ash-400 mb-5 uppercase tracking-wider flex items-center gap-2">
                    <div className="w-5 h-px bg-white/20" />
                    Core Capabilities
                  </h4>
                  <ul className="space-y-3">
                    {selected.features.map((f, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.08, duration: 0.4 }}
                        className="flex items-start gap-3"
                      >
                        <span className="mt-2 w-1 h-1 rounded-full bg-ash-500 flex-shrink-0" />
                        <span className="text-ash-500 text-sm leading-relaxed">{f}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Tech stack */}
                <div className="pt-6 border-t border-white/[0.04]">
                  <h4 className="font-semibold text-xs text-ash-700 mb-4 uppercase tracking-widest flex items-center gap-2">
                    <div className="w-5 h-px bg-white/10" />
                    Technology Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selected.tech.map((t, i) => (
                      <motion.span
                        key={t}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 + i * 0.05, duration: 0.3 }}
                        className="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.06] text-ash-500 font-mono text-xs hover:bg-white/[0.08] hover:text-ash-300 transition-all cursor-default"
                      >
                        {t}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Action */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  {selected.live && (
                    <a href={selected.live} target="_blank" rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white text-noir-950 font-semibold text-sm hover:bg-ash-300 transition-colors duration-300">
                      <ExternalLink size={16} /> Visit Website
                    </a>
                  )}
                  {selected.isPrivate ? (
                    <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white/[0.03] border border-white/[0.06] text-ash-600 text-sm">
                      <Shield size={14} /> Private Repository
                    </div>
                  ) : (
                    <a href={selected.github} target="_blank" rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-white/10 text-ash-400 font-medium text-sm hover:text-white hover:border-white/30 transition-all duration-300">
                      <Github size={16} /> View Source
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default FeaturedProjects;
