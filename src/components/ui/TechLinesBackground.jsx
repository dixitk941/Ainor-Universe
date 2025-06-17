import React, { useEffect, useRef } from 'react';

const TechLinesBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const particleCount = Math.floor(canvas.width * canvas.height / 10000); // Adjust density
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1 + 0.5,
          vx: Math.random() * 0.5 - 0.25,
          vy: Math.random() * 0.5 - 0.25,
          connections: []
        });
      }
    };

    const drawParticles = () => {
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
        ctx.fillStyle = 'rgba(99, 102, 241, 0.5)';
        ctx.fill();
        
        // Reset connections
        particle.connections = [];
      }
      
      // Connect particles
      for (let i = 0; i < particles.length; i++) {
        const particle = particles[i];
        
        for (let j = i + 1; j < particles.length; j++) {
          const neighbor = particles[j];
          const distance = Math.sqrt(
            Math.pow(particle.x - neighbor.x, 2) + 
            Math.pow(particle.y - neighbor.y, 2)
          );
          
          // Connect if within range
          if (distance < 100) {
            particle.connections.push(j);
            
            // Draw connection
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(neighbor.x, neighbor.y);
            ctx.strokeStyle = `rgba(99, 102, 241, ${0.2 * (1 - distance / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      
      animationFrameId = requestAnimationFrame(drawParticles);
    };

    // Initialize
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    drawParticles();

    // Clean up
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full z-0 opacity-50"
      style={{ pointerEvents: 'none' }}
    />
  );
};

export default TechLinesBackground;
