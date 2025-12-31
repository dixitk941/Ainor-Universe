import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';
import SEOHead from '../components/seo/SEOHead';

// Color palette: Dark (#1a1a1a), Light (#f5f5f5), Accent (indigo-500)

const AiServicesPage = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
      opacity: 1, y: 0, scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  };

  // AI Services
  const aiServices = [
    {
      icon: '🤖',
      title: 'Custom Chatbots',
      description: 'Intelligent chatbots for websites, customer support, lead generation, and more. Trained on your business data for 24/7 real conversations.',
      features: ['Custom chatbot design & development', 'Website, WhatsApp & Messenger integration', 'AI-powered FAQ & support automation', 'Analytics & continuous improvement']
    },
    {
      icon: '🧠',
      title: 'AI Business Tools',
      description: 'Boost productivity with AI-powered tools for document automation, data analysis, content generation, and custom business solutions.',
      features: ['Document & workflow automation', 'AI-driven analytics & reporting', 'Content & image generation', 'Custom AI integrations']
    },
    {
      icon: '📊',
      title: 'Data Intelligence',
      description: 'Transform raw data into actionable insights with our AI-powered analytics solutions.',
      features: ['Predictive analytics', 'Business intelligence dashboards', 'Customer behavior analysis', 'Market trend forecasting']
    },
    {
      icon: '⚡',
      title: 'Process Automation',
      description: 'Streamline operations with intelligent automation that learns and adapts to your workflows.',
      features: ['Workflow automation', 'Intelligent document processing', 'Email & communication automation', 'Task scheduling & optimization']
    },
  ];

  // Process steps
  const processSteps = [
    { step: '01', title: 'Discovery', description: 'We analyze your business needs and identify AI opportunities.' },
    { step: '02', title: 'Data Preparation', description: 'Collect, clean, and prepare data for optimal AI training.' },
    { step: '03', title: 'Model Development', description: 'Build and train custom AI models tailored to your needs.' },
    { step: '04', title: 'Integration', description: 'Seamlessly integrate AI into your existing systems.' },
    { step: '05', title: 'Optimization', description: 'Continuous monitoring and improvement for best results.' },
  ];

  return (
    <>
      <SEOHead
        title="AI Services & Chatbot Solutions | AINOR Digital Solutions"
        description="Discover AINOR's AI services for businesses: custom chatbots, AI-powered tools, and end-to-end artificial intelligence solutions. Automate, optimize, and grow your business."
        canonicalUrl="https://myainor.com/ai-services"
      />

      <div className="min-h-screen bg-[#f5f5f5]">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          {/* Decorative arrows */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.svg
              className="absolute top-24 right-16 w-32 h-32 opacity-[0.08]"
              viewBox="0 0 100 100"
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            >
              <circle cx="50" cy="50" r="8" fill="#6366f1" />
              {[0, 60, 120, 180, 240, 300].map((angle, i) => (
                <g key={i} transform={`rotate(${angle} 50 50)`}>
                  <line x1="50" y1="50" x2="50" y2="12" stroke="#6366f1" strokeWidth="2" />
                  <polygon points="45,18 50,5 55,18" fill="#6366f1" />
                </g>
              ))}
            </motion.svg>

            <motion.svg
              className="absolute bottom-32 left-12 w-24 h-24 opacity-[0.06]"
              viewBox="0 0 100 100"
              animate={{ rotate: -360 }}
              transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
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
              className="text-center mb-16"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 text-indigo-500 rounded-full mb-6 border border-indigo-100">
                <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                <span className="font-semibold text-sm">AI Services</span>
              </span>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#1a1a1a] mb-6">
                AI Tools &
                <span className="block mt-2 text-indigo-500">Solutions</span>
              </h1>
              
              <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
                Unlock the power of artificial intelligence for your business. From custom chatbots to advanced AI tools, we deliver tailored solutions.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="https://wa.me/917579500264?text=Hi%20AINOR!%20I'm%20interested%20in%20AI%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-indigo-500 text-white rounded-xl font-medium hover:bg-indigo-600 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FaWhatsapp className="w-5 h-5" />
                  Get AI Consultation
                </motion.a>
                <Link
                  to="/portfolio"
                  className="px-8 py-4 bg-white text-[#1a1a1a] rounded-xl font-medium hover:bg-gray-100 transition-colors border border-gray-200 text-center"
                >
                  View AI Projects
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 text-indigo-500 rounded-full mb-6 border border-indigo-100">
                <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                <span className="font-semibold text-sm">What We Offer</span>
              </span>
              
              <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a]">
                Our AI
                <span className="block mt-2 text-indigo-500">Services</span>
              </h2>
            </motion.div>

            <motion.div 
              className="grid md:grid-cols-2 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {aiServices.map((service, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-3xl p-8 border border-gray-100"
                  variants={cardVariants}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="text-5xl mb-6">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-[#1a1a1a] mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 text-indigo-500 rounded-full mb-6 border border-indigo-100">
                <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                <span className="font-semibold text-sm">Our Process</span>
              </span>
              
              <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a]">
                How We Build
                <span className="block mt-2 text-indigo-500">AI Solutions</span>
              </h2>
            </motion.div>

            <motion.div 
              className="grid md:grid-cols-5 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  className="relative text-center"
                  variants={cardVariants}
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-indigo-500 text-white flex items-center justify-center font-bold text-xl">
                    {step.step}
                  </div>
                  <h3 className="font-bold text-[#1a1a1a] mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                  
                  {index < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-0.5 bg-gray-200">
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-t-2 border-r-2 border-gray-300 rotate-45" />
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-12 border border-gray-100"
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {[
                  { value: '50+', label: 'AI Projects' },
                  { value: '98%', label: 'Accuracy Rate' },
                  { value: '40%', label: 'Cost Savings' },
                  { value: '24/7', label: 'AI Support' },
                ].map((stat, index) => (
                  <div key={index}>
                    <div className="text-4xl md:text-5xl font-bold text-indigo-500 mb-2">{stat.value}</div>
                    <div className="text-gray-600 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#1a1a1a] rounded-3xl p-12 md:p-16 text-center relative overflow-hidden"
            >
              {/* Decorative element */}
              <motion.svg
                className="absolute top-8 right-8 w-24 h-24 opacity-10"
                viewBox="0 0 100 100"
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              >
                <circle cx="50" cy="50" r="6" fill="white" />
                {[0, 72, 144, 216, 288].map((angle, i) => (
                  <g key={i} transform={`rotate(${angle} 50 50)`}>
                    <line x1="50" y1="50" x2="50" y2="15" stroke="white" strokeWidth="2" />
                    <polygon points="45,20 50,8 55,20" fill="white" />
                  </g>
                ))}
              </motion.svg>

              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business with AI?
              </h2>
              <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                Contact us for a free AI consultation and discover how our solutions can automate, optimize, and grow your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="https://wa.me/917579500264?text=Hi%20AINOR!%20I%20want%20to%20discuss%20AI%20solutions%20for%20my%20business."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-500 text-white rounded-xl font-medium hover:bg-green-600 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FaWhatsapp className="w-5 h-5" />
                  Start AI Journey
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

export default AiServicesPage;
