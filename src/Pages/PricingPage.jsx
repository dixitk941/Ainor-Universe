import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Container from '../components/layout/Container';
import Section from '../components/layout/Section';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import SEOHead from '../components/seo/SEOHead';

const PricingPage = () => {
  const [billingCycle, setBillingCycle] = useState('project');
  const [selectedService, setSelectedService] = useState('web');

  // Service types
  const services = [
    { id: 'web', name: 'Web Development' },
    { id: 'mobile', name: 'Mobile Development' },
    { id: 'design', name: 'UI/UX Design' },
    { id: 'ecommerce', name: 'E-Commerce' },
    { id: 'custom', name: 'Custom Software' },
  ];

  // Pricing data with Indian pricing
  const pricingPlans = {
    web: [
      {
        id: 'basic',
        name: 'Starter Website',
        description: 'Perfect for small businesses just getting started online',
        projectPrice: 15000,
        maintenancePrice: 2000,
        features: [
          'Responsive website design',
          'Up to 5 pages',
          'Contact form integration',
          'Basic SEO setup',
          'Mobile-friendly design',
          '1 round of revisions',
          '30 days of support',
          'Basic CMS integration'
        ],
        popular: false
      },
      {
        id: 'pro',
        name: 'Professional Website',
        description: 'Ideal for growing businesses with specific needs',
        projectPrice: 35000,
        maintenancePrice: 4000,
        features: [
          'Everything in Starter, plus:',
          'Up to 10 pages',
          'Advanced SEO optimization',
          'Blog setup & integration',
          'Google Analytics setup',
          'Performance optimization',
          '2 rounds of revisions',
          '60 days of support',
          'Social media integration',
          'Newsletter integration'
        ],
        popular: true
      },
      {
        id: 'enterprise',
        name: 'Enterprise Website',
        description: 'For established businesses requiring advanced solutions',
        projectPrice: 65000,
        maintenancePrice: 8000,
        features: [
          'Everything in Professional, plus:',
          'Unlimited pages',
          'Custom animations & interactions',
          'Advanced user authentication',
          'Custom database integration',
          'Third-party API integration',
          'E-commerce functionality',
          'Unlimited revisions',
          '90 days of support',
          'Performance monitoring',
          'Security hardening'
        ],
        popular: false
      }
    ],
    mobile: [
      {
        id: 'basic',
        name: 'Starter App',
        description: 'Entry-level mobile app with essential features',
        projectPrice: 45000,
        maintenancePrice: 6000,
        features: [
          'Single platform (iOS or Android)',
          'Basic UI design',
          'Up to 5 screens',
          'User authentication',
          'Push notifications',
          'Offline functionality',
          '30 days of support',
          'App store submission'
        ],
        popular: false
      },
      {
        id: 'pro',
        name: 'Professional App',
        description: 'Feature-rich app for growing user bases',
        projectPrice: 85000,
        maintenancePrice: 12000,
        features: [
          'Cross-platform (iOS & Android)',
          'Custom UI/UX design',
          'Up to 10 screens',
          'Social media integration',
          'In-app purchases',
          'Analytics integration',
          'Cloud synchronization',
          'Admin dashboard',
          '60 days of support',
          'App store optimization'
        ],
        popular: true
      },
      {
        id: 'enterprise',
        name: 'Enterprise App',
        description: 'Advanced app with complex functionality',
        projectPrice: 150000,
        maintenancePrice: 20000,
        features: [
          'Everything in Professional, plus:',
          'Unlimited screens',
          'Third-party API integration',
          'Complex user roles & permissions',
          'Real-time data processing',
          'Advanced security features',
          'Performance optimization',
          'Custom animations & interactions',
          '90 days of support',
          'Maintenance plan',
          'Priority support'
        ],
        popular: false
      }
    ],
    design: [
      {
        id: 'basic',
        name: 'Essential Design',
        description: 'Fundamental design services for startups',
        projectPrice: 12000,
        maintenancePrice: 1500,
        features: [
          'Logo design',
          'Basic brand guidelines',
          'Business card design',
          'Letterhead design',
          '2 design concepts',
          '2 rounds of revisions',
          'Final files in multiple formats',
          '30 days of support'
        ],
        popular: false
      },
      {
        id: 'pro',
        name: 'Professional Design',
        description: 'Complete branding package for businesses',
        projectPrice: 25000,
        maintenancePrice: 3000,
        features: [
          'Everything in Essential, plus:',
          'Complete brand identity',
          'Brand style guide',
          'Marketing materials design',
          'Social media templates',
          'Website mockups',
          '5 design concepts',
          '3 rounds of revisions',
          '60 days of support'
        ],
        popular: true
      },
      {
        id: 'enterprise',
        name: 'Enterprise Design',
        description: 'Comprehensive design solution for large organizations',
        projectPrice: 45000,
        maintenancePrice: 5000,
        features: [
          'Everything in Professional, plus:',
          'Multi-brand management',
          'Custom illustration',
          'Packaging design',
          'Exhibition materials',
          'Digital asset management',
          'Unlimited design concepts',
          'Unlimited revisions',
          '90 days of support',
          'Dedicated design team'
        ],
        popular: false
      }
    ],
    ecommerce: [
      {
        id: 'basic',
        name: 'Starter Store',
        description: 'Basic online store for small businesses',
        projectPrice: 25000,
        maintenancePrice: 3500,
        features: [
          'Up to 50 products',
          'Basic store design',
          'Payment gateway integration',
          'Inventory management',
          'Order management',
          'Customer accounts',
          'Basic SEO setup',
          '30 days of support'
        ],
        popular: false
      },
      {
        id: 'pro',
        name: 'Professional Store',
        description: 'Feature-rich store for growing businesses',
        projectPrice: 50000,
        maintenancePrice: 7000,
        features: [
          'Up to 500 products',
          'Custom store design',
          'Multi-payment options',
          'Advanced inventory management',
          'Shipping calculator',
          'Discount & coupon system',
          'Analytics & reporting',
          'Mobile app integration',
          '60 days of support'
        ],
        popular: true
      },
      {
        id: 'enterprise',
        name: 'Enterprise Store',
        description: 'Advanced e-commerce solution for large businesses',
        projectPrice: 95000,
        maintenancePrice: 15000,
        features: [
          'Unlimited products',
          'Custom functionality',
          'Multi-vendor support',
          'Advanced analytics',
          'Custom integrations',
          'Multi-language support',
          'Advanced security',
          'Dedicated support team',
          '90 days of support',
          'Performance optimization'
        ],
        popular: false
      }
    ],
    custom: [
      {
        id: 'basic',
        name: 'Starter Solution',
        description: 'Simple custom software for specific needs',
        projectPrice: 35000,
        maintenancePrice: 5000,
        features: [
          'Basic custom functionality',
          'Simple user interface',
          'Database integration',
          'User authentication',
          'Basic reporting',
          'Documentation',
          '30 days of support',
          'Source code delivery'
        ],
        popular: false
      },
      {
        id: 'pro',
        name: 'Professional Solution',
        description: 'Advanced custom software for business automation',
        projectPrice: 75000,
        maintenancePrice: 10000,
        features: [
          'Everything in Starter, plus:',
          'Complex business logic',
          'Advanced user roles',
          'API integrations',
          'Advanced reporting & analytics',
          'Automated workflows',
          'Admin dashboard',
          '60 days of support',
          'Training sessions'
        ],
        popular: true
      },
      {
        id: 'enterprise',
        name: 'Enterprise Solution',
        description: 'Comprehensive custom software for large organizations',
        projectPrice: 150000,
        maintenancePrice: 25000,
        features: [
          'Everything in Professional, plus:',
          'Enterprise-grade architecture',
          'Scalable infrastructure',
          'Advanced security features',
          'Multi-tenant support',
          'Custom integrations',
          'Performance optimization',
          'Dedicated project manager',
          '90 days of support',
          'Ongoing maintenance'
        ],
        popular: false
      }
    ]
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const currentPlans = pricingPlans[selectedService];

  return (
    <>
      <SEOHead 
        title="AINOR Pricing - Affordable Web Development & Digital Solutions in India"
        description="Transparent pricing for web development, mobile apps, and digital solutions. Starting from ₹15,000 for basic websites. Custom quotes available for enterprise solutions."
        keywords="AINOR pricing, web development cost India, mobile app development price, digital solutions pricing, affordable web development"
        canonicalUrl="https://myainor.com/pricing"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "AINOR Pricing",
          "description": "Transparent pricing for professional web development and digital solutions in India.",
          "url": "https://myainor.com/pricing"
        }}
      />      <div className="min-h-screen bg-white text-gray-900">
        
        {/* Header Section */}
        <Section className="pb-16 relative bg-gradient-to-b from-blue-50 to-white">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto px-4"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
                Transparent <span className="text-blue-600">Pricing</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8">
                Choose the perfect plan for your business needs. All prices in Indian Rupees (₹)
              </p>
              <div className="inline-flex items-center bg-gray-100 rounded-full p-2 mb-8">
                <button
                  onClick={() => setBillingCycle('project')}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                    billingCycle === 'project'
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Project-based
                </button>
                <button
                  onClick={() => setBillingCycle('maintenance')}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                    billingCycle === 'maintenance'
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Monthly Maintenance
                </button>
              </div>
            </motion.div>
          </Container>
        </Section>

        {/* Service Selection */}
        <Section className="py-16">
          <Container>
            <div className="flex flex-wrap justify-center gap-4 mb-12 px-4">
              {services.map((service) => (
                <button
                  key={service.id}
                  onClick={() => setSelectedService(service.id)}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
                    selectedService === service.id
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {service.name}
                </button>
              ))}
            </div>

            {/* Pricing Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
              {currentPlans.map((plan, index) => (
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative"
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                      <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <Card className={`p-8 h-full ${plan.popular ? 'ring-2 ring-blue-500 scale-105' : ''}`}>
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                      <p className="text-gray-600 mb-6">{plan.description}</p>
                      
                      <div className="mb-6">
                        <span className="text-4xl font-bold text-gray-900">
                          {billingCycle === 'project' 
                            ? formatPrice(plan.projectPrice)
                            : formatPrice(plan.maintenancePrice)
                          }
                        </span>
                        <span className="text-gray-600 ml-2">
                          {billingCycle === 'project' ? 'one-time' : '/month'}
                        </span>
                      </div>
                    </div>

                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="flex-shrink-0 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mt-0.5 mr-3">
                            <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button 
                      href="/contact" 
                      variant={plan.popular ? "primary" : "outline"}
                      className="w-full"
                    >
                      Get Started
                    </Button>
                  </Card>
                </motion.div>
              ))}
            </div>
          </Container>
        </Section>

        {/* FAQ Section */}
        <Section className="py-16 bg-gray-50">
          <Container>
            <div className="text-center mb-12 px-4">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Everything you need to know about our pricing and services
              </p>
            </div>

            <div className="max-w-3xl mx-auto px-4">
              <div className="space-y-6">
                {[
                  {
                    question: "Are there any hidden costs?",
                    answer: "No, our pricing is completely transparent. The prices shown include everything mentioned in the feature list. Any additional requirements will be discussed and quoted separately."
                  },
                  {
                    question: "Do you offer payment plans?",
                    answer: "Yes, we offer flexible payment plans. Typically, we take 50% advance and 50% on completion. For larger projects, we can arrange milestone-based payments."
                  },
                  {
                    question: "What's included in maintenance?",
                    answer: "Monthly maintenance includes security updates, bug fixes, content updates, performance monitoring, and technical support. It does not include major feature additions or redesigns."
                  },
                  {
                    question: "Can I upgrade my plan later?",
                    answer: "Absolutely! You can upgrade your plan at any time. We'll only charge the difference between your current plan and the new one."
                  },
                  {
                    question: "Do you provide custom quotes?",
                    answer: "Yes, for unique requirements or enterprise solutions, we provide custom quotes. Contact us to discuss your specific needs."
                  }
                ].map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-lg p-6 shadow-sm"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600">
                      {faq.answer}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </Container>
        </Section>

        {/* CTA Section */}
        <Section className="py-16">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-12 text-white mx-4"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Let's discuss your project and find the perfect solution for your business
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button href="/contact" variant="white" size="lg">
                  Get Free Consultation
                </Button>
                <Button href="/portfolio" variant="outline-white" size="lg">
                  View Our Work
                </Button>
              </div>
            </motion.div>
          </Container>
        </Section>
      </div>
    </>
  );
};

export default PricingPage;
