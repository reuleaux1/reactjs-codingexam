import React, { useEffect, useState } from 'react';

const BookViewer = ({ file, onBack }) => {
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch(`/${file}`)
      .then(res => res.text())
      .then(setContent)
      .catch(err => console.error('Error loading book:', err));
  }, [file]);

  return (
    <div className="relative h-full w-full bg-[#fdf6e3] text-black p-4 overflow-y-auto font-serif leading-relaxed tracking-wide">
    <button
      onClick={onBack}
      className="absolute top-4 left-4 bg-[#000000] text-white px-3 py-1 rounded-r-md shadow-md hover:bg-[#554134] transition-all duration-300 font-medium text-lg tracking-wide"
    >
      «
    </button>

      <h2 className="text-xl font-bold mb-4 text-center">Now Reading</h2>

      <p className="whitespace-pre-wrap">{content}</p>
    </div>
  );
};

export default BookViewer;
