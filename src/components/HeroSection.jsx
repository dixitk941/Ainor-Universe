import React from 'react';

function HeroSection() {
  return (
    <section className="relative text-center p-6 sm:p-12 bg-gradient-to-r from-black via-gray-900 to-black text-white overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-black opacity-75"></div>
      
      {/* Content */}
      <div className="relative z-10">
        {/* Title */}
        <h2 className="text-4xl sm:text-6xl font-extrabold mb-4 sm:mb-6 animate-pulse tracking-tight">
          Welcome to AINOR
        </h2>

        {/* Subtitle */}
        <p className="mb-6 sm:mb-8 text-lg sm:text-xl max-w-lg sm:max-w-3xl mx-auto px-4">
          AINOR, your AI-powered assistant, combining cutting-edge technology and intelligent responses to bring you a seamless experience.
        </p>

        {/* Feature Icons */}
        <div className="flex flex-wrap justify-center space-x-0 space-y-4 sm:space-x-6 sm:space-y-0 mb-6 sm:mb-8">
          <div className="w-1/3 sm:w-auto p-2 sm:p-4 bg-gray-800 rounded-full shadow-lg transform transition duration-500 hover:scale-110 text-center">
            <i className="fas fa-robot text-2xl sm:text-3xl mb-1 sm:mb-2"></i>
            <p className="text-xs sm:text-sm">AI-driven Responses</p>
          </div>
          <div className="w-1/3 sm:w-auto p-2 sm:p-4 bg-gray-800 rounded-full shadow-lg transform transition duration-500 hover:scale-110 text-center">
            <i className="fas fa-brain text-2xl sm:text-3xl mb-1 sm:mb-2"></i>
            <p className="text-xs sm:text-sm">Deep Learning</p>
          </div>
          <div className="w-1/3 sm:w-auto p-2 sm:p-4 bg-gray-800 rounded-full shadow-lg transform transition duration-500 hover:scale-110 text-center">
            <i className="fas fa-comments text-2xl sm:text-3xl mb-1 sm:mb-2"></i>
            <p className="text-xs sm:text-sm">Real-time Chat</p>
          </div>
          <div className="w-1/3 sm:w-auto p-2 sm:p-4 bg-gray-800 rounded-full shadow-lg transform transition duration-500 hover:scale-110 text-center">
            <i className="fas fa-shield-alt text-2xl sm:text-3xl mb-1 sm:mb-2"></i>
            <p className="text-xs sm:text-sm">Data Privacy</p>
          </div>
        </div>

        {/* CTA Button */}
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full shadow-lg transform transition duration-500 hover:scale-105">
          Start Chatting
        </button>
      </div>

      {/* Decorative Gradient Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-1 sm:h-2 bg-gradient-to-r from-indigo-600 to-purple-600"></div>
    </section>
  );
}

export default HeroSection;
