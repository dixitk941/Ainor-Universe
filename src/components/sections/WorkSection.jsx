import React from 'react';
import Section from '../layout/Section';
import AnimatedImage from '../ui/AnimatedImage';
import { motion } from 'framer-motion';
import Button from '../ui/Button';

const projects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    category: 'Web Development',
    description: 'A full-featured online store with inventory management and payment integration.',
    image: 'https://images.unsplash.com/photo-1541462608143-67571c6738dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: '#',
    accent: 'from-blue-600 to-indigo-600'
  },
  {
    id: 2,
    title: 'Fitness Mobile App',
    category: 'Mobile Development',
    description: 'A cross-platform mobile application for tracking fitness goals and workouts.',
    image: 'https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: '#',
    accent: 'from-purple-600 to-pink-600'
  },
  {
    id: 3,
    title: 'Business Dashboard',
    category: 'Web Application',
    description: 'A comprehensive analytics dashboard for real-time business intelligence.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: '#',
    accent: 'from-cyan-600 to-teal-600'
  },
  {
    id: 4,
    title: 'Social Networking Platform',
    category: 'Web & Mobile',
    description: 'A community platform with real-time messaging and content sharing capabilities.',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: '#',
    accent: 'from-amber-600 to-orange-600'
  },
];

const WorkSection = () => {
  return (
    <Section id="work" bgColor="bg-white relative overflow-hidden">
      {/* 3D background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="absolute top-10 left-10 w-64 h-64 bg-indigo-50 rounded-full opacity-50 blur-3xl"
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
          className="absolute bottom-20 right-20 w-80 h-80 bg-purple-50 rounded-full opacity-30 blur-3xl"
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

      <div className="text-center mb-16 relative">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="inline-block px-3 py-1 rounded-full bg-indigo-100 text-indigo-800 text-sm font-medium mb-4 shadow-md"
        >
          Our Portfolio
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-3d"
        >
          Recent Projects
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto"
        >
          Explore our latest work and see how we've helped businesses achieve their goals
        </motion.p>
      </div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ staggerChildren: 0.1 }}
        viewport={{ once: true }}
      >
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </motion.div>

      <div className="text-center mt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          <Button 
            href="#contact" 
            variant="outline" 
            size="lg" 
            className="border-indigo-600 relative overflow-hidden group"
          >
            <span className="relative z-10">Start Your Project</span>
            <span className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-0"></span>
          </Button>
        </motion.div>
      </div>
    </Section>
  );
};

const ProjectCard = ({ project, index }) => {
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
        
        {/* 3D Content Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/95 via-gray-900/80 to-gray-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 transform group-hover:translate-y-0 translate-y-8 transition-transform duration-500">
          {/* Category Badge */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5 + (index * 0.1) }}
            viewport={{ once: true }}
          >
            <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${project.accent} text-white mb-3`}>
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
            className="mt-4 inline-block text-white font-medium relative"
            whileHover={{ scale: 1.05 }}
          >
            <span className="relative">
              View Project
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
    </motion.div>  );
};

export default WorkSection;
