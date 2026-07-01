import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaWhatsapp, FaQuestionCircle } from 'react-icons/fa';
import SEOHead from '../components/seo/SEOHead';
import {
  PageShell, PageHero, SectionLabel, GradientWord, ease,
} from '../components/layout/PageShell';

const FAQPage = () => {
  const [activeCategory, setActiveCategory] = useState('general');
  const [openIndex, setOpenIndex] = useState(null);

  const categories = [
    { id: 'general', name: 'General' },
    { id: 'subscription', name: 'Subscription Model' },
    { id: 'services', name: 'Services' },
    { id: 'pricing', name: 'Pricing' },
    { id: 'support', name: 'Support' },
  ];

  const faqs = {
    general: [
      { question: "What is AINOR?", answer: "AINOR is India's first subscription-based web development and digital solutions company. We offer website development, mobile app development, UI/UX design, and digital marketing services through flexible subscription plans." },
      { question: "Where is AINOR located?", answer: "AINOR is based in India and serves clients globally. We work remotely and can collaborate with clients from anywhere in the world." },
      { question: "What makes AINOR different from other agencies?", answer: "We are the first in India to offer subscription-based digital services. This means you get premium services without large upfront costs, with ongoing support and updates included in your monthly subscription." },
      { question: "Do you work with startups and small businesses?", answer: "Absolutely! Our subscription model is designed to make professional digital services accessible to businesses of all sizes, from startups to enterprises." },
    ],
    subscription: [
      { question: "How does the subscription model work?", answer: "Instead of paying a large one-time fee, you subscribe to our services for a fixed monthly amount. This includes development, maintenance, updates, and support. You can cancel anytime with no long-term commitments." },
      { question: "What's included in my subscription?", answer: "Your subscription includes: custom development, design work, hosting assistance, regular updates, security patches, bug fixes, and priority support. The exact inclusions vary by plan." },
      { question: "Can I switch plans?", answer: "Yes! You can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle." },
      { question: "Is there a minimum commitment period?", answer: "No minimum commitment! You can cancel your subscription at any time. However, we recommend at least 3 months to see the full value of our services." },
      { question: "What happens if I cancel?", answer: "If you cancel, you keep all the work we've done for you. We'll provide you with all source code and assets. You can always re-subscribe in the future." },
    ],
    services: [
      { question: "What services do you offer?", answer: "We offer: Website Development, Mobile App Development (iOS & Android), UI/UX Design, E-commerce Solutions, Web Applications, Digital Marketing, SEO, and Custom Software Development." },
      { question: "Do you develop mobile apps?", answer: "Yes! We develop native and cross-platform mobile applications for both iOS and Android using technologies like React Native and Flutter." },
      { question: "Can you redesign my existing website?", answer: "Absolutely! Website redesign is one of our popular services. We can modernize your existing website while preserving your content and improving user experience." },
      { question: "Do you provide hosting services?", answer: "We help you set up hosting on reliable platforms and manage it for you. Hosting costs are typically separate from the subscription unless specified in your plan." },
      { question: "Can you help with SEO?", answer: "Yes! All our websites are built with SEO best practices. We also offer dedicated SEO services for improving your search engine rankings." },
    ],
    pricing: [
      { question: "How much do your services cost?", answer: "Our subscription plans start at ₹12,999/month. Pricing varies based on the services you need. We also offer one-time project pricing for specific requirements." },
      { question: "Do you offer custom quotes?", answer: "Yes! For enterprise clients or unique requirements, we provide custom quotes tailored to your specific needs. Contact us for a free consultation." },
      { question: "Are there any hidden fees?", answer: "No hidden fees! Your subscription price includes everything mentioned in your plan. Any additional services or third-party costs (like premium plugins or hosting) will be discussed upfront." },
      { question: "Do you offer discounts?", answer: "We offer discounts for annual subscriptions (save up to 20%) and for startups/non-profits. Contact us to learn about current offers." },
    ],
    support: [
      { question: "How do I contact support?", answer: "You can reach us via WhatsApp for the fastest response, or through email at contact@myainor.com. Subscription clients get priority support." },
      { question: "What are your support hours?", answer: "We provide support during business hours (10 AM - 7 PM IST, Monday-Saturday). Emergency support for critical issues is available 24/7 for Pro and Enterprise clients." },
      { question: "How quickly do you respond?", answer: "We aim to respond within 2-4 hours during business hours. Pro and Enterprise clients receive responses within 1 hour." },
      { question: "Do you provide training?", answer: "Yes! We provide training on how to use and manage your website or application. Training sessions can be conducted via video call." },
    ],
  };

  const currentFaqs = faqs[activeCategory] || [];

  return (
    <>
      <SEOHead
        title="FAQ - Frequently Asked Questions | AINOR"
        description="Find answers to common questions about AINOR's subscription-based web development services, pricing, support, and more."
        canonicalUrl="https://myainor.com/faq"
      />

      <PageShell>
        <PageHero
          badge="Help Center"
          badgeIcon={<FaQuestionCircle className="text-indigo-500" size={13} />}
          bgWord="FAQ"
          title={<>Frequently Asked <GradientWord>Questions.</GradientWord></>}
          subtitle="Got questions? We've got answers. Find everything you need to know about AINOR and our services."
        />

        <section className="relative bg-[#f5f5f5] py-16 md:py-24 overflow-hidden">
          <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 lg:px-16">
            <SectionLabel num={1} title="Browse by Topic" />

            {/* Category tabs */}
            <div className="flex flex-wrap gap-2 mb-8">
              {categories.map((category) => (
                <button key={category.id}
                  onClick={() => { setActiveCategory(category.id); setOpenIndex(null); }}
                  className={`px-4 py-2.5 rounded-full font-semibold text-sm transition-all ${
                    activeCategory === category.id
                      ? 'bg-[#111318] text-white shadow-md'
                      : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                  }`}>
                  {category.name}
                </button>
              ))}
            </div>

            {/* Accordion */}
            <div className="space-y-3">
              <AnimatePresence mode="wait">
                {currentFaqs.map((faq, idx) => (
                  <motion.div key={`${activeCategory}-${idx}`}
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                    transition={{ delay: idx * 0.03, ease }}
                    className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
                    <button onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                      className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors">
                      <span className="font-semibold text-[#111318] pr-4">{faq.question}</span>
                      <FaChevronDown className={`text-gray-400 flex-shrink-0 transition-transform ${openIndex === idx ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {openIndex === idx && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }}>
                          <div className="px-5 pb-5 text-gray-600 leading-relaxed">{faq.answer}</div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </AnimatePresence>
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
                <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-3">Still Have Questions?</h2>
                <p className="text-gray-400 mb-8 max-w-xl mx-auto leading-relaxed">
                  Can't find what you're looking for? Our team is here to help. Reach out on WhatsApp for instant answers.
                </p>
                <a href="https://wa.me/917579500264?text=Hi%20AINOR!%20I%20have%20a%20question%20about%20your%20services."
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-500 text-white px-7 h-12 rounded-xl font-bold text-sm hover:bg-green-600 transition-colors">
                  <FaWhatsapp className="text-lg" /> Chat With Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </PageShell>
    </>
  );
};

export default FAQPage;
