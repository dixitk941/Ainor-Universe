import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHome, FaLaptopCode, FaBriefcase, FaInfoCircle, FaBookOpen, FaTag, FaUserTie, FaQuestion, FaEnvelope } from 'react-icons/fa';
import { IoMenuOutline, IoCloseOutline } from 'react-icons/io5';
import Container from './Container';
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

  return (
    <>
      {/* Main Navbar - One UI 7 Inspired */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'py-1' : 'py-3'}`}>
        <Container>
          <div className={`rounded-[2rem] transition-all duration-300 ${
            isScrolled 
              ? 'bg-white/95 shadow-lg border border-gray-200/20 backdrop-blur-md' 
              : 'bg-gray-900/70 backdrop-blur-md border border-gray-800/30'
          }`}>
            <div className="flex justify-between items-center h-16 px-5 md:px-7">              {/* Logo - One UI style with logo image and text */}
              <div className="flex items-center">
                <Link 
                  to="/" 
                  onClick={() => {
                    setTimeout(() => {
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }, 100);
                  }}
                  className="flex items-center space-x-3"
                >
                  <img 
                    src={logo} 
                    alt="AINOR Logo" 
                    className="h-8 w-auto md:h-10 transition-all duration-300"
                  />
                  <span className={`font-bold text-2xl md:text-2xl transition-colors duration-300 ${
                    isScrolled ? 'text-gray-900' : 'text-white'
                  }`}>
                    <span className="text-blue-500">A</span>INOR
                  </span>
                </Link>
              </div>
              
              {/* Mobile Menu Toggle - One UI style with rounded button */}
              <div className="flex md:hidden items-center">
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className={`p-2 rounded-full ${
                    isScrolled 
                      ? 'text-gray-900 hover:bg-gray-100' 
                      : 'text-white hover:bg-white/10'
                  }`}
                  aria-label="Toggle menu"
                >
                  {mobileMenuOpen ? (
                    <IoCloseOutline className="h-6 w-6" />
                  ) : (
                    <IoMenuOutline className="h-6 w-6" />
                  )}
                </button>
              </div>
              
              {/* Desktop Navigation - One UI style with clean spacing */}
              <div className="hidden md:flex items-center gap-1">
                {navItems.map((item) => (
                  <NavLink 
                    key={item.path}
                    to={item.path} 
                    isScrolled={isScrolled}
                  >
                    {item.label}
                  </NavLink>
                ))}
                  <div className="ml-3">
                  <Link 
                    to="/contact" 
                    onClick={() => {
                      setTimeout(() => {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }, 100);
                    }}
                    className={`inline-flex items-center justify-center px-6 py-2.5 font-medium rounded-full transition-all duration-300 
                      ${isScrolled 
                        ? 'bg-blue-500 text-white hover:bg-blue-600 shadow-md' 
                        : 'bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20'
                      }`}
                  >
                    Get in Touch
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          {/* Mobile Menu - One UI 7 style with rounded card */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className={`mt-2 rounded-[1.5rem] overflow-hidden ${
                  isScrolled 
                    ? 'bg-white/95 shadow-lg border border-gray-200/20 backdrop-blur-md' 
                    : 'bg-gray-900/90 backdrop-blur-md border border-gray-800/30'
                }`}
              >
                <div className="py-4 px-2">
                  <div className="grid grid-cols-1 gap-1">
                    {navItems.map((item) => (
                      <MobileNavLink 
                        key={item.path}
                        to={item.path}
                        icon={item.icon}
                        label={item.label}
                        isScrolled={isScrolled}
                      />
                    ))}
                  </div>
                    {/* One UI style call-to-action */}
                  <div className="mt-4 px-3">
                    <Link 
                      to="/contact" 
                      onClick={() => {
                        setTimeout(() => {
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }, 100);
                      }}
                      className={`flex items-center justify-center w-full py-3 font-medium rounded-full transition-all duration-300 
                        ${isScrolled 
                          ? 'bg-blue-500 text-white hover:bg-blue-600' 
                          : 'bg-white/10 text-white hover:bg-white/20'
                        }`}
                    >
                      Get in Touch
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </Container>
      </nav>

      {/* Bottom Tab Bar for Mobile - One UI 7 Style */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 pb-safe px-4">
        <div className="mx-auto my-3 rounded-[1.5rem] bg-gray-900/95 backdrop-blur-lg border border-gray-800/30 shadow-lg">
          <div className="grid grid-cols-5 gap-1 py-2">
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
      <div className="md:hidden h-20"></div>
    </>
  );
};

const NavLink = ({ to, children, isScrolled = false }) => {
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
      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 
      ${isScrolled 
        ? `text-gray-700 hover:bg-gray-100 ${isActive ? 'bg-blue-50 text-blue-600' : ''}` 
        : `text-gray-100 hover:bg-white/10 ${isActive ? 'bg-white/10 text-white' : ''}`
      }`}
    >
      {children}
    </Link>
  );
};

const MobileNavLink = ({ to, icon, label, isScrolled = false }) => {
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
      className={`flex items-center px-4 py-3 rounded-xl transition-all duration-300
      ${isScrolled 
        ? `text-gray-800 ${isActive ? 'bg-blue-50' : 'hover:bg-gray-100'}` 
        : `text-white ${isActive ? 'bg-white/10' : 'hover:bg-white/5'}`
      }`}
    >
      <div className={`mr-4 ${isActive ? (isScrolled ? 'text-blue-500' : 'text-blue-400') : ''}`}>
        {React.cloneElement(icon, { className: "h-5 w-5" })}
      </div>
      <span className="font-medium">{label}</span>
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
      className="flex flex-col items-center justify-center py-2 text-white transition-colors"
    >
      <div className={`p-2 rounded-xl transition-colors ${isActive ? 'bg-blue-500/20 text-blue-300' : ''}`}>
        {React.cloneElement(icon, { className: "h-5 w-5" })}
      </div>
      <span className="text-xs mt-1 font-medium">{label}</span>
    </Link>
  );
};

export default Navbar;
