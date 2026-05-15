"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Send, Github, Linkedin, Mail, ShieldCheck, Terminal as TerminalIcon } from 'lucide-react';

const Contact: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    // Simulate API call
    setTimeout(() => setStatus('sent'), 1500);
  };

  const ease = [0.22, 1, 0.36, 1];

  const socials = [
    { icon: Github, label: 'GitHub', href: 'https://github.com/TechVenom', color: 'hover:text-venom-400' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://ke.linkedin.com/in/hezron-paipai-92013a264', color: 'hover:text-cyber-400' },
    { icon: Mail, label: 'ProtonMail', href: 'mailto:venomx.agent.future@proton.me', color: 'hover:text-amethyst-400' },
  ];

  return (
    <section id="contact" className="relative py-32 overflow-hidden" ref={ref}>
      <div className="section-container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: ease as any }}
          className="text-center mb-20"
        >
          <p className="section-subtitle mb-4">// secure_neural_link</p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white/90 mb-4">
            Get in <span className="text-glow-sovereign">Touch</span>
          </h2>
          <p className="text-white/30 max-w-xl mx-auto text-lg">
            Initialize a secure connection for collaboration, research, or system architecture inquiries.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left: Contact Info/Portal */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: ease as any, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="glass-strong rounded-3xl p-8 border border-white/5 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <ShieldCheck size={120} className="text-venom-500" />
              </div>
              
              <h3 className="font-display font-bold text-2xl text-white/90 mb-6">Security Clearance</h3>
              <p className="text-white/40 mb-8 leading-relaxed">
                Currently available for high-impact projects involving <span className="text-venom-400">AI orchestration</span>, 
                <span className="text-cyber-400">autonomous systems</span>, and <span className="text-amethyst-400">cybersecurity research</span>.
              </p>

              <div className="space-y-6">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-4 group/link text-white/40 ${social.color} transition-colors duration-300`}
                  >
                    <div className="w-12 h-12 rounded-xl glass border border-white/5 flex items-center justify-center group-hover/link:border-white/10 transition-all">
                      <social.icon size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-mono opacity-50 uppercase tracking-widest">{social.label}</p>
                      <p className="text-sm font-medium text-white/70 group-hover/link:text-inherit">
                        {social.label === 'ProtonMail' ? 'venomx.agent.future@proton.me' : social.label === 'GitHub' ? '@TechVenom' : 'Hezron Paipai'}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="glass rounded-2xl p-6 border border-venom-500/20">
              <div className="flex items-center gap-3 text-venom-400 font-mono text-xs mb-2">
                <TerminalIcon size={14} />
                <span>SYSTEM_STATUS: ENCRYPTED</span>
              </div>
              <p className="text-white/20 text-xs font-mono leading-loose">
                &gt; Pinging secure servers... OK<br />
                &gt; Establishing handshake... SUCCESS<br />
                &gt; Handing over to neural interface... READY
              </p>
            </div>
          </motion.div>

          {/* Right: Terminal Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: ease as any, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="glass-strong rounded-3xl p-8 sm:p-10 border border-white/5 space-y-6 relative overflow-hidden">
              {/* Form Success Overlay */}
              {status === 'sent' && (
                <motion.div 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 z-20 bg-abyss-950/90 backdrop-blur-md flex flex-col items-center justify-center text-center p-8"
                >
                  <div className="w-20 h-20 rounded-full bg-venom-500/20 border border-venom-500/40 flex items-center justify-center mb-6">
                    <Send size={32} className="text-venom-400" />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-white mb-2">Message Transmitted</h3>
                  <p className="text-white/40">Secure connection established. I'll get back to you shortly.</p>
                  <button 
                    type="button"
                    onClick={() => setStatus('idle')}
                    className="mt-8 text-venom-400 font-mono text-xs uppercase tracking-widest hover:underline"
                  >
                    Send Another Dispatch
                  </button>
                </motion.div>
              )}

              <div className="space-y-2">
                <label className="text-xs font-mono text-white/40 uppercase tracking-widest ml-1">Identity</label>
                <input
                  required
                  type="text"
                  placeholder="Subject Name / Organization"
                  className="w-full terminal-input"
                  value={formState.name}
                  onChange={e => setFormState({ ...formState, name: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono text-white/40 uppercase tracking-widest ml-1">Return Path</label>
                <input
                  required
                  type="email"
                  placeholder="comm_link@provider.com"
                  className="w-full terminal-input"
                  value={formState.email}
                  onChange={e => setFormState({ ...formState, email: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono text-white/40 uppercase tracking-widest ml-1">Transmission Data</label>
                <textarea
                  required
                  rows={5}
                  placeholder="Project briefing, architectural specs, or greetings..."
                  className="w-full terminal-input resize-none"
                  value={formState.message}
                  onChange={e => setFormState({ ...formState, message: e.target.value })}
                />
              </div>

              <button
                disabled={status === 'sending'}
                type="submit"
                className="w-full group relative px-8 py-4 rounded-2xl bg-gradient-to-r from-venom-600 to-venom-500 text-abyss-950 font-display font-semibold text-base hover:shadow-glow-venom transition-all duration-500 hover:scale-[1.02] apple-ease disabled:opacity-50"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {status === 'sending' ? 'Transmitting...' : 'Transmit Dispatch'}
                  <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </span>
              </button>
              
              <p className="text-[10px] font-mono text-white/10 text-center uppercase tracking-widest">
                End-to-end encrypted dispatch protocol v4.0.2
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
