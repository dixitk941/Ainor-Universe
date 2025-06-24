import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Typewriter from 'typewriter-effect';
import { Link } from 'react-router-dom';

import Section from '../layout/Section';
import Button from '../ui/Button';

const HeroSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const controls = useAnimation();
  const [hovered, setHovered] = useState(false);
  
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8,
      },
    },
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };
  
  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };
  
  const highlightVariants = {
    initial: { backgroundPosition: "0% 0%" },
    animate: { 
      backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
      transition: { 
        duration: 10, 
        repeat: Infinity,
        ease: "linear" 
      }
    }
  };

  return (    <Section 
      id="hero" 
      className="min-h-[90vh] flex items-center relative overflow-hidden"
      bgColor="bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50"
      spacing="py-12 md:py-28"
    >      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Background shapes - visible on both mobile and desktop */}
        <motion.div 
          className="absolute -top-40 -left-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 z-0"
          animate={{
            x: [0, 10, 0],
            y: [0, 15, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute -bottom-40 -right-40 w-80 h-80 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 z-0"
          animate={{
            x: [0, -10, 0],
            y: [0, -15, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        
        {/* Mobile floating elements - only visible on mobile */}
        <motion.div 
          className="absolute top-10 right-10 w-16 h-16 bg-blue-400 rounded-full filter blur-xl opacity-30 z-0 md:hidden"
          animate={{
            y: [0, -15, 0],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-20 left-5 w-20 h-20 bg-indigo-500 rounded-full filter blur-xl opacity-20 z-0 md:hidden"
          animate={{
            y: [0, 15, 0],
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        
        {/* Content Column */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="max-w-xl relative z-10"
        >
          <motion.div
            className="absolute -z-10 inset-0 overflow-hidden"
            variants={itemVariants}
          >
            <div className="w-full h-full opacity-10">
              {Array.from({ length: 10 }).map((_, index) => (
                <div 
                  key={index}
                  className="absolute h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"
                  style={{ 
                    top: `${Math.random() * 100}%`,
                    left: 0,
                    width: '100%',
                    opacity: Math.random() * 0.3 + 0.1,
                    transform: `rotate(${Math.random() * 5 - 2.5}deg)`,
                    filter: 'blur(1px)'
                  }}
                />
              ))}
            </div>
          </motion.div>
        
          <motion.p 
            variants={itemVariants}
            className="inline-block px-4 py-1 mb-6 bg-blue-50 text-blue-600 font-semibold rounded-full border border-blue-100 shadow-sm"
          >
            Digital Solutions for Modern Businesses
          </motion.p>
          
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
          >
            We Build
            <span className="block mt-2">
              <motion.span 
                className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 inline-block"
                animate={{
                  backgroundPosition: ['0% center', '100% center', '0% center'],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              >
                <Typewriter
                  options={{
                    strings: [
                      'Innovative Websites',
                      'Powerful Applications',
                      'Digital Experiences',
                      'Business Solutions'
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 70,
                    deleteSpeed: 40,
                  }}
                />
              </motion.span>
            </span>
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg text-gray-600 mb-8 leading-relaxed"
          >
            Transform your digital presence with our expert team. We deliver 
            <motion.span 
              className="font-medium text-blue-800 mx-1"
              animate={{ opacity: [1, 0.8, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              cutting-edge solutions
            </motion.span> 
            that help your business thrive in the digital world.
          </motion.p>
          
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap gap-4"
          >
            <Button 
              variant="primary" 
              size="lg"
              as={Link}
              to="/contact"
              className="group relative overflow-hidden shadow-lg transition-all hover:shadow-blue-500/30 hover:-translate-y-1"
            >
              <span className="relative z-10">Get Started</span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 transition-all duration-300 group-hover:scale-105"></span>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              as={Link}
              to="/services"
              className="relative overflow-hidden transition-all hover:-translate-y-1 hover:shadow-md hover:shadow-blue-500/10 group"
            >
              <span className="relative z-10">Our Services</span>
              <span className="absolute bottom-0 left-0 h-[2px] w-full bg-blue-500 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
            </Button>
          </motion.div>
        </motion.div>
        
        {/* Image Column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hidden md:block relative z-10"
          whileHover={{ scale: 1.02 }}
          onHoverStart={() => setHovered(true)}
          onHoverEnd={() => setHovered(false)}
        >          
          <div className="relative overflow-hidden rounded-xl shadow-2xl">
            {/* Animated border */}
            <motion.div 
              className="absolute -inset-[2px] rounded-xl z-20 pointer-events-none"
              initial={{ background: "linear-gradient(90deg, rgba(59,130,246,0) 0%, rgba(59,130,246,0) 100%)" }}
              animate={{ 
                background: ["linear-gradient(0deg, rgba(59,130,246,0) 0%, rgba(59,130,246,0.2) 50%, rgba(59,130,246,0) 100%)",
                             "linear-gradient(90deg, rgba(59,130,246,0) 0%, rgba(59,130,246,0.2) 50%, rgba(59,130,246,0) 100%)",
                             "linear-gradient(180deg, rgba(59,130,246,0) 0%, rgba(59,130,246,0.2) 50%, rgba(59,130,246,0) 100%)",
                             "linear-gradient(270deg, rgba(59,130,246,0) 0%, rgba(59,130,246,0.2) 50%, rgba(59,130,246,0) 100%)",
                             "linear-gradient(0deg, rgba(59,130,246,0) 0%, rgba(59,130,246,0.2) 50%, rgba(59,130,246,0) 100%)"]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />
            
            {/* Decorative elements */}
            <motion.div 
              className="absolute -top-4 -left-4 w-24 h-24 bg-blue-100 rounded-full opacity-60 z-10"
              animate={floatingAnimation}
            />
            <motion.div 
              className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-200 rounded-full opacity-60 z-10"
              animate={{
                ...floatingAnimation,
                transition: { ...floatingAnimation.transition, delay: 1.5 }
              }}
            />
            
            {/* Tech pattern overlay */}
            <div className="absolute inset-0 z-20 mix-blend-overlay opacity-20 pointer-events-none">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>
            
            {/* Main image with fallback */}            
            <motion.img 
              src="https://images.unsplash.com/photo-1618761714954-0b8cd0026356?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Digital Solutions Visualization" 
              className="w-full h-[450px] object-cover relative z-0 transition-all duration-700"
              loading="lazy"
              animate={{ scale: hovered ? 1.05 : 1 }}
              transition={{ duration: 0.5 }}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
              }}            
            />
            
            {/* Overlay gradient for better text visibility if needed */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/30 to-transparent z-0"></div>
            
            {/* Interactive elements */}
            <motion.div 
              className="absolute bottom-5 right-5 flex space-x-2 z-30"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              {[1, 2, 3].map((i) => (
                <motion.div 
                  key={i}
                  className="w-3 h-3 rounded-full bg-white/70"
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    delay: i * 0.3,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default HeroSection;
