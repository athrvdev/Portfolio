import React from 'react'
import { motion } from 'framer-motion'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import Logo from '../assets/logo.png'

const Dock = ({navData, handleNavData}) => {
  return (
    // <div className='dock border-b-2 border-slate-700 dark:bolder flex justify-between text-zinc-500 dark:text-zinc-100 dark:bg-gray-600 bg-gray-200'>
    <div className='dock flex justify-between border-b-2 dark:border-slate-700 border-slate-300 text-zinc-500 dark:text-zinc-100 backdrop-filter backdrop-blur-lg bg-glass dark:bg-glass-dark fixed top-0 w-full z-50'>
        <div className="heading-name ml-2 z-10 ">
        <Link className='flex content-between w-full items-center' to="/">
        <img className='w-12 mr-2 logo-animation' src={Logo}></img>
        <span className='flex gap-1'>
        <motion.h1 
        initial={{y : 150, opacity : 0.6}}
        animate={{y : 0, opacity : 1}}
        transition={{ease : 'easeIn', duration : 0.4}}
         className='subtext-font-primary text-sm w-fit tracking-wide text-gray-400'>atharva</motion.h1>
        <motion.h1
        initial={{y : 170, opacity : 0.6}}
        animate={{y : 0, opacity : 1}}
        transition={{ease : 'easeOut', duration : 0.5}}
        className='subtext-font-primary text-sm w-fit tracking-wide text-indigo-500 -ml-[2px]'>{'<kulkarni>'}</motion.h1>
        </span>
        </Link>
      </div>

      <motion.div 
        initial={{y : 170, opacity : 0.6}}
        animate={{y : -3, opacity : 1}}
        transition={{ease : 'easeIn', duration : 0.5}}
        className='block w-8 p-4 pr-8 rounded transition-all duration-100'>
        <> {navData.isOpen ? <AiOutlineClose onClick={()=>{
          handleNavData({
            ...navData, isOpen : !navData.isOpen
          })}} /> : <AiOutlineMenu onClick={()=>{
            handleNavData({
              ...navData, isOpen : !navData.isOpen
            })}} />}
        </>
      </motion.div>

    </div>
  )
}

export default Dock