import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCheck, FaTimes, FaRocket, FaStar, FaCrown, FaInfoCircle, FaDownload } from 'react-icons/fa';
import { IoSparkles, IoShieldCheckmark, IoRocket, IoHeadset } from 'react-icons/io5';
import Container from '../components/layout/Container';
import Section from '../components/layout/Section';
import Button from '../components/ui/Button';
import SEOHead from '../components/seo/SEOHead';
import SEOText from '../components/seo/SEOText';

const PricingPage = () => {
  const [billingCycle, setBillingCycle] = useState('subscription'); // 'subscription' or 'onetime'
  const [selectedService, setSelectedService] = useState('web');

  // Service types
  const services = [
    { id: 'web', name: 'Web Development', icon: '🌐' },
    { id: 'mobile', name: 'Mobile Apps', icon: '📱' },
    { id: 'ecommerce', name: 'E-Commerce', icon: '🛒' },
    { id: 'custom', name: 'Custom Software', icon: '⚙️' },
    { id: 'design', name: 'UI/UX Design', icon: '🎨' },
  ];

  // Comprehensive pricing with one-time and subscription models (with setup fees)
  const pricingPlans = {
    web: [
      {
        id: 'starter',
        name: 'Starter',
        tagline: 'For small businesses',
        icon: <FaRocket className="w-6 h-6" />,
        oneTime: {
          price: 15000,
          deliveryDays: 7,
        },
        subscription: {
          setupFee: 5000,
          monthly: 2499,
          includes: ['Hosting', 'SSL Certificate', 'Basic Support', '2 Content Updates/month']
        },
        features: [
          { name: 'Responsive website (up to 5 pages)', included: true },
          { name: 'Mobile-friendly design', included: true },
          { name: 'Contact form', included: true },
          { name: 'Basic SEO setup', included: true },
          { name: 'Social media links', included: true },
          { name: 'Google Analytics', included: true },
          { name: 'Blog integration', included: false },
          { name: 'Custom animations', included: false },
          { name: 'E-commerce features', included: false },
          { name: 'Priority support', included: false },
        ],
        popular: false,
        color: 'blue'
      },
      {
        id: 'professional',
        name: 'Professional',
        tagline: 'Most popular choice',
        icon: <FaStar className="w-6 h-6" />,
        oneTime: {
          price: 35000,
          deliveryDays: 14,
        },
        subscription: {
          setupFee: 10000,
          monthly: 4999,
          includes: ['Premium Hosting', 'SSL Certificate', 'Priority Support', '5 Content Updates/month', 'Monthly Backup', 'Performance Monitoring']
        },
        features: [
          { name: 'Responsive website (up to 10 pages)', included: true },
          { name: 'Mobile-friendly design', included: true },
          { name: 'Advanced contact forms', included: true },
          { name: 'Advanced SEO optimization', included: true },
          { name: 'Social media integration', included: true },
          { name: 'Google Analytics + Search Console', included: true },
          { name: 'Blog with CMS', included: true },
          { name: 'Custom animations', included: true },
          { name: 'E-commerce features', included: false },
          { name: 'Priority support', included: true },
        ],
        popular: true,
        color: 'indigo'
      },
      {
        id: 'enterprise',
        name: 'Enterprise',
        tagline: 'For large businesses',
        icon: <FaCrown className="w-6 h-6" />,
        isCustomPricing: true,
        oneTime: {
          price: 0,
          deliveryDays: 0,
        },
        subscription: {
          setupFee: 0,
          monthly: 0,
          includes: ['Enterprise Hosting', 'SSL Certificate', '24/7 Support', 'Unlimited Updates', 'Daily Backup', 'Security Monitoring', 'CDN', 'Dedicated Manager']
        },
        features: [
          { name: 'Unlimited pages', included: true },
          { name: 'Mobile-friendly design', included: true },
          { name: 'Advanced forms + CRM integration', included: true },
          { name: 'Enterprise SEO suite', included: true },
          { name: 'Full social media integration', included: true },
          { name: 'Advanced analytics dashboard', included: true },
          { name: 'Blog + Newsletter system', included: true },
          { name: 'Premium animations & interactions', included: true },
          { name: 'E-commerce ready', included: true },
          { name: '24/7 Priority support', included: true },
        ],
        popular: false,
        color: 'purple'
      }
    ],
    mobile: [
      {
        id: 'starter',
        name: 'Starter App',
        tagline: 'Single platform',
        icon: <FaRocket className="w-6 h-6" />,
        oneTime: {
          price: 50000,
          deliveryDays: 30,
        },
        subscription: {
          setupFee: 15000,
          monthly: 4999,
          includes: ['App Store Management', 'Bug Fixes', 'Basic Support', '2 Updates/month']
        },
        features: [
          { name: 'Single platform (iOS or Android)', included: true },
          { name: 'Up to 8 screens', included: true },
          { name: 'User authentication', included: true },
          { name: 'Push notifications', included: true },
          { name: 'Basic analytics', included: true },
          { name: 'App store submission', included: true },
          { name: 'Cross-platform', included: false },
          { name: 'In-app purchases', included: false },
          { name: 'Admin dashboard', included: false },
          { name: 'Real-time features', included: false },
        ],
        popular: false,
        color: 'blue'
      },
      {
        id: 'professional',
        name: 'Professional App',
        tagline: 'Cross-platform',
        icon: <FaStar className="w-6 h-6" />,
        oneTime: {
          price: 95000,
          deliveryDays: 45,
        },
        subscription: {
          setupFee: 30000,
          monthly: 8999,
          includes: ['Both App Stores', 'Bug Fixes', 'Priority Support', '5 Updates/month', 'Performance Monitoring', 'Crash Analytics']
        },
        features: [
          { name: 'Cross-platform (iOS & Android)', included: true },
          { name: 'Up to 15 screens', included: true },
          { name: 'Social login + auth', included: true },
          { name: 'Advanced notifications', included: true },
          { name: 'Full analytics suite', included: true },
          { name: 'App store optimization', included: true },
          { name: 'Cross-platform', included: true },
          { name: 'In-app purchases', included: true },
          { name: 'Admin dashboard', included: true },
          { name: 'Real-time features', included: false },
        ],
        popular: true,
        color: 'indigo'
      },
      {
        id: 'enterprise',
        name: 'Enterprise App',
        tagline: 'Full-featured',
        icon: <FaCrown className="w-6 h-6" />,
        isCustomPricing: true,
        oneTime: {
          price: 0,
          deliveryDays: 0,
        },
        subscription: {
          setupFee: 0,
          monthly: 0,
          includes: ['Both App Stores', '24/7 Support', 'Unlimited Updates', 'Server Management', 'Security Audits', 'Dedicated Team']
        },
        features: [
          { name: 'Cross-platform (iOS & Android)', included: true },
          { name: 'Unlimited screens', included: true },
          { name: 'Enterprise auth + SSO', included: true },
          { name: 'Rich notifications + scheduling', included: true },
          { name: 'Custom analytics dashboard', included: true },
          { name: 'Full ASO + marketing', included: true },
          { name: 'Cross-platform', included: true },
          { name: 'Monetization features', included: true },
          { name: 'Full admin panel', included: true },
          { name: 'Real-time + offline sync', included: true },
        ],
        popular: false,
        color: 'purple'
      }
    ],
    ecommerce: [
      {
        id: 'starter',
        name: 'Starter Store',
        tagline: 'Up to 100 products',
        icon: <FaRocket className="w-6 h-6" />,
        oneTime: {
          price: 30000,
          deliveryDays: 14,
        },
        subscription: {
          setupFee: 10000,
          monthly: 3999,
          includes: ['E-commerce Hosting', 'SSL', 'Payment Gateway', '50 Products', 'Basic Support', 'Order Management']
        },
        features: [
          { name: 'Up to 100 products', included: true },
          { name: 'Secure payment gateway', included: true },
          { name: 'Order management', included: true },
          { name: 'Inventory tracking', included: true },
          { name: 'Basic shipping setup', included: true },
          { name: 'Customer accounts', included: true },
          { name: 'Multi-vendor support', included: false },
          { name: 'Advanced analytics', included: false },
          { name: 'Mobile app', included: false },
          { name: 'Marketing automation', included: false },
        ],
        popular: false,
        color: 'blue'
      },
      {
        id: 'professional',
        name: 'Professional Store',
        tagline: 'Up to 1000 products',
        icon: <FaStar className="w-6 h-6" />,
        oneTime: {
          price: 65000,
          deliveryDays: 21,
        },
        subscription: {
          setupFee: 20000,
          monthly: 7999,
          includes: ['Premium Hosting', 'SSL', 'Multi-Gateway', '500 Products', 'Priority Support', 'Advanced Analytics', 'Marketing Tools']
        },
        features: [
          { name: 'Up to 1000 products', included: true },
          { name: 'Multi-payment options', included: true },
          { name: 'Advanced order system', included: true },
          { name: 'Real-time inventory', included: true },
          { name: 'Advanced shipping', included: true },
          { name: 'Customer rewards', included: true },
          { name: 'Multi-vendor support', included: false },
          { name: 'Advanced analytics', included: true },
          { name: 'Mobile app', included: false },
          { name: 'Marketing automation', included: true },
        ],
        popular: true,
        color: 'indigo'
      },
      {
        id: 'enterprise',
        name: 'Enterprise Store',
        tagline: 'Unlimited scale',
        icon: <FaCrown className="w-6 h-6" />,
        isCustomPricing: true,
        oneTime: {
          price: 0,
          deliveryDays: 0,
        },
        subscription: {
          setupFee: 0,
          monthly: 0,
          includes: ['Enterprise Hosting', 'SSL', 'All Gateways', 'Unlimited Products', '24/7 Support', 'Full Analytics', 'All Integrations']
        },
        features: [
          { name: 'Unlimited products', included: true },
          { name: 'All payment gateways', included: true },
          { name: 'Enterprise order management', included: true },
          { name: 'Multi-warehouse inventory', included: true },
          { name: 'Global shipping + tax', included: true },
          { name: 'Loyalty + affiliate program', included: true },
          { name: 'Multi-vendor marketplace', included: true },
          { name: 'Custom analytics', included: true },
          { name: 'Mobile app included', included: true },
          { name: 'Full automation suite', included: true },
        ],
        popular: false,
        color: 'purple'
      }
    ],
    custom: [
      {
        id: 'starter',
        name: 'Starter Solution',
        tagline: 'Basic automation',
        icon: <FaRocket className="w-6 h-6" />,
        oneTime: {
          price: 45000,
          deliveryDays: 21,
        },
        subscription: {
          setupFee: 15000,
          monthly: 5999,
          includes: ['Cloud Hosting', 'Bug Fixes', 'Basic Support', 'Security Updates', 'Database Backup']
        },
        features: [
          { name: 'Custom functionality', included: true },
          { name: 'Database integration', included: true },
          { name: 'User management', included: true },
          { name: 'Basic reporting', included: true },
          { name: 'API documentation', included: true },
          { name: 'Source code', included: true },
          { name: 'Third-party integrations', included: false },
          { name: 'Advanced workflows', included: false },
          { name: 'Scalable architecture', included: false },
          { name: 'Dedicated support', included: false },
        ],
        popular: false,
        color: 'blue'
      },
      {
        id: 'professional',
        name: 'Professional Solution',
        tagline: 'Full automation',
        icon: <FaStar className="w-6 h-6" />,
        oneTime: {
          price: 95000,
          deliveryDays: 45,
        },
        subscription: {
          setupFee: 30000,
          monthly: 11999,
          includes: ['Premium Hosting', 'Priority Support', 'All Updates', 'Security Monitoring', 'Performance Tuning', 'API Maintenance']
        },
        features: [
          { name: 'Complex custom logic', included: true },
          { name: 'Advanced database', included: true },
          { name: 'Role-based access', included: true },
          { name: 'Advanced analytics', included: true },
          { name: 'Full documentation', included: true },
          { name: 'Source code + training', included: true },
          { name: 'Third-party integrations', included: true },
          { name: 'Advanced workflows', included: true },
          { name: 'Scalable architecture', included: false },
          { name: 'Dedicated support', included: true },
        ],
        popular: true,
        color: 'indigo'
      },
      {
        id: 'enterprise',
        name: 'Enterprise Solution',
        tagline: 'Mission critical',
        icon: <FaCrown className="w-6 h-6" />,
        isCustomPricing: true,
        oneTime: {
          price: 0,
          deliveryDays: 0,
        },
        subscription: {
          setupFee: 0,
          monthly: 0,
          includes: ['Enterprise Hosting', '24/7 Support', 'SLA Guarantee', 'Dedicated Team', 'Custom Integrations', 'Compliance Support']
        },
        features: [
          { name: 'Enterprise-grade system', included: true },
          { name: 'Multi-database architecture', included: true },
          { name: 'Enterprise security', included: true },
          { name: 'Custom analytics suite', included: true },
          { name: 'Full documentation + training', included: true },
          { name: 'Source code + IP transfer', included: true },
          { name: 'Unlimited integrations', included: true },
          { name: 'AI/ML capabilities', included: true },
          { name: 'Auto-scaling architecture', included: true },
          { name: '24/7 dedicated team', included: true },
        ],
        popular: false,
        color: 'purple'
      }
    ],
    design: [
      {
        id: 'starter',
        name: 'Essential Design',
        tagline: 'Brand basics',
        icon: <FaRocket className="w-6 h-6" />,
        oneTime: {
          price: 12000,
          deliveryDays: 7,
        },
        subscription: {
          setupFee: 3000,
          monthly: 1999,
          includes: ['2 Design Requests/month', 'Logo Updates', 'Social Media Graphics', 'Basic Support']
        },
        features: [
          { name: 'Logo design (3 concepts)', included: true },
          { name: 'Business card design', included: true },
          { name: 'Brand color palette', included: true },
          { name: 'Typography selection', included: true },
          { name: 'Social media kit', included: true },
          { name: 'Source files (AI/PSD)', included: true },
          { name: 'Brand guidelines', included: false },
          { name: 'Marketing materials', included: false },
          { name: 'Website mockups', included: false },
          { name: 'Unlimited revisions', included: false },
        ],
        popular: false,
        color: 'blue'
      },
      {
        id: 'professional',
        name: 'Professional Design',
        tagline: 'Complete branding',
        icon: <FaStar className="w-6 h-6" />,
        oneTime: {
          price: 28000,
          deliveryDays: 14,
        },
        subscription: {
          setupFee: 8000,
          monthly: 3999,
          includes: ['5 Design Requests/month', 'All Brand Materials', 'Priority Support', 'Social Media Management']
        },
        features: [
          { name: 'Logo design (5 concepts)', included: true },
          { name: 'Complete stationery', included: true },
          { name: 'Full brand identity', included: true },
          { name: 'Custom typography', included: true },
          { name: 'Social media kit + templates', included: true },
          { name: 'All source files', included: true },
          { name: 'Brand guidelines book', included: true },
          { name: 'Marketing materials', included: true },
          { name: 'Website mockups', included: true },
          { name: 'Unlimited revisions', included: false },
        ],
        popular: true,
        color: 'indigo'
      },
      {
        id: 'enterprise',
        name: 'Enterprise Design',
        tagline: 'Full creative suite',
        icon: <FaCrown className="w-6 h-6" />,
        isCustomPricing: true,
        oneTime: {
          price: 0,
          deliveryDays: 0,
        },
        subscription: {
          setupFee: 0,
          monthly: 0,
          includes: ['Unlimited Design Requests', 'Dedicated Designer', 'Same-Day Support', 'Video + Animation']
        },
        features: [
          { name: 'Unlimited logo concepts', included: true },
          { name: 'Full brand suite', included: true },
          { name: 'Multi-brand management', included: true },
          { name: 'Custom illustrations', included: true },
          { name: 'Video + motion graphics', included: true },
          { name: 'Complete asset library', included: true },
          { name: 'Comprehensive guidelines', included: true },
          { name: 'All marketing materials', included: true },
          { name: 'Full website design', included: true },
          { name: 'Unlimited revisions', included: true },
        ],
        popular: false,
        color: 'purple'
      }
    ]
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const currentPlans = pricingPlans[selectedService];

  // Subscription benefits
  const subscriptionBenefits = [
    { icon: <IoShieldCheckmark className="w-6 h-6" />, title: 'Security Updates', desc: 'Regular security patches and updates' },
    { icon: <IoRocket className="w-6 h-6" />, title: 'Performance', desc: 'Continuous optimization and monitoring' },
    { icon: <IoHeadset className="w-6 h-6" />, title: 'Support', desc: 'Dedicated technical support team' },
    { icon: <IoSparkles className="w-6 h-6" />, title: 'Updates', desc: 'Regular feature and content updates' },
  ];

  return (
    <>
      <SEOHead 
        title="AINOR Pricing - Affordable Web Development & Subscription Plans India"
        description="Transparent pricing for web development, mobile apps, and digital solutions. One-time projects starting from ₹12,000 or monthly subscriptions from ₹1,999. Get free quote today!"
        keywords="AINOR pricing, web development cost India, mobile app development price, monthly subscription, digital solutions pricing, affordable web development"
        canonicalUrl="https://myainor.com/pricing"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "AINOR Pricing",
          "description": "Transparent pricing for professional web development and digital solutions in India.",
          "url": "https://myainor.com/pricing"
        }}
      />
      
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-900">
        
        {/* Header Section */}
        <Section className="pt-24 pb-12 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-100 rounded-full blur-3xl opacity-50"></div>
          </div>
          
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto px-4 relative z-10"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-200 rounded-full px-4 py-2 mb-6"
              >
                <IoSparkles className="text-blue-600" />
                <span className="text-sm font-medium text-blue-700">Transparent Pricing • No Hidden Costs</span>
              </motion.div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
                Simple, <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Honest</span> Pricing
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Choose between one-time project pricing or flexible monthly subscriptions. 
                All prices in Indian Rupees (₹)
              </p>
              
              {/* Download PDF Button */}
              <a 
                href="/assets/AINOR-Pricing-Guide-2025.html" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gray-900 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors mb-8"
              >
                <FaDownload className="w-4 h-4" />
                Download Complete Pricing Guide
              </a>
              
              {/* Trust Line */}
              <p className="text-sm text-gray-500 mb-6">Trusted by startups & growing businesses across India 🇮🇳</p>
              
              {/* Billing Toggle - Subscription First */}
              <div className="inline-flex items-center bg-white rounded-2xl p-2 shadow-lg border border-gray-100">
                <button
                  onClick={() => setBillingCycle('subscription')}
                  className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                    billingCycle === 'subscription'
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <span className="text-xs">🔥</span>
                  Monthly Subscription
                </button>
                <button
                  onClick={() => setBillingCycle('onetime')}
                  className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                    billingCycle === 'onetime'
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  One-Time Project
                </button>
              </div>
            </motion.div>
          </Container>
        </Section>

        {/* Service Selection Pills */}
        <Section className="py-8">
          <Container>
            <div className="flex flex-wrap justify-center gap-3 px-4">
              {services.map((service, index) => (
                <motion.button
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => setSelectedService(service.id)}
                  className={`px-5 py-3 rounded-xl text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                    selectedService === service.id
                      ? 'bg-gray-900 text-white shadow-lg scale-105'
                      : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <span>{service.icon}</span>
                  {service.name}
                </motion.button>
              ))}
            </div>
          </Container>
        </Section>

        {/* Pricing Cards */}
        <Section className="py-12">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
              <AnimatePresence mode="wait">
                {currentPlans.map((plan, index) => (
                  <motion.div
                    key={`${selectedService}-${plan.id}`}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="relative"
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-1.5 rounded-full text-sm font-semibold shadow-lg">
                          ⭐ Most Popular
                        </span>
                      </div>
                    )}
                    
                    <div className={`bg-white rounded-3xl p-8 h-full shadow-xl border-2 transition-all duration-300 hover:shadow-2xl ${
                      plan.popular 
                        ? 'border-blue-500 scale-[1.02]' 
                        : 'border-gray-100 hover:border-gray-200'
                    }`}>
                      {/* Plan Header */}
                      <div className="text-center mb-8">
                        <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-4 ${
                          plan.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                          plan.color === 'indigo' ? 'bg-indigo-100 text-indigo-600' :
                          'bg-purple-100 text-purple-600'
                        }`}>
                          {plan.icon}
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-1">{plan.name}</h3>
                        <p className="text-gray-500 text-sm">{plan.tagline}</p>
                      </div>
                      
                      {/* Price Display */}
                      <div className="text-center mb-8">
                        {plan.isCustomPricing ? (
                          <>
                            <div className="flex flex-col items-center justify-center gap-2">
                              <span className="text-3xl font-bold text-gray-900">
                                Custom Pricing
                              </span>
                              <span className="text-sm text-gray-500">Based on your project requirements</span>
                            </div>
                            <div className="mt-3 inline-flex items-center gap-1.5 bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-xs font-medium">
                              <span>💬</span> Let's discuss your needs
                            </div>
                          </>
                        ) : billingCycle === 'onetime' ? (
                          <>
                            <div className="flex items-baseline justify-center gap-1">
                              <span className="text-4xl font-bold text-gray-900">
                                {formatPrice(plan.oneTime.price)}
                              </span>
                            </div>
                            <p className="text-gray-500 text-sm mt-1">one-time payment</p>
                            <div className="mt-3 inline-flex items-center gap-1.5 bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                              <span>🚀</span> Delivery in {plan.oneTime.deliveryDays} days
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="flex items-baseline justify-center gap-1">
                              <span className="text-4xl font-bold text-gray-900">
                                {formatPrice(plan.subscription.monthly)}
                              </span>
                              <span className="text-gray-500">/mo</span>
                            </div>
                            <p className="text-gray-500 text-sm mt-1">billed monthly</p>
                            <p className="text-xs text-gray-400 mt-1">No long-term contracts. Cancel anytime.</p>
                            <div className="mt-3 inline-flex items-center gap-1.5 bg-orange-50 text-orange-700 px-3 py-1.5 rounded-full text-xs font-medium">
                              <span>💳</span> One-time setup fee: {formatPrice(plan.subscription.setupFee)}
                            </div>
                          </>
                        )}
                      </div>

                      {/* Subscription Includes */}
                      {billingCycle === 'subscription' && !plan.isCustomPricing && (
                        <div className="mb-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl">
                          <p className="text-xs font-semibold text-blue-700 mb-2 uppercase tracking-wider">Subscription Includes:</p>
                          <div className="flex flex-wrap gap-1.5">
                            {plan.subscription.includes.map((item, idx) => (
                              <span key={idx} className="text-xs bg-white px-2 py-1 rounded-md text-gray-700 border border-blue-100">
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Features List */}
                      <ul className="space-y-3 mb-8">
                        {plan.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${
                              feature.included 
                                ? 'bg-green-100 text-green-600' 
                                : 'bg-gray-100 text-gray-400'
                            }`}>
                              {feature.included ? (
                                <FaCheck className="w-3 h-3" />
                              ) : (
                                <FaTimes className="w-3 h-3" />
                              )}
                            </div>
                            <span className={`text-sm ${feature.included ? 'text-gray-700' : 'text-gray-400'}`}>
                              {feature.name}
                            </span>
                          </li>
                        ))}
                      </ul>

                      {/* CTA Button */}
                      {plan.isCustomPricing ? (
                        <a
                          href="https://wa.me/917579500264?text=Hi%20AINOR!%20I'm%20interested%20in%20the%20Enterprise%20plan.%20Let's%20discuss%20my%20project."
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block w-full py-3 bg-gradient-to-r from-green-600 to-green-500 text-white rounded-xl font-semibold hover:from-green-700 hover:to-green-600 transition-all duration-300 shadow-lg hover:shadow-xl text-center"
                        >
                          <span className="flex items-center justify-center gap-2">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                            </svg>
                            Let's Talk on WhatsApp
                          </span>
                        </a>
                      ) : (
                        <a
                          href="https://wa.me/917579500264?text=Hi%20AINOR!%20I'm%20interested%20in%20subscribing%20to%20your%20services.%20Let's%20discuss!"
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`block w-full py-3 rounded-xl font-semibold transition-all duration-300 text-center ${
                            plan.popular
                              ? 'bg-gradient-to-r from-green-600 to-green-500 text-white hover:from-green-700 hover:to-green-600 shadow-lg hover:shadow-xl'
                              : 'border-2 border-green-600 text-green-600 hover:bg-green-50'
                          }`}
                        >
                          <span className="flex items-center justify-center gap-2">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                            </svg>
                            {billingCycle === 'onetime' ? 'Chat on WhatsApp' : 'Subscribe via WhatsApp'}
                          </span>
                        </a>
                      )}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </Container>
        </Section>

        {/* Subscription Benefits Section */}
        {billingCycle === 'subscription' && (
          <Section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600">
            <Container>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center text-white mb-12 px-4"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Subscription?</h2>
                <p className="text-xl opacity-90 max-w-2xl mx-auto">
                  Get continuous value with our monthly subscription plans
                </p>
              </motion.div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
                {subscriptionBenefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center text-white"
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-xl mb-4">
                      {benefit.icon}
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                    <p className="text-sm opacity-80">{benefit.desc}</p>
                  </motion.div>
                ))}
              </div>
            </Container>
          </Section>
        )}

        {/* Comparison Note */}
        <Section className="py-12">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto px-4"
            >
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8 border border-amber-200">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                    <FaInfoCircle className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">One-Time vs Subscription: Which is right for you?</h3>
                    <div className="grid md:grid-cols-2 gap-4 mt-4">
                      <div>
                        <p className="font-semibold text-gray-800 mb-2">Choose One-Time if:</p>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• You have your own hosting & maintenance team</li>
                          <li>• You need a one-time delivery with no ongoing costs</li>
                          <li>• You want full ownership from day one</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800 mb-2">Choose Subscription if:</p>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• You want hassle-free hosting & maintenance</li>
                          <li>• You need regular updates and support</li>
                          <li>• You prefer predictable monthly costs</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </Container>
        </Section>

        {/* FAQ Section */}
        <Section className="py-16 bg-gray-50">
          <Container>
            <div className="text-center mb-12 px-4">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Everything you need to know about our pricing
              </p>
            </div>

            <div className="max-w-3xl mx-auto px-4">
              <div className="space-y-4">
                {[
                  {
                    question: "What is the one-time setup fee for subscriptions?",
                    answer: "The setup fee covers the initial development and deployment of your project. It's a one-time payment made at the start, and then you only pay the monthly subscription for ongoing maintenance, hosting, and support."
                  },
                  {
                    question: "Can I switch from subscription to one-time ownership?",
                    answer: "Yes! If you're on a subscription and want to switch to one-time ownership, you can pay the remaining project cost minus the subscription payments made (up to 50% of project cost). Contact us for a custom calculation."
                  },
                  {
                    question: "What's included in the monthly subscription?",
                    answer: "Subscription includes hosting, SSL, security updates, bug fixes, content updates (based on plan), performance monitoring, regular backups, and technical support. Major new features or redesigns are quoted separately."
                  },
                  {
                    question: "What happens if I cancel my subscription?",
                    answer: "You can cancel anytime with 30 days notice. We'll provide all source files and help migrate to your own hosting if needed. Your website/app will continue to work, but you'll need to arrange your own hosting and maintenance."
                  },
                  {
                    question: "Do you offer discounts for startups or yearly payments?",
                    answer: "Yes! We offer up to 20% discount for registered startups and non-profit organizations. For annual subscriptions, contact us for special pricing. We also offer custom enterprise packages."
                  }
                ].map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600">
                      {faq.answer}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </Container>
        </Section>
        
        {/* SEO Content Section */}
        <SEOText page="pricing" />

        {/* CTA Section */}
        <Section className="py-16">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-12 text-white mx-4 relative overflow-hidden"
            >
              {/* Background decoration */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"></div>
              </div>
              
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Need a Custom Quote?
                </h2>
                <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                  Every project is unique. Let's discuss your requirements and create a tailored solution.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button href="/contact" variant="white" size="lg">
                    Get Free Consultation
                  </Button>
                  <Button href="/portfolio" variant="outline-white" size="lg">
                    View Our Work
                  </Button>
                </div>
              </div>
            </motion.div>
          </Container>
        </Section>
      </div>
    </>
  );
};

export default PricingPage;
