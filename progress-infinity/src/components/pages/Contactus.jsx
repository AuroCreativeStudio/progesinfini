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
      className="relative w-full min-h-screen bg-cover bg-center flex items-center justify-center px-4 py-20 md:px-12 font-rem"
      style={{ backgroundImage: `url(${contact})` }}
    >
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Text */}
        <div className="text-white space-y-4 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-semibold">To Continue,</h2>
          <h2 className="text-3xl md:text-4xl font-semibold">Reach out to Progres Infini</h2>
        </div>

        {/* Form Container */}
        <div className="bg-white mt-12 bg-opacity-90 backdrop-blur-md rounded-xl shadow-xl px-6 py-8 w-full max-w-md md:max-w-[520px] min-h-[620px] mx-auto md:mx-0">
          <h3 className="text-xl font-semibold mb-10 text-gray-800 text-center md:text-left">
            Leave us a Message
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-red-300 focus:ring-2 focus:ring-red-400 rounded-md px-4 py-3 text-sm outline-none"
              required
            />

            {/* Email */}
            <input
              type="email"
              name="email"
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-red-300 focus:ring-2 focus:ring-red-400 rounded-md px-4 py-3 text-sm outline-none"
              required
            />

            {/* Phone */}
            <input
              type="text"
              name="phoneno"
              placeholder="+91"
              value={formData.phoneno}
              onChange={handleChange}
              className="w-full border border-red-300 focus:ring-2 focus:ring-red-400 rounded-md px-4 py-3 text-sm outline-none"
              required
            />

            {/* Message */}
            <textarea
              name="message"
              placeholder="Write to us"
              maxLength={999}
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-red-300 focus:ring-2 focus:ring-red-400 rounded-md px-4 py-3 text-sm outline-none resize-none"
              required
            />

            {/* Privacy Checkbox */}
            <div className="flex items-center space-x-2">
              <input type="checkbox" required id="privacy" className="accent-red-500" />
              <label htmlFor="privacy" className="text-sm text-gray-700">
                I Accept Privacy Policy
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-red-500 hover:bg-red-600 text-white py-2 px-6 rounded-md transition-all"
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
