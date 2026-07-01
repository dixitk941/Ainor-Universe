import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaBriefcase, FaLaptopCode, FaUsers, FaCoffee, FaRocket, FaHeart, FaCheckCircle, FaArrowRight } from 'react-icons/fa';
import SEOHead from '../components/seo/SEOHead';
import {
  PageShell, PageHero, SectionLabel, GradientWord, PrimaryButton, WhatsAppButton, ease,
} from '../components/layout/PageShell';

const CareersPage = () => {
  const benefits = [
    { icon: FaLaptopCode, title: 'Remote Work', desc: 'Work from anywhere in India or globally', accent: '#6366f1' },
    { icon: FaUsers, title: 'Collaborative Team', desc: 'Work with talented and passionate people', accent: '#0ea5e9' },
    { icon: FaCoffee, title: 'Flexible Hours', desc: 'Balance work with your personal life', accent: '#f97316' },
    { icon: FaRocket, title: 'Growth Opportunities', desc: 'Learn and advance your career with us', accent: '#22c55e' },
    { icon: FaHeart, title: 'Great Culture', desc: 'Fun, inclusive, and supportive environment', accent: '#ec4899' },
    { icon: FaBriefcase, title: 'Exciting Projects', desc: 'Work on diverse and challenging projects', accent: '#a855f7' },
  ];

  const openPositions = [
    { title: 'Senior Full-Stack Developer', type: 'Full-time', location: 'Remote / Hybrid', skills: ['React', 'Node.js', 'MongoDB', 'TypeScript'], description: "We're looking for an experienced full-stack developer to lead development projects and mentor junior developers." },
    { title: 'UI/UX Designer', type: 'Full-time', location: 'Remote', skills: ['Figma', 'Adobe XD', 'User Research', 'Prototyping'], description: 'Join our design team to create beautiful and intuitive user experiences for our clients.' },
    { title: 'Mobile App Developer', type: 'Full-time', location: 'Remote / Hybrid', skills: ['React Native', 'Flutter', 'iOS', 'Android'], description: 'Help us build world-class mobile applications for startups and enterprises.' },
    { title: 'Digital Marketing Specialist', type: 'Part-time / Contract', location: 'Remote', skills: ['SEO', 'Google Ads', 'Social Media', 'Analytics'], description: 'Drive growth and visibility for our clients through strategic digital marketing campaigns.' },
    { title: 'Junior Web Developer', type: 'Internship / Full-time', location: 'Remote', skills: ['HTML', 'CSS', 'JavaScript', 'React basics'], description: 'Great opportunity for freshers to learn and grow with hands-on project experience.' },
  ];

  const values = [
    'Innovation and creativity in everything we do',
    'Customer success is our success',
    'Continuous learning and improvement',
    'Transparent and honest communication',
    'Work-life balance matters',
    'Diversity and inclusion',
  ];

  return (
    <>
      <SEOHead
        title="Careers at AINOR | Join Our Team"
        description="Join AINOR and be part of a team building innovative digital solutions. Explore open positions in web development, design, and more."
        canonicalUrl="https://myainor.com/careers"
      />

      <PageShell>
        <PageHero
          badge="We're Hiring!"
          bgWord="CAREERS"
          title={<>Join the <GradientWord>AINOR</GradientWord> Team.</>}
          subtitle="Be part of a passionate team building innovative digital solutions. We're always looking for talented people to join us."
          actions={
            <>
              <PrimaryButton href="#positions">
                View Open Roles <FaArrowRight size={11} />
              </PrimaryButton>
              <WhatsAppButton
                href="https://wa.me/917579500264?text=Hi%20AINOR!%20I'd%20like%20to%20share%20my%20resume%20for%20future%20opportunities."
                target="_blank" rel="noopener noreferrer">
                <FaWhatsapp size={14} /> Send Resume
              </WhatsAppButton>
            </>
          }
        />

        {/* Why join */}
        <section className="relative bg-[#f5f5f5] py-16 md:py-24 overflow-hidden">
          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
            <SectionLabel num={1} title="Why Join AINOR" />
            <motion.h2 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.7, ease }}
              className="text-[clamp(2rem,4.5vw,3.2rem)] font-black leading-[1.1] tracking-tight text-gray-900 mb-10">
              Perks &amp; a culture that{' '}
              <GradientWord>values your growth.</GradientWord>
            </motion.h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {benefits.map((b, idx) => (
                <motion.div key={idx}
                  initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.06, ease }}
                  className="group bg-white border border-gray-200 hover:border-gray-300 hover:shadow-md rounded-2xl p-6 transition-all">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: `${b.accent}18`, color: b.accent }}>
                    <b.icon className="text-xl" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1">{b.title}</h3>
                  <p className="text-sm text-gray-500">{b.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="relative bg-white py-16 md:py-24 overflow-hidden">
          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
            <SectionLabel num={2} title="Our Values" />
            <div className="relative rounded-[2rem] bg-[#111318] p-8 md:p-12 text-white overflow-hidden">
              <div className="absolute -top-24 -right-24 w-72 h-72 bg-indigo-600/30 rounded-full blur-3xl" />
              <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-purple-600/30 rounded-full blur-3xl" />
              <div className="relative z-10">
                <h2 className="text-2xl md:text-3xl font-black tracking-tight mb-8">What drives us every day</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {values.map((value, idx) => (
                    <motion.div key={idx}
                      initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }} transition={{ delay: idx * 0.05 }}
                      className="flex items-start gap-3 bg-white/10 p-4 rounded-2xl">
                      <FaCheckCircle className="text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-200">{value}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Open positions */}
        <section id="positions" className="relative bg-[#f5f5f5] py-16 md:py-24 overflow-hidden">
          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
            <SectionLabel num={3} title="Open Positions" />
            <motion.h2 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.7, ease }}
              className="text-[clamp(2rem,4.5vw,3.2rem)] font-black leading-[1.1] tracking-tight text-gray-900 mb-10">
              Find your next{' '}
              <GradientWord>opportunity.</GradientWord>
            </motion.h2>
            <div className="space-y-3">
              {openPositions.map((job, idx) => (
                <motion.div key={idx}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.05, ease }}
                  className="bg-white border border-gray-200 rounded-2xl p-5 md:p-6 hover:shadow-md hover:border-gray-300 transition-all group">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <h3 className="font-bold text-lg text-gray-900 group-hover:text-indigo-600 transition-colors">{job.title}</h3>
                        <span className="text-xs bg-indigo-100 text-indigo-600 px-2 py-0.5 rounded-full font-medium">{job.type}</span>
                      </div>
                      <p className="text-sm text-gray-500 mb-3">{job.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {job.skills.map((skill, sIdx) => (
                          <span key={sIdx} className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-lg">{skill}</span>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-gray-400">{job.location}</span>
                      <a href={`https://wa.me/917579500264?text=Hi%20AINOR!%20I'm%20interested%20in%20the%20${encodeURIComponent(job.title)}%20position.`}
                        target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-[#111318] text-white px-5 h-10 rounded-xl text-sm font-bold hover:bg-gray-800 transition-colors">
                        Apply <FaArrowRight className="text-xs" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
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
                <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-3">Don't See a Perfect Fit?</h2>
                <p className="text-gray-400 mb-8 max-w-xl mx-auto leading-relaxed">
                  We're always looking for talented people. Send us your resume and we'll keep you in mind for future opportunities.
                </p>
                <a href="https://wa.me/917579500264?text=Hi%20AINOR!%20I'd%20like%20to%20share%20my%20resume%20for%20future%20opportunities."
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-7 h-12 rounded-xl font-bold text-sm transition-colors">
                  <FaWhatsapp className="text-lg" /> Send Your Resume
                </a>
              </div>
            </div>
          </div>
        </section>
      </PageShell>
    </>
  );
};

export default CareersPage;
