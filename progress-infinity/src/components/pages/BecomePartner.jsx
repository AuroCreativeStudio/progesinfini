import React from 'react';
import bgImage from '../../assets/becomebg.png';
import partnerBg from '../../assets/become.png';
import spiral from '../../assets/spiral.png'; 

function PartnerSection() {
  return (
    <>
    <section
      className="relative w-full h-screen bg-center  flex items-center justify-center text-center"
      style={{ backgroundImage: `url(${partnerBg})` }}
    >
      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-black bg-opacity-50" /> */}

      {/* Text Content */}
      <div className="relative z-10 text-white px-4">
        <p className="text-sm md:text-base font-medium mb-3">
          Let’s Build What Matters, Together.
        </p>
        <h2 className="text-3xl md:text-5xl font-bold">
          Become a <span className="text-red-600">Partner</span>
        </h2>
      </div>
    </section>

     {/* section2 */}

   <section
  className="w-full h-screen flex items-center justify-center font-rem bg-center bg-cover"
  style={{ backgroundImage: `url(${bgImage})` }}
>
  {/* Centered Content */}
  <div className="px-6 md:px-10 text-center">
    <p className="text-black text-lg md:text-4xl leading-snug max-w-2xl mx-auto">
      At Progres Infini, we’re not just looking for collaborators — we’re looking for{' '}
      <span className="text-red-600 font-semibold">co-dreamers</span>.<br />
      Our partners are educators, artists, institutions,
    </p>
  </div>
</section>

 {/* section3 */}
   <section className="w-full bg-white py-16 px-6 text-center text-2xl font-rem">
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-semibold text-black mb-4">
        Partnerships That Make Space for Possibility
      </h2>
      <p className="text-sm md:text-base text-gray-700 max-w-2xl mx-auto mb-16">
        We believe in collaboration that’s intentional, values-aligned, and human.
        If you’re creating learning experiences, spaces of reflection, or ways of
        thinking differently — we’d love to hear from you.
      </p>

      {/* Grid Layout */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-12">
        {/* Left Column */}
        <div className="flex flex-col items-end gap-20 text-right text-black w-full md:w-1/4">
          <p>Co-host a retreat or workshop</p>
          <hr className='bg-slate-950'/>
          <p>Build slow, thoughtful learning modules</p>
        </div>

        {/* Center Image */}
        <div className="w-[220px] md:w-[280px]">
          <img src={spiral} alt="Spiral Design" className="w-full h-auto mx-auto" />
        </div>

        {/* Right Column */}
        <div className="flex flex-col items-start gap-20 text-left text-black w-full md:w-1/4">
          <p>Facilitate a session within our programs</p>
          <hr className="bg-slate-95"/>
          <p>Offer space, content, or context for future residencies</p>
        </div>
      </div>
    </section>


    </>
  );
}

export default PartnerSection;
