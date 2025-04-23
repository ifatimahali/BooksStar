import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import loImage from '../assets/bostar.png';
import bookmarkIcon from '../assets/favorite.png';
import readIcon from '../assets/readIcon.png';

function Navbar({ isLoggedIn, handleLogout }) {
  const [showDropdown, setShowDropdown] = useState(false); 

  const username = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).username : '';

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLogoutClick = () => {
    handleLogout();
    setShowDropdown(false); 
  };

  return (
    <div>
      <nav className="bg-[#DAEEF9] text-white py-3 px-4 h-[14.5vh]  flex items-center justify-between">
        <Link className="font-bold text-xl tracking-tight" to="/">
          <img src={loImage} className="h-[18vh] w-auto mr-2" alt="Logo" /> 
        </Link>
        {isLoggedIn ? (
          <div className="flex items-center">
            <Link
              className="text-black text-m px-4 py-2 leading-none rounded-full hover:bg-gray-200 relative"
              to="/favorites"
            >
              <img src={bookmarkIcon} className="h-8 w-auto" alt="Favorites" />
            </Link>
            <span className="mx-2"></span>
            <Link
              className="text-black text-m px-4 py-2 leading-none rounded-full hover:bg-gray-200 relative"
              to="/read-books"
            >
              <img src={readIcon} className="h-8 w-auto" alt="Read Books" />
            </Link>
            <span className="mx-2"></span>
            <div className="relative">
              <button
                className="text-black text-m px-4 py-2 leading-none rounded-full hover:bg-gray-200 bg-white relative"
                onClick={toggleDropdown}
              >
                {username}
                <svg
                  className="w-5  h-5 ml-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 12a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                  <path
                    fillRule="evenodd"
                    d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm8-6a6 6 0 00-6 6c0 3.314 2.686 6 6 6s6-2.686 6-6a6 6 0 00-6-6z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {showDropdown && (
                <ul className="absolute text-gray-700 bg-white shadow-lg rounded mt-1 w-32 right-0">
                  <li>
                    <button
                      className="w-full px-4 py-2 text-sm text-left hover:bg-gray-200"
                      onClick={handleLogoutClick}
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              )}
            </div>
          </div>
        ) : (
          <div className="flex items-center">
            <Link
              className="text-black text-m font-bold px-8 py-6 leading-none rounded-full hover:bg-gray-200 bg-white"
              to="/signup"
            >
              Sign Up
            </Link>
            <span className="mx-2"></span>
            <Link
              className="text-black text-m px-10 py-6 font-bold leading-none rounded-full hover:bg-gray-200 border bg-white"
              to="/login"
            >
              Login
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
