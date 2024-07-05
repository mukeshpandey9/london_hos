import React, { useEffect, useState } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";



const BlogPostCard = ({ post }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="bg-gray-100 border border-gray-300 group shadow-md rounded-lg overflow-hidden">
      <div className="relative  overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-48 object-cover transition-transform duration-300 transform group-hover:scale-110"
        />
        <div className="absolute h-full inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"></div>
      </div>
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{post.title}</h2>
        <p className="text-gray-700 mb-2">
          {post.user ?? "Admin"} - {post.date.split("T")[0]}
        </p>
        <p className="text-gray-700 mb-4">
          {isExpanded
            ? post.description
            : post.description.substring(0, 100) + "..."}
        </p>
        <button
          className="text-blue-500 hover:underline"
          onClick={toggleExpand}
        >
          {isExpanded ? "Show Less" : "Read More"}
        </button>
      </div>
    </div>
  );
};
const BlogPage = () => {
  
  const [blogData, setBlogData] = useState([]);
  const [featuredPost, setFeaturedPost] = useState();

  const getBlogData = async () => {
    try {
      const { data } = await API.get("/api/v1/blog");
      setBlogData(data?.data);
      setFeaturedPost(data?.data[0]);
    } catch (error) {
      setBlogData([]);
      console.log(error.message);
    }
  };

  useEffect(() => {
    getBlogData();
  }, []);

  return (
    <div>
      <main className="container mx-auto py-10">
        <h1 className="text-4xl md:text-5xl font-semibold md:font-extrabold text-center mb-10">
          Discover Our Latest Stories
        </h1>
       {/*  <section className="py-10 px-5 md:px-20">
          {featuredPost && <FeaturedPost post={featuredPost} />}
        </section> */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10 bg-gray-100 py-10 px-5 md:px-20 md:py-20">
          {blogData.length > 0 &&
            blogData.map((post, index) => (
             <Link to={`/blog/${post._id}`}>
              <BlogPostCard key={index} post={post} /></Link>
            ))}
        </section>
      </main>
    </div>
  );
};

export default BlogPage;

// FeaturedPost Component
// const FeaturedPost = ({ post }) => {
//   return (
//     <div className="bg-white border border-gray-300 shadow-sm rounded-lg overflow-hidden">
//       <img
//         src={post.image}
//         alt={post.title}
//         className="w-full h-64 object-cover"
//       />
//       <div className="p-6">
//         <h2 className="text-3xl font-bold mb-2">{post.title}</h2>
//         <p className="text-gray-700 mb-2">
//           {post.user ?? "Admin"} - {post.date.split("T")[0]}
//         </p>
//         <p className="text-gray-700 mb-4">{post.description}</p>
//         <a href={post.link} className="text-blue-500 hover:underline">
//           Read More
//         </a>
//       </div>
//     </div>
//   );
// };