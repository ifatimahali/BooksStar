import React from 'react';
import { useNavigate } from 'react-router-dom';
import img from '../assets/header.png';

function Header() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/signup');
  };

  return (
    <div className="h-auto md:h-[80vh] flex flex-col md:flex-row items-center justify-between rounded-lg bg-gradient-to-br from-white to-[#f0f8ff] shadow-xl overflow-hidden">
      {/* Text Section */}
      <div className="w-full md:w-[60%] px-6 md:px-12 py-10 md:py-0 flex flex-col justify-center items-start text-left">
        <h1 className="text-black font-extrabold text-3xl md:text-5xl leading-tight mb-4 drop-shadow-sm">
          Here Is Star Writings!
        </h1>
        <p className="text-gray-700 text-base md:text-lg font-medium mb-6 leading-relaxed">
          Welcome to Star Writings, your favorite destination for book and reading lovers! We offer you a comprehensive digital library that includes a wide range of books in various fields and genres. Whether you are looking for classic novels, modern books, Arabic literature, or scientific books, Star Writings is the perfect place for you.
        </p>
        <button
          className="w-40 h-12 bg-[#DAEEF9] text-black font-semibold rounded-lg shadow-md hover:bg-[#0284c7] transition duration-300"
          onClick={handleGetStarted}
        >
          Get Started!
        </button>
      </div>

      {/* Image Section */}
      <div
        className="w-full md:w-[40%] h-64 md:h-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${img})`,
        }}
      ></div>
    </div>
  );
}

export default Header;
