import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchBlog } from '../../services/blogService';
import placeholderImage from '../../assets/workshop.jpg';

const BASE_URL = 'http://localhost:8000';

function BlogSingle() {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const getBlog = async () => {
      try {
        const allBlogs = await fetchBlog(); // fetch all blogs
        const found = allBlogs.data.find((b) => b.slug === slug); // match by slug
        setBlog(found);
        console.log(allBlogs);
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
    <div className="w-full min-h-screen bg-[#fefcc6] flex flex-col lg:flex-row px-6 md:px-12 py-12 font-sans text-black overflow-x-hidden">
      {/* Left Text Content */}
      <div className="lg:w-1/2 w-full mb-10 lg:mb-0 flex flex-col justify-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">{blog.title}</h2>

        <div className="text-base md:text-lg mt-6 text-gray-700">
          <p className="font-semibold mb-1">Snippet:</p>
          <p className="mb-4">{blog.short_description}</p>

          <p className="text-sm mt-4">
            <strong>Author:</strong> {blog.author || 'Unknown'}
          </p>
          <p className="text-sm">
            <strong>Date:</strong> {blog.date}
          </p>
        </div>
      </div>

      {/* Right Image */}
      <div className="lg:w-1/2 w-full flex justify-center items-center">
        <img
          src={blog.feature_img ? `${BASE_URL}/storage/${blog.feature_img}` : placeholderImage}
          alt="Blog visual"
          className="rounded shadow-lg w-full h-auto object-cover max-h-[500px]"
        />
      </div>

      {/* Photo Credit */}
      <div className="w-full mt-6 text-right text-sm text-gray-600 pr-4">
        Photo Credit: {blog.photo_credit || 'Converso'}
      </div>
    </div>
  );
}

export default BlogSingle;
