import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import SEOHead from '../components/seo/SEOHead';
import ModernPageLayout from '../components/layout/ModernPageLayout';

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

  const contactMethods = [
    {
      icon: <FaWhatsapp className="text-2xl" />,
      title: 'WhatsApp',
      description: 'Quick response within minutes',
      action: 'Chat Now',
      link: 'https://wa.me/917579500264?text=Hi%20AINOR!%20I%27m%20interested%20in%20your%20services.',
      color: 'green',
    },
    {
      icon: <FaEnvelope className="text-2xl" />,
      title: 'Email',
      description: 'support@myainor.com',
      action: 'Send Email',
      link: 'mailto:support@myainor.com',
      color: 'blue',
    },
    {
      icon: <FaPhone className="text-2xl" />,
      title: 'Phone',
      description: '+91 75795 00264',
      action: 'Call Now',
      link: 'tel:+917579500264',
      color: 'purple',
    },
  ];

  const colorMap = {
    green: { bg: 'bg-green-50', text: 'text-green-600' },
    blue: { bg: 'bg-blue-50', text: 'text-primary' },
    purple: { bg: 'bg-purple-50', text: 'text-purple-600' },
  };

  return (
    <>
      <SEOHead 
        title="Contact AINOR - Get in Touch for Digital Solutions"
        description="Contact AINOR for professional web development, digital solutions, and custom software services. Get in touch via WhatsApp, email, or phone."
        canonicalUrl="https://myainor.com/contact"
      />

      <ModernPageLayout>
        {/* Hero Section */}
        <section className="bg-white rounded-3xl p-6 md:p-12 shadow-soft relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-60" />
          
          <div className="relative z-10 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="inline-flex items-center gap-2 bg-gray-50 border border-gray-100 px-3 py-1.5 rounded-full mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
                </span>
                <span className="text-xs font-semibold text-gray-600 tracking-wide uppercase">Get in Touch</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#111318] mb-4">
                Let's <span className="text-primary">Talk</span>
              </h1>
              
              <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-3 gap-4">
          {contactMethods.map((method, idx) => (
            <motion.a
              key={idx}
              href={method.link}
              target={method.link.startsWith('http') ? '_blank' : undefined}
              rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-soft card-hover text-center group"
            >
              <div className={`w-14 h-14 mx-auto rounded-xl ${colorMap[method.color].bg} ${colorMap[method.color].text} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                {method.icon}
              </div>
              <h3 className="font-bold text-lg mb-1">{method.title}</h3>
              <p className="text-sm text-gray-500 mb-3">{method.description}</p>
              <span className="text-sm font-semibold text-primary">{method.action} →</span>
            </motion.a>
          ))}
        </div>

        {/* Contact Form & Info */}
        <div className="grid lg:grid-cols-5 gap-4">
          {/* Form */}
          <div className="lg:col-span-3 bg-white rounded-3xl p-8 shadow-soft">
            <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                  placeholder="How can we help?"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-black hover:bg-gray-800 text-white py-3 rounded-xl font-bold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              
              {submitStatus === 'success' && (
                <div className="p-4 bg-green-50 text-green-700 rounded-xl text-center">
                  Message sent successfully! We'll get back to you soon.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="p-4 bg-red-50 text-red-700 rounded-xl text-center">
                  Something went wrong. Please try again or contact us directly.
                </div>
              )}
            </form>
          </div>

          {/* Info Cards */}
          <div className="lg:col-span-2 space-y-4">
            {/* Quick Contact */}
            <div className="bg-[#111318] rounded-3xl p-6 shadow-soft text-white">
              <h3 className="font-bold text-lg mb-4">Prefer a quick chat?</h3>
              <p className="text-gray-400 text-sm mb-4">
                WhatsApp is the fastest way to reach us. We typically respond within minutes.
              </p>
              <a
                href="https://wa.me/917579500264?text=Hi%20AINOR!%20I%27m%20interested%20in%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-bold transition-colors"
              >
                <FaWhatsapp className="text-lg" />
                Chat on WhatsApp
              </a>
            </div>

            {/* Location */}
            <div className="bg-white rounded-3xl p-6 shadow-soft">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h3 className="font-bold">Our Location</h3>
                  <p className="text-sm text-gray-500">Remote-first company</p>
                </div>
              </div>
              <p className="text-sm text-gray-600">
                We're a remote-first company with team members across India. We serve clients globally.
              </p>
            </div>

            {/* Response Time */}
            <div className="bg-white rounded-3xl p-6 shadow-soft">
              <h3 className="font-bold mb-2">Response Time</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">WhatsApp</span>
                  <span className="font-medium text-green-600">~5 minutes</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Email</span>
                  <span className="font-medium">Within 24 hours</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Phone</span>
                  <span className="font-medium">9 AM - 9 PM IST</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ModernPageLayout>
    </>
  );
};

export default ContactPage;
