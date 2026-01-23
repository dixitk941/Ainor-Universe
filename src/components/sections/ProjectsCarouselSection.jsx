import React, { useRef, useEffect, useState } from 'react';
import { motion, useAnimationControls } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { useEntranceAnimation } from '../ui/PageEntranceAnimation';
import { projects } from '../../data/projectsData';

// Cartoonish Material Design Project Card
const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = project.icon;
  const color = project.accentColor;
  
  // Get category display name
  const categoryNames = {
    web: 'Web App',
    mobile: 'Mobile App', 
    ecommerce: 'E-Commerce'
  };

  return (
    <motion.div
      className="flex-shrink-0 w-[320px] md:w-[360px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <div 
        className="relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
        style={{
          boxShadow: isHovered 
            ? `0 20px 40px -10px ${color}40, 0 10px 20px -5px rgba(0,0,0,0.1)` 
            : '0 10px 30px -10px rgba(0,0,0,0.15)',
        }}
      >
        {/* Cartoon-style Top Border Wave */}
        <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${project.bgGradient}`} />
        
        {/* Image Container with Cartoon Frame */}
        <div className="relative h-44 overflow-hidden">
          {/* Wavy Background Decoration */}
          <svg 
            className="absolute -bottom-1 left-0 right-0 z-10" 
            viewBox="0 0 400 40" 
            fill="white"
            preserveAspectRatio="none"
          >
            <path d="M0 40 Q 50 10, 100 25 T 200 20 T 300 30 T 400 15 L 400 40 Z" />
          </svg>
          
          {/* Project Image */}
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ duration: 0.4 }}
          />
          
          {/* Overlay Gradient */}
          <div className={`absolute inset-0 bg-gradient-to-t ${project.bgGradient} opacity-30`} />
          
          {/* Floating Category Badge - Cartoon Style */}
          <motion.div
            className="absolute top-4 left-4 z-20"
            animate={{ 
              y: isHovered ? -2 : 0,
              rotate: isHovered ? -3 : 0 
            }}
            transition={{ type: 'spring', stiffness: 400 }}
          >
            <div 
              className="px-3 py-1.5 rounded-full text-white text-xs font-bold shadow-lg flex items-center gap-1.5"
              style={{ 
                backgroundColor: color,
                boxShadow: `0 4px 15px ${color}60`,
              }}
            >
              <Icon className="text-sm" />
              {categoryNames[project.category] || project.category}
            </div>
          </motion.div>
          
          {/* Floating Action Buttons - Cartoon Style */}
          <motion.div
            className="absolute top-4 right-4 z-20 flex gap-2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : 20 }}
            transition={{ duration: 0.3 }}
          >
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, rotate: -10 }}
              whileTap={{ scale: 0.9 }}
              className="w-9 h-9 bg-white rounded-xl shadow-lg flex items-center justify-center text-gray-700 hover:text-black"
            >
              <FaExternalLinkAlt className="text-sm" />
            </motion.a>
          </motion.div>
        </div>
        
        {/* Content Area - Cartoon Style */}
        <div className="p-5 pt-3 relative">
          {/* Decorative Dots */}
          <div className="absolute top-2 right-4 flex gap-1">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: `${color}40` }}
                animate={{ 
                  scale: isHovered ? [1, 1.3, 1] : 1,
                }}
                transition={{ 
                  duration: 0.4, 
                  delay: i * 0.1,
                  repeat: isHovered ? Infinity : 0,
                  repeatDelay: 0.5
                }}
              />
            ))}
          </div>
          
          {/* Title with Cartoon Underline */}
          <div className="relative mb-2">
            <h3 className="text-lg font-bold text-gray-900 pr-12">
              {project.title}
            </h3>
            <motion.div
              className="absolute -bottom-0.5 left-0 h-1 rounded-full"
              style={{ backgroundColor: `${color}30` }}
              initial={{ width: 0 }}
              animate={{ width: isHovered ? '60%' : '30%' }}
              transition={{ duration: 0.3 }}
            />
          </div>
          
          {/* Description */}
          <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">
            {project.shortDesc || project.description}
          </p>
          
          {/* Tech Tags - Cartoon Pill Style */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, i) => (
              <motion.span
                key={tag}
                className="px-3 py-1 text-xs font-semibold rounded-full border-2"
                style={{ 
                  borderColor: `${color}40`,
                  color: color,
                  backgroundColor: `${color}08`,
                }}
                whileHover={{ 
                  scale: 1.08, 
                  backgroundColor: `${color}15`,
                  y: -2
                }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                {tag}
              </motion.span>
            ))}
          </div>
          
          {/* Bottom Decorative Element */}
          <motion.div
            className="absolute bottom-3 right-4 opacity-10"
            animate={{ rotate: isHovered ? 360 : 0 }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          >
            <Icon className="text-4xl" style={{ color: color }} />
          </motion.div>
        </div>
        
        {/* Cartoon Corner Decoration */}
        <div 
          className="absolute bottom-0 right-0 w-16 h-16 opacity-5"
          style={{
            background: `radial-gradient(circle at bottom right, ${color}, transparent 70%)`,
          }}
        />
      </div>
    </motion.div>
  );
};

const ProjectsCarouselSection = () => {
  const { triggerAnimation } = useEntranceAnimation();
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef(null);
  const controls = useAnimationControls();
  
  // Duplicate projects for seamless loop
  const duplicatedProjects = [...projects, ...projects, ...projects];
  
  // Calculate total width for animation
  const cardWidth = 380; // Card width + gap
  const totalWidth = projects.length * cardWidth;
  
  useEffect(() => {
    if (!triggerAnimation) return;
    
    const animate = async () => {
      await controls.start({
        x: -totalWidth,
        transition: {
          duration: 30,
          ease: 'linear',
          repeat: Infinity,
        }
      });
    };
    
    if (!isPaused) {
      animate();
    } else {
      controls.stop();
    }
  }, [isPaused, controls, totalWidth, triggerAnimation]);

  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      animate={triggerAnimation ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="bg-white rounded-3xl p-6 md:p-10 shadow-soft relative overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-purple-100 to-transparent rounded-full blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-blue-100 to-transparent rounded-full blur-3xl opacity-50 translate-x-1/2 translate-y-1/2" />
      
      {/* Floating Shapes - Cartoon Style */}
      <motion.div
        className="absolute top-20 right-20 w-8 h-8 rounded-lg bg-gradient-to-br from-yellow-300 to-orange-400 opacity-20"
        animate={{ 
          rotate: [0, 90, 180, 270, 360],
          y: [0, -10, 0, 10, 0]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-40 left-10 w-6 h-6 rounded-full bg-gradient-to-br from-pink-300 to-rose-400 opacity-20"
        animate={{ 
          scale: [1, 1.2, 1],
          x: [0, 10, 0]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      />
      
      {/* Section Header */}
      <div className="relative z-10 text-center mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={triggerAnimation ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-100 px-4 py-2 rounded-full mb-4"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500" />
          </span>
          <span className="text-sm font-semibold text-purple-600">Our Portfolio</span>
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={triggerAnimation ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-3"
        >
          Projects We've{' '}
          <span className="relative">
            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Crafted
            </span>
            <svg className="absolute -bottom-1 left-0 w-full" height="8" viewBox="0 0 100 8">
              <motion.path
                d="M0 4 Q 25 8, 50 4 T 100 4"
                fill="none"
                stroke="url(#gradient)"
                strokeWidth="3"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={triggerAnimation ? { pathLength: 1 } : { pathLength: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#9333EA" />
                  <stop offset="100%" stopColor="#6366F1" />
                </linearGradient>
              </defs>
            </svg>
          </span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={triggerAnimation ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-gray-500 max-w-xl mx-auto"
        >
          From startups to enterprises, we've delivered impactful digital solutions
        </motion.p>
      </div>
      
      {/* Carousel Container */}
      <div 
        ref={containerRef}
        className="relative overflow-hidden py-4"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Scrolling Cards */}
        <motion.div
          animate={controls}
          className="flex gap-6"
          style={{ width: 'max-content' }}
        >
          {duplicatedProjects.map((project, index) => (
            <ProjectCard 
              key={`${project.id}-${index}`} 
              project={project} 
              index={index}
            />
          ))}
        </motion.div>
      </div>
      
      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={triggerAnimation ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="relative z-10 text-center mt-8"
      >
        <motion.a
          href="/portfolio"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-xl transition-shadow"
          style={{ boxShadow: '0 10px 30px -10px rgba(99, 102, 241, 0.5)' }}
        >
          View All Projects
          <motion.span
            animate={{ x: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <FaExternalLinkAlt className="text-sm" />
          </motion.span>
        </motion.a>
      </motion.div>
    </motion.section>
  );
};

export default ProjectsCarouselSection;
