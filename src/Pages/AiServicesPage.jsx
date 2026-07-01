import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import {
  FaRobot, FaBrain, FaChartLine, FaComments, FaMagic, FaCogs,
  FaWhatsapp, FaArrowRight, FaCheckCircle, FaLightbulb, FaRocket,
  FaShieldAlt, FaDatabase, FaCloud, FaNetworkWired, FaCode, FaClock,
  FaGlobe, FaChartBar, FaMicrochip
} from 'react-icons/fa';

import SEOHead from '../components/seo/SEOHead';
import SEOText from '../components/seo/SEOText';
import FloatingNav from '../components/layout/FloatingNav';
import ModernFooter from '../components/layout/ModernFooter';
import { AnimatedCounter } from '../components/ui/AnimationComponents';
import { AnimatedMesh, FilmGrain, ChapterLabel } from '../components/ui/CinematicEffects';

const ease = [0.22, 1, 0.36, 1];

const aiServices = [
  {
    icon: FaRobot,
    title: 'AI Chatbots & Virtual Assistants',
    desc: 'Deploy intelligent chatbots that understand context, handle complex queries, and provide 24/7 customer support across multiple channels.',
    features: ['Natural Language Processing', 'Multi-language Support', 'CRM Integration', 'Analytics Dashboard', 'Voice Recognition', 'Sentiment Analysis'],
    accent: '#6366f1',
    stats: { value: '90%', label: 'Query Resolution' }
  },
  {
    icon: FaBrain,
    title: 'Machine Learning Solutions',
    desc: 'Custom ML models tailored to your business needs - from prediction to classification and recommendation systems that evolve with your data.',
    features: ['Custom Model Training', 'Data Analysis', 'Predictive Analytics', 'Model Optimization', 'AutoML Integration', 'Real-time Inference'],
    accent: '#0ea5e9',
    stats: { value: '85%', label: 'Accuracy Rate' }
  },
  {
    icon: FaChartLine,
    title: 'AI Analytics & Insights',
    desc: 'Transform your data into actionable insights with AI-powered analytics and business intelligence tools that uncover hidden patterns.',
    features: ['Real-time Dashboards', 'Trend Analysis', 'Anomaly Detection', 'Custom Reports', 'Forecasting Models', 'Data Visualization'],
    accent: '#22c55e',
    stats: { value: '3x', label: 'Faster Insights' }
  },
  {
    icon: FaComments,
    title: 'Natural Language Processing',
    desc: 'Extract meaning from text, automate content analysis, and build intelligent document processing systems with advanced NLP.',
    features: ['Sentiment Analysis', 'Entity Recognition', 'Text Classification', 'Content Generation', 'Language Translation', 'Document Parsing'],
    accent: '#f97316',
    stats: { value: '95%', label: 'Text Accuracy' }
  },
  {
    icon: FaMagic,
    title: 'AI-Powered Automation',
    desc: 'Automate repetitive tasks and workflows with intelligent automation solutions that learn and adapt to your business processes.',
    features: ['Process Automation', 'Document Processing', 'Email Automation', 'Task Scheduling', 'Workflow Optimization', 'Smart Triggers'],
    accent: '#ec4899',
    stats: { value: '60%', label: 'Cost Reduction' }
  },
  {
    icon: FaCogs,
    title: 'Custom AI Development',
    desc: 'Got a unique AI challenge? We build custom solutions tailored to your specific business requirements with cutting-edge technology.',
    features: ['Solution Architecture', 'Model Development', 'API Integration', 'Scalable Deployment', 'MLOps Setup', 'Continuous Learning'],
    accent: '#a855f7',
    stats: { value: '100%', label: 'Custom Built' }
  },
];

const capabilities = [
  {
    icon: FaMicrochip,
    label: 'Deep Learning',
    title: 'Neural Networks That Think Like Humans',
    description: 'Our deep learning solutions leverage state-of-the-art neural architectures including transformers, CNNs, and RNNs to solve complex problems that traditional programming cannot address.',
    features: ['Image Recognition & Classification', 'Speech Recognition & Synthesis', 'Natural Language Understanding', 'Generative AI Models'],
    accent: '#6366f1'
  },
  {
    icon: FaDatabase,
    label: 'Data Engineering',
    title: 'Building the Foundation for AI Success',
    description: 'Quality AI starts with quality data. Our data engineering team designs robust pipelines that clean, transform, and prepare your data for optimal model performance.',
    features: ['ETL Pipeline Design', 'Data Lake Architecture', 'Real-time Data Streaming', 'Data Quality Assurance'],
    accent: '#0ea5e9'
  },
  {
    icon: FaCloud,
    label: 'Cloud AI',
    title: 'Scalable AI Infrastructure',
    description: 'Deploy AI models at scale with our cloud-native solutions. We optimize for performance, cost, and reliability across AWS, GCP, and Azure platforms.',
    features: ['Kubernetes Deployment', 'Serverless AI Functions', 'Auto-scaling Infrastructure', 'Multi-region Availability'],
    accent: '#22c55e'
  },
  {
    icon: FaShieldAlt,
    label: 'AI Security',
    title: 'Secure & Responsible AI',
    description: 'We build AI systems with security and ethics at the core. Our models are designed to be fair, transparent, and compliant with global regulations.',
    features: ['Model Explainability', 'Bias Detection & Mitigation', 'Privacy-Preserving ML', 'Compliance Frameworks'],
    accent: '#a855f7'
  },
];

const useCases = [
  { title: 'E-commerce', desc: 'Product recommendations, service bots, inventory forecasting, dynamic pricing', icon: '🛒' },
  { title: 'Healthcare', desc: 'Patient triage bots, appointment scheduling, medical data analysis, diagnostics', icon: '🏥' },
  { title: 'Finance', desc: 'Fraud detection, risk assessment, automated reporting, algorithmic trading', icon: '💰' },
  { title: 'Education', desc: 'Personalized learning, automated grading, student support bots, content generation', icon: '📚' },
  { title: 'Real Estate', desc: 'Property matching, market analysis, virtual tours, price prediction', icon: '🏠' },
  { title: 'HR & Recruitment', desc: 'Resume screening, candidate matching, onboarding automation, analytics', icon: '👥' },
  { title: 'Manufacturing', desc: 'Predictive maintenance, quality control, supply chain optimization', icon: '🏭' },
  { title: 'Logistics', desc: 'Route optimization, delivery prediction, warehouse automation, fleet mgmt', icon: '🚚' },
];

const benefits = [
  { text: 'Reduce operational costs by up to 60%', icon: FaChartBar },
  { text: 'Provide 24/7 customer support without extra staff', icon: FaClock },
  { text: 'Make data-driven decisions with AI insights', icon: FaLightbulb },
  { text: 'Automate repetitive tasks and free up your team', icon: FaCogs },
  { text: 'Scale your business without proportional cost increase', icon: FaRocket },
  { text: 'Stay ahead of competition with cutting-edge tech', icon: FaGlobe },
];

const heroStats = [
  { number: 50, suffix: '+', label: 'AI Models Deployed' },
  { number: 98, suffix: '%', label: 'Client Satisfaction' },
  { number: 10, suffix: 'x', label: 'Faster Processing' },
  { number: 24, suffix: '/7', label: 'AI Support' },
];

const processSteps = [
  { step: '01', title: 'Discovery', desc: 'Understand your business needs, data landscape, and define AI opportunities that align with your goals.', icon: FaLightbulb, accent: '#6366f1' },
  { step: '02', title: 'Design', desc: 'Architect the solution, select appropriate models, and create a comprehensive implementation roadmap.', icon: FaNetworkWired, accent: '#0ea5e9' },
  { step: '03', title: 'Develop', desc: 'Build, train, and rigorously test your AI models with continuous optimization for peak performance.', icon: FaCode, accent: '#22c55e' },
  { step: '04', title: 'Deploy', desc: 'Launch to production, set up monitoring, and establish continuous improvement pipelines.', icon: FaRocket, accent: '#a855f7' },
];

const technologies = [
  { name: 'TensorFlow', icon: '🧠' }, { name: 'PyTorch', icon: '🔥' }, { name: 'OpenAI', icon: '🤖' },
  { name: 'LangChain', icon: '🔗' }, { name: 'Hugging Face', icon: '🤗' }, { name: 'AWS SageMaker', icon: '☁️' },
  { name: 'Google Cloud AI', icon: '🌐' }, { name: 'Azure ML', icon: '💎' }, { name: 'Python', icon: '🐍' },
  { name: 'FastAPI', icon: '⚡' }, { name: 'Docker', icon: '🐳' }, { name: 'Kubernetes', icon: '☸️' },
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

const HeroSection = () => (
  <section className="relative min-h-[92vh] flex items-center bg-white overflow-hidden pt-24 pb-16 md:pt-28">
    <AnimatedMesh light />
    <div className="absolute inset-0 pointer-events-none opacity-[0.4]"
      style={{ backgroundImage: 'radial-gradient(circle, #e5e7eb 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
    <div className="absolute left-0 bottom-0 text-[clamp(120px,20vw,240px)] font-black leading-none
                    text-gray-900/[0.025] select-none pointer-events-none tracking-tighter">
      AI
    </div>

    <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
      <div className="max-w-3xl flex flex-col gap-6 md:gap-8">
        <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5, ease }}>
          <div className="inline-flex items-center gap-2 border border-gray-200 bg-gray-50 px-3 py-1.5 rounded-full">
            <FaRobot className="text-indigo-500" size={13} />
            <span className="text-[11px] font-bold text-gray-500 tracking-[0.2em] uppercase">AI-Powered Solutions</span>
          </div>
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease }}
          className="text-[clamp(2.2rem,6vw,4.5rem)] font-black leading-[1.05] tracking-tight text-[#111318]">
          Transform Your Business with{' '}
          <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
            Artificial Intelligence.
          </span>
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6, ease }}
          className="text-lg md:text-xl text-gray-500 max-w-2xl leading-relaxed">
          From intelligent chatbots to custom ML models, we build AI solutions that
          automate, optimize, and scale your business to new heights.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.6, ease }}
          className="flex flex-wrap gap-3">
          <motion.a href="https://wa.me/917579500264?text=Hi%20AINOR!%20I'm%20interested%20in%20your%20AI%20services."
            target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 bg-[#111318] text-white h-11 px-7 rounded-xl font-bold text-sm hover:bg-gray-800 transition-colors shadow-md shadow-gray-900/10">
            Start Your AI Journey <FaArrowRight size={11} />
          </motion.a>
          <motion.a href="/pricing" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 bg-gray-100 text-gray-800 h-11 px-7 rounded-xl font-bold text-sm hover:bg-gray-200 transition-colors border border-gray-200">
            View AI Packages
          </motion.a>
        </motion.div>

        <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
          transition={{ delay: 0.6, duration: 0.8, ease }}
          className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent origin-left" />

        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6, ease }}
          className="grid grid-cols-2 sm:flex sm:items-center gap-5 sm:gap-8">
          {heroStats.map((s) => (
            <div key={s.label} className="flex flex-col">
              <span className="text-xl sm:text-2xl font-black text-[#111318] leading-none">
                <AnimatedCounter value={s.number} duration={1.2} />{s.suffix}
              </span>
              <span className="text-[11px] text-gray-400 mt-0.5 uppercase tracking-wider">{s.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

const ServicesGrid = () => (
  <section className="relative bg-[#f5f5f5] py-20 md:py-28 overflow-hidden">
    <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
      <ChapterLabel num={1} title="Our Expertise" light />

      <motion.h2 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.7, ease }}
        className="text-[clamp(2.2rem,5vw,3.6rem)] font-black leading-[1.08] tracking-tight text-gray-900 mb-12">
        AI Services{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
          We Offer.
        </span>
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
        {aiServices.map((s, i) => (
          <motion.div key={i}
            initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.55, delay: i * 0.07, ease }}
            className="group relative bg-white border border-gray-200 hover:border-gray-300 hover:shadow-md
                       rounded-2xl p-6 transition-all duration-300 overflow-hidden">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"
              style={{ background: `radial-gradient(circle at 0% 0%, ${s.accent}12 0%, transparent 60%)` }} />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: `${s.accent}18`, color: s.accent }}>
                <s.icon className="text-xl" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-900">{s.title}</h3>
              <p className="text-sm text-gray-500 mb-5 leading-relaxed">{s.desc}</p>

              <div className="inline-flex items-center gap-2 bg-gray-50 border border-gray-100 px-3 py-1.5 rounded-full mb-5">
                <span className="text-base font-black" style={{ color: s.accent }}>{s.stats.value}</span>
                <span className="text-xs text-gray-500">{s.stats.label}</span>
              </div>

              <ul className="space-y-2">
                {s.features.map((f, fIdx) => (
                  <li key={fIdx} className="text-sm text-gray-600 flex items-center gap-2">
                    <FaCheckCircle className="text-green-500 text-xs flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const CapabilitiesSection = () => {
  const [active, setActive] = useState(0);
  const item = capabilities[active];
  const Icon = item.icon;

  return (
    <section className="relative bg-white py-20 md:py-28 overflow-hidden">
      <AnimatedMesh light />
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <ChapterLabel num={2} title="AI Capabilities" light />

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Left — selector list */}
          <div className="flex flex-col gap-2.5">
            {capabilities.map((cap, idx) => {
              const CapIcon = cap.icon;
              const on = active === idx;
              return (
                <button key={idx} onClick={() => setActive(idx)}
                  className={`flex items-center gap-4 p-4 rounded-2xl text-left transition-all border ${
                    on ? 'bg-gray-50 border-gray-300 shadow-sm' : 'bg-white border-gray-200 hover:bg-gray-50'
                  }`}>
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors"
                    style={{ backgroundColor: on ? cap.accent : `${cap.accent}18`, color: on ? '#fff' : cap.accent }}>
                    <CapIcon className="text-lg" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-gray-400 block">
                      {cap.label}
                    </span>
                    <span className="font-bold text-gray-900 text-sm">{cap.title}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right — detail panel */}
          <div className="lg:sticky lg:top-28">
            <AnimatePresence mode="wait">
              <motion.div key={active}
                initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -24 }}
                transition={{ duration: 0.4, ease }}
                className="relative rounded-3xl p-8 md:p-10 text-white overflow-hidden"
                style={{ background: `linear-gradient(135deg, ${item.accent}, ${item.accent}bb)` }}>
                <div className="absolute -top-20 -right-20 w-60 h-60 bg-white/10 rounded-full blur-3xl" />
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mb-6">
                    <Icon className="text-3xl text-white" />
                  </div>
                  <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-white/70 block mb-3">
                    {item.label}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-black tracking-tight mb-4">{item.title}</h3>
                  <p className="text-white/85 leading-relaxed mb-8">{item.description}</p>
                  <ul className="space-y-3">
                    {item.features.map((f, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-3 text-white/90">
                        <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                          <FaCheckCircle className="text-xs" />
                        </div>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

const IndustriesSection = () => (
  <section className="relative bg-[#f5f5f5] py-20 md:py-28 overflow-hidden">
    <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
      <ChapterLabel num={3} title="Industry Solutions" light />

      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        <div>
          <motion.h2 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7, ease }}
            className="text-[clamp(2rem,4.5vw,3.2rem)] font-black leading-[1.1] tracking-tight text-gray-900 mb-4">
            AI tailored for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              your sector.
            </span>
          </motion.h2>
          <p className="text-gray-500 mb-8 leading-relaxed">
            Whatever you build, there's an AI advantage waiting to be unlocked.
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            {useCases.map((u, idx) => (
              <motion.div key={idx}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.45, delay: idx * 0.05, ease }}
                className="p-4 rounded-2xl bg-white border border-gray-200 hover:shadow-md transition-all">
                <span className="text-2xl mb-2 block">{u.icon}</span>
                <h3 className="font-bold mb-1 text-sm text-gray-900">{u.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{u.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Benefits card */}
        <div className="relative rounded-3xl bg-[#111318] p-8 md:p-10 text-white overflow-hidden lg:sticky lg:top-28">
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-indigo-600/30 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-purple-600/30 rounded-full blur-3xl" />
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                <FaRocket className="text-xl text-indigo-400" />
              </div>
              <div>
                <h2 className="text-2xl font-black tracking-tight">Why Choose AI?</h2>
                <p className="text-sm text-gray-400">Benefits that matter</p>
              </div>
            </div>
            <ul className="space-y-4">
              {benefits.map((b, idx) => (
                <motion.li key={idx}
                  initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.45, delay: idx * 0.08, ease }}
                  className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                    <b.icon className="text-white text-sm" />
                  </div>
                  <span className="text-gray-200 leading-relaxed">{b.text}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ProcessSection = () => (
  <section className="relative bg-white py-20 md:py-28 overflow-hidden">
    <AnimatedMesh light />
    <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
      <ChapterLabel num={4} title="Our Methodology" light />

      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
        <motion.h2 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7, ease }}
          className="text-[clamp(2.2rem,5vw,3.6rem)] font-black leading-[1.08] tracking-tight text-gray-900">
          AI development,{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
            demystified.
          </span>
        </motion.h2>
        <p className="text-gray-500 lg:max-w-xs lg:text-right leading-relaxed">
          From concept to deployment in weeks, not months.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {processSteps.map((item, idx) => (
          <motion.div key={idx}
            initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.55, delay: idx * 0.1, ease }}
            className="relative bg-gray-50 border border-gray-200 rounded-2xl p-6 hover:shadow-md transition-all">
            <div className="w-14 h-14 rounded-2xl text-white flex flex-col items-center justify-center mb-5"
              style={{ backgroundColor: item.accent }}>
              <item.icon className="text-lg" />
            </div>
            <span className="text-xs font-black text-gray-300 tracking-widest block mb-1">{item.step}</span>
            <h3 className="font-bold text-lg mb-2 text-gray-900">{item.title}</h3>
            <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const TechSection = () => (
  <section className="relative bg-[#f5f5f5] py-20 md:py-28 overflow-hidden">
    <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
      <ChapterLabel num={5} title="Tech Stack" light />
      <motion.h2 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.7, ease }}
        className="text-[clamp(2rem,4.5vw,3.2rem)] font-black leading-[1.08] tracking-tight text-gray-900 mb-3">
        Cutting-edge tools for{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
          cutting-edge solutions.
        </span>
      </motion.h2>
      <p className="text-gray-500 mb-10">The frameworks and platforms we trust to ship production AI.</p>

      <div className="flex flex-wrap gap-2.5">
        {technologies.map((tech, idx) => (
          <motion.div key={idx}
            initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }} transition={{ duration: 0.4, delay: idx * 0.04, ease }}
            className="flex items-center gap-2 bg-white border border-gray-200 px-4 py-3 rounded-xl hover:shadow-md hover:border-gray-300 transition-all">
            <span className="text-xl">{tech.icon}</span>
            <span className="font-semibold text-gray-700 text-sm">{tech.name}</span>
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
            <FaRobot className="text-4xl mx-auto mb-6 text-indigo-400" />
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4">Ready to Embrace AI?</h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto leading-relaxed">
              Let's discuss how AI can transform your business. Get a free consultation with
              our AI experts and discover the possibilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="https://wa.me/917579500264?text=Hi%20AINOR!%20I'd%20like%20to%20discuss%20AI%20solutions%20for%20my%20business."
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-7 h-12 rounded-xl font-bold text-sm hover:bg-green-600 transition-colors">
                <FaWhatsapp className="text-lg" /> Book Free Consultation
              </a>
              <Link to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 px-7 h-12 rounded-xl font-bold text-sm hover:bg-gray-100 transition-colors">
                Schedule a Demo <FaArrowRight size={12} />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

const AiServicesPage = () => {
  const structuredData = useMemo(() => ({
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'AINOR AI Services',
    description: 'Custom AI chatbots, machine learning, NLP, and AI automation solutions.',
    url: 'https://myainor.com/ai-services',
  }), []);

  return (
    <>
      <SEOHead
        title="AI Services — Chatbots, Machine Learning & Automation | AINOR"
        description="Transform your business with AINOR's AI services. Custom chatbots, machine learning, NLP, and AI automation solutions."
        canonicalUrl="https://myainor.com/ai-services"
        structuredData={structuredData}
      />

      <FilmGrain />
      <ScrollProgress />

      <div className="bg-[#f5f5f5] min-h-screen overflow-x-hidden">
        <FloatingNav />
        <main className="w-full flex flex-col">
          <HeroSection />
          <ServicesGrid />
          <CapabilitiesSection />
          <IndustriesSection />
          <ProcessSection />
          <TechSection />
          <SEOText page="ai-services" />
          <CTASection />
          <ModernFooter />
        </main>
      </div>
    </>
  );
};

export default AiServicesPage;
