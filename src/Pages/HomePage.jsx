import React from 'react';

// SEO Component
import SEOHead from '../components/seo/SEOHead';
import ServiceSchema from '../components/seo/ServiceSchema';

// UI Components
import Scene3D from '../components/ui/Scene3D';
import ParticleBackground from '../components/ui/ParticleBackground';
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
  const homePageStructuredData = {
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
  };
  
  return (
    <>
      <SEOHead 
        title="AINOR - Digital Solutions & Web Development Company | Transform Your Business"
        description="Leading digital solutions company specializing in web development, mobile apps, and custom software development. Transform your business with innovative technology solutions by AINOR."
        keywords="AINOR, digital solutions, web development, mobile apps, custom software, React development, JavaScript, website design, digital transformation, technology company, software development, business automation"        canonicalUrl="https://myainor.com/"
        structuredData={homePageStructuredData}
      />
      <ServiceSchema />
      
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* 3D Scene - This will overlay the entire page */}
      <Scene3D />
      
      {/* Interactive Particle Background */}
      <ParticleBackground />
      
      {/* Tech Lines Network Background */}
      <TechLinesBackground />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Services Section */}
      <ServicesSection />
      
      {/* Features Section */}
      <FeaturesSection />
      
      {/* Work Portfolio Section */}
      <WorkSection />
      
      {/* About Us Section */}
      <AboutSection />
        {/* Testimonials Section */}
      <div id="testimonials">
        <TestimonialsSection />
      </div>
        {/* Contact Section */}
      <ContactSection />
    </div>
    </>
  );
};

export default HomePage;