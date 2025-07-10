import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/colourLogo.png';
import EnquireForm from './components/pages/EnquireForm';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  // const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-30 w-[calc(100%-2rem)] sm:w-[calc(100%-4rem)] px-4 sm:px-6 py-2 sm:py-3 
        bg-white/10 backdrop-blur-lg border border-white/30 shadow-lg rounded-full transition-all duration-500">

        <nav className="max-w-7xl mx-auto flex flex-wrap justify-center items-center gap-y-4 gap-x-6 sm:gap-x-10 md:gap-x-12 transition-all duration-500">

          {/* Navigation Links Left */}
          <div className="flex flex-wrap justify-center items-center space-x-3 sm:space-x-5 md:space-x-6 text-[0.95rem] md:text-[1.1rem] font-semibold font-rem text-black">
            <Link to="/" className="py-1 border-b-2 border-transparent hover:border-red-500 transition duration-300">Home</Link>
            <Link to="/workshoplist" className="py-1 border-b-2 border-transparent hover:border-red-500 transition duration-300">Workshops</Link>
            <Link to="/facilitatorlist" className="py-1 border-b-2 border-transparent hover:border-red-500 transition duration-300">Facilitators</Link>
          </div>

          {/* Logo in center (shrinks on small devices) */}
          <div className="mx-4 transition-all duration-500">
            <img src={logo} alt="Progress Infinity Logo" className="h-8 sm:h-10 md:h-12 object-contain" />
          </div>

          {/* Navigation Links Right */}
          <div className="flex flex-wrap justify-center items-center space-x-3 sm:space-x-5 md:space-x-6 text-[0.95rem] md:text-[1.1rem] font-semibold font-rem text-black">
            <Link to="/about" className="py-1 border-b-2 border-transparent hover:border-red-500 transition duration-300">About Us</Link>
            <Link to="/blogs" className="py-1 border-b-2 border-transparent hover:border-red-500 transition duration-300">Blogs</Link>
            <Link to="/contactus" className="py-1 border-b-2 border-transparent hover:border-red-500 transition duration-300">Contact</Link>
          </div>

          {/* Enquire Button */}
          {/* <div className="hidden md:block absolute right-4 top-0">
            <button
              onClick={() => setShowForm(true)}
              className="bg-red-orange hover:bg-orange-600 text-white font-semibold font-rem py-2 mb-2 px-4 md:py-3 md:px-5 rounded-lg transition duration-300"
            >
              Enquire
            </button>
          </div> */}
        </nav>
      </header>

      {/* Enquire Modal */}
      {/* {showForm && <EnquireForm onClose={() => setShowForm(false)} />} */}
    </>
  );
}

export default Header;
