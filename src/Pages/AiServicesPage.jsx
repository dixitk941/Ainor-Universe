import React, { useRef, useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaRobot, FaBrain, FaChartLine, FaComments, FaMagic, FaCogs, 
  FaWhatsapp, FaArrowRight, FaCheckCircle, FaLightbulb, FaRocket,
  FaShieldAlt, FaDatabase, FaCloud, FaNetworkWired, FaCode, FaClock,
  FaGlobe, FaChartBar, FaMicrochip
} from 'react-icons/fa';
import SEOHead from '../components/seo/SEOHead';
import ModernPageLayout from '../components/layout/ModernPageLayout';
import TiltCard from '../components/ui/TiltCard';
import { BlurReveal, AnimatedCounter, MagneticButton } from '../components/ui/AnimationComponents';
import { GradientText, SpotlightCard, MorphingBackground } from '../components/ui/ScrollAnimations';

const AiServicesPage = () => {
  const aiServices = [
    {
      icon: FaRobot,
      title: 'AI Chatbots & Virtual Assistants',
      desc: 'Deploy intelligent chatbots that understand context, handle complex queries, and provide 24/7 customer support across multiple channels.',
      features: ['Natural Language Processing', 'Multi-language Support', 'CRM Integration', 'Analytics Dashboard', 'Voice Recognition', 'Sentiment Analysis'],
      color: 'from-purple-500 to-indigo-600',
      stats: { value: '90%', label: 'Query Resolution' }
    },
    {
      icon: FaBrain,
      title: 'Machine Learning Solutions',
      desc: 'Custom ML models tailored to your business needs - from prediction to classification and recommendation systems that evolve with your data.',
      features: ['Custom Model Training', 'Data Analysis', 'Predictive Analytics', 'Model Optimization', 'AutoML Integration', 'Real-time Inference'],
      color: 'from-blue-500 to-cyan-600',
      stats: { value: '85%', label: 'Accuracy Rate' }
    },
    {
      icon: FaChartLine,
      title: 'AI Analytics & Insights',
      desc: 'Transform your data into actionable insights with AI-powered analytics and business intelligence tools that uncover hidden patterns.',
      features: ['Real-time Dashboards', 'Trend Analysis', 'Anomaly Detection', 'Custom Reports', 'Forecasting Models', 'Data Visualization'],
      color: 'from-green-500 to-emerald-600',
      stats: { value: '3x', label: 'Faster Insights' }
    },
    {
      icon: FaComments,
      title: 'Natural Language Processing',
      desc: 'Extract meaning from text, automate content analysis, and build intelligent document processing systems with advanced NLP.',
      features: ['Sentiment Analysis', 'Entity Recognition', 'Text Classification', 'Content Generation', 'Language Translation', 'Document Parsing'],
      color: 'from-orange-500 to-red-600',
      stats: { value: '95%', label: 'Text Accuracy' }
    },
    {
      icon: FaMagic,
      title: 'AI-Powered Automation',
      desc: 'Automate repetitive tasks and workflows with intelligent automation solutions that learn and adapt to your business processes.',
      features: ['Process Automation', 'Document Processing', 'Email Automation', 'Task Scheduling', 'Workflow Optimization', 'Smart Triggers'],
      color: 'from-pink-500 to-rose-600',
      stats: { value: '60%', label: 'Cost Reduction' }
    },
    {
      icon: FaCogs,
      title: 'Custom AI Development',
      desc: 'Got a unique AI challenge? We build custom solutions tailored to your specific business requirements with cutting-edge technology.',
      features: ['Solution Architecture', 'Model Development', 'API Integration', 'Scalable Deployment', 'MLOps Setup', 'Continuous Learning'],
      color: 'from-slate-600 to-gray-800',
      stats: { value: '100%', label: 'Custom Built' }
    },
  ];

  // Enhanced sticky scroll items for detailed AI capabilities
  const stickyScrollItems = [
    {
      icon: FaMicrochip,
      label: 'Deep Learning',
      title: 'Neural Networks That Think Like Humans',
      description: 'Our deep learning solutions leverage state-of-the-art neural architectures including transformers, CNNs, and RNNs to solve complex problems that traditional programming cannot address.',
      features: ['Image Recognition & Classification', 'Speech Recognition & Synthesis', 'Natural Language Understanding', 'Generative AI Models']
    },
    {
      icon: FaDatabase,
      label: 'Data Engineering',
      title: 'Building the Foundation for AI Success',
      description: 'Quality AI starts with quality data. Our data engineering team designs robust pipelines that clean, transform, and prepare your data for optimal model performance.',
      features: ['ETL Pipeline Design', 'Data Lake Architecture', 'Real-time Data Streaming', 'Data Quality Assurance']
    },
    {
      icon: FaCloud,
      label: 'Cloud AI',
      title: 'Scalable AI Infrastructure',
      description: 'Deploy AI models at scale with our cloud-native solutions. We optimize for performance, cost, and reliability across AWS, GCP, and Azure platforms.',
      features: ['Kubernetes Deployment', 'Serverless AI Functions', 'Auto-scaling Infrastructure', 'Multi-region Availability']
    },
    {
      icon: FaShieldAlt,
      label: 'AI Security',
      title: 'Secure & Responsible AI',
      description: 'We build AI systems with security and ethics at the core. Our models are designed to be fair, transparent, and compliant with global regulations.',
      features: ['Model Explainability', 'Bias Detection & Mitigation', 'Privacy-Preserving ML', 'Compliance Frameworks']
    },
  ];

  const useCases = [
    { title: 'E-commerce', desc: 'Product recommendations, customer service bots, inventory forecasting, dynamic pricing', icon: '🛒' },
    { title: 'Healthcare', desc: 'Patient triage bots, appointment scheduling, medical data analysis, diagnostic support', icon: '🏥' },
    { title: 'Finance', desc: 'Fraud detection, risk assessment, automated reporting, algorithmic trading', icon: '💰' },
    { title: 'Education', desc: 'Personalized learning, automated grading, student support bots, content generation', icon: '📚' },
    { title: 'Real Estate', desc: 'Property matching, market analysis, virtual tours, price prediction', icon: '🏠' },
    { title: 'HR & Recruitment', desc: 'Resume screening, candidate matching, onboarding automation, performance analytics', icon: '👥' },
    { title: 'Manufacturing', desc: 'Predictive maintenance, quality control, supply chain optimization, demand forecasting', icon: '🏭' },
    { title: 'Logistics', desc: 'Route optimization, delivery prediction, warehouse automation, fleet management', icon: '🚚' },
  ];

  const benefits = [
    { text: 'Reduce operational costs by up to 60%', icon: FaChartBar },
    { text: 'Provide 24/7 customer support without extra staff', icon: FaClock },
    { text: 'Make data-driven decisions with AI insights', icon: FaLightbulb },
    { text: 'Automate repetitive tasks and free up your team', icon: FaCogs },
    { text: 'Scale your business without proportional cost increase', icon: FaRocket },
    { text: 'Stay ahead of competition with cutting-edge tech', icon: FaGlobe },
  ];

  const stats = [
    { number: 50, suffix: '+', label: 'AI Models Deployed' },
    { number: 98, suffix: '%', label: 'Client Satisfaction' },
    { number: 10, suffix: 'x', label: 'Faster Processing' },
    { number: 24, suffix: '/7', label: 'AI Support' },
  ];

  return (
    <>
      <SEOHead 
        title="AI Services - Artificial Intelligence Solutions | AINOR"
        description="Transform your business with AINOR's AI services. Custom chatbots, machine learning, NLP, and AI automation solutions."
        canonicalUrl="https://myainor.com/ai-services"
      />

      <ModernPageLayout>
        {/* Hero Section with MorphingBackground */}
        <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-6 md:p-12 text-white overflow-hidden min-h-[80vh] flex items-center">
          <MorphingBackground className="absolute inset-0 opacity-30" />
          
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 left-20 w-40 h-40 bg-purple-500 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-10 right-10 w-60 h-60 bg-blue-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
          </div>
          
          <div className="relative z-10 w-full">
            <div className="text-center max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                <motion.div 
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full mb-8"
                >
                  <FaRobot className="text-purple-400 animate-pulse" />
                  <span className="text-sm font-semibold tracking-wide uppercase">AI-Powered Solutions</span>
                </motion.div>
                
                <BlurReveal delay={0.3}>
                  <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                    Transform Your Business with{' '}
                    <GradientText 
                      from="#a855f7" 
                      to="#3b82f6"
                      className="font-bold"
                    >
                      Artificial Intelligence
                    </GradientText>
                  </h1>
                </BlurReveal>
                
                <BlurReveal delay={0.5}>
                  <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                    From intelligent chatbots to custom ML models, we build AI solutions that automate, optimize, and scale your business to new heights.
                  </p>
                </BlurReveal>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="flex flex-wrap justify-center gap-4"
                >
                  <MagneticButton>
                    <a
                      href="https://wa.me/919667047128?text=Hi%20AINOR!%20I'm%20interested%20in%20your%20AI%20services."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-primary hover:bg-blue-700 px-8 py-4 rounded-full font-semibold transition-colors text-lg"
                    >
                      Start Your AI Journey <FaArrowRight />
                    </a>
                  </MagneticButton>
                  <MagneticButton>
                    <Link
                      to="/pricing"
                      className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 px-8 py-4 rounded-full font-semibold transition-colors backdrop-blur-sm text-lg border border-white/20"
                    >
                      View AI Packages
                    </Link>
                  </MagneticButton>
                </motion.div>
              </motion.div>
            </div>

            {/* Stats Row */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
            >
              {stats.map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                    <AnimatedCounter target={stat.number} duration={2} />
                    <span>{stat.suffix}</span>
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* AI Services Grid with TiltCard */}
        <section className="bg-white rounded-3xl p-6 md:p-10 shadow-soft">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-sm font-semibold text-primary tracking-wider uppercase mb-2 block">Our Expertise</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">AI Services We Offer</h2>
              <p className="text-gray-500 max-w-2xl mx-auto">Comprehensive AI solutions designed to transform every aspect of your business operations</p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiServices.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <TiltCard tiltAmount={8} scale={1.02}>
                  <SpotlightCard className="h-full p-6 rounded-2xl border border-gray-100 bg-white">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} text-white flex items-center justify-center mb-5`}>
                      <service.icon className="text-2xl" />
                    </div>
                    
                    <h3 className="font-bold text-xl mb-3">{service.title}</h3>
                    <p className="text-sm text-gray-500 mb-5">{service.desc}</p>
                    
                    {/* Stats Badge */}
                    <div className="inline-flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-full mb-5">
                      <span className="text-lg font-bold text-primary">{service.stats.value}</span>
                      <span className="text-xs text-gray-500">{service.stats.label}</span>
                    </div>
                    
                    <ul className="space-y-2">
                      {service.features.map((feature, fIdx) => (
                        <li key={fIdx} className="text-sm text-gray-600 flex items-center gap-2">
                          <FaCheckCircle className="text-green-500 text-xs flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </SpotlightCard>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Sticky Scroll Section - AI Capabilities Deep Dive */}
        <StickyScrollSection items={stickyScrollItems} />

        {/* Industry Use Cases with Enhanced Design */}
        <section className="grid lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-soft">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
                <FaLightbulb className="text-xl" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">Industry Solutions</h2>
                <p className="text-sm text-gray-500">AI tailored for your sector</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {useCases.map((useCase, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <TiltCard tiltAmount={5} scale={1.02}>
                    <div className="p-4 rounded-xl bg-gray-50 hover:bg-blue-50 transition-colors h-full">
                      <span className="text-2xl mb-2 block">{useCase.icon}</span>
                      <h3 className="font-semibold mb-1 text-sm">{useCase.title}</h3>
                      <p className="text-xs text-gray-500 leading-relaxed">{useCase.desc}</p>
                    </div>
                  </TiltCard>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary via-blue-600 to-indigo-600 rounded-3xl p-6 md:p-8 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute -top-20 -right-20 w-60 h-60 border-2 border-white rounded-full" />
              <div className="absolute -bottom-20 -left-20 w-80 h-80 border-2 border-white rounded-full" />
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                  <FaRocket className="text-xl" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Why Choose AI?</h2>
                  <p className="text-sm text-white/70">Benefits that matter</p>
                </div>
              </div>
              
              <ul className="space-y-5">
                {benefits.map((benefit, idx) => (
                  <motion.li 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="text-white" />
                    </div>
                    <span className="text-lg">{benefit.text}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* AI Development Process */}
        <section className="bg-white rounded-3xl p-6 md:p-12 shadow-soft">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-sm font-semibold text-primary tracking-wider uppercase mb-2 block">Our Methodology</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">AI Development Process</h2>
              <p className="text-gray-500">From concept to deployment in weeks, not months</p>
            </motion.div>
          </div>

          <ProcessTimeline />
        </section>

        {/* Technologies Section */}
        <section className="bg-gray-50 rounded-3xl p-6 md:p-10">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold mb-3">Technologies We Use</h2>
            <p className="text-gray-500">Cutting-edge tools for cutting-edge solutions</p>
          </div>
          <TechStack />
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 rounded-3xl p-8 md:p-16 text-center text-white relative overflow-hidden">
          <MorphingBackground className="absolute inset-0 opacity-20" />
          
          <div className="absolute inset-0 opacity-20">
            <div className="absolute -top-10 -left-10 w-40 h-40 border-2 border-white rounded-full" />
            <div className="absolute -bottom-10 -right-10 w-60 h-60 border-2 border-white rounded-full" />
            <div className="absolute top-1/2 left-1/4 w-20 h-20 border-2 border-white rounded-full" />
          </div>
          
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <FaRobot className="text-5xl mx-auto mb-6 text-white/80" />
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Ready to Embrace AI?</h2>
              <p className="text-white/80 mb-10 max-w-2xl mx-auto text-lg">
                Let's discuss how AI can transform your business. Get a free consultation with our AI experts and discover the possibilities.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <MagneticButton>
                  <a
                    href="https://wa.me/919667047128?text=Hi%20AINOR!%20I'd%20like%20to%20discuss%20AI%20solutions%20for%20my%20business."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-white text-purple-600 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors text-lg"
                  >
                    <FaWhatsapp className="text-green-500 text-xl" /> Book Free Consultation
                  </a>
                </MagneticButton>
                <MagneticButton>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 bg-white/10 border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-colors text-lg"
                  >
                    Schedule a Demo <FaArrowRight />
                  </Link>
                </MagneticButton>
              </div>
            </motion.div>
          </div>
        </section>
      </ModernPageLayout>
    </>
  );
};

// Helper components for transforms - must be at component level, not inside callbacks
const StickyVisualCard = ({ currentIndex, totalItems }) => {
  return (
    <div className="relative perspective-1000">
      <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary to-purple-600 p-1 shadow-2xl">
        <div className="w-full h-full rounded-3xl bg-white flex flex-col items-center justify-center p-8">
          <motion.div
            animate={{ rotate: currentIndex * 90, scale: [1, 1.1, 1] }}
            transition={{ duration: 0.4 }}
            className="text-7xl mb-6"
          >
            <FaBrain className="text-primary" />
          </motion.div>
          <h3 className="text-2xl font-bold text-center mb-2">Advanced AI</h3>
          <p className="text-gray-500 text-center">Powering the future of business</p>
          
          {/* Animated progress indicators */}
          <div className="mt-8 w-full space-y-3">
            {['Deep Learning', 'NLP', 'Computer Vision', 'Automation'].map((label, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <motion.div
                    className="bg-gradient-to-r from-primary to-purple-600 h-2 rounded-full"
                    animate={{ width: idx <= currentIndex ? '100%' : '0%' }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
                <span className="text-xs text-gray-500 w-28">{label}</span>
              </div>
            ))}
          </div>
          
          {/* Progress dots */}
          <div className="flex gap-2 mt-6">
            {Array.from({ length: totalItems }).map((_, idx) => (
              <div
                key={idx}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === currentIndex 
                    ? 'w-8 bg-primary' 
                    : idx < currentIndex 
                      ? 'w-4 bg-primary/60'
                      : 'w-4 bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Floating elements */}
      <motion.div 
        animate={{ rotate: currentIndex * 45, x: currentIndex * 10 }}
        className="absolute -top-8 -right-8 w-32 h-32 bg-purple-200 rounded-full blur-2xl opacity-60"
      />
      <motion.div 
        animate={{ rotate: -currentIndex * 45, y: -currentIndex * 10 }}
        className="absolute -bottom-8 -left-8 w-40 h-40 bg-blue-200 rounded-full blur-2xl opacity-60"
      />
    </div>
  );
};

// Scroll-Locking Sticky Section for AI Capabilities
const StickyScrollSection = ({ items }) => {
  const sectionRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLocked, setIsLocked] = useState(false);
  const [hasCompletedForward, setHasCompletedForward] = useState(false);
  const isScrolling = useRef(false);
  const lastScrollY = useRef(0);

  const totalItems = items.length;

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

  const currentItem = items[currentIndex];

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen bg-[#F5F5F5] rounded-3xl"
      onTouchStart={handleTouchStart}
    >
      <div className="h-screen flex items-center py-8">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Sticky Visual Side */}
            <div className="hidden lg:block">
              <StickyVisualCard currentIndex={currentIndex} totalItems={totalItems} />
            </div>

            {/* Scrolling Content Side */}
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
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-purple-600 text-white flex items-center justify-center text-2xl mb-6 shadow-lg">
                    <currentItem.icon />
                  </div>
                  <span className="text-sm font-semibold text-primary tracking-wider uppercase mb-3 block">
                    {currentItem.label}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-bold text-[#111318] mb-5">
                    {currentItem.title}
                  </h3>
                  <p className="text-lg text-gray-500 leading-relaxed mb-8">
                    {currentItem.description}
                  </p>
                  <ul className="space-y-3">
                    {currentItem.features.map((feature, fIdx) => (
                      <motion.li 
                        key={fIdx}
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.4, delay: fIdx * 0.1 }}
                        className="flex items-center gap-3 text-gray-600"
                      >
                        <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0">
                          <FaCheckCircle className="text-xs" />
                        </div>
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
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

// Process Timeline Component
const ProcessTimeline = () => {
  const steps = [
    { step: '01', title: 'Discovery', desc: 'Understand your business needs, data landscape, and define AI opportunities that align with your goals.', icon: FaLightbulb },
    { step: '02', title: 'Design', desc: 'Architect the solution, select appropriate models, and create a comprehensive implementation roadmap.', icon: FaNetworkWired },
    { step: '03', title: 'Develop', desc: 'Build, train, and rigorously test your AI models with continuous optimization for peak performance.', icon: FaCode },
    { step: '04', title: 'Deploy', desc: 'Launch to production, set up monitoring, and establish continuous improvement pipelines.', icon: FaRocket },
  ];

  return (
    <div className="relative">
      {/* Connection Line */}
      <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 -translate-y-1/2" />
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.15 }}
            className="relative"
          >
            <TiltCard tiltAmount={5}>
              <div className="text-center p-6 bg-gray-50 rounded-2xl relative">
                {/* Step number with icon */}
                <motion.div 
                  whileInView={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5, delay: idx * 0.15 + 0.3 }}
                  className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-purple-600 text-white flex flex-col items-center justify-center mx-auto mb-5 shadow-lg relative z-10"
                >
                  <item.icon className="text-2xl mb-1" />
                  <span className="text-xs font-bold">{item.step}</span>
                </motion.div>
                
                <h3 className="font-bold text-lg mb-3">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// Tech Stack Component
const TechStack = () => {
  const technologies = [
    { name: 'TensorFlow', icon: '🧠' },
    { name: 'PyTorch', icon: '🔥' },
    { name: 'OpenAI', icon: '🤖' },
    { name: 'LangChain', icon: '🔗' },
    { name: 'Hugging Face', icon: '🤗' },
    { name: 'AWS SageMaker', icon: '☁️' },
    { name: 'Google Cloud AI', icon: '🌐' },
    { name: 'Azure ML', icon: '💎' },
    { name: 'Python', icon: '🐍' },
    { name: 'FastAPI', icon: '⚡' },
    { name: 'Docker', icon: '🐳' },
    { name: 'Kubernetes', icon: '☸️' },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {technologies.map((tech, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.05 }}
        >
          <TiltCard tiltAmount={10} scale={1.05}>
            <div className="flex items-center gap-2 bg-white px-4 py-3 rounded-xl shadow-soft">
              <span className="text-xl">{tech.icon}</span>
              <span className="font-medium text-gray-700">{tech.name}</span>
            </div>
          </TiltCard>
        </motion.div>
      ))}
    </div>
  );
};

export default AiServicesPage;
