import React from 'react';

// Layout Components
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

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

const HomePage = () => {  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* 3D Scene - This will overlay the entire page */}
      <Scene3D />
      
      {/* Interactive Particle Background */}
      <ParticleBackground />
      
      {/* Tech Lines Network Background */}
      <TechLinesBackground />
      
      {/* Navigation Bar */}
      <Navbar />
      
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
      <TestimonialsSection />
      
      {/* Contact Section */}
      <ContactSection />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;