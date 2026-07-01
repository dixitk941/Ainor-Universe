import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FaRocket, FaHandshake, FaLightbulb, FaUsers, FaWhatsapp, FaArrowRight,
  FaGlobe, FaMedal, FaCheckCircle, FaBrain
} from 'react-icons/fa';
import SEOHead from '../components/seo/SEOHead';
import SEOText from '../components/seo/SEOText';
import {
  PageShell, PageHero, SectionLabel, GradientWord, PrimaryButton, GhostButton, ease,
} from '../components/layout/PageShell';

const AboutPage = () => {
  const milestones = [
    { year: '2023', title: 'The Genesis', description: 'What started in a hostel room with one developer and a big dream is now AINOR — building smart solutions where tech meets business.', icon: FaLightbulb, accent: '#f59e0b' },
    { year: '2024', title: 'Remote Excellence', description: 'Started solo with a remote-first mindset, now growing into a distributed team delivering high-quality solutions across time zones.', icon: FaGlobe, accent: '#0ea5e9' },
    { year: '2025', title: '🇮🇳 First in India', description: 'Made history by becoming the first company in India to offer subscription-based web development, mobile app, and digital services.', icon: FaMedal, accent: '#a855f7' },
    { year: 'Future', title: 'Global Vision', description: 'Expanding our reach globally while maintaining the personal touch that makes AINOR special. The journey is just beginning.', icon: FaRocket, accent: '#22c55e' },
  ];

  const teamMembers = [
    { name: 'Karan Dixit', position: 'Founder & CEO', bio: "A visionary entrepreneur combining academic excellence with practical innovation. His passion for coding drives AINOR's mission to democratize technology.", image: 'https://genzconnect.vercel.app/assets/KaranDixit.jpg', skills: ['Full Stack Development', 'AI/ML', 'Business Strategy'] },
    { name: 'Mayank Sharma', position: 'Cyber Security Expert', bio: 'A dedicated cybersecurity specialist ensuring all AINOR projects meet the highest security standards. Making the digital world safer, one project at a time.', image: '/assets/IMG20231016135628.jpg', skills: ['Penetration Testing', 'Security Audits', 'Network Security'] },
    { name: 'Aakash Dixit', position: 'Business & Design Lead', bio: "A strategic expert combining web development, graphic design, and business acumen to create solutions that don't just work, but wow.", image: '/assets/IMG_8027.JPG', skills: ['UI/UX Design', 'Brand Strategy', 'Project Management'] },
  ];

  const values = [
    { icon: FaRocket, title: 'Innovation First', description: 'Constantly exploring new technologies to deliver cutting-edge solutions that keep you ahead of the competition.', accent: '#6366f1', detail: 'We spend 20% of our time researching emerging technologies' },
    { icon: FaHandshake, title: 'True Partnership', description: 'Building long-term relationships as trusted advisors invested in your success, not just vendors.', accent: '#a855f7', detail: 'Average client relationship spans 2+ years' },
    { icon: FaBrain, title: 'Deep Expertise', description: 'Specialists passionate about their craft, committed to excellence in every line of code.', accent: '#f59e0b', detail: 'Combined team experience of 10+ years' },
    { icon: FaUsers, title: 'Collaboration', description: 'Diverse perspectives working together to create exceptional solutions that exceed expectations.', accent: '#22c55e', detail: 'Agile methodology with daily standups' },
  ];

  const stats = [
    { value: 50, suffix: '+', label: 'Projects' },
    { value: 100, suffix: '%', label: 'Satisfaction' },
    { value: 2, suffix: '+', label: 'Years' },
    { value: 24, suffix: '/7', label: 'Support' },
  ];

  const differentiators = [
    { title: 'Subscription Model', description: "India's first subscription-based development agency. Pay monthly, get unlimited support.", icon: '💳' },
    { title: 'No Hidden Costs', description: 'Transparent pricing with everything included. Hosting, SSL, maintenance - all covered.', icon: '✨' },
    { title: 'Rapid Delivery', description: 'From concept to launch in weeks, not months. We value your time as much as you do.', icon: '⚡' },
    { title: 'Dedicated Support', description: "24/7 support via WhatsApp. We're always just a message away.", icon: '🛡️' },
  ];

  const culturePoints = [
    'Remote-first, async-friendly workflow',
    'Continuous learning and skill development',
    'Open communication and flat hierarchy',
    'Work-life balance is non-negotiable',
  ];

  const cultureCards = [
    { emoji: '🎯', title: 'Mission Driven', desc: 'Every project has purpose' },
    { emoji: '🤝', title: 'Client First', desc: 'Your success is our success' },
    { emoji: '💡', title: 'Always Learning', desc: 'Growing every single day' },
    { emoji: '🎉', title: 'Celebrate Wins', desc: 'Big or small, we celebrate' },
  ];

  return (
    <>
      <SEOHead
        title="About AINOR | MSME Registered Web Agency | Trusted by 50+ Businesses"
        description="🇮🇳 Meet AINOR - subscription-based web development agency. MSME registered (UDYAM-UP-36-0033877). 50+ projects delivered. Trusted by Sttrika, GoForCab, ExamBulletin."
        canonicalUrl="https://myainor.com/about"
      />

      <PageShell>
        <PageHero
          badge="Our Story"
          bgWord="ABOUT"
          title={<>Building the future of{' '}<GradientWord>digital products.</GradientWord></>}
          subtitle="India's first monthly subscription-based development agency. We're on a mission to make premium digital services accessible to every business, regardless of size."
          actions={
            <>
              <PrimaryButton
                href="https://wa.me/917579500264?text=Hi%20AINOR!%20I'd%20like%20to%20learn%20more%20about%20your%20services."
                target="_blank" rel="noopener noreferrer">
                Get in Touch <FaArrowRight size={11} />
              </PrimaryButton>
              <GhostButton href="/portfolio">View Our Work</GhostButton>
            </>
          }
          stats={stats}
        />

        {/* Journey timeline */}
        <JourneyTimeline milestones={milestones} />

        {/* What makes us different */}
        <section className="relative bg-white py-16 md:py-24 overflow-hidden">
          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
            <SectionLabel num={2} title="Why Choose Us" />
            <div className="relative rounded-[2rem] bg-[#111318] p-8 md:p-12 text-white overflow-hidden">
              <div className="absolute -top-24 -right-24 w-72 h-72 bg-indigo-600/30 rounded-full blur-3xl" />
              <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-purple-600/30 rounded-full blur-3xl" />
              <div className="relative z-10">
                <h2 className="text-2xl md:text-4xl font-black tracking-tight mb-3">What Makes AINOR Different</h2>
                <p className="text-gray-400 mb-10 max-w-2xl">We're not just another agency. We're your growth partners.</p>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
                  {differentiators.map((item, idx) => (
                    <motion.div key={idx}
                      initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.08, ease }}
                      className="bg-white/10 border border-white/10 rounded-2xl p-6">
                      <span className="text-3xl mb-4 block">{item.icon}</span>
                      <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                      <p className="text-sm text-gray-400">{item.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="relative bg-[#f5f5f5] py-16 md:py-24 overflow-hidden">
          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
            <SectionLabel num={3} title="Our Principles" />
            <motion.h2 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.7, ease }}
              className="text-[clamp(2rem,4.5vw,3.2rem)] font-black leading-[1.1] tracking-tight text-gray-900 mb-10">
              Values that{' '}<GradientWord>drive us.</GradientWord>
            </motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
              {values.map((value, idx) => (
                <motion.div key={idx}
                  initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.08, ease }}
                  className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-md transition-all">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{ backgroundColor: `${value.accent}18`, color: value.accent }}>
                    <value.icon className="text-xl" />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-gray-900">{value.title}</h3>
                  <p className="text-sm text-gray-500 mb-4">{value.description}</p>
                  <div className="pt-4 border-t border-gray-100">
                    <span className="text-xs font-semibold" style={{ color: value.accent }}>{value.detail}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="relative bg-white py-16 md:py-24 overflow-hidden">
          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
            <SectionLabel num={4} title="The Humans" />
            <motion.h2 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.7, ease }}
              className="text-[clamp(2rem,4.5vw,3.2rem)] font-black leading-[1.1] tracking-tight text-gray-900 mb-10">
              Meet the{' '}<GradientWord>team.</GradientWord>
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-3">
              {teamMembers.map((member, idx) => (
                <motion.div key={idx}
                  initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.55, delay: idx * 0.1, ease }}
                  className="bg-gray-50 border border-gray-200 rounded-3xl p-6 hover:shadow-md transition-all">
                  <div className="text-center mb-6">
                    <div className="w-28 h-28 mx-auto mb-4 rounded-full overflow-hidden bg-gradient-to-br from-indigo-500 to-purple-600 p-1">
                      <img src={member.image} alt={member.name}
                        className="w-full h-full object-cover rounded-full bg-gray-100"
                        onError={(e) => { e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=6366f1&color=fff&size=128`; }} />
                    </div>
                    <h3 className="font-bold text-xl text-gray-900">{member.name}</h3>
                    <span className="text-sm text-indigo-600 font-medium">{member.position}</span>
                  </div>
                  <p className="text-sm text-gray-500 text-center mb-6">{member.bio}</p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {member.skills.map((skill, sIdx) => (
                      <span key={sIdx} className="text-xs px-3 py-1 bg-white border border-gray-200 text-gray-600 rounded-full">{skill}</span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Culture */}
        <section className="relative bg-[#f5f5f5] py-16 md:py-24 overflow-hidden">
          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
            <SectionLabel num={5} title="Our Culture" />
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] font-black leading-[1.1] tracking-tight text-gray-900 mb-6">
                  Work hard, have fun,{' '}<GradientWord>make history.</GradientWord>
                </h2>
                <p className="text-gray-500 mb-6 leading-relaxed">
                  At AINOR, we believe in creating an environment where creativity thrives. Our remote-first culture brings together the best talent from across India, working together seamlessly to deliver exceptional results.
                </p>
                <ul className="space-y-4">
                  {culturePoints.map((item, idx) => (
                    <motion.li key={idx}
                      initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }} transition={{ delay: idx * 0.08 }}
                      className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0">
                        <FaCheckCircle className="text-xs" />
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {cultureCards.map((item, idx) => (
                  <motion.div key={idx}
                    initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }} transition={{ delay: idx * 0.06 }}
                    className="bg-white border border-gray-200 rounded-2xl p-5 text-center hover:shadow-md transition-all">
                    <span className="text-3xl mb-3 block">{item.emoji}</span>
                    <h4 className="font-bold mb-1 text-gray-900">{item.title}</h4>
                    <p className="text-xs text-gray-500">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative bg-white py-16 md:py-24 overflow-hidden">
          <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12">
            <div className="relative rounded-[2rem] bg-[#111318] p-10 md:p-14 text-center text-white overflow-hidden">
              <div className="absolute -top-24 -right-24 w-72 h-72 bg-indigo-600/30 rounded-full blur-3xl" />
              <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-purple-600/30 rounded-full blur-3xl" />
              <div className="relative z-10">
                <FaHandshake className="text-4xl mx-auto mb-6 text-indigo-400" />
                <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4">Ready to Work Together?</h2>
                <p className="text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed">
                  Let's discuss how we can help transform your business with our subscription-based development services.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a href="https://wa.me/917579500264?text=Hi%20AINOR!%20I'd%20like%20to%20learn%20more%20about%20your%20services."
                    target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-7 h-12 rounded-xl font-bold text-sm transition-colors">
                    <FaWhatsapp className="text-lg" /> Chat on WhatsApp
                  </a>
                  <Link to="/contact"
                    className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 px-7 h-12 rounded-xl font-bold text-sm hover:bg-gray-100 transition-colors">
                    Book a Call <FaArrowRight size={12} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <SEOText page="about" />
      </PageShell>
    </>
  );
};

// Journey timeline with animated scroll line
const JourneyTimeline = ({ milestones }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start center', 'end center'] });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section ref={containerRef} className="relative bg-[#f5f5f5] py-16 md:py-24 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <SectionLabel num={1} title="The AINOR Journey" />
        <motion.h2 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7, ease }}
          className="text-[clamp(2rem,4.5vw,3.2rem)] font-black leading-[1.1] tracking-tight text-gray-900 mb-12">
          From a hostel-room dream to{' '}<GradientWord>India's first.</GradientWord>
        </motion.h2>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-200 hidden md:block">
            <motion.div className="w-full bg-gradient-to-b from-indigo-500 to-purple-600" style={{ height: lineHeight }} />
          </div>

          <div className="space-y-8 md:space-y-12">
            {milestones.map((milestone, idx) => (
              <motion.div key={idx}
                initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`flex flex-col md:flex-row items-center gap-8 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className={`w-full md:w-5/12 ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-md transition-all">
                    <div className={`inline-flex items-center gap-2 mb-3 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                      <div className="w-10 h-10 rounded-xl text-white flex items-center justify-center" style={{ backgroundColor: milestone.accent }}>
                        <milestone.icon className="text-lg" />
                      </div>
                      <span className="text-2xl font-black" style={{ color: milestone.accent }}>{milestone.year}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">{milestone.title}</h3>
                    <p className="text-sm text-gray-500">{milestone.description}</p>
                  </div>
                </div>
                <div className="hidden md:flex w-2/12 justify-center">
                  <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }}
                    transition={{ type: 'spring', delay: idx * 0.1 + 0.2 }}
                    className="w-6 h-6 rounded-full border-4 border-white shadow-lg z-10" style={{ backgroundColor: milestone.accent }} />
                </div>
                <div className="hidden md:block w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
