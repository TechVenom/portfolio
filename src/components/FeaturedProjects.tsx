"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Brain, Camera, Shield, Zap, ExternalLink, Github, X, Server, Code, Terminal, Activity } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  impact: string;
  icon: React.ElementType;
  color: string;
  glowClass: string;
  borderClass: string;
  textClass: string;
  gradient: string;
  tech: string[];
  github: string;
  isPrivate?: boolean;
  features: string[];
}

const projects: Project[] = [
  {
    id: 'venomx',
    title: 'VENOMX',
    subtitle: 'Sovereign Autonomous Intelligence Engine',
    description: 'A complete AGI scaffold designed to operate as an autonomous digital worker. Not a chatbot wrapper—a genuine self-improving AI system with self-healing engine and 9-tier unified memory.',
    impact: '9-Tier Memory Architecture',
    icon: Brain,
    color: '#22c55e',
    glowClass: 'shadow-glow-venom-lg',
    borderClass: 'border-venom-500/40',
    textClass: 'text-venom-400',
    gradient: 'from-venom-600 to-venom-400',
    tech: ['Python', 'FastAPI', 'LangChain', 'ChromaDB', 'Ollama', 'Tauri'],
    github: '#',
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
    id: 'paps',
    title: 'VenomX PAPS',
    subtitle: 'Android Camera Injector · Pro Advanced Streaming',
    description: 'The ultimate virtual camera injector for rooted Android devices. Intercepts Camera2 API surfaces to inject custom video feeds from OBS, local files, or RTMP sources.',
    impact: 'System-Level Camera Hooks',
    icon: Camera,
    color: '#06b6d4',
    glowClass: 'shadow-glow-cyber-lg',
    borderClass: 'border-cyber-500/40',
    textClass: 'text-cyber-400',
    gradient: 'from-cyber-600 to-cyber-400',
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
    id: 'shadowcloak',
    title: 'ShadowCloak',
    subtitle: 'Advanced Privacy & Anonymity Suite',
    description: 'Modular toolkit for cybersecurity professionals. Features real-time MAC randomization, Tor integration, DNS protection, and automated anti-forensics protocols.',
    impact: 'Zero Forensic Footprint',
    icon: Shield,
    color: '#7c3aed',
    glowClass: 'shadow-glow-amethyst-lg',
    borderClass: 'border-amethyst-500/40',
    textClass: 'text-amethyst-400',
    gradient: 'from-amethyst-600 to-amethyst-400',
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
    id: 'pro-server',
    title: 'VenomX Pro Server',
    subtitle: 'High-Performance Streaming Engine',
    description: 'Sub-second latency streaming hub built on MediaMTX. Designed to replace legacy solutions with support for RTMP, SRT, HLS, and WebRTC.',
    impact: '~500ms Latency Hub',
    icon: Server,
    color: '#06b6d4',
    glowClass: 'shadow-glow-cyber-lg',
    borderClass: 'border-cyber-500/40',
    textClass: 'text-cyber-400',
    gradient: 'from-cyber-600 to-cyber-400',
    tech: ['Docker', 'Nginx', 'MediaMTX', 'Shell'],
    github: 'https://github.com/TechVenom/venomx-pro-server',
    features: [
      'Ultra-low latency WebRTC and SRT support',
      'Universal HLS compatibility for all devices',
      'Glassmorphism real-time monitoring dashboard',
      'Zero-config deployment with IP detection',
    ],
  },
  {
    id: 'skills-library',
    title: 'Master Skills Library',
    subtitle: '49+ Autonomous AI Agent Skills',
    description: 'A production-grade library of skills for autonomous agents, including Crypto Intelligence, Red Teaming, and OS Management.',
    impact: 'Modular Agent Intelligence',
    icon: Code,
    color: '#22c55e',
    glowClass: 'shadow-glow-venom-lg',
    borderClass: 'border-venom-500/40',
    textClass: 'text-venom-400',
    gradient: 'from-venom-600 to-venom-400',
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
    id: 'claws',
    title: 'VENOMX-CLAWS',
    subtitle: 'Automated Security Testing Tool',
    description: 'Advanced vulnerability assessment and automated penetration testing tool integrated into the VenomX ecosystem.',
    impact: 'Automated SecOps',
    icon: Terminal,
    color: '#7c3aed',
    glowClass: 'shadow-glow-amethyst-lg',
    borderClass: 'border-amethyst-500/40',
    textClass: 'text-amethyst-400',
    gradient: 'from-amethyst-600 to-amethyst-400',
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
  { name: 'AUTOINTEL', desc: 'Automated intelligence gathering system', link: 'https://github.com/TechVenom/AUTOINTEL' },
  { name: 'LiveCam', desc: 'Live camera streaming solution', link: 'https://github.com/TechVenom/livecam' },
  { name: 'IP Changer', desc: 'Tor IP rotation tool', link: 'https://github.com/TechVenom/IP_Changer' },
  { name: 'ShadowVeil', desc: 'Additional privacy & security tool', link: 'https://github.com/TechVenom/ShadowVeil' },
];

const ease = [0.22, 1, 0.36, 1];

const FeaturedProjects: React.FC = () => {
  const [selected, setSelected] = useState<Project | null>(null);
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="projects" className="relative py-32 overflow-hidden" ref={ref}>
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: ease as any }}
          className="text-center mb-20"
        >
          <p className="section-subtitle mb-4">// the_sovereign_suite</p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white/90 mb-4">
            Featured <span className="text-glow-sovereign">Projects</span>
          </h2>
          <p className="text-white/30 max-w-xl mx-auto text-lg">
            Systems engineered at the edge of AI, media streaming, and security.
          </p>
        </motion.div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-16">
          {projects.map((project, i) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.7, ease: ease as any }}
                onClick={() => setSelected(project)}
                className={`group relative glass rounded-3xl p-8 cursor-pointer transition-all duration-500 apple-ease
                  border border-white/[0.04] hover:${project.borderClass} hover:${project.glowClass}`}
                id={`project-card-${project.id}`}
              >
                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 apple-ease`}>
                  <Icon size={24} className="text-abyss-950" />
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-2xl text-white/90 mb-2 group-hover:text-white transition-colors">{project.title}</h3>
                <p className={`font-mono text-[10px] ${project.textClass} opacity-70 mb-4 tracking-wider uppercase`}>{project.subtitle}</p>

                {/* Description */}
                <p className="text-white/30 text-sm leading-relaxed mb-6 line-clamp-3">{project.description}</p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded-lg bg-white/[0.04] border border-white/[0.06] text-white/40 font-mono text-[10px]">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Impact metric */}
                <div className="flex items-center justify-between pt-4 border-t border-white/[0.04]">
                  <div className="flex items-center gap-2">
                    <Activity size={14} className={project.textClass} />
                    <span className="text-white/40 font-mono text-[10px] uppercase tracking-widest">{project.impact}</span>
                  </div>
                  <span className="text-white/20 text-xs font-mono group-hover:text-white/40 transition-colors">Details →</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Projects Area */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: ease as any, delay: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass rounded-3xl p-8 border border-white/[0.02]">
            <h4 className="font-display font-semibold text-white/60 mb-6 flex items-center gap-2">
              <Zap size={18} className="text-venom-500" /> Additional Modules
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {additionalProjects.map((p) => (
                <a 
                  key={p.name} 
                  href={p.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-2xl glass border border-white/[0.04] hover:border-venom-500/30 hover:bg-venom-500/[0.02] transition-all group"
                >
                  <div>
                    <p className="font-mono text-sm text-white/70 group-hover:text-venom-400 transition-colors">{p.name}</p>
                    <p className="text-xs text-white/30">{p.desc}</p>
                  </div>
                  <ExternalLink size={14} className="text-white/10 group-hover:text-venom-500" />
                </a>
              ))}
            </div>
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
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-abyss-950/90 backdrop-blur-xl"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.4, ease: ease as any }}
              onClick={(e) => e.stopPropagation()}
              className={`relative w-full max-w-2xl glass-strong rounded-3xl p-8 sm:p-10 border ${selected.borderClass} max-h-[90vh] overflow-y-auto scrollbar-hide`}
            >
              <button onClick={() => setSelected(null)} className="absolute top-6 right-6 p-2 text-white/30 hover:text-white/60 transition-colors" id="modal-close">
                <X size={24} />
              </button>

              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${selected.gradient} flex items-center justify-center mb-8`}>
                <selected.icon size={32} className="text-abyss-950" />
              </div>

              <h3 className="font-display font-bold text-3xl text-white/90 mb-2">{selected.title}</h3>
              <p className={`font-mono text-sm ${selected.textClass} opacity-70 mb-6 uppercase tracking-widest`}>{selected.subtitle}</p>
              <p className="text-white/40 leading-relaxed mb-8 text-lg">{selected.description}</p>

              <div className="space-y-8">
                <div>
                  <h4 className="font-display font-semibold text-lg text-white/70 mb-4 flex items-center gap-2">
                    <Zap size={18} className={selected.textClass} /> Core Capabilities
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {selected.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className={`mt-2 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${selected.gradient} flex-shrink-0`} />
                        <span className="text-white/40 text-sm leading-snug">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-8 border-t border-white/[0.04]">
                  <h4 className="font-display font-semibold text-sm text-white/40 mb-4 uppercase tracking-widest">Technology Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {selected.tech.map((t) => (
                      <span key={t} className="px-3 py-1.5 rounded-xl bg-white/[0.04] border border-white/[0.06] text-white/60 font-mono text-xs">{t}</span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  {selected.isPrivate ? (
                    <div className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/[0.04] border border-white/10 text-white/30 font-mono text-sm">
                      <Shield size={16} /> Private Repository (Link when ready)
                    </div>
                  ) : (
                    <a href={selected.github} target="_blank" rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-8 py-3 rounded-2xl bg-white text-abyss-950 font-display font-bold text-base hover:shadow-glow-cyber transition-all duration-300 hover:scale-[1.02]">
                      <Github size={20} /> Access Source
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
