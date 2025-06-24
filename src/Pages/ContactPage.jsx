import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import Button from '../components/ui/Button';
import Section from '../components/layout/Section';
import Container from '../components/layout/Container';
import SEOHead from '../components/seo/SEOHead';

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
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: '4b29b417-55d1-4ac8-8c6e-9ac8097097f8',
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
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
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };
  return (    
    <>
      <SEOHead 
        title="Contact AINOR - Get in Touch for Digital Solutions | Web Development Services"
        description="Contact AINOR for professional web development, digital solutions, and custom software services. Get in touch with our expert team to transform your business ideas into reality."
        keywords="contact AINOR, web development services, digital solutions contact, custom software inquiry, business consultation, project quote, technology services"
        canonicalUrl="https://myainor.com/contact"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": "Contact AINOR",
          "description": "Get in touch with AINOR for professional digital solutions and web development services.",
          "url": "https://myainor.com/contact"
        }}
      />
      
      <div className="min-h-screen bg-white text-gray-900">      {/* Header Section */}
      <Section className="pb-20 relative bg-gradient-to-b from-white to-gray-100">
        <Container>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-black">
              Get In Touch
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Have a project in mind? Let's discuss how we can bring your ideas to life. 
              Our team is ready to help you create extraordinary digital experiences.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 rounded-xl shadow-lg border border-gray-200"            >
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Send Us a Message</h2>
              
              {/* Success Message */}
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800 text-sm">
                    Thank you! Your message has been sent successfully. We'll get back to you soon.
                  </p>
                </div>
              )}
              
              {/* Error Message */}
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-800 text-sm">
                    Sorry, there was an error sending your message. Please try again or contact us directly.
                  </p>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent text-gray-900"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent text-gray-900"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent text-gray-900"
                    placeholder="Project Inquiry"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea 
                    id="message" 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="5" 
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent text-gray-900"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                <Button 
                  type="submit" 
                  variant="dark" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </motion.div>
            
            {/* Contact Information */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-8"
            >
              <div className="bg-gray-100 p-6 rounded-xl border border-gray-200 shadow-md">
                <div className="flex items-start">
                  <div className="bg-gray-200 p-3 rounded-lg mr-4">
                    <FaEnvelope className="h-6 w-6 text-gray-700" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Email Us</h3>
                    <p className="text-gray-600 mb-1">General Inquiries:</p>
                    <a href="mailto:info@ainor.com" className="text-gray-800 hover:text-black font-medium transition-colors">neocodenex@gmail.com</a>
                    <p className="text-gray-600 mt-3 mb-1">Support:</p>
                    <a href="mailto:support@ainor.com" className="text-gray-800 hover:text-black font-medium transition-colors">neocodenex@gmail.com</a>
                  </div>                </div>
              </div>
              
              <div className="bg-gray-100 p-6 rounded-xl border border-gray-200 shadow-md">
                <div className="flex items-start">
                  <div className="bg-gray-200 p-3 rounded-lg mr-4">
                    <FaPhone className="h-6 w-6 text-gray-700" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Call Us</h3>
                    <p className="text-gray-600 mb-1">Sales Department:</p>
                    <p className="text-gray-800 font-medium">+919528202892</p>
                    <p className="text-gray-600 mt-3 mb-1">Technical Support:</p>
                    <p className="text-gray-800 font-medium">+919528202892</p>
                  </div>
                </div>
              </div>
              
              {/* <div className="bg-gray-100 p-6 rounded-xl border border-gray-200 shadow-md">
                <div className="flex items-start">
                  <div className="bg-gray-200 p-3 rounded-lg mr-4">
                    <FaMapMarkerAlt className="h-6 w-6 text-gray-700" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Visit Us</h3>
                    <p className="text-gray-700">
                      1234 Tech Boulevard, <br />
                      Innovation District, <br />
                      San Francisco, CA 94107
                    </p>
                    <p className="text-gray-600 mt-3">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div> */}
            </motion.div>          </div>
        </Container>
      </Section>        {/* Extra padding for mobile navigation */}
      <div className="md:hidden h-16"></div>
    </div>
    </>
  );
};

export default ContactPage;
