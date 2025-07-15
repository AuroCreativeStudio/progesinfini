import React from 'react';
import retreatBg from '../../assets/retreat1.jpeg';
import retreatImg from '../../assets/retreat2.jpeg';
// import bgImage from '../../assets/retreatbg.png';
import section3 from '../../assets/retreat3.jpeg';
import bgImage1 from '../../assets/retreatbg2.png';

function Retreat() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative w-full h-screen bg-cover bg-center flex items-center justify-center text-center font-rem"
        style={{ backgroundImage: `url(${retreatBg})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30 z-0" />
        <div className="relative z-10 text-white px-4">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-4">Retreat</h1>
          <p className="text-sm md:text-xl font-bold text-black mb-6">
            Active Rejuvenation<br />Beyond the Everyday
          </p>
          <button className="bg-red-500 hover:bg-red-600 text-white text-sm font-semibold px-5 py-2 rounded-md">
            Join Our Next Retreat
          </button>
        </div>
      </section>

      {/* Section 1 - Split Layout */}
    <section className="w-full flex flex-col md:flex-row font-rem">
  {/* Left Section - White */}
  <div className="w-full md:w-[calc(50%-24px)] bg-white p-6 md:p-16 flex items-center justify-center">
    <div className="max-w-lg">
      <p className="text-black text-base md:text-lg leading-relaxed mb-6">
        We don’t escape from the world —<br />
        we shift our relationship with it.<br />
        Each retreat is crafted as a gentle<br />
        container for discovery. You’ll rest, yes<br />
        — but also write, move, question,<br />
        make, unmake, and begin again.<br />
        There’s time for slowness, space for<br />
        silence, and permission to think, feel,<br />
        and create without urgency.
      </p>
      <button className="bg-red-500 hover:bg-red-600 text-white text-sm font-semibold px-6 py-3 rounded-md">
        Join Our Next Retreat
      </button>
    </div>
  </div>

  {/* Middle Strip - Brown */}
  <div className="hidden md:block w-[150px] bg-[#3B1D1A]"></div>

  {/* Right Section - Yellow */}
  <div className="w-full md:flex-1 bg-[#FCF4C3] p-6 md:p-10 flex flex-col items-center justify-start relative">
    {/* Retreat Tag */}
    {/* <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#3B1D1A] text-white px-4 py-1 flex items-center gap-2 rounded-full text-sm font-semibold shadow-lg">
      <span className="bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
        1
      </span>
      Retreat Number 1
    </div> */}

    {/* Image */}
    <img
      src={retreatImg}
      alt="Retreat View"
      className="w-full max-w-md mt-12 rounded shadow-lg"
    />

    {/* Description */}
    <div className="mt-6 text-sm text-black max-w-md text-center">
      <p className="mb-4">
        We don’t escape from the world — we shift our
        relationship with it. Each retreat is crafted as a
        gentle container for discovery. You’ll rest, yes — but
        also write, move, question, make, unmake, and
        begin again.
      </p>
      <button className="bg-[#FF5E3A] hover:bg-[#e5502e] text-white text-sm font-semibold px-5 py-2 rounded-md">
        Book Now
      </button>
    </div>
  </div>
</section>


      {/* Full Image Section */}
      <section
        className="w-full h-[60vh] sm:h-[70vh] md:h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${section3})` }}
      />

      {/* Section 2 - Detail with Image */}
      <section
        className="w-full flex flex-col md:flex-row font-rem bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage1})` }}
      >
        {/* Left Content */}
        <div className="w-full md:w-1/2 p-6 sm:p-10 flex flex-col gap-4">
          <img
            src={section3}
            alt="Retreat"
            className="w-full h-auto rounded shadow-lg"
          />
          <div className="text-left space-y-2 mt-4 text-sm text-black">
            <p className="font-bold">Your Retreat</p>
            <p className="text-gray-800">
              Stepped. A rich non-residential learning and home<br />
              outwardly-held experience across unexpected dawns.
            </p>
            <p>
              Ph: 98485 75945<br />
              Date: July 1, 2025
            </p>
            <button className="text-red-600 font-semibold hover:underline mt-2">
              Register Interest
            </button>
          </div>
        </div>

        {/* Optional Spacer (Symmetry on large screens) */}
        <div className="hidden md:block w-full md:w-1/2" />
      </section>
    </>
  );
}

export default Retreat;
