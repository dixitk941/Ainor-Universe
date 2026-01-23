import React, { createContext, useContext, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Context for entrance animation state
const EntranceAnimationContext = createContext({
  isAnimationComplete: false,
  triggerAnimation: false,
});

export const useEntranceAnimation = () => useContext(EntranceAnimationContext);

// Smooth easing curves
const smoothEase = [0.22, 1, 0.36, 1];

// Animation variants for different directions
export const entranceVariants = {
  // Header - slides down from top
  fromTop: {
    hidden: { 
      y: -100, 
      opacity: 0,
      filter: 'blur(10px)'
    },
    visible: { 
      y: 0, 
      opacity: 1,
      filter: 'blur(0px)',
      transition: {
        duration: 0.8,
        ease: smoothEase,
        delay: 0.1
      }
    }
  },
  
  // Left content - slides from left
  fromLeft: {
    hidden: { 
      x: -120, 
      opacity: 0,
      filter: 'blur(8px)'
    },
    visible: { 
      x: 0, 
      opacity: 1,
      filter: 'blur(0px)',
      transition: {
        duration: 0.9,
        ease: smoothEase,
        delay: 0.3
      }
    }
  },
  
  // Right content - slides from right
  fromRight: {
    hidden: { 
      x: 120, 
      opacity: 0,
      filter: 'blur(8px)'
    },
    visible: { 
      x: 0, 
      opacity: 1,
      filter: 'blur(0px)',
      transition: {
        duration: 0.9,
        ease: smoothEase,
        delay: 0.4
      }
    }
  },
  
  // Bottom content - slides from bottom
  fromBottom: {
    hidden: { 
      y: 80, 
      opacity: 0,
      filter: 'blur(6px)'
    },
    visible: { 
      y: 0, 
      opacity: 1,
      filter: 'blur(0px)',
      transition: {
        duration: 0.8,
        ease: smoothEase,
        delay: 0.5
      }
    }
  },
  
  // Scale up from center
  scaleUp: {
    hidden: { 
      scale: 0.8, 
      opacity: 0,
      filter: 'blur(10px)'
    },
    visible: { 
      scale: 1, 
      opacity: 1,
      filter: 'blur(0px)',
      transition: {
        duration: 0.7,
        ease: smoothEase,
        delay: 0.2
      }
    }
  },

  // Fade in with slight upward motion
  fadeUp: {
    hidden: { 
      y: 30, 
      opacity: 0 
    },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: smoothEase,
        delay: 0.4
      }
    }
  },

  // Corner animations - top left
  fromTopLeft: {
    hidden: { 
      x: -80, 
      y: -80, 
      opacity: 0,
      scale: 0.9,
      filter: 'blur(8px)'
    },
    visible: { 
      x: 0, 
      y: 0, 
      opacity: 1,
      scale: 1,
      filter: 'blur(0px)',
      transition: {
        duration: 0.9,
        ease: smoothEase,
        delay: 0.2
      }
    }
  },

  // Corner animations - top right
  fromTopRight: {
    hidden: { 
      x: 80, 
      y: -80, 
      opacity: 0,
      scale: 0.9,
      filter: 'blur(8px)'
    },
    visible: { 
      x: 0, 
      y: 0, 
      opacity: 1,
      scale: 1,
      filter: 'blur(0px)',
      transition: {
        duration: 0.9,
        ease: smoothEase,
        delay: 0.25
      }
    }
  },

  // Corner animations - bottom left
  fromBottomLeft: {
    hidden: { 
      x: -80, 
      y: 80, 
      opacity: 0,
      scale: 0.9,
      filter: 'blur(8px)'
    },
    visible: { 
      x: 0, 
      y: 0, 
      opacity: 1,
      scale: 1,
      filter: 'blur(0px)',
      transition: {
        duration: 0.9,
        ease: smoothEase,
        delay: 0.35
      }
    }
  },

  // Corner animations - bottom right
  fromBottomRight: {
    hidden: { 
      x: 80, 
      y: 80, 
      opacity: 0,
      scale: 0.9,
      filter: 'blur(8px)'
    },
    visible: { 
      x: 0, 
      y: 0, 
      opacity: 1,
      scale: 1,
      filter: 'blur(0px)',
      transition: {
        duration: 0.9,
        ease: smoothEase,
        delay: 0.4
      }
    }
  }
};

// Stagger container for children animations
export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

// Stagger item animation
export const staggerItem = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: smoothEase
    }
  }
};

// Provider component to manage entrance animation state
export const EntranceAnimationProvider = ({ children }) => {
  const [triggerAnimation, setTriggerAnimation] = useState(false);
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);

  useEffect(() => {
    // Small delay before starting entrance animation
    const startTimer = setTimeout(() => {
      setTriggerAnimation(true);
    }, 100);

    // Mark animation as complete
    const completeTimer = setTimeout(() => {
      setIsAnimationComplete(true);
    }, 1500);

    return () => {
      clearTimeout(startTimer);
      clearTimeout(completeTimer);
    };
  }, []);

  return (
    <EntranceAnimationContext.Provider value={{ triggerAnimation, isAnimationComplete }}>
      {children}
    </EntranceAnimationContext.Provider>
  );
};

// Animated wrapper component for easy use
export const AnimatedEntrance = ({ 
  children, 
  variant = 'fadeUp', 
  delay = 0, 
  className = '',
  as = 'div',
  ...props 
}) => {
  const { triggerAnimation } = useEntranceAnimation();
  const Component = motion[as] || motion.div;
  
  const customVariant = {
    hidden: entranceVariants[variant]?.hidden || entranceVariants.fadeUp.hidden,
    visible: {
      ...entranceVariants[variant]?.visible,
      transition: {
        ...entranceVariants[variant]?.visible?.transition,
        delay: (entranceVariants[variant]?.visible?.transition?.delay || 0) + delay
      }
    }
  };

  return (
    <Component
      variants={customVariant}
      initial="hidden"
      animate={triggerAnimation ? "visible" : "hidden"}
      className={className}
      {...props}
    >
      {children}
    </Component>
  );
};

// Custom hook for manually creating entrance animations
export const useEntranceVariant = (variant = 'fadeUp', delay = 0) => {
  const { triggerAnimation } = useEntranceAnimation();
  
  return {
    initial: entranceVariants[variant]?.hidden || entranceVariants.fadeUp.hidden,
    animate: triggerAnimation 
      ? {
          ...entranceVariants[variant]?.visible,
          transition: {
            ...entranceVariants[variant]?.visible?.transition,
            delay: (entranceVariants[variant]?.visible?.transition?.delay || 0) + delay
          }
        }
      : entranceVariants[variant]?.hidden,
  };
};

export default EntranceAnimationProvider;
