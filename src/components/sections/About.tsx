import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Brain,
  Shield,
  Code,
  Cloud,
  Cpu,
  Lock,
  Globe,
  Zap
} from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    {
      category: 'AI & Machine Learning',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      items: [
        { name: 'Python', level: 95 },
        { name: 'TensorFlow', level: 90 },
        { name: 'PyTorch', level: 88 },
        { name: 'OpenAI APIs', level: 92 },
        { name: 'Hugging Face', level: 85 },
      ]
    },
    {
      category: 'Cybersecurity',
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      items: [
        { name: 'Penetration Testing', level: 90 },
        { name: 'Kali Linux', level: 88 },
        { name: 'Wireshark', level: 85 },
        { name: 'Metasploit', level: 82 },
        { name: 'Burp Suite', level: 87 },
      ]
    },
    {
      category: 'Web Development',
      icon: Code,
      color: 'from-blue-500 to-cyan-500',
      items: [
        { name: 'React/TypeScript', level: 93 },
        { name: 'Next.js', level: 90 },
        { name: 'Node.js', level: 88 },
        { name: 'Tailwind CSS', level: 95 },
        { name: 'JavaScript', level: 92 },
      ]
    },
    {
      category: 'Backend & Cloud',
      icon: Cloud,
      color: 'from-green-500 to-teal-500',
      items: [
        { name: 'PostgreSQL', level: 85 },
        { name: 'MongoDB', level: 82 },
        { name: 'AWS', level: 80 },
        { name: 'Docker', level: 88 },
        { name: 'Git', level: 90 },
      ]
    }
  ];

  const achievements = [
    {
      icon: Cpu,
      title: 'AI Systems Architecture',
      description: 'Designed and implemented intelligent AI agent frameworks for autonomous decision-making systems.'
    },
    {
      icon: Lock,
      title: 'Security Automation',
      description: 'Developed automated cybersecurity tools for threat detection and vulnerability assessment.'
    },
    {
      icon: Globe,
      title: 'Full-Stack Solutions',
      description: 'Built scalable web applications with modern technologies and best practices.'
    },
    {
      icon: Zap,
      title: 'Innovation Focus',
      description: 'Constantly exploring cutting-edge technologies and implementing novel solutions.'
    }
  ];

  return (
    <section id="about" className="section-padding bg-dark-800/30">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            About <span className="glow-text">Me</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            I'm a Computer System Engineer passionate about the intersection of AI, cybersecurity, and web development. 
            With expertise spanning from machine learning algorithms to penetration testing, I build secure, intelligent, 
            and scalable solutions that push the boundaries of what's possible.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skills.map((skillCategory, categoryIndex) => (
            <motion.div
              key={skillCategory.category}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="glass-effect rounded-xl p-6 card-hover"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className={`w-12 h-12 bg-gradient-to-r ${skillCategory.color} rounded-lg flex items-center justify-center`}>
                  <skillCategory.icon size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">{skillCategory.category}</h3>
              </div>
              
              <div className="space-y-4">
                {skillCategory.items.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-primary-400 text-sm font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-dark-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                        className={`h-2 bg-gradient-to-r ${skillCategory.color} rounded-full`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* 3D Skills Visualization - Temporarily Disabled */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="h-32 mb-16 flex items-center justify-center"
        >
          <div className="text-center">
            <div className="text-primary-400 text-lg font-medium mb-2">🚀 3D Skills Visualization</div>
            <p className="text-gray-400">Interactive 3D skills coming soon...</p>
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              className="glass-effect rounded-xl p-6 text-center card-hover"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <achievement.icon size={28} className="text-white" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">{achievement.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{achievement.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Personal Quote */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <div className="glass-effect rounded-xl p-8 max-w-4xl mx-auto">
            <blockquote className="text-xl lg:text-2xl text-gray-300 italic mb-4">
              "The future belongs to those who understand that AI, security, and innovation 
              are not separate domains, but interconnected pillars of technological advancement."
            </blockquote>
            <cite className="text-primary-400 font-semibold">— Hezron Paipai</cite>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
