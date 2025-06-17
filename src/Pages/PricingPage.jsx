import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/layout/Navbar';
import Container from '../components/layout/Container';
import Section from '../components/layout/Section';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const PricingPage = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [selectedService, setSelectedService] = useState('web');

  // Service types
  const services = [
    { id: 'web', name: 'Web Development' },
    { id: 'mobile', name: 'Mobile Development' },
    { id: 'design', name: 'UI/UX Design' },
    { id: 'ecommerce', name: 'E-Commerce' },
    { id: 'custom', name: 'Custom Software' },
  ];

  // Pricing data
  const pricingPlans = {
    web: [
      {
        id: 'basic',
        name: 'Starter',
        description: 'Perfect for small businesses just getting started online',
        monthlyPrice: 1499,
        yearlyPrice: 14990,
        features: [
          'Responsive website design',
          'Up to 5 pages',
          'Contact form integration',
          'Basic SEO setup',
          'Mobile-friendly design',
          '1 round of revisions',
          '30 days of support',
          'CMS integration'
        ],
        popular: false
      },
      {
        id: 'pro',
        name: 'Professional',
        description: 'Ideal for growing businesses with specific needs',
        monthlyPrice: 2999,
        yearlyPrice: 29990,
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
        name: 'Enterprise',
        description: 'For established businesses requiring advanced solutions',
        monthlyPrice: 5999,
        yearlyPrice: 59990,
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
        name: 'Starter',
        description: 'Entry-level mobile app with essential features',
        monthlyPrice: 2999,
        yearlyPrice: 29990,
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
        name: 'Professional',
        description: 'Feature-rich app for growing user bases',
        monthlyPrice: 5999,
        yearlyPrice: 59990,
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
        name: 'Enterprise',
        description: 'Advanced app with complex functionality',
        monthlyPrice: 9999,
        yearlyPrice: 99990,
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
        name: 'Essential',
        description: 'Fundamental design services for startups',
        monthlyPrice: 1999,
        yearlyPrice: 19990,
        features: [
          'User research & personas',
          'Wireframing',
          'UI design for up to 5 screens',
          'Style guide creation',
          'Basic prototyping',
          '1 round of revisions',
          'Design files delivery',
          '30 days of support'
        ],
        popular: false
      },
      {
        id: 'pro',
        name: 'Advanced',
        description: 'Comprehensive design for growing products',
        monthlyPrice: 3499,
        yearlyPrice: 34990,
        features: [
          'Everything in Essential, plus:',
          'User journey mapping',
          'UI design for up to 10 screens',
          'Interactive prototyping',
          'Design system creation',
          'Usability testing',
          'Animation & micro-interactions',
          '2 rounds of revisions',
          '60 days of support',
          'Implementation guidance'
        ],
        popular: true
      },
      {
        id: 'enterprise',
        name: 'Premium',
        description: 'End-to-end design solutions for complex products',
        monthlyPrice: 6999,
        yearlyPrice: 69990,
        features: [
          'Everything in Advanced, plus:',
          'Comprehensive UX research',
          'Unlimited screen designs',
          'A/B testing setup',
          'Advanced animation & transitions',
          'Multi-platform design adaptation',
          'Design QA & implementation support',
          'Unlimited revisions',
          '90 days of support',
          'Priority consultations',
          'Quarterly design reviews'
        ],
        popular: false
      }
    ],
    ecommerce: [
      {
        id: 'basic',
        name: 'Starter Store',
        description: 'Essential online store for new businesses',
        monthlyPrice: 2499,
        yearlyPrice: 24990,
        features: [
          'Responsive e-commerce website',
          'Up to 50 products',
          'Basic product categorization',
          'Standard payment gateway integration',
          'Order management system',
          'Mobile-friendly design',
          'Basic SEO setup',
          '30 days of support',
          'CMS integration'
        ],
        popular: false
      },
      {
        id: 'pro',
        name: 'Business Store',
        description: 'Advanced store with enhanced features',
        monthlyPrice: 4999,
        yearlyPrice: 49990,
        features: [
          'Everything in Starter Store, plus:',
          'Up to 500 products',
          'Advanced product filtering',
          'Multiple payment gateway options',
          'Customer account management',
          'Wishlist & favorites functionality',
          'Discount & coupon system',
          'Inventory management',
          'Analytics integration',
          '60 days of support',
          'Marketing tools integration'
        ],
        popular: true
      },
      {
        id: 'enterprise',
        name: 'Enterprise Store',
        description: 'Comprehensive solution for large e-commerce operations',
        monthlyPrice: 8999,
        yearlyPrice: 89990,
        features: [
          'Everything in Business Store, plus:',
          'Unlimited products',
          'Multi-currency support',
          'Advanced user roles & permissions',
          'Custom checkout flow',
          'Subscription & recurring billing',
          'Advanced inventory management',
          'Multi-warehouse support',
          'CRM integration',
          'Performance optimization',
          '90 days of support',
          'Priority maintenance'
        ],
        popular: false
      }
    ],
    custom: [
      {
        id: 'basic',
        name: 'Starter',
        description: 'Basic custom software solution',
        monthlyPrice: 4999,
        yearlyPrice: 49990,
        features: [
          'Custom software development',
          'Basic user authentication',
          'Up to 3 core functionalities',
          'Basic reporting',
          'Cloud deployment',
          'Standard security implementation',
          'User documentation',
          '30 days of support'
        ],
        popular: false
      },
      {
        id: 'pro',
        name: 'Professional',
        description: 'Advanced software with enhanced capabilities',
        monthlyPrice: 9999,
        yearlyPrice: 99990,
        features: [
          'Everything in Starter, plus:',
          'Up to 10 core functionalities',
          'Advanced user management',
          'Role-based access control',
          'Third-party integrations',
          'Data migration services',
          'Advanced reporting & analytics',
          'Admin dashboard',
          'API development',
          '60 days of support',
          'Staff training'
        ],
        popular: true
      },
      {
        id: 'enterprise',
        name: 'Enterprise',
        description: 'Comprehensive solution for complex business needs',
        monthlyPrice: 19999,
        yearlyPrice: 199990,
        features: [
          'Everything in Professional, plus:',
          'Unlimited functionalities',
          'Custom workflows & automation',
          'Advanced security features',
          'Data backup & recovery systems',
          'Scalable architecture',
          'High-availability setup',
          'Performance optimization',
          'Comprehensive documentation',
          '90 days of support',
          'Dedicated account manager',
          'SLA guarantees'
        ],
        popular: false
      }
    ]
  };

  // Get current plans
  const currentPlans = pricingPlans[selectedService] || [];

  // Format price
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    }).format(price);
  };

  // FAQ data
  const faqItems = [
    {
      question: "Do you offer custom pricing?",
      answer: "Yes, we offer custom pricing for projects with specific requirements that don't fit our standard packages. Contact us for a personalized quote based on your project scope."
    },
    {
      question: "What's included in the support period?",
      answer: "Our support period includes bug fixes, minor updates, technical assistance, and guidance. It starts from the date of project completion and varies by package (30, 60, or 90 days)."
    },
    {
      question: "Are there any hidden costs?",
      answer: "No, our pricing is transparent with no hidden costs. Any additional expenses, such as third-party services or premium plugins, will be clearly communicated before implementation."
    },
    {
      question: "Can I upgrade my plan later?",
      answer: "Yes, you can upgrade your plan at any time. We'll apply a prorated credit from your current plan toward the higher-tier plan."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept credit/debit cards, bank transfers, and PayPal. For enterprise plans, we can also accommodate other payment methods as needed."
    }
  ];

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <Section className="pt-32 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <Container>
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                Transparent <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Pricing</span>
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Choose the perfect plan for your business needs. No hidden fees, just clear value.
              </p>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Service Selection */}
      <Section className="py-8 bg-white">
        <Container>
          <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setSelectedService(service.id)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedService === service.id
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {service.name}
              </button>
            ))}
          </div>

          {/* Billing Toggle */}
          <div className="flex justify-center items-center mb-12">
            <span className={`text-sm font-medium mr-3 ${billingCycle === 'monthly' ? 'text-indigo-600' : 'text-gray-500'}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
              className="relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none bg-gray-200"
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  billingCycle === 'yearly' ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-sm font-medium ml-3 ${billingCycle === 'yearly' ? 'text-indigo-600' : 'text-gray-500'}`}>
              Yearly <span className="text-green-500 text-xs font-bold">Save 20%</span>
            </span>
          </div>
        </Container>
      </Section>

      {/* Pricing Plans */}
      <Section className="py-8 bg-white">
        <Container>
          <div className="grid md:grid-cols-3 gap-8">
            {currentPlans.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className={`h-full flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl ${plan.popular ? 'border-indigo-500 shadow-lg' : 'border-gray-200'}`}>
                  {plan.popular && (
                    <div className="bg-indigo-600 text-white text-center text-sm font-semibold py-1.5">
                      Most Popular
                    </div>
                  )}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <p className="text-gray-600 mb-6 flex-grow">{plan.description}</p>
                    <div className="mb-6">
                      <div className="flex items-end">
                        <span className="text-4xl font-bold text-gray-900">
                          {formatPrice(billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice)}
                        </span>
                        <span className="text-gray-500 ml-2 pb-1">
                          /{billingCycle === 'monthly' ? 'month' : 'year'}
                        </span>
                      </div>
                      {billingCycle === 'yearly' && (
                        <p className="text-green-600 text-sm mt-1 font-medium">
                          Save {formatPrice(plan.monthlyPrice * 12 - plan.yearlyPrice)} per year
                        </p>
                      )}
                    </div>
                    <Button 
                      href={`/contact?plan=${plan.id}&service=${selectedService}&cycle=${billingCycle}`}
                      className="w-full mb-6"
                      variant={plan.popular ? "primary" : "outline"}
                    >
                      Get Started
                    </Button>
                    <div className="space-y-3">
                      <p className="text-sm font-medium text-gray-700 uppercase tracking-wider">
                        Features
                      </p>
                      <ul className="space-y-3 text-sm">
                        {plan.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span className="text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Custom Quote */}
      <Section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-4">
                Need a Custom Solution?
              </h2>
              <p className="text-white/80 mb-8">
                Our standard packages don't fit your requirements? We offer tailored solutions designed specifically for your unique business needs.
              </p>
              <Button 
                href="/contact?type=custom"
                variant="light" 
                size="lg"
              >
                Request Custom Quote
              </Button>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section className="py-16 bg-white">
        <Container>
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-4 text-gray-900">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Have questions about our pricing? Find quick answers below.
              </p>
            </motion.div>
          </div>

          <div className="max-w-3xl mx-auto">
            <Card className="divide-y divide-gray-100">
              {faqItems.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="py-4 px-6"
                >
                  <h3 className="text-lg font-medium mb-2 text-gray-900">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </motion.div>
              ))}
            </Card>
          </div>
        </Container>
      </Section>

      {/* Guarantee */}
      <Section className="py-16 bg-gray-50">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-20 h-20 mx-auto bg-indigo-100 rounded-full flex items-center justify-center mb-6">
                <svg className="h-10 w-10 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">
                Our Satisfaction Guarantee
              </h2>
              <p className="text-gray-600 mb-6">
                We're committed to delivering exceptional quality and value. If you're not completely satisfied with our services, we'll work with you to make it right.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button href="/contact" variant="primary">
                  Get Started Today
                </Button>
                <Button href="/faq" variant="outline">
                  Learn More
                </Button>
              </div>
            </motion.div>
          </div>
        </Container>
      </Section>

          </>
  );
};

export default PricingPage;

