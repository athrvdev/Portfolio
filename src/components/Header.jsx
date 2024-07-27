import React from 'react';
import { motion } from 'framer-motion';
import headerBg from "../assets/headerBg.jpg"
// bg-appleGray dark:bg-appleDarkGray
const Header = () => {
  return (<>
  <div className='w-full fixed top-0 left-0 h-screen bg-cover bg-center -z-10' style={{ backgroundImage: `url(${headerBg})` }}></div>
    <header className=" w-full h-screen" >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative flex items-center justify-center h-full px-10" style={{
        fontSize:"6vh",
      }}>
        <motion.h1 
          className="text-6xl font-bold text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          Atharva <br></br> Milind <br></br> Kulkarni
        </motion.h1>
      </div>
    </header>
    </>
  );
};

export default Header;
