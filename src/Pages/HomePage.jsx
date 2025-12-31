import React, { useState, useEffect, useMemo } from 'react';

// SEO Component
import SEOHead from '../components/seo/SEOHead';
import ServiceSchema from '../components/seo/ServiceSchema';
import SEOText from '../components/seo/SEOText';

// UI Components
import AnimatedBackground from '../components/ui/AnimatedBackground';
import ScrollConnectedCard from '../components/ui/ScrollConnectedCard';

// Section Components
import HeroSection from '../components/sections/HeroSection';
import ServicesSection from '../components/sections/ServicesSection';
import AboutSection from '../components/sections/AboutSection';
import WorkSection from '../components/sections/WorkSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import ContactSection from '../components/sections/ContactSection';
import FeaturesSection from '../components/sections/FeaturesSection';
import SubscriptionBenefitsSection from '../components/sections/SubscriptionBenefitsSection';

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
      
      <div className="min-h-screen overflow-hidden relative" style={{backgroundColor: '#f5f5f5'}}>
        {/* Animated SVG Background */}
        {isDesktop && <AnimatedBackground />}
        
        {/* Scroll-Connected Traveling Card */}
        {isDesktop && <ScrollConnectedCard />}
        
        {/* Page content with relative z-index */}
        <div className="relative z-10">
        <HeroSection />
        <SubscriptionBenefitsSection />
        <ServicesSection />
        <FeaturesSection />
        <WorkSection />
        <AboutSection />
        <div id="testimonials">
          <TestimonialsSection />
        </div>
        <SEOText page="home" />
        <ContactSection />
        </div>
      </div>
    </>
  );
};

export default React.memo(HomePage);