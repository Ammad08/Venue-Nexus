import React from 'react';

const WhyChooseUs = () => {
  return (
    // bg-gradient-to-r from-purple-500 via-pink-500 to-red-500
    <section className=" bg-gradient-to-l from-slate-200 via-fuchsia-200 to-slate-200     text-white py-12 md:py-24">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-3xl text-black  md:text-4xl font-bold text-center mb-16 transform transition duration-500 hover:scale-105">
          Why Choose Venue Nexus?
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {/* Card 1 */}
          <div className="bg-slate-100 text-black p-6 rounded-xl shadow-lg transform transition duration-500 hover:scale-105">
            <div className="flex items-center justify-center mb-4">
              <img
                className=" bg-cover max-h-screen bg-center  rounded-xl"
                src="card1.jpg"
                alt="Wide Range of Venues"
              />
            </div>
            <h3 className="text-xl font-semibold mb-4">Wide Range of Venues</h3>
            <p className="text-gray-600">
              Find the perfect venue for every occasion. Whether it's a wedding,
              corporate event, or private party, we have a vast selection of venues.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-slate-100 text-black p-6 rounded-xl shadow-lg transform transition duration-500 hover:scale-105">
            <div className="flex items-center justify-center mb-4">
              <img
                className=" bg-cover bg-center max-h-screen rounded-xl"
                src="card2.jpg" // Replace with creative SVGs
                alt="Affordable Pricing"
              />
            </div>
            <h3 className="text-xl font-semibold mb-4">Affordable Pricing</h3>
            <p className="text-gray-600">
              Venue Nexus offers competitive pricing to make your event
              planning affordable without compromising on quality.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-slate-100 text-black p-6 rounded-xl shadow-lg transform transition duration-500 hover:scale-105">
            <div className="flex items-center justify-center mb-4">
              <img
                className=" bg-cover max-h-screen bg-center  rounded-xl"
                src="card3.jpg"
                alt="User-Friendly Interface"
              />
            </div>
            <h3 className="text-xl font-semibold mb-4">User-Friendly Interface</h3>
            <p className="text-gray-600">
              Our platform is easy to navigate, allowing you to book your event
              venue with just a few clicks. Plan your event effortlessly!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
