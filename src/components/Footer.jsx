import React from 'react';

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-black via-gray-900 to-black text-white py-8">
      <div className="container mx-auto text-center">
        <p className="text-lg sm:text-xl mb-4">
          Created and Developed by <span className="font-bold text-indigo-500">Dixitk941</span> & <span className="font-bold text-indigo-500">Neocodenex</span>
        </p>
        <p className="text-sm sm:text-base mb-4">
          Visit our website: <a href="https://neocodenex.tech" target="_blank" rel="noopener noreferrer" className="text-indigo-500 hover:text-indigo-400 transition duration-300">Neocodenex</a>
        </p>
        <p className="text-xs sm:text-sm">
          &copy; {new Date().getFullYear()} AINOR. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
