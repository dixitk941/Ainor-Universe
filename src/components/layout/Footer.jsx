import React from 'react';
import { Link } from 'react-router-dom';
import Container from './Container';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { IoMailOutline, IoCallOutline, IoChevronForward } from 'react-icons/io5';

const Footer = () => {
  const currentYear = new Date().getFullYear();
    return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white pt-24 pb-10 rounded-t-[2.5rem] shadow-lg relative z-10">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 px-4 md:px-8">
          {/* Company Info - One UI inspired with rounded elements */}
          <div className="space-y-6">
            <div className="flex items-center">
              <span className="text-blue-400 font-bold text-2xl">Ainor</span>
              {/* <span className="text-white font-bold text-2xl">Universe</span> */}
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Creating innovative digital solutions that transform businesses and drive growth in the digital landscape.
            </p>            <div className="flex flex-wrap gap-4">
              <SocialLink href="https://linkedin.com/in/dixitk941" icon={<FaLinkedinIn />} />
              <SocialLink href="https://github.com/dixitk941" icon={<FaGithub />} />
            </div>
          </div>
          
          {/* Quick Links - One UI inspired with rounded cards */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white flex items-center">
              <span className="bg-blue-500/20 w-8 h-8 rounded-xl flex items-center justify-center mr-3">
                <IoChevronForward className="text-blue-400" />
              </span>
              Quick Links
            </h3>            <ul className="space-y-4 pl-1">
              <FooterLink to="/services">Services</FooterLink>
              <FooterLink to="/portfolio">Our Work</FooterLink>
              <FooterLink to="/about">About Us</FooterLink>
              <FooterAnchorLink to="/" anchor="testimonials">Testimonials</FooterAnchorLink>
              <FooterLink to="/contact">Contact</FooterLink>
            </ul>
          </div>
          
          {/* Services - One UI inspired with rounded cards */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white flex items-center">
              <span className="bg-purple-500/20 w-8 h-8 rounded-xl flex items-center justify-center mr-3">
                <IoChevronForward className="text-purple-400" />
              </span>
              Services
            </h3>            <ul className="space-y-4 pl-1">
              <FooterLink to="/services">Web Development</FooterLink>
              <FooterLink to="/services">Mobile Apps</FooterLink>
              <FooterLink to="/services">UI/UX Design</FooterLink>
              <FooterLink to="/services">Digital Marketing</FooterLink>
              <FooterLink to="/services">E-commerce Solutions</FooterLink>
            </ul>
          </div>
          
          {/* Contact - One UI inspired with icon elements */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white flex items-center">
              <span className="bg-green-500/20 w-8 h-8 rounded-xl flex items-center justify-center mr-3">
                <IoCallOutline className="text-green-400" />
              </span>
              Contact
            </h3>
            <address className="not-italic text-gray-300 space-y-4 text-sm">
              {/* <p className="flex items-start">
                <span className="bg-gray-800 p-2 rounded-xl mr-3 mt-0.5">
                  <IoLocationOutline className="text-gray-400" />
                </span> */}
                {/* <span>
                  123 Innovation Street<br />
                  San Francisco, CA 94103
                </span> */}
              {/* </p> */}
              <p className="flex items-center">
                <span className="bg-gray-800 p-2 rounded-xl mr-3">
                  <IoMailOutline className="text-gray-400" />
                </span>
                neocodenex@gmail.com
              </p>
              <p className="flex items-center">
                <span className="bg-gray-800 p-2 rounded-xl mr-3">
                  <IoCallOutline className="text-gray-400" />
                </span>
                +919528202892
              </p>
            </address>
          </div>
        </div>
        
        {/* Newsletter - One UI 7 inspired rounded form */}
        <div className="mt-16 mb-16 bg-gray-800/50 rounded-[2rem] p-8 lg:p-10 backdrop-blur-sm shadow-inner mx-4 md:mx-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div className="mb-6 lg:mb-0 lg:mr-10">
              <h3 className="text-xl font-bold mb-2">Stay Updated</h3>
              <p className="text-gray-300 text-sm">
                Subscribe to our newsletter for the latest tech insights and updates.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="bg-gray-900/70 text-white rounded-full px-5 py-3 outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-auto"
              />
              <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-6 py-3 font-medium transition-colors duration-300 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        {/* Copyright - One UI styled */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center px-4 md:px-0">
          <p className="text-gray-400 text-sm">
            © {currentYear} Ainor Universe. All rights reserved.
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
