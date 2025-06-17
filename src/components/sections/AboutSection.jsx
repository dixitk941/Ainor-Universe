import React from 'react';
import Section from '../layout/Section';
import AnimatedImage from '../ui/AnimatedImage';
import { motion } from 'framer-motion';
import { HiOutlineCode, HiOutlineCube } from 'react-icons/hi';
import { RiTeamLine } from 'react-icons/ri';

const AboutSection = () => {
  const stats = [
    { id: 1, icon: <HiOutlineCode />, value: '200+', label: 'Projects Delivered' },
    { id: 2, icon: <RiTeamLine />, value: '30+', label: 'Team Members' },
    { id: 3, icon: <HiOutlineCube />, value: '15+', label: 'Years Experience' },
  ];

  return (
    <Section id="about" bgColor="bg-gray-50">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-300 rounded-full blur-3xl opacity-20 -z-10"></div>
          <AnimatedImage
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            alt="Our Team"
            className="rounded-2xl shadow-xl"
          />
          <div className="absolute -bottom-10 -right-10 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-xl max-w-xs">
            <div className="flex space-x-2 mb-2">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-800 dark:text-white font-medium">
              "We don't just build websites and apps. We create digital experiences that transform businesses."
            </p>
            <p className="mt-2 text-indigo-600 dark:text-indigo-400 font-bold">- CEO, Ainor Universe</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-3 py-1 rounded-full bg-indigo-100 text-indigo-800 text-sm font-medium mb-4">
            About Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Digital Excellence <br />Since 2010
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            At Ainor Universe, we're passionate about creating digital experiences that transform businesses. Our team of experts combines technical skill with creative innovation to deliver solutions that not only meet but exceed client expectations.
          </p>
          <p className="text-lg text-gray-600 mb-10">
            We believe in a collaborative approach, working closely with our clients to understand their unique challenges and goals. This partnership allows us to create tailored solutions that drive real business results.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: stat.id * 0.1 }}
                viewport={{ once: true }}
                className="border border-gray-200 rounded-xl p-6 text-center bg-white shadow-sm"
              >
                <div className="text-indigo-600 mx-auto mb-2 flex justify-center">
                  {React.cloneElement(stat.icon, { className: 'h-8 w-8' })}
                </div>
                <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-sm text-gray-500">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default AboutSection;
