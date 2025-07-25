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
  className="w-full bg-cover bg-center bg-no-repeat text-white px-4 sm:px-6 md:px-8 lg:px-16 xl:px-18 2xl:px-24 py-6 sm:py-4 md:py-4 lg:py-10"
  style={{ backgroundImage: `url(${footer})` }}
>
  <div className="mx-auto max-w-screen-xl lg:max-w-[90%] xl:max-w-[95%] 2xl:max-w-[90%] space-y-6 sm:space-y-4 md:space-y-4 lg:space-y-10">
    {/* Logo + Quote */}
    <div className="flex flex-col items-center text-center space-y-3 sm:space-y-2 md:space-y-2 lg:space-y-4">
      <Link to="/">
        <img
          src={logo}
          alt="Progress Infinity Logo"
          className="h-14 sm:h-12 md:h-12 lg:h-20 w-auto mb-1"
        />
      </Link>
      <p className="text-xs sm:text-xs md:text-sm lg:text-base text-gray-200 max-w-3xl px-2">
        There is no end to progress and every day one can learn to do better what one does.
      </p>
    </div>

    {/* Contact + Social + Links */}
    <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-6 md:space-y-0 md:space-x-8 lg:space-x-10">
      {/* Contact Info */}
      <div className="text-center md:text-left text-gray-200 text-xs sm:text-xs md:text-sm space-y-1">
        <p>+91 9894768081</p>
        <a href="mailto:getcreative@aurocreativestudio.com" className="hover:underline">
          getcreative@aurocreativestudio.com
        </a>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center items-center space-x-4 text-lg sm:text-base md:text-base lg:text-xl">
        {/* LinkedIn */}
        <a href="#" aria-label="LinkedIn" className="hover:text-blue-400 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-current" viewBox="0 0 24 24">
            <path d="M4.98 3.5C4.98 4.88 3.87 6 2.49 6S0 4.88 0 3.5 1.11 1 2.49 1s2.49 1.12 2.49 2.5zM.5 8h4V24h-4V8zM8 8h3.8v2.2h.05c.53-.94 1.82-1.94 3.75-1.94C20.1 8.26 21 10.58 21 14.11V24h-4v-8.57c0-2.05-.73-3.45-2.57-3.45-1.4 0-2.23.94-2.6 1.85-.14.34-.17.81-.17 1.28V24h-4V8z" />
          </svg>
        </a>

        {/* Twitter */}
        <a href="#" aria-label="Twitter" className="hover:text-blue-400 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-current" viewBox="0 0 24 24">
            <path d="M24 4.56c-.89.39-1.84.65-2.84.77a4.93 4.93 0 002.15-2.72c-.95.56-2 .97-3.13 1.19a4.92 4.92 0 00-8.38 4.49A13.94 13.94 0 013.17 3.1 4.91 4.91 0 004.2 9.86a4.9 4.9 0 01-2.23-.62v.06a4.92 4.92 0 003.95 4.83c-.42.11-.86.17-1.32.17-.32 0-.63-.03-.93-.08a4.92 4.92 0 004.6 3.42A9.87 9.87 0 010 19.54a13.94 13.94 0 007.55 2.21c9.05 0 14-7.5 14-14V7.1a10.08 10.08 0 002.45-2.54l.05-.1z"/>
          </svg>
        </a>

        {/* Facebook */}
        <a href="#" aria-label="Facebook" className="hover:text-blue-400 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-current" viewBox="0 0 24 24">
            <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.326v21.348C0 23.403.597 24 1.326 24h11.49V14.708H9.692v-3.622h3.124V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.796.143v3.24l-1.919.001c-1.504 0-1.794.715-1.794 1.763v2.31h3.587l-.467 3.622h-3.12V24h6.116C23.403 24 24 23.403 24 22.674V1.326C24 .597 23.403 0 22.675 0z"/>
          </svg>
        </a>

        {/* Instagram */}
        <a href="#" aria-label="Instagram" className="hover:text-blue-400 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-current" viewBox="0 0 24 24">
            <path d="M12 2.2c3.2 0 3.584.012 4.85.07 1.17.056 1.97.25 2.43.42a4.9 4.9 0 011.77 1.07c.52.52.9 1.13 1.07 1.77.17.46.36 1.26.42 2.43.06 1.27.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.25 1.97-.42 2.43a4.9 4.9 0 01-1.07 1.77 4.9 4.9 0 01-1.77 1.07c-.46.17-1.26.36-2.43.42-1.27.06-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.97-.25-2.43-.42a4.9 4.9 0 01-1.77-1.07 4.9 4.9 0 01-1.07-1.77c-.17-.46-.36-1.26-.42-2.43C2.21 15.784 2.2 15.4 2.2 12s.012-3.584.07-4.85c.056-1.17.25-1.97.42-2.43a4.9 4.9 0 011.07-1.77 4.9 4.9 0 011.77-1.07c.46-.17 1.26-.36 2.43-.42C8.416 2.21 8.8 2.2 12 2.2zm0-2.2C8.736 0 8.332.013 7.052.07 5.765.127 4.77.342 3.97.64a7.09 7.09 0 00-2.56 1.64 7.09 7.09 0 00-1.64 2.56c-.3.8-.51 1.8-.57 3.08C.013 8.332 0 8.736 0 12c0 3.264.013 3.668.07 4.948.057 1.287.27 2.282.57 3.082a7.09 7.09 0 001.64 2.56 7.09 7.09 0 002.56 1.64c.8.3 1.8.51 3.08.57 1.28.057 1.684.07 4.948.07s3.668-.013 4.948-.07c1.287-.057 2.282-.27 3.082-.57a7.09 7.09 0 002.56-1.64 7.09 7.09 0 001.64-2.56c.3-.8.51-1.8.57-3.08.057-1.28.07-1.684.07-4.948s-.013-3.668-.07-4.948c-.057-1.287-.27-2.282-.57-3.082a7.09 7.09 0 00-1.64-2.56 7.09 7.09 0 00-2.56-1.64c-.8-.3-1.8-.51-3.08-.57C15.668.013 15.264 0 12 0zM12 5.8A6.2 6.2 0 105.8 12 6.2 6.2 0 0012 5.8zm0 10.2A4 4 0 1116 12a4 4 0 01-4 4zm6.4-10.9a1.44 1.44 0 11-1.44-1.44 1.44 1.44 0 011.44 1.44z"/>
          </svg>
        </a>
      </div>

      {/* Page Links */}
      <div className="text-gray-200 text-center md:text-left text-xs sm:text-xs md:text-sm w-full sm:w-auto">
        <div className="grid grid-cols-2 gap-x-6 gap-y-2">
          {/* Column 1 */}
          <div className="flex flex-col space-y-1 text-left">
            <Link to="/about" className="hover:underline">About</Link>
            <Link to="/workshoplist" className="hover:underline">Our Workshops</Link>
            <Link to="/retreat" className="hover:underline">Retreat</Link>
          </div>
          {/* Column 2 */}
          <div className="flex flex-col space-y-1 text-left">
            <Link to="/contactus" className="hover:underline">Contact Us</Link>
            <Link to="/facilitators" className="hover:underline">Our Facilitators</Link>
            <Link to="/become-a-partner" className="hover:underline">Become a Partner</Link>
          </div>
        </div>
      </div>
    </div>

    {/* Divider */}
    <div className="border-t border-orange-500"></div>

    {/* Bottom Text */}
    <div className="text-center text-gray-300 text-xs sm:text-xs md:text-sm flex flex-col md:flex-row md:justify-center md:items-center space-y-2 md:space-y-0 md:space-x-4 lg:space-x-6">
      <span>© 2023 Progress Infinity</span>
      <span className="hidden md:inline">•</span>
      <span>Developed by Auro Creative Studio</span>
      <span className="hidden md:inline">•</span>
      <a href="/privacy-policy" className="hover:underline">
        Privacy Policy
      </a>
    </div>
  </div>
</footer>

    </>
  );
}

export default Footer;
