import React, { useEffect } from 'react';
import video from '../../assets/Progres-inifni.mp4';
import logo from '../../assets/colourLogo.png';

function ComingSoon() {
  useEffect(() => {
    // Disable scroll when this page is mounted
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto'; // Restore on unmount
    };
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay content */}
      <div className="relative z-10 flex items-center justify-center h-full w-full text-white text-center px-4 bg-black bg-opacity-40">
        {/* Vertically centered content block */}
        <div className="flex flex-col items-center">
          <img
            src={logo}
            alt="Logo"
            className="w-auto max-w-[300px] md:max-w-[400px] object-contain"
          />
          <h1 className="mt-6 text-6xl sm:text-5xl md:text-7xl font-rem font-semibold">
            Coming Soon
          </h1>
        </div>
      </div>
    </section>
  );
}

export default ComingSoon;
