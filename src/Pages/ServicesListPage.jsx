import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FaLaptopCode, FaMobileAlt, FaShoppingCart, FaSearch, FaCode,
  FaBrain, FaArrowRight, FaCheck, FaWhatsapp
} from 'react-icons/fa';
import SEOHead from '../components/seo/SEOHead';
import SEOText from '../components/seo/SEOText';
import {
  PageShell, PageHero, SectionLabel, GradientWord, PrimaryButton, WhatsAppButton, ease,
} from '../components/layout/PageShell';

const services = [
  {
    id: 'website-design-development', icon: FaLaptopCode, title: 'Website Design & Development', shortTitle: 'Website Design',
    description: 'Professional website design and development services in India. Custom responsive websites built with React, Next.js, and modern technologies. From business websites to complex web applications.',
    features: ['Custom Responsive Design', 'SEO-Optimized Structure', 'Fast Loading Speed', 'CMS Integration', 'Mobile-First Approach', 'SSL & Security'],
    price: 'From ₹9,999/mo', timeline: '4-8 weeks', accent: '#6366f1',
    technologies: ['React', 'Next.js', 'TailwindCSS', 'TypeScript'],
    caseStudy: { client: 'HiiHive', result: '2,000+ active students', link: '/portfolio' }
  },
  {
    id: 'custom-software-development', icon: FaCode, title: 'Custom Software Development', shortTitle: 'Custom Software',
    description: 'Bespoke software solutions for unique business challenges. We build scalable, secure enterprise applications, APIs, SaaS platforms, and business automation tools.',
    features: ['Bespoke Solutions', 'Scalable Architecture', 'API Development', 'Database Design', 'Cloud Integration', 'Ongoing Support'],
    price: 'From ₹19,999/mo', timeline: '8-16 weeks', accent: '#a855f7',
    technologies: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'AWS'],
    caseStudy: { client: 'Mohan G Enterprises', result: 'B2B platform automation', link: '/portfolio' }
  },
  {
    id: 'mobile-app-development', icon: FaMobileAlt, title: 'Mobile App Development', shortTitle: 'Mobile Apps',
    description: 'iOS and Android mobile app development in India. Cross-platform apps with React Native and Flutter. Native-like performance with cost-effective development.',
    features: ['iOS & Android Apps', 'Cross-Platform (React Native/Flutter)', 'Push Notifications', 'Offline Support', 'App Store Optimization', 'Real-time Features'],
    price: 'From ₹19,999/mo', timeline: '6-12 weeks', accent: '#22c55e',
    technologies: ['React Native', 'Flutter', 'Firebase', 'Node.js'],
    caseStudy: { client: 'GoForCab', result: '10,000+ rides, 500+ drivers', link: '/portfolio' }
  },
  {
    id: 'ecommerce-website-development', icon: FaShoppingCart, title: 'E-Commerce Website Development', shortTitle: 'E-Commerce',
    description: 'Complete e-commerce solutions for online stores in India. Shopify, WooCommerce, and custom React e-commerce development with payment integration (Razorpay, Stripe).',
    features: ['Product Catalog & Cart', 'Payment Gateway Integration', 'Inventory Management', 'Order Tracking', 'Admin Dashboard', 'Multi-vendor Support'],
    price: 'From ₹14,999/mo', timeline: '4-10 weeks', accent: '#f97316',
    technologies: ['React', 'Shopify', 'WooCommerce', 'Razorpay', 'Stripe'],
    caseStudy: { client: 'Sttrika', result: '₹10L+ revenue, 5K users', link: '/portfolio' }
  },
  {
    id: 'seo-services-india', icon: FaSearch, title: 'SEO Services India', shortTitle: 'SEO Services',
    description: 'Professional SEO services to improve Google rankings. Keyword research, on-page SEO, technical SEO, content strategy, and link building. Proven results with case studies.',
    features: ['Keyword Research', 'On-Page SEO', 'Technical SEO Audit', 'Content Strategy', 'Link Building', 'Monthly Reporting'],
    price: 'From ₹7,999/mo', timeline: 'Ongoing (3+ months)', accent: '#ec4899',
    technologies: ['Google Analytics', 'Search Console', 'SEMrush', 'Ahrefs'],
    caseStudy: { client: 'ExamBulletin', result: 'Top rankings for Sarkari Result', link: '/portfolio' }
  },
  {
    id: 'ai-solutions-india', icon: FaBrain, title: 'AI & Machine Learning Solutions', shortTitle: 'AI Solutions',
    description: 'AI-powered solutions for business automation. Custom chatbots, machine learning models, natural language processing, and AI integration services.',
    features: ['AI Chatbots', 'Machine Learning Models', 'Natural Language Processing', 'Predictive Analytics', 'Process Automation', 'AI Integration'],
    price: 'From ₹29,999/mo', timeline: '6-16 weeks', accent: '#38bdf8',
    technologies: ['Python', 'TensorFlow', 'OpenAI', 'LangChain', 'AWS'],
    caseStudy: { client: 'Multiple Clients', result: 'Automation & efficiency gains', link: '/ai-services' }
  }
];

const whyChoose = [
  { title: 'Subscription Model', desc: 'No huge upfront costs. Pay monthly and cancel anytime.', emoji: '💳' },
  { title: 'All-Inclusive', desc: 'Hosting, SSL, updates, support - everything included.', emoji: '📦' },
  { title: 'MSME Registered', desc: 'Government recognized (UDYAM-UP-36-0033877).', emoji: '✅' },
  { title: 'Proven Results', desc: '50+ projects with documented success stories.', emoji: '📈' },
];

const ServicesListPage = () => {
  const stats = [
    { value: 50, suffix: '+', label: 'Projects' },
    { value: 100, suffix: '%', label: 'Satisfaction' },
    { value: 6, suffix: '+', label: 'Industries' },
    { value: 24, suffix: '/7', label: 'Support' },
  ];

  return (
    <>
      <SEOHead
        title="Web Development Services India | Website, Mobile App, E-Commerce, SEO | AINOR"
        description="🚀 Professional web development services in India from ₹9,999/mo. Website design, mobile apps, e-commerce, SEO. MSME registered. 50+ projects delivered. Free consultation!"
        canonicalUrl="https://myainor.com/all-services"
        keywords="web development services india, website design india, mobile app development, e-commerce development, seo services india, custom software development, react development india"
      />

      <PageShell>
        <PageHero
          badge="All Services"
          bgWord="SERVICES"
          title={<>Complete digital services for{' '}<GradientWord>modern businesses.</GradientWord></>}
          subtitle="From website design to mobile apps, e-commerce to SEO — subscription-based development starting at ₹9,999/month. MSME registered & trusted by 50+ businesses."
          actions={
            <>
              <PrimaryButton href="/contact">
                Get Free Quote <FaArrowRight size={11} />
              </PrimaryButton>
              <WhatsAppButton
                href="https://wa.me/917579500264?text=Hi,%20I'm%20interested%20in%20your%20services"
                target="_blank" rel="noopener noreferrer">
                <FaWhatsapp size={14} /> WhatsApp Us
              </WhatsAppButton>
            </>
          }
          stats={stats}
        />

        {/* Services grid */}
        <section className="relative bg-[#f5f5f5] py-16 md:py-24 overflow-hidden">
          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
            <SectionLabel num={1} title="What We Offer" />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
              {services.map((service, idx) => (
                <motion.div key={service.id}
                  initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.55, delay: idx * 0.07, ease }}
                  className="group relative bg-white border border-gray-200 hover:border-gray-300 hover:shadow-md rounded-2xl p-6 transition-all duration-300 overflow-hidden flex flex-col">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"
                    style={{ background: `radial-gradient(circle at 0% 0%, ${service.accent}12 0%, transparent 60%)` }} />
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                        style={{ backgroundColor: `${service.accent}18`, color: service.accent }}>
                        <service.icon className="text-xl" />
                      </div>
                      <div>
                        <h2 className="text-lg font-bold text-gray-900">{service.shortTitle}</h2>
                        <p className="text-sm font-semibold" style={{ color: service.accent }}>{service.price}</p>
                      </div>
                    </div>
                    <p className="text-gray-500 text-sm mb-4 flex-grow leading-relaxed">{service.description}</p>
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      {service.features.slice(0, 4).map((feature, fidx) => (
                        <div key={fidx} className="flex items-center gap-2 text-sm text-gray-600">
                          <FaCheck className="text-green-500 flex-shrink-0 text-xs" />
                          <span className="truncate">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="bg-gray-50 border border-gray-100 rounded-xl p-3 mb-4">
                      <p className="text-xs text-gray-500">Case Study: <strong className="text-gray-700">{service.caseStudy.client}</strong></p>
                      <p className="text-sm font-medium" style={{ color: service.accent }}>{service.caseStudy.result}</p>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.technologies.slice(0, 3).map((tech, tidx) => (
                        <span key={tidx} className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-lg">{tech}</span>
                      ))}
                    </div>
                    <Link to={`/service/${service.id}`}
                      className="mt-auto inline-flex items-center justify-center gap-2 w-full py-3 bg-[#111318] text-white rounded-xl font-bold text-sm hover:bg-gray-800 transition-colors">
                      Learn More <FaArrowRight className="text-xs" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why choose */}
        <section className="relative bg-white py-16 md:py-24 overflow-hidden">
          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
            <SectionLabel num={2} title="Why AINOR" />
            <motion.h2 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.7, ease }}
              className="text-[clamp(2rem,4.5vw,3.2rem)] font-black leading-[1.1] tracking-tight text-gray-900 mb-4">
              Your long-term{' '}
              <GradientWord>technology partner.</GradientWord>
            </motion.h2>
            <p className="text-gray-500 mb-10 max-w-2xl">We're not just another agency — we're in it for the long run.</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
              {whyChoose.map((item, idx) => (
                <motion.div key={idx}
                  initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.08, ease }}
                  className="bg-gray-50 border border-gray-200 rounded-2xl p-6 hover:shadow-md transition-all">
                  <div className="text-3xl mb-4">{item.emoji}</div>
                  <h3 className="font-bold text-lg mb-2 text-gray-900">{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative bg-[#f5f5f5] py-16 md:py-24 overflow-hidden">
          <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12">
            <div className="relative rounded-[2rem] bg-[#111318] p-10 md:p-14 text-center text-white overflow-hidden">
              <div className="absolute -top-24 -right-24 w-72 h-72 bg-indigo-600/30 rounded-full blur-3xl" />
              <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-purple-600/30 rounded-full blur-3xl" />
              <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4">Ready to Start Your Project?</h2>
                <p className="text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
                  Get a FREE consultation and detailed quote within 2 hours. No commitment required.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link to="/contact"
                    className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 px-7 h-12 rounded-xl font-bold text-sm hover:bg-gray-100 transition-colors">
                    Get Free Quote <FaArrowRight size={12} />
                  </Link>
                  <Link to="/pricing"
                    className="inline-flex items-center justify-center gap-2 bg-white/10 text-white border border-white/20 px-7 h-12 rounded-xl font-bold text-sm hover:bg-white/20 transition-colors">
                    View Pricing
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <SEOText page="services" />
      </PageShell>
    </>
  );
};

export default ServicesListPage;
