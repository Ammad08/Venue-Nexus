import React from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Slider = () => {
  const navigate = useNavigate();

  const venues = [
    {
      id: 1,
      name: "Pearl Continental",
      image: "/image1.jpg",
      rating: 4.5,
      reviews: 120,
      address: "Rawalpindi",
    },
    {
      id: 2,
      name: "Aura Grande",
      image: "/image2.jpg",
      rating: 4.5,
      reviews: 120,
      address: "Islamabad",
    },
    {
      id: 3,
      name: "Majesty",
      image: "/image3.jpg",
      rating: 4.5,
      reviews: 120,
      address: "Islamabad",
    },
    {
      id: 4,
      name: "1969 & time Goes On",
      image: "/image4.jpg",
      rating: 4.5,
      reviews: 120,
      address: "Islamabad",
    },
    {
      id: 5,
      name: "Diva",
      image: "/image5.jpg",
      rating: 4.5,
      reviews: 120,
      address: "Rawalpindi",
    },
    {
      id: 6,
      name: "Safari Club",
      image: "/image6.jpg",
      rating: 4.5,
      reviews: 120,
      address: "Rawalpindi",
    },
    {
      id: 7,
      name: "The Manor",
      image: "/image7.jpg",
      rating: 4.5,
      reviews: 120,
      address: "Islamabad",
    },
    {
      id: 8,
      name: "Royal Event Club",
      image: "/image8.jpg",
      rating: 4.5,
      reviews: 120,
      address: "Islamabad",
    },
    {
      id: 9,
      name: "Reet",
      image: "/image9.jpg",
      rating: 4.5,
      reviews: 120,
      address: "Rawalpindi",
    },
    {
      id: 10,
      name: "Al Zawaj",
      image: "/image10.jpg",
      rating: 4.5,
      reviews: 120,
      address: "Rawalpindi",
    },
  ];
  const handleBookNow = (id) => {
    navigate(`/venue/${id}`);
  };
  return (
    <>
      <div className="container mx-auto px-4 py-6 rounded-xl bg-stone-100">
        <div className="flex justify-between mx-5 ">
          <div>
            {" "}
            <h2 className="text-xl   md:text-3xl lg:text-3xl xl:text-3xl    font-bold mb-4 font-serif ">
              Most Popular Venues
            </h2>{" "}
          </div>
          <div>
            <Link
              to="/all-venues"
              className="text-lg  font-semibold hover:underline"
            >
              <div className="flex gap-2">
                <div>View All</div>{" "}
                <div className="text-3xl mt-0 ">
                  {" "}
                  <MdOutlineArrowRightAlt />
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="flex space-x-4 overflow-x-scroll ">
          {venues.map((venue) => (
            <div
              key={venue.id}
              className="bg-zinc-100 rounded-lg shadow-md p-4 min-w-[300px]"
            >
              <img
                src={venue.image}
                alt={venue.name}
                className="w-full h-40 object-cover rounded-t-lg"
              />
              <h3 className="text-lg font-bold mt-2">{venue.name}</h3>
              <div className="flex items-center justify-between mt-2">
                <div className="flex items-center gap-1">
                  <div>{venue.rating} </div>
                  <div className="text-yellow-400">
                    <FaStar />{" "}
                  </div>
                  <div>({venue.reviews} reviews)</div>
                </div>
                <span className="font-semibold">{venue.address}</span>
              </div>
              <button
                className="mt-4 inline-block text-center w-full text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 font-medium py-2 rounded-lg"
                onClick={() => handleBookNow(venue.id)}
              >
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Slider;
