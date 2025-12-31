import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHome, FaLaptopCode, FaBriefcase, FaInfoCircle, FaBookOpen, FaTag, FaUserTie, FaQuestion, FaEnvelope } from 'react-icons/fa';
import { IoMenuOutline, IoCloseOutline } from 'react-icons/io5';
import logo from '../../assets/logo.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showContactDropdown, setShowContactDropdown] = useState(false);
  const location = useLocation();

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  // Close expanded mobile menu when route changes and scroll to top
  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Main navigation items with icons for mobile
  const navItems = [
    { path: '/', label: 'Home', icon: <FaHome /> },
    { path: '/services', label: 'Services', icon: <FaLaptopCode /> },
    { path: '/portfolio', label: 'Portfolio', icon: <FaBriefcase /> },
    { path: '/about', label: 'About', icon: <FaInfoCircle /> },
    { path: '/blog', label: 'Blog', icon: <FaBookOpen /> },
    { path: '/pricing', label: 'Pricing', icon: <FaTag /> },
    { path: '/careers', label: 'Careers', icon: <FaUserTie /> },
    { path: '/faq', label: 'FAQ', icon: <FaQuestion /> },
    { path: '/contact', label: 'Contact', icon: <FaEnvelope /> },
  ];
  // For mobile menu, primary items shown directly
  const primaryNavItems = navItems.slice(0, 5);

  // Smooth spring config for animations
  const smoothSpring = {
    type: "spring",
    stiffness: 100,
    damping: 20,
    mass: 0.5
  };

  const smootherSpring = {
    type: "spring", 
    stiffness: 80,
    damping: 15,
    mass: 0.8
  };

  return (    <>      {/* Main Navbar - Attached to top initially, floating on scroll */}
      <motion.nav 
        className="fixed top-0 left-0 right-0 z-50"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Full-width background layer - Always white */}
        <div
          className="absolute inset-0 backdrop-blur-md bg-white/95"
        />
        
        {/* Content container */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-18">
            {/* Logo */}
            <motion.div
              initial={false}
              animate={isScrolled 
                ? { scale: 1.02 } 
                : { scale: 1 }
              }
              transition={smoothSpring}
              className="flex items-center"
            >
              <Link 
                to="/" 
                onClick={() => {
                  setTimeout(() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }, 100);
                }}
                className="flex items-center space-x-3"
              >
                <motion.img 
                  src={logo} 
                  alt="AINOR Logo" 
                  className="h-10 w-auto md:h-12 lg:h-14"
                  animate={isScrolled 
                    ? { filter: 'drop-shadow(0 2px 8px rgba(59, 130, 246, 0.3))' } 
                    : { filter: 'drop-shadow(0 0px 0px transparent)' }
                  }
                  transition={{ duration: 0.3 }}
                />
                <span
                  className="font-bold text-xl md:text-2xl tracking-tight text-slate-800"
                >
                  <span className="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">A</span>INOR
                </span>
              </Link>
            </motion.div>
              
              {/* Mobile Menu Toggle - One UI style with rounded button */}
              <div className="flex md:hidden items-center">
                <motion.button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="p-2 rounded-full text-gray-900 hover:bg-gray-100"
                  aria-label="Toggle menu"
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.15 }}
                >
                  <AnimatePresence mode="wait">
                    {mobileMenuOpen ? (
                      <motion.div
                        key="close"
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <IoCloseOutline className="h-6 w-6" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="menu"
                        initial={{ rotate: 90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: -90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <IoMenuOutline className="h-6 w-6" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>
              </div>
              
              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center gap-0.5 lg:gap-1">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.3, ease: "easeOut" }}
                  >
                    <NavLink 
                      to={item.path}
                    >
                      {item.label}
                    </NavLink>
                  </motion.div>
                ))}
                <motion.div 
                  className="ml-2 lg:ml-4 relative"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4, duration: 0.3 }}
                >
                  <button 
                    onClick={() => setShowContactDropdown(!showContactDropdown)}
                    className="inline-flex items-center justify-center px-5 py-2 font-medium rounded-lg text-sm transition-all duration-300 bg-gradient-to-r from-blue-500 to-indigo-500 text-white hover:from-blue-600 hover:to-indigo-600 shadow-md shadow-blue-500/20"
                  >
                    Get in Touch
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {showContactDropdown && (
                      <>
                        {/* Backdrop to close dropdown */}
                        <div 
                          className="fixed inset-0 z-40" 
                          onClick={() => setShowContactDropdown(false)}
                        />
                        <motion.div
                          initial={{ opacity: 0, y: -10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="absolute right-0 mt-2 w-56 rounded-xl shadow-xl bg-white border border-gray-200 overflow-hidden z-50"
                        >
                          <div className="py-2">
                            <a
                              href="tel:+919528202892"
                              className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 transition-colors group"
                              onClick={() => setShowContactDropdown(false)}
                            >
                              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3 group-hover:bg-blue-200 transition-colors">
                                <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                </svg>
                              </div>
                              <div>
                                <div className="font-medium">Call Us</div>
                                <div className="text-xs text-gray-500">+91 9528202892</div>
                              </div>
                            </a>
                            <a
                              href="https://wa.me/917579500264?text=Hi%20AINOR!%20I%20want%20to%20discuss%20my%20project."
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-green-50 transition-colors group"
                              onClick={() => setShowContactDropdown(false)}
                            >
                              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3 group-hover:bg-green-200 transition-colors">
                                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                                </svg>
                              </div>
                              <div>
                                <div className="font-medium">WhatsApp</div>
                                <div className="text-xs text-gray-500">Chat instantly</div>
                              </div>
                            </a>
                            <a
                              href="mailto:neocodenex@gmail.com"
                              className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-indigo-50 transition-colors group"
                              onClick={() => setShowContactDropdown(false)}
                            >
                              <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center mr-3 group-hover:bg-indigo-200 transition-colors">
                                <svg className="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                </svg>
                              </div>
                              <div>
                                <div className="font-medium">Email</div>
                                <div className="text-xs text-gray-500">neocodenex@gmail.com</div>
                              </div>
                            </a>
                          </div>
                        </motion.div>
                      </>
                    )}
                  </AnimatePresence>
                </motion.div>
              </div>
          </div>
        </div>
        
        {/* Mobile Menu - One UI 7 style with rounded card */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="mx-4 mt-2 rounded-2xl overflow-hidden md:hidden bg-white/95 shadow-lg border border-gray-200/20 backdrop-blur-md"
            >
              <div className="py-4 px-2">
                <div className="grid grid-cols-1 gap-1">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.path}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05, duration: 0.3, ease: "easeOut" }}
                    >
                      <MobileNavLink 
                        to={item.path}
                        icon={item.icon}
                        label={item.label}
                      />
                    </motion.div>
                  ))}
                </div>
                {/* One UI style call-to-action */}
                <motion.div 
                  className="mt-4 px-3"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.3 }}
                >
                  <div className="space-y-2">
                    <a
                      href="tel:+919528202892"
                      className="flex items-center w-full py-3 px-4 font-medium rounded-full transition-all duration-300 bg-blue-500 text-white hover:bg-blue-600"
                    >
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                      Call: +91 9528202892
                    </a>
                    <a
                      href="https://wa.me/917579500264?text=Hi%20AINOR!%20I%20want%20to%20discuss%20my%20project."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center w-full py-3 px-4 font-medium rounded-full transition-all duration-300 bg-green-500 text-white hover:bg-green-600"
                    >
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                      </svg>
                      WhatsApp Chat
                    </a>
                    <a
                      href="mailto:neocodenex@gmail.com"
                      className="flex items-center w-full py-3 px-4 font-medium rounded-full transition-all duration-300 bg-indigo-500 text-white hover:bg-indigo-600"
                    >
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                      Email Us
                    </a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Bottom Tab Bar for Mobile - One UI 7 Style */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 pb-safe px-2 sm:px-3">
        <div className="mx-auto my-1.5 sm:my-2 rounded-[1.5rem] bg-gray-900/95 backdrop-blur-lg border border-gray-800/30 shadow-lg">
          <div className="grid grid-cols-5 gap-0.5 sm:gap-1 py-1 sm:py-1.5">
            {primaryNavItems.map((item) => (
              <MobileNavTab 
                key={item.path}
                to={item.path}
                icon={item.icon}
                label={item.label}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Add bottom padding to content to accommodate the mobile nav bar */}
      <div className="md:hidden h-14"></div>
    </>
  );
};

const NavLink = ({ to, children }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  const handleClick = () => {
    // Scroll to top when navigating to a new page
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };
  
  return (
    <Link 
      to={to} 
      onClick={handleClick}
      className="relative"
    >
      <motion.div
        className={`px-3 lg:px-4 py-2 rounded-lg text-sm font-medium relative text-gray-700 ${isActive ? 'text-blue-600 font-semibold' : ''}`}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.15 }}
      >
        {/* Background hover effect */}
        <motion.div
          className="absolute inset-0 rounded-lg bg-gray-100/80"
          initial={{ opacity: isActive ? 1 : 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          style={{ opacity: isActive ? 0.6 : 0 }}
        />
        <span className="relative z-10">{children}</span>
        {/* Active indicator dot */}
        {isActive && (
          <motion.span 
            className="absolute bottom-0.5 left-1/2 w-1 h-1 rounded-full bg-blue-500"
            layoutId="activeIndicator"
            initial={{ scale: 0, x: '-50%' }}
            animate={{ scale: 1, x: '-50%' }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        )}
      </motion.div>
    </Link>
  );
};

const MobileNavLink = ({ to, icon, label }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  const handleClick = () => {
    // Scroll to top when navigating to a new page
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };
  
  return (
    <Link 
      to={to} 
      onClick={handleClick}
    >
      <motion.div
        className={`flex items-center px-4 py-3 rounded-xl text-gray-800 ${isActive ? 'bg-blue-50' : ''}`}
        whileHover={{ 
          backgroundColor: isActive ? 'rgba(239, 246, 255, 1)' : 'rgba(243, 244, 246, 1)',
          x: 4
        }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        <motion.div 
          className={`mr-4 ${isActive ? 'text-blue-500' : ''}`}
          animate={isActive ? { scale: [1, 1.1, 1] } : { scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          {React.cloneElement(icon, { className: "h-5 w-5" })}
        </motion.div>
        <span className="font-medium">{label}</span>
      </motion.div>
    </Link>
  );
};

const MobileNavTab = ({ to, icon, label }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  const handleClick = () => {
    // Scroll to top when navigating to a new page
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };
    return (
    <Link 
      to={to} 
      onClick={handleClick}
      className="flex flex-col items-center justify-center py-1.5 text-white"
    >
      <motion.div 
        className={`p-1.5 rounded-xl ${isActive ? 'bg-blue-500/20 text-blue-300' : ''}`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        {React.cloneElement(icon, { className: "h-4 w-4" })}
      </motion.div>
      <motion.span 
        className="text-xs mt-0.5 font-medium"
        animate={{ 
          scale: isActive ? 1.05 : 1,
          fontWeight: isActive ? 600 : 500
        }}
        transition={{ duration: 0.2 }}
      >
        {label}
      </motion.span>
    </Link>
  );
};

export default Navbar;
