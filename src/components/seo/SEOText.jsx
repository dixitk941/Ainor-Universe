import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../layout/Container';

const SEOText = ({ page = 'home' }) => {
  const content = {
    home: {
      title: "Affordable Subscription-Based Web Development - Flat Monthly Pricing",
      paragraphs: [
        "AINOR offers subscription-based web development, changing how businesses get websites and mobile apps built. Instead of paying ₹3-5 Lakhs upfront, our model lets you get professional websites from ₹9,999/month and mobile apps from ₹19,999/month. MSME registered (UDYAM-UP-36-0033877) and trusted by 50+ businesses across India.",
        "Our proven portfolio includes successful projects like Sttrika (e-commerce with ₹10L+ revenue), GoForCab (10,000+ rides, 500+ drivers), ExamBulletin (top Google rankings for Sarkari Result), and HiiHive (2,000+ active students). We specialize in React, Next.js, Node.js, React Native, and Flutter development with SEO included.",
        "Unlike traditional agencies that disappear after delivery, our subscription includes unlimited updates, 24/7 support, hosting, SSL, security monitoring, and monthly feature additions. No long-term contracts - cancel anytime. Start your project today with a FREE consultation!"
      ],
      links: [
        { text: "View Our Portfolio", url: "/portfolio" },
        { text: "See Transparent Pricing", url: "/pricing" },
        { text: "Read Success Stories", url: "/blog" },
        { text: "Get Free Quote", url: "/contact" }
      ]
    },
    portfolio: {
      title: "50+ Successful Projects: E-Commerce, Mobile Apps, Web Platforms | Real Results",
      paragraphs: [
        "Explore AINOR's portfolio of 50+ successful projects across e-commerce, mobile apps, web platforms, and content portals. Our clients have achieved remarkable results: Sttrika generated ₹10,00,000+ revenue with 5,000+ users, GoForCab completed 10,000+ rides with 500+ active drivers, and ExamBulletin ranks highly on Google for competitive government job keywords.",
        "Each project showcases our expertise in modern technologies including React, Next.js, React Native, Flutter, Node.js, MongoDB, PostgreSQL, and cloud infrastructure (AWS, Firebase). We don't just build websites - we create revenue-generating digital assets with proven ROI.",
        "From fashion e-commerce (Sttrika) to ride-hailing platforms (GoForCab), educational platforms (HiiHive) to job portals (ExamBulletin), our diverse portfolio proves we can handle any industry. Every project includes SEO optimization for better visibility and organic traffic growth."
      ],
      links: [
        { text: "Start Similar Project", url: "/contact" },
        { text: "View Pricing Plans", url: "/pricing" },
        { text: "Read Case Studies", url: "/blog" },
        { text: "About Our Team", url: "/about" }
      ]
    },
    services: {
      title: "Web Development, Mobile Apps, E-Commerce, SEO - All-Inclusive Subscription Plans",
      paragraphs: [
        "AINOR offers comprehensive digital services on a subscription basis - the first of its kind in India. Our web development services include custom business websites, landing pages, corporate sites, and complex web applications. Mobile app development covers both iOS and Android using React Native and Flutter for cross-platform efficiency.",
        "E-commerce solutions include product catalogs, shopping carts, payment integration (Razorpay, Stripe), inventory management, and admin dashboards. Every service includes FREE SEO optimization - we've helped clients like ExamBulletin achieve #1 Google rankings within 90 days.",
        "What sets us apart: All-inclusive pricing with no hidden costs. Hosting, SSL, security monitoring, updates, and 24/7 support included. Traditional agencies charge ₹3-5 Lakhs upfront plus ₹15,000-50,000/month for maintenance. With AINOR, everything is included from ₹9,999/month with significant cost savings."
      ],
      links: [
        { text: "Compare Pricing", url: "/pricing" },
        { text: "View Our Work", url: "/portfolio" },
        { text: "Read Blog Guides", url: "/blog" },
        { text: "Contact Us", url: "/contact" }
      ]
    },
    about: {
      title: "About AINOR - MSME Certified, Government Recognized, Trusted by 50+ Businesses",
      paragraphs: [
        "AINOR is a Government of India recognized MSME (UDYAM-UP-36-0033877) founded with a mission to make professional web development accessible to all businesses in India. Our subscription model enables startups and SMEs to get quality websites and apps without ₹3-5 Lakhs upfront costs.",
        "Our team of expert developers, designers, and digital marketers has successfully delivered 50+ projects across e-commerce, mobility, education, and content sectors. Notable clients include Sttrika (fashion e-commerce), GoForCab (ride-hailing), ExamBulletin (job portal), HiiHive (student platform), and Mohan G Enterprises (B2B).",
        "We're not just developers - we're growth partners. Our SEO strategies have helped clients achieve top Google rankings. Our e-commerce solutions have generated lakhs in revenue. Our mobile apps have served thousands of users. Partner with AINOR for transparent pricing, proven results, and dedicated support."
      ],
      links: [
        { text: "See Our Projects", url: "/portfolio" },
        { text: "View Pricing", url: "/pricing" },
        { text: "Read Our Blog", url: "/blog" },
        { text: "Get Started", url: "/contact" }
      ]
    },
    contact: {
      title: "Get FREE Quote Within 2 Hours - WhatsApp, Email, Phone Available 24/7",
      paragraphs: [
        "Ready to start your project? Contact AINOR for a FREE consultation and detailed quote within 2 hours. We're available on WhatsApp (+91-7579500264), email, and phone. No commitment required - just honest advice on how we can help your business grow online.",
        "Whether you need a simple business website, complex e-commerce platform, mobile app for iOS/Android, or comprehensive digital marketing, we'll provide transparent pricing with no hidden costs. Our subscription model offers significant cost advantages over traditional agency pricing.",
        "Join 50+ happy clients including Sttrika, GoForCab, ExamBulletin, and HiiHive. See our portfolio for proof of results. Special offer: First month 50% OFF for new clients. Let's discuss your project today!"
      ],
      links: [
        { text: "View Portfolio", url: "/portfolio" },
        { text: "See Pricing", url: "/pricing" },
        { text: "Read Case Studies", url: "/blog" },
        { text: "About AINOR", url: "/about" }
      ]
    },
    pricing: {
      title: "Transparent Pricing: ₹9,999/mo Websites, ₹19,999/mo Apps | All-Inclusive Plans",
      paragraphs: [
        "AINOR's subscription model is simple: pay a small setup fee + affordable monthly payments. Web development starts at ₹9,999/month, mobile apps from ₹19,999/month, e-commerce from ₹14,999/month. Compare this to traditional agencies charging ₹1-15 Lakhs upfront.",
        "Everything included: Custom development, premium hosting, SSL certificates, domain setup, SEO optimization, security monitoring, regular updates, and 24/7 support. No hidden costs, no surprise invoices. Cancel anytime with 30 days notice - you keep the source code.",
        "See proof in our portfolio: Sttrika (fashion e-commerce, ₹10L+ revenue), GoForCab (10,000+ rides), ExamBulletin (top rankings). Real projects, real results. Get your FREE quote today!"
      ],
      links: [
        { text: "View Portfolio", url: "/portfolio" },
        { text: "Read Case Studies", url: "/blog" },
        { text: "About Us", url: "/about" },
        { text: "Get Free Quote", url: "/contact" }
      ]
    },
    blog: {
      title: "Web Development Insights, Case Studies & Guides | AINOR Blog",
      paragraphs: [
        "Stay updated with the latest web development trends, cost guides, and real case studies from AINOR. Our blog covers topics from web development costs in India to mobile app development strategies, SEO best practices, and e-commerce success stories.",
        "Learn from our experience building 50+ projects including Sttrika (₹10L+ revenue), GoForCab (10,000+ rides), and ExamBulletin (top Google rankings). We share actionable insights that help businesses make informed decisions about their digital presence.",
        "Whether you're a startup exploring options or an established business looking to upgrade, our guides provide transparent information about costs, timelines, and best practices in web and mobile development."
      ],
      links: [
        { text: "View Our Portfolio", url: "/portfolio" },
        { text: "See Pricing", url: "/pricing" },
        { text: "Start Your Project", url: "/contact" },
        { text: "All Services", url: "/all-services" }
      ]
    },
    'ai-services': {
      title: "AI & Machine Learning Solutions | Chatbots, Automation, ML Models | AINOR",
      paragraphs: [
        "AINOR brings enterprise-grade AI solutions to businesses of all sizes. From custom AI chatbots that handle customer queries 24/7 to machine learning models that predict trends and automate decisions - we make AI accessible and practical.",
        "Our AI services include natural language processing for text analysis, computer vision for image recognition, predictive analytics for business forecasting, and process automation to eliminate repetitive tasks. All integrated seamlessly with your existing systems.",
        "Using cutting-edge technologies like OpenAI GPT, LangChain, TensorFlow, and AWS SageMaker, we build AI solutions that deliver real ROI. Start with a simple chatbot and scale up as you see value."
      ],
      links: [
        { text: "View All Services", url: "/all-services" },
        { text: "See Pricing", url: "/pricing" },
        { text: "Our Portfolio", url: "/portfolio" },
        { text: "Get Free Consultation", url: "/contact" }
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
          
          {/* Internal Links Section */}
          {pageContent.links && (
            <div className="mt-6 flex flex-wrap gap-3">
              {pageContent.links.map((link, index) => (
                <Link 
                  key={index}
                  to={link.url}
                  className="inline-flex items-center px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
                >
                  {link.text} →
                </Link>
              ))}
            </div>
          )}
          
          {/* SEO Keywords footer with internal links */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-xs text-gray-600 leading-relaxed mb-4">
              <strong>Popular Services:</strong>{' '}
              <Link to="/pricing" className="text-primary hover:underline">Subscription Web Development</Link> |{' '}
              <Link to="/pricing" className="text-primary hover:underline">Monthly Website Plans</Link> |{' '}
              <Link to="/portfolio" className="text-primary hover:underline">Portfolio & Case Studies</Link> |{' '}
              <Link to="/blog" className="text-primary hover:underline">Web Development Cost Guide</Link> |{' '}
              <Link to="/contact" className="text-primary hover:underline">Free Consultation</Link>
            </p>
            <p className="text-xs text-gray-500 leading-relaxed">
              <strong>Technologies:</strong> React Development | Next.js | Node.js | React Native | Flutter | MongoDB | PostgreSQL | AWS | Firebase | TailwindCSS | TypeScript | E-commerce | Mobile Apps | Custom Software | SEO Services | Digital Marketing | MSME Registered (UDYAM-UP-36-0033877)
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SEOText;
