import React from 'react';
import { FaRobot, FaClock, FaLanguage, FaBrain, FaLock, FaArrowsAlt, FaTools, FaGlobe, FaInfinity } from 'react-icons/fa';

function Features() {
  return (
    <section className="p-6 sm:p-12 bg-gradient-to-r from-black via-gray-900 to-black text-white">
      <h3 className="text-3xl sm:text-4xl font-extrabold mb-8 sm:mb-12 text-center tracking-wider">
        Features
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
        {featuresData.map((feature, index) => (
          <div
            key={index}
            className="relative p-8 bg-gray-800 rounded-lg shadow-lg text-center transform transition duration-500 hover:scale-105 hover:bg-gray-700"
            style={{ border: '1px solid', borderColor: feature.borderColor }}
          >
            <div className="absolute inset-0 w-full h-full rounded-lg transform scale-105 bg-opacity-20 blur-2xl z-0"></div>
            <div className="relative z-10">
              <div className="mb-4 text-4xl text-indigo-400 animate-pulse">{feature.icon}</div>
              <h4 className="font-semibold mb-2 sm:mb-4 text-lg sm:text-xl">{feature.title}</h4>
              <p className="text-gray-300">{feature.description}</p>
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
    borderColor: 'rgba(99, 102, 241, 0.5)'
  },
  {
    title: 'Real-Time Assistance',
    description: 'Instant answers to your questions at any time.',
    icon: <FaClock />,
    borderColor: 'rgba(139, 92, 246, 0.5)'
  },
  {
    title: 'Contextual Understanding',
    description: 'Understands the context of your queries for more accurate responses.',
    icon: <FaBrain />,
    borderColor: 'rgba(168, 85, 247, 0.5)'
  },
  {
    title: 'Multi-Language Support',
    description: 'Supports multiple languages for a global user base.',
    icon: <FaLanguage />,
    borderColor: 'rgba(236, 72, 153, 0.5)'
  },
  {
    title: 'Continuous Learning',
    description: 'Improves over time with continuous learning from interactions.',
    icon: <FaInfinity />,
    borderColor: 'rgba(34, 197, 94, 0.5)'
  },
  {
    title: 'Secure and Private',
    description: 'Ensures your data is secure and private.',
    icon: <FaLock />,
    borderColor: 'rgba(59, 130, 246, 0.5)'
  },
  {
    title: 'Scalable Infrastructure',
    description: 'Handles increasing loads with ease and efficiency.',
    icon: <FaArrowsAlt />,
    borderColor: 'rgba(139, 92, 246, 0.5)'
  },
  {
    title: 'Customizable Workflows',
    description: 'Adaptable to various workflows and use cases.',
    icon: <FaTools />,
    borderColor: 'rgba(236, 72, 153, 0.5)'
  },
  {
    title: '24/7 Availability',
    description: 'Always available to assist you, day or night.',
    icon: <FaGlobe />,
    borderColor: 'rgba(34, 197, 94, 0.5)'
  },
];

export default Features;
