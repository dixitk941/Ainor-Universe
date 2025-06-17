import React from 'react';
import Section from '../layout/Section';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <Section id="contact" bgColor="bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-3 py-1 rounded-full bg-indigo-100 text-indigo-800 text-sm font-medium mb-4">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Let's Discuss Your Project
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-lg">
            Ready to elevate your digital presence? Get in touch with our team to discuss your project and discover how we can help you achieve your business goals.
          </p>
          
          <div className="space-y-4 mb-10">
            {/* <ContactInfo 
              icon={<FaMapMarkerAlt />} 
              title="Our Location" 
              content="123 Innovation Street, San Francisco, CA 94103" 
            /> */}
            <ContactInfo 
              icon={<FaEnvelope />} 
              title="Email Us" 
              content="dixitk941@gmail.com" 
            />
            <ContactInfo 
              icon={<FaPhone />} 
              title="Call Us" 
              content="+919528202892" 
            />
          </div>
          
          <div className="bg-gray-100 p-6 rounded-2xl">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Our Business Hours</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex justify-between">
                <span>Monday - Friday:</span>
                <span className="font-medium">9:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday:</span>
                <span className="font-medium">10:00 AM - 4:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday:</span>
                <span className="font-medium">Closed</span>
              </li>
            </ul>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 mb-1">First name</label>
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 mb-1">Last name</label>
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                  placeholder="john.doe@example.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone (optional)</label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                  placeholder="+1 (555) 000-0000"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Project details</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                  placeholder="Tell us about your project, goals, and timeline..."
                ></textarea>
              </div>
              <div>
                <label className="flex items-center">                  <input
                    type="checkbox"
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <span className="ml-2 text-sm text-gray-600">
                    I agree to the <a href="/privacy-policy" className="text-indigo-600 hover:text-indigo-800">Privacy Policy</a>
                  </span>
                </label>
              </div>
              <div>
                <Button type="submit" variant="primary" size="lg" className="w-full">
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

const ContactInfo = ({ icon, title, content }) => {
  return (
    <div className="flex items-start">
      <div className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 mr-4 flex-shrink-0">
        {React.cloneElement(icon, { className: 'h-5 w-5' })}
      </div>
      <div>
        <h3 className="text-lg font-medium text-gray-900">{title}</h3>
        <p className="text-gray-600">{content}</p>
      </div>
    </div>
  );
};

export default ContactSection;
