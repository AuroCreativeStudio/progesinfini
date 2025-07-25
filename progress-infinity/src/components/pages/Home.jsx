import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import spiral from '../../assets/spinner.gif';
import logo from '../../assets/colourLogo.png';
import bgimg from '../../assets/homebg1.png';
import test from '../../assets/test.png';
import demo from '../../assets/demo.png';
import bg from '../../assets/frame.png';
import retraits from '../../assets/retraits.png';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import './Home.css';
import circle1 from '../../assets/circle1.png';
import circle4 from '../../assets/circle4.png';
import home from '../../assets/testimg.png';
import home1 from '../../assets/circle1.png';
import home2 from '../../assets/circle2.png';
import line from '../../assets/line.jpeg';  
import { Menu, X } from 'lucide-react';
import arrow from '../../assets/down.png';
import EnquireForm from '../pages/EnquireForm';

function Home() {
  const [isSticky, setIsSticky] = useState(false);
  const [index, setIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showEnquireForm, setShowEnquireForm] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const headerRef = useRef(null);
  const aboutSectionRef = useRef(null);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % sliderData.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + sliderData.length) % sliderData.length);
  };

  const scrollToAbout = () => {
    aboutSectionRef.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
    
    setIsSticky(false);
    setTimeout(() => setIsSticky(true), 500);
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
      image: demo,
    },
    {
      title: 'Creative Expression',
      description:
        'Workshops that cultivate imagination and originality across art, drama, and storytelling.',
      image: home,
    },
    {
      title: 'Emotional Intelligence',
      description:
        'Helping youth navigate emotions and relationships through awareness-based practices.',
      image: demo,
    },
    {
      title: 'Collaboration & Community',
      description:
        'Building collective responsibility, empathy, and teamwork through group experiences.',
      image: home,
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
      if (headerRef.current) {
        const headerHeight = headerRef.current.offsetHeight;
        const scrollPosition = window.scrollY;
        setIsSticky(scrollPosition > headerHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="home-container">
      {/* Intro Section - scrolls normally */}
    <div 
  ref={headerRef}
  className="w-full min-h-screen font-rem text-black flex flex-col justify-between bg-white"
>
  {/* Main Content */}
  <div className="flex-grow flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 text-center">
    <div className="inline-block text-left max-w-4xl mx-auto">
      <blockquote className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-garamond leading-relaxed sm:leading-normal md:leading-[1.4] tracking-wide md:tracking-wider">
        A hero fears nothing<br />
        complains of nothing<br />
        and never gives way.
      </blockquote>
      <p className="mt-2 sm:mt-3 md:mt-4 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-rem font-medium text-right">- The Mother</p>
    </div>
  </div>

  {/* Footer */}
  <footer className="w-full bg-black text-white">
    <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 border-b border-gray-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 items-center text-center md:text-left">
        {/* LEFT: Scroll Message */}
        <div className="flex flex-col justify-center items-center h-[200px] sm:h-[250px] md:h-[300px]">
          <div className="text-sm sm:text-base md:text-lg flex flex-col items-center text-center">
            <p className="mb-4 sm:mb-6">
              Unlock Your Potential. Join a Community<br className="hidden sm:block" />
              of Innovators Making Dreams a Reality!
            </p>
            <div className="flex flex-col items-center">
              <p className="text-[#f04e23] text-xs sm:text-sm md:text-base mb-4 sm:mb-6">SCROLL DOWN</p>
              <button 
                onClick={scrollToAbout}
                className="inline-block animate-bounce focus:outline-none"
              >
                <img
                  src={arrow}
                  alt="Down arrow"
                  className="w-8 h-12 sm:w-10 sm:h-14 hover:opacity-80 transition duration-300"
                />
              </button>
            </div>
          </div>
        </div>

        {/* CENTER: Spiral Image - Hidden on smallest screens */}
        <div className="hidden sm:flex flex-col items-center justify-center h-[250px] sm:h-[300px] md:h-[350px]">
          <img 
            src={spiral} 
            alt="Spiral Logo" 
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 object-contain" 
          />
        </div>

        {/* RIGHT: Empty column for balance - Hidden on mobile */}
        <div className="hidden md:block h-[300px]"></div>
      </div>
    </div>
  </footer>
</div>

      {/* Sticky Header - appears after scrolling past intro */}
    <header
  className={`w-full z-50 bg-black text-white shadow-md fixed top-0 transition-all duration-300 ${
    isSticky ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'
  }`}
>
  <div className="max-w-6xl mx-auto px-6 py-5 md:py-6 flex justify-between items-center relative">
    {/* Left nav - shows above 970px */}
    <nav className="hidden lg:flex space-x-12 xl:space-x-16 text-base lg:text-lg font-medium">
      <Link to="/" className="hover:text-red-400">Home</Link>
      <Link to="/workshoplist" className="hover:text-red-400">Workshop</Link>
      <Link to="/facilitatorlist" className="hover:text-red-400">Facilitator</Link>
    </nav>

    {/* Center logo - adjusted positioning */}
    <div className="absolute left-1/2 transform -translate-x-1/2 lg:static lg:left-auto lg:transform-none lg:translate-x-0">
      <Link to="/">
        <img src={logo} alt="Logo" className="h-8 md:h-10" />
      </Link>
    </div>

    {/* Right nav - shows above 970px */}
    <nav className="hidden lg:flex space-x-12 xl:space-x-16 text-base lg:text-lg font-medium">
      <Link to="/about" className="hover:text-red-400">About</Link>
      <Link to="/contactus" className="hover:text-red-400">Contact</Link>
      <Link to="/blogs" className="hover:text-red-400">Blogs</Link>
    </nav>

    {/* Mobile menu button - shows below 970px */}
    <button
      className="lg:hidden ml-auto"
      onClick={() => setIsMenuOpen(!isMenuOpen)}
      aria-label="Toggle Menu"
    >
      {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
    </button>
  </div>

  {/* Mobile menu - shows below 970px */}
  {isMenuOpen && (
    <div className="lg:hidden bg-black border-t border-gray-700">
      <nav className="flex flex-col px-6 py-5 space-y-3 text-base font-medium">
        <Link to="/" onClick={() => setIsMenuOpen(false)} className="hover:text-red-400">Home</Link>
        <Link to="/workshoplist" onClick={() => setIsMenuOpen(false)} className="hover:text-red-400">Workshop</Link>
        <Link to="/facilitatorlist" onClick={() => setIsMenuOpen(false)} className="hover:text-red-400">Facilitator</Link>
        <Link to="/about" onClick={() => setIsMenuOpen(false)} className="hover:text-red-400">About</Link>
        <Link to="/contactus" onClick={() => setIsMenuOpen(false)} className="hover:text-red-400">Contact</Link>
        <Link to="/blogs" onClick={() => setIsMenuOpen(false)} className="hover:text-red-400">Blogs</Link>
      </nav>
    </div>
  )}
</header>

                {/* ------------------------------SECTION-1----------------------------- */}
                               {/* Section of Tapasaya (circle section) */}

      <div className="relative">
                        {/*---------- Desktop Circle – visible on lg+ ---------- */}
        <div className="hidden lg:block absolute top-[380px] left-[49%] transform -translate-x-1/2 w-[800px] h-[800px] border-4 border-black rounded-full -z-10"></div>
   <section
  ref={aboutSectionRef}
  className="relative hidden lg:block w-full h-[1430px]"
  style={{
    backgroundImage: `url(${bg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>
  <div className="absolute inset-0 z-20 grid grid-cols-2 grid-rows-2">
    
    
  {/* Box 1 */}
<div className="p-12 pt-32 flex flex-col items-center justify-start text-white text-left">
  <div className="w-full max-w-md">
    <h2 className="text-2xl lg:text-3xl xl:text-4xl font-semibold">
      Tapasya of <span className="font-bold">Love</span>
    </h2>
    <p className="mt-4 text-base lg:text-lg xl:text-xl">
      "To pursue an integral education that leads to the supramental realisation,
      four austerities are necessary and with them four liberties."
    </p>
  </div>
</div>

{/* Box 2 */}
<div className="p-12 pt-32 flex flex-col items-center justify-start text-black text-left">
  <div className="w-full max-w-md">
    <h2 className="text-2xl lg:text-3xl xl:text-4xl font-semibold">
      Tapasya of <span className="font-bold">Knowledge</span>
    </h2>
    <p className="mt-4 text-base lg:text-lg xl:text-xl">
      "To pursue an integral education that leads to the supramental realisation,
      four austerities are necessary and with them four liberties."
    </p>
  </div>
</div>

   {/* Box 3 */}
<div className="p-12 pb-32 flex flex-col items-center justify-end text-black text-left">
  <div className="w-full max-w-md">
    <h2 className="text-2xl lg:text-3xl xl:text-4xl font-semibold">
      Tapasya of <span className="font-bold">Beauty</span>
    </h2>
    <p className="mt-4 text-base lg:text-lg xl:text-xl">
      "To pursue an integral education that leads to the supramental realisation,
      four austerities are necessary and with them four liberties."
    </p>
  </div>
</div>

{/* Box 4 */}
<div className="p-12 pb-32 flex flex-col items-center justify-end text-white text-left">
  <div className="w-full max-w-md">
    <h2 className="text-2xl lg:text-3xl xl:text-4xl font-semibold">
      Tapasya of <span className="font-bold">Power</span>
    </h2>
    <p className="mt-4 text-base lg:text-lg xl:text-xl">
      "To pursue an integral education that leads to the supramental realisation,
      four austerities are necessary and with them four liberties."
    </p>
  </div>
</div>

  </div>
</section>

  
                  {/*---------- MOBILE/TABLET Version – visible below lg ----------*/}
   <section className="block lg:hidden bg-black text-white px-4 py-12 space-y-6">
  {/* content-1 */}
  <div
    className="w-full aspect-square bg-cover bg-center flex flex-col items-center justify-start text-center px-4"
    style={{ backgroundImage: `url(${circle1})` }}
  >
    <h2 className="text-xl sm:text-2xl md:text-3xl mt-32 font-semibold">
      Tapasya of <span className="font-bold">Love</span>
    </h2>
    <p className="mt-4 text-sm sm:text-base md:text-lg">
      "To pursue an integral education that leads to the supramental realisation,
      four austerities are necessary and with them four liberties."
    </p>
  </div>

  {/* content-2 */}
  <div className="w-full aspect-square flex flex-col justify-center items-center text-center px-4 py-6 bg-white text-black shadow">
    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">
      Tapasya of <span className="font-bold">Love</span>
    </h2>
    <p className="mt-4 text-sm sm:text-base md:text-lg">
      "To pursue an integral education that leads to the supramental realisation,
      four austerities are necessary and with them four liberties."
    </p>
  </div>

  {/* content-3 */}
  <div className="w-full aspect-square flex flex-col justify-center items-center text-center px-4 py-6 bg-white text-black shadow">
    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">
      Tapasya of <span className="font-bold">Knowledge</span>
    </h2>
    <p className="mt-4 text-sm sm:text-base md:text-lg">
      "To pursue an integral education that leads to the supramental realisation,
      four austerities are necessary and with them four liberties."
    </p>
  </div>

  {/* content-4 */}
  <div
    className="w-full aspect-square bg-cover bg-center flex flex-col items-center justify-end text-center px-4"
    style={{ backgroundImage: `url(${circle4})` }}
  >
    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">
      Tapasya of <span className="font-bold">Love</span>
    </h2>
    <p className="mt-4 text-sm sm:text-base md:text-lg mb-32">
      "To pursue an integral education that leads to the supramental realisation,
      four austerities are necessary and with them four liberties."
    </p>
  </div>
</section>
  </div>

              {/*------------------------------ SECTION-2---------------------------- */}
                                {/*Responsive for Workshop Overview Section */}
     <div
  className="w-full mx-auto flex flex-col items-center gap-16 md:gap-[100px] px-6 md:px-12 py-20 md:py-[120px] bg-cover bg-center relative"
  style={{ backgroundImage: `url(${bgimg})` }}
>
  {/* Description Text */}
  <div className="flex items-center justify-center gap-2 p-2 w-full">
    <p className="text-white text-base sm:text-lg md:text-xl text-center leading-snug font-rem">
      Our workshops go beyond conventional subjects to offer immersive
      experiences that nurture creativity, curiosity, collaboration, and
      self-growth. Whether you're exploring the world of robotics, engaging in
      deep listening through theatre, building interpersonal awareness, or
      diving into the expressive power of movement and colour—each program is
      designed to awaken potential in all dimensions of being. These sessions
      are more than just skill-building—they are spaces for reflection,
      experimentation, and transformation.
    </p>
  </div>

  {/* Image + Cards Section */}
  <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-10 lg:gap-[120px] w-full">
    {/* Left Image */}
    <div className="flex items-center justify-center">
      <img
        className="w-[250px] h-[400px] md:w-[350px] md:h-[550px] lg:w-[400px] lg:h-[650px] object-cover object-top"
        alt="Workshop"
        src={hoveredIndex !== null ? cardData[hoveredIndex].image : cardData[0].image}
      />
    </div>

    {/* Right Cards */}
    <div className="flex flex-col gap-6 flex-1 text-left max-w-full md:max-w-[600px] px-2 sm:px-4">
      {cardData.map((card, index) => (
        <div
          key={index}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          className={`flex flex-col items-center px-2 sm:px-4 transition-all duration-300 ${
            hoveredIndex === index ? "bg-[#f0542b66]" : ""
          }`}
        >
          <div className="flex flex-col md:flex-row items-center md:items-start w-full gap-4 py-4">
            <div className="flex flex-col items-start justify-center gap-2 flex-1">
              <div className="text-white text-lg md:text-2xl font-rem">{card.title}</div>
              <p className="text-white text-sm md:text-base font-rem font-normal">
                {card.description}
              </p>
            </div>

       <div className="w-10 h-10 flex items-center justify-center sm:justify-end relative transition-all duration-300">
  {hoveredIndex === index ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="white"
      className="w-6 h-6 sm:w-6 sm:h-6 md:w-6 md:h-6 lg:w-8 lg:h-8 xl:w-8 xl:h-8 text-white"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
      />
    </svg>
  ) : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="white"
      className="w-6 h-6 sm:w-6 sm:h-6 md:w-6 md:h-6 lg:w-10 lg:h-10 xl:w-10 xl:h-10 text-white opacity-50"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
      />
    </svg>
  )}
</div>
          </div>
          <img className="w-full h-px object-cover" alt="Line" src={line} />
        </div>
      ))}

      {/* CTA Button */}
      <div className="inline-flex font-rem flex-col items-start gap-2 pt-5 px-4">
        <button className="bg-[#f04e23] text-black px-5 py-2 font-semibold hover:bg-white transition">
          Enquire More
        </button>
      </div>
    </div>
  </div>
</div>

            {/*------------------------------ SECTION-3 ------------------------------*/}
                            {/* Carousel Section with All Responsive*/}

<div className="relative flex items-center justify-center h-screen text-white overflow-hidden">
 
  <div className="absolute top-0 left-0 w-full h-full z-0">
                          {/* For desktop – 4-column layout background */}
    <div className="hidden md:grid grid-cols-4 h-full">
      <div className="bg-white"></div>
      <div className="bg-black"></div>
      <div className="bg-black"></div>
      <div className="bg-black"></div>
    </div>

                           {/* For mobile/tablet – full black background */}
    <div className="md:hidden bg-black w-full h-full" />
  </div>

                                {/* Responsive container */}
  <div
    className="relative z-10 w-full flex flex-col md:grid md:grid-cols-2 items-center px-6 sm:px-8 md:px-10 lg:px-4 gap-x-8 md:gap-x-10"
    style={{
      maxWidth: 'clamp(63.75rem, 92vw, 72rem)' // 1020px to 1152px
    }}
  >
                                   {/* Arrows – show only on md+ */}
    <button
      onClick={handlePrev}
      className="hidden md:block absolute left-1 sm:left-2 md:left-4 lg:left-[-35px] xl:left-[-50px] top-1/2 transform -translate-y-1/2 z-10 text-black hover:scale-110 transition"
    >
      <ArrowLeft size={32} className="w-8 h-8" />
    </button>

                                 {/* Image – onClick to change content */}
    <div
      className="relative flex justify-center items-center w-full cursor-pointer mb-8 md:mb-0" // Added mb-8 for mobile/tablet
      onClick={handleNext}
    >
      <div className="relative w-full max-w-[500px] sm:max-w-[550px] md:max-w-[600px] h-[400px] sm:h-[450px] md:h-[500px]">
        <div className="absolute top-[-12px] sm:top-[-15px] md:top-[-18px] right-[-12px] sm:right-[-15px] md:right-[-18px] w-full h-full bg-[#f04e23] border-3 sm:border-4 border-[#f04e23] -z-10" />
        <img
          src={sliderData[index].image}
          alt="Decorated room"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
<div className="relative 
                w-[300px] h-[300px] 
                sm:w-[350px] sm:h-[350px] 
                md:w-[400px] md:h-[400px] 
                lg:w-[500px] lg:h-[500px] 
                flex flex-col justify-center items-center text-center">
  <p className="text-sm sm:text-base font-rem font-normal leading-relaxed mb-4">
    {sliderData[index].text}
  </p>
  <button className="bg-[#f04e23] text-black w-fit px-3 py-1 font-semibold hover:bg-white transition text-sm">
    Read More
  </button>
</div>



    <button
      onClick={handleNext}
      className="hidden md:block absolute right-1 sm:right-2 md:right-4 lg:right-[-35px] xl:right-[-40px] top-1/2 transform -translate-y-1/2 z-10 text-white hover:scale-110 transition"
    >
      <ArrowRight size={32} className="w-8 h-8" />
    </button>
  </div>
</div>
                       {/*------------------------------ SECTION-4 ---------------------------*/}
                                 {/*----- Retreats Section with Full Responsive----- */}
                                 
<div className="w-full px-4 sm:px-8 pt-20 pb-12 flex flex-col lg:flex-row lg:items-center justify-between gap-10">
  {/* Left Text */}
  <div className="w-full lg:w-1/2 text-center lg:text-left flex flex-col items-center lg:items-start">
    <h2 className="text-2xl font-rem mb-4">Retreats</h2>
    <p className="text-gray-700 mb-6 max-w-md text-base font-rem font-normal">
      In a world of potential, many young people face barriers—societal pressure, financial strain, or self-doubt—that make their dreams feel out of reach.
    </p>
    <Link to="/retreat">
      <button className="bg-[#f04e23] text-black px-4 py-2 text-base font-rem font-normal hover:bg-black hover:text-white transition">
        Explore More
      </button>
    </Link>
  </div>

  {/* Right Image with border effect */}
  <div className="relative w-full flex justify-center">
    <div className="relative w-full max-w-[90%] sm:max-w-[500px] md:max-w-[600px] lg:max-w-full">
      {/* Orange border behind */}
      <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 w-full h-full bg-[#f04e23] border-t-4 border-l-4 border-[#f04e23] -z-10"></div>

      {/* Responsive Image */}
      <img
        src={retraits}
        alt="Retreat"
        className="w-full h-[220px] sm:h-[320px] md:h-[400px] lg:w-[1423px] lg:h-[550px] object-cover"
      />
    </div>
  </div>
</div>


 
      <button
        onClick={() => setShowEnquireForm(true)}
        className="fixed bottom-6 right-6 z-50 bg-[#f04e23] text-black px-5 py-2 font-normal hover:bg-white shadow-lg transition-all"
      >
        Enquire Now
      </button>
      {showEnquireForm && <EnquireForm onClose={() => setShowEnquireForm(false)} />}
    </div>
  );
}

export default Home;