import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaMobileAlt, FaShoppingCart, FaSearch, FaCode } from 'react-icons/fa';
import { BiCodeAlt, BiMobileAlt, BiShoppingBag, BiSearchAlt, BiGlobe } from 'react-icons/bi';
import { BsCheck2Circle, BsChevronDown } from 'react-icons/bs';
import Button from '../components/ui/Button';
import Container from '../components/layout/Container';
import Section from '../components/layout/Section';

// Define all the services with detailed information
const servicesData = [
  {
    id: 1,
    icon: <FaLaptopCode className="h-10 w-10" />,
    bigIcon: <BiGlobe className="h-20 w-20" />,
    title: 'Website Design',
    shortDesc: 'Stunning, high-performance websites built with cutting-edge technologies.',
    description: `We create visually striking, highly functional websites that deliver exceptional user experiences. Our design approach combines aesthetic appeal with technical excellence to ensure your website stands out from the competition.`,
    features: [
      'Custom, responsive designs that work on all devices',
      'Intuitive user interfaces with seamless navigation',
      'Fast-loading pages optimized for performance',
      'Accessibility compliance for all users',
      'Interactive elements and micro-animations',
      'Brand-aligned visual identity and styling'
    ],
    technologies: ['HTML5/CSS3', 'JavaScript', 'React', 'Next.js', 'TailwindCSS', 'Framer Motion'],
    color: 'from-blue-500 to-cyan-400',
    highlight: 'after:bg-blue-500',
    image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    process: [
      'Discovery and requirement analysis',
      'Wireframing and prototyping',
      'UI/UX design and approval',
      'Development and coding',
      'Testing and quality assurance',
      'Deployment and launch'
    ]
  },
  {
    id: 2,
    icon: <FaCode className="h-10 w-10" />,
    bigIcon: <BiCodeAlt className="h-20 w-20" />,
    title: 'Custom Software',
    shortDesc: 'Tailored software solutions designed to solve your unique business challenges.',
    description: `We develop custom software applications that address your specific business needs. Our solutions are scalable, secure, and built with future growth in mind, helping you streamline operations and increase efficiency.`,
    features: [
      'Bespoke solutions tailored to your exact requirements',
      'Scalable architecture that grows with your business',
      'Integration with existing systems and workflows',
      'Enhanced security features and data protection',
      'Ongoing support and maintenance options',
      'User-friendly interfaces for maximum adoption'
    ],
    technologies: ['Python', 'Node.js', 'Java', 'C#/.NET', 'PostgreSQL', 'MongoDB', 'Docker', 'AWS/Azure'],
    color: 'from-indigo-500 to-purple-400',
    highlight: 'after:bg-indigo-500',
    image: 'https://images.unsplash.com/photo-1623282033815-40b05d96c903?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    process: [
      'Business analysis and requirement gathering',
      'System architecture design',
      'Development and implementation',
      'Quality assurance and testing',
      'Deployment and integration',
      'Maintenance and support'
    ]
  },
  {
    id: 3,
    icon: <FaMobileAlt className="h-10 w-10" />,
    bigIcon: <BiMobileAlt className="h-20 w-20" />,
    title: 'Android Applications',
    shortDesc: 'Powerful, feature-rich Android apps designed for optimal user engagement.',
    description: `We build cutting-edge Android applications that provide seamless user experiences across all Android devices. Our apps are designed to be intuitive, responsive, and aligned with Google's Material Design principles.`,
    features: [
      'Native Android development for optimal performance',
      'Intuitive UX/UI following Material Design guidelines',
      'Offline capabilities and data synchronization',
      'Integration with device features (camera, GPS, sensors)',
      'Push notifications and real-time updates',
      'Play Store optimization and submission assistance'
    ],
    technologies: ['Kotlin', 'Java', 'Jetpack Compose', 'Android SDK', 'Firebase', 'Room', 'Retrofit'],
    color: 'from-green-500 to-emerald-400',
    highlight: 'after:bg-green-500',
    image: 'https://images.unsplash.com/photo-1596742578443-7682ef7b7057?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    process: [
      'App conceptualization and wireframing',
      'UI/UX design and prototyping',
      'Development and coding',
      'Testing across multiple devices',
      'Beta testing and refinement',
      'Deployment to Google Play Store'
    ]
  },
  {
    id: 4,
    icon: <FaShoppingCart className="h-10 w-10" />,
    bigIcon: <BiShoppingBag className="h-20 w-20" />,
    title: 'E-Commerce',
    shortDesc: 'Robust online stores that drive conversions and enhance customer experiences.',
    description: `We create comprehensive e-commerce solutions that help businesses sell online effectively. Our platforms combine attractive design with powerful functionality to maximize sales and provide exceptional shopping experiences.`,
    features: [
      'Customized shopping experiences with intuitive navigation',
      'Mobile-responsive design for on-the-go shopping',
      'Secure payment gateway integration',
      'Inventory and order management systems',
      'Customer account management and wishlist features',
      'Analytics and reporting for business insights'
    ],
    technologies: ['Shopify', 'WooCommerce', 'Magento', 'Stripe', 'PayPal', 'BigCommerce', 'React', 'NextJS'],
    color: 'from-rose-500 to-pink-400',
    highlight: 'after:bg-rose-500',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    process: [
      'Business model analysis and platform selection',
      'Store design and product catalog setup',
      'Payment and shipping integration',
      'Testing and quality assurance',
      'Launch and deployment',
      'Training and ongoing support'
    ]
  },
  {
    id: 5,
    icon: <FaSearch className="h-10 w-10" />,
    bigIcon: <BiSearchAlt className="h-20 w-20" />,
    title: 'S.E.O.',
    shortDesc: 'Strategic optimization to improve your visibility in search engine results.',
    description: `We implement comprehensive SEO strategies that improve your website's visibility on search engines. Our approach combines technical optimization, content strategy, and analytics to drive more organic traffic to your site.`,
    features: [
      'Complete website SEO audit and analysis',
      'Keyword research and competitive analysis',
      'On-page and off-page optimization',
      'Content strategy development',
      'Local SEO for businesses with physical locations',
      'Regular performance reporting and strategy refinement'
    ],
    technologies: ['Google Analytics', 'SEMrush', 'Ahrefs', 'Google Search Console', 'Moz', 'Screaming Frog'],
    color: 'from-amber-500 to-yellow-400',
    highlight: 'after:bg-amber-500',
    image: 'https://images.unsplash.com/photo-1571512599285-9ac4fdf3dba9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    process: [
      'Comprehensive SEO audit and analysis',
      'Strategy development based on findings',
      'Implementation of technical improvements',
      'Content optimization and creation',
      'Backlink building and off-page SEO',
      'Ongoing monitoring and refinement'
    ]
  }
];

const ServiceDetailPage = () => {
  const [selectedService, setSelectedService] = useState(servicesData[0]);
  const [isMobile, setIsMobile] = useState(false);
  const [activeTab, setActiveTab] = useState('overview'); // 'overview', 'features', 'process', 'tech'
  const [expandedFeature, setExpandedFeature] = useState(null);
  
  // Check for mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };    
    checkMobile();
    window.addEventListener('resize', checkMobile);
      return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  const handleFeatureToggle = (index) => {
    if (expandedFeature === index) {
      setExpandedFeature(null);
    } else {
      setExpandedFeature(index);
    }
  };

  return (
    <div className="bg-white text-gray-900 min-h-screen">
      {/* Subtle background pattern */}
      <div className="fixed inset-0 bg-grid-pattern opacity-5 pointer-events-none z-0"></div>
      
      {/* Gradient orbs for subtle background interest */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full opacity-30 blur-3xl transform translate-x-1/2 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-100 rounded-full opacity-30 blur-3xl transform -translate-x-1/3 translate-y-1/4"></div>
      </div>
      
      {/* Hero Section - Mobile First */}
      <Section className="pt-24 md:pt-32 pb-8 md:pb-16 relative">
        <Container>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center px-4 md:px-0"
          >
            <div className="inline-block px-3 py-1 rounded-full bg-gray-100 text-gray-800 text-xs font-medium mb-4 shadow-sm border border-gray-200">
              Our Expertise
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-black">
              Our Services
            </h1>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our comprehensive range of digital solutions designed to transform your business and drive success in the digital landscape.
            </p>
          </motion.div>
        </Container>
      </Section>
      
      {/* Service Navigation - Mobile First */}
      <div className="sticky top-0 z-30 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm py-3 mb-6 md:mb-10">
        <Container>
          <div className="flex overflow-x-auto hide-scrollbar gap-2 px-4 md:px-0 md:justify-center">
            {servicesData.map((service) => (
              <button
                key={service.id}
                onClick={() => {
                  setSelectedService(service);
                  setActiveTab('overview');
                  setExpandedFeature(null);
                }}
                className={`whitespace-nowrap px-4 py-2 rounded-full flex items-center space-x-2 transition-all duration-300 text-sm md:text-base flex-shrink-0 ${
                  selectedService.id === service.id 
                    ? `bg-gray-900 text-white shadow-md` 
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
              >
                <span className="text-lg">{service.icon}</span>
                <span className="font-medium">{service.title}</span>
              </button>
            ))}
          </div>
        </Container>
      </div>
      
      {/* Selected Service Content - Mobile First */}
      <Container>
        <div className="px-4 md:px-0">
          {/* Service Header with Image */}
          <motion.div 
            key={`${selectedService.id}-header`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-8 md:mb-12"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl mb-6 md:mb-10 aspect-[16/9] md:aspect-[21/9]">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/80 z-10"></div>
              <img 
                src={selectedService.image} 
                alt={selectedService.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8 z-20 text-white">
                <div className="flex items-center mb-2">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-2 mr-3">
                    {selectedService.bigIcon}
                  </div>
                  <h2 className="text-2xl md:text-4xl font-bold">{selectedService.title}</h2>
                </div>
                <p className="text-white/90 text-sm md:text-base max-w-3xl">
                  {selectedService.shortDesc}
                </p>
              </div>
            </div>
          
            {/* Mobile Tab Navigation */}
            <div className="grid grid-cols-4 gap-2 mb-6 md:hidden">
              <button 
                onClick={() => setActiveTab('overview')}
                className={`py-2 px-1 text-xs font-medium rounded-lg text-center transition-colors ${
                  activeTab === 'overview' 
                    ? 'bg-gray-900 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Overview
              </button>
              <button 
                onClick={() => setActiveTab('features')}
                className={`py-2 px-1 text-xs font-medium rounded-lg text-center transition-colors ${
                  activeTab === 'features' 
                    ? 'bg-gray-900 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Features
              </button>
              <button 
                onClick={() => setActiveTab('process')}
                className={`py-2 px-1 text-xs font-medium rounded-lg text-center transition-colors ${
                  activeTab === 'process' 
                    ? 'bg-gray-900 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Process
              </button>
              <button 
                onClick={() => setActiveTab('tech')}
                className={`py-2 px-1 text-xs font-medium rounded-lg text-center transition-colors ${
                  activeTab === 'tech' 
                    ? 'bg-gray-900 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Tech
              </button>
            </div>
          </motion.div>
          
          {/* Service Content Sections - Mobile First */}
          <div className="grid md:grid-cols-12 gap-8 md:gap-12">
            {/* Main Content */}
            <motion.div 
              key={`${selectedService.id}-content-${activeTab}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="md:col-span-7"
            >
              {/* Overview Tab (Default) */}
              {(activeTab === 'overview' || !isMobile) && (
                <div className={`${isMobile ? '' : 'mb-10'}`}>
                  {isMobile && <h3 className="text-lg font-bold mb-3 text-gray-900">Overview</h3>}
                  <div className="prose prose-gray max-w-none">
                    <p className="text-gray-700">{selectedService.description}</p>
                  </div>
                </div>
              )}
              
              {/* Features Tab */}
              {(activeTab === 'features' || !isMobile) && (
                <div className={`${isMobile ? '' : 'mb-10'}`}>
                  {isMobile && <h3 className="text-lg font-bold mb-3 text-gray-900">Key Features</h3>}
                  {!isMobile && <h3 className="text-xl font-bold mb-4 text-gray-900">Key Features</h3>}
                  
                  <div className="space-y-3">
                    {selectedService.features.map((feature, index) => (
                      <motion.div 
                        key={index}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.1 * index }}
                        className="bg-gray-50 border border-gray-200 rounded-lg overflow-hidden"
                      >
                        <button 
                          onClick={() => handleFeatureToggle(index)}
                          className="w-full p-3 flex items-start justify-between text-left"
                        >
                          <div className="flex items-start">
                            <span className="mr-3 mt-1 flex-shrink-0 text-indigo-600">
                              <BsCheck2Circle size={18} />
                            </span>
                            <span className="text-gray-800 font-medium">{feature}</span>
                          </div>
                          <BsChevronDown 
                            className={`text-gray-500 transition-transform ${expandedFeature === index ? 'rotate-180' : ''}`} 
                          />
                        </button>
                        
                        {expandedFeature === index && (
                          <div className="px-4 pb-3 pt-1">
                            <p className="text-sm text-gray-600">
                              {/* Feature details would go here */}
                              This feature helps your business increase efficiency and improve customer satisfaction.
                            </p>
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Process Tab */}
              {(activeTab === 'process' || !isMobile) && (
                <div className={`${isMobile ? '' : 'mb-10'}`}>
                  {isMobile && <h3 className="text-lg font-bold mb-3 text-gray-900">Our Process</h3>}
                  {!isMobile && <h3 className="text-xl font-bold mb-4 text-gray-900">Our Process</h3>}
                  
                  <div className="relative">
                    {/* Process Steps - Connected Timeline */}
                    <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200 z-0"></div>
                    
                    <div className="space-y-6 relative z-10">
                      {selectedService.process.map((step, index) => (
                        <motion.div 
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.15 * index }}
                          className="flex"
                        >
                          <div className="flex-shrink-0 h-8 w-8 rounded-full bg-gray-900 text-white flex items-center justify-center text-sm font-medium z-10">
                            {index + 1}
                          </div>
                          <div className="ml-4">
                            <h4 className="text-base font-semibold text-gray-900 mb-1">{step}</h4>
                            <p className="text-sm text-gray-600">
                              {/* Step details would go here */}
                              This step ensures your project is {index === 0 ? 'properly defined' : index === 1 ? 'well-designed' : index === 2 ? 'expertly developed' : index === 3 ? 'thoroughly tested' : 'successfully delivered'}.
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              
              {/* Technologies Tab */}
              {(activeTab === 'tech' || !isMobile) && (
                <div>
                  {isMobile && <h3 className="text-lg font-bold mb-3 text-gray-900">Technologies</h3>}
                  {!isMobile && <h3 className="text-xl font-bold mb-4 text-gray-900">Technologies We Use</h3>}
                  
                  <div className="flex flex-wrap gap-2">
                    {selectedService.technologies.map((tech, index) => (
                      <motion.div 
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.05 * index }}
                        className="px-3 py-2 bg-white border border-gray-200 rounded-lg shadow-sm text-sm font-medium text-gray-800"
                      >
                        {tech}
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
            
            {/* Sidebar Content - Hidden on Mobile */}
            <div className="hidden md:block md:col-span-5">
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 sticky top-24">
                <h3 className="text-xl font-bold mb-4 text-gray-900">Ready to start your project?</h3>
                <p className="text-gray-600 mb-6">
                  Get in touch with our team to discuss how our {selectedService.title} service can help your business grow.
                </p>
                
                <div className="space-y-4">
                  <Button href="/contact" variant="dark" is3D={true} className="w-full">
                    Request a Quote
                  </Button>
                  
                  <div className="text-center">
                    <span className="text-sm text-gray-500">or</span>
                  </div>
                  
                  <Button href="tel:+15551234567" variant="outline" className="w-full">
                    Call Us Directly
                  </Button>
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h4 className="font-medium text-gray-900 mb-2">Why choose our {selectedService.title} service:</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <BsCheck2Circle className="text-green-500 mt-1 mr-2" />
                      <span>Expert team with years of experience</span>
                    </li>
                    <li className="flex items-start">
                      <BsCheck2Circle className="text-green-500 mt-1 mr-2" />
                      <span>Transparent project management</span>
                    </li>
                    <li className="flex items-start">
                      <BsCheck2Circle className="text-green-500 mt-1 mr-2" />
                      <span>Ongoing support and maintenance</span>
                    </li>
                    <li className="flex items-start">
                      <BsCheck2Circle className="text-green-500 mt-1 mr-2" />
                      <span>Satisfaction guarantee</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* Mobile CTA - Visible only on mobile */}
          <div className="mt-8 md:hidden">
            <Button href="/contact" variant="dark" is3D={true} className="w-full">
              Get Started with {selectedService.title}
            </Button>
          </div>
        </div>
      </Container>
      
      {/* Comparison Section - Mobile First */}
      <Section className="py-12 md:py-20 bg-gray-50 mt-12 md:mt-20">
        <Container>
          <div className="text-center mb-8 md:mb-12 px-4 md:px-0">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Compare Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find the perfect service that aligns with your business goals and requirements.
            </p>
          </div>
          
          {/* Mobile Comparison Cards */}
          <div className="md:hidden px-4">
            <div className="space-y-6">
              {servicesData.map((service) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className={`bg-white rounded-xl shadow-md overflow-hidden border-2 ${
                    selectedService.id === service.id ? 'border-indigo-500' : 'border-transparent'
                  }`}
                >
                  <div className="p-4 border-b border-gray-100 flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-lg bg-gray-900 flex items-center justify-center text-white mr-3">
                        {service.icon}
                      </div>
                      <h3 className="font-medium text-gray-900">{service.title}</h3>
                    </div>
                    {selectedService.id !== service.id && (
                      <button 
                        onClick={() => {
                          setSelectedService(service);
                          setActiveTab('overview');
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="text-xs font-medium text-indigo-600 px-2 py-1 rounded border border-indigo-200 bg-indigo-50"
                      >
                        View
                      </button>
                    )}
                    {selectedService.id === service.id && (
                      <span className="text-xs font-medium text-white px-2 py-1 rounded bg-indigo-500">
                        Selected
                      </span>
                    )}
                  </div>
                  <div className="p-4 space-y-3">
                    <div className="flex">
                      <span className="w-1/3 text-xs uppercase text-gray-500 font-medium">Ideal For:</span>
                      <span className="w-2/3 text-sm text-gray-800">
                        {service.id === 1 && "Businesses needing an online presence"}
                        {service.id === 2 && "Companies with unique operational needs"}
                        {service.id === 3 && "Brands targeting Android mobile users"}
                        {service.id === 4 && "Retailers looking to sell products online"}
                        {service.id === 5 && "Businesses seeking better online visibility"}
                      </span>
                    </div>
                    <div className="flex">
                      <span className="w-1/3 text-xs uppercase text-gray-500 font-medium">Timeline:</span>
                      <span className="w-2/3 text-sm text-gray-800">
                        {service.id === 1 && "4-8 weeks"}
                        {service.id === 2 && "8-16 weeks"}
                        {service.id === 3 && "6-12 weeks"}
                        {service.id === 4 && "4-10 weeks"}
                        {service.id === 5 && "Ongoing (3+ months)"}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Desktop Comparison Table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full divide-y divide-gray-200 bg-white rounded-xl overflow-hidden shadow-xl border border-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Service</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ideal For</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Timeline</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Key Benefit</th>
                  <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {servicesData.map((service) => (
                  <tr key={service.id} className={selectedService.id === service.id ? 'bg-indigo-50' : 'hover:bg-gray-50 transition-colors duration-200'}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <div className={`h-10 w-10 rounded-lg flex items-center justify-center text-white ${
                            selectedService.id === service.id ? 'bg-indigo-600' : 'bg-gray-900'
                          }`}>
                            {service.icon}
                          </div>
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{service.title}</div>
                          <div className="text-xs text-gray-500">{service.shortDesc}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {service.id === 1 && "Businesses needing an online presence"}
                        {service.id === 2 && "Companies with unique operational needs"}
                        {service.id === 3 && "Brands targeting Android mobile users"}
                        {service.id === 4 && "Retailers looking to sell products online"}
                        {service.id === 5 && "Businesses seeking better online visibility"}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {service.id === 1 && "4-8 weeks"}
                      {service.id === 2 && "8-16 weeks"}
                      {service.id === 3 && "6-12 weeks"}
                      {service.id === 4 && "4-10 weeks"}
                      {service.id === 5 && "Ongoing (3+ months)"}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {service.id === 1 && "Establishes professional online presence"}
                      {service.id === 2 && "Tailored to specific business processes"}
                      {service.id === 3 && "Reaches Android's massive user base"}
                      {service.id === 4 && "Direct revenue generation"}
                      {service.id === 5 && "Increased organic traffic and leads"}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      {selectedService.id !== service.id ? (
                        <button 
                          onClick={() => {
                            setSelectedService(service);
                            setActiveTab('overview');
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                          }}
                          className="text-indigo-600 hover:text-indigo-900 text-sm font-medium"
                        >
                          Select
                        </button>
                      ) : (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                          Selected
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </Section>
      
      {/* Final CTA Section */}
      <Section className="py-12 md:py-20 bg-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto px-4 md:px-0">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl md:text-4xl font-bold mb-4 text-gray-900"
            >
              Ready to Transform Your Business?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-base md:text-lg text-gray-600 mb-8"
            >
              Let's work together to bring your vision to life with our {selectedService.title} service.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Button href="/contact" variant="dark" is3D={true} size="lg">
                Get Started Today
              </Button>
            </motion.div>
          </div>
        </Container>
      </Section>
      
      {/* Extra padding for mobile navigation */}
      <div className="md:hidden h-16"></div>
    </div>
  );
};

export default ServiceDetailPage;
