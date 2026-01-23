import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaLaptopCode, FaMobileAlt, FaShoppingCart, FaSearch, FaCode, 
  FaBrain, FaArrowRight, FaCheck, FaWhatsapp
} from 'react-icons/fa';
import SEOHead from '../components/seo/SEOHead';
import ModernPageLayout from '../components/layout/ModernPageLayout';
import SEOText from '../components/seo/SEOText';
import TiltCard from '../components/ui/TiltCard';

// Comprehensive services data with SEO-optimized content
const services = [
  {
    id: 'website-design-development',
    icon: FaLaptopCode,
    title: 'Website Design & Development',
    shortTitle: 'Website Design',
    description: 'Professional website design and development services in India. Custom responsive websites built with React, Next.js, and modern technologies. From business websites to complex web applications.',
    features: [
      'Custom Responsive Design',
      'SEO-Optimized Structure',
      'Fast Loading Speed',
      'CMS Integration',
      'Mobile-First Approach',
      'SSL & Security'
    ],
    price: 'From ₹9,999/mo',
    timeline: '4-8 weeks',
    gradient: 'from-blue-500 to-cyan-500',
    technologies: ['React', 'Next.js', 'TailwindCSS', 'TypeScript'],
    caseStudy: {
      client: 'HiiHive',
      result: '2,000+ active students',
      link: '/portfolio'
    }
  },
  {
    id: 'custom-software-development',
    icon: FaCode,
    title: 'Custom Software Development',
    shortTitle: 'Custom Software',
    description: 'Bespoke software solutions for unique business challenges. We build scalable, secure enterprise applications, APIs, SaaS platforms, and business automation tools.',
    features: [
      'Bespoke Solutions',
      'Scalable Architecture',
      'API Development',
      'Database Design',
      'Cloud Integration',
      'Ongoing Support'
    ],
    price: 'From ₹19,999/mo',
    timeline: '8-16 weeks',
    gradient: 'from-purple-500 to-pink-500',
    technologies: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'AWS'],
    caseStudy: {
      client: 'Mohan G Enterprises',
      result: 'B2B platform automation',
      link: '/portfolio'
    }
  },
  {
    id: 'mobile-app-development',
    icon: FaMobileAlt,
    title: 'Mobile App Development',
    shortTitle: 'Mobile Apps',
    description: 'iOS and Android mobile app development in India. Cross-platform apps with React Native and Flutter. Native-like performance with cost-effective development.',
    features: [
      'iOS & Android Apps',
      'Cross-Platform (React Native/Flutter)',
      'Push Notifications',
      'Offline Support',
      'App Store Optimization',
      'Real-time Features'
    ],
    price: 'From ₹19,999/mo',
    timeline: '6-12 weeks',
    gradient: 'from-green-500 to-emerald-500',
    technologies: ['React Native', 'Flutter', 'Firebase', 'Node.js'],
    caseStudy: {
      client: 'GoForCab',
      result: '10,000+ rides, 500+ drivers',
      link: '/portfolio'
    }
  },
  {
    id: 'ecommerce-website-development',
    icon: FaShoppingCart,
    title: 'E-Commerce Website Development',
    shortTitle: 'E-Commerce',
    description: 'Complete e-commerce solutions for online stores in India. Shopify, WooCommerce, and custom React e-commerce development with payment integration (Razorpay, Stripe).',
    features: [
      'Product Catalog & Cart',
      'Payment Gateway Integration',
      'Inventory Management',
      'Order Tracking',
      'Admin Dashboard',
      'Multi-vendor Support'
    ],
    price: 'From ₹14,999/mo',
    timeline: '4-10 weeks',
    gradient: 'from-orange-500 to-red-500',
    technologies: ['React', 'Shopify', 'WooCommerce', 'Razorpay', 'Stripe'],
    caseStudy: {
      client: 'Sttrika',
      result: '₹10L+ revenue, 5K users',
      link: '/portfolio'
    }
  },
  {
    id: 'seo-services-india',
    icon: FaSearch,
    title: 'SEO Services India',
    shortTitle: 'SEO Services',
    description: 'Professional SEO services to improve Google rankings. Keyword research, on-page SEO, technical SEO, content strategy, and link building. Proven results with case studies.',
    features: [
      'Keyword Research',
      'On-Page SEO',
      'Technical SEO Audit',
      'Content Strategy',
      'Link Building',
      'Monthly Reporting'
    ],
    price: 'From ₹7,999/mo',
    timeline: 'Ongoing (3+ months)',
    gradient: 'from-pink-500 to-rose-500',
    technologies: ['Google Analytics', 'Search Console', 'SEMrush', 'Ahrefs'],
    caseStudy: {
      client: 'ExamBulletin',
      result: 'Top rankings for Sarkari Result',
      link: '/portfolio'
    }
  },
  {
    id: 'ai-solutions-india',
    icon: FaBrain,
    title: 'AI & Machine Learning Solutions',
    shortTitle: 'AI Solutions',
    description: 'AI-powered solutions for business automation. Custom chatbots, machine learning models, natural language processing, and AI integration services.',
    features: [
      'AI Chatbots',
      'Machine Learning Models',
      'Natural Language Processing',
      'Predictive Analytics',
      'Process Automation',
      'AI Integration'
    ],
    price: 'From ₹29,999/mo',
    timeline: '6-16 weeks',
    gradient: 'from-indigo-500 to-purple-500',
    technologies: ['Python', 'TensorFlow', 'OpenAI', 'LangChain', 'AWS'],
    caseStudy: {
      client: 'Multiple Clients',
      result: 'Automation & efficiency gains',
      link: '/ai-services'
    }
  }
];

const ServicesListPage = () => {
  const stats = [
    { number: '50+', label: 'Projects Delivered' },
    { number: '100%', label: 'Client Satisfaction' },
    { number: '6+', label: 'Industries Served' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <>
      <SEOHead 
        title="Web Development Services India | Website, Mobile App, E-Commerce, SEO | AINOR"
        description="🚀 Professional web development services in India from ₹9,999/mo. Website design, mobile apps, e-commerce, SEO. MSME registered. 50+ projects delivered. Free consultation!"
        canonicalUrl="https://myainor.com/all-services"
        keywords="web development services india, website design india, mobile app development, e-commerce development, seo services india, custom software development, react development india"
      />

      <ModernPageLayout>
        {/* Hero Section */}
        <section className="relative bg-white rounded-3xl p-6 md:p-12 lg:p-16 shadow-soft overflow-hidden mb-8">
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-gradient-to-br from-blue-100 to-purple-100 rounded-full blur-3xl opacity-60" />
          <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] bg-gradient-to-br from-green-100 to-cyan-100 rounded-full blur-3xl opacity-60" />
          
          <div className="relative z-10 text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Professional Web Development Services
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              Complete Digital Services
              <span className="block mt-2 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                For Modern Businesses
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
            >
              From website design to mobile apps, e-commerce to SEO - we offer subscription-based 
              development services starting at ₹9,999/month. MSME registered & trusted by 50+ businesses.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-primary text-white rounded-full font-semibold flex items-center gap-2"
                >
                  Get Free Quote <FaArrowRight />
                </motion.button>
              </Link>
              <a 
                href="https://wa.me/917579500264?text=Hi,%20I'm%20interested%20in%20your%20services"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-green-500 text-white rounded-full font-semibold flex items-center gap-2"
                >
                  <FaWhatsapp /> WhatsApp Us
                </motion.button>
              </a>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12"
          >
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center p-4 bg-gray-50 rounded-xl">
                <div className="text-2xl md:text-3xl font-bold text-primary">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </section>

        {/* Services Grid */}
        <section className="mb-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <TiltCard tiltAmount={5} scale={1.02}>
                  <div className="bg-white rounded-2xl p-6 shadow-soft h-full flex flex-col">
                    {/* Icon & Title */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} text-white flex items-center justify-center flex-shrink-0`}>
                        <service.icon className="text-2xl" />
                      </div>
                      <div>
                        <h2 className="text-xl font-bold text-gray-900">{service.shortTitle}</h2>
                        <p className="text-sm text-primary font-medium">{service.price}</p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 text-sm mb-4 flex-grow">{service.description}</p>

                    {/* Features */}
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      {service.features.slice(0, 4).map((feature, fidx) => (
                        <div key={fidx} className="flex items-center gap-2 text-sm text-gray-600">
                          <FaCheck className="text-green-500 flex-shrink-0 text-xs" />
                          <span className="truncate">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Case Study Badge */}
                    <div className="bg-gray-50 rounded-xl p-3 mb-4">
                      <p className="text-xs text-gray-500">Case Study: <strong>{service.caseStudy.client}</strong></p>
                      <p className="text-sm font-medium text-primary">{service.caseStudy.result}</p>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.technologies.slice(0, 3).map((tech, tidx) => (
                        <span key={tidx} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <Link 
                      to={`/service/${service.id}`}
                      className="mt-auto inline-flex items-center justify-center gap-2 w-full py-3 bg-gray-900 text-white rounded-xl font-medium hover:bg-primary transition-colors"
                    >
                      Learn More <FaArrowRight className="text-sm" />
                    </Link>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Why Choose AINOR Section */}
        <section className="bg-white rounded-3xl p-6 md:p-12 shadow-soft mb-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose <span className="text-primary">AINOR</span>?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're not just another agency. We're your long-term technology partner.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Subscription Model', desc: 'No huge upfront costs. Pay monthly and cancel anytime.', emoji: '💳' },
              { title: 'All-Inclusive', desc: 'Hosting, SSL, updates, support - everything included.', emoji: '📦' },
              { title: 'MSME Registered', desc: 'Government recognized (UDYAM-UP-36-0033877).', emoji: '✅' },
              { title: 'Proven Results', desc: '50+ projects with documented success stories.', emoji: '📈' }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center p-6 bg-gray-50 rounded-2xl"
              >
                <div className="text-4xl mb-4">{item.emoji}</div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-primary to-purple-600 rounded-3xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Get a FREE consultation and detailed quote within 2 hours. No commitment required.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-primary rounded-full font-semibold flex items-center gap-2"
              >
                Get Free Quote <FaArrowRight />
              </motion.button>
            </Link>
            <Link to="/pricing">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/10 text-white border border-white/30 rounded-full font-semibold"
              >
                View Pricing
              </motion.button>
            </Link>
          </div>
        </section>

        {/* SEO Text Section */}
        <SEOText page="services" />
      </ModernPageLayout>
    </>
  );
};

export default ServicesListPage;
