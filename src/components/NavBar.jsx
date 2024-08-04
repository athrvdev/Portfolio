import React from 'react';
import { motion } from 'framer-motion';
import { MdDownload } from 'react-icons/md';
import '../assets/Resume.pdf';


const NavBar = () => {
  return (
    <nav className="navbar">
      <motion.ul
        className="navbar-list"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <li className="navbar-item"><a href="#projects">Projects</a></li>
        <li className="navbar-item"><a href="https://linkedin.com/in/atharva-kulkarni-cs06">Ln</a></li>
        <li className="navbar-item"><a href="https://leetcode.com/u/AtharvaKulkarni612">LT</a></li>
        <li className="navbar-item"><a href="https://github.com/athrvdev">GitHUb</a></li>
        <li className="navbar-item"><button 
        // onClick={() => window.open(Resume)}  
        // download={Resume} fileName="Resume"
        className='flex items-center' >Resume <MdDownload /></button></li>
      </motion.ul>
    </nav>
  );
};

export default NavBar;
