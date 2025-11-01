import React from "react";
import { Link } from "react-router-dom";

const LandingHeader = () => {
  const navLinkClass =
    "text-gray-700 hover:text-gray-900 transition duration-150 font-medium text-sm";

  return (
    <header className="z-50 bg-transparent ">
      <div className="flex max-w-7xl mx-auto items-center justify-between h-20 px-8">
        <div className="font-logo flex items-center space-x-2">
          <Link to="/" className="text-3xl font-semibold">
            <img src="/assets/img/Travel.ly.png" alt="" />
          </Link>
        </div>

        <nav className="hidden md:flex items-center space-x-10">
          <Link to="/destinations" className={navLinkClass}>
            Destinations
          </Link>
          <Link to="/hotels" className={navLinkClass}>
            Hotels
          </Link>
          <Link to="/flights" className={navLinkClass}>
            Flights
          </Link>
          <Link to="/bookings" className={navLinkClass}>
            Bookings
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <Link to="/login" className={navLinkClass}>
            Login
          </Link>

          <Link
            to="/signup"
            className="border border-gray-400 text-gray-800 px-4 py-2 rounded-lg text-sm font-semibold 
                       hover:bg-gray-100 transition duration-150"
          >
            Sign up
          </Link>

          <div className="flex items-center text-gray-700 text-sm font-semibold cursor-pointer">
            EN
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
};

export default LandingHeader;
