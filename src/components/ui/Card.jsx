import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ 
  children, 
  variant = 'default', 
  hoverEffect = false,
  is3D = false,
  glowOnHover = false,
  glowColor = 'from-indigo-500 to-purple-500',
  className = '',
  ...props 
}) => {
  const baseStyles = 'rounded-2xl transition-all duration-300 ease-in-out overflow-hidden group';
  
  const variants = {
    default: 'bg-white shadow-md',
    dark: 'bg-gray-900 text-white',
    gradient: 'bg-gradient-to-br from-indigo-500 to-purple-600 text-white',
    transparent: 'bg-transparent',
    glass: 'backdrop-filter backdrop-blur-lg bg-white/10 border border-white/20',
  };
  
  const hoverStyles = hoverEffect ? 'hover:shadow-xl hover:-translate-y-1' : '';
  const threeDStyles = is3D ? 'preserve-3d perspective-1000 backface-hidden' : '';
  
  const cardClasses = `${baseStyles} ${variants[variant]} ${hoverStyles} ${threeDStyles} ${className}`;
  
  // If 3D effects are enabled, wrap in motion.div
  if (is3D) {
    return (
      <motion.div 
        className={cardClasses} 
        whileHover={hoverEffect ? { y: -10, scale: 1.02, rotateY: 5, rotateX: 5 } : {}}
        transition={{ type: "spring", stiffness: 300 }}
        {...props}
      >
        {glowOnHover && (
          <div className="absolute -inset-0.5 bg-gradient-to-r opacity-0 group-hover:opacity-70 blur-sm -z-10 transition-opacity duration-300 rounded-2xl"></div>
        )}
        <div className="relative z-10">
          {children}
        </div>
      </motion.div>
    );
  }
  
  // Default non-3D card
  return (
    <div className={cardClasses} {...props}>
      {children}
    </div>
  );
};

export default Card;
