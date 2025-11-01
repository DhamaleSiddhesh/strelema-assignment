import React from "react";
import Testimonials from "../components/Testimonials";

const LandingPage = () => {
  const services = [
    {
      title: "Calculated weather",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic accusamus itaque, velit repellat magni enim accusantium. Ipsam eos incidunt architecto.",
      img: "/assets/img/Group 48.png",
    },
    {
      title: "Calculated weather",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic accusamus itaque, velit repellat magni enim accusantium. Ipsam eos incidunt architecto.",

      img: "/assets/img/Group 48.png",
    },
    {
      title: "Calculated weather",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic accusamus itaque, velit repellat magni enim accusantium. Ipsam eos incidunt architecto.",

      img: "/assets/img/Group 48.png",
    },
    {
      title: "Calculated weather",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic accusamus itaque, velit repellat magni enim accusantium. Ipsam eos incidunt architecto.",

      img: "/assets/img/Group 48.png",
    },
  ];

  const Destinations = [
    {
      name: "Rome, Italy",
      price: "$20k",
      duration: "20 days Trip",
      img: "/assets/img/Rectangle 14.png",
    },
    {
      name: "Rome, Italy",
      price: "$20k",
      duration: "20 days Trip",
      img: "/assets/img/Rectangle 14.png",
    },
    {
      name: "Rome, Italy",
      price: "$20k",
      duration: "20 days Trip",
      img: "/assets/img/Rectangle 14.png",
    },
  ];

  return (
    <div>
      {/* HERO SECTION */}
      <section
        className="hero w-full min-h-screen bg-cover bg-center flex items-center"
        style={{ backgroundImage: "url('/assets/img/Decore.png')" }}
      >
        <div className="max-w-7xl mx-auto px-4 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* text */}
            <div className="flex flex-col justify-center space-y-4">
              <p className="font-bold text-orange-600">
                BEST DESTINATIONS AROUND THE WORLD
              </p>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-blue-950">
                Travel, enjoy and live a new and full life
              </h1>
              <p className="text-sm md:text-base">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime
                deserunt ad ipsum quod, dolorum quos numquam quaerat in nostrum
                reprehenderit placeat tenetur doloremque ducimus incidunt
                molestias quidem cumque voluptas modi?
              </p>
              <button className="w-50 btn py-3 px-5 bg-amber-500 rounded-b-sm">
                Find out more
              </button>
            </div>

            {/* image */}
            <div className="flex justify-center items-center">
              <img
                src="/assets/img/Image.png"
                alt="Travel"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="max-w-7xl mx-auto py-16">
        <p className="text-center py-2 ">CATEGORY</p>
        <h2 className="text-center font-bold text-blue-950 text-5xl mb-8">
          We Offer Best Services
        </h2>

        <div className="card flex justify-center gap-10 py-6 ">
          {services.map((service, index) => (
            <div
              key={index}
              className="text-center  bg-white rounded-lg shadow-sm  p-4"
            >
              <img
                src={service.img}
                alt={service.title}
                className="mx-auto rounded-md mb-4"
              />
              <p className="text-lg text-blue-950 font-semibold mb-2">
                {service.title}
              </p>
              <span className="text-blue-950 text-sm ">
                {service.description}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Top selling section */}
      <section className="max-w-7xl mx-auto py-16">
        <p className="text-center py-2 ">Top Selling</p>
        <h2 className="text-center font-bold text-blue-950 text-5xl mb-8">
          Top Detsinations
        </h2>

        <div className="flex  justify-center gap-15">
          {Destinations.map((destination, index) => (
            <div
              key={index}
              className="card max-w-sm rounded-lg shadow-md overflow-hidden relative"
            >
              {/* Image */}
              <img
                src={destination.img}
                alt={destination.name}
                className="w-full object-cover"
              />

              {/* Bottom overlay */}
              <div className="absolute bottom-0 left-0 w-full bg-white bg-opacity-90 p-4 flex flex-col space-y-1">
                <div className="flex justify-between items-center text-gray-800 font-semibold">
                  <span>{destination.name}</span>
                  <span className="text-orange-500">{destination.price}</span>
                </div>
                <p className="text-gray-600 text-sm">{destination.duration}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* steps */}
      <section className="max-w-7xl mx-auto pt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p>Easy and Fast</p>
            <h2 className="font-bold text-blue-950 text-5xl mb-8">
              Book Your Next Trip In 3 Easy Steps
            </h2>

            <div className="flex gap-3">
              <img
                className="object-contain"
                src="assets/img/Group 7.png"
                alt=""
              />
              <div>
                <p className="font-bold text-sm text-blue-950">
                  Choose Destination
                </p>
                <span className="text-xs">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloremque amet sequi voluptates. <br /> Distinctio maiores
                  ipsa harum rem quos impedit sequi.
                </span>
              </div>
            </div>

            <div className="flex gap-3 py-8">
              <img
                className="object-contain"
                src="assets/img/Group 7.png"
                alt=""
              />
              <div>
                <p className="font-bold text-sm text-blue-950">Make payment</p>
                <span className="text-xs">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloremque amet sequi voluptates. <br /> Distinctio maiores
                  ipsa harum rem quos impedit sequi.
                </span>
              </div>
            </div>

            <div className="flex gap-3">
              <img
                className="object-contain"
                src="assets/img/Group 7.png"
                alt=""
              />
              <div>
                <p className="font-bold text-sm text-blue-950">
                  Reach Airport on Selected Date
                </p>
                <span className="text-xs">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloremque amet sequi voluptates. <br /> Distinctio maiores
                  ipsa harum rem quos impedit sequi.
                </span>
              </div>
            </div>
          </div>

          {/* <div > */}
          <img className="h-full" src="assets/img/Image-2.png" alt="" />
          {/* </div> */}
        </div>
      </section>

      {/* testimonial */}
      <Testimonials />

      {/* Clients */}
      <div className="flex justify-center items-center gap-25">
        <img src="assets/img/image 27.png" alt="" />
        <img src="assets/img/image 28.png" alt="" />
        <img src="assets/img/image 30.png" alt="" />
        <img src="assets/img/image 31.png" alt="" />
      </div>

      {/* Newsletter */}
      <section className="max-w-5xl mx-auto pt-16">
        <div className="bg-blue-50 p-10 rounded-tl-[100px]">
          <p className="text-center font-bold text-2xl text-gray-700">
            {" "}
            Subscribe to get more information latest news and other <br />
            intresting offers about jadoo{" "}
          </p>
          <div className="flex justify-center pt-10">
            <div className="flex w-full max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-sm bg-white"
              />
              <button className="bg-orange-500 text-white px-6 py-3 rounded-sm">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
