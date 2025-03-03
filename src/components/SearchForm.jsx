import React, { useState } from 'react';

const SearchForm = ({ onSearch }) => {
  const [param, setParam] = useState('');
  const [year, setYear] = useState('');
  const [type, setType] = useState('all');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ param, year, type });
  };

  return (
    <>
    <div className="bg-gradient-to-r from-blue-500 to-purple-500  p-4 shadow-2xl rounded-xl m-4">
    <h1 className="text-center text-2xl font-extrabold text-indigo-900 mb-4">Movie and game search engine</h1>
    <form onSubmit={handleSubmit} className="flex flex-col md:flex-row items-center">
      <input
        type="text"
        placeholder="Enter your search"
        value={param}
        onChange={(e) => setParam(e.target.value)}
        className="p-2 border rounded m-2 text-neutral-100"
      />
      <input
        type="text"
        placeholder="Year (optional)"
        value={year}
        onChange={(e) => setYear(e.target.value)}
        className="p-2 border rounded m-2 text-neutral-100"
      />
      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="p-2 border rounded m-2 text-neutral-100"
      >
        <option value="" className='bg-blue-800'>Select on type</option>
        <option value="all" className='bg-blue-400'>ALL</option>
        <option value="movie" className='bg-blue-400'>Movie</option>
        <option value="game" className='bg-blue-400'>Game</option>
        <option value="series" className='bg-blue-400'>Series</option>
      </select>
      <button type="submit" className="p-2 bg-blue-500 text-white rounded m-2">
        Buscar
      </button>
    </form>
    </div>
    </>
  );
};

export default SearchForm;
