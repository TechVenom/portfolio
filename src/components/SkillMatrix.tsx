"use client";

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Brain, Server, Shield, Smartphone } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  subs: string[];
}

interface Category {
  id: string;
  label: string;
  icon: React.ElementType;
  skills: Skill[];
  stat: string;
  statLabel: string;
}

const categories: Category[] = [
  {
    id: 'ai', label: 'AI & Machine Learning', icon: Brain,
    stat: '98', statLabel: 'Proficiency Index',
    skills: [
      { name: 'Agentic AI Workflows', level: 98, subs: ['Self-healing Engine', 'Multi-agent Swarms', 'Autonomous Execution'] },
      { name: 'Memory Architectures', level: 95, subs: ['9-Tier Unified Memory', 'Vector DBs', 'Graph Memory'] },
      { name: 'LLM Frameworks', level: 96, subs: ['LangChain', 'FastAPI', 'Ollama', 'OpenAI / Gemini'] },
      { name: 'Emotional Modeling', level: 92, subs: ['VAD System', 'Voice Streaming', 'Personality Adaptation'] },
    ],
  },
  {
    id: 'stack', label: 'Systems & Full-Stack', icon: Server,
    stat: '96', statLabel: 'Proficiency Index',
    skills: [
      { name: 'Backend Architecture', level: 96, subs: ['FastAPI', 'Node.js', 'Python'] },
      { name: 'Modern Frontend', level: 94, subs: ['Next.js', 'React', 'TypeScript', 'Tailwind'] },
      { name: 'System Engineering', level: 92, subs: ['Linux Admin', 'MediaMTX', 'Low-Latency Engines'] },
      { name: 'Infrastructure', level: 90, subs: ['Docker', 'Nginx', 'Git', 'Bash Automation'] },
    ],
  },
  {
    id: 'security', label: 'Cybersecurity & Privacy', icon: Shield,
    stat: '95', statLabel: 'Proficiency Index',
    skills: [
      { name: 'Anonymity Protocols', level: 95, subs: ['Tor Routing', 'DNS Leak Prevention', 'Macchanger'] },
      { name: 'Identity Obfuscation', level: 94, subs: ['MAC Randomization', 'Hostname Camouflage', 'Timezone Spoofing'] },
      { name: 'Security Operations', level: 90, subs: ['Vulnerability Assessment', 'Red Teaming', 'Kali Suite'] },
      { name: 'System Privacy', level: 92, subs: ['Memory Sanitization', 'Log Wiping', 'Browser Hardening'] },
    ],
  },
  {
    id: 'mobile', label: 'Mobile & Media', icon: Smartphone,
    stat: '94', statLabel: 'Proficiency Index',
    skills: [
      { name: 'System-Level Hooks', level: 94, subs: ['Xposed / LSPosed', 'Camera2 API Interception', 'NDK'] },
      { name: 'Media Streaming', level: 96, subs: ['RTMP / SRT / HLS', 'WebRTC', 'Sub-second Latency'] },
      { name: 'Player Engines', level: 92, subs: ['ExoPlayer (Media3)', 'IJKPlayer (FFmpeg)', 'Cross-Process Feeds'] },
      { name: 'Native Mobile', level: 88, subs: ['Kotlin', 'Jetpack Compose', 'Koin DI', 'Android'] },
    ],
  },
];

const ease = [0.16, 1, 0.3, 1];

/* ── Animated counter hook ── */
function AnimatedNumber({ value, inView }: { value: number; inView: boolean }) {
  const spring = useSpring(0, { stiffness: 50, damping: 20 });
  const display = useTransform(spring, (v) => Math.round(v));
  const [displayVal, setDisplayVal] = React.useState(0);

  React.useEffect(() => {
    if (inView) spring.set(value);
    else spring.set(0);
  }, [inView, value, spring]);

  React.useEffect(() => {
    const unsubscribe = display.on('change', (v) => setDisplayVal(v));
    return unsubscribe;
  }, [display]);

  return <>{displayVal}</>;
}

/* ── Tilt card wrapper ── */
function TiltCard({ children, className, ...props }: { children: React.ReactNode; className?: string; [key: string]: any }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-0.5, 0.5], [3, -3]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-3, 3]);

  const handleMouse = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/* ── Circular progress ring ── */
function ProgressRing({ value, inView, size = 44, stroke = 2.5 }: { value: number; inView: boolean; size?: number; stroke?: number }) {
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;

  return (
    <svg width={size} height={size} className="rotate-[-90deg]">
      <circle
        cx={size / 2} cy={size / 2} r={radius}
        fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth={stroke}
      />
      <motion.circle
        cx={size / 2} cy={size / 2} r={radius}
        fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth={stroke}
        strokeLinecap="round"
        strokeDasharray={circumference}
        initial={{ strokeDashoffset: circumference }}
        animate={inView ? { strokeDashoffset: offset } : { strokeDashoffset: circumference }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
      />
    </svg>
  );
}

const SkillMatrix: React.FC = () => {
  const [active, setActive] = useState<string>('ai');
  const [expandedSkill, setExpandedSkill] = useState<string | null>(null);
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const cat = categories.find(c => c.id === active)!;

  return (
    <section id="skills" className="relative py-28 overflow-hidden" ref={ref}>
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/[0.008] rounded-full blur-[150px] pointer-events-none" />

      <div className="section-container">
        {/* Header row */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: ease as any }}
          >
            <p className="section-label mb-4">Expertise</p>
            <h2 className="section-heading mb-4">Technical Skills</h2>
            <p className="text-ash-600 max-w-lg text-base leading-relaxed">
              Deep proficiency across AI engineering, full-stack development,
              cybersecurity, and mobile systems.
            </p>
          </motion.div>

          {/* Stat block */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, ease: ease as any, delay: 0.3 }}
            className="flex items-center gap-4 px-6 py-4 rounded-2xl border border-white/[0.06] bg-white/[0.02]"
          >
            <ProgressRing value={parseInt(cat.stat)} inView={inView} size={52} stroke={3} />
            <div>
              <div className="text-3xl font-bold text-white tracking-tight">
                <AnimatedNumber value={parseInt(cat.stat)} inView={inView} />
                <span className="text-ash-600 text-lg ml-0.5">%</span>
              </div>
              <p className="text-ash-700 text-[11px] font-mono uppercase tracking-wider">{cat.statLabel}</p>
            </div>
          </motion.div>
        </div>

        {/* Category Tabs — pill style */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: ease as any, delay: 0.15 }}
          className="flex flex-wrap gap-2 mb-12 p-1.5 rounded-2xl bg-white/[0.02] border border-white/[0.04] w-fit"
        >
          {categories.map((c) => {
            const Icon = c.icon;
            const isActive = c.id === active;
            return (
              <button
                key={c.id}
                onClick={() => { setActive(c.id); setExpandedSkill(null); }}
                id={`skill-tab-${c.id}`}
                className={`relative flex items-center gap-2 px-4 py-2.5 rounded-xl text-[13px] font-medium transition-all duration-400
                  ${isActive
                    ? 'text-noir-950'
                    : 'text-ash-600 hover:text-ash-300'
                  }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-white rounded-xl"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <Icon size={15} />
                  <span className="hidden sm:inline">{c.label}</span>
                  <span className="sm:hidden">{c.label.split(' ')[0]}</span>
                </span>
              </button>
            );
          })}
        </motion.div>

        {/* Skills Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: ease as any }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl"
          >
            {cat.skills.map((skill, i) => {
              const isExpanded = expandedSkill === skill.name;
              return (
                <TiltCard key={skill.name}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08, duration: 0.5, ease: ease as any }}
                    onClick={() => setExpandedSkill(isExpanded ? null : skill.name)}
                    className={`group relative rounded-2xl p-6 cursor-pointer transition-all duration-500 overflow-hidden
                      border ${isExpanded ? 'border-white/15 bg-white/[0.04]' : 'border-white/[0.06] bg-white/[0.015] hover:border-white/[0.12] hover:bg-white/[0.03]'}
                    `}
                    id={`skill-card-${skill.name.toLowerCase().replace(/\s/g, '-')}`}
                  >
                    {/* Hover spotlight effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                      <div className="absolute top-0 right-0 w-40 h-40 bg-white/[0.03] rounded-full blur-[60px] -translate-y-1/2 translate-x-1/4" />
                    </div>

                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-5">
                        <h3 className={`font-semibold text-[15px] transition-colors duration-300 ${isExpanded ? 'text-white' : 'text-ash-300 group-hover:text-white'}`}>
                          {skill.name}
                        </h3>
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs text-ash-600">
                            <AnimatedNumber value={skill.level} inView={inView} />%
                          </span>
                        </div>
                      </div>

                      {/* Animated progress bar */}
                      <div className="h-[2px] rounded-full bg-white/[0.06] mb-1 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ duration: 1.4, delay: 0.3 + i * 0.15, ease: ease as any }}
                          className="h-full rounded-full"
                          style={{
                            background: 'linear-gradient(90deg, rgba(255,255,255,0.15), rgba(255,255,255,0.45))',
                          }}
                        />
                      </div>

                      {/* Sub-technologies */}
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3, ease: ease as any }}
                            className="overflow-hidden"
                          >
                            <div className="flex flex-wrap gap-2 mt-5 pt-5 border-t border-white/[0.06]">
                              {skill.subs.map((sub, j) => (
                                <motion.span
                                  key={sub}
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ delay: j * 0.05, duration: 0.3 }}
                                  className="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-ash-500 text-[11px] font-mono hover:bg-white/[0.08] hover:text-ash-300 transition-all duration-200 cursor-default"
                                >
                                  {sub}
                                </motion.span>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                </TiltCard>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default SkillMatrix;
