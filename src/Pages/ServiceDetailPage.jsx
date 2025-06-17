import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaMobileAlt, FaShoppingCart, FaSearch, FaCode } from 'react-icons/fa';
import { BiCodeAlt, BiMobileAlt, BiShoppingBag, BiSearchAlt, BiGlobe } from 'react-icons/bi';
import { BsCheck2Circle } from 'react-icons/bs';
import AnimatedImage from '../components/ui/AnimatedImage';
import Button from '../components/ui/Button';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
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
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };  return (
    <div className="bg-white text-gray-900 min-h-screen">
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
              Our Services
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our comprehensive range of digital services designed to transform your business. 
              Each service is tailored to deliver exceptional results and drive your success.
            </p>
          </motion.div>
        </Container>
      </Section>
        {/* 3D Decorative Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div 
          className="absolute top-0 right-0 w-96 h-96 bg-gray-200 rounded-full opacity-50 blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 30, 0]
          }}
          transition={{ 
            repeat: Infinity,
            duration: 20,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-0 left-0 w-80 h-80 bg-gray-300 rounded-full opacity-40 blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            y: [0, 40, 0]
          }}
          transition={{ 
            repeat: Infinity,
            duration: 25,
            ease: "easeInOut"
          }}
        />
      </div><div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-16 relative">
          <motion.span            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-3 py-1 rounded-full bg-gray-100 text-gray-800 text-sm font-medium mb-4 shadow-sm border border-gray-200"
          >
            Our Services
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-black"
          >
            Comprehensive Digital Solutions
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Transforming ideas into digital reality with cutting-edge technology and exceptional design
          </motion.p>
        </div>
        
        {/* Service navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {servicesData.map((service) => (
            <motion.button
              key={service.id}
              onClick={() => setSelectedService(service)}
              className={`px-5 py-3 rounded-lg flex items-center space-x-2 transition-all duration-300 ${
                selectedService.id === service.id 
                  ? `bg-gradient-to-r from-gray-800 to-black text-white shadow-lg` 
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200 hover:shadow-md border border-gray-200'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="text-lg">{service.icon}</span>
              <span className="font-medium">{service.title}</span>
            </motion.button>
          ))}
        </div>
        
        {/* Selected service details */}
        <motion.div 
          key={selectedService.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20"
        >
          <div className="order-2 lg:order-1">
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >              <motion.div variants={itemVariants} className="mb-8">
                <div className={`inline-block p-3 rounded-2xl bg-gradient-to-r from-gray-800 to-black text-white mb-4`}>
                  {selectedService.bigIcon}
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{selectedService.title}</h2>
                <p className="text-xl text-gray-600">{selectedService.description}</p>
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h3>
                <ul className="space-y-3 mb-8">
                  {selectedService.features.map((feature, index) => (
                    <motion.li 
                      key={index}
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + (index * 0.1) }}
                    >
                      <span className="mr-2 mt-1 flex-shrink-0 text-gray-800">
                        <BsCheck2Circle size={20} />
                      </span>
                      <span className="text-gray-700">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
              
              <motion.div variants={itemVariants} className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Technologies We Use</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedService.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="inline-block px-3 py-1 rounded-full bg-gray-100 text-gray-800 text-sm font-medium border border-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
              
              <motion.div variants={itemVariants}>                <Button href="#contact" variant="dark" is3D={true}>
                  Discuss Your Project
                </Button>
              </motion.div>
            </motion.div>
          </div>
          
          <div className="order-1 lg:order-2">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-gray-300 blur-3xl opacity-30 rounded-full transform -translate-y-1/4 scale-150"></div>
              <AnimatedImage
                src={selectedService.image}
                alt={selectedService.title}
                className="rounded-2xl shadow-2xl"
                tiltEnable={true}
                glareEnable={true}
                glareMaxOpacity={0.2}
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                scale={1.05}
                gyroscope={true}
              />
              
              {/* Process Steps as circles around the image */}
              {selectedService.process.map((step, index) => {
                const angle = (index * (360 / selectedService.process.length)) * (Math.PI / 180);
                const radius = 200; // distance from center
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;
                
                return (
                  <motion.div
                    key={index}
                    className="absolute w-32 h-32 transform -translate-x-1/2 -translate-y-1/2"
                    style={{ 
                      left: `calc(50% + ${x}px)`, 
                      top: `calc(50% + ${y}px)`,
                      zIndex: 20
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + (index * 0.1), duration: 0.5 }}
                  >
                    <div className="relative bg-white/90 border border-gray-200 p-2 rounded-full w-full h-full flex items-center justify-center text-center text-xs font-medium shadow-md transform rotate-0">
                      <span>{index + 1}. {step}</span>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </motion.div>
          {/* Service comparison table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Service Comparison</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 bg-white rounded-xl overflow-hidden shadow-xl border border-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Service</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ideal For</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Timeline</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Key Benefit</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {servicesData.map((service) => (
                  <tr key={service.id} className="hover:bg-gray-50 transition-colors duration-200">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <div className="h-10 w-10 rounded-md bg-gradient-to-r from-gray-800 to-black flex items-center justify-center text-white">
                            {service.icon}
                          </div>
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{service.title}</div>
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
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ServiceDetailPage;
