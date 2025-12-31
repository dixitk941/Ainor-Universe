import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Section from '../layout/Section';
import Button from '../ui/Button';
import { FaRupeeSign, FaServer, FaSync, FaHeadset, FaChartLine, FaRocket } from 'react-icons/fa';
import { BsShieldCheck, BsStars } from 'react-icons/bs';

const subscriptionBenefits = [
  {
    id: 1,
    icon: <FaRupeeSign className="h-6 w-6" />,
    title: 'Low Upfront Cost',
    description: 'Pay just the setup fee to get started. No massive initial investment needed.',
    highlight: 'Save 60-70%',
    color: 'from-blue-500 to-cyan-400',
    bgColor: 'bg-blue-50',
    textColor: 'text-blue-600',
    borderColor: 'border-blue-200'
  },
  {
    id: 2,
    icon: <FaServer className="h-6 w-6" />,
    title: 'Hosting & SSL Included',
    description: 'Premium hosting, SSL certificates, and security updates all included in your plan.',
    highlight: 'No Extra Cost',
    color: 'from-indigo-500 to-purple-500',
    bgColor: 'bg-indigo-50',
    textColor: 'text-indigo-600',
    borderColor: 'border-indigo-200'
  },
  {
    id: 3,
    icon: <FaSync className="h-6 w-6" />,
    title: 'Regular Updates',
    description: 'Content updates, bug fixes, and feature enhancements handled by our team.',
    highlight: '2-5 Updates/mo',
    color: 'from-green-500 to-emerald-400',
    bgColor: 'bg-green-50',
    textColor: 'text-green-600',
    borderColor: 'border-green-200'
  },
  {
    id: 4,
    icon: <FaHeadset className="h-6 w-6" />,
    title: '24/7 Support',
    description: "Dedicated technical support whenever you need it. We're always here to help.",
    highlight: 'Priority Support',
    color: 'from-rose-500 to-pink-400',
    bgColor: 'bg-rose-50',
    textColor: 'text-rose-600',
    borderColor: 'border-rose-200'
  },
  {
    id: 5,
    icon: <FaChartLine className="h-6 w-6" />,
    title: 'Predictable Costs',
    description: 'Fixed monthly payments make budgeting easy. No surprise expenses.',
    highlight: 'Budget Friendly',
    color: 'from-amber-500 to-yellow-400',
    bgColor: 'bg-amber-50',
    textColor: 'text-amber-600',
    borderColor: 'border-amber-200'
  },
  {
    id: 6,
    icon: <FaRocket className="h-6 w-6" />,
    title: 'Faster Launch',
    description: 'Get your project live quickly with our streamlined subscription model.',
    highlight: '50% Faster',
    color: 'from-violet-500 to-purple-500',
    bgColor: 'bg-violet-50',
    textColor: 'text-violet-600',
    borderColor: 'border-violet-200'
  },
];

const SubscriptionBenefitsSection = () => {
  return (
    <Section 
      bgColor="bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden"
      spacing="py-20 md:py-28"
    >
      {/* Background decorations - matching Services Section style */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-20 right-10 w-[500px] h-[500px] bg-gradient-to-br from-blue-100/40 to-indigo-100/40 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-20 left-10 w-[400px] h-[400px] bg-gradient-to-tr from-purple-100/40 to-pink-100/40 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            y: [0, 60, 0],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ repeat: Infinity, duration: 18, ease: "easeInOut" }}
        />
      </div>
      
      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-full mb-6 shadow-lg shadow-indigo-200"
          >
            <span className="text-xl">🇮🇳</span>
            <span className="font-bold text-sm">FIRST IN INDIA</span>
            <BsStars className="h-4 w-4 animate-pulse" />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900"
          >
            Subscription-Based
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">
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
            Why pay lakhs upfront when you can pay monthly? AINOR introduces India's first 
            subscription model for web development, mobile apps, and digital solutions.
          </motion.p>
        </div>

        {/* Pricing Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="bg-white rounded-3xl p-8 shadow-xl shadow-gray-200/50 border border-gray-100">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Traditional Way */}
              <div className="text-center p-6 rounded-2xl bg-gray-50 border border-gray-200">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-red-100 text-red-500 mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <p className="text-red-600 font-semibold mb-2">Traditional Way</p>
                <p className="text-4xl font-bold text-gray-900 mb-2">₹35,000</p>
                <p className="text-gray-500 text-sm">One-time payment upfront</p>
                <ul className="mt-4 text-left text-sm text-gray-600 space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="text-red-400">•</span> Hosting extra: ₹5,000/year
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-red-400">•</span> Maintenance extra: ₹3,000/month
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-red-400">•</span> Updates charged separately
                  </li>
                </ul>
              </div>
              
              {/* AINOR Way */}
              <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-indigo-50 to-blue-50 border-2 border-indigo-200 relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-indigo-600 to-blue-600 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                  RECOMMENDED
                </div>
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-indigo-100 text-indigo-600 mb-4 mt-2">
                  <BsShieldCheck className="w-6 h-6" />
                </div>
                <p className="text-indigo-600 font-semibold mb-2">AINOR Subscription</p>
                <p className="text-4xl font-bold text-gray-900 mb-1">₹10,000 <span className="text-lg font-normal text-gray-500">setup</span></p>
                <p className="text-2xl font-semibold text-indigo-600">+ ₹4,999/month</p>
                <p className="text-xs text-gray-500 mt-1">No long-term contracts. Cancel anytime.</p>
                <ul className="mt-4 text-left text-sm text-gray-700 space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="text-indigo-500">✓</span> Hosting included
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-indigo-500">✓</span> All updates included
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-indigo-500">✓</span> Support included
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-indigo-500">✓</span> Cancel anytime!
                  </li>
                </ul>
              </div>
            </div>
            <p className="text-center text-sm text-gray-500 mt-6">Trusted by startups & growing businesses across India 🇮🇳</p>
          </div>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {subscriptionBenefits.map((benefit, index) => (
            <motion.div
              key={benefit.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`${benefit.bgColor} rounded-2xl p-6 border ${benefit.borderColor} hover:shadow-lg transition-all duration-300 group`}
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${benefit.color} text-white shadow-lg`}>
                  {benefit.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-lg text-gray-900">{benefit.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">{benefit.description}</p>
                  <span className={`inline-flex text-xs ${benefit.textColor} bg-white px-3 py-1 rounded-full font-semibold shadow-sm border ${benefit.borderColor}`}>
                    {benefit.highlight}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-gray-600 mb-6">
            Join 100+ businesses already saving with AINOR subscriptions
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              as={Link}
              to="/pricing"
              variant="primary"
              size="lg"
              className="shadow-lg shadow-indigo-200"
            >
              View All Plans
            </Button>
            <Button
              as={Link}
              to="/contact"
              variant="outline"
              size="lg"
            >
              Get Free Quote
            </Button>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default SubscriptionBenefitsSection;
