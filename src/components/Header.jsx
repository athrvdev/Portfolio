import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <>
    <header className="header">
    <motion.h1
        className="blur-card-motion"
        initial={{  z : 20 }}
        animate={{  z : 15 }}
        transition={{ duration: 1 }}
        whileTap={{ scale: 0.95 }} 
      >
      <div children className='blur-card'></div>
      </motion.h1>
      <motion.h1
        className="header-title"
        initial={{ opacity: 0, x: -100, z:10 }}
        animate={{ opacity: 1, x: 0 , z : 20}}
        transition={{ duration: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }} 
      >
        Atharva
      </motion.h1>
      <motion.h1
        className="header-title"
        initial={{ opacity: 0, x: 100 , z: 10}}
        animate={{ opacity: 1, x: 0 , z : 20}}
        transition={{ duration: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }} 
      >
        Kulkarni
      </motion.h1>
    </header>
    
    </>
  );
};

export default Header;
