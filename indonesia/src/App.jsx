import React, { useState } from "react";


const Main = () => {
  return (
    <main className="flex-1">
      <div className="ssbg min-h-screen bg-cover bg-center flex ">
     
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-center gap-24 flex-col md:flex-row ">

             <img src="/second-section-img.png" alt="Video Thumbnail" className=" h-1/3" />

            <div className="max-w-[400px] max-h-[300px] space-y-6 ">

           
             
             <div className="flex flex-col gap-5">
              <h1 className="text-white text-4xl sm:text-4xl md:text-4xl font-bold leading-tight">
                The walkways of Indonesia spellbind
              </h1>
              
            
              <p className="text-white text-base sm:text-lg md:text-lg font-light leading-relaxed tracking-wide max-w-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Fusce commodo magna et libero mollis rhoncus.
              </p>
              
        
              <div className="pt-2">
                <button className="bg-red-600 hover:bg-red-700 text-white font-bold 
                  py-3 sm:py-4 px-6 sm:px-8 rounded-full 
                  text-base sm:text-lg transition-colors duration-200">
                  Learn More
                </button>
              </div>
              </div>
            </div>
          </div>
      </div>



      <div className="tsbg min-h-screen bg-cover bg-center flex ">
     
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-center gap-24 flex-col md:flex-row-reverse ">

             <img src="/third-section-img.png" alt="Video Thumbnail" className=" h-1/3" />

            <div className="max-w-[400px] max-h-[300px] space-y-6 ">

           
             
             <div className="flex flex-col gap-5">
              <h1 className="text-white text-4xl sm:text-4xl md:text-4xl font-bold leading-tight">
              Perfect beaches exude relaxation and fun
              </h1>
              
            
              <p className="text-white text-base sm:text-lg md:text-lg font-light leading-relaxed tracking-wide max-w-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Fusce commodo magna et libero mollis rhoncus.
              </p>
              
        
              <div className="pt-2">
                <button className="bg-red-600 hover:bg-red-700 text-white font-bold 
                  py-3 sm:py-4 px-6 sm:px-8 rounded-full 
                  text-base sm:text-lg transition-colors duration-200">
                  Learn More
                </button>
              </div>
              </div>
            </div>
          </div>
      </div>

      <div className="fsbg min-h-screen bg-cover bg-center flex ">

        </div>

    </main>
  );
};



const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleMenuClick = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="relative min-h-screen flex flex-col bg-cover bg-center" style={{ backgroundImage: "url('/header-bg.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
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

        <div className="flex flex-col items-start justify-center text-left mt-32 sm:mt-48 lg:mt-64 pl-12 space-y-6">
          <h1 className="text-white text-5xl sm:text-6xl lg:text-7xl font-extrabold uppercase leading-tight">
            Explore <br /> Indonesia
          </h1>
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-full text-lg sm:text-xl">
            Start travelling
          </button>
        </div>

        <div className="absolute bottom-0 md:bottom-0 md:right-0 flex flex-col md:flex-row-reverse items-center md:items-end space-y-4 md:space-y-0 md:space-x-6 w-full max-w-6xl mx-auto md:mx-0 ">
          <div className="relative w-48 h-32 sm:w-64 sm:h-56 lg:w-80 lg:h-56 overflow-hidden shadow-lg">
            <img src="/header-player-img.png" alt="Video Thumbnail" className="w-full h-full object-cover" />
            <button className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-4xl">
              ▶
            </button>
          </div>

          <div className="bg-black bg-opacity-70 flex flex-col md:flex-row md:justify-between space-y-4 md:space-y-0 md:space-x-6 py-6 px-4 lg:px-8 shadow-lg w-full md:w-auto">
            {[1, 2, 3].map((num) => (
              <div key={num} className="text-white text-center space-y-2 flex flex-col items-center w-full md:w-36 lg:w-48">
                <span className="text-red-500 font-bold text-xl md:text-2xl">0{num}</span>
                <h2 className="font-bold text-base md:text-lg lg:text-xl">Title here</h2>
                <p className="text-xs md:text-sm lg:text-base">Lorem ipsum dolor sit amet et amet ist ame.</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Main />

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