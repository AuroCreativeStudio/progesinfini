import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/colourLogo.png';
import { Menu, X } from 'lucide-react'; // for hamburger icons
// import EnquireForm from './components/pages/EnquireForm';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-30 w-[calc(100%-2rem)] sm:w-[calc(100%-4rem)] px-4 sm:px-6 py-6 sm:py-8 
        bg-white/10 backdrop-blur-lg border border-white/30 shadow-lg rounded-full transition-all duration-500">

        <nav className="max-w-7xl mx-auto gap-4 flex items-center justify-between w-full">
          {/* Left nav (hidden on small) */}
          <div className="hidden md:flex items-center ml-16 space-x-16 text-lg font-semibold text-black">

            <Link to="/" className="hover:text-red-500">Home</Link>
            <Link to="/workshoplist" className="hover:text-red-500">Workshops</Link>
            <Link to="/facilitatorlist" className="hover:text-red-500">Facilitators</Link>
          </div>

          {/* Center logo - always visible */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <img src={logo} alt="Progress Infinity Logo" className="h-8 sm:h-10 md:h-12 object-contain" />
          </div>

          {/* Right nav (hidden on small) + hamburger */}
          <div className="flex items-center space-x-5">
            <div className="hidden md:flex items-center mr-16  space-x-16 text-[1rem] font-semibold text-black">
              <Link to="/about" className="hover:text-red-500">About Us</Link>
              <Link to="/blogs" className="hover:text-red-500">Blogs</Link>
              <Link to="/contactus" className="hover:text-red-500">Contact</Link>
            </div>

            {/* Burger icon (shown on small screens only) */}
            <div className="md:hidden">
              <button onClick={() => setMenuOpen(!menuOpen)} className="text-black">
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
       <div className="md:hidden fixed top-[90px] left-4 right-4 z-20 bg-white shadow-xl rounded-xl px-6 py-6 text-black text-lg font-semibold space-y-5">
          <Link to="/" onClick={() => setMenuOpen(false)} className="block hover:text-red-500">Home</Link>
          <Link to="/workshoplist" onClick={() => setMenuOpen(false)} className="block hover:text-red-500">Workshops</Link>
          <Link to="/facilitatorlist" onClick={() => setMenuOpen(false)} className="block hover:text-red-500">Facilitators</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)} className="block hover:text-red-500">About Us</Link>
          <Link to="/blogs" onClick={() => setMenuOpen(false)} className="block hover:text-red-500">Blogs</Link>
          <Link to="/contactus" onClick={() => setMenuOpen(false)} className="block hover:text-red-500">Contact</Link>
        </div>
      )}
    </>
  );
}

export default Header;
