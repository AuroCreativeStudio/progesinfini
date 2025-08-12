import React, { useEffect, useState } from 'react';
const BASE_URL = import.meta.env.VITE_API_URL || 'http://192.168.0.102:8000';
import EnquireForm from '../pages/EnquireForm';

function Workshopsingle({ workshop, onClose }) {
  const [showEnquireForm, setShowEnquireForm] = useState(false);
  
  useEffect(() => {
    if(workshop) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'auto';
    }
  }, [workshop]);

  const imageUrl = workshop.featured_image?.startsWith('http')
    ? workshop.featured_image
    : `${BASE_URL}/storage/${workshop.featured_image}`;

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
            className="fixed z-50 text-3xl font-bold text-gray-800 top-4 right-4 hover:text-black hover:scale-110 transition-transform duration-200"
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
                  {/* Content here */}
                </div>
              </div>

              {/* Second Row */}
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                <div className="font-mono text-left text-[0.9rem] sm:text-[1rem] text-gray-600">THE WORKSHOP</div>
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
                <div className="font-mono text-left text-[0.9rem] sm:text-[1rem] text-gray-600">DURATION</div>
                <div className="space-y-4 text-left text-[1rem] sm:text-[1.1rem] text-gray-800 lg:col-span-2">
                  {workshop.duration_weeks} Week(s)
                </div>
              </div>

              {/* Enquire Button */}
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                <div className="font-mono text-left text-[0.9rem] sm:text-[1rem] text-gray-600"></div>
                <div className="text-left lg:col-span-2">
                  <button
                    onClick={() => setShowEnquireForm(true)}
                    className="px-6 py-3 text-sm font-medium tracking-wide text-white bg-[#f04e23] hover:bg-orange-600 transition-colors duration-200"
                  >
                    Enquire Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {showEnquireForm && (
       <EnquireForm 
  onClose={() => setShowEnquireForm(false)}
  showWorkshopField={true}
  workshopId={workshop.id}
  workshopTitle={workshop.workshop_title}
/>
      )}
    </>
  );
}

export default Workshopsingle;