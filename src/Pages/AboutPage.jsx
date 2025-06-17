import React from 'react';
import { motion } from 'framer-motion';
import { FaChartLine, FaLightbulb, FaHandshake, FaRegClock } from 'react-icons/fa';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Container from '../components/layout/Container';
import Section from '../components/layout/Section';
import Button from '../components/ui/Button';
import AnimatedImage from '../components/ui/AnimatedImage';

const AboutPage = () => {
  // Team members data
  const teamMembers = [
    {
      name: "Alex Richardson",
      position: "Founder & CEO",
      bio: "With over 15 years of experience in software development, Alex founded AINOR with a vision to create digital solutions that truly impact businesses.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
    },
    {
      name: "Samantha Chen",
      position: "Chief Technology Officer",
      bio: "Leading our technical strategy, Samantha brings expertise from top tech companies and ensures we're always using cutting-edge technologies.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
    },
    {
      name: "Marcus Johnson",
      position: "Creative Director",
      bio: "With an eye for design and user experience, Marcus leads our creative team in developing visually stunning and intuitive interfaces.",
      image: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
    },
    {
      name: "Priya Sharma",
      position: "Head of Project Management",
      bio: "Priya ensures every project is delivered on time and exceeds client expectations through her methodical and client-focused approach.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
    }
  ];

  // Company values
  const values = [
    {
      icon: <FaLightbulb className="w-6 h-6" />,
      title: "Innovation",
      description: "We constantly push boundaries and explore new technologies to deliver cutting-edge solutions."
    },
    {
      icon: <FaHandshake className="w-6 h-6" />,
      title: "Integrity",
      description: "We believe in transparent communication and honest relationships with our clients and team members."
    },
    {
      icon: <FaChartLine className="w-6 h-6" />,
      title: "Excellence",
      description: "We strive for excellence in every project, focusing on quality, performance, and attention to detail."
    },
    {
      icon: <FaRegClock className="w-6 h-6" />,
      title: "Reliability",
      description: "We deliver on our promises, meeting deadlines and exceeding expectations consistently."
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      
      {/* Header Section */}
      <Section className="pt-32 pb-16 relative bg-gradient-to-b from-white to-gray-100">
        <Container>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-black">
              About AINOR
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              We're a team of passionate digital creators building exceptional web and mobile experiences 
              that help businesses grow and succeed in the digital landscape.
            </p>
          </motion.div>
        </Container>
      </Section>
      
      {/* Our Story Section */}
      <Section className="py-16 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Story</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Founded in 2018, AINOR began with a simple yet powerful mission: to bridge the gap between advanced technology 
                  and everyday business needs. Our founder, Alex Richardson, recognized that many companies struggled to find 
                  development partners who truly understood both technology and business objectives.
                </p>
                <p>
                  What started as a small team of three developers has grown into a full-service digital agency with experts 
                  across web development, mobile applications, design, and digital marketing. Throughout our growth, we've 
                  maintained our core principle: creating technology solutions that deliver real business value.
                </p>
                <p>
                  Today, we're proud to have worked with over 100 clients ranging from ambitious startups to established 
                  enterprises across various industries. Each project has added to our expertise and reinforced our 
                  commitment to excellence in digital craftsmanship.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-gray-300 blur-3xl opacity-30 rounded-full transform -translate-y-1/4 scale-150"></div>
              <AnimatedImage
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="AINOR team collaboration"
                className="rounded-2xl shadow-2xl"
                tiltEnable={true}
                glareEnable={true}
                glareMaxOpacity={0.2}
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                scale={1.05}
              />
            </motion.div>
          </div>
        </Container>
      </Section>
      
      {/* Our Values Section */}
      <Section className="py-16 bg-gray-50">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              These core principles guide everything we do and define who we are as a company.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-200"
              >
                <div className="bg-gray-100 w-12 h-12 rounded-full flex items-center justify-center mb-4 text-gray-800">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>
      
      {/* Team Section */}
      <Section className="py-16 bg-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Meet Our Team</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The talented people behind AINOR who make the magic happen.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover object-center"
                />
                <div className="p-6 border border-gray-200 border-t-0 rounded-b-xl">
                  <h3 className="text-xl font-bold mb-1 text-gray-900">{member.name}</h3>
                  <p className="text-gray-500 mb-3">{member.position}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button href="/careers" variant="dark">
              Join Our Team
            </Button>
          </div>
        </Container>
      </Section>
      
      {/* Stats Section */}
      <Section className="py-16 bg-gray-50">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-6"
            >
              <div className="text-4xl font-bold text-gray-900 mb-2">100+</div>
              <div className="text-gray-600">Projects Completed</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-6"
            >
              <div className="text-4xl font-bold text-gray-900 mb-2">7+</div>
              <div className="text-gray-600">Years of Experience</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-6"
            >
              <div className="text-4xl font-bold text-gray-900 mb-2">20+</div>
              <div className="text-gray-600">Team Members</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-6"
            >
              <div className="text-4xl font-bold text-gray-900 mb-2">98%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </motion.div>
          </div>
        </Container>
      </Section>
      
      {/* CTA Section */}
      <Section className="py-16 bg-white">
        <Container>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Ready to Bring Your Ideas to Life?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Let's discuss how we can help you achieve your digital goals. Our team is ready to create 
              the perfect solution for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" variant="dark" is3D={true}>
                Contact Us
              </Button>
              <Button href="/services" variant="outline">
                Explore Our Services
              </Button>
            </div>
          </motion.div>
        </Container>
      </Section>
      
      <Footer />
    </div>
  );
};

export default AboutPage;
