import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import ServiceDetailPage from './Pages/ServiceDetailPage';
import ContactPage from './Pages/ContactPage';
import AboutPage from './Pages/AboutPage';
import PortfolioPage from './Pages/PortfolioPage';
import BlogPage from './Pages/BlogPage';
import CareersPage from './Pages/CareersPage';
import FAQPage from './Pages/FAQPage';
import PricingPage from './Pages/PricingPage';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
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
      </div>
    </Router>
  );
}


export default App;
