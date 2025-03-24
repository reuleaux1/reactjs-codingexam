import React, { useState } from 'react';
import BookList from './components/BookList.jsx';
import BookViewer from './components/BookViewer.jsx';
import bezelLogo from './assets/redcorebezellogo.png';
import './index.css';

const books = [
  { title: 'Book 1', file: 'sample_book 1.txt' },
  { title: 'Book 2', file: 'sample_book 2.txt' },
];

const App = () => {
  const [selectedBook, setSelectedBook] = useState(null);

  return (
    <div style={{ backgroundColor: '#212121' }} className="min-h-screen flex items-center justify-center p-4">
      <div className="bg-black rounded-[2rem] shadow-2xl border-[35px] border-black w-full max-w-sm sm:max-w-md md:max-w-lg h-[85vh] flex flex-col overflow-hidden">
        
        <div className="bg-gray-800 flex-1 overflow-hidden">  
          {selectedBook ? (
            <BookViewer file={selectedBook} onBack={() => setSelectedBook(null)} />
          ) : (
            <BookList books={books} onSelect={setSelectedBook} />
          )}
        </div>

        <div className="bg-black h-12 flex items-center justify-center pt-9">
          <img
            src={bezelLogo}
            alt="Redcore Logo"
            className="h-6 object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default App;
