import React, { useEffect } from 'react';
const BASE_URL = import.meta.env.VITE_API_URL || 'http://192.168.0.102:8000';
// import image from '../../assets/card2.jpg';
// import workshopImage from '../../assets/card3.jpeg';

function Workshopsingle({ workshop, onClose }) {
  useEffect(()=>{
    if(workshop) {
      document.body.style.overflow = 'hidden';
    }
    return ()=>{
      document.body.style.overflow = 'auto';
    }
  },[workshop]);

const imageUrl = workshop.featured_image?.startsWith('http')
  ? workshop.featured_image
  : `${BASE_URL}/storage/${workshop.featured_image}`;

  console.log(imageUrl);

  return (
    <>
<div className="fixed inset-0 z-50 flex bg-black bg-opacity-75 backdrop-blur-sm">

      {/* Left Sticky Image Section for Large Screens */}
      <div className="hidden lg:flex w-[30%] flex-shrink-0 items-start justify-end relative">
        <div className="sticky top-0 flex items-center justify-center w-[350px] h-[500px]">
          <img
            src={imageUrl}
            alt={workshop.workshop_title}
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
          <h2 className="mb-6 text-[2.5rem] sm:text-[3rem] font-extrabold text-left">{workshop.workshop_title}</h2>

          {/* Image for Mobile Screens */}
          <div className="flex justify-center mb-6 lg:hidden">
            <img
              src={imageUrl}
              alt={workshop.workshop_title}
              className="object-cover w-40 h-40"
            />
          </div>

          {/* 2 Column Style Content */}
          <div className="space-y-12">

            {/* First Row */}
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              <div className="font-mono text-left text-[0.9rem] sm:text-[1rem] text-gray-600">
                {workshop.workshop_type || 'WORKSHOP'}
              </div>
              <div className="justify-start space-y-4 text-left text-[1rem] sm:text-[1.1rem] text-gray-800 lg:col-span-2">
                {/* Reserved space if needed */}
              </div>
            </div>

            {/* Second Row */}
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              <div className="font-mono text-left text-[0.9rem] sm:text-[1rem] text-gray-600">THE workshop</div>
              <div className="space-y-4 text-left text-[1rem] sm:text-[1.1rem] text-gray-800 lg:col-span-2">
                {workshop.workshop_description && workshop.workshop_description.split('\n').map((para, index) => (
                  <p key={index}>{para}</p>
                ))}
              </div>
            </div>

            {/* Third Row */}
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              <div className="font-mono text-left text-[0.9rem] sm:text-[1rem] text-gray-600"></div>
              <div className="font-mono text-left text-[1rem] sm:text-[1.1rem] text-gray-600 lg:col-span-2">
             {workshop.about_workshop && workshop.about_workshop.split('\n').map((para, index) => (
                  <p key={index}>{para}</p>
                ))}
              </div>
            </div>

            {/* Fourth Row */}
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              <div className="font-mono text-left text-[0.9rem] sm:text-[1rem] text-gray-600">THE TALK</div>
              <div className="space-y-4 text-left text-[1rem] sm:text-[1.1rem] text-gray-800 lg:col-span-2">
                {workshop.duration_weeks} Week(s)
              </div>
            </div>

            {/* Video Section - Placed INSIDE the 2-column content */}
            {/* {videoUrl && (
              <div className="mt-6">
                <video
                  width="100%"
                  height="auto"
                  controls
                  // autoPlay
                  style={{ maxHeight: 400 }}
                >
                  <source src={videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            )} */}


          </div>

        </div>

      </div>
    </div>
    </>
  );
}

export default Workshopsingle;
