"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, GraduationCap, Award, MapPin, Calendar } from 'lucide-react';

interface TimelineEntry {
  id: string;
  type: 'work' | 'education' | 'cert';
  title: string;
  org: string;
  location?: string;
  period: string;
  bullets: string[];
  icon: React.ElementType;
  highlight?: string;
}

const entries: TimelineEntry[] = [
  {
    id: 'remote-engineer',
    type: 'work',
    title: 'Remote Software Engineer',
    org: 'Fiverr & Outlier · Contract',
    location: 'Remote',
    period: '2023 — Present',
    bullets: [
      'Delivered high-end full-stack and AI solutions for global clients across 4 continents',
      'Specialized in AI Model Alignment and building Agentic Automation pipelines',
      'Developed custom streaming infrastructures and secure cloud architectures',
    ],
    icon: Briefcase,
    highlight: 'Current',
  },
  {
    id: 'ai-intern',
    type: 'work',
    title: 'AI Research Intern',
    org: 'Tech Innovation Lab',
    location: 'Nairobi, Kenya',
    period: '2023 — Present',
    bullets: [
      'Researched autonomous AI frameworks and multi-agent orchestration systems',
      'Implemented alignment layers and safety constraints for autonomous AI agents',
      'Developed prototypes for privacy-preserving AI interaction models',
    ],
    icon: Briefcase,
    highlight: 'Current',
  },
  {
    id: 'bsc',
    type: 'education',
    title: 'BSc. Computer Systems Engineering',
    org: 'University of Kirinyaga',
    location: 'Nairobi, Kenya',
    period: '2020 — 2024',
    bullets: [
      'Graduated with Honors — top 10% of class',
      'Specialization: AI Systems, Cybersecurity, and Distributed Architecture',
    ],
    icon: GraduationCap,
  },
  {
    id: 'comptia',
    type: 'cert',
    title: 'CompTIA Security+',
    org: 'Passed with Distinction',
    period: 'Certified',
    bullets: ['Industry-recognized cybersecurity certification covering threat analysis, risk management, and incident response'],
    icon: Award,
  },
  {
    id: 'cisco',
    type: 'cert',
    title: 'Cisco Networking & Security',
    org: 'Advanced Hands-on Training',
    period: 'Certified',
    bullets: ['Enterprise networking, security infrastructure, routing & switching'],
    icon: Award,
  },
];

const ease = [0.16, 1, 0.3, 1];

const typeStyles: Record<string, string> = {
  work: 'text-ash-400 border-ash-700',
  education: 'text-ash-400 border-ash-700',
  cert: 'text-ash-500 border-ash-800',
};

const typeLabels: Record<string, string> = {
  work: 'Experience',
  education: 'Education',
  cert: 'Certification',
};

const ExperienceTimeline: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true });

  return (
    <section id="timeline" className="relative py-28 overflow-hidden" ref={ref}>
      {/* Background accent */}


      <div className="section-container">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: ease as any }}
          >
            <p className="section-label mb-4">Background</p>
            <h2 className="section-heading mb-4">Experience & Education</h2>
            <p className="text-ash-600 max-w-lg text-base leading-relaxed">
              A chronology of growth — from engineering foundations to building production systems.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: ease as any }}
            className="flex items-center gap-6"
          >
            <div className="text-right">
              <div className="text-3xl font-bold text-black tracking-tight">3+</div>
              <p className="text-ash-700 text-[11px] font-mono uppercase tracking-wider">Years Active</p>
            </div>
            <div className="w-px h-10 bg-black/[0.08]" />
            <div className="text-right">
              <div className="text-3xl font-bold text-black tracking-tight">2</div>
              <p className="text-ash-700 text-[11px] font-mono uppercase tracking-wider">Certifications</p>
            </div>
          </motion.div>
        </div>

        {/* Timeline */}
        <div className="relative max-w-3xl">
          {/* Animated vertical line */}
          <div className="absolute left-[11px] top-3 bottom-3 w-px overflow-hidden">
            <motion.div
              initial={{ height: 0 }}
              animate={inView ? { height: '100%' } : {}}
              transition={{ duration: 2, ease: ease as any, delay: 0.3 }}
              className="w-full bg-gradient-to-b from-black/25 via-black/10 to-transparent"
            />
          </div>

          <div className="space-y-2">
            {entries.map((entry, i) => {
              const Icon = entry.icon;

              return (
                <motion.div
                  key={entry.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.12, duration: 0.7, ease: ease as any }}
                  className="relative flex items-start pl-12 group"
                  id={`timeline-${entry.id}`}
                >
                  {/* Animated node */}
                  <div className="absolute left-0 top-7 z-10">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={inView ? { scale: 1 } : {}}
                      transition={{ delay: 0.4 + i * 0.12, duration: 0.4, ease: ease as any }}
                      className="relative"
                    >
                      {/* Pulse ring (for current positions) */}
                      {entry.highlight === 'Current' && (
                        <div className="absolute -inset-2 rounded-full border border-black/10 animate-ping opacity-20" />
                      )}
                      <div className={`w-[22px] h-[22px] rounded-full border-2 flex items-center justify-center transition-all duration-500
                        ${entry.highlight === 'Current'
                          ? 'border-black/30 bg-noir-950'
                          : 'border-black/10 bg-noir-950 group-hover:border-black/25'
                        }`}
                      >
                        <div className={`w-[7px] h-[7px] rounded-full transition-all duration-500
                          ${entry.highlight === 'Current'
                            ? 'bg-black/60'
                            : 'bg-black/15 group-hover:bg-black/40'
                          }`}
                        />
                      </div>
                    </motion.div>
                  </div>

                  {/* Card */}
                  <div className="flex-1 pb-8 last:pb-0">
                    <div className="rounded-2xl p-6 border border-black/[0.04] bg-black/[0.01] group-hover:border-black/[0.1] group-hover:bg-black/[0.025] transition-all duration-500 relative overflow-hidden">
                      {/* Subtle hover spotlight */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">

                      </div>

                      <div className="relative z-10">
                        {/* Top meta row */}
                        <div className="flex items-center flex-wrap gap-2 mb-3">
                          {/* Type badge */}
                          <span className={`px-2.5 py-0.5 rounded-md border text-[10px] font-mono uppercase tracking-wider ${typeStyles[entry.type]}`}>
                            {typeLabels[entry.type]}
                          </span>

                          {/* Current badge */}
                          {entry.highlight === 'Current' && (
                            <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-md border border-black/15 text-[10px] font-mono uppercase tracking-wider text-ash-300">
                              <span className="w-1.5 h-1.5 rounded-full bg-black/50 animate-pulse" />
                              Current
                            </span>
                          )}
                        </div>

                        {/* Period */}
                        <div className="flex items-center gap-4 mb-3 text-ash-700">
                          <div className="flex items-center gap-1.5 text-[11px] font-mono">
                            <Calendar size={11} />
                            <span>{entry.period}</span>
                          </div>
                          {entry.location && (
                            <div className="flex items-center gap-1.5 text-[11px] font-mono">
                              <MapPin size={11} />
                              <span>{entry.location}</span>
                            </div>
                          )}
                        </div>

                        {/* Title & Org */}
                        <h3 className="font-semibold text-base text-ash-200 group-hover:text-black transition-colors mb-1">
                          {entry.title}
                        </h3>
                        <p className="text-[13px] text-ash-600 mb-4">{entry.org}</p>

                        {/* Bullets */}
                        <ul className="space-y-2">
                          {entry.bullets.map((b, j) => (
                            <motion.li
                              key={j}
                              initial={{ opacity: 0, x: -8 }}
                              animate={inView ? { opacity: 1, x: 0 } : {}}
                              transition={{ delay: 0.5 + i * 0.12 + j * 0.06, duration: 0.4 }}
                              className="flex items-start gap-2.5 text-ash-600 text-sm leading-relaxed"
                            >
                              <span className="mt-2 w-1 h-1 rounded-full bg-ash-700 flex-shrink-0" />
                              {b}
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
