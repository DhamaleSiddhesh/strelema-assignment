import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

const testimonials = [
  {
    name: "John Doe",
    role: "Ceo of Red Button",
    feedback:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias nesciunt ratione amet velit inventore beatae tempore ab? Minima, dolorem? Aliquid?",
    img: "/assets/img/Group 7.png",
  },
  {
    name: "John Doe",
    role: "Ceo of Red Button",
    feedback:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias nesciunt ratione amet velit inventore beatae tempore ab? Minima, dolorem? Aliquid?",
    img: "/assets/img/Group 7.png",
  },
];

const Testimonials = () => {
  return (
    <section className="max-w-7xl mx-auto pt-16 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div>
          <p className="text-orange-600 font-bold">TESTIMONIALS</p>
          <h2 className="font-bold text-blue-950 text-5xl mt-2">
            What People Say <br />
            About Us
          </h2>
          <p className="mt-4 text-gray-600">
            Hear directly from our travelers about their unforgettable
            experiences. We take pride in providing top-notch service and
            memorable journeys.
          </p>
        </div>

        <div className="relative">
          <Swiper
            direction={"vertical"}
            modules={[Pagination, Navigation]}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            pagination={{
              el: ".swiper-pagination",
              clickable: true,
            }}
            loop={true}
            className="h-80"
            speed={600}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white  p-6 rounded-lg shadow-lg flex flex-col justify-center items-center text-center">
                  <img
                    src={testimonial.img}
                    alt={testimonial.name}
                    className="w-20 h-20 rounded-full object-contain mb-4"
                  />
                  <p className="text-gray-700 mb-2">"{testimonial.feedback}"</p>
                  <h3 className="font-semibold text-blue-950">
                    {testimonial.name}
                  </h3>
                  <span className="text-gray-500 text-sm">
                    {testimonial.role}
                  </span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation arrows*/}
          <div
            className="absolute top-1/2  transform rotate-90 right-0 flex flex-col space-y-4 z-50 "
            style={{ right: "-83px" }}
          >
            <div className="swiper-button-prev bg-gray-200 p-2 rounded-full cursor-pointer transform rotate-180 "></div>
            <div className="swiper-button-next bg-gray-200 p-2 rounded-full cursor-pointer transform rotate-180"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
