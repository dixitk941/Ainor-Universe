import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  href,
  as: Component,
  to,
  is3D = false,
  fadeIn = false,
  ...props 
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-300 ease-in-out rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500';
  
  const variants = {
    primary: 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40',
    secondary: 'bg-white text-blue-700 hover:bg-blue-50 border border-gray-200 hover:border-blue-200',
    outline: 'bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-50 hover:border-blue-700',
    ghost: 'bg-transparent text-blue-600 hover:bg-blue-50',
    white: 'bg-white text-gray-900 hover:bg-gray-50 shadow-lg hover:shadow-xl border border-gray-100',
    'outline-white': 'bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900',
    dark: 'bg-gray-900 text-white hover:bg-gray-800 shadow-lg hover:shadow-gray-800/30',
    glass: 'backdrop-filter backdrop-blur-lg bg-white/10 border border-white/20 text-white hover:bg-white/20',
    cyber: 'bg-black text-white border border-indigo-500 shadow-glow hover:shadow-glow-blue',
    neon: 'bg-black text-white neon-text border border-pink-500/50 hover:border-pink-500',
    professional: 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white hover:from-blue-600 hover:to-indigo-600 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 font-semibold',
  };
  
  const sizes = {
    sm: 'text-sm px-4 py-2',
    md: 'text-base px-6 py-3',
    lg: 'text-lg px-8 py-3.5',
  };
  
  const buttonClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;
  
  // 3D animation variants - optimized for performance
  const buttonVariants = {
    hover: {
      scale: 1.03,
      y: -3,
      boxShadow: "0 10px 20px rgba(99, 102, 241, 0.3)",
      transition: { type: "spring", stiffness: 300, damping: 15 }
    },
    tap: {
      scale: 0.97,
      y: 0,
      boxShadow: "0 5px 10px rgba(99, 102, 241, 0.2)"
    }
  };
  
  // Cyber button variants - optimized for performance
  const cyberButtonVariants = {
    hover: {
      scale: 1.02,
      y: -2,
      boxShadow: "0 0 15px rgba(99, 102, 241, 0.6), 0 0 30px rgba(99, 102, 241, 0.4)",
      transition: { 
        type: "spring", 
        stiffness: 300,
        damping: 15,
        duration: 0.2
      }
    },
    tap: {
      scale: 0.98,
      boxShadow: "0 0 5px rgba(99, 102, 241, 0.6)"
    }
  };
  // Fade in animation variant - optimized for performance
  const fadeInVariant = {
    initial: { opacity: 0, y: 5 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  // For custom component (like React Router's Link)
  if (Component) {
    return (
      <motion.div
        className="inline-block" 
        initial={fadeIn ? fadeInVariant.initial : undefined}
        animate={fadeIn ? fadeInVariant.animate : undefined}
        whileHover={is3D ? (variant === 'cyber' || variant === 'neon' ? cyberButtonVariants.hover : buttonVariants.hover) : { scale: 1.02 }}
        whileTap={is3D ? (variant === 'cyber' || variant === 'neon' ? cyberButtonVariants.tap : buttonVariants.tap) : { scale: 0.98 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
      >
        <Component
          className={`${buttonClasses} ${is3D ? 'preserve-3d' : ''}`}
          to={to}
          {...props}
        >
          {is3D ? (
            <>
              <span className="relative z-10">{children}</span>
              <span className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 hover:opacity-20 rounded-lg -z-10"></span>
            </>
          ) : (
            children
          )}
        </Component>
      </motion.div>
    );
  }
    
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
          {/* Reduced blur complexity */}
          <span className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 hover:opacity-20 rounded-lg -z-10"></span>
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
        {/* Reduced blur complexity */}
        <span className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 hover:opacity-20 rounded-lg -z-10"></span>
      </motion.button>
    );
  }
  
  // Non-3D buttons - optimized for performance
  if (href) {
    return (
      <motion.a 
        href={href} 
        className={buttonClasses}
        initial={fadeIn ? fadeInVariant.initial : undefined}
        animate={fadeIn ? fadeInVariant.animate : undefined}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
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
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default React.memo(Button);
