import React, { useEffect, useState } from 'react';
import { fetchWorkshop } from '../../services/workshopService';
import video from '../../assets/download.mp4';
import Workshopsingle from './Workshopsingle';

const BASE_URL = 'http://127.0.0.1:8000';

function Workshoplist() {
  const [workshops, setWorkshops] = useState([]);
  const [selectedWorkshop, setSelectedWorkshop] = useState(null);

  // Filter states
  const [titleFilter, setTitleFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [priceFilter, setPriceFilter] = useState('');

  useEffect(() => {
    const getWorkshops = async () => {
      try {
        const data = await fetchWorkshop();
        setWorkshops(data.data);
      } catch (error) {
        console.error('Failed to load workshops:', error);
      }
    };

    getWorkshops();
  }, []);

  // Apply filtering logic
  const filteredWorkshops = workshops.filter((workshop) =>
    (titleFilter ? workshop.workshop_title === titleFilter : true) &&
    (typeFilter ? workshop.workshop_type === typeFilter : true) &&
    (priceFilter ? workshop.price == priceFilter : true)
  );

  return (
    <>
      {/* Workshop Detail Overlay */}
      {selectedWorkshop && (
        <Workshopsingle
          workshop={{
            ...selectedWorkshop,
            featured_image: `${BASE_URL}/storage/${selectedWorkshop.featured_image}`,
          }}
          onClose={() => setSelectedWorkshop(null)}
        />
      )}

      {/* Background Video Section */}
      <div className="relative w-full h-[700px] overflow-hidden">

        <video
          className="absolute top-0 left-0 object-cover w-full h-full"
          autoPlay
          loop
          muted
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/30 via-transparent to-purple-500/30"></div>

        <div className="relative z-10 flex flex-col justify-center h-full px-4 text-white sm:px-8 md:px-20">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="font-mono text-sm">DIGITAL</div>
            <div className="font-mono text-sm">DESIGN</div>
            <div className="font-mono text-sm">DAYS</div>
            <div className="font-mono text-sm">PALERMO</div>
            <div className="font-mono text-sm">2025</div>
          </div>
          <div className="mt-6 md:mt-10">
            <h1 className="text-5xl font-extrabold leading-tight sm:text-6xl md:text-7xl lg:text-9xl">
              WORKSHOP
              <br />
              PROGRAM
            </h1>
          </div>
          <p className="max-w-lg mt-4 text-sm font-light md:mt-8 sm:text-base md:text-lg">
            Join hands-on workshops led by expert facilitators—explore creativity, collaboration, and real-world innovation.
          </p>
        </div>
      </div>

      {/* Filter Section */}
     
<div className="w-full bg-white py-6 px-4 sm:px-6 md:px-12 border-b border-gray-300">
  <div className="grid grid-cols-1 md:grid-cols-6 gap-4 items-end">

    {/* Title Filter */}
    <select
      value={titleFilter}
      onChange={(e) => setTitleFilter(e.target.value)}
      className="border rounded px-3 py-2 w-full text-sm"
    >
      <option value="">All Titles</option>
      {[...new Set(workshops.map(w => w.workshop_title))].map((title, idx) => (
        <option key={idx} value={title}>{title}</option>
      ))}
    </select>

    {/* Type Filter */}
    <select
      value={typeFilter}
      onChange={(e) => setTypeFilter(e.target.value)}
      className="border rounded px-3 py-2 w-full text-sm"
    >
      <option value="">All Types</option>
      {[...new Set(workshops.map(w => w.workshop_type))].map((type, idx) => (
        <option key={idx} value={type}>{type}</option>
      ))}
    </select>

    {/* Price Filter */}
    <select
      value={priceFilter}
      onChange={(e) => setPriceFilter(e.target.value)}
      className="border rounded px-3 py-2 w-full text-sm"
    >
      <option value="">All Prices</option>
      {[...new Set(workshops.map(w => w.price))]
        .sort((a, b) => a - b)
        .map((price, idx) => (
          <option key={idx} value={price}>₹{price}</option>
        ))}
    </select>



    {/* Spacer (for better alignment if needed) */}
    <div className="hidden md:block"></div>

    {/* Reset Button */}
    <button
      className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded text-sm w-full"
      onClick={() => {
        setTitleFilter('');
        setTypeFilter('');
        setPriceFilter('');
        
      }}
    >
      Reset
    </button>
  </div>
</div>



      {/* Workshop Cards Section */}
      <div className="w-full min-h-screen p-4 bg-gray-100 sm:p-6 md:p-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:gap-6 md:gap-8 justify-items-center">
          {/* Optional Spacer for alignment */}
          <div className="hidden xl:block"></div>

          {filteredWorkshops.map((workshop) => (
            <div
              key={workshop.id}
              onClick={() => setSelectedWorkshop(workshop)}
              className="group flex flex-col items-center text-center w-full sm:w-[250px] md:w-[300px] mb-8 sm:mb-12 md:mb-16 cursor-pointer"
            >
              <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] mb-3 sm:mb-4 overflow-hidden">
                <img
                  src={
                    workshop.featured_image
                      ? `${BASE_URL}/storage/${workshop.featured_image}`
                      : 'https://dummyimage.com/400x300/cccccc/000000&text=No+Image'
                  }
                  alt={workshop.workshop_title}
                  className="object-cover w-full h-full transition duration-300 ease-in-out transform filter grayscale hover:grayscale-0 hover:scale-110"
                />
                <span className="absolute px-2 py-1 font-mono text-xs text-purple-900 bg-purple-100 rounded-full bottom-2 right-2 sm:px-3 md:px-4">
                  {workshop.workshop_type || 'WORKSHOP'}
                </span>
              </div>

              <h3 className="mb-1 text-lg font-bold uppercase transition duration-300 sm:text-xl group-hover:text-purple-700">
                {workshop.workshop_title}
              </h3>
              <p className="mb-1 font-mono text-xs uppercase sm:text-sm">
                {workshop.duration_weeks} Week(s)
              </p>
              <p className="font-mono text-xs italic sm:text-sm line-clamp-2 px-2">
                {workshop.about_workshop}
              </p>
            </div>
          ))}
        </div>
        <div className="w-full md:w-5/6 lg:w-3/4 mx-auto mb-8 md:mb-12 py-8 md:py-12 px-4 md:px-8 bg-transparent">
          <div className="flex flex-col items-center text-center space-y-3 md:space-y-4">
        
            {/* Title */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-black">
              Get in Touch with Us
            </h2>
        
            {/* Input + Button */}
            <div className="mt-4 md:mt-6 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-2xl flex">
              <input
                type="email"
                placeholder="Your Email here"
                className="w-full border border-gray-400 px-4 py-3 text-sm md:text-base focus:outline-none bg-white text-black"
              />
              <button className="bg-black text-white px-4 md:px-6 py-3 text-sm md:text-base font-medium hover:bg-gray-800 transition">
                Subscribe
              </button>
            </div>
        
          </div>
        </div>
      </div>
    </>
  );
}

export default Workshoplist;
