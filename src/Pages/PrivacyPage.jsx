import React from 'react';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaLock, FaUserShield, FaDatabase, FaCookie, FaEnvelope } from 'react-icons/fa';
import SEOHead from '../components/seo/SEOHead';
import ModernPageLayout from '../components/layout/ModernPageLayout';

const PrivacyPage = () => {
  const lastUpdated = "January 23, 2026";

  const sections = [
    {
      icon: FaDatabase,
      title: "Information We Collect",
      content: [
        {
          subtitle: "Personal Information",
          text: "When you engage our services, we collect information necessary for project execution including your name, email address, phone number, business name, and billing information. This information is collected when you fill out contact forms, subscribe to our services, or communicate with us directly."
        },
        {
          subtitle: "Project-Related Information",
          text: "We collect project requirements, branding assets, content materials, access credentials, and technical specifications that you provide for the development of your digital products. This includes design preferences, functionality requirements, and any third-party service integrations."
        },
        {
          subtitle: "Technical Information",
          text: "We automatically collect certain technical information when you visit our website, including IP address, browser type, device information, pages visited, and time spent on pages. This helps us improve our website and services."
        }
      ]
    },
    {
      icon: FaUserShield,
      title: "How We Use Your Information",
      content: [
        {
          subtitle: "Service Delivery",
          text: "We use your information to design, develop, and deliver the digital products and services you have engaged us for. This includes website development, mobile app development, admin panel creation, and related technical services."
        },
        {
          subtitle: "Communication",
          text: "We use your contact information to communicate project updates, seek approvals, provide support, send invoices, and respond to your inquiries. We may also send you service-related announcements and updates."
        },
        {
          subtitle: "Legal Compliance",
          text: "We may use your information to comply with applicable laws, regulations, and legal processes, and to protect our rights and the rights of our clients."
        }
      ]
    },
    {
      icon: FaLock,
      title: "Data Security & Protection",
      content: [
        {
          subtitle: "Security Measures",
          text: "We implement reasonable technical and organizational security measures to protect your information from unauthorized access, disclosure, alteration, or destruction. This includes encryption, secure servers, access controls, and regular security assessments."
        },
        {
          subtitle: "Breach Notification",
          text: "In the event of a data breach or unauthorized access to your confidential information, we will notify you within 24 hours of becoming aware of such incident, as outlined in our service agreements."
        },
        {
          subtitle: "Data Retention",
          text: "We retain your personal and project-related information for the duration of our business relationship and for a reasonable period thereafter as required by law or for legitimate business purposes."
        }
      ]
    },
    {
      icon: FaShieldAlt,
      title: "Confidentiality",
      content: [
        {
          subtitle: "Non-Disclosure",
          text: "All confidential, technical, business, and user-related information shared with us remains strictly confidential. Our team members are bound by confidentiality agreements and are trained on data protection practices."
        },
        {
          subtitle: "Third-Party Sharing",
          text: "We do not sell, trade, or rent your personal information to third parties. We may share information with trusted service providers who assist us in operating our business, but only to the extent necessary and under strict confidentiality obligations."
        },
        {
          subtitle: "Intellectual Property Protection",
          text: "All source code, applications, designs, and deliverables developed specifically for your project are treated as confidential and proprietary until ownership transfers upon full payment."
        }
      ]
    },
    {
      icon: FaCookie,
      title: "Cookies & Tracking",
      content: [
        {
          subtitle: "Website Cookies",
          text: "Our website uses cookies to enhance your browsing experience, analyze site traffic, and understand where our visitors come from. You can control cookie settings through your browser preferences."
        },
        {
          subtitle: "Analytics",
          text: "We use analytics tools to understand how visitors interact with our website. This data is aggregated and anonymized and helps us improve our services and user experience."
        }
      ]
    },
    {
      icon: FaEnvelope,
      title: "Your Rights & Contact",
      content: [
        {
          subtitle: "Your Rights",
          text: "You have the right to access, correct, update, or request deletion of your personal information. You may also object to processing of your information or request data portability where applicable."
        },
        {
          subtitle: "Contact Us",
          text: "For any privacy-related questions, concerns, or requests, please contact us at neocodenex@gmail.com or call us at +91 9528202892. We are located in Mathura, Uttar Pradesh, India."
        },
        {
          subtitle: "Policy Updates",
          text: "We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the new policy on our website with an updated effective date."
        }
      ]
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
        title="Privacy Policy | AINOR - Software Development Agency India"
        description="Learn how AINOR protects your data and privacy. Our privacy policy outlines how we collect, use, and safeguard your information during software development projects."
        keywords="privacy policy, data protection, AINOR privacy, software development privacy, client data security, India"
        canonicalUrl="https://myainor.com/privacy"
      />

      {/* Hero Section */}
      <section className="bg-white rounded-3xl p-8 md:p-16 shadow-soft relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-50 to-purple-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2" />
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <FaShieldAlt />
              Your Privacy Matters
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Privacy Policy
            </h1>
            <p className="text-lg text-gray-600 mb-4">
              At AINOR, we are committed to protecting your privacy and ensuring the security of your personal and business information. This policy explains how we collect, use, and safeguard your data.
            </p>
            <p className="text-sm text-gray-400">
              Last Updated: {lastUpdated}
            </p>
          </motion.div>
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
                transition={{ delay: idx * 0.1 }}
                className={`${idx !== 0 ? 'border-t border-gray-100 pt-10 mt-10' : ''}`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white">
                    <IconComponent className="text-xl" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
                </div>

                <div className="space-y-6 pl-16">
                  {section.content.map((item, itemIdx) => (
                    <div key={itemIdx}>
                      <h3 className="font-semibold text-gray-800 mb-2">{item.subtitle}</h3>
                      <p className="text-gray-600 leading-relaxed">{item.text}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Governing Law */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 text-white mt-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Governing Law & Jurisdiction</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            This Privacy Policy shall be governed by and construed in accordance with the laws of India. Any disputes arising from this policy shall be subject to the exclusive jurisdiction of the courts located in Mathura, Uttar Pradesh, India.
          </p>
          <div className="bg-white/10 rounded-xl p-6 mt-6">
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
      </section>
    </ModernPageLayout>
  );
};

export default PrivacyPage;
