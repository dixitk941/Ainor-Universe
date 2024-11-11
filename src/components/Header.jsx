import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-black via-gray-900 to-black p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo - Redirect to Homepage */}
        <Link to="/" className="text-3xl font-extrabold text-white tracking-wider">
          AINOR
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <a href="features" className="text-white hover:text-indigo-400 transition duration-300">Features</a>
          <a href="about" className="text-white hover:text-indigo-400 transition duration-300">About</a>
          <a href="contact" className="text-white hover:text-indigo-400 transition duration-300">Contact</a>
        </div>
        
        {/* Updated "Try AINOR" Button */}
        <a
          href="https://ainorchat.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:block bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-full shadow-md transform transition duration-500 hover:scale-105"
        >
          Try AINOR
        </a>

        {/* Burger Icon */}
        <div className="md:hidden flex items-center">
          <button
            className="relative w-8 h-8 text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span
              className={`block absolute h-0.5 w-full bg-white transform transition duration-300 ease-in-out ${
                isOpen ? 'rotate-45 translate-y-2' : '-translate-y-1.5'
              }`}
            />
            <span
              className={`block absolute h-0.5 w-full bg-white transition duration-300 ease-in-out ${
                isOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`block absolute h-0.5 w-full bg-white transform transition duration-300 ease-in-out ${
                isOpen ? '-rotate-45 -translate-y-2' : 'translate-y-1.5'
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-4 text-center">
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
