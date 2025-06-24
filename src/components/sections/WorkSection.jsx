import React, { useState } from 'react';
import Section from '../layout/Section';
import AnimatedImage from '../ui/AnimatedImage';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: 1,
    title: 'Sttrika E-commerce Platform',
    category: 'Web Development',
    description: 'A comprehensive e-commerce platform for fashion and lifestyle products with advanced features.',
    image: 'https://images.unsplash.com/photo-1541462608143-67571c6738dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: 'https://sttrika.com',
    accent: 'from-blue-600 to-indigo-600',
    color: 'bg-blue-500'
  },
  {
    id: 2,
    title: 'GoForCab Mobility Solution',
    category: 'Mobile Development',
    description: 'Complete package - Android apps, iOS apps, admin panel and driver app for affordable cab services.',
    image: 'https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: 'https://goforcab.com',
    accent: 'from-purple-600 to-pink-600',
    color: 'bg-purple-500'
  },
  {
    id: 3,
    title: 'HiiHive Student Platform',
    category: 'Web Application',
    description: 'A powerful student-first platform where collaboration, leadership, and learning thrive together.',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: 'https://hiihive.vercel.app',
    accent: 'from-cyan-600 to-teal-600',
    color: 'bg-teal-500'
  },
  {
    id: 4,
    title: 'HB Web E-commerce',
    category: 'E-commerce',
    description: 'Modern e-commerce solution with advanced features and seamless user experience.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: 'https://hbweb.vercel.app',
    accent: 'from-amber-600 to-orange-600',
    color: 'bg-amber-500'
  },
];

const WorkSection = () => {
  // State for active mobile tab
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Section id="work" bgColor="bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Desktop background elements - hidden on mobile */}
      <div className="absolute inset-0 pointer-events-none hidden md:block">
        <motion.div 
          className="absolute top-10 left-10 w-64 h-64 bg-indigo-50 dark:bg-indigo-900/20 rounded-full opacity-50 blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 15, 0]
          }}
          transition={{ 
            repeat: Infinity,
            duration: 20,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-20 w-80 h-80 bg-purple-50 dark:bg-purple-900/20 rounded-full opacity-30 blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [0, -15, 0]
          }}
          transition={{ 
            repeat: Infinity,
            duration: 25,
            ease: "easeInOut"
          }}
        />
      </div>
      
      {/* Mobile-specific glass morphism background - only visible on mobile */}
      <div className="absolute inset-0 md:hidden">
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-br from-indigo-500/10 to-purple-500/5 rounded-b-[50px] backdrop-blur-sm"></div>
        <motion.div 
          className="absolute top-12 right-6 w-20 h-20 rounded-full bg-gradient-to-r from-indigo-400/10 to-purple-500/10 backdrop-blur-md"
          animate={{
            scale: [1, 1.1, 1],
            y: [0, -5, 0]
          }}
          transition={{
            repeat: Infinity,
            duration: 5,
            ease: "easeInOut"
          }}
        />
      </div>
      
      <div className="relative">
        {/* Section header with modern styling */}
        <div className="text-center mb-10 md:mb-16 relative">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center space-x-2 mb-3"
          >
            <span className="w-8 h-[2px] bg-indigo-500"></span>
            <span className="text-sm font-medium uppercase tracking-widest text-indigo-600 dark:text-indigo-400">Portfolio</span>
            <span className="w-8 h-[2px] bg-indigo-500"></span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white tracking-tight"
          >
            Recent Projects
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-4 text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4 md:px-0"
          >
            Explore our latest work and see how we've helped businesses achieve their goals
          </motion.p>
        </div>
        
        {/* Desktop grid view - hidden on mobile */}
        <div className="hidden md:block">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 px-4 md:px-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1 }}
            viewport={{ once: true }}
          >
            {projects.map((project, index) => (
              <DesktopProjectCard key={project.id} project={project} index={index} />
            ))}
          </motion.div>
        </div>
        
        {/* Mobile card slider view - only visible on mobile */}
        <div className="md:hidden relative px-4">
          {/* Category pills for mobile */}
          <motion.div 
            className="flex space-x-2 overflow-x-auto pb-4 -mx-1 px-1 hide-scrollbar"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {projects.map((project, index) => (
              <motion.button
                key={`tab-${project.id}`}
                className={`whitespace-nowrap px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                  activeTab === index 
                    ? `${project.color} text-white shadow-md` 
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300'
                }`}
                onClick={() => setActiveTab(index)}
                whileTap={{ scale: 0.95 }}
              >
                {project.category}
              </motion.button>
            ))}
          </motion.div>
          
          {/* Mobile project card slider */}
          <div className="relative mt-3 pb-10">
            {projects.map((project, index) => (
              <MobileProjectCard 
                key={`mobile-${project.id}`}
                project={project}
                index={index}
                isActive={activeTab === index}
                setActiveTab={setActiveTab}
              />
            ))}
            
            {/* Progress indicator dots */}
            <div className="flex justify-center space-x-2 mt-4">
              {projects.map((_, index) => (
                <button
                  key={`indicator-${index}`}
                  className={`w-2 h-2 rounded-full transition-all ${
                    activeTab === index 
                      ? 'bg-indigo-600 w-6' 
                      : 'bg-gray-300 dark:bg-gray-700'
                  }`}
                  onClick={() => setActiveTab(index)}
                />
              ))}
            </div>
          </div>
        </div>
        
        {/* CTA Button */}
        <div className="text-center mt-10 md:mt-16 px-4 md:px-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative inline-block"
          >
            <Button 
              as={Link}
              to="/contact" 
              variant="primary" 
              size="lg" 
              className="shadow-xl shadow-indigo-500/10 relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center">
                Start Your Project
                <svg className="w-5 h-5 ml-2 -mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Button>
            
            {/* Mobile-only decorative effect */}
            <div className="absolute -bottom-4 left-0 w-full h-2 bg-gradient-to-r from-blue-600 to-indigo-600 filter blur-md md:hidden"></div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

// Desktop project card component
const DesktopProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="group perspective-1000"
    >
      <div className="relative overflow-hidden rounded-2xl shadow-xl preserve-3d transform transition-all duration-500 hover:shadow-2xl backface-hidden">
        {/* 3D Card Border Glow */}
        <div className={`absolute -inset-0.5 bg-gradient-to-r ${project.accent} rounded-2xl opacity-0 group-hover:opacity-70 blur-sm -z-10 transition-opacity duration-300`}></div>
        
        {/* Project Image with 3D Tilt */}
        <AnimatedImage
          src={project.image}
          alt={project.title}
          className="w-full aspect-video object-cover transform transition-transform duration-700"
          tiltEnable={true}
          tiltMaxAngleX={7}
          tiltMaxAngleY={7}
          glareEnable={true}
          glareMaxOpacity={0.15}
        />
        
        {/* Desktop hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/95 via-gray-900/80 to-gray-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 transform group-hover:translate-y-0 translate-y-8 transition-transform duration-500">
          {/* Category Badge */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5 + (index * 0.1) }}
            viewport={{ once: true }}
          >
            <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${project.accent} text-white mb-3 shadow-md`}>
              {project.category}
            </span>
          </motion.div>
          
          {/* Project Title with 3D Effect */}
          <h3 className="text-2xl font-bold text-white mt-2 transform group-hover:translate-z-10 transition-transform duration-300">
            {project.title}
          </h3>
          
          {/* Description */}
          <p className="text-gray-300 mt-2 transform group-hover:translate-z-5 transition-transform duration-300">
            {project.description}
          </p>
          
          {/* View Project Link with 3D Effect */}
          <motion.a 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-4 inline-block text-white font-medium relative"
            whileHover={{ scale: 1.05 }}
          >
            <span className="relative flex items-center">
              View Project
              <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r ${project.accent} group-hover:w-full transition-all duration-300`}></span>
            </span>
          </motion.a>
          
          {/* 3D Particle Effects */}
          <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute h-1 w-1 rounded-full bg-white"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -Math.random() * 20 - 10],
                  opacity: [0, 0.7, 0],
                }}
                transition={{
                  duration: 1 + Math.random(),
                  repeat: Infinity,
                  repeatType: "loop",
                  delay: Math.random() * 0.5,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>  
  );
};

// Mobile project card component with modern design
const MobileProjectCard = ({ project, index, isActive, setActiveTab }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ 
        opacity: isActive ? 1 : 0,
        scale: isActive ? 1 : 0.92,
        zIndex: isActive ? 10 : 0,
        display: isActive ? 'block' : 'none',
      }}
      transition={{ duration: 0.4 }}
      className="w-full"
    >
      <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg">
        {/* Image section */}
        <div className="relative h-48 overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover"
            loading="lazy"
          />
          
          {/* Floating category tag */}
          <div className="absolute top-4 left-4">
            <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${project.color} text-white shadow-lg`}>
              {project.category}
            </span>
          </div>
          
          {/* Decorative corner accent */}
          <svg className="absolute top-0 right-0 w-24 h-24 text-white dark:text-gray-800 opacity-40" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0,0 L100,0 L100,100 Z" fill="currentColor" />
          </svg>
        </div>
        
        {/* Content section */}
        <div className="p-5">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            {project.title}
          </h3>
          
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
            {project.description}
          </p>
          
          <div className="flex justify-between items-center">
            <a 
              href={project.link}
              target="_blank" 
              rel="noopener noreferrer"
              className={`inline-flex items-center text-sm font-semibold text-${project.color.split('-')[1]}-600 dark:text-${project.color.split('-')[1]}-400`}
            >
              View Project
              <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
            
            <div className="flex space-x-1">
              {index > 0 && (
                <button 
                  onClick={() => setActiveTab(index - 1)}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-300"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
              )}
              
              {index < projects.length - 1 && (
                <button 
                  onClick={() => setActiveTab(index + 1)}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-300"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default WorkSection;
