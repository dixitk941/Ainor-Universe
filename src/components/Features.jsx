import React from 'react';
import {
  FaRobot,
  FaClock,
  FaLanguage,
  FaBrain,
  FaLock,
  FaArrowsAlt,
  FaTools,
  FaGlobe,
  FaInfinity,
} from 'react-icons/fa';

function Features() {
  return (
    <section className="relative py-16 px-6 sm:py-24 sm:px-12 bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white">
      {/* Background Glow */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-purple-800 via-transparent to-indigo-500 opacity-10"></div>

      {/* Section Title */}
      <div className="relative z-10 text-center max-w-3xl mx-auto mb-12">
        <h3 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500">
          Features of AINOR
        </h3>
        <p className="text-lg sm:text-xl text-gray-300 mt-4">
          Discover the unique capabilities that make AINOR your ultimate AI companion.
        </p>
      </div>

      {/* Features Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuresData.map((feature, index) => (
          <div
            key={index}
            className="relative p-8 bg-gray-800 rounded-lg shadow-lg text-center transform transition-all duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-pink-500"
          >
            {/* Holographic Glow */}
            <div className="absolute inset-0 w-full h-full rounded-lg bg-gradient-to-r from-transparent to-indigo-500 opacity-20 blur-lg"></div>
            <div className="relative z-10 flex flex-col items-center">
              {/* Icon */}
              <div className="mb-6 text-5xl text-indigo-400">{feature.icon}</div>
              {/* Title */}
              <h4 className="text-xl font-semibold text-gray-100 mb-4">
                {feature.title}
              </h4>
              {/* Description */}
              <p className="text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// Features data including icons and descriptions
const featuresData = [
  {
    title: 'Personalized Responses',
    description: 'AINOR adapts to your needs and tailors responses.',
    icon: <FaRobot />,
  },
  {
    title: 'Real-Time Assistance',
    description: 'Instant answers to your questions at any time.',
    icon: <FaClock />,
  },
  {
    title: 'Contextual Understanding',
    description: 'Understands the context of your queries for more accurate responses.',
    icon: <FaBrain />,
  },
  {
    title: 'Multi-Language Support',
    description: 'Supports multiple languages for a global user base.',
    icon: <FaLanguage />,
  },
  {
    title: 'Continuous Learning',
    description: 'Improves over time with continuous learning from interactions.',
    icon: <FaInfinity />,
  },
  {
    title: 'Secure and Private',
    description: 'Ensures your data is secure and private.',
    icon: <FaLock />,
  },
  {
    title: 'Scalable Infrastructure',
    description: 'Handles increasing loads with ease and efficiency.',
    icon: <FaArrowsAlt />,
  },
  {
    title: 'Customizable Workflows',
    description: 'Adaptable to various workflows and use cases.',
    icon: <FaTools />,
  },
  {
    title: '24/7 Availability',
    description: 'Always available to assist you, day or night.',
    icon: <FaGlobe />,
  },
];

export default Features;
