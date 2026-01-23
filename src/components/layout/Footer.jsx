import React from 'react';
import { Link } from 'react-router-dom';
import Container from './Container';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { IoMailOutline, IoCallOutline, IoChevronForward, IoShieldCheckmarkOutline, IoCheckmarkCircleOutline } from 'react-icons/io5';
import { HiOutlineBadgeCheck } from 'react-icons/hi';

const Footer = () => {
  const currentYear = new Date().getFullYear();
    return (
    <footer className="bg-gradient-to-b from-gray-900 via-gray-900 to-gray-950 text-white pt-20 pb-8 relative z-10">
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"></div>
      
      <Container>
        {/* Trust Badges Section */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-16 px-4">
          <div className="flex items-center gap-2 bg-gradient-to-r from-green-900/30 to-green-800/20 border border-green-500/30 rounded-full px-5 py-2.5 backdrop-blur-sm">
            <IoShieldCheckmarkOutline className="text-green-400 text-xl" />
            <span className="text-green-300 text-sm font-medium">MSME Registered</span>
          </div>
          <div className="flex items-center gap-2 bg-gradient-to-r from-blue-900/30 to-blue-800/20 border border-blue-500/30 rounded-full px-5 py-2.5 backdrop-blur-sm">
            <HiOutlineBadgeCheck className="text-blue-400 text-xl" />
            <span className="text-blue-300 text-sm font-medium">Govt. of India Recognized</span>
          </div>
          <div className="flex items-center gap-2 bg-gradient-to-r from-purple-900/30 to-purple-800/20 border border-purple-500/30 rounded-full px-5 py-2.5 backdrop-blur-sm">
            <IoCheckmarkCircleOutline className="text-purple-400 text-xl" />
            <span className="text-purple-300 text-sm font-medium">Udyam Certified</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 px-4 md:px-8">
          {/* Company Info - Professional styling */}
          <div className="space-y-6 lg:col-span-1">
            <div className="flex items-center">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 font-bold text-2xl tracking-tight">AINOR</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Creating innovative digital solutions that transform businesses and drive growth in the digital landscape. Your trusted technology partner.
            </p>
            <div className="flex flex-wrap gap-3">
              <SocialLink href="https://linkedin.com/in/dixitk941" icon={<FaLinkedinIn />} />
              <SocialLink href="https://github.com/dixitk941" icon={<FaGithub />} />
            </div>
          </div>
          
          {/* Quick Links - Professional styling */}
          <div>
            <h3 className="text-base font-semibold mb-6 text-white flex items-center">
              <span className="bg-blue-500/20 w-8 h-8 rounded-lg flex items-center justify-center mr-3">
                <IoChevronForward className="text-blue-400" />
              </span>
              Quick Links
            </h3>
            <ul className="space-y-3 pl-1">
              <FooterLink to="/services">Services</FooterLink>
              <FooterLink to="/portfolio">Our Work</FooterLink>
              <FooterLink to="/about">About Us</FooterLink>
              <FooterAnchorLink to="/" anchor="testimonials">Testimonials</FooterAnchorLink>
              <FooterLink to="/contact">Contact</FooterLink>
            </ul>
          </div>
          
          {/* Services - Professional styling */}
          <div>
            <h3 className="text-base font-semibold mb-6 text-white flex items-center">
              <span className="bg-purple-500/20 w-8 h-8 rounded-lg flex items-center justify-center mr-3">
                <IoChevronForward className="text-purple-400" />
              </span>
              Services
            </h3>
            <ul className="space-y-3 pl-1">
              <FooterLink to="/services">Web Development</FooterLink>
              <FooterLink to="/services">Mobile Apps</FooterLink>
              <FooterLink to="/services">UI/UX Design</FooterLink>
              <FooterLink to="/services">Digital Marketing</FooterLink>
              <FooterLink to="/services">E-commerce Solutions</FooterLink>
            </ul>
          </div>
          
          {/* Contact - Professional styling */}
          <div>
            <h3 className="text-base font-semibold mb-6 text-white flex items-center">
              <span className="bg-green-500/20 w-8 h-8 rounded-lg flex items-center justify-center mr-3">
                <IoCallOutline className="text-green-400" />
              </span>
              Contact
            </h3>
            <address className="not-italic text-gray-400 space-y-4 text-sm">
              <p className="flex items-center hover:text-white transition-colors">
                <span className="bg-gray-800/80 p-2 rounded-lg mr-3">
                  <IoMailOutline className="text-gray-400" />
                </span>
                neocodenex@gmail.com
              </p>
              <p className="flex items-center hover:text-white transition-colors">
                <span className="bg-gray-800/80 p-2 rounded-lg mr-3">
                  <IoCallOutline className="text-gray-400" />
                </span>
                +919528202892
              </p>
            </address>
          </div>
        </div>
        
        {/* Newsletter - Professional styling */}
        <div className="mt-16 mb-12 bg-gradient-to-r from-gray-800/60 to-gray-800/40 rounded-2xl p-8 lg:p-10 backdrop-blur-sm border border-gray-700/50 mx-4 md:mx-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div className="mb-6 lg:mb-0 lg:mr-10">
              <h3 className="text-xl font-bold mb-2 text-white">Stay Updated</h3>
              <p className="text-gray-400 text-sm">
                Subscribe to our newsletter for the latest tech insights and updates.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="bg-gray-900/70 text-white rounded-full px-5 py-3 outline-none focus:ring-2 focus:ring-blue-500 border border-gray-700/50 w-full sm:w-72 placeholder-gray-500"
              />
              <button className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white rounded-full px-6 py-3 font-medium transition-all duration-300 whitespace-nowrap shadow-lg hover:shadow-blue-500/25">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* MSME Registration Info */}
        <div className="border-t border-gray-800/50 mt-8 pt-8 px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-6">
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <IoShieldCheckmarkOutline className="text-green-500 text-lg" />
              <span>MSME Registered</span>
              <span className="text-gray-600">|</span>
              <span className="text-gray-300 font-medium">UDYAM Registration No: UDYAM-UP-36-0033877</span>
            </div>
          </div>
        </div>
        
        {/* Copyright - Professional styling */}
        <div className="border-t border-gray-800/50 mt-4 pt-6 text-center px-4 md:px-0">
          <p className="text-gray-500 text-sm">
            © {currentYear} AINOR. All rights reserved. | A Government of India Recognized MSME
          </p>
        </div>
      </Container>
    </footer>
  );
};

const SocialLink = ({ href, icon }) => {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="h-11 w-11 rounded-xl bg-gray-800 flex items-center justify-center text-gray-300 hover:bg-blue-500 hover:text-white transition-all duration-300 shadow-sm"
      aria-label="Social media link"
    >
      {icon}
    </a>
  );
};

const FooterLink = ({ to, children }) => {
  const handleClick = () => {
    // Scroll to top when navigating
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <li>
      <Link 
        to={to} 
        onClick={handleClick}
        className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm flex items-center group"
      >
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-gray-600 mr-2 group-hover:bg-blue-400 transition-colors"></span>
        {children}
      </Link>
    </li>
  );
};

const FooterAnchorLink = ({ to, anchor, children }) => {
  const handleClick = () => {
    // Navigate to page first, then scroll to anchor
    setTimeout(() => {
      const element = document.getElementById(anchor);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <li>
      <Link 
        to={to} 
        onClick={handleClick}
        className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm flex items-center group"
      >
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-gray-600 mr-2 group-hover:bg-blue-400 transition-colors"></span>
        {children}
      </Link>
    </li>
  );
};

export default Footer;
