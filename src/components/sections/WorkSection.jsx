import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import FloatingElements from '../ui/FloatingElements';

// Color palette: Dark (#1a1a1a), Light (#f5f5f5), Accent (indigo-500)

const projects = [
  {
    id: 1,
    title: 'Sttrika E-commerce',
    category: 'Web Development',
    description: 'A comprehensive e-commerce platform for fashion and lifestyle products.',
    image: 'https://images.unsplash.com/photo-1541462608143-67571c6738dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: 'https://sttrika.com',
  },
  {
    id: 2,
    title: 'GoForCab',
    category: 'Mobile Development',
    description: 'Complete mobility solution - Android, iOS apps, admin panel and driver app.',
    image: 'https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: 'https://goforcab.com',
  },
  {
    id: 3,
    title: 'HiiHive',
    category: 'Web Application',
    description: 'A student platform where collaboration, leadership, and learning thrive.',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: 'https://hiihive.vercel.app',
  },
  {
    id: 4,
    title: 'HB Web',
    category: 'E-commerce',
    description: 'Modern e-commerce solution with advanced features and seamless UX.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: 'https://hbweb.vercel.app',
  },
];

const WorkSection = () => {
  // Stagger animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15
      }
    }
  };

  return (
    <section id="work" className="py-20 md:py-32 relative overflow-hidden">
      {/* Floating 3D Elements - Portfolio variant */}
      <FloatingElements variant="portfolio" />
      
      {/* Decorative connecting arrows - project flow */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Project connection network */}
        <svg className="absolute bottom-20 left-10 w-[180px] h-[180px] opacity-[0.08]" viewBox="0 0 180 180">
          {/* Center hub */}
          <circle cx="90" cy="90" r="12" fill="#6366f1" />
          {/* Connecting arrows radiating out */}
          <motion.g
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: '90px 90px' }}
          >
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
              <g key={i} transform={`rotate(${angle} 90 90)`}>
                <line x1="90" y1="90" x2="90" y2="25" stroke="#6366f1" strokeWidth="2" />
                <polygon points="85,32 90,18 95,32" fill="#6366f1" />
              </g>
            ))}
          </motion.g>
        </svg>

        {/* Bidirectional arrow - right side */}
        <motion.svg
          className="absolute top-32 right-16 w-20 h-[200px] opacity-[0.1]"
          viewBox="0 0 60 200"
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <line x1="30" y1="20" x2="30" y2="180" stroke="#6366f1" strokeWidth="2.5" />
          <polygon points="23,25 30,8 37,25" fill="#6366f1" />
          <polygon points="23,175 30,192 37,175" fill="#6366f1" />
          {/* Middle connectors */}
          <circle cx="30" cy="70" r="5" fill="#6366f1" />
          <circle cx="30" cy="130" r="5" fill="#6366f1" />
        </motion.svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 text-indigo-500 rounded-full mb-6 border border-indigo-100"
          >
            <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
            <span className="font-semibold text-sm">Our Work</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#1a1a1a]"
          >
            Featured
            <span className="block mt-2 text-indigo-500">
              Projects
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Real projects, real results. See how we've helped businesses grow.
          </motion.p>
        </div>

        {/* Project Showcase - Cards only */}
        <motion.div 
          className="grid md:grid-cols-2 gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300"
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              {/* Project Image */}
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              {/* Project Info */}
              <div className="p-6">
                <span className="text-xs font-semibold text-indigo-500 uppercase tracking-wide">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-[#1a1a1a] mt-2 mb-2 group-hover:text-indigo-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm">{project.description}</p>
                
                <div className="mt-4 flex items-center gap-2 text-indigo-500 text-sm font-medium">
                  View Project
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Link to="/portfolio">
            <motion.button 
              className="px-8 py-4 bg-[#1a1a1a] text-white rounded-full font-semibold hover:bg-gray-800 transition-colors inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Projects
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkSection;
