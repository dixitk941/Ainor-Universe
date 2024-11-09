import React from 'react';

function About() {
  return (
    <section className="relative py-12 px-6 sm:py-16 sm:px-12 bg-gradient-to-r from-black via-gray-900 to-black text-white overflow-hidden">
      {/* Holographic Background */}
      <div className="absolute inset-0 w-full h-full opacity-30 bg-gradient-radial from-indigo-500 via-purple-600 to-transparent transform scale-125 blur-2xl"></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-8 tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 animate-pulse">
          About AINOR
        </h2>
        <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
          AINOR is a next-generation AI assistant designed to elevate human productivity and creativity. Our mission is to empower users with intelligent, real-time assistance and create a seamless experience that feels both intuitive and transformative.
        </p>
        <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
          With AINOR, you are equipped with a companion that learns, adapts, and grows with you, ensuring secure, reliable, and innovative support in every interaction. Join us as we pioneer a smarter, more connected future.
        </p>
        <div className="flex justify-center mt-12 space-x-4">
          <button className="px-6 py-3 rounded-full text-lg font-semibold bg-gradient-to-r from-indigo-600 to-purple-700 hover:from-purple-600 hover:to-pink-500 transition duration-300 transform hover:scale-105 shadow-lg">
            Learn More
          </button>
          <button className="px-6 py-3 rounded-full text-lg font-semibold bg-gradient-to-r from-indigo-600 to-purple-700 hover:from-purple-600 hover:to-pink-500 transition duration-300 transform hover:scale-105 shadow-lg">
            Join AINOR
          </button>
        </div>
      </div>

      {/* Holographic Circles for Effect */}
      <div className="absolute -bottom-10 left-10 w-72 h-72 bg-indigo-600 rounded-full opacity-25 blur-2xl animate-pulse"></div>
      <div className="absolute -bottom-20 right-10 w-72 h-72 bg-pink-500 rounded-full opacity-25 blur-2xl animate-pulse"></div>
    </section>
  );
}

export default About;
