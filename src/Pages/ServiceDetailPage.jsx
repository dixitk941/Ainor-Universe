import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { 
  FaWhatsapp, FaLaptopCode, FaMobileAlt, FaShoppingCart, FaSearch, FaCode, 
  FaCheck, FaArrowRight, FaRocket, FaStar, FaClock, FaShieldAlt,
  FaLightbulb, FaChartLine, FaBrain, FaHeadset, FaCogs
} from 'react-icons/fa';
import SEOHead from '../components/seo/SEOHead';
import ModernPageLayout from '../components/layout/ModernPageLayout';
import TiltCard from '../components/ui/TiltCard';
import { BlurReveal, MagneticButton, StaggerContainer, StaggerItem } from '../components/ui/AnimationComponents';
import { GradientText, SpotlightCard, MorphingBackground } from '../components/ui/ScrollAnimations';

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
    color: 'blue',
    gradient: 'from-blue-500 to-cyan-500',
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
    color: 'purple',
    gradient: 'from-purple-500 to-pink-500',
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
    color: 'green',
    gradient: 'from-green-500 to-emerald-500',
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
    color: 'orange',
    gradient: 'from-orange-500 to-red-500',
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
    color: 'pink',
    gradient: 'from-pink-500 to-rose-500',
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
    color: 'indigo',
    gradient: 'from-indigo-500 to-purple-500',
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

const colorMap = {
  blue: { bg: 'bg-blue-50', text: 'text-primary', border: 'border-blue-100', ring: 'ring-blue-500' },
  purple: { bg: 'bg-purple-50', text: 'text-purple-600', border: 'border-purple-100', ring: 'ring-purple-500' },
  green: { bg: 'bg-green-50', text: 'text-green-600', border: 'border-green-100', ring: 'ring-green-500' },
  orange: { bg: 'bg-orange-50', text: 'text-orange-600', border: 'border-orange-100', ring: 'ring-orange-500' },
  pink: { bg: 'bg-pink-50', text: 'text-pink-600', border: 'border-pink-100', ring: 'ring-pink-500' },
  indigo: { bg: 'bg-indigo-50', text: 'text-indigo-600', border: 'border-indigo-100', ring: 'ring-indigo-500' },
};

// Animated Counter Component (inline to fix NaN issue)
const Counter = ({ value, suffix = '', prefix = '' }) => {
  const [count, setCount] = React.useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  React.useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = parseInt(value) || 0;
      if (end === 0) {
        setCount(0);
        return;
      }
      const duration = 2000;
      const increment = end / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  );
};

const ServiceDetailPage = () => {
  const [selectedService, setSelectedService] = useState(servicesData[0]);

  const stats = [
    { number: 50, suffix: '+', label: 'Projects Delivered', icon: FaRocket },
    { number: 100, suffix: '%', label: 'Client Satisfaction', icon: FaStar },
    { number: 48, suffix: 'h', label: 'Response Time', icon: FaClock, prefix: '<' },
    { number: 6, suffix: '+', label: 'Service Categories', icon: FaCogs },
  ];

  const whyChooseUs = [
    { icon: FaShieldAlt, title: 'Quality Guaranteed', desc: 'We stand behind our work with a satisfaction guarantee' },
    { icon: FaHeadset, title: '24/7 Support', desc: 'Always available via WhatsApp for your queries' },
    { icon: FaChartLine, title: 'Results Driven', desc: 'We focus on delivering measurable business outcomes' },
    { icon: FaLightbulb, title: 'Innovation First', desc: 'Using the latest technologies and best practices' },
  ];

  return (
    <>
      <SEOHead
        title={`${selectedService.title} Services | AINOR Digital Solutions`}
        description={selectedService.shortDesc}
        canonicalUrl="https://myainor.com/services"
      />

      <ModernPageLayout>
        {/* Hero Section */}
        <section className="relative bg-white rounded-3xl p-6 md:p-12 lg:p-16 shadow-soft overflow-hidden">
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-gradient-to-br from-blue-100 to-purple-100 rounded-full blur-3xl opacity-60" />
          <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] bg-gradient-to-br from-green-100 to-cyan-100 rounded-full blur-3xl opacity-60" />
          
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-10"
            >
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
                className="inline-flex items-center gap-2 bg-gray-50 border border-gray-100 px-4 py-2 rounded-full mb-6"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                </span>
                <span className="text-sm font-semibold text-gray-600 tracking-wide uppercase">Our Expertise</span>
              </motion.div>
              
              <BlurReveal delay={0.2}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#111318] mb-6">
                  Digital Services That{' '}
                  <GradientText from="#135bec" to="#8b5cf6" className="font-bold">
                    Drive Growth
                  </GradientText>
                </h1>
              </BlurReveal>
              
              <BlurReveal delay={0.4}>
                <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto">
                  Comprehensive digital solutions designed to transform your business and help you achieve your goals.
                </p>
              </BlurReveal>
            </motion.div>

            {/* Service Navigation Pills */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap justify-center gap-3"
            >
              {servicesData.map((service) => {
                const ServiceIcon = service.icon;
                return (
                  <MagneticButton key={service.id}>
                    <button
                      onClick={() => setSelectedService(service)}
                      className={`flex items-center gap-2 px-5 py-3 rounded-full font-semibold text-sm transition-all ${
                        selectedService.id === service.id
                          ? 'bg-black text-white shadow-lg scale-105'
                          : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                      }`}
                    >
                      <ServiceIcon className={selectedService.id === service.id ? 'text-white' : colorMap[service.color].text} />
                      <span className="hidden sm:inline">{service.title}</span>
                    </button>
                  </MagneticButton>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Stats Row */}
        <section className="py-4">
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, idx) => (
              <StaggerItem key={idx}>
                <TiltCard tiltAmount={5} scale={1.02}>
                  <SpotlightCard className="bg-white rounded-2xl p-5 shadow-soft text-center h-full">
                    <div className="w-10 h-10 mx-auto mb-3 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                      <stat.icon className="text-lg" />
                    </div>
                    <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                      <Counter value={stat.number} prefix={stat.prefix || ''} suffix={stat.suffix} />
                    </div>
                    <div className="text-xs text-gray-500">{stat.label}</div>
                  </SpotlightCard>
                </TiltCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>

        {/* Selected Service Details - Simple layout without complex sticky */}
        <ServiceDetailSection service={selectedService} colorMap={colorMap} />

        {/* All Services Grid */}
        <section className="pt-10">
          <div className="text-center mb-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-sm font-semibold text-primary tracking-wider uppercase mb-2 block">Explore</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">All Our Services</h2>
              <p className="text-gray-500">Click on any service to learn more</p>
            </motion.div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesData.map((service, idx) => {
              const ServiceIcon = service.icon;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <div 
                    onClick={() => window.location.href = `/service/${service.slug}`}
                    className={`bg-white p-6 rounded-2xl shadow-soft border-2 transition-all h-full cursor-pointer hover:shadow-lg hover:-translate-y-1 ${
                      selectedService.id === service.id 
                        ? `${colorMap[service.color].border} ${colorMap[service.color].ring} ring-2` 
                        : 'border-transparent hover:border-gray-200'
                    }`}
                  >
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} text-white flex items-center justify-center mb-5`}>
                      <ServiceIcon className="text-2xl" />
                    </div>
                    <h3 className="font-bold text-xl mb-2">{service.title}</h3>
                    <p className="text-sm text-gray-500 mb-4">{service.shortDesc}</p>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <span className="text-xs text-gray-400">{service.timeline}</span>
                      <span className={`text-sm font-semibold ${colorMap[service.color].text} flex items-center gap-1`}>
                        Learn More <FaArrowRight className="text-xs" />
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-6 md:p-12 text-white relative overflow-hidden">
          <MorphingBackground className="absolute inset-0 opacity-20" />
          
          <div className="relative z-10">
            <div className="text-center mb-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <span className="text-sm font-semibold text-purple-400 tracking-wider uppercase mb-2 block">Why AINOR</span>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us?</h2>
                <p className="text-gray-400 max-w-2xl mx-auto">We're not just service providers, we're your growth partners</p>
              </motion.div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyChooseUs.map((item, idx) => (
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
                        <item.icon className="text-2xl" />
                      </div>
                      <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                      <p className="text-sm text-gray-400">{item.desc}</p>
                    </div>
                  </TiltCard>
                </motion.div>
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
              <FaRocket className="text-5xl mx-auto mb-6 text-white/80" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-white/80 mb-8 max-w-xl mx-auto">
                Let's discuss your project and find the perfect solution for your business needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <MagneticButton>
                  <a
                    href="https://wa.me/917579500264?text=Hi%20AINOR!%20I'd%20like%20to%20discuss%20a%20project."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors"
                  >
                    <FaWhatsapp className="text-green-500 text-xl" />
                    Chat on WhatsApp
                  </a>
                </MagneticButton>
                <MagneticButton>
                  <Link
                    to="/pricing"
                    className="flex items-center justify-center gap-2 bg-white/20 border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white/30 transition-colors"
                  >
                    View Pricing <FaArrowRight />
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

// Scroll-Lock Section - Locks page scroll while navigating through content panels
const ScrollLockServiceSection = ({ service, colorMap }) => {
  const sectionRef = useRef(null);
  const [currentPanel, setCurrentPanel] = useState(0);
  const [isLocked, setIsLocked] = useState(false);
  const [hasCompletedForward, setHasCompletedForward] = useState(false);
  const isScrolling = useRef(false);
  const lastScrollY = useRef(0);

  const ServiceIcon = service.icon;

  // Content panels for scroll-lock navigation
  const panels = [
    { id: 'features', title: "What's Included", icon: FaCheck },
    { id: 'process', title: 'Our Process', icon: FaCogs },
    { id: 'tech', title: 'Technologies', icon: FaCode },
    { id: 'info', title: 'Project Info', icon: FaClock },
  ];

  const totalPanels = panels.length;

  // Handle wheel events when locked
  const handleWheel = useCallback((e) => {
    if (!isLocked) return;
    
    e.preventDefault();
    e.stopPropagation();
    
    if (isScrolling.current) return;
    isScrolling.current = true;

    const direction = e.deltaY > 0 ? 1 : -1;
    
    setCurrentPanel(prev => {
      const newPanel = prev + direction;
      
      // Scrolling down, reached end
      if (newPanel >= totalPanels) {
        setIsLocked(false);
        setHasCompletedForward(true);
        setTimeout(() => {
          window.scrollBy({ top: 150, behavior: 'smooth' });
        }, 100);
        return totalPanels - 1;
      }
      
      // Scrolling up, reached beginning
      if (newPanel < 0) {
        setIsLocked(false);
        setHasCompletedForward(false);
        setTimeout(() => {
          window.scrollBy({ top: -150, behavior: 'smooth' });
        }, 100);
        return 0;
      }
      
      return newPanel;
    });

    setTimeout(() => {
      isScrolling.current = false;
    }, 600);
  }, [isLocked, totalPanels]);

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
        if (scrollingDown && !hasCompletedForward && currentPanel < totalPanels - 1) {
          setIsLocked(true);
        }
        // Entering from bottom (scrolling up)  
        if (!scrollingDown && hasCompletedForward && currentPanel > 0) {
          setIsLocked(true);
          setCurrentPanel(totalPanels - 1);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPanel, totalPanels, hasCompletedForward, isLocked]);

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

  // Touch support for mobile
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
      
      setCurrentPanel(prev => {
        const newPanel = prev + direction;
        
        if (newPanel >= totalPanels) {
          setIsLocked(false);
          setHasCompletedForward(true);
          return totalPanels - 1;
        }
        
        if (newPanel < 0) {
          setIsLocked(false);
          setHasCompletedForward(false);
          return 0;
        }
        
        return newPanel;
      });
      
      touchStartY.current = touchY;
      setTimeout(() => {
        isScrolling.current = false;
      }, 600);
    }
  }, [isLocked, totalPanels]);

  useEffect(() => {
    if (isLocked) {
      window.addEventListener('touchmove', handleTouchMove, { passive: false });
    }
    return () => {
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [isLocked, handleTouchMove]);

  // Reset when service changes
  useEffect(() => {
    setCurrentPanel(0);
    setHasCompletedForward(false);
    setIsLocked(false);
  }, [service.id]);

  // Render current panel content
  const renderPanelContent = () => {
    switch (panels[currentPanel].id) {
      case 'features':
        return (
          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-soft h-full">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <FaCheck className="text-green-500" /> What's Included
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {service.features.map((feature, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <FaCheck className="text-[10px]" />
                  </div>
                  <span className="text-sm text-gray-600">{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>
        );
      case 'process':
        return (
          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-soft h-full">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <FaCogs className="text-primary" /> Our Process
            </h3>
            <div className="space-y-4">
              {service.process.map((step, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex gap-4"
                >
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${service.gradient} text-white flex items-center justify-center flex-shrink-0 text-sm font-bold`}>
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">{step.step}</h4>
                    <p className="text-xs text-gray-500">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        );
      case 'tech':
        return (
          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-soft h-full">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <FaCode className="text-purple-500" /> Technologies We Use
            </h3>
            <div className="flex flex-wrap gap-3">
              {service.technologies.map((tech, idx) => (
                <motion.span 
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.05 }}
                  className="px-5 py-3 bg-gray-100 text-gray-700 rounded-xl text-sm font-medium hover:bg-primary hover:text-white transition-colors cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
            <p className="text-sm text-gray-500 mt-6">
              We use the latest and most reliable technologies to deliver exceptional results for your project.
            </p>
          </div>
        );
      case 'info':
        return (
          <div className="bg-gray-50 rounded-3xl p-6 md:p-8 h-full">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <FaClock className="text-primary" /> Project Details
            </h3>
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-5">
                <span className="text-xs text-gray-400 uppercase block mb-1">Timeline</span>
                <p className="font-bold text-2xl text-[#111318]">{service.timeline}</p>
              </div>
              <div className="bg-white rounded-2xl p-5">
                <span className="text-xs text-gray-400 uppercase block mb-1">Ideal For</span>
                <p className="text-gray-600">{service.idealFor}</p>
              </div>
              <div className="bg-white rounded-2xl p-5">
                <span className="text-xs text-gray-400 uppercase block mb-1">Starting From</span>
                <p className="font-bold text-2xl text-primary">Contact Us</p>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen bg-gray-50 rounded-3xl"
      onTouchStart={handleTouchStart}
    >
      <div className="h-screen flex items-center py-8">
        <div className="w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={service.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"
            >
              {/* Left - Service Info Card (Stays Fixed) */}
              <div>
                <TiltCard tiltAmount={5}>
                  <div className={`bg-gradient-to-br ${service.gradient} rounded-3xl p-8 text-white relative overflow-hidden`}>
                    <div className="absolute -top-20 -right-20 w-60 h-60 bg-white/10 rounded-full blur-3xl" />
                    
                    <div className="relative z-10">
                      <div className="w-20 h-20 rounded-2xl bg-white/20 flex items-center justify-center mb-6">
                        <ServiceIcon className="text-4xl text-white" />
                      </div>
                      
                      <h2 className="text-3xl md:text-4xl font-bold mb-4">{service.title}</h2>
                      <p className="text-white/80 mb-8 text-lg">{service.description}</p>
                      
                      {/* Service Stats */}
                      <div className="grid grid-cols-3 gap-4 mb-8">
                        <div className="text-center p-3 bg-white/10 rounded-xl">
                          <div className="text-2xl font-bold">{service.stats.projects}</div>
                          <div className="text-xs text-white/70">Projects</div>
                        </div>
                        <div className="text-center p-3 bg-white/10 rounded-xl">
                          <div className="text-2xl font-bold">{service.stats.satisfaction}</div>
                          <div className="text-xs text-white/70">Satisfaction</div>
                        </div>
                        <div className="text-center p-3 bg-white/10 rounded-xl">
                          <div className="text-2xl font-bold">{service.stats.avgTime}</div>
                          <div className="text-xs text-white/70">Avg Time</div>
                        </div>
                      </div>

                      {/* Progress Indicators */}
                      <div className="flex gap-2 mb-6">
                        {panels.map((_, idx) => (
                          <div
                            key={idx}
                            className={`h-1.5 rounded-full transition-all duration-300 ${
                              idx === currentPanel 
                                ? 'w-8 bg-white' 
                                : idx < currentPanel 
                                  ? 'w-4 bg-white/60'
                                  : 'w-4 bg-white/30'
                            }`}
                          />
                        ))}
                      </div>

                      <MagneticButton>
                        <a
                          href={`https://wa.me/917579500264?text=Hi%20AINOR!%20I'm%20interested%20in%20${encodeURIComponent(service.title)}%20services.`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-white text-gray-800 px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors"
                        >
                          <FaWhatsapp className="text-green-500" /> Get Started
                        </a>
                      </MagneticButton>
                    </div>
                  </div>
                </TiltCard>
              </div>

              {/* Right - Scrolling Content Panels */}
              <div className="h-[60vh] relative overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentPanel}
                    initial={{ opacity: 0, y: 80 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -80 }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                    className="h-full"
                  >
                    {renderPanelContent()}
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          </AnimatePresence>
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
              Scroll to explore • {currentPanel + 1}/{totalPanels}
            </span>
          </div>
        </motion.div>
      )}
    </section>
  );
};

// Service Detail Section wrapper
const ServiceDetailSection = ({ service, colorMap }) => {
  return <ScrollLockServiceSection service={service} colorMap={colorMap} />;
};

export default ServiceDetailPage;
