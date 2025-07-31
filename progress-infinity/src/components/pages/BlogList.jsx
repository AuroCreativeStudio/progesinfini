import React, { useEffect, useState } from 'react';
import { fetchBlog } from '../../services/blogService';
import placeholderImage from '../../assets/blog.png';
import { useNavigate } from 'react-router-dom';
import bgImg from '../../assets/about1.png';

const BASE_URL = 'http://127.0.0.1:8000';

function BlogList() {
  const [blog, setBlog] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getBlog = async () => {
      try {
        const data = await fetchBlog();
        // Filter blogs where publish_status === 1
        const publishedBlogs = data.data.filter(post => post.publish_status === 1);
        setBlog(publishedBlogs);
      } catch (error) {
        console.error('Failed to load Blogs:', error);
      }
    };
    getBlog();
  }, []);

  return (
    <>
      <div className="relative w-full min-h-screen font-rem lg:pt-4 bg-white overflow-x-hidden">
        <div className="absolute top-0 right-0 w-1/4 h-full bg-[#fefcc6] z-0 hidden md:block" />

        {/* Mobile/Tablet Layout (sm/md) */}
        <div className="lg:hidden">
          {/* Header */}
          <div className="relative z-20 w-full px-4 text-left justify-center sm:px-8 md:px-16 mt-20 py-8">
            <div className="w-full flex justify-center">
              <div className="max-w-5xl flex flex-col text-left leading-snug gap-4">
                <h1 className="text-5xl sm:text-6xl font-normal text-black">Ideas.</h1>
                <h1 className="text-5xl sm:text-6xl font-normal text-orange-600">Reflections.</h1>
                <h1 className="text-5xl sm:text-6xl font-normal text-white">Experiences.</h1>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative w-full -mt-20 z-10">
            <img
              src={placeholderImage}
              alt="Reflections Visual"
              className="w-full h-[200px] sm:h-[300px] object-cover border-y border-black"
            />
          </div>

          {/* Links */}
          <div className="relative z-20 w-full px-4 sm:px-8 md:px-16 py-8 flex justify-center bg-white">
            <ul className="text-base sm:text-lg font-medium text-black list-disc list-inside space-y-2 text-left">
              <li className="text-orange-600 font-bold">Reflections</li>
              <li>Facilitator Notes</li>
              <li>Knowledge Highlights</li>
              <li>Stories & Insights</li>
              <li>Creative Corners</li>
            </ul>
          </div>
        </div>

        {/* Desktop Layout (lg+) */}
        <div className="hidden lg:block">
          <div className="relative z-10 w-full flex flex-col lg:flex-row pt-12">
            <div className="lg:w-3/4 w-full px-16 mt-24 py-12 flex flex-col justify-between">
              <div className="w-full flex justify-start mx-0 lg:-mb-36">
                <div className="max-w-5xl flex flex-col text-left lg:text-left leading-snug gap-6">
                  <h1 className="text-8xl font-normal text-black">Ideas.</h1>
                  <h1 className="text-8xl font-normal text-orange-600">Reflections.</h1>
                  <h1 className="text-8xl font-normal text-white">Experiences.</h1>
                </div>
              </div>
            </div>                    

            <div className="lg:w-1/4 w-full px-4 mt-24 py-12 flex justify-start">
              <ul className="text-lg font-medium text-black list-disc list-inside space-y-2 mx-12 text-left">
                <li className="text-orange-600 font-bold">Reflections</li>
                <li>Facilitator Notes</li>
                <li>Knowledge Highlights</li>
                <li>Stories & Insights</li>
                <li>Creative Corners</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Image for Desktop */}
        <div className="hidden lg:block relative w-full">
          <img
            src={placeholderImage}
            alt="Reflections Visual"
            className="w-full h-[512px] object-cover border-y border-black"
          />
        </div>

        {/* Description */}
        <div className="relative z-10 w-full px-4 sm:px-8 md:px-12 lg:px-20 py-12 lg:py-20 max-w-6xl mx-auto">
          <p className="text-gray-800 text-sm sm:text-base md:text-lg lg:text-2xl leading-relaxed text-center lg:text-left">
            Here, we share reflections from facilitators, insights from students, glimpses into our workshops,
            and thoughts that guide us through the journey of integral education.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="relative z-10 w-full px-4 sm:px-8 md:px-12 lg:px-20 pb-12 lg:pb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-24">
            {blog.length === 0 ? (
              <p className="text-gray-600 col-span-3 text-center">No published blogs available yet.</p>
            ) : (
              blog.map((post) => (
                <div key={post.id} className="flex flex-col text-start">
                  <img
                    src={post.feature_img ? `${BASE_URL}/storage/${post.feature_img}` : placeholderImage}
                    alt={post.title}
                    className="w-full h-auto aspect-square object-cover shadow-md"
                  />
                  <h3 className="font-bold text-base sm:text-lg mt-3 sm:mt-4">
                    {post.title.charAt(0).toUpperCase() + post.title.slice(1)}
                  </h3>
                  <div
                      className="text-sm sm:text-md mt-1 overflow-hidden text-ellipsis"
                      style={{
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden"
                      }}
                      dangerouslySetInnerHTML={{ __html: post.short_description }}
                    ></div>

                  <p className="text-sm sm:text-md mt-2">
                    Author: <span className="font-medium"> {post.author}</span>
                  </p>
                  <p className="text-xs sm:text-sm">Date: {post.date}</p>
                  <p
                    className="text-red-600 text-base sm:text-lg font-semibold mt-2 cursor-pointer hover:underline"
                    onClick={() => navigate(`/blogs/${post.slug}`)}>
                    Read More
                  </p>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Final Banner */}
        <section
          className="w-full h-[60vh] sm:h-screen bg-cover bg-center flex items-center justify-center text-center relative"
          style={{ backgroundImage: `url(${bgImg})` }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative z-10 px-4 sm:px-8 md:px-16 py-6 sm:py-12 max-w-7xl">
            <h2 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-rem font-semibold text-white mb-4 sm:mb-6">
              Stay Curious. Stay Connected.
            </h2>
            <p className="text-white text-sm sm:text-base md:text-lg lg:text-2xl xl:text-3xl leading-relaxed sm:leading-loose mt-4 sm:mt-6 md:mt-10 max-w-5xl mx-auto">
              We believe that learning doesn't end when a workshop does — it evolves through reflection,
              sharing, and real-life moments. This journal is a growing archive of thoughts, ideas, and
              experiences that shape our journey.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}

export default BlogList;