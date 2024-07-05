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
    <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden my-10">
      <img className="w-full h-64 object-cover object-center" src={blog.image} alt="Blog Cover" />
      <div className="p-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{blog.title}</h2>
        <p className="text-gray-600">{blog.description}</p>
      </div>
    </div>
  );
};

export default Blog;
