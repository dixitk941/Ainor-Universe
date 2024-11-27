import React from 'react';

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-black via-gray-900 to-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-lg sm:text-xl mb-2">
              Created and Developed by <span className="font-bold text-indigo-500">Dixitk941</span> & <span className="font-bold text-indigo-500">Neocodenex</span>
            </p>
            <p className="text-sm sm:text-base">
              Visit our website: <a href="https://neocodenex.tech" target="_blank" rel="noopener noreferrer" className="text-indigo-500 hover:text-indigo-400 transition duration-300">Neocodenex</a>
            </p>
          </div>
          <div className="text-center">
            <p className="text-xs sm:text-sm">
              &copy; {new Date().getFullYear()} AINOR. All rights reserved.
            </p>
          </div>
          <div className="text-center md:text-right text-xs sm:text-sm space-y-1">
            <p>Designed and Developed by <span className="font-bold text-indigo-500">Karan Dixit (dixitk941)</span></p>
            <p>CyberSecurity Provided by <span className="font-bold text-indigo-500">Mayank Sharma</span></p>
            <p>Logo By <span className="font-bold text-indigo-500">Pratick Chaudhary</span></p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
