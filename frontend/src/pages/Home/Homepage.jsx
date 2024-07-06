import React, { useEffect } from "react";
import BlogCarousel from "./BlogCarousel";
import Services from "./Services";
import TestimonialCarousel from "./TestimonialCarousel";
import Contact from "./Contact";
import API from "../../utils/API";

const Homepage = () => {
  const increaseVisitorCount = async () => {
    await API.get("/api/v1/visitor-count");
  };

  useEffect(() => {
    increaseVisitorCount();
  }, []);
  return (
    <div className="h-full w-full">
      {/* Hero Section */}
      <div className="h-full md:h-[95vh] relative px-5 py-10 md:px-20">
        <img
          src="https://www.talk-business.co.uk/wp-content/uploads/2016/04/shutterstock_194001071.jpg"
          alt=""
          className="absolute inset-0 w-full h-full md:max-h-[95vh] object-cover object-center -z-20"
        />
        <div className="w-full md:w-1/2 text-gray-50 md:text-slate-200 z-50">
          <h1 className="text-4xl md:text-6xl font-bold">
            Transforming Hospitality, One Experience at a Time
          </h1>
          <p className="text-[1rem] md:text-xl py-10">
            Elevating guest satisfaction through innovation, excellence, and
            personalized service. Discover the future of hospitality with New
            London Hospitality
          </p>
          <button className="text-center px-4 py-2 text-white bg-dark rounded ">
            Learn More
          </button>
        </div>
        <div className="absolute inset-0 bg-black/50 -z-10"></div>
      </div>

      {/* Blog Section */}
      <div className="w-full h-full py-5 md:py-20 px-5 md:px-10">
        <h1 className="text-4xl font-semibold md:font-extrabold text-center">
          Technology & Innovation
        </h1>
        <BlogCarousel />
      </div>
      <div className="px-5 py-5 md:py-10 md:px-20 bg-gray-100">
        <Services />
      </div>
      <div className="w-full h-full py-10 md:py-20 px-5 md:px-10">
        <h1 className="text-4xl font-semibold md:font-extrabold text-center">
          Testimonials from Our Valued Guests
        </h1>
        <TestimonialCarousel />
      </div>
      <div id="contact" className="w-full h-full px-5 md:px-10 bg-gray-100">
        <Contact />
      </div>
    </div>
  );
};

export default Homepage;
