import React from 'react';
import image from '../../assets/workshop.jpg'; // Main image

const blogPosts = [
  {
    id: 1,
    image: image,
    title: 'What If Learning Was Never a Straight Line?',
    snippet: 'A look into nonlinear learning and how curiosity-led exploration opens unexpected doors.',
    author: 'Maya S.',
    date: 'July 1, 2025',
  },
  {
    id: 2,
    image: image,
    title: 'What If Learning Was Never a Straight Line?',
    snippet: 'A look into nonlinear learning and how curiosity-led exploration opens unexpected doors.',
    author: 'Maya S.',
    date: 'July 1, 2025',
  },
  {
    id: 3,
    image: image,
    title: 'What If Learning Was Never a Straight Line?',
    snippet: 'A look into nonlinear learning and how curiosity-led exploration opens unexpected doors.',
    author: 'Maya S.',
    date: 'July 1, 2025',
  },
];

function BlogList() {
  return (
    <div className="relative w-full min-h-screen bg-white overflow-x-hidden">
      
      {/* Yellow background on right 1/4 */}
      <div className="absolute top-0 right-0 w-1/4 h-full bg-[#fefcc6] z-0" />

      {/* Foreground layout */}
      <div className="relative z-10 w-full flex flex-col lg:flex-row">
        {/* Left Content (3/4) */}
        <div className="lg:w-3/4 w-full px-6 md:px-16 mt-24 py-12 flex flex-col justify-between">
          <div className="max-w-3xl flex flex-col h-32">
            <h1 className="text-4xl md:text-5xl font-bold text-black">Ideas.</h1>
            <div className="mt-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-orange-600">Reflections.</h1>
            </div>
          </div>
        </div>

        {/* Right Sidebar (1/4) */}
        <div className="lg:w-1/4 w-full px-6 lg:px-4 mt-12 lg:mt-24 py-12">
          <ul className="text-sm font-medium text-black list-disc list-inside space-y-2">
            <li className="text-orange-600 font-bold">Reflections</li>
            <li>Facilitator Notes</li>
            <li>Knowledge Highlights</li>
            <li>Stories & Insights</li>
            <li>Creative Corners</li>
          </ul>
        </div>
      </div>

      {/* Full-width image */}
      <div className="relative w-screen">
        <img
          src={image}
          alt="Reflections Visual"
          className="w-screen h-80 object-cover border-y border-black"
        />
        <h1 className="absolute top-4 left-12 ml-52 md:left-16 text-4xl md:text-5xl font-bold text-white">
          Experiences.
        </h1>
      </div>

      {/* Bottom Description */}
      <div className="relative z-10 w-full px-6 md:px-16 py-8 max-w-4xl">
        <p className="text-gray-800 text-base md:text-lg leading-relaxed">
          Here, we share reflections from facilitators, insights from students, glimpses into our workshops,
          and thoughts that guide us through the journey of integral education.
        </p>
      </div>

      {/* Blog Cards Section */}
      <div className="relative z-10 w-full px-4 md:px-16 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogPosts.map((post) => (
            <div key={post.id} className="flex text-start flex-col">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-auto aspect-square object-cover shadow-md"
              />
              <h3 className="font-bold text-sm  mt-4">{post.title}</h3>
              <p className="text-sm  mt-1">{`Snippet: ${post.snippet}`}</p>
              <p className="text-sm mt-2">
                Author: <span className="font-medium">By {post.author}</span>
              </p>
              <p className="text-sm text-start">Date: {post.date}</p>
              <p className="text-red-600 text-sm font-semibold mt-2 cursor-pointer hover:underline">Read More</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BlogList;
