import React from 'react';
import Container from '../layout/Container';

const SEOText = ({ page = 'home' }) => {
  const content = {
    home: {
      title: "Leading Web Development & Digital Solutions Company in India",
      paragraphs: [
        "AINOR is a premier web development company specializing in custom software development, mobile app development, and comprehensive digital marketing solutions. As a MSME registered and Udyam certified digital agency (UDYAM-UP-36-0033877), we deliver cutting-edge technology solutions to businesses across India and globally.",
        "Our expert team specializes in React development, Next.js applications, Node.js backend solutions, and modern full-stack development. We provide end-to-end services including responsive website design, e-commerce development, custom web applications, mobile app development for iOS and Android, SEO services, digital marketing, and cloud solutions.",
        "Whether you're a startup looking for MVP development, an enterprise seeking digital transformation, or a business needing custom software solutions, AINOR delivers scalable, secure, and high-performance digital products. We serve clients across various industries including e-commerce, healthcare, education, logistics, fintech, and more."
      ]
    },
    portfolio: {
      title: "Professional Web Development Portfolio - Custom Software & Mobile Apps",
      paragraphs: [
        "Explore AINOR's extensive portfolio showcasing our expertise in web development, mobile application development, e-commerce solutions, and custom software projects. We have successfully delivered digital solutions for clients across India and international markets, including ride-sharing platforms, e-commerce websites, educational platforms, and enterprise applications.",
        "Our portfolio includes projects built with modern technologies like React, Next.js, React Native, Flutter, Node.js, MongoDB, PostgreSQL, Firebase, and AWS cloud infrastructure. Each project demonstrates our commitment to quality, performance optimization, user experience design, and scalable architecture.",
        "From small business websites to complex enterprise applications, our work showcases expertise in UI/UX design, responsive web development, API integration, payment gateway implementation, real-time features, admin dashboards, and mobile-first development. Contact us to discuss your project requirements."
      ]
    },
    services: {
      title: "Comprehensive Digital Services - Web Development, Mobile Apps & Digital Marketing",
      paragraphs: [
        "AINOR offers comprehensive digital services including professional web development, custom mobile app development, e-commerce solutions, digital marketing, SEO services, UI/UX design, cloud hosting solutions, and IT consulting. Our team of experienced developers, designers, and digital marketers work together to deliver exceptional results.",
        "Our web development services cover static websites, dynamic web applications, progressive web apps (PWA), content management systems (CMS), e-commerce platforms using Shopify, WooCommerce, and custom solutions, API development and integration, and enterprise web applications. We use cutting-edge technologies to ensure your website is fast, secure, and scalable.",
        "Mobile app development services include native iOS and Android apps, cross-platform development using React Native and Flutter, app design and prototyping, app store optimization (ASO), maintenance and support, and backend development. Our digital marketing services encompass SEO, social media marketing, content marketing, PPC advertising, email marketing, and analytics tracking to help grow your online presence."
      ]
    },
    about: {
      title: "About AINOR - MSME Certified Digital Solutions Provider",
      paragraphs: [
        "AINOR is a Government of India recognized MSME (Micro, Small and Medium Enterprises) digital solutions company with Udyam Registration Number UDYAM-UP-36-0033877. We are a team of passionate developers, designers, and digital strategists committed to helping businesses succeed in the digital age through innovative technology solutions.",
        "Founded with a vision to make professional web development and digital services accessible to businesses of all sizes, AINOR has grown into a trusted partner for startups, SMEs, and enterprises. Our expertise spans web development, mobile app development, custom software development, digital marketing, cloud solutions, and IT consulting.",
        "We pride ourselves on delivering high-quality, cost-effective digital solutions with transparent communication, agile development methodology, and dedicated support. Our client-centric approach ensures that every project is tailored to meet specific business goals and deliver measurable ROI. Partner with AINOR for your digital transformation journey."
      ]
    },
    contact: {
      title: "Contact AINOR - Get a Free Quote for Your Digital Project",
      paragraphs: [
        "Looking for a reliable web development company or mobile app development partner? Contact AINOR today for a free consultation and project quote. We offer custom software development, website design, mobile apps, e-commerce solutions, digital marketing, and more.",
        "Our team is ready to discuss your project requirements, provide technical guidance, and create a tailored solution that fits your budget and timeline. Whether you need a simple business website, complex web application, mobile app for iOS and Android, or comprehensive digital marketing services, we have the expertise to deliver.",
        "Get in touch with AINOR for affordable web development services, professional mobile app development, SEO optimization, digital marketing strategies, and custom software solutions. We serve clients across India and internationally. Contact us via phone, email, or our online form to start your digital journey today."
      ]
    },
    pricing: {
      title: "India's First Subscription-Based Web Development - Affordable Monthly Plans",
      paragraphs: [
        "AINOR introduces India's first subscription-based web development and digital services model. Instead of paying lakhs upfront, get your website, mobile app, or custom software for a small setup fee plus affordable monthly payments. Trusted by startups and growing businesses across India.",
        "Our subscription plans include everything: premium hosting, SSL certificates, regular updates, security patches, and 24/7 support. No hidden costs, no long-term contracts - cancel anytime with 30 days notice. Save 60-70% compared to traditional one-time projects while getting continuous value and support.",
        "Choose from web development plans starting at ₹2,499/month, mobile app plans from ₹4,999/month, and e-commerce solutions from ₹3,999/month. All plans include dedicated support and regular updates. Request a free quote and discover why businesses across India are switching to AINOR's subscription model."
      ]
    }
  };

  const pageContent = content[page] || content.home;

  return (
    <section className="py-12 bg-gradient-to-b from-gray-50 to-white border-t border-gray-200">
      <Container>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            {pageContent.title}
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            {pageContent.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-sm md:text-base">
                {paragraph}
              </p>
            ))}
          </div>
          
          {/* SEO Keywords footer */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-xs text-gray-600 leading-relaxed">
              <strong>Related Services:</strong> Subscription Web Development India | Monthly Website Plans | First in India Subscription Services | Affordable Web Development | No Upfront Cost Website | Cancel Anytime Web Service | Mobile App Development | Custom Software Development | E-commerce Website Development | React Development | Next.js Development | Node.js Development | UI/UX Design | Responsive Website Design | Progressive Web Apps | Flutter App Development | React Native Development | MSME Registered Company | Udyam Certified | Digital Transformation | Startup Development | Enterprise Solutions | Trusted by Businesses Across India
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SEOText;
