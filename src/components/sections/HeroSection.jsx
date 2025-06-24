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
  // Mobile animations are controlled via CSS classes with responsive breakpoints

  // Variants for animations
  const mobileShapeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 15 
      }
    }
  };

  const mobilePulseVariants = {
    initial: { scale: 1, opacity: 0.5 },
    pulse: { 
      scale: [1, 1.05, 1], 
      opacity: [0.5, 0.7, 0.5],
      transition: { 
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut" 
      }
    }
  };

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
    // Animation for floating elements
  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <Section 
      id="hero" 
      className="min-h-[90vh] flex items-center relative overflow-hidden"
      bgColor="bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50"
      spacing="py-12 md:py-28"
    >
      {/* Mobile-specific animated shapes (only visible on mobile) */}
      <div className="md:hidden">
        <motion.div 
          className="absolute top-6 right-6 w-20 h-20 rounded-full bg-blue-400/10 z-0"
          variants={mobileShapeVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3 }}
        />
        <motion.div 
          className="absolute bottom-32 left-4 w-16 h-16 rounded-full bg-indigo-400/10 z-0"
          variants={mobileShapeVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.5 }}
        />
        <motion.div 
          className="absolute top-40 left-[-20px] w-14 h-14 rounded-full border border-blue-200 z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        />
        
        {/* Mobile animated grid patterns */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.div
              key={`mobile-grid-${i}`}
              className="absolute h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"
              style={{ 
                top: `${20 + i * 12}%`,
                left: 0,
                width: '100%',
              }}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 0.3, x: 0 }}
              transition={{ duration: 1.5, delay: 0.1 * i }}
            />
          ))}
        </div>
        
        {/* Mobile corner accent */}
        <svg className="absolute top-0 right-0 h-24 w-24 opacity-30 text-blue-500" viewBox="0 0 100 100">
          <motion.path 
            d="M0,0 L100,0 L100,100" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          />
        </svg>
        
        {/* Mobile floating elements */}
        <motion.div
          className="absolute bottom-20 right-6 w-10 h-10 z-0"
          animate={{
            y: [0, -10, 0],
            opacity: [0.5, 0.8, 0.5]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-blue-400/70">
            <motion.path 
              d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" 
              stroke="currentColor" 
              strokeWidth="1.5"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2 }}
            />
          </svg>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Background shapes */}
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
            className="text-3xl md:text-3xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight"
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
              className="group relative overflow-hidden shadow-lg hover:shadow-blue-500/30"
            >
              {/* Mobile pulse effect for button */}
              <motion.span 
                className="absolute inset-0 rounded-md bg-blue-400/20 md:hidden"
                variants={mobilePulseVariants}
                initial="initial"
                animate="pulse"
              />
              <span className="relative z-10">Get Started</span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 transition-all duration-300 group-hover:scale-105"></span>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              as={Link}
              to="/services"
              className="relative overflow-hidden hover:shadow-md hover:shadow-blue-500/10 group"
            >
              <span className="relative z-10">Our Services</span>
              <span className="absolute bottom-0 left-0 h-[2px] w-full bg-blue-500 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
            </Button>
          </motion.div>
          
          {/* Mobile-only image - Simplified version of desktop image */}
          <motion.div 
            className="mt-12 rounded-xl overflow-hidden shadow-xl md:hidden relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <div className="relative">
              {/* Animated border for mobile image */}
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
              
              {/* Mobile-specific decorative elements */}
              <div className="absolute inset-0 z-20 mix-blend-overlay opacity-30 pointer-events-none">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="mobile-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeWidth="0.5" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#mobile-grid)" />
                </svg>
              </div>
              
              <img 
                src="https://images.unsplash.com/photo-1618761714954-0b8cd0026356?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=70" 
                alt="Digital Solutions Visualization" 
                className="w-full h-[220px] object-cover"
                loading="lazy"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=70";
                }}            
              />
              
              {/* Overlay gradient for better text visibility */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/30 to-transparent z-0"></div>
            </div>
            
            {/* Interactive dots for mobile image */}
            <motion.div 
              className="absolute bottom-3 right-3 flex space-x-1.5 z-30"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
            >
              {[1, 2, 3].map((i) => (
                <motion.div 
                  key={`mobile-dot-${i}`}
                  className="w-2 h-2 rounded-full bg-white/80"
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
      
      {/* Mobile-only floating accent elements */}
      <motion.div 
        className="absolute bottom-12 right-0 md:hidden"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <svg width="80" height="80" viewBox="0 0 100 100" className="text-blue-500/20">
          <motion.circle 
            cx="50" 
            cy="50" 
            r="40" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 1 }}
          />
          <motion.circle 
            cx="50" 
            cy="50" 
            r="30" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 1.3 }}
          />
        </svg>
      </motion.div>
    </Section>
  );
};

export default HeroSection;
