import React, { useState } from 'react';
import { postContactForm } from '../../services/contactService';
import contact from '../../assets/contactbg.png';

function Contactus() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneno: '+91 ',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateField = (name, value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+91 \d{10}$/; 

    switch (name) {
      case 'name':
        if (!value.trim()) return 'Name is required';
        if (value.length > 255) return 'Name must be less than 255 characters';
        return '';
      
      case 'email':
        if (!value.trim()) return 'Email is required';
        if (!emailRegex.test(value)) return 'Please enter a valid email address';
        if (value.length > 255) return 'Email must be less than 255 characters';
        return '';
      
      case 'phoneno':
        if (!value.trim()) return 'Phone number is required';
        if (!phoneRegex.test(value)) return 'Please enter a valid 10-digit Indian number (e.g., +91 9876543210)';
        return '';
      
      case 'message':
        if (!value.trim()) return 'Message is required';
        return '';
      
      default:
        return '';
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Special handling for phone number
    if (name === 'phoneno') {
      // Allow only numbers and maintain +91 prefix
      const digits = value.replace(/\D/g, '');
      const formattedValue = digits.startsWith('91') && digits.length > 2 
        ? `+${digits.slice(0, 2)} ${digits.slice(2, 12)}` 
        : `+91 ${digits.slice(0, 10)}`;
      setFormData({ ...formData, [name]: formattedValue });
    } else {
      setFormData({ ...formData, [name]: value });
    }
    
    // Validate the field as user types
    setErrors({ ...errors, [name]: validateField(name, value) });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    // Validate all fields
    const validationErrors = {};
    Object.keys(formData).forEach(key => {
      validationErrors[key] = validateField(key, formData[key]);
    });
    setErrors(validationErrors);

    // Check if any errors exist
    if (Object.values(validationErrors).some(error => error)) return;

    setIsSubmitting(true);

    try {
      const submissionData = {
        ...formData,
        phoneno: formData.phoneno.replace(/\D/g, '') // Remove formatting
      };

      await postContactForm(submissionData);
      
      setFormData({
        name: '',
        email: '',
        phoneno: '+91 ',
        message: '',
      });
      setSubmitSuccess(true);
      setTimeout(() => setSubmitSuccess(false), 3000);
    } catch (error) {
      setErrors({ ...errors, form: 'Failed to submit. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center px-4 sm:px-6 md:px-10 lg:px-20 py-20 font-rem"
      style={{ backgroundImage: `url(${contact})` }}>
      
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
        <div className="bg-white bg-opacity-90 backdrop-blur-md mt-8 shadow-lg px-6 sm:px-8 md:px-10 py-10 sm:py-14 w-full mx-auto"
          style={{ maxWidth: 'clamp(100%, 80vw, 80%)' }}>
          
          <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-gray-800 text-center md:text-left">
            Leave us a Message
          </h3>

          {submitSuccess && (
            <div className="mb-6 p-3 bg-green-100 text-green-700 rounded text-center">
              Message sent successfully!
            </div>
          )}

          {errors.form && (
            <div className="mb-6 p-3 bg-red-100 text-red-700 rounded text-center">
              {errors.form}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name Field */}
            <div>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full border ${errors.name ? 'border-red-500' : 'border-red-300'} focus:ring-2 focus:ring-red-400 px-5 py-3 text-sm sm:text-base outline-none`}
                maxLength={255}
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  {errors.name}
                </p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email address"
                value={formData.email}
                onChange={handleChange}
                className={`w-full border ${errors.email ? 'border-red-500' : 'border-red-300'} focus:ring-2 focus:ring-red-400 px-5 py-3 text-sm sm:text-base outline-none`}
                maxLength={255}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  {errors.email}
                </p>
              )}
            </div>

            {/* Phone Field */}
            <div>
              <input
                type="tel"
                name="phoneno"
                placeholder="+91"
                value={formData.phoneno}
                onChange={handleChange}
                className={`w-full border ${errors.phoneno ? 'border-red-500' : 'border-red-300'} focus:ring-2 focus:ring-red-400 px-5 py-3 text-sm sm:text-base outline-none`}
                maxLength={14} // +91 1234567890
              />
              {errors.phoneno && (
                <p className="text-red-500 text-xs mt-1 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  {errors.phoneno}
                </p>
              )}
            </div>

            {/* Message Field */}
            <div>
              <textarea
                name="message"
                placeholder="Write to us"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className={`w-full border ${errors.message ? 'border-red-500' : 'border-red-300'} focus:ring-2 focus:ring-red-400 px-5 py-3 text-sm sm:text-base outline-none resize-none`}
              />
              {errors.message && (
                <p className="text-red-500 text-xs mt-1 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  {errors.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting || Object.values(errors).some(error => error) || !formData.name || !formData.email || !formData.phoneno || !formData.message}
              className={`w-full py-3 px-6 text-base transition-all duration-300 ${
                !isSubmitting && !Object.values(errors).some(error => error) && formData.name && formData.email && formData.phoneno && formData.message
                  ? 'bg-red-500 hover:bg-red-600 text-white'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              {isSubmitting ? 'Sending...' : 'Send'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contactus;