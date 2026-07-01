import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FaWhatsapp, FaLaptopCode, FaMobileAlt, FaShoppingCart, FaSearch, FaCode,
  FaCheck, FaArrowRight, FaRocket, FaClock, FaShieldAlt,
  FaLightbulb, FaChartLine, FaBrain, FaHeadset, FaCogs
} from 'react-icons/fa';

import SEOHead from '../components/seo/SEOHead';
import FloatingNav from '../components/layout/FloatingNav';
import ModernFooter from '../components/layout/ModernFooter';
import { AnimatedCounter } from '../components/ui/AnimationComponents';
import { AnimatedMesh, FilmGrain, ChapterLabel } from '../components/ui/CinematicEffects';

const ease = [0.22, 1, 0.36, 1];

// Services data with expanded content
const servicesData = [
  {
    id: 1,
    slug: 'website-design-development',
    icon: FaLaptopCode,
    title: 'Website Design',
    shortDesc: 'Stunning, high-performance websites built with cutting-edge technologies.',
    description: 'We create visually striking, highly functional websites that deliver exceptional user experiences. Our design approach combines aesthetic appeal with technical excellence to help your business stand out online.',
    features: [
      'Custom, responsive designs for all devices',
      'Intuitive user interfaces with seamless navigation',
      'Fast-loading pages optimized for performance',
      'Accessibility compliance for all users',
      'Interactive elements and animations',
      'Brand-aligned visual identity',
      'SEO-optimized structure',
      'CMS integration for easy updates'
    ],
    technologies: ['React', 'Next.js', 'TailwindCSS', 'Framer Motion', 'TypeScript'],
    timeline: '4-8 weeks',
    idealFor: 'Businesses needing a professional online presence',
    accent: '#6366f1',
    stats: { projects: '30+', satisfaction: '100%', avgTime: '6 weeks' },
    process: [
      { step: 'Discovery', desc: 'Understanding your brand, goals, and target audience' },
      { step: 'Wireframing', desc: 'Creating the blueprint for your website structure' },
      { step: 'Design', desc: 'Crafting beautiful, on-brand visual designs' },
      { step: 'Development', desc: 'Building with clean, scalable code' },
      { step: 'Testing', desc: 'Rigorous QA across devices and browsers' },
      { step: 'Launch', desc: 'Deployment and post-launch support' },
    ]
  },
  {
    id: 2,
    slug: 'custom-software-development',
    icon: FaCode,
    title: 'Custom Software',
    shortDesc: 'Tailored software solutions designed for your unique business challenges.',
    description: 'We develop custom software applications that address your specific business needs. Our solutions are scalable, secure, and built with future growth in mind, helping you streamline operations and boost productivity.',
    features: [
      'Bespoke solutions for your requirements',
      'Scalable architecture for growth',
      'Integration with existing systems',
      'Enhanced security and data protection',
      'Ongoing support and maintenance',
      'User-friendly interfaces',
      'API development and integration',
      'Cloud-native architecture'
    ],
    technologies: ['Python', 'Node.js', 'PostgreSQL', 'MongoDB', 'Docker', 'AWS'],
    timeline: '8-16 weeks',
    idealFor: 'Companies with unique operational needs',
    accent: '#a855f7',
    stats: { projects: '20+', satisfaction: '98%', avgTime: '12 weeks' },
    process: [
      { step: 'Requirements', desc: 'Deep dive into your business processes' },
      { step: 'Architecture', desc: 'Designing the technical solution' },
      { step: 'Development', desc: 'Agile sprints with regular demos' },
      { step: 'Integration', desc: 'Connecting with your existing systems' },
      { step: 'Testing', desc: 'Comprehensive QA and UAT' },
      { step: 'Deployment', desc: 'Smooth rollout with training' },
    ]
  },
  {
    id: 3,
    slug: 'mobile-app-development',
    icon: FaMobileAlt,
    title: 'Mobile Apps',
    shortDesc: 'Powerful, feature-rich mobile apps for optimal user engagement.',
    description: 'We build cutting-edge mobile applications that provide seamless user experiences across iOS and Android platforms. Our apps are designed to engage users and drive business growth.',
    features: [
      'Native and cross-platform development',
      'Intuitive UX/UI design',
      'Offline capabilities and sync',
      'Push notifications and real-time updates',
      'Device feature integration',
      'App store optimization',
      'Analytics integration',
      'In-app purchases and subscriptions'
    ],
    technologies: ['React Native', 'Flutter', 'Kotlin', 'Swift', 'Firebase'],
    timeline: '6-12 weeks',
    idealFor: 'Brands targeting mobile users',
    accent: '#22c55e',
    stats: { projects: '15+', satisfaction: '100%', avgTime: '8 weeks' },
    process: [
      { step: 'Strategy', desc: 'Defining your app vision and features' },
      { step: 'UI/UX Design', desc: 'Creating engaging mobile experiences' },
      { step: 'Development', desc: 'Building robust, performant apps' },
      { step: 'Testing', desc: 'Device testing and beta releases' },
      { step: 'Store Submission', desc: 'App store approval process' },
      { step: 'Launch', desc: 'Marketing support and updates' },
    ]
  },
  {
    id: 4,
    slug: 'ecommerce-website-development',
    icon: FaShoppingCart,
    title: 'E-Commerce',
    shortDesc: 'Robust online stores that drive conversions and enhance experiences.',
    description: 'We create comprehensive e-commerce solutions that help businesses sell online effectively. Our stores are designed to convert visitors into customers with attractive design and powerful functionality.',
    features: [
      'Customized shopping experiences',
      'Mobile-responsive design',
      'Secure payment integration',
      'Inventory management',
      'Customer account management',
      'Analytics and reporting',
      'Multi-currency support',
      'Marketing automation'
    ],
    technologies: ['Shopify', 'WooCommerce', 'Stripe', 'PayPal', 'React'],
    timeline: '4-10 weeks',
    idealFor: 'Retailers looking to sell online',
    accent: '#f97316',
    stats: { projects: '25+', satisfaction: '99%', avgTime: '6 weeks' },
    process: [
      { step: 'Planning', desc: 'Understanding your products and customers' },
      { step: 'Design', desc: 'Creating a compelling storefront' },
      { step: 'Setup', desc: 'Configuring products and payments' },
      { step: 'Integration', desc: 'Connecting shipping and inventory' },
      { step: 'Testing', desc: 'Order flow and payment testing' },
      { step: 'Launch', desc: 'Go live with marketing support' },
    ]
  },
  {
    id: 5,
    slug: 'seo-services-india',
    icon: FaSearch,
    title: 'SEO Services',
    shortDesc: 'Strategic optimization for better search engine visibility.',
    description: "We implement comprehensive SEO strategies that improve your website's visibility and drive organic traffic to your business. Our data-driven approach ensures measurable results.",
    features: [
      'Complete SEO audit and analysis',
      'Keyword research and strategy',
      'On-page and off-page optimization',
      'Content strategy development',
      'Local SEO optimization',
      'Performance reporting',
      'Competitor analysis',
      'Link building strategies'
    ],
    technologies: ['Google Analytics', 'SEMrush', 'Ahrefs', 'Search Console'],
    timeline: '3+ months ongoing',
    idealFor: 'Businesses seeking better visibility',
    accent: '#ec4899',
    stats: { projects: '40+', satisfaction: '97%', avgTime: 'Ongoing' },
    process: [
      { step: 'Audit', desc: 'Comprehensive site analysis' },
      { step: 'Research', desc: 'Keyword and competitor research' },
      { step: 'Strategy', desc: 'Custom SEO roadmap' },
      { step: 'Implementation', desc: 'On-page and technical fixes' },
      { step: 'Content', desc: 'SEO-optimized content creation' },
      { step: 'Monitor', desc: 'Track rankings and adjust' },
    ]
  },
  {
    id: 6,
    slug: 'ai-solutions-india',
    icon: FaBrain,
    title: 'AI Solutions',
    shortDesc: 'Intelligent automation and AI-powered business solutions.',
    description: 'We leverage artificial intelligence to help businesses automate processes, gain insights, and deliver better customer experiences. From chatbots to custom ML models.',
    features: [
      'Custom AI chatbots',
      'Machine learning models',
      'Natural language processing',
      'Predictive analytics',
      'Process automation',
      'AI-powered insights',
      'Computer vision',
      'Recommendation systems'
    ],
    technologies: ['Python', 'TensorFlow', 'OpenAI', 'LangChain', 'AWS'],
    timeline: '6-16 weeks',
    idealFor: 'Businesses ready to embrace AI',
    accent: '#38bdf8',
    stats: { projects: '10+', satisfaction: '100%', avgTime: '10 weeks' },
    process: [
      { step: 'Assessment', desc: 'Identify AI opportunities' },
      { step: 'Data Prep', desc: 'Gather and prepare training data' },
      { step: 'Model Development', desc: 'Build and train AI models' },
      { step: 'Integration', desc: 'Connect to your systems' },
      { step: 'Testing', desc: 'Validate accuracy and performance' },
      { step: 'Deploy', desc: 'Launch with monitoring' },
    ]
  }
];

const heroStats = [
  { value: 50, suffix: '+', label: 'Projects' },
  { value: 100, suffix: '%', label: 'Satisfaction' },
  { value: 6, suffix: '+', label: 'Services' },
];

const whyChooseUs = [
  { icon: FaShieldAlt, title: 'Quality Guaranteed', desc: 'We stand behind our work with a satisfaction guarantee.', accent: '#6366f1' },
  { icon: FaHeadset, title: '24/7 Support', desc: 'Always available via WhatsApp for your queries.', accent: '#22c55e' },
  { icon: FaChartLine, title: 'Results Driven', desc: 'We focus on delivering measurable business outcomes.', accent: '#ec4899' },
  { icon: FaLightbulb, title: 'Innovation First', desc: 'Using the latest technologies and best practices.', accent: '#a855f7' },
];

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 z-[9999] origin-left"
    />
  );
};

const StatusBadge = ({ children }) => (
  <div className="inline-flex items-center gap-2 border border-gray-200 bg-gray-50 px-3 py-1.5 rounded-full">
    <span className="relative flex h-2 w-2">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
    </span>
    <span className="text-[11px] font-bold text-gray-500 tracking-[0.2em] uppercase">{children}</span>
  </div>
);

const HeroSection = () => (
  <section className="relative min-h-[92vh] flex items-center bg-white overflow-hidden pt-24 pb-16 md:pt-28">
    <AnimatedMesh light />
    <div className="absolute inset-0 pointer-events-none opacity-[0.4]"
      style={{ backgroundImage: 'radial-gradient(circle, #e5e7eb 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
    <div className="absolute left-0 bottom-0 text-[clamp(90px,15vw,190px)] font-black leading-none
                    text-gray-900/[0.025] select-none pointer-events-none tracking-tighter">
      SERVICES
    </div>

    <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
      <div className="max-w-3xl flex flex-col gap-6 md:gap-8">
        <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5, ease }}>
          <StatusBadge>Our Expertise</StatusBadge>
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease }}
          className="text-[clamp(2.2rem,6vw,4.5rem)] font-black leading-[1.05] tracking-tight text-[#111318]">
          Digital Services That{' '}
          <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
            Drive Growth.
          </span>
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6, ease }}
          className="text-lg md:text-xl text-gray-500 max-w-2xl leading-relaxed">
          Comprehensive digital solutions designed to transform your business — from
          websites and apps to AI, built under one simple subscription.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.6, ease }}
          className="flex flex-wrap gap-3">
          <motion.a href="/pricing" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 bg-[#111318] text-white h-11 px-7 rounded-xl font-bold text-sm hover:bg-gray-800 transition-colors shadow-md shadow-gray-900/10">
            View Plans <FaArrowRight size={11} />
          </motion.a>
          <motion.a href="https://wa.me/917579500264?text=Hi%20AINOR!%20I'd%20like%20to%20discuss%20a%20project."
            target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 bg-green-500 text-white h-11 px-7 rounded-xl font-bold text-sm hover:bg-green-600 transition-colors">
            <FaWhatsapp size={14} /> WhatsApp
          </motion.a>
        </motion.div>

        <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
          transition={{ delay: 0.6, duration: 0.8, ease }}
          className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent origin-left" />

        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6, ease }}
          className="flex items-center gap-5 sm:gap-8">
          {heroStats.map((s) => (
            <div key={s.label} className="flex flex-col">
              <span className="text-xl sm:text-2xl font-black text-[#111318] leading-none">
                <AnimatedCounter value={s.value} duration={1.2} />{s.suffix}
              </span>
              <span className="text-[11px] text-gray-400 mt-0.5 uppercase tracking-wider">{s.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

const tabs = [
  { id: 'features', label: "What's Included", Icon: FaCheck },
  { id: 'process', label: 'Our Process', Icon: FaCogs },
  { id: 'tech', label: 'Technologies', Icon: FaCode },
  { id: 'info', label: 'Project Info', Icon: FaClock },
];

const ServiceExplorer = () => {
  const [selected, setSelected] = useState(servicesData[0]);
  const [tab, setTab] = useState('features');
  const ServiceIcon = selected.icon;

  const pickService = (s) => { setSelected(s); setTab('features'); };

  return (
    <section className="relative bg-[#f5f5f5] py-20 md:py-28 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <ChapterLabel num={1} title="Explore Our Services" light />

        {/* Service selector pills */}
        <div className="flex flex-wrap gap-2.5 mb-10">
          {servicesData.map((s) => {
            const Icon = s.icon;
            const active = selected.id === s.id;
            return (
              <button key={s.id} onClick={() => pickService(s)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full font-semibold text-sm transition-all ${
                  active ? 'bg-[#111318] text-white shadow-md' : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}>
                <Icon style={{ color: active ? '#fff' : s.accent }} />
                <span>{s.title}</span>
              </button>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-start">
          {/* Left — service info card */}
          <AnimatePresence mode="wait">
            <motion.div key={selected.id}
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease }}
              className="relative rounded-3xl p-8 md:p-10 text-white overflow-hidden lg:sticky lg:top-28"
              style={{ background: `linear-gradient(135deg, ${selected.accent}, ${selected.accent}cc)` }}>
              <div className="absolute -top-20 -right-20 w-60 h-60 bg-white/10 rounded-full blur-3xl" />
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mb-6">
                  <ServiceIcon className="text-3xl text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4">{selected.title}</h2>
                <p className="text-white/85 mb-8 leading-relaxed">{selected.description}</p>

                <div className="grid grid-cols-3 gap-3 mb-8">
                  {[
                    { v: selected.stats.projects, l: 'Projects' },
                    { v: selected.stats.satisfaction, l: 'Satisfaction' },
                    { v: selected.stats.avgTime, l: 'Avg Time' },
                  ].map((st) => (
                    <div key={st.l} className="text-center p-3 bg-white/10 rounded-xl">
                      <div className="text-lg md:text-xl font-black">{st.v}</div>
                      <div className="text-[10px] text-white/70 uppercase tracking-wider mt-0.5">{st.l}</div>
                    </div>
                  ))}
                </div>

                <a href={`https://wa.me/917579500264?text=Hi%20AINOR!%20I'm%20interested%20in%20${encodeURIComponent(selected.title)}%20services.`}
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-xl font-bold text-sm hover:bg-gray-100 transition-colors">
                  <FaWhatsapp className="text-green-500" /> Get Started
                </a>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Right — tabbed detail panel */}
          <div className="bg-white border border-gray-200 rounded-3xl p-6 md:p-8 shadow-sm">
            <div className="flex flex-wrap gap-2 mb-6">
              {tabs.map(({ id, label, Icon }) => (
                <button key={id} onClick={() => setTab(id)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-semibold transition-all ${
                    tab === id ? 'bg-[#111318] text-white' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                  }`}>
                  <Icon className="text-[10px]" /> {label}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div key={`${selected.id}-${tab}`}
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.3, ease }}>
                {tab === 'features' && (
                  <div className="grid sm:grid-cols-2 gap-3">
                    {selected.features.map((f, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <FaCheck className="text-[9px]" />
                        </div>
                        <span className="text-sm text-gray-600">{f}</span>
                      </div>
                    ))}
                  </div>
                )}
                {tab === 'process' && (
                  <div className="space-y-4">
                    {selected.process.map((step, idx) => (
                      <div key={idx} className="flex gap-4">
                        <div className="w-9 h-9 rounded-xl text-white flex items-center justify-center flex-shrink-0 text-sm font-bold"
                          style={{ backgroundColor: selected.accent }}>
                          {idx + 1}
                        </div>
                        <div>
                          <h4 className="font-bold text-sm text-gray-900">{step.step}</h4>
                          <p className="text-xs text-gray-500">{step.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                {tab === 'tech' && (
                  <div>
                    <div className="flex flex-wrap gap-2.5">
                      {selected.technologies.map((t, idx) => (
                        <span key={idx}
                          className="px-4 py-2.5 bg-gray-100 text-gray-700 rounded-xl text-sm font-medium hover:text-white transition-colors cursor-default"
                          onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = selected.accent; }}
                          onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = ''; }}>
                          {t}
                        </span>
                      ))}
                    </div>
                    <p className="text-sm text-gray-500 mt-6 leading-relaxed">
                      We use the latest and most reliable technologies to deliver exceptional results for your project.
                    </p>
                  </div>
                )}
                {tab === 'info' && (
                  <div className="space-y-4">
                    <div className="bg-gray-50 rounded-2xl p-5">
                      <span className="text-[11px] text-gray-400 uppercase tracking-wider block mb-1">Timeline</span>
                      <p className="font-black text-2xl text-[#111318]">{selected.timeline}</p>
                    </div>
                    <div className="bg-gray-50 rounded-2xl p-5">
                      <span className="text-[11px] text-gray-400 uppercase tracking-wider block mb-1">Ideal For</span>
                      <p className="text-gray-600">{selected.idealFor}</p>
                    </div>
                    <div className="bg-gray-50 rounded-2xl p-5">
                      <span className="text-[11px] text-gray-400 uppercase tracking-wider block mb-1">Starting From</span>
                      <p className="font-black text-2xl" style={{ color: selected.accent }}>Let's Talk</p>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

const AllServicesSection = () => (
  <section className="relative bg-white py-20 md:py-28 overflow-hidden">
    <AnimatedMesh light />
    <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
      <ChapterLabel num={2} title="Everything We Build" light />

      <motion.h2 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.7, ease }}
        className="text-[clamp(2.2rem,5vw,3.6rem)] font-black leading-[1.08] tracking-tight text-gray-900 mb-12">
        Pick a service,{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
          dive deeper.
        </span>
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {servicesData.map((s, i) => {
          const Icon = s.icon;
          return (
            <motion.div key={s.id}
              initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.55, delay: i * 0.07, ease }}
              onClick={() => (window.location.href = `/service/${s.slug}`)}
              className="group relative bg-gray-50 border border-gray-200 hover:bg-white hover:border-gray-300
                         hover:shadow-md rounded-2xl p-6 cursor-pointer transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"
                style={{ background: `radial-gradient(circle at 0% 0%, ${s.accent}12 0%, transparent 60%)` }} />
              <div className="relative z-10 flex flex-col gap-5 h-full">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${s.accent}18`, color: s.accent }}>
                  <Icon size={22} />
                </div>
                <div>
                  <h3 className="text-gray-900 font-bold text-lg mb-2">{s.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{s.shortDesc}</p>
                </div>
                <div className="flex items-center justify-between pt-4 mt-auto border-t border-gray-100">
                  <span className="text-xs text-gray-400">{s.timeline}</span>
                  <span className="text-sm font-semibold flex items-center gap-1" style={{ color: s.accent }}>
                    Learn More <FaArrowRight className="text-xs" />
                  </span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

const WhyChooseSection = () => (
  <section className="relative bg-[#f5f5f5] py-20 md:py-28 overflow-hidden">
    <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
      <ChapterLabel num={3} title="Why AINOR" light />

      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
        <motion.h2 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7, ease }}
          className="text-[clamp(2.2rem,5vw,3.6rem)] font-black leading-[1.08] tracking-tight text-gray-900">
          Not just a vendor —
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500">
            a growth partner.
          </span>
        </motion.h2>
        <p className="text-gray-500 text-base leading-relaxed lg:max-w-xs lg:text-right">
          We treat every project like it's our own product.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {whyChooseUs.map((item, idx) => (
          <motion.div key={idx}
            initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.55, delay: idx * 0.08, ease }}
            className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
              style={{ backgroundColor: `${item.accent}18`, color: item.accent }}>
              <item.icon className="text-xl" />
            </div>
            <h3 className="font-bold text-lg mb-2 text-gray-900">{item.title}</h3>
            <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const CTASection = () => (
  <section className="relative bg-white py-20 md:py-28 overflow-hidden">
    <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12">
      <div className="relative rounded-[2rem] bg-[#111318] p-10 md:p-16 text-center text-white overflow-hidden">
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-indigo-600/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-purple-600/30 rounded-full blur-3xl" />
        <div className="relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, ease }}>
            <FaRocket className="text-4xl mx-auto mb-6 text-indigo-400" />
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4">Ready to Get Started?</h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto leading-relaxed">
              Let's discuss your project and find the perfect solution for your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="https://wa.me/917579500264?text=Hi%20AINOR!%20I'd%20like%20to%20discuss%20a%20project."
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-7 h-12 rounded-xl font-bold text-sm hover:bg-green-600 transition-colors">
                <FaWhatsapp className="text-lg" /> Chat on WhatsApp
              </a>
              <Link to="/pricing"
                className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 px-7 h-12 rounded-xl font-bold text-sm hover:bg-gray-100 transition-colors">
                View Pricing <FaArrowRight size={12} />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

const ServiceDetailPage = () => {
  const structuredData = useMemo(() => ({
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'AINOR Digital Services',
    description: 'Web, mobile, e-commerce, SEO and AI services under one subscription.',
    url: 'https://myainor.com/services',
  }), []);

  return (
    <>
      <SEOHead
        title="Digital Services — Web, Mobile, E-Commerce, SEO & AI | AINOR"
        description="Comprehensive digital services designed to drive growth. Website design, custom software, mobile apps, e-commerce, SEO and AI solutions."
        canonicalUrl="https://myainor.com/services"
        structuredData={structuredData}
      />

      <FilmGrain />
      <ScrollProgress />

      <div className="bg-[#f5f5f5] min-h-screen overflow-x-hidden">
        <FloatingNav />
        <main className="w-full flex flex-col">
          <HeroSection />
          <ServiceExplorer />
          <AllServicesSection />
          <WhyChooseSection />
          <CTASection />
          <ModernFooter />
        </main>
      </div>
    </>
  );
};

export default ServiceDetailPage;
