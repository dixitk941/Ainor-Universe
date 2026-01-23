import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaBriefcase, FaLaptopCode, FaUsers, FaCoffee, FaRocket, FaHeart, FaCheckCircle, FaArrowRight } from 'react-icons/fa';
import SEOHead from '../components/seo/SEOHead';
import ModernPageLayout from '../components/layout/ModernPageLayout';

const CareersPage = () => {
  const benefits = [
    { icon: FaLaptopCode, title: 'Remote Work', desc: 'Work from anywhere in India or globally' },
    { icon: FaUsers, title: 'Collaborative Team', desc: 'Work with talented and passionate people' },
    { icon: FaCoffee, title: 'Flexible Hours', desc: 'Balance work with your personal life' },
    { icon: FaRocket, title: 'Growth Opportunities', desc: 'Learn and advance your career with us' },
    { icon: FaHeart, title: 'Great Culture', desc: 'Fun, inclusive, and supportive environment' },
    { icon: FaBriefcase, title: 'Exciting Projects', desc: 'Work on diverse and challenging projects' },
  ];

  const openPositions = [
    {
      title: 'Senior Full-Stack Developer',
      type: 'Full-time',
      location: 'Remote / Hybrid',
      skills: ['React', 'Node.js', 'MongoDB', 'TypeScript'],
      description: 'We\'re looking for an experienced full-stack developer to lead development projects and mentor junior developers.',
    },
    {
      title: 'UI/UX Designer',
      type: 'Full-time',
      location: 'Remote',
      skills: ['Figma', 'Adobe XD', 'User Research', 'Prototyping'],
      description: 'Join our design team to create beautiful and intuitive user experiences for our clients.',
    },
    {
      title: 'Mobile App Developer',
      type: 'Full-time',
      location: 'Remote / Hybrid',
      skills: ['React Native', 'Flutter', 'iOS', 'Android'],
      description: 'Help us build world-class mobile applications for startups and enterprises.',
    },
    {
      title: 'Digital Marketing Specialist',
      type: 'Part-time / Contract',
      location: 'Remote',
      skills: ['SEO', 'Google Ads', 'Social Media', 'Analytics'],
      description: 'Drive growth and visibility for our clients through strategic digital marketing campaigns.',
    },
    {
      title: 'Junior Web Developer',
      type: 'Internship / Full-time',
      location: 'Remote',
      skills: ['HTML', 'CSS', 'JavaScript', 'React basics'],
      description: 'Great opportunity for freshers to learn and grow with hands-on project experience.',
    },
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

      <ModernPageLayout>
        {/* Hero Section */}
        <section className="bg-white rounded-3xl p-6 md:p-12 shadow-soft relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-green-50 rounded-full blur-3xl opacity-60" />
          
          <div className="relative z-10 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="inline-flex items-center gap-2 bg-gray-50 border border-gray-100 px-3 py-1.5 rounded-full mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                </span>
                <span className="text-xs font-semibold text-gray-600 tracking-wide uppercase">We're Hiring!</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#111318] mb-4">
                Join the <span className="text-primary">AINOR</span> Team
              </h1>
              
              <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                Be part of a passionate team building innovative digital solutions. We're always looking for talented people to join us.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Why Join Us */}
        <section className="bg-white rounded-3xl p-6 md:p-10 shadow-soft">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-3">Why Join AINOR?</h2>
            <p className="text-gray-500">Great perks and a culture that values your growth</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="p-5 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-soft transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                  <benefit.icon className="text-xl" />
                </div>
                <h3 className="font-bold mb-1">{benefit.title}</h3>
                <p className="text-sm text-gray-500">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Our Values */}
        <section className="bg-gradient-to-br from-primary to-blue-600 rounded-3xl p-6 md:p-10 text-white">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-3">Our Values</h2>
            <p className="text-white/70">What drives us every day</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {values.map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.05 }}
                className="flex items-start gap-3 bg-white/10 backdrop-blur-sm p-4 rounded-xl"
              >
                <FaCheckCircle className="text-green-400 flex-shrink-0 mt-0.5" />
                <span>{value}</span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Open Positions */}
        <section className="bg-white rounded-3xl p-6 md:p-10 shadow-soft">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-3">Open Positions</h2>
            <p className="text-gray-500">Find your next opportunity at AINOR</p>
          </div>

          <div className="space-y-4">
            {openPositions.map((job, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="border border-gray-100 rounded-2xl p-5 md:p-6 hover:shadow-soft hover:border-primary/20 transition-all group"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <h3 className="font-bold text-lg group-hover:text-primary transition-colors">
                        {job.title}
                      </h3>
                      <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-medium">
                        {job.type}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 mb-3">{job.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {job.skills.map((skill, sIdx) => (
                        <span key={sIdx} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-gray-400">{job.location}</span>
                    <a
                      href={`https://wa.me/919667047128?text=Hi%20AINOR!%20I'm%20interested%20in%20the%20${encodeURIComponent(job.title)}%20position.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors"
                    >
                      Apply <FaArrowRight className="text-xs" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-6 md:p-10 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5" />
          
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Don't See a Perfect Fit?</h2>
            <p className="text-gray-400 mb-6 max-w-xl mx-auto">
              We're always looking for talented people. Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <a
              href="https://wa.me/919667047128?text=Hi%20AINOR!%20I'd%20like%20to%20share%20my%20resume%20for%20future%20opportunities."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold transition-colors"
            >
              <FaWhatsapp /> Send Your Resume
            </a>
          </div>
        </section>
      </ModernPageLayout>
    </>
  );
};

export default CareersPage;
