import React from 'react';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 z-10 w-full p-4 transition-colors duration-500 shadow-md bg-lightBg dark:bg-darkBg text-lightText dark:text-darkText">
      <div className="container flex items-center justify-between mx-auto">
        <div className="text-2xl font-bold">
          Atharva Milind Kulkarni
        </div>
        <div className='flex justify-end'>
          <a href="#portfolio" className="mx-2 hover:underline">Portfolio</a>
          <a href="#work" className="mx-2 hover:underline">Work Experience</a>
          <a href="#projects" className="mx-2 hover:underline">Projects</a>
          <a href="#contact" className="mx-2 hover:underline">Contact</a>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
