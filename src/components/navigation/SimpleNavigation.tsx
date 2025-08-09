import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, User, Briefcase, Mail, FileText, Calendar, Home, Eye } from 'lucide-react';
const SimpleNavigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { icon: Home, label: 'Homepage', href: '#home', description: 'Back to the top' },
    { icon: User, label: 'About', href: '#about', description: 'Learn about my background' },
    { icon: Calendar, label: 'Timeline', href: '#timeline', description: 'My educational and professional journey' },
    { icon: FileText, label: 'Services', href: '#services', description: 'What I can do for your business' },
    { icon: Briefcase, label: 'Projects', href: '#projects', description: 'See my projects & achievements' },
    { icon: Mail, label: 'Contact', href: '#contact', description: 'Get in touch with me' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Fixed Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-green-400/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-cyan-400 rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-sm">H</span>
              </div>
              <span className="text-white font-bold text-lg">Hezron Paipai</span>
              <span className="text-green-400 text-sm">Portfolio</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(item.href)}
                  className="flex items-center space-x-2 text-gray-300 hover:text-green-400 transition-colors duration-200"
                >
                  <item.icon size={16} />
                  <span>{item.label}</span>
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-gray-300 hover:text-green-400 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-gray-800 border-t border-green-400/20"
          >
            <div className="px-4 py-4 space-y-4">
              {navItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(item.href)}
                  className="w-full flex items-start space-x-3 p-3 rounded-lg bg-gray-700/50 hover:bg-gray-700 transition-colors"
                >
                  <item.icon size={20} className="text-green-400 mt-0.5" />
                  <div className="text-left">
                    <div className="text-white font-medium">{item.label}</div>
                    <div className="text-gray-400 text-sm">{item.description}</div>
                  </div>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </nav>

      {/* Spacer to prevent content from hiding behind fixed nav */}
      <div className="h-16"></div>
    </>
  );
};

export default SimpleNavigation;
