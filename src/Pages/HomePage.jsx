import React, { useMemo } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

import SEOHead from '../components/seo/SEOHead';
import ServiceSchema from '../components/seo/ServiceSchema';
import SEOText from '../components/seo/SEOText';

import FloatingNav           from '../components/layout/FloatingNav';
import ModernFooter          from '../components/layout/ModernFooter';

import ModernHeroSection       from '../components/sections/ModernHeroSection';
import OurClientsSection       from '../components/sections/OurClientsSection';
import ClientStoriesSection    from '../components/sections/ClientStoriesSection';
import ProjectsCarouselSection from '../components/sections/ProjectsCarouselSection';
import ModernServicesSection   from '../components/sections/ModernServicesSection';
import HowItWorksSection       from '../components/sections/HowItWorksSection';
import WhyAinorBentoSection    from '../components/sections/WhyAinorBentoSection';
import TechStackSection        from '../components/sections/TechStackSection';
import ContactSection          from '../components/sections/ContactSection';

import BookDemoPopup  from '../components/ui/BookDemoPopup';
import { FilmGrain }  from '../components/ui/CinematicEffects';

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 z-[9999] origin-left"
    />
  );
};

const HomePage = () => {
  const structuredData = useMemo(() => ({
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'AINOR - Digital Solutions & Web Development Company',
    description: 'Subscription-based development agency. Flat pricing. No contracts.',
    url: 'https://myainor.com/',
    mainEntity: { '@type': 'Organization', name: 'AINOR', url: 'https://myainor.com' },
  }), []);

  return (
    <>
      <SEOHead
        title="AINOR - Affordable Web Development from ₹9,999/mo | Subscription-Based Agency"
        description="🚀 Affordable web development trusted by 50+ startups. Flat monthly pricing from ₹9,999/mo."
        keywords="affordable web development India, subscription web development"
        canonicalUrl="https://myainor.com/"
        structuredData={structuredData}
      />
      <ServiceSchema />

      {/* Global VFX */}
      <FilmGrain />
      <ScrollProgress />
      <BookDemoPopup />

      {/* Page: light base — contact/footer stay dark */}
      <div className="bg-[#f5f5f5] min-h-screen overflow-x-hidden">
        <FloatingNav />

        <main className="w-full flex flex-col">
          <ModernHeroSection />
          <OurClientsSection />
          <ClientStoriesSection />
          <ProjectsCarouselSection />
          <ModernServicesSection />
          <HowItWorksSection />
          <WhyAinorBentoSection />
          <TechStackSection />
          <SEOText page="home" />
          <ContactSection />
          <ModernFooter />
        </main>
      </div>
    </>
  );
};

export default React.memo(HomePage);
