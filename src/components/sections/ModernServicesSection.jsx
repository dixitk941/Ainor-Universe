import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaLaptopCode, FaMobileAlt, FaPalette, FaRobot, FaShoppingCart, FaSearch, FaArrowRight } from 'react-icons/fa';
import { AnimatedMesh, ChapterMark, ChapterLabel } from '../ui/CinematicEffects';

const services = [
  { num:'01', Icon:FaLaptopCode, title:'Web Development',  slug:'website-design-development',    desc:'Scalable, high-performance websites using Next.js & React — built to last.', accent:'#6366f1' },
  { num:'02', Icon:FaMobileAlt,  title:'Mobile Apps',      slug:'mobile-app-development',         desc:'Cross-platform iOS & Android apps that feel native and perform brilliantly.', accent:'#a855f7' },
  { num:'03', Icon:FaPalette,    title:'UI/UX Design',     slug:'website-design-development',     desc:"Interfaces so intuitive, users don't even notice they're being guided.", accent:'#ec4899' },
  { num:'04', Icon:FaRobot,      title:'AI & Automation',  slug:'ai-solutions-india',             desc:'Smart workflows and AI integrations that take the grunt work off your plate.', accent:'#22c55e' },
  { num:'05', Icon:FaShoppingCart,title:'E-Commerce',      slug:'ecommerce-website-development',  desc:'Online stores engineered for conversions, built for scale.', accent:'#f97316' },
  { num:'06', Icon:FaSearch,     title:'SEO Services',     slug:'seo-services-india',             desc:'Organic traffic that compounds — strategy, content, and technical SEO.', accent:'#38bdf8' },
];

const ModernServicesSection = () => (
  <section id="services" className="relative bg-white overflow-hidden py-24 md:py-32">
    <AnimatedMesh light />
    <ChapterMark num={4} light />

    <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
      <ChapterLabel num={4} title="What We Build" light />

      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
        <motion.h2
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }}
          className="text-[clamp(2.4rem,5.5vw,4rem)] font-black leading-[1.08] tracking-tight text-gray-900"
        >
          Everything You
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
            Need to Ship.
          </span>
        </motion.h2>
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:text-right lg:max-w-xs">
          <p className="text-gray-500 text-base leading-relaxed">
            One subscription. Every capability.
          </p>
          <Link to="/all-services"
            className="inline-flex items-center gap-1.5 text-indigo-600 hover:text-indigo-500 text-sm font-semibold mt-2 transition-colors">
            All services <FaArrowRight size={10} />
          </Link>
        </motion.div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3">
        {services.map((s, i) => (
          <motion.div key={s.num}
            initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.55, delay: i * 0.07 }}
            onClick={() => window.location.href = `/service/${s.slug}`}
            className="group relative bg-gray-50 border border-gray-200 hover:bg-white
                       hover:border-gray-300 hover:shadow-md rounded-2xl p-4 sm:p-6 cursor-pointer transition-all duration-300 overflow-hidden"
          >
            {/* Hover glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"
              style={{ background: `radial-gradient(circle at 0% 0%, ${s.accent}08 0%, transparent 60%)` }} />

            <div className="relative z-10 flex flex-col gap-5 h-full">
              <div className="flex items-start justify-between">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${s.accent}15`, color: s.accent }}>
                  <s.Icon size={20} />
                </div>
                <span className="text-xs font-bold text-gray-300 tracking-widest group-hover:text-gray-400 transition-colors">
                  {s.num}
                </span>
              </div>
              <div>
                <h3 className="text-gray-900 font-bold text-sm sm:text-lg mb-1 sm:mb-2">{s.title}</h3>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed group-hover:text-gray-600 transition-colors hidden sm:block">{s.desc}</p>
                <p className="text-gray-400 text-[11px] leading-snug sm:hidden line-clamp-2">{s.desc}</p>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-semibold mt-auto opacity-0 group-hover:opacity-100
                             transition-all duration-300 translate-y-1 group-hover:translate-y-0"
                style={{ color: s.accent }}>
                Learn more <FaArrowRight size={10} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ModernServicesSection;
