import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaFileContract, FaHandshake, FaMoneyBillWave, FaClock, FaTools, 
  FaUserCheck, FaCopyright, FaLock, FaBan, FaExclamationTriangle,
  FaTimesCircle, FaUserTie, FaGavel, FaFileAlt
} from 'react-icons/fa';
import SEOHead from '../components/seo/SEOHead';
import ModernPageLayout from '../components/layout/ModernPageLayout';

const TermsPage = () => {
  const lastUpdated = "January 23, 2026";

  const sections = [
    {
      icon: FaFileContract,
      title: "1. Agreement Overview",
      content: `This Terms of Service Agreement ("Agreement") governs the relationship between AINOR ("Developer", "we", "us") and clients ("Client", "you") engaging our software development services. By engaging our services, you agree to be bound by these terms.

AINOR is a software development service provider specializing in website development, mobile application development (Android & iOS), admin panel development, custom software solutions, and related digital services. Our services are provided on both project-based and subscription-based models.`
    },
    {
      icon: FaHandshake,
      title: "2. Scope of Services",
      content: `Our standard development services include:
• Design and development of websites and web applications
• Development of admin panels and management consoles
• Mobile application development for Android and iOS platforms
• Custom software development and integrations
• Basic testing prior to final delivery

Any features, integrations, third-party services, or enhancements not explicitly agreed upon in writing shall be treated as out of scope and may require additional charges. All project scope details will be documented in a separate project proposal or Software Development Agreement.`
    },
    {
      icon: FaMoneyBillWave,
      title: "3. Pricing & Payment Terms",
      content: `Project costs and pricing are finalized after detailed discussion based on project requirements, scope, and complexity. Pricing is NOT fixed for all projects and varies based on the selected plan and services.

Our pricing includes (based on selected plans):
• Website development
• Admin panel development
• Mobile applications (Android and iOS)
• Custom software solutions
• Basic design and testing

Project costs do NOT include:
• Hosting and server costs
• Domain registration
• Third-party API fees or licenses
• Ongoing maintenance and support
• App store developer account fees

Payment shall be made as mutually agreed in writing after pricing discussion. For subscription services, payments are due monthly in advance. For project-based work, payment milestones will be defined in the project agreement.`
    },
    {
      icon: FaClock,
      title: "4. Project Timeline",
      content: `Project timelines shall commence upon:
• Receipt of initial payment (as agreed)
• Receipt of all required project inputs and materials
• Written confirmation of project requirements

Timelines are dependent on:
• Timely approvals from the Client
• Provision of content, assets, and credentials
• Prompt feedback on deliverables

Delays caused by delayed inputs, approvals, or feedback from the Client shall proportionally extend the delivery schedule. We will communicate any timeline adjustments promptly.`
    },
    {
      icon: FaTools,
      title: "5. Maintenance & Support",
      content: `Standard project deliveries do NOT include ongoing maintenance. Post-delivery services are available under separate agreements:

• Bug fixes after delivery period
• Feature enhancements and updates
• Security patches and updates
• Performance optimization
• Content updates and modifications

Monthly maintenance charges apply for clients opting for support services. Maintenance terms, response times, and costs will be specified in a separate Maintenance Agreement.`
    },
    {
      icon: FaUserCheck,
      title: "6. Client Responsibilities",
      content: `The Client agrees to:
• Provide accurate and complete requirements, specifications, and project briefs
• Supply branding assets, content, images, and other materials in a timely manner
• Provide necessary access credentials and permissions
• Share timely feedback and approvals on deliverables
• Ensure all provided materials do not violate third-party intellectual property rights
• Comply with all applicable laws and regulations

The Developer shall not be responsible for delays, issues, or additional costs arising from incomplete, inaccurate, or delayed inputs from the Client.`
    },
    {
      icon: FaCopyright,
      title: "7. Intellectual Property Rights",
      content: `Upon full payment of all project fees:
• All source code, applications, designs, and deliverables developed specifically for the Client's project shall become the exclusive property of the Client
• The Client receives full ownership and usage rights

The Developer retains:
• The right to use general programming knowledge, experience, and skills
• Rights to non-proprietary, reusable components developed independently
• The right to showcase the project in portfolio (unless otherwise agreed)

IMPORTANT: No ownership rights shall transfer until full payment is received. Until payment is complete, all deliverables remain the property of AINOR.`
    },
    {
      icon: FaLock,
      title: "8. Confidentiality",
      content: `Both parties agree to maintain strict confidentiality regarding:
• All technical and business information shared during the project
• Trade secrets, proprietary processes, and business strategies
• User data and customer information
• Project specifications and requirements

The Developer shall:
• Implement reasonable technical and organizational security measures
• Notify the Client within 24 hours of any data breach or unauthorized access
• Return or destroy confidential information upon project completion or termination

Confidentiality obligations survive the termination of this Agreement.`
    },
    {
      icon: FaBan,
      title: "9. Non-Compete & Non-Use",
      content: `The Developer agrees to:
• Not use the Client's confidential information to create or assist any direct competitor
• Not disclose proprietary business processes or strategies to third parties

This restriction:
• Applies only to direct competitors with identical core functionality
• Does not restrict the Developer's general professional activities
• Does not prevent the Developer from working on similar projects for non-competing clients`
    },
    {
      icon: FaExclamationTriangle,
      title: "10. Limitation of Liability",
      content: `The Developer shall NOT be liable for:
• Indirect, incidental, special, or consequential damages
• Loss of profits, revenue, or business opportunities
• Data loss or corruption not caused by Developer negligence
• Third-party service failures or API changes
• Issues arising from Client's modifications to delivered products

The total liability of the Developer under any agreement shall be limited to the total amount paid by the Client under that specific agreement.`
    },
    {
      icon: FaTimesCircle,
      title: "11. Termination",
      content: `Either party may terminate the agreement by written notice if:
• The other party commits a material breach
• The other party fails to cure the breach within 14 days of written notice

Upon termination:
• The Developer shall cease all work on the project
• Any outstanding payments for work completed shall become due
• Confidential information shall be returned or destroyed
• Partial deliverables may be provided based on payment received

For subscription services, clients may pause or cancel at any time with 30 days notice.`
    },
    {
      icon: FaUserTie,
      title: "12. Independent Contractor",
      content: `The Developer is an independent contractor. This Agreement does NOT create:
• An employer-employee relationship
• A partnership or joint venture
• An agency relationship

The Developer maintains independence in:
• Work methods and schedule
• Use of own tools and equipment
• Engagement with other clients`
    },
    {
      icon: FaGavel,
      title: "13. Governing Law & Disputes",
      content: `This Agreement shall be governed by and construed in accordance with the laws of India.

Dispute Resolution:
• Parties agree to first attempt resolution through good-faith negotiation
• If negotiation fails, disputes shall be resolved through arbitration
• Courts located in Mathura, Uttar Pradesh, India shall have exclusive jurisdiction

All notices and communications shall be in writing and delivered via email or registered post.`
    },
    {
      icon: FaFileAlt,
      title: "14. Entire Agreement",
      content: `This Agreement, together with any project-specific agreements, proposals, and NDAs, constitutes the entire understanding between the parties and supersedes all prior discussions, negotiations, or communications.

Amendments:
• Any modification to these terms must be made in writing
• Amendments are only valid when signed by authorized representatives of both parties

If any provision of this Agreement is found to be unenforceable, the remaining provisions shall continue in full force and effect.`
    }
  ];

  return (
    <ModernPageLayout>
      {/* AINOR Watermark */}
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-0">
        <span className="text-[15vw] md:text-[12vw] lg:text-[10vw] font-black text-gray-200/30 select-none tracking-widest">
          AINOR
        </span>
      </div>

      <SEOHead
        title="Terms of Service | AINOR - Software Development Agency India"
        description="Read AINOR's Terms of Service for software development projects. Understand our service agreements, payment terms, intellectual property rights, and client responsibilities."
        keywords="terms of service, software development agreement, AINOR terms, client agreement, development contract, India"
        canonicalUrl="https://myainor.com/terms"
      />

      {/* Hero Section */}
      <section className="bg-white rounded-3xl p-8 md:p-16 shadow-soft relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2" />
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <FaFileContract />
              Legal Agreement
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Terms of Service
            </h1>
            <p className="text-lg text-gray-600 mb-4">
              These terms govern the engagement of AINOR's software development services. Please read them carefully before engaging our services.
            </p>
            <p className="text-sm text-gray-400">
              Last Updated: {lastUpdated}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Summary */}
      <section className="bg-gradient-to-r from-indigo-500 to-blue-600 rounded-3xl p-8 md:p-10 text-white mt-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold mb-4">📋 Quick Summary</h2>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="bg-white/10 rounded-xl p-4">
              <strong>Ownership:</strong> You own all deliverables after full payment
            </div>
            <div className="bg-white/10 rounded-xl p-4">
              <strong>Confidentiality:</strong> Your data is protected and never shared
            </div>
            <div className="bg-white/10 rounded-xl p-4">
              <strong>Flexibility:</strong> Pause or cancel subscriptions anytime
            </div>
            <div className="bg-white/10 rounded-xl p-4">
              <strong>Support:</strong> Maintenance available under separate agreement
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="bg-white rounded-3xl p-8 md:p-12 shadow-soft mt-6">
        <div className="max-w-4xl mx-auto">
          {sections.map((section, idx) => {
            const IconComponent = section.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className={`${idx !== 0 ? 'border-t border-gray-100 pt-8 mt-8' : ''}`}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-lg flex items-center justify-center text-white flex-shrink-0 mt-1">
                    <IconComponent className="text-lg" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 mb-3">{section.title}</h2>
                    <div className="text-gray-600 leading-relaxed whitespace-pre-line">
                      {section.content}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Contact & Acceptance */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 text-white mt-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
              <div className="bg-white/10 rounded-xl p-6">
                <h3 className="font-semibold mb-2">AINOR</h3>
                <p className="text-gray-300 text-sm">
                  Software Development Agency<br />
                  Mathura, Uttar Pradesh, India<br />
                  Email: neocodenex@gmail.com<br />
                  Phone: +91 9528202892<br />
                  Website: www.myainor.com
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Acceptance of Terms</h2>
              <p className="text-gray-300 mb-4">
                By engaging our services, submitting a project inquiry, or signing a project agreement, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
              </p>
              <div className="flex gap-4">
                <Link
                  to="/contact"
                  className="bg-white text-gray-900 px-6 py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors"
                >
                  Contact Us
                </Link>
                <Link
                  to="/privacy"
                  className="border border-white/30 text-white px-6 py-3 rounded-xl font-bold hover:bg-white/10 transition-colors"
                >
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ModernPageLayout>
  );
};

export default TermsPage;
