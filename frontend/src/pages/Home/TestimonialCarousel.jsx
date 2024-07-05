import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const testimonials = [
  {
    name: "John Doe",
    title: "CEO of Company",
    description:
      "This service is amazing! It has changed my life for the better.",
    image: "https://via.placeholder.com/100x100?text=John",
  },
  {
    name: "Jane Smith",
    title: "Marketing Manager",
    description: "I love using this product. It’s so easy and convenient!",
    image: "https://via.placeholder.com/100x100?text=Jane",
  },
  {
    name: "Sam Wilson",
    title: "Product Manager",
    description:
      "A fantastic experience from start to finish. Highly recommended!A fantastic experience from start to finish. Highly recommended!",
    image: "https://via.placeholder.com/100x100?text=Sam",
  },
  {
    name: "Alex Johnson",
    title: "Developer",
    description: "Top-notch customer service and excellent results.",
    image: "https://via.placeholder.com/100x100?text=Alex",
  },
  {
    name: "Chris Lee",
    title: "Designer",
    description:
      "I can’t imagine going back to the way things were before. Simply outstanding!",
    image: "https://via.placeholder.com/100x100?text=Chris",
  },
];

const TestimonialCarousel = () => {
  return (
    <div className="container mx-auto">
      <Swiper
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper px-8 py-10 md:px-20 md:py-20"
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
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white group shadow-sm rounded-lg overflow-hidden h-auto border border-gray-300 min-w-44 p-4 flex flex-col items-center text-center">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full mb-4 object-cover"
              />
              <h2 className="text-lg font-bold">{testimonial.name}</h2>
              <h3 className="text-sm  text-gray-500 mb-2">
                {testimonial.title}
              </h3>
              <p className="text-gray-700 text-sm">{testimonial.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialCarousel;
