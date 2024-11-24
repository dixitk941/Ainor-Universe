import React from 'react';

function About() {
  return (
    <section className="relative bg-black text-white py-20 px-6 sm:py-28 sm:px-12">
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-80"></div>

      {/* Floating Decorative Elements */}
      <div className="absolute top-10 right-20 w-48 h-48 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full opacity-25 blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-full opacity-25 blur-3xl"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between space-y-12 sm:space-y-0">
        {/* Left Section */}
        <div className="sm:w-1/2 text-center sm:text-left">
          <h2 className="text-4xl sm:text-6xl font-extrabold mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500">
            About AINOR
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-6 leading-relaxed max-w-md sm:max-w-xl">
            AINOR is a groundbreaking AI ecosystem designed to redefine human potential. 
            From personal assistance to collaborative innovation, we enable a smarter and more connected future.
          </p>
          <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed max-w-md sm:max-w-xl">
            Our suite—HiiHive, AINOR AI, GenZVerse, and NeoCodeNex—is tailored for those who 
            dare to innovate and lead in the digital age.
          </p>

          {/* Call-to-Action Buttons */}
          <div className="flex justify-center sm:justify-start space-x-4">
            <button className="px-6 py-3 rounded-full text-lg font-semibold bg-gradient-to-r from-indigo-500 to-purple-700 hover:from-purple-500 hover:to-pink-500 transform hover:scale-105 shadow-lg transition-all">
              Learn More
            </button>
            <button className="px-6 py-3 rounded-full text-lg font-semibold border border-gray-700 hover:border-purple-500 transform hover:scale-105 transition-all">
              Join AINOR
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="sm:w-1/2 flex justify-center">
          <div className="relative w-full max-w-md">
            {/* Holographic Card */}
            <div className="absolute inset-0 transform translate-x-4 translate-y-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl blur-md opacity-50"></div>
            <div className="relative bg-gray-800 text-gray-300 rounded-2xl shadow-lg p-8 space-y-6">
              <h3 className="text-2xl font-bold text-white">Our Ecosystem</h3>
              <ul className="space-y-4">
                {[
                  { name: 'HiiHive', description: 'Your social hub for connecting with peers.' },
                  { name: 'AINOR AI', description: 'Your intelligent assistant for seamless experiences.' },
                  { name: 'GenZVerse', description: 'Empowering the next generation with innovation.' },
                  { name: 'NeoCodeNex', description: 'Simplifying development with modern tools.' },
                ].map((project, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-4 h-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mr-4"></div>
                    <div>
                      <h4 className="font-semibold text-white">{project.name}</h4>
                      <p className="text-sm text-gray-400">{project.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
