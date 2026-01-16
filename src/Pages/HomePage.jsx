import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

// SEO Component
import SEOHead from '../components/seo/SEOHead';
import ServiceSchema from '../components/seo/ServiceSchema';
import SEOText from '../components/seo/SEOText';

// Layout Components
import FloatingNav from '../components/layout/FloatingNav';
import ModernFooter from '../components/layout/ModernFooter';

// Section Components - Modern Design
import ModernHeroSection from '../components/sections/ModernHeroSection';
import ProjectsCarouselSection from '../components/sections/ProjectsCarouselSection';
import ModernServicesSection from '../components/sections/ModernServicesSection';
import WhyAinorBentoSection from '../components/sections/WhyAinorBentoSection';
import HowItWorksSection from '../components/sections/HowItWorksSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import ContactSection from '../components/sections/ContactSection';

const HomePage = () => {
  // Memoize structured data to prevent unnecessary re-renders
  const homePageStructuredData = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "AINOR - Digital Solutions & Web Development Company",
    "description": "Leading digital solutions company specializing in web development, mobile apps, and custom software development. Transform your business with innovative technology solutions.",
    "url": "https://myainor.com/",
    "mainEntity": {
      "@type": "Organization",
      "name": "AINOR",
      "url": "https://myainor.com",
      "logo": "https://myainor.com/logo512.png"
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://myainor.com/"
        }
      ]
    }
  }), []);
    return (
    <>
      <SEOHead 
        title="AINOR - Digital Solutions & Web Development Company | Transform Your Business"
        description="Leading digital solutions company specializing in web development, mobile apps, and custom software development. Transform your business with innovative technology solutions by AINOR."
        keywords="AINOR, digital solutions, web development, mobile apps, custom software, React development, JavaScript, website design, digital transformation, technology company, software development, business automation"        
        canonicalUrl="https://myainor.com/"
        structuredData={homePageStructuredData}
      />
      <ServiceSchema />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        style={{ backgroundColor: '#F5F5F5' }}
        className="min-h-screen"
      >
        {/* Floating Navigation */}
        <FloatingNav />

        {/* Main Content Container */}
        <main className="w-full max-w-[1300px] mx-auto pt-28 px-4 flex flex-col gap-6 pb-12">
          <ModernHeroSection />
          <ProjectsCarouselSection />
          <ModernServicesSection />
          <WhyAinorBentoSection />
          <HowItWorksSection />
          
          <div id="testimonials">
            <TestimonialsSection />
          </div>
          
          <SEOText page="home" />
          <ContactSection />
          
          <ModernFooter />
        </main>
      </motion.div>
    </>
  );
};

export default React.memo(HomePage);