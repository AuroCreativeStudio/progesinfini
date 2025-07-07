import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/colourLogo.png';
import EnquireForm from './components/pages/EnquireForm';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showForm, setShowForm] = useState(false);

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
      <header className="fixed top-0 left-0 w-full z-30 px-4 sm:px-6 py-3 sm:py-4 bg-white/10 backdrop-blur-lg border-b border-white/30 shadow-lg transition-all duration-500">
        <nav className="container mx-auto flex flex-col items-center relative transition-all duration-500">

          {/* Navigation Links (Desktop) */}
          <ul className={`flex items-center justify-center space-x-4 lg:space-x-8 text-lg font-semibold font-rem text-gray-200 transition-all duration-500 ${isScrolled ? 'order-1' : 'order-none'}`}>
            <li>
              <Link
                to="/workshoplist"
                className="py-2 border-b-2 border-transparent hover:border-red-500 transition duration-300"
              >
                Workshops
              </Link>
            </li>
            <li>
              <Link
                to="/facilitatorlist"
                className="py-2 border-b-2 border-transparent hover:border-red-500 transition duration-300"
              >
                Facilitators
              </Link>
            </li>

            {/* Logo in Nav Links when Scrolled */}
            {isScrolled && (
              <li className="transition-all duration-500">
                <img
                  src={logo}
                  alt="Progress Infinity Logo"
                  className="h-10 md:h-12 object-contain transition-all duration-500"
                />
              </li>
            )}

            <li>
              <Link
                to="/about"
                className="py-2 border-b-2 border-transparent hover:border-red-500 transition duration-300"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/contactus"
                className="py-2 border-b-2 border-transparent hover:border-red-500 transition duration-300"
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Centered Large Logo (Only when not scrolled) */}
          {!isScrolled && (
            <div className="mt-4 transition-all duration-500">
              <img
                src={logo}
                alt="Progress Infinity Logo"
                className="h-20 md:h-24 object-contain transition-all duration-500"
              />
            </div>
          )}

          {/* Enquire Button (Always Visible) */}
          <div className="hidden md:block absolute right-4 top-4">
            <button
              onClick={() => setShowForm(true)}
              className="bg-red-orange hover:bg-orange-600 text-white font-semibold font-rem py-2 px-4 md:py-3 md:px-5 rounded-lg transition duration-300 block text-center"
            >
              Enquire
            </button>
          </div>
        </nav>
      </header>

      {/* Enquire Form Modal */}
      {showForm && <EnquireForm onClose={() => setShowForm(false)} />}
    </>
  );
}

export default Header;
