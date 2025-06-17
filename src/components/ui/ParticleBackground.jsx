import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const ParticleBackground = () => {
  const containerRef = useRef(null);
  const [particles, setParticles] = useState([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: window.innerWidth,
          height: window.innerHeight
        });
      }
    };

    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
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
  }, []);
  // Regenerate particles when dimensions change
  useEffect(() => {
    if (dimensions.width > 0 && dimensions.height > 0) {
      generateParticles();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dimensions]);

  const generateParticles = () => {
    const particleCount = 50;
    const newParticles = [];

    for (let i = 0; i < particleCount; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 6 + 2,
        color: getRandomColor(),
        duration: Math.random() * 20 + 10,
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

  // Calculate influence from mouse position
  const getParticleStyle = (particle) => {
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

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 overflow-hidden pointer-events-none z-10"
    >
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full blur-sm"
          style={getParticleStyle(particle)}
          animate={{
            y: [0, -30, 0, 30, 0],
            x: [0, 15, 0, -15, 0],
            scale: [1, 1.2, 1, 0.8, 1],
            opacity: [0.4, 0.8, 0.4, 0.6, 0.4],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};

export default ParticleBackground;
