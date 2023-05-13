import React from 'react';
import { FiSearch } from 'react-icons/fi';

const Search = () => {
  return (
    <header className='flex flex-col items-center w-fit m-auto px-2 py-5 h-full '>
      <div className='flex justify-center items-center w-full h-full gap-1 text-xs md:text-sm'>
        <input
          type='text'
          placeholder='Search...'
          className='bg-zinc-300 rounded-lg p-2 focus:outline-blue-600 hidden sm:flex'
        />
        <button className='bg-zinc-300 p-2 rounded-lg hover:scale-110 transition duration-200 hover:bg-zinc-500 hover:text-white'>
          <FiSearch />
        </button>
      </div>
    </header>
  );
};

export default Search;
