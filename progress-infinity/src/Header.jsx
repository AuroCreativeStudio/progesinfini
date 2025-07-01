import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/progre infini Logo white-05.png';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full text-white bg-deep-blue shadow">
      <nav className="container mx-auto flex items-center justify-between p-4 relative">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src={logo}
            alt="Progress Infinity Logo"
            className="h-10 md:h-14 w-48 md:w-72 object-contain"
          />
        </div>

        {/* Navigation Links (Desktop) */}
        <ul className="hidden md:flex space-x-4 lg:space-x-8 text-lg font-semibold font-rem">
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

        {/* Enquire Button (Always Visible) */}
        <div className="hidden md:block">
          <Link
            to="/enquire"
            className="bg-red-orange hover:bg-orange-600 text-white font-semibold font-rem py-2 px-4 md:py-3 md:px-5 rounded-lg transition duration-300 block text-center"
          >
            Enquire
          </Link>
        </div>

        {/* Hamburger Menu Button (Mobile) */}
        <button
          className="md:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Dropdown Menu (Mobile) */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-deep-blue p-4 shadow-lg z-50 md:hidden">
            <ul className="flex flex-col space-y-4 text-lg font-semibold font-rem">
              <li>
                <Link
                  to="/workshoplist"
                  className="block py-2 hover:text-orange-500"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Workshops
                </Link>
              </li>
              <li>
                <Link
                  to="/facilitatorlist"
                  className="block py-2 hover:text-orange-500"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Facilitators
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="block py-2 hover:text-orange-500"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contactus"
                  className="block py-2 hover:text-orange-500"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/enquire"
                  className="block py-2 bg-red-orange hover:bg-orange-600 text-white font-semibold rounded-lg text-center transition duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Enquire
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;
