import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Container from './Container';
import Button from '../ui/Button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-500">
      <Container>
        <div className={`floating-header mx-4 my-3 rounded-xl ${isScrolled ? 'bg-white/80' : 'bg-black/40'} backdrop-blur-md`}>
          <div className="flex justify-between items-center h-16 px-6">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500 font-bold text-2xl md:text-3xl">
                  AINOR
                </span>
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              <NavLink to="/#services">Services</NavLink>
              <NavLink to="/services" isPageLink={true}>Service Details</NavLink>
              <NavLink to="/#work">Work</NavLink>
              <NavLink to="/#about">About</NavLink>
              <NavLink to="/contact" isPageLink={true}>Contact</NavLink>
              <Button href="/contact" size="sm" className="ml-4">Get in Touch</Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`p-2 rounded-md focus:outline-none ${isScrolled ? 'text-gray-900' : 'text-white'}`}
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
          
          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 rounded-lg mt-2 mb-3 mx-3 bg-black/50 backdrop-blur-lg">
                <MobileNavLink to="/#services">Services</MobileNavLink>
                <MobileNavLink to="/services" isPageLink={true}>Service Details</MobileNavLink>
                <MobileNavLink to="/#work">Work</MobileNavLink>
                <MobileNavLink to="/#about">About</MobileNavLink>
                <MobileNavLink to="/contact" isPageLink={true}>Contact</MobileNavLink>
                <Button href="/contact" variant="primary" size="sm" className="w-full mt-4">Get in Touch</Button>
              </div>
            </div>
          )}
        </div>
      </Container>
    </nav>
  );
};

const NavLink = ({ to, children, isPageLink = false }) => {
  return (
    <Link 
      to={to} 
      className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-indigo-600/10 hover:text-indigo-400 hover:scale-105 text-white ${isPageLink ? 'border-b-2 border-indigo-500/30' : ''}`}
    >
      {children}
    </Link>
  );
};

const MobileNavLink = ({ to, children, isPageLink = false }) => {
  return (
    <Link 
      to={to} 
      className={`block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-indigo-600/20 hover:text-indigo-300 transition-all duration-300 ${isPageLink ? 'border-l-2 border-indigo-500' : ''}`}
    >
      {children}
    </Link>
  );
};

export default Navbar;
