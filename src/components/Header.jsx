import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <header className="relative flex items-center justify-center h-screen overflow-hidden header header-container">
      <motion.div
        className="p-10 transition-shadow duration-300 bg-white rounded-md shadow-lg blur-card bg-opacity-10 backdrop-filter backdrop-blur-lg backdrop-saturate-200"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-5xl font-bold text-center text-white header-title md:text-8xl lg:text-9xl"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          ATHARVA <br></br> KULKARNI
         
        </motion.h1>

        <motion.div className='w-full text-lg header-title-roles roles animated-roll'>
            <h3>FRONT END WEB DEV</h3>
            <h3>JAVA FULL STACK</h3>
            <h3>PHOTOGRAPHER</h3>
            <h3>FREELANCE DEVELOPER</h3>
        </motion.div>
        
      </motion.div>
      
    </header>
  );
};

export default Header;
