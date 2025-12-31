import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaExternalLinkAlt, FaTimes } from 'react-icons/fa';
import SEOHead from '../components/seo/SEOHead';
import PageScrollAnimation from '../components/ui/PageScrollAnimation';

// Color palette: Dark (#1a1a1a), Light (#f5f5f5), Accent (indigo-500)

const PortfolioPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
      opacity: 1, y: 0, scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  };

  // Categories
  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Development' },
    { id: 'mobile', name: 'Mobile Apps' },
    { id: 'ecommerce', name: 'E-Commerce' },
  ];

  // Projects data
  const projects = [
    {
      id: 1,
      title: "Sttrika E-Commerce",
      category: "ecommerce",
      description: "A comprehensive e-commerce platform for fashion and lifestyle products with modern design and secure payment integration.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "https://images.unsplash.com/photo-1556741533-6e6a62bd8b49?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      link: "https://sttrika.com"
    },
    {
      id: 2,
      title: "GoForCab Mobility",
      category: "mobile",
      description: "Complete mobility solution with Android, iOS apps, admin panel, and driver app for affordable cab services.",
      technologies: ["React Native", "Flutter", "Node.js", "Firebase"],
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      link: "https://goforcab.com"
    },
    {
      id: 3,
      title: "HiiHive Platform",
      category: "web",
      description: "A student-first platform where collaboration, leadership, and learning thrive together.",
      technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      link: "https://hiihive.vercel.app"
    },
    {
      id: 4,
      title: "HB Web E-commerce",
      category: "ecommerce",
      description: "Modern e-commerce solution with product customization, wishlist management, and inventory tracking.",
      technologies: ["Next.js", "React", "Node.js", "MongoDB"],
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      link: "https://hbweb.vercel.app"
    },
    {
      id: 5,
      title: "Mohan G Enterprises",
      category: "web",
      description: "Professional website for organic fertilizers and marble handicrafts business with B2B focus.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      link: "https://mohangenterprises.com"
    },
    {
      id: 6,
      title: "GenZConnect",
      category: "web",
      description: "Social networking platform designed for Gen Z users with focus on authentic connections.",
      technologies: ["React", "Node.js", "PostgreSQL", "WebSocket"],
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      link: "https://genzconnect.vercel.app"
    },
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  return (
    <>
      <SEOHead 
        title="Portfolio - AINOR | Web Development & Digital Solutions Projects"
        description="Explore AINOR's portfolio of web development projects, mobile apps, and digital solutions. See our work for clients like GoForCab, Sttrika, HiiHive, and more."
        canonicalUrl="https://myainor.com/portfolio"
      />

      <div className="min-h-screen bg-[#f5f5f5]">
        {/* Scroll Animation */}
        <PageScrollAnimation type="portfolio" isMobile={isMobile} />
        
        {/* Hero Section */}
        <section className="relative pt-32 pb-16 overflow-hidden">
          {/* Decorative arrows */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.svg
              className="absolute top-24 right-16 w-32 h-32 opacity-[0.1]"
              viewBox="0 0 120 120"
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            >
              <circle cx="60" cy="60" r="8" fill="#6366f1" />
              {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                <g key={i} transform={`rotate(${angle} 60 60)`}>
                  <line x1="60" y1="60" x2="60" y2="20" stroke="#6366f1" strokeWidth="2" />
                  <polygon points="55,25 60,12 65,25" fill="#6366f1" />
                </g>
              ))}
            </motion.svg>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 text-indigo-500 rounded-full mb-6 border border-indigo-100">
                <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                <span className="font-semibold text-sm">Our Work</span>
              </span>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#1a1a1a] mb-6">
                Featured
                <span className="block mt-2 text-indigo-500">Projects</span>
              </h1>
              
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Explore our portfolio of digital solutions that have helped businesses grow and succeed.
              </p>
            </motion.div>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((cat) => (
                <motion.button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-5 py-3 rounded-xl font-medium transition-all ${
                    selectedCategory === cat.id
                      ? 'bg-indigo-500 text-white'
                      : 'bg-white text-[#1a1a1a] border border-gray-200 hover:border-indigo-200'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {cat.name}
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              key={selectedCategory}
            >
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 cursor-pointer group"
                  variants={cardVariants}
                  whileHover={{ y: -8 }}
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 bg-indigo-50 text-indigo-500 rounded-lg text-xs font-medium capitalize">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-[#1a1a1a] mb-2 group-hover:text-indigo-500 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech, i) => (
                        <span key={i} className="px-2 py-1 bg-[#f5f5f5] text-gray-600 rounded text-xs">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-[#f5f5f5] text-gray-600 rounded text-xs">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title}
                    className="w-full aspect-video object-cover"
                  />
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors"
                  >
                    <FaTimes className="w-5 h-5 text-[#1a1a1a]" />
                  </button>
                </div>
                
                <div className="p-8">
                  <span className="inline-block px-3 py-1 bg-indigo-50 text-indigo-500 rounded-lg text-sm font-medium capitalize mb-4">
                    {selectedProject.category}
                  </span>
                  
                  <h2 className="text-3xl font-bold text-[#1a1a1a] mb-4">
                    {selectedProject.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {selectedProject.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-bold text-[#1a1a1a] mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, i) => (
                        <span key={i} className="px-3 py-1 bg-[#f5f5f5] text-[#1a1a1a] rounded-lg text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-500 text-white rounded-xl font-medium hover:bg-indigo-600 transition-colors"
                  >
                    Visit Project
                    <FaExternalLinkAlt className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#1a1a1a] rounded-3xl p-12 md:p-16 text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Start Your Project?
              </h2>
              <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                Join our growing list of successful projects. Let's build something amazing together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/917579500264?text=Hi%20AINOR!%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-indigo-500 text-white rounded-xl font-medium hover:bg-indigo-600 transition-colors"
                >
                  Start Your Project
                </a>
                <a
                  href="/pricing"
                  className="px-8 py-4 bg-white/10 text-white rounded-xl font-medium hover:bg-white/20 transition-colors"
                >
                  View Pricing
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PortfolioPage;

