import React from 'react';
import { motion } from 'framer-motion';
import Container from '../components/layout/Container';
import Section from '../components/layout/Section';
import SEOHead from '../components/seo/SEOHead';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } }
};

const AiServicesPage = () => (
  <>
    <SEOHead
      title="AI Services & Chatbot Solutions | AINOR Digital Solutions"
      description="Discover AINOR's AI services for businesses: custom chatbots, AI-powered tools, and end-to-end artificial intelligence solutions. Automate, optimize, and grow your business with our expert team."
      keywords="AI services, chatbot development, AI tools, business automation, artificial intelligence, custom chatbot, AI integration, document automation, data analysis, content generation, AI for business, AI consulting, AI solutions, AINOR, web development, digital solutions, India, SaaS, cloud, automation, support bot, lead generation bot, AI-powered analytics, AI company, AI agency, AI development, AI India, AI Europe, AI startup, AI enterprise"
      canonicalUrl="https://myainor.com/ai-services"
      structuredData={{
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "AI Services & Chatbot Solutions",
        "provider": {
          "@type": "Organization",
          "name": "AINOR",
          "url": "https://myainor.com"
        },
        "areaServed": ["IN", "EU", "Global"],
        "description": "AINOR provides AI services for businesses, including custom chatbot development, AI-powered business tools, and end-to-end artificial intelligence solutions for automation and growth."
      }}
    />
    <div className="bg-white text-gray-900">
      <Section className="py-24 md:py-32 bg-gradient-to-b from-blue-50 to-white min-h-screen">
        <Container>
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="text-center mb-16 md:mb-24 px-4 md:px-0"
          >
            <span className="inline-block text-blue-600 font-semibold mb-3 tracking-wide text-lg">AI SERVICES</span>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-gray-900 leading-tight">
              AI Tools & Chatbot Solutions for Businesses
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-8">
              Unlock the power of artificial intelligence for your business. From custom chatbots to advanced AI tools, AINOR delivers tailored solutions that automate, optimize, and transform your operations.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <a href="/contact" className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-medium rounded-full shadow-lg hover:shadow-xl hover:bg-blue-700 transition-all duration-300 text-lg">
                Get a Free AI Consultation
              </a>
              <a href="/portfolio" className="inline-flex items-center px-8 py-4 border-2 border-blue-600 text-blue-600 font-medium rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 text-lg">
                See AI Projects
              </a>
            </div>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: 0, ease: [0.25, 0.1, 0.25, 1] }}
              className="bg-white rounded-[2rem] shadow-xl p-8 text-left border-t-4 border-blue-500 hover:scale-105 hover:shadow-2xl transition-all duration-300"
            >
              <div className="mb-4 flex items-center justify-center">
                <span className="bg-blue-100 text-blue-600 rounded-2xl p-4 text-3xl">
                  🤖
                </span>
              </div>
              <h2 className="text-2xl font-bold mb-3 text-blue-700">Your Chatbot Service</h2>
              <p className="text-gray-700 mb-2">We build intelligent chatbots for websites, customer support, lead generation, and more. Our bots are trained on your business data and can handle real conversations 24/7.</p>
              <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                <li>Custom chatbot design & development</li>
                <li>Integration with websites, WhatsApp, Messenger, and more</li>
                <li>AI-powered FAQ, support, and sales automation</li>
                <li>Analytics & continuous improvement</li>
              </ul>
            </motion.div>
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              className="bg-white rounded-[2rem] shadow-xl p-8 text-left border-t-4 border-purple-500 hover:scale-105 hover:shadow-2xl transition-all duration-300"
            >
              <div className="mb-4 flex items-center justify-center">
                <span className="bg-purple-100 text-purple-600 rounded-2xl p-4 text-3xl">
                  🧠
                </span>
              </div>
              <h2 className="text-2xl font-bold mb-3 text-purple-700">AI Tools for Businesses</h2>
              <p className="text-gray-700 mb-2">Boost productivity and decision-making with AI-powered tools. We create solutions for document automation, data analysis, content generation, and more.</p>
              <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                <li>Document & workflow automation</li>
                <li>AI-driven analytics & reporting</li>
                <li>Content & image generation</li>
                <li>Custom AI integrations for your business needs</li>
              </ul>
            </motion.div>
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              className="bg-white rounded-[2rem] shadow-xl p-8 text-left border-t-4 border-green-500 hover:scale-105 hover:shadow-2xl transition-all duration-300"
            >
              <div className="mb-4 flex items-center justify-center">
                <span className="bg-green-100 text-green-600 rounded-2xl p-4 text-3xl">
                  🚀
                </span>
              </div>
              <h2 className="text-2xl font-bold mb-3 text-green-700">How We Build AI from Scratch</h2>
              <p className="text-gray-700 mb-2">Our team follows a proven process to deliver reliable, scalable AI solutions:</p>
              <ol className="list-decimal list-inside text-gray-600 text-sm space-y-1">
                <li>Business needs analysis & use-case discovery</li>
                <li>Data collection, cleaning, and preparation</li>
                <li>Model selection, training, and evaluation</li>
                <li>Integration with your apps and workflows</li>
                <li>Continuous monitoring & improvement</li>
              </ol>
            </motion.div>
          </div>
          <div className="mt-20 text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">Ready to transform your business with AI?</h3>
            <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">Contact AINOR for a free consultation and discover how our AI solutions can automate, optimize, and grow your business. We deliver secure, scalable, and innovative AI tailored to your needs.</p>
            <a href="/contact" className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-medium rounded-full shadow-lg hover:shadow-xl hover:bg-blue-700 transition-all duration-300 text-lg">
              Get Started with AI
            </a>
          </div>
        </Container>
      </Section>
    </div>
  </>
);

export default AiServicesPage;
