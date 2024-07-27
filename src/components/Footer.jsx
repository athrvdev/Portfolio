import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer 
      className="p-10 bg-appleDarkGray text-appleGray text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <p className="text-center">&copy; 2024 Atharva Milind Kulkarni. All rights reserved.</p>
    </motion.footer>
  );
};

export default Footer;
