import React, { useEffect, useState, Suspense } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import { ChevronDown, Download, ExternalLink } from 'lucide-react';
import ParticleField from './3D/ParticleField';
import FloatingGeometry from './3D/FloatingGeometry';
import InteractiveElements from './3D/InteractiveElements';
import LoadingFallback from './3D/LoadingFallback';
import PerformanceOptimizer from './3D/PerformanceOptimizer';

const Hero3D: React.FC = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  
  const roles = [
    'Computer System Engineer',
    'AI Developer & Researcher',
    'Cybersecurity Expert',
    'Full Stack Developer',
    'AI Agents Specialist'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [roles.length]);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1,
      });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas
          dpr={[1, 2]}
          performance={{ min: 0.5 }}
          gl={{ 
            antialias: false, 
            alpha: true,
            powerPreference: "high-performance"
          }}
        >
          <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={75} />
          
          {/* Lighting */}
          <ambientLight intensity={0.2} />
          <pointLight position={[10, 10, 10]} intensity={0.6} color="#0ea5e9" />
          <pointLight position={[-10, -10, -10]} intensity={0.4} color="#d946ef" />
          <directionalLight position={[0, 5, 5]} intensity={0.3} color="#06b6d4" />
          
          <Suspense fallback={null}>
            {/* Simplified Particle Field */}
            <ParticleField count={1000} />

            {/* Floating Geometric Shapes */}
            <FloatingGeometry />
          </Suspense>
        </Canvas>
      </div>

      <div className="container-custom section-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-2"
            >
              <p className="text-primary-400 text-lg font-medium">👋 Hey there! I'm</p>
              <h1 className="text-5xl lg:text-7xl font-bold">
                <span className="glow-text">Hezron</span>
                <br />
                <span className="text-white">Paipai</span>
              </h1>
            </motion.div>

            {/* Animated Role */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="h-16 flex items-center"
            >
              <span className="text-xl lg:text-2xl text-gray-300 mr-2">I'm a</span>
              <motion.span
                key={currentRole}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-xl lg:text-2xl font-semibold bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent"
              >
                {roles[currentRole]}
              </motion.span>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-lg text-gray-400 leading-relaxed max-w-lg"
            >
              Passionate about pushing the boundaries of technology through{' '}
              <span className="text-primary-400 font-medium">AI development</span>,{' '}
              <span className="text-accent-400 font-medium">cybersecurity</span>, and{' '}
              <span className="text-primary-400 font-medium">innovative web solutions</span>.
              Currently diving deep into AI agents development and building intelligent systems.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="btn-primary group">
                <span className="flex items-center space-x-2">
                  <span>Download CV</span>
                  <Download size={18} className="group-hover:animate-bounce" />
                </span>
              </button>
              <button 
                onClick={scrollToAbout}
                className="btn-secondary group"
              >
                <span className="flex items-center space-x-2">
                  <span>View My Work</span>
                  <ExternalLink size={18} className="group-hover:rotate-45 transition-transform" />
                </span>
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="grid grid-cols-3 gap-6 pt-8"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-400">3+</div>
                <div className="text-sm text-gray-500">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent-400">5+</div>
                <div className="text-sm text-gray-500">Technologies</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-400">∞</div>
                <div className="text-sm text-gray-500">Possibilities</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Enhanced with 3D */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Profile Image Container with 3D Effects */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden cyber-border bg-gradient-to-br from-primary-500/10 to-accent-500/10 backdrop-blur-sm"
              style={{
                transform: `rotateY(${mousePosition.x * 5}deg) rotateX(${mousePosition.y * 5}deg)`,
              }}
            >
              {/* Placeholder for profile image */}
              <div className="w-full h-full bg-gradient-to-br from-primary-600/20 to-accent-600/20 flex items-center justify-center">
                <div className="w-32 h-32 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center">
                  <span className="text-4xl font-bold text-white">HP</span>
                </div>
              </div>
              
              {/* Overlay Effects */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900/50 to-transparent" />
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            onClick={scrollToAbout}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center space-y-2 text-gray-400 hover:text-primary-400 transition-colors"
          >
            <span className="text-sm">Scroll Down</span>
            <ChevronDown size={20} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero3D;
