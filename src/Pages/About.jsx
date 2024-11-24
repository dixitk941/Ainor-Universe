import React from 'react';

function About() {
  return (
    <section
      id="about"
      className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-black via-gray-900 to-black text-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-8 sm:mb-12 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">
          About AINOR
        </h2>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
          {/* Left Column: Description */}
          <div className="flex flex-col justify-center space-y-6">
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
              AINOR is a state-of-the-art AI-powered assistant designed to simplify your life. Leveraging
              cutting-edge technology, AINOR performs a wide range of tasks—answering questions, providing
              tailored insights, offering real-time assistance, and continuously learning to better serve you.
              Whether for everyday needs or complex problem-solving, AINOR is your dependable AI companion.
            </p>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
              Our mission is to revolutionize the way people interact with technology, making it smarter,
              more intuitive, and more connected than ever before.
            </p>
          </div>

          {/* Right Column: Image */}
          <div className="relative">
            <img
              src="https://via.placeholder.com/500x400" // Replace with actual image URL
              alt="AINOR AI"
              className="w-full h-auto rounded-lg shadow-lg transform transition duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black opacity-50 rounded-lg"></div>
          </div>
        </div>

        {/* AINOR Universe Section */}
        <div className="mt-16 text-center">
          <h3 className="text-3xl sm:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">
            The AINOR Universe
          </h3>
          <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            The AINOR Universe is a dynamic ecosystem of interconnected projects, each designed to cater to
            specific needs while contributing to a cohesive whole. Together, these components create a powerful
            platform that empowers users with advanced tools and seamless experiences.
          </p>

          {/* Sub-Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:bg-gray-700 transform transition duration-500 hover:scale-105">
              <h4 className="text-xl font-bold text-indigo-400 mb-2">HiiHive</h4>
              <p className="text-gray-300">
                A next-gen social platform for developers, fostering collaboration and community building.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:bg-gray-700 transform transition duration-500 hover:scale-105">
              <h4 className="text-xl font-bold text-purple-400 mb-2">AINOR AI</h4>
              <p className="text-gray-300">
                The core of the AINOR Universe, providing intelligent, real-time AI-powered assistance.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:bg-gray-700 transform transition duration-500 hover:scale-105">
              <h4 className="text-xl font-bold text-pink-400 mb-2">GenZVerse</h4>
              <p className="text-gray-300">
                A virtual hub designed to engage and inspire the Gen Z community through innovative solutions.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:bg-gray-700 transform transition duration-500 hover:scale-105">
              <h4 className="text-xl font-bold text-indigo-600 mb-2">NeoCodeNex</h4>
              <p className="text-gray-300">
                A cutting-edge development environment for coders, combining simplicity and power.
              </p>
            </div>
          </div>
        </div>

        {/* Vision Section */}
        <div className="mt-16 text-center">
          <h3 className="text-3xl sm:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">
            Our Vision
          </h3>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            At AINOR, we envision a future where artificial intelligence is seamlessly integrated into everyday life.
            We are dedicated to building a smart, adaptable, and reliable assistant that enhances productivity,
            fosters creativity, and supports people in all aspects of their lives. AINOR is more than just an AI—it's
            a partner, always ready to assist, learn, and grow alongside you.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
