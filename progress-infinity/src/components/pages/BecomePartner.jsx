import React from 'react';
import bgImage from '../../assets/becomebg.png';
import partnerBg from '../../assets/become.png';
import spiral from '../../assets/spiral.png'; 
import gif from '../../assets/become.gif';

function PartnerSection() {
  return (
    <>
      {/* Section 1 - Hero */}
      <section
        className="relative w-full min-h-[70vh] md:min-h-screen bg-center bg-cover flex items-center justify-center text-center font-rem px-4"
        style={{ backgroundImage: `url(${partnerBg})` }}
      >
        <div className="relative z-10 text-white">
          <p className="text-sm md:text-2xl font-medium mb-3">
            Let’s Build What Matters, Together.
          </p>
          <h2 className="text-3xl sm:text-5xl md:text-7xl xl:text-8xl font-bold">
            Become a <span className="text-red-600">Partner</span>
          </h2>
        </div>
      </section>
      {/* section-2 */}
<section
  className="w-full min-h-[40vh] sm:min-h-[30vh] md:min-h-[40vh] lg:h-[80vh] flex items-center justify-center font-rem bg-center bg-cover px-4 sm:px-6 md:px-12 py-0"
  style={{ backgroundImage: `url(${bgImage})` }}
>
  <div className="max-w-4xl">
    <p className="text-black text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl leading-snug sm:leading-[2.2rem] md:leading-[2.6rem] lg:leading-[3.5rem] xl:leading-[4.5rem] text-center lg:text-left">
      At Progres Infini, we're not just looking for collaborators — we're looking for{' '}
      <span className="text-red-600 font-semibold">co-dreamers</span>.<br />
      Our partners are educators, artists, institutions,
    </p>
  </div>
</section>



      {/* Section 3 - Possibilities */}
    <section className="w-full bg-white py-10 px-4 sm:px-8 md:px-12 text-center font-rem">
  <h2 className="text-2xl md:text-4xl font-semibold text-black mb-4">
    Partnerships That Make Space for Possibility
  </h2>
  <p className="text-sm md:text-base text-gray-700 max-w-3xl mx-auto mb-12">
    We believe in collaboration that’s intentional, values-aligned, and human.
    If you’re creating learning experiences, spaces of reflection, or ways of
    thinking differently — we’d love to hear from you.
  </p>

  <div className="flex flex-col md:flex-row items-center justify-center gap-12">
    {/* Left Column */}
    <div className="flex flex-col items-center md:items-end gap-12 text-center md:text-right text-black w-full md:w-1/4">
      <p className="text-base md:text-lg">Co-host a retreat <br />or workshop</p>
      <hr className="w-full border-t-2 border-red-400" />
      <p className="text-base md:text-lg">Build slow, thoughtful <br />learning modules</p>
    </div>

    {/* Center Spiral Image */}
    <div className="w-[250px] sm:w-[350px] md:w-[400px] lg:w-[500px]">
      <img src={spiral} alt="Spiral Design" className="w-full h-auto mx-auto" />
    </div>

    {/* Right Column */}
    <div className="flex flex-col items-center md:items-start gap-12 text-center md:text-left text-black w-full md:w-1/4">
      <p className="text-base md:text-lg">Facilitate a session <br />within our programs</p>
      <hr className="w-full border-t-2 border-red-400" />
      <p className="text-base md:text-lg">Offer space, content,<br /> or context for future residencies</p>
    </div>
  </div>
</section>


      {/* Section 4 - Register Interest */}
      <section className="w-full bg-[#FEFCC6] py-12 px-4 sm:px-8 md:px-12 lg:px-20 font-rem">
  <div className="flex flex-col md:flex-row items-center justify-between gap-10 max-w-7xl mx-auto">
    {/* Text Content - centered on sm/md, left on lg+ */}
    <div className="text-black max-w-xl text-center md:text-center lg:text-left">
      <h3 className="text-xl sm:text-2xl md:text-4xl font-semibold mb-4">
        Ready to Co-Create?
      </h3>
      <p className="text-sm md:text-base mb-6">
        We'd love to hear what you're thinking. Tell us a little about yourself, your work,
        and the kind of collaboration you envision.
      </p>
      <div className="flex justify-center md:justify-center lg:justify-start">
        <button className="bg-[#f04e23] text-black px-6 py-2 font-semibold hover:bg-black hover:text-white transition">
          Register Interest
        </button>
      </div>
    </div>

    {/* Image */}
    <div className="w-full max-w-[500px]">
      <img
        src={gif}
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
