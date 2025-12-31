import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaCheck, FaTimes, FaWhatsapp, FaExclamationTriangle, FaArrowRight, FaCalendarAlt, FaCreditCard, FaRocket, FaShieldAlt } from 'react-icons/fa';
import SEOHead from '../components/seo/SEOHead';

// Color palette: Dark (#1a1a1a), Light (#f5f5f5), Accent (indigo-500)

const PricingPage = () => {
  const [billingCycle, setBillingCycle] = useState('subscription');
  const [selectedService, setSelectedService] = useState('web');
  const { scrollYProgress } = useScroll();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
      opacity: 1, y: 0, scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  };

  // Service types
  const services = [
    { id: 'web', name: 'Web Development', icon: '🌐' },
    { id: 'mobile', name: 'Mobile Apps', icon: '📱' },
    { id: 'ecommerce', name: 'E-Commerce', icon: '🛒' },
  ];

  // Pricing plans
  const pricingPlans = {
    web: [
      {
        name: 'Starter',
        tagline: 'Perfect for small businesses & startups',
        oneTime: { price: 15000 },
        subscription: { setupFee: 5000, monthly: 2499 },
        deliveryTime: '7-10 days',
        features: [
          { name: 'Up to 5 custom pages', included: true },
          { name: 'Mobile responsive design', included: true },
          { name: 'Contact form integration', included: true },
          { name: 'Basic SEO optimization', included: true },
          { name: 'Premium hosting included', included: true },
          { name: 'SSL certificate', included: true },
          { name: '2 content updates/month', included: true },
          { name: 'Blog integration', included: false },
          { name: 'Custom animations', included: false },
          { name: 'E-commerce features', included: false },
        ],
        popular: false,
      },
      {
        name: 'Professional',
        tagline: 'Most popular for growing businesses',
        oneTime: { price: 35000 },
        subscription: { setupFee: 10000, monthly: 4999 },
        deliveryTime: '14-21 days',
        features: [
          { name: 'Up to 10 custom pages', included: true },
          { name: 'Advanced responsive design', included: true },
          { name: 'Multi-step forms', included: true },
          { name: 'Advanced SEO + Analytics', included: true },
          { name: 'Premium hosting + CDN', included: true },
          { name: 'SSL + Security monitoring', included: true },
          { name: '5 content updates/month', included: true },
          { name: 'Blog with CMS', included: true },
          { name: 'Custom animations', included: true },
          { name: 'Basic e-commerce', included: false },
        ],
        popular: true,
      },
      {
        name: 'Enterprise',
        tagline: 'Complete solution for large businesses',
        isCustom: true,
        deliveryTime: 'Custom timeline',
        features: [
          { name: 'Unlimited pages', included: true },
          { name: 'Custom design system', included: true },
          { name: 'CRM & API integration', included: true },
          { name: 'Enterprise SEO suite', included: true },
          { name: 'Enterprise hosting', included: true },
          { name: 'Advanced security', included: true },
          { name: 'Unlimited updates', included: true },
          { name: 'Full CMS platform', included: true },
          { name: 'Premium animations', included: true },
          { name: 'E-commerce ready', included: true },
        ],
        popular: false,
      },
    ],
    mobile: [
      {
        name: 'Starter App',
        tagline: 'Single platform solution',
        oneTime: { price: 50000 },
        subscription: { setupFee: 15000, monthly: 4999 },
        deliveryTime: '30-45 days',
        features: [
          { name: 'iOS or Android', included: true },
          { name: 'Up to 8 screens', included: true },
          { name: 'User authentication', included: true },
          { name: 'Push notifications', included: true },
          { name: 'App store submission', included: true },
          { name: 'Basic analytics', included: true },
          { name: 'Bug fixes & updates', included: true },
          { name: 'Cross-platform', included: false },
          { name: 'Admin dashboard', included: false },
          { name: 'Payment integration', included: false },
        ],
        popular: false,
      },
      {
        name: 'Professional App',
        tagline: 'Cross-platform excellence',
        oneTime: { price: 100000 },
        subscription: { setupFee: 30000, monthly: 9999 },
        deliveryTime: '45-60 days',
        features: [
          { name: 'iOS and Android', included: true },
          { name: 'Up to 15 screens', included: true },
          { name: 'Advanced authentication', included: true },
          { name: 'Push + In-app notifications', included: true },
          { name: 'Both app stores', included: true },
          { name: 'Advanced analytics', included: true },
          { name: 'Priority bug fixes', included: true },
          { name: 'Cross-platform native', included: true },
          { name: 'Admin dashboard', included: true },
          { name: 'Payment gateway', included: false },
        ],
        popular: true,
      },
      {
        name: 'Enterprise App',
        tagline: 'Full mobile ecosystem',
        isCustom: true,
        deliveryTime: 'Custom timeline',
        features: [
          { name: 'iOS and Android', included: true },
          { name: 'Unlimited screens', included: true },
          { name: 'Enterprise auth + SSO', included: true },
          { name: 'Real-time features', included: true },
          { name: 'Full ecosystem', included: true },
          { name: 'Enterprise analytics', included: true },
          { name: 'Dedicated support', included: true },
          { name: 'Cross-platform', included: true },
          { name: 'Full admin suite', included: true },
          { name: 'All integrations', included: true },
        ],
        popular: false,
      },
    ],
    ecommerce: [
      {
        name: 'Starter Store',
        tagline: 'Perfect for small catalogs',
        oneTime: { price: 25000 },
        subscription: { setupFee: 8000, monthly: 3999 },
        deliveryTime: '14-21 days',
        features: [
          { name: 'Up to 50 products', included: true },
          { name: 'Payment gateway', included: true },
          { name: 'Order management', included: true },
          { name: 'Basic SEO', included: true },
          { name: 'SSL secure checkout', included: true },
          { name: 'Mobile responsive', included: true },
          { name: 'Basic inventory', included: true },
          { name: 'Advanced inventory', included: false },
          { name: 'Multi-vendor', included: false },
          { name: 'Subscription products', included: false },
        ],
        popular: false,
      },
      {
        name: 'Business Store',
        tagline: 'For growing businesses',
        oneTime: { price: 60000 },
        subscription: { setupFee: 20000, monthly: 7999 },
        deliveryTime: '21-30 days',
        features: [
          { name: 'Up to 500 products', included: true },
          { name: 'Multiple payment options', included: true },
          { name: 'Advanced order system', included: true },
          { name: 'Advanced SEO', included: true },
          { name: 'SSL + CDN', included: true },
          { name: 'PWA support', included: true },
          { name: 'Full inventory system', included: true },
          { name: 'Advanced inventory', included: true },
          { name: 'Multi-vendor ready', included: false },
          { name: 'Subscription products', included: false },
        ],
        popular: true,
      },
      {
        name: 'Enterprise Store',
        tagline: 'Full marketplace solution',
        isCustom: true,
        deliveryTime: 'Custom timeline',
        features: [
          { name: 'Unlimited products', included: true },
          { name: 'All payment methods', included: true },
          { name: 'Enterprise order system', included: true },
          { name: 'Enterprise SEO suite', included: true },
          { name: 'Enterprise security', included: true },
          { name: 'Full PWA + Apps', included: true },
          { name: 'Full inventory', included: true },
          { name: 'Warehouse management', included: true },
          { name: 'Multi-vendor platform', included: true },
          { name: 'Subscription + recurring', included: true },
        ],
        popular: false,
      },
    ],
  };

  // Subscription process steps
  const subscriptionSteps = [
    {
      step: 1,
      icon: <FaCreditCard className="w-6 h-6" />,
      title: 'Pay Setup Fee',
      description: 'Pay the one-time setup fee as advance to start your project. This covers initial development costs and secures your project slot.',
      highlight: 'Pay upfront to begin',
    },
    {
      step: 2,
      icon: <FaRocket className="w-6 h-6" />,
      title: 'Development & Launch',
      description: 'Our team builds your project. You review, provide feedback, and we make revisions until you\'re 100% satisfied. Then we go live!',
      highlight: 'No monthly fees during development',
    },
    {
      step: 3,
      icon: <FaCalendarAlt className="w-6 h-6" />,
      title: 'Subscription Starts',
      description: 'Monthly subscription begins from the GO-LIVE date. This includes hosting, SSL, updates, security, backups, and priority support.',
      highlight: 'Billing starts only after launch',
    },
    {
      step: 4,
      icon: <FaShieldAlt className="w-6 h-6" />,
      title: 'Ongoing Support',
      description: 'Enjoy continuous maintenance, regular updates, security monitoring, and dedicated support. Your website stays fast, secure, and up-to-date.',
      highlight: 'Pay monthly, stay protected',
    },
  ];

  const currentPlans = pricingPlans[selectedService] || pricingPlans.web;

  return (
    <>
      <SEOHead 
        title="Pricing - AINOR | India's First Subscription-Based Web Development"
        description="Transparent subscription pricing for web development, mobile apps, and e-commerce. Pay setup fee upfront, monthly subscription after go-live. Save up to 60% compared to traditional pricing."
        canonicalUrl="https://myainor.com/pricing"
      />

      <div className="min-h-screen bg-[#f5f5f5] relative">
        {/* 3D Animated Background Lines - Appears OVER content */}
        <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
          {/* 3D Connector Line - Flows across page */}
          <svg className="absolute w-full h-full" style={{ minHeight: '200vh' }}>
            <motion.path
              d="M -50 100 Q 200 50 400 150 T 800 100 T 1200 180 T 1600 100"
              stroke="url(#gradient3d)"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.4 }}
              transition={{ duration: 3, ease: "easeInOut" }}
              style={{ filter: 'drop-shadow(0 4px 6px rgba(99, 102, 241, 0.3))' }}
            />
            <defs>
              <linearGradient id="gradient3d" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#6366f1" stopOpacity="0" />
                <stop offset="30%" stopColor="#6366f1" stopOpacity="0.6" />
                <stop offset="70%" stopColor="#6366f1" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>

          {/* Floating 3D Arrow */}
          <motion.div
            className="absolute top-32 right-[15%]"
            style={{
              filter: 'drop-shadow(0 8px 16px rgba(99, 102, 241, 0.4))',
            }}
            animate={{ 
              y: [0, -20, 0],
              rotateY: [0, 180, 360],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg width="60" height="60" viewBox="0 0 60 60" className="opacity-50">
              <polygon points="30,5 55,50 30,40 5,50" fill="#6366f1" />
            </svg>
          </motion.div>

          {/* Rotating 3D Hub */}
          <motion.div
            className="absolute top-[60%] left-[5%]"
            style={{
              filter: 'drop-shadow(0 6px 12px rgba(99, 102, 241, 0.3))',
              perspective: '500px',
            }}
            animate={{ rotateY: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <svg width="80" height="80" viewBox="0 0 80 80" className="opacity-40">
              <circle cx="40" cy="40" r="6" fill="#6366f1" />
              {[0, 90, 180, 270].map((angle, i) => (
                <g key={i} transform={`rotate(${angle} 40 40)`}>
                  <line x1="40" y1="40" x2="40" y2="10" stroke="#6366f1" strokeWidth="2.5" />
                  <polygon points="35,15 40,5 45,15" fill="#6366f1" />
                </g>
              ))}
            </svg>
          </motion.div>
        </div>

        {/* Hero Section */}
        <section className="relative pt-32 pb-16 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 text-indigo-500 rounded-full mb-6 border border-indigo-100">
                <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
                <span className="font-semibold text-sm">🇮🇳 FIRST IN INDIA - Subscription Model</span>
              </span>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#1a1a1a] mb-6">
                Simple, Transparent
                <span className="block mt-2 text-indigo-500">Subscription Pricing</span>
              </h1>
              
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
                Pay a small setup fee to start, then affordable monthly subscriptions after your project goes live. 
                No massive upfront costs, no hidden fees.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mt-6">
                <div className="flex items-center gap-2 px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm font-medium">
                  <FaCheck className="w-4 h-4" />
                  Save 60-70% vs One-Time
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-indigo-50 text-indigo-600 rounded-full text-sm font-medium">
                  <FaShieldAlt className="w-4 h-4" />
                  Hosting & SSL Included
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-orange-50 text-orange-600 rounded-full text-sm font-medium">
                  <FaRocket className="w-4 h-4" />
                  Go Live in Days
                </div>
              </div>
            </motion.div>

            {/* Service Tabs */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {services.map((service) => (
                <motion.button
                  key={service.id}
                  onClick={() => setSelectedService(service.id)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all ${
                    selectedService === service.id
                      ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/25'
                      : 'bg-white text-[#1a1a1a] border border-gray-200 hover:border-indigo-300 hover:shadow-md'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="mr-2">{service.icon}</span>
                  {service.name}
                </motion.button>
              ))}
            </div>

            {/* Billing Toggle */}
            <div className="flex justify-center items-center gap-4 mb-12">
              <span className={`font-medium transition-colors ${billingCycle === 'onetime' ? 'text-[#1a1a1a]' : 'text-gray-400'}`}>
                One-Time Payment
              </span>
              <motion.button
                onClick={() => setBillingCycle(billingCycle === 'subscription' ? 'onetime' : 'subscription')}
                className="relative w-16 h-8 bg-indigo-500 rounded-full p-1 shadow-lg"
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="w-6 h-6 bg-white rounded-full shadow"
                  animate={{ x: billingCycle === 'subscription' ? 32 : 0 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              </motion.button>
              <span className={`font-medium transition-colors ${billingCycle === 'subscription' ? 'text-[#1a1a1a]' : 'text-gray-400'}`}>
                Subscription
                <span className="ml-2 px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full font-bold">
                  RECOMMENDED
                </span>
              </span>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="pb-20 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="grid md:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              key={`${selectedService}-${billingCycle}`}
            >
              {currentPlans.map((plan, index) => (
                <motion.div
                  key={index}
                  className={`bg-white rounded-3xl p-8 border-2 transition-all duration-300 relative ${
                    plan.popular 
                      ? 'border-indigo-500 shadow-2xl shadow-indigo-500/10' 
                      : 'border-gray-100 hover:border-indigo-200 hover:shadow-xl'
                  }`}
                  variants={cardVariants}
                  whileHover={{ y: -8 }}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="px-4 py-1.5 bg-indigo-500 text-white text-sm font-bold rounded-full shadow-lg">
                        ⭐ Most Popular
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-[#1a1a1a] mb-2">{plan.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">{plan.tagline}</p>
                    
                    {plan.deliveryTime && (
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-xs font-medium">
                        <FaRocket className="w-3 h-3" />
                        Delivery: {plan.deliveryTime}
                      </div>
                    )}
                    
                    <div className="mt-6">
                      {plan.isCustom ? (
                        <div>
                          <div className="text-3xl font-bold text-[#1a1a1a]">Custom Quote</div>
                          <p className="text-gray-500 text-sm mt-2">Tailored to your needs</p>
                        </div>
                      ) : billingCycle === 'subscription' ? (
                        <div>
                          <div className="text-sm text-gray-500 mb-2">
                            Setup Fee (One-time): <span className="font-bold text-[#1a1a1a]">₹{plan.subscription.setupFee.toLocaleString()}</span>
                          </div>
                          <div className="flex items-baseline justify-center gap-1">
                            <span className="text-4xl font-bold text-indigo-500">
                              ₹{plan.subscription.monthly.toLocaleString()}
                            </span>
                            <span className="text-gray-500">/month</span>
                          </div>
                          <p className="text-xs text-gray-400 mt-2">After project goes live</p>
                        </div>
                      ) : (
                        <div>
                          <div className="flex items-baseline justify-center gap-1">
                            <span className="text-4xl font-bold text-[#1a1a1a]">
                              ₹{plan.oneTime.price.toLocaleString()}
                            </span>
                          </div>
                          <p className="text-gray-500 text-sm mt-2">One-time payment</p>
                        </div>
                      )}
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3">
                        {feature.included ? (
                          <div className="w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0">
                            <FaCheck className="w-3 h-3 text-indigo-500" />
                          </div>
                        ) : (
                          <div className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                            <FaTimes className="w-3 h-3 text-gray-400" />
                          </div>
                        )}
                        <span className={feature.included ? 'text-[#1a1a1a]' : 'text-gray-400'}>
                          {feature.name}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <motion.a
                    href={`https://wa.me/917579500264?text=Hi%20AINOR!%20I'm%20interested%20in%20the%20${plan.name}%20${selectedService}%20plan%20(${billingCycle}).`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center gap-2 w-full py-4 rounded-xl font-medium transition-all ${
                      plan.popular
                        ? 'bg-indigo-500 text-white hover:bg-indigo-600 shadow-lg shadow-indigo-500/25'
                        : 'bg-[#f5f5f5] text-[#1a1a1a] hover:bg-indigo-500 hover:text-white'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FaWhatsapp className="w-5 h-5" />
                    {plan.isCustom ? 'Get Custom Quote' : 'Get Started'}
                  </motion.a>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* How Subscription Works - Detailed */}
        <section className="py-20 bg-white relative overflow-hidden">
          {/* 3D Background Element */}
          <motion.div
            className="absolute top-20 right-10 opacity-20"
            animate={{ rotate: 360, scale: [1, 1.1, 1] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            style={{ filter: 'drop-shadow(0 4px 8px rgba(99, 102, 241, 0.3))' }}
          >
            <svg width="150" height="150" viewBox="0 0 150 150">
              <circle cx="75" cy="75" r="60" stroke="#6366f1" strokeWidth="2" fill="none" strokeDasharray="10 5" />
              <circle cx="75" cy="75" r="40" stroke="#6366f1" strokeWidth="2" fill="none" strokeDasharray="5 5" />
            </svg>
          </motion.div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 text-indigo-500 rounded-full mb-6 border border-indigo-100">
                <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                <span className="font-semibold text-sm">How It Works</span>
              </span>
              
              <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-4">
                Subscription Model
                <span className="block mt-2 text-indigo-500">Step by Step</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our subscription model is designed to be fair, transparent, and affordable. Here's exactly how it works.
              </p>
            </motion.div>

            {/* Process Steps with Connecting Lines */}
            <div className="relative">
              {/* Connecting Line */}
              <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-indigo-200 via-indigo-500 to-indigo-200 transform -translate-y-1/2 z-0" />
              
              <motion.div 
                className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {subscriptionSteps.map((item, index) => (
                  <motion.div
                    key={index}
                    className="bg-[#f5f5f5] rounded-3xl p-8 text-center relative"
                    variants={cardVariants}
                    whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(99, 102, 241, 0.15)' }}
                  >
                    {/* Step Number */}
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 bg-indigo-500 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                      {item.step}
                    </div>
                    
                    <div className="mt-4 mb-4 w-16 h-16 mx-auto bg-indigo-100 text-indigo-500 rounded-2xl flex items-center justify-center">
                      {item.icon}
                    </div>
                    
                    <h3 className="font-bold text-xl text-[#1a1a1a] mb-3">{item.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">{item.description}</p>
                    
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-indigo-50 text-indigo-600 rounded-full text-xs font-bold">
                      {item.highlight}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Important Payment Terms */}
        <section className="py-20 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 text-red-600 rounded-full mb-6 border border-red-100">
                <FaExclamationTriangle className="w-4 h-4" />
                <span className="font-semibold text-sm">Important Terms</span>
              </span>
              
              <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a]">
                Payment Terms &
                <span className="block mt-2 text-indigo-500">Service Policy</span>
              </h2>
            </motion.div>

            <motion.div 
              className="grid md:grid-cols-2 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {/* Setup Fee Card */}
              <motion.div
                className="bg-white rounded-3xl p-8 border border-gray-100"
                variants={cardVariants}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FaCreditCard className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-[#1a1a1a] mb-2">Setup Fee (Advance Payment)</h3>
                    <p className="text-gray-600">Required to start your project</p>
                  </div>
                </div>
                
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <FaCheck className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-[#1a1a1a]">
                      <strong>100% Advance:</strong> Setup fee must be paid in full before project development begins.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaCheck className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-[#1a1a1a]">
                      <strong>One-Time Only:</strong> This is a non-recurring fee that covers initial development costs.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaCheck className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-[#1a1a1a]">
                      <strong>Secures Your Slot:</strong> Payment confirms your project slot in our development queue.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaCheck className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-[#1a1a1a]">
                      <strong>No Monthly Fees:</strong> You don't pay any subscription until your project goes live.
                    </span>
                  </li>
                </ul>
              </motion.div>

              {/* Monthly Subscription Card */}
              <motion.div
                className="bg-white rounded-3xl p-8 border border-gray-100"
                variants={cardVariants}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FaCalendarAlt className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-[#1a1a1a] mb-2">Monthly Subscription</h3>
                    <p className="text-gray-600">Starts after project goes live</p>
                  </div>
                </div>
                
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <FaCheck className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" />
                    <span className="text-[#1a1a1a]">
                      <strong>Billing Start Date:</strong> Subscription begins exactly from the GO-LIVE date of your project.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaCheck className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" />
                    <span className="text-[#1a1a1a]">
                      <strong>Monthly Cycle:</strong> Payment is due on the same date each month (e.g., if you go live on 15th, pay by 15th each month).
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaCheck className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" />
                    <span className="text-[#1a1a1a]">
                      <strong>All-Inclusive:</strong> Hosting, SSL, updates, security, backups, and support included.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaCheck className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" />
                    <span className="text-[#1a1a1a]">
                      <strong>Cancel Anytime:</strong> No long-term contracts. Cancel with 30 days notice.
                    </span>
                  </li>
                </ul>
              </motion.div>

              {/* Late Payment Warning Card - Full Width */}
              <motion.div
                className="md:col-span-2 bg-gradient-to-r from-red-50 to-orange-50 rounded-3xl p-8 border-2 border-red-200"
                variants={cardVariants}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-red-100 text-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FaExclamationTriangle className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-red-700 mb-2">⚠️ Late Payment Policy - Important!</h3>
                    <p className="text-red-600">Please read carefully to avoid service interruption</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-2xl p-6">
                    <h4 className="font-bold text-[#1a1a1a] mb-4 flex items-center gap-2">
                      <span className="w-8 h-8 bg-yellow-100 text-yellow-600 rounded-lg flex items-center justify-center text-sm font-bold">1-7</span>
                      Days 1-7 After Due Date
                    </h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
                        <span>Grace period - Services continue normally</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
                        <span>Reminder notifications sent via WhatsApp & Email</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
                        <span>No additional charges during this period</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-6">
                    <h4 className="font-bold text-[#1a1a1a] mb-4 flex items-center gap-2">
                      <span className="w-8 h-8 bg-red-100 text-red-600 rounded-lg flex items-center justify-center text-sm font-bold">7+</span>
                      After 7 Days (Service Suspension)
                    </h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-red-500"></span>
                        <span className="text-red-700 font-medium">Website/App will be taken offline</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-red-500"></span>
                        <span>All services including hosting suspended</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-red-500"></span>
                        <span>Service restored within 24 hours of payment</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-red-500"></span>
                        <span>Data is preserved for 30 days after suspension</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-red-100 rounded-xl">
                  <p className="text-red-700 text-sm font-medium text-center">
                    💡 <strong>Pro Tip:</strong> Set up auto-pay or calendar reminders to never miss a payment. We also send reminders 3 days before due date!
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* What's Included Every Month */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 text-indigo-500 rounded-full mb-6 border border-indigo-100">
                <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                <span className="font-semibold text-sm">Subscription Benefits</span>
              </span>
              
              <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a]">
                Everything Included
                <span className="block mt-2 text-indigo-500">In Your Monthly Plan</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto mt-4">
                No hidden costs. Your subscription includes everything you need to keep your digital presence running smoothly.
              </p>
            </motion.div>

            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                { icon: '🖥️', title: 'Premium Hosting', desc: 'Fast, reliable servers with 99.9% uptime', value: '₹3,000+/year value' },
                { icon: '🔒', title: 'SSL Certificate', desc: 'Secure HTTPS connection for your site', value: '₹2,000+/year value' },
                { icon: '🔄', title: 'Content Updates', desc: '2-5 updates per month based on plan', value: '₹5,000+/month value' },
                { icon: '🛡️', title: 'Security Monitoring', desc: '24/7 threat detection & protection', value: '₹4,000+/year value' },
                { icon: '📊', title: 'Analytics & Reports', desc: 'Monthly performance insights', value: '₹2,000+/month value' },
                { icon: '💾', title: 'Daily Backups', desc: 'Automatic backups with easy restore', value: '₹3,000+/year value' },
                { icon: '📞', title: 'Priority Support', desc: 'WhatsApp support with fast response', value: 'Priceless!' },
                { icon: '🚀', title: 'Speed Optimization', desc: 'Regular performance tuning', value: '₹5,000+/month value' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-[#f5f5f5] rounded-2xl p-6 text-center hover:shadow-lg transition-shadow"
                  variants={cardVariants}
                  whileHover={{ y: -5 }}
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="font-bold text-[#1a1a1a] mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{item.desc}</p>
                  <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">
                    {item.value}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* Total Value Calculation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-3xl p-8 text-center text-white"
            >
              <h3 className="text-2xl font-bold mb-2">Total Value You Get Every Month</h3>
              <div className="text-5xl font-bold my-4">₹15,000+</div>
              <p className="text-indigo-100 mb-4">Worth of services included in your subscription</p>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full text-sm font-medium">
                Starting at just ₹2,499/month
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 text-indigo-500 rounded-full mb-6 border border-indigo-100">
                <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                <span className="font-semibold text-sm">Common Questions</span>
              </span>
              
              <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a]">
                Frequently Asked
                <span className="block mt-2 text-indigo-500">Questions</span>
              </h2>
            </motion.div>

            <motion.div 
              className="space-y-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                {
                  q: 'When do I need to pay the setup fee?',
                  a: 'The setup fee is due before we begin working on your project. Once received, we schedule your project and begin development within 2-3 business days.'
                },
                {
                  q: 'When does my monthly subscription start?',
                  a: 'Your monthly subscription begins exactly from the GO-LIVE date - the day your website or app is launched and made public. You pay nothing during the development phase.'
                },
                {
                  q: 'What happens if I pay late?',
                  a: 'You have a 7-day grace period after your due date. After 7 days of non-payment, your website/app will be temporarily taken offline until payment is received. Services are restored within 24 hours of payment.'
                },
                {
                  q: 'Can I cancel my subscription?',
                  a: 'Yes, you can cancel anytime with 30 days notice. After cancellation, you\'ll receive all your files and data. Note that your website will go offline as hosting is included in the subscription.'
                },
                {
                  q: 'What if I want to switch to one-time payment later?',
                  a: 'Yes! You can convert to one-time ownership anytime by paying the remaining balance (one-time price minus setup fee paid). Contact us for a personalized quote.'
                },
                {
                  q: 'Are there any hidden fees?',
                  a: 'Absolutely not! The prices shown include everything - hosting, SSL, updates, security, and support. The only additional costs would be for major feature additions or redesigns, which are quoted separately.'
                },
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl p-6 border border-gray-100"
                  variants={cardVariants}
                >
                  <h3 className="font-bold text-lg text-[#1a1a1a] mb-2">{faq.q}</h3>
                  <p className="text-gray-600">{faq.a}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#1a1a1a] rounded-3xl p-12 md:p-16 text-center relative overflow-hidden"
            >
              {/* Background decoration */}
              <div className="absolute inset-0 opacity-10">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <motion.circle
                    cx="80" cy="20" r="40"
                    fill="#6366f1"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 10, repeat: Infinity }}
                  />
                  <motion.circle
                    cx="20" cy="80" r="30"
                    fill="#6366f1"
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 8, repeat: Infinity }}
                  />
                </svg>
              </div>
              
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                  Ready to Get Started?
                </h2>
                <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                  Join 50+ businesses already growing with AINOR's subscription model. 
                  Let's discuss your project and find the perfect plan for you.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.a
                    href="https://wa.me/917579500264?text=Hi%20AINOR!%20I%20want%20to%20discuss%20subscription%20pricing%20for%20my%20project."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-green-500 text-white rounded-xl font-medium hover:bg-green-600 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FaWhatsapp className="w-5 h-5" />
                    Chat on WhatsApp
                  </motion.a>
                  
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Link
                      to="/contact"
                      className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/10 text-white rounded-xl font-medium hover:bg-white/20 transition-colors border border-white/20"
                    >
                      Schedule a Call
                      <FaArrowRight className="w-4 h-4" />
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PricingPage;
