import React from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/colourLogo.png';
import footer from './assets/footer.png';
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
  className="w-full bg-cover bg-center bg-no-repeat text-white px-6 py-12"
  style={{
    backgroundImage: `url(${footer})`,
  }}
>
  <div className="max-w-8xl mx-auto">
    {/* Logo + Quote */}
    <div className="flex flex-col items-center text-center space-y-4">
      <img src={logo} alt="Progress Infinity Logo" className="h-20 md:h-24 w-auto mb-2" />
      <p className="text-base md:text-lg text-gray-200 max-w-4xl">
        There is no end to progress and every day one can learn to do better what one does.
      </p>
    </div>

    {/* Contact + Social + Links */}
    <div className="mt-10 flex flex-col md:flex-row md:justify-between text-base md:text-lg space-y-10 md:space-y-0">
      {/* Contact Info */}
      <div className="text-center md:text-left space-y-2 text-gray-200">
        <p>+91 9894768081</p>
        <a href="mailto:getcreative@aurocreativestudio.com" className="hover:underline">
          getcreative@aurocreativestudio.com
        </a>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center items-center space-x-6 text-white text-2xl">
        <a href="#"><i className="fab fa-linkedin-in hover:text-blue-400"></i></a>
        <a href="#"><i className="fab fa-x-twitter hover:text-blue-400"></i></a>
        <a href="#"><i className="fab fa-facebook-f hover:text-blue-400"></i></a>
        <a href="#"><i className="fab fa-instagram hover:text-blue-400"></i></a>
      </div>

      {/* Page Links */}
      <div className="text-left text-gray-200">
        <div className="grid grid-cols-2 gap-5 md:gap-8">
          <Link to="/about" className="block hover:underline">About</Link>
          <Link to="/contactus" className="block hover:underline">Contact Us</Link>
          <Link to="/workshoplist" className="block hover:underline">Our Workshops</Link>
          <Link to="/facilitators" className="block hover:underline">Our Facilitators</Link>
          <Link to="/retreat" className="block hover:underline">Retreat</Link>
          <Link to="/become-a-partner" className="block hover:underline col-span-2 md:col-span-1">
            Become a Partner
          </Link>
        </div>
      </div>
    </div>

    {/* Divider */}
    <div className="border-t border-orange-500 my-8"></div>

    {/* Bottom Text */}
    <div className="text-center text-gray-300 text-sm md:text-base space-y-2 md:space-y-0 md:flex md:justify-center md:space-x-6">
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
