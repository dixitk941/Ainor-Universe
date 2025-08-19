import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import HomePage from './Pages/HomePage';
import ServiceDetailPage from './Pages/ServiceDetailPage';
import ContactPage from './Pages/ContactPage';
import AboutPage from './Pages/AboutPage';
import PortfolioPage from './Pages/PortfolioPage';
import BlogPage from './Pages/BlogPage';
import BlogPostPage from './Pages/BlogPostPage';
import CareersPage from './Pages/CareersPage';
import FAQPage from './Pages/FAQPage';
import PricingPage from './Pages/PricingPage';
import SplashScreen from './components/ui/SplashScreen';
import CookieConsent from './components/ui/CookieConsent';
import BackToTop from './components/ui/BackToTop';
import WolfChatbot from './components/ui/WolfChatbot';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import AiServicesPage from './Pages/AiServicesPage';

import './App.css';

function App() {
  // Add a useEffect to set basic body style
  React.useEffect(() => {
    // Just ensure no margin/padding for body
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.body.style.backgroundColor = '#1f2937';
    
    // Cleanup function
    return () => {
      document.body.style.margin = '';
      document.body.style.padding = '';
      document.body.style.backgroundColor = '';
    };
  }, []);

  return (
    <HelmetProvider>
      <Router>
        <div className="bg-gray-900 min-h-screen relative m-0 p-0">
          <SplashScreen />
          <Navbar />
          <main className="bg-white pt-0">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/services" element={<ServiceDetailPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/portfolio" element={<PortfolioPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:slug" element={<BlogPostPage />} />
              <Route path="/careers" element={<CareersPage />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/pricing" element={<PricingPage />} />
              <Route path="/ai-services" element={<AiServicesPage />} />
            </Routes>
          </main>
          <Footer />
          <BackToTop />
          <CookieConsent />
          <WolfChatbot />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;