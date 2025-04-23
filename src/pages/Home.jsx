import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../component/Header';
import BookCard from '../component/BookCard';
import SearchBar from '../component/SearchBar';
import Footer from '../component/Footer'


const Home = ({ isLoggedIn }) => {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await axios.get('https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=RaV6br0tL8TV0wg6vFXCIGOdxSZEyEc3');
      console.log('Fetched books:', response.data.results.books);
      setBooks(response.data.results.books);
      localStorage.setItem('books', JSON.stringify(response.data.results.books));
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  const addToFavorites = (rank) => {
    const updatedBooks = books.map(book =>
      book.rank === rank ? { ...book, favorite: !book.favorite } : book
    );
    setBooks(updatedBooks);
    localStorage.setItem('books', JSON.stringify(updatedBooks));
  };

  const markAsRead = (rank) => {
    const updatedBooks = books.map(book =>
      book.rank === rank ? { ...book, read: !book.read } : book
    );
    setBooks(updatedBooks);
    localStorage.setItem('books', JSON.stringify(updatedBooks));
  };

  return (
    <>
    <div>
    <Header />
      <br></br>
      <br></br>
      <div className='bg-gray-100  mt-10'>
      <div className='p-12'>
    <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
    </div>
      <div className="container mx-auto w-[90vw] mt-8  ">

      
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-3xl font-bold flex-grow">All Books</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 ">
          {books
            .filter(book => book.title.toLowerCase().includes(searchTerm.toLowerCase()))
            .map((book) => (
              <BookCard
                key={book.rank}
                book={book}
                onAddToFavorites={() => addToFavorites(book.rank)}
                onMarkAsRead={() => markAsRead(book.rank)}
                isLoggedIn={isLoggedIn}
              />
              
            ))}
        </div>
        <br></br>
        <br></br>
      </div>
      </div>
      
      <Footer/>
    </div>
     
    </>
  );
};

export default Home;
