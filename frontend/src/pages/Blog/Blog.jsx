// Blog.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../../utils/API";

const Blog = ({}) => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const { data } = await API.get(`/api/v1/blog/${id}`);
        setBlog(data.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchBlog();
  }, [id]);

  if (!blog) return <p>Loading...</p>;

  return (
    <div className="px-6 lg:px-20 py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h1 className="text-xl text-center md:text-left lg:text-5xl font-bold text-slate-700 mb-5">
              {blog.title}
            </h1>
          </div>

          <div className="flex justify-center lg:justify-end">
            <img
              src={blog.image}
              alt="Technology and Innovation"
              className="rounded-lg shadow-lg w-full h-auto object-cover lg:w-96"
            />
          </div>
        </div>
        <p className="text-slate-700 mb-5 mt-10 text-justify">
          {blog.description}
        </p>
      </div>
    </div>
  );
};

export default Blog;
