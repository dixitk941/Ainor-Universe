import React from 'react';

function CallToAction() {
  return (
    <section className="relative py-16 px-6 sm:py-20 sm:px-12 bg-gradient-to-r from-indigo-900 via-purple-900 to-black text-white overflow-hidden">
      {/* Background Gradient & Elements */}
      <div className="absolute inset-0 w-full h-full opacity-50 bg-gradient-radial from-indigo-600 via-transparent to-transparent transform scale-150 blur-2xl"></div>
      <div className="absolute inset-0 w-full h-full pointer-events-none bg-gradient-to-br from-indigo-700 to-purple-800 opacity-20 mix-blend-overlay"></div>

      {/* CTA Content */}
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 animate-pulse tracking-wide">
          Ready to Experience the Future with AINOR?
        </h2>
        <p className="text-lg sm:text-xl text-gray-200 mb-8">
          Discover how AINOR can transform the way you work, communicate, and innovate. Join us in redefining the boundaries of AI-driven assistance.
        </p>
        <div className="flex justify-center space-x-4 mt-8">
          <button className="px-8 py-4 rounded-full text-lg font-semibold bg-gradient-to-r from-pink-500 to-indigo-600 hover:from-indigo-600 hover:to-purple-500 transition duration-300 transform hover:scale-110 shadow-xl">
            Get Started
          </button>
          <button className="px-8 py-4 rounded-full text-lg font-semibold bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900 transition duration-300 transform hover:scale-110 shadow-xl">
            Learn More
          </button>
        </div>
      </div>

      {/* Animated Floating Elements */}
      <div className="absolute top-10 left-5 w-16 h-16 bg-pink-500 rounded-full opacity-25 blur-lg animate-float" style={{ animationDuration: '6s' }}></div>
      <div className="absolute bottom-20 right-5 w-24 h-24 bg-indigo-500 rounded-full opacity-25 blur-lg animate-float" style={{ animationDuration: '8s' }}></div>
      <div className="absolute top-1/3 right-1/3 w-20 h-20 bg-purple-500 rounded-full opacity-25 blur-lg animate-float" style={{ animationDuration: '7s' }}></div>
    </section>
  );
}

export default CallToAction;
