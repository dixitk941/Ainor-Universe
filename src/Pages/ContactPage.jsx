import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import SEOHead from '../components/seo/SEOHead';

// Color palette: Dark (#1a1a1a), Light (#f5f5f5), Accent (indigo-500)

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: '4b29b417-55d1-4ac8-8c6e-9ac8097097f8',
          ...formData,
          from_name: 'AINOR Website Contact Form',
        }),
      });

      const result = await response.json();
      if (result.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

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

  const contactMethods = [
    {
      icon: <FaWhatsapp className="w-6 h-6" />,
      title: 'WhatsApp',
      description: 'Quick response within minutes',
      action: 'Chat Now',
      link: 'https://wa.me/917579500264?text=Hi%20AINOR!%20I%27m%20interested%20in%20your%20services.',
      primary: true,
    },
    {
      icon: <FaEnvelope className="w-6 h-6" />,
      title: 'Email',
      description: 'support@myainor.com',
      action: 'Send Email',
      link: 'mailto:support@myainor.com',
    },
    {
      icon: <FaPhone className="w-6 h-6" />,
      title: 'Phone',
      description: '+91 75795 00264',
      action: 'Call Now',
      link: 'tel:+917579500264',
    },
  ];

  return (
    <>
      <SEOHead 
        title="Contact AINOR - Get in Touch for Digital Solutions"
        description="Contact AINOR for professional web development, digital solutions, and custom software services. Get in touch via WhatsApp, email, or phone."
        canonicalUrl="https://myainor.com/contact"
      />

      <div className="min-h-screen bg-[#f5f5f5]">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          {/* Decorative arrows */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.svg
              className="absolute top-24 right-20 w-28 h-28 opacity-[0.1]"
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

            <svg className="absolute bottom-20 left-10 w-[150px] h-[80px] opacity-[0.06]" viewBox="0 0 150 80">
              <motion.path
                d="M 10 40 Q 75 0 140 40"
                stroke="#6366f1"
                strokeWidth="2.5"
                fill="none"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: [0, 1, 1, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.polygon
                points="135,35 145,40 135,45"
                fill="#6366f1"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 1, 0] }}
                transition={{ duration: 4, repeat: Infinity, times: [0, 0.4, 0.6, 1] }}
              />
            </svg>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 text-indigo-500 rounded-full mb-6 border border-indigo-100">
                <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                <span className="font-semibold text-sm">Contact Us</span>
              </span>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#1a1a1a] mb-6">
                Let's Build
                <span className="block mt-2 text-indigo-500">Together</span>
              </h1>
              
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Have a project in mind? We'd love to hear from you. Reach out and let's create something extraordinary.
              </p>
            </motion.div>

            {/* Quick Contact Cards */}
            <motion.div 
              className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {contactMethods.map((method, index) => (
                <motion.a
                  key={index}
                  href={method.link}
                  target={method.link.startsWith('http') ? '_blank' : undefined}
                  rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`rounded-2xl p-6 text-center border transition-all duration-300 ${
                    method.primary 
                      ? 'bg-indigo-500 text-white border-indigo-500 hover:bg-indigo-600' 
                      : 'bg-white text-[#1a1a1a] border-gray-100 hover:border-indigo-200 hover:shadow-lg'
                  }`}
                  variants={cardVariants}
                  whileHover={{ y: -8 }}
                >
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 ${
                    method.primary ? 'bg-white/20' : 'bg-indigo-50 text-indigo-500'
                  }`}>
                    {method.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-1">{method.title}</h3>
                  <p className={`text-sm mb-4 ${method.primary ? 'text-indigo-100' : 'text-gray-600'}`}>
                    {method.description}
                  </p>
                  <span className={`text-sm font-medium ${method.primary ? 'text-white' : 'text-indigo-500'}`}>
                    {method.action} →
                  </span>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100"
              >
                <h2 className="text-2xl font-bold text-[#1a1a1a] mb-6">Send Us a Message</h2>
                
                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl">
                    <p className="text-green-800 text-sm">
                      ✓ Thank you! Your message has been sent successfully.
                    </p>
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl">
                    <p className="text-red-800 text-sm">
                      Sorry, there was an error. Please try again or contact us directly.
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-[#1a1a1a] mb-2">Your Name</label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-[#f5f5f5] border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-[#1a1a1a] transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-[#1a1a1a] mb-2">Email Address</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-[#f5f5f5] border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-[#1a1a1a] transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-[#1a1a1a] mb-2">Subject</label>
                    <input 
                      type="text" 
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-[#f5f5f5] border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-[#1a1a1a] transition-all"
                      placeholder="Project Inquiry"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-[#1a1a1a] mb-2">Message</label>
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-[#f5f5f5] border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-[#1a1a1a] transition-all resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>
                  
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-indigo-500 text-white rounded-xl font-medium hover:bg-indigo-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </motion.button>
                </form>
              </motion.div>

              {/* Info */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div>
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 text-indigo-500 rounded-full mb-6 border border-indigo-100">
                    <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                    <span className="font-semibold text-sm">Why Choose Us</span>
                  </span>
                  
                  <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-6">
                    Fast Response,
                    <span className="block text-indigo-500">Real Results</span>
                  </h2>
                  
                  <p className="text-gray-600 text-lg leading-relaxed">
                    We typically respond within 2 hours during business hours. Our team is ready to discuss your project and provide a free consultation.
                  </p>
                </div>

                <div className="space-y-4">
                  {[
                    { icon: '⚡', title: 'Quick Response', desc: 'Get a reply within 2 hours' },
                    { icon: '💬', title: 'Free Consultation', desc: 'No commitment, just helpful advice' },
                    { icon: '🎯', title: 'Custom Solutions', desc: 'Tailored to your specific needs' },
                    { icon: '💰', title: 'Transparent Pricing', desc: 'No hidden fees, ever' },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-4 bg-white rounded-xl p-4 border border-gray-100"
                      whileHover={{ x: 5 }}
                    >
                      <span className="text-2xl">{item.icon}</span>
                      <div>
                        <h4 className="font-bold text-[#1a1a1a]">{item.title}</h4>
                        <p className="text-gray-600 text-sm">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* WhatsApp CTA */}
                <motion.a
                  href="https://wa.me/917579500264?text=Hi%20AINOR!%20I%27m%20interested%20in%20your%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full py-4 bg-green-500 text-white rounded-xl font-medium hover:bg-green-600 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FaWhatsapp className="w-5 h-5" />
                  Chat on WhatsApp - Fastest Response
                </motion.a>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactPage;
