import React from 'react';
import { useParams } from 'react-router-dom';
import venues from './Slider' // Import venue data

const VenueDetails = () => {
  const { id } = useParams();
  const venues = [
  
    {
      id: 1,
      name: "Pearl Continental",
      image: "/image1.jpg",
      rating: 4.5,
      reviews: 120,
      address: "Rawalpindi",
      capacity:"500",
      description: 'Detailed description for Venue One', 
      pricing: '$500 per day', 
      reviews: [
        { id: 1, user: 'Alice', comment: 'Great venue!', rating: 5 },
        { id: 2, user: 'Bob', comment: 'Good location, but a bit expensive.', rating: 4 }
      ]
    },
    
    {
      id: 2,
      name: "Aura Grande",
      image: "/image2.jpg",
      rating: 4.5,
      reviews: 120,
      address: "Islamabad",
      capacity:"500",
      description: 'Detailed description for Venue One', 
      pricing: '$500 per day', 
      reviews: [
        { id: 1, user: 'Alice', comment: 'Great venue!', rating: 5 },
        { id: 2, user: 'Bob', comment: 'Good location, but a bit expensive.', rating: 4 }
      ]
    },
    {
      id: 3,
      name: "Majesty",
      image: "/image3.jpg",
      rating: 4.5,
      reviews: 120,
      address: "Islamabad",
       capacity:"500",
      description: 'Detailed description for Venue One', 
      pricing: '$500 per day', 
      reviews: [
        { id: 1, user: 'Alice', comment: 'Great venue!', rating: 5 },
        { id: 2, user: 'Bob', comment: 'Good location, but a bit expensive.', rating: 4 }
      ]
    },
    {
      id: 4,
      name: "1969 & time Goes On",
      image: "/image4.jpg",
      rating: 4.5,
      reviews: 120,
      address: "Islamabad",
       capacity:"500",
      description: 'Detailed description for Venue One', 
      pricing: '$500 per day', 
      reviews: [
        { id: 1, user: 'Alice', comment: 'Great venue!', rating: 5 },
        { id: 2, user: 'Bob', comment: 'Good location, but a bit expensive.', rating: 4 }
      ]
    },
    {
      id: 5,
      name: "Diva",
      image: "/image5.jpg",
      rating: 4.5,
      reviews: 120,
      address: "Rawalpindi",
       capacity:"500",
      description: 'Detailed description for Venue One', 
      pricing: '$500 per day', 
      reviews: [
        { id: 1, user: 'Alice', comment: 'Great venue!', rating: 5 },
        { id: 2, user: 'Bob', comment: 'Good location, but a bit expensive.', rating: 4 }
      ]
    },
    {
      id: 6,
      name: "Safari Club",
      image: "/image6.jpg",
      rating: 4.5,
      reviews: 120,
      address: "Rawalpindi",
       capacity:"500",
      description: 'Detailed description for Venue One', 
      pricing: '$500 per day', 
      reviews: [
        { id: 1, user: 'Alice', comment: 'Great venue!', rating: 5 },
        { id: 2, user: 'Bob', comment: 'Good location, but a bit expensive.', rating: 4 }
      ]
    },
    {
      id: 7,
      name: "The Manor",
      image: "/image7.jpg",
      rating: 4.5,
      reviews: 120,
      address: "Islamabad",
       capacity:"500",
      description: 'Detailed description for Venue One', 
      pricing: '$500 per day', 
      reviews: [
        { id: 1, user: 'Alice', comment: 'Great venue!', rating: 5 },
        { id: 2, user: 'Bob', comment: 'Good location, but a bit expensive.', rating: 4 }
      ]
    },
    {
      id: 8,
      name: "Royal Event Club",
      image: "/image8.jpg",
      rating: 4.5,
      reviews: 120,
      address: "Islamabad",
       capacity:"500",
      description: 'Detailed description for Venue One', 
      pricing: '$500 per day', 
      reviews: [
        { id: 1, user: 'Alice', comment: 'Great venue!', rating: 5 },
        { id: 2, user: 'Bob', comment: 'Good location, but a bit expensive.', rating: 4 }
      ]
    },
    {
      id: 9,
      name: "Reet",
      image: "/image9.jpg",
      rating: 4.5,
      reviews: 120,
      address: "Rawalpindi",
       capacity:"500",
      description: 'Detailed description for Venue One', 
      pricing: '$500 per day', 
      reviews: [
        { id: 1, user: 'Alice', comment: 'Great venue!', rating: 5 },
        { id: 2, user: 'Bob', comment: 'Good location, but a bit expensive.', rating: 4 }
      ]
    },
    {
      id: 10,
      name: "Al Zawaj",
      image: "/image10.jpg",
      rating: 4.5,
      reviews: 120,
      address: "Rawalpindi",
       capacity:"500",
      description: 'Detailed description for Venue One', 
      pricing: '$500 per day', 
      reviews: [
        { id: 1, user: 'Alice', comment: 'Great venue!', rating: 5 },
        { id: 2, user: 'Bob', comment: 'Good location, but a bit expensive.', rating: 4 }
      ]
    },
  ];
  const venue = venues.find(v => v.id === parseInt(id));

  

  return (
   <div className='w-full bg-slate-300'>
    <div className="bg-slate-50  p-6 rounded-xl shadow-2xl max-w-4xl mx-auto">
      <img src={venue.image} alt={venue.name} className="w-full h-64 object-cover rounded-lg" />
      <h1 className="text-3xl font-semibold  py-4">{venue.name}</h1>
      <p className="text-black font-medium">{venue.address}</p>
      <p className="mt-2 text-gray-800">{venue.description}</p>
      <p className="mt-2 text-gray-600">Capacity: {venue.capacity}</p>
      <p className="mb-4">{venue.description}</p>

{/* Calendar Section */}
<div className="mb-6">
  <h2 className="text-xl font-semibold mb-2">Availability</h2>
  <div className="bg-gray-100 p-4 rounded-lg">
    {/* Example of using react-calendar */}
     {/* <Calendar />  */}
         <p>Calendar Placeholder</p>
  </div>
</div>
 {/* Pricing Section */}
 <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Pricing</h2>
            <div className="bg-gray-100 p-4 rounded-lg">
              <p className="text-lg">{venue.pricing}</p>
            </div>
          </div>

 {/* Reviews Section */}
 <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Reviews</h2>
            <div className="bg-gray-100 p-4 rounded-lg space-y-4">
              {venue.reviews.map(review => (
                <div key={review.id} className="bg-white p-4 rounded-lg shadow">
                  <h3 className="font-bold">{review.user}</h3>
                  <p>{review.comment}</p>
                  <p className="text-sm text-gray-500">Rating: {review.rating}/5</p>
                </div>
              ))}
            </div>
          </div>

   
    </div>
    </div>
    
  );

};

export default VenueDetails;