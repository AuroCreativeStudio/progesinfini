import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchBlog } from '../../services/blogService';
import placeholderImage from '../../assets/workshop.jpg';

const BASE_URL = 'http://localhost:8000';

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
    <div className="min-h-screen w-full bg-[#fefcc6] pt-28 pb-20 px-4 md:px-8 lg:px-16 font-sans text-black text-left text-rem">

      {/* Intro and Image */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-12 items-start">
        <div className="col-span-1 space-y-5">
          <h2 className="text-rem md:text-rem font-light leading-snug">
            What if <br />
            <span className="font-bold text-black">Learning</span> <br />
            was never a <br />
            <span className="text-red-600 font-semibold">Straight Line</span>?
          </h2>

          <div>
            <p className="font-semibold mb-1">Snippet:</p>
            <p>{blog.short_description}</p>
          </div>

          <div className="space-y-1">
            <p><strong>Author:</strong> {blog.author || 'Unknown'}</p>
            <p><strong>Date:</strong> {blog.date}</p>
          </div>
        </div>

        <div className="col-span-1 lg:col-span-3">
          <img
            src={blog.feature_img ? `${BASE_URL}/storage/${blog.feature_img}` : placeholderImage}
            alt={blog.title}
            className="w-full h-auto object-cover max-h-[37.5rem]"
          />
        </div>
      </div>

      <div className="text-sm text-right text-gray-700 mt-4 pr-1">
        Photo Credit: {blog.photo_credit || 'Converso'}
      </div>

      {/* Descriptions */}
      <div className="mt-16 mx-0 md:mx-12 lg:mx-32 text-black space-y-12">
        {blog.description1 && (
          <div>
            <h3 className="text-xl font-semibold mb-2">{blog.section1_title}</h3>
            <p>{blog.description1}</p>
          </div>
        )}

        {blog.img_1 && (
          <img
            src={`${BASE_URL}/storage/${blog.img_1}`}
            alt="Section 1"
            className="w-full object-cover rounded-md shadow-md"
          />
        )}

        {blog.description2 && (
          <div>
            <h3 className="text-xl font-semibold mb-2">{blog.section2_title}</h3>
            <p>{blog.description2}</p>
          </div>
        )}

        {blog.img_2 && (
          <img
            src={`${BASE_URL}/storage/${blog.img_2}`}
            alt="Section 2"
            className="w-full object-cover rounded-md shadow-md"
          />
        )}

        {blog.description3 && (
          <div>
            <h3 className="text-xl font-semibold mb-2">{blog.section3_title}</h3>
            <p>{blog.description3}</p>
          </div>
        )}
      </div>

      {/* Author Section */}
      <div className="mt-20 mx-0 md:mx-12 lg:mx-32 flex flex-col md:flex-row items-start justify-between gap-8">
        <div className="md:w-2/3 italic text-gray-800">
          {blog.about}
        </div>

        <div className="md:w-1/3 flex flex-col items-end text-right">
          {blog.author_img && (
            <img
              src={`${BASE_URL}/storage/${blog.author_img}`}
              alt={blog.author}
              className="w-32 h-32 object-cover rounded-md mb-2 shadow-md"
            />
          )}
          <p className="text-black"><strong>Author:</strong> {blog.author}</p>
          <p className="text-black"><strong>Date:</strong> {blog.date}</p>
        </div>
      </div>

      {/* More Posts Header */}
      <div className="mt-24 mb-10 text-start max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold">Explore more posts</h2>
        <p className="text-md md:text-lg text-gray-800 mt-1">
          Discover other thoughts and experiences shaping our journey.
        </p>
      </div>

      {/* More Blog Cards */}
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
                <h3 className="font-bold text-sm mt-4">{post.title}</h3>
                <p className="text-sm mt-1 line-clamp-3">{post.short_description}</p>
                <p className="text-sm mt-2">
                  Author: <span className="font-medium">{post.author}</span>
                </p>
                <p className="text-sm">Date: {post.date}</p>
                <p
                  className="text-red-600 text-sm font-semibold mt-2 cursor-pointer hover:underline"
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
          <div className="flex justify-center items-center mt-12 space-x-6">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
              disabled={currentPage === 0}
              className={`text-2xl font-bold ${currentPage === 0 ? 'text-gray-400 cursor-not-allowed' : 'text-black'}`}
            >
              ←
            </button>

            <span className="text-sm text-gray-700">
              Page {currentPage + 1} of {totalPages}
            </span>

            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1))}
              disabled={currentPage === totalPages - 1}
              className={`text-2xl font-bold ${currentPage === totalPages - 1 ? 'text-gray-400 cursor-not-allowed' : 'text-black'}`}
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
