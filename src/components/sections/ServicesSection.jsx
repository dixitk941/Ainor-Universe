import React from 'react';
import Section from '../layout/Section';
import Card from '../ui/Card';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaMobileAlt, FaShoppingCart, FaSearch, FaCode } from 'react-icons/fa';
import { BsCheck2Circle } from 'react-icons/bs';

const services = [
  {
    id: 1,
    icon: <FaLaptopCode className="h-8 w-8" />,
    title: 'Website Design',
    description: 'Stunning, high-performance websites built with cutting-edge technologies.',
    features: ['Responsive Design', 'Performance Optimization', 'SEO-friendly Structure', 'Custom Functionality'],
    color: 'from-blue-500 to-cyan-400',
    highlight: 'after:bg-blue-500'
  },
  {
    id: 2,
    icon: <FaCode className="h-8 w-8" />,
    title: 'Custom Software',
    description: 'Tailored software solutions designed to solve your unique business challenges.',
    features: ['Bespoke Solutions', 'Scalable Architecture', 'System Integration', 'User-friendly Interfaces'],
    color: 'from-indigo-500 to-purple-500',
    highlight: 'after:bg-indigo-500'
  },
  {
    id: 3,
    icon: <FaMobileAlt className="h-8 w-8" />,
    title: 'Android Applications',
    description: 'Powerful, feature-rich Android apps designed for optimal user engagement.',
    features: ['Native Development', 'Material Design', 'Device Integration', 'Play Store Optimization'],
    color: 'from-green-500 to-emerald-400',
    highlight: 'after:bg-green-500'
  },
  {
    id: 4,
    icon: <FaShoppingCart className="h-8 w-8" />,
    title: 'E-Commerce',
    description: 'Robust online stores that drive conversions and enhance customer experiences.',
    features: ['Secure Payments', 'Inventory Management', 'Mobile Shopping', 'Customer Accounts'],
    color: 'from-rose-500 to-pink-400',
    highlight: 'after:bg-rose-500'
  },
  {
    id: 5,
    icon: <FaSearch className="h-8 w-8" />,
    title: 'S.E.O.',
    description: 'Strategic optimization to improve your visibility in search engine results.',
    features: ['Keyword Research', 'On-page SEO', 'Content Strategy', 'Performance Analytics'],
    color: 'from-amber-500 to-yellow-400',
    highlight: 'after:bg-amber-500'
  }
];

const ServicesSection = () => {
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

  return (
    <Section id="services" bgColor="bg-white relative overflow-hidden">
      {/* 3D Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-0 right-0 w-96 h-96 bg-indigo-100 rounded-full opacity-20 blur-3xl"
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
          className="absolute bottom-0 left-0 w-80 h-80 bg-blue-100 rounded-full opacity-20 blur-3xl"
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
      </div>

      <div className="text-center mb-16 relative">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="inline-block px-3 py-1 rounded-full bg-indigo-100 text-indigo-800 text-sm font-medium mb-4 shadow-sm"
        >
          Our Services
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-3d"
        >
          Comprehensive Digital Solutions
        </motion.h2>        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto"
        >
          We offer a full range of services to help businesses succeed in the digital landscape
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <a href="/services" className="inline-block mt-4 text-indigo-600 hover:text-indigo-800 font-medium">
            View detailed service information →
          </a>
        </motion.div>
        
        {/* 3D decorative elements */}
        <div className="absolute -top-10 -left-20 w-40 h-40 bg-gradient-to-r from-purple-200 to-indigo-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-10 -right-20 w-40 h-40 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      </div>      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {services.slice(0, 3).map((service, index) => (
          <ServiceCard key={service.id} service={service} index={index} />
        ))}
      </motion.div>
      
      {/* Second row for additional services */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {services.slice(3).map((service, index) => (
          <ServiceCard key={service.id} service={service} index={index + 3} />
        ))}
      </motion.div>
    </Section>
  );
};

const ServiceCard = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ 
        y: -10,
        transition: { type: "spring", stiffness: 300 }
      }}
      className="preserve-3d perspective-1000"
    >
      <Card className="p-8 h-full flex flex-col backdrop-filter backdrop-blur-sm bg-white/95 shadow-xl relative card-3d" hoverEffect>
        {/* 3D hover effect pseudo-element */}
        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${service.color} opacity-0 transition-opacity duration-300 group-hover:opacity-5 -z-10`}></div>
        
        {/* Animated service icon with 3D effect */}
        <motion.div 
          className={`h-16 w-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center text-white mb-6 shadow-lg preserve-3d float`}
          animate={{ 
            rotateX: [0, 5, 0],
            rotateY: [0, 10, 0]
          }}
          transition={{ 
            repeat: Infinity,
            duration: 4,
            ease: "easeInOut",
            delay: index * 0.5
          }}
        >
          {service.icon}
        </motion.div>
        
        <h3 className={`text-2xl font-bold text-gray-900 relative inline-block after:absolute after:bottom-0 after:left-0 after:h-1 after:w-0 after:rounded-full ${service.highlight} after:transition-all after:duration-300 group-hover:after:w-1/3`}>
          {service.title}
        </h3>
        
        <p className="mt-4 text-gray-600 flex-grow">{service.description}</p>
        
        <ul className="mt-6 space-y-3">
          {service.features.map((feature, i) => (
            <motion.li 
              key={i} 
              className="flex items-center"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + (i * 0.1), duration: 0.3 }}
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: 10 }}
                className="mr-2 flex-shrink-0"
              >
                <BsCheck2Circle className="h-5 w-5 text-green-500" />
              </motion.div>
              <span className="text-gray-700">{feature}</span>
            </motion.li>
          ))}
        </ul>
          {/* 3D border glow effect on hover */}
        <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${service.color} opacity-20 blur-sm`}></div>
        </div>
      </Card>
    </motion.div>
  );
};

export default ServicesSection;
