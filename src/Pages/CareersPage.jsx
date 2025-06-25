import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Container from '../components/layout/Container';
import Section from '../components/layout/Section';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const CareersPage = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  // Job listing data
  const jobListings = [];

  // Filter jobs based on department
  const filteredJobs = [];

  // Departments for filter
  const departments = [
    { id: 'all', name: 'All Departments' },
    { id: 'engineering', name: 'Engineering' },
    { id: 'design', name: 'Design' },
    { id: 'product', name: 'Product' },
    { id: 'marketing', name: 'Marketing' }
  ];

  // Benefits data
  const benefits = [
    {
      icon: "🌎",
      title: "Remote-First Culture",
      description: "Work from anywhere in the world with our flexible remote policy."
    },
    {
      icon: "💰",
      title: "Competitive Compensation",
      description: "We offer competitive salaries, equity options, and performance bonuses."
    },
    {
      icon: "🏥",
      title: "Health & Wellness",
      description: "Comprehensive health insurance, mental health support, and wellness programs."
    },
    {
      icon: "📚",
      title: "Learning & Development",
      description: "Annual learning stipend, conference attendance, and mentorship opportunities."
    },
    {
      icon: "⏰",
      title: "Flexible Hours",
      description: "Set your own schedule with our flexible working hours policy."
    },
    {
      icon: "✈️",
      title: "Paid Time Off",
      description: "Generous PTO policy, paid holidays, and parental leave."
    }
  ];
  return (
    <>
      
      {/* Hero Section */}
      <Section className="pb-16 bg-gradient-to-b from-gray-50 to-white">
        <Container>
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                Join Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Team</span>
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Build the future with us. Discover opportunities to grow, innovate, and make an impact.
              </p>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Company Culture */}
      <Section className="py-12 bg-white">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Culture & Values</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">Innovation First</h3>
                  <p className="text-gray-600">
                    We believe in pushing boundaries and challenging the status quo to create exceptional digital experiences.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">Collaboration & Teamwork</h3>
                  <p className="text-gray-600">
                    Our success is built on diverse perspectives and strong collaboration across disciplines.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">Growth Mindset</h3>
                  <p className="text-gray-600">
                    We're committed to continuous learning and professional development for every team member.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">Work-Life Balance</h3>
                  <p className="text-gray-600">
                    We understand the importance of balance and support flexibility to help you thrive professionally and personally.
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000" 
                alt="AINOR team collaboration"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/40 to-transparent"></div>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Benefits */}
      <Section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <Container>
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-4 text-gray-900">
                Why Work With Us
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We offer more than just a job. Join a team that values your growth, well-being, and work-life balance.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full p-6 hover:shadow-lg transition-all duration-300">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Open Positions */}
      <Section className="py-16 bg-white">
        <Container>
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-4 text-gray-900">
                Open for Contributors & Project-Based Freelancers
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We are not hiring for full-time roles at the moment, but we welcome passionate contributors and skilled freelancers for project-based collaborations. If you love open source, want to contribute to our products, or are interested in freelance opportunities, we'd love to hear from you!
              </p>
            </motion.div>
            <div className="mt-8 flex flex-col items-center gap-4">
              <Button 
                href="/contact" 
                variant="primary" 
                size="lg"
              >
                Contact Us to Collaborate
              </Button>
              <span className="text-sm text-gray-500">Or reach out on <a href="https://github.com/dixitk941" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">Github</a></span>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-4">
                Don't See the Right Fit?
              </h2>
              <p className="text-white/80 mb-8">
                We're always looking for talented individuals to join our team. Send us your resume and we'll keep you in mind for future opportunities.
              </p>
              <Button 
                href="/careers/general-application" 
                variant="light" 
                size="lg"
              >
                Submit General Application
              </Button>
            </motion.div>
          </div>
        </Container>
      </Section>

          </>
  );
};

export default CareersPage;

