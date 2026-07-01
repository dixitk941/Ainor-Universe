import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaRupeeSign, FaServer, FaSync, FaHeadset, FaChartLine, FaRocket } from 'react-icons/fa';
import { BsStars } from 'react-icons/bs';
import FloatingElements from '../ui/FloatingElements';

// Color palette: Dark (#1a1a1a), Light (#f5f5f5), Accent (indigo-500)

const subscriptionBenefits = [
  {
    id: 1,
    icon: <FaRupeeSign className="h-6 w-6" />,
    title: 'Low Upfront Cost',
    description: 'Pay just the setup fee to get started. No massive initial investment needed.',
    highlight: 'Save 60-70%',
  },
  {
    id: 2,
    icon: <FaServer className="h-6 w-6" />,
    title: 'Hosting & SSL Included',
    description: 'Premium hosting, SSL certificates, and security updates all included in your plan.',
    highlight: 'No Extra Cost',
  },
  {
    id: 3,
    icon: <FaSync className="h-6 w-6" />,
    title: 'Regular Updates',
    description: 'Content updates, bug fixes, and feature enhancements handled by our team.',
    highlight: '2-5 Updates/mo',
  },
  {
    id: 4,
    icon: <FaHeadset className="h-6 w-6" />,
    title: '24/7 Support',
    description: "Dedicated technical support whenever you need it. We're always here to help.",
    highlight: 'Priority Support',
  },
  {
    id: 5,
    icon: <FaChartLine className="h-6 w-6" />,
    title: 'Predictable Costs',
    description: 'Fixed monthly payments make budgeting easy. No surprise expenses.',
    highlight: 'Budget Friendly',
  },
  {
    id: 6,
    icon: <FaRocket className="h-6 w-6" />,
    title: 'Faster Launch',
    description: 'Get your project live quickly with our streamlined subscription model.',
    highlight: '50% Faster',
  },
];

const SubscriptionBenefitsSection = () => {
  // Stagger animation for benefit cards
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
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
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Floating 3D Elements - Tasks variant */}
      <FloatingElements variant="tasks" />
      
      {/* Decorative connecting arrows - showing subscription cycle */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Circular arrows - subscription cycle visual */}
        <motion.svg
          className="absolute top-20 right-10 w-32 h-32 opacity-[0.1]"
          viewBox="0 0 100 100"
          animate={{ rotate: 360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        >
          <path 
            d="M 50 10 A 40 40 0 1 1 10 50" 
            stroke="#6366f1" 
            strokeWidth="3" 
            fill="none"
            strokeLinecap="round"
          />
          <polygon points="50,5 55,15 45,15" fill="#6366f1" />
          <path 
            d="M 50 90 A 40 40 0 1 1 90 50" 
            stroke="#6366f1" 
            strokeWidth="3" 
            fill="none"
            strokeLinecap="round"
          />
          <polygon points="50,95 45,85 55,85" fill="#6366f1" />
        </motion.svg>
        
        {/* Horizontal flow arrows */}
        <svg className="absolute bottom-32 left-10 w-[200px] h-[60px] opacity-[0.08]" viewBox="0 0 200 60">
          <motion.line
            x1="10" y1="30" x2="170" y2="30"
            stroke="#6366f1"
            strokeWidth="2.5"
            strokeDasharray="10 6"
            initial={{ strokeDashoffset: 80 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
          <polygon points="165,23 185,30 165,37" fill="#6366f1" />
          <circle cx="50" cy="30" r="5" fill="#6366f1" />
          <circle cx="120" cy="30" r="5" fill="#6366f1" />
        </svg>
      </div>

      {/* Content directly on background - no card wrapper */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 text-indigo-500 rounded-full mb-6 border border-indigo-100"
          >
            <span className="text-lg">🇮🇳</span>
            <span className="font-semibold text-sm">FIRST IN INDIA</span>
            <BsStars className="h-4 w-4" />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#1a1a1a]"
          >
            Subscription-Based
            <span className="block mt-2 text-indigo-500">
              Web & App Services
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Why pay lakhs upfront when you can pay monthly? India's first 
            subscription model for web development and digital solutions.
          </motion.p>
        </div>

        {/* Benefits Grid - Cards */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {subscriptionBenefits.map((benefit, index) => (
            <motion.div
              key={benefit.id}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300"
              variants={cardVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-500 flex-shrink-0">
                  {benefit.icon}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <h3 className="font-bold text-[#1a1a1a]">{benefit.title}</h3>
                    <span className="text-xs px-2 py-0.5 bg-indigo-50 text-indigo-500 rounded-full font-medium">
                      {benefit.highlight}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 mb-6">
            Join 100+ businesses already saving with AINOR subscriptions
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/pricing">
              <motion.button 
                className="px-8 py-4 bg-[#1a1a1a] text-white rounded-full font-semibold hover:bg-gray-800 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View All Plans
              </motion.button>
            </Link>
            <Link to="/contact">
              <motion.button 
                className="px-8 py-4 bg-white text-[#1a1a1a] rounded-full font-semibold border-2 border-gray-200 hover:border-indigo-500 hover:text-indigo-500 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Free Quote
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SubscriptionBenefitsSection;
