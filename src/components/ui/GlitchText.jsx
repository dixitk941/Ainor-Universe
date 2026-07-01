import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const GlitchText = ({ text, className, glitchIntensity = 'medium' }) => {
  const [isGlitching, setIsGlitching] = useState(false);
  const [glitchedText, setGlitchedText] = useState(text);
  
  // Characters to use for glitch effect
  const glitchChars = '!<>-_\\/[]{}—=+*^?#________';
  
  useEffect(() => {
    let glitchIntervalId;
    let resetTimeoutId;
    
    // Set up random glitching intervals
    const setupGlitchInterval = () => {
      // Random time until next glitch
      const nextGlitchDelay = Math.random() * 5000 + 2000; // 2-7 seconds
      
      setTimeout(() => {
        // Start glitching
        setIsGlitching(true);
        
        // Determine glitch duration based on intensity
        let glitchDuration;
        let glitchSpeed;
        
        switch (glitchIntensity) {
          case 'low':
            glitchDuration = 300;
            glitchSpeed = 70;
            break;
          case 'high':
            glitchDuration = 800;
            glitchSpeed = 30;
            break;
          case 'medium':
          default:
            glitchDuration = 500;
            glitchSpeed = 50;
        }
        
        // Apply the glitch effect
        glitchIntervalId = setInterval(() => {
          setGlitchedText(text.split('').map((char, index) => {
            // Random chance to replace character with glitch character
            return Math.random() < 0.3 ? glitchChars[Math.floor(Math.random() * glitchChars.length)] : char;
          }).join(''));
        }, glitchSpeed);
        
        // Stop glitching after a short duration
        resetTimeoutId = setTimeout(() => {
          clearInterval(glitchIntervalId);
          setGlitchedText(text);
          setIsGlitching(false);
          setupGlitchInterval(); // Set up next glitch
        }, glitchDuration);
        
      }, nextGlitchDelay);
    };
    
    setupGlitchInterval();
    
    // Cleanup
    return () => {
      clearInterval(glitchIntervalId);
      clearTimeout(resetTimeoutId);
    };
  }, [text, glitchIntensity]);
  
  return (
    <motion.span 
      className={`inline-block ${className} ${isGlitching ? 'text-indigo-400' : ''}`}
      animate={isGlitching ? {
        x: [0, -2, 3, -1, 0],
        y: [0, 1, -1, 2, 0],
        filter: ["blur(0px)", "blur(1px)", "blur(0px)", "blur(2px)", "blur(0px)"],
      } : {}}
      transition={{ duration: 0.2 }}
    >
      {glitchedText}
    </motion.span>
  );
};

export default GlitchText;
