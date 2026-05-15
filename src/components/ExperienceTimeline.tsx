"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, GraduationCap, Award } from 'lucide-react';

interface TimelineEntry {
  id: string;
  type: 'work' | 'education' | 'cert';
  title: string;
  org: string;
  period: string;
  bullets: string[];
  color: string;
  icon: React.ElementType;
}

const entries: TimelineEntry[] = [
  {
    id: 'remote-engineer',
    type: 'work',
    title: 'Remote Software Engineer (Contract)',
    org: 'Fiverr & Outlier Aligner',
    period: '2023 — Present',
    bullets: [
      'Delivered high-end full-stack and AI solutions for global clients',
      'Specialized in AI Model Alignment and Agentic Automation pipelines',
      'Developed custom streaming infrastructures and secure cloud architectures',
    ],
    color: '#22c55e',
    icon: Briefcase,
  },
  {
    id: 'ai-intern',
    type: 'work',
    title: 'AI Research Intern',
    org: 'Tech Innovation Lab',
    period: '2023 — Present',
    bullets: [
      'Researched Autonomous AI Frameworks and multi-agent systems',
      'Implemented Survival Axioms and alignment layers for sovereign AI agents',
      'Developed prototypes for privacy-preserving AI interaction models',
    ],
    color: '#06b6d4',
    icon: Briefcase,
  },
  {
    id: 'bsc',
    type: 'education',
    title: 'BSc. Computer Systems Engineering',
    org: 'University of Kirinyaga, Nairobi',
    period: '2020 — 2024',
    bullets: [
      'Graduated with Honors',
      'Specialization: AI, Cybersecurity, and System Architecture',
    ],
    color: '#7c3aed',
    icon: GraduationCap,
  },
  {
    id: 'comptia',
    type: 'cert',
    title: 'CompTIA Security+',
    org: 'Passed with Distinction',
    period: 'Certified',
    bullets: ['Industry-recognized cybersecurity certification'],
    color: '#22c55e',
    icon: Award,
  },
  {
    id: 'cisco',
    type: 'cert',
    title: 'Cisco Networking & Security Training',
    org: 'Advanced Hands-on Training',
    period: 'Certified',
    bullets: ['Enterprise networking and security infrastructure'],
    color: '#06b6d4',
    icon: Award,
  },
];

const ease = [0.22, 1, 0.36, 1];

const ExperienceTimeline: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="timeline" className="relative py-32 overflow-hidden" ref={ref}>
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: ease as any }}
          className="text-center mb-20"
        >
          <p className="section-subtitle mb-4">// operational_history</p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white/90 mb-4">
            Experience <span className="text-glow-sovereign">Timeline</span>
          </h2>
          <p className="text-white/30 max-w-xl mx-auto text-lg">
            A chronology of growth, from engineering foundations to sovereign systems.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Glowing vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-px">
            <div className="w-full h-full bg-gradient-to-b from-venom-500/40 via-cyber-500/30 to-amethyst-500/40 animate-line-pulse" />
          </div>

          {entries.map((entry, i) => {
            const Icon = entry.icon;
            const isRight = i % 2 === 0;

            return (
              <motion.div
                key={entry.id}
                initial={{ opacity: 0, x: isRight ? 40 : -40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.15, duration: 0.7, ease: ease as any }}
                className={`relative flex items-start mb-12 last:mb-0 ${
                  isRight ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-row`}
                id={`timeline-${entry.id}`}
              >
                {/* Pulse dot on line */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10">
                  <div
                    className="w-4 h-4 rounded-full border-2 pulse-dot"
                    style={{
                      borderColor: entry.color,
                      background: `${entry.color}33`,
                      boxShadow: `0 0 12px ${entry.color}40`,
                    }}
                  />
                </div>

                {/* Spacer for mobile */}
                <div className="w-16 md:hidden flex-shrink-0" />

                {/* Card */}
                <div className={`flex-1 ${isRight ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
                  <div className="glass rounded-2xl p-6 border border-white/[0.04] hover:border-white/[0.08] transition-all duration-400 apple-ease group">
                    <div className={`flex items-center gap-3 mb-3 ${isRight ? 'md:justify-end' : ''}`}>
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center"
                        style={{ background: `${entry.color}15`, border: `1px solid ${entry.color}30` }}
                      >
                        <Icon size={16} style={{ color: entry.color }} />
                      </div>
                      <span className="font-mono text-xs text-white/30">{entry.period}</span>
                    </div>

                    <h3 className="font-display font-semibold text-lg text-white/80 group-hover:text-white/95 transition-colors mb-1">
                      {entry.title}
                    </h3>
                    <p className="font-mono text-xs text-white/30 mb-4" style={{ color: `${entry.color}99` }}>
                      {entry.org}
                    </p>

                    <ul className={`space-y-2 ${isRight ? 'md:text-right' : ''}`}>
                      {entry.bullets.map((b, j) => (
                        <li key={j} className="text-white/30 text-sm leading-relaxed">
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Empty half for desktop */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
