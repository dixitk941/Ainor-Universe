import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

// Morphing scroll card that transforms into useful content at each section
// Picks up from Hero → morphs into Benefits content → picks up → morphs into Services → etc.

const ScrollConnectedCard = ({ isMobile = false }) => {
  const [windowHeight, setWindowHeight] = useState(0);
  const [currentSection, setCurrentSection] = useState(0);
  
  useEffect(() => {
    setWindowHeight(window.innerHeight);
    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Track scroll position for section detection
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const vh = window.innerHeight;
      
      // Determine current section based on scroll
      if (scrollY < vh * 0.6) {
        setCurrentSection(0); // Hero - Task Card
      } else if (scrollY < vh * 1.4) {
        setCurrentSection(1); // Transition 1
      } else if (scrollY < vh * 2.2) {
        setCurrentSection(2); // Benefits - Savings Card
      } else if (scrollY < vh * 3.0) {
        setCurrentSection(3); // Transition 2
      } else if (scrollY < vh * 3.8) {
        setCurrentSection(4); // Services - Browser Card
      } else if (scrollY < vh * 4.6) {
        setCurrentSection(5); // Transition 3
      } else if (scrollY < vh * 5.4) {
        setCurrentSection(6); // Work - Portfolio Card
      } else {
        setCurrentSection(7); // Final fade out
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const { scrollY } = useScroll();

  // ============ POSITION ANIMATIONS ============
  // Card moves in a journey: Hero → Benefits → Services → Work
  
  // Y position - stops at each section
  const cardY = useTransform(
    scrollY,
    [
      0,                      // Start in Hero
      windowHeight * 0.5,    // Still in Hero
      windowHeight * 0.8,    // Moving to Benefits
      windowHeight * 1.4,    // Settled in Benefits
      windowHeight * 2.0,    // Moving to Services
      windowHeight * 2.6,    // Settled in Services
      windowHeight * 3.2,    // Moving to Work
      windowHeight * 3.8,    // Settled in Work
      windowHeight * 5.0,    // Exit
    ],
    [
      windowHeight * 0.45,   // Hero position
      windowHeight * 0.45,   // Hero position (holding)
      windowHeight * 0.25,   // Moving up
      windowHeight * 0.35,   // Benefits position
      windowHeight * 0.25,   // Moving
      windowHeight * 0.3,    // Services position
      windowHeight * 0.25,   // Moving
      windowHeight * 0.35,   // Work position
      windowHeight * 0.1,    // Exit top
    ]
  );
  
  // X position - zigzag across screen
  const cardX = useTransform(
    scrollY,
    [
      0,
      windowHeight * 0.5,
      windowHeight * 1.4,
      windowHeight * 2.6,
      windowHeight * 3.8,
      windowHeight * 5.0,
    ],
    ['8%', '8%', '60%', '10%', '55%', '50%']
  );
  
  // Scale - grows when settling, shrinks when moving
  const cardScale = useTransform(
    scrollY,
    [
      0,
      windowHeight * 0.3,
      windowHeight * 0.7,    // Moving
      windowHeight * 1.2,    // Settling in Benefits
      windowHeight * 1.6,    // Settled
      windowHeight * 2.0,    // Moving
      windowHeight * 2.4,    // Settling in Services
      windowHeight * 2.8,    // Settled
      windowHeight * 3.2,    // Moving
      windowHeight * 3.6,    // Settling in Work
      windowHeight * 4.0,    // Settled
      windowHeight * 5.0,    // Exit
    ],
    [0, 1, 0.85, 0.9, 1.05, 0.85, 0.9, 1.05, 0.85, 0.9, 1.05, 0]
  );
  
  // Opacity
  const cardOpacity = useTransform(
    scrollY,
    [0, windowHeight * 0.2, windowHeight * 0.4, windowHeight * 4.8, windowHeight * 5.2],
    [0, 0.5, 1, 1, 0]
  );
  
  // Rotation - tilts as it moves
  const cardRotate = useTransform(
    scrollY,
    [0, windowHeight * 1, windowHeight * 2, windowHeight * 3, windowHeight * 4],
    [0, -5, 5, -5, 0]
  );

  // Progress bar
  const progressWidth = useTransform(
    scrollY,
    [0, windowHeight * 5],
    ['0%', '100%']
  );

  // Mobile transforms - defined at top level
  const mobileY = useTransform(
    scrollY,
    [0, windowHeight * 0.4, windowHeight * 1.2, windowHeight * 2, windowHeight * 3, windowHeight * 4],
    [windowHeight * 0.65, windowHeight * 0.12, windowHeight * 0.15, windowHeight * 0.12, windowHeight * 0.18, windowHeight * 0.1]
  );
  
  const mobileX = useTransform(
    scrollY,
    [0, windowHeight * 0.8, windowHeight * 1.6, windowHeight * 2.4, windowHeight * 3.2],
    ['5%', '40%', '5%', '35%', '5%']
  );
  
  const mobileScale = useTransform(
    scrollY,
    [0, windowHeight * 0.3, windowHeight * 1],
    [0, 0.75, 0.7]
  );
  
  const mobileOpacity = useTransform(
    scrollY,
    [0, windowHeight * 0.15, windowHeight * 0.4, windowHeight * 3.5, windowHeight * 4],
    [0, 0.5, 1, 1, 0]
  );

  // ============ CARD CONTENT VARIANTS ============
  // Different content for each section the card morphs into

  // Card 1: Task List (Hero Section)
  const TaskCard = () => (
    <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-5 shadow-2xl border border-indigo-100 w-[280px]">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-indigo-500 text-lg">✦</span>
        <span className="font-bold text-[#1a1a1a] text-sm">All Your Tasks</span>
        <motion.div 
          className="ml-auto w-2.5 h-2.5 rounded-full bg-green-500"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </div>
      
      <div className="space-y-2.5">
        {[
          { name: 'Website Design', done: true },
          { name: 'Mobile App UI', done: true },
          { name: 'Landing Page', done: false },
        ].map((task, i) => (
          <div key={i} className="flex items-center gap-2.5">
            <div className={`w-5 h-5 rounded-full ${task.done ? 'bg-indigo-500' : 'bg-gray-200'} flex items-center justify-center flex-shrink-0`}>
              {task.done && (
                <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              )}
            </div>
            <span className={`text-sm ${task.done ? 'text-[#1a1a1a]' : 'text-gray-400'}`}>{task.name}</span>
          </div>
        ))}
      </div>
      
      <div className="mt-4 pt-3 border-t border-gray-100">
        <div className="flex justify-between text-xs mb-1.5">
          <span className="text-gray-400">Progress</span>
          <span className="text-indigo-500 font-semibold">67%</span>
        </div>
        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
          <div className="h-full bg-indigo-500 rounded-full w-2/3"></div>
        </div>
      </div>
    </div>
  );

  // Card 2: Savings Calculator (Benefits Section)
  const SavingsCard = () => (
    <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-5 shadow-2xl border border-green-100 w-[280px]">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
          <span className="text-green-600">₹</span>
        </div>
        <span className="font-bold text-[#1a1a1a] text-sm">Your Savings</span>
        <span className="ml-auto px-2 py-0.5 bg-green-100 text-green-600 text-[10px] font-bold rounded-full">SMART</span>
      </div>
      
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-xs text-gray-500">Traditional Cost</span>
          <span className="text-sm text-gray-400 line-through">₹1,50,000</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-xs text-gray-500">Setup Fee</span>
          <span className="text-sm text-[#1a1a1a] font-medium">₹15,000</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-xs text-gray-500">Monthly</span>
          <span className="text-sm text-[#1a1a1a] font-medium">₹500/mo</span>
        </div>
        <div className="h-px bg-gray-200"></div>
        <div className="flex justify-between items-center pt-1">
          <span className="text-sm font-bold text-green-600">You Save</span>
          <motion.span 
            className="text-lg font-bold text-green-600"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            ₹1,29,000
          </motion.span>
        </div>
      </div>
      
      <div className="mt-3 bg-green-50 rounded-lg p-2 text-center">
        <span className="text-xs text-green-600 font-medium">86% less upfront! 🎉</span>
      </div>
    </div>
  );

  // Card 3: Browser Preview (Services Section)
  const BrowserCard = () => (
    <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl border border-indigo-100 w-[280px] overflow-hidden">
      {/* Browser Header */}
      <div className="bg-gray-100 px-4 py-2.5 flex items-center gap-2 border-b border-gray-200">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-400"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
          <div className="w-3 h-3 rounded-full bg-green-400"></div>
        </div>
        <div className="flex-1 ml-2 h-5 bg-white rounded-full flex items-center px-2">
          <span className="text-[9px] text-gray-400">yourwebsite.com</span>
        </div>
      </div>
      
      {/* Browser Content */}
      <div className="p-4">
        <div className="h-24 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-xl mb-3 flex items-center justify-center">
          <motion.span 
            className="text-3xl"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            ✨
          </motion.span>
        </div>
        
        <div className="space-y-2">
          <div className="h-2.5 bg-gray-200 rounded-full w-full"></div>
          <div className="h-2.5 bg-gray-200 rounded-full w-4/5"></div>
          <div className="h-2.5 bg-gray-200 rounded-full w-3/5"></div>
        </div>
        
        <div className="flex gap-2 mt-4">
          <div className="flex-1 h-8 bg-indigo-500 rounded-lg flex items-center justify-center">
            <span className="text-white text-[10px] font-medium">Get Started</span>
          </div>
          <div className="flex-1 h-8 bg-gray-100 rounded-lg"></div>
        </div>
      </div>
      
      <div className="px-4 pb-3">
        <div className="flex items-center gap-2 text-[10px] text-gray-500">
          <span className="w-2 h-2 rounded-full bg-green-400"></span>
          <span>Live & Running</span>
        </div>
      </div>
    </div>
  );

  // Card 4: Portfolio Preview (Work Section)
  const PortfolioCard = () => (
    <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-5 shadow-2xl border border-purple-100 w-[280px]">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
          <span className="text-purple-600">🎨</span>
        </div>
        <span className="font-bold text-[#1a1a1a] text-sm">Latest Project</span>
        <span className="ml-auto px-2 py-0.5 bg-purple-100 text-purple-600 text-[10px] font-bold rounded-full">NEW</span>
      </div>
      
      {/* Project preview stack */}
      <div className="relative h-32 mb-4">
        <motion.div 
          className="absolute top-3 left-3 w-full h-24 bg-purple-100 rounded-xl"
          animate={{ rotate: [3, 5, 3] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.div 
          className="absolute top-1.5 left-1.5 w-full h-24 bg-indigo-100 rounded-xl"
          animate={{ rotate: [1, 3, 1] }}
          transition={{ duration: 3, repeat: Infinity, delay: 0.1 }}
        />
        <div className="absolute w-full h-24 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center">
          <span className="text-white text-xs font-medium">E-Commerce Platform</span>
        </div>
      </div>
      
      <div className="flex items-center justify-between">
        <div>
          <div className="text-2xl font-bold text-[#1a1a1a]">50+</div>
          <div className="text-xs text-gray-500">Projects Done</div>
        </div>
        <div className="flex items-center gap-1">
          <span className="text-yellow-500">★★★★★</span>
        </div>
      </div>
    </div>
  );

  // Transition Card - shown while moving between sections
  const TransitionCard = () => (
    <motion.div 
      className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-indigo-200 w-[200px]"
      animate={{ 
        scale: [0.95, 1.05, 0.95],
        rotate: [-2, 2, -2]
      }}
      transition={{ duration: 1.5, repeat: Infinity }}
    >
      <div className="flex items-center justify-center gap-3">
        <motion.div
          className="w-3 h-3 bg-indigo-500 rounded-full"
          animate={{ scale: [1, 1.5, 1] }}
          transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
        />
        <motion.div
          className="w-3 h-3 bg-indigo-400 rounded-full"
          animate={{ scale: [1, 1.5, 1] }}
          transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
        />
        <motion.div
          className="w-3 h-3 bg-indigo-300 rounded-full"
          animate={{ scale: [1, 1.5, 1] }}
          transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
        />
      </div>
      <div className="text-center mt-2 text-xs text-gray-500">Moving...</div>
    </motion.div>
  );

  // ============ RENDER CURRENT CARD ============
  const renderCard = () => {
    switch (currentSection) {
      case 0: return <TaskCard />;
      case 1: return <TransitionCard />;
      case 2: return <SavingsCard />;
      case 3: return <TransitionCard />;
      case 4: return <BrowserCard />;
      case 5: return <TransitionCard />;
      case 6: return <PortfolioCard />;
      default: return <TaskCard />;
    }
  };

  if (isMobile) {
    // ============ MOBILE VERSION ============
    return (
      <>
        <motion.div
          className="fixed z-20 pointer-events-none"
          style={{ 
            y: mobileY, 
            x: mobileX, 
            scale: mobileScale, 
            opacity: mobileOpacity,
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSection}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              {renderCard()}
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Mobile scroll progress bar at top */}
        <motion.div
          className="fixed top-0 left-0 h-1 bg-indigo-500 z-50"
          style={{ width: progressWidth }}
        />
      </>
    );
  }

  // ============ DESKTOP VERSION ============
  return (
    <>
      {/* Main Morphing Card */}
      <motion.div
        className="fixed z-20 pointer-events-none"
        style={{ 
          y: cardY, 
          x: cardX, 
          scale: cardScale, 
          opacity: cardOpacity, 
          rotate: cardRotate,
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSection}
            initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            exit={{ opacity: 0, scale: 0.8, rotateY: 90 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {renderCard()}
          </motion.div>
        </AnimatePresence>
        
        {/* Connection dot on top */}
        <motion.div
          className="absolute -top-4 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-indigo-500"
          animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        
        {/* Trail line */}
        <motion.div
          className="absolute -top-8 left-1/2 -translate-x-1/2 w-0.5 h-5 bg-gradient-to-t from-indigo-500 to-transparent"
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>

      {/* Section indicators - small dots showing journey */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 z-30 flex flex-col gap-3 pointer-events-none">
        {['Tasks', 'Savings', 'Preview', 'Portfolio'].map((label, i) => {
          const sectionIndex = i * 2; // 0, 2, 4, 6
          const isActive = currentSection >= sectionIndex && currentSection < sectionIndex + 2;
          const isPast = currentSection > sectionIndex + 1;
          
          return (
            <motion.div 
              key={i} 
              className="flex items-center gap-2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <motion.div
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  isActive 
                    ? 'bg-indigo-500 scale-125' 
                    : isPast 
                      ? 'bg-indigo-300' 
                      : 'bg-gray-300'
                }`}
                animate={isActive ? { scale: [1, 1.3, 1] } : {}}
                transition={{ duration: 1, repeat: Infinity }}
              />
              <span className={`text-[10px] font-medium transition-colors ${
                isActive ? 'text-indigo-500' : 'text-gray-400'
              }`}>
                {label}
              </span>
            </motion.div>
          );
        })}
      </div>

      {/* Scroll progress bar at top */}
      <motion.div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 z-50"
        style={{ width: progressWidth }}
      />
    </>
  );
};

export default ScrollConnectedCard;
