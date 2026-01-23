import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const ParticleBackground = () => {
  const containerRef = useRef(null);
  const [particles, setParticles] = useState([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const [devicePerformance, setDevicePerformance] = useState('high'); // 'low', 'medium', 'high'
  
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const width = window.innerWidth;
        const height = window.innerHeight;
        
        setDimensions({ width, height });
        setIsMobile(width < 768);
        
        // Estimate device performance based on screen size
        // This is a simple heuristic - in a production app you might use more sophisticated detection
        if (width < 480) {
          setDevicePerformance('low');
        } else if (width < 768) {
          setDevicePerformance('medium');
        } else {
          setDevicePerformance('high');
        }
      }
    };

    const handleMouseMove = (e) => {
      if (!isMobile) {
        setMousePosition({
          x: e.clientX,
          y: e.clientY
        });
      }
    };

    updateDimensions();
    generateParticles();

    window.addEventListener('resize', updateDimensions);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', updateDimensions);
      window.removeEventListener('mousemove', handleMouseMove);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMobile]);
  
  // Regenerate particles when dimensions change
  useEffect(() => {
    if (dimensions.width > 0 && dimensions.height > 0) {
      generateParticles();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dimensions, devicePerformance]);

  const generateParticles = () => {
    // Adjust particle count based on device performance
    let particleCount;
    switch (devicePerformance) {
      case 'low':
        particleCount = 10;
        break;
      case 'medium':
        particleCount = 20;
        break;
      case 'high':
      default:
        particleCount = 50;
        break;
    }
    
    const newParticles = [];

    for (let i = 0; i < particleCount; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * (isMobile ? 4 : 6) + (isMobile ? 1 : 2), // Smaller particles on mobile
        color: getRandomColor(),
        duration: Math.random() * (isMobile ? 30 : 20) + (isMobile ? 15 : 10), // Slower animation on mobile
        delay: Math.random() * 5
      });
    }

    setParticles(newParticles);
  };

  const getRandomColor = () => {
    const colors = [
      'rgba(99, 102, 241, 0.3)',  // indigo
      'rgba(139, 92, 246, 0.3)',  // purple
      'rgba(217, 70, 239, 0.3)',  // pink
      'rgba(6, 182, 212, 0.3)',   // cyan
      'rgba(45, 212, 191, 0.3)',  // teal
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  // Calculate influence from mouse position - reduced on mobile
  const getParticleStyle = (particle) => {
    // Skip complex calculations on mobile for better performance
    if (isMobile) {
      return {
        left: `${particle.x}%`,
        top: `${particle.y}%`,
        width: `${particle.size}px`,
        height: `${particle.size}px`,
        backgroundColor: particle.color,
        boxShadow: `0 0 ${particle.size}px ${particle.color.replace('0.3', '0.5')}`, // Reduced glow on mobile
      };
    }
    
    // Full effect on desktop
    const distanceX = (mousePosition.x / window.innerWidth * 100) - particle.x;
    const distanceY = (mousePosition.y / window.innerHeight * 100) - particle.y;
    const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
    const maxDistance = 30; // Max influence distance
    const influence = Math.max(0, 1 - distance / maxDistance) * 40; // Max movement of 40px
    
    return {
      left: `calc(${particle.x}% + ${distanceX > 0 ? influence : -influence}px)`,
      top: `calc(${particle.y}% + ${distanceY > 0 ? influence : -influence}px)`,
      width: `${particle.size}px`,
      height: `${particle.size}px`,
      backgroundColor: particle.color,
      boxShadow: `0 0 ${particle.size * 2}px ${particle.color.replace('0.3', '0.6')}`,
    };
  };

  // Simplified animation variants for mobile
  const getAnimationVariants = (particle) => {
    if (isMobile) {
      return {
        animate: {
          y: [0, -15, 0, 15, 0],
          x: [0, 7, 0, -7, 0],
          opacity: [0.3, 0.6, 0.3],
        },
        transition: {
          duration: particle.duration,
          repeat: Infinity,
          delay: particle.delay,
          ease: "linear" // Linear is less CPU intensive
        }
      };
    }
    
    // Full animation on desktop
    return {
      animate: {
        y: [0, -30, 0, 30, 0],
        x: [0, 15, 0, -15, 0],
        scale: [1, 1.2, 1, 0.8, 1],
        opacity: [0.4, 0.8, 0.4, 0.6, 0.4],
      },
      transition: {
        duration: particle.duration,
        repeat: Infinity,
        delay: particle.delay,
        ease: "easeInOut"
      }
    };
  };

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 overflow-hidden pointer-events-none z-10"
    >
      {particles.map((particle) => {
        const { animate, transition } = getAnimationVariants(particle);
        return (
          <motion.div
            key={particle.id}
            className="absolute rounded-full blur-sm"
            style={getParticleStyle(particle)}
            animate={animate}
            transition={transition}
          />
        );
      })}
    </div>
  );
};

export default ParticleBackground;
