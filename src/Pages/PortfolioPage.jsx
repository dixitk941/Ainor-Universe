import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaExternalLinkAlt, FaTimes, FaArrowRight, FaWhatsapp, FaRocket, FaStar, FaEye
} from 'react-icons/fa';
import SEOHead from '../components/seo/SEOHead';
import ModernPageLayout from '../components/layout/ModernPageLayout';
import TiltCard from '../components/ui/TiltCard';
import { BlurReveal, AnimatedCounter, MagneticButton, StaggerContainer, StaggerItem } from '../components/ui/AnimationComponents';
import { GradientText, SpotlightCard, MorphingBackground } from '../components/ui/ScrollAnimations';
import { projects, categories } from '../data/projectsData';

const PortfolioPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  const stats = [
    { number: 50, suffix: '+', label: 'Projects Completed' },
    { number: 100, suffix: '%', label: 'Client Satisfaction' },
    { number: 6, suffix: '+', label: 'Industries Served' },
    { number: 10, suffix: '+', label: 'Technologies Used' },
  ];

  return (
    <>
      <SEOHead 
        title="Portfolio - AINOR | Web Development & Digital Solutions Projects"
        description="Explore AINOR's portfolio of web development projects, mobile apps, and digital solutions. See our work for clients like GoForCab, Sttrika, HiiHive, and more."
        canonicalUrl="https://myainor.com/portfolio"
      />

      <ModernPageLayout>
        {/* Hero Section */}
        <section className="relative bg-white rounded-3xl p-6 md:p-12 lg:p-16 shadow-soft overflow-hidden">
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-gradient-to-br from-orange-100 to-red-100 rounded-full blur-3xl opacity-60" />
          <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] bg-gradient-to-br from-purple-100 to-pink-100 rounded-full blur-3xl opacity-60" />
          
          <div className="relative z-10 text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
                className="inline-flex items-center gap-2 bg-orange-50 border border-orange-100 px-4 py-2 rounded-full mb-6"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500" />
                </span>
                <span className="text-sm font-semibold text-orange-700 tracking-wide uppercase">Our Work</span>
              </motion.div>
              
              <BlurReveal delay={0.2}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#111318] mb-6">
                  Crafting Digital{' '}
                  <GradientText from="#f97316" to="#ec4899" className="font-bold">
                    Experiences
                  </GradientText>
                </h1>
              </BlurReveal>
              
              <BlurReveal delay={0.4}>
                <p className="text-lg md:text-xl text-gray-500 mb-10 max-w-2xl mx-auto">
                  From startups to enterprises, explore how we've helped businesses transform their digital presence and achieve remarkable results.
                </p>
              </BlurReveal>

              {/* Category Filter */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap justify-center gap-3"
              >
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center gap-2 px-5 py-3 rounded-full font-semibold text-sm transition-all ${
                      selectedCategory === category.id
                        ? 'bg-black text-white shadow-lg scale-105'
                        : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                    }`}
                  >
                    <span>{category.icon}</span>
                    <span>{category.name}</span>
                  </button>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-4">
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, idx) => (
              <StaggerItem key={idx}>
                <TiltCard tiltAmount={5} scale={1.02}>
                  <SpotlightCard className="bg-white rounded-2xl p-6 shadow-soft text-center h-full">
                    <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
                      <AnimatedCounter target={stat.number} duration={2} />
                      {stat.suffix}
                    </div>
                    <div className="text-sm text-gray-500">{stat.label}</div>
                  </SpotlightCard>
                </TiltCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>

        {/* Projects Grid */}
        <section>
          <AnimatePresence mode="wait">
            <motion.div 
              key={selectedCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              layout
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredProjects.map((project, idx) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <TiltCard tiltAmount={8} scale={1.02}>
                    <SpotlightCard 
                      className="bg-white rounded-2xl shadow-soft overflow-hidden h-full cursor-pointer group"
                      onClick={() => setSelectedProject(project)}
                    >
                      {/* Image */}
                      <div className="aspect-video overflow-hidden relative">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        
                        {/* Overlay Actions */}
                        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-800 shadow-lg"
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedProject(project);
                            }}
                          >
                            <FaEye />
                          </motion.button>
                          <motion.a
                            whileHover={{ scale: 1.1 }}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white shadow-lg"
                          >
                            <FaExternalLinkAlt />
                          </motion.a>
                        </div>

                        {/* Category Badge */}
                        <div className="absolute top-4 left-4">
                          <span className={`text-xs font-bold px-3 py-1 rounded-full bg-gradient-to-r ${project.color} text-white`}>
                            {categories.find(c => c.id === project.category)?.name}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-5">
                        <h3 className="font-bold text-xl mb-1 group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-sm text-gray-500 mb-4">{project.shortDesc}</p>
                        
                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {project.technologies.slice(0, 4).map((tech, tidx) => (
                            <span key={tidx} className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-md">
                              {tech}
                            </span>
                          ))}
                          {project.technologies.length > 4 && (
                            <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-md">
                              +{project.technologies.length - 4}
                            </span>
                          )}
                        </div>

                        {/* Stats */}
                        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                          <div className="flex items-center gap-1 text-yellow-500">
                            <FaStar />
                            <span className="font-bold text-sm">{project.stats.rating}</span>
                          </div>
                          <span className="text-xs text-gray-500">Click to view details</span>
                        </div>
                      </div>
                    </SpotlightCard>
                  </TiltCard>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </section>

        {/* Featured Projects Sticky Scroll */}
        <FeaturedProjectsSection projects={projects.slice(0, 3)} />

        {/* Our Process */}
        <section className="bg-white rounded-3xl p-6 md:p-12 shadow-soft">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-sm font-semibold text-primary tracking-wider uppercase mb-2 block">Our Approach</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Deliver Success</h2>
              <p className="text-gray-500 max-w-2xl mx-auto">Our proven process ensures every project meets the highest standards</p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Discover', desc: 'Understanding your vision, goals, and requirements', icon: '🔍' },
              { step: '02', title: 'Design', desc: 'Creating beautiful, user-centered experiences', icon: '🎨' },
              { step: '03', title: 'Develop', desc: 'Building with clean code and best practices', icon: '💻' },
              { step: '04', title: 'Deploy', desc: 'Launching and supporting your success', icon: '🚀' },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <TiltCard tiltAmount={8}>
                  <div className="text-center p-6 bg-gray-50 rounded-2xl h-full">
                    <div className="text-4xl mb-4">{item.icon}</div>
                    <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded-full">{item.step}</span>
                    <h3 className="font-bold text-lg mt-3 mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Technologies */}
        <section className="bg-gray-50 rounded-3xl p-6 md:p-10">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold mb-3">Technologies We Master</h2>
            <p className="text-gray-500">Building with the best tools in the industry</p>
          </div>
          <TechGrid />
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 rounded-3xl p-8 md:p-12 shadow-soft text-center text-white relative overflow-hidden">
          <MorphingBackground className="absolute inset-0 opacity-20" />
          
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <FaRocket className="text-5xl mx-auto mb-6 text-white/80" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
              <p className="text-white/80 mb-8 max-w-xl mx-auto">
                Let's discuss your ideas and turn them into reality. Your success story could be next.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <MagneticButton>
                  <a
                    href="https://wa.me/917579500264?text=Hi%20AINOR!%20I'd%20like%20to%20discuss%20a%20project."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-white text-pink-600 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors"
                  >
                    <FaWhatsapp className="text-green-500 text-xl" />
                    Let's Talk
                  </a>
                </MagneticButton>
                <MagneticButton>
                  <Link
                    to="/pricing"
                    className="flex items-center justify-center gap-2 bg-white/20 border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white/30 transition-colors"
                  >
                    View Pricing <FaArrowRight />
                  </Link>
                </MagneticButton>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
          )}
        </AnimatePresence>
      </ModernPageLayout>
    </>
  );
};

// Scroll-Locking Featured Projects Section
const FeaturedProjectsSection = ({ projects }) => {
  const sectionRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLocked, setIsLocked] = useState(false);
  const [hasCompletedForward, setHasCompletedForward] = useState(false);
  const isScrolling = useRef(false);
  const lastScrollY = useRef(0);

  const totalItems = projects.length;

  // Handle wheel events when locked
  const handleWheel = useCallback((e) => {
    if (!isLocked) return;
    
    e.preventDefault();
    e.stopPropagation();
    
    if (isScrolling.current) return;
    isScrolling.current = true;

    const direction = e.deltaY > 0 ? 1 : -1;
    
    setCurrentIndex(prev => {
      const newIndex = prev + direction;
      
      // Scrolling down, reached end
      if (newIndex >= totalItems) {
        setIsLocked(false);
        setHasCompletedForward(true);
        setTimeout(() => {
          window.scrollBy({ top: 150, behavior: 'smooth' });
        }, 100);
        return totalItems - 1;
      }
      
      // Scrolling up, reached beginning
      if (newIndex < 0) {
        setIsLocked(false);
        setHasCompletedForward(false);
        setTimeout(() => {
          window.scrollBy({ top: -150, behavior: 'smooth' });
        }, 100);
        return 0;
      }
      
      return newIndex;
    });

    setTimeout(() => {
      isScrolling.current = false;
    }, 600);
  }, [isLocked, totalItems]);

  // Observe when section enters/exits viewport
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const scrollingDown = window.scrollY > lastScrollY.current;
      lastScrollY.current = window.scrollY;

      // Check if section is visible and centered
      const isInView = rect.top < viewportHeight * 0.5 && rect.bottom > viewportHeight * 0.5;

      if (isInView && !isLocked) {
        // Entering from top (scrolling down)
        if (scrollingDown && !hasCompletedForward && currentIndex < totalItems - 1) {
          setIsLocked(true);
        }
        // Entering from bottom (scrolling up)  
        if (!scrollingDown && hasCompletedForward && currentIndex > 0) {
          setIsLocked(true);
          setCurrentIndex(totalItems - 1);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentIndex, totalItems, hasCompletedForward, isLocked]);

  // Lock/unlock body scroll
  useEffect(() => {
    if (isLocked) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('wheel', handleWheel, { passive: false });
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('wheel', handleWheel);
    };
  }, [isLocked, handleWheel]);

  // Touch support
  const touchStartY = useRef(0);
  
  const handleTouchStart = (e) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchMove = useCallback((e) => {
    if (!isLocked) return;
    
    e.preventDefault();
    
    if (isScrolling.current) return;
    
    const touchY = e.touches[0].clientY;
    const diff = touchStartY.current - touchY;
    
    if (Math.abs(diff) > 50) {
      isScrolling.current = true;
      const direction = diff > 0 ? 1 : -1;
      
      setCurrentIndex(prev => {
        const newIndex = prev + direction;
        
        if (newIndex >= totalItems) {
          setIsLocked(false);
          setHasCompletedForward(true);
          return totalItems - 1;
        }
        
        if (newIndex < 0) {
          setIsLocked(false);
          setHasCompletedForward(false);
          return 0;
        }
        
        return newIndex;
      });
      
      touchStartY.current = touchY;
      setTimeout(() => {
        isScrolling.current = false;
      }, 600);
    }
  }, [isLocked, totalItems]);

  useEffect(() => {
    if (isLocked) {
      window.addEventListener('touchmove', handleTouchMove, { passive: false });
    }
    return () => {
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [isLocked, handleTouchMove]);

  const currentProject = projects[currentIndex];

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl"
      onTouchStart={handleTouchStart}
    >
      <div className="h-screen flex items-center py-8">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Sticky Title Side */}
            <div className="text-white">
              <span className="text-sm font-semibold text-purple-400 tracking-wider uppercase mb-4 block">Featured Work</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Projects We're{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  Proud Of
                </span>
              </h2>
              <p className="text-gray-400 text-lg mb-8">
                Scroll to explore our featured projects and see the impact we've made for our clients.
              </p>
              
              {/* Progress Indicators */}
              <div className="flex gap-2">
                {projects.map((_, idx) => (
                  <div
                    key={idx}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      idx === currentIndex 
                        ? 'w-10 bg-purple-500' 
                        : idx < currentIndex 
                          ? 'w-6 bg-purple-500/60'
                          : 'w-6 bg-gray-700'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Scrolling Projects Side */}
            <div className="relative overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 80 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -80 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className="w-full"
                >
                  <TiltCard tiltAmount={8}>
                    <div className="bg-white rounded-3xl overflow-hidden shadow-2xl">
                      <div className="aspect-video relative">
                        <img 
                          src={currentProject.image} 
                          alt={currentProject.title}
                          className="w-full h-full object-cover"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-t ${currentProject.color} opacity-20`} />
                      </div>
                      <div className="p-6">
                        <h3 className="text-2xl font-bold mb-2">{currentProject.title}</h3>
                        <p className="text-gray-500 mb-4">{currentProject.shortDesc}</p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex gap-4">
                            {Object.entries(currentProject.stats).map(([key, value]) => (
                              <div key={key} className="text-center">
                                <div className="text-lg font-bold text-primary">{value}</div>
                                <div className="text-xs text-gray-500 capitalize">{key}</div>
                              </div>
                            ))}
                          </div>
                          <a
                            href={currentProject.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-primary font-semibold hover:underline"
                          >
                            Visit <FaExternalLinkAlt className="text-sm" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </TiltCard>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/* Lock Indicator */}
      {isLocked && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50"
        >
          <div className="px-5 py-3 rounded-full bg-white/20 text-white text-sm font-medium backdrop-blur-sm">
            <span className="flex items-center gap-3">
              <motion.span
                animate={{ y: [0, -4, 0] }}
                transition={{ repeat: Infinity, duration: 1.2 }}
                className="text-lg"
              >
                ↕
              </motion.span>
              Scroll to explore • {currentIndex + 1}/{totalItems}
            </span>
          </div>
        </motion.div>
      )}
    </section>
  );
};

// Project Modal
const ProjectModal = ({ project, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image Header */}
        <div className="relative">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-72 object-cover"
          />
          <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-30`} />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg"
          >
            <FaTimes className="text-gray-800" />
          </button>
          <div className="absolute bottom-4 left-4">
            <span className={`text-sm font-bold px-4 py-1.5 rounded-full bg-gradient-to-r ${project.color} text-white`}>
              {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">
          <h2 className="text-3xl font-bold mb-2">{project.title}</h2>
          <p className="text-gray-500 mb-6">{project.description}</p>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-gray-50 rounded-2xl">
            {Object.entries(project.stats).map(([key, value]) => (
              <div key={key} className="text-center">
                <div className="text-2xl font-bold text-primary">{value}</div>
                <div className="text-sm text-gray-500 capitalize">{key}</div>
              </div>
            ))}
          </div>

          {/* Features */}
          <h3 className="font-bold mb-3">Key Features</h3>
          <div className="grid grid-cols-2 gap-3 mb-6">
            {project.features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-2 p-3 bg-gray-50 rounded-xl">
                <FaRocket className="text-primary" />
                <span className="text-sm">{feature}</span>
              </div>
            ))}
          </div>
          
          {/* Technologies */}
          <h3 className="font-bold mb-3">Technologies Used</h3>
          <div className="flex flex-wrap gap-2 mb-8">
            {project.technologies.map((tech, idx) => (
              <span key={idx} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-xl text-sm font-medium">
                {tech}
              </span>
            ))}
          </div>
          
          {/* CTA */}
          <div className="flex gap-4">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 bg-primary text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition-colors"
            >
              Visit Project
              <FaExternalLinkAlt className="text-sm" />
            </a>
            <a
              href={`https://wa.me/917579500264?text=Hi%20AINOR!%20I'd%20like%20a%20similar%20project%20to%20${encodeURIComponent(project.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-green-500 text-white px-6 py-4 rounded-xl font-bold hover:bg-green-600 transition-colors"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Tech Grid Component
const TechGrid = () => {
  const technologies = [
    { name: 'React', icon: '⚛️', category: 'Frontend' },
    { name: 'Next.js', icon: '▲', category: 'Framework' },
    { name: 'Node.js', icon: '💚', category: 'Backend' },
    { name: 'React Native', icon: '📱', category: 'Mobile' },
    { name: 'Flutter', icon: '🦋', category: 'Mobile' },
    { name: 'MongoDB', icon: '🍃', category: 'Database' },
    { name: 'PostgreSQL', icon: '🐘', category: 'Database' },
    { name: 'Firebase', icon: '🔥', category: 'Platform' },
    { name: 'TailwindCSS', icon: '🎨', category: 'Styling' },
    { name: 'TypeScript', icon: '📘', category: 'Language' },
    { name: 'Python', icon: '🐍', category: 'Language' },
    { name: 'AWS', icon: '☁️', category: 'Cloud' },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {technologies.map((tech, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.05 }}
        >
          <TiltCard tiltAmount={10} scale={1.05}>
            <div className="flex items-center gap-3 bg-white px-5 py-3 rounded-xl shadow-soft">
              <span className="text-2xl">{tech.icon}</span>
              <div>
                <span className="font-semibold text-gray-700 block">{tech.name}</span>
                <span className="text-xs text-gray-400">{tech.category}</span>
              </div>
            </div>
          </TiltCard>
        </motion.div>
      ))}
    </div>
  );
};

export default PortfolioPage;
