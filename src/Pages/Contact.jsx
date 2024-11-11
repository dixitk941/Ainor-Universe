import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

import axios from 'axios';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus('Submitting...');

    const formDataToSubmit = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      access_key: '4b29b417-55d1-4ac8-8c6e-9ac8097097f8', // Replace this with your actual Web3Form access key
    };

    try {
      const response = await axios.post('https://api.web3forms.com/submit', formDataToSubmit);
      if (response.data.success) {
        setFormStatus('Message Sent!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setFormStatus('Something went wrong, please try again.');
      }
    } catch (error) {
      setFormStatus('Error submitting the form, please try again.');
    }

    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-16 bg-gradient-to-r from-black via-gray-900 to-black text-white">
      <div className="container mx-auto px-6 sm:px-12 lg:px-16">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-12 sm:mb-16 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">
          Contact Us
        </h2>

        {/* Contact Form Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Form */}
          <div className="bg-gray-800 p-8 rounded-xl shadow-xl space-y-6 transform transition duration-500 hover:scale-105">
            <h3 className="text-3xl font-semibold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">
              Send Us a Message
            </h3>
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                {/* Name */}
                <div>
                  <label className="block text-lg font-medium">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 mt-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-lg font-medium">Your Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 mt-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-lg font-medium">Your Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-3 mt-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    rows="6"
                    required
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition duration-300 transform hover:scale-105"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting...' : 'Send Message'}
                  </button>
                </div>

                {/* Form Status */}
                {formStatus && (
                  <div className="text-center mt-4 text-xl text-green-400">
                    {formStatus}
                  </div>
                )}
              </div>
            </form>
          </div>

          {/* Contact Information Section */}
          <div className="space-y-6">
            <h3 className="text-3xl font-semibold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">
              Contact Information
            </h3>
            <div className="text-center">
              <p className="text-lg">Email: <span className="font-semibold">dixitk941@gmail.com</span></p>
              <p className="text-lg">Phone: <span className="font-semibold">+919528202892</span></p>
            </div>
            <div className="text-center">
            <h4 className="text-2xl font-semibold">Follow Us</h4>
<div className="flex justify-center space-x-4 mt-4">
  {/* <a href="https://www.facebook.com" className="text-indigo-500 hover:text-indigo-400 transform transition duration-300" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-facebook-square text-3xl"></i>
  </a> */}
  <a href="https://www.twitter.com/dixitk941" className="text-indigo-500 hover:text-indigo-400 transform transition duration-300" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-twitter-square text-3xl"></i>
  </a>
  <a href="https://www.linkedin.com//karan-dixit21" className="text-indigo-500 hover:text-indigo-400 transform transition duration-300" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-linkedin text-3xl"></i>
  </a>
  <a href="https://www.instagram.com/karan_dixit19" className="text-indigo-500 hover:text-indigo-400 transform transition duration-300" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-instagram text-3xl"></i>
  </a>
  <a href="https://www.github.com/dixitk941" className="text-indigo-500 hover:text-indigo-400 transform transition duration-300" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-github text-3xl"></i>
  </a>
</div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
