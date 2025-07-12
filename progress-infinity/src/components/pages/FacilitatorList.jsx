import React, { useState, useEffect } from 'react';
import { fetchFacilitator } from '../../services/facilitatorService';
import video from '../../assets/download.mp4';
import FacilitatorSingle from './FacilitatorSingle'; // 👈 Import child overlay (you can build this)
import { postNewsletter } from '../../services/newsletterService';

const BASE_URL = 'http://127.0.0.1:8000';

function FacilitatorList() {
  const [facilitators, setFacilitators] = useState([]);
  const [activeCategory, setActiveCategory] = useState('SPEAKERS');
  const [selectedSpeaker, setSelectedSpeaker] = useState(null); // 👈 For modal overlay

  const categories = ['SPEAKERS', 'WORKSHOPS', 'STUDENT SESSIONS', 'INSTALLATIONS', 'DISCUSSION PANELS'];

  useEffect(() => {
    const getFacilitators = async () => {
      try {
        const data = await fetchFacilitator();
        setFacilitators(data.data);

        // Log image URLs for reference
        data.data.forEach(speaker => {
          console.log(`${BASE_URL}/storage/${speaker.image}`);
        });
      } catch (error) {
        console.error('Failed to load Facilitators:', error);
      }
    };
    getFacilitators();
  }, []);

  const [formEmail, setFormEmail] = useState("");
const [subscribeMessage, setSubscribeMessage] = useState("");


const handleSubmit = async (e) => {
  e.preventDefault();
  if (!formEmail) {
    setSubscribeMessage("Please enter an email.");
    return;
  }


  try {
    await postNewsletter({ email: formEmail });
    setSubscribeMessage("Subscribed successfully!");
    setFormEmail(""); // clear input
  } catch (error) {
    if (error.response?.data?.errors?.email) {
      setSubscribeMessage(error.response.data.errors.email[0]);
    } else {
      setSubscribeMessage("Subscription failed. Try again.");
    }
  }
};

  return (
    <>
      {/* Speaker Detail Overlay */}
      {selectedSpeaker && (
        <FacilitatorSingle
          speaker={selectedSpeaker}
          onClose={() => setSelectedSpeaker(null)}
        />
      )}

      {/* Background Video Section */}
     <div className="relative w-full h-[700px] overflow-hidden">


        <video
          className="absolute top-0 left-0 object-cover w-full h-full"
          autoPlay
          loop
          muted
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/30 via-transparent to-purple-500/30"></div>

        <div className="relative z-10 flex flex-col justify-center h-full px-4 text-white sm:px-8 md:px-20">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="font-mono text-sm">DIGITAL</div>
            <div className="font-mono text-sm">DESIGN</div>
            <div className="font-mono text-sm">DAYS</div>
            <div className="font-mono text-sm">PALERMO</div>
            <div className="font-mono text-sm">2025</div>
          </div>

          <div className="mt-6 md:mt-10">
            <h1 className="text-5xl font-extrabold leading-tight sm:text-6xl md:text-7xl lg:text-9xl">
              PROGRAM
              <br />
              CONTENT
            </h1>
          </div>

          <p className="max-w-lg mt-4 text-sm font-light md:mt-8 sm:text-base md:text-lg">
            Enjoy inspirational talks by world-renowned creative minds and business visionaries, along with workshops and masterclasses led by industry leaders and renowned experts.
          </p>
        </div>
      </div>

      {/* Speakers Section */}
      <div className="w-full min-h-screen p-4 bg-gray-100 sm:p-6 md:p-8">
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-8 sm:gap-3 md:gap-4 sm:mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-3 sm:px-4 md:px-6 py-1 sm:py-2 border rounded-full text-xs sm:text-sm font-mono tracking-wide
                ${activeCategory === category ? 'border-black text-black' : 'bg-purple-100 text-purple-900'}`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Speaker Cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:gap-6 md:gap-8 justify-items-center">
          {/* Empty div for spacing on xl screens */}
          <div className="hidden xl:block"></div>

          {facilitators.map((speaker) => (
            <div
              key={speaker.id}
              onClick={() => setSelectedSpeaker({
                ...speaker,
                image: `${BASE_URL}/storage/${speaker.image}`,
                description: speaker.description || 'No detailed description available.'
              })}
              className="group flex flex-col items-center text-center w-full sm:w-[250px] md:w-[300px] mb-8 sm:mb-12 md:mb-16 cursor-pointer"
            >
              <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] mb-3 sm:mb-4 overflow-hidden">
                <img
                  src={`${BASE_URL}/storage/${speaker.image}`}
                  alt={speaker.name}
                  className="object-cover w-full h-full transition duration-300 ease-in-out transform filter grayscale hover:grayscale-0 hover:scale-110"
                />
                <span className="absolute px-2 py-1 font-mono text-xs text-purple-900 bg-purple-100 rounded-full bottom-2 sm:bottom-3 md:bottom-4 right-2 sm:right-3 md:right-4 sm:px-3 md:px-4">
                  {speaker.roleLabel || 'SPEAKER'}
                </span>
              </div>

              <h3 className="mb-1 text-lg font-bold uppercase transition duration-300 sm:text-xl group-hover:text-purple-700">
                {speaker.name}
              </h3>

              <p className="mb-1 font-mono text-xs uppercase sm:text-sm">{speaker.designation}</p>
              <p className="font-mono text-xs italic uppercase sm:text-sm">{speaker.short_description}</p>
            </div>
          ))}
        </div>
        <div className="w-full md:w-5/6 lg:w-3/4 mx-auto mb-8 md:mb-12 py-8 md:py-12 px-4 md:px-8 bg-transparent">
          <div className="flex flex-col items-center text-center space-y-3 md:space-y-4">
        
            {/* Title */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-black">
              Get in Touch with Us
            </h2>
        
            {/* Input + Button */}
            <div className="mt-4 md:mt-6 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-2xl flex">
              <input
                type="email"
                placeholder="Your Email here"
                className="w-full border border-gray-400 px-4 py-3 text-sm md:text-base focus:outline-none bg-white text-black"
              />
              <button className="bg-black text-white px-4 md:px-6 py-3 text-sm md:text-base font-medium hover:bg-gray-800 transition">
                Subscribe
              </button>
            </div>
        
          </div>
        </div>
           {/* newsletter */}
        
     <div className="w-full bg-gray-100 py-10">
  <div className="max-w-3xl mx-auto flex flex-col items-center text-center px-4">
    
    {/* Title */}
    <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-black mb-4">
      Get in Touch with Us
    </h2>

    {/* Form */}
    <form onSubmit={handleSubmit} className="w-full max-w-xl flex flex-col sm:flex-row gap-3 justify-center">
      <input
        type="email"
        value={formEmail}
        onChange={(e) => setFormEmail(e.target.value)}
        placeholder="Your Email here"
        className="flex-1 border border-gray-400 px-4 py-3 text-sm md:text-base focus:outline-none bg-white text-black"
      />
      <button
        type="submit"
        className="bg-black text-white px-6 py-3 text-sm md:text-base font-medium hover:bg-gray-800 transition"
      >
        Subscribe
      </button>
    </form>

    {/* Message */}
    {subscribeMessage && (
      <p className="text-sm mt-3 text-red-600">{subscribeMessage}</p>
    )}
  </div>
</div>


      </div>

      
    </>
  );
}

export default FacilitatorList;
