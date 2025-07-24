import React, { useEffect, useState } from 'react';
import { fetchBlog } from '../../services/blogService';
import placeholderImage from '../../assets/blog.png';
import { useNavigate } from 'react-router-dom';
// import blog1 from '../../assets/blog1.png';
import bgImg from '../../assets/about1.png';

const BASE_URL ='http://127.0.0.1:8000'

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
    <>
      <div className="relative w-full min-h-screen font-rem lg:mt-24 bg-white overflow-x-hidden">
        <div className="absolute top-0 right-0 w-1/4 h-full bg-[#fefcc6] z-0" />

        {/* Header */}
        <div className="relative z-10 w-full flex flex-col lg:flex-row">
          <div className="lg:w-3/4 w-full px-6 md:px-16 mt-24 py-12 flex flex-col justify-between">
            <div className="w-full flex justify-start mx-20 -mb-36">
              <div className="max-w-5xl flex flex-col text-left leading-snug gap-6">
                <h1 className="text-5xl md:text-8xl font-normal text-black">Ideas.</h1>
                <h1 className="text-5xl md:text-8xl font-normal text-orange-600">Reflections.</h1>
                <h1 className="text-5xl md:text-8xl font-normal text-white">Experiences.</h1>
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
            className="w-screen h-[512px] object-cover border-y border-black"
          />
        </div>

        {/* Description Section - mx-20 */}
        <div className="relative z-10 w-full  px-20 py-20 max-w-6xl">
          <p className="text-gray-800 text-base md:text-2xl leading-relaxed text-left">
            Here, we share reflections from facilitators, insights from students, glimpses into our workshops,
            and thoughts that guide us through the journey of integral education.
          </p>
        </div>

        {/* Blog Cards */}
        <div className="relative z-10 w-full px-20 md:px-16 pb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-24">
            {blog.length === 0 ? (
              <p className="text-gray-600">No blogs available yet.</p>
            ) : (
              blog.map((post) => (
                <div key={post.id} className="flex flex-col text-start">
                  <img
                    src={post.feature_img ? `${BASE_URL}/storage/${post.feature_img}` : placeholderImage}
                    alt={post.title}
                    className="w-full h-auto aspect-square object-cover shadow-md"
                  />
                  <h3 className="font-bold text-lg mt-4">
                    {post.title.charAt(0).toUpperCase() + post.title.slice(1)}
                  </h3>
                  <p className="text-md mt-1 overflow-hidden text-ellipsis"
                    style={{
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden"
                    }}>
                    {post.short_description}
                  </p>
                  <p className="text-md mt-2">
                    Author: <span className="font-medium"> {post.author}</span>
                  </p>
                  <p className="text-sm">Date: {post.date}</p>
                  <p
                    className="text-red-600 text-lg font-semibold mt-2 cursor-pointer hover:underline"
                    onClick={() => navigate(`/blogs/${post.slug}`)}>
                    Read More
                  </p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Featured Highlight Section */}
      {/* <div className="w-full bg-[#fefcc6] py-12 px-6 md:px-14 font-sans text-black overflow-hidden">
  <div className="flex flex-col md:flex-row gap-8 items-center">

    <div className="md:w-1/2 w-full flex flex-col justify-center space-y-4">
      <h2 className="text-2xl md:text-6xl font-semibold text-left leading-tight">
        What if <br />
        <span className="font-semibold text-black md:text-8xl">Learning</span><br />
        was never a <br />
        <span className="text-red-600 font-semibold">Straight Line</span>?
      </h2>
      <a
        href="#"
        className="text-xl text-red-600 font-semibold underline hover:text-red-800 transition text-left"
      >
        Read More
      </a>
    </div>

   
    <div className="md:w-1/2 w-full flex flex-col items-center md:items-start">
      <img
        src={blog1}
        alt="Blog Highlight"
        className="w-full h-[480px] object-cover shadow-lg rounded"
      />
      <div className="flex justify-between w-full text-sm mt-2 text-gray-700">
        <span>Author: Maya S.</span>
        <span>Date: July 1, 2025</span>
      </div>
    </div>
  </div>
</div> */}


      {/* Final Banner */}
      <section
        className="w-full h-screen bg-cover bg-center flex items-center justify-center text-center px-4 md:px-16"
        style={{ backgroundImage: `url(${bgImg})` }}>
        <div className="p-8 md:p-12 rounded-lg">
          <h2 className="text-2xl mt-0 md:text-8xl font-rem font-semibold text-white mb-4">
            Stay Curious. Stay Connected.
          </h2>
          <p className="text-white text-sm md:text-4xl leading-relaxed mt-16 max-w-6xl mx-auto">
            We believe that learning doesn’t end when a workshop does — it evolves through reflection, sharing, and real-life moments.
            This journal is a growing archive of thoughts, ideas, and experiences that shape our journey.
          </p>
        </div>
      </section>
    </>
  );
}

export default BlogList;
