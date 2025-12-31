import React from 'react';
import { motion } from 'framer-motion';

// Unique animated background with connecting arrows and tech elements
// For AINOR - Web Development Agency
// Color palette: Uses indigo-500 (#6366f1) as accent

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Subtle Gradient Glow */}
      <motion.div
        className="absolute top-20 left-10 w-[600px] h-[600px] rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.12) 0%, transparent 70%)',
        }}
        animate={{
          x: [0, 30, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* ========== ROTATING CONNECTION HUB - Left Side ========== */}
      <motion.div
        className="absolute top-[35%] left-[3%]"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        <svg width="140" height="140" viewBox="0 0 140 140" className="opacity-[0.12]">
          {/* Center hub */}
          <circle cx="70" cy="70" r="10" fill="#6366f1" />
          {/* Radiating arrows */}
          {[0, 60, 120, 180, 240, 300].map((angle, i) => (
            <g key={i} transform={`rotate(${angle} 70 70)`}>
              <line x1="70" y1="70" x2="70" y2="25" stroke="#6366f1" strokeWidth="2" />
              <polygon points="65,30 70,18 75,30" fill="#6366f1" />
            </g>
          ))}
        </svg>
      </motion.div>

      {/* ========== FLOWING DATA PATH - Top Right ========== */}
      <svg className="absolute top-24 right-16 w-[350px] h-[250px] opacity-[0.1]" viewBox="0 0 350 250">
        {/* Curved connecting path */}
        <motion.path
          d="M 30 125 C 80 30 150 30 175 125 S 270 220 320 125"
          stroke="#6366f1"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: [0, 1, 1, 0] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.45, 0.55, 1]
          }}
        />
        {/* Arrow head */}
        <motion.polygon
          points="310,120 325,125 310,130"
          fill="#6366f1"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.4, 0.6, 1]
          }}
        />
        {/* Connection nodes along path */}
        <motion.circle
          cx="30" cy="125" r="5"
          fill="#6366f1"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.circle
          cx="175" cy="125" r="5"
          fill="#6366f1"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
        />
      </svg>

      {/* ========== CODE BRACKETS - Dev Symbol ========== */}
      <motion.div
        className="absolute top-[12%] left-[12%]"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg width="70" height="90" viewBox="0 0 70 90" className="opacity-[0.15]">
          <text x="0" y="60" fontSize="55" fill="#6366f1" fontFamily="monospace" fontWeight="300">&lt;</text>
        </svg>
      </motion.div>

      <motion.div
        className="absolute top-[14%] left-[18%]"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
      >
        <svg width="70" height="90" viewBox="0 0 70 90" className="opacity-[0.1]">
          <text x="0" y="60" fontSize="55" fill="#6366f1" fontFamily="monospace" fontWeight="300">/&gt;</text>
        </svg>
      </motion.div>

      {/* ========== BIDIRECTIONAL ARROWS - Process Flow ========== */}
      <motion.div
        className="absolute top-[55%] right-[6%]"
        animate={{ 
          rotate: [0, 10, 0, -10, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg width="100" height="180" viewBox="0 0 100 180" className="opacity-[0.12]">
          {/* Up arrow */}
          <line x1="50" y1="160" x2="50" y2="20" stroke="#6366f1" strokeWidth="2.5" />
          <polygon points="40,30 50,10 60,30" fill="#6366f1" />
          
          {/* Side arrows indicating exchange */}
          <motion.g
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <line x1="55" y1="70" x2="85" y2="70" stroke="#6366f1" strokeWidth="2" />
            <polygon points="80,65 92,70 80,75" fill="#6366f1" />
          </motion.g>
          
          <motion.g
            animate={{ x: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          >
            <line x1="45" y1="110" x2="15" y2="110" stroke="#6366f1" strokeWidth="2" />
            <polygon points="20,105 8,110 20,115" fill="#6366f1" />
          </motion.g>
        </svg>
      </motion.div>

      {/* ========== NETWORK NODES - Connection Points ========== */}
      <svg className="absolute top-[62%] left-[20%] w-[200px] h-[150px] opacity-[0.1]" viewBox="0 0 200 150">
        {/* Nodes */}
        <circle cx="100" cy="25" r="8" fill="#6366f1" />
        <circle cx="40" cy="75" r="8" fill="#6366f1" />
        <circle cx="160" cy="75" r="8" fill="#6366f1" />
        <circle cx="70" cy="125" r="8" fill="#6366f1" />
        <circle cx="130" cy="125" r="8" fill="#6366f1" />
        
        {/* Animated connecting lines with arrows */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <line x1="100" y1="33" x2="45" y2="68" stroke="#6366f1" strokeWidth="2" />
          <polygon points="48,62 40,72 54,70" fill="#6366f1" />
        </motion.g>
        
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
        >
          <line x1="100" y1="33" x2="155" y2="68" stroke="#6366f1" strokeWidth="2" />
          <polygon points="152,62 160,72 146,70" fill="#6366f1" />
        </motion.g>
        
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
        >
          <line x1="45" y1="82" x2="65" y2="118" stroke="#6366f1" strokeWidth="2" />
          <polygon points="60,112 72,122 62,126" fill="#6366f1" />
        </motion.g>
        
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
        >
          <line x1="155" y1="82" x2="135" y2="118" stroke="#6366f1" strokeWidth="2" />
          <polygon points="140,112 128,122 138,126" fill="#6366f1" />
        </motion.g>
      </svg>

      {/* ========== CIRCULAR SYNC ARROWS ========== */}
      <motion.div
        className="absolute bottom-[35%] left-[8%]"
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      >
        <svg width="60" height="60" viewBox="0 0 60 60" className="opacity-[0.12]">
          <path 
            d="M 30 5 A 25 25 0 1 1 5 30" 
            stroke="#6366f1" 
            strokeWidth="3" 
            fill="none"
            strokeLinecap="round"
          />
          <polygon points="30,0 35,10 25,10" fill="#6366f1" />
          <path 
            d="M 30 55 A 25 25 0 1 1 55 30" 
            stroke="#6366f1" 
            strokeWidth="3" 
            fill="none"
            strokeLinecap="round"
          />
          <polygon points="30,60 25,50 35,50" fill="#6366f1" />
        </svg>
      </motion.div>

      {/* ========== BROWSER WINDOW ICON ========== */}
      <motion.div
        className="absolute top-[65%] left-[45%]"
        animate={{ 
          y: [0, -15, 0],
          rotate: [-3, 3, -3]
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg width="75" height="60" viewBox="0 0 75 60" className="opacity-[0.08]">
          <rect x="3" y="3" width="69" height="54" rx="5" stroke="#6366f1" strokeWidth="2.5" fill="none" />
          <line x1="3" y1="16" x2="72" y2="16" stroke="#6366f1" strokeWidth="2" />
          <circle cx="14" cy="9" r="3" fill="#6366f1" />
          <circle cx="24" cy="9" r="3" fill="#6366f1" />
          <circle cx="34" cy="9" r="3" fill="#6366f1" />
        </svg>
      </motion.div>

      {/* ========== HORIZONTAL DATA FLOW ARROWS ========== */}
      <div className="absolute top-[78%] left-[25%] w-[350px]">
        <svg width="350" height="50" viewBox="0 0 350 50" className="opacity-[0.08]">
          <motion.line
            x1="0" y1="25" x2="320" y2="25"
            stroke="#6366f1"
            strokeWidth="2.5"
            strokeDasharray="15 8"
            initial={{ strokeDashoffset: 100 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
          />
          <polygon points="315,18 335,25 315,32" fill="#6366f1" />
          
          {/* Intermediate arrow indicators */}
          <polygon points="100,20 110,25 100,30" fill="#6366f1" opacity="0.5" />
          <polygon points="200,20 210,25 200,30" fill="#6366f1" opacity="0.5" />
        </svg>
      </div>

      {/* ========== MOBILE DEVICE ICON ========== */}
      <motion.div
        className="absolute top-[30%] right-[22%]"
        animate={{ 
          y: [0, -12, 0],
          rotate: [-5, 5, -5]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg width="40" height="60" viewBox="0 0 40 60" className="opacity-[0.1]">
          <rect x="3" y="3" width="34" height="54" rx="5" stroke="#6366f1" strokeWidth="2" fill="none" />
          <line x1="14" y1="52" x2="26" y2="52" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" />
          <circle cx="20" cy="9" r="2" fill="#6366f1" />
        </svg>
      </motion.div>

      {/* ========== CURSOR POINTER ========== */}
      <motion.div
        className="absolute bottom-[20%] right-[12%]"
        animate={{ 
          x: [0, 25, 0],
          y: [0, -12, 0],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg width="45" height="55" viewBox="0 0 24 24" className="opacity-[0.15]">
          <path 
            d="M5 3L21 12L14 14L11 21L5 3Z" 
            stroke="#6366f1" 
            strokeWidth="2" 
            fill="none"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>

      {/* ========== GIT BRANCH / VERSION CONTROL ========== */}
      <motion.div
        className="absolute bottom-[12%] right-[35%]"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg width="50" height="65" viewBox="0 0 50 65" className="opacity-[0.1]">
          <circle cx="25" cy="10" r="6" stroke="#6366f1" strokeWidth="2" fill="none" />
          <circle cx="10" cy="35" r="6" stroke="#6366f1" strokeWidth="2" fill="none" />
          <circle cx="40" cy="35" r="6" stroke="#6366f1" strokeWidth="2" fill="none" />
          <circle cx="25" cy="55" r="6" stroke="#6366f1" strokeWidth="2" fill="none" />
          {/* Connecting lines */}
          <line x1="25" y1="16" x2="12" y2="29" stroke="#6366f1" strokeWidth="2" />
          <line x1="25" y1="16" x2="38" y2="29" stroke="#6366f1" strokeWidth="2" />
          <line x1="10" y1="41" x2="25" y2="49" stroke="#6366f1" strokeWidth="2" />
          <line x1="40" y1="41" x2="25" y2="49" stroke="#6366f1" strokeWidth="2" />
        </svg>
      </motion.div>

      {/* ========== CLOUD ICON ========== */}
      <motion.div
        className="absolute top-[18%] right-[40%]"
        animate={{ 
          x: [0, 15, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg width="70" height="50" viewBox="0 0 70 50" className="opacity-[0.08]">
          <path 
            d="M20 40 A12 12 0 0 1 20 16 A18 18 0 0 1 55 16 A12 12 0 0 1 55 40 Z" 
            stroke="#6366f1" 
            strokeWidth="2.5" 
            fill="none"
          />
          {/* Upload arrow inside cloud */}
          <motion.g
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <line x1="37" y1="35" x2="37" y2="22" stroke="#6366f1" strokeWidth="2" />
            <polygon points="32,25 37,17 42,25" fill="#6366f1" />
          </motion.g>
        </svg>
      </motion.div>

      {/* ========== PULSING CONNECTION POINTS ========== */}
      {[
        { top: '22%', left: '55%' },
        { top: '40%', left: '80%' },
        { top: '72%', left: '60%' },
        { top: '85%', left: '15%' },
        { top: '48%', left: '35%' },
      ].map((pos, i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-3 rounded-full bg-indigo-500"
          style={{ top: pos.top, left: pos.left, opacity: 0.12 }}
          animate={{
            scale: [1, 1.6, 1],
            opacity: [0.12, 0.25, 0.12],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.4
          }}
        />
      ))}

      {/* ========== ROTATING COMPASS/DIRECTION ARROWS ========== */}
      <motion.div
        className="absolute top-[45%] left-[55%]"
        animate={{ rotate: -360 }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
      >
        <svg width="80" height="80" viewBox="0 0 80 80" className="opacity-[0.08]">
          <circle cx="40" cy="40" r="35" stroke="#6366f1" strokeWidth="1.5" fill="none" strokeDasharray="5 5" />
          <circle cx="40" cy="40" r="5" fill="#6366f1" />
          {/* 4 directional arrows */}
          <g>
            <line x1="40" y1="40" x2="40" y2="10" stroke="#6366f1" strokeWidth="2" />
            <polygon points="35,15 40,5 45,15" fill="#6366f1" />
          </g>
          <g>
            <line x1="40" y1="40" x2="70" y2="40" stroke="#6366f1" strokeWidth="2" />
            <polygon points="65,35 75,40 65,45" fill="#6366f1" />
          </g>
          <g>
            <line x1="40" y1="40" x2="40" y2="70" stroke="#6366f1" strokeWidth="2" />
            <polygon points="35,65 40,75 45,65" fill="#6366f1" />
          </g>
          <g>
            <line x1="40" y1="40" x2="10" y2="40" stroke="#6366f1" strokeWidth="2" />
            <polygon points="15,35 5,40 15,45" fill="#6366f1" />
          </g>
        </svg>
      </motion.div>

      {/* ========== STACKED LAYERS / STACK ICON ========== */}
      <motion.div
        className="absolute bottom-[25%] left-[30%]"
        animate={{ 
          y: [0, -8, 0],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg width="60" height="50" viewBox="0 0 60 50" className="opacity-[0.1]">
          <polygon points="30,5 55,15 30,25 5,15" stroke="#6366f1" strokeWidth="2" fill="none" />
          <polygon points="30,15 55,25 30,35 5,25" stroke="#6366f1" strokeWidth="2" fill="none" />
          <polygon points="30,25 55,35 30,45 5,35" stroke="#6366f1" strokeWidth="2" fill="none" />
        </svg>
      </motion.div>
    </div>
  );
};

export default AnimatedBackground;
