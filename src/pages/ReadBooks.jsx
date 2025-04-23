import React, { useState, useEffect } from 'react';
import BookCard from '../component/BookCard';

const ReadBooks = ({ isLoggedIn }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const storedBooks = localStorage.getItem('books');
    const books = storedBooks ? JSON.parse(storedBooks) : [];
    setBooks(books.filter(book => book.read));
  }, []);

  const handleAddToFavorites = (rank) => {
    const updatedBooks = books.map(book => {
      if (book.rank === rank) {
        return { ...book, favorite: !book.favorite };
      }
      return book;
    });

    localStorage.setItem('books', JSON.stringify(updatedBooks));
    setBooks(updatedBooks);
  };

  const handleMarkAsRead = (rank) => {
    const updatedBooks = books.map(book => {
      if (book.rank === rank) {
        return { ...book, read: !book.read };
      }
      return book;
    });

    localStorage.setItem('books', JSON.stringify(updatedBooks));
    setBooks(updatedBooks);
  };

  return (
    <>
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Read Books</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {books.map((book) => (
          <BookCard
            key={book.rank}
            book={book}
            onAddToFavorites={handleAddToFavorites}
            onMarkAsRead={handleMarkAsRead}
            isLoggedIn={isLoggedIn}
          />
        ))}
      </div>

    </div>

    </>
  );
};

export default ReadBooks;
