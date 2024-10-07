import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    // bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500
    <div id="contact" className="contact-section rounded-b-3xl  bg-[#153448]  text-white py-20 px-4">
      <div className="max-w-2xl mx-auto px-8 text-center rounded-3xl transition-all duration-500 transform hover:scale-105 hover:shadow-2xl animate-fadeInUp">
        <h2 className="text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-500 to-red-500 animate-textGlow">
          Contact Us
        </h2>
        <p className="text-lg text-gray-200 mb-8 font-light leading-relaxed">
          We're here to assist you! Whether you have questions or need support,
          feel free to reach out.
        </p>
        <div className="contact-info space-y-4">
          <p className="text-xl tracking-wide transition-colors duration-500 hover:text-yellow-300">
            Email: <span className="font-bold">contact@venuenexus.com</span>
          </p>
          <p className="text-xl tracking-wide transition-colors duration-500 hover:text-yellow-300">
            Phone: <span className="font-bold">+123 456 7890</span>
          </p>
          <p className="text-xl tracking-wide transition-colors duration-500 hover:text-yellow-300">
            Address:{" "}
            <span className="font-bold">
              123 Venue Nexus St, Event City, 45678
            </span>
          </p>
          <div className="flex justify-center ">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-500 rounded-full blur-xl opacity-75 animate-pulse"></div>
              <Link to="/contact2">
                <button className="relative bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 px-6 my-3 rounded-full transition-transform transform hover:scale-105 focus:outline-none">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
