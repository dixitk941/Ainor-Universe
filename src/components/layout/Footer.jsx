import React from 'react';
import Container from './Container';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center">
              <span className="text-indigo-400 font-bold text-2xl">Ainor</span>
              <span className="text-white font-bold text-2xl">Universe</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Creating innovative digital solutions that transform businesses and drive growth in the digital landscape.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="https://facebook.com" icon={<FaFacebookF />} />
              <SocialLink href="https://twitter.com" icon={<FaTwitter />} />
              <SocialLink href="https://instagram.com" icon={<FaInstagram />} />
              <SocialLink href="https://linkedin.com" icon={<FaLinkedinIn />} />
              <SocialLink href="https://github.com" icon={<FaGithub />} />
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <FooterLink href="#services">Services</FooterLink>
              <FooterLink href="#work">Our Work</FooterLink>
              <FooterLink href="#about">About Us</FooterLink>
              <FooterLink href="#testimonials">Testimonials</FooterLink>
              <FooterLink href="#contact">Contact</FooterLink>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              <FooterLink href="#services">Web Development</FooterLink>
              <FooterLink href="#services">Mobile Apps</FooterLink>
              <FooterLink href="#services">UI/UX Design</FooterLink>
              <FooterLink href="#services">Digital Marketing</FooterLink>
              <FooterLink href="#services">E-commerce Solutions</FooterLink>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <address className="not-italic text-gray-400 space-y-3 text-sm">
              <p>123 Innovation Street</p>
              <p>San Francisco, CA 94103</p>
              <p className="mt-4">contact@ainoruniverse.com</p>
              <p>+1 (555) 123-4567</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-16 pt-8 text-center">
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
      className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-indigo-600 hover:text-white transition-colors duration-300"
    >
      {icon}
    </a>
  );
};

const FooterLink = ({ href, children }) => {
  return (
    <li>
      <a href={href} className="text-gray-400 hover:text-indigo-400 transition-colors duration-300 text-sm">
        {children}
      </a>
    </li>
  );
};

export default Footer;
