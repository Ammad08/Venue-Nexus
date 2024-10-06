import React from "react";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

const AboutUs = () => {
  return (
    // bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500
    <section id="about" className=" relative rounded-t-3xl bg-[#153448]  text-white py-16 px-8">
      <div className="max-w-4xl mx-auto px-8 text-center rounded-2xl shadow-2xl">
        <h1 className="text-4xl font-bold mb-6">
          <span>Welcome to </span>
          <span className="text-yellow-300">
            <Typewriter
              words={["Venue Nexus"]}
              loop={false}
              cursor
              cursorStyle="_"
              typeSpeed={100}
            />
          </span>
        </h1>
        <p className="text-lg mb-8">
          We are your go-to platform for finding the perfect venues for any
          event, be it a wedding, corporate meeting, or social gathering. Our
          mission is to connect you with the best venues, tailored to your
          preferences and needs.
        </p>

        <div className="flex justify-center">
          <div className="relative inline-block py-3">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-500 rounded-full blur-xl opacity-75  animate-pulse"></div>
            <Link to="/about2">
              <button className="relative bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 px-6 rounded-full transition-transform transform hover:scale-105 focus:outline-none">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Floating Animations */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float animation-delay-2"></div>
    </section>
  );
};

export default AboutUs;
