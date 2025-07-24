import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, User, Building } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
  position: { x: number; y: number };
  rotation: number;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CTO",
      company: "TechCorp",
      content: "Hezron's expertise in AI development is exceptional. His innovative solutions helped us streamline our processes and achieve remarkable results.",
      rating: 5,
      avatar: "/api/placeholder/60/60",
      position: { x: -25, y: -10 },
      rotation: -5
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Security Director",
      company: "CyberShield",
      content: "Outstanding cybersecurity knowledge and implementation. Hezron's security solutions are both robust and user-friendly.",
      rating: 5,
      avatar: "/api/placeholder/60/60",
      position: { x: 25, y: 15 },
      rotation: 3
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Product Manager",
      company: "InnovateLab",
      content: "Working with Hezron was a game-changer. His full-stack development skills and attention to detail are impressive.",
      rating: 5,
      avatar: "/api/placeholder/60/60",
      position: { x: 0, y: -25 },
      rotation: 2
    }
  ];

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        size={16}
        className={`${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-600'}`}
      />
    ));
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Floating particles */}
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-yellow-400 rounded-full opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-950/5 to-transparent" />
      </div>

      <div className="container-custom section-padding relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="glow-text">Testimonials</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            What clients and colleagues say about working with me
          </p>
        </motion.div>

        {/* Floating Testimonial Cards */}
        <div className="relative h-96 lg:h-[500px]">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="absolute floating-card"
              style={{
                left: `${50 + testimonial.position.x}%`,
                top: `${50 + testimonial.position.y}%`,
                transform: `translate(-50%, -50%) rotate(${testimonial.rotation}deg)`,
              }}
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              whileInView={{
                opacity: 1,
                scale: 1,
                y: 0,
                rotate: testimonial.rotation,
              }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
              }}
              whileHover={{
                scale: 1.05,
                rotate: testimonial.rotation + 2,
                z: 20,
                transition: { duration: 0.3 }
              }}
            >
              <div className="w-80 bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-md border border-gray-700/50 rounded-xl p-6 shadow-2xl glow-box">
                {/* Quote Icon */}
                <div className="flex justify-between items-start mb-4">
                  <Quote className="w-8 h-8 text-primary-400 opacity-50" />
                  <div className="flex space-x-1">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>

                {/* Content */}
                <p className="text-gray-300 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>

                {/* Author Info */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <div className="flex items-center space-x-2 text-sm text-gray-400">
                      <span>{testimonial.role}</span>
                      <span>•</span>
                      <div className="flex items-center space-x-1">
                        <Building className="w-3 h-3" />
                        <span>{testimonial.company}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating particles in card */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-yellow-400 rounded-full opacity-60"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      y: [0, -15, 0],
                      opacity: [0.3, 1, 0.3],
                    }}
                    transition={{
                      duration: 2 + Math.random(),
                      repeat: Infinity,
                      delay: Math.random() * 2,
                    }}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-20"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-400 mb-2">100%</div>
            <div className="text-gray-400">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent-400 mb-2">15+</div>
            <div className="text-gray-400">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-400 mb-2">5+</div>
            <div className="text-gray-400">Technologies Mastered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent-400 mb-2">24/7</div>
            <div className="text-gray-400">Support Available</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
