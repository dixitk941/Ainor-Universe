import React from 'react';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaMobileAlt, FaShoppingCart, FaSearch, FaCode, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import FloatingElements from '../ui/FloatingElements';

// Color palette: Dark (#1a1a1a), Light (#f5f5f5), Accent (indigo-500)

const services = [
  {
    id: 1,
    icon: <FaLaptopCode className="h-7 w-7" />,
    title: 'Website Design',
    slug: 'website-design-development',
    description: 'Stunning, high-performance websites built with cutting-edge technologies.',
    features: ['Responsive Design', 'Performance Optimization', 'SEO-friendly'],
  },
  {
    id: 2,
    icon: <FaCode className="h-7 w-7" />,
    title: 'Custom Software',
    slug: 'custom-software-development',
    description: 'Tailored software solutions designed to solve your unique business challenges.',
    features: ['Bespoke Solutions', 'Scalable Architecture', 'System Integration'],
  },
  {
    id: 3,
    icon: <FaMobileAlt className="h-7 w-7" />,
    title: 'Mobile Apps',
    slug: 'mobile-app-development',
    description: 'Powerful, feature-rich mobile apps for iOS and Android platforms.',
    features: ['Native Development', 'Cross-platform', 'Store Optimization'],
  },
  {
    id: 4,
    icon: <FaShoppingCart className="h-7 w-7" />,
    title: 'E-Commerce',
    slug: 'ecommerce-website-development',
    description: 'Robust online stores that drive conversions with secure transactions.',
    features: ['Secure Payments', 'Inventory Management', 'Analytics'],
  },
  {
    id: 5,
    icon: <FaSearch className="h-7 w-7" />,
    title: 'SEO Services',
    slug: 'seo-services-india',
    description: 'Strategic optimization to improve visibility and drive organic traffic.',
    features: ['Keyword Research', 'On-page SEO', 'Content Strategy'],
  }
];

const ServicesSection = () => {
  // Stagger animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section id="services" className="py-20 md:py-32 relative overflow-hidden">
      {/* Floating 3D Elements - Services variant */}
      <FloatingElements variant="services" />
      
      {/* Decorative connecting arrows */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Vertical connecting arrows - services flow */}
        <motion.svg
          className="absolute top-20 right-10 w-24 h-[300px] opacity-[0.1]"
          viewBox="0 0 80 300"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <line x1="40" y1="10" x2="40" y2="280" stroke="#6366f1" strokeWidth="2" strokeDasharray="8 8" />
          <polygon points="35,270 40,290 45,270" fill="#6366f1" />
          <circle cx="40" cy="50" r="6" fill="#6366f1" />
          <circle cx="40" cy="150" r="6" fill="#6366f1" />
          <circle cx="40" cy="250" r="6" fill="#6366f1" />
        </motion.svg>
        
        {/* Rotating service hub - left side */}
        <motion.svg
          className="absolute top-1/3 left-5 w-28 h-28 opacity-[0.08]"
          viewBox="0 0 100 100"
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          <circle cx="50" cy="50" r="6" fill="#6366f1" />
          {[0, 72, 144, 216, 288].map((angle, i) => (
            <g key={i} transform={`rotate(${angle} 50 50)`}>
              <line x1="50" y1="50" x2="50" y2="15" stroke="#6366f1" strokeWidth="2" />
              <polygon points="46,20 50,8 54,20" fill="#6366f1" />
            </g>
          ))}
        </motion.svg>
      </div>

      {/* Content directly on background */}
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
            <span className="font-semibold text-sm">Our Services</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#1a1a1a]"
          >
            Comprehensive
            <span className="block mt-2 text-indigo-500">
              Digital Solutions
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            From websites to mobile apps, we build digital products that help your business grow.
          </motion.p>
        </div>

        {/* Services Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group"
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-500 mb-6 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
                {service.icon}
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-bold text-[#1a1a1a] mb-3">{service.title}</h3>
              
              {/* Description */}
              <p className="text-gray-600 mb-5">{service.description}</p>
              
              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                    <svg className="w-4 h-4 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Learn More Link */}
              <Link 
                to={`/service/${service.slug}`}
                className="inline-flex items-center gap-2 text-indigo-500 font-semibold hover:text-indigo-700 transition-colors"
              >
                Learn More <FaArrowRight className="text-sm" />
              </Link>
            </motion.div>
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
          <Link to="/all-services">
            <motion.button 
              className="px-8 py-4 bg-[#1a1a1a] text-white rounded-full font-semibold hover:bg-gray-800 transition-colors inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Services
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

export default ServicesSection;
