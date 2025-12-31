import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import SEOHead from '../components/seo/SEOHead';

// Color palette: Dark (#1a1a1a), Light (#f5f5f5), Accent (indigo-500)

const FAQPage = () => {
  const [activeCategory, setActiveCategory] = useState('general');
  const [expandedFaqs, setExpandedFaqs] = useState({});

  const toggleFaq = (id) => {
    setExpandedFaqs(prev => ({ ...prev, [id]: !prev[id] }));
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  };

  // Categories
  const categories = [
    { id: 'general', name: 'General' },
    { id: 'services', name: 'Services' },
    { id: 'pricing', name: 'Pricing' },
    { id: 'process', name: 'Process' },
  ];

  // FAQ Data
  const faqData = {
    general: [
      {
        id: 'g1',
        question: "What is AINOR?",
        answer: "AINOR is India's first subscription-based web development company. We help businesses launch and grow their digital presence without massive upfront costs through affordable monthly subscriptions."
      },
      {
        id: 'g2',
        question: "What makes AINOR different?",
        answer: "We're the first in India to offer subscription-based digital services. Instead of paying lakhs upfront, you pay a small setup fee and affordable monthly subscription that includes hosting, SSL, updates, and support."
      },
      {
        id: 'g3',
        question: "Do you work with international clients?",
        answer: "Yes! We work with clients globally. Our remote-first approach and flexible communication ensures seamless project management regardless of geographic location."
      },
      {
        id: 'g4',
        question: "How experienced is your team?",
        answer: "Our team consists of skilled professionals with expertise in web development, mobile apps, UI/UX design, and digital strategy. We continuously invest in training to stay at the forefront of technology."
      },
    ],
    services: [
      {
        id: 's1',
        question: "What services does AINOR offer?",
        answer: "We offer web development, mobile app development (iOS & Android), e-commerce solutions, UI/UX design, custom software development, and ongoing maintenance services."
      },
      {
        id: 's2',
        question: "Do you build mobile apps?",
        answer: "Yes! We develop native and cross-platform mobile apps for iOS and Android using React Native, Flutter, and native technologies. We can recommend the best approach based on your requirements."
      },
      {
        id: 's3',
        question: "What technologies do you use?",
        answer: "We work with modern technologies including React, Next.js, Node.js, Python, React Native, Flutter, MongoDB, PostgreSQL, Firebase, and more. Our tech stack is selected based on project requirements."
      },
      {
        id: 's4',
        question: "Do you provide website maintenance?",
        answer: "Yes! All our subscription plans include ongoing maintenance, updates, security patches, and technical support. We ensure your digital products remain secure and up-to-date."
      },
    ],
    pricing: [
      {
        id: 'p1',
        question: "How does subscription pricing work?",
        answer: "You pay a one-time setup fee (60-70% less than traditional pricing) and then a fixed monthly subscription. This includes hosting, SSL, regular updates, maintenance, and support."
      },
      {
        id: 'p2',
        question: "Can I pay one-time instead?",
        answer: "Yes! We offer both subscription and one-time payment options. However, with one-time payment, hosting and maintenance would be additional costs. Subscription often works out more economical long-term."
      },
      {
        id: 'p3',
        question: "What's included in the monthly subscription?",
        answer: "Monthly subscription includes premium hosting, SSL certificate, regular content updates, security monitoring, performance optimization, technical support, and bug fixes."
      },
      {
        id: 'p4',
        question: "Can I cancel my subscription?",
        answer: "Yes, you can cancel anytime with 30 days notice. There are no long-term contracts. You own your content, and we'll help transfer it if you decide to move."
      },
    ],
    process: [
      {
        id: 'pr1',
        question: "How long does a project take?",
        answer: "Timelines vary by complexity. A simple website takes 1-2 weeks, while complex web apps or mobile apps take 4-12 weeks. We'll provide an accurate timeline after understanding your requirements."
      },
      {
        id: 'pr2',
        question: "What's your development process?",
        answer: "We follow an agile methodology: Discovery & Planning → Design → Development → Testing → Deployment → Support. We maintain regular communication and present work at key milestones for feedback."
      },
      {
        id: 'pr3',
        question: "How do you communicate during projects?",
        answer: "We use WhatsApp for quick communication, email for documentation, and video calls for detailed discussions. You'll have a dedicated point of contact throughout your project."
      },
      {
        id: 'pr4',
        question: "Can I make changes during development?",
        answer: "Absolutely! Our agile approach allows flexibility. We present work at milestones for feedback and make adjustments as needed. Significant scope changes may affect timeline and cost, which we discuss transparently."
      },
    ],
  };

  const currentFaqs = faqData[activeCategory] || faqData.general;

  return (
    <>
      <SEOHead 
        title="FAQ - AINOR | Frequently Asked Questions"
        description="Find answers to common questions about AINOR's web development services, pricing, subscription model, and development process."
        canonicalUrl="https://myainor.com/faq"
      />

      <div className="min-h-screen bg-[#f5f5f5]">
        {/* Hero Section */}
        <section className="relative pt-32 pb-16 overflow-hidden">
          {/* Decorative arrows */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.svg
              className="absolute top-24 right-20 w-24 h-24 opacity-[0.1]"
              viewBox="0 0 100 100"
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            >
              <circle cx="50" cy="50" r="6" fill="#6366f1" />
              {[0, 90, 180, 270].map((angle, i) => (
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
                <span className="font-semibold text-sm">FAQ</span>
              </span>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#1a1a1a] mb-6">
                Frequently Asked
                <span className="block mt-2 text-indigo-500">Questions</span>
              </h1>
              
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Find answers to common questions about our services, pricing, and process.
              </p>
            </motion.div>

            {/* Category Tabs */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((cat) => (
                <motion.button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-5 py-3 rounded-xl font-medium transition-all ${
                    activeCategory === cat.id
                      ? 'bg-indigo-500 text-white'
                      : 'bg-white text-[#1a1a1a] border border-gray-200 hover:border-indigo-200'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {cat.name}
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ List */}
        <section className="pb-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="space-y-4"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              key={activeCategory}
            >
              {currentFaqs.map((faq) => (
                <motion.div
                  key={faq.id}
                  className="bg-white rounded-2xl border border-gray-100 overflow-hidden"
                  variants={cardVariants}
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-semibold text-[#1a1a1a] pr-4">{faq.question}</span>
                    <motion.div
                      animate={{ rotate: expandedFaqs[faq.id] ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="flex-shrink-0"
                    >
                      <FaChevronDown className="w-4 h-4 text-indigo-500" />
                    </motion.div>
                  </button>
                  
                  <AnimatePresence>
                    {expandedFaqs[faq.id] && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Still Have Questions */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#1a1a1a] rounded-3xl p-12 md:p-16 text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Still Have Questions?
              </h2>
              <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                Can't find what you're looking for? Our team is here to help. Reach out and we'll get back to you within 2 hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="https://wa.me/917579500264?text=Hi%20AINOR!%20I%20have%20a%20question."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-500 text-white rounded-xl font-medium hover:bg-green-600 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FaWhatsapp className="w-5 h-5" />
                  Chat on WhatsApp
                </motion.a>
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-white/10 text-white rounded-xl font-medium hover:bg-white/20 transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default FAQPage;
