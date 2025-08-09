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
}

const Timeline: React.FC = () => {
  const timelineData: TimelineItem[] = [
    {
      id: 1,
      type: 'education',
      title: 'BSc. Computer Systems Engineering',
      organization: 'University of Kirinyaga, Nairobi',
      location: 'Nairobi, Kenya',
      period: '2020 – 2024',
      description: 'Graduated with Honors. Specialized in Artificial Intelligence (AI), Cybersecurity, and System Architecture & Design.',
      skills: ['AI/ML', 'Cybersecurity', 'System Design', 'Software Engineering', 'Algorithms', 'Embedded Systems']
    },
    {
      id: 2,
      type: 'work',
      title: 'Remote Software Engineer (Contract)',
      organization: 'Fiverr & Outlier Aligner',
      location: 'Remote',
      period: '2023 – Present',
      description: 'Delivering full-stack web development solutions for global clients. Focused on scalability, clean architecture, and performance.',
      skills: ['React', 'Node.js', 'TypeScript', 'MongoDB', 'REST APIs', 'AWS', 'Git', 'CI/CD', 'Agile']
    },
    {
      id: 3,
      type: 'work',
      title: 'AI Research Intern',
      organization: 'Tech Innovation Lab',
      location: 'Remote',
      period: '2023 – Present',
      description: 'Contributed to AI agent development, machine learning model training, and real-world AI implementation.',
      skills: ['Python', 'TensorFlow', 'PyTorch', 'Natural Language Processing (NLP)', 'Data Engineering', 'Experimentation']
    },
    {
      id: 4,
      type: 'achievement',
      title: 'Cybersecurity Certification',
      organization: 'CompTIA Security+',
      location: 'Online',
      period: '2024',
      description: 'Passed with distinction. Deep understanding of securing enterprise systems, risk management, and incident response.',
      skills: ['Network Security', 'Vulnerability Management', 'Risk Assessment', 'SOC Operations', 'Threat Detection']
    },
    {
      id: 5,
      type: 'achievement',
      title: 'Cisco Networking & Security Training',
      organization: 'Cisco Certified Training',
      location: 'Online',
      period: '2024',
      description: 'Completed hands-on training in network configuration, cyber defense, and secure communication protocols.',
      skills: ['Cisco IOS', 'Network Protocols', 'Routing & Switching', 'Firewall Configuration', 'Intrusion Prevention', 'VPN']
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
        return 'text-blue-400';
      case 'work':
        return 'text-green-400';
      case 'achievement':
        return 'text-purple-400';
      default:
        return 'text-gray-400';
    }
  };

  const getTypeBgColor = (type: string) => {
    switch (type) {
      case 'education':
        return 'bg-blue-500/20';
      case 'work':
        return 'bg-green-500/20';
      case 'achievement':
        return 'bg-purple-500/20';
      default:
        return 'bg-gray-500/20';
    }
  };

  return (
    <section id="timeline" className="py-20 relative">
      <div className="container-custom section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            My <span className="glow-text">Journey</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A timeline of my educational background, work experience, and achievements
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary-500/30 to-accent-500/30"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                {/* Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-dark-800 border-2 border-primary-500 flex items-center justify-center z-10">
                  <div className={`w-3 h-3 rounded-full ${getTypeBgColor(item.type)}`}></div>
                </div>

                {/* Timeline Card */}
                <div className={`glass-effect rounded-xl p-6 shadow-lg ${index % 2 === 0 ? 'md:mr-auto md:pr-8 md:w-5/12 ml-8 md:ml-0' : 'md:ml-auto md:pl-8 md:w-5/12 mr-8 md:mr-0 md:text-right'}`}>
                  {/* Header */}
                  <div className="mb-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className={`p-2 rounded-lg ${getTypeBgColor(item.type)} ${getTypeColor(item.type)}`}>
                        {getIcon(item.type)}
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4 text-primary-400" />
                        <span className="text-sm text-primary-400 font-medium">{item.period}</span>
                      </div>
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
                    <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'justify-start' : 'md:justify-end'}`}>
                      {item.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 text-xs bg-dark-700 text-gray-300 rounded-full border border-gray-600"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
