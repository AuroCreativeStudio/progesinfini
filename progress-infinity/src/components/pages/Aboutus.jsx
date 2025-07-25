import React, { useEffect, useState } from 'react';
import gifImage from '../../assets/spinner.gif';
import EnquireForm from './EnquireForm';
import about from '../../assets/aboutbg.png';
import circle2 from '../../assets/circle2.png';
import circle3 from '../../assets/circle3.png';
import ring from '../../assets/ring.png';
import home from '../../assets/test.png';
import sample from '../../assets/sample.png';
import last from '../../assets/about.mp4';
import section2 from "../../assets/infinity8.png";


function Aboutus() {
  const [showEnquire, setShowEnquire] = useState(false);
  const [activeLine, setActiveLine] = useState(0);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollWidth, setScrollWidth] = useState(5);

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


  
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = scrollTop / docHeight;

      // Offset: Start at 5%, grow to 100%
      const adjusted = 5 + scrolled * 95; // 5% base + 95% scroll
      setScrollWidth(adjusted);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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


              {/* -----------------------------SECTION-1 --------------------------*/}
                           {/*----- Section-1 with All Responsives----- */}

<section className="relative w-full h-screen bg-[#fefcc6] px-4 sm:px-6 sm:py-24 md:px-12 py-20 flex flex-col lg:flex-row lg:items-center lg:justify-between font-sans overflow-hidden">
 
  <div className="w-full lg:w-1/2 flex flex-col justify-start sm:space-y-6 space-y-4 px-0 sm:px-6 md:px-12 text-center lg:text-left mx-auto">
    <h2 className="pt-8 lg:pt-0 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-rem text-black">
      About Us
    </h2>
    <p className="text-base sm:text-lg md:text-xl font-rem font-normal text-black">
      Unlock Your Potential. Join a Community of Innovators Making Dreams a Reality!
    </p>
    <a
      href="#read-more"
      className="text-[#F0542b] font-rem text-lg inline-block"
    >
      Read More
    </a>
  </div>


<div className="w-full lg:w-1/2 flex justify-center items-center flex-1 mt-6 lg:mt-0 mb-20 lg:mb-0">
  <div className="
    w-[200px] h-[200px]
    sm:w-[230px] sm:h-[230px]
    md:w-[280px] md:h-[320px]   /* Increased size for tablet */
    lg:w-[430px] lg:h-[430px]
    sm:p-8 md:p-8
    flex items-center justify-center
  ">
    <img
      src={gifImage}
      alt="Animated Shape"
      className="w-full h-full object-contain transform rotate-45 lg:rotate-[45deg]"
    />
  </div>
</div>





  <div className="lg:hidden  bottom-8 left-0 w-full flex justify-center z-20 px-4">
    <button
      onClick={() => setShowEnquire(true)}
      className="bg-[#f04e23] text-black w-full max-w-xs px-6 py-3 text-base font-semibold hover:bg-black hover:text-white transition rounded"
    >
      Enquire Now
    </button>
  </div>

  {/* Enquire Button - Desktop Only */}
  <div className="hidden lg:flex w-full justify-end absolute bottom-16 right-8 z-10">
    <button
      onClick={() => setShowEnquire(true)}
      className="bg-[#f04e23] text-black px-5 py-1.5 text-sm md:text-base font-semibold hover:bg-black hover:text-white transition"
    >
      Enquire Now
    </button>
  </div>

             {/*-------------------------- Progress Bar------------------------------ */}
  <div className="fixed bottom-0 left-0 w-full h-[12px] md:h-[15px] bg-transparent border-t border-[#FF4500] z-50">
    <div
      className="h-full bg-[#FF4500] transition-all duration-300 ease-linear"
      style={{ width: `${scrollWidth}%` }}
    >
    </div>
  </div>
                                {/* -------------------- */}
</section>


              {/*---------------------------- SECTION-2------------------------------ */}
                       {/* ----------Section-2 with all Responsive---------- */}
    <section
  className="relative h-[500px] sm:h-[600px] md:h-screen w-full flex items-center justify-center px-4 sm:px-6 md:px-16 bg-cover bg-center"
  style={{ backgroundImage: `url(${about})` }}
>
  <div className="text-center text-white max-w-md sm:max-w-xl z-10 space-y-2 sm:space-y-4">
    {lines.map((line, idx) => (
      <p
        key={idx}
        className={`text-lg sm:text-xl md:text-2xl lg:text-4xl font-regular font-rem transition-all duration-500 ease-in-out ${
          idx === activeLine ? 'text-white opacity-100' : 'text-white opacity-30'
        }`}
      >
        {line}
      </p>
    ))}
  </div>
</section>
                        {/*----------------------------- SECTION-3---------------------------- */}
                       {/* ----------Section-3 with the Mobile and Desktop Responsive---------- */}

 <section className="w-full bg-[#fefcc6] px-4 sm:px-6 md:px-20 py-8 md:py-16 font-sans relative overflow-hidden">

                                           {/* Mobile/Tablet Layout (< md) */}
<div className="flex flex-col md:hidden gap-8">

<div className="relative w-full">
  <img src={circle2} alt="Education Panel 2" className="w-full object-cover shadow-md" />
  <div className="absolute bottom-6 left-4 right-4 text-white font-rem">
    <p className="text-sm sm:text-base leading-relaxed">
      "There is no end to <span className="text-black">progress</span> and every day<br />
      one can learn to do better what one does."
    </p>
  </div>
</div>



  <div className="relative w-full">
    <img src={circle2} alt="Education Panel 2" className="w-full object-cover shadow-md" />
    <div className="absolute top-6 left-4 right-4 text-white font-rem">
       <h3 className="text-xl sm:text-2xl font-normal mb-4">Integral Education</h3>
      <p className="text-sm sm:text-base leading-relaxed">
        Progress Infiniti is inspired by the ideals of integral education — nurturing not just
        knowledge, but the body, emotions, imagination, and soul. Each experience invites
        students to explore, express, and evolve as whole individuals.
      </p>
    
    </div>
  </div>

</div>


                                                {/* Desktop & Tablet Layout (≥ md) */}
<div
  style={{
  backgroundImage: `url(${section2})`,
  paddingBottom: 'clamp(1050px, calc(1050px + (100vw - 1412px) * 0.75), 1250px)',
}}

  className="hidden md:flex w-full min-h-[900px] bg-cover bg-center relative"
>
  
 <div className="absolute top-[60%] left-0 w-1/2 px-4 md:px-6 lg:px-12 transform -translate-y-1/2">
  <div className="text-white w-full max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl text-left">
    <p className="text-sm md:text-base lg:text-md xl:text-lg 2xl:text-xl leading-relaxed">
      "There is no end to <span className="text-black">progress</span> and every day<br />
      one can learn to do better what one does."
    </p>
  </div>
</div>


  
  <div className="absolute top-10 right-0 w-1/2 px-4 md:px-6 lg:px-12 flex justify-center">
    <div className="text-white w-full max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl text-left mt-8 lg:mt-12 xl:mt-16">
      <h3 className="text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-normal mb-4 lg:mb-6">
        Integral Education
      </h3>
      <p className="text-sm lg:text-md xl:text-lg 2xl:text-xl leading-relaxed">
        Progress Infiniti is inspired by the ideals of integral education — nurturing not just
        knowledge, but the body, emotions, imagination, and soul. Each experience invites
        students to explore, express, and evolve as whole individuals.
      </p>
    </div>
  </div>
</div>
                                       {/*---------- our vision---------- */}

<div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8 md:gap-6 lg:gap-10 mt-10 sm:mt-16 md:mt-12 lg:-mt-20 xl:-mt-24 2xl:-mt-28 relative z-10">

  <div className="w-full md:w-1/2">
 
    <img
      src={home}
      alt="Vision Room"
      className="w-full max-w-[600px] md:max-w-[500px] lg:max-w-[750px] h-auto object-cover shadow-md mx-auto"
    />
  </div>

  <div className="w-full md:w-1/2 flex flex-col font-rem justify-center sm:px-6 md:px-4 lg:px-8 relative h-full">
    <div className="max-w-lg mx-auto text-center lg:text-left">
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-rem  text-black mb-4 md:mb-5 lg:mb-6 leading-tight">
        Our Vision
      </h2>
      <p className="text-base sm:text-md md:text-[17px] lg:text-lg text-black leading-relaxed font-regular">
        Progress Infiniti is inspired by the ideals of integral education — nurturing not just
        knowledge, but the body, emotions, imagination, and soul. Each experience invites
        students to explore, express, and evolve as whole individuals.
      </p>
    </div>
  </div>
</div>

</section>

  
                {/* -----------------------------SECTION-4 ----------------------------- */}
                                {/* -----Section-4 with All Responsive----- */}


   <section className="relative w-full bg-white py-8 md:py-16 px-4 sm:px-6 md:px-20 font-sans">
 <img
  src={ring}
  alt="Ring Decorative"
  className="hidden lg:block absolute top-0 right-0 w-52 -mt-24 mr-10 z-20"
/>


  <div className="absolute top-0 left-0 w-[250px] sm:w-[300px] md:w-[350px] h-[500px] sm:h-[600px] md:h-[750px] bg-[#240909] z-0 hidden lg:block"></div>

  <div className="relative z-10 flex flex-col md:flex-row mt-10 sm:mt-16 md:mt-20 items-center md:items-start gap-6 sm:gap-8 md:gap-10 mb-10 sm:mb-16 md:mb-20">
  
    <div className="w-full md:w-5/6">
  <img
    src={sample}
    alt="Vision"
    className="w-full h-[360px] sm:h-[500px] md:h-[500px] lg:h-[750px] object-cover shadow-md"
  />
</div>


    <div className="w-full md:w-1/2 my-auto px-4 sm:px-6 md:px-8 text-center md:text-left font-rem font-regular text-lg sm:text-base text-black leading-relaxed space-y-4">
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
 
                          {/*---------- Only visible on lg, xl, and 2xl screens ----------*/}
<div className="hidden lg:grid relative z-10  grid-cols-2 gap-10 text-left text-md font-regular font-rem text-black leading-relaxed">

  <div>
    <p>
      Progress Infiniti is inspired by the ideals of integral education—nurturing not just knowledge,
      but the body, emotions, imagination, and soul. Each experience invites students to explore,
      express, and evolve as whole individuals. Progress Infiniti is inspired by the ideals of integral
      education—nurturing not just knowledge, but the body, emotions, imagination, and soul.
      Each experience invites students to explore, express, and evolve as whole individuals.
    </p>
  </div>


  <div>
    <p>
      Progress Infiniti is inspired by the ideals of integral education—nurturing not just knowledge,
      but the body, emotions, imagination, and soul. Each experience invites students to explore,
      express, and evolve as whole individuals. Progress Infiniti is inspired by the ideals of integral
      education—nurturing not just knowledge, but the body, emotions, imagination, and soul.
      Each experience invites students to explore, express, and evolve as whole individuals.
    </p>
  </div>
</div>


</section>

                          {/*---------- Section ONLY visible on mobile and tablet ----------*/}
<section className="block lg:hidden w-full bg-[#fefcc6] py-8 px-4 sm:px-6 md:px-20 font-sans">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 text-center md:text-left text-lg sm:text-base font-regular font-rem text-black leading-relaxed">
    <p>
      Progress Infiniti is inspired by the ideals of integral education—nurturing not just knowledge,
      but the body, emotions, imagination, and soul. Each experience invites students to explore,
      express, and evolve as whole individuals. Progress Infiniti is inspired by the ideals of integral
      education—nurturing not just knowledge, but the body, emotions, imagination, and soul.
      Each experience invites students to explore, express, and evolve as whole individuals.
    </p>
    <p>
      Progress Infiniti is inspired by the ideals of integral education—nurturing not just knowledge,
      but the body, emotions, imagination, and soul. Each experience invites students to explore,
      express, and evolve as whole individuals. Progress Infiniti is inspired by the ideals of integral
      education—nurturing not just knowledge, but the body, emotions, imagination, and soul.
      Each experience invites students to explore, express, and evolve as whole individuals.
    </p>
  </div>
</section>


              {/* ------------------------------SECTION-5------------------------------ */}
                            {/* -----Section-5 with All Responsive----- */}
                            
<section className="w-full min-h-[65vh] sm:min-h-[70vh] md:min-h-[75vh] lg:min-h-[80vh] bg-white flex items-center justify-end px-4 sm:px-6 md:px-20 py-4 sm:py-6 md:py-8 lg:py-16">
  <div className="w-full max-w-3xl flex justify-center md:justify-end">
    <video
      src={last}
      controls
      autoPlay
      loop
      muted
      className="w-full max-w-[900px] h-[360px] sm:h-[480px] md:h-[580px] lg:h-[700px] object-cover shadow-lg"
    />
  </div>
</section>




    </>
  );
}

export default Aboutus;