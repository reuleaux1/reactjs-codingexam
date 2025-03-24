import React from 'react';
import redcoreHomeLogo from '../assets/redcorehomelogo.png';

const BookList = ({ books, onSelect }) => {
  return (
    <div className="h-full w-full flex flex-col overflow-hidden bg-gradient-to-b from-[#fdf6e3] to-[#f5f0db] text-black font-serif">
      
   
      <div className="flex justify-center items-center py-4 border-b border-gray-300 shadow-sm bg-[#fdf6e3]">
        <img
          src={redcoreHomeLogo}
          alt="Redcore Home Logo"
          className="h-9 object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
        />
      </div>


      <div className="flex-1 p-6 overflow-y-auto space-y-6 scrollbar-thin scrollbar-thumb-[#b8a07e] scrollbar-track-[#f0e8d3]">
        
        <h2 className="text-3xl font-extrabold tracking-widest text-center uppercase text-[#5c4033] bg-[#fdf6e3] border-2 border-[#d8c3a5] rounded-md px-6 py-3 shadow-inner w-fit mx-auto mb-4">
          Available Books
        </h2>

        <div className="flex justify-center -mt-4 mb-4">
          <span className="w-24 h-[2px] bg-[#d8c3a5] rounded-full"></span>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {books.map((book, index) => (
          <li key={index} className="flex justify-center">
          <div className="relative w-64 h-36 perspective group">

            <div className="absolute w-full h-full bg-[#c8b08d] rounded-md shadow-inner z-0 flex">
              <div className="w-[4px] bg-[#493216] shadow-inner shadow-[#7a6249] rounded-l-md"></div>
            </div>

            <div className="absolute w-full h-full rounded-md px-6 py-4 z-10 flex items-center justify-center text-center text-[#ffffff] font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 pointer-events-none">
            <img
                  src={redcoreHomeLogo}
                  alt="Book Icon"
                  className="w-6 h-6 mr-2 object-contain"
                />
                <span>{book.title}</span>
            </div>

            <div className="absolute w-full h-full z-20">
              <div
                className="w-full h-full bg-[#fef3c7] border border-[#d8c3a5] rounded-md shadow-md origin-left transition-transform duration-700 ease-in-out group-hover:rotate-y-[-150deg]"
                style={{
                  transformStyle: 'preserve-3d',
                  backfaceVisibility: 'hidden',
                }}
              >
                <div className="flex items-center justify-center h-full px-6 text-center text-lg italic text-[#5c4033]">
                <img
                  src={redcoreHomeLogo}
                  alt="Book Icon"
                  className="w-6 h-6 mr-2 object-contain"
                />
                <span>{book.title}</span>
                </div>
              </div>
            </div>

            
            <div
              className="absolute w-full h-full z-30 cursor-pointer"
              onClick={() => onSelect(book.file)}
            ></div>
          </div>
          </li>

          ))}
        </ul>
      </div>
    </div>
  );
};

export default BookList;
