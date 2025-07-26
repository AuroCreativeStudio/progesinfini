import React, { useEffect } from 'react';
const BASE_URL = import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000';

function FacilitatorSingle({ speaker, onClose, onNavigate, prevSpeaker, nextSpeaker }) {
  useEffect(() => {
    if (speaker) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [speaker]);

  if (!speaker) return null;

  const videoUrl = speaker.video
    ? `${BASE_URL}/storage/${speaker.video}`
    : null;

  let gallery = [];
  try {
    const parsed = JSON.parse(speaker.gallery);
    if (Array.isArray(parsed)) {
      gallery = parsed.map((img) => `${BASE_URL}/storage/${img}`);
    }
  } catch (e) {
    console.error('Failed to parse gallery JSON:', e);
  }

  return (
    <div className="fixed inset-0 z-50 flex bg-black bg-opacity-75 backdrop-blur-sm">

      {/* Left Sticky Image Section */}
      <div className="hidden lg:flex w-[30%] flex-shrink-0 items-start justify-end relative">
        <div className="sticky top-0 flex items-center justify-center w-[350px] h-[500px]">
          <img
            src={speaker.image}
            alt={speaker.name}
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      {/* Right Scrollable Content Section */}
      <div className="relative flex-1 h-full overflow-y-auto bg-white">

       {/* Close Button - Sticky/Fixed Version */}
<button
  onClick={onClose}
  className="fixed z-50 text-3xl font-bold text-gray-800 top-4 right-4 hover:text-black hover:scale-110 transition-transform duration-200"
>
  &times;
</button>

        <div className="p-4 sm:p-6 lg:p-12">

          {/* Name */}
          <h2 className="mb-6 text-[2.5rem] sm:text-[3rem] font-extrabold text-left uppercase">
  {speaker.name}
</h2>


          {/* Mobile Image */}
          <div className="flex justify-center mb-6 lg:hidden">
            <img
              src={speaker.image}
              alt={speaker.name}
              className="object-cover w-40 h-40"
            />
          </div>

          {/* Details Section */}
          <div className="space-y-12">

            {/* Role */}
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              <div className="font-mono text-left text-[0.9rem] text-gray-600">
                {speaker.roleLabel || 'GRAPHIC DESIGN LEGEND'}
              </div>
            </div>

            {/* Description */}
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              <div className="font-mono text-left text-[0.9rem] text-gray-600">THE SPEAKER</div>
              <div className="space-y-4 text-left text-[1rem] text-gray-800 lg:col-span-2">
                {speaker.description?.split('\n').map((para, index) => (
                  <p key={index}>{para}</p>
                ))}
              </div>
            </div>

            {/* Short Description */}
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              <div></div>
              <div className="font-mono text-left text-[1rem] text-gray-600 lg:col-span-2">
                {speaker.short_description}
              </div>
            </div>

            {/* About */}
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              <div className="font-mono text-left text-[0.9rem] text-gray-600">THE TALK</div>
              <div className="space-y-4 text-left text-[1rem] text-gray-800 lg:col-span-2">
                {speaker.about?.split('\n').map((para, index) => (
                  <p key={index}>{para}</p>
                ))}
              </div>
            </div>

            {/* Video */}
            {videoUrl && (
              <div className="mt-6 max-w-4xl mx-auto">
                <video
                  width="100%"
                  height="auto"
                  controls
                  className="w-full max-h-[400px] rounded-md shadow-md"
                >
                  <source src={videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            )}

            {/* Gallery */}
            {gallery.length > 0 && (
              <div className="mt-10 max-w-4xl mx-auto">
                <h3 className="mb-4 font-mono text-lg text-gray-700 uppercase">Gallery</h3>
                <div className="space-y-6">
                  {gallery.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt={`Gallery ${index + 1}`}
                      className="w-full object-cover rounded-lg shadow-sm hover:scale-[1.01] transition-transform duration-300"
                    />
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Prev / Next Navigation */}
      <div className="mt-16 border-t pt-8 flex justify-between items-center px-4 sm:px-6 lg:px-12">

  {/* Prev Speaker (left side) */}
  {prevSpeaker ? (
    <div
      className="flex items-center space-x-4 cursor-pointer group"
      onClick={() => onNavigate('prev')}
    >
      <div className="flex flex-col items-center">
        <span className="text-2xl font-bold text-[#0D0D28] mb-2">PREV</span>
        <img
          src={`${BASE_URL}/storage/${prevSpeaker.image}`}
          alt={prevSpeaker.name}
          className="w-28 h-32 object-cover grayscale group-hover:grayscale-0 transition duration-300"
        />
      </div>
      <span className="font-bold mt-32 text-[#0D0D28]">{prevSpeaker.name.toUpperCase()}</span>
    </div>
  ) : <div></div>}

  {/* Next Speaker (right side) */}
  {nextSpeaker ? (
    <div
      className="flex items-center space-x-4 cursor-pointer group"
      onClick={() => onNavigate('next')}
    >
      <span className="font-bold mt-32 text-[#0D0D28]">{nextSpeaker.name.toUpperCase()}</span>
      <div className="flex flex-col items-center">
        <span className="text-2xl font-bold text-[#0D0D28] mb-2">NEXT</span>
        <img
          src={`${BASE_URL}/storage/${nextSpeaker.image}`}
          alt={nextSpeaker.name}
          className="w-28 h-32 object-cover grayscale group-hover:grayscale-0 transition duration-300"
        />
      </div>
    </div>
  ) : <div></div>}

</div>


        </div>
      </div>
    </div>
  );
}

export default FacilitatorSingle;
