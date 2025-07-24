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
    
    // Temporarily hide the sticky header during scroll
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
    <>
      {/* Intro Section - scrolls normally */}
      <div 
        ref={headerRef}
        className="w-full h-screen font-rem text-black flex flex-col justify-between bg-white"
      >
        <div className="flex-grow flex flex-col items-center justify-center px-4 text-center">
          <div className="inline-block text-left">
            <blockquote className="text-xl sm:text-2xl md:text-6xl font-garamond leading-relaxed md:leading-[1.4] tracking-wide md:tracking-wider">
              A hero fears nothing<br />
              complains of nothing<br />
              and never gives way.
            </blockquote>
            <p className="mt-2 text-md md:text-2xl font-rem font-medium text-right">- The Mother</p>
          </div>
        </div>

        {/* Footer */}
        <footer className="w-full bg-black text-white">
          <div className="w-full px-4 md:px-16 border-b border-gray-800">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-center md:text-left">
              {/* LEFT: Scroll Message */}
              <div className="flex flex-col justify-center items-center" style={{ height: '250px' }}>
                <div className="text-md flex flex-col items-center text-center">
                  <p className="mb-6">
                    Unlock Your Potential. Join a Community<br />
                    of Innovators Making Dreams a Reality!
                  </p>
                  <div className="flex flex-col items-center">
                    <p className="text-[#f04e23] text-sm mb-6">SCROLL DOWN</p>
                    <button 
                      onClick={scrollToAbout}
                      className="inline-block animate-bounce focus:outline-none"
                    >
                      <img
                        src={arrow}
                        alt="Down arrow"
                        className="w-10 h-14 hover:opacity-80 transition duration-300"
                      />
                    </button>
                  </div>
                </div>
              </div>

              {/* CENTER: Spiral Image */}
              <div className="flex flex-col items-center justify-center" style={{ height: '300px' }}>
                <img src={spiral} alt="Spiral Logo" className="w-80 h-72 object-contain" />
              </div>
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
          {/* Left nav */}
          <nav className="hidden md:flex space-x-16 text-base md:text-lg font-medium">
            <Link to="/" className="hover:text-red-400">Home</Link>
            <Link to="/workshoplist" className="hover:text-red-400">Workshop</Link>
            <Link to="/facilitatorlist" className="hover:text-red-400">Facilitator</Link>
          </nav>

          {/* Center logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <Link to="/">
              <img src={logo} alt="Logo" className="h-8 md:h-10" />
            </Link>
          </div>

          {/* Right nav */}
          <nav className="hidden md:flex space-x-16 text-base md:text-lg font-medium">
            <Link to="/about" className="hover:text-red-400">About</Link>
            <Link to="/contactus" className="hover:text-red-400">Contact</Link>
            <Link to="/blogs" className="hover:text-red-400">Blogs</Link>
          </nav>

          {/* Mobile menu */}
          <button
            className="md:hidden ml-auto"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-black border-t border-gray-700">
            <nav className="flex flex-col px-6 py-5 space-y-3 text-base font-medium">
              <Link to="/workshoplist" onClick={() => setIsMenuOpen(false)} className="hover:text-red-400">Workshop</Link>
              <Link to="/facilitatorlist" onClick={() => setIsMenuOpen(false)} className="hover:text-red-400">Facilitator</Link>
              <Link to="/about" onClick={() => setIsMenuOpen(false)} className="hover:text-red-400">About</Link>
              <Link to="/contactus" onClick={() => setIsMenuOpen(false)} className="hover:text-red-400">Contact</Link>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <div className="relative">
        {/* Circle Image Grid */}  
        <div className="hidden lg:block absolute top-[380px] left-[49%] transform -translate-x-1/2 w-[800px] h-[800px] border-4 border-black rounded-full -z-10"></div>
                                  
        <section
          ref={aboutSectionRef}
          className="relative h-[1630px] w-full"
          style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Top-left */}
          <div className="absolute top-32 left-32 text-white max-w-2xl z-20 flex flex-col items-start text-left">
            <h2 className="text-4xl">Tapasya of <span className='font-semibold'>Love</span></h2>
            <p className="text-lg mt-12">
              "To pursue an integral education that leads to the <br />
              supramental realisation, four austerities are necessary and<br />
              with them four liberties."
            </p>
          </div>

          {/* Top-right */}
          <div className="absolute top-32 right-32 text-black max-w-2xl z-20 flex flex-col items-start text-left">
            <h2 className="text-4xl">Tapasya of <span className="font-semibold">Knowledge</span></h2>
            <p className="text-lg mt-12">
              "To pursue an integral education that leads to the <br />
              supramental realisation, four austerities are necessary and <br />
              with them four liberties."
            </p>
          </div>

          {/* Bottom-left */}
          <div className="absolute bottom-32 left-32 text-black max-w-2xl z-20 flex flex-col items-start text-left">
            <h2 className="text-4xl">Tapasya of <span className='font-semibold'>Beauty</span></h2>
            <p className="text-lg mt-12">
              "To pursue an integral education that leads to the <br />
              supramental realisation, four austerities are necessary and <br />
              with them four liberties."
            </p>
          </div>

          {/* Bottom-right */}
          <div className="absolute bottom-32 right-32 text-white max-w-2xl z-20 flex flex-col items-start text-left">
            <h2 className="text-4xl">Tapasya of <span className='font-semibold'>Power</span></h2>
            <p className="text-lg mt-12">
              "To pursue an integral education that leads to the <br />
              supramental realisation, four austerities are necessary and <br />
              with them four liberties."
            </p>
          </div>
        </section>

        {/* Workshop Overview Section */}
        <div
          className="w-[100%] mx-auto flex flex-col items-center gap-[100px] px-[60px] py-[120px] bg-cover bg-center relative"
          style={{ backgroundImage: `url(${bgimg})` }}
        >
          {/* Description Text */}
          <div className="flex items-center justify-center gap-2 p-2 self-stretch w-full">
            <p className="flex-1 text-white text-xl text-center leading-snug font-rem mt-[-1px]">
              Our workshops go beyond conventional subjects to offer immersive
              experiences that nurture creativity, curiosity, collaboration, and
              self-growth. Whether you're exploring the world of robotics,
              engaging in deep listening through theatre, building interpersonal
              awareness, or diving into the expressive power of movement and
              colour—each program is designed to awaken potential in all dimensions
              of being. These sessions are more than just skill-building—they are
              spaces for reflection, experimentation, and transformation.
            </p>
          </div>

          {/* Image + Cards Section */}
        <div className="flex flex-row items-start justify-center gap-[120px] w-full">
  {/* Left Image - Aligned to top */}
  <div className="flex items-start">
    <img
      className="w-[400px] h-[650px] object-cover object-top"
      alt="Workshop"
      src={hoveredIndex !== null ? cardData[hoveredIndex].image : cardData[0].image}
    />
  </div>
  
  {/* Right Cards */}
  <div className="flex flex-col gap-[20px] flex-1 text-left max-w-[600px]">
    {cardData.map((card, index) => (
      <div
        key={index}
        onMouseEnter={() => setHoveredIndex(index)}
        onMouseLeave={() => setHoveredIndex(null)}
        className={`flex flex-col items-center px-4 transition-all duration-300 ${
          hoveredIndex === index ? "bg-[#f0542b66]" : ""
        }`}
      >
        <div className="flex items-center justify-center w-full">
          <div className="flex flex-col items-start justify-center gap-4 py-3 flex-1">
            <div className="text-white text-2xl font-rem">{card.title}</div>
            <p className="text-white text-base font-rem font-normal">
              {card.description}
            </p>
          </div>

          <div className="w-10 h-10 flex items-center justify-center relative transition-all duration-300">
            {hoveredIndex === index ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 24 24" strokeWidth="2" stroke="white"
                className="w-8 h-8 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 24 24" strokeWidth="1.5" stroke="white"
                className="w-10 h-10 text-white opacity-50"
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

        {/* Horizontal Scroll Section */}
<div className="relative flex items-center justify-center h-screen text-white overflow-hidden">
  {/* Background: 4 vertical columns */}
  <div className="absolute top-0 left-0 w-full h-full grid grid-cols-4 z-0">
    <div className="bg-white"></div>
    <div className="bg-black"></div>
    <div className="bg-black"></div>
    <div className="bg-black"></div>
  </div>

  <div className="relative z-10 max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 items-center px-4 gap-x-12">
    {/* Left Arrow */}
    <button
      onClick={handlePrev}
      className="absolute left-[-50px] top-1/2 transform -translate-y-1/2 z-10 text-black hover:scale-110 transition"
    >
      <ArrowLeft size={40} />
    </button>

    {/* Image with sharp border */}
    <div className="relative flex justify-center items-center">
      <div className="relative w-[550px] h-[450px]">
        {/* Orange background shadow */}
        <div className="absolute top-[-18px] right-[-18px] w-full h-full bg-[#f04e23] border-4 border-[#f04e23] -z-10"></div>

        {/* Image */}
        <img
          src={sliderData[index].image}
          alt="Decorated room"
          className="w-full h-full object-cover"
        />
      </div>
    </div>

    {/* Text Content */}
    <div className="relative z-10 ml-8 px-4 text-center font-rem md:text-left">
      <p className="text-base font-rem font-normal leading-relaxed mb-4">
        {sliderData[index].text}
      </p>
      <button className="bg-[#f04e23] text-black px-5 py-1.5 font-semibold hover:bg-white transition text-sm">
        Read More
      </button>
    </div>

    {/* Right Arrow */}
    <button
      onClick={handleNext}
      className="absolute right-[-40px] top-1/2 transform -translate-y-1/2 z-10 text-white hover:scale-110 transition"
    >
      <ArrowRight size={40} />
    </button>

    {/* Center Divider */}
    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] transform -translate-x-1/2 z-0" />
  </div>
</div>

        {/* Retreats Section */}
        <div className="w-full pl-12 pt-20 mb-12 flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Left Text */}
          <div className="lg:w-1/2 w-full ml-12 text-center lg:text-left">
            <h2 className=" text-2xl font-rem mb-4">Retreats</h2>
            <p className="text-gray-700 mb-6 max-w-md pr-8 text-base font-rem font-normal">
              In a world of potential, many young people face barriers—societal pressure, financial strain, or self-doubt—that make their dreams feel out of reach.
            </p>
            <Link to="/retreat">
              <button className="bg-[#f04e23] text-black px-3 py-2 text-base font-rem font-normal hover:bg-black hover:text-white transition">
                Explore More
              </button>
            </Link>
          </div>
          {/* Right Image with border effect */}
          <div className="relative w-full px-4 sm:px-0">
            <div className="relative w-full">
              {/* Border background fill and sharp border */}
              <div className="absolute -top-6 -left-6 w-full h-full bg-[#f04e23] border-t-4 border-l-4 border-[#f04e23] -z-10"></div>

              {/* Full-width Image */}
              <img
                src={retraits}
                alt="Retreat"
                className="w-[1423px] h-[700px] object-cover"
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
    </>
  );
}

export default Home;