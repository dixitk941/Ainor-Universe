import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaCheck, FaRocket, FaCalendarAlt, FaCreditCard } from 'react-icons/fa';

// Unique Pricing Page Animation - Subscription Journey Visual
// Shows the 4-step process as user scrolls

const PricingScrollAnimation = ({ isMobile = false }) => {
  const [scrollPercent, setScrollPercent] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollPercent(Math.min((scrollTop / docHeight) * 100, 100));
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const { scrollY } = useScroll();
  
  const widgetOpacity = useTransform(scrollY, [100, 300], [0, 1]);
  const widgetY = useTransform(scrollY, [0, 300], [50, 0]);

  // Calculate active step based on scroll
  const activeStep = Math.min(Math.floor(scrollPercent / 25), 3);
  
  const steps = [
    { icon: FaCreditCard, label: 'Pay Setup', color: 'bg-blue-500' },
    { icon: FaRocket, label: 'We Build', color: 'bg-purple-500' },
    { icon: FaCheck, label: 'Go Live', color: 'bg-green-500' },
    { icon: FaCalendarAlt, label: 'Monthly Pay', color: 'bg-indigo-500' },
  ];

  return (
    <motion.div
      className={`fixed z-30 ${isMobile ? 'bottom-20 left-4' : 'bottom-8 left-8'}`}
      style={{ y: widgetY, opacity: widgetOpacity }}
    >
      <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-100 p-4">
        <p className="text-xs text-gray-500 mb-3 text-center font-medium">Your Journey</p>
        
        {/* Steps */}
        <div className={`flex ${isMobile ? 'flex-col gap-2' : 'gap-1'}`}>
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isActive = idx <= activeStep;
            const isCurrent = idx === activeStep;
            
            return (
              <motion.div
                key={idx}
                className={`flex items-center ${isMobile ? 'gap-2' : 'flex-col gap-1'}`}
                animate={{ 
                  opacity: isActive ? 1 : 0.4,
                  scale: isCurrent ? 1.1 : 1 
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Step Icon */}
                <motion.div
                  className={`${isMobile ? 'w-8 h-8' : 'w-10 h-10'} rounded-full flex items-center justify-center ${
                    isActive ? step.color : 'bg-gray-200'
                  } text-white`}
                  animate={{ 
                    boxShadow: isCurrent ? '0 0 0 4px rgba(99, 102, 241, 0.3)' : 'none'
                  }}
                >
                  <Icon className={`${isMobile ? 'w-3 h-3' : 'w-4 h-4'}`} />
                </motion.div>
                
                {/* Label */}
                <span className={`text-[10px] font-medium ${isActive ? 'text-gray-700' : 'text-gray-400'} ${isMobile ? '' : 'text-center'}`}>
                  {step.label}
                </span>
                
                {/* Connector line (not for last item) */}
                {idx < 3 && !isMobile && (
                  <div className={`w-4 h-0.5 ${idx < activeStep ? 'bg-indigo-400' : 'bg-gray-200'} mt-[-20px] mx-[-2px]`} />
                )}
              </motion.div>
            );
          })}
        </div>
        
        {/* Current Step Info */}
        <div className="mt-3 pt-3 border-t border-gray-100">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <p className="text-xs text-gray-500">Step {activeStep + 1} of 4</p>
            <p className="text-sm font-semibold text-indigo-600">{steps[activeStep].label}</p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default PricingScrollAnimation;
