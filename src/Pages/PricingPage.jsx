import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FaCheck, FaTimes, FaWhatsapp, FaArrowRight, FaQuestionCircle,
  FaRocket, FaStar, FaCrown, FaShieldAlt, FaClock, FaHeadset,
  FaCode, FaMobile, FaShoppingCart, FaGift
} from 'react-icons/fa';
import SEOHead from '../components/seo/SEOHead';
import SEOText from '../components/seo/SEOText';
import { AnimatedCounter } from '../components/ui/AnimationComponents';
import {
  PageShell, PageHero, SectionLabel, GradientWord, ease,
} from '../components/layout/PageShell';

const PricingPage = () => {
  const [billingCycle, setBillingCycle] = useState('subscription');
  const [selectedService, setSelectedService] = useState('web');

  const services = [
    { id: 'web', name: 'Web Development', icon: FaCode },
    { id: 'mobile', name: 'Mobile Apps', icon: FaMobile },
    { id: 'ecommerce', name: 'E-Commerce', icon: FaShoppingCart },
  ];

  const pricingPlans = {
    web: [
      {
        name: 'Starter', tagline: 'Perfect for small businesses & startups', icon: FaRocket,
        oneTime: { price: 15000 }, subscription: { setupFee: 5000, monthly: 2499 }, deliveryTime: '7-10 days',
        features: [
          { name: 'Up to 5 custom pages', included: true }, { name: 'Mobile responsive design', included: true },
          { name: 'Contact form integration', included: true }, { name: 'Basic SEO optimization', included: true },
          { name: 'Premium hosting included', included: true }, { name: 'SSL certificate', included: true },
          { name: '2 content updates/month', included: true }, { name: 'Blog integration', included: false },
          { name: 'Custom animations', included: false }, { name: 'Priority support', included: false },
        ], popular: false, accent: '#6b7280'
      },
      {
        name: 'Professional', tagline: 'Most popular for growing businesses', icon: FaStar,
        oneTime: { price: 30000 }, subscription: { setupFee: 10000, monthly: 4999 }, deliveryTime: '14-21 days',
        features: [
          { name: 'Up to 10 custom pages', included: true }, { name: 'Advanced responsive design', included: true },
          { name: 'Multi-step forms', included: true }, { name: 'Advanced SEO + Analytics', included: true },
          { name: 'Premium hosting + CDN', included: true }, { name: 'SSL + Security monitoring', included: true },
          { name: '5 content updates/month', included: true }, { name: 'Blog with CMS', included: true },
          { name: 'Custom animations', included: true }, { name: 'Priority support', included: false },
        ], popular: true, accent: '#6366f1'
      },
      {
        name: 'Enterprise', tagline: 'Complete solution for large businesses', icon: FaCrown, isCustom: true, deliveryTime: 'Custom timeline',
        features: [
          { name: 'Unlimited pages', included: true }, { name: 'Custom design system', included: true },
          { name: 'CRM & API integration', included: true }, { name: 'Enterprise SEO suite', included: true },
          { name: 'Enterprise hosting', included: true }, { name: 'Advanced security', included: true },
          { name: 'Unlimited updates', included: true }, { name: 'Dedicated support', included: true },
          { name: 'Priority development', included: true }, { name: 'SLA guarantee', included: true },
        ], popular: false, accent: '#a855f7'
      },
    ],
    mobile: [
      {
        name: 'MVP', tagline: 'Launch your idea fast', icon: FaRocket,
        oneTime: { price: 50000 }, subscription: { setupFee: 15000, monthly: 5000 }, deliveryTime: '4-6 weeks',
        features: [
          { name: 'Single platform (iOS or Android)', included: true }, { name: 'Core features only', included: true },
          { name: 'Basic UI design', included: true }, { name: 'Push notifications', included: true },
          { name: 'Basic analytics', included: true }, { name: 'App store submission', included: true },
          { name: 'Cross-platform', included: false }, { name: 'Admin dashboard', included: false },
          { name: 'Advanced integrations', included: false },
        ], popular: false, accent: '#6b7280'
      },
      {
        name: 'Standard', tagline: 'Full-featured mobile app', icon: FaStar,
        oneTime: { price: 120000 }, subscription: { setupFee: 35000, monthly: 7000 }, deliveryTime: '8-12 weeks',
        features: [
          { name: 'Cross-platform (iOS + Android)', included: true }, { name: 'Full feature set', included: true },
          { name: 'Premium UI/UX design', included: true }, { name: 'Push notifications', included: true },
          { name: 'Advanced analytics', included: true }, { name: 'App store optimization', included: true },
          { name: 'Admin dashboard', included: true }, { name: 'API integrations', included: true },
          { name: 'Priority support', included: false },
        ], popular: true, accent: '#6366f1'
      },
      {
        name: 'Enterprise', tagline: 'Custom enterprise solution', icon: FaCrown, isCustom: true, deliveryTime: 'Custom timeline',
        features: [
          { name: 'Custom platform strategy', included: true }, { name: 'Unlimited features', included: true },
          { name: 'Custom UI/UX design', included: true }, { name: 'Advanced push notifications', included: true },
          { name: 'Enterprise analytics', included: true }, { name: 'Multi-app ecosystem', included: true },
          { name: 'Full admin dashboard', included: true }, { name: 'Enterprise integrations', included: true },
          { name: 'Dedicated team', included: true },
        ], popular: false, accent: '#a855f7'
      },
    ],
    ecommerce: [
      {
        name: 'Starter Store', tagline: 'Start selling online', icon: FaRocket,
        oneTime: { price: 15000 }, subscription: { setupFee: 8000, monthly: 3999 }, deliveryTime: '10-14 days',
        features: [
          { name: 'Up to 50 products', included: true }, { name: 'Responsive storefront', included: true },
          { name: 'Secure checkout', included: true }, { name: 'Payment gateway', included: true },
          { name: 'Order management', included: true }, { name: 'Basic inventory', included: true },
          { name: 'Multi-vendor', included: false }, { name: 'Advanced analytics', included: false },
          { name: 'Custom integrations', included: false },
        ], popular: false, accent: '#6b7280'
      },
      {
        name: 'Growth Store', tagline: 'Scale your online business', icon: FaStar,
        oneTime: { price: 30000 }, subscription: { setupFee: 18000, monthly: 7999 }, deliveryTime: '3-4 weeks',
        features: [
          { name: 'Unlimited products', included: true }, { name: 'Custom storefront', included: true },
          { name: 'Multiple payment options', included: true }, { name: 'Advanced inventory', included: true },
          { name: 'Customer accounts', included: true }, { name: 'Marketing tools', included: true },
          { name: 'Advanced analytics', included: true }, { name: 'CRM integration', included: true },
          { name: 'Multi-vendor', included: false },
        ], popular: true, accent: '#6366f1'
      },
      {
        name: 'Enterprise', tagline: 'Enterprise e-commerce', icon: FaCrown, isCustom: true, deliveryTime: 'Custom timeline',
        features: [
          { name: 'Unlimited everything', included: true }, { name: 'Custom platform', included: true },
          { name: 'Enterprise security', included: true }, { name: 'Multi-vendor support', included: true },
          { name: 'B2B features', included: true }, { name: 'Advanced marketing', included: true },
          { name: 'Enterprise analytics', included: true }, { name: 'Full integrations', included: true },
          { name: 'Dedicated support', included: true },
        ], popular: false, accent: '#a855f7'
      },
    ],
  };

  const benefits = [
    { icon: FaShieldAlt, title: 'No Hidden Fees', desc: 'What you see is what you pay. Period.' },
    { icon: FaClock, title: 'Fast Delivery', desc: 'Quick turnaround without compromising quality.' },
    { icon: FaHeadset, title: '24/7 Support', desc: "We're always just a WhatsApp away." },
    { icon: FaGift, title: 'Free Maintenance', desc: 'Updates and fixes included in subscription.' },
  ];

  const faqs = [
    { q: "What's included in the subscription?", a: 'Everything! Hosting, SSL, maintenance, updates, and support are all included in your monthly fee.' },
    { q: 'Can I cancel anytime?', a: 'Yes, you can cancel your subscription at any time with 30 days notice. No long-term contracts.' },
    { q: "What's the setup fee for?", a: 'The one-time setup fee covers initial development, design, and deployment of your project.' },
    { q: 'Do you offer custom solutions?', a: 'Absolutely! Contact us for enterprise solutions tailored to your specific needs.' },
  ];

  const currentPlans = pricingPlans[selectedService] || pricingPlans.web;
  const currentService = services.find(s => s.id === selectedService);

  return (
    <>
      <SEOHead
        title="Pricing: Websites from ₹9,999/mo | Apps from ₹19,999/mo | Flat Monthly Plans | AINOR"
        description="💰 Cost-effective web development with transparent pricing. Websites ₹9,999/mo, apps ₹19,999/mo. All-inclusive: hosting, SSL, support. No hidden fees. First month 50% OFF!"
        canonicalUrl="https://myainor.com/pricing"
      />

      <PageShell>
        <PageHero
          badge="Simple & Transparent"
          bgWord="PRICING"
          title={<>Choose your perfect{' '}<GradientWord>plan.</GradientWord></>}
          subtitle="Transparent pricing with no hidden fees. Pay one-time or subscribe monthly and save up to 60%."
        />

        {/* Plans */}
        <section className="relative bg-[#f5f5f5] py-16 md:py-24 overflow-hidden">
          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
            <SectionLabel num={1} title="Plans & Pricing" />

            {/* Toggles */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8">
              <div className="inline-flex items-center bg-white border border-gray-200 rounded-full p-1.5 self-start">
                <button onClick={() => setBillingCycle('subscription')}
                  className={`relative px-5 py-2.5 rounded-full font-semibold text-sm transition-all ${
                    billingCycle === 'subscription' ? 'bg-[#111318] text-white shadow-md' : 'text-gray-600 hover:text-gray-900'
                  }`}>
                  Subscription
                  {billingCycle === 'subscription' && (
                    <span className="absolute -top-2 -right-2 text-[10px] bg-green-500 text-white px-2 py-0.5 rounded-full font-bold">Save 60%</span>
                  )}
                </button>
                <button onClick={() => setBillingCycle('oneTime')}
                  className={`px-5 py-2.5 rounded-full font-semibold text-sm transition-all ${
                    billingCycle === 'oneTime' ? 'bg-[#111318] text-white shadow-md' : 'text-gray-600 hover:text-gray-900'
                  }`}>
                  One-Time
                </button>
              </div>

              <div className="flex flex-wrap gap-2 sm:ml-auto">
                {services.map((service) => {
                  const ServiceIcon = service.icon;
                  const active = selectedService === service.id;
                  return (
                    <button key={service.id} onClick={() => setSelectedService(service.id)}
                      className={`flex items-center gap-2 px-4 py-2.5 rounded-full font-semibold text-sm transition-all ${
                        active ? 'bg-indigo-600 text-white shadow-md' : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                      }`}>
                      <ServiceIcon /> <span>{service.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Cards */}
            <AnimatePresence mode="wait">
              <motion.div key={selectedService}
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid md:grid-cols-3 gap-3">
                {currentPlans.map((plan, idx) => (
                  <motion.div key={idx}
                    initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1, ease }}
                    className={`relative bg-white rounded-3xl p-6 md:p-8 overflow-hidden h-full flex flex-col border transition-all hover:shadow-md ${
                      plan.popular ? 'border-indigo-300 ring-2 ring-indigo-500/40' : 'border-gray-200'
                    }`}>
                    {plan.popular && (
                      <div className="absolute top-4 right-4">
                        <span className="bg-indigo-600 text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1">
                          <FaStar className="text-yellow-300" /> Popular
                        </span>
                      </div>
                    )}
                    <div className="mb-6">
                      <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 text-white" style={{ backgroundColor: plan.accent }}>
                        <plan.icon className="text-2xl" />
                      </div>
                      <h3 className="text-2xl font-black tracking-tight text-gray-900 mb-1">{plan.name}</h3>
                      <p className="text-sm text-gray-500">{plan.tagline}</p>
                    </div>

                    {plan.isCustom ? (
                      <div className="mb-6">
                        <span className="text-4xl font-black text-gray-900">Custom</span>
                        <p className="text-sm text-gray-500 mt-1">Contact us for quote</p>
                      </div>
                    ) : (
                      <div className="mb-6">
                        {billingCycle === 'subscription' ? (
                          <>
                            <div className="flex items-baseline gap-1">
                              <span className="text-4xl font-black text-gray-900">₹<AnimatedCounter target={plan.subscription.monthly} duration={0.5} /></span>
                              <span className="text-gray-500">/month</span>
                            </div>
                            <p className="text-sm text-gray-500 mt-1">+ ₹{plan.subscription.setupFee.toLocaleString()} one-time setup</p>
                          </>
                        ) : (
                          <div className="flex items-baseline gap-1">
                            <span className="text-4xl font-black text-gray-900">₹<AnimatedCounter target={plan.oneTime.price} duration={0.5} /></span>
                            <span className="text-gray-500">one-time</span>
                          </div>
                        )}
                      </div>
                    )}

                    <div className="flex items-center gap-2 mb-6 text-sm">
                      <FaClock className="text-gray-400" />
                      <span className="text-gray-600">Delivery: {plan.deliveryTime}</span>
                    </div>

                    <div className="space-y-3 mb-8 flex-1">
                      {plan.features.map((feature, fidx) => (
                        <div key={fidx} className="flex items-center gap-3">
                          {feature.included ? (
                            <div className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0">
                              <FaCheck className="text-[10px]" />
                            </div>
                          ) : (
                            <div className="w-5 h-5 rounded-full bg-gray-100 text-gray-400 flex items-center justify-center flex-shrink-0">
                              <FaTimes className="text-[10px]" />
                            </div>
                          )}
                          <span className={`text-sm ${feature.included ? 'text-gray-700' : 'text-gray-400'}`}>{feature.name}</span>
                        </div>
                      ))}
                    </div>

                    <a href={`https://wa.me/917579500264?text=Hi%20AINOR!%20I'm%20interested%20in%20the%20${encodeURIComponent(plan.name)}%20${encodeURIComponent(currentService?.name || '')}%20plan.`}
                      target="_blank" rel="noopener noreferrer"
                      className={`flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-bold text-sm transition-all ${
                        plan.popular ? 'bg-[#111318] text-white hover:bg-gray-800' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                      }`}>
                      Get Started <FaArrowRight className="text-sm" />
                    </a>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* Benefits */}
        <section className="relative bg-white py-16 md:py-24 overflow-hidden">
          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
            <SectionLabel num={2} title="Why Subscribe" />
            <div className="relative rounded-[2rem] bg-[#111318] p-8 md:p-12 text-white overflow-hidden">
              <div className="absolute -top-24 -right-24 w-72 h-72 bg-indigo-600/30 rounded-full blur-3xl" />
              <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-purple-600/30 rounded-full blur-3xl" />
              <div className="relative z-10">
                <h2 className="text-2xl md:text-4xl font-black tracking-tight mb-10">Every plan includes</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {benefits.map((benefit, idx) => (
                    <motion.div key={idx}
                      initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.08, ease }}
                      className="bg-white/10 border border-white/10 rounded-2xl p-6 text-center">
                      <div className="w-14 h-14 rounded-2xl bg-white/10 text-indigo-400 flex items-center justify-center mx-auto mb-4">
                        <benefit.icon className="text-2xl" />
                      </div>
                      <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                      <p className="text-sm text-gray-400">{benefit.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="relative bg-[#f5f5f5] py-16 md:py-24 overflow-hidden">
          <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 lg:px-16">
            <SectionLabel num={3} title="Pricing FAQ" />
            <div className="flex items-center gap-3 mb-8">
              <FaQuestionCircle className="text-3xl text-indigo-600" />
              <h2 className="text-2xl md:text-3xl font-black tracking-tight text-gray-900">Got questions? We've got answers.</h2>
            </div>
            <div className="space-y-3">
              {faqs.map((faq, idx) => (
                <FAQItem key={idx} faq={faq} index={idx} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative bg-white py-16 md:py-24 overflow-hidden">
          <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12">
            <div className="relative rounded-[2rem] bg-[#111318] p-10 md:p-14 text-center text-white overflow-hidden">
              <div className="absolute -top-24 -right-24 w-72 h-72 bg-indigo-600/30 rounded-full blur-3xl" />
              <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-purple-600/30 rounded-full blur-3xl" />
              <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4">Still Have Questions?</h2>
                <p className="text-gray-400 mb-8 max-w-xl mx-auto leading-relaxed">
                  Our team is here to help you choose the perfect plan for your business needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a href="https://wa.me/917579500264?text=Hi%20AINOR!%20I%20have%20questions%20about%20pricing."
                    target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-7 h-12 rounded-xl font-bold text-sm transition-colors">
                    <FaWhatsapp className="text-lg" /> Chat with Us
                  </a>
                  <Link to="/faq"
                    className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 px-7 h-12 rounded-xl font-bold text-sm hover:bg-gray-100 transition-colors">
                    View Full FAQ <FaArrowRight size={12} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <SEOText page="pricing" />
      </PageShell>
    </>
  );
};

// FAQ item
const FAQItem = ({ faq, index }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ delay: index * 0.06, ease }}>
      <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <div className="flex items-center justify-between p-5">
          <h3 className="font-bold text-gray-900">{faq.q}</h3>
          <motion.div animate={{ rotate: isOpen ? 45 : 0 }}
            className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center flex-shrink-0 ml-4">
            <span className="text-xl font-light">+</span>
          </motion.div>
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}>
              <p className="px-5 pb-5 text-gray-500 leading-relaxed">{faq.a}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default PricingPage;
