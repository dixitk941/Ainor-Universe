import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { FaArrowRight, FaBars, FaTimes, FaHome, FaLaptopCode, FaRobot, FaBriefcase, FaTag } from 'react-icons/fa';
import logo from '../../assets/logo.png';
import { MagneticButton } from '../ui/AnimationComponents';
import { useEntranceAnimation } from '../ui/PageEntranceAnimation';

const FloatingNav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { triggerAnimation } = useEntranceAnimation();
  
  // Scroll progress
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navItems = [
    { path: '/services', label: 'Services' },
    { path: '/ai-services', label: 'AI Services' },
    { path: '/about', label: 'About' },
    { path: '/pricing', label: 'Pricing' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/blog', label: 'Blog' },
  ];

  // Bottom bar items for mobile
  const bottomBarItems = [
    { path: '/', label: 'Home', icon: <FaHome /> },
    { path: '/services', label: 'Services', icon: <FaLaptopCode /> },
    { path: '/ai-services', label: 'AI', icon: <FaRobot /> },
    { path: '/portfolio', label: 'Portfolio', icon: <FaBriefcase /> },
    { path: '/pricing', label: 'Pricing', icon: <FaTag /> },
  ];

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-[100] origin-left"
        style={{ scaleX }}
        initial={{ opacity: 0 }}
        animate={{ opacity: triggerAnimation ? 1 : 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      />

      {/* Floating Navigation */}
      <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
        <motion.nav
          initial={{ y: -120, opacity: 0, filter: 'blur(10px)' }}
          animate={triggerAnimation ? { 
            y: 0, 
            opacity: 1, 
            filter: 'blur(0px)'
          } : { 
            y: -120, 
            opacity: 0, 
            filter: 'blur(10px)'
          }}
          transition={{ 
            duration: 0.9, 
            ease: [0.22, 1, 0.36, 1],
            delay: 0.1
          }}
          className={`w-full max-w-[1100px] bg-white/90 backdrop-blur-xl border border-white/50 shadow-soft rounded-full px-6 py-3 flex items-center justify-between transition-all duration-300 ${
            isScrolled ? 'shadow-lg bg-white/95' : ''
          }`}
        >
          {/* Logo */}
          <MagneticButton strength={0.2}>
            <Link to="/" className="flex items-center gap-3 transition-opacity">
              <motion.img 
                src={logo} 
                alt="Ainor Logo" 
                className="w-9 h-9 rounded-full object-cover"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              />
              <span className="text-xl font-bold tracking-tight text-gray-900">Ainor</span>
            </Link>
          </MagneticButton>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <MagneticButton key={item.path} strength={0.15}>
                <Link
                  to={item.path}
                  className="relative text-sm font-medium transition-colors text-gray-600"
                >
                  <motion.span
                    initial={{ y: 0 }}
                    whileHover={{ y: -2 }}
                    className={location.pathname === item.path ? 'text-black' : ''}
                  >
                    {item.label}
                  </motion.span>
                  {location.pathname === item.path && (
                    <motion.div
                      layoutId="navIndicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-black rounded-full"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              </MagneticButton>
            ))}
          </div>

          {/* CTA Button */}
          <MagneticButton strength={0.2} className="hidden md:block">
            <Link
              to="/contact"
              className="flex bg-black text-white text-sm font-bold px-6 py-2.5 rounded-full transition-all items-center gap-2"
            >
              <span>Get Started</span>
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <FaArrowRight className="text-[14px]" />
              </motion.span>
            </Link>
          </MagneticButton>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            whileTap={{ scale: 0.9 }}
            className="md:hidden w-9 h-9 bg-black rounded-full flex items-center justify-center text-white"
          >
            <motion.div
              animate={{ rotate: mobileMenuOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {mobileMenuOpen ? <FaTimes /> : <FaBars />}
            </motion.div>
          </motion.button>
        </motion.nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            {/* Backdrop */}
            <div
              onClick={() => setMobileMenuOpen(false)}
              className="absolute inset-0 bg-black/20 backdrop-blur-sm"
            />
            
            {/* Menu Content */}
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -100, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="absolute top-24 left-4 right-4 bg-white rounded-3xl shadow-2xl p-6"
            >
              <div className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`text-base font-medium py-3 px-4 rounded-xl transition-colors ${
                      location.pathname === item.path
                        ? 'bg-gray-100 text-black'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  to="/contact"
                  className="bg-black hover:bg-gray-800 text-white text-base font-bold py-3 px-4 rounded-xl transition-all flex items-center justify-center gap-2 mt-2"
                >
                  <span>Get Started</span>
                  <FaArrowRight className="text-[14px]" />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Bottom Navigation Bar - Floating Style */}
      <motion.div 
        className="md:hidden fixed bottom-0 left-0 right-0 z-50 px-4 pb-4"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="mx-auto rounded-2xl bg-white/95 backdrop-blur-md shadow-lg border border-gray-200/50">
          <div className="grid grid-cols-5 gap-1 py-2 px-2">
            {bottomBarItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}
                className="flex flex-col items-center justify-center py-1"
              >
                <motion.div 
                  className={`p-2 rounded-xl transition-colors ${
                    location.pathname === item.path 
                      ? 'bg-black text-white shadow-md' 
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  {React.cloneElement(item.icon, { className: "h-5 w-5" })}
                </motion.div>
                <motion.span 
                  className={`text-[10px] mt-1 font-medium transition-colors ${
                    location.pathname === item.path ? 'text-black' : 'text-gray-500'
                  }`}
                >
                  {item.label}
                </motion.span>
              </Link>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default FloatingNav;
