import React, { useEffect, useState } from 'react';
import gifImage from '../../assets/spinner.gif';
import EnquireForm from './EnquireForm';
import about from '../../assets/aboutbg.png';
import circle2 from '../../assets/circle2.png';
import circle3 from '../../assets/circle3.png';
import home from '../../assets/test.png';
import sample from '../../assets/sample.png';
import last from '../../assets/about.mp4';

function Aboutus() {
  const [showEnquire, setShowEnquire] = useState(false);
  const [activeLine, setActiveLine] = useState(0);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      const direction = currentY > lastScrollY ? 'down' : 'up';

      const base = 100; // starting scroll point
      const distancePerLine = window.innerWidth < 768 ? 80 : 120;
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
     <section className="relative w-full min-h-screen mt-0 bg-[#fefcc6] px-4 sm:px-6 md:px-20 py-12 md:py-16 flex flex-col md:flex-row items-start md:items-center justify-between font-sans overflow-hidden">

        {/* Left Content */}
     <div className="md:w-1/2 w-full mb-6 md:mb-0 flex flex-col justify-between h-full">
  <div className="w-full px-0 sm:px-12 md:px-24 max-w-2xl">
    <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl text-light font-rem text-black mb-6 md:mb-10">
      About Us
    </h2>

    <div className="text-left ">
      <p className="text-lg text-medium text-black mb-2 md:mb-4">
        Unlock Your Potential. Join a Community<br />
        of Innovators Making Dreams a Reality!
      </p>
      <a
        href="#read-more"
        className="text-[#F0542b] font-rem font-light inline-block mt-1 md:mt-2"
      >
        Read More
      </a>
    </div>
  </div>
</div>




        {/* Right Content - GIF */}
        <div className="md:w-1/2 w-full flex justify-center items-center mt-6 md:mt-0">
          <div className="w-[250px] h-[250px] sm:w-[300px]  sm:h-[300px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] flex items-center justify-center">
            <img 
              src={gifImage} 
              alt="Animated Shape" 
              className="w-full transform rotate-[55deg]"
            />
          </div>
        </div>

        {/* Enquire Button */}
        <div className="absolute bottom-12 md:bottom-24 right-4 md:right-12 z-10">
          <button 
            onClick={() => setShowEnquire(true)} 
            className="bg-red-orange hover:bg-red-500 text-white text-sm sm:text-base md:text-xl font-semibold px-6 sm:px-8 md:px-12 py-1 md:py-2"
          >
            Enquire Now
          </button>
        </div>

        {/* Decorative Bottom Border */}
        <div
          className="absolute bottom-0 left-0 w-full h-[15px] md:h-[20px] bg-[#fefcc6] flex"
          style={{ border: '2px solid #FF4500' }}
        >
          <div className="w-1/4 h-full bg-red-orange"></div>
        </div>
      </section>

      {/* Section 2: Background Banner Text */}
      <section
        className="relative h-screen w-full flex items-center justify-center px-4 sm:px-6 md:px-16 bg-cover bg-center"
        style={{ backgroundImage: `url(${about})` }}
      >
        <div className="text-center text-white max-w-md sm:max-w-xl z-10 space-y-2 sm:space-y-4">
          {lines.map((line, idx) => (
            <p
              key={idx}
              className={`text-lg sm:text-xl md:text-2xl lg:text-4xl font-medium transition-all duration-500 ease-in-out ${
                idx === activeLine ? 'text-white opacity-100' : 'text-white opacity-30'
              }`}
            >
              {line}
            </p>
          ))}
        </div>
      </section>

      {/* Section 3: Two Panel Images & Vision */}
      <section className="w-full bg-[#fefcc6] px-4 sm:px-6 md:px-20 py-8 md:py-16 font-sans relative overflow-hidden">
        <div className="flex flex-col md:flex-row justify-center gap-4 sm:gap-6 md:gap-1 mb-8 md:mb-16 relative z-10">
          {/* Left Image with quote */}
          <div className="relative w-full md:w-1/2">
            <img src={circle3} alt="Left Panel" className="w-full object-cover shadow-md" />
            <p className="absolute font-rem bottom-20 sm:bottom-32 md:bottom-44 left-2 sm:left-4 text-white text-sm sm:text-base md:text-xl font-medium w-[90%] sm:w-[80%]">
              "There is no end to <span className="text-black">progress</span> and every day <br />
              one can learn to do better what one does."
            </p>
          </div>

          {/* Right Image with heading & text */}
          <div className="relative w-full mt-4 sm:mt-6 md:mt-8 md:w-1/2">
            <img src={circle2} alt="Right Panel" className="w-full object-cover shadow-md" />
   <div className="absolute top-4 sm:top-8 md:top-12 left-4 sm:left-8 md:left-16 text-white max-w-2xl font-rem">
  <h3 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-normal mb-4 sm:mb-8 md:mb-12">
    Integral Education
  </h3>
  <p className="text-md sm:text-lg md:text-xl font-normal  leading-relaxed text-left">
    Progress Infiniti is inspired by the ideals of integral education — nurturing not just
    knowledge, but the body, emotions, imagination, and soul. Each experience invites
    students to explore, express, and evolve as whole individuals.
  </p>
</div>

          </div>
        </div>

        {/* Vision Section */}
        <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8 md:gap-10 mt-10 sm:mt-16 md:mt-20 lg:mt-60 relative z-10">
  {/* Vision Image */}
  <div className="w-full md:w-1/2">
    <img src={home} alt="Vision Room" className="w-[750px] h-[724px] object-cover shadow-md" />
  </div>

  {/* Vision Text - Vertically Centered */}
  <div className="w-full md:w-1/2 flex flex-col font-rem justify-center px-4 sm:px-8 md:px-16 h-full">
    <div className="max-w-lg mx-auto text-left">
      <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-light text-black mb-6">
        Our Vision
      </h2>
      <p className="text-xl sm:text-md text-black leading-relaxed font-medium">
        Progress Infiniti is inspired by the ideals of integral education — nurturing not just
        knowledge, but the body, emotions, imagination, and soul. Each experience invites
        students to explore, express, and evolve as whole individuals.
      </p>
    </div>
  </div>
</div>

      </section>

      {/* Section 4: Image + Rich Text */}
      <section className="relative w-full bg-white py-8 md:py-16 px-4 sm:px-6 md:px-20 font-sans">
        <div className="absolute top-0 left-0 w-[250px] sm:w-[300px] md:w-[350px] h-[500px] sm:h-[600px] md:h-[650px] bg-[#240909] z-0 hidden lg:block"></div>

        <div className="relative z-10 flex flex-col md:flex-row mt-10 sm:mt-16 md:mt-20 ml-0 sm:ml-10 md:ml-20 items-start gap-6 sm:gap-8 md:gap-10 mb-10 sm:mb-16 md:mb-20">
          <div className="w-full md:w-5/6">
            <img src={sample} alt="Vision" className="w-full h-auto object-cover shadow-md" />
          </div>
          <div className="w-full font-rem font-medium md:w-1/2 my-auto md:p-8 lg:p-24 text-start text-xl sm:text-md text-black leading-relaxed space-y-2 sm:space-y-4">
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

        <div className="relative z-10 mx-0 sm:mx-10 md:mx-20 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 text-lg sm:text-md font-medium font-rem text-start text-black leading-relaxed">
          <p>
            Progres Infini is inspired by the ideals of integral education—nurturing not just knowledge,
            but the body, emotions, imagination, and soul. Each experience invites students to explore,
            express, and evolve as whole individuals. Progres Infini is inspired by the ideals of integral
            education—nurturing not just knowledge, but the body, emotions, imagination, and soul.
            Each experience invites students to explore, express, and evolve as whole individuals.
          </p>
          <p>
            Progres Infini is inspired by the ideals of integral education—nurturing not just knowledge,
            but the body, emotions, imagination, and soul. Each experience invites students to explore,
            express, and evolve as whole individuals. Progres Infini is inspired by the ideals of integral
            education—nurturing not just knowledge, but the body, emotions, imagination, and soul.
            Each experience invites students to explore, express, and evolve as whole individuals.
          </p>
        </div>
      </section>

      {/* Section 5: Final Image */}
      <section className="w-full min-h-screen bg-white flex items-center justify-center px-4 sm:px-6 md:px-20 py-8 md:py-16">
        <div className="w-full max-w-6xl flex justify-center md:justify-end">
          <video
            src={last}
            controls
            autoPlay
            loop
            muted
            className="w-full max-w-[1039px] sm:max-w-[1039px] h-auto object-cover shadow-lg"
          />
        </div>
      </section>
    </>
  );
}

export default Aboutus;