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
    <div className="flex flex-col items-center justify-center m-3">
      <SearchForm onSearch={handleSearch} />
      <MoviesList searchParams={searchParams} />
    </div>
  );
}

export default App;

