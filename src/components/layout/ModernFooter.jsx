import React from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaGlobe, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { GlowLine } from '../ui/CinematicEffects';
import logo from '../../assets/logo.png';

const ModernFooter = () => (
  <footer className="bg-[#07070f] border-t border-white/[0.06] pt-16 pb-8">
    <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
      <GlowLine />

      <div className="flex flex-col md:flex-row justify-between gap-12 mt-14">
        {/* Brand */}
        <div className="flex flex-col gap-5 max-w-xs">
          <div className="flex items-center gap-3">
            <img src={logo} alt="AINOR" className="w-8 h-8 rounded-full object-cover" />
            <span className="text-xl font-black text-white tracking-tight">AINOR</span>
          </div>
          <p className="text-white/30 text-sm leading-relaxed">
            Building the future of digital products — one subscription at a time.
          </p>
          <div className="flex gap-3">
            {[
              { href: 'mailto:contact@myainor.com', Icon: FaEnvelope, label: 'Email'    },
              { href: 'https://myainor.com',        Icon: FaGlobe,    label: 'Web'      },
              { href: 'https://linkedin.com',       Icon: FaLinkedin, label: 'LinkedIn' },
              { href: 'https://twitter.com',        Icon: FaTwitter,  label: 'Twitter'  },
            ].map(({ href, Icon, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                className="w-9 h-9 rounded-xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center
                           text-white/40 hover:text-white hover:bg-white/[0.1] transition-all">
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="flex gap-10 md:gap-16 text-sm">
          <div className="flex flex-col gap-3">
            <span className="text-white font-bold text-xs tracking-widest uppercase mb-1">Company</span>
            {[['About','/about'],['Careers','/careers'],['Blog','/blog'],['Portfolio','/portfolio']].map(([l,h]) => (
              <Link key={l} to={h} className="text-white/35 hover:text-white transition-colors">{l}</Link>
            ))}
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-white font-bold text-xs tracking-widest uppercase mb-1">Services</span>
            {[['All Services','/services'],['Pricing','/pricing'],['FAQ','/faq']].map(([l,h]) => (
              <Link key={l} to={h} className="text-white/35 hover:text-white transition-colors">{l}</Link>
            ))}
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-white font-bold text-xs tracking-widest uppercase mb-1">Legal</span>
            {[['Privacy','/privacy'],['Terms','/terms']].map(([l,h]) => (
              <Link key={l} to={h} className="text-white/35 hover:text-white transition-colors">{l}</Link>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col gap-3">
          <span className="text-white/30 text-xs uppercase tracking-widest">Ready to start?</span>
          <Link to="/contact"
            className="inline-flex items-center gap-2 bg-white text-[#07070f] px-5 py-2.5 rounded-xl text-sm font-bold
                       hover:bg-gray-100 transition-colors shadow-lg shadow-black/20">
            Book a Call
          </Link>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-14 pt-6 border-t border-white/[0.12] flex flex-col sm:flex-row justify-between items-center gap-3">
        <p className="text-white/50 text-xs">
          © {new Date().getFullYear()} Ainor Agency. All rights reserved.
        </p>
        <p className="text-white/40 text-xs">Made with intention, shipped with love.</p>
      </div>
    </div>
  </footer>
);

export default ModernFooter;
