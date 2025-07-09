import React from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/colourLogo.png';

function Footer() {
  return (
    <>
         {/* Contact Section */}
{/* <div className="w-full md:w-5/6 lg:w-3/4 mx-auto mb-8 md:mb-12 py-8 md:py-12 px-4 md:px-8 bg-transparent">
  <div className="flex flex-col items-center text-center space-y-3 md:space-y-4">

    
    <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-black">
      Get in Touch with Us
    </h2>

 
    <div className="mt-4 md:mt-6 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-2xl flex">
      <input
        type="email"
        placeholder="Your Email here"
        className="w-full border border-gray-400 px-4 py-3 text-sm md:text-base focus:outline-none bg-white text-black"
      />
      <button className="bg-black text-white px-4 md:px-6 py-3 text-sm md:text-base font-medium hover:bg-gray-800 transition">
        Subscribe
      </button>
    </div>

  </div>
</div> */}


   <footer
  className="text-white px-4 py-8"
  style={{
    backgroundImage: `radial-gradient(
      circle at center,
rgb(96, 151, 245) 0%,       /* light blue center */
rgb(43, 78, 155) 35%,      /* vibrant mid blue */
rgb(17, 40, 102) 60%,      /* deeper blue bottom ring */
rgb(23, 25, 46) 90%       /* dark navy edges */
    )`
  }}
>
  <div className="max-w-7xl mx-auto">
    {/* Logo + Quote */}
    <div className="flex flex-col items-center text-center space-y-2">
      <img src={logo} alt="Progress Infinity Logo" className="h-14 md:h-20 w-auto mb-2" />
      <p className="text-sm md:text-base text-gray-200 max-w-2xl">
        There is no end to progress and every day one can learn to do better what one does.
      </p>
    </div>

    {/* Contact + Social + Links */}
    <div className="mt-8 flex flex-col md:flex-row md:justify-between text-sm md:text-base space-y-8 md:space-y-0">

      {/* Contact Info */}
      <div className="text-center md:text-left space-y-1 text-gray-200">
        <p>+91 9894768081</p>
        <a href="mailto:getcreative@aurocreativestudio.com" className="hover:underline">
          getcreative@aurocreativestudio.com
        </a>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center items-center space-x-4 text-white text-xl">
        <a href="#"><i className="fab fa-linkedin-in hover:text-blue-400"></i></a>
        <a href="#"><i className="fab fa-x-twitter hover:text-blue-400"></i></a>
        <a href="#"><i className="fab fa-facebook-f hover:text-blue-400"></i></a>
        <a href="#"><i className="fab fa-instagram hover:text-blue-400"></i></a>
      </div>

      {/* Page Links */}
      <div className="text-center md:text-right space-y-1 text-gray-200">
        <Link to="/about" className="block hover:underline">About</Link>
        <Link to="/contactus" className="block hover:underline">Contact Us</Link>
        <Link to="/workshoplist" className="block hover:underline">Our Workshops</Link>
        <Link to="/facilitators" className="block hover:underline">Our Facilitators</Link>
      </div>
    </div>

    {/* Divider */}
    <div className="border-t border-orange-500 my-6"></div>

    {/* Bottom Text */}
    <div className="text-center text-gray-300 text-xs md:text-sm space-y-1 md:space-y-0 md:flex md:justify-center md:space-x-4">
      <span>© 2023 Progress Infinity</span>
      <span>•</span>
      <span>Developed by Auro Creative Studio</span>
      <span>•</span>
      <span>Privacy Policy</span>
    </div>
  </div>
</footer>


    </>
  );
}

export default Footer;
