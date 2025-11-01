import React from "react";
import { Link } from "react-router-dom";

const LandingFooter = () => {
  const FooterLinkClass =
    "text-gray-600 text-sm mb-2";

  return (
    <footer className="bg-white pt-20 pb-8 border-t border-gray-100 shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-6 gap-10">
        <div className="md:col-span-2 pr-10">
          <Link to="/" className="text-3xl font-extrabold text-black">
            TravelLy
          </Link>
          <p className="mt-4 text-sm text-gray-600 max-w-xs">
            Book your trip in minutes, get full control for much longer.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-bold text-gray-900 mb-4">Company</h4>
          <nav className="flex flex-col">
            <Link to="/about" className={FooterLinkClass}>
              About
            </Link>
            <Link to="/careers" className={FooterLinkClass}>
              Careers
            </Link>
            <Link to="/mobile" className={FooterLinkClass}>
              Mobile
            </Link>
          </nav>
        </div>

        <div>
          <h4 className="text-lg font-bold text-gray-900 mb-4">Contact</h4>
          <nav className="flex flex-col">
            <Link to="/help" className={FooterLinkClass}>
              Help/FAQ
            </Link>
            <Link to="/press" className={FooterLinkClass}>
              Press
            </Link>
            <Link to="/affiliates" className={FooterLinkClass}>
              Affiliates
            </Link>
          </nav>
        </div>

        <div>
          <h4 className="text-lg font-bold text-gray-900 mb-4">More</h4>
          <nav className="flex flex-col">
            <Link to="/airlinefees" className={FooterLinkClass}>
              Airlinefees
            </Link>
            <Link to="/airline" className={FooterLinkClass}>
              Airline
            </Link>
            <Link to="/lowfaretips" className={FooterLinkClass}>
              Low fare tips
            </Link>
          </nav>
        </div>

        <div className="md:col-span-1">
          <div className="flex items-center">
            <a href="">
              <img className="w-20" src="/assets/img/Social (2).png" alt="" />
            </a>
            <a href="">
              <img src="/assets/img/Social.png" alt="" />
            </a>
            <a href="">
              <img className="w-20" src="/assets/img/Social (1).png" alt="" />
            </a>
          </div>

          <h4 className="text-md font-bold text-gray-900 mb-3">
            Discover our app
          </h4>
          <div className="flex space-x-2">
            <a href="#" className="w-1/2">
              <img
                src="/assets/img/Play Store.png"
                alt="Google Play"
                className="w-full"
              />
            </a>
            <a href="#" className="w-1/2">
              <img
                src="/assets/img/Google Play.png"
                alt="App Store"
                className="w-full"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default LandingFooter;
