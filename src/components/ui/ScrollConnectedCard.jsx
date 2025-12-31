import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// This card travels from HeroSection through other sections as user scrolls
// It appears to "pick up" from HeroSection and moves through the page

const ScrollConnectedCard = () => {
  const [windowHeight, setWindowHeight] = useState(0);
  const containerRef = useRef(null);
  
  useEffect(() => {
    setWindowHeight(window.innerHeight);
    const handleResize = () => setWindowHeight(window.innerHeight);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { scrollY } = useScroll();
  
  // Card starts at hero section position (around 70% from top, 10% from left)
  // Then moves to subscription section, services section, etc.
  
  // Vertical movement - card travels down the page
  const y = useTransform(
    scrollY,
    [0, windowHeight * 0.5, windowHeight * 1.5, windowHeight * 2.5, windowHeight * 3.5],
    [windowHeight * 0.55, windowHeight * 0.3, windowHeight * 0.4, windowHeight * 0.35, windowHeight * 0.5]
  );
  
  // Horizontal movement - zigzag pattern
  const x = useTransform(
    scrollY,
    [0, windowHeight * 0.8, windowHeight * 1.8, windowHeight * 2.8, windowHeight * 3.8],
    ['5%', '60%', '10%', '55%', '8%']
  );
  
  // Scale - grows and shrinks as it moves
  const scale = useTransform(
    scrollY,
    [0, windowHeight * 0.3, windowHeight * 1, windowHeight * 2, windowHeight * 3],
    [0, 1, 0.9, 0.95, 0.85]
  );
  
  // Opacity - fades in and stays visible
  const opacity = useTransform(
    scrollY,
    [0, windowHeight * 0.2, windowHeight * 0.5, windowHeight * 4, windowHeight * 5],
    [0, 0.3, 1, 1, 0]
  );
  
  // Rotation - slight tilt as it moves
  const rotate = useTransform(
    scrollY,
    [0, windowHeight * 1, windowHeight * 2, windowHeight * 3],
    [0, -3, 3, -2]
  );

  return (
    <motion.div
      ref={containerRef}
      className="fixed z-20 pointer-events-none"
      style={{ 
        y, 
        x, 
        scale, 
        opacity, 
        rotate,
        width: '280px'
      }}
    >
      {/* The traveling card - "All Your Tasks" Card */}
      <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-5 shadow-2xl border border-indigo-100">
        {/* Card Header */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-indigo-500 text-lg">✦</span>
          <span className="font-semibold text-[#1a1a1a] text-sm">All Your Tasks</span>
          <div className="ml-auto">
            <motion.div 
              className="w-2 h-2 rounded-full bg-green-500"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </div>
        
        {/* Task List Preview */}
        <div className="space-y-2.5">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-indigo-500 flex items-center justify-center flex-shrink-0">
              <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div className="text-xs text-[#1a1a1a]">Website Design</div>
            <div className="ml-auto h-1.5 w-12 rounded-full bg-indigo-200"></div>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-indigo-500 flex items-center justify-center flex-shrink-0">
              <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div className="text-xs text-[#1a1a1a]">Mobile App</div>
            <div className="ml-auto h-1.5 w-10 rounded-full bg-indigo-200"></div>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-gray-200 flex-shrink-0"></div>
            <div className="text-xs text-gray-500">Landing Page</div>
            <div className="ml-auto h-1.5 w-8 rounded-full bg-gray-100"></div>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-gray-200 flex-shrink-0"></div>
            <div className="text-xs text-gray-500">Dashboard UI</div>
            <div className="ml-auto h-1.5 w-14 rounded-full bg-gray-100"></div>
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="mt-4 pt-3 border-t border-gray-100">
          <div className="flex justify-between text-xs mb-1.5">
            <span className="text-gray-500">Monthly Progress</span>
            <span className="text-indigo-500 font-medium">2/4 Done</span>
          </div>
          <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-gradient-to-r from-indigo-500 to-indigo-400 rounded-full"
              initial={{ width: '0%' }}
              animate={{ width: '50%' }}
              transition={{ duration: 1.5, delay: 0.5 }}
            />
          </div>
        </div>
        
        {/* Subscription Badge */}
        <div className="mt-3 flex items-center justify-between">
          <span className="text-[10px] text-gray-400">1 Month Subscription</span>
          <span className="px-2 py-0.5 bg-indigo-50 text-indigo-500 text-[10px] font-medium rounded-full">Active</span>
        </div>
      </div>
      
      {/* Connection Line - shows the card is connected/traveling */}
      <svg 
        className="absolute -top-4 left-1/2 -translate-x-1/2 w-1 h-4 overflow-visible"
        viewBox="0 0 4 20"
      >
        <motion.line
          x1="2" y1="0" x2="2" y2="20"
          stroke="#6366f1"
          strokeWidth="2"
          strokeDasharray="4 4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, repeat: Infinity }}
        />
      </svg>
    </motion.div>
  );
};

export default ScrollConnectedCard;
