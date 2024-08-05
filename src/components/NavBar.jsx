import React from 'react';
import { motion } from 'framer-motion';
import { MdDownload } from 'react-icons/md';
import '../assets/Resume.pdf';


const NavBar = () => {

  function triggerDownload(){
    const fileName = "Atharva_Kulkarni_Resume.pdf";
    const fileUrl = "../assets/Resume.pdf";

    const a = document.createElement('a');
    a.href = fileUrl;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  return (
    <div className='sticky top-0 z-40'>
    <nav className="navbar duration-300 backdrop-filter backdrop-blur-lg backdrop-saturate-200 transition-shadow bg-opacity-90 items-center w-full flex justify-center gap-3 lg:gap-9 md:gap-6 sm:gap-3 bg-wash dark:bg-wash-dark dark:bg-opacity-95 px-1.5 lg:pr-24 lg:pl-24 lg:pe-5 lg:ps-4 z-40 h-12 ">
      
        <a href="#projects">Projects</a>
        <a target='blank' href="https://linkedin.com/in/atharva-kulkarni-cs06">Ln</a>
        <a target='blank' href="https://leetcode.com/u/AtharvaKulkarni612">LT</a>
        <a target='blank'  href="https://github.com/athrvdev">GitHub</a>
        <a href="../assets/Resume.pdf" className='flex items-center' download={"../assets/Resume.pdf"}>Resume <MdDownload /></a>
      
    </nav>
    </div>
  );
};

export default NavBar;
