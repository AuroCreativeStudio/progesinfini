import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import spiral from '../../assets/spinner.gif';
import logo from '../../assets/colourLogo.png';
import circle1 from '../../assets/circle1.png';
import circle4 from '../../assets/circle4.png';

function Home() {
  const [isSticky, setIsSticky] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setScrollY(currentScroll);

      // Trigger sticky nav after 3 scrolls (~300px)
      if (!isSticky && currentScroll > 300) {
        setIsSticky(true);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isSticky]);

  // Smooth fade + slide effect on intro section
  const introStyle = {
    opacity: Math.max(1 - scrollY / 300, 0),
    transform: `translateY(-${Math.min(scrollY / 6, 50)}px)`,
    transition: 'opacity 0.3s ease, transform 0.3s ease',
  };

  return (
    <>
      {/* Intro Section (visible until scrolled beyond 300px) */}
      {!isSticky && (
        <div
          style={introStyle}
          className="w-full h-screen font-rem text-black flex flex-col justify-between bg-white"
        >
          {/* Quote Section */}
          <div className="flex-grow flex flex-col items-center justify-center px-4 text-center">
            <blockquote className="text-2xl sm:text-3xl md:text-4xl italic font-medium leading-snug">
              A hero fears nothing<br />
              complains of nothing<br />
              and never gives way.
            </blockquote>
            <p className="mt-4 text-sm md:text-base ml-52 font-semibold">- The Mother</p>
          </div>

          {/* Footer Section */}
          <footer className="w-full bg-black text-white">
            <div className="w-full px-4 md:px-12 py-8 border-b border-gray-800">
              <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-center md:text-left">
                <div className="text-sm space-y-2">
                  <p>
                    Unlock Your Potential. Join a Community<br />
                    of Innovators Making Dreams a Reality!
                  </p>
                  <Link to="/about" className="text-red-400 hover:text-red-300 font-semibold">
                    Read More
                  </Link>
                </div>
                <div className="flex flex-col items-center">
                  <img src={spiral} alt="Spiral Logo" className="w-32 h-32 object-contain" />
                </div>
                <div className="text-center md:text-right">
                  <p className="text-purple-500 font-semibold tracking-wide">Progress Infini</p>
                </div>
              </div>
            </div>

            {/* Nav Bar at Bottom Initially */}
            <div className="w-full py-4 bg-black">
              <div className="max-w-5xl mx-auto flex flex-wrap justify-between items-center px-4 md:px-0 gap-y-4">
                <Link to="/workshoplist" className="hover:text-red-400 text-sm md:text-base px-2">Workshop</Link>
                <Link to="/facilitatorlist" className="hover:text-red-400 text-sm md:text-base px-2">Facilitator</Link>
                <Link to="/" className="px-2">
                  <img src={logo} alt="Progress Infini Logo" className="h-6 md:h-8" />
                </Link>
                <Link to="/about" className="hover:text-red-400 text-sm md:text-base px-2">About</Link>
                <Link to="/contactus" className="hover:text-red-400 text-sm md:text-base px-2">Contact</Link>
              </div>
            </div>
          </footer>
        </div>
      )}

      {/* Sticky Header after scroll > 300px */}
      {isSticky && (
        <div className="fixed top-0 w-full bg-black text-white py-4 z-50 shadow-md">
          <div className="max-w-5xl mx-auto flex flex-wrap justify-between items-center px-4 md:px-0 gap-y-4">
            <Link to="/workshoplist" className="hover:text-red-400 text-sm md:text-base px-2">Workshop</Link>
            <Link to="/facilitatorlist" className="hover:text-red-400 text-sm md:text-base px-2">Facilitator</Link>
            <Link to="/" className="px-2">
              <img src={logo} alt="Progress Infini Logo" className="h-6 md:h-8" />
            </Link>
            <Link to="/about" className="hover:text-red-400 text-sm md:text-base px-2">About</Link>
            <Link to="/contactus" className="hover:text-red-400 text-sm md:text-base px-2">Contact</Link>
          </div>
        </div>
      )}

      {/* Main Content */}

<div className={`w-full ${isSticky ? 'pt-2' : ''}`}>
  <section className="w-full overflow-hidden">
    <div className="grid grid-cols-1 md:grid-cols-2 w-full">
      
      {/* 1st Row - 1st Column */}
      <div className="w-full">
        <img
          src={circle1}
          alt="Circle 1"
          className="w-full object-contain"
        />
      </div>

      {/* 1st Row - 2nd Column */}
      <div className="w-full">
       
      </div>

      {/* 2nd Row - 1st Column */}
      <div className="w-full">
       
      </div>

      {/* 2nd Row - 2nd Column */}
      <div className="w-full">
        <img
          src={circle4}
          alt="Circle 4"
          className="w-full object-contain"
        />
      </div>

    </div>
  </section>
</div>





    </>
  );
}

export default Home;
