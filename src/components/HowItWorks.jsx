import React from 'react';
import { FaSearchLocation, FaRegCalendarCheck, FaCheckCircle } from 'react-icons/fa';

const HowItWorks = () => {
  return (
    <section className="bg-gradient-to-l from-slate-200 via-white to-slate-200  py-16" id="how-it-works">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-indigo-500 text-white flex justify-center items-center rounded-full mb-6">
              <FaSearchLocation size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-4">Find Your Venue</h3>
            <p className="text-gray-600">
              Search and browse through a variety of venues to find the perfect one for your event.
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-indigo-500 text-white flex justify-center items-center rounded-full mb-6">
              <FaRegCalendarCheck size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-4">Check Availability</h3>
            <p className="text-gray-600">
              View real-time availability and book the venue on your preferred date with ease.
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-indigo-500 text-white flex justify-center items-center rounded-full mb-6">
              <FaCheckCircle size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-4">Book and Confirm</h3>
            <p className="text-gray-600">
              Secure your booking and receive instant confirmation for a stress-free experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
