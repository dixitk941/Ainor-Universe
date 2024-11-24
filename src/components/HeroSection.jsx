import React from 'react';

function HeroSection() {
  return (
    <section className="relative bg-gradient-to-b from-gray-900 via-black to-gray-800 text-white px-6 sm:px-12 py-20 sm:py-24 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.05)_0%,transparent_70%)] blur-3xl opacity-25"></div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Title */}
        <h1 className="text-5xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-600 mb-6">
          Welcome to AINOR
        </h1>

        {/* Subtitle */}
        <p className="mb-8 text-lg sm:text-xl max-w-3xl mx-auto text-gray-300 leading-relaxed">
          Experience the future of innovation with AINOR—connecting the world with intelligent solutions like AINOR AI, HiiHive, GenZVerse, and more.
        </p>

        {/* AINOR Chat Embed */}
        <div className="relative w-full sm:w-4/5 lg:w-3/4 mx-auto my-12">
          <iframe
            src="https://ainorchat.vercel.app"
            title="AINOR Chat"
            className="w-full h-80 sm:h-96 lg:h-[500px]"
            frameBorder="0"
            allow="fullscreen; autoplay; encrypted-media; picture-in-picture; geolocation; microphone; camera"
            allowFullScreen
          ></iframe>
        </div>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 max-w-5xl mx-auto">
          {[
            { title: 'HiiHive', description: 'Your social hub for meaningful connections.' },
            { title: 'AINOR AI', description: 'Intelligence for a seamless experience.' },
            { title: 'GenZVerse', description: 'Empowering the next generation of innovators.' },
            { title: 'NeoCodeNex', description: 'Simplifying development for modern creators.' },
          ].map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold mb-2 text-gray-100">{feature.title}</h3>
              <p className="text-sm text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="my-8">
          <button className="px-8 py-4 bg-gradient-to-r from-pink-500 to-indigo-600 hover:from-indigo-600 hover:to-purple-500 text-white font-semibold rounded-full shadow-md hover:shadow-lg transition-transform transform hover:scale-105">
            Explore Now
          </button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
