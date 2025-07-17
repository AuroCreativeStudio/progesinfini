import React, { useEffect, useState } from 'react';
import { fetchBlog } from '../../services/blogService';
import placeholderImage from '../../assets/blog.png'; 
import { useNavigate } from 'react-router-dom';

const BASE_URL = 'http://localhost:8000'; // Update if different

function BlogList() {
  const [blog, setBlog] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getBlog = async () => {
      try {
        const data = await fetchBlog();
        setBlog(data.data);
      } catch (error) {
        console.error('Failed to load Blogs:', error);
      }
    };
    getBlog();
  }, []);

  return (
    <div className="relative w-full min-h-screen lg:mt-24 bg-white overflow-x-hidden">
      {/* Yellow background on right 1/4 */}
      <div className="absolute top-0 right-0 w-1/4 h-full bg-[#fefcc6] z-0" />

      {/* Header */}
      <div className="relative z-10 w-full flex flex-col lg:flex-row">
        <div className="lg:w-3/4 w-full px-6 md:px-16 mt-24 py-12 flex flex-col justify-between">
        <div className="w-full flex justify-center">
<div className="w-full flex justify-start mx-32 -mb-36">
  <div className="max-w-5xl flex flex-col text-left leading-snug gap-6">
    <h1 className="text-5xl md:text-8xl font-normal text-black">Ideas.</h1>

    <h1 className="text-5xl md:text-8xl font-normal text-orange-600">Reflections.</h1>

    <h1 className="text-5xl md:text-8xl font-normal text-white">Experiences.</h1>
  </div>
</div>

</div>

        </div>
        <div className="lg:w-1/4 w-full px-6 lg:px-4 mt-12 lg:mt-24 py-12 justify-center">
          <ul className="text-lg font-medium text-black list-disc list-inside space-y-2 justify-center mx-12 text-left">
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
          src={placeholderImage}
          alt="Reflections Visual"
          className="w-screen h-[512] object-cover border-y border-black"
        />
     
      </div>

      {/* Description */}
      <div className="relative z-10 w-full px-6 md:px-16 py-20 max-w-6xl">
        <p className="text-gray-800 text-base md:text-3xl leading-relaxed">
          Here, we share reflections from facilitators, insights from students, glimpses into our workshops,
          and thoughts that guide us through the journey of integral education.
        </p>
      </div>

      {/* Blog Cards */}
      <div className="relative z-10 w-full px-4 md:px-16 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {blog.length === 0 ? (
            <p className="text-gray-600">No blogs available yet.</p>
          ) : (
            blog.map((post) => (
              <div key={post.id} className="flex flex-col text-start">
                <img
                  src={
                    post.feature_img
                      ? `${BASE_URL}/storage/${post.feature_img}`
                      : placeholderImage
                  }
                  alt={post.title}
                  className="w-full h-auto aspect-square object-cover shadow-md"
                />
                <h3 className="font-bold text-lg mt-4">{post.title}</h3>
                <p className="text-lg mt-1 line-clamp-3">{post.short_description}</p>
                <p className="text-lg mt-2">
                  Author: <span className="font-medium"> {post.author}</span>
                </p>
                <p className="text-sm">Date: {post.date}</p>
              <p
  className="text-red-600 text-lg font-semibold mt-2 cursor-pointer hover:underline"
  onClick={() => navigate(`/blogs/${post.slug}`)} // assuming `post.slug` exists
>
  Read More
</p>

              </div>
            ))
          )}
        </div>
      </div>
      

   <div className="w-full flex flex-col md:flex-row bg-[#fefcc6] py-12 px-6 md:px-12 font-sans text-black">
  
  {/* Text Content */}
  <div className="md:w-1/2 mb-8 md:mb-0 flex flex-col justify-center">
    <h2 className="text-2xl md:text-5xl font-semibold leading-snug mx-24 text-left">
      What if <br />
      <span className="font-semibold text-black md:text-7xl">Learning</span><br />
      was never a <br />
      <span className="text-red-600 font-semibold">Straight Line</span>?
    </h2>
    <a href="#" className="text-xl text-red-600 font-semibold text-left mx-24 mt-4 underline hover:text-red-800 transition">Read More</a>
  </div>

  {/* Image & Meta */}
  <div className="md:w-1/2 flex flex-col items-center md:items-end">
    <img
      src={placeholderImage}
      alt="Blog Highlight"
      className="w-full md:w-[1200px] h-[350px] object-cover shadow-lg"
    />
    <div className="flex justify-between w-full text-sm mt-2 text-gray-700 px-1 md:px-0">
      <span>Author: Maya S.</span>
      <span>Date: July 1, 2025</span>
    </div>
  </div>

</div>

    </div>
  );
}

export default BlogList;
