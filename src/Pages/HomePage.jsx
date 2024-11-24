import React from 'react';
// import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import About from '../components/About';
import Features from '../components/Features';
import CTA from '../components/CTA';
import Roadmap from '../components/Roadmap';
// import Footer from '../components/Footer';

function App() {
  return (
    <div className="font-sans bg-gray-900 text-white">
      {/* <Header /> */}
      <HeroSection />
      <About />
      <Roadmap />
      <Features />
      <CTA />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
