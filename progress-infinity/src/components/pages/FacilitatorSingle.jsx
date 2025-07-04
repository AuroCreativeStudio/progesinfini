import React from 'react';

function FacilitatorSingle({ speaker, onClose }) {
  if (!speaker) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-end items-center">
      <div className="bg-white w-full lg:w-[80%] h-full flex relative">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-3xl font-bold text-gray-800 hover:text-black z-10"
        >
          &times;
        </button>

        {/* Left Sticky Image */}
        <div className="w-[300px] flex-shrink-0 hidden lg:block sticky top-0 h-full p-8">
          <img
            src={speaker.image}
            alt={speaker.name}
            className="w-full h-[400px] object-cover shadow-lg"
          />
        </div>

        {/* Right Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-4 lg:p-12 content-left">
          <h2 className="text-5xl lg:text-6xl font-extrabold mb-6">{speaker.name}</h2>

          <div className="text-xs font-mono text-gray-600 mb-2">
            {speaker.roleLabel || 'GRAPHIC DESIGN LEGEND'}
          </div>
          <div className="text-xs font-mono text-gray-600 mb-6">THE SPEAKER</div>

          <div className="space-y-4 text-gray-800 text-sm md:text-base leading-relaxed">
            {speaker.description && speaker.description.split('\n').map((para, index) => (
              <p key={index}>{para}</p>
            ))}
          </div>
            <div className="text-xs mt-4 font-mono text-gray-600 mb-6">{speaker.short_description}</div>

              <div className="space-y-4 text-gray-800 text-sm md:text-base leading-relaxed">
            {speaker.about && speaker.about.split('\n').map((para, index) => (
              <p key={index}>{para}</p>
            ))}
          </div>


          {/* scroll content  test */}
           <div className="space-y-4 text-gray-800 text-sm md:text-base leading-relaxed">
            {speaker.about && speaker.about.split('\n').map((para, index) => (
              <p key={index}>{para}</p>
            ))}
          </div> <div className="space-y-4 text-gray-800 text-sm md:text-base leading-relaxed">
            {speaker.about && speaker.about.split('\n').map((para, index) => (
              <p key={index}>{para}</p>
            ))}
          </div>


          {/* end */}

          
        </div>

      </div>
    </div>
  );
}

export default FacilitatorSingle;
