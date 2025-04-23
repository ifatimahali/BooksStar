import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import bookmarkIcon from '../assets/favorite.png';
import readIcon from '../assets/readIcon.png';
import filledBookmarkIcon from '../assets/favoritefull.png';
import filledReadIcon from '../assets/readIconFull.jpg';

function BookCard({ book, onAddToFavorites, onMarkAsRead }) {
  const navigate = useNavigate(); 

  const handleAddToFavorites = () => {
    if (localStorage.getItem('user')) {
      onAddToFavorites(book.rank);
    } else {
      navigate('/login');
    }
  };

  const handleMarkAsRead = () => {
    if (localStorage.getItem('user')) {
      onMarkAsRead(book.rank);
    } else {
      navigate('/login');
    }
  };

  return (
    <div className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl mb-8">
      <img src={book.book_image} alt={book.title} className="w-full h-[60vh] object-cover" />
      <div className="px-6 py-4">
        <h2 className="text-xl font-semibold">{book.title}</h2>
        <p className="text-gray-600">{book.author}</p>
      </div>
      <div className="px-6 py-4 flex justify-between items-center">
        <div>
          <Link
            to={`/book/${book.rank}`} 
            className="bg-[#DAEEF9] hover:bg-gray-200 text-black font-semibold px-4 py-2 rounded-md text-sm block"
          >
            View Details
          </Link>
        </div>
        <div className="flex space-x-4">
          <button onClick={handleAddToFavorites} className="focus:outline-none">
            <img
              src={book.favorite ? filledBookmarkIcon : bookmarkIcon}
              alt="Favorite"
              className="h-6 w-6 hover:opacity-75"
            />
          </button>
          <button onClick={handleMarkAsRead} className="focus:outline-none">
            <img
              src={book.read ? filledReadIcon : readIcon}
              alt="Read"
              className="h-6 w-6 hover:opacity-75"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookCard;

