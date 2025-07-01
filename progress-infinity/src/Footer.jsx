import React from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/progre infini Logo white-05.png';

function Footer() {
  return (
    <>
         {/* Contact Section */}
      <div className="relative w-full md:w-5/6 lg:w-3/4 bg-[#222849] rounded-2xl
       text-white mx-auto mb-8 md:mb-12 py-8 md:py-12 px-4 md:px-8 overflow-hidden">
        {/* Background corner design */}
        <div className="absolute top-0 right-0 w-0 h-0 border-t-[120px] md:border-t-[180px] lg:border-t-[240px] border-t-[#b8c1ec] border-l-[90px] md:border-l-[135px] lg:border-l-[180px] border-l-transparent"></div>

        {/* Content */}
        <div className="flex flex-col items-center text-center space-y-3 md:space-y-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold font-rem">
            Want to Know More About the Courses?
          </h2>
          <p className="text-gray-100 text-sm md:text-base">Get in Touch With Us</p>

          {/* Contact Form */}
          <div className="relative mt-4 md:mt-6 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-2xl">
            {/* Input Field */}
            <input
              type="email"
              placeholder="Email Us"
              className="w-full px-3 py-2 md:px-4 md:py-3 rounded-lg
               bg-[#5a5f85] text-white focus:outline-none text-sm md:text-base"
            />

            {/* Overlapping Button */}
            <button className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-red-orange hover:bg-orange-600 text-white font-semibold px-3 py-2 md:px-6 md:py-3 rounded-lg
             text-sm md:text-base">
              Register Interest
            </button>
          </div>
        </div>
      </div>
    <footer className="bg-deep-blue text-white pt-10 pb-4 w-full">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-8 lg:space-y-0">
        
        {/* Left Section */}
        <div className="w-full lg:w-1/3">
          <div className="flex items-center space-x-2 mb-4">
            <img src={logo} alt="Progress Infinity Logo" className="h-20 w-auto" />
          </div>
          <ul className="text-gray-300 text-base space-y-2">
            <li className="pr-0 md:pr-36">+91 9894768081</li>
            <li>
              <a href="mailto:getcreative@aurocreativestudio.com" className="hover:underline break-all">
                getcreative@aurocreativestudio.com
              </a>
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-2/3 flex flex-col items-start lg:items-end">
          <div className="text-gray-300 text-base lg:text-lg max-w-3xl">
            <p className="italic text-start lg:text-end">There is no end to progress and every day one can learn to do better what one does.</p>
            <p className="mt-2 text-start lg:text-end">- The Mother</p>
          </div>

          {/* Links */}
          <div className="flex flex-col sm:flex-row flex-wrap sm:space-x-6 mt-4 text-sm font-semibold space-y-2 sm:space-y-0">
            <Link to="/about" className="hover:underline">About</Link>
            <Link to="/contactus" className="hover:underline">Contact Us</Link>
            <Link to="/workshoplist" className="hover:underline">Our Workshops</Link>
            <Link to="/facilitators" className="hover:underline">Our Facilitators</Link>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t-2 border-orange-500 mt-12 pt-4 text-center text-gray-400 text-sm md:text-base flex flex-col md:flex-row justify-center space-y-2 md:space-y-0 md:space-x-6 max-w-7xl mx-auto px-4">
        <span>© 2023 Progress Infinity</span>
        <span>Developed by Auro Creative Studio</span>
        <span>Privacy Policy</span>
      </div>
    </footer>
    </>
  );
}

export default Footer;
