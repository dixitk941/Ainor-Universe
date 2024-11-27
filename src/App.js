import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import HomePage from './Pages/HomePage';  // Ensure this path is correct
import About from './Pages/About';  // Ensure this path is correct
import Features from './Pages/Features';  // Ensure this path is correct
import Contact from './Pages/Contact';  // Ensure this path is correct
import Header from './components/Header';
import Footer from './components/Footer';
import WelcomeModal from './components/WelcomeModal';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <ConditionalWelcomeModal />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/features" element={<Features />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

function ConditionalWelcomeModal() {
  const location = useLocation();
  const [showModal, setShowModal] = React.useState(false);

  React.useEffect(() => {
    if (location.pathname === '/') {
      const hasVisited = localStorage.getItem('hasVisited');
      if (!hasVisited) {
        setShowModal(true);
        localStorage.setItem('hasVisited', 'true');
      }
    }
  }, [location.pathname]);

  return showModal ? <WelcomeModal /> : null;
}

export default App;
