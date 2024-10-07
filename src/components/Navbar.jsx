
import React, { useState } from "react";
import { IoHome } from "react-icons/io5";
import { GiPartyPopper } from "react-icons/gi";
import { GiBookCover } from "react-icons/gi";
import { IoPeople } from "react-icons/io5";
import { Link,useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();
  const isLandingPage = location.pathname === '/';

  // Add conditional class based on the page path
  const navbarClass = isLandingPage ? 'fixed top-0 left-0 w-full bg-white shadow-md z-50' :  'sticky top-0 bg-white shadow-md z-50 ';

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleClick = (id) => {
    if (location.pathname === '/') {
      handleScroll(id);
    } else {
      window.location.href = `/#${id}`;
    }
  };


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
 
 
  return (
    <nav id="services" className={navbarClass}
        >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  bg-gradient-to-l from-slate-200 via-fuchsia-200 to-stone-200">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" onClick={() => handleClick('home')} className="flex-shrink-0  transform transition duration-300 hover:scale-110 ">
            <img
              className="h-20 w-28  rounded-3xl  "
              src="/logo1.png"
              alt="logo"
            />
          </Link>

          {/* Hamburger menu for mobile */}
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
            >
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>

          {/* Navigation Menu */}
          <div className="hidden sm:flex sm:space-x-8">
            <Link
              to="/" onClick={() => handleClick('home')}
              className="text-gray-800 font-bold text-lg hover:text-blue-600 px-3 py-2 rounded-md  transform transition duration-300 hover:scale-110 "
              // onClick={(e) => {
              //   e.preventDefault();
              //   document.getElementById("home").scrollIntoView({ behavior: "smooth" });
              // }}
            >
              Home
            </Link>
            <div
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button className="text-gray-800 font-bold text-lg hover:text-blue-600 px-3 py-2 rounded-md   transform transition duration-300 hover:scale-110 ">
                Services
              </button>
              {isDropdownOpen && (
                <div className="absolute   bg-gradient-to-l from-slate-200 via-fuchsia-200 to-stone-200  left-0 mt-1 w-60  shadow-2xl rounded-3xl py-2 z-50">
                  <Link
                    to="/"
                    className="block   px-4 py-2 text-black hover:bg-gray-200"
                  >
                    <div className="flex gap-4">
                      {" "}
                      <IoHome className="h-8 w-8" />
                      <Link to="/all-venues" className="font-semibold  transform transition duration-300 hover:scale-105">
                        {" "}
                        Wedding Venues
                      </Link>
                    </div>
                  </Link>
                  <Link
                    to="/all-venues"
                    className="block px-4 py-2 text-black hover:bg-gray-200"
                  >
                    <div className="flex gap-4  transform transition duration-300 hover:scale-105">
                      {" "}
                      <GiPartyPopper className="h-8 w-8" />
                      <p className="font-semibold">Party Venues</p>
                    </div>
                  </Link>

                  <Link
                    to="/all-venues"
                    className="block px-4 py-2 text-black hover:bg-gray-200"
                  >
                    <div className="flex gap-4  transform transition duration-300 hover:scale-105">
                      {" "}
                      <GiBookCover className="h-8 w-8" />
                      <p className="font-semibold">Seminar Venues</p>
                    </div>
                  </Link>

                  <Link
                    to="/all-venues"
                    className="block px-4 py-2 text-black hover:bg-gray-200"
                  >
                    <div className="flex gap-4  transform transition duration-300 hover:scale-105">
                      {" "}
                      <IoPeople className="h-8 w-8 border rounded-full " />
                      <p className="font-semibold">Destination Wedding</p>
                    </div>
                  </Link>
                </div>
              )}
            </div>
            <Link
              to="/" onClick={() => handleClick('about')}
              className="text-gray-800 font-bold text-lg hover:text-blue-600 px-3 py-2 rounded-md   transform transition duration-300 hover:scale-110"
              // onClick={(e) => {
              //   e.preventDefault();
              //   document.getElementById("about").scrollIntoView({ behavior: "smooth" });
              // }}
            >
              About
            </Link>
            <Link
              to="/" onClick={() => handleClick('contact')}
              className="text-gray-800 font-bold text-lg hover:text-blue-600 px-3 py-2 rounded-md  transform transition duration-300 hover:scale-110 "
              // onClick={(e) => {
              //   e.preventDefault();
              //   document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
              // }}
            >
              Contact
            </Link>
          </div>

          {/* Login/Signup */}
          <div className="hidden sm:flex sm:items-center sm:space-x-4">
            <Link
              to="/Login"
              className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 font-medium  px-6 py-2 rounded-xl  text-center  transform transition duration-300 hover:scale-110   "
            >
              Login
            </Link>
            <Link
              to="/Signup"
              className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 font-medium  px-6 py-2 rounded-xl  text-center  transform transition duration-300 hover:scale-110 "
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="sm:hidden px-2 pt-2 pb-3 space-y-1 bg-gradient-to-l from-slate-200 via-fuchsia-200 to-stone-200">
          <Link
            to="/" onClick={() => handleClick('home')}
            className="block text-gray-800 font-bold hover:bg-gray-300 rounded-md px-3 py-2"
          >
            Home
          </Link>
          <button
            onClick={toggleDropdown}
            className="block w-full text-left text-gray-800 font-bold hover:bg-gray-100 rounded-md px-3 py-2"
          >
            Services
          </button>
          {isDropdownOpen && (
            <div className="space-y-1 pl-4 bg-gradient-to-l from-slate-200 via-fuchsia-200 to-stone-200 rounded-xl ">
              <Link
                to="/all-venues"
                className="block   px-4 py-2 text-black hover:bg-gray-300"
              >
                <div className="flex gap-4">
                  {" "}
                  <IoHome className="h-8 w-8" />
                  <span className="font-semibold"> Wedding Venues</span>
                </div>
              </Link>
              <Link
                to="/all-venues"
                className="block px-4 py-2 text-black hover:bg-gray-300"
              >
                <div className="flex gap-4">
                  {" "}
                  <GiPartyPopper className="h-8 w-8" />
                  <p className="font-semibold">Party Venues</p>
                </div>
              </Link>

              <Link
                to="/all-venues"
                className="block px-4 py-2 text-black hover:bg-gray-300"
              >
                <div className="flex gap-4">
                  {" "}
                  <GiBookCover className="h-8 w-8" />
                  <p className="font-semibold">Seminar Venues</p>
                </div>
              </Link>

              <Link
                to="/all-venues"
                className="block px-4 py-2 text-black hover:bg-gray-300"
              >
                <div className="flex gap-4">
                  {" "}
                  <IoPeople className="h-8 w-8 border rounded-full " />
                  <p className="font-semibold">Destination Wedding</p>
                </div>
              </Link>
            </div>
          )}
          <Link
            to="/" onClick={() => handleClick('about')}
            className="block text-gray-800 font-bold hover:bg-white rounded-md px-3 py-2"
            // onClick={(e) => {
            //   e.preventDefault();
            //   document.getElementById("about").scrollIntoView({ behavior: "smooth" });
            // }}
          >
            About
          </Link>
          <Link
            to="/" onClick={() => handleClick('contact')}
            className="block text-gray-800 font-bold hover:bg-gray-100 rounded-md px-3 py-2"
            // onClick={(e) => {
            //   e.preventDefault();
            //   document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
            // }}
          >
            Contact
          </Link>
          <div className="flex justify-center space-x-4">
            <Link
              to="/Login"
              className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 font-medium  px-6 py-2 rounded-xl  text-center   "
            >
              Login
            </Link>
            <Link
              to="/Signup"
              className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 font-medium  px-6 py-2 rounded-xl  text-center   "
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;



