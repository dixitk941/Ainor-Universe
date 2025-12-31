import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Advanced scroll-connected animations for both desktop and mobile
// Creates traveling cards that move through sections as user scrolls

const ScrollConnectedCard = ({ isMobile = false }) => {
  const [windowHeight, setWindowHeight] = useState(0);
  
  useEffect(() => {
    setWindowHeight(window.innerHeight);
    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { scrollY } = useScroll();
  
  // ============ DESKTOP ANIMATIONS ============
  // Main Task Card - travels left to right in zigzag
  const desktopY = useTransform(
    scrollY,
    [0, windowHeight * 0.5, windowHeight * 1.5, windowHeight * 2.5, windowHeight * 3.5, windowHeight * 4.5],
    [windowHeight * 0.55, windowHeight * 0.3, windowHeight * 0.4, windowHeight * 0.35, windowHeight * 0.45, windowHeight * 0.5]
  );
  
  const desktopX = useTransform(
    scrollY,
    [0, windowHeight * 0.8, windowHeight * 1.8, windowHeight * 2.8, windowHeight * 3.8],
    ['5%', '65%', '8%', '60%', '5%']
  );
  
  const desktopScale = useTransform(
    scrollY,
    [0, windowHeight * 0.3, windowHeight * 1, windowHeight * 2, windowHeight * 4],
    [0, 1, 0.92, 0.96, 0.88]
  );
  
  const desktopOpacity = useTransform(
    scrollY,
    [0, windowHeight * 0.2, windowHeight * 0.5, windowHeight * 4.5, windowHeight * 5.5],
    [0, 0.4, 1, 1, 0]
  );
  
  const desktopRotate = useTransform(
    scrollY,
    [0, windowHeight * 1, windowHeight * 2, windowHeight * 3, windowHeight * 4],
    [0, -4, 4, -3, 2]
  );

  // ============ MOBILE ANIMATIONS ============
  // Smaller card, moves mostly vertically with slight horizontal movement
  const mobileY = useTransform(
    scrollY,
    [0, windowHeight * 0.4, windowHeight * 1.2, windowHeight * 2, windowHeight * 3],
    [windowHeight * 0.7, windowHeight * 0.15, windowHeight * 0.2, windowHeight * 0.15, windowHeight * 0.25]
  );
  
  const mobileX = useTransform(
    scrollY,
    [0, windowHeight * 0.8, windowHeight * 1.6, windowHeight * 2.4],
    ['5%', '50%', '5%', '45%']
  );
  
  const mobileScale = useTransform(
    scrollY,
    [0, windowHeight * 0.3, windowHeight * 1],
    [0, 0.85, 0.8]
  );
  
  const mobileOpacity = useTransform(
    scrollY,
    [0, windowHeight * 0.15, windowHeight * 0.4, windowHeight * 3, windowHeight * 3.5],
    [0, 0.5, 1, 1, 0]
  );

  // Second traveling element - Code snippet card (Desktop only)
  const codeY = useTransform(
    scrollY,
    [windowHeight * 0.5, windowHeight * 1.5, windowHeight * 2.5, windowHeight * 3.5],
    [windowHeight * 0.7, windowHeight * 0.25, windowHeight * 0.5, windowHeight * 0.3]
  );
  
  const codeX = useTransform(
    scrollY,
    [windowHeight * 0.5, windowHeight * 1.5, windowHeight * 2.5, windowHeight * 3.5],
    ['75%', '15%', '70%', '20%']
  );
  
  const codeOpacity = useTransform(
    scrollY,
    [windowHeight * 0.3, windowHeight * 0.8, windowHeight * 1.2, windowHeight * 4, windowHeight * 4.5],
    [0, 0, 1, 1, 0]
  );
  
  const codeScale = useTransform(
    scrollY,
    [windowHeight * 0.5, windowHeight * 1, windowHeight * 2],
    [0.8, 1, 0.9]
  );
  
  const codeRotate = useTransform(
    scrollY,
    [windowHeight * 1, windowHeight * 2, windowHeight * 3],
    [5, -5, 3]
  );

  // Third element - Progress indicator (Both)
  const progressWidth = useTransform(
    scrollY,
    [0, windowHeight * 5],
    ['0%', '100%']
  );

  // Floating rocket transforms - defined at top level
  const rocketY = useTransform(scrollY, [windowHeight, windowHeight * 3], [windowHeight * 0.6, windowHeight * 0.2]);
  const rocketX = useTransform(scrollY, [windowHeight, windowHeight * 3], ['85%', '25%']);
  const rocketOpacity = useTransform(scrollY, [windowHeight * 0.8, windowHeight * 1.2, windowHeight * 3.5, windowHeight * 4], [0, 1, 1, 0]);
  const rocketScale = useTransform(scrollY, [windowHeight, windowHeight * 2], [0.8, 1]);
  const rocketRotate = useTransform(scrollY, [windowHeight, windowHeight * 3], [0, 360]);

  // Floating checkmark transforms - defined at top level
  const checkY = useTransform(scrollY, [windowHeight * 1.5, windowHeight * 3.5], [windowHeight * 0.7, windowHeight * 0.25]);
  const checkX = useTransform(scrollY, [windowHeight * 1.5, windowHeight * 3.5], ['10%', '80%']);
  const checkOpacity = useTransform(scrollY, [windowHeight * 1.3, windowHeight * 1.8, windowHeight * 4, windowHeight * 4.5], [0, 1, 1, 0]);
  const checkScale = useTransform(scrollY, [windowHeight * 1.5, windowHeight * 2.5], [0.7, 1.1]);

  if (isMobile) {
    // ============ MOBILE VERSION ============
    return (
      <>
        {/* Mobile Task Card - Smaller, simpler */}
        <motion.div
          className="fixed z-20 pointer-events-none"
          style={{ 
            y: mobileY, 
            x: mobileX, 
            scale: mobileScale, 
            opacity: mobileOpacity,
            width: '180px'
          }}
        >
          <div className="bg-white/95 backdrop-blur-sm rounded-xl p-3 shadow-xl border border-indigo-100">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-indigo-500 text-sm">✦</span>
              <span className="font-semibold text-[#1a1a1a] text-xs">Your Tasks</span>
              <motion.div 
                className="ml-auto w-1.5 h-1.5 rounded-full bg-green-500"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </div>
            
            <div className="space-y-1.5">
              {['Design', 'Dev', 'Launch'].map((task, i) => (
                <div key={i} className="flex items-center gap-1.5">
                  <div className={`w-3 h-3 rounded-full ${i < 2 ? 'bg-indigo-500' : 'bg-gray-200'} flex items-center justify-center`}>
                    {i < 2 && (
                      <svg className="w-2 h-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                  <span className="text-[10px] text-gray-600">{task}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-2 h-1.5 bg-gray-100 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-indigo-500 rounded-full"
                style={{ width: progressWidth }}
              />
            </div>
          </div>
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
      {/* Main Task Card */}
      <motion.div
        className="fixed z-20 pointer-events-none"
        style={{ 
          y: desktopY, 
          x: desktopX, 
          scale: desktopScale, 
          opacity: desktopOpacity, 
          rotate: desktopRotate,
          width: '260px'
        }}
      >
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-2xl border border-indigo-100">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-indigo-500 text-base">✦</span>
            <span className="font-semibold text-[#1a1a1a] text-sm">All Your Tasks</span>
            <motion.div 
              className="ml-auto w-2 h-2 rounded-full bg-green-500"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
          
          <div className="space-y-2">
            {[
              { name: 'Website Design', done: true },
              { name: 'Mobile App', done: true },
              { name: 'Landing Page', done: false },
              { name: 'Dashboard', done: false },
            ].map((task, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className={`w-4 h-4 rounded-full ${task.done ? 'bg-indigo-500' : 'bg-gray-200'} flex items-center justify-center flex-shrink-0`}>
                  {task.done && (
                    <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
                <span className={`text-xs ${task.done ? 'text-[#1a1a1a]' : 'text-gray-400'}`}>{task.name}</span>
                <div className={`ml-auto h-1.5 w-10 rounded-full ${task.done ? 'bg-indigo-200' : 'bg-gray-100'}`}></div>
              </div>
            ))}
          </div>
          
          <div className="mt-3 pt-2 border-t border-gray-100">
            <div className="flex justify-between text-[10px] mb-1">
              <span className="text-gray-400">Progress</span>
              <span className="text-indigo-500 font-medium">50%</span>
            </div>
            <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-gradient-to-r from-indigo-500 to-indigo-400 rounded-full"
                initial={{ width: '0%' }}
                animate={{ width: '50%' }}
                transition={{ duration: 1.5, delay: 0.5 }}
              />
            </div>
          </div>
          
          <div className="mt-2 flex items-center justify-between">
            <span className="text-[9px] text-gray-400">Subscription</span>
            <span className="px-1.5 py-0.5 bg-indigo-50 text-indigo-500 text-[9px] font-medium rounded-full">Active</span>
          </div>
        </div>
        
        {/* Connection dot on top */}
        <motion.div
          className="absolute -top-3 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-indigo-500"
          animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>

      {/* Code Snippet Card - Second traveling element */}
      <motion.div
        className="fixed z-[19] pointer-events-none"
        style={{ 
          y: codeY, 
          x: codeX, 
          scale: codeScale, 
          opacity: codeOpacity,
          rotate: codeRotate,
          width: '200px'
        }}
      >
        <div className="bg-[#1a1a1a] rounded-xl p-3 shadow-xl border border-gray-700">
          <div className="flex items-center gap-1.5 mb-2">
            <div className="w-2 h-2 rounded-full bg-red-400"></div>
            <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
            <div className="w-2 h-2 rounded-full bg-green-400"></div>
            <span className="ml-2 text-[9px] text-gray-500">code.jsx</span>
          </div>
          
          <div className="font-mono text-[10px] space-y-0.5">
            <div><span className="text-purple-400">const</span> <span className="text-blue-300">project</span> <span className="text-white">=</span> <span className="text-yellow-300">{`{`}</span></div>
            <div className="pl-3"><span className="text-green-300">name</span><span className="text-white">:</span> <span className="text-orange-300">'Your App'</span><span className="text-white">,</span></div>
            <div className="pl-3"><span className="text-green-300">status</span><span className="text-white">:</span> <span className="text-orange-300">'building'</span></div>
            <div><span className="text-yellow-300">{`}`}</span><span className="text-white">;</span></div>
          </div>
          
          <motion.div 
            className="mt-2 h-0.5 bg-gray-700 rounded-full overflow-hidden"
          >
            <motion.div 
              className="h-full bg-indigo-500"
              animate={{ width: ['0%', '100%', '0%'] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Floating rocket icon */}
      <motion.div
        className="fixed z-[18] pointer-events-none"
        style={{
          y: rocketY,
          x: rocketX,
          opacity: rocketOpacity,
          scale: rocketScale,
          rotate: rocketRotate,
        }}
      >
        <div className="w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center border border-indigo-100">
          <span className="text-2xl">🚀</span>
        </div>
      </motion.div>

      {/* Floating checkmark */}
      <motion.div
        className="fixed z-[18] pointer-events-none"
        style={{
          y: checkY,
          x: checkX,
          opacity: checkOpacity,
          scale: checkScale,
        }}
      >
        <div className="w-10 h-10 bg-indigo-500 rounded-full shadow-lg flex items-center justify-center">
          <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </div>
      </motion.div>

      {/* Scroll progress bar at top */}
      <motion.div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-indigo-500 to-indigo-400 z-50"
        style={{ width: progressWidth }}
      />
    </>
  );
};

export default ScrollConnectedCard;
