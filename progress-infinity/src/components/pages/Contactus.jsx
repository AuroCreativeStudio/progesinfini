import React, { useState } from 'react';
import { postContactForm } from '../../services/contactService';

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
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-4xl">
        {/* Background Shape */}
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-1/2 -z-10 aspect-[1155/678] w-[72.375rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[144.375rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>

        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">
            Contact sales
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            Aute magna irure deserunt veniam aliqua magna enim voluptate.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">

            {/* User Name */}
            <div className="sm:col-span-2">
              <label htmlFor="name" className="block text-sm font-semibold text-gray-900">
                User Name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 border border-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-sm font-semibold text-gray-900">
                Email
              </label>
              <div className="mt-2.5">
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 border border-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600"
                  required
                />
              </div>
            </div>

            {/* Phone Number */}
            <div className="sm:col-span-2">
              <label htmlFor="phoneno" className="block text-sm font-semibold text-gray-900">
                Phone number
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="phoneno"
                  id="phoneno"
                  value={formData.phoneno}
                  onChange={handleChange}
                  className="block w-full rounded-md py-2 pl-2 text-base text-gray-900 border border-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600"
                  placeholder="123-456-7890"
                />
              </div>
            </div>

            {/* Message */}
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-sm font-semibold text-gray-900">
                Message
              </label>
              <div className="mt-2.5">
                <textarea
                  name="message"
                  id="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 border border-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600"
                />
              </div>
            </div>

            {/* Policy Agreement */}
            <div className="flex gap-x-4 sm:col-span-2">
              <div className="flex h-6 items-center">
                <input
                  type="checkbox"
                  id="agree-to-policies"
                  name="agree-to-policies"
                  className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-600"
                  required
                />
              </div>
              <label htmlFor="agree-to-policies" className="text-sm text-gray-600">
                By selecting this, you agree to our{' '}
                <a href="#" className="font-semibold text-indigo-600">
                  privacy policy
                </a>.
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-10">
            <button
              type="submit"
              className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Let's talk
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contactus;
