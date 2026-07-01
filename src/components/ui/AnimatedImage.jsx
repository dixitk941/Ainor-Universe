import React from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

const AnimatedImage = ({ 
  src, 
  alt, 
  className = '', 
  tiltEnable = true,
  glareEnable = false,
  glareMaxOpacity = 0.5,
  tiltMaxAngleX = 10,
  tiltMaxAngleY = 10,
  scale = 1.05,
  gyroscope = false,
  ...props 
}) => {
  if (tiltEnable) {
    return (
      <motion.div
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 300, damping: 15 }}
      >
        <Tilt
          className="will-change-transform"
          tiltMaxAngleX={tiltMaxAngleX}
          tiltMaxAngleY={tiltMaxAngleY}
          perspective={1000}
          transitionSpeed={1500}
          scale={scale}
          gyroscope={false} // Disable gyroscope for better performance
          glareEnable={glareEnable}
          glareMaxOpacity={glareMaxOpacity}
          glareColor="rgba(255, 255, 255, 0.5)"
          glarePosition="all"
          tiltAngleYInitial={0}
          tiltAngleXInitial={0}
        >
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            <img 
              src={src} 
              alt={alt} 
              loading="lazy"
              className={`w-full h-auto object-cover ${className}`}
              {...props}
            />
            {/* 3D-like border effect */}
            <div className="absolute inset-0 border border-white/20 rounded-2xl pointer-events-none"></div>
          </div>
        </Tilt>
      </motion.div>
    );
  }  
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.4, type: "spring", stiffness: 300, damping: 15 }}
    >
      <div className="relative overflow-hidden rounded-2xl shadow-2xl">
        <img 
          src={src} 
          alt={alt} 
          loading="lazy"
          className={`w-full h-auto object-cover ${className}`}
          {...props}
        />
        {/* 3D-like border effect */}
        <div className="absolute inset-0 border border-white/20 rounded-2xl pointer-events-none"></div>
      </div>
    </motion.div>
  );
};

export default React.memo(AnimatedImage);
