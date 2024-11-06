import React from 'react';
import { FaRegHeart } from "react-icons/fa";

const Footer = () => (
  <footer className="mt-10 p-4 text-center flex justify-between border-t-2 dark:border-slate-700 border-slate-300 text-zinc-500 dark:text-zinc-100 backdrop-filter backdrop-blur-lg bg-glass dark:bg-glass-dark w-full z-50">
    <p className='flex w-full gap-1 justify-center'>Made with<FaRegHeart className='mt-1' /> by &copy; {new Date().getFullYear()} Atharva Kulkarni</p>
  </footer>
);

export default Footer;
