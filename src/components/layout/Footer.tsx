import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/TechVenom',
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/hezron-paipai-92013a264/',
      label: 'LinkedIn'
    },
    {
      icon: Twitter,
      href: 'https://twitter.com',
      label: 'Twitter'
    }
  ];

  return (
    <footer className="bg-gray-900/95 backdrop-blur-sm border-t border-green-400/20 fixed bottom-0 left-0 right-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
          {/* Brand */}
          <div className="flex items-center justify-center md:justify-start space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-cyan-400 rounded-lg flex items-center justify-center">
              <span className="text-black font-bold text-sm">H</span>
            </div>
            <span className="text-white font-bold text-lg">Hezron Paipai</span>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-gray-400 hover:text-green-400 transition-colors duration-300"
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
          
          {/* Contact and Copyright */}
          <div className="flex flex-col items-center md:items-end justify-center">
            <a 
              href="mailto:phezron65@gmail.com" 
              className="text-gray-400 hover:text-green-400 transition-colors duration-300 text-sm flex items-center space-x-1 mb-1"
            >
              <Mail size={14} />
              <span>phezron65@gmail.com</span>
            </a>
            <p className="text-gray-500 text-sm">
              © {currentYear} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
