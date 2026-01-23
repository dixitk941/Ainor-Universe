import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaLaptopCode, FaMobileAlt, FaShoppingCart, FaSearch, FaCode, 
  FaBrain, FaArrowRight, FaCheck, FaWhatsapp, FaClock, FaStar,
  FaShieldAlt, FaHeadset
} from 'react-icons/fa';
import SEOHead from '../components/seo/SEOHead';
import ModernPageLayout from '../components/layout/ModernPageLayout';
import SEOText from '../components/seo/SEOText';
import TiltCard from '../components/ui/TiltCard';

// Comprehensive service data with SEO-rich content
const servicesData = {
  'website-design-development': {
    icon: FaLaptopCode,
    title: 'Website Design & Development Services India',
    shortTitle: 'Website Design',
    metaTitle: 'Website Design & Development India | From ₹9,999/mo | AINOR',
    metaDescription: '🚀 Professional website design & development in India from ₹9,999/mo. React, Next.js experts. 50+ projects delivered. Responsive design, SEO included. Free consultation!',
    heroTitle: 'Professional Website Design & Development',
    heroSubtitle: 'Custom, responsive websites that drive business growth',
    description: 'We create stunning, high-performance websites that help businesses establish a powerful online presence. Our web development services combine beautiful design with technical excellence, ensuring your website not only looks great but also performs exceptionally on search engines.',
    gradient: 'from-blue-500 to-cyan-500',
    price: { starting: '₹9,999', period: '/month' },
    timeline: '4-8 weeks',
    features: [
      { title: 'Custom Responsive Design', desc: 'Websites that look perfect on all devices - mobile, tablet, desktop' },
      { title: 'SEO-Optimized Structure', desc: 'Built with search engines in mind for better Google rankings' },
      { title: 'Fast Loading Speed', desc: 'Optimized performance for quick page loads (under 3 seconds)' },
      { title: 'CMS Integration', desc: 'Easy content management so you can update your site yourself' },
      { title: 'Security & SSL', desc: 'HTTPS encryption and security best practices included' },
      { title: 'Analytics Setup', desc: 'Google Analytics integration for tracking visitors' }
    ],
    technologies: ['React', 'Next.js', 'TailwindCSS', 'TypeScript', 'Node.js', 'MongoDB'],
    process: [
      { step: 'Discovery', desc: 'Understanding your brand, goals, and target audience', icon: '🎯' },
      { step: 'Wireframing', desc: 'Creating the blueprint for your website structure', icon: '📐' },
      { step: 'Design', desc: 'Crafting beautiful, on-brand visual designs', icon: '🎨' },
      { step: 'Development', desc: 'Building with clean, scalable code', icon: '💻' },
      { step: 'Testing', desc: 'Rigorous QA across devices and browsers', icon: '🔍' },
      { step: 'Launch', desc: 'Deployment and post-launch support', icon: '🚀' }
    ],
    caseStudies: [
      { client: 'HiiHive', result: '2,000+ active students', desc: 'Educational platform with student dashboard' },
      { client: 'Mohan G Enterprises', result: 'B2B platform live', desc: 'Corporate website with inquiry system' }
    ],
    faqs: [
      { q: 'How long does it take to build a website?', a: 'Most websites are completed in 4-8 weeks depending on complexity. Simple landing pages can be ready in 1-2 weeks.' },
      { q: 'Do you provide hosting?', a: 'Yes! Hosting, SSL certificate, and domain setup are all included in our subscription plans.' },
      { q: 'Can I update the website myself?', a: 'Absolutely! We integrate easy-to-use CMS systems so you can update content without technical knowledge.' },
      { q: 'Is SEO included?', a: 'Yes, basic SEO optimization is included with every website. Advanced SEO services are available as add-ons.' }
    ],
    relatedServices: ['ecommerce-website-development', 'seo-services-india', 'mobile-app-development']
  },
  'custom-software-development': {
    icon: FaCode,
    title: 'Custom Software Development Services India',
    shortTitle: 'Custom Software',
    metaTitle: 'Custom Software Development India | Enterprise Solutions | AINOR',
    metaDescription: '🚀 Custom software development for unique business needs. APIs, SaaS, enterprise apps. Scalable architecture, cloud integration. MSME registered. Free consultation!',
    heroTitle: 'Custom Software Development',
    heroSubtitle: 'Bespoke solutions for unique business challenges',
    description: 'We develop custom software applications that address your specific business needs. From APIs and SaaS platforms to enterprise applications and business automation tools, our solutions are scalable, secure, and built with future growth in mind.',
    gradient: 'from-purple-500 to-pink-500',
    price: { starting: '₹19,999', period: '/month' },
    timeline: '8-16 weeks',
    features: [
      { title: 'Bespoke Solutions', desc: 'Software designed specifically for your business processes' },
      { title: 'Scalable Architecture', desc: 'Built to handle growth from 100 to 100,000+ users' },
      { title: 'API Development', desc: 'RESTful and GraphQL APIs for system integration' },
      { title: 'Database Design', desc: 'Optimized database architecture for performance' },
      { title: 'Cloud Integration', desc: 'AWS, Azure, and Google Cloud deployment' },
      { title: 'Ongoing Support', desc: 'Continuous maintenance and feature updates' }
    ],
    technologies: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'Docker', 'AWS', 'Redis'],
    process: [
      { step: 'Requirements', desc: 'Deep dive into your business processes', icon: '📋' },
      { step: 'Architecture', desc: 'Designing the technical solution', icon: '🏗️' },
      { step: 'Development', desc: 'Agile sprints with regular demos', icon: '⚡' },
      { step: 'Integration', desc: 'Connecting with your existing systems', icon: '🔗' },
      { step: 'Testing', desc: 'Comprehensive QA and UAT', icon: '✅' },
      { step: 'Deployment', desc: 'Smooth rollout with training', icon: '🎓' }
    ],
    caseStudies: [
      { client: 'Mohan G Enterprises', result: 'B2B automation', desc: 'Custom CRM and inventory system' },
      { client: 'Multiple Startups', result: 'SaaS platforms', desc: 'Subscription management systems' }
    ],
    faqs: [
      { q: 'What types of software do you build?', a: 'We build CRM systems, inventory management, booking systems, SaaS platforms, APIs, dashboards, and more.' },
      { q: 'Can you integrate with existing systems?', a: 'Yes! We specialize in API integration with existing software, databases, and third-party services.' },
      { q: 'Do you provide source code?', a: 'Yes, you own the source code. If you cancel, you keep everything we built.' },
      { q: 'How do you ensure security?', a: 'We follow OWASP security guidelines, implement encryption, and conduct security audits.' }
    ],
    relatedServices: ['website-design-development', 'ai-solutions-india', 'mobile-app-development']
  },
  'mobile-app-development': {
    icon: FaMobileAlt,
    title: 'Mobile App Development Services India',
    shortTitle: 'Mobile Apps',
    metaTitle: 'Mobile App Development India | iOS & Android | From ₹19,999/mo | AINOR',
    metaDescription: '📱 Mobile app development for iOS & Android. React Native, Flutter experts. GoForCab case study: 10K+ rides. Cross-platform apps. Free consultation!',
    heroTitle: 'Mobile App Development',
    heroSubtitle: 'iOS & Android apps that users love',
    description: 'We build cutting-edge mobile applications that provide seamless user experiences across iOS and Android platforms. Using React Native and Flutter, we deliver native-like performance with cost-effective cross-platform development.',
    gradient: 'from-green-500 to-emerald-500',
    price: { starting: '₹19,999', period: '/month' },
    timeline: '6-12 weeks',
    features: [
      { title: 'iOS & Android Apps', desc: 'Single codebase for both platforms, saving time and cost' },
      { title: 'Cross-Platform Development', desc: 'React Native and Flutter for optimal performance' },
      { title: 'Push Notifications', desc: 'Engage users with timely notifications' },
      { title: 'Offline Support', desc: 'Apps that work even without internet' },
      { title: 'App Store Optimization', desc: 'Help your app rank higher in stores' },
      { title: 'Real-time Features', desc: 'Live updates, chat, tracking, and more' }
    ],
    technologies: ['React Native', 'Flutter', 'Firebase', 'Node.js', 'MongoDB', 'Socket.io'],
    process: [
      { step: 'Strategy', desc: 'Defining your app vision and features', icon: '🎯' },
      { step: 'UI/UX Design', desc: 'Creating engaging mobile experiences', icon: '📱' },
      { step: 'Development', desc: 'Building robust, performant apps', icon: '⚙️' },
      { step: 'Testing', desc: 'Device testing and beta releases', icon: '🧪' },
      { step: 'Store Submission', desc: 'App store approval process', icon: '📤' },
      { step: 'Launch', desc: 'Marketing support and updates', icon: '🚀' }
    ],
    caseStudies: [
      { client: 'GoForCab', result: '10,000+ rides, 500+ drivers', desc: 'Ride-hailing app with driver & passenger apps' },
      { client: 'HiiHive', result: '2,000+ students', desc: 'Student community app with real-time features' }
    ],
    faqs: [
      { q: 'Should I build native or cross-platform?', a: 'For most apps, cross-platform (React Native/Flutter) saves 40-50% cost while delivering native-like experience.' },
      { q: 'How much does a mobile app cost?', a: 'Our subscription starts at ₹19,999/mo. Traditional agencies charge ₹5-15 Lakhs for similar apps.' },
      { q: 'How long does app development take?', a: 'MVP apps take 6-8 weeks. Full-featured apps may take 12-16 weeks.' },
      { q: 'Do you handle app store submission?', a: 'Yes! We handle the entire submission process for both Apple App Store and Google Play Store.' }
    ],
    relatedServices: ['website-design-development', 'custom-software-development', 'ai-solutions-india']
  },
  'ecommerce-website-development': {
    icon: FaShoppingCart,
    title: 'E-Commerce Website Development India',
    shortTitle: 'E-Commerce',
    metaTitle: 'E-Commerce Website Development India | Online Store from ₹14,999/mo | AINOR',
    metaDescription: '🛒 E-commerce website development in India. Sttrika case study: ₹10L+ revenue. Razorpay, Stripe integration. Shopify, WooCommerce, custom React. Free consultation!',
    heroTitle: 'E-Commerce Website Development',
    heroSubtitle: 'Online stores that drive sales and conversions',
    description: 'We create comprehensive e-commerce solutions that help businesses sell online effectively. From product catalogs to payment integration, our stores are designed to convert visitors into customers with attractive design and powerful functionality.',
    gradient: 'from-orange-500 to-red-500',
    price: { starting: '₹14,999', period: '/month' },
    timeline: '4-10 weeks',
    features: [
      { title: 'Product Catalog & Cart', desc: 'Easy product management with smart cart features' },
      { title: 'Payment Integration', desc: 'Razorpay, Stripe, PayPal, UPI integration' },
      { title: 'Inventory Management', desc: 'Track stock levels and get low-stock alerts' },
      { title: 'Order Tracking', desc: 'Real-time order status for customers' },
      { title: 'Admin Dashboard', desc: 'Manage orders, products, and analytics' },
      { title: 'Multi-vendor Support', desc: 'Marketplace features for multiple sellers' }
    ],
    technologies: ['React', 'Shopify', 'WooCommerce', 'Razorpay', 'Stripe', 'Node.js'],
    process: [
      { step: 'Planning', desc: 'Understanding your products and customers', icon: '📊' },
      { step: 'Design', desc: 'Creating a compelling storefront', icon: '🎨' },
      { step: 'Setup', desc: 'Configuring products and payments', icon: '⚙️' },
      { step: 'Integration', desc: 'Connecting shipping and inventory', icon: '📦' },
      { step: 'Testing', desc: 'Order flow and payment testing', icon: '💳' },
      { step: 'Launch', desc: 'Go live with marketing support', icon: '🚀' }
    ],
    caseStudies: [
      { client: 'Sttrika', result: '₹10L+ revenue, 5,000+ users', desc: 'Fashion e-commerce with full catalog management' },
      { client: 'Multiple Clients', result: 'Successful online stores', desc: 'Food, fashion, and electronics stores' }
    ],
    faqs: [
      { q: 'Which platform is best for e-commerce?', a: 'It depends on your needs. Shopify is great for quick setup, WooCommerce for WordPress users, and custom React for full control.' },
      { q: 'Which payment gateways do you integrate?', a: 'We integrate Razorpay, Stripe, PayPal, Paytm, and all major UPI providers.' },
      { q: 'Can you migrate my existing store?', a: 'Yes! We can migrate from any platform while preserving your products, orders, and customer data.' },
      { q: 'Is inventory management included?', a: 'Yes, all our e-commerce solutions include inventory tracking with low-stock alerts.' }
    ],
    relatedServices: ['website-design-development', 'seo-services-india', 'mobile-app-development']
  },
  'seo-services-india': {
    icon: FaSearch,
    title: 'SEO Services India - Search Engine Optimization',
    shortTitle: 'SEO Services',
    metaTitle: 'SEO Services India | Google Ranking Experts | From ₹7,999/mo | AINOR',
    metaDescription: '🔍 Professional SEO services in India. ExamBulletin case study: Top rankings for Sarkari Result. Keyword research, on-page SEO, link building. Free SEO audit!',
    heroTitle: 'SEO Services India',
    heroSubtitle: 'Improve Google rankings and drive organic traffic',
    description: 'We implement comprehensive SEO strategies that improve your website\'s visibility and drive organic traffic to your business. Our data-driven approach ensures measurable results with proven case studies.',
    gradient: 'from-pink-500 to-rose-500',
    price: { starting: '₹7,999', period: '/month' },
    timeline: 'Ongoing (3+ months)',
    features: [
      { title: 'Keyword Research', desc: 'Find high-value keywords your customers are searching' },
      { title: 'On-Page SEO', desc: 'Optimize content, meta tags, and site structure' },
      { title: 'Technical SEO Audit', desc: 'Fix crawl errors, speed issues, and mobile problems' },
      { title: 'Content Strategy', desc: 'SEO-optimized content that ranks and converts' },
      { title: 'Link Building', desc: 'Quality backlinks from relevant websites' },
      { title: 'Monthly Reporting', desc: 'Track rankings, traffic, and ROI' }
    ],
    technologies: ['Google Analytics', 'Search Console', 'SEMrush', 'Ahrefs', 'Screaming Frog'],
    process: [
      { step: 'Audit', desc: 'Comprehensive site analysis', icon: '🔍' },
      { step: 'Research', desc: 'Keyword and competitor research', icon: '📊' },
      { step: 'Strategy', desc: 'Custom SEO roadmap', icon: '🗺️' },
      { step: 'Implementation', desc: 'On-page and technical fixes', icon: '⚙️' },
      { step: 'Content', desc: 'SEO-optimized content creation', icon: '✍️' },
      { step: 'Monitor', desc: 'Track rankings and adjust', icon: '📈' }
    ],
    caseStudies: [
      { client: 'ExamBulletin', result: 'Top rankings for Sarkari Result', desc: 'Government job portal ranking for competitive keywords' },
      { client: 'Multiple Clients', result: 'Page 1 rankings', desc: 'Local SEO success stories' }
    ],
    faqs: [
      { q: 'How long does SEO take to show results?', a: 'SEO is a long-term strategy. You\'ll typically see initial results in 3-4 months, with significant improvements in 6-12 months.' },
      { q: 'Do you guarantee #1 ranking?', a: 'No ethical SEO agency can guarantee specific rankings. We focus on sustainable growth and have proven case studies.' },
      { q: 'Is local SEO included?', a: 'Yes! We optimize for local search including Google Business Profile, local citations, and location-based keywords.' },
      { q: 'Do you provide monthly reports?', a: 'Absolutely! You\'ll receive detailed monthly reports showing rankings, traffic, and progress.' }
    ],
    relatedServices: ['website-design-development', 'ecommerce-website-development', 'custom-software-development']
  },
  'ai-solutions-india': {
    icon: FaBrain,
    title: 'AI & Machine Learning Solutions India',
    shortTitle: 'AI Solutions',
    metaTitle: 'AI Solutions India | Chatbots, ML, Automation | AINOR',
    metaDescription: '🤖 AI and machine learning solutions for businesses. Custom chatbots, predictive analytics, process automation. OpenAI, LangChain integration. Free consultation!',
    heroTitle: 'AI & Machine Learning Solutions',
    heroSubtitle: 'Intelligent automation for modern businesses',
    description: 'We leverage artificial intelligence to help businesses automate processes, gain insights, and deliver better customer experiences. From chatbots to custom ML models, we make AI accessible and practical.',
    gradient: 'from-indigo-500 to-purple-500',
    price: { starting: '₹29,999', period: '/month' },
    timeline: '6-16 weeks',
    features: [
      { title: 'AI Chatbots', desc: 'Intelligent bots for customer support and sales' },
      { title: 'Machine Learning Models', desc: 'Custom ML models for predictions and insights' },
      { title: 'Natural Language Processing', desc: 'Text analysis, sentiment detection, and more' },
      { title: 'Predictive Analytics', desc: 'Forecast trends and customer behavior' },
      { title: 'Process Automation', desc: 'Automate repetitive tasks with AI' },
      { title: 'AI Integration', desc: 'Connect AI capabilities to existing systems' }
    ],
    technologies: ['Python', 'TensorFlow', 'PyTorch', 'OpenAI', 'LangChain', 'AWS SageMaker'],
    process: [
      { step: 'Assessment', desc: 'Identify AI opportunities in your business', icon: '🎯' },
      { step: 'Data Prep', desc: 'Gather and prepare training data', icon: '📊' },
      { step: 'Model Development', desc: 'Build and train AI models', icon: '🧠' },
      { step: 'Integration', desc: 'Connect to your systems', icon: '🔗' },
      { step: 'Testing', desc: 'Validate accuracy and performance', icon: '✅' },
      { step: 'Deploy', desc: 'Launch with monitoring', icon: '🚀' }
    ],
    caseStudies: [
      { client: 'E-commerce Clients', result: 'AI-powered recommendations', desc: 'Product recommendation engine' },
      { client: 'Support Teams', result: '60% faster response', desc: 'AI chatbot for customer queries' }
    ],
    faqs: [
      { q: 'What AI solutions do you offer?', a: 'We offer chatbots, recommendation engines, predictive analytics, process automation, and custom ML models.' },
      { q: 'Do I need a lot of data for AI?', a: 'It depends on the solution. Chatbots need minimal data, while custom ML models require more training data.' },
      { q: 'Can AI integrate with my existing systems?', a: 'Yes! We integrate AI solutions with your existing websites, apps, CRMs, and other systems via APIs.' },
      { q: 'Is AI expensive to implement?', a: 'Our subscription model makes AI accessible. Start with basic chatbots and scale up as you see value.' }
    ],
    relatedServices: ['custom-software-development', 'mobile-app-development', 'website-design-development']
  }
};

const ServicePage = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const service = servicesData[serviceId];

  useEffect(() => {
    if (!service) {
      navigate('/all-services');
    }
  }, [service, navigate]);

  if (!service) {
    return null;
  }

  const Icon = service.icon;

  return (
    <>
      <SEOHead 
        title={service.metaTitle}
        description={service.metaDescription}
        canonicalUrl={`https://myainor.com/service/${serviceId}`}
      />

      <ModernPageLayout>
        {/* Hero Section */}
        <section className="relative bg-white rounded-3xl p-6 md:p-12 lg:p-16 shadow-soft overflow-hidden mb-8">
          <div className={`absolute -top-40 -right-40 w-[500px] h-[500px] bg-gradient-to-br ${service.gradient} rounded-full blur-3xl opacity-20`} />
          
          <div className="relative z-10">
            <div className="flex flex-col lg:flex-row items-start gap-8">
              <div className="flex-1">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-4 mb-6"
                >
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} text-white flex items-center justify-center`}>
                    <Icon className="text-3xl" />
                  </div>
                  <div>
                    <span className="text-sm text-primary font-medium">AINOR Services</span>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">{service.heroTitle}</h1>
                  </div>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-xl text-gray-600 mb-6"
                >
                  {service.heroSubtitle}
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-gray-600 mb-8"
                >
                  {service.description}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex flex-wrap gap-4"
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
                    href="https://wa.me/917579500264"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-4 bg-green-500 text-white rounded-full font-semibold flex items-center gap-2"
                    >
                      <FaWhatsapp /> WhatsApp
                    </motion.button>
                  </a>
                </motion.div>
              </div>

              {/* Pricing Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="w-full lg:w-80"
              >
                <TiltCard tiltAmount={5}>
                  <div className={`bg-gradient-to-br ${service.gradient} rounded-2xl p-6 text-white`}>
                    <h3 className="text-lg font-semibold mb-2">Starting From</h3>
                    <div className="text-4xl font-bold mb-1">
                      {service.price.starting}
                      <span className="text-lg opacity-80">{service.price.period}</span>
                    </div>
                    <p className="text-sm opacity-80 mb-6">All-inclusive subscription</p>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-2">
                        <FaClock className="opacity-80" />
                        <span>Timeline: {service.timeline}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaShieldAlt className="opacity-80" />
                        <span>Hosting & SSL included</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaHeadset className="opacity-80" />
                        <span>24/7 Support</span>
                      </div>
                    </div>

                    <Link to="/pricing">
                      <button className="w-full py-3 bg-white text-gray-900 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
                        View All Pricing
                      </button>
                    </Link>
                  </div>
                </TiltCard>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-white rounded-3xl p-6 md:p-12 shadow-soft mb-8">
          <h2 className="text-3xl font-bold text-center mb-10">What's Included</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl"
              >
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${service.gradient} text-white flex items-center justify-center flex-shrink-0`}>
                  <FaCheck />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Process Section */}
        <section className="bg-white rounded-3xl p-6 md:p-12 shadow-soft mb-8">
          <h2 className="text-3xl font-bold text-center mb-10">Our Process</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.process.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center p-6 bg-gray-50 rounded-2xl"
              >
                <div className="text-4xl mb-4">{step.icon}</div>
                <div className="text-sm text-primary font-medium mb-2">Step {idx + 1}</div>
                <h3 className="font-bold text-lg mb-2">{step.step}</h3>
                <p className="text-sm text-gray-600">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Technologies Section */}
        <section className="bg-white rounded-3xl p-6 md:p-12 shadow-soft mb-8">
          <h2 className="text-3xl font-bold text-center mb-10">Technologies We Use</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {service.technologies.map((tech, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="px-6 py-3 bg-gray-100 rounded-full font-medium text-gray-700"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="bg-white rounded-3xl p-6 md:p-12 shadow-soft mb-8">
          <h2 className="text-3xl font-bold text-center mb-10">Case Studies</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {service.caseStudies.map((cs, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <TiltCard tiltAmount={3}>
                  <div className="p-6 bg-gray-50 rounded-2xl">
                    <div className="flex items-center gap-2 mb-3">
                      <FaStar className="text-yellow-500" />
                      <span className="font-semibold">{cs.client}</span>
                    </div>
                    <div className={`text-2xl font-bold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent mb-2`}>
                      {cs.result}
                    </div>
                    <p className="text-gray-600">{cs.desc}</p>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/portfolio" className="text-primary font-semibold hover:underline">
              View Full Portfolio →
            </Link>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="bg-white rounded-3xl p-6 md:p-12 shadow-soft mb-8">
          <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {service.faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 bg-gray-50 rounded-2xl"
              >
                <h3 className="font-bold mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Related Services */}
        <section className="bg-white rounded-3xl p-6 md:p-12 shadow-soft mb-8">
          <h2 className="text-3xl font-bold text-center mb-10">Related Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {service.relatedServices.map((relatedId, idx) => {
              const relatedService = servicesData[relatedId];
              if (!relatedService) return null;
              const RelatedIcon = relatedService.icon;
              return (
                <Link key={idx} to={`/service/${relatedId}`}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors"
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${relatedService.gradient} text-white flex items-center justify-center mb-4`}>
                      <RelatedIcon className="text-xl" />
                    </div>
                    <h3 className="font-bold mb-2">{relatedService.shortTitle}</h3>
                    <p className="text-sm text-primary">{relatedService.price.starting}{relatedService.price.period}</p>
                  </motion.div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* CTA Section */}
        <section className={`bg-gradient-to-r ${service.gradient} rounded-3xl p-8 md:p-12 text-center text-white`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Get a FREE consultation and detailed quote within 2 hours. No commitment required.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-gray-900 rounded-full font-semibold flex items-center gap-2"
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

        {/* SEO Text */}
        <SEOText page="services" />
      </ModernPageLayout>
    </>
  );
};

export default ServicePage;
