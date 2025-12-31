import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import Button from '../components/ui/Button';
import Section from '../components/layout/Section';
import Container from '../components/layout/Container';
import SEOHead from '../components/seo/SEOHead';
import SEOText from '../components/seo/SEOText';

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
              {/* WhatsApp Chat Button */}
              <a
                href="https://wa.me/917579500264?text=Hi%20AINOR!%20I%20want%20to%20discuss%20my%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-gradient-to-br from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-center">
                  <div className="bg-white/20 p-3 rounded-lg mr-4">
                    <svg className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-1">Chat on WhatsApp</h3>
                    <p className="text-white/90 text-sm">Get instant responses to your queries</p>
                    <p className="text-white font-medium mt-2">+91 7579500264</p>
                  </div>
                  <div>
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </a>

              <div className="bg-gray-100 p-6 rounded-xl border border-gray-200 shadow-md">
                <div className="flex items-start">
                  <div className="bg-gray-200 p-3 rounded-lg mr-4">
                    <FaEnvelope className="h-6 w-6 text-gray-700" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Email Us</h3>
                    <p className="text-gray-600 mb-1">Support:</p>
                    <a href="mailto:neocodenex@gmail.com" className="text-gray-800 hover:text-black font-medium transition-colors">neocodenex@gmail.com</a>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-100 p-6 rounded-xl border border-gray-200 shadow-md">
                <div className="flex items-start">
                  <div className="bg-gray-200 p-3 rounded-lg mr-4">
                    <FaPhone className="h-6 w-6 text-gray-700" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Call Us</h3>
                    <p className="text-gray-600 mb-1">Technical Support:</p>
                    <p className="text-gray-800 font-medium">+91 9528202892</p>
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
      </Section>      
      
      {/* SEO Content Section */}
      <SEOText page="contact" />
      
      {/* Extra padding for mobile navigation */}
      <div className="md:hidden h-16"></div>
    </div>
    </>
  );
};

export default ContactPage;
