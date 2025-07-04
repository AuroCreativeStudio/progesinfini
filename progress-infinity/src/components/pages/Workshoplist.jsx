import React from 'react'
import image from '../../assets/workshopmain.jpg';
import card1 from '../../assets/card1.jpg';
import { Link } from 'react-router-dom';
import { fetchWorkshop } from '../../services/workshopService';
import { useEffect, useState } from 'react';

function Workshoplist() {
    const [workshops, setWorkshops] = useState([]);

    useEffect(() => {
        const getWorkshops = async () => {
            try {
                // You wrote fetchWorkshops (plural), but your service is fetchWorkshop (singular)
                const data = await fetchWorkshop(); 
                setWorkshops(data.data);
                console.log(data);
            } catch (error) {
                console.error('Failed to load workshops:', error);

            }
        };

        getWorkshops();
    }, []);

  return (
    <>
      {/* Hero Section */}
      <div className="relative m-0 w-full h-[50vh] md:h-[80vh] bg-black">
        {/* Background Image */}
        <img
          src={image}
          alt="Learning Background"
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end justify-center md:justify-end
        ">
          <div className="text-center md:text-right text-white w-full px-4 md:max-w-full md:pr-12 mb-8 md:mb-14">
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-semibold font-rem mb-44
            ">
              Inspiring Discovery<br/>
               through Creativity
            </h1>
            <button className="bg-red-orange hover:bg-orange-600 text-white font-semibold font-rem py-2 px-4 md:py-3 md:px-6 rounded">
              Register Interest
            </button>
          </div>
        </div>
      </div>

      {/* Courses Section */}
      <div className="p-4 md:p-8 lg:p-20">
        {/* Filter Section */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 md:mb-10 gap-4">
          <div className="flex flex-col md:flex-row md:space-x-4 lg:space-x-8 xl:space-x-32 text-base md:text-lg w-full md:w-auto">
          
            <div className="cursor-pointer font-bold text-black font-rem pb-2 md:pb-0">
              Categories <span className="text-red-orange font-rem">▼</span>
            </div>
            <div className="cursor-pointer font-bold text-black">Choose
              Facilitator <span className="text-red-orange">▼</span>
            </div>
          </div>
          <button className="border bg-red-orange px-4 py-2 md:px-8 lg:px-16 text-base md:text-lg w-full md:w-auto text-white font-medium font-rem rounded-lg
           hover:bg-orange-50">
            Search 
          </button>
        </div>

        {/* Course Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {workshops.map((workshop) => (
            <div key={workshop.id} className="border border-lalic rounded-2xl">
              <div className="relative">
                <img
                  src={card1} // You might want to use a dynamic image source here
                  alt={workshop.title}
                  className="w-full h-48 sm:h-52 md:h-60 object-cover rounded-2xl"
                />
                <div className="absolute top-4 left-0 bg-red-orange rounded-r-xl text-white text-sm md:text-lg font-bold font-rem px-4 md:px-6 py-1">
                  Starting Soon
                </div>
              </div>
              <div className="p-3 md:p-4">
                <h2 className="font-bold font-rem text-xl md:text-2xl text-deep-blue pb-2 mb-2">
                  {workshop.workshop_title}
                </h2>
                <p className="text-deep-blue mb-3 md:mb-4 pb-2">
                  {workshop.about_workshop}
                </p>
                <div className="flex flex-col text-deep-blue mb-2 space-y-2">
                  <span className="flex items-center space-x-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M9 20H4v-2a3 3 0 015.356-1.857M15 11a4 4 0 10-8 0 4 4 0 008 0z" />
                    </svg>
                    <span>{workshop.workshop_type}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{workshop.duration_weeks}Week</span>
                  </span>
                </div>
                <Link to={`/workshop/${workshop.id}`}>
                  <button className="w-full py-3 md:py-4 lg:py-5 mt-3 md:mt-4 rounded-lg bg-indigo-100 text-deep-blue font-bold font-rem border border-lalic text-base md:text-lg">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

     
    </>
  )
}

export default Workshoplist