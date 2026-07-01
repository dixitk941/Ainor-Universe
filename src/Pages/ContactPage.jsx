import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaEnvelope, FaPhone, FaMapMarkerAlt, FaArrowRight } from 'react-icons/fa';
import SEOHead from '../components/seo/SEOHead';
import {
  PageShell, PageHero, SectionLabel, GradientWord, PrimaryButton, WhatsAppButton, ease,
} from '../components/layout/PageShell';

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
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
      icon: <FaWhatsapp className="text-xl" />,
      title: 'WhatsApp',
      description: 'Quick response within minutes',
      action: 'Chat Now',
      link: 'https://wa.me/917579500264?text=Hi%20AINOR!%20I%27m%20interested%20in%20your%20services.',
      accent: '#22c55e',
    },
    {
      icon: <FaEnvelope className="text-xl" />,
      title: 'Email',
      description: 'support@myainor.com',
      action: 'Send Email',
      link: 'mailto:support@myainor.com',
      accent: '#6366f1',
    },
    {
      icon: <FaPhone className="text-xl" />,
      title: 'Phone',
      description: '+91 75795 00264',
      action: 'Call Now',
      link: 'tel:+917579500264',
      accent: '#a855f7',
    },
  ];

  const inputClass = 'w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all outline-none';

  return (
    <>
      <SEOHead
        title="Contact AINOR | Get FREE Project Quote | WhatsApp Available 24/7"
        description="📞 Get your FREE project consultation within 2 hours. WhatsApp: +91-7579500264. No commitment required. 50+ happy clients. Start your project today!"
        canonicalUrl="https://myainor.com/contact"
      />

      <PageShell>
        <PageHero
          badge="Get in Touch"
          bgWord="CONTACT"
          title={<>Let's <GradientWord>Talk.</GradientWord></>}
          subtitle="Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible."
          actions={
            <>
              <WhatsAppButton
                href="https://wa.me/917579500264?text=Hi%20AINOR!%20I%27m%20interested%20in%20your%20services."
                target="_blank" rel="noopener noreferrer">
                <FaWhatsapp size={14} /> WhatsApp Us
              </WhatsAppButton>
              <PrimaryButton href="mailto:support@myainor.com">
                <FaEnvelope size={13} /> Email Us
              </PrimaryButton>
            </>
          }
        />

        {/* Contact methods */}
        <section className="relative bg-[#f5f5f5] py-16 md:py-20 overflow-hidden">
          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
            <SectionLabel num={1} title="Reach Us" />
            <div className="grid md:grid-cols-3 gap-3">
              {contactMethods.map((method, idx) => (
                <motion.a key={idx} href={method.link}
                  target={method.link.startsWith('http') ? '_blank' : undefined}
                  rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.55, delay: idx * 0.08, ease }}
                  className="group relative bg-white border border-gray-200 hover:border-gray-300 hover:shadow-md rounded-2xl p-6 transition-all duration-300 overflow-hidden">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"
                    style={{ background: `radial-gradient(circle at 0% 0%, ${method.accent}12 0%, transparent 60%)` }} />
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                      style={{ backgroundColor: `${method.accent}18`, color: method.accent }}>
                      {method.icon}
                    </div>
                    <h3 className="font-bold text-lg mb-1 text-gray-900">{method.title}</h3>
                    <p className="text-sm text-gray-500 mb-3">{method.description}</p>
                    <span className="text-sm font-semibold flex items-center gap-1" style={{ color: method.accent }}>
                      {method.action} <FaArrowRight className="text-xs" />
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* Form + info */}
        <section className="relative bg-white py-16 md:py-24 overflow-hidden">
          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
            <SectionLabel num={2} title="Send a Message" />
            <div className="grid lg:grid-cols-5 gap-4">
              {/* Form */}
              <div className="lg:col-span-3 bg-gray-50 border border-gray-200 rounded-3xl p-6 md:p-8">
                <h2 className="text-2xl font-black tracking-tight mb-6 text-gray-900">Tell us about your project</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                      <input type="text" name="name" value={formData.name} onChange={handleInputChange} required
                        className={inputClass} placeholder="Your name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <input type="email" name="email" value={formData.email} onChange={handleInputChange} required
                        className={inputClass} placeholder="your@email.com" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                    <input type="text" name="subject" value={formData.subject} onChange={handleInputChange} required
                      className={inputClass} placeholder="How can we help?" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <textarea name="message" value={formData.message} onChange={handleInputChange} required rows={5}
                      className={`${inputClass} resize-none`} placeholder="Tell us about your project..." />
                  </div>
                  <button type="submit" disabled={isSubmitting}
                    className="w-full bg-[#111318] hover:bg-gray-800 text-white py-3.5 rounded-xl font-bold transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
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

              {/* Info cards */}
              <div className="lg:col-span-2 space-y-4">
                <div className="relative rounded-3xl bg-[#111318] p-6 text-white overflow-hidden">
                  <div className="absolute -top-16 -right-16 w-48 h-48 bg-indigo-600/30 rounded-full blur-3xl" />
                  <div className="relative z-10">
                    <h3 className="font-bold text-lg mb-3">Prefer a quick chat?</h3>
                    <p className="text-gray-400 text-sm mb-4">
                      WhatsApp is the fastest way to reach us. We typically respond within minutes.
                    </p>
                    <a href="https://wa.me/917579500264?text=Hi%20AINOR!%20I%27m%20interested%20in%20your%20services."
                      target="_blank" rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-bold transition-colors">
                      <FaWhatsapp className="text-lg" /> Chat on WhatsApp
                    </a>
                  </div>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-3xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center">
                      <FaMapMarkerAlt />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">Our Location</h3>
                      <p className="text-sm text-gray-500">Remote-first company</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    We're a remote-first company with team members across India. We serve clients globally.
                  </p>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-3xl p-6">
                  <h3 className="font-bold mb-3 text-gray-900">Response Time</h3>
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
          </div>
        </section>
      </PageShell>
    </>
  );
};

export default ContactPage;
