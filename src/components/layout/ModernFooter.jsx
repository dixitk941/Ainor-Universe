import React from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaGlobe, FaLinkedin, FaTwitter } from 'react-icons/fa';
import logo from '../../assets/logo.png';

const ModernFooter = () => {
  return (
    <>
      {/* Floating Footer */}
      <footer className="mt-8 bg-white rounded-3xl p-8 md:p-12 shadow-soft flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
        {/* Left - Brand */}
        <div className="flex flex-col gap-4 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-3">
            <img src={logo} alt="Ainor Logo" className="w-8 h-8 rounded-full object-cover" />
            <span className="text-xl font-bold text-[#111318]">Ainor</span>
          </div>
          <p className="text-gray-500 text-sm max-w-xs">
            Building the future of digital products, one subscription at a time.
          </p>
          <div className="flex gap-4 justify-center md:justify-start mt-2">
            <a
              href="mailto:contact@myainor.com"
              className="text-gray-400 hover:text-black transition-colors"
              aria-label="Email"
            >
              <FaEnvelope className="text-xl" />
            </a>
            <a
              href="https://myainor.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-black transition-colors"
              aria-label="Website"
            >
              <FaGlobe className="text-xl" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-black transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-xl" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-black transition-colors"
              aria-label="Twitter"
            >
              <FaTwitter className="text-xl" />
            </a>
          </div>
        </div>

        {/* Middle - Links */}
        <div className="flex gap-8 md:gap-16 text-sm text-gray-600 font-medium">
          <div className="flex flex-col gap-3">
            <span className="text-black font-bold mb-1">Company</span>
            <Link to="/about" className="hover:text-primary transition-colors">
              About
            </Link>
            <Link to="/careers" className="hover:text-primary transition-colors">
              Careers
            </Link>
            <Link to="/blog" className="hover:text-primary transition-colors">
              Blog
            </Link>
            <Link to="/portfolio" className="hover:text-primary transition-colors">
              Portfolio
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-black font-bold mb-1">Services</span>
            <Link to="/services" className="hover:text-primary transition-colors">
              All Services
            </Link>
            <Link to="/pricing" className="hover:text-primary transition-colors">
              Pricing
            </Link>
            <Link to="/faq" className="hover:text-primary transition-colors">
              FAQ
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-black font-bold mb-1">Legal</span>
            <Link to="/privacy" className="hover:text-primary transition-colors">
              Privacy
            </Link>
            <Link to="/terms" className="hover:text-primary transition-colors">
              Terms
            </Link>
          </div>
        </div>

        {/* Right - CTA */}
        <div className="bg-gray-50 p-4 rounded-xl flex flex-col items-center md:items-start text-center md:text-left">
          <span className="text-xs font-bold text-gray-400 uppercase mb-2">
            Ready to start?
          </span>
          <Link
            to="/contact"
            className="bg-black text-white px-5 py-2 rounded-lg text-sm font-bold hover:bg-gray-800 transition-all hover:scale-[1.02]"
          >
            Book a Call
          </Link>
        </div>
      </footer>

      {/* Copyright */}
      <div className="text-center py-6 text-gray-400 text-xs">
        © {new Date().getFullYear()} Ainor Agency. All rights reserved.
      </div>
    </>
  );
};

export default ModernFooter;
