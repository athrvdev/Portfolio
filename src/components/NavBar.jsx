import React from 'react';
import { motion } from 'framer-motion';
import { MdDownload } from 'react-icons/md';


const NavBar = () => {
  return (
    <nav className="navbar">
      <motion.ul
        className="navbar-list"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <li className="navbar-item"><a href="#portfolio-summary">Summary</a></li>
        <li className="navbar-item"><a href="#projects">Projects</a></li>
        <li className="navbar-item"><a href="#skills">Skills</a></li>
        <li className="navbar-item"><a href="#experience">Experience</a></li>
        <li className="navbar-item"><a href="#contact">Contact</a></li>
        <li className="navbar-item"><button className='flex items-center' >Resume <MdDownload /></button></li>
      </motion.ul>
    </nav>
  );
};

export default NavBar;
