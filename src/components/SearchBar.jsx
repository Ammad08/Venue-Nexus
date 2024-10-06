import React, { useState } from "react";
import Allvenues from "./Allvenues";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedEventType, setSelectedEventType] = useState("");
  // const [showComponent, setShowComponent] = useState(false);
  const navigate = useNavigate();

  const handleSearch = () => {
    if (!selectedCity || !selectedEventType) {
      alert("Please select both city and event type.");
    } else {
      // alert(`Searching venues in ${selectedCity} for ${selectedEventType}`);
      // setShowComponent(true);
      navigate("/all-venues");
    }
  };

  return (
    // bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500
    <div className=" bg-[url('/searchbg.jpg')] bg-cover bg-center max-h-screen  mt-16   py-8">
      {/* Outer Wrapper with background color */}
      <div className="max-w-lg mx-auto bg-white bg-opacity-40 p-6 rounded-2xl  shadow-2xl">
        {/* Heading */}
        <h1 className="text-2xl  md:text-3xl lg:text-3xl xl:text-3xl text-black font-serif font-semibold text-center mb-6">
          Select Your Venue
        </h1>

        {/* Search Bar */}
        <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 mb-4">
          {/* Select City */}
          <select
            className="w-full sm:w-1/2 p-2 font-serif border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
          >
            <option value="" disabled>
              Select City
            </option>
            <option value="rawalpindi">Rawalpindi</option>
            <option value="islamabad">Islamabad</option>

            
          </select>

          {/* Select Event Type */}
          <select
            className="w-full sm:w-1/2 p-2 font-serif border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={selectedEventType}
            onChange={(e) => setSelectedEventType(e.target.value)}
          >
            <option value="" disabled>
              Enter Event Type
            </option>
            <option value="wedding">Wedding</option>
            <option value="party">Party</option>
            <option value="engagement">Engagement</option>
            <option value="seminar">Seminar</option>
          </select>
        </div>

        {/* Search Button */}
        <div className="text-center">
          <button
            onClick={handleSearch}
            className=" font-serif  bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500   text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Search Venue
          </button>
          {/* {showComponent && <Allvenues />} */}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
