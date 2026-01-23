import React from 'react';
import { motion } from 'framer-motion';
import FloatingNav from './FloatingNav';
import ModernFooter from './ModernFooter';

const ModernPageLayout = ({ children, className = '' }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      style={{ backgroundColor: '#F5F5F5' }} 
      className="min-h-screen"
    >
      {/* Floating Navigation */}
      <FloatingNav />

      {/* Main Content Container */}
      <main className={`w-full max-w-[1100px] mx-auto pt-28 px-4 flex flex-col gap-6 pb-12 ${className}`}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col gap-6"
        >
          {children}
        </motion.div>
        
        <ModernFooter />
      </main>
    </motion.div>
  );
};

export default ModernPageLayout;
