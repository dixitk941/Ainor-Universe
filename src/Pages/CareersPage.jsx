import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/layout/Navbar';
import Container from '../components/layout/Container';
import Section from '../components/layout/Section';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const CareersPage = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  // Job listing data
  const jobListings = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      department: "engineering",
      location: "San Francisco, CA (Remote Option)",
      type: "Full-time",
      posted: "2 days ago",
      description: "We're looking for an experienced Frontend Developer to join our team and help build beautiful, responsive web applications.",
      requirements: [
        "5+ years of experience with React, Redux, and modern JavaScript",
        "Strong understanding of web performance optimization",
        "Experience with responsive design and cross-browser compatibility",
        "Proficient in HTML5, CSS3 (Sass/SCSS), and modern CSS frameworks"
      ]
    },
    {
      id: 2,
      title: "Backend Engineer",
      department: "engineering",
      location: "New York, NY (Remote Option)",
      type: "Full-time",
      posted: "1 week ago",
      description: "Join our backend team to develop scalable and maintainable APIs and services that power our applications.",
      requirements: [
        "3+ years experience with Node.js and Express",
        "Experience with database design and optimization (SQL and NoSQL)",
        "Understanding of RESTful API design principles",
        "Knowledge of cloud services (AWS, Azure, or GCP)"
      ]
    },
    {
      id: 3,
      title: "UI/UX Designer",
      department: "design",
      location: "Remote",
      type: "Full-time",
      posted: "3 days ago",
      description: "We're seeking a talented UI/UX Designer to create engaging and intuitive user experiences for our web and mobile products.",
      requirements: [
        "3+ years of UI/UX design experience for digital products",
        "Proficiency in design tools like Figma, Sketch, or Adobe XD",
        "Strong portfolio demonstrating user-centered design process",
        "Experience with design systems and component libraries"
      ]
    },
    {
      id: 4,
      title: "DevOps Engineer",
      department: "engineering",
      location: "Boston, MA (Remote Option)",
      type: "Full-time",
      posted: "2 weeks ago",
      description: "Help us build and maintain our infrastructure, CI/CD pipelines, and deployment processes.",
      requirements: [
        "3+ years experience in DevOps or SRE roles",
        "Experience with containerization (Docker) and orchestration (Kubernetes)",
        "Knowledge of infrastructure as code (Terraform, CloudFormation)",
        "Experience with CI/CD tools (Jenkins, GitHub Actions, CircleCI)"
      ]
    },
    {
      id: 5,
      title: "Product Manager",
      department: "product",
      location: "Remote",
      type: "Full-time",
      posted: "1 week ago",
      description: "We're looking for a Product Manager to help define our product strategy and roadmap, working closely with engineering and design teams.",
      requirements: [
        "3+ years of experience in product management for SaaS or web applications",
        "Strong analytical skills and data-driven decision making",
        "Excellent communication and stakeholder management",
        "Experience with agile methodologies"
      ]
    },
    {
      id: 6,
      title: "Digital Marketing Specialist",
      department: "marketing",
      location: "Remote",
      type: "Full-time",
      posted: "5 days ago",
      description: "Join our marketing team to help drive growth through digital channels and campaigns.",
      requirements: [
        "2+ years experience in digital marketing",
        "Experience with SEO, SEM, and social media marketing",
        "Knowledge of analytics tools (Google Analytics, HubSpot)",
        "Strong content creation and copywriting skills"
      ]
    }
  ];

  // Filter jobs based on department
  const filteredJobs = selectedDepartment === 'all' 
    ? jobListings 
    : jobListings.filter(job => job.department === selectedDepartment);

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
      <Navbar />
      
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
                Open Positions
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Find your next career opportunity. We're always looking for talented individuals to join our team.
              </p>
            </motion.div>
          </div>

          {/* Department Filter */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            {departments.map((department) => (
              <button
                key={department.id}
                onClick={() => setSelectedDepartment(department.id)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedDepartment === department.id
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {department.name}
              </button>
            ))}
          </div>

          {/* Jobs List */}
          <div className="space-y-6">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="p-0 overflow-hidden hover:shadow-lg transition-all duration-300">
                    <div className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div>
                          <div className="flex items-center mb-2">
                            <h3 className="text-xl font-bold text-gray-900 mr-3">{job.title}</h3>
                            <span className="bg-indigo-100 text-indigo-700 text-xs font-medium px-2.5 py-0.5 rounded-full">
                              {job.type}
                            </span>
                          </div>
                          <div className="flex flex-wrap items-center text-gray-500 text-sm gap-x-4 gap-y-1">
                            <span className="flex items-center">
                              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                              </svg>
                              {job.location}
                            </span>
                            <span className="flex items-center">
                              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                              </svg>
                              Posted {job.posted}
                            </span>
                            <span className="flex items-center">
                              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path>
                              </svg>
                              {departments.find(d => d.id === job.department)?.name.replace(' Departments', '')}
                            </span>
                          </div>
                        </div>
                        <Button 
                          href={`/careers/${job.id}`} 
                          variant="outline" 
                          className="mt-4 md:mt-0"
                        >
                          View Details
                        </Button>
                      </div>
                      <div className="mt-4">
                        <p className="text-gray-600 mb-4">{job.description}</p>
                        <div className="mt-4">
                          <h4 className="text-sm font-semibold text-gray-700 mb-2">Requirements:</h4>
                          <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                            {job.requirements.map((req, idx) => (
                              <li key={idx}>{req}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-4 border-t border-gray-100">
                      <Button 
                        href={`/careers/apply/${job.id}`} 
                        className="w-full md:w-auto"
                      >
                        Apply Now
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              ))
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500">No positions available in this department at the moment.</p>
              </div>
            )}
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

