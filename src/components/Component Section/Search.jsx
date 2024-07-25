import React from 'react';

const Search = ({ hintText }) => {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder={hintText}
        className="w-full py-2 px-10 flex border border-white rounded-md shadow-lg bg-white text-gray-800 placeholder-gray-400 focus:border-red-500 focus:ring-0"
      />
      <div className="absolute top-0 left-0 flex items-center pl-3 h-full pointer-events-none">
        <svg
          className="w-5 h-5 text-red-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-4.35-4.35M15.5 10.5a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0z"
          />
        </svg>
      </div>
    </div>
  );
};

export default Search;