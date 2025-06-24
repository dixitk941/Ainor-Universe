import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaMobileAlt, FaDesktop, FaShoppingCart, FaChartLine } from 'react-icons/fa';
import Container from '../components/layout/Container';
import Section from '../components/layout/Section';
import Button from '../components/ui/Button';
import SEOHead from '../components/seo/SEOHead';

const PortfolioPage = () => {
  // Categories for filtering
  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Development', icon: <FaDesktop /> },
    { id: 'mobile', name: 'Mobile Apps', icon: <FaMobileAlt /> },
    { id: 'ecommerce', name: 'E-Commerce', icon: <FaShoppingCart /> },
    { id: 'seo', name: 'SEO & Marketing', icon: <FaChartLine /> },
  ];
    // Project data
  const projects = [
    {
      id: 1,
      title: "Sttrika E-Commerce Platform",
      category: "ecommerce",
      description: "A comprehensive e-commerce platform for fashion and lifestyle products with modern design, secure payment integration, and advanced inventory management.",
      challenges: "Creating a seamless mobile-first shopping experience while handling complex fashion product variants and sizes.",
      solution: "We developed a custom inventory system with real-time updates and integrated it with a React-based frontend for a smooth shopping experience across all devices.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe API", "AWS"],
      image: "https://images.unsplash.com/photo-1556741533-6e6a62bd8b49?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      link: "https://sttrika.com"
    },
    {
      id: 2,
      title: "GoForCab Mobility Solution",
      category: "mobile",
      description: "Complete mobility package including Android apps, iOS apps, admin panel, and driver app for affordable cab services with real-time tracking and payment integration.",
      challenges: "Building a comprehensive ecosystem with multiple apps while ensuring seamless communication between drivers, passengers, and admin systems.",
      solution: "We developed a unified backend system with real-time WebSocket connections and implemented native mobile apps for optimal performance and user experience.",
      technologies: ["React Native", "Flutter", "Node.js", "Socket.io", "Google Maps API", "Firebase"],
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      link: "https://goforcab.com"
    },
    {
      id: 3,
      title: "HiiHive Student Platform",
      category: "web",
      description: "A powerful student-first platform where collaboration, leadership, and learning thrive together. Features include study groups, project collaboration, and skill development tracking.",
      challenges: "Creating an engaging platform that promotes genuine collaboration while maintaining user privacy and data security.",
      solution: "We implemented a modular design with role-based access controls and gamification elements to encourage active participation and meaningful connections.",
      technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "NextAuth.js"],
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      link: "https://hiihive.vercel.app"
    },
    {
      id: 4,
      title: "HB Web E-commerce",
      category: "ecommerce",
      description: "Modern e-commerce solution with advanced features including product customization, wishlist management, and integrated inventory tracking.",
      challenges: "Building a scalable e-commerce platform that can handle high traffic loads while maintaining fast page load times.",
      solution: "We implemented server-side rendering with Next.js and optimized database queries to ensure excellent performance even during peak traffic periods.",
      technologies: ["Next.js", "React", "Node.js", "MongoDB", "Stripe API"],
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      link: "https://hbweb.vercel.app"
    },
    {
      id: 5,
      title: "GoForCab Driver App",
      category: "mobile",
      description: "Dedicated driver application for the GoForCab ecosystem with real-time ride requests, navigation integration, and earnings tracking.",
      challenges: "Optimizing battery usage while maintaining real-time location tracking and ensuring reliable notification delivery.",
      solution: "We implemented intelligent location batching and background processing to minimize battery drain while maintaining service reliability.",
      technologies: ["React Native", "Firebase", "Google Maps API", "Redux", "Push Notifications"],
      image: "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      link: "#"
    },
    {
      id: 6,
      title: "GoForCab Customer App",
      category: "mobile",
      description: "Customer-facing mobile application for booking rides, tracking drivers, and managing payments with an intuitive and user-friendly interface.",
      challenges: "Creating a seamless booking experience while handling real-time updates and ensuring accurate location services.",
      solution: "We developed a robust state management system and implemented efficient caching strategies for offline functionality and improved performance.",
      technologies: ["React Native", "Redux", "Firebase", "Google Maps API", "Stripe SDK"],
      image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      link: "#"
    },
    {
      id: 7,
      title: "HiTownBears E-commerce App",
      category: "mobile",
      description: "Mobile e-commerce application for fashion and lifestyle products with advanced search, wishlist features, and seamless checkout experience.",
      challenges: "Creating a mobile-first shopping experience with complex product catalogs and multiple payment options.",
      solution: "We implemented advanced search algorithms and optimized image loading to create a fast, engaging mobile shopping experience.",
      technologies: ["React Native", "Node.js", "MongoDB", "Payment Gateway Integration", "Push Notifications"],
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      link: "#"
    },
    {
      id: 8,
      title: "GenZConnect Social Platform",
      category: "web",
      description: "A social networking platform designed specifically for Gen Z users with focus on authentic connections, content sharing, and community building.",
      challenges: "Building a platform that encourages genuine social interaction while implementing robust content moderation and user safety features.",
      solution: "We developed an AI-powered content moderation system and implemented privacy-first design principles to create a safe and engaging social environment.",
      technologies: ["React", "Node.js", "PostgreSQL", "Redis", "WebSocket", "AI/ML APIs"],
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      link: "https://genzconnect.vercel.app"    }
  ];
  
  // State for filtering
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  
  // Filter projects based on selected category
  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);
  
  // Open project detail modal
  const openProjectDetail = (project) => {
    setSelectedProject(project);
  };
  
  // Close project detail modal
  const closeProjectDetail = () => {
    setSelectedProject(null);
  };
  return (
    <>
      <SEOHead 
        title="AINOR Portfolio - Our Web Development & Digital Solution Projects"
        description="Explore AINOR's portfolio showcasing our web development projects, mobile apps, and digital solutions including GoForCab, Sttrika, HiiHive, and HB Web. See our expertise in action."
        keywords="AINOR portfolio, web development projects, GoForCab, Sttrika, HiiHive, HB Web, mobile apps, digital solutions, project showcase, client work"
        canonicalUrl="https://myainor.com/portfolio"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "AINOR Portfolio",
          "description": "Portfolio showcasing AINOR's web development projects and digital solutions.",
          "url": "https://myainor.com/portfolio"
        }}
      />
        <div className="min-h-screen bg-white text-gray-900">
      
      {/* Header Section */}
      <Section className="pb-16 relative bg-gradient-to-b from-white to-gray-100">
        <Container>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-black">
              Our Work
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our portfolio of successful projects where we've helped businesses 
              transform their ideas into powerful digital solutions.
            </p>
          </motion.div>
        </Container>
      </Section>
      
      {/* Portfolio Filter */}
      <Section className="py-8 bg-white">
        <Container>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-5 py-3 rounded-lg flex items-center space-x-2 transition-all duration-300 ${
                  selectedCategory === category.id 
                    ? `bg-gradient-to-r from-gray-800 to-black text-white shadow-lg` 
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200 hover:shadow-md border border-gray-200'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                {category.icon && <span className="text-lg">{category.icon}</span>}
                <span className="font-medium">{category.name}</span>
              </motion.button>
            ))}
          </div>
          
          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200"
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{project.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <span 
                        key={index}
                        className="inline-block px-2 py-1 rounded-full bg-gray-100 text-gray-800 text-xs font-medium border border-gray-200"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="inline-block px-2 py-1 rounded-full bg-gray-100 text-gray-800 text-xs font-medium border border-gray-200">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                  <Button 
                    onClick={() => openProjectDetail(project)} 
                    variant="dark" 
                    className="w-full"
                  >
                    View Project
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Empty state when no projects match filter */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <h3 className="text-xl font-semibold mb-2 text-gray-700">No projects found</h3>
              <p className="text-gray-500 mb-6">We don't have any projects in this category yet.</p>
              <Button onClick={() => setSelectedCategory('all')} variant="outline">
                View All Projects
              </Button>
            </div>
          )}
        </Container>
      </Section>
      
      {/* Project Detail Modal */}
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-75 flex items-center justify-center p-4"
          onClick={closeProjectDetail}
        >
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="h-72 sm:h-96 overflow-hidden">
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{selectedProject.title}</h2>
                <Button href={selectedProject.link} variant="outline" className="flex items-center gap-2">
                  <span>Visit</span> <FaExternalLinkAlt />
                </Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="col-span-2">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">Project Overview</h3>
                  <p className="text-gray-700 mb-6">{selectedProject.description}</p>
                  
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">Challenges</h3>
                  <p className="text-gray-700 mb-6">{selectedProject.challenges}</p>
                  
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">Our Solution</h3>
                  <p className="text-gray-700">{selectedProject.solution}</p>
                </div>
                
                <div>
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                    <h3 className="text-lg font-semibold mb-4 text-gray-900">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, index) => (
                        <span 
                          key={index}
                          className="inline-block px-3 py-1 rounded-full bg-gray-100 text-gray-800 text-sm font-medium border border-gray-200 mb-2"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="border-t border-gray-200 my-6 pt-6">
                      <h3 className="text-lg font-semibold mb-4 text-gray-900">Category</h3>
                      <span className="inline-block px-3 py-1 rounded-lg bg-gray-800 text-white text-sm font-medium">
                        {categories.find(cat => cat.id === selectedProject.category)?.name}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
                <Button onClick={closeProjectDetail} variant="outline">
                  Close
                </Button>
                <Button href="/contact" variant="dark">
                  Start Your Project
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
      
      {/* CTA Section */}
      <Section className="py-16 bg-gray-50">
        <Container>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Ready to Build Something Amazing?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Let's turn your ideas into reality. Our team of experts is ready to help you create 
              a digital solution that drives your business forward.
            </p>
            <Button href="/contact" variant="dark" is3D={true}>
              Start Your Project
            </Button>
          </motion.div>        </Container>      </Section>
      
    </div>
    </>
  );
};

export default PortfolioPage;

