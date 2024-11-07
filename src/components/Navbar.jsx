import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaHome, FaProjectDiagram, FaFileDownload } from 'react-icons/fa';
import {FaPersonCircleExclamation} from 'react-icons/fa6'
import { FaAddressCard } from "react-icons/fa";
import { IoMdPerson } from 'react-icons/io';
import { GiHummingbird, GiOwl } from 'react-icons/gi';

const navVariant = {
  hidden: { x: 80, opacity: 0 },
  visible: (i) => ({
    x: 0,
    opacity: 1,
    transition: { 
      duration: 0.2,
      ease: 'easeIn',
      delay: i * 0.1  
    }
  }) 
};

const NavBar = ({type='horizontal', isDarkMode, toggleTheme }) => {
  return (
    <nav className={`flex flex-col items-center justify-between border-b-2 delay-1000 dark:border-slate-700 border-slate-300 text-zinc-500 dark:text-zinc-100 backdrop-filter backdrop-blur-lg bg-glass dark:bg-glass-dark fixed top-0 left-0 w-fit h-full z-40 py-60  border-r `}>
      {[
        { title: 'Home', to: '/', icon: <FaHome /> },
        { title: 'Projects/Work', to: '/projects', icon: <FaProjectDiagram /> },
        { title: 'About me', to: '/about', icon: <FaAddressCard /> },
        { title: 'Contact me', to: '/contact', icon: <IoMdPerson /> },
        { title: 'View my CV/Resume', to: '/resume', icon: <FaFileDownload /> }
      ].map((link, index) => (
        <motion.span
          key={link.title}
          custom={index}
          initial="hidden"
          animate="visible"
          variants={navVariant}
        >
          <Link
            title={link.title}
            to={link.to}
            className="block py-2 px-4 rounded transition-all duration-150 delay-200 hover:bg-gray-300 dark:hover:bg-gray-700"
          >
            {link.icon}
          </Link>
        </motion.span>
      ))}

      <motion.span
        custom={5}
        initial="hidden"
        animate="visible"
        variants={navVariant}
      >
        <button
          className="block py-2 text-lg px-4 rounded hover:bg-gray-300 dark:hover:bg-gray-700"
          onClick={toggleTheme}
        >
          {isDarkMode ? <GiHummingbird /> : <GiOwl />}
        </button>
      </motion.span>
    </nav>
  );
};

export default NavBar;
