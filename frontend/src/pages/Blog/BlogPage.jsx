import React, { useEffect, useState } from "react";
import API from "../../utils/API";

// FeaturedPost Component
const FeaturedPost = ({ post }) => {
  return (
    <div className="bg-white border border-gray-300 shadow-sm rounded-lg overflow-hidden">
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-64 object-cover"
      />
      <div className="p-6">
        <h2 className="text-3xl font-bold mb-2">{post.title}</h2>
        <p className="text-gray-700 mb-2">
          {post.user ?? "Admin"} - {post.date.split("T")[0]}
        </p>
        <p className="text-gray-700 mb-4">{post.description}</p>
        <a href={post.link} className="text-blue-500 hover:underline">
          Read More
        </a>
      </div>
    </div>
  );
};

// BlogPostCard Component
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
  // const featuredPost = {
  //   title: "Exploring the Beauty of Nature",
  //   description:
  //     "Discover the wonders of nature as we explore beautiful landscapes and diverse wildlife.",
  //   image: "https://newlondonhospitality.vercel.app/tech1.webp",
  //   link: "#",
  // };

  // const blogPosts = [
  //   {
  //     title: "Tech Innovations in 2024",
  //     description:
  //       "A look at the latest technological advancements and how they are shaping our future.",
  //     image: "https://newlondonhospitality.vercel.app/tech2.webp",
  //     link: "#",
  //     user: "John Doe",
  //     date: "July 3, 2024",
  //   },
  //   {
  //     title: "Healthy Eating Habits",
  //     description:
  //       "Learn about healthy eating habits and how they can improve your overall well-being.",
  //     image: "https://newlondonhospitality.vercel.app/tech1.webp",
  //     link: "#",
  //     user: "Jane Smith",
  //     date: "July 1, 2024",
  //   },
  //   {
  //     title: "Travel Guide: Top Destinations",
  //     description:
  //       "Planning a trip? Check out our travel guide for the top destinations to visit this year.",
  //     image: "https://newlondonhospitality.vercel.app/tech1.webp",
  //     link: "#",
  //     user: "Alice Johnson",
  //     date: "June 29, 2024",
  //   },
  //   {
  //     title: "The Art of Photography",
  //     description:
  //       "Tips and tricks for capturing stunning photos and improving your photography skills.",
  //     image: "https://newlondonhospitality.vercel.app/tech1.webp",
  //     link: "#",
  //     user: "Bob Brown",
  //     date: "June 25, 2024",
  //   },
  //   {
  //     title: "Fitness Tips for a Healthy Lifestyle",
  //     description:
  //       "Get fit and stay healthy with our expert fitness tips and workout routines.",
  //     image: "https://newlondonhospitality.vercel.app/tech1.webp",
  //     link: "#",
  //     user: "Charlie Davis",
  //     date: "June 22, 2024",
  //   },
  // ];

  const [blogData, setBlogData] = useState([]);
  const [featuredPost, setFeaturedPost] = useState();

  const getBlogData = async () => {
    try {
      const { data } = await API.get("/api/v1/blog");
      console.log(data?.data);
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
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-10">
          Discover Our Latest Stories
        </h1>
        <section className="py-10 px-5 md:px-20">
          {featuredPost && <FeaturedPost post={featuredPost} />}
        </section>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10 bg-gray-100 py-10 px-5 md:px-20 md:py-20">
          {blogData.length > 0 &&
            blogData.map((post, index) => (
              <BlogPostCard key={index} post={post} />
            ))}
        </section>
      </main>
    </div>
  );
};

export default BlogPage;
