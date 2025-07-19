import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Award, Code, GraduationCap, Briefcase } from 'lucide-react';

interface TimelineItem {
  id: number;
  type: 'education' | 'work' | 'achievement';
  title: string;
  organization: string;
  location: string;
  period: string;
  description: string;
  skills?: string[];
  position: 'left' | 'right';
}

const Timeline: React.FC = () => {
  const timelineData: TimelineItem[] = [
    {
      id: 1,
      type: 'education',
      title: 'Computer System Engineering',
      organization: 'University of Technology',
      location: 'Nairobi, Kenya',
      period: '2020 - 2024',
      description: 'Specialized in AI, cybersecurity, and system architecture. Graduated with honors.',
      skills: ['AI/ML', 'Cybersecurity', 'System Design', 'Software Engineering'],
      position: 'left'
    },
    {
      id: 2,
      type: 'work',
      title: 'AI Research Intern',
      organization: 'Tech Innovation Lab',
      location: 'Remote',
      period: '2023 - Present',
      description: 'Developing AI agents and machine learning models for real-world applications.',
      skills: ['Python', 'TensorFlow', 'PyTorch', 'NLP'],
      position: 'right'
    },
    {
      id: 3,
      type: 'achievement',
      title: 'Cybersecurity Certification',
      organization: 'CompTIA Security+',
      location: 'Online',
      period: '2023',
      description: 'Achieved industry-standard cybersecurity certification with distinction.',
      skills: ['Network Security', 'Risk Assessment', 'Incident Response'],
      position: 'left'
    },
    {
      id: 4,
      type: 'work',
      title: 'Full Stack Developer',
      organization: 'Freelance Projects',
      location: 'Remote',
      period: '2022 - Present',
      description: 'Building modern web applications with focus on performance and user experience.',
      skills: ['React', 'Node.js', 'TypeScript', 'Cloud Services'],
      position: 'right'
    }
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'education':
        return <GraduationCap className="w-5 h-5" />;
      case 'work':
        return <Briefcase className="w-5 h-5" />;
      case 'achievement':
        return <Award className="w-5 h-5" />;
      default:
        return <Code className="w-5 h-5" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'education':
        return 'from-blue-500 to-cyan-500';
      case 'work':
        return 'from-green-500 to-emerald-500';
      case 'achievement':
        return 'from-purple-500 to-pink-500';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container-custom section-padding relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="glow-text">My Journey</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A timeline of my educational background, work experience, and achievements
          </p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          {/* Central Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-500 via-accent-500 to-primary-500 opacity-30"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: item.position === 'left' ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-center ${
                  item.position === 'left' ? 'justify-start' : 'justify-end'
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className={`w-12 h-12 rounded-full bg-gradient-to-r ${getTypeColor(item.type)} flex items-center justify-center text-white shadow-lg`}
                  >
                    {getIcon(item.type)}
                  </motion.div>
                </div>

                {/* Timeline Card */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className={`w-5/12 ${item.position === 'left' ? 'mr-auto pr-8' : 'ml-auto pl-8'}`}
                >
                  <div className="bg-dark-800/50 backdrop-blur-md border border-gray-700/50 rounded-xl p-6 shadow-xl">
                    {/* Header */}
                    <div className="mb-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <Calendar className="w-4 h-4 text-primary-400" />
                        <span className="text-sm text-primary-400 font-medium">{item.period}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-1">{item.title}</h3>
                      <div className="flex items-center space-x-2 text-gray-400">
                        <span className="font-medium">{item.organization}</span>
                        <span>•</span>
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-3 h-3" />
                          <span className="text-sm">{item.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 mb-4 leading-relaxed">{item.description}</p>

                    {/* Skills */}
                    {item.skills && (
                      <div className="flex flex-wrap gap-2">
                        {item.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-3 py-1 text-xs bg-primary-600/20 text-primary-400 rounded-full border border-primary-500/30"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
