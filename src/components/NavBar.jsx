import React from 'react';
import { MdDownload } from 'react-icons/md';
import '../assets/Resume.pdf';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { FaDiagramProject } from 'react-icons/fa6';
import { TbBrandLeetcode } from 'react-icons/tb';
import { CiMail } from 'react-icons/ci';


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
      
        <a href="#projects"><FaDiagramProject /></a>
        <a href="https://linkedin.com/in/atharva-kulkarni-cs06" title="LinkedIn : Atharva Kulkarni"
        className="social-link"><FaLinkedin /></a>
        <a href="https://leetcode.com/u/AtharvaKulkarni612" title="Leetcode : AtharvaK612" className="social-link"><TbBrandLeetcode /></a>
        <a href="https://github.com/athrvdev" title="Github : athrvdev" className="social-link"><FaGithub /></a>
        <a href="https://instagram.com/sarcastharv"
        title="Instagram : sarcastharv"
        className="social-link"><FaInstagram /></a>
        <a href="mailto:atharvamk6@gmail.com"><CiMail /> </a>
        <a href="#header" target='blank' onClick={triggerDownload} 
        title="Get my CV"
        className='flex items-center font-normal cursor-pointer' >CV <MdDownload /></a>
      
    </nav>
    </div>
  );
};

export default NavBar;
