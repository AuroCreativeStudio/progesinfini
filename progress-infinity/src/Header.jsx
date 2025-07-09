import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/colourLogo.png';
import EnquireForm from './components/pages/EnquireForm';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  // const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className="absolute top-8 left-1/2 transform -translate-x-1/2 z-30 w-[calc(100%-6rem)] px-4 sm:px-6 py-2 sm:py-3 
  bg-white/10 backdrop-blur-lg border border-white/30 shadow-lg rounded-full transition-all duration-500">


  <nav className="container mx-auto flex flex-col items-center relative transition-all duration-500">
    
    {/* Navigation Links */}
    <ul className={`flex items-center justify-center space-x-4 lg:space-x-8 text-lg font-semibold font-rem text-black transition-all duration-500 ${isScrolled ? 'order-1' : 'order-none'}`}>
      
      <li>
        <Link to="/" className="py-2 border-b-2 border-transparent hover:border-red-500 transition duration-300">Home</Link>
      </li>
      <li>
        <Link to="/workshoplist" className="py-2 border-b-2 border-transparent hover:border-red-500 transition duration-300">Workshops</Link>
      </li>
      <li>
        <Link to="/facilitatorlist" className="py-2 border-b-2 border-transparent hover:border-red-500 transition duration-300">Facilitators</Link>
      </li>

      {/* Center Logo */}
      <li className="transition-all duration-500">
        <img src={logo} alt="Progress Infinity Logo" className="h-10 md:h-12" />
      </li>

      <li>
        <Link to="/about" className="py-2 border-b-2 border-transparent hover:border-red-500 transition duration-300">About Us</Link>
      </li>
      <li>
        <Link to="/blogs" className="py-2 border-b-2 border-transparent hover:border-red-500 transition duration-300">Blogs</Link>
      </li>
      <li>
        <Link to="/contactus" className="py-2 border-b-2 border-transparent hover:border-red-500 transition duration-300">Contact</Link>
      </li>
    </ul>

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


 
      {/* {showForm && <EnquireForm onClose={() => setShowForm(false)} />} */}
    </>
  );
}

export default Header;
