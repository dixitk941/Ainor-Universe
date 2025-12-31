import React from 'react';
import { motion } from 'framer-motion';

// Color palette: Dark (#1a1a1a), Light (#f5f5f5), Accent (indigo-500)

const testimonials = [
  {
    id: 1,
    content: "AINOR delivered an exceptional cab booking platform for GoForCab. Their innovative approach and technical expertise transformed our vision into a user-friendly, scalable solution.",
    author: "Chetan Aggarwal",
    position: "CEO, GoForCab",
  },
  {
    id: 2,
    content: "Working with AINOR on Sttrika's digital platform was outstanding. Their team's dedication to quality and attention to detail helped us create a sophisticated solution.",
    author: "Kajal Dixit",
    position: "CEO, Sttrika",
  },
  {
    id: 3,
    content: "AINOR's expertise in web development helped us launch our platform successfully. Their professional approach and timely delivery made the process seamless.",
    author: "Arjun Sharma",
    position: "Founder, FinTech Solutions",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 md:py-32 relative overflow-hidden">
      {/* Decorative connecting arrows - feedback loop */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Circular feedback arrows */}
        <motion.svg
          className="absolute top-32 left-10 w-24 h-24 opacity-[0.08]"
          viewBox="0 0 100 100"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <path 
            d="M 50 15 A 35 35 0 1 1 15 50" 
            stroke="#6366f1" 
            strokeWidth="2.5" 
            fill="none"
            strokeLinecap="round"
          />
          <polygon points="50,10 55,20 45,20" fill="#6366f1" />
        </motion.svg>
        
        {/* Quote connection line */}
        <svg className="absolute bottom-40 right-20 w-[100px] h-[80px] opacity-[0.06]" viewBox="0 0 100 80">
          <motion.path
            d="M 10 40 L 45 10 L 45 30 L 90 30"
            stroke="#6366f1"
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1, 1, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.polygon
            points="85,25 95,30 85,35"
            fill="#6366f1"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 1, 0] }}
            transition={{ duration: 4, repeat: Infinity, times: [0, 0.4, 0.6, 1] }}
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 text-indigo-500 rounded-full mb-6 border border-indigo-100"
          >
            <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
            <span className="font-semibold text-sm">Testimonials</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#1a1a1a]"
          >
            What Our
            <span className="block mt-2 text-indigo-500">
              Clients Say
            </span>
          </motion.h2>
        </div>

        {/* Testimonials Grid */}
        <motion.div 
          className="grid md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-indigo-500">★</span>
                ))}
              </div>
              
              {/* Quote */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              
              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-500 font-bold">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-[#1a1a1a]">{testimonial.author}</div>
                  <div className="text-sm text-gray-500">{testimonial.position}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
