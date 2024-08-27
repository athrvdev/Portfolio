import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className='duration-300 backdrop-filter backdrop-blur-lg backdrop-saturate-200 fixed top-0 transition-shadow bg-opacity-90 items-center w-full flex justify-between bg-gray-800 h-14 dark:bg-gray-900 dark:bg-opacity-95 px-4 z-40 shadow-lg'>
      <span className='ml-6 text-gray-300 text-xl font-geist'>
        <Link to="/" className='text-gray-400 hover:text-gray-100 transition duration-200' >Atharva Kulkarni</Link>
      </span>
      <div className='flex space-x-8 mr-6'>
        <Link to='/about' className='text-gray-400 hover:text-gray-100 transition duration-200'>
          About
        </Link>
        <Link to='/projects' className='text-gray-400 hover:text-gray-100 transition duration-200'>
          Projects
        </Link>
        <Link to='/skills' className='text-gray-400 hover:text-gray-100 transition duration-200'>
          Skills
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
