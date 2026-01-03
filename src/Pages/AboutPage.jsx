import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaRocket, FaHandshake, FaLightbulb, FaUsers, FaWhatsapp, FaArrowRight,
  FaCode, FaHeart, FaStar, FaGlobe, FaMedal, FaCheckCircle, FaClock,
  FaShieldAlt, FaAward, FaChartLine, FaBrain
} from 'react-icons/fa';
import SEOHead from '../components/seo/SEOHead';
import ModernPageLayout from '../components/layout/ModernPageLayout';
import TiltCard from '../components/ui/TiltCard';
import { BlurReveal, AnimatedCounter, MagneticButton, StaggerContainer, StaggerItem } from '../components/ui/AnimationComponents';
import { GradientText, SpotlightCard, MorphingBackground } from '../components/ui/ScrollAnimations';

const AboutPage = () => {
  // Company milestones with more detail
  const milestones = [
    {
      year: '2023',
      title: 'The Genesis',
      description: 'What started in a hostel room with one developer and a big dream is now AINOR — building smart solutions where tech meets business.',
      icon: FaLightbulb,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      year: '2024',
      title: 'Remote Excellence',
      description: 'Started solo with a remote-first mindset, now growing into a distributed team delivering high-quality solutions across time zones.',
      icon: FaGlobe,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      year: '2025',
      title: '🇮🇳 First in India',
      description: 'Made history by becoming the first company in India to offer subscription-based web development, mobile app, and digital services.',
      icon: FaMedal,
      color: 'from-purple-500 to-pink-500'
    },
    {
      year: 'Future',
      title: 'Global Vision',
      description: 'Expanding our reach globally while maintaining the personal touch that makes AINOR special. The journey is just beginning.',
      icon: FaRocket,
      color: 'from-green-500 to-emerald-500'
    },
  ];

  // Team members with enhanced info
  const teamMembers = [
    {
      name: "Karan Dixit",
      position: "Founder & CEO",
      bio: "A visionary entrepreneur combining academic excellence with practical innovation. His passion for coding drives AINOR's mission to democratize technology.",
      image: "https://genzconnect.vercel.app/assets/KaranDixit.jpg",
      skills: ['Full Stack Development', 'AI/ML', 'Business Strategy'],
      social: { linkedin: '#', github: '#' }
    },
    {
      name: "Mayank Sharma",
      position: "Cyber Security Expert",
      bio: "A dedicated cybersecurity specialist ensuring all AINOR projects meet the highest security standards. Making the digital world safer, one project at a time.",
      image: "/assets/IMG20231016135628.jpg",
      skills: ['Penetration Testing', 'Security Audits', 'Network Security'],
      social: { linkedin: '#', github: '#' }
    },
    {
      name: "Aakash Dixit",
      position: "Business & Design Lead",
      bio: "A strategic expert combining web development, graphic design, and business acumen to create solutions that don't just work, but wow.",
      image: "/assets/IMG_8027.JPG",
      skills: ['UI/UX Design', 'Brand Strategy', 'Project Management'],
      social: { linkedin: '#', github: '#' }
    },
  ];

  // Company values with more detail
  const values = [
    { 
      icon: FaRocket, 
      title: 'Innovation First', 
      description: 'Constantly exploring new technologies to deliver cutting-edge solutions that keep you ahead of the competition.', 
      color: 'blue',
      detail: 'We spend 20% of our time researching emerging technologies'
    },
    { 
      icon: FaHandshake, 
      title: 'True Partnership', 
      description: 'Building long-term relationships as trusted advisors invested in your success, not just vendors.', 
      color: 'purple',
      detail: 'Average client relationship spans 2+ years'
    },
    { 
      icon: FaBrain, 
      title: 'Deep Expertise', 
      description: 'Specialists passionate about their craft, committed to excellence in every line of code.', 
      color: 'yellow',
      detail: 'Combined team experience of 10+ years'
    },
    { 
      icon: FaUsers, 
      title: 'Collaboration', 
      description: 'Diverse perspectives working together to create exceptional solutions that exceed expectations.', 
      color: 'green',
      detail: 'Agile methodology with daily standups'
    },
  ];

  // Stats with more impact
  const stats = [
    { number: 50, suffix: '+', label: 'Projects Delivered', icon: FaCode },
    { number: 100, suffix: '%', label: 'Client Satisfaction', icon: FaHeart },
    { number: 2, suffix: '+', label: 'Years Experience', icon: FaClock },
    { number: 48, suffix: 'h', label: 'Response Time', icon: FaCheckCircle, prefix: '<' },
  ];

  // What makes us different
  const differentiators = [
    {
      title: 'Subscription Model',
      description: 'India\'s first subscription-based development agency. Pay monthly, get unlimited support.',
      icon: '💳'
    },
    {
      title: 'No Hidden Costs',
      description: 'Transparent pricing with everything included. Hosting, SSL, maintenance - all covered.',
      icon: '✨'
    },
    {
      title: 'Rapid Delivery',
      description: 'From concept to launch in weeks, not months. We value your time as much as you do.',
      icon: '⚡'
    },
    {
      title: 'Dedicated Support',
      description: '24/7 support via WhatsApp. We\'re always just a message away.',
      icon: '🛡️'
    },
  ];

  const colorMap = {
    blue: { bg: 'bg-blue-50', text: 'text-primary', gradient: 'from-blue-500 to-cyan-500' },
    purple: { bg: 'bg-purple-50', text: 'text-purple-600', gradient: 'from-purple-500 to-pink-500' },
    yellow: { bg: 'bg-yellow-50', text: 'text-yellow-600', gradient: 'from-yellow-500 to-orange-500' },
    green: { bg: 'bg-green-50', text: 'text-green-600', gradient: 'from-green-500 to-emerald-500' },
  };

  return (
    <>
      <SEOHead 
        title="About AINOR - India's First Subscription-Based Development Agency"
        description="Learn about AINOR, India's first subscription-based web development company. Meet our team and discover our mission to democratize digital services."
        canonicalUrl="https://myainor.com/about"
      />

      <ModernPageLayout>
        {/* Hero Section */}
        <section className="relative bg-white rounded-3xl p-6 md:p-12 lg:p-16 shadow-soft overflow-hidden min-h-[70vh] flex items-center">
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-gradient-to-br from-purple-100 to-blue-100 rounded-full blur-3xl opacity-60" />
          <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full blur-3xl opacity-60" />
          
          <div className="relative z-10 w-full">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center gap-2 bg-gray-50 border border-gray-100 px-4 py-2 rounded-full mb-6"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500" />
                  </span>
                  <span className="text-sm font-semibold text-gray-600 tracking-wide uppercase">Our Story</span>
                </motion.div>
                
                <BlurReveal delay={0.3}>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#111318] mb-6 leading-tight">
                    Building the Future of{' '}
                    <GradientText from="#135bec" to="#8b5cf6" className="font-bold">
                      Digital Products
                    </GradientText>
                  </h1>
                </BlurReveal>
                
                <BlurReveal delay={0.5}>
                  <p className="text-lg md:text-xl text-gray-500 mb-8 leading-relaxed">
                    India's first monthly subscription-based development agency. We're on a mission to make premium digital services accessible to every business, regardless of size.
                  </p>
                </BlurReveal>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="flex flex-wrap gap-4"
                >
                  <MagneticButton>
                    <a
                      href="https://wa.me/917579500264?text=Hi%20AINOR!%20I'd%20like%20to%20learn%20more%20about%20your%20services."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-primary hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition-colors"
                    >
                      Get in Touch <FaArrowRight />
                    </a>
                  </MagneticButton>
                  <MagneticButton>
                    <Link
                      to="/portfolio"
                      className="inline-flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-3 rounded-full font-semibold transition-colors"
                    >
                      View Our Work
                    </Link>
                  </MagneticButton>
                </motion.div>
              </motion.div>

              {/* Hero Visual */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="hidden lg:block"
              >
                <TiltCard tiltAmount={10} scale={1.02}>
                  <div className="relative aspect-square">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary to-purple-600 rounded-3xl transform rotate-3" />
                    <div className="absolute inset-0 bg-white rounded-3xl shadow-2xl flex items-center justify-center p-8">
                      <div className="text-center">
                        <motion.div
                          animate={{ rotate: [0, 360] }}
                          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                          className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-primary to-purple-600 rounded-2xl flex items-center justify-center"
                        >
                          <span className="text-6xl">🚀</span>
                        </motion.div>
                        <h3 className="text-2xl font-bold mb-2">AINOR</h3>
                        <p className="text-gray-500">Innovate. Create. Scale.</p>
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section with Animation */}
        <section className="py-4">
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, idx) => (
              <StaggerItem key={idx}>
                <TiltCard tiltAmount={5} scale={1.02}>
                  <SpotlightCard className="bg-white rounded-2xl p-6 shadow-soft text-center h-full">
                    <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                      <stat.icon className="text-xl" />
                    </div>
                    <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
                      {stat.prefix && <span>{stat.prefix}</span>}
                      <AnimatedCounter target={stat.number} duration={2} />
                      {stat.suffix}
                    </div>
                    <div className="text-sm text-gray-500">{stat.label}</div>
                  </SpotlightCard>
                </TiltCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>

        {/* Our Story - Timeline with Sticky Scroll Effect */}
        <JourneyTimeline milestones={milestones} colorMap={colorMap} />

        {/* What Makes Us Different */}
        <section className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-6 md:p-12 text-white relative overflow-hidden">
          <MorphingBackground className="absolute inset-0 opacity-20" />
          
          <div className="relative z-10">
            <div className="text-center mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <span className="text-sm font-semibold text-purple-400 tracking-wider uppercase mb-2 block">Why Choose Us</span>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">What Makes AINOR Different</h2>
                <p className="text-gray-400 max-w-2xl mx-auto">We're not just another agency. We're your growth partners.</p>
              </motion.div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {differentiators.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <TiltCard tiltAmount={10} scale={1.03}>
                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 h-full">
                      <span className="text-4xl mb-4 block">{item.icon}</span>
                      <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                      <p className="text-sm text-gray-400">{item.description}</p>
                    </div>
                  </TiltCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section with Bento Grid */}
        <section className="pt-6">
          <div className="text-center mb-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-sm font-semibold text-primary tracking-wider uppercase mb-2 block">Our Principles</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Values That Drive Us</h2>
              <p className="text-gray-500 max-w-2xl mx-auto">The core beliefs that shape everything we do</p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <TiltCard tiltAmount={8} scale={1.02}>
                  <SpotlightCard className="bg-white rounded-2xl p-6 shadow-soft h-full">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${colorMap[value.color].gradient} text-white flex items-center justify-center mb-5`}>
                      <value.icon className="text-2xl" />
                    </div>
                    <h3 className="font-bold text-lg mb-2">{value.title}</h3>
                    <p className="text-sm text-gray-500 mb-4">{value.description}</p>
                    <div className="pt-4 border-t border-gray-100">
                      <span className="text-xs text-primary font-medium">{value.detail}</span>
                    </div>
                  </SpotlightCard>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="pt-6">
          <div className="text-center mb-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-sm font-semibold text-primary tracking-wider uppercase mb-2 block">The Humans</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
              <p className="text-gray-500 max-w-2xl mx-auto">The passionate individuals behind AINOR's success</p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {teamMembers.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
              >
                <TiltCard tiltAmount={8} scale={1.02}>
                  <SpotlightCard className="bg-white rounded-3xl p-6 shadow-soft h-full">
                    <div className="text-center mb-6">
                      <div className="w-28 h-28 mx-auto mb-4 rounded-full overflow-hidden bg-gradient-to-br from-primary to-purple-600 p-1">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover rounded-full bg-gray-100"
                          onError={(e) => {
                            e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=6366f1&color=fff&size=128`;
                          }}
                        />
                      </div>
                      <h3 className="font-bold text-xl">{member.name}</h3>
                      <span className="text-sm text-primary font-medium">{member.position}</span>
                    </div>
                    
                    <p className="text-sm text-gray-500 text-center mb-6">{member.bio}</p>
                    
                    <div className="flex flex-wrap justify-center gap-2">
                      {member.skills.map((skill, sIdx) => (
                        <span 
                          key={sIdx}
                          className="text-xs px-3 py-1 bg-gray-100 text-gray-600 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </SpotlightCard>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Company Culture */}
        <section className="bg-gray-50 rounded-3xl p-6 md:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-sm font-semibold text-primary tracking-wider uppercase mb-2 block">Our Culture</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Work Hard, Have Fun, Make History</h2>
              <p className="text-gray-500 mb-6 leading-relaxed">
                At AINOR, we believe in creating an environment where creativity thrives. Our remote-first culture allows us to bring together the best talent from across India, working together seamlessly to deliver exceptional results.
              </p>
              <ul className="space-y-4">
                {[
                  'Remote-first, async-friendly workflow',
                  'Continuous learning and skill development',
                  'Open communication and flat hierarchy',
                  'Work-life balance is non-negotiable',
                ].map((item, idx) => (
                  <motion.li 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0">
                      <FaCheckCircle className="text-xs" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { emoji: '🎯', title: 'Mission Driven', desc: 'Every project has purpose' },
                { emoji: '🤝', title: 'Client First', desc: 'Your success is our success' },
                { emoji: '💡', title: 'Always Learning', desc: 'Growing every single day' },
                { emoji: '🎉', title: 'Celebrate Wins', desc: 'Big or small, we celebrate' },
              ].map((item, idx) => (
                <TiltCard key={idx} tiltAmount={8}>
                  <div className="bg-white rounded-2xl p-5 shadow-soft text-center h-full">
                    <span className="text-3xl mb-3 block">{item.emoji}</span>
                    <h4 className="font-bold mb-1">{item.title}</h4>
                    <p className="text-xs text-gray-500">{item.desc}</p>
                  </div>
                </TiltCard>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="pt-6">
          <div className="bg-gradient-to-br from-primary via-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 shadow-soft text-white text-center relative overflow-hidden">
            <MorphingBackground className="absolute inset-0 opacity-20" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <FaHandshake className="text-5xl mx-auto mb-6 text-white/80" />
                <h2 className="text-3xl md:text-5xl font-bold mb-4">Ready to Work Together?</h2>
                <p className="text-white/80 max-w-2xl mx-auto mb-10 text-lg">
                  Let's discuss how we can help transform your business with our subscription-based development services.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <MagneticButton>
                    <a
                      href="https://wa.me/917579500264?text=Hi%20AINOR!%20I'd%20like%20to%20learn%20more%20about%20your%20services."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold transition-colors text-lg"
                    >
                      <FaWhatsapp className="text-xl" />
                      Chat on WhatsApp
                    </a>
                  </MagneticButton>
                  <MagneticButton>
                    <Link
                      to="/contact"
                      className="flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors text-lg"
                    >
                      Book a Call <FaArrowRight />
                    </Link>
                  </MagneticButton>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </ModernPageLayout>
    </>
  );
};

// Journey Timeline with Sticky Scroll
const JourneyTimeline = ({ milestones, colorMap }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section ref={containerRef} className="py-12">
      <div className="text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-sm font-semibold text-primary tracking-wider uppercase mb-2 block">Our Story</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">The AINOR Journey</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">From a hostel room dream to India's first subscription-based agency</p>
        </motion.div>
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Animated Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-200 hidden md:block">
          <motion.div 
            className="w-full bg-gradient-to-b from-primary to-purple-600"
            style={{ height: lineHeight }}
          />
        </div>

        <div className="space-y-12">
          {milestones.map((milestone, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`flex flex-col md:flex-row items-center gap-8 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
            >
              {/* Content Card */}
              <div className={`w-full md:w-5/12 ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                <TiltCard tiltAmount={5} scale={1.02}>
                  <div className="bg-white rounded-2xl p-6 shadow-soft">
                    <div className={`inline-flex items-center gap-2 mb-3 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${milestone.color} text-white flex items-center justify-center`}>
                        <milestone.icon className="text-lg" />
                      </div>
                      <span className="text-2xl font-bold text-primary">{milestone.year}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                    <p className="text-sm text-gray-500">{milestone.description}</p>
                  </div>
                </TiltCard>
              </div>

              {/* Center Dot */}
              <div className="hidden md:flex w-2/12 justify-center">
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", delay: idx * 0.1 + 0.2 }}
                  className={`w-6 h-6 rounded-full bg-gradient-to-br ${milestone.color} border-4 border-white shadow-lg z-10`}
                />
              </div>

              {/* Empty space for alternating layout */}
              <div className="hidden md:block w-5/12" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
