import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import HomePage from './Pages/HomePage';
import ServiceDetailPage from './Pages/ServiceDetailPage';
import ContactPage from './Pages/ContactPage';
import AboutPage from './Pages/AboutPage';
import PortfolioPage from './Pages/PortfolioPage';
import BlogPage from './Pages/BlogPage';
import CareersPage from './Pages/CareersPage';
import FAQPage from './Pages/FAQPage';
import PricingPage from './Pages/PricingPage';
import SplashScreen from './components/ui/SplashScreen';
import CookieConsent from './components/ui/CookieConsent';
import BackToTop from './components/ui/BackToTop';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

import './App.css';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="App">
          <SplashScreen />
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServiceDetailPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/pricing" element={<PricingPage />} />
          </Routes>
          <Footer />
          <BackToTop />
          <CookieConsent />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;