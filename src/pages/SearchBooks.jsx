import React, { useState } from 'react';
import axios from 'axios';
import BookCard from '../component/BookCard';

function SearchBooks() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?api-key=8iWNtXLTJVFMobhUCEPkrXsOwMKwjrrq`
      );

      const books = response.data.results.books;
      const filteredBooks = books.filter((book) =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase())
      );

      setSearchResults(filteredBooks);
    } catch (error) {
      console.error('Error searching books:', error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-center mb-4">
        <input type="text"
          className="px-4 py-2 rounded-lg border border-gray-300 mr-2 flex-shrink-0 focus:outline-none focus:border-[#A2D8F4]"
          placeholder="Enter book title"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          className="px-4 py-2 bg-[#A2D8F4] text-white rounded-lg hover:bg-gray-200 transition duration-300"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {searchResults.map((book) => (
          <BookCard key={book.title} book={book} />
        ))}
      </div>
    </div>
  );
}

export default SearchBooks;
