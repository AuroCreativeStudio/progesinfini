import React, { useState } from 'react';
import { postContactForm } from '../../services/contactService';
import contact from '../../assets/contactbg.png';

function Contactus() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneno: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await postContactForm(formData);
      console.log('Response:', response.data);
      alert('Contact submitted successfully!');
      setFormData({
        name: '',
        email: '',
        phoneno: '',
        message: '',
      });
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to submit contact');
    }
  };

  return (
    <section
      className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center px-4 sm:px-6 md:px-10 lg:px-20 py-20 font-rem"
      style={{ backgroundImage: `url(${contact})` }}
    >
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Text */}
        <div className="text-white space-y-4 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-snug">
            To Continue,
          </h2>
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-semibold leading-snug">
            Reach out to Progres Infini
          </h2>
        </div>

        {/* Form Container */}
     <div
  className="bg-white bg-opacity-90 backdrop-blur-md mt-8 shadow-lg px-6 sm:px-8 md:px-10 py-10 sm:py-14 w-full mx-auto"
  style={{
    maxWidth: '100%',
    width: '100%',
    // gradual width increase from 90% to 60% between 1515px to 1920px
    maxWidth: 'clamp(100%, 80vw, 80%)',
  }}
>

          <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-gray-800 text-center md:text-left">
            Leave us a Message
          </h3>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name */}
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-red-300 focus:ring-2 focus:ring-red-400  px-5 py-3 text-sm sm:text-base outline-none"
              required
            />

            {/* Email */}
            <input
              type="email"
              name="email"
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-red-300 focus:ring-2 focus:ring-red-400  px-5 py-3 text-sm sm:text-base outline-none"
              required
            />

            {/* Phone */}
            <input
              type="text"
              name="phoneno"
              placeholder="+91"
              value={formData.phoneno}
              onChange={handleChange}
              className="w-full border border-red-300 focus:ring-2 focus:ring-red-400 px-5 py-3 text-sm sm:text-base outline-none"
              required
            />

            {/* Message */}
            <textarea
              name="message"
              placeholder="Write to us"
              maxLength={999}
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-red-300 focus:ring-2 focus:ring-red-400 px-5 py-3 text-sm sm:text-base outline-none resize-none"
              required
            />

            {/* Privacy Checkbox */}
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                required
                id="privacy"
                className="accent-red-500 w-4 h-4"
              />
              <label htmlFor="privacy" className="text-sm text-gray-700">
                I Accept Privacy Policy
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-red-500 hover:bg-red-600 text-white py-3 px-6 text-base transition-all duration-300"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contactus;
