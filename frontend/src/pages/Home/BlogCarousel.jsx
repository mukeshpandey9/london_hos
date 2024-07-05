import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";
import API from "../../utils/API";
import { Link } from "react-router-dom";

const BlogCarousel = () => {
  const [blogs, setBlogData] = useState([]);

  useEffect(() => {
    const getBlogData = async () => {
      try {
        const { data } = await API.get("/api/v1/blog");
        setBlogData(data?.data);
      } catch (error) {
        setBlogData([]);
        console.log(error.message);
      }
    };

    getBlogData();
  }, []);

  return (
    <>
      {blogs.length > 0 ? (
        <div className="container mx-auto">
          <Swiper
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper px-12 py-10 md:px-20 md:py-20"
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
          >
            {blogs.map((blog, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white border border-gray-300 group shadow-sm rounded-lg overflow-hidden h-[23rem] min-w-44">
                  <div className="relative overflow-hidden">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-48 object-cover transition-transform duration-300 transform group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Link to={`/blog/${blog._id}`}>
                        <button className="bg-white text-black px-4 py-2 rounded">Read More</button>
                      </Link>
                    </div>
                  </div>
                  <div className="p-2 md:p-4">
                    <h2 className="text-lg md:text-xl font-bold mb-2">{blog.title}</h2>
                    <p className="text-gray-700 text-sm">{blog.description.substring(0, 80) + "..."}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ) : (
        <div className="text-center text-xl py-10 text-gray-400">No blogs available</div>
      )}
    </>
  );
};

export default BlogCarousel;
