import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaCheck, FaTimes, FaWhatsapp } from 'react-icons/fa';
import SEOHead from '../components/seo/SEOHead';

// Color palette: Dark (#1a1a1a), Light (#f5f5f5), Accent (indigo-500)

const PricingPage = () => {
  const [billingCycle, setBillingCycle] = useState('subscription');
  const [selectedService, setSelectedService] = useState('web');

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
        tagline: 'For small businesses',
        oneTime: { price: 15000 },
        subscription: { setupFee: 5000, monthly: 2499 },
        features: [
          { name: 'Up to 5 pages', included: true },
          { name: 'Mobile responsive', included: true },
          { name: 'Contact form', included: true },
          { name: 'Basic SEO', included: true },
          { name: 'Hosting included', included: true },
          { name: 'SSL certificate', included: true },
          { name: 'Blog integration', included: false },
          { name: 'Custom animations', included: false },
        ],
        popular: false,
      },
      {
        name: 'Professional',
        tagline: 'Most popular choice',
        oneTime: { price: 35000 },
        subscription: { setupFee: 10000, monthly: 4999 },
        features: [
          { name: 'Up to 10 pages', included: true },
          { name: 'Mobile responsive', included: true },
          { name: 'Advanced forms', included: true },
          { name: 'Advanced SEO', included: true },
          { name: 'Premium hosting', included: true },
          { name: 'SSL + CDN', included: true },
          { name: 'Blog with CMS', included: true },
          { name: 'Custom animations', included: true },
        ],
        popular: true,
      },
      {
        name: 'Enterprise',
        tagline: 'For large businesses',
        isCustom: true,
        features: [
          { name: 'Unlimited pages', included: true },
          { name: 'Mobile responsive', included: true },
          { name: 'CRM integration', included: true },
          { name: 'Enterprise SEO', included: true },
          { name: 'Enterprise hosting', included: true },
          { name: 'SSL + CDN + Security', included: true },
          { name: 'Full CMS', included: true },
          { name: 'Premium animations', included: true },
        ],
        popular: false,
      },
    ],
    mobile: [
      {
        name: 'Starter App',
        tagline: 'Single platform',
        oneTime: { price: 50000 },
        subscription: { setupFee: 15000, monthly: 4999 },
        features: [
          { name: 'iOS or Android', included: true },
          { name: 'Up to 8 screens', included: true },
          { name: 'User authentication', included: true },
          { name: 'Push notifications', included: true },
          { name: 'App store submission', included: true },
          { name: 'Basic analytics', included: true },
          { name: 'Cross-platform', included: false },
          { name: 'Admin dashboard', included: false },
        ],
        popular: false,
      },
      {
        name: 'Professional App',
        tagline: 'Cross-platform',
        oneTime: { price: 100000 },
        subscription: { setupFee: 30000, monthly: 9999 },
        features: [
          { name: 'iOS and Android', included: true },
          { name: 'Up to 15 screens', included: true },
          { name: 'User authentication', included: true },
          { name: 'Push notifications', included: true },
          { name: 'App store submission', included: true },
          { name: 'Advanced analytics', included: true },
          { name: 'Cross-platform', included: true },
          { name: 'Admin dashboard', included: true },
        ],
        popular: true,
      },
      {
        name: 'Enterprise App',
        tagline: 'Full ecosystem',
        isCustom: true,
        features: [
          { name: 'iOS and Android', included: true },
          { name: 'Unlimited screens', included: true },
          { name: 'Advanced auth', included: true },
          { name: 'Real-time features', included: true },
          { name: 'Full ecosystem', included: true },
          { name: 'Enterprise analytics', included: true },
          { name: 'Cross-platform', included: true },
          { name: 'Full admin suite', included: true },
        ],
        popular: false,
      },
    ],
    ecommerce: [
      {
        name: 'Starter Store',
        tagline: 'Small catalog',
        oneTime: { price: 25000 },
        subscription: { setupFee: 8000, monthly: 3999 },
        features: [
          { name: 'Up to 50 products', included: true },
          { name: 'Payment gateway', included: true },
          { name: 'Order management', included: true },
          { name: 'Basic SEO', included: true },
          { name: 'SSL secure', included: true },
          { name: 'Mobile responsive', included: true },
          { name: 'Inventory system', included: false },
          { name: 'Multi-vendor', included: false },
        ],
        popular: false,
      },
      {
        name: 'Business Store',
        tagline: 'Growing business',
        oneTime: { price: 60000 },
        subscription: { setupFee: 20000, monthly: 7999 },
        features: [
          { name: 'Up to 500 products', included: true },
          { name: 'Multiple payments', included: true },
          { name: 'Advanced orders', included: true },
          { name: 'Advanced SEO', included: true },
          { name: 'SSL + CDN', included: true },
          { name: 'Mobile responsive', included: true },
          { name: 'Inventory system', included: true },
          { name: 'Multi-vendor', included: false },
        ],
        popular: true,
      },
      {
        name: 'Enterprise Store',
        tagline: 'Full marketplace',
        isCustom: true,
        features: [
          { name: 'Unlimited products', included: true },
          { name: 'All payments', included: true },
          { name: 'Full order system', included: true },
          { name: 'Enterprise SEO', included: true },
          { name: 'Enterprise security', included: true },
          { name: 'PWA support', included: true },
          { name: 'Full inventory', included: true },
          { name: 'Multi-vendor', included: true },
        ],
        popular: false,
      },
    ],
  };

  const currentPlans = pricingPlans[selectedService] || pricingPlans.web;

  return (
    <>
      <SEOHead 
        title="Pricing - AINOR | Affordable Web Development & App Services"
        description="Transparent pricing for web development, mobile apps, and e-commerce solutions. Choose subscription or one-time payment. Save up to 60% with our subscription model."
        canonicalUrl="https://myainor.com/pricing"
      />

      <div className="min-h-screen bg-[#f5f5f5]">
        {/* Hero Section */}
        <section className="relative pt-32 pb-16 overflow-hidden">
          {/* Decorative arrows */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.svg
              className="absolute top-24 right-16 w-28 h-28 opacity-[0.1]"
              viewBox="0 0 100 100"
              animate={{ rotate: 360 }}
              transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            >
              <circle cx="50" cy="50" r="6" fill="#6366f1" />
              {[0, 72, 144, 216, 288].map((angle, i) => (
                <g key={i} transform={`rotate(${angle} 50 50)`}>
                  <line x1="50" y1="50" x2="50" y2="15" stroke="#6366f1" strokeWidth="2" />
                  <polygon points="45,20 50,8 55,20" fill="#6366f1" />
                </g>
              ))}
            </motion.svg>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 text-indigo-500 rounded-full mb-6 border border-indigo-100">
                <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                <span className="font-semibold text-sm">Transparent Pricing</span>
              </span>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#1a1a1a] mb-6">
                Simple, Fair
                <span className="block mt-2 text-indigo-500">Pricing</span>
              </h1>
              
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Choose the plan that fits your needs. No hidden fees, no surprises.
              </p>
            </motion.div>

            {/* Service Tabs */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {services.map((service) => (
                <motion.button
                  key={service.id}
                  onClick={() => setSelectedService(service.id)}
                  className={`px-5 py-3 rounded-xl font-medium transition-all ${
                    selectedService === service.id
                      ? 'bg-indigo-500 text-white'
                      : 'bg-white text-[#1a1a1a] border border-gray-200 hover:border-indigo-200'
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
              <span className={`font-medium ${billingCycle === 'onetime' ? 'text-[#1a1a1a]' : 'text-gray-400'}`}>
                One-Time
              </span>
              <motion.button
                onClick={() => setBillingCycle(billingCycle === 'subscription' ? 'onetime' : 'subscription')}
                className="relative w-16 h-8 bg-indigo-500 rounded-full p-1"
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="w-6 h-6 bg-white rounded-full"
                  animate={{ x: billingCycle === 'subscription' ? 32 : 0 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              </motion.button>
              <span className={`font-medium ${billingCycle === 'subscription' ? 'text-[#1a1a1a]' : 'text-gray-400'}`}>
                Subscription
                <span className="ml-2 px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                  Save 60%
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
                  className={`bg-white rounded-3xl p-8 border-2 transition-all duration-300 ${
                    plan.popular 
                      ? 'border-indigo-500 shadow-xl relative' 
                      : 'border-gray-100 hover:border-indigo-200'
                  }`}
                  variants={cardVariants}
                  whileHover={{ y: -8 }}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="px-4 py-1 bg-indigo-500 text-white text-sm font-medium rounded-full">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-[#1a1a1a] mb-2">{plan.name}</h3>
                    <p className="text-gray-600 text-sm">{plan.tagline}</p>
                    
                    <div className="mt-6">
                      {plan.isCustom ? (
                        <div className="text-3xl font-bold text-[#1a1a1a]">Custom Quote</div>
                      ) : billingCycle === 'subscription' ? (
                        <>
                          <div className="text-sm text-gray-500 mb-1">
                            Setup: ₹{plan.subscription.setupFee.toLocaleString()}
                          </div>
                          <div className="flex items-baseline justify-center gap-1">
                            <span className="text-4xl font-bold text-[#1a1a1a]">
                              ₹{plan.subscription.monthly.toLocaleString()}
                            </span>
                            <span className="text-gray-500">/month</span>
                          </div>
                        </>
                      ) : (
                        <div className="flex items-baseline justify-center gap-1">
                          <span className="text-4xl font-bold text-[#1a1a1a]">
                            ₹{plan.oneTime.price.toLocaleString()}
                          </span>
                          <span className="text-gray-500">one-time</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3">
                        {feature.included ? (
                          <FaCheck className="w-4 h-4 text-indigo-500 flex-shrink-0" />
                        ) : (
                          <FaTimes className="w-4 h-4 text-gray-300 flex-shrink-0" />
                        )}
                        <span className={feature.included ? 'text-[#1a1a1a]' : 'text-gray-400'}>
                          {feature.name}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <motion.a
                    href={`https://wa.me/917579500264?text=Hi%20AINOR!%20I'm%20interested%20in%20the%20${plan.name}%20${selectedService}%20plan.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full py-4 rounded-xl font-medium text-center transition-colors ${
                      plan.popular
                        ? 'bg-indigo-500 text-white hover:bg-indigo-600'
                        : 'bg-[#f5f5f5] text-[#1a1a1a] hover:bg-indigo-50 hover:text-indigo-500'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {plan.isCustom ? 'Contact Us' : 'Get Started'}
                  </motion.a>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* What's Included Section */}
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
                What's Included
                <span className="block mt-2 text-indigo-500">Every Month</span>
              </h2>
            </motion.div>

            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                { icon: '🖥️', title: 'Hosting', desc: 'Premium hosting included' },
                { icon: '🔒', title: 'SSL Certificate', desc: 'Secure connection always' },
                { icon: '🔄', title: 'Updates', desc: 'Regular content updates' },
                { icon: '🛡️', title: 'Security', desc: 'Monitoring & patches' },
                { icon: '📊', title: 'Analytics', desc: 'Performance tracking' },
                { icon: '💾', title: 'Backups', desc: 'Regular data backups' },
                { icon: '📞', title: 'Support', desc: 'Priority assistance' },
                { icon: '🚀', title: 'Performance', desc: 'Speed optimization' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-[#f5f5f5] rounded-2xl p-6 text-center"
                  variants={cardVariants}
                  whileHover={{ y: -5 }}
                >
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3 className="font-bold text-[#1a1a1a] mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
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
              className="bg-[#1a1a1a] rounded-3xl p-12 md:p-16 text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Not Sure Which Plan is Right?
              </h2>
              <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                Let's discuss your project requirements. We'll recommend the perfect plan for your business.
              </p>
              <motion.a
                href="https://wa.me/917579500264?text=Hi%20AINOR!%20I%20need%20help%20choosing%20the%20right%20plan."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-green-500 text-white rounded-xl font-medium hover:bg-green-600 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaWhatsapp className="w-5 h-5" />
                Chat With Us on WhatsApp
              </motion.a>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PricingPage;
