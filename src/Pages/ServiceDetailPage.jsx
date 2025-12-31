import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaLaptopCode, FaMobileAlt, FaShoppingCart, FaSearch, FaCode } from 'react-icons/fa';
import SEOHead from '../components/seo/SEOHead';

// Color palette: Dark (#1a1a1a), Light (#f5f5f5), Accent (indigo-500)

// Services data
const servicesData = [
  {
    id: 1,
    icon: <FaLaptopCode className="w-6 h-6" />,
    title: 'Website Design',
    shortDesc: 'Stunning, high-performance websites built with cutting-edge technologies.',
    description: 'We create visually striking, highly functional websites that deliver exceptional user experiences. Our design approach combines aesthetic appeal with technical excellence to ensure your website stands out.',
    features: [
      'Custom, responsive designs for all devices',
      'Intuitive user interfaces with seamless navigation',
      'Fast-loading pages optimized for performance',
      'Accessibility compliance for all users',
      'Interactive elements and animations',
      'Brand-aligned visual identity'
    ],
    technologies: ['React', 'Next.js', 'TailwindCSS', 'Framer Motion', 'TypeScript'],
    timeline: '4-8 weeks',
    idealFor: 'Businesses needing a professional online presence'
  },
  {
    id: 2,
    icon: <FaCode className="w-6 h-6" />,
    title: 'Custom Software',
    shortDesc: 'Tailored software solutions designed for your unique business challenges.',
    description: 'We develop custom software applications that address your specific business needs. Our solutions are scalable, secure, and built with future growth in mind.',
    features: [
      'Bespoke solutions for your requirements',
      'Scalable architecture for growth',
      'Integration with existing systems',
      'Enhanced security and data protection',
      'Ongoing support and maintenance',
      'User-friendly interfaces'
    ],
    technologies: ['Python', 'Node.js', 'PostgreSQL', 'MongoDB', 'Docker', 'AWS'],
    timeline: '8-16 weeks',
    idealFor: 'Companies with unique operational needs'
  },
  {
    id: 3,
    icon: <FaMobileAlt className="w-6 h-6" />,
    title: 'Mobile Apps',
    shortDesc: 'Powerful, feature-rich mobile apps for optimal user engagement.',
    description: 'We build cutting-edge mobile applications that provide seamless user experiences. Our apps are designed to be intuitive, responsive, and performant.',
    features: [
      'Native and cross-platform development',
      'Intuitive UX/UI design',
      'Offline capabilities and sync',
      'Push notifications and real-time updates',
      'Device feature integration',
      'App store optimization'
    ],
    technologies: ['React Native', 'Flutter', 'Kotlin', 'Swift', 'Firebase'],
    timeline: '6-12 weeks',
    idealFor: 'Brands targeting mobile users'
  },
  {
    id: 4,
    icon: <FaShoppingCart className="w-6 h-6" />,
    title: 'E-Commerce',
    shortDesc: 'Robust online stores that drive conversions and enhance experiences.',
    description: 'We create comprehensive e-commerce solutions that help businesses sell online effectively. Our platforms combine attractive design with powerful functionality.',
    features: [
      'Customized shopping experiences',
      'Mobile-responsive design',
      'Secure payment integration',
      'Inventory management',
      'Customer account management',
      'Analytics and reporting'
    ],
    technologies: ['Shopify', 'WooCommerce', 'Stripe', 'PayPal', 'React'],
    timeline: '4-10 weeks',
    idealFor: 'Retailers looking to sell online'
  },
  {
    id: 5,
    icon: <FaSearch className="w-6 h-6" />,
    title: 'S.E.O.',
    shortDesc: 'Strategic optimization for better search engine visibility.',
    description: 'We implement comprehensive SEO strategies that improve your website\'s visibility. Our approach combines technical optimization with content strategy.',
    features: [
      'Complete SEO audit and analysis',
      'Keyword research and strategy',
      'On-page and off-page optimization',
      'Content strategy development',
      'Local SEO optimization',
      'Performance reporting'
    ],
    technologies: ['Google Analytics', 'SEMrush', 'Ahrefs', 'Search Console'],
    timeline: '3+ months ongoing',
    idealFor: 'Businesses seeking better visibility'
  }
];

const ServiceDetailPage = () => {
  const [selectedService, setSelectedService] = useState(servicesData[0]);
  const [activeTab, setActiveTab] = useState('overview');

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

  return (
    <>
      <SEOHead
        title={`${selectedService.title} Services | AINOR Digital Solutions`}
        description={selectedService.shortDesc}
        canonicalUrl="https://myainor.com/services"
      />

      <div className="min-h-screen bg-[#f5f5f5]">
        {/* Hero Section */}
        <section className="relative pt-32 pb-16 overflow-hidden">
          {/* Decorative arrows */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.svg
              className="absolute top-24 right-16 w-28 h-28 opacity-[0.08]"
              viewBox="0 0 100 100"
              animate={{ rotate: 360 }}
              transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            >
              <circle cx="50" cy="50" r="6" fill="#6366f1" />
              {[0, 72, 144, 216, 288].map((angle, i) => (
                <g key={i} transform={`rotate(${angle} 50 50)`}>
                  <line x1="50" y1="50" x2="50" y2="15" stroke="#6366f1" strokeWidth="2" />
                  <polygon points="45,20 50,8 55,20" fill="#6366f1" />
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
                <span className="font-semibold text-sm">Our Expertise</span>
              </span>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#1a1a1a] mb-6">
                Our
                <span className="block mt-2 text-indigo-500">Services</span>
              </h1>
              
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Comprehensive digital solutions designed to transform your business and drive success.
              </p>
            </motion.div>

            {/* Service Navigation */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {servicesData.map((service) => (
                <motion.button
                  key={service.id}
                  onClick={() => {
                    setSelectedService(service);
                    setActiveTab('overview');
                  }}
                  className={`flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all ${
                    selectedService.id === service.id
                      ? 'bg-indigo-500 text-white'
                      : 'bg-white text-[#1a1a1a] hover:bg-gray-100 border border-gray-200'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {service.icon}
                  <span>{service.title}</span>
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* Selected Service Detail */}
        <section className="pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedService.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {/* Service Header Card */}
                <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-100 mb-8">
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-indigo-500 text-white mb-6">
                        {selectedService.icon}
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-4">
                        {selectedService.title}
                      </h2>
                      <p className="text-gray-600 text-lg mb-6">
                        {selectedService.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-4 mb-8">
                        <div className="px-4 py-2 bg-gray-100 rounded-lg">
                          <span className="text-xs text-gray-500 uppercase">Timeline</span>
                          <p className="font-semibold text-[#1a1a1a]">{selectedService.timeline}</p>
                        </div>
                        <div className="px-4 py-2 bg-gray-100 rounded-lg">
                          <span className="text-xs text-gray-500 uppercase">Ideal For</span>
                          <p className="font-semibold text-[#1a1a1a]">{selectedService.idealFor}</p>
                        </div>
                      </div>

                      <motion.a
                        href={`https://wa.me/917579500264?text=Hi%20AINOR!%20I'm%20interested%20in%20${encodeURIComponent(selectedService.title)}%20services.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-500 text-white rounded-xl font-medium hover:bg-indigo-600 transition-colors"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <FaWhatsapp className="w-5 h-5" />
                        Get a Quote
                      </motion.a>
                    </div>

                    <div className="hidden lg:block">
                      <motion.svg
                        className="w-full max-w-md mx-auto opacity-20"
                        viewBox="0 0 200 200"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
                      >
                        <circle cx="100" cy="100" r="12" fill="#6366f1" />
                        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                          <g key={i} transform={`rotate(${angle} 100 100)`}>
                            <line x1="100" y1="100" x2="100" y2="30" stroke="#6366f1" strokeWidth="3" />
                            <polygon points="92,40 100,15 108,40" fill="#6366f1" />
                          </g>
                        ))}
                      </motion.svg>
                    </div>
                  </div>
                </div>

                {/* Tabs */}
                <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
                  {['overview', 'features', 'technologies'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-6 py-3 rounded-xl font-medium capitalize transition-all whitespace-nowrap ${
                        activeTab === tab
                          ? 'bg-[#1a1a1a] text-white'
                          : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>

                {/* Tab Content */}
                <AnimatePresence mode="wait">
                  {activeTab === 'overview' && (
                    <motion.div
                      key="overview"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="grid md:grid-cols-3 gap-6"
                    >
                      {[
                        { icon: '🎯', title: 'Goal-Oriented', desc: 'Every solution is designed with your business objectives in mind.' },
                        { icon: '⚡', title: 'Fast Delivery', desc: 'Efficient processes ensure timely delivery without compromising quality.' },
                        { icon: '🔒', title: 'Secure & Reliable', desc: 'Built with best practices for security and long-term reliability.' },
                      ].map((item, index) => (
                        <motion.div
                          key={index}
                          className="bg-white rounded-2xl p-6 border border-gray-100"
                          variants={cardVariants}
                          initial="hidden"
                          animate="visible"
                          transition={{ delay: index * 0.1 }}
                        >
                          <div className="text-3xl mb-4">{item.icon}</div>
                          <h3 className="font-bold text-[#1a1a1a] mb-2">{item.title}</h3>
                          <p className="text-gray-600 text-sm">{item.desc}</p>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}

                  {activeTab === 'features' && (
                    <motion.div
                      key="features"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="bg-white rounded-3xl p-8 border border-gray-100"
                    >
                      <h3 className="text-2xl font-bold text-[#1a1a1a] mb-6">Key Features</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        {selectedService.features.map((feature, index) => (
                          <motion.div
                            key={index}
                            className="flex items-start gap-3 p-4 rounded-xl bg-gray-50"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                          >
                            <span className="w-2 h-2 rounded-full bg-indigo-500 mt-2 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {activeTab === 'technologies' && (
                    <motion.div
                      key="technologies"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="bg-white rounded-3xl p-8 border border-gray-100"
                    >
                      <h3 className="text-2xl font-bold text-[#1a1a1a] mb-6">Technologies We Use</h3>
                      <div className="flex flex-wrap gap-3">
                        {selectedService.technologies.map((tech, index) => (
                          <motion.span
                            key={index}
                            className="px-4 py-2 bg-indigo-50 text-indigo-600 rounded-lg font-medium"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.05 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* All Services Comparison */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 text-indigo-500 rounded-full mb-6 border border-indigo-100">
                <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                <span className="font-semibold text-sm">Compare</span>
              </span>
              
              <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a]">
                All
                <span className="block mt-2 text-indigo-500">Services</span>
              </h2>
            </motion.div>

            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {servicesData.map((service) => (
                <motion.div
                  key={service.id}
                  className={`bg-[#f5f5f5] rounded-2xl p-6 border-2 transition-all cursor-pointer ${
                    selectedService.id === service.id
                      ? 'border-indigo-500'
                      : 'border-transparent hover:border-gray-200'
                  }`}
                  variants={cardVariants}
                  onClick={() => {
                    setSelectedService(service);
                    setActiveTab('overview');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      selectedService.id === service.id
                        ? 'bg-indigo-500 text-white'
                        : 'bg-white text-[#1a1a1a]'
                    }`}>
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-[#1a1a1a]">{service.title}</h3>
                      <p className="text-xs text-gray-500">{service.timeline}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{service.shortDesc}</p>
                  <div className="text-indigo-500 text-sm font-medium">
                    {selectedService.id === service.id ? 'Currently viewing →' : 'View details →'}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#1a1a1a] rounded-3xl p-12 md:p-16 text-center relative overflow-hidden"
            >
              {/* Decorative element */}
              <motion.svg
                className="absolute top-8 right-8 w-24 h-24 opacity-10"
                viewBox="0 0 100 100"
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              >
                <circle cx="50" cy="50" r="6" fill="white" />
                {[0, 72, 144, 216, 288].map((angle, i) => (
                  <g key={i} transform={`rotate(${angle} 50 50)`}>
                    <line x1="50" y1="50" x2="50" y2="15" stroke="white" strokeWidth="2" />
                    <polygon points="45,20 50,8 55,20" fill="white" />
                  </g>
                ))}
              </motion.svg>

              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                Let's work together to bring your vision to life. Start your project today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="https://wa.me/917579500264?text=Hi%20AINOR!%20I'm%20interested%20in%20your%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-500 text-white rounded-xl font-medium hover:bg-green-600 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FaWhatsapp className="w-5 h-5" />
                  Chat on WhatsApp
                </motion.a>
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-white/10 text-white rounded-xl font-medium hover:bg-white/20 transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ServiceDetailPage;
