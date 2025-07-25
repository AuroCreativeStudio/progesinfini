import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchBlog } from '../../services/blogService';
import placeholderImage from '../../assets/workshop.jpg';

const BASE_URL = 'http://127.0.0.1:8000';

function BlogSingle() {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [allBlogs, setAllBlogs] = useState([]);
  const navigate = useNavigate();

  const cardsPerPage = 3;
  const totalPages = Math.ceil(allBlogs.length / cardsPerPage);
  const startIndex = currentPage * cardsPerPage;
  const currentCards = allBlogs.slice(startIndex, startIndex + cardsPerPage);

  useEffect(() => {
    const getBlog = async () => {
      try {
        const result = await fetchBlog();
        const found = result.data.find((b) => b.slug === slug);
        setBlog(found);
        setAllBlogs(result.data);
      } catch (error) {
        console.error('Error loading blog:', error);
      }
    };
    getBlog();
  }, [slug]);

  if (!blog) {
    return <div className="p-12 text-center">Loading blog...</div>;
  }

  return (
    <div className="min-h-screen font-rem w-full bg-[#fefcc6] pt-16 pb-20 px-4 md:px-8 lg:px-16 text-black text-left">

      {/* Intro and Image - Adjusted for medium screens */}
      <div className="max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-6 gap-6 md:gap-8 lg:gap-12 items-start bg-[#fefcc6] p-4 md:p-8 lg:p-16">

        {/* Left Column - Adjusted for medium screens */}
        <div className="lg:col-span-2 flex flex-col justify-center space-y-4 md:space-y-6 h-full">
          {blog.title && (() => {
            const words = blog.title.trim().split(" ");
            const lastTwo = words.slice(-2).join(" ");
            const rest = words.slice(0, -2).join(" ");

            return (
              <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-semibold text-left leading-tight">
                {rest}{" "}
                <span className="text-[#f04e23] font-semibold">{lastTwo}</span>
              </h2>
            );
          })()}
        </div>

        {/* Right Column - Adjusted image height for medium screens */}
        <div className="lg:col-span-4 relative">
          <img
            src={blog.feature_img ? `${BASE_URL}/storage/${blog.feature_img}` : placeholderImage}
            alt={blog.title}
            className="w-full max-w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] object-cover shadow-lg"
          />
          <p className="absolute bottom-2 right-4 text-xs sm:text-sm text-black">Photo Credit: Conversa</p>
        </div>
      </div>

      <div className="text-sm md:text-md text-right text-gray-700 mt-2 md:mt-4 pr-2 md:pr-4">
        Photo Credit: {blog.photo_credit || 'Converso'}
      </div>

      {/* Descriptions - Adjusted margins for medium screens */}
      <div className="mt-8 md:mt-12 lg:mt-16 mx-4 sm:mx-8 md:mx-12 lg:mx-24 xl:mx-44 text-black space-y-8 md:space-y-12">
        {blog.description1 && (
          <div>
            <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2">{blog.section1_title}</h3>
            <p className="text-sm md:text-base">{blog.description1}</p>
          </div>
        )}

        {blog.img_1 && (
          <img
            src={`${BASE_URL}/storage/${blog.img_1}`}
            alt="Section 1"
            className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] object-cover shadow-md"
          />
        )}

        {blog.description2 && (
          <div>
            <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2">{blog.section2_title}</h3>
            <p className="text-sm md:text-base">{blog.description2}</p>
          </div>
        )}

        {blog.img_2 && (
          <img
            src={`${BASE_URL}/storage/${blog.img_2}`}
            alt="Section 2"
            className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] object-cover shadow-md"
          />
        )}

        {blog.description3 && (
          <div>
            <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2">{blog.section3_title}</h3>
            <p className="text-sm md:text-base">{blog.description3}</p>
          </div>
        )}
      </div>

      {/* Author Section - Adjusted for medium screens */}
      <div className="mt-12 md:mt-20 mx-4 sm:mx-8 md:mx-12 lg:mx-24 xl:mx-44 flex flex-col md:flex-row items-start justify-between gap-6 md:gap-8">
        <div className="md:w-2/3 italic text-sm md:text-base text-gray-800">
          {blog.about}
        </div>

        <div className="md:w-1/3 flex flex-col items-end text-right mt-4 md:mt-0">
          {blog.author_img && (
            <img
              src={`${BASE_URL}/storage/${blog.author_img}`}
              alt={blog.author}
              className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 object-cover mb-2 shadow-md"
            />
          )}
          <p className="text-sm md:text-base text-black"><strong>Author:</strong> {blog.author}</p>
          <p className="text-sm md:text-base text-black"><strong>Date:</strong> {blog.date}</p>
        </div>
      </div>

      {/* More Posts Header */}
      <div className="mt-16 md:mt-24 mb-8 md:mb-10 text-start max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold">
          Explore more posts <br className="hidden sm:block"/>
          Discover other thoughts and experiences<br className="hidden sm:block"/> shaping our journey.
        </h2>
      </div>

      {/* More Blog Cards */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {currentCards.length === 0 ? (
            <p className="text-gray-600">No blogs available yet.</p>
          ) : (
            currentCards.map((post) => (
              <div key={post.id} className="flex flex-col text-start">
                <img
                  src={post.feature_img ? `${BASE_URL}/storage/${post.feature_img}` : placeholderImage}
                  alt={post.title}
                  className="w-full h-auto aspect-square object-cover shadow-md"
                />
                <h3 className="font-bold text-sm md:text-base lg:text-lg mt-3 md:mt-4 capitalize">{post.title}</h3>

                <p className="text-xs md:text-sm lg:text-base mt-1 line-clamp-2">{post.short_description}</p>
                <p className="text-xs md:text-sm lg:text-base mt-2">
                  Author: <span className="font-medium">{post.author}</span>
                </p>
                <p className="text-xs md:text-sm lg:text-base">Date: {post.date}</p>
                <p
                  className="text-red-600 text-xs md:text-sm lg:text-base font-semibold mt-2 cursor-pointer hover:underline"
                  onClick={() => navigate(`/blogs/${post.slug}`)}
                >
                  Read More
                </p>
              </div>
            ))
          )}
        </div>

        {/* Pagination Buttons */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center mt-8 md:mt-12 space-x-4 md:space-x-6">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
              disabled={currentPage === 0}
              className={`text-xl md:text-2xl font-bold ${currentPage === 0 ? 'text-gray-400 cursor-not-allowed' : 'text-black'}`}
            >
              ←
            </button>

            <span className="text-xs md:text-sm text-gray-700">
              Page {currentPage + 1} of {totalPages}
            </span>

            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1))}
              disabled={currentPage === totalPages - 1}
              className={`text-xl md:text-2xl font-bold ${currentPage === totalPages - 1 ? 'text-gray-400 cursor-not-allowed' : 'text-black'}`}
            >
              →
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default BlogSingle;