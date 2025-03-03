import React, { useState } from 'react';
import SearchForm from './components/SearchForm';
import MoviesList from './api/Fech';

function App() {
  const [searchParams, setSearchParams] = useState({
    param: '',
    year: '',
    type: ''
  });

  const handleSearch = (paramsEntry) => {
    setSearchParams(paramsEntry);
  };

  return (
  <>
    <div className="flex justify-start p-4">
      <button
        className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl p-2 text-amber-100 cursor-pointer"
        onClick={() => window.location.href = 'https://javyprogrameitor.github.io/Portfolio/'} >
        Portfolio
      </button>
    </div>
    <div className="flex flex-col items-center justify-center m-3">
      <SearchForm onSearch={handleSearch} />
      <MoviesList searchParams={searchParams} />
    </div>
  </>
  );
}

export default App;

