import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHome, FaLaptopCode, FaBriefcase, FaInfoCircle, FaBookOpen, FaTag, FaUserTie, FaQuestion, FaEnvelope } from 'react-icons/fa';
import { IoMenuOutline, IoCloseOutline } from 'react-icons/io5';
import logo from '../../assets/logo.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
                  className="ml-2 lg:ml-4"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4, duration: 0.3 }}
                >
                  <Link 
                    to="/contact" 
                    onClick={() => {
                      setTimeout(() => {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }, 100);
                    }}
                    className="inline-flex items-center justify-center px-5 py-2 font-medium rounded-lg text-sm transition-all duration-300 bg-gradient-to-r from-blue-500 to-indigo-500 text-white hover:from-blue-600 hover:to-indigo-600 shadow-md shadow-blue-500/20"
                  >
                    Get in Touch
                  </Link>
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
                  <Link 
                    to="/contact" 
                    onClick={() => {
                      setTimeout(() => {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }, 100);
                    }}
                    className="flex items-center justify-center w-full py-3 font-medium rounded-full transition-all duration-300 bg-blue-500 text-white hover:bg-blue-600"
                  >
                    Get in Touch
                  </Link>
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
