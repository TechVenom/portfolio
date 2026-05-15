"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Brain, Server, Shield, Smartphone, Zap } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  subs: string[];
}

interface Category {
  id: string;
  label: string;
  icon: React.ElementType;
  color: string;
  glow: string;
  border: string;
  skills: Skill[];
}

const categories: Category[] = [
  {
    id: 'ai', label: 'AI & Machine Learning', icon: Brain,
    color: 'text-venom-400', glow: 'shadow-glow-venom', border: 'border-venom-500/30',
    skills: [
      { name: 'Sovereign AGI Workflows', level: 98, subs: ['Self-healing Engine', 'Multi-agent Swarms', 'Autonomous Execution'] },
      { name: 'Memory Architectures', level: 95, subs: ['9-Tier Unified Memory', 'Vector DBs', 'Graph Memory'] },
      { name: 'LLM Frameworks', level: 96, subs: ['LangChain', 'FastAPI', 'Ollama', 'OpenAI/Gemini'] },
      { name: 'Emotional Modeling', level: 92, subs: ['VAD System', 'Voice Streaming', 'Personality Adaptation'] },
    ],
  },
  {
    id: 'stack', label: 'Systems & Full-Stack', icon: Server,
    color: 'text-cyber-400', glow: 'shadow-glow-cyber', border: 'border-cyber-500/30',
    skills: [
      { name: 'Backend Architecture', level: 96, subs: ['FastAPI', 'Node.js', 'Python Scoped Storage'] },
      { name: 'Modern Frontend', level: 94, subs: ['Next.js (App Router)', 'React', 'Tauri', 'TypeScript'] },
      { name: 'System Engineering', level: 92, subs: ['Linux SysAdmin', 'MediaMTX', 'Low-Latency Engines'] },
      { name: 'Infrastructure', level: 90, subs: ['Docker', 'Nginx', 'Git-backed Rollback', 'Bash Automation'] },
    ],
  },
  {
    id: 'security', label: 'Cybersecurity & Privacy', icon: Shield,
    color: 'text-amethyst-400', glow: 'shadow-glow-amethyst', border: 'border-amethyst-500/30',
    skills: [
      { name: 'Anonymity Protocols', level: 95, subs: ['Tor Routing', 'DNS Leak Prevention', 'Macchanger'] },
      { name: 'Identity Obfuscation', level: 94, subs: ['MAC Randomization', 'Hostname Camouflage', 'Timezone Spoofing'] },
      { name: 'SecOps & Red Teaming', level: 90, subs: ['Vulnerability Assessment', 'CLAW-Automation', 'Kali Suite'] },
      { name: 'System Privacy', level: 92, subs: ['Memory Sanitization', 'Log Wiping', 'Browser Hardening'] },
    ],
  },
  {
    id: 'mobile', label: 'Mobile & Media', icon: Smartphone,
    color: 'text-cyan-400', glow: 'shadow-glow-cyber', border: 'border-cyan-500/30',
    skills: [
      { name: 'System-Level Hooks', level: 94, subs: ['Xposed/LSPosed', 'Camera2 API Interception', 'NDK'] },
      { name: 'Media Streaming', level: 96, subs: ['RTMP/SRT/HLS', 'WebRTC', 'Sub-second Latency'] },
      { name: 'Player Engines', level: 92, subs: ['ExoPlayer (Media3)', 'IJKPlayer (FFmpeg)', 'Cross-Process Feeds'] },
      { name: 'Native Mobile', level: 88, subs: ['Kotlin', 'Jetpack Compose', 'Koin DI', 'Android Scoped Storage'] },
    ],
  },
];

const ease = [0.22, 1, 0.36, 1];

const SkillMatrix: React.FC = () => {
  const [active, setActive] = useState<string>('ai');
  const [expandedSkill, setExpandedSkill] = useState<string | null>(null);
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });

  const cat = categories.find(c => c.id === active)!;

  return (
    <section id="skills" className="relative py-32 overflow-hidden" ref={ref}>
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: ease as any }}
          className="text-center mb-16"
        >
          <p className="section-subtitle mb-4">// cognitive_loadout</p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white/90 mb-4">
            Skill <span className="text-glow-sovereign">Matrix</span>
          </h2>
          <p className="text-white/30 max-w-xl mx-auto text-lg">
            Sovereign engineering across AI, media streaming, and offensive security.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: ease as any, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((c) => {
            const Icon = c.icon;
            const isActive = c.id === active;
            return (
              <button
                key={c.id}
                onClick={() => { setActive(c.id); setExpandedSkill(null); }}
                id={`skill-tab-${c.id}`}
                className={`flex items-center gap-2 px-5 py-3 rounded-2xl font-mono text-sm transition-all duration-400 apple-ease
                  ${isActive
                    ? `glass-strong ${c.border} ${c.color} ${c.glow}`
                    : 'glass border border-white/5 text-white/40 hover:text-white/60 hover:border-white/10'
                  }`}
              >
                <Icon size={16} />
                <span className="hidden sm:inline">{c.label}</span>
                <span className="sm:hidden">{c.label.split(' ')[0]}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: ease as any }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto"
        >
          {cat.skills.map((skill, i) => {
            const isExpanded = expandedSkill === skill.name;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5, ease: ease as any }}
                onClick={() => setExpandedSkill(isExpanded ? null : skill.name)}
                className={`glass rounded-2xl p-6 cursor-pointer card-glow transition-all duration-400 apple-ease ${
                  isExpanded ? `${cat.border} ${cat.glow} bg-white/[0.02]` : 'border border-white/[0.04]'
                }`}
                id={`skill-card-${skill.name.toLowerCase().replace(/\s/g, '-')}`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <Zap size={16} className={isExpanded ? cat.color : 'text-white/20'} />
                    <h3 className={`font-display font-semibold text-lg ${isExpanded ? cat.color : 'text-white/80'}`}>
                      {skill.name}
                    </h3>
                  </div>
                  <span className={`font-mono text-sm ${cat.color} opacity-70`}>{skill.level}%</span>
                </div>

                {/* Progress bar */}
                <div className="h-1 rounded-full bg-white/[0.06] mb-4 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{ duration: 1.2, delay: 0.3 + i * 0.15, ease: ease as any }}
                    className="h-full rounded-full"
                    style={{
                      background: cat.id === 'ai' ? 'linear-gradient(90deg, #22c55e, #3bd47e)'
                        : cat.id === 'stack' ? 'linear-gradient(90deg, #06b6d4, #22d3ee)'
                        : cat.id === 'security' ? 'linear-gradient(90deg, #7c3aed, #a78bfa)'
                        : 'linear-gradient(90deg, #06b6d4, #22c55e)',
                    }}
                  />
                </div>

                {/* Sub-technologies (expanded) */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: ease as any }}
                      className="flex flex-wrap gap-2 mt-4"
                    >
                      {skill.subs.map((sub) => (
                        <span key={sub} className="px-3 py-1 rounded-lg bg-white/[0.04] border border-white/[0.08] text-white/50 font-mono text-[11px] tracking-tight">
                          {sub}
                        </span>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillMatrix;
