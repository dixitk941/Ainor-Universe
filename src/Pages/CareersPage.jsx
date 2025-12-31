import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';
import SEOHead from '../components/seo/SEOHead';

// Color palette: Dark (#1a1a1a), Light (#f5f5f5), Accent (indigo-500)

const CareersPage = () => {
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

  // Benefits
  const benefits = [
    { icon: '🌍', title: 'Remote-First', description: 'Work from anywhere in the world with flexible hours.' },
    { icon: '💰', title: 'Competitive Pay', description: 'Fair compensation with performance bonuses.' },
    { icon: '📚', title: 'Learning Budget', description: 'Annual stipend for courses and conferences.' },
    { icon: '⏰', title: 'Flexible Hours', description: 'Set your own schedule, focus on results.' },
    { icon: '🚀', title: 'Growth Path', description: 'Clear career progression and mentorship.' },
    { icon: '🎯', title: 'Impact', description: 'Work on projects that matter and make a difference.' },
  ];

  // Values
  const values = [
    { title: 'Innovation First', description: 'We push boundaries and challenge the status quo.' },
    { title: 'Collaboration', description: 'Our success is built on diverse perspectives.' },
    { title: 'Growth Mindset', description: 'Continuous learning and professional development.' },
    { title: 'Work-Life Balance', description: 'Flexibility to thrive professionally and personally.' },
  ];

  return (
    <>
      <SEOHead 
        title="Careers at AINOR - Join Our Team"
        description="Join AINOR's team of innovators. We're looking for talented individuals passionate about building exceptional digital solutions. Remote-first culture with growth opportunities."
        canonicalUrl="https://myainor.com/careers"
      />

      <div className="min-h-screen bg-[#f5f5f5]">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          {/* Decorative arrows */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.svg
              className="absolute top-24 right-16 w-28 h-28 opacity-[0.1]"
              viewBox="0 0 100 100"
              animate={{ rotate: -360 }}
              transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            >
              <circle cx="50" cy="50" r="6" fill="#6366f1" />
              {[0, 120, 240].map((angle, i) => (
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
                <span className="font-semibold text-sm">Careers</span>
              </span>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#1a1a1a] mb-6">
                Join Our
                <span className="block mt-2 text-indigo-500">Team</span>
              </h1>
              
              <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
                Build the future with us. Discover opportunities to grow, innovate, and make an impact.
              </p>

              <motion.a
                href="https://wa.me/917579500264?text=Hi%20AINOR!%20I'm%20interested%20in%20career%20opportunities."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-500 text-white rounded-xl font-medium hover:bg-indigo-600 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaWhatsapp className="w-5 h-5" />
                Get in Touch
              </motion.a>
            </motion.div>
          </div>
        </section>

        {/* Culture Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 text-indigo-500 rounded-full mb-6 border border-indigo-100">
                  <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                  <span className="font-semibold text-sm">Our Culture</span>
                </span>
                
                <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-6">
                  Culture &
                  <span className="block mt-2 text-indigo-500">Values</span>
                </h2>
                
                <div className="space-y-6">
                  {values.map((value, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-4"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="w-2 h-2 rounded-full bg-indigo-500 mt-2 flex-shrink-0" />
                      <div>
                        <h3 className="font-bold text-[#1a1a1a] mb-1">{value.title}</h3>
                        <p className="text-gray-600 text-sm">{value.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="aspect-[4/3] rounded-3xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80" 
                    alt="AINOR team"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
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
                <span className="font-semibold text-sm">Benefits</span>
              </span>
              
              <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a]">
                Why Work
                <span className="block mt-2 text-indigo-500">With Us</span>
              </h2>
            </motion.div>

            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl p-6 border border-gray-100"
                  variants={cardVariants}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Open Positions Notice */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-12 text-center border border-gray-100"
            >
              <div className="text-5xl mb-6">📋</div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a1a] mb-4">
                No Open Positions Right Now
              </h2>
              <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
                We don't have any open positions at the moment, but we're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
              </p>
              <motion.a
                href="mailto:careers@myainor.com"
                className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-500 text-white rounded-xl font-medium hover:bg-indigo-600 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Your Resume
              </motion.a>
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
              className="bg-[#1a1a1a] rounded-3xl p-12 md:p-16 text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Have Questions?
              </h2>
              <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                Want to learn more about working at AINOR? We'd love to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="https://wa.me/917579500264?text=Hi%20AINOR!%20I%20have%20a%20question%20about%20careers."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-500 text-white rounded-xl font-medium hover:bg-green-600 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FaWhatsapp className="w-5 h-5" />
                  Chat With Us
                </motion.a>
                <Link
                  to="/about"
                  className="px-8 py-4 bg-white/10 text-white rounded-xl font-medium hover:bg-white/20 transition-colors"
                >
                  Learn About Us
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CareersPage;
