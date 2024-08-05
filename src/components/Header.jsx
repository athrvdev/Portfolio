import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <header className="relative flex items-center justify-center h-screen overflow-hidden header header-container">
      <motion.div
        className="p-10 bg-white shadow-lg blur-card bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl"
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
          Atharva
        </motion.h1>
        <motion.h1
          className="mt-4 text-5xl font-bold text-center text-white header-title md:text-8xl lg:text-9xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Kulkarni
        </motion.h1>
      </motion.div>
    </header>
  );
};

export default Header;
