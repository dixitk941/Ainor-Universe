import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEOHead from '../components/seo/SEOHead';

// Color palette: Dark (#1a1a1a), Light (#f5f5f5), Accent (indigo-500)

const AboutPage = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  // Company milestones
  const milestones = [
    {
      year: '2023',
      title: 'Our Beginning',
      description: 'What started in a hostel room with one developer and a big dream is now AINOR — building smart solutions where tech meets business.',
    },
    {
      year: '2024',
      title: 'Remote Excellence',
      description: 'Started solo with a remote-first mindset, now growing into a distributed team delivering high-quality solutions across time zones.',
    },
    {
      year: '2025',
      title: '🇮🇳 First in India',
      description: 'Made history by becoming the first company in India to offer subscription-based web development, mobile app, and digital services.',
    },
  ];

  // Team members
  const teamMembers = [
    {
      name: "Karan Dixit",
      position: "Founder & CEO",
      bio: "A visionary entrepreneur combining academic excellence with practical innovation. His passion for coding drives AINOR's mission to deliver cutting-edge digital solutions.",
      image: "https://genzconnect.vercel.app/assets/KaranDixit.jpg"
    },
    {
      name: "Mayank Sharma",
      position: "Cyber Security Expert",
      bio: "A dedicated cybersecurity specialist ensuring all AINOR projects meet the highest security standards with robust protocols.",
      image: "/assets/IMG20231016135628.jpg"
    },
    {
      name: "Aakash Dixit",
      position: "Business & Design Lead",
      bio: "A strategic expert combining web development, graphic design, and business acumen to bridge client requirements with creative solutions.",
      image: "/assets/IMG_8027.JPG"
    },
  ];

  // Company values
  const values = [
    { icon: '🚀', title: 'Innovation', description: 'Constantly exploring new technologies to deliver cutting-edge solutions.' },
    { icon: '🤝', title: 'Partnership', description: 'Building long-term relationships as trusted advisors invested in your success.' },
    { icon: '💡', title: 'Expertise', description: 'Specialists passionate about their craft, committed to excellence.' },
    { icon: '👥', title: 'Collaboration', description: 'Diverse perspectives working together to create exceptional solutions.' },
  ];

  // Stats
  const stats = [
    { number: '50+', label: 'Projects Delivered' },
    { number: '100%', label: 'Client Satisfaction' },
    { number: '2+', label: 'Years Experience' },
    { number: '<48h', label: 'Response Time' },
  ];

  return (
    <>
      <SEOHead 
        title="About AINOR - India's First Subscription-Based Web Development Company"
        description="Learn about AINOR, India's first subscription-based web development company. Our expert team delivers premium digital solutions at affordable monthly rates."
        canonicalUrl="https://myainor.com/about"
      />

      <div className="min-h-screen bg-[#f5f5f5]">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          {/* Decorative arrows */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.svg
              className="absolute top-20 right-16 w-32 h-32 opacity-[0.1]"
              viewBox="0 0 120 120"
              animate={{ rotate: 360 }}
              transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            >
              <circle cx="60" cy="60" r="8" fill="#6366f1" />
              {[0, 90, 180, 270].map((angle, i) => (
                <g key={i} transform={`rotate(${angle} 60 60)`}>
                  <line x1="60" y1="60" x2="60" y2="20" stroke="#6366f1" strokeWidth="2" />
                  <polygon points="55,25 60,12 65,25" fill="#6366f1" />
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
                <span className="font-semibold text-sm">About Us</span>
              </span>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#1a1a1a] mb-6">
                Building Digital
                <span className="block mt-2 text-indigo-500">Excellence</span>
              </h1>
              
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                AINOR is India's first subscription-based web development company. We help businesses launch and grow their digital presence without massive upfront costs.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100"
                  variants={cardVariants}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="text-3xl md:text-4xl font-bold text-indigo-500 mb-2">{stat.number}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <svg className="absolute top-40 left-10 w-20 h-[200px] opacity-[0.08]" viewBox="0 0 60 200">
              <line x1="30" y1="10" x2="30" y2="180" stroke="#6366f1" strokeWidth="2" strokeDasharray="8 8" />
              <polygon points="23,170 30,190 37,170" fill="#6366f1" />
              {[50, 100, 150].map((y, i) => (
                <circle key={i} cx="30" cy={y} r="5" fill="#6366f1" />
              ))}
            </svg>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 text-indigo-500 rounded-full mb-6 border border-indigo-100">
                  <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                  <span className="font-semibold text-sm">Our Story</span>
                </span>
                
                <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-6">
                  From Hostel Room
                  <span className="block mt-2 text-indigo-500">To Industry First</span>
                </h2>
                
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  What started as a passion project in a college hostel room has evolved into India's first subscription-based web development company. We believed businesses deserved access to premium digital solutions without breaking the bank.
                </p>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-500 text-white rounded-xl font-medium hover:bg-indigo-600 transition-colors"
                >
                  Start Your Journey
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
                    whileHover={{ x: 10, transition: { duration: 0.2 } }}
                  >
                    <div className="flex items-start gap-4">
                      <span className="px-3 py-1 bg-indigo-50 text-indigo-500 rounded-lg font-bold text-sm">
                        {milestone.year}
                      </span>
                      <div>
                        <h3 className="text-lg font-bold text-[#1a1a1a] mb-2">{milestone.title}</h3>
                        <p className="text-gray-600 text-sm">{milestone.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 text-indigo-500 rounded-full mb-6 border border-indigo-100">
                <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                <span className="font-semibold text-sm">Our Values</span>
              </span>
              
              <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a]">
                What Drives
                <span className="block mt-2 text-indigo-500">Our Work</span>
              </h2>
            </motion.div>

            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center"
                  variants={cardVariants}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                >
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold text-[#1a1a1a] mb-3">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <motion.svg
              className="absolute bottom-20 right-10 w-28 h-28 opacity-[0.08]"
              viewBox="0 0 100 100"
              animate={{ rotate: -360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
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
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 text-indigo-500 rounded-full mb-6 border border-indigo-100">
                <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                <span className="font-semibold text-sm">Our Team</span>
              </span>
              
              <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a]">
                Meet The
                <span className="block mt-2 text-indigo-500">Experts</span>
              </h2>
            </motion.div>

            <motion.div 
              className="grid md:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100"
                  variants={cardVariants}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                >
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#1a1a1a] mb-1">{member.name}</h3>
                    <p className="text-indigo-500 font-medium text-sm mb-3">{member.position}</p>
                    <p className="text-gray-600 text-sm">{member.bio}</p>
                  </div>
                </motion.div>
              ))}
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
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Ready to Build Something Amazing?
                </h2>
                <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                  Join 50+ businesses who trust AINOR for their digital success. Let's create something extraordinary together.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/contact"
                    className="px-8 py-4 bg-indigo-500 text-white rounded-xl font-medium hover:bg-indigo-600 transition-colors"
                  >
                    Start Your Project
                  </Link>
                  <Link
                    to="/portfolio"
                    className="px-8 py-4 bg-white/10 text-white rounded-xl font-medium hover:bg-white/20 transition-colors"
                  >
                    View Our Work
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutPage;
