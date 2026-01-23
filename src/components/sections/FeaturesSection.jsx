import React from 'react';
import { motion } from 'framer-motion';

// Color palette: Dark (#1a1a1a), Light (#f5f5f5), Accent (indigo-500)

const features = [
  {
    id: 1,
    title: 'Modern Design',
    description: 'Visually stunning, contemporary designs that captivate users and elevate your brand.',
    icon: '✨'
  },
  {
    id: 2,
    title: 'Responsive',
    description: 'Websites and apps that work flawlessly across all devices and screen sizes.',
    icon: '📱'
  },
  {
    id: 3,
    title: 'Lightning Fast',
    description: 'Optimized for speed, efficiency, and top search engine rankings.',
    icon: '⚡'
  },
  {
    id: 4,
    title: 'User-Centric',
    description: 'Intuitive experiences that drive engagement and conversions.',
    icon: '🎯'
  },
  {
    id: 5,
    title: 'Custom Built',
    description: 'Tailored solutions that address your specific business challenges.',
    icon: '🛠️'
  },
  {
    id: 6,
    title: 'Scalable',
    description: 'Built to grow with your business, from startup to enterprise.',
    icon: '📈'
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Decorative connecting arrows */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Feature flow arrows - left side */}
        <svg className="absolute top-40 left-8 w-16 h-[250px] opacity-[0.08]" viewBox="0 0 50 250">
          <line x1="25" y1="10" x2="25" y2="230" stroke="#6366f1" strokeWidth="2" strokeDasharray="8 6" />
          <polygon points="18,220 25,240 32,220" fill="#6366f1" />
          {[40, 100, 160].map((y, i) => (
            <g key={i}>
              <circle cx="25" cy={y} r="5" fill="#6366f1" />
              <line x1="30" y1={y} x2="50" y2={y} stroke="#6366f1" strokeWidth="2" />
              <polygon points={`45,${y-4} 55,${y} 45,${y+4}`} fill="#6366f1" />
            </g>
          ))}
        </svg>
        
        {/* Rotating feature hub - right */}
        <motion.svg
          className="absolute bottom-32 right-16 w-20 h-20 opacity-[0.1]"
          viewBox="0 0 80 80"
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          <circle cx="40" cy="40" r="5" fill="#6366f1" />
          {[0, 60, 120, 180, 240, 300].map((angle, i) => (
            <g key={i} transform={`rotate(${angle} 40 40)`}>
              <line x1="40" y1="40" x2="40" y2="12" stroke="#6366f1" strokeWidth="2" />
              <polygon points="36,17 40,7 44,17" fill="#6366f1" />
            </g>
          ))}
        </motion.svg>
      </div>

      {/* Content directly on background */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 text-indigo-500 rounded-full mb-6 border border-indigo-100">
              <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
              <span className="font-semibold text-sm">Why Choose Us</span>
            </span>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1a1a1a]">
              Built for
              <span className="block mt-2 text-indigo-500">
                excellence
              </span>
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:pt-16"
          >
            <p className="text-xl text-gray-600 leading-relaxed">
              We combine cutting-edge technology with creative expertise to deliver digital solutions that make a real impact on your business.
            </p>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              className="group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start gap-4">
                <div className="text-3xl">{feature.icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
