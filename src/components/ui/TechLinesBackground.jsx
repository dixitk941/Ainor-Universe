import React, { useEffect, useRef, memo } from 'react';

const TechLinesBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d', { alpha: true, desynchronized: true });
    let animationFrameId;
    let particles = [];
    let lastTime = 0;
    const FPS_CAP = 30; // Cap at 30fps for performance
    const frameDelay = 1000 / FPS_CAP;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };
    
    const initParticles = () => {
      particles = [];
      // Further reduce particle count for better performance
      const particleCount = Math.floor(canvas.width * canvas.height / 30000); 
      
      // Cap the maximum number of particles at a lower count
      const maxParticles = 30;
      const actualCount = Math.min(particleCount, maxParticles);
      
      for (let i = 0; i < actualCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1 + 0.5,
          // Reduce movement speed even more for better performance
          vx: Math.random() * 0.2 - 0.1,
          vy: Math.random() * 0.2 - 0.1,
          connections: []
        });
      }
    };

    const drawParticles = (timestamp) => {
      // Throttle frame rate for performance
      if (timestamp - lastTime < frameDelay) {
        animationFrameId = requestAnimationFrame(drawParticles);
        return;
      }
      
      lastTime = timestamp;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const particle = particles[i];
        
        // Move particles
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(99, 102, 241, 0.4)';
        ctx.fill();
        
        // Reset connections
        particle.connections = [];
      }
      
      // Connect particles - reduce connection range for better performance
      for (let i = 0; i < particles.length; i++) {
        const particle = particles[i];
        
        for (let j = i + 1; j < particles.length; j++) {
          const neighbor = particles[j];
          const distance = Math.sqrt(
            Math.pow(particle.x - neighbor.x, 2) + 
            Math.pow(particle.y - neighbor.y, 2)
          );
          
          // Connect if within range - reduced range for performance
          if (distance < 80) {
            particle.connections.push(j);
            
            // Draw connection
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(neighbor.x, neighbor.y);
            ctx.strokeStyle = `rgba(99, 102, 241, ${0.15 * (1 - distance / 80)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      
      animationFrameId = requestAnimationFrame(drawParticles);
    };

    // Initialize
    resizeCanvas();
    
    // Use a more efficient way to handle resize
    let resizeTimer;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(resizeCanvas, 250);
    };
    
    window.addEventListener('resize', handleResize);
    drawParticles(0);

    // Clean up
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      clearTimeout(resizeTimer);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full z-0 opacity-40"
      style={{ pointerEvents: 'none' }}
    />
  );
};

export default memo(TechLinesBackground);
