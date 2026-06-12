"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Send, Github, Linkedin, Mail, ArrowUpRight, Copy, Check } from 'lucide-react';

const Contact: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => setStatus('sent'), 1500);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('phezron65@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const ease = [0.16, 1, 0.3, 1];

  const socials = [
    { icon: Github, label: 'GitHub', href: 'https://github.com/TechVenom', handle: '@TechVenom' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://ke.linkedin.com/in/hezron-paipai-92013a264', handle: 'Hezron Paipai' },
    { icon: Mail, label: 'Email', href: 'mailto:phezron65@gmail.com', handle: 'phezron65@gmail.com' },
  ];

  return (
    <section id="contact" className="relative py-28 overflow-hidden" ref={ref}>
      {/* Background accent */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-black/[0.006] rounded-full blur-[150px] pointer-events-none" />

      <div className="section-container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: ease as any }}
          className="mb-16"
        >
          <p className="section-label mb-4">Connect</p>
          <h2 className="section-heading mb-4">Get in Touch</h2>
          <p className="text-ash-600 max-w-lg text-base leading-relaxed">
            Open to collaboration on AI systems, full-stack projects, and security research.
            Let&apos;s build something meaningful.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: ease as any, delay: 0.15 }}
            className="space-y-5"
          >
            {/* Email highlight card */}
            <div className="rounded-2xl p-6 border border-black/[0.06] bg-black/[0.02] group hover:border-black/[0.12] transition-all duration-500">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-black/40 animate-pulse" />
                <span className="text-[11px] font-mono text-ash-600 uppercase tracking-widest">Currently Available</span>
              </div>
              <p className="text-ash-500 text-sm leading-relaxed mb-5">
                I&apos;m available for freelance projects, contract work, and full-time positions
                involving <span className="text-ash-200">AI engineering</span>,{' '}
                <span className="text-ash-200">full-stack development</span>, and{' '}
                <span className="text-ash-200">cybersecurity research</span>.
              </p>

              {/* Email copy row */}
              <button
                onClick={copyEmail}
                className="flex items-center gap-3 w-full p-3 rounded-xl bg-black/[0.03] border border-black/[0.06] hover:border-black/[0.12] hover:bg-black/[0.05] transition-all duration-300 group/email"
              >
                <Mail size={15} className="text-ash-600" />
                <span className="text-ash-300 text-sm font-mono flex-1 text-left">phezron65@gmail.com</span>
                {copied ? (
                  <Check size={14} className="text-ash-300" />
                ) : (
                  <Copy size={14} className="text-ash-700 group-hover/email:text-ash-400 transition-colors" />
                )}
              </button>
            </div>

            {/* Social links */}
            <div className="space-y-2">
              {socials.map((social, i) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -15 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.08, duration: 0.5, ease: ease as any }}
                  className="flex items-center justify-between p-4 rounded-xl border border-black/[0.04] bg-black/[0.01] hover:border-black/[0.1] hover:bg-black/[0.025] transition-all duration-300 group"
                >
                  <div className="flex items-center gap-3">
                    <social.icon size={16} className="text-ash-600 group-hover:text-ash-300 transition-colors" />
                    <div>
                      <p className="text-ash-400 text-sm font-medium group-hover:text-black transition-colors">{social.handle}</p>
                      <p className="text-ash-800 text-[10px] font-mono uppercase tracking-wider">{social.label}</p>
                    </div>
                  </div>
                  <ArrowUpRight size={14} className="text-ash-800 group-hover:text-ash-400 transition-all opacity-0 group-hover:opacity-100" />
                </motion.a>
              ))}
            </div>

            {/* Resume link */}
            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.5, ease: ease as any }}
              className="flex items-center justify-between p-4 rounded-xl border border-black/[0.06] bg-black/[0.02] hover:border-black/[0.12] hover:bg-black/[0.04] transition-all duration-300 group"
            >
              <div>
                <p className="text-ash-300 text-sm font-medium group-hover:text-black transition-colors">Download Resume</p>
                <p className="text-ash-800 text-[10px] mt-0.5 font-mono uppercase tracking-wider">PDF Document</p>
              </div>
              <ArrowUpRight size={16} className="text-ash-700 group-hover:text-ash-400 transition-all" />
            </motion.a>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: ease as any, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="rounded-2xl p-7 sm:p-8 border border-black/[0.06] bg-black/[0.02] space-y-5 relative overflow-hidden">
              {/* Success Overlay */}
              {status === 'sent' && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }} 
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute inset-0 z-20 bg-noir-950/98 backdrop-blur-md flex flex-col items-center justify-center text-center p-8"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.1, type: 'spring', stiffness: 200, damping: 15 }}
                    className="w-16 h-16 rounded-full border border-black/15 flex items-center justify-center mb-5"
                  >
                    <Check size={28} className="text-ash-300" />
                  </motion.div>
                  <h3 className="font-bold text-xl text-black mb-2">Message Sent</h3>
                  <p className="text-ash-600 text-sm">Thanks for reaching out. I&apos;ll get back to you shortly.</p>
                  <button 
                    type="button"
                    onClick={() => { setStatus('idle'); setFormState({ name: '', email: '', message: '' }); }}
                    className="mt-6 text-ash-500 text-sm font-medium hover:text-black transition-colors underline underline-offset-4 decoration-ash-800"
                  >
                    Send another message
                  </button>
                </motion.div>
              )}

              <div className="space-y-1.5">
                <label className="text-[11px] font-medium text-ash-600 uppercase tracking-wider ml-0.5">Name</label>
                <input
                  required
                  type="text"
                  placeholder="Your name"
                  className="input-noir"
                  value={formState.name}
                  onChange={e => setFormState({ ...formState, name: e.target.value })}
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[11px] font-medium text-ash-600 uppercase tracking-wider ml-0.5">Email</label>
                <input
                  required
                  type="email"
                  placeholder="you@company.com"
                  className="input-noir"
                  value={formState.email}
                  onChange={e => setFormState({ ...formState, email: e.target.value })}
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[11px] font-medium text-ash-600 uppercase tracking-wider ml-0.5">Message</label>
                <textarea
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="input-noir resize-none"
                  value={formState.message}
                  onChange={e => setFormState({ ...formState, message: e.target.value })}
                />
              </div>

              <button
                disabled={status === 'sending'}
                type="submit"
                className="w-full py-3.5 rounded-xl bg-black text-noir-950 font-semibold text-sm hover:bg-ash-300 transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2 group"
              >
                {status === 'sending' ? (
                  <>
                    Sending
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                      className="w-4 h-4 border-2 border-noir-950/20 border-t-noir-950 rounded-full"
                    />
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
