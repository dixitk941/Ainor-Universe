import React from 'react';
import { motion } from 'framer-motion';
import { FaLightbulb, FaHandshake, FaTrophy } from 'react-icons/fa';
import { BsArrowRight } from 'react-icons/bs';
import { IoBusinessOutline, IoPeopleOutline, IoRocketOutline, IoTimeOutline, IoCalendarOutline, IoGlobeOutline } from 'react-icons/io5';
import Container from '../components/layout/Container';
import Section from '../components/layout/Section';
import SEOHead from '../components/seo/SEOHead';

const AboutPage = () => {// Company milestones with updated timeline
  const milestones = [
    {
      year: '2023',
      title: 'Our Beginning',
      description: 'What started in a hostel room with one developer and a big dream is now AINOR — building smart solutions where tech meets business.'
,
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    },
    {
      year: '2023',
      title: 'First Major Project',
      description: 'Successfully launched our first major project, establishing our reputation for delivering high-quality, innovative solutions that exceed client expectations.',
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    },
    {
      year: '2024',
      title: 'Remote Excellence',
      description: 'Started solo with a remote-first mindset, now growing into a distributed team delivering high-quality solutions across time zones.',      
      image: 'https://images.unsplash.com/photo-1587560699334-cc4ff634909a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    },
    {
      year: '2024',
      title: 'International Expansion',
      description: 'Expanded our reach to serve clients internationally, bringing our innovative digital solutions to businesses across different markets and industries.',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    },
    {
      year: '2025',
      title: 'Today & Beyond',
      description: 'Continuing to innovate and grow, we focus on emerging technologies and sustainable solutions that help businesses thrive in the digital future.',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    }
  ];// Team members data with updated information
  const teamMembers = [    {
      name: "Karan Dixit",
      position: "Founder & CEO",
      bio: "A visionary entrepreneur and dedicated technology student, Karan combines academic excellence with practical innovation. His deep passion for coding and web development drives AINOR's mission to deliver cutting-edge digital solutions. As founder and CEO, he leads the company's strategic vision while actively exploring emerging technologies to create meaningful projects that transform businesses and user experiences.",
      expertise: ["Strategic Planning", "Web Development", "Tech Leadership"],
      image: "https://genzconnect.vercel.app/assets/KaranDixit.jpg"
    },    {
      name: "Mayank Sharma",
      position: "Cyber Security Expert",
      bio: "A dedicated cybersecurity specialist and technology student, Mayank brings expertise in protecting digital infrastructure and sensitive data. His passion for coding and cybersecurity ensures that all AINOR projects meet the highest security standards. He specializes in implementing robust security protocols and staying ahead of emerging cyber threats to safeguard our clients' digital assets.",      expertise: ["Cybersecurity", "Network Security", "Threat Analysis"],
      image: "https://neocodenex.tech/static/img/team/Team2.jpg"
    },
    {
      name: "Aakash Dixit",
      position: "Business Development & Web Developer",
      bio: "A strategic business expert and skilled web developer, Aakash brings a unique combination of technical expertise and business acumen to AINOR. His comprehensive understanding of market dynamics and development processes enables him to bridge the gap between client requirements and technical solutions. He specializes in business planning, client relations, and delivering web solutions that drive business growth.",
      expertise: ["Business Development", "Web Development", "Strategic Planning"],
      image: "/assets/IMG_8027.JPG"
    },
    {
      name: "Kushal Sharma",
      position: "Cyber Security & Web Developer (Freelancer)",
      bio: "Kushal joined us as a freelancer, bringing strong skills in both cybersecurity and web development. His expertise helps us deliver secure and robust digital solutions for our clients, and his flexible approach makes him a valuable addition to the team.",
      expertise: ["Cybersecurity", "Web Development", "Freelance Projects"],
      image: "https://genzconnect.vercel.app/assets/kushal.jpg"
    }
  ];

  // Company values with expanded information
  const values = [
    {
      icon: <IoRocketOutline className="w-8 h-8" />,
      color: "bg-blue-100 text-blue-600",
      title: "Innovation",
      description: "We constantly explore new technologies and methodologies to deliver cutting-edge solutions that keep our clients ahead of the curve."
    },
    {
      icon: <FaHandshake className="w-8 h-8" />,
      color: "bg-green-100 text-green-600",
      title: "Partnership",
      description: "We build long-term relationships with our clients, becoming trusted advisors who are invested in their success."
    },
    {
      icon: <FaLightbulb className="w-8 h-8" />,
      color: "bg-amber-100 text-amber-600",
      title: "Expertise",
      description: "Our team consists of specialists who are passionate about their craft and committed to delivering excellence in every project."
    },
    {
      icon: <IoPeopleOutline className="w-8 h-8" />,
      color: "bg-purple-100 text-purple-600",
      title: "Collaboration",
      description: "We believe in the power of diverse perspectives and foster an environment where team members work together to create exceptional solutions."
    },
    {
      icon: <IoTimeOutline className="w-8 h-8" />,
      color: "bg-rose-100 text-rose-600",
      title: "Reliability",
      description: "Our clients can depend on us to deliver high-quality work on time and within budget, every time."
    },
    {
      icon: <IoBusinessOutline className="w-8 h-8" />,
      color: "bg-indigo-100 text-indigo-600",
      title: "Integrity",
      description: "We operate with honesty, transparency, and strong ethical principles in all our business dealings."
    }
  ];
  // Company achievements data
  const companyAchievements = {
    awards: [
      {
        title: "Best Tech Innovator 2024",
        organization: "Tech Excellence Awards",
        description: "Recognized for our innovative approach to solving complex business challenges through technology."
      },
      {
        title: "Top Web Development Agency",
        organization: "Digital Design Awards",
        description: "Ranked among the top web development agencies for creating high-impact digital experiences."
      },
      {
        title: "Best Workplace Culture",
        organization: "Employer Excellence",
        description: "Awarded for our inclusive, innovative, and supportive workplace environment."
      }
    ],
    stats: [
      { number: "20+", label: "Projects Completed" },
      { number: "15+", label: "Happy Clients" },
      { number: "100%", label: "Client Satisfaction" },
      { number: "2+", label: "Years Experience" }
    ]
  };// Animation variants for One UI 7 style
  const fadeIn = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5, 
        ease: [0.25, 0.1, 0.25, 1] // custom cubic bezier for One UI feel
      }
    }  };return (
    <>
      <SEOHead 
        title="About AINOR - Our Story, Team & Mission | Digital Solutions Company"
        description="Learn about AINOR's journey, meet our expert team, and discover our mission to transform businesses through innovative digital solutions and cutting-edge technology."
        keywords="AINOR about, company story, development team, Karan Dixit, Mayank Sharma, Aakash Dixit, digital agency history, technology expertise, business transformation"
        canonicalUrl="https://myainor.com/about"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "name": "About AINOR",
          "description": "Learn about AINOR's journey, team, and mission to transform businesses through innovative digital solutions.",
          "url": "https://myainor.com/about",
          "mainEntity": {
            "@type": "Organization",
            "name": "AINOR",
            "foundingDate": "2023",
            "founders": [
              {
                "@type": "Person",
                "name": "Karan Dixit",
                "jobTitle": "Founder & CEO"
              }
            ]
          }
        }}
      />
      
      <div className="bg-white text-gray-900">      {/* Hero Section with One UI 7 inspiration - full-width, large, bold typography */}
      <section className="relative h-screen overflow-hidden mobile-no-top-space">
        {/* Full width background image with overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30 z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="AINOR Team" 
            className="w-full h-full object-cover object-center"
          />
        </div>
        
        {/* Content overlay - One UI 7 style with rounded, bold typography */}
        <div className="relative z-20 h-full flex flex-col justify-center">
          <Container>
            <div className="px-4 md:px-8 max-w-5xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white">
                  We create <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">digital experiences</span> that transform businesses
                </h1>
                <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl font-light">
                  Discover the passionate team behind AINOR and our journey to redefine what's possible in the digital world.
                </p>                <div className="flex flex-wrap gap-5">
                  <button 
                    className="inline-flex items-center px-8 py-4 bg-white text-gray-900 font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                    onClick={() => {
                      const storySection = document.getElementById('story');
                      if (storySection) {
                        storySection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    Our Story
                  </button>
                  <a 
                    href="/contact"
                    className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-medium rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300"
                  >
                    Work With Us
                  </a>
                </div>
              </motion.div>
            </div>
          </Container>
            {/* Scroll indicator - One UI style with subtle animation */}
          <motion.div 
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center cursor-pointer"
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            onClick={() => {
              const storySection = document.getElementById('story');
              if (storySection) {
                storySection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            <span className="text-white/70 text-sm mb-2 font-light">Scroll to explore</span>
            <BsArrowRight className="rotate-90 w-5 h-5 text-white/70" />
          </motion.div>
        </div>
      </section>
      
      {/* SEO-Optimized Company Overview Section */}
      <Section className="py-20 md:py-28 bg-gradient-to-b from-blue-50 to-white" id="company-overview">
        <Container>
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16 md:mb-24 px-4 md:px-0"
          >
            <span className="inline-block text-blue-700 font-semibold mb-3 tracking-wide text-lg">ABOUT AINOR</span>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-gray-900 leading-tight">
              Your Trusted Partner for Digital Transformation, Web Development, and Business Growth
            </h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto mb-6">
              AINOR is a leading digital solutions company based in India, specializing in web development, mobile app development, custom software, cybersecurity, and business consulting. Our mission is to empower startups, enterprises, and global brands with innovative, scalable, and secure technology solutions that drive measurable business results.
            </p>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto mb-4">
              With a team of experienced developers, designers, and cybersecurity experts, we deliver end-to-end digital services including responsive website design, e-commerce platforms, SaaS solutions, UI/UX design, SEO, cloud integration, and IT consulting. Our client-centric approach, transparent communication, and commitment to quality have earned us recognition as one of the top web development agencies in India and Europe.
            </p>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Whether you are a startup looking to launch your first product, an established business seeking digital transformation, or an enterprise aiming for global expansion, AINOR is your partner for success. We combine creativity, technology, and strategy to help you achieve your business goals and stand out in the digital world.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            <div className="bg-white rounded-2xl shadow-md p-8 text-left">
              <h3 className="text-xl font-bold mb-3 text-blue-700">Why Choose AINOR?</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Proven track record of delivering high-quality, innovative digital solutions</li>
                <li>Expertise in the latest web, mobile, and cloud technologies</li>
                <li>Dedicated cybersecurity and data protection for every project</li>
                <li>Transparent, client-focused communication and project management</li>
                <li>Flexible engagement models for startups, SMBs, and enterprises</li>
                <li>Global experience with clients in India, Europe, and beyond</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl shadow-md p-8 text-left">
              <h3 className="text-xl font-bold mb-3 text-blue-700">Our Services</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Custom Web & Mobile App Development</li>
                <li>UI/UX Design & Branding</li>
                <li>Cloud Solutions & SaaS Platforms</li>
                <li>Cybersecurity & Data Protection</li>
                <li>SEO & Digital Marketing</li>
                <li>Business Consulting & IT Strategy</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl shadow-md p-8 text-left">
              <h3 className="text-xl font-bold mb-3 text-blue-700">Industries We Serve</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Startups & Entrepreneurs</li>
                <li>SMBs & Enterprises</li>
                <li>E-commerce & Retail</li>
                <li>Healthcare & Wellness</li>
                <li>Education & E-learning</li>
                <li>Finance & Fintech</li>
                <li>Travel, Hospitality & More</li>
              </ul>
            </div>
          </div>
        </Container>
      </Section>
      
      {/* Main content with seamless scroll sections - One UI 7 style */}
      <div className="bg-white">
        {/* Our Story Section - With timeline cards */}
        <Section className="py-24 md:py-32" id="story">
          <Container>
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mb-16 md:mb-24 px-4 md:px-0"
            >
              <span className="inline-block text-blue-600 font-medium mb-3 tracking-wide">OUR JOURNEY</span>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
                The Story of AINOR
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                From a small startup to a leading digital agency, our journey has been defined by innovation, growth, and client success.
              </p>
            </motion.div>
            
            {/* Timeline style cards with One UI 7-inspired design */}
            <div className="space-y-32 px-4 md:px-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
                  className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 md:gap-16`}
                >
                  {/* Image with One UI 7-style rounded corners */}
                  <div className="w-full md:w-1/2">
                    <div className="rounded-[2.5rem] overflow-hidden shadow-xl">
                      <img
                        src={milestone.image}
                        alt={milestone.title}
                        className="w-full aspect-video object-cover"
                      />
                    </div>
                  </div>
                  
                  {/* Content with One UI 7-style typography */}
                  <div className="w-full md:w-1/2">
                    <div className="p-1">
                      <div className="bg-blue-50 text-blue-600 rounded-full px-5 py-1.5 text-sm font-medium inline-block mb-5">
                        {milestone.year}
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">{milestone.title}</h3>
                      <p className="text-gray-600 text-lg mb-8 leading-relaxed">{milestone.description}</p>
                      
                      <ul className="space-y-4">
                        {index === 0 && (
                          <>
                            <li className="flex items-start">
                              <span className="text-blue-500 mr-3 mt-1 p-1 bg-blue-50 rounded-full"><IoRocketOutline className="w-5 h-5" /></span>
                            <span className="text-gray-700">Built alone from scratch, driven by passion and purpose</span>

                            </li>
                            <li className="flex items-start">
                              <span className="text-blue-500 mr-3 mt-1 p-1 bg-blue-50 rounded-full"><IoBusinessOutline className="w-5 h-5" /></span>
                             <span className="text-gray-700">First office? Just a laptop and a dream in my hostel room</span>

                            </li>
                          </>
                        )}
                        {index === 1 && (
                          <>
                            <li className="flex items-start">
                              <span className="text-blue-500 mr-3 mt-1 p-1 bg-blue-50 rounded-full"><IoBusinessOutline className="w-5 h-5" /></span>
                              <span className="text-gray-700">Signed major contract with industry leader</span>
                            </li>
                            <li className="flex items-start">
                              <span className="text-blue-500 mr-3 mt-1 p-1 bg-blue-50 rounded-full"><IoPeopleOutline className="w-5 h-5" /></span>
                              <span className="text-gray-700">Expanded team to include diverse expertise</span>
                            </li>
                          </>
                        )}
                        {index === 2 && (
                          <>
                            <li className="flex items-start">
                              <span className="text-blue-500 mr-3 mt-1 p-1 bg-blue-50 rounded-full"><IoRocketOutline className="w-5 h-5" /></span>
                              <span className="text-gray-700">Pioneered fully remote workflow systems</span>
                            </li>
                            <li className="flex items-start">
                              <span className="text-blue-500 mr-3 mt-1 p-1 bg-blue-50 rounded-full"><IoTimeOutline className="w-5 h-5" /></span>
                              <span className="text-gray-700">Maintained 100% client retention during transition</span>
                            </li>
                          </>
                        )}
                        {index === 3 && (
                          <>
                            <li className="flex items-start">
                              <span className="text-blue-500 mr-3 mt-1 p-1 bg-blue-50 rounded-full"><IoGlobeOutline className="w-5 h-5" /></span>
                              <span className="text-gray-700">Established European headquarters in Berlin</span>
                            </li>
                            <li className="flex items-start">
                              <span className="text-blue-500 mr-3 mt-1 p-1 bg-blue-50 rounded-full"><IoPeopleOutline className="w-5 h-5" /></span>
                             <span className="text-gray-700">No international team — just local passion and global ambition</span>

                            </li>
                          </>
                        )}
                        {index === 4 && (
                          <>
                            <li className="flex items-start">
                              <span className="text-blue-500 mr-3 mt-1 p-1 bg-blue-50 rounded-full"><FaLightbulb className="w-5 h-5" /></span>
                              <span className="text-gray-700">Released AINOR Development Framework</span>
                            </li>
                            <li className="flex items-start">
                              <span className="text-blue-500 mr-3 mt-1 p-1 bg-blue-50 rounded-full"><IoRocketOutline className="w-5 h-5" /></span>
                              <span className="text-gray-700">First AI-powered client project launched</span>
                            </li>
                          </>
                        )}
                        {index === 5 && (
                          <>
                            <li className="flex items-start">
                              <span className="text-blue-500 mr-3 mt-1 p-1 bg-blue-50 rounded-full"><IoCalendarOutline className="w-5 h-5" /></span>
                              <span className="text-gray-700">Celebrating 3 years of continuous growth</span>
                            </li>
                            <li className="flex items-start">
                              <span className="text-blue-500 mr-3 mt-1 p-1 bg-blue-50 rounded-full"><IoRocketOutline className="w-5 h-5" /></span>
                              <span className="text-gray-700">Expanded service offerings to include cutting-edge technologies</span>
                            </li>
                          </>
                        )}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </Container>
        </Section>
        
        {/* Our Values Section - One UI 7-style with rounded cards */}
        <Section className="py-24 md:py-32 bg-gray-50" id="values">
          <Container>
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mb-16 md:mb-24 px-4 md:px-0"
            >
              <span className="inline-block text-purple-600 font-medium mb-3 tracking-wide">OUR VALUES</span>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
                What Drives Us
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                These core principles guide our work, our interactions, and our approach to solving problems.
              </p>
            </motion.div>
            
            {/* One UI 7-style cards with gentle shadows and rounded corners */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  <div className={`p-8 rounded-[2rem] h-full ${value.color} transition-all duration-300 hover:shadow-lg`}>
                    <div className="mb-6 bg-white/80 w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm">
                      <div className="text-2xl">{value.icon}</div>
                    </div>
                    <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                    <p className="text-gray-700">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </Container>
        </Section>
        
        {/* Our Team Section - One UI 7-style team cards */}
        <Section className="py-24 md:py-32" id="team">
          <Container>
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mb-16 md:mb-24 px-4 md:px-0"
            >
              <span className="inline-block text-green-600 font-medium mb-3 tracking-wide">OUR PEOPLE</span>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
                Meet Our Team
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                The talented professionals who bring creativity, expertise, and passion to every project.
              </p>
            </motion.div>
            {/* One UI 7-style team cards with large rounded corners */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto px-4 md:px-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                  className="group cursor-pointer"
                >
                  <div className="bg-white rounded-[2rem] overflow-hidden shadow-lg transition-all duration-500 hover:shadow-xl h-full">
                    <div className="relative aspect-square overflow-hidden">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-80 transition-all duration-300"></div>
                      
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <h3 className="text-xl font-bold">{member.name}</h3>
                        <p className="text-blue-300 font-medium">{member.position}</p>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <p className="text-gray-600 mb-5 text-sm">{member.bio.substring(0, 100)}...</p>
                      
                      <div className="flex flex-wrap gap-2">
                        {member.expertise.slice(0, 2).map((skill, i) => (
                          <span key={i} className="inline-block bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
              <div className="text-center mt-16 px-4 md:px-0">
              <a 
                href="/careers" 
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-medium rounded-full shadow-lg hover:shadow-xl hover:bg-blue-700 transition-all duration-300"
              >
                Join Our Team
              </a>
            </div>
          </Container>
        </Section>
          
        {/* Achievements Section - One UI 7-style stats and awards */}
        <Section className="py-24 md:py-32 bg-gray-50" id="achievements">
          <Container>
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mb-16 md:mb-24 px-4 md:px-0"
            >
              <span className="inline-block text-amber-600 font-medium mb-3 tracking-wide">OUR SUCCESS</span>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
                Achievements & Recognition
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                The milestones and recognition we've earned through our dedication to excellence.
              </p>
            </motion.div>

            {/* Key Stats - One UI 7-style with large rounded corners */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-4 md:px-8 mb-20">
              {companyAchievements.stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  <div className="bg-white p-6 rounded-[2rem] shadow-lg text-center h-full flex flex-col justify-center py-10">
                    <h3 className="text-3xl md:text-4xl font-bold text-blue-600 mb-3">{stat.number}</h3>
                    <p className="text-gray-600">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Awards - One UI 7-style cards */}
            <div className="px-4 md:px-8 mb-20">
              <h3 className="text-2xl font-bold mb-10 text-center text-gray-900">Awards & Recognition</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {companyAchievements.awards.map((award, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                  >
                    <div className="bg-white p-8 rounded-[2rem] shadow-lg h-full">
                      <div className="flex items-center mb-5">
                        <div className="bg-amber-100 text-amber-600 p-3 rounded-2xl mr-4">
                          <FaTrophy className="h-6 w-6" />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900">{award.title}</h4>
                          <p className="text-blue-600 text-sm">{award.organization}</p>
                        </div>
                      </div>
                      <p className="text-gray-600">{award.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>            </div>
          </Container>
        </Section>
        
        {/* CTA Section - One UI 7-style with large radius and gradient */}
        <section className="py-20 md:py-24">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
              className="px-6 py-16 md:p-16 bg-gradient-to-br from-blue-500 to-indigo-700 rounded-[2.5rem] text-white shadow-xl mx-4 md:mx-8"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between max-w-6xl mx-auto">
                <div className="mb-10 md:mb-0 md:max-w-xl">
                  <h2 className="text-3xl md:text-4xl font-bold mb-5">Ready to transform your digital presence?</h2>
                  <p className="text-xl text-blue-100">Let's discuss how we can help bring your vision to life with innovative solutions.</p>
                </div>                <div>
                  <a 
                    href="/contact" 
                    className="inline-flex items-center text-lg px-8 py-4 bg-white text-gray-900 font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    <span className="flex items-center">
                      Get Started <BsArrowRight className="ml-2" />
                    </span>
                  </a>
                </div>              </div>
            </motion.div>
          </Container>
        </section>
      </div>
    </div>
    </>
  );
};

export default AboutPage;
