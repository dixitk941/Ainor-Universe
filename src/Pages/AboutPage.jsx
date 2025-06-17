import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { FaLightbulb, FaHandshake, FaTrophy } from 'react-icons/fa';
import { BsArrowRight } from 'react-icons/bs';
import { IoBusinessOutline, IoPeopleOutline, IoRocketOutline, IoTimeOutline, IoCalendarOutline, IoGlobeOutline } from 'react-icons/io5';
import Container from '../components/layout/Container';
import Section from '../components/layout/Section';
import Button from '../components/ui/Button';

const AboutPage = () => {  // Refs for section scrolling
  const storyRef = useRef(null);
  const valuesRef = useRef(null);
  const teamRef = useRef(null);
  const achievementsRef = useRef(null);

  // Company milestones with added images
  const milestones = [
    {
      year: '2018',
      title: 'Our Beginning',
      description: 'AINOR was founded with a vision to bridge technology and business needs, starting with just three developers working from a small office.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    },
    {
      year: '2019',
      title: 'First Major Client',
      description: 'Secured our first enterprise client and expanded the team to 10 members, adding design and project management expertise.',
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    },
    {
      year: '2020',
      title: 'Remote Transformation',
      description: 'Successfully pivoted to a fully remote model during the pandemic, maintaining productivity and client satisfaction.',
      image: 'https://images.unsplash.com/photo-1600172454172-594ae98d6646?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    },
    {
      year: '2021',
      title: 'International Expansion',
      description: 'Opened our first international office and began serving clients across Europe and Asia, growing our team to 15 people.',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    },
    {
      year: '2022',
      title: 'Technology Innovation',
      description: 'Launched our proprietary development framework and expanded services to include AI and machine learning solutions.',
      image: 'https://images.unsplash.com/photo-1581091224003-3075cb8aba13?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    },
    {
      year: '2023',
      title: 'Today & Beyond',
      description: 'Now a team of 20+ professionals, we continue to innovate and help businesses of all sizes achieve digital excellence.',
      image: 'https://images.unsplash.com/photo-1496065187959-7f07b8353c55?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    }
  ];

  // Team members data with expanded information
  const teamMembers = [
    {
      name: "Alex Richardson",
      position: "Founder & CEO",
      bio: "With over 15 years of experience in software development, Alex founded AINOR with a vision to create digital solutions that truly impact businesses. His leadership has guided the company from a small startup to an established digital agency.",
      expertise: ["Strategic Planning", "Business Development", "Tech Leadership"],
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
    },
    {
      name: "Samantha Chen",
      position: "Chief Technology Officer",
      bio: "Leading our technical strategy, Samantha brings expertise from top tech companies and ensures we're always using cutting-edge technologies. She oversees all technical aspects of our projects and mentors our development team.",
      expertise: ["System Architecture", "Cloud Infrastructure", "Technical Strategy"],
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
    },
    {
      name: "Marcus Johnson",
      position: "Creative Director",
      bio: "With an eye for design and user experience, Marcus leads our creative team in developing visually stunning and intuitive interfaces. His background in both design and psychology helps create experiences that users love.",
      expertise: ["UX/UI Design", "Brand Identity", "Interactive Experiences"],
      image: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
    },
    {
      name: "Priya Sharma",
      position: "Head of Project Management",
      bio: "Priya ensures every project is delivered on time and exceeds client expectations through her methodical and client-focused approach. Her expertise in agile methodologies keeps our projects running smoothly.",
      expertise: ["Agile/Scrum", "Resource Planning", "Client Relations"],
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
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
        title: "Best Tech Innovator 2022",
        organization: "Tech Excellence Awards",
        description: "Recognized for our innovative approach to solving complex business challenges through technology."
      },
      {
        title: "Top Web Development Agency",
        organization: "Digital Design Awards",
        description: "Ranked among the top 10 web development agencies for creating high-impact digital experiences."
      },
      {
        title: "Best Workplace Culture",
        organization: "Employer Excellence",
        description: "Awarded for our inclusive, innovative, and supportive workplace environment."
      }
    ],
    stats: [
      { number: "50+", label: "Clients Worldwide" },
      { number: "120+", label: "Projects Completed" },
      { number: "98%", label: "Client Satisfaction" },
      { number: "15+", label: "Industry Partnerships" }
    ],
    clientLogos: [
      "https://images.unsplash.com/photo-1603731568139-70a936caeafe?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      "https://images.unsplash.com/photo-1563302111-eab6d75288c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      "https://images.unsplash.com/photo-1600959907489-e50d01d0c11b?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      "https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    ]
  };  // Animation variants for One UI 7 style
  const fadeIn = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5, 
        ease: [0.25, 0.1, 0.25, 1] // custom cubic bezier for One UI feel
      }
    }
  };return (
    <div className="bg-white text-gray-900">
      {/* Hero Section with One UI 7 inspiration - full-width, large, bold typography */}
      <section className="relative h-[85vh] overflow-hidden">
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
                </p>
                <div className="flex flex-wrap gap-5">
                  <Button 
                    variant="light" 
                    is3D={true}
                    className="rounded-full px-8 py-4 text-gray-900 font-medium"
                    onClick={() => storyRef.current.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Our Story
                  </Button>
                  <Button 
                    variant="outline-light" 
                    is3D={false}
                    className="rounded-full px-8 py-4 font-medium border-2"
                    href="/contact"
                  >
                    Work With Us
                  </Button>
                </div>
              </motion.div>
            </div>
          </Container>
          
          {/* Scroll indicator - One UI style with subtle animation */}
          <motion.div 
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center cursor-pointer"
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            onClick={() => storyRef.current.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="text-white/70 text-sm mb-2 font-light">Scroll to explore</span>
            <BsArrowRight className="rotate-90 w-5 h-5 text-white/70" />
          </motion.div>
        </div>
      </section>
      
      {/* Main content with seamless scroll sections - One UI 7 style */}
      <div className="bg-white">
        {/* Our Story Section - With timeline cards */}
        <Section className="py-24 md:py-32" id="story" ref={storyRef}>
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
                              <span className="text-gray-700">Founded with just 3 team members and a vision</span>
                            </li>
                            <li className="flex items-start">
                              <span className="text-blue-500 mr-3 mt-1 p-1 bg-blue-50 rounded-full"><IoBusinessOutline className="w-5 h-5" /></span>
                              <span className="text-gray-700">First office in downtown technology district</span>
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
                              <span className="text-gray-700">Added team members from 5 different countries</span>
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
                              <span className="text-gray-700">Celebrating 5 years of continuous growth</span>
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
        <Section className="py-24 md:py-32 bg-gray-50" id="values" ref={valuesRef}>
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
        <Section className="py-24 md:py-32" id="team" ref={teamRef}>
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 md:px-8">
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
              <Button 
                href="/careers" 
                variant="primary" 
                is3D={true}
                className="rounded-full px-8 py-4 font-medium"
              >
                Join Our Team
              </Button>
            </div>
          </Container>
        </Section>
          
        {/* Achievements Section - One UI 7-style stats and awards */}
        <Section className="py-24 md:py-32 bg-gray-50" id="achievements" ref={achievementsRef}>
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
              </div>
            </div>
            
            {/* Client logos - One UI 7 style simplified layout */}
            <div className="px-4 md:px-8">
              <h3 className="text-2xl font-bold mb-10 text-center text-gray-900">Trusted By Leading Companies</h3>
              <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
                {companyAchievements.clientLogos.map((logo, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                  >
                    <div className="bg-white p-4 rounded-[1.5rem] shadow-md">
                      <img 
                        src={logo} 
                        alt="Client logo" 
                        className="h-12 md:h-16 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300" 
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
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
                </div>
                <div>
                  <Button 
                    href="/contact" 
                    variant="light" 
                    is3D={true}
                    className="text-lg px-8 py-4 rounded-full text-gray-900 font-medium"
                  >
                    <span className="flex items-center">
                      Get Started <BsArrowRight className="ml-2" />
                    </span>
                  </Button>
                </div>
              </div>
            </motion.div>
          </Container>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
