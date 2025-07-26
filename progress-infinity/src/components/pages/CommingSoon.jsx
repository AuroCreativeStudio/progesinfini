import React, { useEffect } from 'react';
import bgImage from '../../assets/contact.png';
import logo from '../../assets/colourLogo.png';

function ComingSoon() {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <section
      className="relative h-screen w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay (optional for darkening background) */}
      <div className="absolute inset-0 z-0"></div>

      {/* Top Centered Logo */}
      <div className="absolute top-20 sm:top-28 md:top-32 lg:top-36 2xl:top-44 w-full flex justify-center">
        <img
          src={logo}
          alt="Logo"
          className="w-auto 
                     max-w-[180px] 
                     sm:max-w-[240px] 
                     md:max-w-[280px] 
                     lg:max-w-[320px] 
                     xl:max-w-[340px] 
                     2xl:max-w-[380px] 
                     object-contain"
        />
      </div>

      {/* Centered Text */}
      <div className="h-full flex items-center justify-center z-10 relative px-4">
        <h1 className="text-white 
                       text-3xl 
                       sm:text-5xl 
                       md:text-6xl 
                       lg:text-6xl 
                       xl:text-7xl 
                       2xl:text-7xl 
                       text-center 
                       font-rem mb-12">
          Unfolding soon. Stay with us.
        </h1>
      </div>
    </section>
  );
}

export default ComingSoon;
