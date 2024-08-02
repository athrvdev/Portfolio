import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <header className="header">
      <motion.h1
        className="header-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Atharva Milind Kulkarni
      </motion.h1>
    </header>
  );
};

export default Header;
