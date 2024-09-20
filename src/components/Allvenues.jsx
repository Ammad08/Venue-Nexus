import { useNavigate } from 'react-router-dom';

const Allvenues = ({  }) => {
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
      <div className="container mx-auto px-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
        <h1 className="text-center  text-5xl  font-bold  font-serif py-8">All Venues</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {venues.map((venue) => (
            <div key={venue.id} className=" bg-slate-200 border rounded-lg p-4">
              <img src={venue.image} alt={venue.name} className="w-full h-32 object-cover rounded-md mb-2" />
              <h3 className="text-lg font-bold">{venue.name}</h3>
              <p className="text-sm font-semibold text-black">{venue.address}</p>
              {/* Rating and review logic here */}
              <button 
              
              className="mt-4 inline-block text-center w-full text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 font-medium py-2 rounded-lg"
              onClick={() => handleBookNow(venue.id)} >
              Book Now
            </button>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Allvenues;
  