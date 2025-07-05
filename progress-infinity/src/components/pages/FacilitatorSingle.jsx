import React, { useEffect } from 'react';

function FacilitatorSingle({ speaker, onClose }) {
  
  useEffect(() => {
    if (speaker) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [speaker]);

  if (!speaker) return null;

  // Example: Adjust the URL based on your storage setup
  const videoUrl = speaker.video
    ? `${import.meta.env.VITE_BACKEND_URL}/storage/${speaker.video}`
    : null;

  return (
<div className="fixed inset-0 z-50 flex bg-black bg-opacity-75 backdrop-blur-sm">

      {/* Left Sticky Image Section for Large Screens */}
      <div className="hidden lg:flex w-[30%] flex-shrink-0 items-start justify-end relative">
        <div className="sticky top-0 flex items-center justify-center w-64 h-80">
          <img
            src={speaker.image}
            alt={speaker.name}
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      {/* Right Scrollable Content Section */}
      <div className="relative flex-1 h-full overflow-y-auto bg-white">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute z-10 text-3xl font-bold text-gray-800 top-4 right-4 hover:text-black"
        >
          &times;
        </button>

        <div className="p-4 sm:p-6 lg:p-12">

          {/* Name */}
          <h2 className="mb-6 text-[2.5rem] sm:text-[3rem] font-extrabold text-left">{speaker.name}</h2>

          {/* Image for Mobile Screens */}
          <div className="flex justify-center mb-6 lg:hidden">
            <img
              src={speaker.image}
              alt={speaker.name}
              className="object-cover w-40 h-40"
            />
          </div>

          {/* 2 Column Style Content */}
          <div className="space-y-12">

            {/* First Row */}
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              <div className="font-mono text-left text-[0.9rem] sm:text-[1rem] text-gray-600">
                {speaker.roleLabel || 'GRAPHIC DESIGN LEGEND'}
              </div>
              <div className="justify-start space-y-4 text-left text-[1rem] sm:text-[1.1rem] text-gray-800 lg:col-span-2">
                {/* Reserved space if needed */}
              </div>
            </div>

            {/* Second Row */}
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              <div className="font-mono text-left text-[0.9rem] sm:text-[1rem] text-gray-600">THE SPEAKER</div>
              <div className="space-y-4 text-left text-[1rem] sm:text-[1.1rem] text-gray-800 lg:col-span-2">
                {speaker.description && speaker.description.split('\n').map((para, index) => (
                  <p key={index}>{para}</p>
                ))}
              </div>
            </div>

            {/* Third Row */}
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              <div className="font-mono text-left text-[0.9rem] sm:text-[1rem] text-gray-600"></div>
              <div className="font-mono text-left text-[1rem] sm:text-[1.1rem] text-gray-600 lg:col-span-2">
                {speaker.short_description}
              </div>
            </div>

            {/* Fourth Row */}
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              <div className="font-mono text-left text-[0.9rem] sm:text-[1rem] text-gray-600">THE TALK</div>
              <div className="space-y-4 text-left text-[1rem] sm:text-[1.1rem] text-gray-800 lg:col-span-2">
                {speaker.about && speaker.about.split('\n').map((para, index) => (
                  <p key={index}>{para}</p>
                ))}
              </div>
            </div>

            {/* Video Section - Placed INSIDE the 2-column content */}
            {videoUrl && (
              <div className="mt-6">
                <video
                  width="100%"
                  height="auto"
                  controls
                  autoPlay
                  style={{ maxHeight: 400 }}
                >
                  <source src={videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            )}


          </div>

        </div>

      </div>
    </div>
  );
}

export default FacilitatorSingle;
