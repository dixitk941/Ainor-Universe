import React from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { Link } from 'react-router-dom';
import FloatingElements from '../ui/FloatingElements';

// Color palette:
// Dark: #1a1a1a (text)
// Light: #f5f5f5 (background) 
// Accent: #6366f1 (indigo)

const HeroSection = () => {
  // Stagger animation for cards
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.6
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden">
      {/* Floating 3D Elements - Tasks variant */}
      <FloatingElements variant="tasks" />
      {/* Decorative connecting arrows for hero */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Rotating connection arrows - top right */}
        <motion.svg
          className="absolute top-24 right-16 w-36 h-36 opacity-[0.12]"
          viewBox="0 0 120 120"
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        >
          <circle cx="60" cy="60" r="8" fill="#6366f1" />
          {[0, 90, 180, 270].map((angle, i) => (
            <g key={i} transform={`rotate(${angle} 60 60)`}>
              <line x1="60" y1="60" x2="60" y2="20" stroke="#6366f1" strokeWidth="2" />
              <polygon points="55,25 60,12 65,25" fill="#6366f1" />
            </g>
          ))}
        </motion.svg>
        
        {/* Flowing arrow path */}
        <svg className="absolute top-40 right-[30%] w-[200px] h-[100px] opacity-[0.08]" viewBox="0 0 200 100">
          <motion.path
            d="M 10 50 C 50 10 100 10 140 50 S 180 90 190 50"
            stroke="#6366f1"
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1, 1, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              times: [0, 0.45, 0.55, 1]
            }}
          />
          <motion.polygon
            points="185,45 195,50 185,55"
            fill="#6366f1"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 1, 0] }}
            transition={{ duration: 5, repeat: Infinity, times: [0, 0.4, 0.6, 1] }}
          />
        </svg>
      </div>

      {/* Content directly on background - no card */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 text-indigo-600 text-sm font-medium border border-indigo-100">
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
            How it works
          </span>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column - Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#1a1a1a] leading-[1.1] tracking-tight mb-6">
              We make it
              <br />
              <span className="inline-flex items-center gap-3">
                super
                <motion.span 
                  className="inline-block text-indigo-500"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  🚀
                </motion.span>
                <span className="text-indigo-500">
                  <Typewriter
                    options={{
                      strings: ['easy', 'fast', 'simple'],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 50,
                      delay: 80,
                    }}
                  />
                </span>
              </span>
            </h1>
          </motion.div>

          {/* Right Column - Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="lg:pt-8"
          >
            <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
              Working with us is like having a full team of top designers, developers and project managers in-house. Always ready to go.
            </p>
          </motion.div>
        </div>

        {/* Feature Cards Row */}
        <motion.div 
          className="grid md:grid-cols-3 gap-6 mt-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Card 1 - All Tasks in One Subscription */}
          <motion.div 
            className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300"
            variants={cardVariants}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
          >
            {/* Mock UI Card */}
            <div className="bg-gray-50 rounded-2xl p-5 mb-6 border border-gray-100">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-indigo-500 text-lg">✦</span>
                <span className="font-medium text-[#1a1a1a]">All Your Tasks</span>
                <div className="ml-auto w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-indigo-500 flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-xs text-[#1a1a1a]">Website Design</span>
                  <div className="ml-auto h-2 w-12 rounded-full bg-indigo-200"></div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-indigo-500 flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-xs text-[#1a1a1a]">Mobile App UI</span>
                  <div className="ml-auto h-2 w-10 rounded-full bg-indigo-200"></div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-gray-200"></div>
                  <span className="text-xs text-gray-500">Landing Page</span>
                  <div className="ml-auto h-2 w-8 rounded-full bg-gray-100"></div>
                </div>
              </div>
            </div>
            <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">All tasks, one subscription</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Unlimited design & dev tasks every month. No per-project fees, just one flat subscription.
            </p>
          </motion.div>

          {/* Card 2 - Create Request */}
          <motion.div 
            className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300"
            variants={cardVariants}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
          >
            {/* Mock UI Card */}
            <div className="bg-gray-50 rounded-2xl p-5 mb-6 border border-gray-100">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-indigo-500 text-lg">✦</span>
                <span className="font-medium text-[#1a1a1a]">Create new design</span>
              </div>
              <div className="space-y-2">
                <div className="h-3 w-full rounded-full bg-gray-200"></div>
                <div className="h-3 w-4/5 rounded-full bg-gray-200"></div>
                <div className="h-3 w-3/5 rounded-full bg-gray-200"></div>
              </div>
              <motion.button 
                className="w-full mt-5 py-3 bg-indigo-500 text-white rounded-xl font-medium text-sm hover:bg-indigo-600 transition-colors flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Create a request
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                </svg>
              </motion.button>
            </div>
            <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">Create requests</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Simply submit your design & development request. We will straight away get to work.
            </p>
          </motion.div>

          {/* Card 3 - Review */}
          <motion.div 
            className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 relative overflow-hidden"
            variants={cardVariants}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
          >
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6">
              <motion.div
                animate={{ rotate: [0, 15, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <svg className="w-24 h-24 text-indigo-500 opacity-80" viewBox="0 0 100 100" fill="currentColor">
                  <path d="M50 10 L55 30 L75 30 L60 42 L65 62 L50 50 L35 62 L40 42 L25 30 L45 30 Z" />
                </svg>
              </motion.div>
            </div>
            
            {/* Mock UI Card */}
            <div className="bg-gray-50 rounded-2xl p-5 mb-6 border border-gray-100 relative z-10">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-indigo-500 text-lg">✦</span>
                <span className="font-medium text-[#1a1a1a]">Your project scope</span>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-indigo-500 flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="h-2 flex-1 rounded-full bg-gray-200"></div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-indigo-500 flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="h-2 flex-1 rounded-full bg-gray-200"></div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-gray-200"></div>
                  <div className="h-2 flex-1 rounded-full bg-gray-200"></div>
                </div>
              </div>
            </div>
            <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">Review & Complete</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Check the work we have done for you and give us your feedback to improve.
            </p>
          </motion.div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <Link to="/pricing">
            <motion.button 
              className="px-8 py-4 bg-[#1a1a1a] text-white rounded-full font-semibold text-lg hover:bg-gray-800 transition-colors flex items-center gap-2 shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Pricing
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.button>
          </Link>
          <a 
            href="https://wa.me/917579500264?text=Hi%20AINOR!%20I'd%20like%20to%20book%20a%20demo."
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button 
              className="px-8 py-4 bg-white text-[#1a1a1a] rounded-full font-semibold text-lg border-2 border-gray-200 hover:border-indigo-500 hover:text-indigo-500 transition-colors flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book a demo
            </motion.button>
          </a>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <p className="text-sm text-gray-500 mb-6">Trusted by growing businesses</p>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
            <div className="text-2xl font-bold text-gray-400">Sttrika</div>
            <div className="text-2xl font-bold text-gray-400">GoForCab</div>
            <div className="text-2xl font-bold text-gray-400">HiiHive</div>
            <div className="text-2xl font-bold text-gray-400">HBWeb</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
