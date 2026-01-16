import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaCheck, FaTimes, FaWhatsapp, FaArrowRight, FaQuestionCircle,
  FaRocket, FaStar, FaCrown, FaShieldAlt, FaClock, FaHeadset,
  FaCode, FaMobile, FaShoppingCart, FaBolt, FaGift
} from 'react-icons/fa';
import SEOHead from '../components/seo/SEOHead';
import ModernPageLayout from '../components/layout/ModernPageLayout';
import TiltCard from '../components/ui/TiltCard';
import { BlurReveal, AnimatedCounter, MagneticButton } from '../components/ui/AnimationComponents';
import { GradientText, SpotlightCard, MorphingBackground } from '../components/ui/ScrollAnimations';

const PricingPage = () => {
  const [billingCycle, setBillingCycle] = useState('subscription');
  const [selectedService, setSelectedService] = useState('web');

  const services = [
    { id: 'web', name: 'Web Development', icon: FaCode, emoji: '🌐' },
    { id: 'mobile', name: 'Mobile Apps', icon: FaMobile, emoji: '📱' },
    { id: 'ecommerce', name: 'E-Commerce', icon: FaShoppingCart, emoji: '🛒' },
  ];

  const pricingPlans = {
    web: [
      {
        name: 'Starter',
        tagline: 'Perfect for small businesses & startups',
        icon: FaRocket,
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
          { name: 'Priority support', included: false },
        ],
        popular: false,
        color: 'from-gray-500 to-gray-600'
      },
      {
        name: 'Professional',
        tagline: 'Most popular for growing businesses',
        icon: FaStar,
        oneTime: { price: 30000 },
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
          { name: 'Priority support', included: false },
        ],
        popular: true,
        color: 'from-primary to-blue-600'
      },
      {
        name: 'Enterprise',
        tagline: 'Complete solution for large businesses',
        icon: FaCrown,
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
          { name: 'Dedicated support', included: true },
          { name: 'Priority development', included: true },
          { name: 'SLA guarantee', included: true },
        ],
        popular: false,
        color: 'from-purple-500 to-pink-500'
      },
    ],
    mobile: [
      {
        name: 'MVP',
        tagline: 'Launch your idea fast',
        icon: FaRocket,
        oneTime: { price: 50000 },
        subscription: { setupFee: 15000, monthly: 5000 },
        deliveryTime: '4-6 weeks',
        features: [
          { name: 'Single platform (iOS or Android)', included: true },
          { name: 'Core features only', included: true },
          { name: 'Basic UI design', included: true },
          { name: 'Push notifications', included: true },
          { name: 'Basic analytics', included: true },
          { name: 'App store submission', included: true },
          { name: 'Cross-platform', included: false },
          { name: 'Admin dashboard', included: false },
          { name: 'Advanced integrations', included: false },
        ],
        popular: false,
        color: 'from-gray-500 to-gray-600'
      },
      {
        name: 'Standard',
        tagline: 'Full-featured mobile app',
        icon: FaStar,
        oneTime: { price: 120000 },
        subscription: { setupFee: 35000, monthly: 7000 },
        deliveryTime: '8-12 weeks',
        features: [
          { name: 'Cross-platform (iOS + Android)', included: true },
          { name: 'Full feature set', included: true },
          { name: 'Premium UI/UX design', included: true },
          { name: 'Push notifications', included: true },
          { name: 'Advanced analytics', included: true },
          { name: 'App store optimization', included: true },
          { name: 'Admin dashboard', included: true },
          { name: 'API integrations', included: true },
          { name: 'Priority support', included: false },
        ],
        popular: true,
        color: 'from-primary to-blue-600'
      },
      {
        name: 'Enterprise',
        tagline: 'Custom enterprise solution',
        icon: FaCrown,
        isCustom: true,
        deliveryTime: 'Custom timeline',
        features: [
          { name: 'Custom platform strategy', included: true },
          { name: 'Unlimited features', included: true },
          { name: 'Custom UI/UX design', included: true },
          { name: 'Advanced push notifications', included: true },
          { name: 'Enterprise analytics', included: true },
          { name: 'Multi-app ecosystem', included: true },
          { name: 'Full admin dashboard', included: true },
          { name: 'Enterprise integrations', included: true },
          { name: 'Dedicated team', included: true },
        ],
        popular: false,
        color: 'from-purple-500 to-pink-500'
      },
    ],
    ecommerce: [
      {
        name: 'Starter Store',
        tagline: 'Start selling online',
        icon: FaRocket,
        oneTime: { price: 15000 },
        subscription: { setupFee: 8000, monthly: 3999 },
        deliveryTime: '10-14 days',
        features: [
          { name: 'Up to 50 products', included: true },
          { name: 'Responsive storefront', included: true },
          { name: 'Secure checkout', included: true },
          { name: 'Payment gateway', included: true },
          { name: 'Order management', included: true },
          { name: 'Basic inventory', included: true },
          { name: 'Multi-vendor', included: false },
          { name: 'Advanced analytics', included: false },
          { name: 'Custom integrations', included: false },
        ],
        popular: false,
        color: 'from-gray-500 to-gray-600'
      },
      {
        name: 'Growth Store',
        tagline: 'Scale your online business',
        icon: FaStar,
        oneTime: { price: 30000 },
        subscription: { setupFee: 18000, monthly: 7999 },
        deliveryTime: '3-4 weeks',
        features: [
          { name: 'Unlimited products', included: true },
          { name: 'Custom storefront', included: true },
          { name: 'Multiple payment options', included: true },
          { name: 'Advanced inventory', included: true },
          { name: 'Customer accounts', included: true },
          { name: 'Marketing tools', included: true },
          { name: 'Advanced analytics', included: true },
          { name: 'CRM integration', included: true },
          { name: 'Multi-vendor', included: false },
        ],
        popular: true,
        color: 'from-primary to-blue-600'
      },
      {
        name: 'Enterprise',
        tagline: 'Enterprise e-commerce',
        icon: FaCrown,
        isCustom: true,
        deliveryTime: 'Custom timeline',
        features: [
          { name: 'Unlimited everything', included: true },
          { name: 'Custom platform', included: true },
          { name: 'Enterprise security', included: true },
          { name: 'Multi-vendor support', included: true },
          { name: 'B2B features', included: true },
          { name: 'Advanced marketing', included: true },
          { name: 'Enterprise analytics', included: true },
          { name: 'Full integrations', included: true },
          { name: 'Dedicated support', included: true },
        ],
        popular: false,
        color: 'from-purple-500 to-pink-500'
      },
    ],
  };

  const benefits = [
    { icon: FaShieldAlt, title: 'No Hidden Fees', desc: 'What you see is what you pay. Period.' },
    { icon: FaClock, title: 'Fast Delivery', desc: 'Quick turnaround without compromising quality.' },
    { icon: FaHeadset, title: '24/7 Support', desc: 'We\'re always just a WhatsApp away.' },
    { icon: FaGift, title: 'Free Maintenance', desc: 'Updates and fixes included in subscription.' },
  ];

  const faqs = [
    { q: 'What\'s included in the subscription?', a: 'Everything! Hosting, SSL, maintenance, updates, and support are all included in your monthly fee.' },
    { q: 'Can I cancel anytime?', a: 'Yes, you can cancel your subscription at any time with 30 days notice. No long-term contracts.' },
    { q: 'What\'s the setup fee for?', a: 'The one-time setup fee covers initial development, design, and deployment of your project.' },
    { q: 'Do you offer custom solutions?', a: 'Absolutely! Contact us for enterprise solutions tailored to your specific needs.' },
  ];

  const currentPlans = pricingPlans[selectedService] || pricingPlans.web;
  const currentService = services.find(s => s.id === selectedService);

  return (
    <>
      <SEOHead 
        title="Pricing - AINOR | Affordable Web Development & Digital Services"
        description="Explore AINOR's affordable pricing plans for web development, mobile apps, and e-commerce. India's first subscription-based development agency."
        canonicalUrl="https://myainor.com/pricing"
      />

      <ModernPageLayout>
        {/* Hero Section */}
        <section className="relative bg-white rounded-3xl p-6 md:p-12 lg:p-16 shadow-soft overflow-hidden">
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-gradient-to-br from-green-100 to-emerald-100 rounded-full blur-3xl opacity-60" />
          <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full blur-3xl opacity-60" />
          
          <div className="relative z-10 text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
                className="inline-flex items-center gap-2 bg-green-50 border border-green-100 px-4 py-2 rounded-full mb-6"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                </span>
                <span className="text-sm font-semibold text-green-700 tracking-wide uppercase">Simple & Transparent</span>
              </motion.div>
              
              <BlurReveal delay={0.2}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#111318] mb-6">
                  Choose Your Perfect{' '}
                  <GradientText from="#135bec" to="#10b981" className="font-bold">
                    Plan
                  </GradientText>
                </h1>
              </BlurReveal>
              
              <BlurReveal delay={0.4}>
                <p className="text-lg md:text-xl text-gray-500 mb-10 max-w-2xl mx-auto">
                  Transparent pricing with no hidden fees. Pay one-time or subscribe monthly and save up to 60%.
                </p>
              </BlurReveal>

              {/* Billing Toggle */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex justify-center mb-8"
              >
                <div className="inline-flex items-center bg-gray-100 rounded-full p-1.5">
                  <button
                    onClick={() => setBillingCycle('subscription')}
                    className={`relative px-6 py-3 rounded-full font-semibold text-sm transition-all ${
                      billingCycle === 'subscription'
                        ? 'bg-black text-white shadow-lg'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    Subscription
                    {billingCycle === 'subscription' && (
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute -top-2 -right-2 text-[10px] bg-green-500 text-white px-2 py-0.5 rounded-full font-bold"
                      >
                        Save 60%
                      </motion.span>
                    )}
                  </button>
                  <button
                    onClick={() => setBillingCycle('oneTime')}
                    className={`px-6 py-3 rounded-full font-semibold text-sm transition-all ${
                      billingCycle === 'oneTime'
                        ? 'bg-black text-white shadow-lg'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    One-Time
                  </button>
                </div>
              </motion.div>

              {/* Service Selector */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap justify-center gap-3"
              >
                {services.map((service) => {
                  const ServiceIcon = service.icon;
                  return (
                    <button
                      key={service.id}
                      onClick={() => setSelectedService(service.id)}
                      className={`flex items-center gap-2 px-5 py-3 rounded-full font-semibold text-sm transition-all ${
                        selectedService === service.id
                          ? 'bg-primary text-white shadow-lg shadow-primary/30 scale-105'
                          : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                      }`}
                    >
                      <ServiceIcon className="text-lg" />
                      <span>{service.name}</span>
                    </button>
                  );
                })}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Pricing Cards with Animation */}
        <section className="py-4">
          <AnimatePresence mode="wait">
            <motion.div 
              key={selectedService}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-3 gap-6"
            >
              {currentPlans.map((plan, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <TiltCard tiltAmount={plan.popular ? 10 : 6} scale={plan.popular ? 1.03 : 1.02}>
                    <SpotlightCard 
                      className={`bg-white rounded-3xl p-6 md:p-8 shadow-soft relative overflow-hidden h-full ${
                        plan.popular ? 'ring-2 ring-primary' : ''
                      }`}
                    >
                      {/* Popular Badge */}
                      {plan.popular && (
                        <motion.div
                          initial={{ x: 100 }}
                          animate={{ x: 0 }}
                          className="absolute top-4 right-4"
                        >
                          <span className="bg-primary text-white text-xs font-bold px-4 py-1.5 rounded-full flex items-center gap-1">
                            <FaStar className="text-yellow-300" /> Most Popular
                          </span>
                        </motion.div>
                      )}
                      
                      {/* Plan Header */}
                      <div className="mb-6">
                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${plan.color} text-white flex items-center justify-center mb-4`}>
                          <plan.icon className="text-2xl" />
                        </div>
                        <h3 className="text-2xl font-bold mb-1">{plan.name}</h3>
                        <p className="text-sm text-gray-500">{plan.tagline}</p>
                      </div>
                      
                      {/* Price */}
                      {plan.isCustom ? (
                        <div className="mb-6">
                          <span className="text-4xl font-bold">Custom</span>
                          <p className="text-sm text-gray-500 mt-1">Contact us for quote</p>
                        </div>
                      ) : (
                        <div className="mb-6">
                          {billingCycle === 'subscription' ? (
                            <>
                              <div className="flex items-baseline gap-1">
                                <span className="text-4xl font-bold">
                                  ₹<AnimatedCounter target={plan.subscription.monthly} duration={0.5} />
                                </span>
                                <span className="text-gray-500">/month</span>
                              </div>
                              <p className="text-sm text-gray-500 mt-1">
                                + ₹{plan.subscription.setupFee.toLocaleString()} one-time setup
                              </p>
                            </>
                          ) : (
                            <div className="flex items-baseline gap-1">
                              <span className="text-4xl font-bold">
                                ₹<AnimatedCounter target={plan.oneTime.price} duration={0.5} />
                              </span>
                              <span className="text-gray-500">one-time</span>
                            </div>
                          )}
                        </div>
                      )}

                      {/* Delivery Time */}
                      <div className="flex items-center gap-2 mb-6 text-sm">
                        <FaClock className="text-gray-400" />
                        <span className="text-gray-600">Delivery: {plan.deliveryTime}</span>
                      </div>

                      {/* Features */}
                      <div className="space-y-3 mb-8">
                        {plan.features.map((feature, fidx) => (
                          <motion.div 
                            key={fidx}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: fidx * 0.05 }}
                            className="flex items-center gap-3"
                          >
                            {feature.included ? (
                              <div className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0">
                                <FaCheck className="text-[10px]" />
                              </div>
                            ) : (
                              <div className="w-5 h-5 rounded-full bg-gray-100 text-gray-400 flex items-center justify-center flex-shrink-0">
                                <FaTimes className="text-[10px]" />
                              </div>
                            )}
                            <span className={`text-sm ${feature.included ? 'text-gray-700' : 'text-gray-400'}`}>
                              {feature.name}
                            </span>
                          </motion.div>
                        ))}
                      </div>

                      {/* CTA */}
                      <MagneticButton>
                        <a
                          href={`https://wa.me/917579500264?text=Hi%20AINOR!%20I'm%20interested%20in%20the%20${encodeURIComponent(plan.name)}%20${encodeURIComponent(currentService?.name || '')}%20plan.`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex items-center justify-center gap-2 w-full py-4 rounded-xl font-bold transition-all text-lg ${
                            plan.popular
                              ? 'bg-gradient-to-r from-primary to-blue-600 text-white hover:shadow-lg hover:shadow-primary/30'
                              : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                          }`}
                        >
                          Get Started
                          <FaArrowRight className="text-sm" />
                        </a>
                      </MagneticButton>
                    </SpotlightCard>
                  </TiltCard>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </section>

        {/* Benefits Section */}
        <section className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-6 md:p-12 text-white relative overflow-hidden">
          <MorphingBackground className="absolute inset-0 opacity-20" />
          
          <div className="relative z-10">
            <div className="text-center mb-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <span className="text-sm font-semibold text-blue-400 tracking-wider uppercase mb-2 block">Why Subscribe</span>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Every Plan Includes</h2>
              </motion.div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <TiltCard tiltAmount={10} scale={1.03}>
                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center h-full">
                      <div className="w-14 h-14 rounded-2xl bg-white/20 text-white flex items-center justify-center mx-auto mb-4">
                        <benefit.icon className="text-2xl" />
                      </div>
                      <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                      <p className="text-sm text-gray-400">{benefit.desc}</p>
                    </div>
                  </TiltCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Sticky Scroll */}
        <PricingComparison billingCycle={billingCycle} />

        {/* FAQ Section */}
        <section className="bg-white rounded-3xl p-6 md:p-12 shadow-soft">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <FaQuestionCircle className="text-4xl text-primary mx-auto mb-4" />
                <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
                <p className="text-gray-500">Got questions? We've got answers.</p>
              </motion.div>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <FAQItem key={idx} faq={faq} index={idx} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-primary via-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 shadow-soft text-center text-white relative overflow-hidden">
          <MorphingBackground className="absolute inset-0 opacity-20" />
          
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Still Have Questions?</h2>
              <p className="text-white/80 mb-8 max-w-xl mx-auto">
                Our team is here to help you choose the perfect plan for your business needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <MagneticButton>
                  <Link
                    to="/faq"
                    className="px-8 py-4 bg-white/20 border-2 border-white text-white rounded-full font-bold hover:bg-white/30 transition-colors inline-block"
                  >
                    View Full FAQ
                  </Link>
                </MagneticButton>
                <MagneticButton>
                  <a
                    href="https://wa.me/917579500264?text=Hi%20AINOR!%20I%20have%20questions%20about%20pricing."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-8 py-4 bg-green-500 text-white rounded-full font-bold hover:bg-green-600 transition-colors"
                  >
                    <FaWhatsapp className="text-xl" />
                    Chat with Us
                  </a>
                </MagneticButton>
              </div>
            </motion.div>
          </div>
        </section>
      </ModernPageLayout>
    </>
  );
};

// Helper components for PricingComparison - Scroll Lock Version
const PricingStickyCard = ({ currentIndex, totalItems }) => {
  return (
    <div className="relative">
      <TiltCard tiltAmount={5}>
        <div className="bg-gradient-to-br from-primary to-purple-600 rounded-3xl p-8 text-white">
          <FaBolt className="text-5xl mb-6 text-yellow-300" />
          <h3 className="text-3xl font-bold mb-4">Why Our Pricing Works</h3>
          <p className="text-white/80 mb-6">
            We've designed our pricing to be transparent, flexible, and accessible for businesses of all sizes.
          </p>
          <div className="space-y-3">
            {['No hidden fees', 'Flexible options', 'Premium quality', 'Fast delivery'].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <FaCheck className="text-green-300" />
                <span>{item}</span>
              </div>
            ))}
          </div>
          {/* Progress indicators */}
          <div className="flex gap-2 mt-8">
            {Array.from({ length: totalItems }).map((_, idx) => (
              <div
                key={idx}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === currentIndex 
                    ? 'w-8 bg-white' 
                    : idx < currentIndex 
                      ? 'w-4 bg-white/60'
                      : 'w-4 bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>
      </TiltCard>
    </div>
  );
};

// Scroll-Locking Pricing Comparison Section
const PricingComparison = ({ billingCycle }) => {
  const sectionRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLocked, setIsLocked] = useState(false);
  const [hasCompletedForward, setHasCompletedForward] = useState(false);
  const isScrolling = useRef(false);
  const lastScrollY = useRef(0);

  const comparisonItems = [
    {
      title: 'Subscription vs One-Time',
      description: 'With our subscription model, you get continuous support, regular updates, and included hosting. One-time payments are great for those who prefer owning their project outright.',
      subscriptionPros: ['Monthly payments spread cost', 'All maintenance included', 'Free hosting & SSL', 'Priority support'],
      oneTimePros: ['Own your project', 'No recurring costs', 'Full source code', 'One-time investment']
    },
    {
      title: 'What\'s Included',
      description: 'Every plan comes packed with features to help your business succeed online. From design to deployment, we\'ve got you covered.',
      features: ['Custom Design', 'Mobile Responsive', 'SEO Optimization', 'Analytics Setup', 'Security Features', 'Performance Optimization']
    },
    {
      title: 'Our Guarantee',
      description: 'We stand behind our work with a satisfaction guarantee. If you\'re not happy within the first 30 days, we\'ll make it right or refund your setup fee.',
      guarantees: ['30-day satisfaction guarantee', '99.9% uptime SLA', 'Dedicated support team', 'No hidden fees ever']
    }
  ];

  const totalItems = comparisonItems.length;

  // Handle wheel events when locked
  const handleWheel = useCallback((e) => {
    if (!isLocked) return;
    
    e.preventDefault();
    e.stopPropagation();
    
    if (isScrolling.current) return;
    isScrolling.current = true;

    const direction = e.deltaY > 0 ? 1 : -1;
    
    setCurrentIndex(prev => {
      const newIndex = prev + direction;
      
      // Scrolling down, reached end
      if (newIndex >= totalItems) {
        setIsLocked(false);
        setHasCompletedForward(true);
        setTimeout(() => {
          window.scrollBy({ top: 150, behavior: 'smooth' });
        }, 100);
        return totalItems - 1;
      }
      
      // Scrolling up, reached beginning
      if (newIndex < 0) {
        setIsLocked(false);
        setHasCompletedForward(false);
        setTimeout(() => {
          window.scrollBy({ top: -150, behavior: 'smooth' });
        }, 100);
        return 0;
      }
      
      return newIndex;
    });

    setTimeout(() => {
      isScrolling.current = false;
    }, 600);
  }, [isLocked, totalItems]);

  // Observe when section enters/exits viewport
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const scrollingDown = window.scrollY > lastScrollY.current;
      lastScrollY.current = window.scrollY;

      // Check if section is visible and centered
      const isInView = rect.top < viewportHeight * 0.5 && rect.bottom > viewportHeight * 0.5;

      if (isInView && !isLocked) {
        // Entering from top (scrolling down)
        if (scrollingDown && !hasCompletedForward && currentIndex < totalItems - 1) {
          setIsLocked(true);
        }
        // Entering from bottom (scrolling up)  
        if (!scrollingDown && hasCompletedForward && currentIndex > 0) {
          setIsLocked(true);
          setCurrentIndex(totalItems - 1);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentIndex, totalItems, hasCompletedForward, isLocked]);

  // Lock/unlock body scroll
  useEffect(() => {
    if (isLocked) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('wheel', handleWheel, { passive: false });
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('wheel', handleWheel);
    };
  }, [isLocked, handleWheel]);

  // Touch support
  const touchStartY = useRef(0);
  
  const handleTouchStart = (e) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchMove = useCallback((e) => {
    if (!isLocked) return;
    
    e.preventDefault();
    
    if (isScrolling.current) return;
    
    const touchY = e.touches[0].clientY;
    const diff = touchStartY.current - touchY;
    
    if (Math.abs(diff) > 50) {
      isScrolling.current = true;
      const direction = diff > 0 ? 1 : -1;
      
      setCurrentIndex(prev => {
        const newIndex = prev + direction;
        
        if (newIndex >= totalItems) {
          setIsLocked(false);
          setHasCompletedForward(true);
          return totalItems - 1;
        }
        
        if (newIndex < 0) {
          setIsLocked(false);
          setHasCompletedForward(false);
          return 0;
        }
        
        return newIndex;
      });
      
      touchStartY.current = touchY;
      setTimeout(() => {
        isScrolling.current = false;
      }, 600);
    }
  }, [isLocked, totalItems]);

  useEffect(() => {
    if (isLocked) {
      window.addEventListener('touchmove', handleTouchMove, { passive: false });
    }
    return () => {
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [isLocked, handleTouchMove]);

  const currentItem = comparisonItems[currentIndex];

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen bg-gray-50 rounded-3xl"
      onTouchStart={handleTouchStart}
    >
      <div className="h-screen flex items-center py-8">
        <div className="w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Sticky Side */}
            <div className="hidden lg:block">
              <PricingStickyCard currentIndex={currentIndex} totalItems={totalItems} />
            </div>

            {/* Scrolling Content */}
            <div className="relative overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 80 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -80 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className="w-full"
                >
                  <div className="bg-white rounded-3xl p-8 shadow-soft">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">{currentItem.title}</h3>
                    <p className="text-gray-500 mb-6">{currentItem.description}</p>
                    
                    {currentItem.subscriptionPros && (
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div className={`p-4 rounded-xl ${billingCycle === 'subscription' ? 'bg-primary/10 ring-2 ring-primary' : 'bg-gray-50'}`}>
                          <h4 className="font-bold mb-3 flex items-center gap-2">
                            <span className={billingCycle === 'subscription' ? 'text-primary' : ''}>Subscription</span>
                            {billingCycle === 'subscription' && <span className="text-xs bg-primary text-white px-2 py-0.5 rounded-full">Selected</span>}
                          </h4>
                          <ul className="space-y-2">
                            {currentItem.subscriptionPros.map((pro, pIdx) => (
                              <li key={pIdx} className="flex items-center gap-2 text-sm">
                                <FaCheck className="text-green-500" />
                                {pro}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className={`p-4 rounded-xl ${billingCycle === 'oneTime' ? 'bg-primary/10 ring-2 ring-primary' : 'bg-gray-50'}`}>
                          <h4 className="font-bold mb-3 flex items-center gap-2">
                            <span className={billingCycle === 'oneTime' ? 'text-primary' : ''}>One-Time</span>
                            {billingCycle === 'oneTime' && <span className="text-xs bg-primary text-white px-2 py-0.5 rounded-full">Selected</span>}
                          </h4>
                          <ul className="space-y-2">
                            {currentItem.oneTimePros.map((pro, pIdx) => (
                              <li key={pIdx} className="flex items-center gap-2 text-sm">
                                <FaCheck className="text-green-500" />
                                {pro}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}

                    {currentItem.features && (
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {currentItem.features.map((feature, fIdx) => (
                          <motion.div 
                            key={fIdx} 
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: fIdx * 0.05 }}
                            className="flex items-center gap-2 p-3 bg-gray-50 rounded-xl"
                          >
                            <FaCheck className="text-green-500" />
                            <span className="text-sm">{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                    )}

                    {currentItem.guarantees && (
                      <div className="grid sm:grid-cols-2 gap-4">
                        {currentItem.guarantees.map((guarantee, gIdx) => (
                          <motion.div 
                            key={gIdx} 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: gIdx * 0.1 }}
                            className="flex items-center gap-3 p-4 bg-green-50 rounded-xl"
                          >
                            <FaShieldAlt className="text-green-500 text-xl" />
                            <span className="font-medium">{guarantee}</span>
                          </motion.div>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/* Lock Indicator */}
      {isLocked && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50"
        >
          <div className="px-5 py-3 rounded-full bg-black/80 text-white text-sm font-medium backdrop-blur-sm">
            <span className="flex items-center gap-3">
              <motion.span
                animate={{ y: [0, -4, 0] }}
                transition={{ repeat: Infinity, duration: 1.2 }}
                className="text-lg"
              >
                ↕
              </motion.span>
              Scroll to explore • {currentIndex + 1}/{totalItems}
            </span>
          </div>
        </motion.div>
      )}
    </section>
  );
};

// FAQ Item Component
const FAQItem = ({ faq, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <TiltCard tiltAmount={3}>
        <div 
          className="bg-gray-50 rounded-2xl overflow-hidden cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="flex items-center justify-between p-5">
            <h3 className="font-bold">{faq.q}</h3>
            <motion.div
              animate={{ rotate: isOpen ? 45 : 0 }}
              className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0 ml-4"
            >
              <span className="text-xl font-light">+</span>
            </motion.div>
          </div>
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <p className="px-5 pb-5 text-gray-500">{faq.a}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </TiltCard>
    </motion.div>
  );
};

export default PricingPage;
