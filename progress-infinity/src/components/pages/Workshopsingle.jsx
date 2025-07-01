import React from 'react';
import { FiPlay } from 'react-icons/fi'; 
import image from '../../assets/card2.jpg';
import workshopImage from '../../assets/card3.jpeg';

function Workshopsingle() {
  return (
    <>
    {/* Feature Image */}
      <div
        className="relative w-full h-[80vh] bg-cover bg-center flex items-center justify-center px-4 md:px-16"
        style={{ backgroundImage: `url(${image})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-between w-full mx-auto md:flex-row max-w-7xl">
          
          {/* Text and Preview */}
          <div className="max-w-2xl mb-8 space-y-6 text-white md:mb-0">
            <h1 className="text-3xl font-bold leading-tight md:text-5xl">
              Human-Centered Systems<br />Thinking Course
            </h1>
            <p className="text-lg font-medium md:text-xl">
              A Holistic approach to problem solving<br />Starts with people
            </p>
          </div>
          <div>
            <button
              className="px-6 py-3 font-semibold text-white transition duration-300 rounded-lg bg-red-orange mt-72"
            >
              Register Interest
            </button>
          </div>
        </div>
      </div>
      {/* content */}
    <div className="flex justify-center py-10 bg-gray-50">
    
      <div className="relative grid w-full grid-cols-1 gap-8 px-24 max-w-7xl md:grid-cols-3">

   
        <div className="absolute top-0 left-0 h-full w-[1px] bg-gray-300" />

        <div className="absolute top-0 right-0 h-full w-[1px] bg-gray-300" />

     
        <div className="space-y-6 md:col-span-2">
          <p className="text-lg leading-relaxed text-gray-700 contant justify">
            In a world saturated with information and noise, the ability to think clearly, deeply, and originally is a rare and vital skill.
            This course is an invitation to rediscover thinking not as a mechanical process, but as a living, creative act — one that can transform
            the way we engage with ourselves, others, and the world around us. Through dialogues, exercises, and experiential sessions, participants
            will explore different modes of thought — analytical, intuitive, critical, reflective — and learn how to balance rigor with openness,
            structure with silence.
          </p>

          {/* Divider */}
          <hr className="border-gray-300" />

          {/* Workshop Description */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold">Workshop Description</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="w-3 h-3 mt-2 mr-3 bg-orange-500 rounded-full"></span>
                <p>In a world saturated with information and noise, the ability to think clearly, deeply, and originally is a rare and vital skill.</p>
              </li>
              <li className="flex items-start">
                <span className="w-3 h-3 mt-2 mr-3 bg-orange-500 rounded-full"></span>
                <p>A Holistic approach to problem solving - Starts with people.</p>
              </li>
              <li className="flex items-start">
                <span className="w-3 h-3 mt-2 mr-3 bg-orange-500 rounded-full"></span>
                <p>A Holistic approach to problem solving - Starts with people.</p>
              </li>
            </ul>
          </div>

          {/* Skills You'll Gain (Title Only) */}
          <h2 className="pt-4 text-xl font-bold">Skills You’ll Gain</h2>
        </div>

        {/* Right Content */}
        <div className="space-y-6">
          <img src={workshopImage} alt="Workshop" className="object-cover w-full h-auto rounded-lg" />

          <div className="space-y-4 text-lg">
            <div className="flex justify-between">
              <span className="font-bold text-gray-700">Format:</span>
              <span className="font-semibold text-gray-900">In Person</span>
            </div>
            <div className="flex justify-between">
              <span className="font-bold text-gray-700">Duration:</span>
              <span className="font-semibold text-gray-900">5 Weeks</span>
            </div>
            <div className="flex justify-between">
              <span className="font-bold text-gray-700">Time:</span>
              <span className="font-semibold text-gray-900">4 Hours/Week</span>
            </div>
          </div>

          <button className="w-full py-3 text-white transition bg-orange-500 rounded hover:bg-orange-600">
            Register Interest
          </button>
        </div>
      </div>
    </div>
    </>
  );
}

export default Workshopsingle;
