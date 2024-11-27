import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gradient-to-r from-black via-gray-900 to-black text-white py-4 px-6 shadow-lg fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link to="/" className="text-indigo-500 hover:text-indigo-400 transition duration-300">AINOR</Link>
        </div>
        <div className="hidden md:flex space-x-6">
          <a href="features" className="text-white hover:text-indigo-400 transition duration-300">Features</a>
          <a href="about" className="text-white hover:text-indigo-400 transition duration-300">About</a>
          <a href="contact" className="text-white hover:text-indigo-400 transition duration-300">Contact</a>
          <a
            href="https://ainorchat.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-full shadow-md transform transition duration-500 hover:scale-105"
          >
            Try AINOR
          </a>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-4 text-center bg-gray-800 bg-opacity-90 py-4 rounded-lg shadow-lg transition-all duration-500 transform">
          <a href="features" className="block text-white hover:text-indigo-400 transition duration-300">Features</a>
          <a href="about" className="block text-white hover:text-indigo-400 transition duration-300">About</a>
          <a href="contact" className="block text-white hover:text-indigo-400 transition duration-300">Contact</a>
          <a
            href="https://ainorchat.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-full shadow-md transform transition duration-500 hover:scale-105"
          >
            Try AINOR
          </a>
        </div>
      )}
    </header>
  );
}

export default Header;
 