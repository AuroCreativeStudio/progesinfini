import React from 'react';
import bgImage from '../../assets/becomebg.png';
import partnerBg from '../../assets/become.png';
import spiral from '../../assets/spiral.png'; 
import image from '../../assets/partnerpage.png';

function PartnerSection() {
  return (
    <>
      {/* Section 1 - Hero */}
      <section
        className="relative w-full h-screen bg-center bg-cover flex items-center justify-center text-center font-rem"
        style={{ backgroundImage: `url(${partnerBg})` }}
      >
        <div className="relative z-10 text-white px-4">
          <p className="text-sm md:text-2xl font-medium mb-3">
            Let’s Build What Matters, Together.
          </p>
          <h2 className="text-3xl md:text-8xl font-bold">
            Become a <span className="text-red-600">Partner</span>
          </h2>
        </div>
      </section>

      {/* Section 2 - Centered Paragraph */}
      <section
        className="w-full min-h-[70vh] flex items-center justify-center font-rem bg-center bg-cover px-4 text-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="max-w-3xl">
          <p className="text-black text-base sm:text-lg md:text-5xl leading-snug md:leading-[4.5rem] text-left">

            At Progres Infini, we’re not just looking for collaborators — we’re looking for{' '}
            <span className="text-red-600 font-semibold">co-dreamers</span>.<br />
            Our partners are educators, artists, institutions,
          </p>
        </div>
      </section>

      {/* Section 3 - Possibilities */}
      <section className="w-full bg-white py-4 px-6 md:px-12 text-center font-rem">
        <h2 className="text-2xl md:text-4xl font-semibold text-black mb-4">
          Partnerships That Make Space for Possibility
        </h2>
        <p className="text-sm md:text-base text-gray-700 max-w-2xl mx-auto mb-16">
          We believe in collaboration that’s intentional, values-aligned, and human.
          If you’re creating learning experiences, spaces of reflection, or ways of
          thinking differently — we’d love to hear from you.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          {/* Left Column */}
          <div className="flex flex-col items-end gap-20 text-right text-black w-full md:w-1/4">
            <p>Co-host a retreat or workshop</p>
            <hr className="w-full border-t-2 border-red-400 ml-0" />
            <p>Build slow, thoughtful learning modules</p>
          </div>

          {/* Center Spiral Image */}
          <div className="w-[220px] md:w-[280px]">
            <img src={spiral} alt="Spiral Design" className="w-full h-auto mx-auto" />
          </div>

          {/* Right Column */}
          <div className="flex flex-col items-start gap-20 text-left text-black w-full md:w-1/4">
            <p>Facilitate a session within our programs</p>
            <hr className="w-full border-t-2 border-red-400 mr-0" />
            <p>Offer space, content, or context for future residencies</p>
          </div>
        </div>
      </section>

      {/* Section 4 - Register Interest */}
      <section className="w-full bg-[#FEFCC6] py-12 px-6 md:px-20 font-rem">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Text Content */}
          <div className="text-black max-w-xl text-left">
            <h3 className="text-xl md:text-2xl font-semibold mb-4">
              Ready to Co-Create?
            </h3>
            <p className="text-sm md:text-base mb-6">
              We’d love to hear what you’re thinking. Tell us a little about yourself, your work,
              and the kind of collaboration you envision.
            </p>
            <button className="bg-red-500 hover:bg-red-600 text-white text-sm px-4 py-2 rounded-md transition">
              Register Interest
            </button>
          </div>

          {/* Image */}
          <div className="w-full max-w-[300px]">
            <img
              src={image}
              alt="Co-Create Visual"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default PartnerSection;
