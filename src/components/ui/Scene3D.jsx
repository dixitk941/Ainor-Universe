import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Scene3D = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  
  // Add scroll progress tracking
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0.3]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.8]);
  
  useEffect(() => {
    // Set initial window size
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
    
    // Handle mouse movement
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    
    // Handle window resize
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Calculate center of the screen
  const centerX = windowSize.width / 2;
  const centerY = windowSize.height / 2;
  
  // Calculate the mouse position relative to the center (normalize between -1 and 1)
  const normalizedX = (mousePosition.x - centerX) / centerX;
  const normalizedY = (mousePosition.y - centerY) / centerY;  return (
    <motion.div 
      className="fixed inset-0 pointer-events-none perspective-1000 overflow-hidden z-20"
      style={{ opacity, scale }}
    >
      {/* 3D floating elements that respond to mouse movement */}
      <div className="absolute inset-0">
        {/* 3D Floating Text */}        <motion.div
          className="absolute top-1/3 left-1/3 transform -translate-x-1/2 -translate-y-1/2 preserve-3d pointer-events-auto"
          style={{
            rotateX: normalizedY * 10,
            rotateY: normalizedX * 10,
            translateZ: 50,
          }}
          animate={{ 
            rotateZ: [0, 360],
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 30,
            ease: "linear" 
          }}
        >
          <div className="text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-20 preserve-3d neon-glow">
            AINOR
          </div>
          {/* Holographic overlay */}
          <div className="absolute inset-0 text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-500 opacity-10 preserve-3d mix-blend-overlay blur-md animate-pulse">
            AINOR
          </div>
        </motion.div>
        
        {/* Top right floating cube */}
        <motion.div
          className="absolute top-40 right-40 w-32 h-32 preserve-3d backface-hidden"
          style={{
            rotateX: -normalizedY * 20,
            rotateY: normalizedX * 20,
            translateZ: -normalizedY * 10,
          }}
        >
          <div className="w-full h-full relative preserve-3d">
            {/* Front face */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/30 to-purple-500/30 backdrop-filter backdrop-blur-sm border border-white/20 rounded-lg transform translateZ(16px)"></div>
            
            {/* Back face */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-pink-500/30 backdrop-filter backdrop-blur-sm border border-white/20 rounded-lg transform translateZ(-16px) rotateY(180deg)"></div>
            
            {/* Left face */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-indigo-500/30 backdrop-filter backdrop-blur-sm border border-white/20 rounded-lg transform translateX(-16px) rotateY(-90deg) origin-left"></div>
            
            {/* Right face */}
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/30 to-rose-500/30 backdrop-filter backdrop-blur-sm border border-white/20 rounded-lg transform translateX(16px) rotateY(90deg) origin-right"></div>
            
            {/* Top face */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/30 to-blue-500/30 backdrop-filter backdrop-blur-sm border border-white/20 rounded-lg transform translateY(-16px) rotateX(90deg) origin-top"></div>
            
            {/* Bottom face */}
            <div className="absolute inset-0 bg-gradient-to-br from-rose-500/30 to-orange-500/30 backdrop-filter backdrop-blur-sm border border-white/20 rounded-lg transform translateY(16px) rotateX(-90deg) origin-bottom"></div>
          </div>
        </motion.div>
        
        {/* Bottom left floating sphere */}
        <motion.div
          className="absolute bottom-40 left-20"
          style={{
            rotateX: normalizedY * 20,
            rotateY: -normalizedX * 20,
            translateZ: normalizedY * 10,
          }}
        >
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-cyan-400/40 to-teal-400/40 backdrop-filter backdrop-blur-sm border border-white/20 shadow-lg"></div>
          <div className="absolute inset-0 w-24 h-24 rounded-full bg-gradient-to-tl from-white/5 to-transparent"></div>
        </motion.div>
        
        {/* Center pyramid */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 preserve-3d"
          style={{
            rotateX: normalizedY * 15,
            rotateY: normalizedX * 15,
            translateZ: 30,
          }}
          animate={{ 
            rotateZ: [0, 360],
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 20,
            ease: "linear" 
          }}
        >
          <div className="relative w-40 h-40 preserve-3d opacity-20">
            {/* Base */}
            <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-indigo-500 to-purple-500 backdrop-filter backdrop-blur-sm border border-white/20 rounded-lg transform rotateX(90deg) translateZ(-20px)"></div>
            
            {/* Front face */}
            <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-purple-500 to-pink-500 backdrop-filter backdrop-blur-sm border border-white/20 transform-style: preserve-3d" 
                 style={{
                   clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
                   transform: 'translateZ(20px)'
                 }}
            ></div>
            
            {/* Right face */}
            <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-pink-500 to-rose-500 backdrop-filter backdrop-blur-sm border border-white/20 transform-style: preserve-3d" 
                 style={{
                   clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)',
                   transform: 'translateZ(-20px) rotateY(180deg)'
                 }}
            ></div>
            
            {/* Left face */}
            <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-blue-500 to-indigo-500 backdrop-filter backdrop-blur-sm border border-white/20 transform-style: preserve-3d" 
                 style={{
                   clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)',
                   transform: 'rotateY(-90deg) translateZ(20px)'
                 }}
            ></div>
            
            {/* Back face */}
            <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-teal-500 to-cyan-500 backdrop-filter backdrop-blur-sm border border-white/20 transform-style: preserve-3d" 
                 style={{
                   clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)',
                   transform: 'rotateY(90deg) translateZ(20px)'
                 }}
            ></div>
          </div>
        </motion.div>
        
        {/* Floating rings */}
        <motion.div
          className="absolute bottom-20 right-40"
          style={{
            rotateX: normalizedY * 25,
            rotateY: -normalizedX * 25,
          }}
          animate={{ 
            rotateZ: [0, 360],
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 15,
            ease: "linear" 
          }}
        >
          <div className="relative w-32 h-32">
            <div className="absolute inset-0 rounded-full border-4 border-indigo-500/30 backdrop-filter backdrop-blur-sm"></div>
            <div className="absolute inset-2 rounded-full border-4 border-purple-500/30 backdrop-filter backdrop-blur-sm" style={{ transform: 'rotateX(60deg)' }}></div>
            <div className="absolute inset-4 rounded-full border-4 border-pink-500/30 backdrop-filter backdrop-blur-sm" style={{ transform: 'rotateY(60deg)' }}></div>
          </div>        </motion.div>
      </div>
    </motion.div>
  );
};

export default Scene3D;
