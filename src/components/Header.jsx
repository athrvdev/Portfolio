import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <>
    <header className="header">
      <motion.h1
        className="header-title"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 120 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        
      >
        Atharva Kulkarni
      </motion.h1>
    </header>
    
    </>
  );
};

export default Header;
