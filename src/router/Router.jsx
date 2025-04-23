import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import SignUp from '../pages/SignUp';
import Home from '../pages/Home';
import Login from '../pages/Login';
import BookDetail from '../pages/BookDetail';
import Favorites from '../pages/Favorites';
import ReadBooks from '../pages/ReadBooks';
import Navbar from '../component/Navbar';


function AppRouter() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <MainContent isLoggedIn={isLoggedIn} handleLogout={handleLogout} setIsLoggedIn={setIsLoggedIn} />
    </Router>
  );
}

function MainContent({ isLoggedIn, handleLogout, setIsLoggedIn }) {
  const location = useLocation();

  const hideNavbarPaths = ['/login', '/signup'];

  return (
    <>
      {!hideNavbarPaths.includes(location.pathname) && (
        <Navbar isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/book/:rank" element={<BookDetail />} />

        {isLoggedIn && (
          <>
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/read-books" element={<ReadBooks />} />
          </>
        )}
      </Routes>
    </>
  );
}

export default AppRouter;
