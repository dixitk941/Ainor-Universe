import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/layout/Navbar';
import Container from '../components/layout/Container';
import Section from '../components/layout/Section';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const FAQPage = () => {
  const [activeCategory, setActiveCategory] = useState('general');
  const [expandedFaqs, setExpandedFaqs] = useState({});

  // Toggle FAQ item
  const toggleFaq = (id) => {
    setExpandedFaqs(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // FAQ Categories
  const categories = [
    { id: 'general', name: 'General Questions' },
    { id: 'services', name: 'Our Services' },
    { id: 'process', name: 'Working Process' },
    { id: 'pricing', name: 'Pricing & Payments' },
    { id: 'technical', name: 'Technical Support' }
  ];

  // FAQ Data
  const faqData = {
    general: [
      {
        id: 'general-1',
        question: "What is AINOR?",
        answer: "AINOR is a leading web and app development company specializing in creating innovative, user-centered digital solutions for businesses of all sizes. We combine cutting-edge technology with strategic design to deliver exceptional digital experiences that drive growth and engagement."
      },
      {
        id: 'general-2',
        question: "How experienced is your team?",
        answer: "Our team consists of highly skilled professionals with an average of 8+ years of experience in web and app development, UI/UX design, and digital strategy. We continuously invest in training and development to stay at the forefront of industry trends and technologies."
      },
      {
        id: 'general-3',
        question: "What industries do you work with?",
        answer: "We've successfully partnered with clients across diverse industries including e-commerce, healthcare, finance, education, entertainment, and technology startups. Our versatile approach allows us to understand the unique challenges and opportunities in each sector."
      },
      {
        id: 'general-4',
        question: "Do you work with international clients?",
        answer: "Yes, we work with clients globally. Our collaborative workflow and communication processes are designed to accommodate different time zones and ensure seamless project management regardless of geographic location."
      },
      {
        id: 'general-5',
        question: "How do you ensure the quality of your work?",
        answer: "Quality assurance is integrated throughout our development process. We conduct rigorous testing at each stage, including functionality testing, cross-browser compatibility, responsive design verification, performance optimization, and security audits before delivery."
      }
    ],
    services: [
      {
        id: 'services-1',
        question: "What services does AINOR offer?",
        answer: "We offer a comprehensive range of digital services including web development, mobile app development, UI/UX design, e-commerce solutions, and custom software development. We also provide ongoing maintenance, optimization, and digital strategy consulting."
      },
      {
        id: 'services-2',
        question: "Do you build both web and mobile applications?",
        answer: "Yes, we specialize in developing both web applications and native/hybrid mobile apps for iOS and Android platforms. We can recommend the most suitable approach based on your specific requirements, target audience, and business goals."
      },
      {
        id: 'services-3',
        question: "What technologies do you use for development?",
        answer: "We work with a wide range of modern technologies including React, Angular, Vue.js, Node.js, Python, Ruby on Rails, Swift, Kotlin, React Native, and Flutter. Our technology stack is carefully selected based on project requirements to ensure optimal performance and scalability."
      },
      {
        id: 'services-4',
        question: "Can you help with UI/UX design only?",
        answer: "Absolutely. Our design services can be engaged independently of development. We offer comprehensive UI/UX design including user research, wireframing, prototyping, visual design, and usability testing to create intuitive and engaging user experiences."
      },
      {
        id: 'services-5',
        question: "Do you provide website maintenance services?",
        answer: "Yes, we offer ongoing maintenance and support services to ensure your digital products remain secure, up-to-date, and optimized for performance. We provide different maintenance packages tailored to your specific needs and budget."
      }
    ],
    process: [
      {
        id: 'process-1',
        question: "What is your development process?",
        answer: "Our development process follows an agile methodology with six key phases: Discovery & Planning, Design, Development, Testing & QA, Deployment, and Post-Launch Support. We emphasize collaboration, transparency, and iterative improvement throughout the project lifecycle."
      },
      {
        id: 'process-2',
        question: "How long does it typically take to complete a project?",
        answer: "Project timelines vary depending on complexity, scope, and requirements. A simple website might take 4-6 weeks, while complex web applications or mobile apps typically require 3-6 months. During our initial consultation, we'll provide a more accurate timeline based on your specific project."
      },
      {
        id: 'process-3',
        question: "How do you communicate during the project?",
        answer: "We maintain regular communication through scheduled video calls, a dedicated project management platform, and email updates. You'll have a dedicated project manager as your primary point of contact who will provide progress reports and address any questions or concerns throughout the development process."
      },
      {
        id: 'process-4',
        question: "Will I be able to make changes during the development process?",
        answer: "Yes, our agile approach allows for flexibility and accommodates changes throughout the development process. We present work at key milestones for feedback and make adjustments as needed. Significant scope changes may affect timeline and budget, which we'll discuss transparently."
      },
      {
        id: 'process-5',
        question: "What input do you need from me to get started?",
        answer: "To kickstart your project effectively, we need a clear understanding of your business goals, target audience, feature requirements, design preferences, and any technical constraints. Our discovery workshop helps gather this information systematically to create a solid foundation for your project."
      }
    ],
    pricing: [
      {
        id: 'pricing-1',
        question: "How much does it cost to build a website or app?",
        answer: "Project costs vary widely based on complexity, features, design requirements, and timeline. Simple websites typically range from $5,000-$15,000, while custom web applications and mobile apps start at $15,000 and can exceed $100,000 for enterprise solutions. We provide detailed quotes after understanding your specific requirements."
      },
      {
        id: 'pricing-2',
        question: "Do you offer fixed-price or hourly billing?",
        answer: "We offer both fixed-price and time-and-materials billing models. For well-defined projects with clear requirements, fixed-price contracts provide budget certainty. For projects requiring more flexibility or ongoing development, time-and-materials billing allows for adaptability and transparency."
      },
      {
        id: 'pricing-3',
        question: "What payment terms do you offer?",
        answer: "Our standard payment schedule includes an initial deposit (typically 30-40%), followed by milestone-based payments throughout the project. For larger projects, we can create a customized payment schedule that aligns with key deliverables and your budget cycles."
      },
      {
        id: 'pricing-4',
        question: "Are there any ongoing costs after the project is completed?",
        answer: "Ongoing costs may include hosting fees, domain renewals, SSL certificates, third-party service subscriptions, and maintenance/support agreements. We're transparent about all potential costs and can recommend solutions that fit your budget while meeting your performance and security needs."
      },
      {
        id: 'pricing-5',
        question: "Do you offer any discounts or payment plans?",
        answer: "We offer special rates for startups, non-profits, and long-term partnerships. Payment plans can be arranged for larger projects to distribute costs over time. Please discuss your budget constraints with us, and we'll work to find a solution that meets your financial needs."
      }
    ],
    technical: [
      {
        id: 'technical-1',
        question: "Will my website be mobile-friendly?",
        answer: "Absolutely. All our websites and web applications are built with a mobile-first approach, ensuring they function perfectly and look great on all devices and screen sizes. We extensively test on multiple devices and browsers to guarantee responsive performance."
      },
      {
        id: 'technical-2',
        question: "How do you handle website security?",
        answer: "Security is integrated throughout our development process. We implement industry best practices including secure coding standards, data encryption, regular security updates, secure authentication mechanisms, and protection against common vulnerabilities like XSS and CSRF attacks. For e-commerce or sites handling sensitive data, we implement additional security measures."
      },
      {
        id: 'technical-3',
        question: "Can you help with hosting and domain registration?",
        answer: "Yes, we can manage hosting setup, domain registration, and DNS configuration. We'll recommend appropriate hosting solutions based on your project's technical requirements, expected traffic, and budget. We can either set up hosting under your accounts or manage it as part of our ongoing services."
      },
      {
        id: 'technical-4',
        question: "Will my website be SEO-friendly?",
        answer: "Yes, we build all websites with SEO best practices in mind, including semantic HTML structure, optimized performance, mobile responsiveness, and proper metadata implementation. We can also provide additional SEO services including keyword research, content optimization, and technical SEO audits."
      },
      {
        id: 'technical-5',
        question: "What happens if something breaks after launch?",
        answer: "We provide a warranty period (typically 30-60 days) after launch during which we'll fix any bugs or issues at no additional cost. Beyond this period, our maintenance packages cover ongoing support, updates, and troubleshooting to ensure your digital product continues functioning optimally."
      }
    ]
  };

  // Get FAQs for active category
  const activeFaqs = faqData[activeCategory] || [];

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <Section className="pt-32 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <Container>
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Questions</span>
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Find answers to common questions about our services, process, and pricing.
              </p>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* FAQ Content */}
      <Section className="py-12 bg-white">
        <Container>
          {/* Categories */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* FAQ Cards */}
          <div className="max-w-3xl mx-auto">
            <Card className="divide-y divide-gray-100">
              {activeFaqs.map((faq, index) => (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="py-4"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full flex justify-between items-center py-2 px-4 focus:outline-none"
                  >
                    <h3 className="text-lg font-medium text-left text-gray-900">{faq.question}</h3>
                    <span className={`transition-transform duration-300 ${expandedFaqs[faq.id] ? 'rotate-180' : ''}`}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </span>
                  </button>
                  <AnimatePresence>
                    {expandedFaqs[faq.id] && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 pb-2 pt-2 text-gray-600">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </Card>
          </div>
        </Container>
      </Section>

      {/* Still Have Questions */}
      <Section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-4 text-gray-900">
                Still Have Questions?
              </h2>
              <p className="text-gray-600 mb-8">
                Can't find the answer you're looking for? Feel free to reach out to our friendly team.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button href="/contact" variant="primary">
                  Contact Us
                </Button>
                <Button href="mailto:support@ainor.com" variant="outline">
                  Email Support
                </Button>
              </div>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Resources */}
      <Section className="py-16 bg-white">
        <Container>
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-4 text-gray-900">
                Helpful Resources
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Explore our guides and resources to learn more about our services and process.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300">
                <div className="p-6">
                  <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Service Guides</h3>
                  <p className="text-gray-600 mb-4">
                    Detailed information about each of our services, including process, technology, and deliverables.
                  </p>
                  <Button href="/services" variant="link" className="mt-auto">
                    View Guides →
                  </Button>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300">
                <div className="p-6">
                  <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                      <line x1="12" y1="17" x2="12.01" y2="17"></line>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Knowledge Base</h3>
                  <p className="text-gray-600 mb-4">
                    Articles and tutorials covering common technical topics and questions about digital products.
                  </p>
                  <Button href="/resources/knowledge-base" variant="link" className="mt-auto">
                    Browse Articles →
                  </Button>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300">
                <div className="p-6">
                  <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Blog</h3>
                  <p className="text-gray-600 mb-4">
                    Insights, industry trends, and updates from our team of experts on various digital topics.
                  </p>
                  <Button href="/blog" variant="link" className="mt-auto">
                    Read Blog →
                  </Button>
                </div>
              </Card>
            </motion.div>
          </div>
        </Container>
      </Section>

          </>
  );
};

export default FAQPage;

