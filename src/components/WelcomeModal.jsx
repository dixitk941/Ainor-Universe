import React, { useState } from 'react';

function WelcomeModal() {
  const [showModal, setShowModal] = useState(true); // Modal visibility state
  const [fadeOut, setFadeOut] = useState(false); // Control fade-out animation

  // Close the modal with fade-out animation
  const closeModal = () => {
    setFadeOut(true);
    setTimeout(() => setShowModal(false), 500); // Delay removal for fade-out effect
  };

  return (
    <>
      {showModal && (
        <div className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-all duration-500 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>
          <div
            className={`bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 rounded-lg shadow-2xl p-6 max-w-sm w-full transform transition-all duration-500 ${fadeOut ? 'scale-90 opacity-0' : 'scale-100 opacity-100'}`}
          >
            {/* Animated Title */}
            <h2 className="text-3xl font-extrabold text-white text-center mb-4 animate-pulse">
              Welcome to AINOR!
            </h2>
            <p className="text-white text-center mb-4">
              We're glad to have you here. Explore our features and enjoy your stay!
            </p>
            <div className="flex justify-center space-x-4 mb-4">
              <button
                onClick={closeModal}
                className="bg-white text-indigo-500 font-semibold py-2 px-4 rounded-full shadow-md hover:bg-gray-200 transition-transform transform hover:scale-105"
              >
                Get Started
              </button>
              <button
                onClick={closeModal}
                className="bg-white text-indigo-500 font-semibold py-2 px-4 rounded-full shadow-md hover:bg-gray-200 transition-transform transform hover:scale-105"
              >
                Learn More
              </button>
            </div>
            {/* Credits */}
            <div className="text-center text-white text-xs mt-4">
              <p>Designed and Developed by Karan Dixit (dixitk941)</p>
              <p>CyberSecurity Provided by Mayank Sharma</p>
              <p>Logo By Pratick Chaudhary</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default WelcomeModal;