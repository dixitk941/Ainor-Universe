import React from 'react';

const Container = ({ 
  children, 
  className = '',
  fluid = false,
  ...props 
}) => {
  const containerClass = fluid 
    ? 'w-full px-4 sm:px-6 lg:px-8'
    : 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8';
    
  return (
    <div className={`${containerClass} ${className}`} {...props}>
      {children}
    </div>
  );
};

export default Container;
