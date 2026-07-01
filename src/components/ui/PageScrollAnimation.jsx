import React, { useEffect, useState, useCallback } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { FaWhatsapp, FaPhone, FaEnvelope, FaArrowUp, FaCheck, FaCode, FaMobile, FaGlobe, FaBriefcase, FaUsers, FaRocket, FaLightbulb, FaQuestionCircle, FaSearch, FaBookmark, FaClock } from 'react-icons/fa';

// Unique scroll animations for each page type
// Each page gets a different useful widget

const PageScrollAnimation = ({ type = 'default', isMobile = false }) => {
  const [windowHeight, setWindowHeight] = useState(typeof window !== 'undefined' ? window.innerHeight : 800);
  const [scrollPercent, setScrollPercent] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [activeSection, setActiveSection] = useState(0);
  const [contactExpanded, setContactExpanded] = useState(false);
  
  useEffect(() => {
    const handleResize = () => setWindowHeight(window.innerHeight);
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const percent = Math.min((scrollTop / docHeight) * 100, 100);
      setScrollPercent(percent);
      setShowBackToTop(scrollTop > 400);
      setActiveSection(Math.floor(scrollTop / (windowHeight * 0.8)));
    };
    
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [windowHeight]);

  const { scrollY } = useScroll();
  
  // Common transforms
  const widgetY = useTransform(scrollY, [0, 300], [100, 0]);
  const widgetOpacity = useTransform(scrollY, [0, 200, 300], [0, 0.5, 1]);
  
  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // ============================================
  // PRICING PAGE - Live Savings Calculator
  // ============================================
  if (type === 'pricing') {
    const savingsAmount = Math.floor(scrollPercent * 150); // Up to ₹15,000 savings shown
    
    return (
      <motion.div
        className={`fixed z-30 ${isMobile ? 'bottom-20 right-4' : 'bottom-8 right-8'}`}
        style={{ y: widgetY, opacity: widgetOpacity }}
      >
        <motion.div 
          className="bg-white rounded-2xl shadow-2xl border border-indigo-100 overflow-hidden"
          style={{ width: isMobile ? '160px' : '200px' }}
          whileHover={{ scale: 1.05 }}
        >
          {/* Savings Counter */}
          <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-3 text-white text-center">
            <p className="text-xs opacity-90">You could save</p>
            <motion.p 
              className="text-2xl font-bold"
              key={savingsAmount}
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
            >
              ₹{savingsAmount.toLocaleString()}+
            </motion.p>
            <p className="text-xs opacity-80">with subscription model</p>
          </div>
          
          {/* Quick Stats */}
          <div className="p-3 space-y-2 text-xs">
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Setup Fee</span>
              <span className="font-semibold text-green-600">60% less</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Monthly</span>
              <span className="font-semibold">From ₹500</span>
            </div>
          </div>
          
          {/* Progress */}
          <div className="px-3 pb-3">
            <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-indigo-500 rounded-full"
                style={{ width: `${scrollPercent}%` }}
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    );
  }

  // ============================================
  // ABOUT PAGE - Company Journey Timeline
  // ============================================
  if (type === 'about') {
    const milestones = ['Founded', '50+ Projects', '100+ Clients', 'Expanding'];
    const currentMilestone = Math.min(Math.floor(scrollPercent / 25), 3);
    
    return (
      <motion.div
        className={`fixed z-30 ${isMobile ? 'top-20 left-4' : 'top-32 left-8'}`}
        style={{ opacity: widgetOpacity }}
      >
        <div className={`bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-100 p-4 ${isMobile ? 'w-12' : 'w-auto'}`}>
          {/* Timeline */}
          <div className={`${isMobile ? 'flex flex-col items-center' : 'flex flex-col'} gap-3`}>
            {milestones.map((milestone, idx) => (
              <motion.div 
                key={idx}
                className={`flex items-center gap-2 ${isMobile ? 'flex-col' : ''}`}
                animate={{ 
                  opacity: idx <= currentMilestone ? 1 : 0.4,
                  scale: idx === currentMilestone ? 1.1 : 1
                }}
              >
                <div className={`w-3 h-3 rounded-full ${idx <= currentMilestone ? 'bg-indigo-500' : 'bg-gray-300'}`}>
                  {idx < currentMilestone && (
                    <motion.div 
                      className="w-full h-full rounded-full bg-indigo-500"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                    />
                  )}
                </div>
                {!isMobile && (
                  <span className={`text-xs font-medium ${idx <= currentMilestone ? 'text-indigo-600' : 'text-gray-400'}`}>
                    {milestone}
                  </span>
                )}
              </motion.div>
            ))}
          </div>
          
          {/* Year indicator */}
          <div className={`mt-3 pt-3 border-t border-gray-100 text-center ${isMobile ? 'hidden' : ''}`}>
            <p className="text-xs text-gray-500">Since</p>
            <p className="text-lg font-bold text-indigo-600">2023</p>
          </div>
        </div>
      </motion.div>
    );
  }

  // ============================================
  // PORTFOLIO PAGE - Project Filter & Counter
  // ============================================
  if (type === 'portfolio') {
    const projectCount = Math.min(Math.floor(scrollPercent / 10) + 1, 10);
    const categories = ['Web', 'Mobile', 'E-com', 'All'];
    
    return (
      <motion.div
        className={`fixed z-30 ${isMobile ? 'bottom-20 left-4' : 'bottom-8 left-8'}`}
        style={{ y: widgetY, opacity: widgetOpacity }}
      >
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          {/* Project Counter */}
          <div className="bg-indigo-500 text-white p-3 text-center">
            <motion.p 
              className="text-3xl font-bold"
              key={projectCount}
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              {projectCount}+
            </motion.p>
            <p className="text-xs opacity-90">Projects Delivered</p>
          </div>
          
          {/* Quick Filters */}
          {!isMobile && (
            <div className="p-3 flex flex-wrap gap-1">
              {categories.map((cat, idx) => (
                <button
                  key={idx}
                  className={`px-2 py-1 text-xs rounded-full transition-colors ${
                    idx === 3 ? 'bg-indigo-500 text-white' : 'bg-gray-100 text-gray-600 hover:bg-indigo-100'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    );
  }

  // ============================================
  // SERVICES PAGE - Service Quick View
  // ============================================
  if (type === 'services') {
    const services = [
      { icon: FaGlobe, name: 'Web Dev' },
      { icon: FaMobile, name: 'Mobile' },
      { icon: FaCode, name: 'Software' },
    ];
    const activeService = Math.min(Math.floor(scrollPercent / 35), 2);
    
    return (
      <motion.div
        className={`fixed z-30 ${isMobile ? 'bottom-20 right-4' : 'bottom-8 right-8'}`}
        style={{ y: widgetY, opacity: widgetOpacity }}
      >
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-100 p-4">
          <p className="text-xs text-gray-500 mb-3 text-center">Our Services</p>
          
          <div className="flex gap-2">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={idx}
                  className={`flex flex-col items-center p-2 rounded-xl transition-colors ${
                    idx === activeService ? 'bg-indigo-500 text-white' : 'bg-gray-50 text-gray-600'
                  }`}
                  animate={{ scale: idx === activeService ? 1.1 : 1 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <Icon className="w-5 h-5" />
                  {!isMobile && <span className="text-[10px] mt-1">{service.name}</span>}
                </motion.div>
              );
            })}
          </div>
          
          {/* CTA */}
          <a 
            href="https://wa.me/917579500264"
            className="mt-3 flex items-center justify-center gap-1 bg-green-500 text-white text-xs py-2 px-3 rounded-lg hover:bg-green-600 transition-colors"
          >
            <FaWhatsapp className="w-3 h-3" />
            <span>Get Quote</span>
          </a>
        </div>
      </motion.div>
    );
  }

  // ============================================
  // CONTACT PAGE - Quick Contact Floating Widget
  // ============================================
  if (type === 'contact') {
    return (
      <motion.div
        className={`fixed z-30 ${isMobile ? 'bottom-20 right-4' : 'bottom-8 right-8'}`}
        style={{ y: widgetY, opacity: widgetOpacity }}
      >
        <motion.div 
          className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
          animate={{ width: contactExpanded ? (isMobile ? 200 : 240) : (isMobile ? 50 : 56) }}
        >
          <motion.button
            className="w-full p-3 bg-indigo-500 text-white flex items-center justify-center gap-2"
            onClick={() => setContactExpanded(!contactExpanded)}
            whileTap={{ scale: 0.95 }}
          >
            <FaPhone className="w-4 h-4" />
            <AnimatePresence>
              {contactExpanded && (
                <motion.span
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: 'auto' }}
                  exit={{ opacity: 0, width: 0 }}
                  className="text-sm font-medium whitespace-nowrap"
                >
                  Quick Contact
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
          
          <AnimatePresence>
            {contactExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="p-3 space-y-2"
              >
                <a href="https://wa.me/917579500264" className="flex items-center gap-2 p-2 bg-green-50 rounded-lg text-green-700 hover:bg-green-100 transition-colors">
                  <FaWhatsapp className="w-4 h-4" />
                  <span className="text-xs">WhatsApp</span>
                </a>
                <a href="mailto:contact@myainor.com" className="flex items-center gap-2 p-2 bg-indigo-50 rounded-lg text-indigo-700 hover:bg-indigo-100 transition-colors">
                  <FaEnvelope className="w-4 h-4" />
                  <span className="text-xs">Email Us</span>
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    );
  }

  // ============================================
  // CAREERS PAGE - Why Join Us Benefits
  // ============================================
  if (type === 'careers') {
    const benefits = [
      { icon: FaRocket, text: 'Growth' },
      { icon: FaUsers, text: 'Team' },
      { icon: FaLightbulb, text: 'Learn' },
      { icon: FaBriefcase, text: 'Remote' },
    ];
    const activeBenefit = Math.floor(scrollPercent / 25) % 4;
    
    return (
      <motion.div
        className={`fixed z-30 ${isMobile ? 'bottom-20 left-4' : 'bottom-8 left-8'}`}
        style={{ y: widgetY, opacity: widgetOpacity }}
      >
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-100 p-4">
          <p className="text-xs text-gray-500 mb-3">Why Join AINOR?</p>
          
          <div className="grid grid-cols-2 gap-2">
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={idx}
                  className={`flex items-center gap-2 p-2 rounded-lg ${
                    idx === activeBenefit ? 'bg-indigo-500 text-white' : 'bg-gray-50 text-gray-600'
                  }`}
                  animate={{ scale: idx === activeBenefit ? 1.05 : 1 }}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-xs">{benefit.text}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    );
  }

  // ============================================
  // FAQ PAGE - Quick Search & Navigation
  // ============================================
  if (type === 'faq') {
    const sections = ['General', 'Pricing', 'Support', 'Technical'];
    
    return (
      <motion.div
        className={`fixed z-30 ${isMobile ? 'top-20 right-4' : 'top-32 right-8'}`}
        style={{ opacity: widgetOpacity }}
      >
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-100 p-3">
          {/* Search icon */}
          <div className="flex items-center gap-2 mb-3 p-2 bg-gray-50 rounded-lg">
            <FaSearch className="w-3 h-3 text-gray-400" />
            {!isMobile && <span className="text-xs text-gray-400">Find answers...</span>}
          </div>
          
          {/* Quick nav */}
          <div className={`space-y-1 ${isMobile ? 'hidden' : ''}`}>
            {sections.map((section, idx) => (
              <button
                key={idx}
                className={`w-full text-left px-3 py-2 rounded-lg text-xs transition-colors ${
                  idx === activeSection % 4 ? 'bg-indigo-500 text-white' : 'hover:bg-gray-50 text-gray-600'
                }`}
              >
                {section}
              </button>
            ))}
          </div>
          
          {/* Help indicator */}
          <div className="mt-3 pt-3 border-t border-gray-100 flex items-center gap-2">
            <FaQuestionCircle className="w-4 h-4 text-indigo-500" />
            <span className="text-xs text-gray-600">{Math.floor(scrollPercent)}% read</span>
          </div>
        </div>
      </motion.div>
    );
  }

  // ============================================
  // BLOG PAGE - Reading Progress & Bookmarks
  // ============================================
  if (type === 'blog') {
    const readTime = Math.max(1, Math.floor((100 - scrollPercent) / 20));
    
    return (
      <motion.div
        className={`fixed z-30 ${isMobile ? 'top-20 right-4' : 'top-32 right-8'}`}
        style={{ opacity: widgetOpacity }}
      >
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-100 p-4">
          {/* Reading Progress */}
          <div className="relative w-16 h-16 mx-auto mb-3">
            <svg className="w-full h-full transform -rotate-90">
              <circle cx="32" cy="32" r="28" fill="none" stroke="#e5e7eb" strokeWidth="4" />
              <motion.circle
                cx="32" cy="32" r="28"
                fill="none"
                stroke="#6366f1"
                strokeWidth="4"
                strokeLinecap="round"
                strokeDasharray={175}
                strokeDashoffset={175 - (scrollPercent / 100) * 175}
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-sm font-bold text-indigo-600">{Math.floor(scrollPercent)}%</span>
            </div>
          </div>
          
          {/* Time remaining */}
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 text-gray-500">
              <FaClock className="w-3 h-3" />
              <span className="text-xs">{readTime} min left</span>
            </div>
          </div>
          
          {/* Bookmark button */}
          {!isMobile && (
            <button className="mt-3 w-full flex items-center justify-center gap-1 p-2 bg-indigo-50 rounded-lg text-indigo-600 hover:bg-indigo-100 transition-colors">
              <FaBookmark className="w-3 h-3" />
              <span className="text-xs">Save</span>
            </button>
          )}
        </div>
      </motion.div>
    );
  }

  // ============================================
  // SERVICE DETAIL PAGE - Floating Get Quote CTA
  // ============================================
  if (type === 'services-detail') {
    return (
      <motion.div
        className={`fixed z-30 ${isMobile ? 'bottom-20 right-4' : 'bottom-8 right-8'}`}
        style={{ y: widgetY, opacity: widgetOpacity }}
      >
        <motion.div 
          className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl shadow-xl p-4 text-white"
          whileHover={{ scale: 1.05 }}
        >
          <p className="text-xs opacity-90 mb-1">Interested?</p>
          <p className="font-bold mb-3">Get a Free Quote</p>
          
          <div className="space-y-2">
            <a 
              href="https://wa.me/917579500264"
              className="flex items-center justify-center gap-2 bg-white text-indigo-600 py-2 px-4 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors"
            >
              <FaWhatsapp className="w-4 h-4" />
              WhatsApp
            </a>
            
            {!isMobile && (
              <div className="flex items-center justify-center gap-1 text-xs opacity-80">
                <FaCheck className="w-3 h-3" />
                <span>Free consultation</span>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    );
  }

  // ============================================
  // DEFAULT - Simple Back to Top + Progress
  // ============================================
  return (
    <AnimatePresence>
      {showBackToTop && (
        <motion.div
          className={`fixed z-30 ${isMobile ? 'bottom-20 right-4' : 'bottom-8 right-8'}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
        >
          <motion.button
            className="bg-indigo-500 text-white p-3 rounded-full shadow-xl hover:bg-indigo-600 transition-colors relative"
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {/* Progress ring */}
            <svg className="absolute inset-0 w-full h-full transform -rotate-90">
              <circle cx="50%" cy="50%" r="45%" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
              <circle
                cx="50%" cy="50%" r="45%"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeDasharray={`${scrollPercent * 2.83} 283`}
              />
            </svg>
            <FaArrowUp className="w-5 h-5 relative z-10" />
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageScrollAnimation;
