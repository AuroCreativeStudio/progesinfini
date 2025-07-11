import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import spiral from '../../assets/spinner.gif';
import logo from '../../assets/colourLogo.png';
// import circle1 from '../../assets/circle1.png';
// import circle4 from '../../assets/circle4.png';
import bgimg from '../../assets/homebg.png';
import test from '../../assets/test.png';

import retraits from '../../assets/retraits.png';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import './Home.css';
import home from '../../assets/testimg.png';
import home1 from '../../assets/circle1.png';
import home2 from '../../assets/circle2.png';
import home3 from '../../assets/circle3.png';
import home4 from '../../assets/circle4.png';

function Home() {
  const [isSticky, setIsSticky] = useState(false);
  const [scrollY, setScrollY] = useState(0);
    const [activeIndex, setActiveIndex] = useState(0);
     const [index, setIndex] = useState(0);
      const handleNext = () => {
    setIndex((prev) => (prev + 1) % sliderData.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + sliderData.length) % sliderData.length);
  };

  const cardData = [
     {
    title: 'Education',
    description:
      'In a world of potential, many young people face barriers—societal pressure, financial strain, or self-doubt—that make their dreams...',
    image: home,
  },
  {
    title: 'Integral Education',
    description:
      'In a world of potential, many young people face barriers—societal pressure, financial strain, or self-doubt—that make their dreams...',
    image: home1,
  },
  {
    title: 'Creative Expression',
    description:
      'Workshops that cultivate imagination and originality across art, drama, and storytelling.',
    image: home2,
  },
  {
    title: 'Emotional Intelligence',
    description:
      'Helping youth navigate emotions and relationships through awareness-based practices.',
    image: home3,
  },
  {
    title: 'Collaboration & Community',
    description:
      'Building collective responsibility, empathy, and teamwork through group experiences.',
    image: home4,
  },
];

const sliderData = [
  {
    image: test,
    text: 'In a world of potential, many young people face barriers—societal pressure, financial strain, or self-doubt—that make their dreams feel out of reach.',
  },
  {
    image: home1,
    text: 'Workshops that cultivate imagination and originality across art, drama, and storytelling.',
  },
  {
    image: home2,
    text: 'Helping youth navigate emotions and relationships through awareness-based practices.',
  },
];

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setScrollY(currentScroll);
      if (!isSticky && currentScroll > 300) {
        setIsSticky(true);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isSticky]);

  const introStyle = {
    opacity: Math.max(1 - scrollY / 300, 0),
    transform: `translateY(-${Math.min(scrollY / 6, 50)}px)`,
    transition: 'opacity 0.3s ease, transform 0.3s ease',
  };

  return (
    <>
      {/* Intro Section */}
      {!isSticky && (
        <div
          style={introStyle}
          className="w-full h-screen font-rem text-black flex flex-col justify-between bg-white"
        >
          <div className="flex-grow flex flex-col items-center justify-center px-4 text-center">
            <blockquote className="text-xl sm:text-2xl md:text-4xl italic font-medium leading-snug">
              A hero fears nothing<br />
              complains of nothing<br />
              and never gives way.
            </blockquote>
            <p className="mt-4 text-sm md:text-base font-semibold">- The Mother</p>
          </div>

          {/* Footer */}
          <footer className="w-full bg-black text-white">
            <div className="w-full px-4 md:px-12 py-8 border-b border-gray-800">
              <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-center md:text-left">
                <div className="text-sm space-y-2">
                  <p>
                    Unlock Your Potential. Join a Community<br />
                    of Innovators Making Dreams a Reality!
                  </p>
                  <Link to="/about" className="text-red-400 hover:text-red-300 font-semibold">
                    Read More
                  </Link>
                </div>
                <div className="flex flex-col items-center">
                  <img src={spiral} alt="Spiral Logo" className="w-24 h-24 object-contain" />
                </div>
                <div className="text-center md:text-right">
                  <p className="text-purple-500 font-semibold tracking-wide">Progress Infini</p>
                </div>
              </div>
            </div>

            <div className="w-full py-4 bg-black">
              <div className="max-w-5xl mx-auto flex flex-wrap justify-between items-center px-4 gap-y-4">
                <Link to="/workshoplist" className="hover:text-red-400 text-sm md:text-base px-2">Workshop</Link>
                <Link to="/facilitatorlist" className="hover:text-red-400 text-sm md:text-base px-2">Facilitator</Link>
                <Link to="/" className="px-2">
                  <img src={logo} alt="Logo" className="h-6 md:h-8" />
                </Link>
                <Link to="/about" className="hover:text-red-400 text-sm md:text-base px-2">About</Link>
                <Link to="/contactus" className="hover:text-red-400 text-sm md:text-base px-2">Contact</Link>
              </div>
            </div>
          </footer>
        </div>
      )}

      {/* Sticky Header */}
      {isSticky && (
        <div className="fixed top-0 w-full bg-black text-white py-4 z-50 shadow-md">
          <div className="max-w-5xl mx-auto flex flex-wrap justify-between items-center px-4 gap-y-4">
            <Link to="/workshoplist" className="hover:text-red-400 text-sm md:text-base px-2">Workshop</Link>
            <Link to="/facilitatorlist" className="hover:text-red-400 text-sm md:text-base px-2">Facilitator</Link>
            <Link to="/" className="px-2">
              <img src={logo} alt="Logo" className="h-6 md:h-8" />
            </Link>
            <Link to="/about" className="hover:text-red-400 text-sm md:text-base px-2">About</Link>
            <Link to="/contactus" className="hover:text-red-400 text-sm md:text-base px-2">Contact</Link>
          </div>
        </div>
      )}

      {/* Circle Image Grid */}
     
{/* {isSticky && (
  <div className="hidden lg:block absolute top-[380px] left-[49%] transform -translate-x-1/2 w-[800px] h-[800px] border-4 border-black rounded-full -z-10"></div>
)} */}


      {/* <div className={`w-full ${isSticky ? 'pt-2' : ''}`}>
        <section className="w-full overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 w-full">
          <div className="w-full relative">
 
  <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-10">
    <div className="px-4 py-2 rounded-full backdrop-blur-md bg-white/30 border border-white/40 shadow-md text-black text-sm font-semibold">
      Your Top Text
    </div>
  </div>


  <img src={circle1} alt="Circle 1" className="w-full object-contain" />
</div>

            <div className="w-full"></div>
            <div className="w-full"></div>
            <div className="w-full">
              <img src={circle4} alt="Circle 4" className="w-full object-contain" />
            </div>
          </div>
        </section>
      </div> */}




       <div className="grid-container">
      <div className="grid-item top-left">
        <div className="content">
          <div className="title">Tapasya of <span>Love</span></div>
        </div>
      </div>
      <div className="grid-item top-right">
        <div className="content">
          <div className="title">Tapasya of <span>Knowledge</span></div>
          <div className="quote">
            "To pursue an integral education that leads to the supramental realisation,
            four austerities are necessary; and with them four liberations."
          </div>
        </div>
      </div>
      <div className="grid-item bottom-left">
        <div className="content">
          <div className="title">Tapasya of <span>Beauty</span></div>
        </div>
      </div>
      <div className="grid-item bottom-right">
        <div className="content">
          <div className="title">Tapasya of <span>Power</span></div>
          <div className="quote">
            "There is no end to progress and every day one learns to do better what one does."
          </div>
        </div>
      </div>

      {/* Glassy Center Circle */}
      <div className="center-circle"></div>
    </div>

      {/* Workshop Overview Section */}
      <div
        className="w-full bg-cover bg-center bg-no-repeat text-white"
        style={{
          backgroundImage: `url(${bgimg})`,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 py-20 flex flex-col gap-16">
          <h1 className="text-lg sm:text-xl md:text-2xl text-center max-w-4xl mx-auto leading-relaxed">
            Our workshops go beyond conventional subjects to offer immersive experiences that nurture creativity,
            curiosity, collaboration, and self-growth. Whether you're exploring the world of robotics, theatre,
            interpersonal awareness, or expressive movement—each program is designed to awaken potential in all
            dimensions of being.
          </h1>

          <div className="grid grid-cols-1 mt-20 md:grid-cols-2 gap-8 items-center">
      {/* Left Image (changes based on hover) */}
      <div className="relative w-full">
        <img
          src={cardData[activeIndex].image}
          alt="Artwork"
          className="rounded shadow-lg w-full max-w-md mx-auto transition-all duration-300"
        />
      </div>

      {/* Right List Cards */}
      <div className="space-y-4">
        {cardData.map((card, i) => (
          <div
            key={i}
            className="group relative bg-gradient-to-r from-orange-600/80 to-transparent hover:from-orange-600 transition-colors duration-300 px-6 py-4 cursor-pointer shadow-md flex items-center"
            onMouseEnter={() => setActiveIndex(i)}
          >
            <div className="flex-grow">
              <h3 className="text-white text-lg font-semibold">{card.title}</h3>
              <p className="text-white text-sm">{card.description}</p>
            </div>

            <div className="ml-4 text-white group-hover:translate-x-1 transition-transform">
              <ArrowRight size={20} />
            </div>
          </div>
        ))}

        <button className="mt-6 bg-[#f04e23] hover:bg-[#c93e1b] text-white font-bold px-6 py-2 text-sm">
          Explore More
        </button>
      </div>
    </div>
          </div>
        </div>
   

      {/* Horizontal Scroll Section */}
     <div className="relative flex items-center justify-center h-screen text-white overflow-hidden">
  {/* Background: 4 vertical columns */}
  <div className="absolute top-0 left-0 w-full h-full grid grid-cols-4 z-0">
    <div className="bg-white"></div>
    <div className="bg-black"></div>
    <div className="bg-black"></div>
    <div className="bg-black"></div>
  </div>

 <div className="relative z-10 max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 items-center px-4">
  {/* Left Arrow */}
  <button
    onClick={handlePrev}
    className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 text-black hover:scale-110 transition"
  >
    <ArrowLeft size={24} />
  </button>

  {/* Image with sharp border */}
  <div className="relative flex justify-center items-center">
    <div className="relative">
      <div className="absolute -top-4 -right-4 w-full h-full bg-[#f04e23] border-4 border-[#f04e23] -z-10"></div>

      <img
        src={sliderData[index].image}
        alt="Decorated room"
        className="max-w-md object-cover"
      />
    </div>
  </div>

  {/* Text Content */}
  <div className="relative z-10 px-6 text-center md:text-left">
    <p className="text-sm leading-relaxed mb-6">
      {sliderData[index].text}
    </p>
    <button className="bg-[#f04e23] text-black px-6 py-2 font-semibold hover:bg-white transition">
      Read More
    </button>
  </div>

  {/* Right Arrow */}
  <button
    onClick={handleNext}
    className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 text-white hover:scale-110 transition"
  >
    <ArrowRight size={24} />
  </button>

  {/* Center Divider */}
  <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-white/10 transform -translate-x-1/2 z-0" />
</div>

</div>


      {/* Retreats Section */}
      <div className="w-full px-4 mx-auto sm:px-6 md:px-12 py-12 flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Left Text */}
        <div className="lg:w-1/2 w-full text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Retreats</h2>
          <p className="text-gray-700 mb-6 max-w-md mx-auto lg:mx-0">
            In a world of potential, many young people face barriers—societal pressure, financial strain, or self-doubt—that make their dreams feel out of reach.
          </p>
          <button className="bg-[#f04e23] text-white px-6 py-2 font-semibold hover:bg-[#c93e1b] transition">
            Explore More
          </button>
        </div>

        {/* Right Image with border effect */}
<div className="relative flex justify-center px-4 sm:px-0">
  <div className="relative w-full max-w-2xl sm:max-w-sm md:max-w-md">
    {/* Border background fill and sharp border */}
    <div className="absolute -top-3 -left-3 w-full h-full bg-[#f04e23] border-t-4 border-l-4 border-[#f04e23] -z-10"></div>

    {/* Image with sharp edges */}
    <img
      src={retraits}
      alt="Retreat"
      className="w-full object-cover"
    />
  </div>
</div>

      </div>
    </>
  );
}

export default Home;
