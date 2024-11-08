import React from 'react';
import { FaRegHeart } from "react-icons/fa";
import BlurFade from "./BlurFade"
import { IoIosMail } from "react-icons/io";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si"

const Footer = () => (
  <footer className="fixed text-sm bottom-0 mt-10 p-1 text-center flex justify-between border-t-2 dark:border-slate-700 border-slate-300 text-zinc-600 dark:text-zinc-300 backdrop-filter backdrop-blur-lg bg-glass dark:bg-glass-dark w-full z-50">
    <p className='text-left text-[12px] tracking-wider w-full gap-1 justify-center'> &copy; {new Date().getFullYear()} Atharva Kulkarni
    </p>
    <BlurFade >
        <div className="flex gap-2 fixed -bottom-2 right-4 text-md">
          <BlurFade   delay={0.2}>
            <a href="https://github.com/athrvdev" className="text-gray-700 hover:text-indigo-500 dark:text-gray-300"><FaGithub /></a>
          </BlurFade>
          <BlurFade    delay={0.4}>
            <a href="https://linkedin.com/in/atharva-kulkarni-cs06" className="text-gray-700 hover:text-indigo-500 dark:text-gray-300">
            <FaLinkedinIn /></a>
            </BlurFade>
          <BlurFade    delay={0.6}>
            <a href="https://leetcode.com/u/AtharvaKulkarni612/" className="text-gray-700 hover:text-indigo-500 dark:text-gray-300"><SiLeetcode /></a>
          </BlurFade>
          <BlurFade    delay={0.8}>
           <a href="https://instagram.com/sarcastharv/" className="text-gray-700 hover:text-indigo-500 dark:text-gray-300"><FaInstagram /></a>
          </BlurFade>
          <BlurFade    delay={1}>
            <a href="mailto:atharvamk6@gmail.com" className="text-[16px]  text-gray-700 hover:text-indigo-500 dark:text-gray-300 z-20"><IoIosMail /></a>
          </BlurFade>
        </div>
      </BlurFade>
  </footer>
);

export default Footer;
