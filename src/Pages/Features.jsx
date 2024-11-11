import React from 'react';

function Features() {
  return (
    <section id="features" className="py-16 bg-gradient-to-r from-black via-gray-900 to-black text-white">
      <div className="container mx-auto px-6 sm:px-12 lg:px-16">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-12 sm:mb-16 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">
          Discover the Futuristic Features of AINOR
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {/* Feature 1 */}
          <div className="relative group transform transition duration-500 hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-25 rounded-xl"></div>
            <div className="relative z-10 p-8 bg-gray-800 rounded-xl shadow-xl overflow-hidden hover:bg-gray-700 transition-all duration-500">
              <i className="fas fa-robot text-5xl mb-4 text-indigo-400 group-hover:text-indigo-600 transform transition duration-300"></i>
              <h4 className="font-semibold text-2xl mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">Personalized AI</h4>
              <p className="text-sm sm:text-base text-center">AINOR tailors its responses based on your preferences and usage, offering personalized experiences.</p>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-indigo-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-all duration-500"></div>
          </div>

          {/* Feature 2 */}
          <div className="relative group transform transition duration-500 hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-25 rounded-xl"></div>
            <div className="relative z-10 p-8 bg-gray-800 rounded-xl shadow-xl overflow-hidden hover:bg-gray-700 transition-all duration-500">
              <i className="fas fa-bolt text-5xl mb-4 text-indigo-400 group-hover:text-indigo-600 transform transition duration-300"></i>
              <h4 className="font-semibold text-2xl mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">Real-Time Assistance</h4>
              <p className="text-sm sm:text-base text-center">Get immediate responses to your queries, available 24/7 without delay.</p>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-indigo-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-all duration-500"></div>
          </div>

          {/* Feature 3 */}
          <div className="relative group transform transition duration-500 hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-25 rounded-xl"></div>
            <div className="relative z-10 p-8 bg-gray-800 rounded-xl shadow-xl overflow-hidden hover:bg-gray-700 transition-all duration-500">
              <i className="fas fa-comments text-5xl mb-4 text-indigo-400 group-hover:text-indigo-600 transform transition duration-300"></i>
              <h4 className="font-semibold text-2xl mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">Contextual Understanding</h4>
              <p className="text-sm sm:text-base text-center">AINOR understands context for more accurate and intelligent responses, beyond just keywords.</p>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-indigo-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-all duration-500"></div>
          </div>

          {/* Feature 4 */}
          <div className="relative group transform transition duration-500 hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-25 rounded-xl"></div>
            <div className="relative z-10 p-8 bg-gray-800 rounded-xl shadow-xl overflow-hidden hover:bg-gray-700 transition-all duration-500">
              <i className="fas fa-language text-5xl mb-4 text-indigo-400 group-hover:text-indigo-600 transform transition duration-300"></i>
              <h4 className="font-semibold text-2xl mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">Multi-Language Support</h4>
              <p className="text-sm sm:text-base text-center">AINOR communicates in multiple languages, enabling it to serve a diverse global audience.</p>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-indigo-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-all duration-500"></div>
          </div>

          {/* Feature 5 */}
          <div className="relative group transform transition duration-500 hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-25 rounded-xl"></div>
            <div className="relative z-10 p-8 bg-gray-800 rounded-xl shadow-xl overflow-hidden hover:bg-gray-700 transition-all duration-500">
              <i className="fas fa-brain text-5xl mb-4 text-indigo-400 group-hover:text-indigo-600 transform transition duration-300"></i>
              <h4 className="font-semibold text-2xl mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">Continuous Learning</h4>
              <p className="text-sm sm:text-base text-center">AINOR continuously improves itself with each interaction, offering more personalized responses over time.</p>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-indigo-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-all duration-500"></div>
          </div>

          {/* Feature 6 */}
          <div className="relative group transform transition duration-500 hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-25 rounded-xl"></div>
            <div className="relative z-10 p-8 bg-gray-800 rounded-xl shadow-xl overflow-hidden hover:bg-gray-700 transition-all duration-500">
              <i className="fas fa-lock text-5xl mb-4 text-indigo-400 group-hover:text-indigo-600 transform transition duration-300"></i>
              <h4 className="font-semibold text-2xl mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">Secure and Private</h4>
              <p className="text-sm sm:text-base text-center">AINOR ensures the security and privacy of your data with robust encryption and privacy protocols.</p>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-indigo-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-all duration-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
