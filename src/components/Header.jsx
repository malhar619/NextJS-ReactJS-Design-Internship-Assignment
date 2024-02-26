import React from 'react';
import Search from '../icon/search';

function Header() {
  return (
    <header className="bg-gray-900 text-white py-2 md:py-2">
      <div className="container mx-auto flex flex-col md:flex-row justify-center items-center">

        <div className="flex items-center bg-white rounded-md px-3 py-1 md:py-2 mr-8">
          <Search />
          <input 
            type="text" 
            placeholder="Search" 
            className="w-full outline-none placeholder-gray-500 ml-2"
          />
        </div>

        <nav className="flex items-center space-x-6 mt-2 md:mt-0">
          <ul className="flex space-x-6">
            <li><button className="text-gray-300 hover:text-white">Categories</button></li>
            <li><button className="text-gray-300 hover:text-white">Website Builders</button></li>
            <li><button className="text-gray-300 hover:text-white">Today's Deals</button></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
