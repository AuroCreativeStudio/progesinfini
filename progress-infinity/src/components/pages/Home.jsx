import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import spiral from '../../assets/spinner.gif';
import logo from '../../assets/colourLogo.png';
// import circle1 from '../../assets/circle1.png';
// import circle4 from '../../assets/circle4.png';
import bgimg from '../../assets/homebg1.png';
import test from '../../assets/test.png';
import demo from '../../assets/demo.png';
import bg from '../../assets/new.png';
import retraits from '../../assets/retraits.png';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import './Home.css';
import home from '../../assets/testimg.png';
import home1 from '../../assets/circle1.png';
import home2 from '../../assets/circle2.png';
import line from '../../assets/line.jpeg';  
import { Menu, X } from 'lucide-react';



import EnquireForm from '../pages/EnquireForm';



function Home() {
  const [isSticky, setIsSticky] = useState(false);
  const [scrollY, setScrollY] = useState(0);
    // const [activeIndex, setActiveIndex] = useState(0);
     const [index, setIndex] = useState(0);
     const [isMenuOpen, setIsMenuOpen] = useState(false);
     const [showEnquireForm, setShowEnquireForm] = useState(false);
     const [hoveredIndex, setHoveredIndex] = useState(null);
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

// const tapasyaData = [
//   {
//     title: "Love",
//     quote: "",
//     textColor: "text-white",
//     position: "items-start",
//   },
//   {
//     title: "Knowledge",
//     quote:
//       "To pursue an integral education that leads to the supramental realisation, four austerities are necessary, and with them four liberations.",
//     textColor: "text-black",
//     position: "items-start",
//   },
//   {
//     title: "Beauty",
//     quote: "",
//     textColor: "text-black",
//     position: "justify-end items-start",
//   },
//   {
//     title: "Power",
//     quote:
//       "There is no end to progress and every day one can learn to do better what one does.",
//     textColor: "text-white",
//     position: "justify-end items-start",
//   },
// ];


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
  <div className="inline-block text-left">
  <blockquote
    className="text-xl sm:text-2xl md:text-6xl font-charm leading-relaxed md:leading-[1.4] tracking-wide md:tracking-wider"
  >
    A hero fears nothing<br />
    complains of nothing<br />
    and never gives way.
  </blockquote>
  <p className="mt-2 text-md md:text-2xl font-rem font-medium text-right">- The Mother</p>
</div>

</div>

          {/* Footer */}
          <footer className="w-full bg-black text-white">
            <div className="w-full px-4 md:px-16 py-10 border-b border-gray-800">
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
                  <img src={spiral} alt="Spiral Logo" className="w-96 h-52 object-contain" />
                </div>
                {/* <div className="text-center md:text-right">
                  <p className="text-purple-500 font-semibold tracking-wide">Progress Infini</p>
                </div> */}
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
  <header className="fixed top-0 w-full bg-black text-white z-50 shadow-md">
    <div className="max-w-6xl mx-auto px-6 py-5 md:py-6 flex justify-between items-center relative">
      
      {/* Left nav links (Desktop) */}
      <nav className="hidden md:flex space-x-16 text-base md:text-lg font-medium">
        <Link to="/" className="hover:text-red-400">Home</Link>
        <Link to="/workshoplist" className="hover:text-red-400">Workshop</Link>
        <Link to="/facilitatorlist" className="hover:text-red-400">Facilitator</Link>
      </nav>

      {/* Center logo (Always visible) */}
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <Link to="/">
          <img src={logo} alt="Logo" className="h-8 md:h-10" />
        </Link>
      </div>

      {/* Right nav links (Desktop) */}
      <nav className="hidden md:flex space-x-16 text-base md:text-lg font-medium">
        <Link to="/about" className="hover:text-red-400">About</Link>
        <Link to="/contactus" className="hover:text-red-400">Contact</Link>
        <Link to="/blogs" className="hover:text-red-400">Blogs</Link>
      </nav>

      {/* Mobile Burger Menu Button */}
      <button
        className="md:hidden ml-auto"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle Menu"
      >
        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>
    </div>

    {/* Mobile Dropdown Menu */}
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
)}


      {/* Circle Image Grid */}
     
{isSticky && (
  <div className="hidden lg:block absolute top-[380px] left-[49%] transform -translate-x-1/2 w-[800px] h-[800px] border-4 border-black rounded-full -z-10"></div>
)}

{/* 
      <div className={`w-full ${isSticky ? 'pt-2' : ''}`}>
       <section className="w-full overflow-hidden">
  <div className="grid grid-cols-1 md:grid-cols-2 w-full">
   
    <div className="w-full relative">
      <img src={circle1} alt="Circle 1" className="w-full object-contain" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center space-y-2 px-4">
        <h3 className="text-2xl md:text-4xl font-bold">Tapasya of Love </h3>
        <p className="text-base md:text-lg">
          “To pursue an integral education that leads to the supramental realisation, four austerities are necessary, and with them four liberations.”
        </p>
      </div>
    </div>

 
    <div className="w-full flex items-center justify-center mb-12 p-6 md:p-12">
      <div className="text-start">
        <h3 className="text-2xl md:text-3xl font-semibold text-black mb-4">Tapasya of Knowledge </h3>
        <p className="text-md md:text-lg text-gray-700 leading-relaxed">
          “To pursue an integral education that leads to the supramental realisation, four austerities are necessary, and with them four liberations.”
        </p>
      </div>
    </div>

  
    <div className="w-full flex items-center justify-center mb-12 p-6 md:p-12">
      <div className="text-start">
        <h3 className="text-2xl md:text-3xl font-semibold text-black mb-4">Tapasya of Beauty </h3>
        <p className="text-md md:text-lg text-gray-700 leading-relaxed">
          “To pursue an integral education that leads to the supramental realisation, four austerities are necessary, and with them four liberations.”
        </p>
      </div>
    </div>


  
   <div className="w-full relative">
  <img src={circle4} alt="Circle 4" className="w-full object-contain" />
  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center px-4 space-y-2">
    <h3 className="text-2xl md:text-4xl font-bold">Tapasya of Power </h3>
    <p className="text-sm md:text-lg max-w-md">
      “To pursue an integral education that leads to the supramental realisation, four austerities are necessary, and with them four liberations.”
    </p>
  </div>
</div>

  </div>
</section>

      </div> */}
                                             {/* section 1 code */}

       {/* <div className="grid-container">
      <div className="grid-item top-left">
        <div className="content mb-72 font-rem">
          <div className="title text-white text-4xl font-medium ">Tapasya of <span>Love</span></div>
           <div className="quote text-white text-lg">
            "To pursue an integral education that leads to the supramental realisation,
            four austerities are necessary; and with them four liberations."
          </div>
        </div>
      </div>
      <div className="grid-item top-right">
        <div className="content mb-72 font-rem">
          <div className="title text-4xl font-medium">Tapasya of <span>Knowledge</span></div>
          <div className="quote text-lg">
            "To pursue an integral education that leads to the supramental realisation,
            four austerities are necessary; and with them four liberations."
          </div>
        </div>
      </div>
      <div className="grid-item bottom-left">
        <div className="content mt-72 font-rem">
          <div className="title text-4xl font-medium">Tapasya of <span>Beauty</span></div>
          <div className="quote text-lg">
            "To pursue an integral education that leads to the supramental realisation,
            four austerities are necessary; and with them four liberations."
          </div>
        </div>
      </div>
      <div className="grid-item bottom-right">
       <div className="content mt-72 font-rem">
          <div className="title text-white text-4xl font-medium ">Tapasya of <span>Power</span></div>
           <div className="quote text-white text-lg">
            "To pursue an integral education that leads to the supramental realisation,
            four austerities are necessary; and with them four liberations."
          </div>
        </div>
      </div>

      
      <div className="center-circle"></div>
    </div> */}

                                             {/* end */}
                                              
                                             {/* anima ai */}
                                             


  {/* <div className="grid grid-cols-1 sm:grid-cols-2 min-h-screen">
      {tapasyaData.map((item, index) => (
        <div
          key={index}
          className="relative group h-[400px] sm:h-[500px] overflow-hidden"
        >

          <img
            src={bg}
            alt={item.title}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 opacity-100 group-hover:opacity-0"
          />
          
          <img
            src={item.hoverImage}
            alt={`${item.title} Hover`}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 opacity-0 group-hover:opacity-100"
          />

          
          <div className="relative z-10 p-10 h-full flex flex-col justify-between">
            <h1
              className={`text-4xl sm:text-5xl font-rem font-light ${item.textColor}`}
            >
              Tapasya of <span className="font-normal">{item.title}</span>
            </h1>
            {item.quote && (
              <p className={`mt-6 text-base sm:text-lg ${item.textColor}`}>
                “{item.quote}”
              </p>
            )}
          </div>
        </div>
      ))}
    </div> */}

                                             


                                                       {/* end */}


<section
  className="relative h-[1630px] w-full"
  style={{
    backgroundImage: `url(${bg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>
  {/* Circle in center */}
  {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[512px] h-[512px] rounded-full border border-black bg-orange-100 opacity-70 z-10" /> */}

  {/* Top-left */}
 <div className="absolute top-32 left-32 text-white max-w-2xl z-20 flex flex-col items-start text-left">

    <h2 className="text-4xl ">Tapasya of <span className='font-semibold'>Love</span></h2>
    <p className="text-lg mt-12">
      “To pursue an integral education that leads to the <br/>
       supramental realisation, four austerities are necessary and<br/>
        with them four liberties.”
    </p>
    
  </div>

  {/* Top-right */}
 <div className="absolute top-32 right-32 text-black max-w-2xl z-20 flex flex-col items-start text-left">
  <h2 className="text-4xl">
    Tapasya of <span className="font-semibold">Knowledge</span>
  </h2>
  <p className="text-lg mt-12">
    “To pursue an integral education that leads to the <br />
    supramental realisation, four austerities are necessary and <br />
    with them four liberties.”
  </p>
</div>


  {/* Bottom-left */}
  <div className="absolute bottom-32 left-32 text-black max-w-2xl z-20 flex flex-col items-start text-left">
    <h2 className="text-4xl ">Tapasya of <span className='font-semibold'>Beauty</span></h2>
     <p className="text-lg mt-12">
    “To pursue an integral education that leads to the <br />
    supramental realisation, four austerities are necessary and <br />
    with them four liberties.”
  </p>
  </div>

  {/* Bottom-right */}
  <div className="absolute bottom-32 right-32 text-white  max-w-2xl z-20 flex flex-col items-start text-left">
    <h2 className="text-4xl">Tapasya of <span className='font-semibold'>Power</span></h2>
    <p className="text-lg mt-12">
    “To pursue an integral education that leads to the <br />
    supramental realisation, four austerities are necessary and <br />
    with them four liberties.”
  </p>
  </div>
</section>




                       

      {/* Workshop Overview Section */}
<div
  className="flex flex-col items-center gap-[150px] px-[100px] py-[200px] relative bg-cover h-[1] bg-center"
  style={{ backgroundImage: `url(${bgimg})` }}
>

      <div className="flex items-center justify-center gap-2.5 p-2.5 relative self-stretch w-full flex-[0_0_auto]">
        <p className="relative flex-1 mt-[-1.00px] [font-family:'REM-Regular',Helvetica] font-normal text-white text-2xl text-center tracking-[0] leading-[normal]">
          Our workshops go beyond conventional subjects to offer immersive
          experiences that nurture creativity, curiosity, collaboration, and
          self-growth. Whether you&#39;re exploring the world of robotics,
          engaging in deep listening through theatre, building interpersonal
          awareness, or diving into the expressive power of movement and
          colour—each program is designed to awaken potential in all dimensions
          of being. These sessions are more than just skill-building—they are
          spaces for reflection, experimentation, and transformation.
        </p>
      </div>

       <div className="flex flex-wrap min-w-[700px] items-center justify-center gap-[200px_200px] w-full">
        {/* Left Image */}
        <img
          className="w-[543px] h-[900px] object-cover"
          alt="Workshop"
          src={hoveredIndex !== null ? cardData[hoveredIndex].image : cardData[0].image}
        />

        {/* Right Side Cards */}
        <div className="flex flex-col gap-[30px] flex-1 text-left">
          {cardData.map((card, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`flex flex-col items-center px-5 transition-all duration-300 ${
                hoveredIndex === index ? "bg-[#f0542b66]" : ""
              }`}
            >
              <div className="flex items-center justify-center w-full">
                <div className="flex flex-col items-start justify-center gap-5 py-4 flex-1">
                  <div className="text-white text-2xl font-rem">
                    {card.title}
                  </div>
                  <p className="text-white text-xl font-rem">
                    {card.description}
                  </p>
                </div>
                <div className="w-10 h-10 flex items-center justify-center relative transition-all duration-300">
  {hoveredIndex === index ? (
    // Hovered arrow (e.g., flipped, bold, or different icon)
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="white"
      className="w-8 h-8 text-white"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
      />
    </svg>
  ) : (
    // Normal arrow
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="white"
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
              <img
                className="w-full h-px object-cover"
                alt="Line"
                src={line}
              />
            </div>
          ))}

          {/* CTA */}
          <div className="inline-flex font-rem flex-col items-start gap-2.5 pt-[20px] px-5">
            <div className="inline-flex items-center justify-center gap-2.5 px-5 py-2.5 bg-[#f0542b]">
              <div className="text-black text-xl font-bold font-rem">
                Enquire More
              </div>
            </div>
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

<div className="relative z-10 max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 items-center px-4 gap-x-16">

  {/* Left Arrow */}
  <button
    onClick={handlePrev}
    className="absolute left-[-70px]  top-1/2 transform -translate-y-1/2 z-10 text-black hover:scale-110 transition"
  >
    <ArrowLeft size={50} />
  </button>

  {/* Image with sharp border */}
  <div className="relative flex justify-center items-center">
    <div className="relative">
      <div className="absolute -top-6 -right-6 w-full h-full bg-[#f04e23] border-4 border-[#f04e23] -z-10"></div>

      <img
        src={sliderData[index].image}
        alt="Decorated room"
        className="w-[750px] object-cover h-[px]"
      />
    </div>
  </div>

  {/* Text Content */}
  <div className="relative z-10 ml-12 px-6 text-center md:text-left">
    <p className="text-xl leading-relaxed mb-6">
      {sliderData[index].text}
    </p>
    <button className="bg-[#f04e23] text-black px-6 py-2 font-semibold hover:bg-white transition">
      Read More
    </button>
  </div>

  {/* Right Arrow */}
  <button
    onClick={handleNext}
    className="absolute right-[-50px] top-1/2 transform -translate-y-1/2 z-10 text-white hover:scale-110 transition"
  >
    <ArrowRight size={50} />
  </button>

  {/* Center Divider */}
  <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-white/10 transform -translate-x-1/2 z-0" />
</div>

</div>


      {/* Retreats Section */}
      <div className="w-full pl-12 pt-20 mb-12 flex flex-col lg:flex-row items-center justify-between gap-10">
 
        {/* Left Text */}
        <div className="lg:w-1/2 w-full  ml-12 text-center lg:text-left">
          <h2 className="text-3xl lg:text-6xl sm:text-3xl font-rem mb-4">Retreats</h2>
          <p className="text-gray-700 mb-6 max-w-md  pr-8 lg:text-xl font-rem text-lg lg:mx-0">
            In a world of potential, many young people face barriers—societal pressure, financial strain, or self-doubt—that make their dreams feel out of reach.
          </p>
      <Link to="/retreat">
  <button className="bg-[#f04e23] text-black px-8 py-3 font-semibold text-lg hover:bg-[#c93e1b] transition">
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
  className="fixed bottom-6 right-6 z-50 bg-red-orange hover:bg-orange-600 text-white font-semibold px-5 py-3 rounded-full shadow-lg transition-all"
>
  Enquire
</button>
{showEnquireForm && <EnquireForm onClose={() => setShowEnquireForm(false)} />}


    </>
  );
}

export default Home;
