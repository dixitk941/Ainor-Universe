import React from 'react';
import { motion } from 'framer-motion';

// Color palette: Dark (#1a1a1a), Light (#f5f5f5), Accent (indigo-500)

const stats = [
  { value: '50+', label: 'Projects Delivered' },
  { value: '100%', label: 'Client Satisfaction' },
  { value: '2+', label: 'Years Experience' },
  { value: '<48h', label: 'Response Time' },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden">
      {/* Decorative connecting elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Team connection arrows */}
        <motion.svg
          className="absolute top-20 right-10 w-24 h-24 opacity-[0.1]"
          viewBox="0 0 100 100"
          animate={{ rotate: -360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          <circle cx="50" cy="50" r="6" fill="#6366f1" />
          {[0, 120, 240].map((angle, i) => (
            <g key={i} transform={`rotate(${angle} 50 50)`}>
              <line x1="50" y1="50" x2="50" y2="15" stroke="#6366f1" strokeWidth="2" />
              <polygon points="45,20 50,8 55,20" fill="#6366f1" />
            </g>
          ))}
        </motion.svg>
        
        {/* Connecting curved arrow */}
        <svg className="absolute bottom-32 left-1/2 w-[150px] h-[80px] opacity-[0.06]" viewBox="0 0 150 80">
          <motion.path
            d="M 10 40 Q 75 0 140 40"
            stroke="#6366f1"
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1, 1, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.polygon
            points="135,35 145,40 135,45"
            fill="#6366f1"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 1, 0] }}
            transition={{ duration: 4, repeat: Infinity, times: [0, 0.4, 0.6, 1] }}
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden bg-white shadow-lg border border-gray-100">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Our Team"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Quote Card */}
            <motion.div 
              className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-lg max-w-xs border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="flex space-x-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-indigo-500">★</span>
                ))}
              </div>
              <p className="text-[#1a1a1a] font-medium text-sm">
                "We don't just build websites and apps. We create digital experiences that transform businesses."
              </p>
              <p className="mt-3 text-indigo-500 font-bold text-sm">— AINOR Team</p>
            </motion.div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 text-indigo-500 rounded-full mb-6 border border-indigo-100">
              <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
              <span className="font-semibold text-sm">About Us</span>
            </span>
            
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-6">
              Digital Excellence
              <span className="block mt-2 text-indigo-500">Since 2023</span>
            </h2>
            
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              AINOR is India's first subscription-based web development company. We help businesses launch and grow their digital presence without massive upfront costs. Our team of expert designers and developers deliver premium quality at affordable monthly rates.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center p-4 bg-white rounded-xl border border-gray-100"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-3xl font-bold text-indigo-500">{stat.value}</div>
                  <div className="text-gray-600 text-sm mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
