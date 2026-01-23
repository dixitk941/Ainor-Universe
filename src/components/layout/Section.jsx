import React from 'react';
import Container from './Container';

const Section = ({ 
  children, 
  id,
  className = '',
  bgColor = 'bg-white',
  spacing = 'py-16 md:py-24',
  ...props 
}) => {
  return (
    <section 
      id={id}
      className={`${bgColor} ${spacing} ${className}`}
      {...props}
    >
      <Container>
        {children}
      </Container>
    </section>
  );
};

export default Section;