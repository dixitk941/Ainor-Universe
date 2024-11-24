import React from 'react';

function CallToAction() {
  return (
    <section className="relative py-16 px-6 sm:py-24 sm:px-12 bg-gradient-to-r from-black via-gray-900 to-black text-white overflow-hidden">
      {/* Background Gradient & Elements */}
      <div className="absolute inset-0 w-full h-full opacity-60 bg-gradient-radial from-black via-transparent to-transparent transform scale-150 blur-2xl"></div>

      {/* CTA Content */}
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 mb-6 tracking-tight">
          Ready to Experience the Future with AINOR?
        </h2>

        {/* Subheading */}
        <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Discover how AINOR can transform the way you work, communicate, and innovate. Join us in redefining the boundaries of AI-driven assistance.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-6 mt-8">
          <button className="px-8 py-4 rounded-full text-lg font-semibold bg-gradient-to-r from-pink-500 to-indigo-600 hover:from-indigo-600 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 shadow-xl">
            Get Started
          </button>
          <button className="px-8 py-4 rounded-full text-lg font-semibold bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900 transition-all duration-300 transform hover:scale-105 shadow-xl">
            Learn More
          </button>
        </div>
      </div>

      {/* Animated Floating Elements */}
      <div className="absolute top-12 left-5 w-20 h-20 bg-pink-500 rounded-full opacity-20 blur-lg animate-pulse" style={{ animationDuration: '6s' }}></div>
      <div className="absolute bottom-16 right-8 w-28 h-28 bg-indigo-500 rounded-full opacity-20 blur-lg animate-pulse" style={{ animationDuration: '8s' }}></div>
      <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-purple-500 rounded-full opacity-20 blur-lg animate-pulse" style={{ animationDuration: '7s' }}></div>
    </section>
  );
}

export default CallToAction;
