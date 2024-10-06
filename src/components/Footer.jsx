import React from "react";
import { Link } from "react-router-dom";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <>
    {/* bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500   #153448*/}
      <div className=" bg-[#153448]    text-white font-sans min-h-screen">
        <main className="flex-1 py-12 px-8 text-start justify-center">
          <div className="border-y border-gray-600">
            <div className="pt-10 flex flex-col lg:flex-row md:space-x-8 justify-start">
              <div className=" w-full  lg:w-2/5 lg:w-40%">
              <Link to="/" onClick={() => handleClick('home')} className="flex justify-center items-center mb-4">
                <img
                  className=" w-40 mr-10 bg-slate-300  rounded-3xl p-2 lg:ml-10 filter brightness-100 contrast-200 shadow-2xl"
                  src="logo1.png"
                  alt=""
                />
                </Link>
                <p className="text-lg mb-8 p-2 lg:ml-10 font-serif ">
                Venue Nexus is your trusted platform for seamless event venue bookings. From weddings to corporate events, find the perfect venue based on your preferences, availability, and location. Explore detailed listings, compare reviews, and make informed decisions with ease. Let us help you create unforgettable moments.
                </p>
                <div className="text-white flex justify-start lg::justify-start space-x-4  py-4 mb-0 md:ml-10">
                  <Link
                    to="https://twitter.com"
                    className="text-gray-300 hover:text-white"
                  >
                    <FaTwitter className="border border-gray-500 bg-gray-950 p-2 size-9 rounded-lg" />
                  </Link>
                  <Link
                    to="https://www.linkedin.com"
                    className="text-gray-300 hover:text-white"
                  >
                    <FaLinkedin className="border border-gray-500 bg-gray-950 p-2 size-9 rounded-lg" />
                  </Link>
                  <Link
                    to="https://www.facebook.com"
                    className="text-gray-300 hover:text-white"
                  >
                    <FaFacebookF className="border border-gray-500 bg-gray-950 p-2 size-9 rounded-lg" />
                  </Link>
                  <Link
                    to="https://www.instagram.com"
                    className="text-gray-300 hover:text-white"
                  >
                    <FaInstagram className="border border-gray-500 bg-gray-950 p-2 size-9 rounded-lg" />
                  </Link>
                </div>
              </div>

              <div className="flex flex-col md:flex-row justify-center md:space-x-8 mt-8 md:mt-0">
                <div className="text-left mb-8 md:pl-10 leading-loose">
                  <h2 className="text-xl font-bold mb-4">General</h2>
                  <ul className="space-y-2">
                    <li>
                      <Link
                        to="/"
                        className="text-gray-300 hover:text-white"
                        onClick={(e) => {
                          e.preventDefault();
                          // document.getElementById("home").scrollIntoView({ behavior: "smooth" });
                          const homeSection = document.getElementById("home");
                          if (homeSection) {
                            homeSection.scrollIntoView({ behavior: "smooth" });
                          }
                        }}
                        
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/about"
                        className="text-gray-300 hover:text-white"
                        onClick={(e) => {
                          e.preventDefault();
                          document.getElementById("about").scrollIntoView({ behavior: "smooth" });
                        }}
                        
                      >
                        About us
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/"
                        className="text-gray-300 hover:text-white"
                        onClick={(e) => {
                          e.preventDefault();
                          document.getElementById("services").scrollIntoView({ behavior: "smooth" });
                        }}
                      >
                        Services
                      </Link>
                    </li>
                    <li>
                      
                    </li>
                    <li>
                      <Link
                        to="/contact"
                        className="text-gray-300 hover:text-white"
                        onClick={(e) => {
                          e.preventDefault();
                          document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
                        }}
                      >
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="text-left mb-8 md:pl-10 leading-loose">
                  <h2 className="text-xl font-semibold mb-4">Features</h2>
                  <ul className="space-y-2">
                    <li>
                      <Link
                        to="/"
                        className="text-gray-300 hover:text-white"
                      >
                        Search venue
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/"
                        className="text-gray-300 hover:text-white"
                      >
                        Venue Types 
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/"
                        className="text-gray-300 hover:text-white"
                      >
                        Pricing Plans
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/"
                        className="text-gray-300 hover:text-white"
                      >
                        Venue Reviews
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/"
                        className="text-gray-300 hover:text-white"
                      >
                        Event Calendar 
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/"
                        className="text-gray-300 hover:text-white"
                      >
                        How It Works
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/"
                        className="text-gray-300 hover:text-white"
                      >
                        Customer Support
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/"
                        className="text-gray-300 hover:text-white"
                      >
                        Special Offers
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/"
                        className="text-gray-300 hover:text-white"
                      >
                        Venue Comparison
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="text-left mb-8 md:pl-10 leading-loose">
                  <h2 className="text-xl font-semibold mb-4 text-nowrap">
                    Important Links
                  </h2>
                  <ul className="space-y-2">
                    <li>
                      <Link
                        to="/"
                        className="text-gray-300 hover:text-white"
                      >
                        Terms and conditions
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/"
                        className="text-gray-300 hover:text-white"
                      >
                        FAQs
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/"
                        className="text-gray-300 hover:text-white"
                      >
                        Privacy policy
                      </Link>
                    </li>
                    
                      
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </main>
        <footer className="flex justify-center text-center text-yellow-200 py-4 ">
          <div className="text-slate-300 px-1">Venue Nexus</div> © All rights
          reserved.
        </footer>
      </div>
    </>
  );
};

export default Footer;
