import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaCode, FaMobileAlt, FaDesktop, FaShoppingCart, FaChartLine } from 'react-icons/fa';
import Navbar from '../components/layout/Navbar';
import Container from '../components/layout/Container';
import Section from '../components/layout/Section';
import Button from '../components/ui/Button';
import AnimatedImage from '../components/ui/AnimatedImage';

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
      title: "FreshMart E-Commerce Platform",
      category: "ecommerce",
      description: "A comprehensive e-commerce solution for a grocery delivery service with integrated inventory management, payment processing, and real-time delivery tracking.",
      challenges: "Creating a seamless mobile-first shopping experience while handling complex inventory management for perishable goods.",
      solution: "We developed a custom inventory system with real-time updates and integrated it with a React-based frontend for a smooth shopping experience across all devices.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe API", "AWS"],
      image: "https://images.unsplash.com/photo-1556741533-6e6a62bd8b49?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      link: "#"
    },
    {
      id: 2,
      title: "MediConnect Patient Portal",
      category: "web",
      description: "A secure patient management portal for a network of medical clinics, allowing patients to schedule appointments, access records, and communicate with healthcare providers.",
      challenges: "Building a highly secure system that complies with healthcare regulations while maintaining excellent usability.",
      solution: "We implemented enterprise-grade security features and designed an intuitive interface that makes complex healthcare processes simple for patients and providers.",
      technologies: ["Angular", "Java Spring Boot", "PostgreSQL", "OAuth 2.0", "Azure"],
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      link: "#"
    },
    {
      id: 3,
      title: "TravelBuddy Mobile App",
      category: "mobile",
      description: "A feature-rich travel companion app that helps users plan trips, discover local attractions, and share experiences with friends and family.",
      challenges: "Creating a seamless offline experience while handling location-based services across different device capabilities.",
      solution: "We built a sophisticated caching system for offline access and optimized location services to minimize battery drain while providing accurate information.",
      technologies: ["React Native", "Firebase", "Google Maps API", "Redux", "Node.js"],
      image: "https://images.unsplash.com/photo-1504542982118-59308b40fe0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      link: "#"
    },
    {
      id: 4,
      title: "UrbanPulse Real Estate Platform",
      category: "web",
      description: "A modern real estate platform that connects property buyers with sellers and provides advanced search, virtual tours, and mortgage calculation tools.",
      challenges: "Handling large volumes of property data and creating an intuitive search experience with multiple filtering options.",
      solution: "We implemented an advanced search algorithm with machine learning components to provide personalized property recommendations and optimized database queries for performance.",
      technologies: ["Next.js", "Python", "ElasticSearch", "PostgreSQL", "AWS"],
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      link: "#"
    },
    {
      id: 5,
      title: "FitTrack Fitness App",
      category: "mobile",
      description: "A comprehensive fitness tracking application that helps users monitor workouts, nutrition, and progress with personalized coaching and analytics.",
      challenges: "Integrating with various fitness wearables and creating meaningful visualizations of complex health data.",
      solution: "We developed a unified API layer to handle data from multiple devices and created intuitive, actionable dashboards that make fitness data easy to understand and act upon.",
      technologies: ["Kotlin", "Swift", "Firebase", "HealthKit", "Google Fit API"],
      image: "https://images.unsplash.com/photo-1575908539614-ff89490f4a78?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      link: "#"
    },
    {
      id: 6,
      title: "EcoShop Sustainable Marketplace",
      category: "ecommerce",
      description: "An e-commerce platform focused on sustainable and eco-friendly products, featuring carbon footprint tracking and ethical sourcing information.",
      challenges: "Creating a transparent supply chain tracking system while maintaining an engaging shopping experience.",
      solution: "We developed a blockchain-based supply chain verification system and designed an intuitive interface that highlights sustainability without compromising on user experience.",
      technologies: ["React", "Node.js", "MongoDB", "Blockchain", "PayPal API"],
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      link: "#"
    },
    {
      id: 7,
      title: "LocalBiz SEO Optimization",
      category: "seo",
      description: "A comprehensive SEO strategy and implementation for a network of local businesses, resulting in significant improvements in search rankings and organic traffic.",
      challenges: "Optimizing for local search across multiple business locations with different service offerings.",
      solution: "We developed location-specific content strategies and implemented technical SEO improvements that boosted visibility in local search results across all target markets.",
      technologies: ["Google Analytics", "SEMrush", "WordPress", "Schema Markup", "Content Strategy"],
      image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      link: "#"
    },
    {
      id: 8,
      title: "FinEdge Banking Dashboard",
      category: "web",
      description: "A secure and intuitive banking dashboard that provides customers with real-time financial insights, transaction management, and financial planning tools.",
      challenges: "Creating a highly secure environment while delivering real-time data and maintaining excellent performance.",
      solution: "We implemented a microservices architecture with real-time data processing and designed a security system that exceeds banking industry standards.",
      technologies: ["Vue.js", ".NET Core", "SQL Server", "Redis", "Docker"],
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      link: "#"
    }
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
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      
      {/* Header Section */}
      <Section className="pt-32 pb-16 relative bg-gradient-to-b from-white to-gray-100">
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
          </motion.div>
        </Container>
      </Section>
      
          </div>
  );
};

export default PortfolioPage;

