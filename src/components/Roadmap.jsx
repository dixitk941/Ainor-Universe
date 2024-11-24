import React from 'react';

function Roadmap() {
  return (
    <section className="relative py-16 px-6 sm:px-12 bg-gradient-to-r from-black via-gray-900 to-black text-white">
      {/* Background SVG Wave */}
      <svg
        className="absolute top-0 left-0 w-full h-[200px] -z-10"
        viewBox="0 0 1440 320"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="url(#waveGradient)"
          fillOpacity="1"
          d="M0,224L48,229.3C96,235,192,245,288,245.3C384,245,480,235,576,229.3C672,224,768,224,864,229.3C960,235,1056,245,1152,245.3C1248,245,1344,235,1392,229.3C1440,224,1536,224,1536,224L1536,320L1392,320C1248,320,1152,320,1056,320C960,320,864,320,768,320C672,320,576,320,480,320C384,320,288,320,192,320C96,320,48,320,0,320Z"
        ></path>
        <defs>
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4c1d95" />
            <stop offset="100%" stopColor="#f43f5e" />
          </linearGradient>
        </defs>
      </svg>

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 mb-8 tracking-tight">
          AINOR Roadmap - Our Journey Ahead
        </h2>
        <p className="text-lg sm:text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Join us as we embark on an exciting journey through the AINOR universe with major milestones across the coming months.
        </p>

        {/* Roadmap Timeline */}
        <div className="relative flex flex-wrap justify-center items-start pt-16 pb-20 space-x-8 space-y-8 sm:space-y-0">
          {/* December 2024 - AINOR Universe Launch */}
          <div className="relative flex flex-col items-center w-full sm:w-1/5">
            <div className="w-20 h-20 rounded-full bg-gradient-to-r from-pink-500 to-indigo-600 text-white flex items-center justify-center shadow-xl">
              🚀
            </div>
            <div className="mt-4">
              <h3 className="text-xl font-semibold text-gray-100">December 2024 - AINOR Universe Launch</h3>
              <p className="text-gray-300">Unveiling the AINOR Universe with groundbreaking innovations in AI.</p>
            </div>
          </div>

          {/* January 2025 - AINOR Launch */}
          <div className="relative flex flex-col items-center w-full sm:w-1/5">
            <div className="w-20 h-20 rounded-full bg-gradient-to-r from-indigo-600 to-purple-500 text-white flex items-center justify-center shadow-xl">
              🤖
            </div>
            <div className="mt-4">
              <h3 className="text-xl font-semibold text-gray-100">January 2025 - AINOR Launch</h3>
              <p className="text-gray-300">Official launch of AINOR, a revolutionary AI assistant ready for real-time engagement.</p>
            </div>
          </div>

          {/* February 2025 - AINOR Chatbot */}
          <div className="relative flex flex-col items-center w-full sm:w-1/5">
            <div className="w-20 h-20 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 text-white flex items-center justify-center shadow-xl">
              💬
            </div>
            <div className="mt-4">
              <h3 className="text-xl font-semibold text-gray-100">February 2025 - AINOR Chatbot</h3>
              <p className="text-gray-300">The AINOR Chatbot will change the way you interact with AI, providing instant and personalized support.</p>
            </div>
          </div>

          {/* March 2025 - HiiHive Launch */}
          <div className="relative flex flex-col items-center w-full sm:w-1/5">
            <div className="w-20 h-20 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white flex items-center justify-center shadow-xl">
              🌐
            </div>
            <div className="mt-4">
              <h3 className="text-xl font-semibold text-gray-100">March 2025 - HiiHive Launch</h3>
              <p className="text-gray-300">Launch of HiiHive, our new social platform where innovation meets community.</p>
            </div>
          </div>

          {/* April 2025 - HiiHive V-2 */}
          <div className="relative flex flex-col items-center w-full sm:w-1/5">
            <div className="w-20 h-20 rounded-full bg-gradient-to-r from-indigo-600 to-pink-500 text-white flex items-center justify-center shadow-xl">
              🔄
            </div>
            <div className="mt-4">
              <h3 className="text-xl font-semibold text-gray-100">April 2025 - HiiHive V-2</h3>
              <p className="text-gray-300">Introducing HiiHive V-2 with new features, optimizations, and a stronger community focus.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Roadmap;
