import React, { useState } from 'react';
import { postEnquireForm } from '../../services/enquireService';
import image from '../../assets/enquire.jpeg';

const EnquireForm = ({
  onClose,
  showWorkshopField = false,
  workshopId = '',
  workshopTitle = ''
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneno: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateField = (name, value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10,15}$/;

    switch (name) {
      case 'name':
        if (!value.trim()) return 'Name is required';
        if (value.length > 255) return 'Name must be less than 255 characters';
        return '';
      case 'email':
        if (!value.trim()) return 'Email is required';
        if (!emailRegex.test(value)) return 'Enter a valid email';
        return '';
      case 'phoneno':
        if (!value.trim()) return 'Phone number is required';
        if (!phoneRegex.test(value)) return 'Enter a valid number (10–15 digits)';
        return '';
      case 'message':
        if (!value.trim()) return 'Message is required';
        if (value.length < 10) return 'Message must be at least 10 characters';
        return '';
      default:
        return '';
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    const validationErrors = {};
    Object.keys(formData).forEach((key) => {
      validationErrors[key] = validateField(key, formData[key]);
    });

    setErrors(validationErrors);
    const hasErrors = Object.values(validationErrors).some((err) => err);
    if (hasErrors) return;

    setIsSubmitting(true);

    const finalData = {
      ...formData,
      workshop_id: showWorkshopField ? workshopId : null // this is stored
    };

    try {
      await postEnquireForm(finalData);
      setSubmitSuccess(true);

      // Clear form
      setFormData({
        name: '',
        email: '',
        phoneno: '',
        message: ''
      });

      setTimeout(() => {
        setSubmitSuccess(false);
        onClose();
      }, 3000);
    } catch (err) {
      setErrors({ form: 'Failed to submit. Please try again.' });
    } finally {
      setIsSubmitting(false);
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
          <button
            onClick={onClose}
            className="absolute top-2 right-2 sm:top-4 sm:right-4 text-gray-400 hover:text-gray-700 text-2xl font-bold"
          >
            &times;
          </button>

          <h2 className="text-xl font-bold text-gray-800 mb-4 md:hidden">Enquiry Form</h2>

          {submitSuccess && (
            <div className="mb-4 p-3 bg-green-100 text-green-700 rounded text-center">
              Enquiry submitted successfully!
            </div>
          )}

          {errors.form && (
            <div className="mb-4 p-3 bg-red-100 text-red-700 rounded text-center">
              {errors.form}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4 text-left">
            {/* Name */}
            <div>
              <label className="block text-sm text-gray-600 mb-1">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded focus:outline-none ${
                  errors.name ? 'border-red-500' : 'border-orange-400 focus:ring-2 focus:ring-orange-500'
                }`}
              />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm text-gray-600 mb-1">Email address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded focus:outline-none ${
                  errors.email ? 'border-red-500' : 'border-orange-400 focus:ring-2 focus:ring-orange-500'
                }`}
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm text-gray-600 mb-1">Phone Number</label>
              <input
                type="tel"
                name="phoneno"
                value={formData.phoneno}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded focus:outline-none ${
                  errors.phoneno ? 'border-red-500' : 'border-orange-400 focus:ring-2 focus:ring-orange-500'
                }`}
                placeholder="e.g. 9876543210"
              />
              {errors.phoneno && <p className="text-red-500 text-xs mt-1">{errors.phoneno}</p>}
            </div>

            {/* Workshop - Show only title */}
            {showWorkshopField && (
              <div>
                <label className="block text-sm text-gray-600 mb-1">Workshop</label>
                <input
                  type="text"
                  value={workshopTitle}
                  className="w-full px-4 py-2 border border-orange-400 rounded bg-gray-100"
                  readOnly
                />
              </div>
            )}

            {/* Message */}
            <div>
              <label className="block text-sm text-gray-600 mb-1">Write to us</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="3"
                maxLength="300"
                className={`w-full px-4 py-2 border rounded resize-none focus:outline-none ${
                  errors.message ? 'border-red-500' : 'border-orange-400 focus:ring-2 focus:ring-orange-500'
                }`}
                placeholder="Your message..."
              />
              <div className="text-xs text-gray-500 mt-1 flex justify-between">
                <span>{formData.message.length}/300 characters</span>
                {errors.message && <span className="text-red-500">{errors.message}</span>}
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-right pt-2">
              <button
                type="submit"
                disabled={
                  isSubmitting ||
                  Object.values(errors).some((e) => e) ||
                  !formData.name ||
                  !formData.email ||
                  !formData.phoneno ||
                  !formData.message
                }
                className={`px-6 py-2 rounded font-semibold transition-colors duration-200 ${
                  isSubmitting || Object.values(errors).some((e) => e)
                    ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
                    : 'bg-orange-500 hover:bg-orange-600 text-white'
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Send'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EnquireForm;
