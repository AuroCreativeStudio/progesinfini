import React, { useState } from 'react';
import { postEnquireForm } from '../../services/enquireService';
import image from '../../assets/enquire.jpeg';

const EnquireForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneno: '',
    workshop_id: '',
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
      const response = await postEnquireForm(formData);
      console.log('Response:', response.data);
      alert('Enquiry submitted successfully!');
      onClose();
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to submit enquiry.');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center p-4 overflow-y-auto">
      <div className="bg-white rounded-lg shadow-xl flex flex-col md:flex-row w-full max-w-4xl lg:max-w-5xl overflow-hidden">
        {/* Left - Image */}
        <div className="hidden md:block md:w-1/2 h-64 md:h-auto">
          <img
            src={image}
            alt="Form Illustration"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right - Form */}
        <div className="w-full md:w-1/2 p-4 sm:p-6 md:p-8 lg:p-10 relative">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-2 right-2 sm:top-4 sm:right-4 text-gray-400 hover:text-gray-700 text-2xl font-bold"
          >
            &times;
          </button>

          {/* Form Title - Only shown on mobile */}
          <h2 className="text-xl font-bold text-gray-800 mb-4 md:hidden">
            Enquiry Form
          </h2>

          {/* Form Content */}
          <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4 text-left">
            {/* Full Name */}
            <div>
              <label className="block text-sm sm:text-base text-gray-600 mb-1">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 sm:px-4 sm:py-2 border border-orange-400 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm sm:text-base text-gray-600 mb-1">Email address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 sm:px-4 sm:py-2 border border-orange-400 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm sm:text-base text-gray-600 mb-1">Phone Number</label>
              <input
                type="tel"
                name="phoneno"
                value={formData.phoneno}
                onChange={handleChange}
                className="w-full px-3 py-2 sm:px-4 sm:py-2 border border-orange-400 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="+91"
                required
              />
            </div>

            {/* Workshop ID */}
            <div>
              <label className="block text-sm sm:text-base text-gray-600 mb-1">Workshop ID</label>
              <input
                type="text"
                name="workshop_id"
                value={formData.workshop_id}
                onChange={handleChange}
                className="w-full px-3 py-2 sm:px-4 sm:py-2 border border-orange-400 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm sm:text-base text-gray-600 mb-1">Write to us</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="3"
                maxLength="300"
                className="w-full px-3 py-2 sm:px-4 sm:py-2 border border-orange-400 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
                placeholder="Write to us"
                required
              />
              <div className="text-xs text-gray-500 mt-1">
                {formData.message.length}/300 Characters
              </div>
            </div>

            {/* Submit */}
            <div className="text-right pt-2">
              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 sm:px-6 sm:py-2 rounded font-semibold transition-colors duration-200"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EnquireForm;