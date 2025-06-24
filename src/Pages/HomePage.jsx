import React, { useState, useEffect, useMemo } from 'react';

// SEO Component
import SEOHead from '../components/seo/SEOHead';
import ServiceSchema from '../components/seo/ServiceSchema';

// UI Components
import TechLinesBackground from '../components/ui/TechLinesBackground';

// Section Components
import HeroSection from '../components/sections/HeroSection';
import ServicesSection from '../components/sections/ServicesSection';
import AboutSection from '../components/sections/AboutSection';
import WorkSection from '../components/sections/WorkSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import ContactSection from '../components/sections/ContactSection';
import FeaturesSection from '../components/sections/FeaturesSection';

const HomePage = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  
  // Better detect desktop with throttled resize handler
  useEffect(() => {
    // Initial check
    setIsDesktop(window.innerWidth > 768);
    
    // Optimized resize handler with debouncing
    let resizeTimer;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        setIsDesktop(window.innerWidth > 768);
      }, 250); // Wait 250ms after resize finishes
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimer);
    };
  }, []);
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
      
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        {/* Use only TechLinesBackground on desktop for improved performance */}
        {isDesktop && <TechLinesBackground />}
        
        {/* Optimized page sections - load in sequence */}
        <HeroSection />
        <ServicesSection />
        <FeaturesSection />
        <WorkSection />
        <AboutSection />
        <div id="testimonials">
          <TestimonialsSection />
        </div>
        <ContactSection />
      </div>
    </>
  );
};

export default React.memo(HomePage);