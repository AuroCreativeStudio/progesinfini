import React, { useState } from 'react';
import image from '../../assets/instructors.jpg';
import { FiArrowRight, FiSearch, FiPlus, FiMinus } from 'react-icons/fi';
import profile from '../../assets/male.jpg';
import profile1 from '../../assets/female.jpeg';

const faqs = [
  { question: 'When will the workshop happen?', answer: 'The workshop dates will be announced via email and the website.' },
  { question: 'Are these workshops online or offline?', answer: 'Workshops can be both online and offline based on your selection.' },
  { question: 'Do I need to pay to show interest?', answer: 'No, showing interest is free. Payment is required only upon registration.' },
  { question: 'Can I request a workshop at my college?', answer: 'Yes, you can request custom workshops at your college or institution.' },
  { question: 'Can I take the course with my team?', answer: 'Yes, group participation is encouraged and often eligible for discounts.' },
  { question: 'Do you offer discounts?', answer: 'We offer discounts for group enrollments, multiple courses, teachers, students, and nonprofit workers. Please check the financial aid section for eligibility.' },
];

function FacilitatorList() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full h-[80vh]  bg-cover bg-center" style={{ backgroundImage: `url(${image})` }}>
        <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-center text-center p-4">
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-6 my-56">Meet Our Facilitators</h1>
        </div>
        <div className="absolute bottom-6 right-6">
          <button className="bg-red-orange text-white font-semibold px-6 py-3 rounded-lg hover:bg-orange-600">
            Register Interest
          </button>
        </div>
      </div>

      {/* Description and Search Section */}
      <div className="flex flex-col items-center text-center px-4 py-16">
        <p className="text-lg md:text-2xl text-deep-blue max-w-5xl mb-8 leading-relaxed font-rem">
          In a world of potential, many young people face barriers—societal pressure, financial strain, or self-doubt—
          that make their dreams feel out of reach. But what if the only real limits were the ones we placed on ourselves?
        </p>
        <p className="text-lg md:text-2xl text-deep-blue max-w-5xl mb-12 leading-relaxed font-rem">
          Progres Infini began with a simple belief: every young person deserves the chance to thrive, innovate, and lead change.
          Inspired by their own journeys through adversity, our founders envisioned a platform where youth can connect, collaborate,
          and turn aspirations into reality.
        </p>
        {/* Search Bar */}
        <div className="flex items-center border border-orange-400 rounded-md shadow-md px-4 py-2 w-72">
          <FiSearch className="text-gray-400 text-xl mr-2" />
          <input
            type="text"
            placeholder="Search"
            className="outline-none flex-1 text-gray-700 placeholder-gray-400"
          />
        </div>
      </div>

      {/* Facilitator Cards */}
      <div className="py-16 px-4 bg-[#fffef8]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {/* Facilitator 1 */}
          <div className="flex flex-col items-center text-center space-y-4 p-4">
            <img src={profile} alt="Facilitator" className="w-32 h-32 object-cover rounded-full" />
            <div>
              <h3 className="text-lg font-semibold text-[#1c1c4b]">Vikram</h3>
              <p className="text-sm text-gray-600 mt-1">Co-Founder at Auro Creative Studio</p>
            </div>
            <div className="flex items-center text-sm font-semibold cursor-pointer hover:text-orange-500">
              View <FiArrowRight className="ml-1" />
            </div>
          </div>

          {/* Facilitator 2 */}
          <div className="flex flex-col items-center text-center space-y-4 p-4">
            <img src={profile} alt="Facilitator" className="w-32 h-32 object-cover rounded-full" />
            <div>
              <h3 className="text-lg font-semibold text-[#1c1c4b]">Karn</h3>
              <p className="text-sm text-gray-600 mt-1">Co-Founder at Auro Creative Studio</p>
            </div>
            <div className="flex items-center text-sm font-semibold cursor-pointer hover:text-orange-500">
              View <FiArrowRight className="ml-1" />
            </div>
          </div>

          {/* Facilitator 3 */}
          <div className="flex flex-col items-center text-center space-y-4 p-4">
            <img src={profile1} alt="Facilitator" className="w-32 h-32 object-cover rounded-full" />
            <div>
              <h3 className="text-lg font-semibold text-[#1c1c4b]">Ahana</h3>
              <p className="text-sm text-gray-600 mt-1">Human Resource</p>
            </div>
            <div className="flex items-center text-sm font-semibold cursor-pointer hover:text-orange-500">
              View <FiArrowRight className="ml-1" />
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16 px-4 bg-[#fffef8]">
        <h2 className="text-3xl font-bold mb-8 text-center">FAQs</h2>

        <div className="flex flex-col md:flex-row max-w-6xl mx-auto gap-10">
          {/* Left Image */}
          <div className="md:w-1/2">
            <img src={image} alt="FAQ" className="w-full h-auto object-cover rounded-lg" />
          </div>

          {/* FAQ Items */}
          <div className="md:w-1/2 flex flex-col divide-y divide-orange-300">
            {faqs.map((faq, index) => (
              <div key={index} className="py-4">
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleAccordion(index)}
                >
                  <h3 className="text-lg font-medium">{faq.question}</h3>
                  {activeIndex === index ? (
                    <FiMinus className="text-xl text-gray-600" />
                  ) : (
                    <FiPlus className="text-xl text-gray-600" />
                  )}
                </div>

                {activeIndex === index && (
                  <div className="mt-4 text-gray-700 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default FacilitatorList;
