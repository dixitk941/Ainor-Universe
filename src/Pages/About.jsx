import React from 'react';

function About() {
  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-black via-gray-900 to-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-8 sm:mb-12 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">
          About AINOR
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center space-y-6">
            <p className="text-lg sm:text-xl text-gray-400">
              AINOR is a state-of-the-art AI-powered assistant designed to make your life easier. With its
              cutting-edge technology, AINOR can handle a variety of tasks, ranging from answering questions and
              providing personalized responses to offering real-time assistance and learning from every interaction.
              AINOR adapts to your needs, helping you in a variety of scenarios, from everyday tasks to complex inquiries.
            </p>
            <p className="text-lg sm:text-xl text-gray-400">
              Our mission is to revolutionize the way people interact with technology. We aim to build an intelligent
              assistant that continuously improves, learns, and adapts to provide seamless and efficient solutions
              to our users, helping them stay ahead in this fast-paced world.
            </p>
          </div>
          <div className="relative">
            <img
              src="https://via.placeholder.com/500x400" // Replace with actual image URL
              alt="AINOR AI"
              className="w-full h-auto rounded-lg shadow-lg transform transition duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black opacity-50 rounded-lg"></div>
          </div>
        </div>
        <div className="mt-12 text-center">
          <h3 className="text-3xl sm:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">
            Our Vision
          </h3>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
            At AINOR, we envision a future where artificial intelligence is seamlessly integrated into everyday life. 
            We are dedicated to building a smart, adaptable, and reliable assistant that can enhance productivity, 
            foster creativity, and support people in all aspects of their lives. AINOR is more than just an AI—it's 
            a partner, always ready to assist, learn, and grow alongside you.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
