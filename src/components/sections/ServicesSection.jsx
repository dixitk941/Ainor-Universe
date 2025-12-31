import React, { useState } from 'react';
import Section from '../layout/Section';
import Card from '../ui/Card';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLaptopCode, FaMobileAlt, FaShoppingCart, FaSearch, FaCode, FaArrowRight } from 'react-icons/fa';
import { BsCheck2Circle, BsStars } from 'react-icons/bs';
import { HiSparkles } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const services = [
  {
    id: 1,
    icon: <FaLaptopCode className="h-7 w-7" />,
    title: 'Website Design',
    shortDesc: 'High-performance websites',
    description: 'Stunning, high-performance websites built with cutting-edge technologies that captivate visitors and drive results.',
    features: ['Responsive Design', 'Performance Optimization', 'SEO-friendly Structure', 'Custom Functionality'],
    color: 'from-blue-500 to-cyan-400',
    bgColor: 'bg-blue-50',
    textColor: 'text-blue-600',
    borderColor: 'border-blue-200',
    stats: { projects: '50+', satisfaction: '99%' }
  },
  {
    id: 2,
    icon: <FaCode className="h-7 w-7" />,
    title: 'Custom Software',
    shortDesc: 'Tailored business solutions',
    description: 'Tailored software solutions designed to solve your unique business challenges and streamline operations.',
    features: ['Bespoke Solutions', 'Scalable Architecture', 'System Integration', 'User-friendly Interfaces'],
    color: 'from-indigo-500 to-purple-500',
    bgColor: 'bg-indigo-50',
    textColor: 'text-indigo-600',
    borderColor: 'border-indigo-200',
    stats: { projects: '30+', satisfaction: '98%' }
  },
  {
    id: 3,
    icon: <FaMobileAlt className="h-7 w-7" />,
    title: 'Mobile Apps',
    shortDesc: 'iOS & Android development',
    description: 'Powerful, feature-rich mobile apps designed for optimal user engagement and seamless experiences.',
    features: ['Native Development', 'Material Design', 'Device Integration', 'Store Optimization'],
    color: 'from-green-500 to-emerald-400',
    bgColor: 'bg-green-50',
    textColor: 'text-green-600',
    borderColor: 'border-green-200',
    stats: { projects: '25+', satisfaction: '97%' }
  },
  {
    id: 4,
    icon: <FaShoppingCart className="h-7 w-7" />,
    title: 'E-Commerce',
    shortDesc: 'Online stores that convert',
    description: 'Robust online stores that drive conversions and enhance customer experiences with secure transactions.',
    features: ['Secure Payments', 'Inventory Management', 'Mobile Shopping', 'Customer Analytics'],
    color: 'from-rose-500 to-pink-400',
    bgColor: 'bg-rose-50',
    textColor: 'text-rose-600',
    borderColor: 'border-rose-200',
    stats: { projects: '40+', satisfaction: '99%' }
  },
  {
    id: 5,
    icon: <FaSearch className="h-7 w-7" />,
    title: 'SEO Services',
    shortDesc: 'Boost your visibility',
    description: 'Strategic optimization to improve your visibility in search engine results and drive organic traffic.',
    features: ['Keyword Research', 'On-page SEO', 'Content Strategy', 'Performance Analytics'],
    color: 'from-amber-500 to-yellow-400',
    bgColor: 'bg-amber-50',
    textColor: 'text-amber-600',
    borderColor: 'border-amber-200',
    stats: { projects: '60+', satisfaction: '96%' }
  }
];

const ServicesSection = () => {
  const [activeService, setActiveService] = useState(null);
  const [hoveredService, setHoveredService] = useState(null);

  return (
    <Section id="services" bgColor="bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated gradient orbs */}
        <motion.div 
          className="absolute top-20 right-10 w-[500px] h-[500px] bg-gradient-to-br from-blue-100/40 to-indigo-100/40 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-20 left-10 w-[400px] h-[400px] bg-gradient-to-tr from-purple-100/40 to-pink-100/40 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            y: [0, 60, 0],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
        />
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      {/* Section Header */}
      <div className="text-center mb-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-indigo-500/10 to-blue-500/10 border border-indigo-200/50 mb-6"
        >
          <HiSparkles className="w-4 h-4 text-indigo-500" />
          <span className="text-indigo-700 text-sm font-semibold tracking-wide">MSME Registered Company</span>
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-6"
        >
          Comprehensive{' '}
          <span className="relative">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
              Digital Solutions
            </span>
            <motion.span 
              className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            />
          </span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
        >
          Empowering businesses with cutting-edge technology solutions. From concept to deployment, 
          we deliver excellence at every step.
        </motion.p>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-8 mt-10"
        >
          {[
            { value: '200+', label: 'Projects Delivered' },
            { value: '98%', label: 'Client Satisfaction' },
            { value: '5+', label: 'Years Experience' },
            { value: '24/7', label: 'Support Available' }
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <motion.div 
                className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600"
                initial={{ scale: 0.5 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                viewport={{ once: true }}
              >
                {stat.value}
              </motion.div>
              <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Services Grid - Modern Bento Style */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`${index === 0 ? 'lg:col-span-2 lg:row-span-1' : ''}`}
            onMouseEnter={() => setHoveredService(service.id)}
            onMouseLeave={() => setHoveredService(null)}
          >
            <motion.div
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className={`h-full p-6 md:p-8 rounded-3xl border ${service.borderColor} bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-500 group relative overflow-hidden`}
            >
              {/* Background gradient on hover */}
              <motion.div 
                className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
              />
              
              {/* Floating particles on hover */}
              <AnimatePresence>
                {hoveredService === service.id && (
                  <>
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                        animate={{ 
                          opacity: [0, 1, 0],
                          scale: [0, 1, 0],
                          x: Math.random() * 100 - 50,
                          y: -100 - Math.random() * 50
                        }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.5, delay: i * 0.1 }}
                        className={`absolute bottom-10 left-1/2 w-2 h-2 rounded-full bg-gradient-to-r ${service.color}`}
                      />
                    ))}
                  </>
                )}
              </AnimatePresence>

              <div className={`flex ${index === 0 ? 'flex-col md:flex-row md:items-start gap-6' : 'flex-col'}`}>
                {/* Icon */}
                <motion.div 
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white shadow-lg flex-shrink-0`}
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  {service.icon}
                </motion.div>

                <div className="flex-1">
                  {/* Title & Description */}
                  <div className="mb-4">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-600 transition-all">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                      {service.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className={`grid ${index === 0 ? 'grid-cols-2' : 'grid-cols-1'} gap-2 mb-5`}>
                    {service.features.map((feature, i) => (
                      <motion.div 
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + i * 0.05 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-2"
                      >
                        <div className={`w-5 h-5 rounded-full ${service.bgColor} flex items-center justify-center flex-shrink-0`}>
                          <BsCheck2Circle className={`w-3.5 h-3.5 ${service.textColor}`} />
                        </div>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Stats & CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex gap-4">
                      <div className="text-center">
                        <div className={`text-lg font-bold ${service.textColor}`}>{service.stats.projects}</div>
                        <div className="text-xs text-gray-500">Projects</div>
                      </div>
                      <div className="text-center">
                        <div className={`text-lg font-bold ${service.textColor}`}>{service.stats.satisfaction}</div>
                        <div className="text-xs text-gray-500">Satisfaction</div>
                      </div>
                    </div>
                    <Link 
                      to="/services"
                      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${service.bgColor} ${service.textColor} text-sm font-medium hover:shadow-md transition-all group/btn`}
                    >
                      Learn More
                      <FaArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Bottom CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mt-16 text-center relative z-10"
      >
        <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 md:p-8 rounded-3xl bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-600 shadow-2xl shadow-indigo-500/25">
          <div className="text-white text-center sm:text-left">
            <h3 className="text-xl md:text-2xl font-bold mb-1">Ready to transform your business?</h3>
            <p className="text-indigo-100 text-sm md:text-base">Let's discuss your project and bring your vision to life.</p>
          </div>
          <Link 
            to="/contact"
            className="flex items-center gap-2 px-6 py-3 bg-white text-indigo-600 rounded-full font-semibold hover:bg-indigo-50 transition-colors shadow-lg whitespace-nowrap"
          >
            <BsStars className="w-5 h-5" />
            Get Free Quote
          </Link>
        </div>
      </motion.div>
    </Section>
  );
};

export default ServicesSection;
