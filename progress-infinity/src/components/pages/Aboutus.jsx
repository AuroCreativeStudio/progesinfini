import React, { useEffect, useState } from 'react';

import gifImage from '../../assets/spinner.gif';
import EnquireForm from './EnquireForm';
import about from '../../assets/aboutbg.png';
import circle2 from '../../assets/circle2.png';
import circle3 from '../../assets/circle3.png';
import home from '../../assets/test.png';
import sample from '../../assets/sample.png';
import last from '../../assets/aboutlast.png';

function Aboutus() {
    const [showEnquire, setShowEnquire] = useState(false);
    const [scrollY, setScrollY] = useState(0);
   const [activeLine, setActiveLine] = useState(0);
const [lastScrollY, setLastScrollY] = useState(0);


      useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

    const getOpacity = (lineIndex) => {
    const base = 100;
    const fadeDistance = 120;
    return Math.max(1 - (scrollY - base - lineIndex * fadeDistance) / fadeDistance, 0);
  };
useEffect(() => {
  const handleScroll = () => {
    const currentY = window.scrollY;
    const direction = currentY > lastScrollY ? 'down' : 'up';

    const base = 100; // starting scroll point
    const distancePerLine = 120;
    const totalLines = lines.length;

    const index = Math.floor((currentY - base) / distancePerLine);

    if (direction === 'down') {
      setActiveLine(Math.min(index, totalLines - 1));
    } else {
      setActiveLine(Math.max(index, 0));
    }

    setLastScrollY(currentY);
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, [lastScrollY]);

  const lines = [
    "Progress Infiniti empowers",
    "college students through",
    "offline workshops, guided by",
    "inspiring facilitators, nurturing",
    "self-growth, innovation, and",
    " confidence to pursue their",
    "dreams with purpose.",
  ];
  return (
    <>
     {/* Enquire Form Modal */}
      {showEnquire && <EnquireForm onClose={() => setShowEnquire(false)} />}

      {/* Section 1: Intro */}
      <section className="relative w-full min-h-screen bg-[#fefcc6] px-6 md:px-20 py-16 flex flex-col md:flex-row items-start md:items-center justify-between font-sans overflow-hidden">
        {/* Left Content */}
        <div className="md:w-1/2 w-full mb-10 md:mb-0">
          <h2 className="text-4xl md:text-5xl font-semibold text-black mb-10">About Us</h2>
          <p className="text-sm text-black mb-4">
            Unlock Your Potential. Join a Community<br />
            of Innovators Making Dreams a Reality!
          </p>
          <a href="#read-more" className="text-red-600 font-semibold underline inline-block mt-2">
            Read More
          </a>
        </div>

        {/* Right Content - GIF */}
        <div className="md:w-1/2 w-full flex justify-center items-center">
          <div className="w-[250px] h-[250px] flex items-center justify-center">
            <img src={gifImage} alt="Animated Shape" className="w-full transform -rotate-45" />
          </div>
        </div>

        {/* Enquire Button */}
        <div className="absolute bottom-24 right-12 z-10">
          <button  onClick={() => setShowEnquire(true)} 
          className="bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-2">
            Enquire Now
          </button>
        </div>

        {/* Decorative Bottom Border */}
        <div
          className="absolute bottom-0 left-0 w-full h-[20px] bg-[#fefcc6] flex"
          style={{ border: '2px solid #FF4500' }}
        >
          <div className="w-1/4 h-full bg-red-600"></div>
        </div>
      </section>

      {/* Section 2: Background Banner Text */}
      <section
      className="relative h-screen w-full flex items-center justify-center px-6 md:px-16 bg-cover bg-center"
      style={{ backgroundImage: `url(${about})` }}
    >
      <div className="text-center text-white max-w-xl z-10 space-y-4">
      {lines.map((line, idx) => (
  <p
    key={idx}
    className={`text-2xl md:text-4xl font-medium transition-all duration-500 ease-in-out ${
      idx === activeLine ? 'text-white opacity-100' : 'text-white opacity-30'
    }`}
  >
    {line}
  </p>
))}


      </div>
    </section>

      {/* Section 3: Two Panel Images & Vision */}
      <section className="w-full bg-[#fefcc6] px-6 md:px-20 py-16 font-sans relative overflow-hidden">

        {/* Decorative Orange Circle - Only on large screens */}
        <div className="hidden lg:block absolute top-[400px] left-[54%] transform -translate-x-1/2 w-[600px] h-[600px] border-4 border-red-500 rounded-full z-0"></div>

        <div className="flex flex-col md:flex-row justify-center mb-16 relative z-10">
          {/* Left Image with quote */}
          <div className="relative w-full md:w-1/2">
            <img src={circle3} alt="Left Panel" className="w-full object-cover shadow-md" />
            <p className="absolute bottom-44 left-4 text-white text-sm w-[80%]">
              "There is no end to <span className="text-black">progress</span> and every day <br />
              one can learn to do better what one does."
            </p>
          </div>

          {/* Right Image with heading & text */}
          <div className="relative w-full mt-8 md:w-1/2">
            <img src={circle2} alt="Right Panel" className="w-full object-cover shadow-md" />
            <div className="absolute top-6 left-6 text-white">
              <h3 className="text-xl md:text-2xl font-semibold mb-2">Integral Education</h3>
              <p className="text-sm max-w-xs leading-relaxed">
                Progress Infiniti is inspired by the ideals of integral education — nurturing not just
                knowledge, but the body, emotions, imagination, and soul. Each experience invites
                students to explore, express, and evolve as whole individuals.
              </p>
            </div>
          </div>
        </div>

        {/* Vision Section */}
        <div className="flex flex-col md:flex-row items-start gap-10 mt-20 relative z-10">
          {/* Vision Image */}
          <div className="w-full md:w-1/2">
            <img src={home} alt="Vision Room" className="w-full object-cover shadow-md" />
          </div>

          {/* Vision Text */}
          <div className="w-full md:w-1/2 mt-20 md:mt-0 flex flex-col justify-center">
            <h2 className="text-3xl md:text-5xl font-semibold text-black mb-0 mt-44">Our Vision</h2>
            <p className="text-md text-black leading-relaxed max-w-md ml-0 md:ml-16 text-start">
              Progress Infiniti is inspired by the ideals of integral education — nurturing not just
              knowledge, but the body, emotions, imagination, and soul. Each experience invites
              students to explore, express, and evolve as whole individuals.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: Image + Rich Text */}
      <section className="relative w-full bg-white py-16 px-6 md:px-20 font-sans">
        <div className="absolute top-0 left-0 w-[180px] h-[600px] bg-[#4b1112] z-0 hidden lg:block"></div>

        <div className="relative z-10 flex flex-col md:flex-row items-start gap-10 mb-20">
          <div className="w-full md:w-1/2">
            <img src={sample} alt="Vision" className="w-full h-auto object-cover shadow-md" />
          </div>
          <div className="w-full md:w-1/2 my-auto md:p-24 text-start text-md text-black leading-relaxed space-y-4">
            <p>
              Progress Infiniti is inspired by the ideals of integral education—nurturing not just knowledge,
              but the body, emotions, imagination, and soul. Each experience invites students to explore,
              express, and evolve as whole individuals.
            </p>
            <p>
              Progress Infiniti is inspired by the ideals of integral education—nurturing not just knowledge,
              but the body, emotions, imagination, and soul. Each experience invites students to explore,
              express, and evolve as whole individuals.
            </p>
          </div>
        </div>

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 text-md text-start text-black leading-relaxed">
          <p>
            Progress Infiniti is inspired by the ideals of integral education—nurturing not just knowledge,
            but the body, emotions, imagination, and soul. Each experience invites students to explore,
            express, and evolve as whole individuals.
          </p>
          <p>
            Progress Infiniti is inspired by the ideals of integral education—nurturing not just knowledge,
            but the body, emotions, imagination, and soul. Each experience invites students to explore,
            express, and evolve as whole individuals.
          </p>
        </div>
      </section>

      {/* Section 5: Final Image */}
      <section className="w-full min-h-screen bg-white flex items-center justify-center px-6 md:px-20 py-16">
        <div className="w-full max-w-6xl flex justify-end">
          <img
            src={last}
            alt="Abstract Artwork"
            className="w-full max-w-[600px] h-auto object-cover shadow-lg"
          />
        </div>
      </section>
    </>
  );
}

export default Aboutus;
