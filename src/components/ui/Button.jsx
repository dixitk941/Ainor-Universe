import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  href, 
  is3D = false,
  fadeIn = false,
  ...props 
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-300 ease-in-out rounded-lg focus:outline-none';    const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-blue-500/50',
    secondary: 'bg-white text-blue-700 hover:bg-blue-50 border border-transparent',
    outline: 'bg-transparent border border-blue-600 text-blue-600 hover:bg-blue-50',
    ghost: 'bg-transparent text-blue-600 hover:bg-blue-50',
    white: 'bg-white text-gray-900 hover:bg-gray-100 shadow-lg hover:shadow-xl',
    'outline-white': 'bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900',
    dark: 'bg-gray-900 text-white hover:bg-gray-800 shadow-lg hover:shadow-gray-800/30',
    glass: 'backdrop-filter backdrop-blur-lg bg-white/10 border border-white/20 text-white hover:bg-white/20',
    cyber: 'bg-black text-white border border-indigo-500 shadow-glow hover:shadow-glow-blue',
    neon: 'bg-black text-white neon-text border border-pink-500/50 hover:border-pink-500'
  };
  
  const sizes = {
    sm: 'text-sm px-4 py-2',
    md: 'text-base px-6 py-3',
    lg: 'text-lg px-8 py-4',
  };
  
  const buttonClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;
    // 3D animation variants
  const buttonVariants = {
    hover: {
      scale: 1.05,
      y: -5,
      boxShadow: "0 10px 20px rgba(99, 102, 241, 0.3)",
      transition: { type: "spring", stiffness: 400 }
    },
    tap: {
      scale: 0.95,
      y: 0,
      boxShadow: "0 5px 10px rgba(99, 102, 241, 0.2)"
    }
  };
  
  // Cyber button variants
  const cyberButtonVariants = {
    hover: {
      scale: 1.03,
      y: -3,
      boxShadow: "0 0 15px rgba(99, 102, 241, 0.6), 0 0 30px rgba(99, 102, 241, 0.4), 0 0 45px rgba(99, 102, 241, 0.2)",
      transition: { 
        type: "spring", 
        stiffness: 400,
        duration: 0.3
      }
    },
    tap: {
      scale: 0.98,
      boxShadow: "0 0 5px rgba(99, 102, 241, 0.6), 0 0 10px rgba(99, 102, 241, 0.4)"
    }
  };

  // Fade in animation variant
  const fadeInVariant = {
    initial: { opacity: 0, y: 10 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.4
      }
    }
  };
    
  if (is3D) {
    const currentVariants = variant === 'cyber' || variant === 'neon' ? cyberButtonVariants : buttonVariants;
    
    if (href) {
      return (
        <motion.a 
          href={href} 
          className={`${buttonClasses} preserve-3d`}
          whileHover={currentVariants.hover}
          whileTap={currentVariants.tap}
          initial={fadeIn ? fadeInVariant.initial : undefined}
          animate={fadeIn ? fadeInVariant.animate : undefined}
          {...props}
        >
          <span className="relative z-10">{children}</span>
          <span className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 hover:opacity-30 rounded-lg blur -z-10"></span>
        </motion.a>
      );
    }
      return (
      <motion.button 
        className={`${buttonClasses} preserve-3d`}
        whileHover={currentVariants.hover}
        whileTap={currentVariants.tap}
        initial={fadeIn ? fadeInVariant.initial : undefined}
        animate={fadeIn ? fadeInVariant.animate : undefined}
        {...props}
      >
        <span className="relative z-10">{children}</span>
        <span className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 hover:opacity-30 rounded-lg blur -z-10"></span>
      </motion.button>
    );
  }
  
  // Non-3D buttons
  if (href) {
    return (
      <motion.a 
        href={href} 
        className={buttonClasses}
        initial={fadeIn ? fadeInVariant.initial : undefined}
        animate={fadeIn ? fadeInVariant.animate : undefined}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        {...props}
      >
        {children}
      </motion.a>
    );
  }
  
  return (
    <motion.button 
      className={buttonClasses}
      initial={fadeIn ? fadeInVariant.initial : undefined}
      animate={fadeIn ? fadeInVariant.animate : undefined}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
