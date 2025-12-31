import React from 'react';
import { motion } from 'framer-motion';

// Simplified 3D Animated Background - Clean with minimal elements
// Color palette: Uses indigo-500 (#6366f1) as accent

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Subtle Gradient Glow - Only 1 */}
      <motion.div
        className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full opacity-[0.08]"
        style={{
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%)',
        }}
        animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Subtle Grid Pattern */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.015]">
        <defs>
          <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M 100 0 L 0 0 0 100" fill="none" stroke="#6366f1" strokeWidth="1"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Single Rotating Connection Hub - Minimal */}
      <motion.svg
        className="absolute top-[20%] right-[5%] w-24 h-24 opacity-[0.06]"
        viewBox="0 0 100 100"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        <circle cx="50" cy="50" r="6" fill="#6366f1" />
        {[0, 90, 180, 270].map((angle, i) => (
          <g key={i} transform={`rotate(${angle} 50 50)`}>
            <line x1="50" y1="50" x2="50" y2="15" stroke="#6366f1" strokeWidth="2" />
            <polygon points="46,20 50,8 54,20" fill="#6366f1" />
          </g>
        ))}
      </motion.svg>

      {/* Code Bracket - Single */}
      <motion.div
        className="absolute bottom-[30%] left-[5%]"
        animate={{ y: [0, -8, 0], opacity: [0.04, 0.08, 0.04] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg width="60" height="80" viewBox="0 0 60 80">
          <text x="0" y="55" fontSize="50" fill="#6366f1" fontFamily="monospace" fontWeight="200">&lt;/&gt;</text>
        </svg>
      </motion.div>

      {/* Single Pulsing Dot */}
      <motion.div
        className="absolute top-[60%] right-[15%] w-3 h-3 rounded-full bg-indigo-500"
        style={{ opacity: 0.1 }}
        animate={{ scale: [1, 1.5, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
};

export default AnimatedBackground;
