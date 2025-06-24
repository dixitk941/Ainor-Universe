import React from 'react';
import Section from '../layout/Section';
import Card from '../ui/Card';
import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    content: "AINOR delivered an exceptional cab booking platform for GoForCab. Their innovative approach and technical expertise transformed our vision into a user-friendly, scalable solution that has revolutionized our business operations.",
    author: "Chetan Aggarwal",
    position: "CEO, GoForCab",
    avatar: "https://images.unsplash.com/photo-150700321169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 2,
    content: "Working with AINOR on Sttrika's digital platform was an outstanding experience. Their team's dedication to quality and attention to detail helped us create a sophisticated solution that perfectly serves our customers' needs.",
    author: "Kajal Dixit",
    position: "CEO, Sttrika",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 3,
    content: "AINOR's expertise in web development and digital solutions helped us launch our fintech platform successfully. Their professional approach and timely delivery made the entire process seamless and efficient.",
    author: "Arjun Sharma",
    position: "Founder, FinTech Solutions India",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  },
];

const TestimonialsSection = () => {
  return (
    <Section id="testimonials" bgColor="bg-gray-50">
      <div className="text-center mb-16">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="inline-block px-3 py-1 rounded-full bg-indigo-100 text-indigo-800 text-sm font-medium mb-4"
        >
          Testimonials
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900"
        >
          What Our Clients Say
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto"
        >
          Don't just take our word for it — hear from some of our satisfied clients
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
        ))}
      </div>
    </Section>
  );
};

const TestimonialCard = ({ testimonial, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="p-8 h-full flex flex-col" hoverEffect>
        <div className="relative mb-6">
          <div className="absolute -top-4 -left-4 h-10 w-10 bg-indigo-500 rounded-full flex items-center justify-center text-white">
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>
        </div>
        <p className="text-gray-700 italic flex-grow">"{testimonial.content}"</p>
        <div className="mt-6 flex items-center">
          <img 
            className="h-12 w-12 rounded-full border-2 border-indigo-100" 
            src={testimonial.avatar} 
            alt={testimonial.author}
            loading="lazy"
          />
          <div className="ml-4">
            <p className="text-base font-medium text-gray-900">{testimonial.author}</p>
            <p className="text-sm text-gray-600">{testimonial.position}</p>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default TestimonialsSection;
