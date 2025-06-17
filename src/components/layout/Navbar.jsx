import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHome, FaLaptopCode, FaBriefcase, FaInfoCircle, FaBookOpen, FaTag, FaUserTie, FaQuestion, FaEnvelope, FaEllipsisH } from 'react-icons/fa';
import Container from './Container';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuExpanded, setMobileMenuExpanded] = useState(false);
  const location = useLocation();

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close expanded mobile menu when route changes
  useEffect(() => {
    setMobileMenuExpanded(false);
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

  // For mobile tab bar, use only the primary 4 items plus a "more" option
  const primaryNavItems = navItems.slice(0, 4);
  const secondaryNavItems = navItems.slice(4);

  return (
    <>
      {/* Desktop & Mobile Top Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-500">
        <Container>
          <div className={`floating-header mx-auto my-3 rounded-xl ${isScrolled ? 'bg-white/90 shadow-lg' : 'bg-gray-900/75'} backdrop-blur-md border border-gray-200/20 max-w-[96%] md:max-w-none`}>
            <div className="flex justify-between items-center h-16 px-4 md:px-6">
              {/* Logo */}
              <div className="flex items-center">
                <Link to="/" className="flex items-center">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500 font-bold text-2xl md:text-3xl">
                    AINOR
                  </span>
                </Link>
              </div>
              
              {/* Mobile Get in Touch Button */}
              <div className="md:hidden">
                <Link 
                  to="/contact" 
                  className={`inline-flex items-center justify-center px-3 py-1.5 text-sm font-medium rounded-lg transition-all duration-300 
                    ${isScrolled 
                      ? 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-sm' 
                      : 'bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20'
                    }`}
                >
                  Get in Touch
                </Link>
              </div>
              
              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-1">
                {navItems.map((item) => (
                  <NavLink 
                    key={item.path}
                    to={item.path} 
                    isPageLink={item.path !== '/'} 
                    isScrolled={isScrolled}
                  >
                    {item.label}
                  </NavLink>
                ))}
                <div className="ml-4">
                  <Link 
                    to="/contact" 
                    className={`inline-flex items-center justify-center px-5 py-2 font-medium rounded-lg transition-all duration-300 
                      ${isScrolled 
                        ? 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-md hover:shadow-indigo-500/30' 
                        : 'bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20'
                      }`}
                  >
                    Get in Touch
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </nav>

      {/* Mobile Bottom Tab Navigation - Floating Style */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 pb-safe px-4">
        <div className="mx-auto my-3 rounded-xl bg-gray-900/95 backdrop-blur-lg border border-gray-800 shadow-lg max-w-[96%]">
          <AnimatePresence>
            {mobileMenuExpanded && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="px-2 pb-2 grid grid-cols-4 gap-1"
              >
                {secondaryNavItems.map((item) => (
                  <MobileNavTab 
                    key={item.path}
                    to={item.path}
                    icon={item.icon}
                    label={item.label}
                  />
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          <div className="grid grid-cols-5 gap-1 py-1">
            {primaryNavItems.map((item) => (
              <MobileNavTab 
                key={item.path}
                to={item.path}
                icon={item.icon}
                label={item.label}
              />
            ))}
            <button
              onClick={() => setMobileMenuExpanded(!mobileMenuExpanded)}
              className="flex flex-col items-center justify-center py-2 text-white transition-colors"
            >
              <div className={`p-1.5 rounded-full transition-colors ${mobileMenuExpanded ? 'bg-indigo-600/30 text-indigo-300' : ''}`}>
                <FaEllipsisH className="h-5 w-5" />
              </div>
              <span className="text-xs mt-1 font-medium">More</span>
            </button>
          </div>
        </div>
      </div>

      {/* Add bottom padding to content to accommodate the mobile nav bar */}
      <div className="md:hidden h-20"></div>
    </>
  );
};

const NavLink = ({ to, children, isPageLink = false, isScrolled = false }) => {
  const location = useLocation();
  const isActive = location.pathname === to || (to.includes('#') && location.hash === to.substring(to.indexOf('#')));
  
  return (
    <Link 
      to={to} 
      className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-indigo-600/10 hover:text-indigo-400 hover:scale-105 
      ${isScrolled ? 'text-gray-800' : 'text-white'} 
      ${isActive ? 'bg-indigo-600/10 text-indigo-400' : ''}
      ${isPageLink ? 'border-b-2 border-indigo-500/30' : ''}`}
    >
      {children}
    </Link>
  );
};

const MobileNavTab = ({ to, icon, label }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link 
      to={to} 
      className="flex flex-col items-center justify-center py-2 text-white transition-colors"
    >
      <div className={`p-1.5 rounded-full transition-colors ${isActive ? 'bg-indigo-600/30 text-indigo-300' : ''}`}>
        {React.cloneElement(icon, { className: "h-5 w-5" })}
      </div>
      <span className="text-xs mt-1 font-medium">{label}</span>
    </Link>
  );
};

export default Navbar;
