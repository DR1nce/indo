import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleMenuClick = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="relative min-h-screen flex flex-col bg-cover bg-center" style={{ backgroundImage: "url('/header-bg.jpg')" }}>
      {/* Шапка */}
      <header className="absolute top-0 left-0 w-full p-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img src="/header-flower.svg" alt="Logo" className="w-10 sm:w-12" />
          <h1 className="text-white font-bold uppercase text-xl">Explore Indonesia</h1>
        </div>
        <nav className="hidden lg:flex space-x-4 text-white font-bold uppercase">
          <a href="#" className="hover:text-gray-200">Destinations</a>
          <span className="text-white">|</span>
          <a href="#" className="hover:text-gray-200">Experiences</a>
          <span className="text-white">|</span>
          <a href="#" className="hover:text-gray-200">About</a>
          <span className="text-white">|</span>
          <a href="#" className="hover:text-gray-200">Gallery</a>
        </nav>
        <button className="lg:hidden" onClick={handleMenuClick}>
          <img src="/menu.svg" alt="Menu" className="w-8 h-8" />
        </button>
      </header>

      {/* Центральный текст и кнопка */}
      <div className="flex flex-col items-start justify-center text-left mt-32 sm:mt-48 lg:mt-64 pl-12 space-y-6">
        <h1 className="text-white text-5xl sm:text-6xl lg:text-7xl font-extrabold uppercase leading-tight">
          Explore <br /> Indonesia
        </h1>
        <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-full text-lg sm:text-xl">
          Start travelling
        </button>
      </div>

      {/* Видео справа с наложением */}
      <div className="absolute bottom-0 right-0 w-48 h-32 sm:w-64 sm:h-40 lg:w-80 lg:h-56 overflow-hidden ">
        <img src="/header-player-img.png" alt="Video Thumbnail" className="w-full h-full object-cover" />
        <button className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-4xl">
          ▶
        </button>
      </div>

      {/* Информационный блок слева от видео */}
      <div className="absolute bottom-0 right-[20rem] w-full max-w-5xl bg-black bg-opacity-70 flex justify-between space-x-6 py-8 px-4 ">
        {[1, 2, 3].map((num) => (
          <div key={num} className="text-white text-center space-y-2 flex flex-col items-center w-36">
            <span className="text-red-500 font-bold text-2xl">0{num}</span>
            <h2 className="font-bold text-lg">Title here</h2>
            <p className="text-sm">Lorem ipsum dolor sit amet et amet ist ame.</p>
          </div>
        ))}
      </div>

      {/* Мобильное меню */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
          <div className="relative bg-white p-8 rounded-lg w-3/4 max-w-md text-center">
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 font-bold text-2xl"
              onClick={handleMenuClick}
            >
              &times;
            </button>
            <nav className="space-y-4 text-lg font-bold uppercase text-gray-800">
              <a href="#" className="hover:text-gray-600">Destinations</a>
              <div className="text-gray-400">|</div>
              <a href="#" className="hover:text-gray-600">Experiences</a>
              <div className="text-gray-400">|</div>
              <a href="#" className="hover:text-gray-600">About</a>
              <div className="text-gray-400">|</div>
              <a href="#" className="hover:text-gray-600">Gallery</a>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
