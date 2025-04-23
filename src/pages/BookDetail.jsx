import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom'; 
import Footer from '../component/Footer';

function BookDetail() {
  const { rank } = useParams();
  const storedBooks = localStorage.getItem('books');
  const books = storedBooks ? JSON.parse(storedBooks) : [];

  const [showPurchaseCard, setShowPurchaseCard] = useState(false); 

  const book = books.find(book => book.rank === parseInt(rank));

  if (!book) {
    return (
      <div className="container mx-auto px-4 py-8">
        <p className="text-center text-red-500 text-xl">Book not found!</p>
      </div>
    );
  }

  const handleBuyNowClick = () => {
    setShowPurchaseCard(true);
  };

  return (
    <>
      <div className="container mx-auto mt-11">
        <div className="max-w-lg rounded overflow-hidden shadow-lg mx-auto bg-white hover:shadow-2xl transition-shadow duration-300">
          <img className="w-full h-[54vh] object-cover" src={book.book_image} alt={book.title} />
          <div className="px-6 py-4">
            <div className="font-bold text-2xl mb-2">{book.title}</div>
            <p className="text-gray-700 text-base mb-2"><strong>Author:</strong> {book.author}</p>
            <p className="text-gray-700 text-base mb-2"><strong>Description:</strong> {book.description}</p>
          </div>
          <div className="px-6 py-4 flex justify-between items-center">
            <a href={book.amazon_product_url} target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-[#A2D8F4] hover:bg-gray-200 text-black font-bold py-2 px-4 rounded"
              onClick={handleBuyNowClick} 
            >
              Buy Now
            </a>
          </div>
        </div>
      </div>
      
      {showPurchaseCard && (
        <div className="max-w-lg rounded overflow-hidden shadow-lg mx-auto bg-white mt-8">
          <div className="px-6 py-4">
            <h2 className="text-xl font-bold mb-2">Purchase Details</h2>
            <p><strong>Title:</strong> {book.title}</p>
            <p><strong>Author:</strong> {book.author}</p>
            <p><strong>Description:</strong> {book.description}</p>
          </div>
        </div>
      )}
<br></br>
<br></br>
 <Footer/>
    </>
  );
}

export default BookDetail;
